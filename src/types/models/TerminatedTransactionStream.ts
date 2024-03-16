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

import { EnrichedTransaction } from '../models/EnrichedTransaction';
import { TransactionSchedule } from '../models/TransactionSchedule';
import { HttpFile } from '../http/http';

/**
* Terminated transaction stream generated as part of the financial profile for a User.
*/
export class TerminatedTransactionStream {
    /**
    * The name of the TransactionStream
    */
    'name'?: string;
    /**
    * A list of Transactions from the transaction stream.
    */
    'transactions'?: Array<EnrichedTransaction>;
    'transactionSchedule'?: TransactionSchedule;
    /**
    * The consistency of the transaction.  This is a number between 0 and 1 with 1 being the most consistent schedule.
    */
    'scheduleConsistencyScore'?: number;
    /**
    * When is the transaction expected to occur next.
    */
    'nextExpectedTransactionDate'?: string;
    /**
    * When is the first recorded transaction date
    */
    'earliestTransactionDate'?: string;
    /**
    * When is the most recent transaction date
    */
    'mostRecentTransactionDate'?: string;
    /**
    * The consistency of the amount of the transaction.  This is a number between 0 and 1 with 1 being the most consistent amount.
    */
    'amountConsistencyScore'?: number;
    /**
    * The average amount of the transaction stream
    */
    'averageAmount'?: number;
    /**
    * Missed transactions of transaction stream
    */
    'missedTransactions'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "transactions",
            "baseName": "transactions",
            "type": "Array<EnrichedTransaction>",
            "format": ""
        },
        {
            "name": "transactionSchedule",
            "baseName": "transactionSchedule",
            "type": "TransactionSchedule",
            "format": ""
        },
        {
            "name": "scheduleConsistencyScore",
            "baseName": "scheduleConsistencyScore",
            "type": "number",
            "format": ""
        },
        {
            "name": "nextExpectedTransactionDate",
            "baseName": "nextExpectedTransactionDate",
            "type": "string",
            "format": "date"
        },
        {
            "name": "earliestTransactionDate",
            "baseName": "earliestTransactionDate",
            "type": "string",
            "format": "date"
        },
        {
            "name": "mostRecentTransactionDate",
            "baseName": "mostRecentTransactionDate",
            "type": "string",
            "format": "date"
        },
        {
            "name": "amountConsistencyScore",
            "baseName": "amountConsistencyScore",
            "type": "number",
            "format": ""
        },
        {
            "name": "averageAmount",
            "baseName": "averageAmount",
            "type": "number",
            "format": ""
        },
        {
            "name": "missedTransactions",
            "baseName": "missedTransactions",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return TerminatedTransactionStream.attributeTypeMap;
    }

    public constructor() {
    }
}
