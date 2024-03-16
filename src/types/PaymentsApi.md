# .PaymentsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBulkPayment**](PaymentsApi.md#createBulkPayment) | **POST** /bulk-payments | Create Bulk Payment
[**createPayment**](PaymentsApi.md#createPayment) | **POST** /payments | Create Payment
[**getPayments**](PaymentsApi.md#getPayments) | **GET** /payments/{paymentId}/details | Get Payment Details


# **createBulkPayment**
> ApiResponseOfPaymentResponse createBulkPayment(bulkPaymentRequest)

Creates a bulk payment after obtaining the user\'s authorisation. <br><br>Feature: `CREATE_BULK_PAYMENT`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentsApi(configuration);

let body:.PaymentsApiCreateBulkPaymentRequest = {
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consent: "{consentToken}",
  // BulkPaymentRequest
  bulkPaymentRequest: {
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
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuId: "psu-id_example",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuCorporateId: "psu-corporate-id_example",
  // string | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuIpAddress: "psu-ip-address_example",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.createBulkPayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkPaymentRequest** | **BulkPaymentRequest**|  |
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined
 **psuId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuCorporateId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiResponseOfPaymentResponse**

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

# **createPayment**
> ApiResponseOfPaymentResponse createPayment(paymentRequest)

Creates a payment after obtaining the user\'s authorisation. <br><br>Features:<ul><li>`CREATE_DOMESTIC_PERIODIC_PAYMENT`</li><li>`CREATE_DOMESTIC_SCHEDULED_PAYMENT`</li><li>`CREATE_DOMESTIC_SINGLE_INSTANT_PAYMENT`</li><li>`CREATE_DOMESTIC_SINGLE_PAYMENT`</li><li>`CREATE_INTERNATIONAL_PERIODIC_PAYMENT`</li><li>`CREATE_INTERNATIONAL_SCHEDULED_PAYMENT`</li><li>`CREATE_INTERNATIONAL_SINGLE_PAYMENT`</li></ul>

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentsApi(configuration);

let body:.PaymentsApiCreatePaymentRequest = {
  // string | __Mandatory__. The `consent-token` containing the user\'s authorisation to make the request.
  consent: "{consentToken}",
  // PaymentRequest
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
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuId: "psu-id_example",
  // string | __Conditional__. Represents the user\'s login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuCorporateId: "psu-corporate-id_example",
  // string | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. (optional)
  psuIpAddress: "psu-ip-address_example",
  // boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>. (optional)
  raw: true,
};

apiInstance.createPayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentRequest** | **PaymentRequest**|  |
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined
 **psuId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuCorporateId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiResponseOfPaymentResponse**

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

# **getPayments**
> ApiResponseOfPaymentResponses getPayments()

Returns the details of a payment. <br><br>Most commonly used to check for payment status updates. <br><br>Feature: `EXISTING_PAYMENTS_DETAILS`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentsApi(configuration);

let body:.PaymentsApiGetPaymentsRequest = {
  // string | __Mandatory__. The payment Id of the payment.
  paymentId: "paymentId_example",
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

apiInstance.getPayments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentId** | [**string**] | __Mandatory__. The payment Id of the payment. | defaults to undefined
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request. | defaults to undefined
 **psuId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuCorporateId** | [**string**] | __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **psuIpAddress** | [**string**] | __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | (optional) defaults to undefined
 **raw** | [**boolean**] | __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | (optional) defaults to undefined


### Return type

**ApiResponseOfPaymentResponses**

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


