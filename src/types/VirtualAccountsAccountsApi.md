# .VirtualAccountsAccountsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVirtualAccount**](VirtualAccountsAccountsApi.md#createVirtualAccount) | **POST** /virtual-accounts/accounts | Create Account
[**getVirtualAccountById**](VirtualAccountsAccountsApi.md#getVirtualAccountById) | **GET** /virtual-accounts/accounts/{accountId} | Get Account
[**getVirtualAccounts**](VirtualAccountsAccountsApi.md#getVirtualAccounts) | **GET** /virtual-accounts/accounts | Get Accounts
[**updateVirtualAccountById**](VirtualAccountsAccountsApi.md#updateVirtualAccountById) | **PATCH** /virtual-accounts/accounts/{accountId} | Update Account


# **createVirtualAccount**
> ApiResponseOfVirtualAccount createVirtualAccount(virtualAccountRequest)

Create a new virtual account

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsAccountsApi(configuration);

let body:.VirtualAccountsAccountsApiCreateVirtualAccountRequest = {
  // string | The customer or sub-customer ID. Identifies the customer to perform the request for
  clientId: "5a7294ab-6b7d-4681-835a-f9b9775c75db",
  // VirtualAccountRequest
  virtualAccountRequest: {
    nickname: "MyAccount123",
    currency: "GBP",
  },
};

apiInstance.createVirtualAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtualAccountRequest** | **VirtualAccountRequest**|  |
 **clientId** | [**string**] | The customer or sub-customer ID. Identifies the customer to perform the request for | defaults to undefined


### Return type

**ApiResponseOfVirtualAccount**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request. |  -  |
**401** | Unauthorised. Credentials are missing or invalid |  -  |
**403** | Forbidden. Permission to access this endpoint is not granted. |  -  |
**424** | A failure occurred during an interaction with a third party provider. |  -  |
**500** | Unexpected Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getVirtualAccountById**
> ApiResponseOfVirtualAccount getVirtualAccountById()

Get the details of a specific account using its Id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsAccountsApi(configuration);

let body:.VirtualAccountsAccountsApiGetVirtualAccountByIdRequest = {
  // string | __Mandatory__. The Id of the account.
  accountId: "accountId_example",
  // string | The customer or sub-customer ID. Identifies the customer to perform the request for
  clientId: "5a7294ab-6b7d-4681-835a-f9b9775c75db",
};

apiInstance.getVirtualAccountById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | __Mandatory__. The Id of the account. | defaults to undefined
 **clientId** | [**string**] | The customer or sub-customer ID. Identifies the customer to perform the request for | defaults to undefined


### Return type

**ApiResponseOfVirtualAccount**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. |  -  |
**401** | Unauthorised. Credentials are missing or invalid |  -  |
**403** | Forbidden. Permission to access this endpoint is not granted. |  -  |
**404** | Not Found. Resource requested is not found. |  -  |
**424** | A failure occurred during an interaction with a third party provider. |  -  |
**500** | Unexpected Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getVirtualAccounts**
> ApiListResponseOfVirtualAccount getVirtualAccounts()

Retrieve a list of all virtual accounts held

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsAccountsApi(configuration);

let body:.VirtualAccountsAccountsApiGetVirtualAccountsRequest = {
  // string | The customer or sub-customer ID. Identifies the customer to perform the request for
  clientId: "5a7294ab-6b7d-4681-835a-f9b9775c75db",
  // string | __Optional__. Filter accounts based on reference provided in order to help with identification of the account (optional)
  nickname: "nickname_example",
  // string | __Optional__. Filter accounts based on three-letter ISO 4217 currency code (optional)
  currency: "AEI",
  // string | __Optional__. Filter accounts based on their current state. One of PENDING, ACTIVE, FAILED, SUSPENDED or CLOSED (optional)
  status: "status_example",
  // string | __Optional__. Data required to provide pagination (optional)
  cursor: "cursor_example",
};

apiInstance.getVirtualAccounts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | [**string**] | The customer or sub-customer ID. Identifies the customer to perform the request for | defaults to undefined
 **nickname** | [**string**] | __Optional__. Filter accounts based on reference provided in order to help with identification of the account | (optional) defaults to undefined
 **currency** | [**string**] | __Optional__. Filter accounts based on three-letter ISO 4217 currency code | (optional) defaults to undefined
 **status** | [**string**] | __Optional__. Filter accounts based on their current state. One of PENDING, ACTIVE, FAILED, SUSPENDED or CLOSED | (optional) defaults to undefined
 **cursor** | [**string**] | __Optional__. Data required to provide pagination | (optional) defaults to undefined


### Return type

**ApiListResponseOfVirtualAccount**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. |  -  |
**401** | Unauthorised. Credentials are missing or invalid |  -  |
**403** | Forbidden. Permission to access this endpoint is not granted. |  -  |
**424** | A failure occurred during an interaction with a third party provider. |  -  |
**500** | Unexpected Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateVirtualAccountById**
> ApiResponseOfVirtualAccount updateVirtualAccountById(updateVirtualAccountRequest)

Update the details of a specific account using its Id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsAccountsApi(configuration);

let body:.VirtualAccountsAccountsApiUpdateVirtualAccountByIdRequest = {
  // string | __Mandatory__. The Id of the account.
  accountId: "accountId_example",
  // string | The customer or sub-customer ID. Identifies the customer to perform the request for
  clientId: "5a7294ab-6b7d-4681-835a-f9b9775c75db",
  // UpdateVirtualAccountRequest
  updateVirtualAccountRequest: {
    nickname: "MyAccount123",
    status: "CLOSED",
  },
};

apiInstance.updateVirtualAccountById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateVirtualAccountRequest** | **UpdateVirtualAccountRequest**|  |
 **accountId** | [**string**] | __Mandatory__. The Id of the account. | defaults to undefined
 **clientId** | [**string**] | The customer or sub-customer ID. Identifies the customer to perform the request for | defaults to undefined


### Return type

**ApiResponseOfVirtualAccount**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. |  -  |
**401** | Unauthorised. Credentials are missing or invalid |  -  |
**403** | Forbidden. Permission to access this endpoint is not granted. |  -  |
**404** | Not Found. Resource requested is not found. |  -  |
**424** | A failure occurred during an interaction with a third party provider. |  -  |
**500** | Unexpected Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


