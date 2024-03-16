// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiResponseError } from '../models/ApiResponseError';
import { ApiResponseOfCreateHostedPaymentRequest } from '../models/ApiResponseOfCreateHostedPaymentRequest';
import { ApiResponseOfCreateHostedPaymentRequestLink } from '../models/ApiResponseOfCreateHostedPaymentRequestLink';
import { ApiResponseOfCreateHostedVRPConsentRequest } from '../models/ApiResponseOfCreateHostedVRPConsentRequest';
import { ApiResponseOfCreateHostedVRPPaymentRequest } from '../models/ApiResponseOfCreateHostedVRPPaymentRequest';
import { ApiResponseOfFundsConfirmationResponse } from '../models/ApiResponseOfFundsConfirmationResponse';
import { ApiResponseOfGetHostedPaymentRequest } from '../models/ApiResponseOfGetHostedPaymentRequest';
import { ApiResponseOfGetHostedVRPConsentRequest } from '../models/ApiResponseOfGetHostedVRPConsentRequest';
import { ApiResponseOfGetHostedVRPConsentsRequest } from '../models/ApiResponseOfGetHostedVRPConsentsRequest';
import { ApiResponseOfGetHostedVRPPaymentRequest } from '../models/ApiResponseOfGetHostedVRPPaymentRequest';
import { ApiResponseOfRevokeHostedVRPConsentRequest } from '../models/ApiResponseOfRevokeHostedVRPConsentRequest';
import { CreateHostedPaymentRequest } from '../models/CreateHostedPaymentRequest';
import { CreateHostedPaymentRequestLink } from '../models/CreateHostedPaymentRequestLink';
import { CreateHostedVRPConsentRequest } from '../models/CreateHostedVRPConsentRequest';
import { CreateHostedVRPPaymentRequest } from '../models/CreateHostedVRPPaymentRequest';
import { FundsConfirmationRequest } from '../models/FundsConfirmationRequest';

/**
 * no description
 */
export class HostedPagesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Used to initiate a payment request using Yapily Hosted Pages.
     * Create Hosted payment request
     * @param createHostedPaymentRequest 
     */
    public async createHostedPaymentRequest(createHostedPaymentRequest: CreateHostedPaymentRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createHostedPaymentRequest' is not null or undefined
        if (createHostedPaymentRequest === null || createHostedPaymentRequest === undefined) {
            throw new RequiredError("HostedPagesApi", "createHostedPaymentRequest", "createHostedPaymentRequest");
        }


        // Path Params
        const localVarPath = '/hosted/payment-requests';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createHostedPaymentRequest, "CreateHostedPaymentRequest", ""),
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
     * Used to created a long lived payment request for Pay By Link
     * Create Pay By Link
     * @param createHostedPaymentRequestLink 
     */
    public async createHostedPaymentRequestLink(createHostedPaymentRequestLink: CreateHostedPaymentRequestLink, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createHostedPaymentRequestLink' is not null or undefined
        if (createHostedPaymentRequestLink === null || createHostedPaymentRequestLink === undefined) {
            throw new RequiredError("HostedPagesApi", "createHostedPaymentRequestLink", "createHostedPaymentRequestLink");
        }


        // Path Params
        const localVarPath = '/hosted/payment-requests/links';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createHostedPaymentRequestLink, "CreateHostedPaymentRequestLink", ""),
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
     * Used to initiate a VRP consent / mandate request through Yapily Hosted Pages
     * Create VRP Consent
     * @param subApplication __Mandatory__. The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     * @param createHostedVRPConsentRequest 
     */
    public async createHostedVRPConsentRequest(subApplication: string, createHostedVRPConsentRequest: CreateHostedVRPConsentRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subApplication' is not null or undefined
        if (subApplication === null || subApplication === undefined) {
            throw new RequiredError("HostedPagesApi", "createHostedVRPConsentRequest", "subApplication");
        }


        // verify required parameter 'createHostedVRPConsentRequest' is not null or undefined
        if (createHostedVRPConsentRequest === null || createHostedVRPConsentRequest === undefined) {
            throw new RequiredError("HostedPagesApi", "createHostedVRPConsentRequest", "createHostedVRPConsentRequest");
        }


        // Path Params
        const localVarPath = '/hosted/vrp/consent-requests';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("sub-application", ObjectSerializer.serialize(subApplication, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createHostedVRPConsentRequest, "CreateHostedVRPConsentRequest", ""),
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
     * Confirms whether there are available funds on the Payer account to execute a Variable Recurring Payment after obtaining the user\'s authorisation. <br><br>Features:<ul><li>`VARIABLE_RECURRING_PAYMENT_FUNDS_CONFIRMATION`</li></ul>
     * Check Funds Availability
     * @param consentRequestId Unique Identifier of the Consent Request
     * @param consentToken __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param fundsConfirmationRequest 
     * @param subApplication The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     */
    public async createHostedVrpFundsConfirmation(consentRequestId: string, consentToken: string, fundsConfirmationRequest: FundsConfirmationRequest, subApplication?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentRequestId' is not null or undefined
        if (consentRequestId === null || consentRequestId === undefined) {
            throw new RequiredError("HostedPagesApi", "createHostedVrpFundsConfirmation", "consentRequestId");
        }


        // verify required parameter 'consentToken' is not null or undefined
        if (consentToken === null || consentToken === undefined) {
            throw new RequiredError("HostedPagesApi", "createHostedVrpFundsConfirmation", "consentToken");
        }


        // verify required parameter 'fundsConfirmationRequest' is not null or undefined
        if (fundsConfirmationRequest === null || fundsConfirmationRequest === undefined) {
            throw new RequiredError("HostedPagesApi", "createHostedVrpFundsConfirmation", "fundsConfirmationRequest");
        }



        // Path Params
        const localVarPath = '/hosted/vrp/consent-requests/{consentRequestId}/funds-confirmation'
            .replace('{' + 'consentRequestId' + '}', encodeURIComponent(String(consentRequestId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("consent-token", ObjectSerializer.serialize(consentToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("sub-application", ObjectSerializer.serialize(subApplication, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(fundsConfirmationRequest, "FundsConfirmationRequest", ""),
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
     * Creates a Variable Recurring Payment
     * Create VRP Payment
     * @param consentRequestId Unique Identifier of the Consent Request
     * @param consentToken __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param createHostedVRPPaymentRequest 
     * @param subApplication The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     */
    public async createHostedVrpPayment(consentRequestId: string, consentToken: string, createHostedVRPPaymentRequest: CreateHostedVRPPaymentRequest, subApplication?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentRequestId' is not null or undefined
        if (consentRequestId === null || consentRequestId === undefined) {
            throw new RequiredError("HostedPagesApi", "createHostedVrpPayment", "consentRequestId");
        }


        // verify required parameter 'consentToken' is not null or undefined
        if (consentToken === null || consentToken === undefined) {
            throw new RequiredError("HostedPagesApi", "createHostedVrpPayment", "consentToken");
        }


        // verify required parameter 'createHostedVRPPaymentRequest' is not null or undefined
        if (createHostedVRPPaymentRequest === null || createHostedVRPPaymentRequest === undefined) {
            throw new RequiredError("HostedPagesApi", "createHostedVrpPayment", "createHostedVRPPaymentRequest");
        }



        // Path Params
        const localVarPath = '/hosted/vrp/consent-requests/{consentRequestId}/payments'
            .replace('{' + 'consentRequestId' + '}', encodeURIComponent(String(consentRequestId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("consent-token", ObjectSerializer.serialize(consentToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("sub-application", ObjectSerializer.serialize(subApplication, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createHostedVRPPaymentRequest, "CreateHostedVRPPaymentRequest", ""),
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
     * Used to get details of a VRP Consent Request
     * Get Hosted VRP Consent Request
     * @param consentRequestId Unique Identifier of the Consent Request
     * @param subApplication The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     */
    public async getHostedConsentRequest(consentRequestId: string, subApplication?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentRequestId' is not null or undefined
        if (consentRequestId === null || consentRequestId === undefined) {
            throw new RequiredError("HostedPagesApi", "getHostedConsentRequest", "consentRequestId");
        }



        // Path Params
        const localVarPath = '/hosted/vrp/consent-requests/{consentRequestId}'
            .replace('{' + 'consentRequestId' + '}', encodeURIComponent(String(consentRequestId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("sub-application", ObjectSerializer.serialize(subApplication, "string", ""));


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
     * Used to get details of a payment request
     * Get Hosted payment request
     * @param paymentRequestId Unique Identifier of the payment request
     */
    public async getHostedPaymentRequest(paymentRequestId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'paymentRequestId' is not null or undefined
        if (paymentRequestId === null || paymentRequestId === undefined) {
            throw new RequiredError("HostedPagesApi", "getHostedPaymentRequest", "paymentRequestId");
        }


        // Path Params
        const localVarPath = '/hosted/payment-requests/{paymentRequestId}'
            .replace('{' + 'paymentRequestId' + '}', encodeURIComponent(String(paymentRequestId)));

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
     * Used to get all VRP consent requests initiated through Yapily Hosted Pages
     * Get Hosted VRP Consent Requests
     * @param subApplication __Mandatory__. The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     */
    public async getHostedVRPConsentRequests(subApplication: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subApplication' is not null or undefined
        if (subApplication === null || subApplication === undefined) {
            throw new RequiredError("HostedPagesApi", "getHostedVRPConsentRequests", "subApplication");
        }


        // Path Params
        const localVarPath = '/hosted/vrp/consent-requests';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("sub-application", ObjectSerializer.serialize(subApplication, "string", ""));


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
     * Used to get details of a VRP Payment
     * Get VRP payment
     * @param consentRequestId Unique Identifier of the Consent Request
     * @param paymentId Unique Identifier of the Consent Request
     * @param subApplication The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     */
    public async getHostedVRPPaymentRequest(consentRequestId: string, paymentId: string, subApplication?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentRequestId' is not null or undefined
        if (consentRequestId === null || consentRequestId === undefined) {
            throw new RequiredError("HostedPagesApi", "getHostedVRPPaymentRequest", "consentRequestId");
        }


        // verify required parameter 'paymentId' is not null or undefined
        if (paymentId === null || paymentId === undefined) {
            throw new RequiredError("HostedPagesApi", "getHostedVRPPaymentRequest", "paymentId");
        }



        // Path Params
        const localVarPath = '/hosted/vrp/consent-requests/{consentRequestId}/payments/{paymentId}'
            .replace('{' + 'consentRequestId' + '}', encodeURIComponent(String(consentRequestId)))
            .replace('{' + 'paymentId' + '}', encodeURIComponent(String(paymentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("sub-application", ObjectSerializer.serialize(subApplication, "string", ""));


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
     * Revoke Hosted VRP Consent Request
     * Revoke Hosted VRP Consent Request
     * @param consentRequestId Unique Identifier of the Consent Request
     * @param subApplication The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     */
    public async revokeHostedConsentRequest(consentRequestId: string, subApplication?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentRequestId' is not null or undefined
        if (consentRequestId === null || consentRequestId === undefined) {
            throw new RequiredError("HostedPagesApi", "revokeHostedConsentRequest", "consentRequestId");
        }



        // Path Params
        const localVarPath = '/hosted/vrp/consent-requests/{consentRequestId}/revoke'
            .replace('{' + 'consentRequestId' + '}', encodeURIComponent(String(consentRequestId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("sub-application", ObjectSerializer.serialize(subApplication, "string", ""));


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

export class HostedPagesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createHostedPaymentRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createHostedPaymentRequestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfCreateHostedPaymentRequest >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfCreateHostedPaymentRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfCreateHostedPaymentRequest", ""
            ) as ApiResponseOfCreateHostedPaymentRequest;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Unauthorized. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Unexpected Error", body, response.headers);
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
            const body: ApiResponseOfCreateHostedPaymentRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfCreateHostedPaymentRequest", ""
            ) as ApiResponseOfCreateHostedPaymentRequest;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createHostedPaymentRequestLink
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createHostedPaymentRequestLinkWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfCreateHostedPaymentRequestLink >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfCreateHostedPaymentRequestLink = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfCreateHostedPaymentRequestLink", ""
            ) as ApiResponseOfCreateHostedPaymentRequestLink;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Unauthorized. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Unexpected Error", body, response.headers);
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
            const body: ApiResponseOfCreateHostedPaymentRequestLink = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfCreateHostedPaymentRequestLink", ""
            ) as ApiResponseOfCreateHostedPaymentRequestLink;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createHostedVRPConsentRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createHostedVRPConsentRequestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfCreateHostedVRPConsentRequest >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfCreateHostedVRPConsentRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfCreateHostedVRPConsentRequest", ""
            ) as ApiResponseOfCreateHostedVRPConsentRequest;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Unauthorized. Credentials are missing or invalid", body, response.headers);
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
            const body: ApiResponseOfCreateHostedVRPConsentRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfCreateHostedVRPConsentRequest", ""
            ) as ApiResponseOfCreateHostedVRPConsentRequest;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createHostedVrpFundsConfirmation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createHostedVrpFundsConfirmationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfFundsConfirmationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfFundsConfirmationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfFundsConfirmationResponse", ""
            ) as ApiResponseOfFundsConfirmationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Error Response", body, response.headers);
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
            const body: ApiResponseOfFundsConfirmationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfFundsConfirmationResponse", ""
            ) as ApiResponseOfFundsConfirmationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createHostedVrpPayment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createHostedVrpPaymentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfCreateHostedVRPPaymentRequest >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfCreateHostedVRPPaymentRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfCreateHostedVRPPaymentRequest", ""
            ) as ApiResponseOfCreateHostedVRPPaymentRequest;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Error Response", body, response.headers);
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
            const body: ApiResponseOfCreateHostedVRPPaymentRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfCreateHostedVRPPaymentRequest", ""
            ) as ApiResponseOfCreateHostedVRPPaymentRequest;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getHostedConsentRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getHostedConsentRequestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfGetHostedVRPConsentRequest >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfGetHostedVRPConsentRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfGetHostedVRPConsentRequest", ""
            ) as ApiResponseOfGetHostedVRPConsentRequest;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Not Found", body, response.headers);
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
            const body: ApiResponseOfGetHostedVRPConsentRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfGetHostedVRPConsentRequest", ""
            ) as ApiResponseOfGetHostedVRPConsentRequest;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getHostedPaymentRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getHostedPaymentRequestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfGetHostedPaymentRequest >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfGetHostedPaymentRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfGetHostedPaymentRequest", ""
            ) as ApiResponseOfGetHostedPaymentRequest;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Unexpected Error", body, response.headers);
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
            const body: ApiResponseOfGetHostedPaymentRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfGetHostedPaymentRequest", ""
            ) as ApiResponseOfGetHostedPaymentRequest;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getHostedVRPConsentRequests
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getHostedVRPConsentRequestsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfGetHostedVRPConsentsRequest >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfGetHostedVRPConsentsRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfGetHostedVRPConsentsRequest", ""
            ) as ApiResponseOfGetHostedVRPConsentsRequest;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Unauthorized. Credentials are missing or invalid", body, response.headers);
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
            const body: ApiResponseOfGetHostedVRPConsentsRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfGetHostedVRPConsentsRequest", ""
            ) as ApiResponseOfGetHostedVRPConsentsRequest;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getHostedVRPPaymentRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getHostedVRPPaymentRequestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfGetHostedVRPPaymentRequest >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfGetHostedVRPPaymentRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfGetHostedVRPPaymentRequest", ""
            ) as ApiResponseOfGetHostedVRPPaymentRequest;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Not Found", body, response.headers);
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
            const body: ApiResponseOfGetHostedVRPPaymentRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfGetHostedVRPPaymentRequest", ""
            ) as ApiResponseOfGetHostedVRPPaymentRequest;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeHostedConsentRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async revokeHostedConsentRequestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfRevokeHostedVRPConsentRequest >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfRevokeHostedVRPConsentRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfRevokeHostedVRPConsentRequest", ""
            ) as ApiResponseOfRevokeHostedVRPConsentRequest;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", ""
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Not Found", body, response.headers);
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
            const body: ApiResponseOfRevokeHostedVRPConsentRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfRevokeHostedVRPConsentRequest", ""
            ) as ApiResponseOfRevokeHostedVRPConsentRequest;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
