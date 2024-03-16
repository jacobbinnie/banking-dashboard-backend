# .VirtualAccountsClientsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVirtualAccountClient**](VirtualAccountsClientsApi.md#createVirtualAccountClient) | **POST** /virtual-accounts/clients | Create Virtual Account Client
[**getVirtualAccountClientById**](VirtualAccountsClientsApi.md#getVirtualAccountClientById) | **GET** /virtual-accounts/clients/{clientId} | Get a Virtual Account Client by ID
[**getVirtualAccountClients**](VirtualAccountsClientsApi.md#getVirtualAccountClients) | **GET** /virtual-accounts/clients | Get List of Virtual Account Clients


# **createVirtualAccountClient**
> ApiResponseOfVirtualAccountClient createVirtualAccountClient(virtualAccountClientRequest)

Create a new virtual account client (individual or business client). Available for clients who have direct onboarding permissions only. Please contact your CSM to enquire about access

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsClientsApi(configuration);

let body:.VirtualAccountsClientsApiCreateVirtualAccountClientRequest = {
  // string | __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
  clientId: "5a7294ab-6b7d-4681-835a-f9b9775c75db",
  // VirtualAccountClientRequest
  virtualAccountClientRequest: {
    type: "INDIVIDUAL",
    individual: {
      firstName: "firstName_example",
      middleName: "middleName_example",
      lastName: "lastName_example",
      address: {
        addressLine1: "12 New Street",
        addressLine2: "Barcelona CA 08005",
        townName: "Barcelona ",
        postCode: "08005",
        country: "ES",
      },
      birthDate: new Date('1970-01-01').toISOString().split('T')[0];,
      email: "email_example",
      phone: "phone_example",
    },
    business: {
      name: "name_example",
      type: "SOLE_TRADER",
      registrationNumber: "registrationNumber_example",
      registeredAddress: {
        addressLine1: "12 New Street",
        addressLine2: "Barcelona CA 08005",
        townName: "Barcelona ",
        postCode: "08005",
        country: "ES",
      },
      tradingAddress: {
        addressLine1: "12 New Street",
        addressLine2: "Barcelona CA 08005",
        townName: "Barcelona ",
        postCode: "08005",
        country: "ES",
      },
      contactName: "contactName_example",
      email: "email_example",
      phone: "phone_example",
    },
  },
};

apiInstance.createVirtualAccountClient(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtualAccountClientRequest** | **VirtualAccountClientRequest**|  |
 **clientId** | [**string**] | __Mandatory__. This must be your master client-id (and not one associated with one of your clients) | defaults to undefined


### Return type

**ApiResponseOfVirtualAccountClient**

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

# **getVirtualAccountClientById**
> ApiResponseOfVirtualAccountClient getVirtualAccountClientById()

Get a Virtual Account Client using its ID. Restricted to applications with direct onboarding permissions only

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsClientsApi(configuration);

let body:.VirtualAccountsClientsApiGetVirtualAccountClientByIdRequest = {
  // string | __Mandatory__. The ID of the client.
  clientId: "clientId_example",
  // string | __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
  clientId2: "5a7294ab-6b7d-4681-835a-f9b9775c75db",
};

apiInstance.getVirtualAccountClientById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | [**string**] | __Mandatory__. The ID of the client. | defaults to undefined
 **clientId2** | [**string**] | __Mandatory__. This must be your master client-id (and not one associated with one of your clients) | defaults to undefined


### Return type

**ApiResponseOfVirtualAccountClient**

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

# **getVirtualAccountClients**
> ApiListResponseOfVirtualAccountClient getVirtualAccountClients()

Get Virtual Account Clients (individual or business client).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsClientsApi(configuration);

let body:.VirtualAccountsClientsApiGetVirtualAccountClientsRequest = {
  // string | __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
  clientId: "5a7294ab-6b7d-4681-835a-f9b9775c75db",
  // string | __Optional__.  Filter clients based on client type. One of BUSINESS or INDIVIDUAL (optional)
  type: "BUSINESS",
  // string | __Optional__.  Filter clients based on client status. One of ACTIVE, PENDING or SUSPENDED (optional)
  status: "ACTIVE",
  // string | __Optional__. Data required to provide pagination (optional)
  cursor: "cursor_example",
};

apiInstance.getVirtualAccountClients(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | [**string**] | __Mandatory__. This must be your master client-id (and not one associated with one of your clients) | defaults to undefined
 **type** | [**string**] | __Optional__.  Filter clients based on client type. One of BUSINESS or INDIVIDUAL | (optional) defaults to undefined
 **status** | [**string**] | __Optional__.  Filter clients based on client status. One of ACTIVE, PENDING or SUSPENDED | (optional) defaults to undefined
 **cursor** | [**string**] | __Optional__. Data required to provide pagination | (optional) defaults to undefined


### Return type

**ApiListResponseOfVirtualAccountClient**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorised. Credentials are missing or invalid |  -  |
**403** | Forbidden. Permission to access this endpoint is not granted. |  -  |
**424** | A failure occured during interaction with a third party provider |  -  |
**500** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


