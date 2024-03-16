// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiErrorResponse } from '../models/ApiErrorResponse';
import { ApiResponseOfFundsConfirmationResponse } from '../models/ApiResponseOfFundsConfirmationResponse';
import { ApiResponseOfNonSweepingAuthorisationResponse } from '../models/ApiResponseOfNonSweepingAuthorisationResponse';
import { ApiResponseOfSubmissionResponse } from '../models/ApiResponseOfSubmissionResponse';
import { ApiResponseOfSweepingAuthorisationResponse } from '../models/ApiResponseOfSweepingAuthorisationResponse';
import { FundsConfirmationRequest } from '../models/FundsConfirmationRequest';
import { NonSweepingAuthorisationRequest } from '../models/NonSweepingAuthorisationRequest';
import { SubmissionRequest } from '../models/SubmissionRequest';
import { SweepingAuthorisationRequest } from '../models/SweepingAuthorisationRequest';

/**
 * no description
 */
export class VariableRecurringPaymentsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for Non-Sweeping Variable Recurring Payments. The request would return an Authorization URL and an Identifier for the consent created at the Institution. First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/#get-institution). <br><br>See [Redirect Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/redirect/) for more information about this flow.<br><br>Features:<ul><li>`INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_NONSWEEPING`</li></ul>
     * Create Non-Sweeping Variable Recurring Payment Authorisation
     * @param nonSweepingAuthorisationRequest 
     */
    public async createNonSweepingAuthorisation(nonSweepingAuthorisationRequest: NonSweepingAuthorisationRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'nonSweepingAuthorisationRequest' is not null or undefined
        if (nonSweepingAuthorisationRequest === null || nonSweepingAuthorisationRequest === undefined) {
            throw new RequiredError("VariableRecurringPaymentsApi", "createNonSweepingAuthorisation", "nonSweepingAuthorisationRequest");
        }


        // Path Params
        const localVarPath = '/variable-recurring-payments/non-sweeping/consents';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(nonSweepingAuthorisationRequest, "NonSweepingAuthorisationRequest", ""),
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
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for Sweeping Variable Recurring Payments. The request would return an Authorization URL and an Identifier for the consent created at the Institution. First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/#get-institution). <br><br>See [Redirect Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/redirect/) for more information about this flow.<br><br>Features:<ul><li>`INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_SWEEPING`</li></ul>
     * Create Sweeping Variable Recurring Payment Authorisation
     * @param sweepingAuthorisationRequest 
     */
    public async createSweepingAuthorisation(sweepingAuthorisationRequest: SweepingAuthorisationRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'sweepingAuthorisationRequest' is not null or undefined
        if (sweepingAuthorisationRequest === null || sweepingAuthorisationRequest === undefined) {
            throw new RequiredError("VariableRecurringPaymentsApi", "createSweepingAuthorisation", "sweepingAuthorisationRequest");
        }


        // Path Params
        const localVarPath = '/variable-recurring-payments/sweeping/consents';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(sweepingAuthorisationRequest, "SweepingAuthorisationRequest", ""),
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
     * Confirm Funds for Variable Recurring Payment
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param fundsConfirmationRequest 
     */
    public async createVrpFundsConfirmation(consent: string, fundsConfirmationRequest: FundsConfirmationRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("VariableRecurringPaymentsApi", "createVrpFundsConfirmation", "consent");
        }


        // verify required parameter 'fundsConfirmationRequest' is not null or undefined
        if (fundsConfirmationRequest === null || fundsConfirmationRequest === undefined) {
            throw new RequiredError("VariableRecurringPaymentsApi", "createVrpFundsConfirmation", "fundsConfirmationRequest");
        }


        // Path Params
        const localVarPath = '/variable-recurring-payments/funds-confirmation';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("consent", ObjectSerializer.serialize(consent, "string", ""));


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
     * Creates a Variable Recurring Payment transaction after obtaining the user\'s authorisation.<br><br>Features:<ul><li>`CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_SWEEPING`</li><li>`CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_NONSWEEPING`</li></ul>
     * Create Variable Recurring Payment
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param submissionRequest 
     */
    public async createVrpPayment(consent: string, submissionRequest: SubmissionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("VariableRecurringPaymentsApi", "createVrpPayment", "consent");
        }


        // verify required parameter 'submissionRequest' is not null or undefined
        if (submissionRequest === null || submissionRequest === undefined) {
            throw new RequiredError("VariableRecurringPaymentsApi", "createVrpPayment", "submissionRequest");
        }


        // Path Params
        const localVarPath = '/variable-recurring-payments/payments';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("consent", ObjectSerializer.serialize(consent, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(submissionRequest, "SubmissionRequest", ""),
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
     * Get Non-Sweeping Variable Recurring Payments consent details using the consent Id
     * Get Non-Sweeping Variable Recurring Payment Consent Details
     * @param consentId __Mandatory__. The consent Id of the &#x60;Variable Recurring Payments Consent&#x60; to retrieve.
     */
    public async getNonSweepingVrpConsentById(consentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentId' is not null or undefined
        if (consentId === null || consentId === undefined) {
            throw new RequiredError("VariableRecurringPaymentsApi", "getNonSweepingVrpConsentById", "consentId");
        }


        // Path Params
        const localVarPath = '/variable-recurring-payments/non-sweeping/consents/{consentId}'
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
     * Get Sweeping Variable Recurring Payments consent details using the consent Id
     * Get Sweeping Variable Recurring Payment Consent Details
     * @param consentId __Mandatory__. The consent Id of the &#x60;Variable Recurring Payments Consent&#x60; to retrieve.
     */
    public async getSweepingVrpConsentById(consentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentId' is not null or undefined
        if (consentId === null || consentId === undefined) {
            throw new RequiredError("VariableRecurringPaymentsApi", "getSweepingVrpConsentById", "consentId");
        }


        // Path Params
        const localVarPath = '/variable-recurring-payments/sweeping/consents/{consentId}'
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
     * Get Variable Recurring Payment details using the Payment Id
     * Get Variable Recurring Payment Details
     * @param paymentId __Mandatory__. The Payment Id of the &#x60;Variable Recurring Payments&#x60; to retrieve.
     * @param consent __Mandatory__. The consent token containing the user\&#39;s authorisation to make the &#x60;Variable Recurring Payments&#x60; request.
     */
    public async getVrpPaymentDetails(paymentId: string, consent: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'paymentId' is not null or undefined
        if (paymentId === null || paymentId === undefined) {
            throw new RequiredError("VariableRecurringPaymentsApi", "getVrpPaymentDetails", "paymentId");
        }


        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("VariableRecurringPaymentsApi", "getVrpPaymentDetails", "consent");
        }


        // Path Params
        const localVarPath = '/variable-recurring-payments/payments/{paymentId}/details'
            .replace('{' + 'paymentId' + '}', encodeURIComponent(String(paymentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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

}

export class VariableRecurringPaymentsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNonSweepingAuthorisation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNonSweepingAuthorisationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfNonSweepingAuthorisationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfNonSweepingAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfNonSweepingAuthorisationResponse", ""
            ) as ApiResponseOfNonSweepingAuthorisationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Error Response", body, response.headers);
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
            const body: ApiResponseOfNonSweepingAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfNonSweepingAuthorisationResponse", ""
            ) as ApiResponseOfNonSweepingAuthorisationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSweepingAuthorisation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createSweepingAuthorisationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfSweepingAuthorisationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfSweepingAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfSweepingAuthorisationResponse", ""
            ) as ApiResponseOfSweepingAuthorisationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Error Response", body, response.headers);
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
            const body: ApiResponseOfSweepingAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfSweepingAuthorisationResponse", ""
            ) as ApiResponseOfSweepingAuthorisationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVrpFundsConfirmation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVrpFundsConfirmationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfFundsConfirmationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfFundsConfirmationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfFundsConfirmationResponse", ""
            ) as ApiResponseOfFundsConfirmationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Error Response", body, response.headers);
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
     * @params response Response returned by the server for a request to createVrpPayment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVrpPaymentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfSubmissionResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfSubmissionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfSubmissionResponse", ""
            ) as ApiResponseOfSubmissionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Error Response", body, response.headers);
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
            const body: ApiResponseOfSubmissionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfSubmissionResponse", ""
            ) as ApiResponseOfSubmissionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNonSweepingVrpConsentById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getNonSweepingVrpConsentByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfNonSweepingAuthorisationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfNonSweepingAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfNonSweepingAuthorisationResponse", ""
            ) as ApiResponseOfNonSweepingAuthorisationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Error Response", body, response.headers);
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
            const body: ApiResponseOfNonSweepingAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfNonSweepingAuthorisationResponse", ""
            ) as ApiResponseOfNonSweepingAuthorisationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSweepingVrpConsentById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSweepingVrpConsentByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfSweepingAuthorisationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfSweepingAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfSweepingAuthorisationResponse", ""
            ) as ApiResponseOfSweepingAuthorisationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Error Response", body, response.headers);
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
            const body: ApiResponseOfSweepingAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfSweepingAuthorisationResponse", ""
            ) as ApiResponseOfSweepingAuthorisationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVrpPaymentDetails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVrpPaymentDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfSubmissionResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfSubmissionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfSubmissionResponse", ""
            ) as ApiResponseOfSubmissionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Error Response", body, response.headers);
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
            const body: ApiResponseOfSubmissionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfSubmissionResponse", ""
            ) as ApiResponseOfSubmissionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
