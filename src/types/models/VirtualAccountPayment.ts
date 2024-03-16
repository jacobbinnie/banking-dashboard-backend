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

import { VirtualAccountPaymentAmount } from '../models/VirtualAccountPaymentAmount';
import { VirtualAccountPaymentDestination } from '../models/VirtualAccountPaymentDestination';
import { VirtualAccountPaymentSource } from '../models/VirtualAccountPaymentSource';
import { HttpFile } from '../http/http';

export class VirtualAccountPayment {
    /**
    * Unique id of the payment
    */
    'id'?: string;
    /**
    * Date and time that the payment was created
    */
    'createdDateTime'?: Date;
    /**
    * Date on which the payment instruction will be executed, that may be in the future
    */
    'paymentDate'?: string;
    /**
    * Type of payment. One of PAY_IN, PAY_OUT, RETURN_IN or RETURN_OUT
    */
    'type'?: string;
    /**
    * Method of settlement to complete the payment. One of: <br> FASTER_PAYMENTS <br> SEPA_CREDIT <br> SEPA_INSTANT <br> SWIFT <br> SWIFT_EXPRESS <br> CHAPS <br> IAT <br> WIRE <br> TRANSFER
    */
    'paymentScheme'?: string;
    'amount'?: VirtualAccountPaymentAmount;
    /**
    * Reference to be associated with the payment. This will be appear on the beneficiary\'s bank statement
    */
    'reference'?: string;
    /**
    * The current state of the transaction <br> INITIATED - The transaction request is acknowledged and will not undergo validation checks <br> PENDING - Initial checks were successful and the payment is pending processing. This is primarily used for future dated payments that have not yet reached their payment date <br> PROCESSING - Initial checks succeeded and the transaction request is now being processed <br> COMPLETED - The transaction has been successfully processed (terminal status) <br> FAILED - An failure occured during transaction processing (terminal status)
    */
    'status'?: string;
    'source'?: VirtualAccountPaymentSource;
    'destination'?: VirtualAccountPaymentDestination;
    /**
    * Unique id of the original payment that was refunded
    */
    'originalPaymentId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdDateTime",
            "baseName": "createdDateTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "paymentDate",
            "baseName": "paymentDate",
            "type": "string",
            "format": "date"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentScheme",
            "baseName": "paymentScheme",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "VirtualAccountPaymentAmount",
            "format": ""
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "VirtualAccountPaymentSource",
            "format": ""
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "VirtualAccountPaymentDestination",
            "format": ""
        },
        {
            "name": "originalPaymentId",
            "baseName": "originalPaymentId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VirtualAccountPayment.attributeTypeMap;
    }

    public constructor() {
    }
}
