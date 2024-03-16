// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiResponseError } from '../models/ApiResponseError';
import { ApiResponseOfPaymentResponse } from '../models/ApiResponseOfPaymentResponse';
import { ApiResponseOfPaymentResponses } from '../models/ApiResponseOfPaymentResponses';
import { BulkPaymentRequest } from '../models/BulkPaymentRequest';
import { PaymentRequest } from '../models/PaymentRequest';

/**
 * no description
 */
export class PaymentsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates a bulk payment after obtaining the user\'s authorisation. <br><br>Feature: `CREATE_BULK_PAYMENT`
     * Create Bulk Payment
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param bulkPaymentRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async createBulkPayment(consent: string, bulkPaymentRequest: BulkPaymentRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("PaymentsApi", "createBulkPayment", "consent");
        }


        // verify required parameter 'bulkPaymentRequest' is not null or undefined
        if (bulkPaymentRequest === null || bulkPaymentRequest === undefined) {
            throw new RequiredError("PaymentsApi", "createBulkPayment", "bulkPaymentRequest");
        }






        // Path Params
        const localVarPath = '/bulk-payments';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("consent", ObjectSerializer.serialize(consent, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-id", ObjectSerializer.serialize(psuId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-corporate-id", ObjectSerializer.serialize(psuCorporateId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-ip-address", ObjectSerializer.serialize(psuIpAddress, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bulkPaymentRequest, "BulkPaymentRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates a payment after obtaining the user\'s authorisation. <br><br>Features:<ul><li>`CREATE_DOMESTIC_PERIODIC_PAYMENT`</li><li>`CREATE_DOMESTIC_SCHEDULED_PAYMENT`</li><li>`CREATE_DOMESTIC_SINGLE_INSTANT_PAYMENT`</li><li>`CREATE_DOMESTIC_SINGLE_PAYMENT`</li><li>`CREATE_INTERNATIONAL_PERIODIC_PAYMENT`</li><li>`CREATE_INTERNATIONAL_SCHEDULED_PAYMENT`</li><li>`CREATE_INTERNATIONAL_SINGLE_PAYMENT`</li></ul>
     * Create Payment
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param paymentRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async createPayment(consent: string, paymentRequest: PaymentRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("PaymentsApi", "createPayment", "consent");
        }


        // verify required parameter 'paymentRequest' is not null or undefined
        if (paymentRequest === null || paymentRequest === undefined) {
            throw new RequiredError("PaymentsApi", "createPayment", "paymentRequest");
        }






        // Path Params
        const localVarPath = '/payments';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("consent", ObjectSerializer.serialize(consent, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-id", ObjectSerializer.serialize(psuId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-corporate-id", ObjectSerializer.serialize(psuCorporateId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-ip-address", ObjectSerializer.serialize(psuIpAddress, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(paymentRequest, "PaymentRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the details of a payment. <br><br>Most commonly used to check for payment status updates. <br><br>Feature: `EXISTING_PAYMENTS_DETAILS`
     * Get Payment Details
     * @param paymentId __Mandatory__. The payment Id of the payment.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async getPayments(paymentId: string, consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'paymentId' is not null or undefined
        if (paymentId === null || paymentId === undefined) {
            throw new RequiredError("PaymentsApi", "getPayments", "paymentId");
        }


        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("PaymentsApi", "getPayments", "consent");
        }






        // Path Params
        const localVarPath = '/payments/{paymentId}/details'
            .replace('{' + 'paymentId' + '}', encodeURIComponent(String(paymentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("consent", ObjectSerializer.serialize(consent, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-id", ObjectSerializer.serialize(psuId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-corporate-id", ObjectSerializer.serialize(psuCorporateId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-ip-address", ObjectSerializer.serialize(psuIpAddress, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class PaymentsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBulkPayment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBulkPaymentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfPaymentResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfPaymentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPaymentResponse", ""
            ) as ApiResponseOfPaymentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Error Response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfPaymentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPaymentResponse", ""
            ) as ApiResponseOfPaymentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPayment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPaymentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfPaymentResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfPaymentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPaymentResponse", ""
            ) as ApiResponseOfPaymentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Error Response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfPaymentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPaymentResponse", ""
            ) as ApiResponseOfPaymentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPayments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPaymentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfPaymentResponses >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfPaymentResponses = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPaymentResponses", ""
            ) as ApiResponseOfPaymentResponses;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Error Response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfPaymentResponses = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPaymentResponses", ""
            ) as ApiResponseOfPaymentResponses;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
