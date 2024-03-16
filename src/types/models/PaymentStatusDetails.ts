/**
 * Yapily API
 * The Yapily API enables connections between your application and users\' banks. For more information check out our [documentation](https://docs.yapily.com/).<br><br>In particular, make sure to view our [Getting Started](https://docs.yapily.com/pages/home/getting-started/) steps if this is your first time here.<br><br>While testing the API, our list of [sandbox credentials](https://docs.yapily.com/pages/key-concepts/sandbox-credentials/) maybe useful.
 *
 * OpenAPI spec version: 2.30.1
 * Contact: support@yapily.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MultiAuthorisation } from '../models/MultiAuthorisation';
import { PaymentIsoStatus } from '../models/PaymentIsoStatus';
import { PaymentStatus } from '../models/PaymentStatus';
import { HttpFile } from '../http/http';

export class PaymentStatusDetails {
    'status'?: PaymentStatus;
    'statusReason'?: string;
    'statusReasonDescription'?: string;
    'statusUpdateDate'?: Date;
    'multiAuthorisationStatus'?: MultiAuthorisation;
    'isoStatus'?: PaymentIsoStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentStatus",
            "format": ""
        },
        {
            "name": "statusReason",
            "baseName": "statusReason",
            "type": "string",
            "format": ""
        },
        {
            "name": "statusReasonDescription",
            "baseName": "statusReasonDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "statusUpdateDate",
            "baseName": "statusUpdateDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "multiAuthorisationStatus",
            "baseName": "multiAuthorisationStatus",
            "type": "MultiAuthorisation",
            "format": ""
        },
        {
            "name": "isoStatus",
            "baseName": "isoStatus",
            "type": "PaymentIsoStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaymentStatusDetails.attributeTypeMap;
    }

    public constructor() {
    }
}



