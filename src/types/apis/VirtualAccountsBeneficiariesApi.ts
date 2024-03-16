// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiErrorResponse } from '../models/ApiErrorResponse';
import { ApiListResponseOfVirtualAccountBeneficiary } from '../models/ApiListResponseOfVirtualAccountBeneficiary';
import { ApiResponseOfVirtualAccountBeneficiary } from '../models/ApiResponseOfVirtualAccountBeneficiary';
import { Model401VirtualAccountsApiErrorResponse } from '../models/Model401VirtualAccountsApiErrorResponse';
import { Model403VirtualAccountsApiErrorResponse } from '../models/Model403VirtualAccountsApiErrorResponse';
import { Model404VirtualAccountsApiErrorResponse } from '../models/Model404VirtualAccountsApiErrorResponse';
import { Model424VirtualAccountsApiErrorResponse } from '../models/Model424VirtualAccountsApiErrorResponse';
import { Model500VirtualAccountsApiErrorResponse } from '../models/Model500VirtualAccountsApiErrorResponse';
import { VirtualAccountBeneficiaryRequest } from '../models/VirtualAccountBeneficiaryRequest';

/**
 * no description
 */
export class VirtualAccountsBeneficiariesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a new beneficiary (individual or business account) to which a Pay Out can be made. The beneficiary can be used from any virtual account that is held
     * Create Beneficiary
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountBeneficiaryRequest 
     */
    public async createVirtualAccountBeneficiary(clientId: string, virtualAccountBeneficiaryRequest: VirtualAccountBeneficiaryRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsBeneficiariesApi", "createVirtualAccountBeneficiary", "clientId");
        }


        // verify required parameter 'virtualAccountBeneficiaryRequest' is not null or undefined
        if (virtualAccountBeneficiaryRequest === null || virtualAccountBeneficiaryRequest === undefined) {
            throw new RequiredError("VirtualAccountsBeneficiariesApi", "createVirtualAccountBeneficiary", "virtualAccountBeneficiaryRequest");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/beneficiaries';

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
            ObjectSerializer.serialize(virtualAccountBeneficiaryRequest, "VirtualAccountBeneficiaryRequest", ""),
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
     * Delete a specific beneficiary (individual or business account)
     * Delete Beneficiary
     * @param beneficiaryId __Mandatory__. The Id of the beneficiary that will be deleted
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public async deleteVirtualAccountBeneficiary(beneficiaryId: string, clientId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'beneficiaryId' is not null or undefined
        if (beneficiaryId === null || beneficiaryId === undefined) {
            throw new RequiredError("VirtualAccountsBeneficiariesApi", "deleteVirtualAccountBeneficiary", "beneficiaryId");
        }


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsBeneficiariesApi", "deleteVirtualAccountBeneficiary", "clientId");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/beneficiaries/{beneficiaryId}'
            .replace('{' + 'beneficiaryId' + '}', encodeURIComponent(String(beneficiaryId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Gets the list of beneficiaries (individual or business account) to which a Pay Out can be made.
     * Get List Of Beneficiaries
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param cursor __Optional__. Data required to provide pagination
     */
    public async getVirtualAccountBeneficiaries(clientId: string, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsBeneficiariesApi", "getVirtualAccountBeneficiaries", "clientId");
        }



        // Path Params
        const localVarPath = '/virtual-accounts/beneficiaries';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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

    /**
     * Get the details of a specific beneficiary (individual or business account) to which a Pay Out can be made from its id.
     * Get Beneficiary
     * @param beneficiaryId __Mandatory__. The Id of the requested beneficiary.
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public async getVirtualAccountBeneficiary(beneficiaryId: string, clientId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'beneficiaryId' is not null or undefined
        if (beneficiaryId === null || beneficiaryId === undefined) {
            throw new RequiredError("VirtualAccountsBeneficiariesApi", "getVirtualAccountBeneficiary", "beneficiaryId");
        }


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsBeneficiariesApi", "getVirtualAccountBeneficiary", "clientId");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/beneficiaries/{beneficiaryId}'
            .replace('{' + 'beneficiaryId' + '}', encodeURIComponent(String(beneficiaryId)));

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

}

export class VirtualAccountsBeneficiariesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVirtualAccountBeneficiary
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVirtualAccountBeneficiaryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccountBeneficiary >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountBeneficiary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountBeneficiary", ""
            ) as ApiResponseOfVirtualAccountBeneficiary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountBeneficiary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountBeneficiary", ""
            ) as ApiResponseOfVirtualAccountBeneficiary;
            throw new ApiException<ApiResponseOfVirtualAccountBeneficiary>(response.httpStatusCode, "Conflict with another beneficiary with same account identifications", body, response.headers);
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
            const body: ApiResponseOfVirtualAccountBeneficiary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountBeneficiary", ""
            ) as ApiResponseOfVirtualAccountBeneficiary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteVirtualAccountBeneficiary
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteVirtualAccountBeneficiaryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Not Found. Requested beneficiary is not found", body, response.headers);
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
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVirtualAccountBeneficiaries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVirtualAccountBeneficiariesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListResponseOfVirtualAccountBeneficiary >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListResponseOfVirtualAccountBeneficiary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfVirtualAccountBeneficiary", ""
            ) as ApiListResponseOfVirtualAccountBeneficiary;
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
            const body: ApiListResponseOfVirtualAccountBeneficiary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfVirtualAccountBeneficiary", ""
            ) as ApiListResponseOfVirtualAccountBeneficiary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVirtualAccountBeneficiary
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVirtualAccountBeneficiaryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccountBeneficiary >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountBeneficiary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountBeneficiary", ""
            ) as ApiResponseOfVirtualAccountBeneficiary;
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
            const body: ApiResponseOfVirtualAccountBeneficiary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountBeneficiary", ""
            ) as ApiResponseOfVirtualAccountBeneficiary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
