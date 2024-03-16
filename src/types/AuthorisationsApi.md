# .AuthorisationsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBulkPaymentAuthorisation**](AuthorisationsApi.md#createBulkPaymentAuthorisation) | **POST** /bulk-payment-auth-requests | Create Bulk Payment Authorisation
[**createEmbeddedBulkPaymentAuthorisation**](AuthorisationsApi.md#createEmbeddedBulkPaymentAuthorisation) | **POST** /embedded-bulk-payment-auth-requests | Create Embedded Bulk Payment Authorisation
[**createEmbeddedPaymentAuthorisation**](AuthorisationsApi.md#createEmbeddedPaymentAuthorisation) | **POST** /embedded-payment-auth-requests | Create Embedded Payment Authorisation
[**createPaymentAuthorisation**](AuthorisationsApi.md#createPaymentAuthorisation) | **POST** /payment-auth-requests | Create Payment Authorisation
[**createPaymentPreAuthorisationRequest**](AuthorisationsApi.md#createPaymentPreAuthorisationRequest) | **POST** /payment-pre-auth-requests | Create Payment Pre-authorisation
[**createPreAuthorisationRequest**](AuthorisationsApi.md#createPreAuthorisationRequest) | **POST** /pre-auth-requests | Create Pre-authorisation
[**initiateAccountRequest**](AuthorisationsApi.md#initiateAccountRequest) | **POST** /account-auth-requests | Create Account Authorisation
[**initiateEmbeddedAccountRequest**](AuthorisationsApi.md#initiateEmbeddedAccountRequest) | **POST** /embedded-account-auth-requests | Create Embedded Account Authorisation
[**reAuthoriseAccount**](AuthorisationsApi.md#reAuthoriseAccount) | **PATCH** /account-auth-requests | Re-authorise Account Consent
[**updateEmbeddedAccountRequest**](AuthorisationsApi.md#updateEmbeddedAccountRequest) | **PUT** /embedded-account-auth-requests/{consentId} | Update Embedded Account Authorisation
[**updateEmbeddedBulkPaymentAuthorisation**](AuthorisationsApi.md#updateEmbeddedBulkPaymentAuthorisation) | **PUT** /embedded-bulk-payment-auth-requests/{consentId} | Update Embedded Bulk Payment Authorisation
[**updateEmbeddedPaymentAuthorisation**](AuthorisationsApi.md#updateEmbeddedPaymentAuthorisation) | **PUT** /embedded-payment-auth-requests/{consentId} | Update Embedded Payment Authorisation
[**updatePaymentAuthorisation**](AuthorisationsApi.md#updatePaymentAuthorisation) | **PUT** /payment-auth-requests | Update Payment Pre-authorisation
[**updatePreAuthoriseAccountConsent**](AuthorisationsApi.md#updatePreAuthoriseAccountConsent) | **PUT** /account-auth-requests | Update Account Pre-authorisation


# **createBulkPaymentAuthorisation**
> ApiResponseOfPaymentAuthorisationRequestResponse createBulkPaymentAuthorisation(bulkPaymentAuthorisationRequest)

Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. <br><br>See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_BULK_PAYMENT`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthorisationsApi(configuration);

let body:.AuthorisationsApiCreateBulkPaymentAuthorisationRequest = {
  // BulkPaymentAuthorisationRequest
  bulkPaymentAuthorisationRequest: {
    userUuid: "e006a012-c306-4355-a6a1-99bf69ae5171",
    applicationUserId: "user-234562290",
    forwardParameters: [
      "forwardParameters_example",
    ],
    institutionId: "yapily-mock",
    callback: "https://display-parameters.com",
    redirect: {
      url: "url_example",
    },
    oneTimeToken: false,
    paymentRequest: {
      payments: [
        {
          paymentIdempotencyId: "04ab4536gaerfc0e1f93c4f4",
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
          reference: "Bill payment",
          contextType: "OTHER",
          purposeCode: "purposeCode_example",
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
          periodicPayment: {
            frequency: {
              type: "DAILY",
              intervalWeek: 1,
              intervalMonth: 1,
              executionDay: 1,
            },
            numberOfPayments: 5,
            nextPaymentDateTime: new Date('2018-01-10T00:00:00Z'),
            nextPaymentAmount: {
              amount: 10,
              currency: "GBP",
            },
            finalPaymentDateTime: new Date('2030-01-10T00:00:00Z'),
            finalPaymentAmount: {
              amount: 10,
              currency: "GBP",
            },
          },
          internationalPayment: {
            currencyOfTransfer: "currencyOfTransfer_example",
            exchangeRateInformation: {
              unitCurrency: "unitCurrency_example",
              rate: 3.14,
              rateType: "ACTUAL",
              foreignExchangeContractReference: "foreignExchangeContractReference_example",
            },
            purpose: "purpose_example",
            priority: "NORMAL",
            chargeBearer: "DEBT",
          },
          amount: {
            amount: 10,
            currency: "GBP",
          },
          paymentDateTime: new Date('2021-07-21T17:32:28Z'),
          readRefundAccount: false,
        },
      ],
      originatorIdentificationNumber: "originatorIdentificationNumber_example",
      executionDateTime: new Date('1970-01-01T00:00:00.00Z'),
    },
  },
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuId: "psu-id_example",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuCorporateId: "psu-corporate-id_example",
  // string | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuIpAddress: "psu-ip-address_example",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.createBulkPaymentAuthorisation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkPaymentAuthorisationRequest** | **BulkPaymentAuthorisationRequest**|  |
 **psuId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuCorporateId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiResponseOfPaymentAuthorisationRequestResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createEmbeddedBulkPaymentAuthorisation**
> ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse createEmbeddedBulkPaymentAuthorisation(bulkPaymentEmbeddedAuthorisationRequest)

Used to initiate the embedded authorisation process for an `Institution` that contains the `INITIATE_EMBEDDED_BULK_PAYMENT` feature in order to obtain the the user\'s authorisation for a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. <br><br> See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_BULK_PAYMENT`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthorisationsApi(configuration);

let body:.AuthorisationsApiCreateEmbeddedBulkPaymentAuthorisationRequest = {
  // BulkPaymentEmbeddedAuthorisationRequest
  bulkPaymentEmbeddedAuthorisationRequest: {
    userUuid: "e006a012-c306-4355-a6a1-99bf69ae5171",
    applicationUserId: "user-234562290",
    institutionId: "yapily-mock",
    callback: "https://display-parameters.com",
    redirect: {
      url: "url_example",
    },
    oneTimeToken: false,
    paymentRequest: {
      payments: [
        {
          paymentIdempotencyId: "04ab4536gaerfc0e1f93c4f4",
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
          reference: "Bill payment",
          contextType: "OTHER",
          purposeCode: "purposeCode_example",
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
          periodicPayment: {
            frequency: {
              type: "DAILY",
              intervalWeek: 1,
              intervalMonth: 1,
              executionDay: 1,
            },
            numberOfPayments: 5,
            nextPaymentDateTime: new Date('2018-01-10T00:00:00Z'),
            nextPaymentAmount: {
              amount: 10,
              currency: "GBP",
            },
            finalPaymentDateTime: new Date('2030-01-10T00:00:00Z'),
            finalPaymentAmount: {
              amount: 10,
              currency: "GBP",
            },
          },
          internationalPayment: {
            currencyOfTransfer: "currencyOfTransfer_example",
            exchangeRateInformation: {
              unitCurrency: "unitCurrency_example",
              rate: 3.14,
              rateType: "ACTUAL",
              foreignExchangeContractReference: "foreignExchangeContractReference_example",
            },
            purpose: "purpose_example",
            priority: "NORMAL",
            chargeBearer: "DEBT",
          },
          amount: {
            amount: 10,
            currency: "GBP",
          },
          paymentDateTime: new Date('2021-07-21T17:32:28Z'),
          readRefundAccount: false,
        },
      ],
      originatorIdentificationNumber: "originatorIdentificationNumber_example",
      executionDateTime: new Date('1970-01-01T00:00:00.00Z'),
    },
    userCredentials: {
      id: "6154057725",
      corporateId: "6345898763",
      password: "PISPWD12",
    },
    selectedScaMethod: {
      id: "258211#OPTICAL",
      type: "SMS_OTP",
      description: "Testkarte Hr. Haubach_1, optisch",
      information: "Bitte bestätigen Sie den Vorgang in Ihrer SecureGo plus App",
      data: ["0488701109982928CY439040000100000010000520,00"],
    },
    scaCode: "325614",
  },
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuId: "psu-id_example",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuCorporateId: "psu-corporate-id_example",
  // string | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuIpAddress: "psu-ip-address_example",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.createEmbeddedBulkPaymentAuthorisation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkPaymentEmbeddedAuthorisationRequest** | **BulkPaymentEmbeddedAuthorisationRequest**|  |
 **psuId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuCorporateId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createEmbeddedPaymentAuthorisation**
> ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse createEmbeddedPaymentAuthorisation(paymentEmbeddedAuthorisationRequest)

Used to initiate the embedded authorisation process for an `Institution` that contains the `INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT` feature in order to obtain the the user\'s authorisation for a payment.<br><br> See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthorisationsApi(configuration);

let body:.AuthorisationsApiCreateEmbeddedPaymentAuthorisationRequest = {
  // PaymentEmbeddedAuthorisationRequest
  paymentEmbeddedAuthorisationRequest: {
    userUuid: "userUuid_example",
    applicationUserId: "user-234562290",
    institutionId: "yapily-mock",
    callback: "https://display-parameters.com",
    redirect: {
      url: "url_example",
    },
    oneTimeToken: false,
    paymentRequest: {
      paymentIdempotencyId: "04ab4536gaerfc0e1f93c4f4",
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
      reference: "Bill payment",
      contextType: "OTHER",
      purposeCode: "purposeCode_example",
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
      periodicPayment: {
        frequency: {
          type: "DAILY",
          intervalWeek: 1,
          intervalMonth: 1,
          executionDay: 1,
        },
        numberOfPayments: 5,
        nextPaymentDateTime: new Date('2018-01-10T00:00:00Z'),
        nextPaymentAmount: {
          amount: 10,
          currency: "GBP",
        },
        finalPaymentDateTime: new Date('2030-01-10T00:00:00Z'),
        finalPaymentAmount: {
          amount: 10,
          currency: "GBP",
        },
      },
      internationalPayment: {
        currencyOfTransfer: "currencyOfTransfer_example",
        exchangeRateInformation: {
          unitCurrency: "unitCurrency_example",
          rate: 3.14,
          rateType: "ACTUAL",
          foreignExchangeContractReference: "foreignExchangeContractReference_example",
        },
        purpose: "purpose_example",
        priority: "NORMAL",
        chargeBearer: "DEBT",
      },
      amount: {
        amount: 10,
        currency: "GBP",
      },
      paymentDateTime: new Date('2021-07-21T17:32:28Z'),
      readRefundAccount: false,
    },
    userCredentials: {
      id: "6154057725",
      corporateId: "6345898763",
      password: "PISPWD12",
    },
    selectedScaMethod: {
      id: "258211#OPTICAL",
      type: "SMS_OTP",
      description: "Testkarte Hr. Haubach_1, optisch",
      information: "Bitte bestätigen Sie den Vorgang in Ihrer SecureGo plus App",
      data: ["0488701109982928CY439040000100000010000520,00"],
    },
    scaCode: "325614",
  },
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuId: "psu-id_example",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuCorporateId: "psu-corporate-id_example",
  // string | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuIpAddress: "psu-ip-address_example",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.createEmbeddedPaymentAuthorisation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentEmbeddedAuthorisationRequest** | **PaymentEmbeddedAuthorisationRequest**|  |
 **psuId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuCorporateId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPaymentAuthorisation**
> ApiResponseOfPaymentAuthorisationRequestResponse createPaymentAuthorisation(paymentAuthorisationRequest)

Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for a payment. This endpoint is used to initiate all the different payment listed below. Based on the type of payment you wish to make, you may be required to provide specific properties in [PaymentRequest](https://docs.yapily.com/api/reference/#operation/createPaymentAuthorisation!path=paymentRequest&t=request). First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/reference/#operation/getInstitution). <br><br>See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow.<br><br>Features:<ul><li>`INITIATE_DOMESTIC_PERIODIC_PAYMENT`</li><li>`INITIATE_DOMESTIC_SCHEDULED_PAYMENT`</li><li>`INITIATE_DOMESTIC_SINGLE_INSTANT_PAYMENT`</li><li>`INITIATE_DOMESTIC_SINGLE_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_PERIODIC_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_SCHEDULED_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_SINGLE_PAYMENT`</li></ul>

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthorisationsApi(configuration);

let body:.AuthorisationsApiCreatePaymentAuthorisationRequest = {
  // PaymentAuthorisationRequest
  paymentAuthorisationRequest: {
    userUuid: "userUuid_example",
    applicationUserId: "user-234562290",
    forwardParameters: [
      "forwardParameters_example",
    ],
    institutionId: "yapily-mock",
    callback: "https://display-parameters.com",
    redirect: {
      url: "url_example",
    },
    oneTimeToken: false,
    paymentRequest: {
      paymentIdempotencyId: "04ab4536gaerfc0e1f93c4f4",
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
      reference: "Bill payment",
      contextType: "OTHER",
      purposeCode: "purposeCode_example",
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
      periodicPayment: {
        frequency: {
          type: "DAILY",
          intervalWeek: 1,
          intervalMonth: 1,
          executionDay: 1,
        },
        numberOfPayments: 5,
        nextPaymentDateTime: new Date('2018-01-10T00:00:00Z'),
        nextPaymentAmount: {
          amount: 10,
          currency: "GBP",
        },
        finalPaymentDateTime: new Date('2030-01-10T00:00:00Z'),
        finalPaymentAmount: {
          amount: 10,
          currency: "GBP",
        },
      },
      internationalPayment: {
        currencyOfTransfer: "currencyOfTransfer_example",
        exchangeRateInformation: {
          unitCurrency: "unitCurrency_example",
          rate: 3.14,
          rateType: "ACTUAL",
          foreignExchangeContractReference: "foreignExchangeContractReference_example",
        },
        purpose: "purpose_example",
        priority: "NORMAL",
        chargeBearer: "DEBT",
      },
      amount: {
        amount: 10,
        currency: "GBP",
      },
      paymentDateTime: new Date('2021-07-21T17:32:28Z'),
      readRefundAccount: false,
    },
  },
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuId: "psu-id_example",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuCorporateId: "psu-corporate-id_example",
  // string | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuIpAddress: "psu-ip-address_example",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.createPaymentAuthorisation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentAuthorisationRequest** | **PaymentAuthorisationRequest**|  |
 **psuId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuCorporateId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiResponseOfPaymentAuthorisationRequestResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPaymentPreAuthorisationRequest**
> ApiResponseOfPreAuthorisationResponse createPaymentPreAuthorisationRequest(paymentPreAuthorisationRequest)

Used to initiate the pre-authorisation process for payments for CBI Globe institutions that contain the `INITIATE_ONETIME_PRE_AUTHORISATION_PAYMENTS` feature to authenticate the user. <br><br>Feature: `INITIATE_ONETIME_PRE_AUTHORISATION_PAYMENTS`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthorisationsApi(configuration);

let body:.AuthorisationsApiCreatePaymentPreAuthorisationRequestRequest = {
  // PaymentPreAuthorisationRequest
  paymentPreAuthorisationRequest: {
    userUuid: "userUuid_example",
    applicationUserId: "user-234562290",
    forwardParameters: [
      "forwardParameters_example",
    ],
    institutionId: "yapily-mock",
    callback: "https://display-parameters.com",
    redirect: {
      url: "url_example",
    },
    oneTimeToken: false,
    scope: "AIS",
    payee: {
      name: "Jane Doe",
      accountIdentifications: [
        {
          type: "SORT_CODE",
          identification: "401016",
        },
      ],
      country: "GB",
    },
    payer: {
      accountIdentifications: [
        {
          type: "SORT_CODE",
          identification: "401016",
        },
      ],
    },
    amount: {
      amount: 10,
      currency: "GBP",
    },
    reference: "Bill payment",
  },
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
  // string | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuIpAddress: "psu-ip-address_example",
};

apiInstance.createPaymentPreAuthorisationRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentPreAuthorisationRequest** | **PaymentPreAuthorisationRequest**|  |
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined


### Return type

**ApiResponseOfPreAuthorisationResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPreAuthorisationRequest**
> ApiResponseOfPreAuthorisationResponse createPreAuthorisationRequest(preAuthorisationRequest)

Used to initiate the pre-authorisation process for any `Institution` that contains the `INITIATE_PRE_AUTHORISATION` feature to authenticate the user. <br><br>Feature: `INITIATE_PRE_AUTHORISATION`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthorisationsApi(configuration);

let body:.AuthorisationsApiCreatePreAuthorisationRequestRequest = {
  // PreAuthorisationRequest
  preAuthorisationRequest: {
    userUuid: "userUuid_example",
    applicationUserId: "user-234562290",
    forwardParameters: [
      "forwardParameters_example",
    ],
    institutionId: "yapily-mock",
    callback: "https://display-parameters.com",
    redirect: {
      url: "url_example",
    },
    oneTimeToken: false,
    scope: "AIS",
  },
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuId: "psu-id_example",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuCorporateId: "psu-corporate-id_example",
  // string | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuIpAddress: "psu-ip-address_example",
};

apiInstance.createPreAuthorisationRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preAuthorisationRequest** | **PreAuthorisationRequest**|  |
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined
 **psuId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuCorporateId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined


### Return type

**ApiResponseOfPreAuthorisationResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **initiateAccountRequest**
> ApiResponseOfAccountAuthorisationResponse initiateAccountRequest(accountAuthorisationRequest)

Used to initiate the authorisation process and direct users to the login screen of their financial institution in order to give consent to access account data.<br><br>See [Redirect Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/redirect-account-flows/) for more information about this flow.<br><br>Feature: `INITIATE_ACCOUNT_REQUEST`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthorisationsApi(configuration);

let body:.AuthorisationsApiInitiateAccountRequestRequest = {
  // AccountAuthorisationRequest
  accountAuthorisationRequest: {
    userUuid: "userUuid_example",
    applicationUserId: "user-234562290",
    forwardParameters: [
      "forwardParameters_example",
    ],
    institutionId: "yapily-mock",
    callback: "https://display-parameters.com",
    redirect: {
      url: "url_example",
    },
    oneTimeToken: false,
    accountRequest: {
      transactionFrom: new Date('2020-01-01T00:00:00Z'),
      transactionTo: new Date('2021-01-01T00:00:00Z'),
      expiresAt: new Date('2025-01-01T00:00:00Z'),
      accountIdentifiers: {
        accountId: "500000000000000000000001",
        accountIdentification: {
          type: "SORT_CODE",
          identification: "401016",
        },
      },
      accountIdentifiersForTransaction: [
        {
          accountId: "500000000000000000000001",
          accountIdentification: {
            type: "SORT_CODE",
            identification: "401016",
          },
        },
      ],
      accountIdentifiersForBalance: [
        {
          accountId: "500000000000000000000001",
          accountIdentification: {
            type: "SORT_CODE",
            identification: "401016",
          },
        },
      ],
      featureScope: [
        "INITIATE_PRE_AUTHORISATION",
      ],
    },
  },
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuId: "psu-id_example",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuCorporateId: "psu-corporate-id_example",
  // string | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuIpAddress: "psu-ip-address_example",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.initiateAccountRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountAuthorisationRequest** | **AccountAuthorisationRequest**|  |
 **psuId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuCorporateId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiResponseOfAccountAuthorisationResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **initiateEmbeddedAccountRequest**
> ApiResponseOfEmbeddedAccountAuthorisationResponse initiateEmbeddedAccountRequest(embeddedAccountAuthorisationRequest)

Used to initiate the embedded authorisation process for an `Institution` that contains the `INITIATE_EMBEDDED_ACCOUNT_REQUEST` feature in order to obtain the the user\'s authorisation to access their account information. <br><br>See [Embedded Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/embedded-account-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_ACCOUNT_REQUEST`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthorisationsApi(configuration);

let body:.AuthorisationsApiInitiateEmbeddedAccountRequestRequest = {
  // EmbeddedAccountAuthorisationRequest
  embeddedAccountAuthorisationRequest: {
    userUuid: "userUuid_example",
    applicationUserId: "user-234562290",
    forwardParameters: [
      "forwardParameters_example",
    ],
    institutionId: "yapily-mock",
    callback: "https://display-parameters.com",
    redirect: {
      url: "url_example",
    },
    oneTimeToken: false,
    userCredentials: {
      id: "6154057725",
      corporateId: "6345898763",
      password: "PISPWD12",
    },
    selectedScaMethod: {
      id: "258211#OPTICAL",
      type: "SMS_OTP",
      description: "Testkarte Hr. Haubach_1, optisch",
      information: "Bitte bestätigen Sie den Vorgang in Ihrer SecureGo plus App",
      data: ["0488701109982928CY439040000100000010000520,00"],
    },
    scaCode: "325614",
    accountRequest: {
      transactionFrom: new Date('2020-01-01T00:00:00Z'),
      transactionTo: new Date('2021-01-01T00:00:00Z'),
      expiresAt: new Date('2025-01-01T00:00:00Z'),
      accountIdentifiers: {
        accountId: "500000000000000000000001",
        accountIdentification: {
          type: "SORT_CODE",
          identification: "401016",
        },
      },
      accountIdentifiersForTransaction: [
        {
          accountId: "500000000000000000000001",
          accountIdentification: {
            type: "SORT_CODE",
            identification: "401016",
          },
        },
      ],
      accountIdentifiersForBalance: [
        {
          accountId: "500000000000000000000001",
          accountIdentification: {
            type: "SORT_CODE",
            identification: "401016",
          },
        },
      ],
      featureScope: [
        "INITIATE_PRE_AUTHORISATION",
      ],
    },
  },
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuId: "psu-id_example",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuCorporateId: "psu-corporate-id_example",
  // string | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuIpAddress: "psu-ip-address_example",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.initiateEmbeddedAccountRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **embeddedAccountAuthorisationRequest** | **EmbeddedAccountAuthorisationRequest**|  |
 **psuId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuCorporateId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiResponseOfEmbeddedAccountAuthorisationResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **reAuthoriseAccount**
> ApiResponseOfAccountAuthorisationResponse reAuthoriseAccount()

Used to prompt the account holder for continued access to their financial data. This endpoint should be used when a `Consent` that was previously `AUTHORIZED` can no longer be used to retrieve data.<br><br>See [Re-Authorisation](https://docs.yapily.com/pages/key-concepts/account-data/account-consents/#re-authorisation) for more information.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthorisationsApi(configuration);

let body:.AuthorisationsApiReAuthoriseAccountRequest = {
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

apiInstance.reAuthoriseAccount(body).then((data:any) => {
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

**ApiResponseOfAccountAuthorisationResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateEmbeddedAccountRequest**
> ApiResponseOfEmbeddedAccountAuthorisationResponse updateEmbeddedAccountRequest(embeddedAccountAuthorisationRequest)

Used to pass the SCA Code received from the `Institution` (and the SCA method selected by the user where multiple SCA methods are supported by the `Institution`) in order to complete the embedded authorisation to access the user\'s financial data. <br><br>See [Embedded Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/embedded-account-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_ACCOUNT_REQUEST`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthorisationsApi(configuration);

let body:.AuthorisationsApiUpdateEmbeddedAccountRequestRequest = {
  // string | __Mandatory__. The consent Id of the `Consent` to update.
  consentId: "consentId_example",
  // EmbeddedAccountAuthorisationRequest
  embeddedAccountAuthorisationRequest: {
    userUuid: "userUuid_example",
    applicationUserId: "user-234562290",
    forwardParameters: [
      "forwardParameters_example",
    ],
    institutionId: "yapily-mock",
    callback: "https://display-parameters.com",
    redirect: {
      url: "url_example",
    },
    oneTimeToken: false,
    userCredentials: {
      id: "6154057725",
      corporateId: "6345898763",
      password: "PISPWD12",
    },
    selectedScaMethod: {
      id: "258211#OPTICAL",
      type: "SMS_OTP",
      description: "Testkarte Hr. Haubach_1, optisch",
      information: "Bitte bestätigen Sie den Vorgang in Ihrer SecureGo plus App",
      data: ["0488701109982928CY439040000100000010000520,00"],
    },
    scaCode: "325614",
    accountRequest: {
      transactionFrom: new Date('2020-01-01T00:00:00Z'),
      transactionTo: new Date('2021-01-01T00:00:00Z'),
      expiresAt: new Date('2025-01-01T00:00:00Z'),
      accountIdentifiers: {
        accountId: "500000000000000000000001",
        accountIdentification: {
          type: "SORT_CODE",
          identification: "401016",
        },
      },
      accountIdentifiersForTransaction: [
        {
          accountId: "500000000000000000000001",
          accountIdentification: {
            type: "SORT_CODE",
            identification: "401016",
          },
        },
      ],
      accountIdentifiersForBalance: [
        {
          accountId: "500000000000000000000001",
          accountIdentification: {
            type: "SORT_CODE",
            identification: "401016",
          },
        },
      ],
      featureScope: [
        "INITIATE_PRE_AUTHORISATION",
      ],
    },
  },
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuId: "psu-id_example",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuCorporateId: "psu-corporate-id_example",
  // string | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuIpAddress: "psu-ip-address_example",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.updateEmbeddedAccountRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **embeddedAccountAuthorisationRequest** | **EmbeddedAccountAuthorisationRequest**|  |
 **consentId** | [**string**] | __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update. | defaults to undefined
 **psuId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuCorporateId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiResponseOfEmbeddedAccountAuthorisationResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateEmbeddedBulkPaymentAuthorisation**
> ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse updateEmbeddedBulkPaymentAuthorisation(bulkPaymentEmbeddedAuthorisationRequest)

Used to pass the SCA Code received from the `Institution` (and the SCA method selected by the user where multiple SCA methods are supported by the `Institution`) in order to complete the embedded authorisation to initiate a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. <br><br>See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_BULK_PAYMENT`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthorisationsApi(configuration);

let body:.AuthorisationsApiUpdateEmbeddedBulkPaymentAuthorisationRequest = {
  // string | __Mandatory__. The consent Id of the `Consent` to update.
  consentId: "consentId_example",
  // BulkPaymentEmbeddedAuthorisationRequest
  bulkPaymentEmbeddedAuthorisationRequest: {
    userUuid: "e006a012-c306-4355-a6a1-99bf69ae5171",
    applicationUserId: "user-234562290",
    institutionId: "yapily-mock",
    callback: "https://display-parameters.com",
    redirect: {
      url: "url_example",
    },
    oneTimeToken: false,
    paymentRequest: {
      payments: [
        {
          paymentIdempotencyId: "04ab4536gaerfc0e1f93c4f4",
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
          reference: "Bill payment",
          contextType: "OTHER",
          purposeCode: "purposeCode_example",
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
          periodicPayment: {
            frequency: {
              type: "DAILY",
              intervalWeek: 1,
              intervalMonth: 1,
              executionDay: 1,
            },
            numberOfPayments: 5,
            nextPaymentDateTime: new Date('2018-01-10T00:00:00Z'),
            nextPaymentAmount: {
              amount: 10,
              currency: "GBP",
            },
            finalPaymentDateTime: new Date('2030-01-10T00:00:00Z'),
            finalPaymentAmount: {
              amount: 10,
              currency: "GBP",
            },
          },
          internationalPayment: {
            currencyOfTransfer: "currencyOfTransfer_example",
            exchangeRateInformation: {
              unitCurrency: "unitCurrency_example",
              rate: 3.14,
              rateType: "ACTUAL",
              foreignExchangeContractReference: "foreignExchangeContractReference_example",
            },
            purpose: "purpose_example",
            priority: "NORMAL",
            chargeBearer: "DEBT",
          },
          amount: {
            amount: 10,
            currency: "GBP",
          },
          paymentDateTime: new Date('2021-07-21T17:32:28Z'),
          readRefundAccount: false,
        },
      ],
      originatorIdentificationNumber: "originatorIdentificationNumber_example",
      executionDateTime: new Date('1970-01-01T00:00:00.00Z'),
    },
    userCredentials: {
      id: "6154057725",
      corporateId: "6345898763",
      password: "PISPWD12",
    },
    selectedScaMethod: {
      id: "258211#OPTICAL",
      type: "SMS_OTP",
      description: "Testkarte Hr. Haubach_1, optisch",
      information: "Bitte bestätigen Sie den Vorgang in Ihrer SecureGo plus App",
      data: ["0488701109982928CY439040000100000010000520,00"],
    },
    scaCode: "325614",
  },
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuId: "psu-id_example",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuCorporateId: "psu-corporate-id_example",
  // string | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuIpAddress: "psu-ip-address_example",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.updateEmbeddedBulkPaymentAuthorisation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkPaymentEmbeddedAuthorisationRequest** | **BulkPaymentEmbeddedAuthorisationRequest**|  |
 **consentId** | [**string**] | __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update. | defaults to undefined
 **psuId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuCorporateId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateEmbeddedPaymentAuthorisation**
> ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse updateEmbeddedPaymentAuthorisation(paymentEmbeddedAuthorisationRequest)

Used to pass the SCA Code received from the `Institution` (and the SCA method selected by the user where multiple SCA methods are supported by the `Institution`) in order to complete the embedded authorisation to initiate a payment. <br><br> See [Embedded Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/embedded/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthorisationsApi(configuration);

let body:.AuthorisationsApiUpdateEmbeddedPaymentAuthorisationRequest = {
  // string | __Mandatory__. The consent Id of the `Consent` to update.
  consentId: "consentId_example",
  // PaymentEmbeddedAuthorisationRequest
  paymentEmbeddedAuthorisationRequest: {
    userUuid: "userUuid_example",
    applicationUserId: "user-234562290",
    institutionId: "yapily-mock",
    callback: "https://display-parameters.com",
    redirect: {
      url: "url_example",
    },
    oneTimeToken: false,
    paymentRequest: {
      paymentIdempotencyId: "04ab4536gaerfc0e1f93c4f4",
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
      reference: "Bill payment",
      contextType: "OTHER",
      purposeCode: "purposeCode_example",
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
      periodicPayment: {
        frequency: {
          type: "DAILY",
          intervalWeek: 1,
          intervalMonth: 1,
          executionDay: 1,
        },
        numberOfPayments: 5,
        nextPaymentDateTime: new Date('2018-01-10T00:00:00Z'),
        nextPaymentAmount: {
          amount: 10,
          currency: "GBP",
        },
        finalPaymentDateTime: new Date('2030-01-10T00:00:00Z'),
        finalPaymentAmount: {
          amount: 10,
          currency: "GBP",
        },
      },
      internationalPayment: {
        currencyOfTransfer: "currencyOfTransfer_example",
        exchangeRateInformation: {
          unitCurrency: "unitCurrency_example",
          rate: 3.14,
          rateType: "ACTUAL",
          foreignExchangeContractReference: "foreignExchangeContractReference_example",
        },
        purpose: "purpose_example",
        priority: "NORMAL",
        chargeBearer: "DEBT",
      },
      amount: {
        amount: 10,
        currency: "GBP",
      },
      paymentDateTime: new Date('2021-07-21T17:32:28Z'),
      readRefundAccount: false,
    },
    userCredentials: {
      id: "6154057725",
      corporateId: "6345898763",
      password: "PISPWD12",
    },
    selectedScaMethod: {
      id: "258211#OPTICAL",
      type: "SMS_OTP",
      description: "Testkarte Hr. Haubach_1, optisch",
      information: "Bitte bestätigen Sie den Vorgang in Ihrer SecureGo plus App",
      data: ["0488701109982928CY439040000100000010000520,00"],
    },
    scaCode: "325614",
  },
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuId: "psu-id_example",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuCorporateId: "psu-corporate-id_example",
  // string | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuIpAddress: "psu-ip-address_example",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.updateEmbeddedPaymentAuthorisation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentEmbeddedAuthorisationRequest** | **PaymentEmbeddedAuthorisationRequest**|  |
 **consentId** | [**string**] | __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update. | defaults to undefined
 **psuId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuCorporateId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePaymentAuthorisation**
> ApiResponseOfPaymentAuthorisationRequestResponse updatePaymentAuthorisation(paymentAuthorisationRequest)

Used to continue the authorisation process and for any `Institution` that contains the `INITIATE_PRE_AUTHORISATION` feature and direct user to the login screen of their financial institution in order to give consent to initiate a payment. <br><br>See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow. <br><br>Feature: `INITIATE_PRE_AUTHORISATION`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthorisationsApi(configuration);

let body:.AuthorisationsApiUpdatePaymentAuthorisationRequest = {
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consent: "{consentToken}",
  // PaymentAuthorisationRequest
  paymentAuthorisationRequest: {
    userUuid: "userUuid_example",
    applicationUserId: "user-234562290",
    forwardParameters: [
      "forwardParameters_example",
    ],
    institutionId: "yapily-mock",
    callback: "https://display-parameters.com",
    redirect: {
      url: "url_example",
    },
    oneTimeToken: false,
    paymentRequest: {
      paymentIdempotencyId: "04ab4536gaerfc0e1f93c4f4",
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
      reference: "Bill payment",
      contextType: "OTHER",
      purposeCode: "purposeCode_example",
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
      periodicPayment: {
        frequency: {
          type: "DAILY",
          intervalWeek: 1,
          intervalMonth: 1,
          executionDay: 1,
        },
        numberOfPayments: 5,
        nextPaymentDateTime: new Date('2018-01-10T00:00:00Z'),
        nextPaymentAmount: {
          amount: 10,
          currency: "GBP",
        },
        finalPaymentDateTime: new Date('2030-01-10T00:00:00Z'),
        finalPaymentAmount: {
          amount: 10,
          currency: "GBP",
        },
      },
      internationalPayment: {
        currencyOfTransfer: "currencyOfTransfer_example",
        exchangeRateInformation: {
          unitCurrency: "unitCurrency_example",
          rate: 3.14,
          rateType: "ACTUAL",
          foreignExchangeContractReference: "foreignExchangeContractReference_example",
        },
        purpose: "purpose_example",
        priority: "NORMAL",
        chargeBearer: "DEBT",
      },
      amount: {
        amount: 10,
        currency: "GBP",
      },
      paymentDateTime: new Date('2021-07-21T17:32:28Z'),
      readRefundAccount: false,
    },
  },
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuId: "psu-id_example",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuCorporateId: "psu-corporate-id_example",
  // string | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuIpAddress: "psu-ip-address_example",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.updatePaymentAuthorisation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentAuthorisationRequest** | **PaymentAuthorisationRequest**|  |
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined
 **psuId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuCorporateId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiResponseOfPaymentAuthorisationRequestResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePreAuthoriseAccountConsent**
> ApiResponseOfAccountAuthorisationResponse updatePreAuthoriseAccountConsent(accountAuthorisationRequest)

Used to continue the authorisation process and for any `Institution` that contains the `INITIATE_PRE_AUTHORISATION` feature and direct user to the login screen of their financial institution in order to give consent to access account data. <br><br>See [Redirect Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/redirect-account-flows/) for more information about this flow. <br><br>Features: <ul><li>`INITIATE_ACCOUNT_REQUEST`</li><li>`INITIATE_PRE_AUTHORISATION`</li></ul>

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthorisationsApi(configuration);

let body:.AuthorisationsApiUpdatePreAuthoriseAccountConsentRequest = {
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consent: "{consentToken}",
  // AccountAuthorisationRequest
  accountAuthorisationRequest: {
    userUuid: "userUuid_example",
    applicationUserId: "user-234562290",
    forwardParameters: [
      "forwardParameters_example",
    ],
    institutionId: "yapily-mock",
    callback: "https://display-parameters.com",
    redirect: {
      url: "url_example",
    },
    oneTimeToken: false,
    accountRequest: {
      transactionFrom: new Date('2020-01-01T00:00:00Z'),
      transactionTo: new Date('2021-01-01T00:00:00Z'),
      expiresAt: new Date('2025-01-01T00:00:00Z'),
      accountIdentifiers: {
        accountId: "500000000000000000000001",
        accountIdentification: {
          type: "SORT_CODE",
          identification: "401016",
        },
      },
      accountIdentifiersForTransaction: [
        {
          accountId: "500000000000000000000001",
          accountIdentification: {
            type: "SORT_CODE",
            identification: "401016",
          },
        },
      ],
      accountIdentifiersForBalance: [
        {
          accountId: "500000000000000000000001",
          accountIdentification: {
            type: "SORT_CODE",
            identification: "401016",
          },
        },
      ],
      featureScope: [
        "INITIATE_PRE_AUTHORISATION",
      ],
    },
  },
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuId: "psu-id_example",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuCorporateId: "psu-corporate-id_example",
  // string | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuIpAddress: "psu-ip-address_example",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.updatePreAuthoriseAccountConsent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountAuthorisationRequest** | **AccountAuthorisationRequest**|  |
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined
 **psuId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuCorporateId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiResponseOfAccountAuthorisationResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


