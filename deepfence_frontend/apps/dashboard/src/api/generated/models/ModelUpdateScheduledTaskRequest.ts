/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: v2.3.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelUpdateScheduledTaskRequest
 */
export interface ModelUpdateScheduledTaskRequest {
    /**
     * 
     * @type {boolean}
     * @memberof ModelUpdateScheduledTaskRequest
     */
    is_enabled: boolean;
}

/**
 * Check if a given object implements the ModelUpdateScheduledTaskRequest interface.
 */
export function instanceOfModelUpdateScheduledTaskRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "is_enabled" in value;

    return isInstance;
}

export function ModelUpdateScheduledTaskRequestFromJSON(json: any): ModelUpdateScheduledTaskRequest {
    return ModelUpdateScheduledTaskRequestFromJSONTyped(json, false);
}

export function ModelUpdateScheduledTaskRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelUpdateScheduledTaskRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'is_enabled': json['is_enabled'],
    };
}

export function ModelUpdateScheduledTaskRequestToJSON(value?: ModelUpdateScheduledTaskRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'is_enabled': value.is_enabled,
    };
}

