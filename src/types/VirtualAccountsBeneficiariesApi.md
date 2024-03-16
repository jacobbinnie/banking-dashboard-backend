# .VirtualAccountsBeneficiariesApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVirtualAccountBeneficiary**](VirtualAccountsBeneficiariesApi.md#createVirtualAccountBeneficiary) | **POST** /virtual-accounts/beneficiaries | Create Beneficiary
[**deleteVirtualAccountBeneficiary**](VirtualAccountsBeneficiariesApi.md#deleteVirtualAccountBeneficiary) | **DELETE** /virtual-accounts/beneficiaries/{beneficiaryId} | Delete Beneficiary
[**getVirtualAccountBeneficiaries**](VirtualAccountsBeneficiariesApi.md#getVirtualAccountBeneficiaries) | **GET** /virtual-accounts/beneficiaries | Get List Of Beneficiaries
[**getVirtualAccountBeneficiary**](VirtualAccountsBeneficiariesApi.md#getVirtualAccountBeneficiary) | **GET** /virtual-accounts/beneficiaries/{beneficiaryId} | Get Beneficiary


# **createVirtualAccountBeneficiary**
> ApiResponseOfVirtualAccountBeneficiary createVirtualAccountBeneficiary(virtualAccountBeneficiaryRequest)

Create a new beneficiary (individual or business account) to which a Pay Out can be made. The beneficiary can be used from any virtual account that is held

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsBeneficiariesApi(configuration);

let body:.VirtualAccountsBeneficiariesApiCreateVirtualAccountBeneficiaryRequest = {
  // string | The customer or sub-customer ID. Identifies the customer to perform the request for
  clientId: "5a7294ab-6b7d-4681-835a-f9b9775c75db",
  // VirtualAccountBeneficiaryRequest
  virtualAccountBeneficiaryRequest: {
    nickname: "MyBeneficiary123",
    type: "INDIVIDUAL",
    name: "Mr Jack Williams",
    birthDate: new Date('Thu Oct 03 20:00:00 EDT 2019').toISOString().split('T')[0];,
    paymentSchemes: [
      "paymentSchemes_example",
    ],
    address: {
      addressLine: "12 New Street",
      townName: "London",
      postCode: "NE15 PLZ",
      country: "GB",
    },
    account: {
      currency: "GBP",
      bankName: "Lloyds Bank",
      bankAddress: "WE12 ABC",
      bankCountry: "GB",
      accountIdentifications: [
        {
          type: "SORT_CODE",
          identification: "401016",
        },
      ],
    },
  },
};

apiInstance.createVirtualAccountBeneficiary(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtualAccountBeneficiaryRequest** | **VirtualAccountBeneficiaryRequest**|  |
 **clientId** | [**string**] | The customer or sub-customer ID. Identifies the customer to perform the request for | defaults to undefined


### Return type

**ApiResponseOfVirtualAccountBeneficiary**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**409** | Conflict with another beneficiary with same account identifications |  -  |
**400** | Bad Request. |  -  |
**401** | Unauthorised. Credentials are missing or invalid |  -  |
**403** | Forbidden. Permission to access this endpoint is not granted. |  -  |
**424** | A failure occurred during an interaction with a third party provider. |  -  |
**500** | Unexpected Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteVirtualAccountBeneficiary**
> void deleteVirtualAccountBeneficiary()

Delete a specific beneficiary (individual or business account)

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsBeneficiariesApi(configuration);

let body:.VirtualAccountsBeneficiariesApiDeleteVirtualAccountBeneficiaryRequest = {
  // string | __Mandatory__. The Id of the beneficiary that will be deleted
  beneficiaryId: "beneficiaryId_example",
  // string | The customer or sub-customer ID. Identifies the customer to perform the request for
  clientId: "5a7294ab-6b7d-4681-835a-f9b9775c75db",
};

apiInstance.deleteVirtualAccountBeneficiary(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beneficiaryId** | [**string**] | __Mandatory__. The Id of the beneficiary that will be deleted | defaults to undefined
 **clientId** | [**string**] | The customer or sub-customer ID. Identifies the customer to perform the request for | defaults to undefined


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorised. Credentials are missing or invalid |  -  |
**403** | Forbidden. Permission to access this endpoint is not granted. |  -  |
**404** | Not Found. Requested beneficiary is not found |  -  |
**424** | A failure occurred during an interaction with a third party provider. |  -  |
**500** | Unexpected Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getVirtualAccountBeneficiaries**
> ApiListResponseOfVirtualAccountBeneficiary getVirtualAccountBeneficiaries()

Gets the list of beneficiaries (individual or business account) to which a Pay Out can be made.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsBeneficiariesApi(configuration);

let body:.VirtualAccountsBeneficiariesApiGetVirtualAccountBeneficiariesRequest = {
  // string | The customer or sub-customer ID. Identifies the customer to perform the request for
  clientId: "5a7294ab-6b7d-4681-835a-f9b9775c75db",
  // string | __Optional__. Data required to provide pagination (optional)
  cursor: "cursor_example",
};

apiInstance.getVirtualAccountBeneficiaries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | [**string**] | The customer or sub-customer ID. Identifies the customer to perform the request for | defaults to undefined
 **cursor** | [**string**] | __Optional__. Data required to provide pagination | (optional) defaults to undefined


### Return type

**ApiListResponseOfVirtualAccountBeneficiary**

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

# **getVirtualAccountBeneficiary**
> ApiResponseOfVirtualAccountBeneficiary getVirtualAccountBeneficiary()

Get the details of a specific beneficiary (individual or business account) to which a Pay Out can be made from its id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsBeneficiariesApi(configuration);

let body:.VirtualAccountsBeneficiariesApiGetVirtualAccountBeneficiaryRequest = {
  // string | __Mandatory__. The Id of the requested beneficiary.
  beneficiaryId: "beneficiaryId_example",
  // string | The customer or sub-customer ID. Identifies the customer to perform the request for
  clientId: "5a7294ab-6b7d-4681-835a-f9b9775c75db",
};

apiInstance.getVirtualAccountBeneficiary(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beneficiaryId** | [**string**] | __Mandatory__. The Id of the requested beneficiary. | defaults to undefined
 **clientId** | [**string**] | The customer or sub-customer ID. Identifies the customer to perform the request for | defaults to undefined


### Return type

**ApiResponseOfVirtualAccountBeneficiary**

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
**404** | Not Found. Requested beneficiary is not found. |  -  |
**424** | A failure occurred during an interaction with a third party provider. |  -  |
**500** | Unexpected Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


