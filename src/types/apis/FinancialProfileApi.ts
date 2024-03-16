// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiResponseError } from '../models/ApiResponseError';
import { ApiResponseOfFinancialProfile } from '../models/ApiResponseOfFinancialProfile';
import { ApiResponseOfFinancialProfileAuthorisationResponse } from '../models/ApiResponseOfFinancialProfileAuthorisationResponse';
import { ApiResponseOfFinancialProfileBalancePrediction } from '../models/ApiResponseOfFinancialProfileBalancePrediction';
import { ApiResponseOfFinancialProfileConsent } from '../models/ApiResponseOfFinancialProfileConsent';
import { ApiResponseOfFinancialProfileConsentRemoveResponse } from '../models/ApiResponseOfFinancialProfileConsentRemoveResponse';

/**
 * no description
 */
export class FinancialProfileApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Used to add a consent to a `Financial Profile` for a `User`.  The response is asynchronous, returned with pending status, while retrieval of financial data is commenced.  There is a limit of 10,000 transactions for enrichment.
     * Create Profile Consent
     * @param userUuid __Mandatory__. The Yapily generated UUID for the user.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; obtained from the original authorisation.
     */
    public async createProfileConsent(userUuid: string, consent: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userUuid' is not null or undefined
        if (userUuid === null || userUuid === undefined) {
            throw new RequiredError("FinancialProfileApi", "createProfileConsent", "userUuid");
        }


        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("FinancialProfileApi", "createProfileConsent", "consent");
        }


        // Path Params
        const localVarPath = '/users/{userUuid}/profile/consents'
            .replace('{' + 'userUuid' + '}', encodeURIComponent(String(userUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("consent", ObjectSerializer.serialize(consent, "string", ""));


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
     * Used to delete a `ProfileConsent` for a `User`. This will remove the consent and all associated financial data from the \'Financial Profile\'.
     * Delete Profile Consent
     * @param userUuid __Mandatory__. The Yapily generated UUID for the user.
     * @param profileConsentId __Mandatory__. The ID of the ProfileConsent
     */
    public async deleteProfileConsent(userUuid: string, profileConsentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userUuid' is not null or undefined
        if (userUuid === null || userUuid === undefined) {
            throw new RequiredError("FinancialProfileApi", "deleteProfileConsent", "userUuid");
        }


        // verify required parameter 'profileConsentId' is not null or undefined
        if (profileConsentId === null || profileConsentId === undefined) {
            throw new RequiredError("FinancialProfileApi", "deleteProfileConsent", "profileConsentId");
        }


        // Path Params
        const localVarPath = '/users/{userUuid}/profile/consents/{profileConsentId}'
            .replace('{' + 'userUuid' + '}', encodeURIComponent(String(userUuid)))
            .replace('{' + 'profileConsentId' + '}', encodeURIComponent(String(profileConsentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Used to retrieve a `Balance Prediction Profile` for a `User`.  Status will be `PENDING` until all ProfileConsents are `COMPLETED`.
     * Get Predicted Balances
     * @param userUuid __Mandatory__. The Yapily generated UUID for the user.
     */
    public async getBalancePrediction(userUuid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userUuid' is not null or undefined
        if (userUuid === null || userUuid === undefined) {
            throw new RequiredError("FinancialProfileApi", "getBalancePrediction", "userUuid");
        }


        // Path Params
        const localVarPath = '/users/{userUuid}/profile/predicted-balances'
            .replace('{' + 'userUuid' + '}', encodeURIComponent(String(userUuid)));

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
     * Used to retrieve a specific ProfileConsent for a User.
     * Get Profile Consent
     * @param userUuid __Mandatory__. The Yapily generated UUID for the user.
     * @param profileConsentId __Mandatory__. The ID of the ProfileConsent
     */
    public async getProfileConsent(userUuid: string, profileConsentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userUuid' is not null or undefined
        if (userUuid === null || userUuid === undefined) {
            throw new RequiredError("FinancialProfileApi", "getProfileConsent", "userUuid");
        }


        // verify required parameter 'profileConsentId' is not null or undefined
        if (profileConsentId === null || profileConsentId === undefined) {
            throw new RequiredError("FinancialProfileApi", "getProfileConsent", "profileConsentId");
        }


        // Path Params
        const localVarPath = '/users/{userUuid}/profile/consents/{profileConsentId}'
            .replace('{' + 'userUuid' + '}', encodeURIComponent(String(userUuid)))
            .replace('{' + 'profileConsentId' + '}', encodeURIComponent(String(profileConsentId)));

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
     * Used to retrieve a `TransactionGroups` for a `User`.  Status will be `PENDING` until all ProfileConsents are `COMPLETED`.
     * Get Transaction Groups
     * @param userUuid __Mandatory__. The Yapily generated UUID for the user.
     */
    public async getUserProfile(userUuid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userUuid' is not null or undefined
        if (userUuid === null || userUuid === undefined) {
            throw new RequiredError("FinancialProfileApi", "getUserProfile", "userUuid");
        }


        // Path Params
        const localVarPath = '/users/{userUuid}/profile/transaction-groups'
            .replace('{' + 'userUuid' + '}', encodeURIComponent(String(userUuid)));

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

}

export class FinancialProfileApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createProfileConsent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createProfileConsentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfFinancialProfileAuthorisationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfFinancialProfileAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfFinancialProfileAuthorisationResponse", ""
            ) as ApiResponseOfFinancialProfileAuthorisationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Bad Request.  Returned if the userUuid is not a valid UUID.", body, response.headers);
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
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Not Found.  Returned if the userUuid is not found for the &#x60;Application&#x60;.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfFinancialProfileAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfFinancialProfileAuthorisationResponse", ""
            ) as ApiResponseOfFinancialProfileAuthorisationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteProfileConsent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteProfileConsentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfFinancialProfileConsentRemoveResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfFinancialProfileConsentRemoveResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfFinancialProfileConsentRemoveResponse", ""
            ) as ApiResponseOfFinancialProfileConsentRemoveResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Bad Request.  Returned if the userUuid is not a valid UUID.", body, response.headers);
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
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Not Found.  Returned if the userUuid or ProfileConsent is not found for the &#x60;Application&#x60;.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfFinancialProfileConsentRemoveResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfFinancialProfileConsentRemoveResponse", ""
            ) as ApiResponseOfFinancialProfileConsentRemoveResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBalancePrediction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBalancePredictionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfFinancialProfileBalancePrediction >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfFinancialProfileBalancePrediction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfFinancialProfileBalancePrediction", ""
            ) as ApiResponseOfFinancialProfileBalancePrediction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Bad Request.  Returned if the userUuid is not a valid UUID.", body, response.headers);
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
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Not Found.  Returned if the userUuid is not found for the &#x60;Application&#x60;, or data not found for the userUuid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfFinancialProfileBalancePrediction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfFinancialProfileBalancePrediction", ""
            ) as ApiResponseOfFinancialProfileBalancePrediction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProfileConsent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getProfileConsentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfFinancialProfileConsent >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfFinancialProfileConsent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfFinancialProfileConsent", ""
            ) as ApiResponseOfFinancialProfileConsent;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Bad Request.  Returned if the userUuid is not a valid UUID.", body, response.headers);
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
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Not Found.  Returned if the userUuid or ProfileConsent is not found for the &#x60;Application&#x60;.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfFinancialProfileConsent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfFinancialProfileConsent", ""
            ) as ApiResponseOfFinancialProfileConsent;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserProfile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUserProfileWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfFinancialProfile >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfFinancialProfile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfFinancialProfile", ""
            ) as ApiResponseOfFinancialProfile;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Bad Request.  Returned if the userUuid is not a valid UUID.", body, response.headers);
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
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Not Found.  Returned if the userUuid is not found for the &#x60;Application&#x60;.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfFinancialProfile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfFinancialProfile", ""
            ) as ApiResponseOfFinancialProfile;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
