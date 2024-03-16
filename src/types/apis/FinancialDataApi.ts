// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AccountApiListResponse } from '../models/AccountApiListResponse';
import { ApiListResponseOfAccountStatement } from '../models/ApiListResponseOfAccountStatement';
import { ApiListResponseOfBeneficiary } from '../models/ApiListResponseOfBeneficiary';
import { ApiListResponseOfCategory } from '../models/ApiListResponseOfCategory';
import { ApiListResponseOfDirectDebitResponse } from '../models/ApiListResponseOfDirectDebitResponse';
import { ApiListResponseOfPaymentResponse } from '../models/ApiListResponseOfPaymentResponse';
import { ApiListResponseOfRealTimeTransaction } from '../models/ApiListResponseOfRealTimeTransaction';
import { ApiListResponseOfTransaction } from '../models/ApiListResponseOfTransaction';
import { ApiResponseError } from '../models/ApiResponseError';
import { ApiResponseOfAccount } from '../models/ApiResponseOfAccount';
import { ApiResponseOfAccountStatement } from '../models/ApiResponseOfAccountStatement';
import { ApiResponseOfBalances } from '../models/ApiResponseOfBalances';
import { ApiResponseOfIdentity } from '../models/ApiResponseOfIdentity';
import { SortEnum } from '../models/SortEnum';

/**
 * no description
 */
export class FinancialDataApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns the account and balance information for a user\'s specified account.<br><br>Feature: `ACCOUNT`
     * Get Account
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async getAccount(accountId: string, consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new RequiredError("FinancialDataApi", "getAccount", "accountId");
        }


        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("FinancialDataApi", "getAccount", "consent");
        }






        // Path Params
        const localVarPath = '/accounts/{accountId}'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
     * Returns the balance for the end user associated with the presented consent token.<br><br>Feature: `ACCOUNT_BALANCES`
     * Get Account Balances
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async getAccountBalances(accountId: string, consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new RequiredError("FinancialDataApi", "getAccountBalances", "accountId");
        }


        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("FinancialDataApi", "getAccountBalances", "consent");
        }






        // Path Params
        const localVarPath = '/accounts/{accountId}/balances'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
     * Returns the list of direct debits for an account.<br><br>Feature: `ACCOUNT_DIRECT_DEBITS`
     * Get Account Direct Debits
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async getAccountDirectDebits(accountId: string, consent: string, limit?: number, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new RequiredError("FinancialDataApi", "getAccountDirectDebits", "accountId");
        }


        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("FinancialDataApi", "getAccountDirectDebits", "consent");
        }




        // Path Params
        const localVarPath = '/accounts/{accountId}/direct-debits'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

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
     * Returns the list of periodic payments (standing orders in the UK) for an account.<br><br>Feature: `ACCOUNT_PERIODIC_PAYMENTS`
     * Get Account Periodic Payments
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async getAccountPeriodicPayments(accountId: string, consent: string, limit?: number, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new RequiredError("FinancialDataApi", "getAccountPeriodicPayments", "accountId");
        }


        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("FinancialDataApi", "getAccountPeriodicPayments", "consent");
        }




        // Path Params
        const localVarPath = '/accounts/{accountId}/periodic-payments'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

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
     * Returns the list of scheduled payments for an account.<br><br>Feature: `ACCOUNT_SCHEDULED_PAYMENTS`
     * Get Account Scheduled Payments
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async getAccountScheduledPayments(accountId: string, consent: string, limit?: number, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new RequiredError("FinancialDataApi", "getAccountScheduledPayments", "accountId");
        }


        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("FinancialDataApi", "getAccountScheduledPayments", "consent");
        }




        // Path Params
        const localVarPath = '/accounts/{accountId}/scheduled-payments'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

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
     * Returns all accounts and balances for the end user associated with the presented consent token.<br><br>Feature: `ACCOUNTS`
     * Get Accounts
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async getAccounts(consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("FinancialDataApi", "getAccounts", "consent");
        }






        // Path Params
        const localVarPath = '/accounts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
     * Returns all the beneficiaries of a user\'s account.<br><br>Feature: `ACCOUNT_BENEFICIARIES`
     * Get Account Beneficiaries
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async getBeneficiaries(accountId: string, consent: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new RequiredError("FinancialDataApi", "getBeneficiaries", "accountId");
        }


        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("FinancialDataApi", "getBeneficiaries", "consent");
        }



        // Path Params
        const localVarPath = '/accounts/{accountId}/beneficiaries'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

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
     * Used to retrieve the list of categories returned by the Yapily Categorisation engine for a given locale. <br><br>See [Data Enrichment](https://docs.yapily.com/pages/key-concepts/account-data/data-enrichment/intro-to-data-enrichment/) for more information.
     * Get Categories
     * @param country __Mandatory__. The 2 letter country code e.g. \&#39;GB\&#39;.
     */
    public async getCategories(country: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'country' is not null or undefined
        if (country === null || country === undefined) {
            throw new RequiredError("FinancialDataApi", "getCategories", "country");
        }


        // Path Params
        const localVarPath = '/categories/{country}'
            .replace('{' + 'country' + '}', encodeURIComponent(String(country)));

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
     * Returns the identity information for an account.<br><br>Feature: `IDENTITY`
     * Get Identity
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async getIdentity(consent: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("FinancialDataApi", "getIdentity", "consent");
        }



        // Path Params
        const localVarPath = '/identity';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

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
     * Used to get the account transactions for an account in real time with cursor pagination<br><br>Feature: `ACCOUNT_TRANSACTIONS`
     * Get Real Time Account Transactions
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param _from __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).
     * @param before __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).
     * @param cursor __Optional__. The cursor token supplied by a previous call. The cursor represents a location in the data set.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async getRealTimeTransactions(accountId: string, consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, _from?: string, before?: string, cursor?: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new RequiredError("FinancialDataApi", "getRealTimeTransactions", "accountId");
        }


        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("FinancialDataApi", "getRealTimeTransactions", "consent");
        }









        // Path Params
        const localVarPath = '/accounts/{accountId}/real-time/transactions'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (_from !== undefined) {
            requestContext.setQueryParam("from", ObjectSerializer.serialize(_from, "string", ""));
        }

        // Query Params
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "string", ""));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

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
     * Returns a statement for an account.<br><br>Feature: `ACCOUNT_STATEMENT`
     * Get Account Statement
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param statementId __Mandatory__. The statement Id of the statement file.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async getStatement(consent: string, accountId: string, statementId: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("FinancialDataApi", "getStatement", "consent");
        }


        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new RequiredError("FinancialDataApi", "getStatement", "accountId");
        }


        // verify required parameter 'statementId' is not null or undefined
        if (statementId === null || statementId === undefined) {
            throw new RequiredError("FinancialDataApi", "getStatement", "statementId");
        }



        // Path Params
        const localVarPath = '/accounts/{accountId}/statements/{statementId}'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)))
            .replace('{' + 'statementId' + '}', encodeURIComponent(String(statementId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

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
     * Returns a PDF file of a statement for an account.<br><br>Feature: `ACCOUNT_STATEMENT_FILE`
     * Get Account Statement File
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param statementId __Mandatory__. The statement Id of the statement file.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async getStatementFile(consent: string, accountId: string, statementId: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("FinancialDataApi", "getStatementFile", "consent");
        }


        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new RequiredError("FinancialDataApi", "getStatementFile", "accountId");
        }


        // verify required parameter 'statementId' is not null or undefined
        if (statementId === null || statementId === undefined) {
            throw new RequiredError("FinancialDataApi", "getStatementFile", "statementId");
        }



        // Path Params
        const localVarPath = '/accounts/{accountId}/statements/{statementId}/file'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)))
            .replace('{' + 'statementId' + '}', encodeURIComponent(String(statementId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

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
     * Returns the list of statements for an account.<br><br>Feature: `ACCOUNT_STATEMENTS`
     * Get Account Statements
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param _from __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ). 
     * @param before __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).
     * @param limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param sort __Optional__. Sort transaction records by date ascending with \&#39;date\&#39; or descending with \&#39;-date\&#39;. The default sort order is descending
     * @param offset __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async getStatements(consent: string, accountId: string, _from?: string, before?: string, limit?: number, sort?: SortEnum, offset?: number, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("FinancialDataApi", "getStatements", "consent");
        }


        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new RequiredError("FinancialDataApi", "getStatements", "accountId");
        }








        // Path Params
        const localVarPath = '/accounts/{accountId}/statements'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "SortEnum", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int32"));
        }

        // Query Params
        if (raw !== undefined) {
            requestContext.setQueryParam("raw", ObjectSerializer.serialize(raw, "boolean", ""));
        }

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
     * Returns the account transactions for an account.<br><br>Feature: `ACCOUNT_TRANSACTIONS`
     * Get Account Transactions
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param _with __Optional__. Acceptable value: &#x60;categorisation&#x60;. When set, will include enrichment data in the transactions returned. &lt;br&gt;&lt;br&gt;Enrichment data is optional, e.g. when \&#39;categorisation\&#39; enrichment data is requested, the enrichment response will include categorisation data and merchant name, only if it can be evaluated from the transaction. This service is limited for UK institution transactions currently.
     * @param _from __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ). 
     * @param before __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).
     * @param limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param sort __Optional__. Sort transaction records by date ascending with \&#39;date\&#39; or descending with \&#39;-date\&#39;. The default sort order is descending
     * @param offset __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
     * @param cursor __Optional__. This property is not currently in use.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public async getTransactions(accountId: string, consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, _with?: Array<string>, _from?: string, before?: string, limit?: number, sort?: SortEnum, offset?: number, cursor?: string, raw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new RequiredError("FinancialDataApi", "getTransactions", "accountId");
        }


        // verify required parameter 'consent' is not null or undefined
        if (consent === null || consent === undefined) {
            throw new RequiredError("FinancialDataApi", "getTransactions", "consent");
        }













        // Path Params
        const localVarPath = '/accounts/{accountId}/transactions'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (_with !== undefined) {
            requestContext.setQueryParam("with", ObjectSerializer.serialize(_with, "Array<string>", ""));
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
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "SortEnum", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int32"));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

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

}

export class FinancialDataApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAccountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfAccount >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfAccount", ""
            ) as ApiResponseOfAccount;
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
            const body: ApiResponseOfAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfAccount", ""
            ) as ApiResponseOfAccount;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccountBalances
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAccountBalancesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfBalances >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfBalances = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfBalances", ""
            ) as ApiResponseOfBalances;
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
            const body: ApiResponseOfBalances = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfBalances", ""
            ) as ApiResponseOfBalances;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccountDirectDebits
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAccountDirectDebitsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListResponseOfDirectDebitResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListResponseOfDirectDebitResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfDirectDebitResponse", ""
            ) as ApiListResponseOfDirectDebitResponse;
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
            const body: ApiListResponseOfDirectDebitResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfDirectDebitResponse", ""
            ) as ApiListResponseOfDirectDebitResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccountPeriodicPayments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAccountPeriodicPaymentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListResponseOfPaymentResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListResponseOfPaymentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfPaymentResponse", ""
            ) as ApiListResponseOfPaymentResponse;
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
            const body: ApiListResponseOfPaymentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfPaymentResponse", ""
            ) as ApiListResponseOfPaymentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccountScheduledPayments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAccountScheduledPaymentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListResponseOfPaymentResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListResponseOfPaymentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfPaymentResponse", ""
            ) as ApiListResponseOfPaymentResponse;
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
            const body: ApiListResponseOfPaymentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfPaymentResponse", ""
            ) as ApiListResponseOfPaymentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccounts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAccountsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccountApiListResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountApiListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountApiListResponse", ""
            ) as AccountApiListResponse;
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
            const body: AccountApiListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountApiListResponse", ""
            ) as AccountApiListResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBeneficiaries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBeneficiariesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListResponseOfBeneficiary >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListResponseOfBeneficiary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfBeneficiary", ""
            ) as ApiListResponseOfBeneficiary;
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
            const body: ApiListResponseOfBeneficiary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfBeneficiary", ""
            ) as ApiListResponseOfBeneficiary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCategories
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCategoriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListResponseOfCategory >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListResponseOfCategory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfCategory", ""
            ) as ApiListResponseOfCategory;
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
            const body: ApiListResponseOfCategory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfCategory", ""
            ) as ApiListResponseOfCategory;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIdentity
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getIdentityWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfIdentity >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfIdentity = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfIdentity", ""
            ) as ApiResponseOfIdentity;
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
            const body: ApiResponseOfIdentity = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfIdentity", ""
            ) as ApiResponseOfIdentity;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRealTimeTransactions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRealTimeTransactionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListResponseOfRealTimeTransaction >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListResponseOfRealTimeTransaction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfRealTimeTransaction", ""
            ) as ApiListResponseOfRealTimeTransaction;
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
            const body: ApiListResponseOfRealTimeTransaction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfRealTimeTransaction", ""
            ) as ApiListResponseOfRealTimeTransaction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getStatement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getStatementWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfAccountStatement >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfAccountStatement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfAccountStatement", ""
            ) as ApiResponseOfAccountStatement;
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
            const body: ApiResponseOfAccountStatement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfAccountStatement", ""
            ) as ApiResponseOfAccountStatement;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getStatementFile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getStatementFileWithHttpInfo(response: ResponseContext): Promise<HttpInfo<HttpFile >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ApiResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseError", "binary"
            ) as ApiResponseError;
            throw new ApiException<ApiResponseError>(response.httpStatusCode, "Error Response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getStatements
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getStatementsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListResponseOfAccountStatement >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListResponseOfAccountStatement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfAccountStatement", ""
            ) as ApiListResponseOfAccountStatement;
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
            const body: ApiListResponseOfAccountStatement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfAccountStatement", ""
            ) as ApiListResponseOfAccountStatement;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTransactions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTransactionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListResponseOfTransaction >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListResponseOfTransaction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfTransaction", ""
            ) as ApiListResponseOfTransaction;
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
            const body: ApiListResponseOfTransaction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfTransaction", ""
            ) as ApiListResponseOfTransaction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
