import { upperFirst } from 'lodash-es';
import { cn } from 'tailwind-preset';

import { DFLink } from '@/components/DFLink';
import { SeverityScoreIcon } from '@/components/icons/common/SeverityScore';
import { getColorForCVSSScore, POSTURE_STATUS_COLORS } from '@/constants/charts';
import { PostureSeverityType } from '@/types/common';

export const SeverityBadge = ({
  severity,
  className,
}: {
  severity: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'flex items-center capitalize justify-center font-semibold leading-4 text-[11px] dark:text-text-text-inverse text-text-text-inverse py-0.5 max-w-[62px] min-w-[62px]',
        'dark:bg-df-gray-500 bg-df-gray-600 rounded-[5px]',
        {
          'bg-status-error': severity === 'critical',
          'bg-chart-orange text-text-input-value': severity === 'high',
          'bg-status-warning text-text-input-value': severity === 'medium',
          'bg-chart-yellow1 text-text-input-value': severity === 'low',
        },
        className,
      )}
    >
      {severity}
    </div>
  );
};

export const PostureStatusBadge = ({
  status,
  className,
}: {
  status: PostureSeverityType;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'flex items-center capitalize justify-center font-semibold leading-4 text-[11px] dark:text-text-text-inverse py-0.5 max-w-[62px] min-w-[62px]',
        'dark:bg-df-gray-500 rounded-[5px]',
        className,
      )}
      style={{
        backgroundColor: POSTURE_STATUS_COLORS[status],
      }}
    >
      {status}
    </div>
  );
};

export const CveCVSSScore = ({
  score,
  className,
  iconClassName,
}: {
  score?: number;
  className?: string;
  iconClassName?: string;
}) => {
  return (
    <div
      className={cn('flex gap-1 items-center text-p3', className)}
      style={{
        color: getColorForCVSSScore(score),
      }}
    >
      <div className={cn('h-[16px] w-[16px] shrink-0', iconClassName)}>
        <SeverityScoreIcon />
      </div>
      <div>{score?.toFixed(1) ?? '—'}</div>
    </div>
  );
};

export const SeverityLegend = ({
  severity,
  className,
  iconClassName,
  to,
}: {
  severity: string;
  className?: string;
  iconClassName?: string;
  to?: string;
}) => {
  return (
    <div
      className={cn(
        'flex items-center gap-2 flex-nowrap text-p7 text-text-text-and-icon capitalize',
        className,
      )}
    >
      <div
        className={cn(
          'rounded-full h-3 w-3 shrink-0 dark:bg-df-gray-500 bg-df-gray-600',
          {
            'bg-status-error': severity === 'critical',
            'bg-chart-orange text-text-input-value': severity === 'high',
            'bg-status-warning text-text-input-value': severity === 'medium',
            'bg-chart-yellow1 text-text-input-value': severity === 'low',
          },
          iconClassName,
        )}
      ></div>
      {to ? (
        <DFLink to={to} unstyled>
          {upperFirst(severity)}
        </DFLink>
      ) : (
        <> {upperFirst(severity)}</>
      )}
    </div>
  );
};
