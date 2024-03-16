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

import { VirtualAccountBeneficiaryAccount } from '../models/VirtualAccountBeneficiaryAccount';
import { VirtualAccountBeneficiaryAddress } from '../models/VirtualAccountBeneficiaryAddress';
import { HttpFile } from '../http/http';

/**
* 
*/
export class VirtualAccountBeneficiary {
    /**
    * Unique id of the Beneficiary
    */
    'id'?: string;
    /**
    * Beneficiary payment schemes
    */
    'paymentSchemes'?: Array<string>;
    /**
    * Reference that can be provided in order to help with identification of the Beneficiary
    */
    'nickname'?: string;
    /**
    * Indicates the type of Beneficiary as either a INDIVIDUAL or BUSINESS
    */
    'type'?: string;
    'name'?: string;
    'birthDate'?: string;
    'address'?: VirtualAccountBeneficiaryAddress;
    'account'?: VirtualAccountBeneficiaryAccount;
    /**
    * The current status of the Beneficiary <br> PENDING - Beneficiary is awaiting verification <br> ACTIVE - Beneficiary can be used in a Pay Out <br> BLOCKED - Beneficiary cannot be used in a Pay Out
    */
    'status'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentSchemes",
            "baseName": "paymentSchemes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "birthDate",
            "baseName": "birthDate",
            "type": "string",
            "format": "date"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "VirtualAccountBeneficiaryAddress",
            "format": ""
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "VirtualAccountBeneficiaryAccount",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VirtualAccountBeneficiary.attributeTypeMap;
    }

    public constructor() {
    }
}
