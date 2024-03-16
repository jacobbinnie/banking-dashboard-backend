// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiListResponseOfDataConstraints } from '../models/ApiListResponseOfDataConstraints';
import { ApiListResponseOfPaymentConstraints } from '../models/ApiListResponseOfPaymentConstraints';
import { ApiResponseError } from '../models/ApiResponseError';

/**
 * no description
 */
export class ConstraintsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get Data Constraints Rules against an Institution for Account Authorisation requests
     * Get Data Constraints Rules
     * @param institutionIds Unique Id(s) of the &#x60;Institution&#x60;(s) to retrieve the Data Constraints for. Multiple institutionIds need to be separated by &#x60;,&#x60;
     * @param institutionCountryCode Country code of the &#x60;Institution&#x60;(s). Ensure that the country code matches the respective institutionIds; any mismatch will result in an HTTP 404 error response.
     * @param endpointPath The path on the API that is associated with the operation for which constraints are to be retrieved
     * @param endpointMethod The HTTP method that is associated with the operation for which constraints are to be retrieved
     */
    public async getAccountConstraintsRulesByInstitution(institutionIds: Array<string>, institutionCountryCode: string, endpointPath?: string, endpointMethod?: 'POST' | 'PATCH' | 'PUT' | 'GET' | 'DELETE', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'institutionIds' is not null or undefined
        if (institutionIds === null || institutionIds === undefined) {
            throw new RequiredError("ConstraintsApi", "getAccountConstraintsRulesByInstitution", "institutionIds");
        }


        // verify required parameter 'institutionCountryCode' is not null or undefined
        if (institutionCountryCode === null || institutionCountryCode === undefined) {
            throw new RequiredError("ConstraintsApi", "getAccountConstraintsRulesByInstitution", "institutionCountryCode");
        }




        // Path Params
        const localVarPath = '/institutions/constraints/data';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (institutionIds !== undefined) {
            requestContext.setQueryParam("institutionIds", ObjectSerializer.serialize(institutionIds, "Array<string>", ""));
        }

        // Query Params
        if (institutionCountryCode !== undefined) {
            requestContext.setQueryParam("institutionCountryCode", ObjectSerializer.serialize(institutionCountryCode, "string", ""));
        }

        // Query Params
        if (endpointPath !== undefined) {
            requestContext.setQueryParam("endpointPath", ObjectSerializer.serialize(endpointPath, "string", ""));
        }

        // Query Params
        if (endpointMethod !== undefined) {
            requestContext.setQueryParam("endpointMethod", ObjectSerializer.serialize(endpointMethod, "'POST' | 'PATCH' | 'PUT' | 'GET' | 'DELETE'", ""));
        }


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
     * Retrieve institution specific constraints for payment authorisation and submission requests
     * Get Payment Constraints Rules
     * @param institutionIds Unique Id(s) of the &#x60;Institution&#x60;(s) to retrieve the Payment Constraints for. Multiple institutionIds need to be separated by &#x60;,&#x60;
     * @param institutionCountryCode Country code of the &#x60;Institution&#x60;(s). Ensure that the country code matches the respective institutionIds; any mismatch will result in an HTTP 404 error response.
     * @param paymentType Type of payment to retrieve payment constraints for
     * @param endpointPath The path on the API that is associated with the operation for which constraints are to be retrieved
     * @param endpointMethod The HTTP method that is associated with the operation for which constraints are to be retrieved
     */
    public async getPaymentConstraintsRulesByInstitution(institutionIds: Array<string>, institutionCountryCode: string, paymentType: 'DOMESTIC_PAYMENT' | 'DOMESTIC_INSTANT_PAYMENT' | 'DOMESTIC_VARIABLE_RECURRING_PAYMENT' | 'DOMESTIC_SCHEDULED_PAYMENT' | 'DOMESTIC_PERIODIC_PAYMENT' | 'INTERNATIONAL_PAYMENT' | 'INTERNATIONAL_SCHEDULED_PAYMENT' | 'INTERNATIONAL_PERIODIC_PAYMENT' | 'BULK_PAYMENT', endpointPath?: string, endpointMethod?: 'POST' | 'PATCH' | 'PUT' | 'GET' | 'DELETE', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'institutionIds' is not null or undefined
        if (institutionIds === null || institutionIds === undefined) {
            throw new RequiredError("ConstraintsApi", "getPaymentConstraintsRulesByInstitution", "institutionIds");
        }


        // verify required parameter 'institutionCountryCode' is not null or undefined
        if (institutionCountryCode === null || institutionCountryCode === undefined) {
            throw new RequiredError("ConstraintsApi", "getPaymentConstraintsRulesByInstitution", "institutionCountryCode");
        }


        // verify required parameter 'paymentType' is not null or undefined
        if (paymentType === null || paymentType === undefined) {
            throw new RequiredError("ConstraintsApi", "getPaymentConstraintsRulesByInstitution", "paymentType");
        }




        // Path Params
        const localVarPath = '/institutions/constraints/payments';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (institutionIds !== undefined) {
            requestContext.setQueryParam("institutionIds", ObjectSerializer.serialize(institutionIds, "Array<string>", ""));
        }

        // Query Params
        if (institutionCountryCode !== undefined) {
            requestContext.setQueryParam("institutionCountryCode", ObjectSerializer.serialize(institutionCountryCode, "string", ""));
        }

        // Query Params
        if (paymentType !== undefined) {
            requestContext.setQueryParam("paymentType", ObjectSerializer.serialize(paymentType, "'DOMESTIC_PAYMENT' | 'DOMESTIC_INSTANT_PAYMENT' | 'DOMESTIC_VARIABLE_RECURRING_PAYMENT' | 'DOMESTIC_SCHEDULED_PAYMENT' | 'DOMESTIC_PERIODIC_PAYMENT' | 'INTERNATIONAL_PAYMENT' | 'INTERNATIONAL_SCHEDULED_PAYMENT' | 'INTERNATIONAL_PERIODIC_PAYMENT' | 'BULK_PAYMENT'", ""));
        }

        // Query Params
        if (endpointPath !== undefined) {
            requestContext.setQueryParam("endpointPath", ObjectSerializer.serialize(endpointPath, "string", ""));
        }

        // Query Params
        if (endpointMethod !== undefined) {
            requestContext.setQueryParam("endpointMethod", ObjectSerializer.serialize(endpointMethod, "'POST' | 'PATCH' | 'PUT' | 'GET' | 'DELETE'", ""));
        }


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

export class ConstraintsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccountConstraintsRulesByInstitution
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAccountConstraintsRulesByInstitutionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListResponseOfDataConstraints >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListResponseOfDataConstraints = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfDataConstraints", ""
            ) as ApiListResponseOfDataConstraints;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Either authentication credentials were not supplied, or they were invalid.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Not Found.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Unexpected Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiListResponseOfDataConstraints = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfDataConstraints", ""
            ) as ApiListResponseOfDataConstraints;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPaymentConstraintsRulesByInstitution
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPaymentConstraintsRulesByInstitutionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListResponseOfPaymentConstraints >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListResponseOfPaymentConstraints = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfPaymentConstraints", ""
            ) as ApiListResponseOfPaymentConstraints;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Either authentication credentials were not supplied, or they were invalid.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Not Found.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Unexpected Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiListResponseOfPaymentConstraints = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfPaymentConstraints", ""
            ) as ApiListResponseOfPaymentConstraints;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
