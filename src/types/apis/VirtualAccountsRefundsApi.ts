// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiErrorResponse } from '../models/ApiErrorResponse';
import { ApiListResponseOfVirtualAccountRefund } from '../models/ApiListResponseOfVirtualAccountRefund';
import { ApiResponseOfVirtualAccountRefund } from '../models/ApiResponseOfVirtualAccountRefund';
import { Model401VirtualAccountsApiErrorResponse } from '../models/Model401VirtualAccountsApiErrorResponse';
import { Model403VirtualAccountsApiErrorResponse } from '../models/Model403VirtualAccountsApiErrorResponse';
import { Model424VirtualAccountsApiErrorResponse } from '../models/Model424VirtualAccountsApiErrorResponse';
import { Model500VirtualAccountsApiErrorResponse } from '../models/Model500VirtualAccountsApiErrorResponse';
import { VirtualAccountRefundRequest } from '../models/VirtualAccountRefundRequest';

/**
 * no description
 */
export class VirtualAccountsRefundsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a refund for a payment received into a virtual account. Funds are returned to the source account. When subscribed to `virtualAccount.refund.status` notifications, updates on the refund status are delivered asynchronously.
     * Create Refund
     * @param idempotencyKey Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountRefundRequest 
     */
    public async createVirtualAccountRefund(idempotencyKey: string, clientId: string, virtualAccountRefundRequest: VirtualAccountRefundRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'idempotencyKey' is not null or undefined
        if (idempotencyKey === null || idempotencyKey === undefined) {
            throw new RequiredError("VirtualAccountsRefundsApi", "createVirtualAccountRefund", "idempotencyKey");
        }


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsRefundsApi", "createVirtualAccountRefund", "clientId");
        }


        // verify required parameter 'virtualAccountRefundRequest' is not null or undefined
        if (virtualAccountRefundRequest === null || virtualAccountRefundRequest === undefined) {
            throw new RequiredError("VirtualAccountsRefundsApi", "createVirtualAccountRefund", "virtualAccountRefundRequest");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/refunds';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("idempotency-key", ObjectSerializer.serialize(idempotencyKey, "string", ""));

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(virtualAccountRefundRequest, "VirtualAccountRefundRequest", ""),
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
     * Get the details of a refund by its ID
     * Get Refund By Id
     * @param id __Mandatory__. The id of the refund
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public async getVirtualAccountRefundById(id: string, clientId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("VirtualAccountsRefundsApi", "getVirtualAccountRefundById", "id");
        }


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsRefundsApi", "getVirtualAccountRefundById", "clientId");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/refunds/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


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
     * Retrieve a list of refunds
     * Get list of refunds
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param paymentInitiationId __Optional__. Filter refunds based on unique ID of the original payment
     * @param status __Optional__.  Filter refunds based on refund status. One of INITIATED, SCHEDULED, PROCESSING, COMPLETED, FAILED
     * @param createdDateTimeAfter __Optional__.  Filter to get refunds created on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ)
     * @param createdDateTimeBefore __Optional__.  Filter to get refunds created on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ)
     * @param cursor __Optional__. Encoded pagination cursor to fetch next page
     */
    public async getVirtualAccountRefunds(clientId: string, paymentInitiationId?: string, status?: string, createdDateTimeAfter?: Date, createdDateTimeBefore?: Date, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsRefundsApi", "getVirtualAccountRefunds", "clientId");
        }







        // Path Params
        const localVarPath = '/virtual-accounts/refunds';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (paymentInitiationId !== undefined) {
            requestContext.setQueryParam("paymentInitiationId", ObjectSerializer.serialize(paymentInitiationId, "string", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "string", ""));
        }

        // Query Params
        if (createdDateTimeAfter !== undefined) {
            requestContext.setQueryParam("createdDateTimeAfter", ObjectSerializer.serialize(createdDateTimeAfter, "Date", "date-time"));
        }

        // Query Params
        if (createdDateTimeBefore !== undefined) {
            requestContext.setQueryParam("createdDateTimeBefore", ObjectSerializer.serialize(createdDateTimeBefore, "Date", "date-time"));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


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

export class VirtualAccountsRefundsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVirtualAccountRefund
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVirtualAccountRefundWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccountRefund >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountRefund = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountRefund", ""
            ) as ApiResponseOfVirtualAccountRefund;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfVirtualAccountRefund = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountRefund", ""
            ) as ApiResponseOfVirtualAccountRefund;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVirtualAccountRefundById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVirtualAccountRefundByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccountRefund >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountRefund = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountRefund", ""
            ) as ApiResponseOfVirtualAccountRefund;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfVirtualAccountRefund = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountRefund", ""
            ) as ApiResponseOfVirtualAccountRefund;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVirtualAccountRefunds
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVirtualAccountRefundsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListResponseOfVirtualAccountRefund >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListResponseOfVirtualAccountRefund = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfVirtualAccountRefund", ""
            ) as ApiListResponseOfVirtualAccountRefund;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiListResponseOfVirtualAccountRefund = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfVirtualAccountRefund", ""
            ) as ApiListResponseOfVirtualAccountRefund;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
