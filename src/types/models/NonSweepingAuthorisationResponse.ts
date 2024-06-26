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
import { InitiationDetails } from '../models/InitiationDetails';
import { NonSweepingControlParameters } from '../models/NonSweepingControlParameters';
import { Payer } from '../models/Payer';
import { HttpFile } from '../http/http';

export class NonSweepingAuthorisationResponse {
    'id'?: string;
    /**
    * This is the Yapily user identifier for the user returned by the create user step POST ../users
    */
    'userId'?: string;
    /**
    * A client\'s own user reference. If the client wants to work with their own unique references for individual PSUs then they can use the applicationUserId property to provide that value. Where Yapily does not already have a Yapily userId that matches the supplied applicationUserId, then a new Yapily userId is created automatically and linked to the applicationUserId value.  Clients can then use either their own applicationUserId or the Yapily userId to reference the same user in future calls.
    */
    'applicationUserId'?: string;
    /**
    * The reference to the Institution which identifies which institution the authorisation request is sent to.
    */
    'institutionId'?: string;
    'status'?: AuthorisationStatus;
    'createdAt'?: Date;
    /**
    * __Optional__. Used to granularly specify the set of features that the user will give their consent for when requesting access to their account information. Depending on the `Institution`, this may also populate a consent screen which list these scopes before the user authorises.<br><br>This endpoint accepts allow all [Financial Data Features](/guides/financial-data/features/#feature-list) that the `Institution` supports.To find out which scopes an `Institution` supports, check [GET Institution](./#get-institution).
    */
    'featureScope'?: Set<FeatureEnum>;
    /**
    * The `consent-token` containing the user\'s authorisation to make the payment request.
    */
    'consentToken'?: string;
    'state'?: string;
    'authorizedAt'?: Date;
    'institutionConsentId'?: string;
    'authorisationUrl'?: string;
    'qrCodeUrl'?: string;
    'controlParameters'?: NonSweepingControlParameters;
    'payer'?: Payer;
    'initiationDetails'?: InitiationDetails;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "userId",
            "baseName": "userId",
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
        },
        {
            "name": "controlParameters",
            "baseName": "controlParameters",
            "type": "NonSweepingControlParameters",
            "format": ""
        },
        {
            "name": "payer",
            "baseName": "payer",
            "type": "Payer",
            "format": ""
        },
        {
            "name": "initiationDetails",
            "baseName": "initiationDetails",
            "type": "InitiationDetails",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NonSweepingAuthorisationResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



