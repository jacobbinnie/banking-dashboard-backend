# .HostedPagesApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createHostedPaymentRequest**](HostedPagesApi.md#createHostedPaymentRequest) | **POST** /hosted/payment-requests | Create Hosted payment request
[**createHostedPaymentRequestLink**](HostedPagesApi.md#createHostedPaymentRequestLink) | **POST** /hosted/payment-requests/links | Create Pay By Link
[**createHostedVRPConsentRequest**](HostedPagesApi.md#createHostedVRPConsentRequest) | **POST** /hosted/vrp/consent-requests | Create VRP Consent
[**createHostedVrpFundsConfirmation**](HostedPagesApi.md#createHostedVrpFundsConfirmation) | **POST** /hosted/vrp/consent-requests/{consentRequestId}/funds-confirmation | Check Funds Availability
[**createHostedVrpPayment**](HostedPagesApi.md#createHostedVrpPayment) | **POST** /hosted/vrp/consent-requests/{consentRequestId}/payments | Create VRP Payment
[**getHostedConsentRequest**](HostedPagesApi.md#getHostedConsentRequest) | **GET** /hosted/vrp/consent-requests/{consentRequestId} | Get Hosted VRP Consent Request
[**getHostedPaymentRequest**](HostedPagesApi.md#getHostedPaymentRequest) | **GET** /hosted/payment-requests/{paymentRequestId} | Get Hosted payment request
[**getHostedVRPConsentRequests**](HostedPagesApi.md#getHostedVRPConsentRequests) | **GET** /hosted/vrp/consent-requests | Get Hosted VRP Consent Requests
[**getHostedVRPPaymentRequest**](HostedPagesApi.md#getHostedVRPPaymentRequest) | **GET** /hosted/vrp/consent-requests/{consentRequestId}/payments/{paymentId} | Get VRP payment
[**revokeHostedConsentRequest**](HostedPagesApi.md#revokeHostedConsentRequest) | **POST** /hosted/vrp/consent-requests/{consentRequestId}/revoke | Revoke Hosted VRP Consent Request


# **createHostedPaymentRequest**
> ApiResponseOfCreateHostedPaymentRequest createHostedPaymentRequest(createHostedPaymentRequest)

Used to initiate a payment request using Yapily Hosted Pages.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HostedPagesApi(configuration);

let body:.HostedPagesApiCreateHostedPaymentRequestRequest = {
  // CreateHostedPaymentRequest
  createHostedPaymentRequest: {
    userId: "userId_example",
    applicationUserId: "applicationUserId_example",
    institutionIdentifiers: {
      institutionId: "institutionId_example",
      institutionCountryCode: "GB",
    },
    userSettings: {
      language: "en",
      location: "GB",
    },
    redirectUrl: "https://tpp-application.com",
    paymentRequestDetails: {
      paymentIdempotencyId: "04ab4536gaerfc0e1f93c4f4",
      reference: "Bill payment",
      contextType: "OTHER",
      type: "DOMESTIC_PAYMENT",
      payee: {
        name: "Jane Doe",
        accountIdentifications: [
          {
            type: "SORT_CODE",
            identification: "401016",
          },
        ],
        accountType: "accountType_example",
        address: {
          addressLines: ["Ardenham Court"],
          streetName: "Oxford Road",
          buildingNumber: "45",
          postCode: "HP19 3EQ",
          townName: "Aylesbury",
          county: ["Buckinghamshire"],
          country: "GB",
          department: "Unit 2",
          subDepartment: "Floor 3",
          addressType: "BUSINESS",
        },
        merchantId: "24589303",
        merchantCategoryCode: "5551",
      },
      payer: {
        name: "John Doe",
        accountIdentifications: [
          {
            type: "SORT_CODE",
            identification: "401016",
          },
        ],
        address: {
          addressLines: ["Ardenham Court"],
          streetName: "Oxford Road",
          buildingNumber: "45",
          postCode: "HP19 3EQ",
          townName: "Aylesbury",
          county: ["Buckinghamshire"],
          country: "GB",
          department: "Unit 2",
          subDepartment: "Floor 3",
          addressType: "BUSINESS",
        },
      },
      amountDetails: {
        amountToPay: 10.5,
        currency: "GBP",
      },
      paymentDueDate: new Date('1970-01-01').toISOString().split('T')[0];,
    },
  },
};

apiInstance.createHostedPaymentRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createHostedPaymentRequest** | **CreateHostedPaymentRequest**|  |


### Return type

**ApiResponseOfCreateHostedPaymentRequest**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized. Credentials are missing or invalid |  -  |
**500** | Unexpected Error |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createHostedPaymentRequestLink**
> ApiResponseOfCreateHostedPaymentRequestLink createHostedPaymentRequestLink(createHostedPaymentRequestLink)

Used to created a long lived payment request for Pay By Link

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HostedPagesApi(configuration);

let body:.HostedPagesApiCreateHostedPaymentRequestLinkRequest = {
  // CreateHostedPaymentRequestLink
  createHostedPaymentRequestLink: {
    userId: "userId_example",
    applicationUserId: "applicationUserId_example",
    institutionIdentifiers: {
      institutionId: "institutionId_example",
      institutionCountryCode: "GB",
    },
    userSettings: {
      language: "en",
      location: "GB",
    },
    redirectUrl: "https://tpp-application.com",
    authorisationExpiresAt: new Date('1970-01-01T00:00:00.00Z'),
    paymentRequestDetails: {
      reference: "Bill payment",
      contextType: "BILL",
      type: "DOMESTIC_PAYMENT",
      payee: {
        name: "Jane Doe",
        accountIdentifications: [
          {
            type: "SORT_CODE",
            identification: "401016",
          },
        ],
        address: {
          addressLines: ["Ardenham Court"],
          streetName: "Oxford Road",
          buildingNumber: "45",
          postCode: "HP19 3EQ",
          townName: "Aylesbury",
          county: ["Buckinghamshire"],
          country: "GB",
          department: "Unit 2",
          subDepartment: "Floor 3",
          addressType: "BUSINESS",
        },
        merchantId: "24589303",
        merchantCategoryCode: "5551",
      },
      payer: {
        name: "John Doe",
        accountIdentifications: [
          {
            type: "SORT_CODE",
            identification: "401016",
          },
        ],
        address: {
          addressLines: ["Ardenham Court"],
          streetName: "Oxford Road",
          buildingNumber: "45",
          postCode: "HP19 3EQ",
          townName: "Aylesbury",
          county: ["Buckinghamshire"],
          country: "GB",
          department: "Unit 2",
          subDepartment: "Floor 3",
          addressType: "BUSINESS",
        },
      },
      amountDetails: {
        amount: 10,
        currency: "GBP",
      },
      paymentDueDate: new Date('1970-01-01').toISOString().split('T')[0];,
    },
  },
};

apiInstance.createHostedPaymentRequestLink(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createHostedPaymentRequestLink** | **CreateHostedPaymentRequestLink**|  |


### Return type

**ApiResponseOfCreateHostedPaymentRequestLink**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized. Credentials are missing or invalid |  -  |
**500** | Unexpected Error |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createHostedVRPConsentRequest**
> ApiResponseOfCreateHostedVRPConsentRequest createHostedVRPConsentRequest(createHostedVRPConsentRequest)

Used to initiate a VRP consent / mandate request through Yapily Hosted Pages

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HostedPagesApi(configuration);

let body:.HostedPagesApiCreateHostedVRPConsentRequestRequest = {
  // string | __Mandatory__. The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
  subApplication: "sub-application_example",
  // CreateHostedVRPConsentRequest
  createHostedVRPConsentRequest: {
    userId: "userId_example",
    applicationUserId: "applicationUserId_example",
    institutionIdentifiers: {
      institutionId: "institutionId_example",
      institutionCountryCode: "GB",
    },
    userSettings: {
      language: "en",
      location: "GB",
    },
    redirectUrl: "https://tpp-application.com",
    oneTimeToken: false,
    vrpSetup: {
      payer: {
        name: "John Doe",
        accountIdentifications: [
          {
            type: "SORT_CODE",
            identification: "401016",
          },
        ],
        address: {
          addressLines: ["Ardenham Court"],
          streetName: "Oxford Road",
          buildingNumber: "45",
          postCode: "HP19 3EQ",
          townName: "Aylesbury",
          county: ["Buckinghamshire"],
          country: "GB",
          department: "Unit 2",
          subDepartment: "Floor 3",
          addressType: "BUSINESS",
        },
      },
      payee: {
        name: "Jane Doe",
        accountIdentifications: [
          {
            type: "SORT_CODE",
            identification: "401016",
          },
        ],
        accountType: "accountType_example",
        address: {
          addressLines: ["Ardenham Court"],
          streetName: "Oxford Road",
          buildingNumber: "45",
          postCode: "HP19 3EQ",
          townName: "Aylesbury",
          county: ["Buckinghamshire"],
          country: "GB",
          department: "Unit 2",
          subDepartment: "Floor 3",
          addressType: "BUSINESS",
        },
        merchantId: "24589303",
        merchantCategoryCode: "5551",
      },
      reference: "Own Account Sweeping",
      limits: {
        periodicLimits: [
          {
            maxAmount: null,
            frequency: "frequency_example",
            alignment: "alignment_example",
          },
        ],
        maxAmountPerPayment: null,
        maxCumulativeAmount: null,
        maxCumulativeNumberOfPayments: 1,
      },
      validFrom: new Date('1970-01-01T00:00:00.00Z'),
      validTo: new Date('1970-01-01T00:00:00.00Z'),
      recurringPaymentCategory: "recurringPaymentCategory_example",
      initialPayment: null,
      risk: {
        contextType: "contextType_example",
      },
    },
  },
};

apiInstance.createHostedVRPConsentRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createHostedVRPConsentRequest** | **CreateHostedVRPConsentRequest**|  |
 **subApplication** | [**string**] | __Mandatory__. The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant) | defaults to undefined


### Return type

**ApiResponseOfCreateHostedVRPConsentRequest**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized. Credentials are missing or invalid |  -  |
**500** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createHostedVrpFundsConfirmation**
> ApiResponseOfFundsConfirmationResponse createHostedVrpFundsConfirmation(fundsConfirmationRequest)

Confirms whether there are available funds on the Payer account to execute a Variable Recurring Payment after obtaining the user\'s authorisation. <br><br>Features:<ul><li>`VARIABLE_RECURRING_PAYMENT_FUNDS_CONFIRMATION`</li></ul>

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HostedPagesApi(configuration);

let body:.HostedPagesApiCreateHostedVrpFundsConfirmationRequest = {
  // string | Unique Identifier of the Consent Request
  consentRequestId: "consentRequestId_example",
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consentToken: "{consentToken}",
  // FundsConfirmationRequest
  fundsConfirmationRequest: {
    reference: "Own Account Sweeping",
    paymentAmount: {
      amount: 10,
      currency: "GBP",
    },
  },
  // string | The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant) (optional)
  subApplication: "sub-application_example",
};

apiInstance.createHostedVrpFundsConfirmation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fundsConfirmationRequest** | **FundsConfirmationRequest**|  |
 **consentRequestId** | [**string**] | Unique Identifier of the Consent Request | defaults to undefined
 **consentToken** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined
 **subApplication** | [**string**] | The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant) | (optional) defaults to undefined


### Return type

**ApiResponseOfFundsConfirmationResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Error Response |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createHostedVrpPayment**
> ApiResponseOfCreateHostedVRPPaymentRequest createHostedVrpPayment(createHostedVRPPaymentRequest)

Creates a Variable Recurring Payment

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HostedPagesApi(configuration);

let body:.HostedPagesApiCreateHostedVrpPaymentRequest = {
  // string | Unique Identifier of the Consent Request
  consentRequestId: "consentRequestId_example",
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consentToken: "{consentToken}",
  // CreateHostedVRPPaymentRequest
  createHostedVRPPaymentRequest: {
    paymentIdempotencyId: "04ab4536gaerfc0e1f93c4f4",
    amount: {
      amount: 10,
      currency: "GBP",
    },
  },
  // string | The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant) (optional)
  subApplication: "sub-application_example",
};

apiInstance.createHostedVrpPayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createHostedVRPPaymentRequest** | **CreateHostedVRPPaymentRequest**|  |
 **consentRequestId** | [**string**] | Unique Identifier of the Consent Request | defaults to undefined
 **consentToken** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined
 **subApplication** | [**string**] | The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant) | (optional) defaults to undefined


### Return type

**ApiResponseOfCreateHostedVRPPaymentRequest**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Error Response |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getHostedConsentRequest**
> ApiResponseOfGetHostedVRPConsentRequest getHostedConsentRequest()

Used to get details of a VRP Consent Request

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HostedPagesApi(configuration);

let body:.HostedPagesApiGetHostedConsentRequestRequest = {
  // string | Unique Identifier of the Consent Request
  consentRequestId: "consentRequestId_example",
  // string | The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant) (optional)
  subApplication: "sub-application_example",
};

apiInstance.getHostedConsentRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentRequestId** | [**string**] | Unique Identifier of the Consent Request | defaults to undefined
 **subApplication** | [**string**] | The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant) | (optional) defaults to undefined


### Return type

**ApiResponseOfGetHostedVRPConsentRequest**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getHostedPaymentRequest**
> ApiResponseOfGetHostedPaymentRequest getHostedPaymentRequest()

Used to get details of a payment request

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HostedPagesApi(configuration);

let body:.HostedPagesApiGetHostedPaymentRequestRequest = {
  // string | Unique Identifier of the payment request
  paymentRequestId: "paymentRequestId_example",
};

apiInstance.getHostedPaymentRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentRequestId** | [**string**] | Unique Identifier of the payment request | defaults to undefined


### Return type

**ApiResponseOfGetHostedPaymentRequest**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Unexpected Error |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getHostedVRPConsentRequests**
> ApiResponseOfGetHostedVRPConsentsRequest getHostedVRPConsentRequests()

Used to get all VRP consent requests initiated through Yapily Hosted Pages

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HostedPagesApi(configuration);

let body:.HostedPagesApiGetHostedVRPConsentRequestsRequest = {
  // string | __Mandatory__. The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
  subApplication: "sub-application_example",
};

apiInstance.getHostedVRPConsentRequests(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subApplication** | [**string**] | __Mandatory__. The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant) | defaults to undefined


### Return type

**ApiResponseOfGetHostedVRPConsentsRequest**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized. Credentials are missing or invalid |  -  |
**500** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getHostedVRPPaymentRequest**
> ApiResponseOfGetHostedVRPPaymentRequest getHostedVRPPaymentRequest()

Used to get details of a VRP Payment

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HostedPagesApi(configuration);

let body:.HostedPagesApiGetHostedVRPPaymentRequestRequest = {
  // string | Unique Identifier of the Consent Request
  consentRequestId: "consentRequestId_example",
  // string | Unique Identifier of the Consent Request
  paymentId: "paymentId_example",
  // string | The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant) (optional)
  subApplication: "sub-application_example",
};

apiInstance.getHostedVRPPaymentRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentRequestId** | [**string**] | Unique Identifier of the Consent Request | defaults to undefined
 **paymentId** | [**string**] | Unique Identifier of the Consent Request | defaults to undefined
 **subApplication** | [**string**] | The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant) | (optional) defaults to undefined


### Return type

**ApiResponseOfGetHostedVRPPaymentRequest**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **revokeHostedConsentRequest**
> ApiResponseOfRevokeHostedVRPConsentRequest revokeHostedConsentRequest()

Revoke Hosted VRP Consent Request

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HostedPagesApi(configuration);

let body:.HostedPagesApiRevokeHostedConsentRequestRequest = {
  // string | Unique Identifier of the Consent Request
  consentRequestId: "consentRequestId_example",
  // string | The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant) (optional)
  subApplication: "sub-application_example",
};

apiInstance.revokeHostedConsentRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentRequestId** | [**string**] | Unique Identifier of the Consent Request | defaults to undefined
 **subApplication** | [**string**] | The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant) | (optional) defaults to undefined


### Return type

**ApiResponseOfRevokeHostedVRPConsentRequest**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


