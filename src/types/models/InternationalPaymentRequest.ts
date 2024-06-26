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

import { ChargeBearerType } from '../models/ChargeBearerType';
import { ExchangeRateInformation } from '../models/ExchangeRateInformation';
import { PriorityCodeEnum } from '../models/PriorityCodeEnum';
import { HttpFile } from '../http/http';

/**
* __Conditional__. Used to specify properties to define an international payment. <br><br>Must be specified when the payment `type` is one of the following:<ul>     <li><code>INTERNATIONAL_SINGLE_PAYMENT</code></li>     <li><code>INTERNATIONAL_SCHEDULED_PAYMENT</code></li>     <li><code>INTERNATIONAL_PERIODIC_PAYMENT</code></li></ul>
*/
export class InternationalPaymentRequest {
    /**
    * __Mandatory__. The currency to be transferred to the payee. This may differ from the currency the payment is denoted in and the currency of the payer\'s account. Specified as a 3-letter code (ISO 4217).
    */
    'currencyOfTransfer': string;
    'exchangeRateInformation'?: ExchangeRateInformation;
    /**
    * __Optional__. Used to indicate the external purpose as a [ISO20022 purpose code](https://www.rba.hr/documents/20182/183267/External+purpose+codes+list/8a28f888-1f83-5e29-d6ed-fce05f428689?version=1.1) value.
    */
    'purpose'?: string;
    'priority'?: PriorityCodeEnum;
    'chargeBearer'?: ChargeBearerType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "currencyOfTransfer",
            "baseName": "currencyOfTransfer",
            "type": "string",
            "format": ""
        },
        {
            "name": "exchangeRateInformation",
            "baseName": "exchangeRateInformation",
            "type": "ExchangeRateInformation",
            "format": ""
        },
        {
            "name": "purpose",
            "baseName": "purpose",
            "type": "string",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "PriorityCodeEnum",
            "format": ""
        },
        {
            "name": "chargeBearer",
            "baseName": "chargeBearer",
            "type": "ChargeBearerType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InternationalPaymentRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



