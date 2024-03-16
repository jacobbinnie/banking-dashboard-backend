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

import { FeatureEnum } from '../models/FeatureEnum';
import { HttpFile } from '../http/http';

/**
* Features that an individual `Institution` may support. 
*/
export class FeatureDetails {
    'feature'?: FeatureEnum;
    /**
    * Endpoints that are associated with the feature e.g. (available for use if an Institution supports a feature).
    */
    'endpoint'?: string;
    /**
    * The link to further documentation regarding the feature.
    */
    'documentationUrl'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "feature",
            "baseName": "feature",
            "type": "FeatureEnum",
            "format": ""
        },
        {
            "name": "endpoint",
            "baseName": "endpoint",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentationUrl",
            "baseName": "documentationUrl",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FeatureDetails.attributeTypeMap;
    }

    public constructor() {
    }
}


