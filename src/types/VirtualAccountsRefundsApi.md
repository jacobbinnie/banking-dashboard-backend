# .VirtualAccountsRefundsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVirtualAccountRefund**](VirtualAccountsRefundsApi.md#createVirtualAccountRefund) | **POST** /virtual-accounts/refunds | Create Refund
[**getVirtualAccountRefundById**](VirtualAccountsRefundsApi.md#getVirtualAccountRefundById) | **GET** /virtual-accounts/refunds/{id} | Get Refund By Id
[**getVirtualAccountRefunds**](VirtualAccountsRefundsApi.md#getVirtualAccountRefunds) | **GET** /virtual-accounts/refunds | Get list of refunds


# **createVirtualAccountRefund**
> ApiResponseOfVirtualAccountRefund createVirtualAccountRefund(virtualAccountRefundRequest)

Create a refund for a payment received into a virtual account. Funds are returned to the source account. When subscribed to `virtualAccount.refund.status` notifications, updates on the refund status are delivered asynchronously.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsRefundsApi(configuration);

let body:.VirtualAccountsRefundsApiCreateVirtualAccountRefundRequest = {
  // string | Uniquely identifies a request, such that requests made with a same value are considered retries <br> We recommend that a v4 UUID is supplied 
  idempotencyKey: "a346fe67-1d81-4ccd-8409-bf9d6c07980f",
  // string | The customer or sub-customer ID. Identifies the customer to perform the request for
  clientId: "5a7294ab-6b7d-4681-835a-f9b9775c75db",
  // VirtualAccountRefundRequest
  virtualAccountRefundRequest: {
    originalPayment: {
      paymentInitiationId: "paymentInitiationId_example",
    },
    amount: null,
    reason: "REQUESTED_BY_CUSTOMER",
    paymentDate: new Date('Mon Oct 03 20:00:00 EDT 2022').toISOString().split('T')[0];,
    reference: "Invoice 1267765",
    refundTo: "SOURCE",
    refundToOriginalPayer: true,
    beneficiaryType: "INDIVIDUAL",
    beneficiary: null,
  },
};

apiInstance.createVirtualAccountRefund(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtualAccountRefundRequest** | **VirtualAccountRefundRequest**|  |
 **idempotencyKey** | [**string**] | Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied  | defaults to undefined
 **clientId** | [**string**] | The customer or sub-customer ID. Identifies the customer to perform the request for | defaults to undefined


### Return type

**ApiResponseOfVirtualAccountRefund**

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

# **getVirtualAccountRefundById**
> ApiResponseOfVirtualAccountRefund getVirtualAccountRefundById()

Get the details of a refund by its ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsRefundsApi(configuration);

let body:.VirtualAccountsRefundsApiGetVirtualAccountRefundByIdRequest = {
  // string | __Mandatory__. The id of the refund
  id: "id_example",
  // string | The customer or sub-customer ID. Identifies the customer to perform the request for
  clientId: "5a7294ab-6b7d-4681-835a-f9b9775c75db",
};

apiInstance.getVirtualAccountRefundById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | __Mandatory__. The id of the refund | defaults to undefined
 **clientId** | [**string**] | The customer or sub-customer ID. Identifies the customer to perform the request for | defaults to undefined


### Return type

**ApiResponseOfVirtualAccountRefund**

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

# **getVirtualAccountRefunds**
> ApiListResponseOfVirtualAccountRefund getVirtualAccountRefunds()

Retrieve a list of refunds

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsRefundsApi(configuration);

let body:.VirtualAccountsRefundsApiGetVirtualAccountRefundsRequest = {
  // string | The customer or sub-customer ID. Identifies the customer to perform the request for
  clientId: "5a7294ab-6b7d-4681-835a-f9b9775c75db",
  // string | __Optional__. Filter refunds based on unique ID of the original payment (optional)
  paymentInitiationId: "PDC_29bd8528-9b6f-4b6e-a963-9382944dc830",
  // string | __Optional__.  Filter refunds based on refund status. One of INITIATED, SCHEDULED, PROCESSING, COMPLETED, FAILED (optional)
  status: "PROCESSING",
  // Date | __Optional__.  Filter to get refunds created on or after this date (yyyy-MM-dd\'T\'HH:mm:ss.SSSZ) (optional)
  createdDateTimeAfter: new Date('2023-01-13T16:41:51.136085Z'),
  // Date | __Optional__.  Filter to get refunds created on or before this date (yyyy-MM-dd\'T\'HH:mm:ss.SSSZ) (optional)
  createdDateTimeBefore: new Date('2023-02-13T16:41:51.136085Z'),
  // string | __Optional__. Encoded pagination cursor to fetch next page (optional)
  cursor: "cGF5bWVudEluaXRpYXRpb25JZD1QRENfMjliZDg1MjgtOWI2Zi00YjZlLWE5NjMtOTM4Mjk0NGRjODMwJnN0YXR1cz1GQUlMRUQmY3JlYXRlZERhdGVUaW1lRnJvbT0yMDIzLTAxLTEzVDE2OjQxOjUxLjEzNjA4NVomY3JlYXRlZERhdGVUaW1lVG89MjAyMy0wMi0xMFQxODo0Mjo1MS4xMzYwODVaJnBvaW50ZXI9MjAyMy0wMS0xM1QxNjo0MTo1MS4xMzYwODU=",
};

apiInstance.getVirtualAccountRefunds(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | [**string**] | The customer or sub-customer ID. Identifies the customer to perform the request for | defaults to undefined
 **paymentInitiationId** | [**string**] | __Optional__. Filter refunds based on unique ID of the original payment | (optional) defaults to undefined
 **status** | [**string**] | __Optional__.  Filter refunds based on refund status. One of INITIATED, SCHEDULED, PROCESSING, COMPLETED, FAILED | (optional) defaults to undefined
 **createdDateTimeAfter** | [**Date**] | __Optional__.  Filter to get refunds created on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ) | (optional) defaults to undefined
 **createdDateTimeBefore** | [**Date**] | __Optional__.  Filter to get refunds created on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ) | (optional) defaults to undefined
 **cursor** | [**string**] | __Optional__. Encoded pagination cursor to fetch next page | (optional) defaults to undefined


### Return type

**ApiListResponseOfVirtualAccountRefund**

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


