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

import { AlignmentEnum } from '../models/AlignmentEnum';
import { Amount } from '../models/Amount';
import { FrequencyEnum } from '../models/FrequencyEnum';
import { HttpFile } from '../http/http';

export class VrpPeriodicLimit {
    /**
    * __Mandatory__. Maximum amount that can be specified in all payment instructions in a given period under this VRP consent. If the Alignment is Calendar, the limit is pro-rated in the first period to the remaining number of days.
    */
    'maximumAmount': Amount;
    'frequency': FrequencyEnum;
    'alignment': AlignmentEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "maximumAmount",
            "baseName": "maximumAmount",
            "type": "Amount",
            "format": ""
        },
        {
            "name": "frequency",
            "baseName": "frequency",
            "type": "FrequencyEnum",
            "format": ""
        },
        {
            "name": "alignment",
            "baseName": "alignment",
            "type": "AlignmentEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VrpPeriodicLimit.attributeTypeMap;
    }

    public constructor() {
    }
}



