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

import { Address } from '../models/Address';
import { HostedVrpAccountIdentification } from '../models/HostedVrpAccountIdentification';
import { HttpFile } from '../http/http';

/**
* __Conditional__. Details of the benefactor [person or business].
*/
export class HostedVrpPayerResponse {
    /**
    * The account holder name of the Payer.
    */
    'name'?: string;
    /**
    * __Mandatory__. The account identifications that identify the `Payer` bank account.
    */
    'accountIdentifications': Set<HostedVrpAccountIdentification>;
    'address'?: Address;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountIdentifications",
            "baseName": "accountIdentifications",
            "type": "Set<HostedVrpAccountIdentification>",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "Address",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return HostedVrpPayerResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

