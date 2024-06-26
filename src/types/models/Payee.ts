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

import { AccountIdentification } from '../models/AccountIdentification';
import { Address } from '../models/Address';
import { HttpFile } from '../http/http';

/**
* __Mandatory__. Details of the beneficiary [person or business].
*/
export class Payee {
    /**
    * __Mandatory__. The account holder name of the beneficiary.
    */
    'name': string;
    /**
    * __Mandatory__. The account identifications that identify the `Payee` bank account.
    */
    'accountIdentifications': Set<AccountIdentification>;
    /**
    * __Optional__. The payee account type. <br><br>Allowed values: BUSINESS, BUSINESS_SAVING, CHARITY, COLLECTION, CORPORATE, E_WALLET, GOVERNMENT, INVESTMENT, INVESTMENT_ISA, JOINT_PERSONAL, PENSION, PERSONAL, PERSONAL_SAVING, PREMIER, WEALTH .
    */
    'accountType'?: string;
    'address'?: Address;
    /**
    * __Optional__. The merchant ID is a unique code provided by the payment processor to the merchant.
    */
    'merchantId'?: string;
    /**
    * __Optional__. The category code of the merchant in case the `Payee` is a business. Specified as a 3-letter ISO 18245 code.
    */
    'merchantCategoryCode'?: string;

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
            "type": "Set<AccountIdentification>",
            "format": ""
        },
        {
            "name": "accountType",
            "baseName": "accountType",
            "type": "string",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "Address",
            "format": ""
        },
        {
            "name": "merchantId",
            "baseName": "merchantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "merchantCategoryCode",
            "baseName": "merchantCategoryCode",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Payee.attributeTypeMap;
    }

    public constructor() {
    }
}

