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

import { FeatureDetails } from '../models/FeatureDetails';
import { FilteredClientPayloadListFeatureDetails } from '../models/FilteredClientPayloadListFeatureDetails';
import { RawResponse } from '../models/RawResponse';
import { ResponseForwardedData } from '../models/ResponseForwardedData';
import { ResponseListMeta } from '../models/ResponseListMeta';
import { HttpFile } from '../http/http';

export class ApiListResponseOfFeatureDetails {
    'meta'?: ResponseListMeta;
    'data'?: Array<FeatureDetails>;
    'links'?: { [key: string]: string; };
    'forwardedData'?: Array<ResponseForwardedData>;
    'raw'?: Array<RawResponse>;
    'paging'?: FilteredClientPayloadListFeatureDetails;
    'tracingId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "meta",
            "baseName": "meta",
            "type": "ResponseListMeta",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<FeatureDetails>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "forwardedData",
            "baseName": "forwardedData",
            "type": "Array<ResponseForwardedData>",
            "format": ""
        },
        {
            "name": "raw",
            "baseName": "raw",
            "type": "Array<RawResponse>",
            "format": ""
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "FilteredClientPayloadListFeatureDetails",
            "format": ""
        },
        {
            "name": "tracingId",
            "baseName": "tracingId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiListResponseOfFeatureDetails.attributeTypeMap;
    }

    public constructor() {
    }
}

