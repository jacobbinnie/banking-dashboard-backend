// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AccountAuthorisationRequest } from '../models/AccountAuthorisationRequest';
import { ApiResponseError } from '../models/ApiResponseError';
import { ApiResponseOfAccountAuthorisationResponse } from '../models/ApiResponseOfAccountAuthorisationResponse';
import { ApiResponseOfEmbeddedAccountAuthorisationResponse } from '../models/ApiResponseOfEmbeddedAccountAuthorisationResponse';
import { ApiResponseOfPaymentAuthorisationRequestResponse } from '../models/ApiResponseOfPaymentAuthorisationRequestResponse';
import { ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse } from '../models/ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse';
import { ApiResponseOfPreAuthorisationResponse } from '../models/ApiResponseOfPreAuthorisationResponse';
import { BulkPaymentAuthorisationRequest } from '../models/BulkPaymentAuthorisationRequest';
import { BulkPaymentEmbeddedAuthorisationRequest } from '../models/BulkPaymentEmbeddedAuthorisationRequest';
import { EmbeddedAccountAuthorisationRequest } from '../models/EmbeddedAccountAuthorisationRequest';
import { PaymentAuthorisationRequest } from '../models/PaymentAuthorisationRequest';
import { PaymentEmbeddedAuthorisationRequest } from '../models/PaymentEmbeddedAuthorisationRequest';
import { PaymentPreAuthorisationRequest } from '../models/PaymentPreAuthorisationRequest';
import { PreAuthorisationRequest } from '../models/PreAuthorisationRequest';

/**
 * no description
 */
export class AuthorisationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. <br><br>See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_BULK_PAYMENT`
     * Create Bulk Payment Authorisation
     * @param bulkPaymentAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async createBulkPaymentAuthorisation(bulkPaymentAuthorisationRequest: BulkPaymentAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bulkPaymentAuthorisationRequest' is not null or undefined
        if (bulkPaymentAuthorisationRequest === null || bulkPaymentAuthorisationRequest === undefined) {
            throw new RequiredError("AuthorisationsApi", "createBulkPaymentAuthorisation", "bulkPaymentAuthorisationRequest");
        }






        // Path Params
        const localVarPath = '/bulk-payment-auth-requests';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("psu-id", ObjectSerializer.serialize(psuId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-corporate-id", ObjectSerializer.serialize(psuCorporateId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-ip-address", ObjectSerializer.serialize(psuIpAddress, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bulkPaymentAuthorisationRequest, "BulkPaymentAuthorisationRequest", ""),
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
     * Used to initiate the embedded authorisation process for an `Institution` that contains the `INITIATE_EMBEDDED_BULK_PAYMENT` feature in order to obtain the the user\'s authorisation for a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. <br><br> See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_BULK_PAYMENT`
     * Create Embedded Bulk Payment Authorisation
     * @param bulkPaymentEmbeddedAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async createEmbeddedBulkPaymentAuthorisation(bulkPaymentEmbeddedAuthorisationRequest: BulkPaymentEmbeddedAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bulkPaymentEmbeddedAuthorisationRequest' is not null or undefined
        if (bulkPaymentEmbeddedAuthorisationRequest === null || bulkPaymentEmbeddedAuthorisationRequest === undefined) {
            throw new RequiredError("AuthorisationsApi", "createEmbeddedBulkPaymentAuthorisation", "bulkPaymentEmbeddedAuthorisationRequest");
        }






        // Path Params
        const localVarPath = '/embedded-bulk-payment-auth-requests';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("psu-id", ObjectSerializer.serialize(psuId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-corporate-id", ObjectSerializer.serialize(psuCorporateId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-ip-address", ObjectSerializer.serialize(psuIpAddress, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bulkPaymentEmbeddedAuthorisationRequest, "BulkPaymentEmbeddedAuthorisationRequest", ""),
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
     * Used to initiate the embedded authorisation process for an `Institution` that contains the `INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT` feature in order to obtain the the user\'s authorisation for a payment.<br><br> See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT`
     * Create Embedded Payment Authorisation
     * @param paymentEmbeddedAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async createEmbeddedPaymentAuthorisation(paymentEmbeddedAuthorisationRequest: PaymentEmbeddedAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'paymentEmbeddedAuthorisationRequest' is not null or undefined
        if (paymentEmbeddedAuthorisationRequest === null || paymentEmbeddedAuthorisationRequest === undefined) {
            throw new RequiredError("AuthorisationsApi", "createEmbeddedPaymentAuthorisation", "paymentEmbeddedAuthorisationRequest");
        }






        // Path Params
        const localVarPath = '/embedded-payment-auth-requests';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("psu-id", ObjectSerializer.serialize(psuId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-corporate-id", ObjectSerializer.serialize(psuCorporateId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-ip-address", ObjectSerializer.serialize(psuIpAddress, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(paymentEmbeddedAuthorisationRequest, "PaymentEmbeddedAuthorisationRequest", ""),
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
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for a payment. This endpoint is used to initiate all the different payment listed below. Based on the type of payment you wish to make, you may be required to provide specific properties in [PaymentRequest](https://docs.yapily.com/api/reference/#operation/createPaymentAuthorisation!path=paymentRequest&t=request). First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/reference/#operation/getInstitution). <br><br>See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow.<br><br>Features:<ul><li>`INITIATE_DOMESTIC_PERIODIC_PAYMENT`</li><li>`INITIATE_DOMESTIC_SCHEDULED_PAYMENT`</li><li>`INITIATE_DOMESTIC_SINGLE_INSTANT_PAYMENT`</li><li>`INITIATE_DOMESTIC_SINGLE_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_PERIODIC_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_SCHEDULED_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_SINGLE_PAYMENT`</li></ul>
     * Create Payment Authorisation
     * @param paymentAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async createPaymentAuthorisation(paymentAuthorisationRequest: PaymentAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'paymentAuthorisationRequest' is not null or undefined
        if (paymentAuthorisationRequest === null || paymentAuthorisationRequest === undefined) {
            throw new RequiredError("AuthorisationsApi", "createPaymentAuthorisation", "paymentAuthorisationRequest");
        }






        // Path Params
        const localVarPath = '/payment-auth-requests';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("psu-id", ObjectSerializer.serialize(psuId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-corporate-id", ObjectSerializer.serialize(psuCorporateId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-ip-address", ObjectSerializer.serialize(psuIpAddress, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(paymentAuthorisationRequest, "PaymentAuthorisationRequest", ""),
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
     * Used to initiate the pre-authorisation process for payments for CBI Globe institutions that contain the `INITIATE_ONETIME_PRE_AUTHORISATION_PAYMENTS` feature to authenticate the user. <br><br>Feature: `INITIATE_ONETIME_PRE_AUTHORISATION_PAYMENTS`
     * Create Payment Pre-authorisation
     * @param paymentPreAuthorisationRequest 
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     */
    public async createPaymentPreAuthorisationRequest(paymentPreAuthorisationRequest: PaymentPreAuthorisationRequest, raw?: boolean, psuIpAddress?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'paymentPreAuthorisationRequest' is not null or undefined
        if (paymentPreAuthorisationRequest === null || paymentPreAuthorisationRequest === undefined) {
            throw new RequiredError("AuthorisationsApi", "createPaymentPreAuthorisationRequest", "paymentPreAuthorisationRequest");
        }




        // Path Params
        const localVarPath = '/payment-pre-auth-requests';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("psu-ip-address", ObjectSerializer.serialize(psuIpAddress, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(paymentPreAuthorisationRequest, "PaymentPreAuthorisationRequest", ""),
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
     * Used to initiate the pre-authorisation process for any `Institution` that contains the `INITIATE_PRE_AUTHORISATION` feature to authenticate the user. <br><br>Feature: `INITIATE_PRE_AUTHORISATION`
     * Create Pre-authorisation
     * @param preAuthorisationRequest 
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     */
    public async createPreAuthorisationRequest(preAuthorisationRequest: PreAuthorisationRequest, raw?: boolean, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'preAuthorisationRequest' is not null or undefined
        if (preAuthorisationRequest === null || preAuthorisationRequest === undefined) {
            throw new RequiredError("AuthorisationsApi", "createPreAuthorisationRequest", "preAuthorisationRequest");
        }






        // Path Params
        const localVarPath = '/pre-auth-requests';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("psu-id", ObjectSerializer.serialize(psuId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-corporate-id", ObjectSerializer.serialize(psuCorporateId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-ip-address", ObjectSerializer.serialize(psuIpAddress, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(preAuthorisationRequest, "PreAuthorisationRequest", ""),
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
     * Used to initiate the authorisation process and direct users to the login screen of their financial institution in order to give consent to access account data.<br><br>See [Redirect Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/redirect-account-flows/) for more information about this flow.<br><br>Feature: `INITIATE_ACCOUNT_REQUEST`
     * Create Account Authorisation
     * @param accountAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async initiateAccountRequest(accountAuthorisationRequest: AccountAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'accountAuthorisationRequest' is not null or undefined
        if (accountAuthorisationRequest === null || accountAuthorisationRequest === undefined) {
            throw new RequiredError("AuthorisationsApi", "initiateAccountRequest", "accountAuthorisationRequest");
        }






        // Path Params
        const localVarPath = '/account-auth-requests';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("psu-id", ObjectSerializer.serialize(psuId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-corporate-id", ObjectSerializer.serialize(psuCorporateId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-ip-address", ObjectSerializer.serialize(psuIpAddress, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(accountAuthorisationRequest, "AccountAuthorisationRequest", ""),
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
     * Used to initiate the embedded authorisation process for an `Institution` that contains the `INITIATE_EMBEDDED_ACCOUNT_REQUEST` feature in order to obtain the the user\'s authorisation to access their account information. <br><br>See [Embedded Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/embedded-account-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_ACCOUNT_REQUEST`
     * Create Embedded Account Authorisation
     * @param embeddedAccountAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async initiateEmbeddedAccountRequest(embeddedAccountAuthorisationRequest: EmbeddedAccountAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'embeddedAccountAuthorisationRequest' is not null or undefined
        if (embeddedAccountAuthorisationRequest === null || embeddedAccountAuthorisationRequest === undefined) {
            throw new RequiredError("AuthorisationsApi", "initiateEmbeddedAccountRequest", "embeddedAccountAuthorisationRequest");
        }






        // Path Params
        const localVarPath = '/embedded-account-auth-requests';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("psu-id", ObjectSerializer.serialize(psuId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-corporate-id", ObjectSerializer.serialize(psuCorporateId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-ip-address", ObjectSerializer.serialize(psuIpAddress, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(embeddedAccountAuthorisationRequest, "EmbeddedAccountAuthorisationRequest", ""),
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
     * Used to prompt the account holder for continued access to their financial data. This endpoint should be used when a `Consent` that was previously `AUTHORIZED` can no longer be used to retrieve data.<br><br>See [Re-Authorisation](https://docs.yapily.com/pages/key-concepts/account-data/account-consents/#re-authorisation) for more information.
     * Re-authorise Account Consent
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async reAuthoriseAccount(consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("AuthorisationsApi", "reAuthoriseAccount", "consent");
        }






        // Path Params
        const localVarPath = '/account-auth-requests';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("consent", ObjectSerializer.serialize(consent, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-id", ObjectSerializer.serialize(psuId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-corporate-id", ObjectSerializer.serialize(psuCorporateId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-ip-address", ObjectSerializer.serialize(psuIpAddress, "string", ""));


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
     * Used to pass the SCA Code received from the `Institution` (and the SCA method selected by the user where multiple SCA methods are supported by the `Institution`) in order to complete the embedded authorisation to access the user\'s financial data. <br><br>See [Embedded Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/embedded-account-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_ACCOUNT_REQUEST`
     * Update Embedded Account Authorisation
     * @param consentId __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @param embeddedAccountAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async updateEmbeddedAccountRequest(consentId: string, embeddedAccountAuthorisationRequest: EmbeddedAccountAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentId' is not null or undefined
        if (consentId === null || consentId === undefined) {
            throw new RequiredError("AuthorisationsApi", "updateEmbeddedAccountRequest", "consentId");
        }


        // verify required parameter 'embeddedAccountAuthorisationRequest' is not null or undefined
        if (embeddedAccountAuthorisationRequest === null || embeddedAccountAuthorisationRequest === undefined) {
            throw new RequiredError("AuthorisationsApi", "updateEmbeddedAccountRequest", "embeddedAccountAuthorisationRequest");
        }






        // Path Params
        const localVarPath = '/embedded-account-auth-requests/{consentId}'
            .replace('{' + 'consentId' + '}', encodeURIComponent(String(consentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("psu-id", ObjectSerializer.serialize(psuId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-corporate-id", ObjectSerializer.serialize(psuCorporateId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-ip-address", ObjectSerializer.serialize(psuIpAddress, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(embeddedAccountAuthorisationRequest, "EmbeddedAccountAuthorisationRequest", ""),
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
     * Used to pass the SCA Code received from the `Institution` (and the SCA method selected by the user where multiple SCA methods are supported by the `Institution`) in order to complete the embedded authorisation to initiate a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. <br><br>See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_BULK_PAYMENT`
     * Update Embedded Bulk Payment Authorisation
     * @param consentId __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @param bulkPaymentEmbeddedAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async updateEmbeddedBulkPaymentAuthorisation(consentId: string, bulkPaymentEmbeddedAuthorisationRequest: BulkPaymentEmbeddedAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentId' is not null or undefined
        if (consentId === null || consentId === undefined) {
            throw new RequiredError("AuthorisationsApi", "updateEmbeddedBulkPaymentAuthorisation", "consentId");
        }


        // verify required parameter 'bulkPaymentEmbeddedAuthorisationRequest' is not null or undefined
        if (bulkPaymentEmbeddedAuthorisationRequest === null || bulkPaymentEmbeddedAuthorisationRequest === undefined) {
            throw new RequiredError("AuthorisationsApi", "updateEmbeddedBulkPaymentAuthorisation", "bulkPaymentEmbeddedAuthorisationRequest");
        }






        // Path Params
        const localVarPath = '/embedded-bulk-payment-auth-requests/{consentId}'
            .replace('{' + 'consentId' + '}', encodeURIComponent(String(consentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("psu-id", ObjectSerializer.serialize(psuId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-corporate-id", ObjectSerializer.serialize(psuCorporateId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-ip-address", ObjectSerializer.serialize(psuIpAddress, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bulkPaymentEmbeddedAuthorisationRequest, "BulkPaymentEmbeddedAuthorisationRequest", ""),
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
     * Used to pass the SCA Code received from the `Institution` (and the SCA method selected by the user where multiple SCA methods are supported by the `Institution`) in order to complete the embedded authorisation to initiate a payment. <br><br> See [Embedded Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/embedded/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT`
     * Update Embedded Payment Authorisation
     * @param consentId __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @param paymentEmbeddedAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async updateEmbeddedPaymentAuthorisation(consentId: string, paymentEmbeddedAuthorisationRequest: PaymentEmbeddedAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentId' is not null or undefined
        if (consentId === null || consentId === undefined) {
            throw new RequiredError("AuthorisationsApi", "updateEmbeddedPaymentAuthorisation", "consentId");
        }


        // verify required parameter 'paymentEmbeddedAuthorisationRequest' is not null or undefined
        if (paymentEmbeddedAuthorisationRequest === null || paymentEmbeddedAuthorisationRequest === undefined) {
            throw new RequiredError("AuthorisationsApi", "updateEmbeddedPaymentAuthorisation", "paymentEmbeddedAuthorisationRequest");
        }






        // Path Params
        const localVarPath = '/embedded-payment-auth-requests/{consentId}'
            .replace('{' + 'consentId' + '}', encodeURIComponent(String(consentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("psu-id", ObjectSerializer.serialize(psuId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-corporate-id", ObjectSerializer.serialize(psuCorporateId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-ip-address", ObjectSerializer.serialize(psuIpAddress, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(paymentEmbeddedAuthorisationRequest, "PaymentEmbeddedAuthorisationRequest", ""),
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
     * Used to continue the authorisation process and for any `Institution` that contains the `INITIATE_PRE_AUTHORISATION` feature and direct user to the login screen of their financial institution in order to give consent to initiate a payment. <br><br>See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow. <br><br>Feature: `INITIATE_PRE_AUTHORISATION`
     * Update Payment Pre-authorisation
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param paymentAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async updatePaymentAuthorisation(consent: string, paymentAuthorisationRequest: PaymentAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("AuthorisationsApi", "updatePaymentAuthorisation", "consent");
        }


        // verify required parameter 'paymentAuthorisationRequest' is not null or undefined
        if (paymentAuthorisationRequest === null || paymentAuthorisationRequest === undefined) {
            throw new RequiredError("AuthorisationsApi", "updatePaymentAuthorisation", "paymentAuthorisationRequest");
        }






        // Path Params
        const localVarPath = '/payment-auth-requests';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("psu-id", ObjectSerializer.serialize(psuId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-corporate-id", ObjectSerializer.serialize(psuCorporateId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-ip-address", ObjectSerializer.serialize(psuIpAddress, "string", ""));

        // Header Params
        requestContext.setHeaderParam("consent", ObjectSerializer.serialize(consent, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(paymentAuthorisationRequest, "PaymentAuthorisationRequest", ""),
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
     * Used to continue the authorisation process and for any `Institution` that contains the `INITIATE_PRE_AUTHORISATION` feature and direct user to the login screen of their financial institution in order to give consent to access account data. <br><br>See [Redirect Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/redirect-account-flows/) for more information about this flow. <br><br>Features: <ul><li>`INITIATE_ACCOUNT_REQUEST`</li><li>`INITIATE_PRE_AUTHORISATION`</li></ul>
     * Update Account Pre-authorisation
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param accountAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async updatePreAuthoriseAccountConsent(consent: string, accountAuthorisationRequest: AccountAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("AuthorisationsApi", "updatePreAuthoriseAccountConsent", "consent");
        }


        // verify required parameter 'accountAuthorisationRequest' is not null or undefined
        if (accountAuthorisationRequest === null || accountAuthorisationRequest === undefined) {
            throw new RequiredError("AuthorisationsApi", "updatePreAuthoriseAccountConsent", "accountAuthorisationRequest");
        }






        // Path Params
        const localVarPath = '/account-auth-requests';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("consent", ObjectSerializer.serialize(consent, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-id", ObjectSerializer.serialize(psuId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-corporate-id", ObjectSerializer.serialize(psuCorporateId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("psu-ip-address", ObjectSerializer.serialize(psuIpAddress, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(accountAuthorisationRequest, "AccountAuthorisationRequest", ""),
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

export class AuthorisationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBulkPaymentAuthorisation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBulkPaymentAuthorisationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfPaymentAuthorisationRequestResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfPaymentAuthorisationRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPaymentAuthorisationRequestResponse", ""
            ) as ApiResponseOfPaymentAuthorisationRequestResponse;
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
            const body: ApiResponseOfPaymentAuthorisationRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPaymentAuthorisationRequestResponse", ""
            ) as ApiResponseOfPaymentAuthorisationRequestResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createEmbeddedBulkPaymentAuthorisation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createEmbeddedBulkPaymentAuthorisationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse", ""
            ) as ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse;
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
            const body: ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse", ""
            ) as ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createEmbeddedPaymentAuthorisation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createEmbeddedPaymentAuthorisationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse", ""
            ) as ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse;
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
            const body: ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse", ""
            ) as ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPaymentAuthorisation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPaymentAuthorisationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfPaymentAuthorisationRequestResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfPaymentAuthorisationRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPaymentAuthorisationRequestResponse", ""
            ) as ApiResponseOfPaymentAuthorisationRequestResponse;
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
            const body: ApiResponseOfPaymentAuthorisationRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPaymentAuthorisationRequestResponse", ""
            ) as ApiResponseOfPaymentAuthorisationRequestResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPaymentPreAuthorisationRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPaymentPreAuthorisationRequestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfPreAuthorisationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfPreAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPreAuthorisationResponse", ""
            ) as ApiResponseOfPreAuthorisationResponse;
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
            const body: ApiResponseOfPreAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPreAuthorisationResponse", ""
            ) as ApiResponseOfPreAuthorisationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPreAuthorisationRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPreAuthorisationRequestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfPreAuthorisationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfPreAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPreAuthorisationResponse", ""
            ) as ApiResponseOfPreAuthorisationResponse;
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
            const body: ApiResponseOfPreAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPreAuthorisationResponse", ""
            ) as ApiResponseOfPreAuthorisationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to initiateAccountRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async initiateAccountRequestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfAccountAuthorisationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfAccountAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfAccountAuthorisationResponse", ""
            ) as ApiResponseOfAccountAuthorisationResponse;
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
            const body: ApiResponseOfAccountAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfAccountAuthorisationResponse", ""
            ) as ApiResponseOfAccountAuthorisationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to initiateEmbeddedAccountRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async initiateEmbeddedAccountRequestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfEmbeddedAccountAuthorisationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfEmbeddedAccountAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfEmbeddedAccountAuthorisationResponse", ""
            ) as ApiResponseOfEmbeddedAccountAuthorisationResponse;
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
            const body: ApiResponseOfEmbeddedAccountAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfEmbeddedAccountAuthorisationResponse", ""
            ) as ApiResponseOfEmbeddedAccountAuthorisationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reAuthoriseAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async reAuthoriseAccountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfAccountAuthorisationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfAccountAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfAccountAuthorisationResponse", ""
            ) as ApiResponseOfAccountAuthorisationResponse;
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
            const body: ApiResponseOfAccountAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfAccountAuthorisationResponse", ""
            ) as ApiResponseOfAccountAuthorisationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateEmbeddedAccountRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateEmbeddedAccountRequestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfEmbeddedAccountAuthorisationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfEmbeddedAccountAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfEmbeddedAccountAuthorisationResponse", ""
            ) as ApiResponseOfEmbeddedAccountAuthorisationResponse;
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
            const body: ApiResponseOfEmbeddedAccountAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfEmbeddedAccountAuthorisationResponse", ""
            ) as ApiResponseOfEmbeddedAccountAuthorisationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateEmbeddedBulkPaymentAuthorisation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateEmbeddedBulkPaymentAuthorisationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse", ""
            ) as ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse;
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
            const body: ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse", ""
            ) as ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateEmbeddedPaymentAuthorisation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateEmbeddedPaymentAuthorisationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse", ""
            ) as ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse;
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
            const body: ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse", ""
            ) as ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePaymentAuthorisation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePaymentAuthorisationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfPaymentAuthorisationRequestResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfPaymentAuthorisationRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPaymentAuthorisationRequestResponse", ""
            ) as ApiResponseOfPaymentAuthorisationRequestResponse;
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
            const body: ApiResponseOfPaymentAuthorisationRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfPaymentAuthorisationRequestResponse", ""
            ) as ApiResponseOfPaymentAuthorisationRequestResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePreAuthoriseAccountConsent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePreAuthoriseAccountConsentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfAccountAuthorisationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfAccountAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfAccountAuthorisationResponse", ""
            ) as ApiResponseOfAccountAuthorisationResponse;
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
            const body: ApiResponseOfAccountAuthorisationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfAccountAuthorisationResponse", ""
            ) as ApiResponseOfAccountAuthorisationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
