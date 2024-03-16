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

import { ComplianceData } from '../models/ComplianceData';
import { InitiationDetails } from '../models/InitiationDetails';
import { PaymentContextType } from '../models/PaymentContextType';
import { RedirectRequest } from '../models/RedirectRequest';
import { SweepingControlParameters } from '../models/SweepingControlParameters';
import { HttpFile } from '../http/http';

export class SweepingAuthorisationRequest {
    /**
    * This is the Yapily user identifier for the user returned by the create user step POST ../users
    */
    'userId'?: string;
    /**
    * A client\'s own user reference. If the client wants to work with their own unique references for individual PSUs then they can use the applicationUserId property to provide that value. Where Yapily does not already have a Yapily userId that matches the supplied applicationUserId, then a new Yapily userId is created automatically and linked to the applicationUserId value.  Clients can then use either their own applicationUserId or the Yapily userId to reference the same user in future calls.
    */
    'applicationUserId'?: string;
    /**
    * Extra parameters the TPP may want to get forwarded in the callback request after the PSU redirect.
    */
    'forwardParameters'?: Array<string>;
    'contextType'?: PaymentContextType;
    /**
    * __Mandatory__. The reference to the `Institution` which identifies which institution the authorisation request is sent to.
    */
    'institutionId': string;
    /**
    * __Optional__. The server to redirect the user to after the user complete the authorisation at the `Institution`. <br><br>See [Using a callback (Optional)](https://docs.yapily.com/knowledge/callback_url/#using-a-callback-optional) for more information.
    */
    'callback'?: string;
    'redirect'?: RedirectRequest;
    /**
    * __Conditional__. Used to receive a `oneTimeToken` rather than a `consentToken` at the `callback` for additional security. This can only be used when the `callback` is set. <br><br>See [Using a callback with an OTT (Optional)](https://docs.yapily.com/knowledge/callback_url/#using-a-callback-with-an-ott-optional) for more information.
    */
    'oneTimeToken'?: boolean;
    'controlParameters': SweepingControlParameters;
    'initiationDetails': InitiationDetails;
    'complianceData'?: ComplianceData;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "forwardParameters",
            "baseName": "forwardParameters",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "contextType",
            "baseName": "contextType",
            "type": "PaymentContextType",
            "format": ""
        },
        {
            "name": "institutionId",
            "baseName": "institutionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "callback",
            "baseName": "callback",
            "type": "string",
            "format": ""
        },
        {
            "name": "redirect",
            "baseName": "redirect",
            "type": "RedirectRequest",
            "format": ""
        },
        {
            "name": "oneTimeToken",
            "baseName": "oneTimeToken",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "controlParameters",
            "baseName": "controlParameters",
            "type": "SweepingControlParameters",
            "format": ""
        },
        {
            "name": "initiationDetails",
            "baseName": "initiationDetails",
            "type": "InitiationDetails",
            "format": ""
        },
        {
            "name": "complianceData",
            "baseName": "complianceData",
            "type": "ComplianceData",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SweepingAuthorisationRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



