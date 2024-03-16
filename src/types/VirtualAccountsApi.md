# .VirtualAccountsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVirtualAccount**](VirtualAccountsApi.md#createVirtualAccount) | **POST** /virtual-accounts/accounts | Create Account
[**createVirtualAccountBeneficiary**](VirtualAccountsApi.md#createVirtualAccountBeneficiary) | **POST** /virtual-accounts/beneficiaries | Create Beneficiary
[**createVirtualAccountClient**](VirtualAccountsApi.md#createVirtualAccountClient) | **POST** /virtual-accounts/clients | Create Virtual Account Client
[**createVirtualAccountPayOut**](VirtualAccountsApi.md#createVirtualAccountPayOut) | **POST** /virtual-accounts/payments/pay-outs | Create Pay Out
[**createVirtualAccountRefund**](VirtualAccountsApi.md#createVirtualAccountRefund) | **POST** /virtual-accounts/refunds | Create Refund
[**createVirtualAccountTransfer**](VirtualAccountsApi.md#createVirtualAccountTransfer) | **POST** /virtual-accounts/payments/transfers | Create Virtual Account Transfer
[**deleteVirtualAccountBeneficiary**](VirtualAccountsApi.md#deleteVirtualAccountBeneficiary) | **DELETE** /virtual-accounts/beneficiaries/{beneficiaryId} | Delete Beneficiary
[**getPayInDetails**](VirtualAccountsApi.md#getPayInDetails) | **GET** /virtual-accounts/payments/{paymentId}/pay-in-details | Get Pay-In Details
[**getPaymentsById**](VirtualAccountsApi.md#getPaymentsById) | **GET** /virtual-accounts/payments/{id} | Get Payment
[**getVirtualAccountBeneficiaries**](VirtualAccountsApi.md#getVirtualAccountBeneficiaries) | **GET** /virtual-accounts/beneficiaries | Get List Of Beneficiaries
[**getVirtualAccountBeneficiary**](VirtualAccountsApi.md#getVirtualAccountBeneficiary) | **GET** /virtual-accounts/beneficiaries/{beneficiaryId} | Get Beneficiary
[**getVirtualAccountById**](VirtualAccountsApi.md#getVirtualAccountById) | **GET** /virtual-accounts/accounts/{accountId} | Get Account
[**getVirtualAccountClientById**](VirtualAccountsApi.md#getVirtualAccountClientById) | **GET** /virtual-accounts/clients/{clientId} | Get a Virtual Account Client by ID
[**getVirtualAccountClients**](VirtualAccountsApi.md#getVirtualAccountClients) | **GET** /virtual-accounts/clients | Get List of Virtual Account Clients
[**getVirtualAccountPayments**](VirtualAccountsApi.md#getVirtualAccountPayments) | **GET** /virtual-accounts/payments | Get Payments
[**getVirtualAccountRefundById**](VirtualAccountsApi.md#getVirtualAccountRefundById) | **GET** /virtual-accounts/refunds/{id} | Get Refund By Id
[**getVirtualAccountRefunds**](VirtualAccountsApi.md#getVirtualAccountRefunds) | **GET** /virtual-accounts/refunds | Get list of refunds
[**getVirtualAccounts**](VirtualAccountsApi.md#getVirtualAccounts) | **GET** /virtual-accounts/accounts | Get Accounts
[**updateVirtualAccountById**](VirtualAccountsApi.md#updateVirtualAccountById) | **PATCH** /virtual-accounts/accounts/{accountId} | Update Account


# **createVirtualAccount**
> ApiResponseOfVirtualAccount createVirtualAccount(virtualAccountRequest)

Create a new virtual account

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsApi(configuration);

let body:.VirtualAccountsApiCreateVirtualAccountRequest = {
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

# **createVirtualAccountBeneficiary**
> ApiResponseOfVirtualAccountBeneficiary createVirtualAccountBeneficiary(virtualAccountBeneficiaryRequest)

Create a new beneficiary (individual or business account) to which a Pay Out can be made. The beneficiary can be used from any virtual account that is held

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsApi(configuration);

let body:.VirtualAccountsApiCreateVirtualAccountBeneficiaryRequest = {
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

# **createVirtualAccountClient**
> ApiResponseOfVirtualAccountClient createVirtualAccountClient(virtualAccountClientRequest)

Create a new virtual account client (individual or business client). Available for clients who have direct onboarding permissions only. Please contact your CSM to enquire about access

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsApi(configuration);

let body:.VirtualAccountsApiCreateVirtualAccountClientRequest = {
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

# **createVirtualAccountPayOut**
> ApiResponseOfVirtualAccountPayment createVirtualAccountPayOut(virtualAccountPayOutRequest)

Initiate a payment from a specified virtual account to a previously added beneficiary using any of the schemes that it supports <br> When subscribed to virtualAccount.payOut.status notifications, further updates on payment processing status will be delivered asynchronously 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsApi(configuration);

let body:.VirtualAccountsApiCreateVirtualAccountPayOutRequest = {
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

# **createVirtualAccountRefund**
> ApiResponseOfVirtualAccountRefund createVirtualAccountRefund(virtualAccountRefundRequest)

Create a refund for a payment received into a virtual account. Funds are returned to the source account. When subscribed to `virtualAccount.refund.status` notifications, updates on the refund status are delivered asynchronously.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsApi(configuration);

let body:.VirtualAccountsApiCreateVirtualAccountRefundRequest = {
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

# **createVirtualAccountTransfer**
> ApiResponseOfVirtualAccountPayment createVirtualAccountTransfer(virtualAccountTransferRequest)

Create a transfer between two virtual accounts

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsApi(configuration);

let body:.VirtualAccountsApiCreateVirtualAccountTransferRequest = {
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

# **deleteVirtualAccountBeneficiary**
> void deleteVirtualAccountBeneficiary()

Delete a specific beneficiary (individual or business account)

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsApi(configuration);

let body:.VirtualAccountsApiDeleteVirtualAccountBeneficiaryRequest = {
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

# **getPayInDetails**
> ApiResponseOfVirtualAccountPayInDetails getPayInDetails()

Get the details of a pay-in transaction

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsApi(configuration);

let body:.VirtualAccountsApiGetPayInDetailsRequest = {
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
const apiInstance = new .VirtualAccountsApi(configuration);

let body:.VirtualAccountsApiGetPaymentsByIdRequest = {
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

# **getVirtualAccountBeneficiaries**
> ApiListResponseOfVirtualAccountBeneficiary getVirtualAccountBeneficiaries()

Gets the list of beneficiaries (individual or business account) to which a Pay Out can be made.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsApi(configuration);

let body:.VirtualAccountsApiGetVirtualAccountBeneficiariesRequest = {
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
const apiInstance = new .VirtualAccountsApi(configuration);

let body:.VirtualAccountsApiGetVirtualAccountBeneficiaryRequest = {
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

# **getVirtualAccountById**
> ApiResponseOfVirtualAccount getVirtualAccountById()

Get the details of a specific account using its Id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsApi(configuration);

let body:.VirtualAccountsApiGetVirtualAccountByIdRequest = {
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

# **getVirtualAccountClientById**
> ApiResponseOfVirtualAccountClient getVirtualAccountClientById()

Get a Virtual Account Client using its ID. Restricted to applications with direct onboarding permissions only

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsApi(configuration);

let body:.VirtualAccountsApiGetVirtualAccountClientByIdRequest = {
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
const apiInstance = new .VirtualAccountsApi(configuration);

let body:.VirtualAccountsApiGetVirtualAccountClientsRequest = {
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

# **getVirtualAccountPayments**
> ApiListResponseOfVirtualAccountPayment getVirtualAccountPayments()

Retrieve a list of virtual account payments

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsApi(configuration);

let body:.VirtualAccountsApiGetVirtualAccountPaymentsRequest = {
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

# **getVirtualAccountRefundById**
> ApiResponseOfVirtualAccountRefund getVirtualAccountRefundById()

Get the details of a refund by its ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsApi(configuration);

let body:.VirtualAccountsApiGetVirtualAccountRefundByIdRequest = {
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
const apiInstance = new .VirtualAccountsApi(configuration);

let body:.VirtualAccountsApiGetVirtualAccountRefundsRequest = {
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

# **getVirtualAccounts**
> ApiListResponseOfVirtualAccount getVirtualAccounts()

Retrieve a list of all virtual accounts held

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualAccountsApi(configuration);

let body:.VirtualAccountsApiGetVirtualAccountsRequest = {
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
const apiInstance = new .VirtualAccountsApi(configuration);

let body:.VirtualAccountsApiUpdateVirtualAccountByIdRequest = {
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


