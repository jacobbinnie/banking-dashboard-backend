# .ConstraintsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountConstraintsRulesByInstitution**](ConstraintsApi.md#getAccountConstraintsRulesByInstitution) | **GET** /institutions/constraints/data | Get Data Constraints Rules
[**getPaymentConstraintsRulesByInstitution**](ConstraintsApi.md#getPaymentConstraintsRulesByInstitution) | **GET** /institutions/constraints/payments | Get Payment Constraints Rules


# **getAccountConstraintsRulesByInstitution**
> ApiListResponseOfDataConstraints getAccountConstraintsRulesByInstitution()

Get Data Constraints Rules against an Institution for Account Authorisation requests

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConstraintsApi(configuration);

let body:.ConstraintsApiGetAccountConstraintsRulesByInstitutionRequest = {
  // Array<string> | Unique Id(s) of the `Institution`(s) to retrieve the Data Constraints for. Multiple institutionIds need to be separated by `,`
  institutionIds: [
    "institutionIds_example",
  ],
  // string | Country code of the `Institution`(s). Ensure that the country code matches the respective institutionIds; any mismatch will result in an HTTP 404 error response.
  institutionCountryCode: "institutionCountryCode_example",
  // string | The path on the API that is associated with the operation for which constraints are to be retrieved (optional)
  endpointPath: "endpointPath_example",
  // 'POST' | 'PATCH' | 'PUT' | 'GET' | 'DELETE' | The HTTP method that is associated with the operation for which constraints are to be retrieved (optional)
  endpointMethod: "POST",
};

apiInstance.getAccountConstraintsRulesByInstitution(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **institutionIds** | **Array&lt;string&gt;** | Unique Id(s) of the &#x60;Institution&#x60;(s) to retrieve the Data Constraints for. Multiple institutionIds need to be separated by &#x60;,&#x60; | defaults to undefined
 **institutionCountryCode** | [**string**] | Country code of the &#x60;Institution&#x60;(s). Ensure that the country code matches the respective institutionIds; any mismatch will result in an HTTP 404 error response. | defaults to undefined
 **endpointPath** | [**string**] | The path on the API that is associated with the operation for which constraints are to be retrieved | (optional) defaults to undefined
 **endpointMethod** | [**&#39;POST&#39; | &#39;PATCH&#39; | &#39;PUT&#39; | &#39;GET&#39; | &#39;DELETE&#39;**]**Array<&#39;POST&#39; &#124; &#39;PATCH&#39; &#124; &#39;PUT&#39; &#124; &#39;GET&#39; &#124; &#39;DELETE&#39;>** | The HTTP method that is associated with the operation for which constraints are to be retrieved | (optional) defaults to undefined


### Return type

**ApiListResponseOfDataConstraints**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Bad Request. |  -  |
**401** | Either authentication credentials were not supplied, or they were invalid. |  -  |
**404** | Not Found. |  -  |
**500** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPaymentConstraintsRulesByInstitution**
> ApiListResponseOfPaymentConstraints getPaymentConstraintsRulesByInstitution()

Retrieve institution specific constraints for payment authorisation and submission requests

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConstraintsApi(configuration);

let body:.ConstraintsApiGetPaymentConstraintsRulesByInstitutionRequest = {
  // Array<string> | Unique Id(s) of the `Institution`(s) to retrieve the Payment Constraints for. Multiple institutionIds need to be separated by `,`
  institutionIds: [
    "institutionIds_example",
  ],
  // string | Country code of the `Institution`(s). Ensure that the country code matches the respective institutionIds; any mismatch will result in an HTTP 404 error response.
  institutionCountryCode: "institutionCountryCode_example",
  // 'DOMESTIC_PAYMENT' | 'DOMESTIC_INSTANT_PAYMENT' | 'DOMESTIC_VARIABLE_RECURRING_PAYMENT' | 'DOMESTIC_SCHEDULED_PAYMENT' | 'DOMESTIC_PERIODIC_PAYMENT' | 'INTERNATIONAL_PAYMENT' | 'INTERNATIONAL_SCHEDULED_PAYMENT' | 'INTERNATIONAL_PERIODIC_PAYMENT' | 'BULK_PAYMENT' | Type of payment to retrieve payment constraints for
  paymentType: "DOMESTIC_PAYMENT",
  // string | The path on the API that is associated with the operation for which constraints are to be retrieved (optional)
  endpointPath: "endpointPath_example",
  // 'POST' | 'PATCH' | 'PUT' | 'GET' | 'DELETE' | The HTTP method that is associated with the operation for which constraints are to be retrieved (optional)
  endpointMethod: "POST",
};

apiInstance.getPaymentConstraintsRulesByInstitution(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **institutionIds** | **Array&lt;string&gt;** | Unique Id(s) of the &#x60;Institution&#x60;(s) to retrieve the Payment Constraints for. Multiple institutionIds need to be separated by &#x60;,&#x60; | defaults to undefined
 **institutionCountryCode** | [**string**] | Country code of the &#x60;Institution&#x60;(s). Ensure that the country code matches the respective institutionIds; any mismatch will result in an HTTP 404 error response. | defaults to undefined
 **paymentType** | [**&#39;DOMESTIC_PAYMENT&#39; | &#39;DOMESTIC_INSTANT_PAYMENT&#39; | &#39;DOMESTIC_VARIABLE_RECURRING_PAYMENT&#39; | &#39;DOMESTIC_SCHEDULED_PAYMENT&#39; | &#39;DOMESTIC_PERIODIC_PAYMENT&#39; | &#39;INTERNATIONAL_PAYMENT&#39; | &#39;INTERNATIONAL_SCHEDULED_PAYMENT&#39; | &#39;INTERNATIONAL_PERIODIC_PAYMENT&#39; | &#39;BULK_PAYMENT&#39;**]**Array<&#39;DOMESTIC_PAYMENT&#39; &#124; &#39;DOMESTIC_INSTANT_PAYMENT&#39; &#124; &#39;DOMESTIC_VARIABLE_RECURRING_PAYMENT&#39; &#124; &#39;DOMESTIC_SCHEDULED_PAYMENT&#39; &#124; &#39;DOMESTIC_PERIODIC_PAYMENT&#39; &#124; &#39;INTERNATIONAL_PAYMENT&#39; &#124; &#39;INTERNATIONAL_SCHEDULED_PAYMENT&#39; &#124; &#39;INTERNATIONAL_PERIODIC_PAYMENT&#39; &#124; &#39;BULK_PAYMENT&#39;>** | Type of payment to retrieve payment constraints for | defaults to undefined
 **endpointPath** | [**string**] | The path on the API that is associated with the operation for which constraints are to be retrieved | (optional) defaults to undefined
 **endpointMethod** | [**&#39;POST&#39; | &#39;PATCH&#39; | &#39;PUT&#39; | &#39;GET&#39; | &#39;DELETE&#39;**]**Array<&#39;POST&#39; &#124; &#39;PATCH&#39; &#124; &#39;PUT&#39; &#124; &#39;GET&#39; &#124; &#39;DELETE&#39;>** | The HTTP method that is associated with the operation for which constraints are to be retrieved | (optional) defaults to undefined


### Return type

**ApiListResponseOfPaymentConstraints**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Bad Request. |  -  |
**401** | Either authentication credentials were not supplied, or they were invalid. |  -  |
**404** | Not Found. |  -  |
**500** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


