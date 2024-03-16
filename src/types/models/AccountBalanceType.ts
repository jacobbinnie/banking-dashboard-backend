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

/**
* Specifies the type of the stated account balance.
*/
export enum AccountBalanceType {
    ClosingAvailable = 'CLOSING_AVAILABLE',
    ClosingBooked = 'CLOSING_BOOKED',
    ClosingCleared = 'CLOSING_CLEARED',
    Expected = 'EXPECTED',
    ForwardAvailable = 'FORWARD_AVAILABLE',
    Information = 'INFORMATION',
    InterimAvailable = 'INTERIM_AVAILABLE',
    InterimBooked = 'INTERIM_BOOKED',
    InterimCleared = 'INTERIM_CLEARED',
    OpeningAvailable = 'OPENING_AVAILABLE',
    OpeningBooked = 'OPENING_BOOKED',
    OpeningCleared = 'OPENING_CLEARED',
    PreviouslyClosedBooked = 'PREVIOUSLY_CLOSED_BOOKED',
    Authorised = 'AUTHORISED',
    Other = 'OTHER',
    Unknown = 'UNKNOWN'
}
