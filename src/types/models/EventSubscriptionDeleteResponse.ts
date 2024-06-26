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

import { DeleteStatusEnum } from '../models/DeleteStatusEnum';
import { HttpFile } from '../http/http';

export class EventSubscriptionDeleteResponse {
    /**
    * Unique identifier of the event type (for which notifications will be sent)
    */
    'eventTypeId': string;
    /**
    * Application related to event subscription.
    */
    'applicationId': string;
    /**
    * Creation datetime of event subscription.
    */
    'created': Date;
    'deleteStatus': DeleteStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "eventTypeId",
            "baseName": "eventTypeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "applicationId",
            "baseName": "applicationId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "deleteStatus",
            "baseName": "deleteStatus",
            "type": "DeleteStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EventSubscriptionDeleteResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



