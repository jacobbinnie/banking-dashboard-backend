// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiErrorResponse } from '../models/ApiErrorResponse';
import { ApiListResponseOfVirtualAccount } from '../models/ApiListResponseOfVirtualAccount';
import { ApiListResponseOfVirtualAccountBeneficiary } from '../models/ApiListResponseOfVirtualAccountBeneficiary';
import { ApiListResponseOfVirtualAccountClient } from '../models/ApiListResponseOfVirtualAccountClient';
import { ApiListResponseOfVirtualAccountPayment } from '../models/ApiListResponseOfVirtualAccountPayment';
import { ApiListResponseOfVirtualAccountRefund } from '../models/ApiListResponseOfVirtualAccountRefund';
import { ApiResponseOfVirtualAccount } from '../models/ApiResponseOfVirtualAccount';
import { ApiResponseOfVirtualAccountBeneficiary } from '../models/ApiResponseOfVirtualAccountBeneficiary';
import { ApiResponseOfVirtualAccountClient } from '../models/ApiResponseOfVirtualAccountClient';
import { ApiResponseOfVirtualAccountPayInDetails } from '../models/ApiResponseOfVirtualAccountPayInDetails';
import { ApiResponseOfVirtualAccountPayment } from '../models/ApiResponseOfVirtualAccountPayment';
import { ApiResponseOfVirtualAccountRefund } from '../models/ApiResponseOfVirtualAccountRefund';
import { Model401VirtualAccountsApiErrorResponse } from '../models/Model401VirtualAccountsApiErrorResponse';
import { Model403VirtualAccountsApiErrorResponse } from '../models/Model403VirtualAccountsApiErrorResponse';
import { Model404VirtualAccountsApiErrorResponse } from '../models/Model404VirtualAccountsApiErrorResponse';
import { Model424VirtualAccountsApiErrorResponse } from '../models/Model424VirtualAccountsApiErrorResponse';
import { Model500VirtualAccountsApiErrorResponse } from '../models/Model500VirtualAccountsApiErrorResponse';
import { UpdateVirtualAccountRequest } from '../models/UpdateVirtualAccountRequest';
import { VirtualAccountBeneficiaryRequest } from '../models/VirtualAccountBeneficiaryRequest';
import { VirtualAccountClientRequest } from '../models/VirtualAccountClientRequest';
import { VirtualAccountPayOutRequest } from '../models/VirtualAccountPayOutRequest';
import { VirtualAccountRefundRequest } from '../models/VirtualAccountRefundRequest';
import { VirtualAccountRequest } from '../models/VirtualAccountRequest';
import { VirtualAccountTransferRequest } from '../models/VirtualAccountTransferRequest';

/**
 * no description
 */
export class VirtualAccountsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a new virtual account
     * Create Account
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountRequest 
     */
    public async createVirtualAccount(clientId: string, virtualAccountRequest: VirtualAccountRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "createVirtualAccount", "clientId");
        }


        // verify required parameter 'virtualAccountRequest' is not null or undefined
        if (virtualAccountRequest === null || virtualAccountRequest === undefined) {
            throw new RequiredError("VirtualAccountsApi", "createVirtualAccount", "virtualAccountRequest");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/accounts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(virtualAccountRequest, "VirtualAccountRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a new beneficiary (individual or business account) to which a Pay Out can be made. The beneficiary can be used from any virtual account that is held
     * Create Beneficiary
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountBeneficiaryRequest 
     */
    public async createVirtualAccountBeneficiary(clientId: string, virtualAccountBeneficiaryRequest: VirtualAccountBeneficiaryRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "createVirtualAccountBeneficiary", "clientId");
        }


        // verify required parameter 'virtualAccountBeneficiaryRequest' is not null or undefined
        if (virtualAccountBeneficiaryRequest === null || virtualAccountBeneficiaryRequest === undefined) {
            throw new RequiredError("VirtualAccountsApi", "createVirtualAccountBeneficiary", "virtualAccountBeneficiaryRequest");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/beneficiaries';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(virtualAccountBeneficiaryRequest, "VirtualAccountBeneficiaryRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a new virtual account client (individual or business client). Available for clients who have direct onboarding permissions only. Please contact your CSM to enquire about access
     * Create Virtual Account Client
     * @param clientId __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     * @param virtualAccountClientRequest 
     */
    public async createVirtualAccountClient(clientId: string, virtualAccountClientRequest: VirtualAccountClientRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "createVirtualAccountClient", "clientId");
        }


        // verify required parameter 'virtualAccountClientRequest' is not null or undefined
        if (virtualAccountClientRequest === null || virtualAccountClientRequest === undefined) {
            throw new RequiredError("VirtualAccountsApi", "createVirtualAccountClient", "virtualAccountClientRequest");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/clients';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(virtualAccountClientRequest, "VirtualAccountClientRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Initiate a payment from a specified virtual account to a previously added beneficiary using any of the schemes that it supports <br> When subscribed to virtualAccount.payOut.status notifications, further updates on payment processing status will be delivered asynchronously 
     * Create Pay Out
     * @param idempotencyKey Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountPayOutRequest 
     */
    public async createVirtualAccountPayOut(idempotencyKey: string, clientId: string, virtualAccountPayOutRequest: VirtualAccountPayOutRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'idempotencyKey' is not null or undefined
        if (idempotencyKey === null || idempotencyKey === undefined) {
            throw new RequiredError("VirtualAccountsApi", "createVirtualAccountPayOut", "idempotencyKey");
        }


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "createVirtualAccountPayOut", "clientId");
        }


        // verify required parameter 'virtualAccountPayOutRequest' is not null or undefined
        if (virtualAccountPayOutRequest === null || virtualAccountPayOutRequest === undefined) {
            throw new RequiredError("VirtualAccountsApi", "createVirtualAccountPayOut", "virtualAccountPayOutRequest");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/payments/pay-outs';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("idempotency-key", ObjectSerializer.serialize(idempotencyKey, "string", ""));

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(virtualAccountPayOutRequest, "VirtualAccountPayOutRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a refund for a payment received into a virtual account. Funds are returned to the source account. When subscribed to `virtualAccount.refund.status` notifications, updates on the refund status are delivered asynchronously.
     * Create Refund
     * @param idempotencyKey Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountRefundRequest 
     */
    public async createVirtualAccountRefund(idempotencyKey: string, clientId: string, virtualAccountRefundRequest: VirtualAccountRefundRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'idempotencyKey' is not null or undefined
        if (idempotencyKey === null || idempotencyKey === undefined) {
            throw new RequiredError("VirtualAccountsApi", "createVirtualAccountRefund", "idempotencyKey");
        }


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "createVirtualAccountRefund", "clientId");
        }


        // verify required parameter 'virtualAccountRefundRequest' is not null or undefined
        if (virtualAccountRefundRequest === null || virtualAccountRefundRequest === undefined) {
            throw new RequiredError("VirtualAccountsApi", "createVirtualAccountRefund", "virtualAccountRefundRequest");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/refunds';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("idempotency-key", ObjectSerializer.serialize(idempotencyKey, "string", ""));

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(virtualAccountRefundRequest, "VirtualAccountRefundRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a transfer between two virtual accounts
     * Create Virtual Account Transfer
     * @param idempotencyKey Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountTransferRequest 
     */
    public async createVirtualAccountTransfer(idempotencyKey: string, clientId: string, virtualAccountTransferRequest: VirtualAccountTransferRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'idempotencyKey' is not null or undefined
        if (idempotencyKey === null || idempotencyKey === undefined) {
            throw new RequiredError("VirtualAccountsApi", "createVirtualAccountTransfer", "idempotencyKey");
        }


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "createVirtualAccountTransfer", "clientId");
        }


        // verify required parameter 'virtualAccountTransferRequest' is not null or undefined
        if (virtualAccountTransferRequest === null || virtualAccountTransferRequest === undefined) {
            throw new RequiredError("VirtualAccountsApi", "createVirtualAccountTransfer", "virtualAccountTransferRequest");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/payments/transfers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("idempotency-key", ObjectSerializer.serialize(idempotencyKey, "string", ""));

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(virtualAccountTransferRequest, "VirtualAccountTransferRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete a specific beneficiary (individual or business account)
     * Delete Beneficiary
     * @param beneficiaryId __Mandatory__. The Id of the beneficiary that will be deleted
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public async deleteVirtualAccountBeneficiary(beneficiaryId: string, clientId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'beneficiaryId' is not null or undefined
        if (beneficiaryId === null || beneficiaryId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "deleteVirtualAccountBeneficiary", "beneficiaryId");
        }


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "deleteVirtualAccountBeneficiary", "clientId");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/beneficiaries/{beneficiaryId}'
            .replace('{' + 'beneficiaryId' + '}', encodeURIComponent(String(beneficiaryId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the details of a pay-in transaction
     * Get Pay-In Details
     * @param paymentId Uniquely identifies a transaction
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public async getPayInDetails(paymentId: string, clientId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'paymentId' is not null or undefined
        if (paymentId === null || paymentId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "getPayInDetails", "paymentId");
        }


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "getPayInDetails", "clientId");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/payments/{paymentId}/pay-in-details'
            .replace('{' + 'paymentId' + '}', encodeURIComponent(String(paymentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the details of a specific payment using its Id
     * Get Payment
     * @param id __Mandatory__. The id of the payment
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public async getPaymentsById(id: string, clientId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("VirtualAccountsApi", "getPaymentsById", "id");
        }


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "getPaymentsById", "clientId");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/payments/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the list of beneficiaries (individual or business account) to which a Pay Out can be made.
     * Get List Of Beneficiaries
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param cursor __Optional__. Data required to provide pagination
     */
    public async getVirtualAccountBeneficiaries(clientId: string, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "getVirtualAccountBeneficiaries", "clientId");
        }



        // Path Params
        const localVarPath = '/virtual-accounts/beneficiaries';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the details of a specific beneficiary (individual or business account) to which a Pay Out can be made from its id.
     * Get Beneficiary
     * @param beneficiaryId __Mandatory__. The Id of the requested beneficiary.
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public async getVirtualAccountBeneficiary(beneficiaryId: string, clientId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'beneficiaryId' is not null or undefined
        if (beneficiaryId === null || beneficiaryId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "getVirtualAccountBeneficiary", "beneficiaryId");
        }


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "getVirtualAccountBeneficiary", "clientId");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/beneficiaries/{beneficiaryId}'
            .replace('{' + 'beneficiaryId' + '}', encodeURIComponent(String(beneficiaryId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the details of a specific account using its Id
     * Get Account
     * @param accountId __Mandatory__. The Id of the account.
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public async getVirtualAccountById(accountId: string, clientId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "getVirtualAccountById", "accountId");
        }


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "getVirtualAccountById", "clientId");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/accounts/{accountId}'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a Virtual Account Client using its ID. Restricted to applications with direct onboarding permissions only
     * Get a Virtual Account Client by ID
     * @param clientId __Mandatory__. The ID of the client.
     * @param clientId2 __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     */
    public async getVirtualAccountClientById(clientId: string, clientId2: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "getVirtualAccountClientById", "clientId");
        }


        // verify required parameter 'clientId2' is not null or undefined
        if (clientId2 === null || clientId2 === undefined) {
            throw new RequiredError("VirtualAccountsApi", "getVirtualAccountClientById", "clientId2");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/clients/{clientId}'
            .replace('{' + 'clientId' + '}', encodeURIComponent(String(clientId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId2, "string", "uuid"));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Virtual Account Clients (individual or business client).
     * Get List of Virtual Account Clients
     * @param clientId __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     * @param type __Optional__.  Filter clients based on client type. One of BUSINESS or INDIVIDUAL
     * @param status __Optional__.  Filter clients based on client status. One of ACTIVE, PENDING or SUSPENDED
     * @param cursor __Optional__. Data required to provide pagination
     */
    public async getVirtualAccountClients(clientId: string, type?: string, status?: string, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "getVirtualAccountClients", "clientId");
        }





        // Path Params
        const localVarPath = '/virtual-accounts/clients';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "string", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "string", ""));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve a list of virtual account payments
     * Get Payments
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param accountId __Optional__. Filter payments based on accountId
     * @param createdDateTimeFrom __Optional__. Filter payments based on the createdDateTime
     * @param createdDateTimeTo __Optional__. Filter payments based on the createdDateTime
     * @param status __Optional__. Filter payments based on the payment status. One of INITIATED, PENDING, PROCESSING, COMPLETED, FAILED
     * @param type __Optional__. Filter payments based on the payment type. One of PAY_IN, PAY_OUT, RETURN_IN, RETURN_OUT
     * @param cursor __Optional__. Data required to provide pagination
     */
    public async getVirtualAccountPayments(clientId: string, accountId?: string, createdDateTimeFrom?: Date, createdDateTimeTo?: Date, status?: Array<string>, type?: Array<string>, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "getVirtualAccountPayments", "clientId");
        }








        // Path Params
        const localVarPath = '/virtual-accounts/payments';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (accountId !== undefined) {
            requestContext.setQueryParam("accountId", ObjectSerializer.serialize(accountId, "string", ""));
        }

        // Query Params
        if (createdDateTimeFrom !== undefined) {
            requestContext.setQueryParam("createdDateTimeFrom", ObjectSerializer.serialize(createdDateTimeFrom, "Date", "date-time"));
        }

        // Query Params
        if (createdDateTimeTo !== undefined) {
            requestContext.setQueryParam("createdDateTimeTo", ObjectSerializer.serialize(createdDateTimeTo, "Date", "date-time"));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<string>", ""));
        }

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "Array<string>", ""));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the details of a refund by its ID
     * Get Refund By Id
     * @param id __Mandatory__. The id of the refund
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public async getVirtualAccountRefundById(id: string, clientId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("VirtualAccountsApi", "getVirtualAccountRefundById", "id");
        }


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "getVirtualAccountRefundById", "clientId");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/refunds/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve a list of refunds
     * Get list of refunds
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param paymentInitiationId __Optional__. Filter refunds based on unique ID of the original payment
     * @param status __Optional__.  Filter refunds based on refund status. One of INITIATED, SCHEDULED, PROCESSING, COMPLETED, FAILED
     * @param createdDateTimeAfter __Optional__.  Filter to get refunds created on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ)
     * @param createdDateTimeBefore __Optional__.  Filter to get refunds created on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ)
     * @param cursor __Optional__. Encoded pagination cursor to fetch next page
     */
    public async getVirtualAccountRefunds(clientId: string, paymentInitiationId?: string, status?: string, createdDateTimeAfter?: Date, createdDateTimeBefore?: Date, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "getVirtualAccountRefunds", "clientId");
        }







        // Path Params
        const localVarPath = '/virtual-accounts/refunds';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (paymentInitiationId !== undefined) {
            requestContext.setQueryParam("paymentInitiationId", ObjectSerializer.serialize(paymentInitiationId, "string", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "string", ""));
        }

        // Query Params
        if (createdDateTimeAfter !== undefined) {
            requestContext.setQueryParam("createdDateTimeAfter", ObjectSerializer.serialize(createdDateTimeAfter, "Date", "date-time"));
        }

        // Query Params
        if (createdDateTimeBefore !== undefined) {
            requestContext.setQueryParam("createdDateTimeBefore", ObjectSerializer.serialize(createdDateTimeBefore, "Date", "date-time"));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve a list of all virtual accounts held
     * Get Accounts
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param nickname __Optional__. Filter accounts based on reference provided in order to help with identification of the account
     * @param currency __Optional__. Filter accounts based on three-letter ISO 4217 currency code
     * @param status __Optional__. Filter accounts based on their current state. One of PENDING, ACTIVE, FAILED, SUSPENDED or CLOSED
     * @param cursor __Optional__. Data required to provide pagination
     */
    public async getVirtualAccounts(clientId: string, nickname?: string, currency?: string, status?: string, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "getVirtualAccounts", "clientId");
        }






        // Path Params
        const localVarPath = '/virtual-accounts/accounts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (nickname !== undefined) {
            requestContext.setQueryParam("nickname", ObjectSerializer.serialize(nickname, "string", ""));
        }

        // Query Params
        if (currency !== undefined) {
            requestContext.setQueryParam("currency", ObjectSerializer.serialize(currency, "string", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "string", ""));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update the details of a specific account using its Id
     * Update Account
     * @param accountId __Mandatory__. The Id of the account.
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param updateVirtualAccountRequest 
     */
    public async updateVirtualAccountById(accountId: string, clientId: string, updateVirtualAccountRequest: UpdateVirtualAccountRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "updateVirtualAccountById", "accountId");
        }


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("VirtualAccountsApi", "updateVirtualAccountById", "clientId");
        }


        // verify required parameter 'updateVirtualAccountRequest' is not null or undefined
        if (updateVirtualAccountRequest === null || updateVirtualAccountRequest === undefined) {
            throw new RequiredError("VirtualAccountsApi", "updateVirtualAccountById", "updateVirtualAccountRequest");
        }


        // Path Params
        const localVarPath = '/virtual-accounts/accounts/{accountId}'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("client-id", ObjectSerializer.serialize(clientId, "string", "uuid"));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateVirtualAccountRequest, "UpdateVirtualAccountRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class VirtualAccountsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVirtualAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVirtualAccountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccount >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccount", ""
            ) as ApiResponseOfVirtualAccount;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfVirtualAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccount", ""
            ) as ApiResponseOfVirtualAccount;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVirtualAccountBeneficiary
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVirtualAccountBeneficiaryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccountBeneficiary >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountBeneficiary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountBeneficiary", ""
            ) as ApiResponseOfVirtualAccountBeneficiary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountBeneficiary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountBeneficiary", ""
            ) as ApiResponseOfVirtualAccountBeneficiary;
            throw new ApiException<ApiResponseOfVirtualAccountBeneficiary>(response.httpStatusCode, "Conflict with another beneficiary with same account identifications", body, response.headers);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfVirtualAccountBeneficiary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountBeneficiary", ""
            ) as ApiResponseOfVirtualAccountBeneficiary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVirtualAccountClient
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVirtualAccountClientWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccountClient >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountClient = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountClient", ""
            ) as ApiResponseOfVirtualAccountClient;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfVirtualAccountClient = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountClient", ""
            ) as ApiResponseOfVirtualAccountClient;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVirtualAccountPayOut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVirtualAccountPayOutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccountPayment >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountPayment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountPayment", ""
            ) as ApiResponseOfVirtualAccountPayment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfVirtualAccountPayment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountPayment", ""
            ) as ApiResponseOfVirtualAccountPayment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVirtualAccountRefund
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVirtualAccountRefundWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccountRefund >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountRefund = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountRefund", ""
            ) as ApiResponseOfVirtualAccountRefund;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfVirtualAccountRefund = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountRefund", ""
            ) as ApiResponseOfVirtualAccountRefund;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVirtualAccountTransfer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVirtualAccountTransferWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccountPayment >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountPayment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountPayment", ""
            ) as ApiResponseOfVirtualAccountPayment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfVirtualAccountPayment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountPayment", ""
            ) as ApiResponseOfVirtualAccountPayment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteVirtualAccountBeneficiary
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteVirtualAccountBeneficiaryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Not Found. Requested beneficiary is not found", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPayInDetails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPayInDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccountPayInDetails >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountPayInDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountPayInDetails", ""
            ) as ApiResponseOfVirtualAccountPayInDetails;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Model404VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model404VirtualAccountsApiErrorResponse", ""
            ) as Model404VirtualAccountsApiErrorResponse;
            throw new ApiException<Model404VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Not Found. Requested beneficiary is not found.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfVirtualAccountPayInDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountPayInDetails", ""
            ) as ApiResponseOfVirtualAccountPayInDetails;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPaymentsById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPaymentsByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccountPayment >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountPayment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountPayment", ""
            ) as ApiResponseOfVirtualAccountPayment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Model404VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model404VirtualAccountsApiErrorResponse", ""
            ) as Model404VirtualAccountsApiErrorResponse;
            throw new ApiException<Model404VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Not Found. Requested payment is not found.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfVirtualAccountPayment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountPayment", ""
            ) as ApiResponseOfVirtualAccountPayment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVirtualAccountBeneficiaries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVirtualAccountBeneficiariesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListResponseOfVirtualAccountBeneficiary >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListResponseOfVirtualAccountBeneficiary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfVirtualAccountBeneficiary", ""
            ) as ApiListResponseOfVirtualAccountBeneficiary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiListResponseOfVirtualAccountBeneficiary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfVirtualAccountBeneficiary", ""
            ) as ApiListResponseOfVirtualAccountBeneficiary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVirtualAccountBeneficiary
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVirtualAccountBeneficiaryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccountBeneficiary >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountBeneficiary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountBeneficiary", ""
            ) as ApiResponseOfVirtualAccountBeneficiary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Model404VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model404VirtualAccountsApiErrorResponse", ""
            ) as Model404VirtualAccountsApiErrorResponse;
            throw new ApiException<Model404VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Not Found. Requested beneficiary is not found.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfVirtualAccountBeneficiary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountBeneficiary", ""
            ) as ApiResponseOfVirtualAccountBeneficiary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVirtualAccountById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVirtualAccountByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccount >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccount", ""
            ) as ApiResponseOfVirtualAccount;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Model404VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model404VirtualAccountsApiErrorResponse", ""
            ) as Model404VirtualAccountsApiErrorResponse;
            throw new ApiException<Model404VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Not Found. Resource requested is not found.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfVirtualAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccount", ""
            ) as ApiResponseOfVirtualAccount;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVirtualAccountClientById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVirtualAccountClientByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccountClient >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountClient = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountClient", ""
            ) as ApiResponseOfVirtualAccountClient;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Model404VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model404VirtualAccountsApiErrorResponse", ""
            ) as Model404VirtualAccountsApiErrorResponse;
            throw new ApiException<Model404VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Not Found. Resource requested is not found.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfVirtualAccountClient = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountClient", ""
            ) as ApiResponseOfVirtualAccountClient;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVirtualAccountClients
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVirtualAccountClientsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListResponseOfVirtualAccountClient >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListResponseOfVirtualAccountClient = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfVirtualAccountClient", ""
            ) as ApiListResponseOfVirtualAccountClient;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "A failure occured during interaction with a third party provider", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Unexpected Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiListResponseOfVirtualAccountClient = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfVirtualAccountClient", ""
            ) as ApiListResponseOfVirtualAccountClient;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVirtualAccountPayments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVirtualAccountPaymentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListResponseOfVirtualAccountPayment >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListResponseOfVirtualAccountPayment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfVirtualAccountPayment", ""
            ) as ApiListResponseOfVirtualAccountPayment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiListResponseOfVirtualAccountPayment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfVirtualAccountPayment", ""
            ) as ApiListResponseOfVirtualAccountPayment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVirtualAccountRefundById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVirtualAccountRefundByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccountRefund >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccountRefund = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountRefund", ""
            ) as ApiResponseOfVirtualAccountRefund;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfVirtualAccountRefund = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccountRefund", ""
            ) as ApiResponseOfVirtualAccountRefund;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVirtualAccountRefunds
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVirtualAccountRefundsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListResponseOfVirtualAccountRefund >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListResponseOfVirtualAccountRefund = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfVirtualAccountRefund", ""
            ) as ApiListResponseOfVirtualAccountRefund;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiListResponseOfVirtualAccountRefund = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfVirtualAccountRefund", ""
            ) as ApiListResponseOfVirtualAccountRefund;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVirtualAccounts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVirtualAccountsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiListResponseOfVirtualAccount >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiListResponseOfVirtualAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfVirtualAccount", ""
            ) as ApiListResponseOfVirtualAccount;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiListResponseOfVirtualAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiListResponseOfVirtualAccount", ""
            ) as ApiListResponseOfVirtualAccount;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateVirtualAccountById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateVirtualAccountByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponseOfVirtualAccount >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponseOfVirtualAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccount", ""
            ) as ApiResponseOfVirtualAccount;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorResponse", ""
            ) as ApiErrorResponse;
            throw new ApiException<ApiErrorResponse>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model401VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model401VirtualAccountsApiErrorResponse", ""
            ) as Model401VirtualAccountsApiErrorResponse;
            throw new ApiException<Model401VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unauthorised. Credentials are missing or invalid", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model403VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model403VirtualAccountsApiErrorResponse", ""
            ) as Model403VirtualAccountsApiErrorResponse;
            throw new ApiException<Model403VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Forbidden. Permission to access this endpoint is not granted.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Model404VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model404VirtualAccountsApiErrorResponse", ""
            ) as Model404VirtualAccountsApiErrorResponse;
            throw new ApiException<Model404VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Not Found. Resource requested is not found.", body, response.headers);
        }
        if (isCodeInRange("424", response.httpStatusCode)) {
            const body: Model424VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model424VirtualAccountsApiErrorResponse", ""
            ) as Model424VirtualAccountsApiErrorResponse;
            throw new ApiException<Model424VirtualAccountsApiErrorResponse>(response.httpStatusCode, "A failure occurred during an interaction with a third party provider.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model500VirtualAccountsApiErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model500VirtualAccountsApiErrorResponse", ""
            ) as Model500VirtualAccountsApiErrorResponse;
            throw new ApiException<Model500VirtualAccountsApiErrorResponse>(response.httpStatusCode, "Unexpected Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiResponseOfVirtualAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponseOfVirtualAccount", ""
            ) as ApiResponseOfVirtualAccount;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
