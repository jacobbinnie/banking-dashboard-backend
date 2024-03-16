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

import { AccountBalanceType } from '../models/AccountBalanceType';
import { Amount } from '../models/Amount';
import { HttpFile } from '../http/http';

export class TransactionBalance {
    'type'?: AccountBalanceType;
    'balanceAmount'?: Amount;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AccountBalanceType",
            "format": ""
        },
        {
            "name": "balanceAmount",
            "baseName": "balanceAmount",
            "type": "Amount",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransactionBalance.attributeTypeMap;
    }

    public constructor() {
    }
}



