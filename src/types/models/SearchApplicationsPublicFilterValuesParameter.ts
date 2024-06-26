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

export class SearchApplicationsPublicFilterValuesParameter {
    /**
    * Sub-application ids to filter the results for. If provided, the results will only include sub-applications with the given ids. Non-existent ids will be ignored.
    */
    'applicationIds'?: Array<string>;
    /**
    * The number of results to skip.
    */
    'offset'?: number;
    /**
    * The maximum number of results to return.
    */
    'limit'?: number;
    /**
    * The field to sort the results by.<br><br>Possible values:<ul><li>`last_updated` (ascending)</li><li>`-last_updated` (descending)</li><li>`name` (ascending)</li><li>`-name` (descending)</li><li>`uuid` (ascending)</li><li>`-uuid` (descending)</li></ul>
    */
    'sort'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "applicationIds",
            "baseName": "applicationIds",
            "type": "Array<string>",
            "format": "uuid"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": ""
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SearchApplicationsPublicFilterValuesParameter.attributeTypeMap;
    }

    public constructor() {
    }
}

