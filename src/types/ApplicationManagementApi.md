# .ApplicationManagementApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplicationVRPConfigurationByApplicationId**](ApplicationManagementApi.md#createApplicationVRPConfigurationByApplicationId) | **POST** /applications/{applicationId}/vrp | Create application VRP configuration by Application Id
[**createSubApplication**](ApplicationManagementApi.md#createSubApplication) | **POST** /applications | Creates a sub-application for the root application id provided in the authentication token
[**deleteApplication**](ApplicationManagementApi.md#deleteApplication) | **DELETE** /applications/{applicationId} | Delete an application
[**getApplicationById**](ApplicationManagementApi.md#getApplicationById) | **GET** /applications/{applicationId} | Get application details
[**getApplicationVRPConfigurationByApplicationId**](ApplicationManagementApi.md#getApplicationVRPConfigurationByApplicationId) | **GET** /applications/{applicationId}/vrp | Get application VRP configuration by Application Id
[**searchApplications**](ApplicationManagementApi.md#searchApplications) | **GET** /applications | Retrieve sub-applications for the root application provided in the authentication token.
[**updateApplication**](ApplicationManagementApi.md#updateApplication) | **PUT** /applications/{applicationId} | Update an Application
[**updateApplicationVRPConfigurationByApplicationId**](ApplicationManagementApi.md#updateApplicationVRPConfigurationByApplicationId) | **PUT** /applications/{applicationId}/vrp | Update application VRP configuration by Application Id


# **createApplicationVRPConfigurationByApplicationId**
> void createApplicationVRPConfigurationByApplicationId(vrpConfiguration)

Create application vrp configuration

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationManagementApi(configuration);

let body:.ApplicationManagementApiCreateApplicationVRPConfigurationByApplicationIdRequest = {
  // string | The id of the application that vrp configuration being created for
  applicationId: "applicationId_example",
  // VrpConfiguration | The vrp configuration to create
  vrpConfiguration: null,
};

apiInstance.createApplicationVRPConfigurationByApplicationId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vrpConfiguration** | **VrpConfiguration**| The vrp configuration to create |
 **applicationId** | [**string**] | The id of the application that vrp configuration being created for | defaults to undefined


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Application vrp configuration was successfully created |  -  |
**400** | There are validation errors |  -  |
**401** | Either authentication credentials were not supplied, or they were invalid. |  -  |
**403** | Forbidden from accessing the requested Application. |  -  |
**404** | VRP Configuration with given application id not found. |  -  |
**500** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createSubApplication**
> ApiResponseOfApplicationResponse createSubApplication(applicationRequest)

Creates a sub-application under the given root application id provided in the authentication token. The sub-application can use the root\'s credentials to call the API

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationManagementApi(configuration);

let body:.ApplicationManagementApiCreateSubApplicationRequest = {
  // ApplicationRequest | The sub-application to create
  applicationRequest: {
    name: "name_example",
    merchantCategoryCode: "0742",
    ppcUserGroup: "WHOLESALE_FI_FI",
    callbackUrls: [
      "callbackUrls_example",
    ],
    isContractPresent: true,
  },
};

apiInstance.createSubApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationRequest** | **ApplicationRequest**| The sub-application to create |


### Return type

**ApiResponseOfApplicationResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Sub-application was successfully created |  -  |
**400** | There are validation errors |  -  |
**401** | Either authentication credentials were not supplied, or they were invalid. |  -  |
**403** | Forbidden from accessing the requested Application. |  -  |
**404** | Application with given root id not found. |  -  |
**500** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteApplication**
> void deleteApplication()

Deletes the application with the given ID in the path

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationManagementApi(configuration);

let body:.ApplicationManagementApiDeleteApplicationRequest = {
  // string | The id of the application being deleted
  applicationId: "applicationId_example",
};

apiInstance.deleteApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | The id of the application being deleted | defaults to undefined


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Application was successfully deleted |  -  |
**401** | Either authentication credentials were not supplied, or they were invalid. |  -  |
**403** | Forbidden from accessing the requested Application. |  -  |
**404** | Application with given id not found. |  -  |
**500** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApplicationById**
> ApiResponseOfApplicationResponse getApplicationById()

Retrieves an application by the id provided in the path

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationManagementApi(configuration);

let body:.ApplicationManagementApiGetApplicationByIdRequest = {
  // string | The id of the application being fetched
  applicationId: "applicationId_example",
};

apiInstance.getApplicationById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | The id of the application being fetched | defaults to undefined


### Return type

**ApiResponseOfApplicationResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application was successfully fetched |  -  |
**401** | Either authentication credentials were not supplied, or they were invalid. |  -  |
**403** | Forbidden from accessing the requested Application. |  -  |
**404** | Application with given id not found. |  -  |
**500** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApplicationVRPConfigurationByApplicationId**
> VrpConfiguration getApplicationVRPConfigurationByApplicationId()

Get application vrp configuration

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationManagementApi(configuration);

let body:.ApplicationManagementApiGetApplicationVRPConfigurationByApplicationIdRequest = {
  // string | The id of the application that vrp configuration being created for
  applicationId: "applicationId_example",
};

apiInstance.getApplicationVRPConfigurationByApplicationId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | The id of the application that vrp configuration being created for | defaults to undefined


### Return type

**VrpConfiguration**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application vrp configuration was successfully fetched |  -  |
**400** | There are validation errors |  -  |
**401** | Either authentication credentials were not supplied, or they were invalid. |  -  |
**403** | Forbidden from accessing the requested Application. |  -  |
**404** | VRP Configuration with given application id not found. |  -  |
**500** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchApplications**
> ApiListOfApplicationResponse searchApplications()

Retrieves sub-applications for the root application provided in the authentication token. If a sub-application is provided in the authentication token, it will return an empty list.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationManagementApi(configuration);

let body:.ApplicationManagementApiSearchApplicationsRequest = {
  // SearchApplicationsPublicFilterValuesParameter (optional)
  publicFilterValues: {
    applicationIds: [
      "applicationIds_example",
    ],
    offset: 0,
    limit: 1000,
    sort: "name",
  },
};

apiInstance.searchApplications(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicFilterValues** | **SearchApplicationsPublicFilterValuesParameter** |  | (optional) defaults to undefined


### Return type

**ApiListOfApplicationResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The sub-applications that are returned as part of the search results. |  -  |
**400** | There are validation errors |  -  |
**401** | Either authentication credentials were not supplied, or they were invalid. |  -  |
**403** | Forbidden from accessing the requested Application. |  -  |
**500** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateApplication**
> ApiResponseOfApplicationResponse updateApplication(applicationRequest)

Updates the application properties for the application with the given ID in the path

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationManagementApi(configuration);

let body:.ApplicationManagementApiUpdateApplicationRequest = {
  // string | The id of the application being updated
  applicationId: "applicationId_example",
  // ApplicationRequest | The application to update
  applicationRequest: {
    name: "name_example",
    merchantCategoryCode: "0742",
    ppcUserGroup: "WHOLESALE_FI_FI",
    callbackUrls: [
      "callbackUrls_example",
    ],
    isContractPresent: true,
  },
};

apiInstance.updateApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationRequest** | **ApplicationRequest**| The application to update |
 **applicationId** | [**string**] | The id of the application being updated | defaults to undefined


### Return type

**ApiResponseOfApplicationResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application was successfully updated |  -  |
**400** | There are validation errors |  -  |
**401** | Either authentication credentials were not supplied, or they were invalid. |  -  |
**403** | Forbidden from accessing the requested Application. |  -  |
**500** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateApplicationVRPConfigurationByApplicationId**
> void updateApplicationVRPConfigurationByApplicationId(vrpConfiguration)

Update application vrp configuration

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationManagementApi(configuration);

let body:.ApplicationManagementApiUpdateApplicationVRPConfigurationByApplicationIdRequest = {
  // string | The id of the application that vrp configuration being created for
  applicationId: "applicationId_example",
  // VrpConfiguration | The vrp configuration to create
  vrpConfiguration: null,
};

apiInstance.updateApplicationVRPConfigurationByApplicationId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vrpConfiguration** | **VrpConfiguration**| The vrp configuration to create |
 **applicationId** | [**string**] | The id of the application that vrp configuration being created for | defaults to undefined


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Application vrp configuration was successfully updated |  -  |
**400** | There are validation errors |  -  |
**401** | Either authentication credentials were not supplied, or they were invalid. |  -  |
**403** | Forbidden from accessing the requested Application. |  -  |
**404** | VRP Configuration with given application id not found. |  -  |
**500** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


