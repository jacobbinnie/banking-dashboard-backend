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

import { Amount } from '../models/Amount';
import { SweepingPeriodicLimits } from '../models/SweepingPeriodicLimits';
import { HttpFile } from '../http/http';

/**
* Define the restrictions and limits for payment orders as part of Sweeping VRP consent
*/
export class SweepingControlParameters {
    /**
    * __Mandatory__. Defines the authentication method(s) allowed in payment submission step. Allowed values are [SCA_REQUIRED, SCA_NOT_REQUIRED].
    */
    'psuAuthenticationMethods': Array<string>;
    'periodicLimits': Array<SweepingPeriodicLimits>;
    /**
    * __Mandatory__. Max amount that can be submitted per payment.
    */
    'maxAmountPerPayment': Amount;
    /**
    * __Optional__. Start date when the consent becomes valid.
    */
    'validFrom'?: Date;
    /**
    * __Optional__. End date when the consent expires and becomes invalid.
    */
    'validTo'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "psuAuthenticationMethods",
            "baseName": "psuAuthenticationMethods",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "periodicLimits",
            "baseName": "periodicLimits",
            "type": "Array<SweepingPeriodicLimits>",
            "format": ""
        },
        {
            "name": "maxAmountPerPayment",
            "baseName": "maxAmountPerPayment",
            "type": "Amount",
            "format": ""
        },
        {
            "name": "validFrom",
            "baseName": "validFrom",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "validTo",
            "baseName": "validTo",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return SweepingControlParameters.attributeTypeMap;
    }

    public constructor() {
    }
}
