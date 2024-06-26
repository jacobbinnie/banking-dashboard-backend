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
import { FrequencyRequest } from '../models/FrequencyRequest';
import { HttpFile } from '../http/http';

/**
* __Conditional__. Used to specify properties to define a periodic payment. <br><br>Must be specified when the payment `type` is one of the following:<ul>     <li><code>DOMESTIC_PERIODIC_PAYMENT</code></li>     <li><code>INTERNATIONAL_PERIODIC_PAYMENT</code></li></ul>
*/
export class PeriodicPaymentRequest {
    'frequency': FrequencyRequest;
    /**
    * __Conditional__. Defines the total number of payments to be made.<br><br>This is required if `finalPaymentDateTime` is not specified and it is intended for the periodic payment have a fixed amount of payments.
    */
    'numberOfPayments'?: number;
    /**
    * __Conditional__. Defines when to start the recurring payment date and time. Specify this if you want the first payment to start on a different day than what the frequency object defines.
    */
    'nextPaymentDateTime'?: Date;
    'nextPaymentAmount'?: Amount;
    /**
    * __Conditional__. Defines the final payment date and time. To create an open-ended periodic payment, do not specify this property.
    */
    'finalPaymentDateTime'?: Date;
    'finalPaymentAmount'?: Amount;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "frequency",
            "baseName": "frequency",
            "type": "FrequencyRequest",
            "format": ""
        },
        {
            "name": "numberOfPayments",
            "baseName": "numberOfPayments",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "nextPaymentDateTime",
            "baseName": "nextPaymentDateTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "nextPaymentAmount",
            "baseName": "nextPaymentAmount",
            "type": "Amount",
            "format": ""
        },
        {
            "name": "finalPaymentDateTime",
            "baseName": "finalPaymentDateTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "finalPaymentAmount",
            "baseName": "finalPaymentAmount",
            "type": "Amount",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PeriodicPaymentRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

