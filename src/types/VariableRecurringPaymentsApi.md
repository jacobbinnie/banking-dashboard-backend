# .VariableRecurringPaymentsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNonSweepingAuthorisation**](VariableRecurringPaymentsApi.md#createNonSweepingAuthorisation) | **POST** /variable-recurring-payments/non-sweeping/consents | Create Non-Sweeping Variable Recurring Payment Authorisation
[**createSweepingAuthorisation**](VariableRecurringPaymentsApi.md#createSweepingAuthorisation) | **POST** /variable-recurring-payments/sweeping/consents | Create Sweeping Variable Recurring Payment Authorisation
[**createVrpFundsConfirmation**](VariableRecurringPaymentsApi.md#createVrpFundsConfirmation) | **POST** /variable-recurring-payments/funds-confirmation | Confirm Funds for Variable Recurring Payment
[**createVrpPayment**](VariableRecurringPaymentsApi.md#createVrpPayment) | **POST** /variable-recurring-payments/payments | Create Variable Recurring Payment
[**getNonSweepingVrpConsentById**](VariableRecurringPaymentsApi.md#getNonSweepingVrpConsentById) | **GET** /variable-recurring-payments/non-sweeping/consents/{consentId} | Get Non-Sweeping Variable Recurring Payment Consent Details
[**getSweepingVrpConsentById**](VariableRecurringPaymentsApi.md#getSweepingVrpConsentById) | **GET** /variable-recurring-payments/sweeping/consents/{consentId} | Get Sweeping Variable Recurring Payment Consent Details
[**getVrpPaymentDetails**](VariableRecurringPaymentsApi.md#getVrpPaymentDetails) | **GET** /variable-recurring-payments/payments/{paymentId}/details | Get Variable Recurring Payment Details


# **createNonSweepingAuthorisation**
> ApiResponseOfNonSweepingAuthorisationResponse createNonSweepingAuthorisation(nonSweepingAuthorisationRequest)

Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for Non-Sweeping Variable Recurring Payments. The request would return an Authorization URL and an Identifier for the consent created at the Institution. First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/#get-institution). <br><br>See [Redirect Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/redirect/) for more information about this flow.<br><br>Features:<ul><li>`INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_NONSWEEPING`</li></ul>

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VariableRecurringPaymentsApi(configuration);

let body:.VariableRecurringPaymentsApiCreateNonSweepingAuthorisationRequest = {
  // NonSweepingAuthorisationRequest
  nonSweepingAuthorisationRequest: {
    userId: "userId_example",
    applicationUserId: "applicationUserId_example",
    forwardParameters: [
      "forwardParameters_example",
    ],
    contextType: "contextType_example",
    institutionId: "yapily-mock",
    callback: "https://display-parameters.com",
    redirect: {
      url: "url_example",
    },
    oneTimeToken: false,
    controlParameters: {
      psuAuthenticationMethods: [
        "psuAuthenticationMethods_example",
      ],
      periodicLimits: [
        {
          totalMaxAmount: null,
          frequency: "frequency_example",
          alignment: "alignment_example",
          maxNumberOfPayments: 1,
        },
      ],
      maxAmountPerPayment: null,
      maxCumulativeAmount: null,
      initialPayment: null,
      maxCumulativeNumberOfPayments: 1,
      validFrom: new Date('1970-01-01T00:00:00.00Z'),
      validTo: new Date('1970-01-01T00:00:00.00Z'),
      recurringPaymentCategory: "recurringPaymentCategory_example",
    },
    initiationDetails: {
      reference: "Own Account Sweeping",
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
    },
    complianceData: {
      payer: {
        type: "INDIVIDUAL",
        individual: {
          name: "John Doe",
          birthDate: new Date('Fri Aug 11 20:00:00 EDT 2000').toISOString().split('T')[0];,
        },
        business: {
          name: "Company LTD",
          registrationNumber: "COM123NO",
          registeredAddress: {
            addressLine1: "123 Queens Street",
            addressLine2: "Unit 13",
            townName: "York",
            postCode: "12345",
            country: "GB",
          },
          tradingAddress: {
            addressLine1: "123 Queens Street",
            addressLine2: "Unit 13",
            townName: "York",
            postCode: "12345",
            country: "GB",
          },
        },
      },
    },
  },
};

apiInstance.createNonSweepingAuthorisation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nonSweepingAuthorisationRequest** | **NonSweepingAuthorisationRequest**|  |


### Return type

**ApiResponseOfNonSweepingAuthorisationResponse**

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

# **createSweepingAuthorisation**
> ApiResponseOfSweepingAuthorisationResponse createSweepingAuthorisation(sweepingAuthorisationRequest)

Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for Sweeping Variable Recurring Payments. The request would return an Authorization URL and an Identifier for the consent created at the Institution. First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/#get-institution). <br><br>See [Redirect Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/redirect/) for more information about this flow.<br><br>Features:<ul><li>`INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_SWEEPING`</li></ul>

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VariableRecurringPaymentsApi(configuration);

let body:.VariableRecurringPaymentsApiCreateSweepingAuthorisationRequest = {
  // SweepingAuthorisationRequest
  sweepingAuthorisationRequest: {
    userId: "userId_example",
    applicationUserId: "applicationUserId_example",
    forwardParameters: [
      "forwardParameters_example",
    ],
    contextType: "OTHER",
    institutionId: "yapily-mock",
    callback: "https://display-parameters.com",
    redirect: {
      url: "url_example",
    },
    oneTimeToken: false,
    controlParameters: {
      psuAuthenticationMethods: [
        "psuAuthenticationMethods_example",
      ],
      periodicLimits: [
        {
          totalMaxAmount: null,
          frequency: "frequency_example",
          alignment: "alignment_example",
        },
      ],
      maxAmountPerPayment: null,
      validFrom: new Date('1970-01-01T00:00:00.00Z'),
      validTo: new Date('1970-01-01T00:00:00.00Z'),
    },
    initiationDetails: {
      reference: "Own Account Sweeping",
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
    },
    complianceData: {
      payer: {
        type: "INDIVIDUAL",
        individual: {
          name: "John Doe",
          birthDate: new Date('Fri Aug 11 20:00:00 EDT 2000').toISOString().split('T')[0];,
        },
        business: {
          name: "Company LTD",
          registrationNumber: "COM123NO",
          registeredAddress: {
            addressLine1: "123 Queens Street",
            addressLine2: "Unit 13",
            townName: "York",
            postCode: "12345",
            country: "GB",
          },
          tradingAddress: {
            addressLine1: "123 Queens Street",
            addressLine2: "Unit 13",
            townName: "York",
            postCode: "12345",
            country: "GB",
          },
        },
      },
    },
  },
};

apiInstance.createSweepingAuthorisation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sweepingAuthorisationRequest** | **SweepingAuthorisationRequest**|  |


### Return type

**ApiResponseOfSweepingAuthorisationResponse**

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

# **createVrpFundsConfirmation**
> ApiResponseOfFundsConfirmationResponse createVrpFundsConfirmation(fundsConfirmationRequest)

Confirms whether there are available funds on the Payer account to execute a Variable Recurring Payment after obtaining the user\'s authorisation. <br><br>Features:<ul><li>`VARIABLE_RECURRING_PAYMENT_FUNDS_CONFIRMATION`</li></ul>

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VariableRecurringPaymentsApi(configuration);

let body:.VariableRecurringPaymentsApiCreateVrpFundsConfirmationRequest = {
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consent: "{consentToken}",
  // FundsConfirmationRequest
  fundsConfirmationRequest: {
    reference: "Own Account Sweeping",
    paymentAmount: {
      amount: 10,
      currency: "GBP",
    },
  },
};

apiInstance.createVrpFundsConfirmation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fundsConfirmationRequest** | **FundsConfirmationRequest**|  |
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined


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

# **createVrpPayment**
> ApiResponseOfSubmissionResponse createVrpPayment(submissionRequest)

Creates a Variable Recurring Payment transaction after obtaining the user\'s authorisation.<br><br>Features:<ul><li>`CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_SWEEPING`</li><li>`CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_NONSWEEPING`</li></ul>

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VariableRecurringPaymentsApi(configuration);

let body:.VariableRecurringPaymentsApiCreateVrpPaymentRequest = {
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consent: "{consentToken}",
  // SubmissionRequest
  submissionRequest: {
    paymentIdempotencyId: "04ab4536gaerfc0e1f93c4f4",
    psuAuthenticationMethod: "psuAuthenticationMethod_example",
    contextType: "OTHER",
    paymentAmount: {
      amount: 10,
      currency: "GBP",
    },
  },
};

apiInstance.createVrpPayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submissionRequest** | **SubmissionRequest**|  |
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined


### Return type

**ApiResponseOfSubmissionResponse**

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

# **getNonSweepingVrpConsentById**
> ApiResponseOfNonSweepingAuthorisationResponse getNonSweepingVrpConsentById()

Get Non-Sweeping Variable Recurring Payments consent details using the consent Id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VariableRecurringPaymentsApi(configuration);

let body:.VariableRecurringPaymentsApiGetNonSweepingVrpConsentByIdRequest = {
  // string | __Mandatory__. The consent Id of the `Variable Recurring Payments Consent` to retrieve.
  consentId: "consentId_example",
};

apiInstance.getNonSweepingVrpConsentById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | [**string**] | __Mandatory__. The consent Id of the &#x60;Variable Recurring Payments Consent&#x60; to retrieve. | defaults to undefined


### Return type

**ApiResponseOfNonSweepingAuthorisationResponse**

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

# **getSweepingVrpConsentById**
> ApiResponseOfSweepingAuthorisationResponse getSweepingVrpConsentById()

Get Sweeping Variable Recurring Payments consent details using the consent Id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VariableRecurringPaymentsApi(configuration);

let body:.VariableRecurringPaymentsApiGetSweepingVrpConsentByIdRequest = {
  // string | __Mandatory__. The consent Id of the `Variable Recurring Payments Consent` to retrieve.
  consentId: "consentId_example",
};

apiInstance.getSweepingVrpConsentById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | [**string**] | __Mandatory__. The consent Id of the &#x60;Variable Recurring Payments Consent&#x60; to retrieve. | defaults to undefined


### Return type

**ApiResponseOfSweepingAuthorisationResponse**

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

# **getVrpPaymentDetails**
> ApiResponseOfSubmissionResponse getVrpPaymentDetails()

Get Variable Recurring Payment details using the Payment Id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VariableRecurringPaymentsApi(configuration);

let body:.VariableRecurringPaymentsApiGetVrpPaymentDetailsRequest = {
  // string | __Mandatory__. The Payment Id of the `Variable Recurring Payments` to retrieve.
  paymentId: "paymentId_example",
  // string | __Mandatory__. The consent token containing the user\'s authorisation to make the `Variable Recurring Payments` request.
  consent: "consent_example",
};

apiInstance.getVrpPaymentDetails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentId** | [**string**] | __Mandatory__. The Payment Id of the &#x60;Variable Recurring Payments&#x60; to retrieve. | defaults to undefined
 **consent** | [**string**] | __Mandatory__. The consent token containing the user\&#39;s authorisation to make the &#x60;Variable Recurring Payments&#x60; request. | defaults to undefined


### Return type

**ApiResponseOfSubmissionResponse**

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


