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

import { ErrorDetails } from '../models/ErrorDetails';
import { MonitoringEndpointStatus } from '../models/MonitoringEndpointStatus';
import { HttpFile } from '../http/http';

/**
* Used to return errors from the bank from each request<ul><li>`400` - Returned by any `POST` endpoint when the body does not conform to the contract</li><li>`401` - Returned by any endpoint when an invalid `authToken` is used for authentication</li><li>`403` - Returned by any [Financial Data](https://docs.yapily.com/api/#yapily-api-financial-data) and any [Payments](https://docs.yapily.com/api/#yapily-api-payments) endpoint when the `Consent` is no longer authorised to access financial data or to make a payment</li><li>`404` - Returned by any endpoint where there are path parameters and the path parameters supplied are unable to find the desired resource</li><li>`409` - Returned by any `POST` endpoint when creating a resource that conflicts with any other existing resource e.g. [Create User](https://docs.yapily.com/api/#create-user)</li><li>`424` - Returned by any [Financial Data](https://docs.yapily.com/api/#yapily-api-financial-data) and any [Payments](https://docs.yapily.com/api/#yapily-api-payments) endpoint when the feature to be accessed is not supported by the `Institution`.</li><li>`500` - Returned by any endpoint when Yapily is down. If you encounter any false positives, please <a href=\"mailto:support@yapily.com\">notify us</a></li></ul>
*/
export class Model424VirtualAccountsApiErrorResponse {
    'error'?: ErrorDetails;
    'monitoring'?: Array<MonitoringEndpointStatus>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "error",
            "baseName": "error",
            "type": "ErrorDetails",
            "format": ""
        },
        {
            "name": "monitoring",
            "baseName": "monitoring",
            "type": "Array<MonitoringEndpointStatus>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Model424VirtualAccountsApiErrorResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

