// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiErrorResponse } from '../models/ApiErrorResponse';
import { ApiListResponseOfVirtualAccountClient } from '../models/ApiListResponseOfVirtualAccountClient';
import { ApiResponseOfVirtualAccountClient } from '../models/ApiResponseOfVirtualAccountClient';
import { Model401VirtualAccountsApiErrorResponse } from '../models/Model401VirtualAccountsApiErrorResponse';
import { Model403VirtualAccountsApiErrorResponse } from '../models/Model403VirtualAccountsApiErrorResponse';
import { Model404VirtualAccountsApiErrorResponse } from '../models/Model404VirtualAccountsApiErrorResponse';
import { Model424VirtualAccountsApiErrorResponse } from '../models/Model424VirtualAccountsApiErrorResponse';
import { Model500VirtualAccountsApiErrorResponse } from '../models/Model500VirtualAccountsApiErrorResponse';
import { VirtualAccountClientRequest } from '../models/VirtualAccountClientRequest';

/**
 * no description
 */
export class VirtualAccountsClientsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a new virtual account client (individual or business client). Available for clients who have direct onboarding permissions only. Please contact your CSM to enquire about access
     * Create Virtual Account Client
     * @param clientId __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     * @param virtualAccountClientRequest 
     */
    public async createVirtualAccountClient(clientId: string, virtualAccountClientRequest: VirtualAccountClientRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsClientsApi", "createVirtualAccountClient", "clientId");
        }


        // verify required parameter 'virtualAccountClientRequest' is not null or undefined
        if (virtualAccountClientRequest === null || virtualAccountClientRequest === undefined) {
            throw new RequiredError("VirtualAccountsClientsApi", "createVirtualAccountClient", "virtualAccountClientRequest");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/clients';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(virtualAccountClientRequest, "VirtualAccountClientRequest", ""),
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
     * Get a Virtual Account Client using its ID. Restricted to applications with direct onboarding permissions only
     * Get a Virtual Account Client by ID
     * @param clientId __Mandatory__. The ID of the client.
     * @param clientId2 __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     */
    public async getVirtualAccountClientById(clientId: string, clientId2: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsClientsApi", "getVirtualAccountClientById", "clientId");
        }


        // verify required parameter 'clientId2' is not null or undefined
        if (clientId2 === null || clientId2 === undefined) {
            throw new RequiredError("VirtualAccountsClientsApi", "getVirtualAccountClientById", "clientId2");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/clients/{clientId}'
            .replace('{' + 'clientId' + '}', encodeURIComponent(String(clientId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId2, "string", "uuid"));


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
     * Get Virtual Account Clients (individual or business client).
     * Get List of Virtual Account Clients
     * @param clientId __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     * @param type __Optional__.  Filter clients based on client type. One of BUSINESS or INDIVIDUAL
     * @param status __Optional__.  Filter clients based on client status. One of ACTIVE, PENDING or SUSPENDED
     * @param cursor __Optional__. Data required to provide pagination
     */
    public async getVirtualAccountClients(clientId: string, type?: string, status?: string, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsClientsApi", "getVirtualAccountClients", "clientId");
        }





        // Path Params
        const localVarPath = '/virtual-accounts/clients';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "string", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "string", ""));
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

export class VirtualAccountsClientsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVirtualAccountClient
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVirtualAccountClientWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccountClient >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountClient = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountClient", ""
            ) as ApiResponseOfVirtualAccountClient;
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
            const body: ApiResponseOfVirtualAccountClient = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountClient", ""
            ) as ApiResponseOfVirtualAccountClient;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVirtualAccountClientById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVirtualAccountClientByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccountClient >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountClient = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountClient", ""
            ) as ApiResponseOfVirtualAccountClient;
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
            throw new ApiException<Model404VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Not Found. Resource requested is not found.", body, response.headers);
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
            const body: ApiResponseOfVirtualAccountClient = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountClient", ""
            ) as ApiResponseOfVirtualAccountClient;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVirtualAccountClients
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVirtualAccountClientsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListResponseOfVirtualAccountClient >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListResponseOfVirtualAccountClient = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfVirtualAccountClient", ""
            ) as ApiListResponseOfVirtualAccountClient;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "A failure occured during interaction with a third party provider", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Unexpected Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiListResponseOfVirtualAccountClient = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfVirtualAccountClient", ""
            ) as ApiListResponseOfVirtualAccountClient;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
