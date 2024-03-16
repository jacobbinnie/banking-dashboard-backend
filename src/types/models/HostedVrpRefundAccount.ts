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

import { HostedVrpAccountIdentification } from '../models/HostedVrpAccountIdentification';
import { HttpFile } from '../http/http';

/**
* The account to which funds should be returned if the payment is to be later refunded.
*/
export class HostedVrpRefundAccount {
    'name'?: string;
    'accountIdentifications'?: Set<HostedVrpAccountIdentification>;

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
        }    ];

    static getAttributeTypeMap() {
        return HostedVrpRefundAccount.attributeTypeMap;
    }

    public constructor() {
    }
}

