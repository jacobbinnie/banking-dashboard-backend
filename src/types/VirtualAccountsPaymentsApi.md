# .VirtualAccountsPaymentsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVirtualAccountPayOut**](VirtualAccountsPaymentsApi.md#createVirtualAccountPayOut) | **POST** /virtual-accounts/payments/pay-outs | Create Pay Out
[**createVirtualAccountTransfer**](VirtualAccountsPaymentsApi.md#createVirtualAccountTransfer) | **POST** /virtual-accounts/payments/transfers | Create Virtual Account Transfer
[**getPayInDetails**](VirtualAccountsPaymentsApi.md#getPayInDetails) | **GET** /virtual-accounts/payments/{paymentId}/pay-in-details | Get Pay-In Details
[**getPaymentsById**](VirtualAccountsPaymentsApi.md#getPaymentsById) | **GET** /virtual-accounts/payments/{id} | Get Payment
[**getVirtualAccountPayments**](VirtualAccountsPaymentsApi.md#getVirtualAccountPayments) | **GET** /virtual-accounts/payments | Get Payments


# **createVirtualAccountPayOut**
> ApiResponseOfVirtualAccountPayment createVirtualAccountPayOut(virtualAccountPayOutRequest)

Initiate a payment from a specified virtual account to a previously added beneficiary using any of the schemes that it supports <br> When subscribed to virtualAccount.payOut.status notifications, further updates on payment processing status will be delivered asynchronously 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsPaymentsApi(configuration);

let body:.VirtualAccountsPaymentsApiCreateVirtualAccountPayOutRequest = {
  // string | Uniquely identifies a request, such that requests made with a same value are considered retries <br> We recommend that a v4 UUID is supplied 
  idempotencyKey: "a346fe67-1d81-4ccd-8409-bf9d6c07980f",
  // string | The customer or sub-customer ID. Identifies the customer to perform the request for
  clientId: "5a7294ab-6b7d-4681-835a-f9b9775c75db",
  // VirtualAccountPayOutRequest
  virtualAccountPayOutRequest: {
    accountId: "eb2ad083-a111-4143-8756-a3a3cef4031c",
    amount: null,
    reference: "Invoice 1267765",
    beneficiaryId: "sd6ad034-a111-4143-8756-a3a3cef4045v",
    paymentScheme: "FASTER_PAYMENTS",
    paymentDate: new Date('Mon Oct 03 20:00:00 EDT 2022').toISOString().split('T')[0];,
  },
};

apiInstance.createVirtualAccountPayOut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtualAccountPayOutRequest** | **VirtualAccountPayOutRequest**|  |
 **idempotencyKey** | [**string**] | Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied  | defaults to undefined
 **clientId** | [**string**] | The customer or sub-customer ID. Identifies the customer to perform the request for | defaults to undefined


### Return type

**ApiResponseOfVirtualAccountPayment**

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

# **createVirtualAccountTransfer**
> ApiResponseOfVirtualAccountPayment createVirtualAccountTransfer(virtualAccountTransferRequest)

Create a transfer between two virtual accounts

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsPaymentsApi(configuration);

let body:.VirtualAccountsPaymentsApiCreateVirtualAccountTransferRequest = {
  // string | Uniquely identifies a request, such that requests made with a same value are considered retries <br> We recommend that a v4 UUID is supplied 
  idempotencyKey: "a346fe67-1d81-4ccd-8409-bf9d6c07980f",
  // string | The customer or sub-customer ID. Identifies the customer to perform the request for
  clientId: "5a7294ab-6b7d-4681-835a-f9b9775c75db",
  // VirtualAccountTransferRequest
  virtualAccountTransferRequest: {
    amount: null,
    reference: "Ref 86543",
    source: {
      accountId: "eb2ad083-a111-4143-8756-a3a3cef4031c",
    },
    destination: {
      accountId: "eb2ad083-a111-4143-8756-a3a3cef4031c",
    },
  },
};

apiInstance.createVirtualAccountTransfer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtualAccountTransferRequest** | **VirtualAccountTransferRequest**|  |
 **idempotencyKey** | [**string**] | Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied  | defaults to undefined
 **clientId** | [**string**] | The customer or sub-customer ID. Identifies the customer to perform the request for | defaults to undefined


### Return type

**ApiResponseOfVirtualAccountPayment**

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

# **getPayInDetails**
> ApiResponseOfVirtualAccountPayInDetails getPayInDetails()

Get the details of a pay-in transaction

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsPaymentsApi(configuration);

let body:.VirtualAccountsPaymentsApiGetPayInDetailsRequest = {
  // string | Uniquely identifies a transaction
  paymentId: "8b66abb5-5412-4454-aa7b-4e693ada6321",
  // string | The customer or sub-customer ID. Identifies the customer to perform the request for
  clientId: "5a7294ab-6b7d-4681-835a-f9b9775c75db",
};

apiInstance.getPayInDetails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentId** | [**string**] | Uniquely identifies a transaction | defaults to undefined
 **clientId** | [**string**] | The customer or sub-customer ID. Identifies the customer to perform the request for | defaults to undefined


### Return type

**ApiResponseOfVirtualAccountPayInDetails**

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

# **getPaymentsById**
> ApiResponseOfVirtualAccountPayment getPaymentsById()

Get the details of a specific payment using its Id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsPaymentsApi(configuration);

let body:.VirtualAccountsPaymentsApiGetPaymentsByIdRequest = {
  // string | __Mandatory__. The id of the payment
  id: "id_example",
  // string | The customer or sub-customer ID. Identifies the customer to perform the request for
  clientId: "5a7294ab-6b7d-4681-835a-f9b9775c75db",
};

apiInstance.getPaymentsById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | __Mandatory__. The id of the payment | defaults to undefined
 **clientId** | [**string**] | The customer or sub-customer ID. Identifies the customer to perform the request for | defaults to undefined


### Return type

**ApiResponseOfVirtualAccountPayment**

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
**404** | Not Found. Requested payment is not found. |  -  |
**424** | A failure occurred during an interaction with a third party provider. |  -  |
**500** | Unexpected Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getVirtualAccountPayments**
> ApiListResponseOfVirtualAccountPayment getVirtualAccountPayments()

Retrieve a list of virtual account payments

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsPaymentsApi(configuration);

let body:.VirtualAccountsPaymentsApiGetVirtualAccountPaymentsRequest = {
  // string | The customer or sub-customer ID. Identifies the customer to perform the request for
  clientId: "5a7294ab-6b7d-4681-835a-f9b9775c75db",
  // string | __Optional__. Filter payments based on accountId (optional)
  accountId: "eb2ad083-a111-4143-8756-a3a3cef4031c",
  // Date | __Optional__. Filter payments based on the createdDateTime (optional)
  createdDateTimeFrom: new Date('2022-04-24T00:30:19.951Z'),
  // Date | __Optional__. Filter payments based on the createdDateTime (optional)
  createdDateTimeTo: new Date('2022-04-24T00:30:19.951Z'),
  // Array<string> | __Optional__. Filter payments based on the payment status. One of INITIATED, PENDING, PROCESSING, COMPLETED, FAILED (optional)
  status: ["INITIATED","COMPLETED"],
  // Array<string> | __Optional__. Filter payments based on the payment type. One of PAY_IN, PAY_OUT, RETURN_IN, RETURN_OUT (optional)
  type: ["PAY_IN","PAY_OUT"],
  // string | __Optional__. Data required to provide pagination (optional)
  cursor: "cursor_example",
};

apiInstance.getVirtualAccountPayments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | [**string**] | The customer or sub-customer ID. Identifies the customer to perform the request for | defaults to undefined
 **accountId** | [**string**] | __Optional__. Filter payments based on accountId | (optional) defaults to undefined
 **createdDateTimeFrom** | [**Date**] | __Optional__. Filter payments based on the createdDateTime | (optional) defaults to undefined
 **createdDateTimeTo** | [**Date**] | __Optional__. Filter payments based on the createdDateTime | (optional) defaults to undefined
 **status** | **Array&lt;string&gt;** | __Optional__. Filter payments based on the payment status. One of INITIATED, PENDING, PROCESSING, COMPLETED, FAILED | (optional) defaults to undefined
 **type** | **Array&lt;string&gt;** | __Optional__. Filter payments based on the payment type. One of PAY_IN, PAY_OUT, RETURN_IN, RETURN_OUT | (optional) defaults to undefined
 **cursor** | [**string**] | __Optional__. Data required to provide pagination | (optional) defaults to undefined


### Return type

**ApiListResponseOfVirtualAccountPayment**

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


