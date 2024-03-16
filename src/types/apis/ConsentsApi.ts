// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiErrorResponse } from '../models/ApiErrorResponse';
import { ApiListResponseOfConsent } from '../models/ApiListResponseOfConsent';
import { ApiResponseError } from '../models/ApiResponseError';
import { ApiResponseOfConsent } from '../models/ApiResponseOfConsent';
import { ApiResponseOfConsentDeleteResponse } from '../models/ApiResponseOfConsentDeleteResponse';
import { Consent } from '../models/Consent';
import { ConsentAuthCodeRequest } from '../models/ConsentAuthCodeRequest';
import { ExtendConsentRequest } from '../models/ExtendConsentRequest';
import { OneTimeTokenRequest } from '../models/OneTimeTokenRequest';

/**
 * no description
 */
export class ConsentsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete a consent using the consent Id
     * Delete Consent
     * @param consentId __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @param forceDelete __Optional__. Whether to force the deletion.
     */
    public async _delete(consentId: string, forceDelete?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentId' is not null or undefined
        if (consentId === null || consentId === undefined) {
            throw new RequiredError("ConsentsApi", "_delete", "consentId");
        }



        // Path Params
        const localVarPath = '/consents/{consentId}'
            .replace('{' + 'consentId' + '}', encodeURIComponent(String(consentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (forceDelete !== undefined) {
            requestContext.setQueryParam("forceDelete", ObjectSerializer.serialize(forceDelete, "boolean", ""));
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
     * Used to obtain a Yapily Consent object containing the `consentToken` once the user has authenticated and you have an OAuth2 authorisation code `auth-code` and state `auth-state`.
     * Exchange OAuth2 Code
     * @param consentAuthCodeRequest 
     */
    public async createConsentWithCode(consentAuthCodeRequest: ConsentAuthCodeRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentAuthCodeRequest' is not null or undefined
        if (consentAuthCodeRequest === null || consentAuthCodeRequest === undefined) {
            throw new RequiredError("ConsentsApi", "createConsentWithCode", "consentAuthCodeRequest");
        }


        // Path Params
        const localVarPath = '/consent-auth-code';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(consentAuthCodeRequest, "ConsentAuthCodeRequest", ""),
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
     * Used to indicate to Yapily that reconfirmation has occurred for a given Consent, and to update lastUpdatedAt and reconfirmBy for that Consent. Returns the Consent.
     * Extend Consent
     * @param consentId __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @param extendConsentRequest 
     */
    public async extendConsent(consentId: string, extendConsentRequest: ExtendConsentRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentId' is not null or undefined
        if (consentId === null || consentId === undefined) {
            throw new RequiredError("ConsentsApi", "extendConsent", "consentId");
        }


        // verify required parameter 'extendConsentRequest' is not null or undefined
        if (extendConsentRequest === null || extendConsentRequest === undefined) {
            throw new RequiredError("ConsentsApi", "extendConsent", "extendConsentRequest");
        }


        // Path Params
        const localVarPath = '/consents/{consentId}/extend'
            .replace('{' + 'consentId' + '}', encodeURIComponent(String(consentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(extendConsentRequest, "ExtendConsentRequest", ""),
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
     * Get consent using the consent Id
     * Get Consent
     * @param consentId __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     */
    public async getConsentById(consentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentId' is not null or undefined
        if (consentId === null || consentId === undefined) {
            throw new RequiredError("ConsentsApi", "getConsentById", "consentId");
        }


        // Path Params
        const localVarPath = '/consents/{consentId}'
            .replace('{' + 'consentId' + '}', encodeURIComponent(String(consentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Exchange a One-time-token for the consent token
     * Exchange One Time Token
     * @param oneTimeTokenRequest 
     */
    public async getConsentBySingleAccessConsent(oneTimeTokenRequest: OneTimeTokenRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'oneTimeTokenRequest' is not null or undefined
        if (oneTimeTokenRequest === null || oneTimeTokenRequest === undefined) {
            throw new RequiredError("ConsentsApi", "getConsentBySingleAccessConsent", "oneTimeTokenRequest");
        }


        // Path Params
        const localVarPath = '/consent-one-time-token';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(oneTimeTokenRequest, "OneTimeTokenRequest", ""),
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
     * Used to retrieve all the consents created for each user within an application
     * Get Consents
     * @param filterApplicationUserId __Optional__. Filter records based on the list of &#x60;applicationUserId&#x60; users provided.
     * @param filterUserUuid __Optional__. Filter records based on the list of &#x60;userUuid&#x60; users provided.
     * @param filterInstitution __Optional__. Filter records based on the list of &#x60;Institution&#x60; provided.
     * @param filterStatus __Optional__. Filter records based on the list of &#x60;Consent&#x60; [statuses](https://docs.yapily.com/api/reference/#operation/getConsents!c&#x3D;200&amp;path&#x3D;data/status&amp;t&#x3D;response).
     * @param _from __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ). 
     * @param before __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).
     * @param limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param offset __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
     */
    public async getConsents(filterApplicationUserId?: Set<string>, filterUserUuid?: Set<string>, filterInstitution?: Set<string>, filterStatus?: Set<string>, _from?: string, before?: string, limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/consents';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterApplicationUserId !== undefined) {
            requestContext.setQueryParam("filter[applicationUserId]", ObjectSerializer.serialize(filterApplicationUserId, "Set<string>", ""));
        }

        // Query Params
        if (filterUserUuid !== undefined) {
            requestContext.setQueryParam("filter[userUuid]", ObjectSerializer.serialize(filterUserUuid, "Set<string>", "uuid"));
        }

        // Query Params
        if (filterInstitution !== undefined) {
            requestContext.setQueryParam("filter[institution]", ObjectSerializer.serialize(filterInstitution, "Set<string>", ""));
        }

        // Query Params
        if (filterStatus !== undefined) {
            requestContext.setQueryParam("filter[status]", ObjectSerializer.serialize(filterStatus, "Set<string>", ""));
        }

        // Query Params
        if (_from !== undefined) {
            requestContext.setQueryParam("from", ObjectSerializer.serialize(_from, "string", ""));
        }

        // Query Params
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int32"));
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

export class ConsentsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to _delete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async _deleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfConsentDeleteResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfConsentDeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfConsentDeleteResponse", ""
            ) as ApiResponseOfConsentDeleteResponse;
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
            const body: ApiResponseOfConsentDeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfConsentDeleteResponse", ""
            ) as ApiResponseOfConsentDeleteResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createConsentWithCode
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createConsentWithCodeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Consent >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Consent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Consent", ""
            ) as Consent;
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
            const body: Consent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Consent", ""
            ) as Consent;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to extendConsent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async extendConsentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfConsent >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfConsent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfConsent", ""
            ) as ApiResponseOfConsent;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Error Response. The supplied lastConfirmedAt date, Consent type, or Consent status is invalid.", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Error Response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfConsent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfConsent", ""
            ) as ApiResponseOfConsent;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getConsentById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getConsentByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfConsent >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfConsent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfConsent", ""
            ) as ApiResponseOfConsent;
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
            const body: ApiResponseOfConsent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfConsent", ""
            ) as ApiResponseOfConsent;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getConsentBySingleAccessConsent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getConsentBySingleAccessConsentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Consent >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Consent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Consent", ""
            ) as Consent;
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
            const body: Consent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Consent", ""
            ) as Consent;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getConsents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getConsentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListResponseOfConsent >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListResponseOfConsent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfConsent", ""
            ) as ApiListResponseOfConsent;
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
            const body: ApiListResponseOfConsent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfConsent", ""
            ) as ApiListResponseOfConsent;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
