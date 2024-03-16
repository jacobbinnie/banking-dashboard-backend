# .FinancialDataApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccount**](FinancialDataApi.md#getAccount) | **GET** /accounts/{accountId} | Get Account
[**getAccountBalances**](FinancialDataApi.md#getAccountBalances) | **GET** /accounts/{accountId}/balances | Get Account Balances
[**getAccountDirectDebits**](FinancialDataApi.md#getAccountDirectDebits) | **GET** /accounts/{accountId}/direct-debits | Get Account Direct Debits
[**getAccountPeriodicPayments**](FinancialDataApi.md#getAccountPeriodicPayments) | **GET** /accounts/{accountId}/periodic-payments | Get Account Periodic Payments
[**getAccountScheduledPayments**](FinancialDataApi.md#getAccountScheduledPayments) | **GET** /accounts/{accountId}/scheduled-payments | Get Account Scheduled Payments
[**getAccounts**](FinancialDataApi.md#getAccounts) | **GET** /accounts | Get Accounts
[**getBeneficiaries**](FinancialDataApi.md#getBeneficiaries) | **GET** /accounts/{accountId}/beneficiaries | Get Account Beneficiaries
[**getCategories**](FinancialDataApi.md#getCategories) | **GET** /categories/{country} | Get Categories
[**getIdentity**](FinancialDataApi.md#getIdentity) | **GET** /identity | Get Identity
[**getRealTimeTransactions**](FinancialDataApi.md#getRealTimeTransactions) | **GET** /accounts/{accountId}/real-time/transactions | Get Real Time Account Transactions
[**getStatement**](FinancialDataApi.md#getStatement) | **GET** /accounts/{accountId}/statements/{statementId} | Get Account Statement
[**getStatementFile**](FinancialDataApi.md#getStatementFile) | **GET** /accounts/{accountId}/statements/{statementId}/file | Get Account Statement File
[**getStatements**](FinancialDataApi.md#getStatements) | **GET** /accounts/{accountId}/statements | Get Account Statements
[**getTransactions**](FinancialDataApi.md#getTransactions) | **GET** /accounts/{accountId}/transactions | Get Account Transactions


# **getAccount**
> ApiResponseOfAccount getAccount()

Returns the account and balance information for a user\'s specified account.<br><br>Feature: `ACCOUNT`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FinancialDataApi(configuration);

let body:.FinancialDataApiGetAccountRequest = {
  // string | __Mandatory__. The account Id of the user\'s bank account.
  accountId: "accountId_example",
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consent: "{consentToken}",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuId: "psu-id_example",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuCorporateId: "psu-corporate-id_example",
  // string | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuIpAddress: "psu-ip-address_example",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.getAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | __Mandatory__. The account Id of the user\&#39;s bank account. | defaults to undefined
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined
 **psuId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuCorporateId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiResponseOfAccount**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccountBalances**
> ApiResponseOfBalances getAccountBalances()

Returns the balance for the end user associated with the presented consent token.<br><br>Feature: `ACCOUNT_BALANCES`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FinancialDataApi(configuration);

let body:.FinancialDataApiGetAccountBalancesRequest = {
  // string | __Mandatory__. The account Id of the user\'s bank account.
  accountId: "accountId_example",
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consent: "{consentToken}",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuId: "psu-id_example",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuCorporateId: "psu-corporate-id_example",
  // string | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuIpAddress: "psu-ip-address_example",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.getAccountBalances(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | __Mandatory__. The account Id of the user\&#39;s bank account. | defaults to undefined
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined
 **psuId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuCorporateId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiResponseOfBalances**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccountDirectDebits**
> ApiListResponseOfDirectDebitResponse getAccountDirectDebits()

Returns the list of direct debits for an account.<br><br>Feature: `ACCOUNT_DIRECT_DEBITS`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FinancialDataApi(configuration);

let body:.FinancialDataApiGetAccountDirectDebitsRequest = {
  // string | __Mandatory__. The account Id of the user\'s bank account.
  accountId: "accountId_example",
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consent: "{consentToken}",
  // number | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. (optional)
  limit: 1,
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.getAccountDirectDebits(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | __Mandatory__. The account Id of the user\&#39;s bank account. | defaults to undefined
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined
 **limit** | [**number**] | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiListResponseOfDirectDebitResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccountPeriodicPayments**
> ApiListResponseOfPaymentResponse getAccountPeriodicPayments()

Returns the list of periodic payments (standing orders in the UK) for an account.<br><br>Feature: `ACCOUNT_PERIODIC_PAYMENTS`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FinancialDataApi(configuration);

let body:.FinancialDataApiGetAccountPeriodicPaymentsRequest = {
  // string | __Mandatory__. The account Id of the user\'s bank account.
  accountId: "accountId_example",
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consent: "{consentToken}",
  // number | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. (optional)
  limit: 1,
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.getAccountPeriodicPayments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | __Mandatory__. The account Id of the user\&#39;s bank account. | defaults to undefined
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined
 **limit** | [**number**] | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiListResponseOfPaymentResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccountScheduledPayments**
> ApiListResponseOfPaymentResponse getAccountScheduledPayments()

Returns the list of scheduled payments for an account.<br><br>Feature: `ACCOUNT_SCHEDULED_PAYMENTS`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FinancialDataApi(configuration);

let body:.FinancialDataApiGetAccountScheduledPaymentsRequest = {
  // string | __Mandatory__. The account Id of the user\'s bank account.
  accountId: "accountId_example",
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consent: "{consentToken}",
  // number | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. (optional)
  limit: 1,
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.getAccountScheduledPayments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | __Mandatory__. The account Id of the user\&#39;s bank account. | defaults to undefined
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined
 **limit** | [**number**] | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiListResponseOfPaymentResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccounts**
> AccountApiListResponse getAccounts()

Returns all accounts and balances for the end user associated with the presented consent token.<br><br>Feature: `ACCOUNTS`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FinancialDataApi(configuration);

let body:.FinancialDataApiGetAccountsRequest = {
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consent: "{consentToken}",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuId: "psu-id_example",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuCorporateId: "psu-corporate-id_example",
  // string | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuIpAddress: "psu-ip-address_example",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.getAccounts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined
 **psuId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuCorporateId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**AccountApiListResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBeneficiaries**
> ApiListResponseOfBeneficiary getBeneficiaries()

Returns all the beneficiaries of a user\'s account.<br><br>Feature: `ACCOUNT_BENEFICIARIES`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FinancialDataApi(configuration);

let body:.FinancialDataApiGetBeneficiariesRequest = {
  // string | __Mandatory__. The account Id of the user\'s bank account.
  accountId: "accountId_example",
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consent: "{consentToken}",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.getBeneficiaries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | __Mandatory__. The account Id of the user\&#39;s bank account. | defaults to undefined
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiListResponseOfBeneficiary**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCategories**
> ApiListResponseOfCategory getCategories()

Used to retrieve the list of categories returned by the Yapily Categorisation engine for a given locale. <br><br>See [Data Enrichment](https://docs.yapily.com/pages/key-concepts/account-data/data-enrichment/intro-to-data-enrichment/) for more information.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FinancialDataApi(configuration);

let body:.FinancialDataApiGetCategoriesRequest = {
  // string | __Mandatory__. The 2 letter country code e.g. \'GB\'.
  country: "country_example",
};

apiInstance.getCategories(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**string**] | __Mandatory__. The 2 letter country code e.g. \&#39;GB\&#39;. | defaults to undefined


### Return type

**ApiListResponseOfCategory**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getIdentity**
> ApiResponseOfIdentity getIdentity()

Returns the identity information for an account.<br><br>Feature: `IDENTITY`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FinancialDataApi(configuration);

let body:.FinancialDataApiGetIdentityRequest = {
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consent: "{consentToken}",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.getIdentity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiResponseOfIdentity**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRealTimeTransactions**
> ApiListResponseOfRealTimeTransaction getRealTimeTransactions()

Used to get the account transactions for an account in real time with cursor pagination<br><br>Feature: `ACCOUNT_TRANSACTIONS`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FinancialDataApi(configuration);

let body:.FinancialDataApiGetRealTimeTransactionsRequest = {
  // string | __Mandatory__. The account Id of the user\'s bank account.
  accountId: "accountId_example",
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consent: "{consentToken}",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. (optional)
  psuId: "psu-id_example",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. (optional)
  psuCorporateId: "psu-corporate-id_example",
  // string | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. (optional)
  psuIpAddress: "psu-ip-address_example",
  // string | __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\'T\'HH:mm:ss.SSSZ). (optional)
  _from: "from_example",
  // string | __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\'T\'HH:mm:ss.SSSZ). (optional)
  before: "before_example",
  // string | __Optional__. The cursor token supplied by a previous call. The cursor represents a location in the data set. (optional)
  cursor: "cursor_example",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.getRealTimeTransactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | __Mandatory__. The account Id of the user\&#39;s bank account. | defaults to undefined
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined
 **psuId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuCorporateId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **_from** | [**string**] | __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ). | (optional) defaults to undefined
 **before** | [**string**] | __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ). | (optional) defaults to undefined
 **cursor** | [**string**] | __Optional__. The cursor token supplied by a previous call. The cursor represents a location in the data set. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiListResponseOfRealTimeTransaction**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Error Response |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getStatement**
> ApiResponseOfAccountStatement getStatement()

Returns a statement for an account.<br><br>Feature: `ACCOUNT_STATEMENT`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FinancialDataApi(configuration);

let body:.FinancialDataApiGetStatementRequest = {
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consent: "consent_example",
  // string | __Mandatory__. The account Id of the user\'s bank account.
  accountId: "accountId_example",
  // string | __Mandatory__. The statement Id of the statement file.
  statementId: "statementId_example",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.getStatement(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined
 **accountId** | [**string**] | __Mandatory__. The account Id of the user\&#39;s bank account. | defaults to undefined
 **statementId** | [**string**] | __Mandatory__. The statement Id of the statement file. | defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiResponseOfAccountStatement**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getStatementFile**
> HttpFile getStatementFile()

Returns a PDF file of a statement for an account.<br><br>Feature: `ACCOUNT_STATEMENT_FILE`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FinancialDataApi(configuration);

let body:.FinancialDataApiGetStatementFileRequest = {
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consent: "{consentToken}",
  // string | __Mandatory__. The account Id of the user\'s bank account.
  accountId: "accountId_example",
  // string | __Mandatory__. The statement Id of the statement file.
  statementId: "statementId_example",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.getStatementFile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined
 **accountId** | [**string**] | __Mandatory__. The account Id of the user\&#39;s bank account. | defaults to undefined
 **statementId** | [**string**] | __Mandatory__. The statement Id of the statement file. | defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**HttpFile**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getStatements**
> ApiListResponseOfAccountStatement getStatements()

Returns the list of statements for an account.<br><br>Feature: `ACCOUNT_STATEMENTS`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FinancialDataApi(configuration);

let body:.FinancialDataApiGetStatementsRequest = {
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consent: "{consentToken}",
  // string | __Mandatory__. The account Id of the user\'s bank account.
  accountId: "accountId_example",
  // string | __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\'T\'HH:mm:ss.SSSZ).  (optional)
  _from: "from_example",
  // string | __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\'T\'HH:mm:ss.SSSZ). (optional)
  before: "before_example",
  // number | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. (optional)
  limit: 1,
  // SortEnum | __Optional__. Sort transaction records by date ascending with \'date\' or descending with \'-date\'. The default sort order is descending (optional)
  sort: "date",
  // number | __Optional__. The number of transaction records to be skipped. Used primarily with paginated results. (optional)
  offset: 1,
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.getStatements(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined
 **accountId** | [**string**] | __Mandatory__. The account Id of the user\&#39;s bank account. | defaults to undefined
 **_from** | [**string**] | __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).  | (optional) defaults to undefined
 **before** | [**string**] | __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ). | (optional) defaults to undefined
 **limit** | [**number**] | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. | (optional) defaults to undefined
 **sort** | **SortEnum** | __Optional__. Sort transaction records by date ascending with \&#39;date\&#39; or descending with \&#39;-date\&#39;. The default sort order is descending | (optional) defaults to undefined
 **offset** | [**number**] | __Optional__. The number of transaction records to be skipped. Used primarily with paginated results. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiListResponseOfAccountStatement**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTransactions**
> ApiListResponseOfTransaction getTransactions()

Returns the account transactions for an account.<br><br>Feature: `ACCOUNT_TRANSACTIONS`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FinancialDataApi(configuration);

let body:.FinancialDataApiGetTransactionsRequest = {
  // string | __Mandatory__. The account Id of the user\'s bank account.
  accountId: "accountId_example",
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consent: "{consentToken}",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuId: "psu-id_example",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuCorporateId: "psu-corporate-id_example",
  // string | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuIpAddress: "psu-ip-address_example",
  // Array<string> | __Optional__. Acceptable value: `categorisation`. When set, will include enrichment data in the transactions returned. <br><br>Enrichment data is optional, e.g. when \'categorisation\' enrichment data is requested, the enrichment response will include categorisation data and merchant name, only if it can be evaluated from the transaction. This service is limited for UK institution transactions currently. (optional)
  _with: [
    "with_example",
  ],
  // string | __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\'T\'HH:mm:ss.SSSZ).  (optional)
  _from: "from_example",
  // string | __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\'T\'HH:mm:ss.SSSZ). (optional)
  before: "before_example",
  // number | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. (optional)
  limit: 1,
  // SortEnum | __Optional__. Sort transaction records by date ascending with \'date\' or descending with \'-date\'. The default sort order is descending (optional)
  sort: "date",
  // number | __Optional__. The number of transaction records to be skipped. Used primarily with paginated results. (optional)
  offset: 1,
  // string | __Optional__. This property is not currently in use. (optional)
  cursor: "cursor_example",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.getTransactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | __Mandatory__. The account Id of the user\&#39;s bank account. | defaults to undefined
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined
 **psuId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuCorporateId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **_with** | **Array&lt;string&gt;** | __Optional__. Acceptable value: &#x60;categorisation&#x60;. When set, will include enrichment data in the transactions returned. &lt;br&gt;&lt;br&gt;Enrichment data is optional, e.g. when \&#39;categorisation\&#39; enrichment data is requested, the enrichment response will include categorisation data and merchant name, only if it can be evaluated from the transaction. This service is limited for UK institution transactions currently. | (optional) defaults to undefined
 **_from** | [**string**] | __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).  | (optional) defaults to undefined
 **before** | [**string**] | __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ). | (optional) defaults to undefined
 **limit** | [**number**] | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. | (optional) defaults to undefined
 **sort** | **SortEnum** | __Optional__. Sort transaction records by date ascending with \&#39;date\&#39; or descending with \&#39;-date\&#39;. The default sort order is descending | (optional) defaults to undefined
 **offset** | [**number**] | __Optional__. The number of transaction records to be skipped. Used primarily with paginated results. | (optional) defaults to undefined
 **cursor** | [**string**] | __Optional__. This property is not currently in use. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiListResponseOfTransaction**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


