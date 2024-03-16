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

import { AuthorisationStatus } from '../models/AuthorisationStatus';
import { FeatureEnum } from '../models/FeatureEnum';
import { HttpFile } from '../http/http';

export class PreAuthorisationResponse {
    /**
    * Unique identifier for the pre-authorisation request.
    */
    'id'?: string;
    /**
    * The `User` that the authorisation request was created for.
    */
    'userUuid'?: string;
    /**
    * The user-friendly reference to the `User` that the authorisation request was created for.
    */
    'applicationUserId'?: string;
    'referenceId'?: string;
    /**
    * The `Institution` the authorisation request was sent to.
    */
    'institutionId'?: string;
    'status'?: AuthorisationStatus;
    /**
    * Date and time the consent was created.
    */
    'createdAt'?: Date;
    /**
    * When performing a transaction query using the consent, this is the earliest date of transaction records that can be retrieved.
    */
    'transactionFrom'?: Date;
    /**
    * When performing a transaction query using the consent, this is the latest date of transaction records that can be retrieved.
    */
    'transactionTo'?: Date;
    /**
    * Date and time the authorisation expires. Re-authorisation is needed to retain access.
    */
    'expiresAt'?: Date;
    'timeToExpireInMillis'?: number;
    'timeToExpire'?: string;
    /**
    * The set of features the consent provides access to.
    */
    'featureScope'?: Set<FeatureEnum>;
    /**
    * Represents the authorisation to gain access to the requested features. Required to access account information or make a payment request.
    */
    'consentToken'?: string;
    /**
    * Corellation ID used with the `Institution` during the authorisation process.
    */
    'state'?: string;
    /**
    * Date and time the request was authorised by the `Institution`.
    */
    'authorizedAt'?: Date;
    /**
    * Unique identifier of the consent assigned by the `Institution`.
    */
    'institutionConsentId'?: string;
    'authorisationUrl'?: string;
    /**
    * The URL link for the QR code that may be scanned via a mobile device to make a authorisation redirect to the bank (authURL encoded).
    */
    'qrCodeUrl'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "userUuid",
            "baseName": "userUuid",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "applicationUserId",
            "baseName": "applicationUserId",
            "type": "string",
            "format": ""
        },
        {
            "name": "referenceId",
            "baseName": "referenceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "institutionId",
            "baseName": "institutionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "AuthorisationStatus",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "transactionFrom",
            "baseName": "transactionFrom",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "transactionTo",
            "baseName": "transactionTo",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "timeToExpireInMillis",
            "baseName": "timeToExpireInMillis",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "timeToExpire",
            "baseName": "timeToExpire",
            "type": "string",
            "format": "iso8601"
        },
        {
            "name": "featureScope",
            "baseName": "featureScope",
            "type": "Set<FeatureEnum>",
            "format": ""
        },
        {
            "name": "consentToken",
            "baseName": "consentToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        },
        {
            "name": "authorizedAt",
            "baseName": "authorizedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "institutionConsentId",
            "baseName": "institutionConsentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "authorisationUrl",
            "baseName": "authorisationUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "qrCodeUrl",
            "baseName": "qrCodeUrl",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PreAuthorisationResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



