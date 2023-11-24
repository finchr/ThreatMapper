package scans

import (
	"context"
	"encoding/json"

	"github.com/deepfence/ThreatMapper/deepfence_server/model"
	reporters_scan "github.com/deepfence/ThreatMapper/deepfence_server/reporters/scan"
	"github.com/deepfence/ThreatMapper/deepfence_utils/directory"
	"github.com/deepfence/ThreatMapper/deepfence_utils/utils"

	"github.com/hibiken/asynq"
	"github.com/rs/zerolog/log"
)

func BulkDeleteScans(ctx context.Context, task *asynq.Task) error {

	var req model.BulkDeleteScansRequest
	err := json.Unmarshal(task.Payload(), &req)
	if err != nil {
		return err
	}

	scanType := utils.DetectedNodeScanType[req.ScanType]
	scansList, err := reporters_scan.GetScansList(ctx, scanType, nil, req.Filters, model.FetchWindow{})
	if err != nil {
		return err
	}

	for _, s := range scansList.ScansInfo {
		log.Info().Msgf("delete scan %s %s", req.ScanType, s.ScanId)
		err = reporters_scan.DeleteScan(ctx, scanType, s.ScanId, []string{})
		if err != nil {
			log.Error().Err(err).Msgf("failed to delete scan id %s", s.ScanId)
			continue
		}
	}

	if len(scansList.ScansInfo) > 0 && (scanType == utils.NEO4J_COMPLIANCE_SCAN || scanType == utils.NEO4J_CLOUD_COMPLIANCE_SCAN) {
		worker, err := directory.Worker(ctx)
		if err != nil {
			return err
		}
		return worker.Enqueue(utils.CachePostureProviders, []byte{}, utils.CritialTaskOpts()...)
	}

	return nil
}
