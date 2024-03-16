// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiErrorResponse } from '../models/ApiErrorResponse';
import { ApiListResponseOfVirtualAccountPayment } from '../models/ApiListResponseOfVirtualAccountPayment';
import { ApiResponseOfVirtualAccountPayInDetails } from '../models/ApiResponseOfVirtualAccountPayInDetails';
import { ApiResponseOfVirtualAccountPayment } from '../models/ApiResponseOfVirtualAccountPayment';
import { Model401VirtualAccountsApiErrorResponse } from '../models/Model401VirtualAccountsApiErrorResponse';
import { Model403VirtualAccountsApiErrorResponse } from '../models/Model403VirtualAccountsApiErrorResponse';
import { Model404VirtualAccountsApiErrorResponse } from '../models/Model404VirtualAccountsApiErrorResponse';
import { Model424VirtualAccountsApiErrorResponse } from '../models/Model424VirtualAccountsApiErrorResponse';
import { Model500VirtualAccountsApiErrorResponse } from '../models/Model500VirtualAccountsApiErrorResponse';
import { VirtualAccountPayOutRequest } from '../models/VirtualAccountPayOutRequest';
import { VirtualAccountTransferRequest } from '../models/VirtualAccountTransferRequest';

/**
 * no description
 */
export class VirtualAccountsPaymentsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Initiate a payment from a specified virtual account to a previously added beneficiary using any of the schemes that it supports <br> When subscribed to virtualAccount.payOut.status notifications, further updates on payment processing status will be delivered asynchronously 
     * Create Pay Out
     * @param idempotencyKey Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountPayOutRequest 
     */
    public async createVirtualAccountPayOut(idempotencyKey: string, clientId: string, virtualAccountPayOutRequest: VirtualAccountPayOutRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'idempotencyKey' is not null or undefined
        if (idempotencyKey === null || idempotencyKey === undefined) {
            throw new RequiredError("VirtualAccountsPaymentsApi", "createVirtualAccountPayOut", "idempotencyKey");
        }


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsPaymentsApi", "createVirtualAccountPayOut", "clientId");
        }


        // verify required parameter 'virtualAccountPayOutRequest' is not null or undefined
        if (virtualAccountPayOutRequest === null || virtualAccountPayOutRequest === undefined) {
            throw new RequiredError("VirtualAccountsPaymentsApi", "createVirtualAccountPayOut", "virtualAccountPayOutRequest");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/payments/pay-outs';

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
            ObjectSerializer.serialize(virtualAccountPayOutRequest, "VirtualAccountPayOutRequest", ""),
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
     * Create a transfer between two virtual accounts
     * Create Virtual Account Transfer
     * @param idempotencyKey Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountTransferRequest 
     */
    public async createVirtualAccountTransfer(idempotencyKey: string, clientId: string, virtualAccountTransferRequest: VirtualAccountTransferRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'idempotencyKey' is not null or undefined
        if (idempotencyKey === null || idempotencyKey === undefined) {
            throw new RequiredError("VirtualAccountsPaymentsApi", "createVirtualAccountTransfer", "idempotencyKey");
        }


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsPaymentsApi", "createVirtualAccountTransfer", "clientId");
        }


        // verify required parameter 'virtualAccountTransferRequest' is not null or undefined
        if (virtualAccountTransferRequest === null || virtualAccountTransferRequest === undefined) {
            throw new RequiredError("VirtualAccountsPaymentsApi", "createVirtualAccountTransfer", "virtualAccountTransferRequest");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/payments/transfers';

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
            ObjectSerializer.serialize(virtualAccountTransferRequest, "VirtualAccountTransferRequest", ""),
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
     * Get the details of a pay-in transaction
     * Get Pay-In Details
     * @param paymentId Uniquely identifies a transaction
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public async getPayInDetails(paymentId: string, clientId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'paymentId' is not null or undefined
        if (paymentId === null || paymentId === undefined) {
            throw new RequiredError("VirtualAccountsPaymentsApi", "getPayInDetails", "paymentId");
        }


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsPaymentsApi", "getPayInDetails", "clientId");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/payments/{paymentId}/pay-in-details'
            .replace('{' + 'paymentId' + '}', encodeURIComponent(String(paymentId)));

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
     * Get the details of a specific payment using its Id
     * Get Payment
     * @param id __Mandatory__. The id of the payment
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public async getPaymentsById(id: string, clientId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("VirtualAccountsPaymentsApi", "getPaymentsById", "id");
        }


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsPaymentsApi", "getPaymentsById", "clientId");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/payments/{id}'
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
     * Retrieve a list of virtual account payments
     * Get Payments
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param accountId __Optional__. Filter payments based on accountId
     * @param createdDateTimeFrom __Optional__. Filter payments based on the createdDateTime
     * @param createdDateTimeTo __Optional__. Filter payments based on the createdDateTime
     * @param status __Optional__. Filter payments based on the payment status. One of INITIATED, PENDING, PROCESSING, COMPLETED, FAILED
     * @param type __Optional__. Filter payments based on the payment type. One of PAY_IN, PAY_OUT, RETURN_IN, RETURN_OUT
     * @param cursor __Optional__. Data required to provide pagination
     */
    public async getVirtualAccountPayments(clientId: string, accountId?: string, createdDateTimeFrom?: Date, createdDateTimeTo?: Date, status?: Array<string>, type?: Array<string>, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsPaymentsApi", "getVirtualAccountPayments", "clientId");
        }








        // Path Params
        const localVarPath = '/virtual-accounts/payments';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (accountId !== undefined) {
            requestContext.setQueryParam("accountId", ObjectSerializer.serialize(accountId, "string", ""));
        }

        // Query Params
        if (createdDateTimeFrom !== undefined) {
            requestContext.setQueryParam("createdDateTimeFrom", ObjectSerializer.serialize(createdDateTimeFrom, "Date", "date-time"));
        }

        // Query Params
        if (createdDateTimeTo !== undefined) {
            requestContext.setQueryParam("createdDateTimeTo", ObjectSerializer.serialize(createdDateTimeTo, "Date", "date-time"));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<string>", ""));
        }

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "Array<string>", ""));
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

export class VirtualAccountsPaymentsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVirtualAccountPayOut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVirtualAccountPayOutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccountPayment >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountPayment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountPayment", ""
            ) as ApiResponseOfVirtualAccountPayment;
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
            const body: ApiResponseOfVirtualAccountPayment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountPayment", ""
            ) as ApiResponseOfVirtualAccountPayment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVirtualAccountTransfer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVirtualAccountTransferWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccountPayment >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountPayment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountPayment", ""
            ) as ApiResponseOfVirtualAccountPayment;
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
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
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
            const body: ApiResponseOfVirtualAccountPayment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountPayment", ""
            ) as ApiResponseOfVirtualAccountPayment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPayInDetails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPayInDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccountPayInDetails >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountPayInDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountPayInDetails", ""
            ) as ApiResponseOfVirtualAccountPayInDetails;
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Model404VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model404VirtualAccountsApiErrorResponse", ""
            ) as Model404VirtualAccountsApiErrorResponse;
            throw new ApiException<Model404VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Not Found. Requested beneficiary is not found.", body, response.headers);
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
            const body: ApiResponseOfVirtualAccountPayInDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountPayInDetails", ""
            ) as ApiResponseOfVirtualAccountPayInDetails;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPaymentsById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPaymentsByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccountPayment >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountPayment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountPayment", ""
            ) as ApiResponseOfVirtualAccountPayment;
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Model404VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model404VirtualAccountsApiErrorResponse", ""
            ) as Model404VirtualAccountsApiErrorResponse;
            throw new ApiException<Model404VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Not Found. Requested payment is not found.", body, response.headers);
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
            const body: ApiResponseOfVirtualAccountPayment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountPayment", ""
            ) as ApiResponseOfVirtualAccountPayment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVirtualAccountPayments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVirtualAccountPaymentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListResponseOfVirtualAccountPayment >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListResponseOfVirtualAccountPayment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfVirtualAccountPayment", ""
            ) as ApiListResponseOfVirtualAccountPayment;
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
            const body: ApiListResponseOfVirtualAccountPayment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfVirtualAccountPayment", ""
            ) as ApiListResponseOfVirtualAccountPayment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
