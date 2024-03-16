# .ConsentsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**_delete**](ConsentsApi.md#_delete) | **DELETE** /consents/{consentId} | Delete Consent
[**createConsentWithCode**](ConsentsApi.md#createConsentWithCode) | **POST** /consent-auth-code | Exchange OAuth2 Code
[**extendConsent**](ConsentsApi.md#extendConsent) | **POST** /consents/{consentId}/extend | Extend Consent
[**getConsentById**](ConsentsApi.md#getConsentById) | **GET** /consents/{consentId} | Get Consent
[**getConsentBySingleAccessConsent**](ConsentsApi.md#getConsentBySingleAccessConsent) | **POST** /consent-one-time-token | Exchange One Time Token
[**getConsents**](ConsentsApi.md#getConsents) | **GET** /consents | Get Consents


# **_delete**
> ApiResponseOfConsentDeleteResponse _delete()

Delete a consent using the consent Id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConsentsApi(configuration);

let body:.ConsentsApiDeleteRequest = {
  // string | __Mandatory__. The consent Id of the `Consent` to update.
  consentId: "consentId_example",
  // boolean | __Optional__. Whether to force the deletion. (optional)
  forceDelete: true,
};

apiInstance._delete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | [**string**] | __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update. | defaults to undefined
 **forceDelete** | [**boolean**] | __Optional__. Whether to force the deletion. | (optional) defaults to true


### Return type

**ApiResponseOfConsentDeleteResponse**

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

# **createConsentWithCode**
> Consent createConsentWithCode(consentAuthCodeRequest)

Used to obtain a Yapily Consent object containing the `consentToken` once the user has authenticated and you have an OAuth2 authorisation code `auth-code` and state `auth-state`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConsentsApi(configuration);

let body:.ConsentsApiCreateConsentWithCodeRequest = {
  // ConsentAuthCodeRequest
  consentAuthCodeRequest: {
    authCode: "6b965fbb-ff09-4afa-b897-90c34797cb8f",
    authState: "1270cb2ffc4842b78953afa2228e0a87",
  },
};

apiInstance.createConsentWithCode(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentAuthCodeRequest** | **ConsentAuthCodeRequest**|  |


### Return type

**Consent**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **extendConsent**
> ApiResponseOfConsent extendConsent(extendConsentRequest)

Used to indicate to Yapily that reconfirmation has occurred for a given Consent, and to update lastUpdatedAt and reconfirmBy for that Consent. Returns the Consent.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConsentsApi(configuration);

let body:.ConsentsApiExtendConsentRequest = {
  // string | __Mandatory__. The consent Id of the `Consent` to update.
  consentId: "consentId_example",
  // ExtendConsentRequest
  extendConsentRequest: {
    lastConfirmedAt: new Date('2022-08-16T10:59:53.288Z'),
  },
};

apiInstance.extendConsent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extendConsentRequest** | **ExtendConsentRequest**|  |
 **consentId** | [**string**] | __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update. | defaults to undefined


### Return type

**ApiResponseOfConsent**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created |  -  |
**400** | Error Response. The supplied lastConfirmedAt date, Consent type, or Consent status is invalid. |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getConsentById**
> ApiResponseOfConsent getConsentById()

Get consent using the consent Id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConsentsApi(configuration);

let body:.ConsentsApiGetConsentByIdRequest = {
  // string | __Mandatory__. The consent Id of the `Consent` to update.
  consentId: "consentId_example",
};

apiInstance.getConsentById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | [**string**] | __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update. | defaults to undefined


### Return type

**ApiResponseOfConsent**

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

# **getConsentBySingleAccessConsent**
> Consent getConsentBySingleAccessConsent(oneTimeTokenRequest)

Exchange a One-time-token for the consent token

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConsentsApi(configuration);

let body:.ConsentsApiGetConsentBySingleAccessConsentRequest = {
  // OneTimeTokenRequest
  oneTimeTokenRequest: {
    oneTimeToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJJTlNUSVRVVElPTiI6ImJidmEtc2FuZGJveCIsIlVVSUQiOiJmMzNmNGU4ZC1jMDQ0LTQ2YTktOTlkMC0wYmRlMzIyYTJjOTIifQ.4Qv3NJI6av2nKi1U3aNmm71cIwJ3TvRsIlYDafQUVv_Khy_e-8oEpV_BoP4V1CII12oT-Yq4cPveHILz8BOwjg",
  },
};

apiInstance.getConsentBySingleAccessConsent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oneTimeTokenRequest** | **OneTimeTokenRequest**|  |


### Return type

**Consent**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getConsents**
> ApiListResponseOfConsent getConsents()

Used to retrieve all the consents created for each user within an application

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConsentsApi(configuration);

let body:.ConsentsApiGetConsentsRequest = {
  // Set<string> | __Optional__. Filter records based on the list of `applicationUserId` users provided. (optional)
  filterApplicationUserId: [
    "filter[applicationUserId]_example",
  ],
  // Set<string> | __Optional__. Filter records based on the list of `userUuid` users provided. (optional)
  filterUserUuid: [
    "filter[userUuid]_example",
  ],
  // Set<string> | __Optional__. Filter records based on the list of `Institution` provided. (optional)
  filterInstitution: [
    "filter[institution]_example",
  ],
  // Set<string> | __Optional__. Filter records based on the list of `Consent` [statuses](https://docs.yapily.com/api/reference/#operation/getConsents!c=200&path=data/status&t=response). (optional)
  filterStatus: [
    "filter[status]_example",
  ],
  // string | __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\'T\'HH:mm:ss.SSSZ).  (optional)
  _from: "from_example",
  // string | __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\'T\'HH:mm:ss.SSSZ). (optional)
  before: "before_example",
  // number | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. (optional)
  limit: 1,
  // number | __Optional__. The number of transaction records to be skipped. Used primarily with paginated results. (optional)
  offset: 0,
};

apiInstance.getConsents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterApplicationUserId** | **Set&lt;string&gt;** | __Optional__. Filter records based on the list of &#x60;applicationUserId&#x60; users provided. | (optional) defaults to undefined
 **filterUserUuid** | **Set&lt;string&gt;** | __Optional__. Filter records based on the list of &#x60;userUuid&#x60; users provided. | (optional) defaults to undefined
 **filterInstitution** | **Set&lt;string&gt;** | __Optional__. Filter records based on the list of &#x60;Institution&#x60; provided. | (optional) defaults to undefined
 **filterStatus** | **Set&lt;string&gt;** | __Optional__. Filter records based on the list of &#x60;Consent&#x60; [statuses](https://docs.yapily.com/api/reference/#operation/getConsents!c&#x3D;200&amp;path&#x3D;data/status&amp;t&#x3D;response). | (optional) defaults to undefined
 **_from** | [**string**] | __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).  | (optional) defaults to undefined
 **before** | [**string**] | __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ). | (optional) defaults to undefined
 **limit** | [**number**] | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. | (optional) defaults to undefined
 **offset** | [**number**] | __Optional__. The number of transaction records to be skipped. Used primarily with paginated results. | (optional) defaults to 0


### Return type

**ApiListResponseOfConsent**

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


