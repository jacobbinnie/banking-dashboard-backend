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

import { RedirectRequest } from '../models/RedirectRequest';
import { HttpFile } from '../http/http';

export class PreAuthorisationRequest {
    'userUuid'?: string;
    /**
    * __Conditional__. The user-friendly reference to the `User` that will authorise the authorisation request. If a `User` with the specified `applicationUserId` exists, it will be used otherwise, a new `User` with the specified `applicationUserId` will be created and used. Either the `userUuid` or `applicationUserId` must be provided.
    */
    'applicationUserId'?: string;
    /**
    * Extra parameters to be forwarded in the redirect back to the client after the user authorisation flow has been completed.
    */
    'forwardParameters'?: Array<string>;
    /**
    * __Mandatory__. The reference to the `Institution` which identifies which institution the authorisation request is sent to.
    */
    'institutionId': string;
    /**
    * __Optional__. The server to redirect the user to after the user complete the authorisation at the `Institution`. <br><br>See [Using a callback (Optional)](https://docs.yapily.com/pages/knowledge/yapily-concepts/callback_url/#using-a-callback-optional) for more information.
    */
    'callback'?: string;
    'redirect'?: RedirectRequest;
    /**
    * __Conditional__. Used to receive a `oneTimeToken` rather than a `consentToken` at the `callback` for additional security. This can only be used when the `callback` is set. <br><br>See [Using a callback with an OTT (Optional)](https://docs.yapily.com/pages/knowledge/yapily-concepts/callback_url/#using-a-callback-with-an-ott-optional) for more information.
    */
    'oneTimeToken'?: boolean;
    /**
    * __Mandatory__. Defines the scope of the pre-authorisation request.
    */
    'scope': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "forwardParameters",
            "baseName": "forwardParameters",
            "type": "Array<string>",
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
            "name": "scope",
            "baseName": "scope",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PreAuthorisationRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

