# .InstitutionsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFeatureDetails**](InstitutionsApi.md#getFeatureDetails) | **GET** /features | Get Features
[**getInstitution**](InstitutionsApi.md#getInstitution) | **GET** /institutions/{institutionId} | Get Institution
[**getInstitutions**](InstitutionsApi.md#getInstitutions) | **GET** /institutions | Get Institutions


# **getFeatureDetails**
> ApiListResponseOfFeatureDetails getFeatureDetails()

Used to retrieve all features available from Yapily. Each `Institution` supports a one, many or all of these features and can be seen in the features field of the `Institution` object.<br><br>Note: Every `Institution` does not necessarily support every feature. To see which features are available for a particular Institution, use either the [Get Institutions](https://docs.yapily.com/api/reference/#operation/getInstitutions) or [Get Institution](https://docs.yapily.com/api/reference/#operation/getInstitution) endpoint and check the features array within the `Institution` payload.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InstitutionsApi(configuration);

let body:any = {};

apiInstance.getFeatureDetails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ApiListResponseOfFeatureDetails**

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

# **getInstitution**
> Institution getInstitution()

Used to retrieves details of a specific `Institution` within an application

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InstitutionsApi(configuration);

let body:.InstitutionsApiGetInstitutionRequest = {
  // string | __Mandatory__. The Yapily institution Id for the `Institution`.
  institutionId: "institutionId_example",
};

apiInstance.getInstitution(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **institutionId** | [**string**] | __Mandatory__. The Yapily institution Id for the &#x60;Institution&#x60;. | defaults to undefined


### Return type

**Institution**

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

# **getInstitutions**
> ApiListResponseOfInstitution getInstitutions()

Used to retrieve all `Institutions` within an application

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InstitutionsApi(configuration);

let body:any = {};

apiInstance.getInstitutions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ApiListResponseOfInstitution**

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


