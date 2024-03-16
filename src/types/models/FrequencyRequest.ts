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

import { FrequencyEnumExtended } from '../models/FrequencyEnumExtended';
import { HttpFile } from '../http/http';

/**
* __Mandatory__. Defines the intervals at which payment should be made.
*/
export class FrequencyRequest {
    'type': FrequencyEnumExtended;
    /**
    * __Conditional__. See [payment frequency](/guides/payments/payment-execution/periodic-payments/#payment-frequency) for more information
    */
    'intervalWeek'?: number;
    /**
    * __Conditional__. See [payment frequency](/guides/payments/payment-execution/periodic-payments/#payment-frequency) for more information
    */
    'intervalMonth'?: number;
    /**
    * __Conditional__. See [payment frequency](/guides/payments/payment-execution/periodic-payments/#payment-frequency) for more information
    */
    'executionDay'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FrequencyEnumExtended",
            "format": ""
        },
        {
            "name": "intervalWeek",
            "baseName": "intervalWeek",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "intervalMonth",
            "baseName": "intervalMonth",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "executionDay",
            "baseName": "executionDay",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return FrequencyRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


