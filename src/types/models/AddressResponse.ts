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

import { AddressTypeEnumResponse } from '../models/AddressTypeEnumResponse';
import { HttpFile } from '../http/http';

/**
* The address of the `Payee` or `Payer`.
*/
export class AddressResponse {
    /**
    * The address line of the address
    */
    'addressLines'?: Array<string>;
    /**
    * The street name of the address
    */
    'streetName'?: string;
    /**
    * The building number of the address
    */
    'buildingNumber'?: string;
    /**
    * The post code of the address
    */
    'postCode'?: string;
    /**
    * The town name of the address
    */
    'townName'?: string;
    /**
    * The list of counties for the address
    */
    'county'?: Array<string>;
    /**
    * The 2-letter country code for the address.
    */
    'country'?: string;
    /**
    * The department for the address
    */
    'department'?: string;
    /**
    * The sub-department for the address
    */
    'subDepartment'?: string;
    'addressType'?: AddressTypeEnumResponse;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "addressLines",
            "baseName": "addressLines",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "streetName",
            "baseName": "streetName",
            "type": "string",
            "format": ""
        },
        {
            "name": "buildingNumber",
            "baseName": "buildingNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "postCode",
            "baseName": "postCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "townName",
            "baseName": "townName",
            "type": "string",
            "format": ""
        },
        {
            "name": "county",
            "baseName": "county",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "department",
            "baseName": "department",
            "type": "string",
            "format": ""
        },
        {
            "name": "subDepartment",
            "baseName": "subDepartment",
            "type": "string",
            "format": ""
        },
        {
            "name": "addressType",
            "baseName": "addressType",
            "type": "AddressTypeEnumResponse",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AddressResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



