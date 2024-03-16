# .UsersApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUser**](UsersApi.md#addUser) | **POST** /users | Create User
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /users/{userUuid} | Delete User
[**getUser**](UsersApi.md#getUser) | **GET** /users/{userUuid} | Get User
[**getUsers**](UsersApi.md#getUsers) | **GET** /users | Get Users


# **addUser**
> ApplicationUser addUser(newApplicationUser)

Create a new user in your application

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiAddUserRequest = {
  // NewApplicationUser
  newApplicationUser: {
    applicationUserId: "user-234562290",
    referenceId: "referenceId_example",
  },
};

apiInstance.addUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newApplicationUser** | **NewApplicationUser**|  |


### Return type

**ApplicationUser**

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

# **deleteUser**
> ApiResponseOfUserDeleteResponse deleteUser()

Delete a user from your application along with any sub-resources (including consent resources on institution APIs if they exist)

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiDeleteUserRequest = {
  // string | __Mandatory__. The Yapily generated UUID for the user.
  userUuid: "userUuid_example",
};

apiInstance.deleteUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUuid** | [**string**] | __Mandatory__. The Yapily generated UUID for the user. | defaults to undefined


### Return type

**ApiResponseOfUserDeleteResponse**

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

# **getUser**
> ApplicationUser getUser()

Get a specific user using the user UUID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiGetUserRequest = {
  // string | __Mandatory__. The Yapily generated UUID for the user.
  userUuid: "userUuid_example",
};

apiInstance.getUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUuid** | [**string**] | __Mandatory__. The Yapily generated UUID for the user. | defaults to undefined


### Return type

**ApplicationUser**

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

# **getUsers**
> Array<ApplicationUser> getUsers()

Get all the users configured in your application

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiGetUsersRequest = {
  // Set<string> | __Optional__. Filter records based on the list of `applicationUserId` users provided. (optional)
  filterApplicationUserId: [
    "filter[applicationUserId]_example",
  ],
};

apiInstance.getUsers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterApplicationUserId** | **Set&lt;string&gt;** | __Optional__. Filter records based on the list of &#x60;applicationUserId&#x60; users provided. | (optional) defaults to undefined


### Return type

**Array<ApplicationUser>**

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


