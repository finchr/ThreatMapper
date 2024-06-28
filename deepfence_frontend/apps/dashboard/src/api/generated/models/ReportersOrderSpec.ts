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
 * @interface ReportersOrderSpec
 */
export interface ReportersOrderSpec {
    /**
     * 
     * @type {boolean}
     * @memberof ReportersOrderSpec
     */
    descending: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReportersOrderSpec
     */
    field_name: string;
    /**
     * 
     * @type {number}
     * @memberof ReportersOrderSpec
     */
    size?: number;
}

/**
 * Check if a given object implements the ReportersOrderSpec interface.
 */
export function instanceOfReportersOrderSpec(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "descending" in value;
    isInstance = isInstance && "field_name" in value;

    return isInstance;
}

export function ReportersOrderSpecFromJSON(json: any): ReportersOrderSpec {
    return ReportersOrderSpecFromJSONTyped(json, false);
}

export function ReportersOrderSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportersOrderSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'descending': json['descending'],
        'field_name': json['field_name'],
        'size': !exists(json, 'size') ? undefined : json['size'],
    };
}

export function ReportersOrderSpecToJSON(value?: ReportersOrderSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'descending': value.descending,
        'field_name': value.field_name,
        'size': value.size,
    };
}

