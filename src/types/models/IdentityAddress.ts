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

import { AddressTypeEnum } from '../models/AddressTypeEnum';
import { HttpFile } from '../http/http';

export class IdentityAddress {
    'addressLines'?: Array<string>;
    'city'?: string;
    'postalCode'?: string;
    'country'?: string;
    'streetName'?: string;
    'buildingNumber'?: string;
    'type'?: AddressTypeEnum;
    'county'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "addressLines",
            "baseName": "addressLines",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
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
            "name": "type",
            "baseName": "type",
            "type": "AddressTypeEnum",
            "format": ""
        },
        {
            "name": "county",
            "baseName": "county",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IdentityAddress.attributeTypeMap;
    }

    public constructor() {
    }
}



