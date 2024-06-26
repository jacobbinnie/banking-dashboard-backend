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

import { EnrichedWrapper } from '../models/EnrichedWrapper';
import { ProfileConsent } from '../models/ProfileConsent';
import { HttpFile } from '../http/http';

/**
* A financial profile for a User.
*/
export class FinancialProfile {
    /**
    * The status, can be EMPTY, PARTIAL, PENDING, COMPLETED or ERROR.
    */
    'status'?: string;
    /**
    * A list of ProfileConsent used in the financial profile.
    */
    'profileConsents'?: Array<ProfileConsent>;
    'enrichment'?: EnrichedWrapper;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "profileConsents",
            "baseName": "profileConsents",
            "type": "Array<ProfileConsent>",
            "format": ""
        },
        {
            "name": "enrichment",
            "baseName": "enrichment",
            "type": "EnrichedWrapper",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FinancialProfile.attributeTypeMap;
    }

    public constructor() {
    }
}

