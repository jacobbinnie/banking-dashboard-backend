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

import { HttpFile } from '../http/http';

export class VirtualAccountAddress {
    /**
    * __Mandatory__. AddressLine1 of the sub-client
    */
    'addressLine1': string;
    /**
    * __Optional__. AddressLine2 of the sub-client
    */
    'addressLine2'?: string;
    /**
    * __Mandatory__. Town name of the sub-client
    */
    'townName': string;
    /**
    * __Optional__. Address postcode of the sub-client
    */
    'postCode'?: string;
    /**
    * __Optional__. Country of the sub-client
    */
    'country': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "addressLine1",
            "baseName": "addressLine1",
            "type": "string",
            "format": ""
        },
        {
            "name": "addressLine2",
            "baseName": "addressLine2",
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
            "name": "postCode",
            "baseName": "postCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VirtualAccountAddress.attributeTypeMap;
    }

    public constructor() {
    }
}

