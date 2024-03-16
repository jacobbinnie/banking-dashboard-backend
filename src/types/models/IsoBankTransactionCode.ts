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

import { IsoCodeDetails } from '../models/IsoCodeDetails';
import { HttpFile } from '../http/http';

/**
* Defines the underlying transaction type (e.g. Card or Debit Transactions, Loans or Mortages). <br><br> Conforms to `ISO` standards - ISO 20022.
*/
export class IsoBankTransactionCode {
    'domainCode'?: IsoCodeDetails;
    'familyCode'?: IsoCodeDetails;
    'subFamilyCode'?: IsoCodeDetails;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "domainCode",
            "baseName": "domainCode",
            "type": "IsoCodeDetails",
            "format": ""
        },
        {
            "name": "familyCode",
            "baseName": "familyCode",
            "type": "IsoCodeDetails",
            "format": ""
        },
        {
            "name": "subFamilyCode",
            "baseName": "subFamilyCode",
            "type": "IsoCodeDetails",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IsoBankTransactionCode.attributeTypeMap;
    }

    public constructor() {
    }
}

