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

import { HostedPaymentRequestDetailsLink } from '../models/HostedPaymentRequestDetailsLink';
import { InstitutionIdentifiers } from '../models/InstitutionIdentifiers';
import { UserSettings } from '../models/UserSettings';
import { HttpFile } from '../http/http';

export class CreateHostedPaymentRequestLink {
    /**
    * __Conditional__. Yapily Identifier for the `User` returned by the create user step POST /users. You must either provide `userId` or `applicationUserId`.
    */
    'userId'?: string;
    /**
    * __Conditional__. Your own `User` reference. If you want to work with their own unique references for individual PSUs then you can use the `applicationUserId` property to provide that value. Where Yapily does not already have a Yapily userId that matches the supplied `applicationUserId`, then a new Yapily userId is created automatically and linked to the `applicationUserId` value. You must either provide userId or `applicationUserId`.
    */
    'applicationUserId'?: string;
    'institutionIdentifiers': InstitutionIdentifiers;
    'userSettings'?: UserSettings;
    /**
    * URL of your server to redirect the user after completion of the payment flow.
    */
    'redirectUrl': string;
    /**
    * The date and time that the authorisation expires. Must be between 10 minutes and 30 days in the future. If not specified, the authorisation URL will expire 10 minutes after creation.
    */
    'authorisationExpiresAt'?: Date;
    'paymentRequestDetails': HostedPaymentRequestDetailsLink;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "applicationUserId",
            "baseName": "applicationUserId",
            "type": "string",
            "format": ""
        },
        {
            "name": "institutionIdentifiers",
            "baseName": "institutionIdentifiers",
            "type": "InstitutionIdentifiers",
            "format": ""
        },
        {
            "name": "userSettings",
            "baseName": "userSettings",
            "type": "UserSettings",
            "format": ""
        },
        {
            "name": "redirectUrl",
            "baseName": "redirectUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "authorisationExpiresAt",
            "baseName": "authorisationExpiresAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "paymentRequestDetails",
            "baseName": "paymentRequestDetails",
            "type": "HostedPaymentRequestDetailsLink",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateHostedPaymentRequestLink.attributeTypeMap;
    }

    public constructor() {
    }
}

