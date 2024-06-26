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
import { HostedNonSweepingPeriodicLimits } from '../models/HostedNonSweepingPeriodicLimits';
import { HttpFile } from '../http/http';

/**
* The restrictions and limits for payments executed under the VRP consent
*/
export class HostedVRPLimits {
    'periodicLimits'?: Array<HostedNonSweepingPeriodicLimits>;
    /**
    * __Optional__. Max amount that can be submitted per payment.
    */
    'maxAmountPerPayment'?: Amount;
    /**
    * __Optional__. Max cumulative amount that can be submitted under this consent.
    */
    'maxCumulativeAmount'?: Amount;
    /**
    * __Optional__. Max number of payments that can be submitted under this consent.
    */
    'maxCumulativeNumberOfPayments'?: number;
    /**
    * Indicates if the user edited the control parameters during authorisation
    */
    'editedByUser'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "periodicLimits",
            "baseName": "periodicLimits",
            "type": "Array<HostedNonSweepingPeriodicLimits>",
            "format": ""
        },
        {
            "name": "maxAmountPerPayment",
            "baseName": "maxAmountPerPayment",
            "type": "Amount",
            "format": ""
        },
        {
            "name": "maxCumulativeAmount",
            "baseName": "maxCumulativeAmount",
            "type": "Amount",
            "format": ""
        },
        {
            "name": "maxCumulativeNumberOfPayments",
            "baseName": "maxCumulativeNumberOfPayments",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "editedByUser",
            "baseName": "editedByUser",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return HostedVRPLimits.attributeTypeMap;
    }

    public constructor() {
    }
}

