# .NotificationsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEventSubscription**](NotificationsApi.md#createEventSubscription) | **POST** /notifications/event-subscriptions | Create Event Subscription
[**deleteEventSubscriptionById**](NotificationsApi.md#deleteEventSubscriptionById) | **DELETE** /notifications/event-subscriptions/{eventTypeId} | Delete Event Subscription
[**getEventSubscriptionById**](NotificationsApi.md#getEventSubscriptionById) | **GET** /notifications/event-subscriptions/{eventTypeId} | Get Event Subscription
[**getEventSubscriptions**](NotificationsApi.md#getEventSubscriptions) | **GET** /notifications/event-subscriptions | Get Event Subscriptions


# **createEventSubscription**
> ApiResponseOfEventSubscriptionResponse createEventSubscription(eventSubscriptionRequest)

Used to subscribe to notifications relating to a specified event type.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiCreateEventSubscriptionRequest = {
  // EventSubscriptionRequest
  eventSubscriptionRequest: {
    eventTypeId: "payment.status.completed",
    notification: {
      type: "WEBHOOK",
      url: "https://httpbin.com/new_endpoint",
    },
  },
};

apiInstance.createEventSubscription(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventSubscriptionRequest** | **EventSubscriptionRequest**|  |


### Return type

**ApiResponseOfEventSubscriptionResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Event subscription created successfully |  -  |
**400** | Bad request for missing required properties |  -  |
**401** | Unauthorized |  -  |
**409** | Event subscription already exist for the application |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteEventSubscriptionById**
> ApiResponseOfEventSubscriptionDeleteResponse deleteEventSubscriptionById()

Used to unsubscribe to notifications relating to a specified event type.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiDeleteEventSubscriptionByIdRequest = {
  // string | Unique identifier of the event type (for which notifications will be sent). 
  eventTypeId: "eventTypeId_example",
};

apiInstance.deleteEventSubscriptionById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventTypeId** | [**string**] | Unique identifier of the event type (for which notifications will be sent).  | defaults to undefined


### Return type

**ApiResponseOfEventSubscriptionDeleteResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event subscription deleted successfully |  -  |
**401** | Unauthorized |  -  |
**404** | Event subscription not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEventSubscriptionById**
> ApiResponseOfEventSubscriptionResponse getEventSubscriptionById()

Used to get details of your subscription to a specified event type.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiGetEventSubscriptionByIdRequest = {
  // string | Unique identifier of the event type (for which notifications will be sent). 
  eventTypeId: "eventTypeId_example",
};

apiInstance.getEventSubscriptionById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventTypeId** | [**string**] | Unique identifier of the event type (for which notifications will be sent).  | defaults to undefined


### Return type

**ApiResponseOfEventSubscriptionResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event subscription data found |  -  |
**401** | Unauthorized |  -  |
**404** | Event subscription not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEventSubscriptions**
> ApiListResponseOfEventSubscriptionResponse getEventSubscriptions()

Get all event subscriptions that your application is subscribed to

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:any = {};

apiInstance.getEventSubscriptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ApiListResponseOfEventSubscriptionResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event subscriptions for the application |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


