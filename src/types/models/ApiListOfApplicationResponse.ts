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

import { ApplicationResponse } from '../models/ApplicationResponse';
import { ApplicationResponseListMeta } from '../models/ApplicationResponseListMeta';
import { HttpFile } from '../http/http';

export class ApiListOfApplicationResponse {
    'meta'?: ApplicationResponseListMeta;
    'data'?: Array<ApplicationResponse>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "meta",
            "baseName": "meta",
            "type": "ApplicationResponseListMeta",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<ApplicationResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiListOfApplicationResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

