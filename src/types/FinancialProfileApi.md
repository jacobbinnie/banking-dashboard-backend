# .FinancialProfileApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProfileConsent**](FinancialProfileApi.md#createProfileConsent) | **POST** /users/{userUuid}/profile/consents | Create Profile Consent
[**deleteProfileConsent**](FinancialProfileApi.md#deleteProfileConsent) | **DELETE** /users/{userUuid}/profile/consents/{profileConsentId} | Delete Profile Consent
[**getBalancePrediction**](FinancialProfileApi.md#getBalancePrediction) | **GET** /users/{userUuid}/profile/predicted-balances | Get Predicted Balances
[**getProfileConsent**](FinancialProfileApi.md#getProfileConsent) | **GET** /users/{userUuid}/profile/consents/{profileConsentId} | Get Profile Consent
[**getUserProfile**](FinancialProfileApi.md#getUserProfile) | **GET** /users/{userUuid}/profile/transaction-groups | Get Transaction Groups


# **createProfileConsent**
> ApiResponseOfFinancialProfileAuthorisationResponse createProfileConsent()

Used to add a consent to a `Financial Profile` for a `User`.  The response is asynchronous, returned with pending status, while retrieval of financial data is commenced.  There is a limit of 10,000 transactions for enrichment.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FinancialProfileApi(configuration);

let body:.FinancialProfileApiCreateProfileConsentRequest = {
  // string | __Mandatory__. The Yapily generated UUID for the user.
  userUuid: "userUuid_example",
  // string | __Mandatory__. The `consent-token` obtained from the original authorisation.
  consent: "consent_example",
};

apiInstance.createProfileConsent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUuid** | [**string**] | __Mandatory__. The Yapily generated UUID for the user. | defaults to undefined
 **consent** | [**string**] | __Mandatory__. The &#x60;consent-token&#x60; obtained from the original authorisation. | defaults to undefined


### Return type

**ApiResponseOfFinancialProfileAuthorisationResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A successful response, returning a ApiResponseOfFinancialProfileAuthorisationResponse. |  -  |
**400** | Bad Request.  Returned if the userUuid is not a valid UUID. |  -  |
**401** | Either authentication credentials were not supplied, or they were invalid. |  -  |
**404** | Not Found.  Returned if the userUuid is not found for the &#x60;Application&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteProfileConsent**
> ApiResponseOfFinancialProfileConsentRemoveResponse deleteProfileConsent()

Used to delete a `ProfileConsent` for a `User`. This will remove the consent and all associated financial data from the \'Financial Profile\'.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FinancialProfileApi(configuration);

let body:.FinancialProfileApiDeleteProfileConsentRequest = {
  // string | __Mandatory__. The Yapily generated UUID for the user.
  userUuid: "userUuid_example",
  // string | __Mandatory__. The ID of the ProfileConsent
  profileConsentId: "profileConsentId_example",
};

apiInstance.deleteProfileConsent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUuid** | [**string**] | __Mandatory__. The Yapily generated UUID for the user. | defaults to undefined
 **profileConsentId** | [**string**] | __Mandatory__. The ID of the ProfileConsent | defaults to undefined


### Return type

**ApiResponseOfFinancialProfileConsentRemoveResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The ProfileConsent was deleted. |  -  |
**400** | Bad Request.  Returned if the userUuid is not a valid UUID. |  -  |
**401** | Either authentication credentials were not supplied, or they were invalid. |  -  |
**404** | Not Found.  Returned if the userUuid or ProfileConsent is not found for the &#x60;Application&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBalancePrediction**
> ApiResponseOfFinancialProfileBalancePrediction getBalancePrediction()

Used to retrieve a `Balance Prediction Profile` for a `User`.  Status will be `PENDING` until all ProfileConsents are `COMPLETED`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FinancialProfileApi(configuration);

let body:.FinancialProfileApiGetBalancePredictionRequest = {
  // string | __Mandatory__. The Yapily generated UUID for the user.
  userUuid: "userUuid_example",
};

apiInstance.getBalancePrediction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUuid** | [**string**] | __Mandatory__. The Yapily generated UUID for the user. | defaults to undefined


### Return type

**ApiResponseOfFinancialProfileBalancePrediction**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response, returning a Balance Prediction Profile. |  -  |
**400** | Bad Request.  Returned if the userUuid is not a valid UUID. |  -  |
**401** | Either authentication credentials were not supplied, or they were invalid. |  -  |
**404** | Not Found.  Returned if the userUuid is not found for the &#x60;Application&#x60;, or data not found for the userUuid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProfileConsent**
> ApiResponseOfFinancialProfileConsent getProfileConsent()

Used to retrieve a specific ProfileConsent for a User.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FinancialProfileApi(configuration);

let body:.FinancialProfileApiGetProfileConsentRequest = {
  // string | __Mandatory__. The Yapily generated UUID for the user.
  userUuid: "userUuid_example",
  // string | __Mandatory__. The ID of the ProfileConsent
  profileConsentId: "profileConsentId_example",
};

apiInstance.getProfileConsent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUuid** | [**string**] | __Mandatory__. The Yapily generated UUID for the user. | defaults to undefined
 **profileConsentId** | [**string**] | __Mandatory__. The ID of the ProfileConsent | defaults to undefined


### Return type

**ApiResponseOfFinancialProfileConsent**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response, returning a ApiResponseOfFinancialProfileConsent. |  -  |
**400** | Bad Request.  Returned if the userUuid is not a valid UUID. |  -  |
**401** | Either authentication credentials were not supplied, or they were invalid. |  -  |
**404** | Not Found.  Returned if the userUuid or ProfileConsent is not found for the &#x60;Application&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUserProfile**
> ApiResponseOfFinancialProfile getUserProfile()

Used to retrieve a `TransactionGroups` for a `User`.  Status will be `PENDING` until all ProfileConsents are `COMPLETED`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FinancialProfileApi(configuration);

let body:.FinancialProfileApiGetUserProfileRequest = {
  // string | __Mandatory__. The Yapily generated UUID for the user.
  userUuid: "userUuid_example",
};

apiInstance.getUserProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUuid** | [**string**] | __Mandatory__. The Yapily generated UUID for the user. | defaults to undefined


### Return type

**ApiResponseOfFinancialProfile**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response, returning a ApiResponseOfFinancialProfile. |  -  |
**400** | Bad Request.  Returned if the userUuid is not a valid UUID. |  -  |
**401** | Either authentication credentials were not supplied, or they were invalid. |  -  |
**404** | Not Found.  Returned if the userUuid is not found for the &#x60;Application&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


