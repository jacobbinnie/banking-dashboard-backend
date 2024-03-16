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

export class ConsentDeleteResponse {
    /**
    * __Conditional__. User-friendly identifier of the `User` that provides authorisation. If a `User` with the specified `applicationUserId` exists, it will be used otherwise, a new `User` with the specified `applicationUserId` will be created and used. Either the `userUuid` or `applicationUserId` must be provided.
    */
    'id'?: string;
    'deleteStatus'?: DeleteStatusEnum;
    /**
    * __Mandatory__. The `Institution` the authorisation request is sent to.
    */
    'institutionId'?: string;
    /**
    * Identification of the consent at the Institution.
    */
    'institutionConsentId'?: string;
    /**
    * Date and time of when the consent was authorised.
    */
    'creationDate'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "deleteStatus",
            "baseName": "deleteStatus",
            "type": "DeleteStatusEnum",
            "format": ""
        },
        {
            "name": "institutionId",
            "baseName": "institutionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "institutionConsentId",
            "baseName": "institutionConsentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "creationDate",
            "baseName": "creationDate",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return ConsentDeleteResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


