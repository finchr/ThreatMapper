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
import type { ModelBasicNode } from './ModelBasicNode';
import {
    ModelBasicNodeFromJSON,
    ModelBasicNodeFromJSONTyped,
    ModelBasicNodeToJSON,
} from './ModelBasicNode';

/**
 * 
 * @export
 * @interface ModelCompliance
 */
export interface ModelCompliance {
    /**
     * 
     * @type {string}
     * @memberof ModelCompliance
     */
    compliance_check_type: ModelComplianceComplianceCheckTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ModelCompliance
     */
    description: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelCompliance
     */
    masked: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelCompliance
     */
    node_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCompliance
     */
    node_type: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCompliance
     */
    remediation_ansible: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCompliance
     */
    remediation_puppet: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCompliance
     */
    remediation_script: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCompliance
     */
    resource: string;
    /**
     * 
     * @type {Array<ModelBasicNode>}
     * @memberof ModelCompliance
     */
    resources?: Array<ModelBasicNode> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelCompliance
     */
    rule_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCompliance
     */
    status: ModelComplianceStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ModelCompliance
     */
    test_category: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCompliance
     */
    test_desc: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCompliance
     */
    test_number: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCompliance
     */
    test_rationale: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCompliance
     */
    test_severity: string;
    /**
     * 
     * @type {number}
     * @memberof ModelCompliance
     */
    updated_at: number;
}


/**
 * @export
 */
export const ModelComplianceComplianceCheckTypeEnum = {
    Hipaa: 'hipaa',
    Gdpr: 'gdpr',
    Pci: 'pci',
    Nist: 'nist'
} as const;
export type ModelComplianceComplianceCheckTypeEnum = typeof ModelComplianceComplianceCheckTypeEnum[keyof typeof ModelComplianceComplianceCheckTypeEnum];

/**
 * @export
 */
export const ModelComplianceStatusEnum = {
    Pass: 'pass',
    Warn: 'warn',
    Info: 'info',
    Note: 'note'
} as const;
export type ModelComplianceStatusEnum = typeof ModelComplianceStatusEnum[keyof typeof ModelComplianceStatusEnum];


/**
 * Check if a given object implements the ModelCompliance interface.
 */
export function instanceOfModelCompliance(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "compliance_check_type" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "masked" in value;
    isInstance = isInstance && "node_id" in value;
    isInstance = isInstance && "node_type" in value;
    isInstance = isInstance && "remediation_ansible" in value;
    isInstance = isInstance && "remediation_puppet" in value;
    isInstance = isInstance && "remediation_script" in value;
    isInstance = isInstance && "resource" in value;
    isInstance = isInstance && "rule_id" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "test_category" in value;
    isInstance = isInstance && "test_desc" in value;
    isInstance = isInstance && "test_number" in value;
    isInstance = isInstance && "test_rationale" in value;
    isInstance = isInstance && "test_severity" in value;
    isInstance = isInstance && "updated_at" in value;

    return isInstance;
}

export function ModelComplianceFromJSON(json: any): ModelCompliance {
    return ModelComplianceFromJSONTyped(json, false);
}

export function ModelComplianceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelCompliance {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'compliance_check_type': json['compliance_check_type'],
        'description': json['description'],
        'masked': json['masked'],
        'node_id': json['node_id'],
        'node_type': json['node_type'],
        'remediation_ansible': json['remediation_ansible'],
        'remediation_puppet': json['remediation_puppet'],
        'remediation_script': json['remediation_script'],
        'resource': json['resource'],
        'resources': !exists(json, 'resources') ? undefined : (json['resources'] === null ? null : (json['resources'] as Array<any>).map(ModelBasicNodeFromJSON)),
        'rule_id': json['rule_id'],
        'status': json['status'],
        'test_category': json['test_category'],
        'test_desc': json['test_desc'],
        'test_number': json['test_number'],
        'test_rationale': json['test_rationale'],
        'test_severity': json['test_severity'],
        'updated_at': json['updated_at'],
    };
}

export function ModelComplianceToJSON(value?: ModelCompliance | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'compliance_check_type': value.compliance_check_type,
        'description': value.description,
        'masked': value.masked,
        'node_id': value.node_id,
        'node_type': value.node_type,
        'remediation_ansible': value.remediation_ansible,
        'remediation_puppet': value.remediation_puppet,
        'remediation_script': value.remediation_script,
        'resource': value.resource,
        'resources': value.resources === undefined ? undefined : (value.resources === null ? null : (value.resources as Array<any>).map(ModelBasicNodeToJSON)),
        'rule_id': value.rule_id,
        'status': value.status,
        'test_category': value.test_category,
        'test_desc': value.test_desc,
        'test_number': value.test_number,
        'test_rationale': value.test_rationale,
        'test_severity': value.test_severity,
        'updated_at': value.updated_at,
    };
}

