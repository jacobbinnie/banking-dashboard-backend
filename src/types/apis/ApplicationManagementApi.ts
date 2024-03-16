// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiErrorResponse } from '../models/ApiErrorResponse';
import { ApiListOfApplicationResponse } from '../models/ApiListOfApplicationResponse';
import { ApiResponseOfApplicationResponse } from '../models/ApiResponseOfApplicationResponse';
import { ApplicationRequest } from '../models/ApplicationRequest';
import { Model401VirtualAccountsApiErrorResponse } from '../models/Model401VirtualAccountsApiErrorResponse';
import { Model403VirtualAccountsApiErrorResponse } from '../models/Model403VirtualAccountsApiErrorResponse';
import { Model404VirtualAccountsApiErrorResponse } from '../models/Model404VirtualAccountsApiErrorResponse';
import { Model500VirtualAccountsApiErrorResponse } from '../models/Model500VirtualAccountsApiErrorResponse';
import { SearchApplicationsPublicFilterValuesParameter } from '../models/SearchApplicationsPublicFilterValuesParameter';
import { ValidationErrorResponse } from '../models/ValidationErrorResponse';
import { VrpConfiguration } from '../models/VrpConfiguration';

/**
 * no description
 */
export class ApplicationManagementApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create application vrp configuration
     * Create application VRP configuration by Application Id
     * @param applicationId The id of the application that vrp configuration being created for
     * @param vrpConfiguration The vrp configuration to create
     */
    public async createApplicationVRPConfigurationByApplicationId(applicationId: string, vrpConfiguration: VrpConfiguration, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("ApplicationManagementApi", "createApplicationVRPConfigurationByApplicationId", "applicationId");
        }


        // verify required parameter 'vrpConfiguration' is not null or undefined
        if (vrpConfiguration === null || vrpConfiguration === undefined) {
            throw new RequiredError("ApplicationManagementApi", "createApplicationVRPConfigurationByApplicationId", "vrpConfiguration");
        }


        // Path Params
        const localVarPath = '/applications/{applicationId}/vrp'
            .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(vrpConfiguration, "VrpConfiguration", ""),
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
     * Creates a sub-application under the given root application id provided in the authentication token. The sub-application can use the root\'s credentials to call the API
     * Creates a sub-application for the root application id provided in the authentication token
     * @param applicationRequest The sub-application to create
     */
    public async createSubApplication(applicationRequest: ApplicationRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationRequest' is not null or undefined
        if (applicationRequest === null || applicationRequest === undefined) {
            throw new RequiredError("ApplicationManagementApi", "createSubApplication", "applicationRequest");
        }


        // Path Params
        const localVarPath = '/applications';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(applicationRequest, "ApplicationRequest", ""),
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
     * Deletes the application with the given ID in the path
     * Delete an application
     * @param applicationId The id of the application being deleted
     */
    public async deleteApplication(applicationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("ApplicationManagementApi", "deleteApplication", "applicationId");
        }


        // Path Params
        const localVarPath = '/applications/{applicationId}'
            .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)));

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
     * Retrieves an application by the id provided in the path
     * Get application details
     * @param applicationId The id of the application being fetched
     */
    public async getApplicationById(applicationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("ApplicationManagementApi", "getApplicationById", "applicationId");
        }


        // Path Params
        const localVarPath = '/applications/{applicationId}'
            .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)));

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
     * Get application vrp configuration
     * Get application VRP configuration by Application Id
     * @param applicationId The id of the application that vrp configuration being created for
     */
    public async getApplicationVRPConfigurationByApplicationId(applicationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("ApplicationManagementApi", "getApplicationVRPConfigurationByApplicationId", "applicationId");
        }


        // Path Params
        const localVarPath = '/applications/{applicationId}/vrp'
            .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)));

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
     * Retrieves sub-applications for the root application provided in the authentication token. If a sub-application is provided in the authentication token, it will return an empty list.
     * Retrieve sub-applications for the root application provided in the authentication token.
     * @param publicFilterValues 
     */
    public async searchApplications(publicFilterValues?: SearchApplicationsPublicFilterValuesParameter, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/applications';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (publicFilterValues !== undefined) {
            requestContext.setQueryParam("publicFilterValues", ObjectSerializer.serialize(publicFilterValues, "SearchApplicationsPublicFilterValuesParameter", ""));
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
     * Updates the application properties for the application with the given ID in the path
     * Update an Application
     * @param applicationId The id of the application being updated
     * @param applicationRequest The application to update
     */
    public async updateApplication(applicationId: string, applicationRequest: ApplicationRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("ApplicationManagementApi", "updateApplication", "applicationId");
        }


        // verify required parameter 'applicationRequest' is not null or undefined
        if (applicationRequest === null || applicationRequest === undefined) {
            throw new RequiredError("ApplicationManagementApi", "updateApplication", "applicationRequest");
        }


        // Path Params
        const localVarPath = '/applications/{applicationId}'
            .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(applicationRequest, "ApplicationRequest", ""),
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
     * Update application vrp configuration
     * Update application VRP configuration by Application Id
     * @param applicationId The id of the application that vrp configuration being created for
     * @param vrpConfiguration The vrp configuration to create
     */
    public async updateApplicationVRPConfigurationByApplicationId(applicationId: string, vrpConfiguration: VrpConfiguration, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("ApplicationManagementApi", "updateApplicationVRPConfigurationByApplicationId", "applicationId");
        }


        // verify required parameter 'vrpConfiguration' is not null or undefined
        if (vrpConfiguration === null || vrpConfiguration === undefined) {
            throw new RequiredError("ApplicationManagementApi", "updateApplicationVRPConfigurationByApplicationId", "vrpConfiguration");
        }


        // Path Params
        const localVarPath = '/applications/{applicationId}/vrp'
            .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(vrpConfiguration, "VrpConfiguration", ""),
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

}

export class ApplicationManagementApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createApplicationVRPConfigurationByApplicationId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createApplicationVRPConfigurationByApplicationIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrorResponse", ""
            ) as ValidationErrorResponse;
            throw new ApiException<ValidationErrorResponse>(response.httpStatusCode, "There are validation errors", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Either authentication credentials were not supplied, or they were invalid.", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden from accessing the requested Application.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Model404VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model404VirtualAccountsApiErrorResponse", ""
            ) as Model404VirtualAccountsApiErrorResponse;
            throw new ApiException<Model404VirtualAccountsApiErrorResponse>(response.httpStatusCode, "VRP Configuration with given application id not found.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "An unexpected error occurred.", body, response.headers);
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
     * @params response Response returned by the server for a request to createSubApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createSubApplicationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfApplicationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfApplicationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfApplicationResponse", ""
            ) as ApiResponseOfApplicationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrorResponse", ""
            ) as ValidationErrorResponse;
            throw new ApiException<ValidationErrorResponse>(response.httpStatusCode, "There are validation errors", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Either authentication credentials were not supplied, or they were invalid.", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Forbidden from accessing the requested Application.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Application with given root id not found.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "An unexpected error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfApplicationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfApplicationResponse", ""
            ) as ApiResponseOfApplicationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteApplicationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Either authentication credentials were not supplied, or they were invalid.", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Forbidden from accessing the requested Application.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Application with given id not found.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "An unexpected error occurred.", body, response.headers);
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
     * @params response Response returned by the server for a request to getApplicationById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApplicationByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfApplicationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfApplicationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfApplicationResponse", ""
            ) as ApiResponseOfApplicationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Either authentication credentials were not supplied, or they were invalid.", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Forbidden from accessing the requested Application.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Application with given id not found.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "An unexpected error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfApplicationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfApplicationResponse", ""
            ) as ApiResponseOfApplicationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApplicationVRPConfigurationByApplicationId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApplicationVRPConfigurationByApplicationIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<VrpConfiguration >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VrpConfiguration = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VrpConfiguration", ""
            ) as VrpConfiguration;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrorResponse", ""
            ) as ValidationErrorResponse;
            throw new ApiException<ValidationErrorResponse>(response.httpStatusCode, "There are validation errors", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Either authentication credentials were not supplied, or they were invalid.", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden from accessing the requested Application.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Model404VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model404VirtualAccountsApiErrorResponse", ""
            ) as Model404VirtualAccountsApiErrorResponse;
            throw new ApiException<Model404VirtualAccountsApiErrorResponse>(response.httpStatusCode, "VRP Configuration with given application id not found.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "An unexpected error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VrpConfiguration = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VrpConfiguration", ""
            ) as VrpConfiguration;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchApplications
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchApplicationsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListOfApplicationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListOfApplicationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListOfApplicationResponse", ""
            ) as ApiListOfApplicationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrorResponse", ""
            ) as ValidationErrorResponse;
            throw new ApiException<ValidationErrorResponse>(response.httpStatusCode, "There are validation errors", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Either authentication credentials were not supplied, or they were invalid.", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Forbidden from accessing the requested Application.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "An unexpected error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiListOfApplicationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListOfApplicationResponse", ""
            ) as ApiListOfApplicationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateApplicationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfApplicationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfApplicationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfApplicationResponse", ""
            ) as ApiResponseOfApplicationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrorResponse", ""
            ) as ValidationErrorResponse;
            throw new ApiException<ValidationErrorResponse>(response.httpStatusCode, "There are validation errors", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Either authentication credentials were not supplied, or they were invalid.", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Forbidden from accessing the requested Application.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "An unexpected error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfApplicationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfApplicationResponse", ""
            ) as ApiResponseOfApplicationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateApplicationVRPConfigurationByApplicationId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateApplicationVRPConfigurationByApplicationIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrorResponse", ""
            ) as ValidationErrorResponse;
            throw new ApiException<ValidationErrorResponse>(response.httpStatusCode, "There are validation errors", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Either authentication credentials were not supplied, or they were invalid.", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden from accessing the requested Application.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Model404VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model404VirtualAccountsApiErrorResponse", ""
            ) as Model404VirtualAccountsApiErrorResponse;
            throw new ApiException<Model404VirtualAccountsApiErrorResponse>(response.httpStatusCode, "VRP Configuration with given application id not found.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "An unexpected error occurred.", body, response.headers);
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

}
