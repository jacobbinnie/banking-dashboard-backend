import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Account } from '../models/Account';
import { AccountApiListResponse } from '../models/AccountApiListResponse';
import { AccountAuthorisationRequest } from '../models/AccountAuthorisationRequest';
import { AccountAuthorisationResponse } from '../models/AccountAuthorisationResponse';
import { AccountBalance } from '../models/AccountBalance';
import { AccountBalanceType } from '../models/AccountBalanceType';
import { AccountIdentification } from '../models/AccountIdentification';
import { AccountIdentificationResponse } from '../models/AccountIdentificationResponse';
import { AccountIdentificationType } from '../models/AccountIdentificationType';
import { AccountIdentificationTypeResponse } from '../models/AccountIdentificationTypeResponse';
import { AccountInfo } from '../models/AccountInfo';
import { AccountName } from '../models/AccountName';
import { AccountRequest } from '../models/AccountRequest';
import { AccountStatement } from '../models/AccountStatement';
import { AccountType } from '../models/AccountType';
import { Address } from '../models/Address';
import { AddressDetails } from '../models/AddressDetails';
import { AddressResponse } from '../models/AddressResponse';
import { AddressTypeEnum } from '../models/AddressTypeEnum';
import { AddressTypeEnumResponse } from '../models/AddressTypeEnumResponse';
import { AlignmentEnum } from '../models/AlignmentEnum';
import { Amount } from '../models/Amount';
import { AmountDetailsResponse } from '../models/AmountDetailsResponse';
import { ApiError } from '../models/ApiError';
import { ApiErrorResponse } from '../models/ApiErrorResponse';
import { ApiListOfApplicationResponse } from '../models/ApiListOfApplicationResponse';
import { ApiListResponseOfAccountStatement } from '../models/ApiListResponseOfAccountStatement';
import { ApiListResponseOfBeneficiary } from '../models/ApiListResponseOfBeneficiary';
import { ApiListResponseOfCategory } from '../models/ApiListResponseOfCategory';
import { ApiListResponseOfConsent } from '../models/ApiListResponseOfConsent';
import { ApiListResponseOfDataConstraints } from '../models/ApiListResponseOfDataConstraints';
import { ApiListResponseOfDirectDebitResponse } from '../models/ApiListResponseOfDirectDebitResponse';
import { ApiListResponseOfEventSubscriptionResponse } from '../models/ApiListResponseOfEventSubscriptionResponse';
import { ApiListResponseOfFeatureDetails } from '../models/ApiListResponseOfFeatureDetails';
import { ApiListResponseOfInstitution } from '../models/ApiListResponseOfInstitution';
import { ApiListResponseOfPaymentConstraints } from '../models/ApiListResponseOfPaymentConstraints';
import { ApiListResponseOfPaymentResponse } from '../models/ApiListResponseOfPaymentResponse';
import { ApiListResponseOfRealTimeTransaction } from '../models/ApiListResponseOfRealTimeTransaction';
import { ApiListResponseOfRealTimeTransactionLinks } from '../models/ApiListResponseOfRealTimeTransactionLinks';
import { ApiListResponseOfTransaction } from '../models/ApiListResponseOfTransaction';
import { ApiListResponseOfVirtualAccount } from '../models/ApiListResponseOfVirtualAccount';
import { ApiListResponseOfVirtualAccountBeneficiary } from '../models/ApiListResponseOfVirtualAccountBeneficiary';
import { ApiListResponseOfVirtualAccountClient } from '../models/ApiListResponseOfVirtualAccountClient';
import { ApiListResponseOfVirtualAccountPayment } from '../models/ApiListResponseOfVirtualAccountPayment';
import { ApiListResponseOfVirtualAccountRefund } from '../models/ApiListResponseOfVirtualAccountRefund';
import { ApiListResponseOfVirtualAccountRefundLinks } from '../models/ApiListResponseOfVirtualAccountRefundLinks';
import { ApiResponseError } from '../models/ApiResponseError';
import { ApiResponseOfAccount } from '../models/ApiResponseOfAccount';
import { ApiResponseOfAccountAuthorisationResponse } from '../models/ApiResponseOfAccountAuthorisationResponse';
import { ApiResponseOfAccountStatement } from '../models/ApiResponseOfAccountStatement';
import { ApiResponseOfApplicationResponse } from '../models/ApiResponseOfApplicationResponse';
import { ApiResponseOfBalances } from '../models/ApiResponseOfBalances';
import { ApiResponseOfConsent } from '../models/ApiResponseOfConsent';
import { ApiResponseOfConsentDeleteResponse } from '../models/ApiResponseOfConsentDeleteResponse';
import { ApiResponseOfCreateHostedPaymentRequest } from '../models/ApiResponseOfCreateHostedPaymentRequest';
import { ApiResponseOfCreateHostedPaymentRequestLink } from '../models/ApiResponseOfCreateHostedPaymentRequestLink';
import { ApiResponseOfCreateHostedVRPConsentRequest } from '../models/ApiResponseOfCreateHostedVRPConsentRequest';
import { ApiResponseOfCreateHostedVRPPaymentRequest } from '../models/ApiResponseOfCreateHostedVRPPaymentRequest';
import { ApiResponseOfEmbeddedAccountAuthorisationResponse } from '../models/ApiResponseOfEmbeddedAccountAuthorisationResponse';
import { ApiResponseOfEventSubscriptionDeleteResponse } from '../models/ApiResponseOfEventSubscriptionDeleteResponse';
import { ApiResponseOfEventSubscriptionResponse } from '../models/ApiResponseOfEventSubscriptionResponse';
import { ApiResponseOfFinancialProfile } from '../models/ApiResponseOfFinancialProfile';
import { ApiResponseOfFinancialProfileAuthorisationResponse } from '../models/ApiResponseOfFinancialProfileAuthorisationResponse';
import { ApiResponseOfFinancialProfileBalancePrediction } from '../models/ApiResponseOfFinancialProfileBalancePrediction';
import { ApiResponseOfFinancialProfileConsent } from '../models/ApiResponseOfFinancialProfileConsent';
import { ApiResponseOfFinancialProfileConsentRemoveResponse } from '../models/ApiResponseOfFinancialProfileConsentRemoveResponse';
import { ApiResponseOfFundsConfirmationResponse } from '../models/ApiResponseOfFundsConfirmationResponse';
import { ApiResponseOfGetHostedPaymentRequest } from '../models/ApiResponseOfGetHostedPaymentRequest';
import { ApiResponseOfGetHostedVRPConsentRequest } from '../models/ApiResponseOfGetHostedVRPConsentRequest';
import { ApiResponseOfGetHostedVRPConsentsRequest } from '../models/ApiResponseOfGetHostedVRPConsentsRequest';
import { ApiResponseOfGetHostedVRPPaymentRequest } from '../models/ApiResponseOfGetHostedVRPPaymentRequest';
import { ApiResponseOfIdentity } from '../models/ApiResponseOfIdentity';
import { ApiResponseOfNonSweepingAuthorisationResponse } from '../models/ApiResponseOfNonSweepingAuthorisationResponse';
import { ApiResponseOfPaymentAuthorisationRequestResponse } from '../models/ApiResponseOfPaymentAuthorisationRequestResponse';
import { ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse } from '../models/ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse';
import { ApiResponseOfPaymentResponse } from '../models/ApiResponseOfPaymentResponse';
import { ApiResponseOfPaymentResponses } from '../models/ApiResponseOfPaymentResponses';
import { ApiResponseOfPreAuthorisationResponse } from '../models/ApiResponseOfPreAuthorisationResponse';
import { ApiResponseOfRevokeHostedVRPConsentRequest } from '../models/ApiResponseOfRevokeHostedVRPConsentRequest';
import { ApiResponseOfSubmissionResponse } from '../models/ApiResponseOfSubmissionResponse';
import { ApiResponseOfSweepingAuthorisationResponse } from '../models/ApiResponseOfSweepingAuthorisationResponse';
import { ApiResponseOfUserDeleteResponse } from '../models/ApiResponseOfUserDeleteResponse';
import { ApiResponseOfVirtualAccount } from '../models/ApiResponseOfVirtualAccount';
import { ApiResponseOfVirtualAccountBeneficiary } from '../models/ApiResponseOfVirtualAccountBeneficiary';
import { ApiResponseOfVirtualAccountClient } from '../models/ApiResponseOfVirtualAccountClient';
import { ApiResponseOfVirtualAccountPayInDetails } from '../models/ApiResponseOfVirtualAccountPayInDetails';
import { ApiResponseOfVirtualAccountPayment } from '../models/ApiResponseOfVirtualAccountPayment';
import { ApiResponseOfVirtualAccountRefund } from '../models/ApiResponseOfVirtualAccountRefund';
import { Application } from '../models/Application';
import { ApplicationRequest } from '../models/ApplicationRequest';
import { ApplicationResponse } from '../models/ApplicationResponse';
import { ApplicationResponseListMeta } from '../models/ApplicationResponseListMeta';
import { ApplicationResponseListMetaPagination } from '../models/ApplicationResponseListMetaPagination';
import { ApplicationResponseListMetaPaginationSelf } from '../models/ApplicationResponseListMetaPaginationSelf';
import { ApplicationUser } from '../models/ApplicationUser';
import { AuthorisationStatus } from '../models/AuthorisationStatus';
import { BalancePredictionProfile } from '../models/BalancePredictionProfile';
import { Balances } from '../models/Balances';
import { Beneficiary } from '../models/Beneficiary';
import { BeneficiaryPayee } from '../models/BeneficiaryPayee';
import { BulkPaymentAuthorisationRequest } from '../models/BulkPaymentAuthorisationRequest';
import { BulkPaymentEmbeddedAuthorisationRequest } from '../models/BulkPaymentEmbeddedAuthorisationRequest';
import { BulkPaymentRequest } from '../models/BulkPaymentRequest';
import { Categorisation } from '../models/Categorisation';
import { Category } from '../models/Category';
import { ChargeBearerType } from '../models/ChargeBearerType';
import { ComplianceData } from '../models/ComplianceData';
import { ComplianceDataAddress } from '../models/ComplianceDataAddress';
import { ComplianceDataBusiness } from '../models/ComplianceDataBusiness';
import { ComplianceDataIndividual } from '../models/ComplianceDataIndividual';
import { ComplianceDataPayer } from '../models/ComplianceDataPayer';
import { Consent } from '../models/Consent';
import { ConsentAuthCodeRequest } from '../models/ConsentAuthCodeRequest';
import { ConsentDeleteResponse } from '../models/ConsentDeleteResponse';
import { ConsolidatedAccountInformation } from '../models/ConsolidatedAccountInformation';
import { Country } from '../models/Country';
import { CreateHostedPaymentRequest } from '../models/CreateHostedPaymentRequest';
import { CreateHostedPaymentRequestLink } from '../models/CreateHostedPaymentRequestLink';
import { CreateHostedVRPConsentRequest } from '../models/CreateHostedVRPConsentRequest';
import { CreateHostedVRPPaymentRequest } from '../models/CreateHostedVRPPaymentRequest';
import { CredentialsType } from '../models/CredentialsType';
import { CreditLine } from '../models/CreditLine';
import { CreditLineType } from '../models/CreditLineType';
import { CurrencyExchange } from '../models/CurrencyExchange';
import { DataConstraintsResponse } from '../models/DataConstraintsResponse';
import { DeleteStatusEnum } from '../models/DeleteStatusEnum';
import { DirectDebitPayee } from '../models/DirectDebitPayee';
import { DirectDebitResponse } from '../models/DirectDebitResponse';
import { EmbeddedAccountAuthorisationRequest } from '../models/EmbeddedAccountAuthorisationRequest';
import { EmbeddedAccountAuthorisationResponse } from '../models/EmbeddedAccountAuthorisationResponse';
import { EnrichedBalances } from '../models/EnrichedBalances';
import { EnrichedHistoricBalance } from '../models/EnrichedHistoricBalance';
import { EnrichedPredictedBalance } from '../models/EnrichedPredictedBalance';
import { EnrichedTransaction } from '../models/EnrichedTransaction';
import { EnrichedWrapper } from '../models/EnrichedWrapper';
import { Enrichment } from '../models/Enrichment';
import { EnrichmentMerchant } from '../models/EnrichmentMerchant';
import { EnumError } from '../models/EnumError';
import { EnvironmentType } from '../models/EnvironmentType';
import { ErrorDetails } from '../models/ErrorDetails';
import { ErrorIssue } from '../models/ErrorIssue';
import { EventSubscriptionDeleteResponse } from '../models/EventSubscriptionDeleteResponse';
import { EventSubscriptionRequest } from '../models/EventSubscriptionRequest';
import { EventSubscriptionResponse } from '../models/EventSubscriptionResponse';
import { ExchangeRateInformation } from '../models/ExchangeRateInformation';
import { ExchangeRateInformationResponse } from '../models/ExchangeRateInformationResponse';
import { ExtendConsentRequest } from '../models/ExtendConsentRequest';
import { FeatureDetails } from '../models/FeatureDetails';
import { FeatureEnum } from '../models/FeatureEnum';
import { FilterAndSort } from '../models/FilterAndSort';
import { FilteredClientPayloadListAccount } from '../models/FilteredClientPayloadListAccount';
import { FilteredClientPayloadListAccountStatement } from '../models/FilteredClientPayloadListAccountStatement';
import { FilteredClientPayloadListCategory } from '../models/FilteredClientPayloadListCategory';
import { FilteredClientPayloadListConsent } from '../models/FilteredClientPayloadListConsent';
import { FilteredClientPayloadListDirectDebitResponse } from '../models/FilteredClientPayloadListDirectDebitResponse';
import { FilteredClientPayloadListFeatureDetails } from '../models/FilteredClientPayloadListFeatureDetails';
import { FilteredClientPayloadListInstitution } from '../models/FilteredClientPayloadListInstitution';
import { FilteredClientPayloadListPaymentResponse } from '../models/FilteredClientPayloadListPaymentResponse';
import { FilteredClientPayloadListTransaction } from '../models/FilteredClientPayloadListTransaction';
import { FinancialProfile } from '../models/FinancialProfile';
import { FrequencyEnum } from '../models/FrequencyEnum';
import { FrequencyEnumExtended } from '../models/FrequencyEnumExtended';
import { FrequencyRequest } from '../models/FrequencyRequest';
import { FrequencyResponse } from '../models/FrequencyResponse';
import { FundsAvailable } from '../models/FundsAvailable';
import { FundsConfirmationRequest } from '../models/FundsConfirmationRequest';
import { FundsConfirmationResponse } from '../models/FundsConfirmationResponse';
import { GetHostedVRPConsentsResponseInner } from '../models/GetHostedVRPConsentsResponseInner';
import { HostedAmountDetails } from '../models/HostedAmountDetails';
import { HostedNonSweepingPeriodicLimits } from '../models/HostedNonSweepingPeriodicLimits';
import { HostedPayment } from '../models/HostedPayment';
import { HostedPaymentDetails } from '../models/HostedPaymentDetails';
import { HostedPaymentIsoStatus } from '../models/HostedPaymentIsoStatus';
import { HostedPaymentPhase } from '../models/HostedPaymentPhase';
import { HostedPaymentRequestDetails } from '../models/HostedPaymentRequestDetails';
import { HostedPaymentRequestDetailsLink } from '../models/HostedPaymentRequestDetailsLink';
import { HostedPaymentRequestResponse } from '../models/HostedPaymentRequestResponse';
import { HostedPaymentResponseDetails } from '../models/HostedPaymentResponseDetails';
import { HostedPaymentStatusDetails } from '../models/HostedPaymentStatusDetails';
import { HostedVRPConsentDetails } from '../models/HostedVRPConsentDetails';
import { HostedVRPConsentRequestResponse } from '../models/HostedVRPConsentRequestResponse';
import { HostedVRPLimits } from '../models/HostedVRPLimits';
import { HostedVRPLimitsRequest } from '../models/HostedVRPLimitsRequest';
import { HostedVRPPaymentResponse } from '../models/HostedVRPPaymentResponse';
import { HostedVRPPhase } from '../models/HostedVRPPhase';
import { HostedVrpAccountIdentification } from '../models/HostedVrpAccountIdentification';
import { HostedVrpPayerResponse } from '../models/HostedVrpPayerResponse';
import { HostedVrpRefundAccount } from '../models/HostedVrpRefundAccount';
import { Identity } from '../models/Identity';
import { IdentityAddress } from '../models/IdentityAddress';
import { InitiationDetails } from '../models/InitiationDetails';
import { Institution } from '../models/Institution';
import { InstitutionConsent } from '../models/InstitutionConsent';
import { InstitutionError } from '../models/InstitutionError';
import { InstitutionIdentifiers } from '../models/InstitutionIdentifiers';
import { InstitutionIdentifiersResponse } from '../models/InstitutionIdentifiersResponse';
import { InternationalPaymentRequest } from '../models/InternationalPaymentRequest';
import { IsoBankTransactionCode } from '../models/IsoBankTransactionCode';
import { IsoCodeDetails } from '../models/IsoCodeDetails';
import { Links } from '../models/Links';
import { Media } from '../models/Media';
import { Merchant } from '../models/Merchant';
import { Model401VirtualAccountsApiErrorResponse } from '../models/Model401VirtualAccountsApiErrorResponse';
import { Model403VirtualAccountsApiErrorResponse } from '../models/Model403VirtualAccountsApiErrorResponse';
import { Model404VirtualAccountsApiErrorResponse } from '../models/Model404VirtualAccountsApiErrorResponse';
import { Model424VirtualAccountsApiErrorResponse } from '../models/Model424VirtualAccountsApiErrorResponse';
import { Model500VirtualAccountsApiErrorResponse } from '../models/Model500VirtualAccountsApiErrorResponse';
import { MonitoringEndpointStatus } from '../models/MonitoringEndpointStatus';
import { MonitoringFeatureStatus } from '../models/MonitoringFeatureStatus';
import { MonitoringStatusEnum } from '../models/MonitoringStatusEnum';
import { MultiAuthorisation } from '../models/MultiAuthorisation';
import { NewApplicationUser } from '../models/NewApplicationUser';
import { Next } from '../models/Next';
import { NonSweepingAuthorisationRequest } from '../models/NonSweepingAuthorisationRequest';
import { NonSweepingAuthorisationResponse } from '../models/NonSweepingAuthorisationResponse';
import { NonSweepingControlParameters } from '../models/NonSweepingControlParameters';
import { NonSweepingPeriodicLimits } from '../models/NonSweepingPeriodicLimits';
import { Notification } from '../models/Notification';
import { OneTimeTokenRequest } from '../models/OneTimeTokenRequest';
import { Pagination } from '../models/Pagination';
import { Payee } from '../models/Payee';
import { PayeeDetails } from '../models/PayeeDetails';
import { PayeeDetailsResponse } from '../models/PayeeDetailsResponse';
import { Payer } from '../models/Payer';
import { PayerDetails } from '../models/PayerDetails';
import { PayerDetailsResponse } from '../models/PayerDetailsResponse';
import { PaymentAuthorisationRequest } from '../models/PaymentAuthorisationRequest';
import { PaymentAuthorisationRequestResponse } from '../models/PaymentAuthorisationRequestResponse';
import { PaymentChargeDetails } from '../models/PaymentChargeDetails';
import { PaymentConstraintsResponse } from '../models/PaymentConstraintsResponse';
import { PaymentContextType } from '../models/PaymentContextType';
import { PaymentContextTypeResponse } from '../models/PaymentContextTypeResponse';
import { PaymentEmbeddedAuthorisationRequest } from '../models/PaymentEmbeddedAuthorisationRequest';
import { PaymentEmbeddedAuthorisationRequestResponse } from '../models/PaymentEmbeddedAuthorisationRequestResponse';
import { PaymentIsoStatus } from '../models/PaymentIsoStatus';
import { PaymentIsoStatusCodeEnum } from '../models/PaymentIsoStatusCodeEnum';
import { PaymentPreAuthorisationRequest } from '../models/PaymentPreAuthorisationRequest';
import { PaymentRequest } from '../models/PaymentRequest';
import { PaymentResponse } from '../models/PaymentResponse';
import { PaymentResponses } from '../models/PaymentResponses';
import { PaymentRisk } from '../models/PaymentRisk';
import { PaymentStatus } from '../models/PaymentStatus';
import { PaymentStatusDetails } from '../models/PaymentStatusDetails';
import { PaymentType } from '../models/PaymentType';
import { PaymentTypeOfConstraints } from '../models/PaymentTypeOfConstraints';
import { PaymentTypeResponse } from '../models/PaymentTypeResponse';
import { PeriodicPaymentRequest } from '../models/PeriodicPaymentRequest';
import { PreAuthorisationRequest } from '../models/PreAuthorisationRequest';
import { PreAuthorisationResponse } from '../models/PreAuthorisationResponse';
import { PriorityCodeEnum } from '../models/PriorityCodeEnum';
import { ProfileConsent } from '../models/ProfileConsent';
import { ProprietaryBankTransactionCode } from '../models/ProprietaryBankTransactionCode';
import { RateTypeEnum } from '../models/RateTypeEnum';
import { RawRequest } from '../models/RawRequest';
import { RawResponse } from '../models/RawResponse';
import { RealTimeTransaction } from '../models/RealTimeTransaction';
import { RedirectRequest } from '../models/RedirectRequest';
import { RefundAccount } from '../models/RefundAccount';
import { RequestConstraints } from '../models/RequestConstraints';
import { ResponseForwardedData } from '../models/ResponseForwardedData';
import { ResponseListMeta } from '../models/ResponseListMeta';
import { ResponseMeta } from '../models/ResponseMeta';
import { ResponseMetaWithCount } from '../models/ResponseMetaWithCount';
import { ScaMethod } from '../models/ScaMethod';
import { Schema } from '../models/Schema';
import { SchemaType } from '../models/SchemaType';
import { SchemaXYapilyAnnotations } from '../models/SchemaXYapilyAnnotations';
import { SchemaXYapilyValidations } from '../models/SchemaXYapilyValidations';
import { SearchApplicationsPublicFilterValuesParameter } from '../models/SearchApplicationsPublicFilterValuesParameter';
import { SortEnum } from '../models/SortEnum';
import { StatementReference } from '../models/StatementReference';
import { Subcategory } from '../models/Subcategory';
import { SubmissionDetails } from '../models/SubmissionDetails';
import { SubmissionRequest } from '../models/SubmissionRequest';
import { SubmissionResponse } from '../models/SubmissionResponse';
import { SweepingAuthorisationRequest } from '../models/SweepingAuthorisationRequest';
import { SweepingAuthorisationResponse } from '../models/SweepingAuthorisationResponse';
import { SweepingControlParameters } from '../models/SweepingControlParameters';
import { SweepingPeriodicLimits } from '../models/SweepingPeriodicLimits';
import { TerminatedTransactionStream } from '../models/TerminatedTransactionStream';
import { Transaction } from '../models/Transaction';
import { TransactionBalance } from '../models/TransactionBalance';
import { TransactionChargeDetails } from '../models/TransactionChargeDetails';
import { TransactionHash } from '../models/TransactionHash';
import { TransactionPayeeDetails } from '../models/TransactionPayeeDetails';
import { TransactionPayeeDetailsAccountIdentificationsInner } from '../models/TransactionPayeeDetailsAccountIdentificationsInner';
import { TransactionPayerDetails } from '../models/TransactionPayerDetails';
import { TransactionSchedule } from '../models/TransactionSchedule';
import { TransactionStatusEnum } from '../models/TransactionStatusEnum';
import { TransactionStream } from '../models/TransactionStream';
import { Type } from '../models/Type';
import { UpdateVirtualAccountRequest } from '../models/UpdateVirtualAccountRequest';
import { UsageType } from '../models/UsageType';
import { UserCredentials } from '../models/UserCredentials';
import { UserDeleteResponse } from '../models/UserDeleteResponse';
import { UserSettings } from '../models/UserSettings';
import { VRPSetup } from '../models/VRPSetup';
import { VRPSetupRequest } from '../models/VRPSetupRequest';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorResponse } from '../models/ValidationErrorResponse';
import { VirtualAccount } from '../models/VirtualAccount';
import { VirtualAccountAddress } from '../models/VirtualAccountAddress';
import { VirtualAccountBalance } from '../models/VirtualAccountBalance';
import { VirtualAccountBalanceType } from '../models/VirtualAccountBalanceType';
import { VirtualAccountBankAccount } from '../models/VirtualAccountBankAccount';
import { VirtualAccountBeneficiary } from '../models/VirtualAccountBeneficiary';
import { VirtualAccountBeneficiaryAccount } from '../models/VirtualAccountBeneficiaryAccount';
import { VirtualAccountBeneficiaryAddress } from '../models/VirtualAccountBeneficiaryAddress';
import { VirtualAccountBeneficiaryRequest } from '../models/VirtualAccountBeneficiaryRequest';
import { VirtualAccountBusinessClient } from '../models/VirtualAccountBusinessClient';
import { VirtualAccountClient } from '../models/VirtualAccountClient';
import { VirtualAccountClientBusinessType } from '../models/VirtualAccountClientBusinessType';
import { VirtualAccountClientRequest } from '../models/VirtualAccountClientRequest';
import { VirtualAccountClientStatus } from '../models/VirtualAccountClientStatus';
import { VirtualAccountClientType } from '../models/VirtualAccountClientType';
import { VirtualAccountIndividualClient } from '../models/VirtualAccountIndividualClient';
import { VirtualAccountKycStatus } from '../models/VirtualAccountKycStatus';
import { VirtualAccountOriginalPayment } from '../models/VirtualAccountOriginalPayment';
import { VirtualAccountPayInDetails } from '../models/VirtualAccountPayInDetails';
import { VirtualAccountPayOutRequest } from '../models/VirtualAccountPayOutRequest';
import { VirtualAccountPayment } from '../models/VirtualAccountPayment';
import { VirtualAccountPaymentAmount } from '../models/VirtualAccountPaymentAmount';
import { VirtualAccountPaymentDestination } from '../models/VirtualAccountPaymentDestination';
import { VirtualAccountPaymentSource } from '../models/VirtualAccountPaymentSource';
import { VirtualAccountRefund } from '../models/VirtualAccountRefund';
import { VirtualAccountRefundRequest } from '../models/VirtualAccountRefundRequest';
import { VirtualAccountRefundRequestAmount } from '../models/VirtualAccountRefundRequestAmount';
import { VirtualAccountRefundRequestBeneficiary } from '../models/VirtualAccountRefundRequestBeneficiary';
import { VirtualAccountRequest } from '../models/VirtualAccountRequest';
import { VirtualAccountTransferDestination } from '../models/VirtualAccountTransferDestination';
import { VirtualAccountTransferRequest } from '../models/VirtualAccountTransferRequest';
import { VirtualAccountTransferSource } from '../models/VirtualAccountTransferSource';
import { VrpConfiguration } from '../models/VrpConfiguration';
import { VrpPeriodicLimit } from '../models/VrpPeriodicLimit';

import { ObservableApplicationApi } from "./ObservableAPI";
import { ApplicationApiRequestFactory, ApplicationApiResponseProcessor} from "../apis/ApplicationApi";

export interface ApplicationApiGetApplicationMeRequest {
}

export class ObjectApplicationApi {
    private api: ObservableApplicationApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationApiRequestFactory, responseProcessor?: ApplicationApiResponseProcessor) {
        this.api = new ObservableApplicationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the information about the institutions configured in your application
     * Get Application Self
     * @param param the request object
     */
    public getApplicationMeWithHttpInfo(param: ApplicationApiGetApplicationMeRequest = {}, options?: Configuration): Promise<HttpInfo<Application>> {
        return this.api.getApplicationMeWithHttpInfo( options).toPromise();
    }

    /**
     * Get the information about the institutions configured in your application
     * Get Application Self
     * @param param the request object
     */
    public getApplicationMe(param: ApplicationApiGetApplicationMeRequest = {}, options?: Configuration): Promise<Application> {
        return this.api.getApplicationMe( options).toPromise();
    }

}

import { ObservableApplicationManagementApi } from "./ObservableAPI";
import { ApplicationManagementApiRequestFactory, ApplicationManagementApiResponseProcessor} from "../apis/ApplicationManagementApi";

export interface ApplicationManagementApiCreateApplicationVRPConfigurationByApplicationIdRequest {
    /**
     * The id of the application that vrp configuration being created for
     * @type string
     * @memberof ApplicationManagementApicreateApplicationVRPConfigurationByApplicationId
     */
    applicationId: string
    /**
     * The vrp configuration to create
     * @type VrpConfiguration
     * @memberof ApplicationManagementApicreateApplicationVRPConfigurationByApplicationId
     */
    vrpConfiguration: VrpConfiguration
}

export interface ApplicationManagementApiCreateSubApplicationRequest {
    /**
     * The sub-application to create
     * @type ApplicationRequest
     * @memberof ApplicationManagementApicreateSubApplication
     */
    applicationRequest: ApplicationRequest
}

export interface ApplicationManagementApiDeleteApplicationRequest {
    /**
     * The id of the application being deleted
     * @type string
     * @memberof ApplicationManagementApideleteApplication
     */
    applicationId: string
}

export interface ApplicationManagementApiGetApplicationByIdRequest {
    /**
     * The id of the application being fetched
     * @type string
     * @memberof ApplicationManagementApigetApplicationById
     */
    applicationId: string
}

export interface ApplicationManagementApiGetApplicationVRPConfigurationByApplicationIdRequest {
    /**
     * The id of the application that vrp configuration being created for
     * @type string
     * @memberof ApplicationManagementApigetApplicationVRPConfigurationByApplicationId
     */
    applicationId: string
}

export interface ApplicationManagementApiSearchApplicationsRequest {
    /**
     * 
     * @type SearchApplicationsPublicFilterValuesParameter
     * @memberof ApplicationManagementApisearchApplications
     */
    publicFilterValues?: SearchApplicationsPublicFilterValuesParameter
}

export interface ApplicationManagementApiUpdateApplicationRequest {
    /**
     * The id of the application being updated
     * @type string
     * @memberof ApplicationManagementApiupdateApplication
     */
    applicationId: string
    /**
     * The application to update
     * @type ApplicationRequest
     * @memberof ApplicationManagementApiupdateApplication
     */
    applicationRequest: ApplicationRequest
}

export interface ApplicationManagementApiUpdateApplicationVRPConfigurationByApplicationIdRequest {
    /**
     * The id of the application that vrp configuration being created for
     * @type string
     * @memberof ApplicationManagementApiupdateApplicationVRPConfigurationByApplicationId
     */
    applicationId: string
    /**
     * The vrp configuration to create
     * @type VrpConfiguration
     * @memberof ApplicationManagementApiupdateApplicationVRPConfigurationByApplicationId
     */
    vrpConfiguration: VrpConfiguration
}

export class ObjectApplicationManagementApi {
    private api: ObservableApplicationManagementApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationManagementApiRequestFactory, responseProcessor?: ApplicationManagementApiResponseProcessor) {
        this.api = new ObservableApplicationManagementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create application vrp configuration
     * Create application VRP configuration by Application Id
     * @param param the request object
     */
    public createApplicationVRPConfigurationByApplicationIdWithHttpInfo(param: ApplicationManagementApiCreateApplicationVRPConfigurationByApplicationIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createApplicationVRPConfigurationByApplicationIdWithHttpInfo(param.applicationId, param.vrpConfiguration,  options).toPromise();
    }

    /**
     * Create application vrp configuration
     * Create application VRP configuration by Application Id
     * @param param the request object
     */
    public createApplicationVRPConfigurationByApplicationId(param: ApplicationManagementApiCreateApplicationVRPConfigurationByApplicationIdRequest, options?: Configuration): Promise<void> {
        return this.api.createApplicationVRPConfigurationByApplicationId(param.applicationId, param.vrpConfiguration,  options).toPromise();
    }

    /**
     * Creates a sub-application under the given root application id provided in the authentication token. The sub-application can use the root\'s credentials to call the API
     * Creates a sub-application for the root application id provided in the authentication token
     * @param param the request object
     */
    public createSubApplicationWithHttpInfo(param: ApplicationManagementApiCreateSubApplicationRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfApplicationResponse>> {
        return this.api.createSubApplicationWithHttpInfo(param.applicationRequest,  options).toPromise();
    }

    /**
     * Creates a sub-application under the given root application id provided in the authentication token. The sub-application can use the root\'s credentials to call the API
     * Creates a sub-application for the root application id provided in the authentication token
     * @param param the request object
     */
    public createSubApplication(param: ApplicationManagementApiCreateSubApplicationRequest, options?: Configuration): Promise<ApiResponseOfApplicationResponse> {
        return this.api.createSubApplication(param.applicationRequest,  options).toPromise();
    }

    /**
     * Deletes the application with the given ID in the path
     * Delete an application
     * @param param the request object
     */
    public deleteApplicationWithHttpInfo(param: ApplicationManagementApiDeleteApplicationRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteApplicationWithHttpInfo(param.applicationId,  options).toPromise();
    }

    /**
     * Deletes the application with the given ID in the path
     * Delete an application
     * @param param the request object
     */
    public deleteApplication(param: ApplicationManagementApiDeleteApplicationRequest, options?: Configuration): Promise<void> {
        return this.api.deleteApplication(param.applicationId,  options).toPromise();
    }

    /**
     * Retrieves an application by the id provided in the path
     * Get application details
     * @param param the request object
     */
    public getApplicationByIdWithHttpInfo(param: ApplicationManagementApiGetApplicationByIdRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfApplicationResponse>> {
        return this.api.getApplicationByIdWithHttpInfo(param.applicationId,  options).toPromise();
    }

    /**
     * Retrieves an application by the id provided in the path
     * Get application details
     * @param param the request object
     */
    public getApplicationById(param: ApplicationManagementApiGetApplicationByIdRequest, options?: Configuration): Promise<ApiResponseOfApplicationResponse> {
        return this.api.getApplicationById(param.applicationId,  options).toPromise();
    }

    /**
     * Get application vrp configuration
     * Get application VRP configuration by Application Id
     * @param param the request object
     */
    public getApplicationVRPConfigurationByApplicationIdWithHttpInfo(param: ApplicationManagementApiGetApplicationVRPConfigurationByApplicationIdRequest, options?: Configuration): Promise<HttpInfo<VrpConfiguration>> {
        return this.api.getApplicationVRPConfigurationByApplicationIdWithHttpInfo(param.applicationId,  options).toPromise();
    }

    /**
     * Get application vrp configuration
     * Get application VRP configuration by Application Id
     * @param param the request object
     */
    public getApplicationVRPConfigurationByApplicationId(param: ApplicationManagementApiGetApplicationVRPConfigurationByApplicationIdRequest, options?: Configuration): Promise<VrpConfiguration> {
        return this.api.getApplicationVRPConfigurationByApplicationId(param.applicationId,  options).toPromise();
    }

    /**
     * Retrieves sub-applications for the root application provided in the authentication token. If a sub-application is provided in the authentication token, it will return an empty list.
     * Retrieve sub-applications for the root application provided in the authentication token.
     * @param param the request object
     */
    public searchApplicationsWithHttpInfo(param: ApplicationManagementApiSearchApplicationsRequest = {}, options?: Configuration): Promise<HttpInfo<ApiListOfApplicationResponse>> {
        return this.api.searchApplicationsWithHttpInfo(param.publicFilterValues,  options).toPromise();
    }

    /**
     * Retrieves sub-applications for the root application provided in the authentication token. If a sub-application is provided in the authentication token, it will return an empty list.
     * Retrieve sub-applications for the root application provided in the authentication token.
     * @param param the request object
     */
    public searchApplications(param: ApplicationManagementApiSearchApplicationsRequest = {}, options?: Configuration): Promise<ApiListOfApplicationResponse> {
        return this.api.searchApplications(param.publicFilterValues,  options).toPromise();
    }

    /**
     * Updates the application properties for the application with the given ID in the path
     * Update an Application
     * @param param the request object
     */
    public updateApplicationWithHttpInfo(param: ApplicationManagementApiUpdateApplicationRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfApplicationResponse>> {
        return this.api.updateApplicationWithHttpInfo(param.applicationId, param.applicationRequest,  options).toPromise();
    }

    /**
     * Updates the application properties for the application with the given ID in the path
     * Update an Application
     * @param param the request object
     */
    public updateApplication(param: ApplicationManagementApiUpdateApplicationRequest, options?: Configuration): Promise<ApiResponseOfApplicationResponse> {
        return this.api.updateApplication(param.applicationId, param.applicationRequest,  options).toPromise();
    }

    /**
     * Update application vrp configuration
     * Update application VRP configuration by Application Id
     * @param param the request object
     */
    public updateApplicationVRPConfigurationByApplicationIdWithHttpInfo(param: ApplicationManagementApiUpdateApplicationVRPConfigurationByApplicationIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateApplicationVRPConfigurationByApplicationIdWithHttpInfo(param.applicationId, param.vrpConfiguration,  options).toPromise();
    }

    /**
     * Update application vrp configuration
     * Update application VRP configuration by Application Id
     * @param param the request object
     */
    public updateApplicationVRPConfigurationByApplicationId(param: ApplicationManagementApiUpdateApplicationVRPConfigurationByApplicationIdRequest, options?: Configuration): Promise<void> {
        return this.api.updateApplicationVRPConfigurationByApplicationId(param.applicationId, param.vrpConfiguration,  options).toPromise();
    }

}

import { ObservableAuthorisationsApi } from "./ObservableAPI";
import { AuthorisationsApiRequestFactory, AuthorisationsApiResponseProcessor} from "../apis/AuthorisationsApi";

export interface AuthorisationsApiCreateBulkPaymentAuthorisationRequest {
    /**
     * 
     * @type BulkPaymentAuthorisationRequest
     * @memberof AuthorisationsApicreateBulkPaymentAuthorisation
     */
    bulkPaymentAuthorisationRequest: BulkPaymentAuthorisationRequest
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApicreateBulkPaymentAuthorisation
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApicreateBulkPaymentAuthorisation
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApicreateBulkPaymentAuthorisation
     */
    psuIpAddress?: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof AuthorisationsApicreateBulkPaymentAuthorisation
     */
    raw?: boolean
}

export interface AuthorisationsApiCreateEmbeddedBulkPaymentAuthorisationRequest {
    /**
     * 
     * @type BulkPaymentEmbeddedAuthorisationRequest
     * @memberof AuthorisationsApicreateEmbeddedBulkPaymentAuthorisation
     */
    bulkPaymentEmbeddedAuthorisationRequest: BulkPaymentEmbeddedAuthorisationRequest
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApicreateEmbeddedBulkPaymentAuthorisation
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApicreateEmbeddedBulkPaymentAuthorisation
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApicreateEmbeddedBulkPaymentAuthorisation
     */
    psuIpAddress?: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof AuthorisationsApicreateEmbeddedBulkPaymentAuthorisation
     */
    raw?: boolean
}

export interface AuthorisationsApiCreateEmbeddedPaymentAuthorisationRequest {
    /**
     * 
     * @type PaymentEmbeddedAuthorisationRequest
     * @memberof AuthorisationsApicreateEmbeddedPaymentAuthorisation
     */
    paymentEmbeddedAuthorisationRequest: PaymentEmbeddedAuthorisationRequest
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApicreateEmbeddedPaymentAuthorisation
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApicreateEmbeddedPaymentAuthorisation
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApicreateEmbeddedPaymentAuthorisation
     */
    psuIpAddress?: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof AuthorisationsApicreateEmbeddedPaymentAuthorisation
     */
    raw?: boolean
}

export interface AuthorisationsApiCreatePaymentAuthorisationRequest {
    /**
     * 
     * @type PaymentAuthorisationRequest
     * @memberof AuthorisationsApicreatePaymentAuthorisation
     */
    paymentAuthorisationRequest: PaymentAuthorisationRequest
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApicreatePaymentAuthorisation
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApicreatePaymentAuthorisation
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApicreatePaymentAuthorisation
     */
    psuIpAddress?: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof AuthorisationsApicreatePaymentAuthorisation
     */
    raw?: boolean
}

export interface AuthorisationsApiCreatePaymentPreAuthorisationRequestRequest {
    /**
     * 
     * @type PaymentPreAuthorisationRequest
     * @memberof AuthorisationsApicreatePaymentPreAuthorisationRequest
     */
    paymentPreAuthorisationRequest: PaymentPreAuthorisationRequest
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof AuthorisationsApicreatePaymentPreAuthorisationRequest
     */
    raw?: boolean
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApicreatePaymentPreAuthorisationRequest
     */
    psuIpAddress?: string
}

export interface AuthorisationsApiCreatePreAuthorisationRequestRequest {
    /**
     * 
     * @type PreAuthorisationRequest
     * @memberof AuthorisationsApicreatePreAuthorisationRequest
     */
    preAuthorisationRequest: PreAuthorisationRequest
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof AuthorisationsApicreatePreAuthorisationRequest
     */
    raw?: boolean
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApicreatePreAuthorisationRequest
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApicreatePreAuthorisationRequest
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApicreatePreAuthorisationRequest
     */
    psuIpAddress?: string
}

export interface AuthorisationsApiInitiateAccountRequestRequest {
    /**
     * 
     * @type AccountAuthorisationRequest
     * @memberof AuthorisationsApiinitiateAccountRequest
     */
    accountAuthorisationRequest: AccountAuthorisationRequest
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiinitiateAccountRequest
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiinitiateAccountRequest
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiinitiateAccountRequest
     */
    psuIpAddress?: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof AuthorisationsApiinitiateAccountRequest
     */
    raw?: boolean
}

export interface AuthorisationsApiInitiateEmbeddedAccountRequestRequest {
    /**
     * 
     * @type EmbeddedAccountAuthorisationRequest
     * @memberof AuthorisationsApiinitiateEmbeddedAccountRequest
     */
    embeddedAccountAuthorisationRequest: EmbeddedAccountAuthorisationRequest
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiinitiateEmbeddedAccountRequest
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiinitiateEmbeddedAccountRequest
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiinitiateEmbeddedAccountRequest
     */
    psuIpAddress?: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof AuthorisationsApiinitiateEmbeddedAccountRequest
     */
    raw?: boolean
}

export interface AuthorisationsApiReAuthoriseAccountRequest {
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof AuthorisationsApireAuthoriseAccount
     */
    consent: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApireAuthoriseAccount
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApireAuthoriseAccount
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApireAuthoriseAccount
     */
    psuIpAddress?: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof AuthorisationsApireAuthoriseAccount
     */
    raw?: boolean
}

export interface AuthorisationsApiUpdateEmbeddedAccountRequestRequest {
    /**
     * __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @type string
     * @memberof AuthorisationsApiupdateEmbeddedAccountRequest
     */
    consentId: string
    /**
     * 
     * @type EmbeddedAccountAuthorisationRequest
     * @memberof AuthorisationsApiupdateEmbeddedAccountRequest
     */
    embeddedAccountAuthorisationRequest: EmbeddedAccountAuthorisationRequest
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiupdateEmbeddedAccountRequest
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiupdateEmbeddedAccountRequest
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiupdateEmbeddedAccountRequest
     */
    psuIpAddress?: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof AuthorisationsApiupdateEmbeddedAccountRequest
     */
    raw?: boolean
}

export interface AuthorisationsApiUpdateEmbeddedBulkPaymentAuthorisationRequest {
    /**
     * __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @type string
     * @memberof AuthorisationsApiupdateEmbeddedBulkPaymentAuthorisation
     */
    consentId: string
    /**
     * 
     * @type BulkPaymentEmbeddedAuthorisationRequest
     * @memberof AuthorisationsApiupdateEmbeddedBulkPaymentAuthorisation
     */
    bulkPaymentEmbeddedAuthorisationRequest: BulkPaymentEmbeddedAuthorisationRequest
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiupdateEmbeddedBulkPaymentAuthorisation
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiupdateEmbeddedBulkPaymentAuthorisation
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiupdateEmbeddedBulkPaymentAuthorisation
     */
    psuIpAddress?: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof AuthorisationsApiupdateEmbeddedBulkPaymentAuthorisation
     */
    raw?: boolean
}

export interface AuthorisationsApiUpdateEmbeddedPaymentAuthorisationRequest {
    /**
     * __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @type string
     * @memberof AuthorisationsApiupdateEmbeddedPaymentAuthorisation
     */
    consentId: string
    /**
     * 
     * @type PaymentEmbeddedAuthorisationRequest
     * @memberof AuthorisationsApiupdateEmbeddedPaymentAuthorisation
     */
    paymentEmbeddedAuthorisationRequest: PaymentEmbeddedAuthorisationRequest
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiupdateEmbeddedPaymentAuthorisation
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiupdateEmbeddedPaymentAuthorisation
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiupdateEmbeddedPaymentAuthorisation
     */
    psuIpAddress?: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof AuthorisationsApiupdateEmbeddedPaymentAuthorisation
     */
    raw?: boolean
}

export interface AuthorisationsApiUpdatePaymentAuthorisationRequest {
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof AuthorisationsApiupdatePaymentAuthorisation
     */
    consent: string
    /**
     * 
     * @type PaymentAuthorisationRequest
     * @memberof AuthorisationsApiupdatePaymentAuthorisation
     */
    paymentAuthorisationRequest: PaymentAuthorisationRequest
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiupdatePaymentAuthorisation
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiupdatePaymentAuthorisation
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiupdatePaymentAuthorisation
     */
    psuIpAddress?: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof AuthorisationsApiupdatePaymentAuthorisation
     */
    raw?: boolean
}

export interface AuthorisationsApiUpdatePreAuthoriseAccountConsentRequest {
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof AuthorisationsApiupdatePreAuthoriseAccountConsent
     */
    consent: string
    /**
     * 
     * @type AccountAuthorisationRequest
     * @memberof AuthorisationsApiupdatePreAuthoriseAccountConsent
     */
    accountAuthorisationRequest: AccountAuthorisationRequest
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiupdatePreAuthoriseAccountConsent
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiupdatePreAuthoriseAccountConsent
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof AuthorisationsApiupdatePreAuthoriseAccountConsent
     */
    psuIpAddress?: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof AuthorisationsApiupdatePreAuthoriseAccountConsent
     */
    raw?: boolean
}

export class ObjectAuthorisationsApi {
    private api: ObservableAuthorisationsApi

    public constructor(configuration: Configuration, requestFactory?: AuthorisationsApiRequestFactory, responseProcessor?: AuthorisationsApiResponseProcessor) {
        this.api = new ObservableAuthorisationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. <br><br>See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_BULK_PAYMENT`
     * Create Bulk Payment Authorisation
     * @param param the request object
     */
    public createBulkPaymentAuthorisationWithHttpInfo(param: AuthorisationsApiCreateBulkPaymentAuthorisationRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfPaymentAuthorisationRequestResponse>> {
        return this.api.createBulkPaymentAuthorisationWithHttpInfo(param.bulkPaymentAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. <br><br>See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_BULK_PAYMENT`
     * Create Bulk Payment Authorisation
     * @param param the request object
     */
    public createBulkPaymentAuthorisation(param: AuthorisationsApiCreateBulkPaymentAuthorisationRequest, options?: Configuration): Promise<ApiResponseOfPaymentAuthorisationRequestResponse> {
        return this.api.createBulkPaymentAuthorisation(param.bulkPaymentAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to initiate the embedded authorisation process for an `Institution` that contains the `INITIATE_EMBEDDED_BULK_PAYMENT` feature in order to obtain the the user\'s authorisation for a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. <br><br> See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_BULK_PAYMENT`
     * Create Embedded Bulk Payment Authorisation
     * @param param the request object
     */
    public createEmbeddedBulkPaymentAuthorisationWithHttpInfo(param: AuthorisationsApiCreateEmbeddedBulkPaymentAuthorisationRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse>> {
        return this.api.createEmbeddedBulkPaymentAuthorisationWithHttpInfo(param.bulkPaymentEmbeddedAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to initiate the embedded authorisation process for an `Institution` that contains the `INITIATE_EMBEDDED_BULK_PAYMENT` feature in order to obtain the the user\'s authorisation for a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. <br><br> See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_BULK_PAYMENT`
     * Create Embedded Bulk Payment Authorisation
     * @param param the request object
     */
    public createEmbeddedBulkPaymentAuthorisation(param: AuthorisationsApiCreateEmbeddedBulkPaymentAuthorisationRequest, options?: Configuration): Promise<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse> {
        return this.api.createEmbeddedBulkPaymentAuthorisation(param.bulkPaymentEmbeddedAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to initiate the embedded authorisation process for an `Institution` that contains the `INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT` feature in order to obtain the the user\'s authorisation for a payment.<br><br> See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT`
     * Create Embedded Payment Authorisation
     * @param param the request object
     */
    public createEmbeddedPaymentAuthorisationWithHttpInfo(param: AuthorisationsApiCreateEmbeddedPaymentAuthorisationRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse>> {
        return this.api.createEmbeddedPaymentAuthorisationWithHttpInfo(param.paymentEmbeddedAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to initiate the embedded authorisation process for an `Institution` that contains the `INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT` feature in order to obtain the the user\'s authorisation for a payment.<br><br> See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT`
     * Create Embedded Payment Authorisation
     * @param param the request object
     */
    public createEmbeddedPaymentAuthorisation(param: AuthorisationsApiCreateEmbeddedPaymentAuthorisationRequest, options?: Configuration): Promise<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse> {
        return this.api.createEmbeddedPaymentAuthorisation(param.paymentEmbeddedAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for a payment. This endpoint is used to initiate all the different payment listed below. Based on the type of payment you wish to make, you may be required to provide specific properties in [PaymentRequest](https://docs.yapily.com/api/reference/#operation/createPaymentAuthorisation!path=paymentRequest&t=request). First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/reference/#operation/getInstitution). <br><br>See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow.<br><br>Features:<ul><li>`INITIATE_DOMESTIC_PERIODIC_PAYMENT`</li><li>`INITIATE_DOMESTIC_SCHEDULED_PAYMENT`</li><li>`INITIATE_DOMESTIC_SINGLE_INSTANT_PAYMENT`</li><li>`INITIATE_DOMESTIC_SINGLE_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_PERIODIC_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_SCHEDULED_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_SINGLE_PAYMENT`</li></ul>
     * Create Payment Authorisation
     * @param param the request object
     */
    public createPaymentAuthorisationWithHttpInfo(param: AuthorisationsApiCreatePaymentAuthorisationRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfPaymentAuthorisationRequestResponse>> {
        return this.api.createPaymentAuthorisationWithHttpInfo(param.paymentAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for a payment. This endpoint is used to initiate all the different payment listed below. Based on the type of payment you wish to make, you may be required to provide specific properties in [PaymentRequest](https://docs.yapily.com/api/reference/#operation/createPaymentAuthorisation!path=paymentRequest&t=request). First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/reference/#operation/getInstitution). <br><br>See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow.<br><br>Features:<ul><li>`INITIATE_DOMESTIC_PERIODIC_PAYMENT`</li><li>`INITIATE_DOMESTIC_SCHEDULED_PAYMENT`</li><li>`INITIATE_DOMESTIC_SINGLE_INSTANT_PAYMENT`</li><li>`INITIATE_DOMESTIC_SINGLE_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_PERIODIC_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_SCHEDULED_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_SINGLE_PAYMENT`</li></ul>
     * Create Payment Authorisation
     * @param param the request object
     */
    public createPaymentAuthorisation(param: AuthorisationsApiCreatePaymentAuthorisationRequest, options?: Configuration): Promise<ApiResponseOfPaymentAuthorisationRequestResponse> {
        return this.api.createPaymentAuthorisation(param.paymentAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to initiate the pre-authorisation process for payments for CBI Globe institutions that contain the `INITIATE_ONETIME_PRE_AUTHORISATION_PAYMENTS` feature to authenticate the user. <br><br>Feature: `INITIATE_ONETIME_PRE_AUTHORISATION_PAYMENTS`
     * Create Payment Pre-authorisation
     * @param param the request object
     */
    public createPaymentPreAuthorisationRequestWithHttpInfo(param: AuthorisationsApiCreatePaymentPreAuthorisationRequestRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfPreAuthorisationResponse>> {
        return this.api.createPaymentPreAuthorisationRequestWithHttpInfo(param.paymentPreAuthorisationRequest, param.raw, param.psuIpAddress,  options).toPromise();
    }

    /**
     * Used to initiate the pre-authorisation process for payments for CBI Globe institutions that contain the `INITIATE_ONETIME_PRE_AUTHORISATION_PAYMENTS` feature to authenticate the user. <br><br>Feature: `INITIATE_ONETIME_PRE_AUTHORISATION_PAYMENTS`
     * Create Payment Pre-authorisation
     * @param param the request object
     */
    public createPaymentPreAuthorisationRequest(param: AuthorisationsApiCreatePaymentPreAuthorisationRequestRequest, options?: Configuration): Promise<ApiResponseOfPreAuthorisationResponse> {
        return this.api.createPaymentPreAuthorisationRequest(param.paymentPreAuthorisationRequest, param.raw, param.psuIpAddress,  options).toPromise();
    }

    /**
     * Used to initiate the pre-authorisation process for any `Institution` that contains the `INITIATE_PRE_AUTHORISATION` feature to authenticate the user. <br><br>Feature: `INITIATE_PRE_AUTHORISATION`
     * Create Pre-authorisation
     * @param param the request object
     */
    public createPreAuthorisationRequestWithHttpInfo(param: AuthorisationsApiCreatePreAuthorisationRequestRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfPreAuthorisationResponse>> {
        return this.api.createPreAuthorisationRequestWithHttpInfo(param.preAuthorisationRequest, param.raw, param.psuId, param.psuCorporateId, param.psuIpAddress,  options).toPromise();
    }

    /**
     * Used to initiate the pre-authorisation process for any `Institution` that contains the `INITIATE_PRE_AUTHORISATION` feature to authenticate the user. <br><br>Feature: `INITIATE_PRE_AUTHORISATION`
     * Create Pre-authorisation
     * @param param the request object
     */
    public createPreAuthorisationRequest(param: AuthorisationsApiCreatePreAuthorisationRequestRequest, options?: Configuration): Promise<ApiResponseOfPreAuthorisationResponse> {
        return this.api.createPreAuthorisationRequest(param.preAuthorisationRequest, param.raw, param.psuId, param.psuCorporateId, param.psuIpAddress,  options).toPromise();
    }

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial institution in order to give consent to access account data.<br><br>See [Redirect Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/redirect-account-flows/) for more information about this flow.<br><br>Feature: `INITIATE_ACCOUNT_REQUEST`
     * Create Account Authorisation
     * @param param the request object
     */
    public initiateAccountRequestWithHttpInfo(param: AuthorisationsApiInitiateAccountRequestRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfAccountAuthorisationResponse>> {
        return this.api.initiateAccountRequestWithHttpInfo(param.accountAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial institution in order to give consent to access account data.<br><br>See [Redirect Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/redirect-account-flows/) for more information about this flow.<br><br>Feature: `INITIATE_ACCOUNT_REQUEST`
     * Create Account Authorisation
     * @param param the request object
     */
    public initiateAccountRequest(param: AuthorisationsApiInitiateAccountRequestRequest, options?: Configuration): Promise<ApiResponseOfAccountAuthorisationResponse> {
        return this.api.initiateAccountRequest(param.accountAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to initiate the embedded authorisation process for an `Institution` that contains the `INITIATE_EMBEDDED_ACCOUNT_REQUEST` feature in order to obtain the the user\'s authorisation to access their account information. <br><br>See [Embedded Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/embedded-account-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_ACCOUNT_REQUEST`
     * Create Embedded Account Authorisation
     * @param param the request object
     */
    public initiateEmbeddedAccountRequestWithHttpInfo(param: AuthorisationsApiInitiateEmbeddedAccountRequestRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfEmbeddedAccountAuthorisationResponse>> {
        return this.api.initiateEmbeddedAccountRequestWithHttpInfo(param.embeddedAccountAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to initiate the embedded authorisation process for an `Institution` that contains the `INITIATE_EMBEDDED_ACCOUNT_REQUEST` feature in order to obtain the the user\'s authorisation to access their account information. <br><br>See [Embedded Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/embedded-account-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_ACCOUNT_REQUEST`
     * Create Embedded Account Authorisation
     * @param param the request object
     */
    public initiateEmbeddedAccountRequest(param: AuthorisationsApiInitiateEmbeddedAccountRequestRequest, options?: Configuration): Promise<ApiResponseOfEmbeddedAccountAuthorisationResponse> {
        return this.api.initiateEmbeddedAccountRequest(param.embeddedAccountAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to prompt the account holder for continued access to their financial data. This endpoint should be used when a `Consent` that was previously `AUTHORIZED` can no longer be used to retrieve data.<br><br>See [Re-Authorisation](https://docs.yapily.com/pages/key-concepts/account-data/account-consents/#re-authorisation) for more information.
     * Re-authorise Account Consent
     * @param param the request object
     */
    public reAuthoriseAccountWithHttpInfo(param: AuthorisationsApiReAuthoriseAccountRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfAccountAuthorisationResponse>> {
        return this.api.reAuthoriseAccountWithHttpInfo(param.consent, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to prompt the account holder for continued access to their financial data. This endpoint should be used when a `Consent` that was previously `AUTHORIZED` can no longer be used to retrieve data.<br><br>See [Re-Authorisation](https://docs.yapily.com/pages/key-concepts/account-data/account-consents/#re-authorisation) for more information.
     * Re-authorise Account Consent
     * @param param the request object
     */
    public reAuthoriseAccount(param: AuthorisationsApiReAuthoriseAccountRequest, options?: Configuration): Promise<ApiResponseOfAccountAuthorisationResponse> {
        return this.api.reAuthoriseAccount(param.consent, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to pass the SCA Code received from the `Institution` (and the SCA method selected by the user where multiple SCA methods are supported by the `Institution`) in order to complete the embedded authorisation to access the user\'s financial data. <br><br>See [Embedded Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/embedded-account-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_ACCOUNT_REQUEST`
     * Update Embedded Account Authorisation
     * @param param the request object
     */
    public updateEmbeddedAccountRequestWithHttpInfo(param: AuthorisationsApiUpdateEmbeddedAccountRequestRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfEmbeddedAccountAuthorisationResponse>> {
        return this.api.updateEmbeddedAccountRequestWithHttpInfo(param.consentId, param.embeddedAccountAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to pass the SCA Code received from the `Institution` (and the SCA method selected by the user where multiple SCA methods are supported by the `Institution`) in order to complete the embedded authorisation to access the user\'s financial data. <br><br>See [Embedded Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/embedded-account-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_ACCOUNT_REQUEST`
     * Update Embedded Account Authorisation
     * @param param the request object
     */
    public updateEmbeddedAccountRequest(param: AuthorisationsApiUpdateEmbeddedAccountRequestRequest, options?: Configuration): Promise<ApiResponseOfEmbeddedAccountAuthorisationResponse> {
        return this.api.updateEmbeddedAccountRequest(param.consentId, param.embeddedAccountAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to pass the SCA Code received from the `Institution` (and the SCA method selected by the user where multiple SCA methods are supported by the `Institution`) in order to complete the embedded authorisation to initiate a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. <br><br>See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_BULK_PAYMENT`
     * Update Embedded Bulk Payment Authorisation
     * @param param the request object
     */
    public updateEmbeddedBulkPaymentAuthorisationWithHttpInfo(param: AuthorisationsApiUpdateEmbeddedBulkPaymentAuthorisationRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse>> {
        return this.api.updateEmbeddedBulkPaymentAuthorisationWithHttpInfo(param.consentId, param.bulkPaymentEmbeddedAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to pass the SCA Code received from the `Institution` (and the SCA method selected by the user where multiple SCA methods are supported by the `Institution`) in order to complete the embedded authorisation to initiate a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. <br><br>See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_BULK_PAYMENT`
     * Update Embedded Bulk Payment Authorisation
     * @param param the request object
     */
    public updateEmbeddedBulkPaymentAuthorisation(param: AuthorisationsApiUpdateEmbeddedBulkPaymentAuthorisationRequest, options?: Configuration): Promise<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse> {
        return this.api.updateEmbeddedBulkPaymentAuthorisation(param.consentId, param.bulkPaymentEmbeddedAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to pass the SCA Code received from the `Institution` (and the SCA method selected by the user where multiple SCA methods are supported by the `Institution`) in order to complete the embedded authorisation to initiate a payment. <br><br> See [Embedded Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/embedded/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT`
     * Update Embedded Payment Authorisation
     * @param param the request object
     */
    public updateEmbeddedPaymentAuthorisationWithHttpInfo(param: AuthorisationsApiUpdateEmbeddedPaymentAuthorisationRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse>> {
        return this.api.updateEmbeddedPaymentAuthorisationWithHttpInfo(param.consentId, param.paymentEmbeddedAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to pass the SCA Code received from the `Institution` (and the SCA method selected by the user where multiple SCA methods are supported by the `Institution`) in order to complete the embedded authorisation to initiate a payment. <br><br> See [Embedded Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/embedded/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT`
     * Update Embedded Payment Authorisation
     * @param param the request object
     */
    public updateEmbeddedPaymentAuthorisation(param: AuthorisationsApiUpdateEmbeddedPaymentAuthorisationRequest, options?: Configuration): Promise<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse> {
        return this.api.updateEmbeddedPaymentAuthorisation(param.consentId, param.paymentEmbeddedAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to continue the authorisation process and for any `Institution` that contains the `INITIATE_PRE_AUTHORISATION` feature and direct user to the login screen of their financial institution in order to give consent to initiate a payment. <br><br>See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow. <br><br>Feature: `INITIATE_PRE_AUTHORISATION`
     * Update Payment Pre-authorisation
     * @param param the request object
     */
    public updatePaymentAuthorisationWithHttpInfo(param: AuthorisationsApiUpdatePaymentAuthorisationRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfPaymentAuthorisationRequestResponse>> {
        return this.api.updatePaymentAuthorisationWithHttpInfo(param.consent, param.paymentAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to continue the authorisation process and for any `Institution` that contains the `INITIATE_PRE_AUTHORISATION` feature and direct user to the login screen of their financial institution in order to give consent to initiate a payment. <br><br>See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow. <br><br>Feature: `INITIATE_PRE_AUTHORISATION`
     * Update Payment Pre-authorisation
     * @param param the request object
     */
    public updatePaymentAuthorisation(param: AuthorisationsApiUpdatePaymentAuthorisationRequest, options?: Configuration): Promise<ApiResponseOfPaymentAuthorisationRequestResponse> {
        return this.api.updatePaymentAuthorisation(param.consent, param.paymentAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to continue the authorisation process and for any `Institution` that contains the `INITIATE_PRE_AUTHORISATION` feature and direct user to the login screen of their financial institution in order to give consent to access account data. <br><br>See [Redirect Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/redirect-account-flows/) for more information about this flow. <br><br>Features: <ul><li>`INITIATE_ACCOUNT_REQUEST`</li><li>`INITIATE_PRE_AUTHORISATION`</li></ul>
     * Update Account Pre-authorisation
     * @param param the request object
     */
    public updatePreAuthoriseAccountConsentWithHttpInfo(param: AuthorisationsApiUpdatePreAuthoriseAccountConsentRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfAccountAuthorisationResponse>> {
        return this.api.updatePreAuthoriseAccountConsentWithHttpInfo(param.consent, param.accountAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Used to continue the authorisation process and for any `Institution` that contains the `INITIATE_PRE_AUTHORISATION` feature and direct user to the login screen of their financial institution in order to give consent to access account data. <br><br>See [Redirect Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/redirect-account-flows/) for more information about this flow. <br><br>Features: <ul><li>`INITIATE_ACCOUNT_REQUEST`</li><li>`INITIATE_PRE_AUTHORISATION`</li></ul>
     * Update Account Pre-authorisation
     * @param param the request object
     */
    public updatePreAuthoriseAccountConsent(param: AuthorisationsApiUpdatePreAuthoriseAccountConsentRequest, options?: Configuration): Promise<ApiResponseOfAccountAuthorisationResponse> {
        return this.api.updatePreAuthoriseAccountConsent(param.consent, param.accountAuthorisationRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

}

import { ObservableConsentsApi } from "./ObservableAPI";
import { ConsentsApiRequestFactory, ConsentsApiResponseProcessor} from "../apis/ConsentsApi";

export interface ConsentsApiDeleteRequest {
    /**
     * __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @type string
     * @memberof ConsentsApi_delete
     */
    consentId: string
    /**
     * __Optional__. Whether to force the deletion.
     * @type boolean
     * @memberof ConsentsApi_delete
     */
    forceDelete?: boolean
}

export interface ConsentsApiCreateConsentWithCodeRequest {
    /**
     * 
     * @type ConsentAuthCodeRequest
     * @memberof ConsentsApicreateConsentWithCode
     */
    consentAuthCodeRequest: ConsentAuthCodeRequest
}

export interface ConsentsApiExtendConsentRequest {
    /**
     * __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @type string
     * @memberof ConsentsApiextendConsent
     */
    consentId: string
    /**
     * 
     * @type ExtendConsentRequest
     * @memberof ConsentsApiextendConsent
     */
    extendConsentRequest: ExtendConsentRequest
}

export interface ConsentsApiGetConsentByIdRequest {
    /**
     * __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @type string
     * @memberof ConsentsApigetConsentById
     */
    consentId: string
}

export interface ConsentsApiGetConsentBySingleAccessConsentRequest {
    /**
     * 
     * @type OneTimeTokenRequest
     * @memberof ConsentsApigetConsentBySingleAccessConsent
     */
    oneTimeTokenRequest: OneTimeTokenRequest
}

export interface ConsentsApiGetConsentsRequest {
    /**
     * __Optional__. Filter records based on the list of &#x60;applicationUserId&#x60; users provided.
     * @type Set&lt;string&gt;
     * @memberof ConsentsApigetConsents
     */
    filterApplicationUserId?: Set<string>
    /**
     * __Optional__. Filter records based on the list of &#x60;userUuid&#x60; users provided.
     * @type Set&lt;string&gt;
     * @memberof ConsentsApigetConsents
     */
    filterUserUuid?: Set<string>
    /**
     * __Optional__. Filter records based on the list of &#x60;Institution&#x60; provided.
     * @type Set&lt;string&gt;
     * @memberof ConsentsApigetConsents
     */
    filterInstitution?: Set<string>
    /**
     * __Optional__. Filter records based on the list of &#x60;Consent&#x60; [statuses](https://docs.yapily.com/api/reference/#operation/getConsents!c&#x3D;200&amp;path&#x3D;data/status&amp;t&#x3D;response).
     * @type Set&lt;string&gt;
     * @memberof ConsentsApigetConsents
     */
    filterStatus?: Set<string>
    /**
     * __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ). 
     * @type string
     * @memberof ConsentsApigetConsents
     */
    _from?: string
    /**
     * __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).
     * @type string
     * @memberof ConsentsApigetConsents
     */
    before?: string
    /**
     * __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @type number
     * @memberof ConsentsApigetConsents
     */
    limit?: number
    /**
     * __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
     * @type number
     * @memberof ConsentsApigetConsents
     */
    offset?: number
}

export class ObjectConsentsApi {
    private api: ObservableConsentsApi

    public constructor(configuration: Configuration, requestFactory?: ConsentsApiRequestFactory, responseProcessor?: ConsentsApiResponseProcessor) {
        this.api = new ObservableConsentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a consent using the consent Id
     * Delete Consent
     * @param param the request object
     */
    public _deleteWithHttpInfo(param: ConsentsApiDeleteRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfConsentDeleteResponse>> {
        return this.api._deleteWithHttpInfo(param.consentId, param.forceDelete,  options).toPromise();
    }

    /**
     * Delete a consent using the consent Id
     * Delete Consent
     * @param param the request object
     */
    public _delete(param: ConsentsApiDeleteRequest, options?: Configuration): Promise<ApiResponseOfConsentDeleteResponse> {
        return this.api._delete(param.consentId, param.forceDelete,  options).toPromise();
    }

    /**
     * Used to obtain a Yapily Consent object containing the `consentToken` once the user has authenticated and you have an OAuth2 authorisation code `auth-code` and state `auth-state`.
     * Exchange OAuth2 Code
     * @param param the request object
     */
    public createConsentWithCodeWithHttpInfo(param: ConsentsApiCreateConsentWithCodeRequest, options?: Configuration): Promise<HttpInfo<Consent>> {
        return this.api.createConsentWithCodeWithHttpInfo(param.consentAuthCodeRequest,  options).toPromise();
    }

    /**
     * Used to obtain a Yapily Consent object containing the `consentToken` once the user has authenticated and you have an OAuth2 authorisation code `auth-code` and state `auth-state`.
     * Exchange OAuth2 Code
     * @param param the request object
     */
    public createConsentWithCode(param: ConsentsApiCreateConsentWithCodeRequest, options?: Configuration): Promise<Consent> {
        return this.api.createConsentWithCode(param.consentAuthCodeRequest,  options).toPromise();
    }

    /**
     * Used to indicate to Yapily that reconfirmation has occurred for a given Consent, and to update lastUpdatedAt and reconfirmBy for that Consent. Returns the Consent.
     * Extend Consent
     * @param param the request object
     */
    public extendConsentWithHttpInfo(param: ConsentsApiExtendConsentRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfConsent>> {
        return this.api.extendConsentWithHttpInfo(param.consentId, param.extendConsentRequest,  options).toPromise();
    }

    /**
     * Used to indicate to Yapily that reconfirmation has occurred for a given Consent, and to update lastUpdatedAt and reconfirmBy for that Consent. Returns the Consent.
     * Extend Consent
     * @param param the request object
     */
    public extendConsent(param: ConsentsApiExtendConsentRequest, options?: Configuration): Promise<ApiResponseOfConsent> {
        return this.api.extendConsent(param.consentId, param.extendConsentRequest,  options).toPromise();
    }

    /**
     * Get consent using the consent Id
     * Get Consent
     * @param param the request object
     */
    public getConsentByIdWithHttpInfo(param: ConsentsApiGetConsentByIdRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfConsent>> {
        return this.api.getConsentByIdWithHttpInfo(param.consentId,  options).toPromise();
    }

    /**
     * Get consent using the consent Id
     * Get Consent
     * @param param the request object
     */
    public getConsentById(param: ConsentsApiGetConsentByIdRequest, options?: Configuration): Promise<ApiResponseOfConsent> {
        return this.api.getConsentById(param.consentId,  options).toPromise();
    }

    /**
     * Exchange a One-time-token for the consent token
     * Exchange One Time Token
     * @param param the request object
     */
    public getConsentBySingleAccessConsentWithHttpInfo(param: ConsentsApiGetConsentBySingleAccessConsentRequest, options?: Configuration): Promise<HttpInfo<Consent>> {
        return this.api.getConsentBySingleAccessConsentWithHttpInfo(param.oneTimeTokenRequest,  options).toPromise();
    }

    /**
     * Exchange a One-time-token for the consent token
     * Exchange One Time Token
     * @param param the request object
     */
    public getConsentBySingleAccessConsent(param: ConsentsApiGetConsentBySingleAccessConsentRequest, options?: Configuration): Promise<Consent> {
        return this.api.getConsentBySingleAccessConsent(param.oneTimeTokenRequest,  options).toPromise();
    }

    /**
     * Used to retrieve all the consents created for each user within an application
     * Get Consents
     * @param param the request object
     */
    public getConsentsWithHttpInfo(param: ConsentsApiGetConsentsRequest = {}, options?: Configuration): Promise<HttpInfo<ApiListResponseOfConsent>> {
        return this.api.getConsentsWithHttpInfo(param.filterApplicationUserId, param.filterUserUuid, param.filterInstitution, param.filterStatus, param._from, param.before, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Used to retrieve all the consents created for each user within an application
     * Get Consents
     * @param param the request object
     */
    public getConsents(param: ConsentsApiGetConsentsRequest = {}, options?: Configuration): Promise<ApiListResponseOfConsent> {
        return this.api.getConsents(param.filterApplicationUserId, param.filterUserUuid, param.filterInstitution, param.filterStatus, param._from, param.before, param.limit, param.offset,  options).toPromise();
    }

}

import { ObservableConstraintsApi } from "./ObservableAPI";
import { ConstraintsApiRequestFactory, ConstraintsApiResponseProcessor} from "../apis/ConstraintsApi";

export interface ConstraintsApiGetAccountConstraintsRulesByInstitutionRequest {
    /**
     * Unique Id(s) of the &#x60;Institution&#x60;(s) to retrieve the Data Constraints for. Multiple institutionIds need to be separated by &#x60;,&#x60;
     * @type Array&lt;string&gt;
     * @memberof ConstraintsApigetAccountConstraintsRulesByInstitution
     */
    institutionIds: Array<string>
    /**
     * Country code of the &#x60;Institution&#x60;(s). Ensure that the country code matches the respective institutionIds; any mismatch will result in an HTTP 404 error response.
     * @type string
     * @memberof ConstraintsApigetAccountConstraintsRulesByInstitution
     */
    institutionCountryCode: string
    /**
     * The path on the API that is associated with the operation for which constraints are to be retrieved
     * @type string
     * @memberof ConstraintsApigetAccountConstraintsRulesByInstitution
     */
    endpointPath?: string
    /**
     * The HTTP method that is associated with the operation for which constraints are to be retrieved
     * @type &#39;POST&#39; | &#39;PATCH&#39; | &#39;PUT&#39; | &#39;GET&#39; | &#39;DELETE&#39;
     * @memberof ConstraintsApigetAccountConstraintsRulesByInstitution
     */
    endpointMethod?: 'POST' | 'PATCH' | 'PUT' | 'GET' | 'DELETE'
}

export interface ConstraintsApiGetPaymentConstraintsRulesByInstitutionRequest {
    /**
     * Unique Id(s) of the &#x60;Institution&#x60;(s) to retrieve the Payment Constraints for. Multiple institutionIds need to be separated by &#x60;,&#x60;
     * @type Array&lt;string&gt;
     * @memberof ConstraintsApigetPaymentConstraintsRulesByInstitution
     */
    institutionIds: Array<string>
    /**
     * Country code of the &#x60;Institution&#x60;(s). Ensure that the country code matches the respective institutionIds; any mismatch will result in an HTTP 404 error response.
     * @type string
     * @memberof ConstraintsApigetPaymentConstraintsRulesByInstitution
     */
    institutionCountryCode: string
    /**
     * Type of payment to retrieve payment constraints for
     * @type &#39;DOMESTIC_PAYMENT&#39; | &#39;DOMESTIC_INSTANT_PAYMENT&#39; | &#39;DOMESTIC_VARIABLE_RECURRING_PAYMENT&#39; | &#39;DOMESTIC_SCHEDULED_PAYMENT&#39; | &#39;DOMESTIC_PERIODIC_PAYMENT&#39; | &#39;INTERNATIONAL_PAYMENT&#39; | &#39;INTERNATIONAL_SCHEDULED_PAYMENT&#39; | &#39;INTERNATIONAL_PERIODIC_PAYMENT&#39; | &#39;BULK_PAYMENT&#39;
     * @memberof ConstraintsApigetPaymentConstraintsRulesByInstitution
     */
    paymentType: 'DOMESTIC_PAYMENT' | 'DOMESTIC_INSTANT_PAYMENT' | 'DOMESTIC_VARIABLE_RECURRING_PAYMENT' | 'DOMESTIC_SCHEDULED_PAYMENT' | 'DOMESTIC_PERIODIC_PAYMENT' | 'INTERNATIONAL_PAYMENT' | 'INTERNATIONAL_SCHEDULED_PAYMENT' | 'INTERNATIONAL_PERIODIC_PAYMENT' | 'BULK_PAYMENT'
    /**
     * The path on the API that is associated with the operation for which constraints are to be retrieved
     * @type string
     * @memberof ConstraintsApigetPaymentConstraintsRulesByInstitution
     */
    endpointPath?: string
    /**
     * The HTTP method that is associated with the operation for which constraints are to be retrieved
     * @type &#39;POST&#39; | &#39;PATCH&#39; | &#39;PUT&#39; | &#39;GET&#39; | &#39;DELETE&#39;
     * @memberof ConstraintsApigetPaymentConstraintsRulesByInstitution
     */
    endpointMethod?: 'POST' | 'PATCH' | 'PUT' | 'GET' | 'DELETE'
}

export class ObjectConstraintsApi {
    private api: ObservableConstraintsApi

    public constructor(configuration: Configuration, requestFactory?: ConstraintsApiRequestFactory, responseProcessor?: ConstraintsApiResponseProcessor) {
        this.api = new ObservableConstraintsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Data Constraints Rules against an Institution for Account Authorisation requests
     * Get Data Constraints Rules
     * @param param the request object
     */
    public getAccountConstraintsRulesByInstitutionWithHttpInfo(param: ConstraintsApiGetAccountConstraintsRulesByInstitutionRequest, options?: Configuration): Promise<HttpInfo<ApiListResponseOfDataConstraints>> {
        return this.api.getAccountConstraintsRulesByInstitutionWithHttpInfo(param.institutionIds, param.institutionCountryCode, param.endpointPath, param.endpointMethod,  options).toPromise();
    }

    /**
     * Get Data Constraints Rules against an Institution for Account Authorisation requests
     * Get Data Constraints Rules
     * @param param the request object
     */
    public getAccountConstraintsRulesByInstitution(param: ConstraintsApiGetAccountConstraintsRulesByInstitutionRequest, options?: Configuration): Promise<ApiListResponseOfDataConstraints> {
        return this.api.getAccountConstraintsRulesByInstitution(param.institutionIds, param.institutionCountryCode, param.endpointPath, param.endpointMethod,  options).toPromise();
    }

    /**
     * Retrieve institution specific constraints for payment authorisation and submission requests
     * Get Payment Constraints Rules
     * @param param the request object
     */
    public getPaymentConstraintsRulesByInstitutionWithHttpInfo(param: ConstraintsApiGetPaymentConstraintsRulesByInstitutionRequest, options?: Configuration): Promise<HttpInfo<ApiListResponseOfPaymentConstraints>> {
        return this.api.getPaymentConstraintsRulesByInstitutionWithHttpInfo(param.institutionIds, param.institutionCountryCode, param.paymentType, param.endpointPath, param.endpointMethod,  options).toPromise();
    }

    /**
     * Retrieve institution specific constraints for payment authorisation and submission requests
     * Get Payment Constraints Rules
     * @param param the request object
     */
    public getPaymentConstraintsRulesByInstitution(param: ConstraintsApiGetPaymentConstraintsRulesByInstitutionRequest, options?: Configuration): Promise<ApiListResponseOfPaymentConstraints> {
        return this.api.getPaymentConstraintsRulesByInstitution(param.institutionIds, param.institutionCountryCode, param.paymentType, param.endpointPath, param.endpointMethod,  options).toPromise();
    }

}

import { ObservableFinancialDataApi } from "./ObservableAPI";
import { FinancialDataApiRequestFactory, FinancialDataApiResponseProcessor} from "../apis/FinancialDataApi";

export interface FinancialDataApiGetAccountRequest {
    /**
     * __Mandatory__. The account Id of the user\&#39;s bank account.
     * @type string
     * @memberof FinancialDataApigetAccount
     */
    accountId: string
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof FinancialDataApigetAccount
     */
    consent: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof FinancialDataApigetAccount
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof FinancialDataApigetAccount
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof FinancialDataApigetAccount
     */
    psuIpAddress?: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof FinancialDataApigetAccount
     */
    raw?: boolean
}

export interface FinancialDataApiGetAccountBalancesRequest {
    /**
     * __Mandatory__. The account Id of the user\&#39;s bank account.
     * @type string
     * @memberof FinancialDataApigetAccountBalances
     */
    accountId: string
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof FinancialDataApigetAccountBalances
     */
    consent: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof FinancialDataApigetAccountBalances
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof FinancialDataApigetAccountBalances
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof FinancialDataApigetAccountBalances
     */
    psuIpAddress?: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof FinancialDataApigetAccountBalances
     */
    raw?: boolean
}

export interface FinancialDataApiGetAccountDirectDebitsRequest {
    /**
     * __Mandatory__. The account Id of the user\&#39;s bank account.
     * @type string
     * @memberof FinancialDataApigetAccountDirectDebits
     */
    accountId: string
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof FinancialDataApigetAccountDirectDebits
     */
    consent: string
    /**
     * __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @type number
     * @memberof FinancialDataApigetAccountDirectDebits
     */
    limit?: number
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof FinancialDataApigetAccountDirectDebits
     */
    raw?: boolean
}

export interface FinancialDataApiGetAccountPeriodicPaymentsRequest {
    /**
     * __Mandatory__. The account Id of the user\&#39;s bank account.
     * @type string
     * @memberof FinancialDataApigetAccountPeriodicPayments
     */
    accountId: string
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof FinancialDataApigetAccountPeriodicPayments
     */
    consent: string
    /**
     * __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @type number
     * @memberof FinancialDataApigetAccountPeriodicPayments
     */
    limit?: number
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof FinancialDataApigetAccountPeriodicPayments
     */
    raw?: boolean
}

export interface FinancialDataApiGetAccountScheduledPaymentsRequest {
    /**
     * __Mandatory__. The account Id of the user\&#39;s bank account.
     * @type string
     * @memberof FinancialDataApigetAccountScheduledPayments
     */
    accountId: string
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof FinancialDataApigetAccountScheduledPayments
     */
    consent: string
    /**
     * __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @type number
     * @memberof FinancialDataApigetAccountScheduledPayments
     */
    limit?: number
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof FinancialDataApigetAccountScheduledPayments
     */
    raw?: boolean
}

export interface FinancialDataApiGetAccountsRequest {
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof FinancialDataApigetAccounts
     */
    consent: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof FinancialDataApigetAccounts
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof FinancialDataApigetAccounts
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof FinancialDataApigetAccounts
     */
    psuIpAddress?: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof FinancialDataApigetAccounts
     */
    raw?: boolean
}

export interface FinancialDataApiGetBeneficiariesRequest {
    /**
     * __Mandatory__. The account Id of the user\&#39;s bank account.
     * @type string
     * @memberof FinancialDataApigetBeneficiaries
     */
    accountId: string
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof FinancialDataApigetBeneficiaries
     */
    consent: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof FinancialDataApigetBeneficiaries
     */
    raw?: boolean
}

export interface FinancialDataApiGetCategoriesRequest {
    /**
     * __Mandatory__. The 2 letter country code e.g. \&#39;GB\&#39;.
     * @type string
     * @memberof FinancialDataApigetCategories
     */
    country: string
}

export interface FinancialDataApiGetIdentityRequest {
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof FinancialDataApigetIdentity
     */
    consent: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof FinancialDataApigetIdentity
     */
    raw?: boolean
}

export interface FinancialDataApiGetRealTimeTransactionsRequest {
    /**
     * __Mandatory__. The account Id of the user\&#39;s bank account.
     * @type string
     * @memberof FinancialDataApigetRealTimeTransactions
     */
    accountId: string
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof FinancialDataApigetRealTimeTransactions
     */
    consent: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof FinancialDataApigetRealTimeTransactions
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof FinancialDataApigetRealTimeTransactions
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof FinancialDataApigetRealTimeTransactions
     */
    psuIpAddress?: string
    /**
     * __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).
     * @type string
     * @memberof FinancialDataApigetRealTimeTransactions
     */
    _from?: string
    /**
     * __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).
     * @type string
     * @memberof FinancialDataApigetRealTimeTransactions
     */
    before?: string
    /**
     * __Optional__. The cursor token supplied by a previous call. The cursor represents a location in the data set.
     * @type string
     * @memberof FinancialDataApigetRealTimeTransactions
     */
    cursor?: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof FinancialDataApigetRealTimeTransactions
     */
    raw?: boolean
}

export interface FinancialDataApiGetStatementRequest {
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof FinancialDataApigetStatement
     */
    consent: string
    /**
     * __Mandatory__. The account Id of the user\&#39;s bank account.
     * @type string
     * @memberof FinancialDataApigetStatement
     */
    accountId: string
    /**
     * __Mandatory__. The statement Id of the statement file.
     * @type string
     * @memberof FinancialDataApigetStatement
     */
    statementId: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof FinancialDataApigetStatement
     */
    raw?: boolean
}

export interface FinancialDataApiGetStatementFileRequest {
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof FinancialDataApigetStatementFile
     */
    consent: string
    /**
     * __Mandatory__. The account Id of the user\&#39;s bank account.
     * @type string
     * @memberof FinancialDataApigetStatementFile
     */
    accountId: string
    /**
     * __Mandatory__. The statement Id of the statement file.
     * @type string
     * @memberof FinancialDataApigetStatementFile
     */
    statementId: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof FinancialDataApigetStatementFile
     */
    raw?: boolean
}

export interface FinancialDataApiGetStatementsRequest {
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof FinancialDataApigetStatements
     */
    consent: string
    /**
     * __Mandatory__. The account Id of the user\&#39;s bank account.
     * @type string
     * @memberof FinancialDataApigetStatements
     */
    accountId: string
    /**
     * __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ). 
     * @type string
     * @memberof FinancialDataApigetStatements
     */
    _from?: string
    /**
     * __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).
     * @type string
     * @memberof FinancialDataApigetStatements
     */
    before?: string
    /**
     * __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @type number
     * @memberof FinancialDataApigetStatements
     */
    limit?: number
    /**
     * __Optional__. Sort transaction records by date ascending with \&#39;date\&#39; or descending with \&#39;-date\&#39;. The default sort order is descending
     * @type SortEnum
     * @memberof FinancialDataApigetStatements
     */
    sort?: SortEnum
    /**
     * __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
     * @type number
     * @memberof FinancialDataApigetStatements
     */
    offset?: number
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof FinancialDataApigetStatements
     */
    raw?: boolean
}

export interface FinancialDataApiGetTransactionsRequest {
    /**
     * __Mandatory__. The account Id of the user\&#39;s bank account.
     * @type string
     * @memberof FinancialDataApigetTransactions
     */
    accountId: string
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof FinancialDataApigetTransactions
     */
    consent: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof FinancialDataApigetTransactions
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof FinancialDataApigetTransactions
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof FinancialDataApigetTransactions
     */
    psuIpAddress?: string
    /**
     * __Optional__. Acceptable value: &#x60;categorisation&#x60;. When set, will include enrichment data in the transactions returned. &lt;br&gt;&lt;br&gt;Enrichment data is optional, e.g. when \&#39;categorisation\&#39; enrichment data is requested, the enrichment response will include categorisation data and merchant name, only if it can be evaluated from the transaction. This service is limited for UK institution transactions currently.
     * @type Array&lt;string&gt;
     * @memberof FinancialDataApigetTransactions
     */
    _with?: Array<string>
    /**
     * __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ). 
     * @type string
     * @memberof FinancialDataApigetTransactions
     */
    _from?: string
    /**
     * __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).
     * @type string
     * @memberof FinancialDataApigetTransactions
     */
    before?: string
    /**
     * __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @type number
     * @memberof FinancialDataApigetTransactions
     */
    limit?: number
    /**
     * __Optional__. Sort transaction records by date ascending with \&#39;date\&#39; or descending with \&#39;-date\&#39;. The default sort order is descending
     * @type SortEnum
     * @memberof FinancialDataApigetTransactions
     */
    sort?: SortEnum
    /**
     * __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
     * @type number
     * @memberof FinancialDataApigetTransactions
     */
    offset?: number
    /**
     * __Optional__. This property is not currently in use.
     * @type string
     * @memberof FinancialDataApigetTransactions
     */
    cursor?: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof FinancialDataApigetTransactions
     */
    raw?: boolean
}

export class ObjectFinancialDataApi {
    private api: ObservableFinancialDataApi

    public constructor(configuration: Configuration, requestFactory?: FinancialDataApiRequestFactory, responseProcessor?: FinancialDataApiResponseProcessor) {
        this.api = new ObservableFinancialDataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the account and balance information for a user\'s specified account.<br><br>Feature: `ACCOUNT`
     * Get Account
     * @param param the request object
     */
    public getAccountWithHttpInfo(param: FinancialDataApiGetAccountRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfAccount>> {
        return this.api.getAccountWithHttpInfo(param.accountId, param.consent, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Returns the account and balance information for a user\'s specified account.<br><br>Feature: `ACCOUNT`
     * Get Account
     * @param param the request object
     */
    public getAccount(param: FinancialDataApiGetAccountRequest, options?: Configuration): Promise<ApiResponseOfAccount> {
        return this.api.getAccount(param.accountId, param.consent, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Returns the balance for the end user associated with the presented consent token.<br><br>Feature: `ACCOUNT_BALANCES`
     * Get Account Balances
     * @param param the request object
     */
    public getAccountBalancesWithHttpInfo(param: FinancialDataApiGetAccountBalancesRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfBalances>> {
        return this.api.getAccountBalancesWithHttpInfo(param.accountId, param.consent, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Returns the balance for the end user associated with the presented consent token.<br><br>Feature: `ACCOUNT_BALANCES`
     * Get Account Balances
     * @param param the request object
     */
    public getAccountBalances(param: FinancialDataApiGetAccountBalancesRequest, options?: Configuration): Promise<ApiResponseOfBalances> {
        return this.api.getAccountBalances(param.accountId, param.consent, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Returns the list of direct debits for an account.<br><br>Feature: `ACCOUNT_DIRECT_DEBITS`
     * Get Account Direct Debits
     * @param param the request object
     */
    public getAccountDirectDebitsWithHttpInfo(param: FinancialDataApiGetAccountDirectDebitsRequest, options?: Configuration): Promise<HttpInfo<ApiListResponseOfDirectDebitResponse>> {
        return this.api.getAccountDirectDebitsWithHttpInfo(param.accountId, param.consent, param.limit, param.raw,  options).toPromise();
    }

    /**
     * Returns the list of direct debits for an account.<br><br>Feature: `ACCOUNT_DIRECT_DEBITS`
     * Get Account Direct Debits
     * @param param the request object
     */
    public getAccountDirectDebits(param: FinancialDataApiGetAccountDirectDebitsRequest, options?: Configuration): Promise<ApiListResponseOfDirectDebitResponse> {
        return this.api.getAccountDirectDebits(param.accountId, param.consent, param.limit, param.raw,  options).toPromise();
    }

    /**
     * Returns the list of periodic payments (standing orders in the UK) for an account.<br><br>Feature: `ACCOUNT_PERIODIC_PAYMENTS`
     * Get Account Periodic Payments
     * @param param the request object
     */
    public getAccountPeriodicPaymentsWithHttpInfo(param: FinancialDataApiGetAccountPeriodicPaymentsRequest, options?: Configuration): Promise<HttpInfo<ApiListResponseOfPaymentResponse>> {
        return this.api.getAccountPeriodicPaymentsWithHttpInfo(param.accountId, param.consent, param.limit, param.raw,  options).toPromise();
    }

    /**
     * Returns the list of periodic payments (standing orders in the UK) for an account.<br><br>Feature: `ACCOUNT_PERIODIC_PAYMENTS`
     * Get Account Periodic Payments
     * @param param the request object
     */
    public getAccountPeriodicPayments(param: FinancialDataApiGetAccountPeriodicPaymentsRequest, options?: Configuration): Promise<ApiListResponseOfPaymentResponse> {
        return this.api.getAccountPeriodicPayments(param.accountId, param.consent, param.limit, param.raw,  options).toPromise();
    }

    /**
     * Returns the list of scheduled payments for an account.<br><br>Feature: `ACCOUNT_SCHEDULED_PAYMENTS`
     * Get Account Scheduled Payments
     * @param param the request object
     */
    public getAccountScheduledPaymentsWithHttpInfo(param: FinancialDataApiGetAccountScheduledPaymentsRequest, options?: Configuration): Promise<HttpInfo<ApiListResponseOfPaymentResponse>> {
        return this.api.getAccountScheduledPaymentsWithHttpInfo(param.accountId, param.consent, param.limit, param.raw,  options).toPromise();
    }

    /**
     * Returns the list of scheduled payments for an account.<br><br>Feature: `ACCOUNT_SCHEDULED_PAYMENTS`
     * Get Account Scheduled Payments
     * @param param the request object
     */
    public getAccountScheduledPayments(param: FinancialDataApiGetAccountScheduledPaymentsRequest, options?: Configuration): Promise<ApiListResponseOfPaymentResponse> {
        return this.api.getAccountScheduledPayments(param.accountId, param.consent, param.limit, param.raw,  options).toPromise();
    }

    /**
     * Returns all accounts and balances for the end user associated with the presented consent token.<br><br>Feature: `ACCOUNTS`
     * Get Accounts
     * @param param the request object
     */
    public getAccountsWithHttpInfo(param: FinancialDataApiGetAccountsRequest, options?: Configuration): Promise<HttpInfo<AccountApiListResponse>> {
        return this.api.getAccountsWithHttpInfo(param.consent, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Returns all accounts and balances for the end user associated with the presented consent token.<br><br>Feature: `ACCOUNTS`
     * Get Accounts
     * @param param the request object
     */
    public getAccounts(param: FinancialDataApiGetAccountsRequest, options?: Configuration): Promise<AccountApiListResponse> {
        return this.api.getAccounts(param.consent, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Returns all the beneficiaries of a user\'s account.<br><br>Feature: `ACCOUNT_BENEFICIARIES`
     * Get Account Beneficiaries
     * @param param the request object
     */
    public getBeneficiariesWithHttpInfo(param: FinancialDataApiGetBeneficiariesRequest, options?: Configuration): Promise<HttpInfo<ApiListResponseOfBeneficiary>> {
        return this.api.getBeneficiariesWithHttpInfo(param.accountId, param.consent, param.raw,  options).toPromise();
    }

    /**
     * Returns all the beneficiaries of a user\'s account.<br><br>Feature: `ACCOUNT_BENEFICIARIES`
     * Get Account Beneficiaries
     * @param param the request object
     */
    public getBeneficiaries(param: FinancialDataApiGetBeneficiariesRequest, options?: Configuration): Promise<ApiListResponseOfBeneficiary> {
        return this.api.getBeneficiaries(param.accountId, param.consent, param.raw,  options).toPromise();
    }

    /**
     * Used to retrieve the list of categories returned by the Yapily Categorisation engine for a given locale. <br><br>See [Data Enrichment](https://docs.yapily.com/pages/key-concepts/account-data/data-enrichment/intro-to-data-enrichment/) for more information.
     * Get Categories
     * @param param the request object
     */
    public getCategoriesWithHttpInfo(param: FinancialDataApiGetCategoriesRequest, options?: Configuration): Promise<HttpInfo<ApiListResponseOfCategory>> {
        return this.api.getCategoriesWithHttpInfo(param.country,  options).toPromise();
    }

    /**
     * Used to retrieve the list of categories returned by the Yapily Categorisation engine for a given locale. <br><br>See [Data Enrichment](https://docs.yapily.com/pages/key-concepts/account-data/data-enrichment/intro-to-data-enrichment/) for more information.
     * Get Categories
     * @param param the request object
     */
    public getCategories(param: FinancialDataApiGetCategoriesRequest, options?: Configuration): Promise<ApiListResponseOfCategory> {
        return this.api.getCategories(param.country,  options).toPromise();
    }

    /**
     * Returns the identity information for an account.<br><br>Feature: `IDENTITY`
     * Get Identity
     * @param param the request object
     */
    public getIdentityWithHttpInfo(param: FinancialDataApiGetIdentityRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfIdentity>> {
        return this.api.getIdentityWithHttpInfo(param.consent, param.raw,  options).toPromise();
    }

    /**
     * Returns the identity information for an account.<br><br>Feature: `IDENTITY`
     * Get Identity
     * @param param the request object
     */
    public getIdentity(param: FinancialDataApiGetIdentityRequest, options?: Configuration): Promise<ApiResponseOfIdentity> {
        return this.api.getIdentity(param.consent, param.raw,  options).toPromise();
    }

    /**
     * Used to get the account transactions for an account in real time with cursor pagination<br><br>Feature: `ACCOUNT_TRANSACTIONS`
     * Get Real Time Account Transactions
     * @param param the request object
     */
    public getRealTimeTransactionsWithHttpInfo(param: FinancialDataApiGetRealTimeTransactionsRequest, options?: Configuration): Promise<HttpInfo<ApiListResponseOfRealTimeTransaction>> {
        return this.api.getRealTimeTransactionsWithHttpInfo(param.accountId, param.consent, param.psuId, param.psuCorporateId, param.psuIpAddress, param._from, param.before, param.cursor, param.raw,  options).toPromise();
    }

    /**
     * Used to get the account transactions for an account in real time with cursor pagination<br><br>Feature: `ACCOUNT_TRANSACTIONS`
     * Get Real Time Account Transactions
     * @param param the request object
     */
    public getRealTimeTransactions(param: FinancialDataApiGetRealTimeTransactionsRequest, options?: Configuration): Promise<ApiListResponseOfRealTimeTransaction> {
        return this.api.getRealTimeTransactions(param.accountId, param.consent, param.psuId, param.psuCorporateId, param.psuIpAddress, param._from, param.before, param.cursor, param.raw,  options).toPromise();
    }

    /**
     * Returns a statement for an account.<br><br>Feature: `ACCOUNT_STATEMENT`
     * Get Account Statement
     * @param param the request object
     */
    public getStatementWithHttpInfo(param: FinancialDataApiGetStatementRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfAccountStatement>> {
        return this.api.getStatementWithHttpInfo(param.consent, param.accountId, param.statementId, param.raw,  options).toPromise();
    }

    /**
     * Returns a statement for an account.<br><br>Feature: `ACCOUNT_STATEMENT`
     * Get Account Statement
     * @param param the request object
     */
    public getStatement(param: FinancialDataApiGetStatementRequest, options?: Configuration): Promise<ApiResponseOfAccountStatement> {
        return this.api.getStatement(param.consent, param.accountId, param.statementId, param.raw,  options).toPromise();
    }

    /**
     * Returns a PDF file of a statement for an account.<br><br>Feature: `ACCOUNT_STATEMENT_FILE`
     * Get Account Statement File
     * @param param the request object
     */
    public getStatementFileWithHttpInfo(param: FinancialDataApiGetStatementFileRequest, options?: Configuration): Promise<HttpInfo<HttpFile>> {
        return this.api.getStatementFileWithHttpInfo(param.consent, param.accountId, param.statementId, param.raw,  options).toPromise();
    }

    /**
     * Returns a PDF file of a statement for an account.<br><br>Feature: `ACCOUNT_STATEMENT_FILE`
     * Get Account Statement File
     * @param param the request object
     */
    public getStatementFile(param: FinancialDataApiGetStatementFileRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.getStatementFile(param.consent, param.accountId, param.statementId, param.raw,  options).toPromise();
    }

    /**
     * Returns the list of statements for an account.<br><br>Feature: `ACCOUNT_STATEMENTS`
     * Get Account Statements
     * @param param the request object
     */
    public getStatementsWithHttpInfo(param: FinancialDataApiGetStatementsRequest, options?: Configuration): Promise<HttpInfo<ApiListResponseOfAccountStatement>> {
        return this.api.getStatementsWithHttpInfo(param.consent, param.accountId, param._from, param.before, param.limit, param.sort, param.offset, param.raw,  options).toPromise();
    }

    /**
     * Returns the list of statements for an account.<br><br>Feature: `ACCOUNT_STATEMENTS`
     * Get Account Statements
     * @param param the request object
     */
    public getStatements(param: FinancialDataApiGetStatementsRequest, options?: Configuration): Promise<ApiListResponseOfAccountStatement> {
        return this.api.getStatements(param.consent, param.accountId, param._from, param.before, param.limit, param.sort, param.offset, param.raw,  options).toPromise();
    }

    /**
     * Returns the account transactions for an account.<br><br>Feature: `ACCOUNT_TRANSACTIONS`
     * Get Account Transactions
     * @param param the request object
     */
    public getTransactionsWithHttpInfo(param: FinancialDataApiGetTransactionsRequest, options?: Configuration): Promise<HttpInfo<ApiListResponseOfTransaction>> {
        return this.api.getTransactionsWithHttpInfo(param.accountId, param.consent, param.psuId, param.psuCorporateId, param.psuIpAddress, param._with, param._from, param.before, param.limit, param.sort, param.offset, param.cursor, param.raw,  options).toPromise();
    }

    /**
     * Returns the account transactions for an account.<br><br>Feature: `ACCOUNT_TRANSACTIONS`
     * Get Account Transactions
     * @param param the request object
     */
    public getTransactions(param: FinancialDataApiGetTransactionsRequest, options?: Configuration): Promise<ApiListResponseOfTransaction> {
        return this.api.getTransactions(param.accountId, param.consent, param.psuId, param.psuCorporateId, param.psuIpAddress, param._with, param._from, param.before, param.limit, param.sort, param.offset, param.cursor, param.raw,  options).toPromise();
    }

}

import { ObservableFinancialProfileApi } from "./ObservableAPI";
import { FinancialProfileApiRequestFactory, FinancialProfileApiResponseProcessor} from "../apis/FinancialProfileApi";

export interface FinancialProfileApiCreateProfileConsentRequest {
    /**
     * __Mandatory__. The Yapily generated UUID for the user.
     * @type string
     * @memberof FinancialProfileApicreateProfileConsent
     */
    userUuid: string
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; obtained from the original authorisation.
     * @type string
     * @memberof FinancialProfileApicreateProfileConsent
     */
    consent: string
}

export interface FinancialProfileApiDeleteProfileConsentRequest {
    /**
     * __Mandatory__. The Yapily generated UUID for the user.
     * @type string
     * @memberof FinancialProfileApideleteProfileConsent
     */
    userUuid: string
    /**
     * __Mandatory__. The ID of the ProfileConsent
     * @type string
     * @memberof FinancialProfileApideleteProfileConsent
     */
    profileConsentId: string
}

export interface FinancialProfileApiGetBalancePredictionRequest {
    /**
     * __Mandatory__. The Yapily generated UUID for the user.
     * @type string
     * @memberof FinancialProfileApigetBalancePrediction
     */
    userUuid: string
}

export interface FinancialProfileApiGetProfileConsentRequest {
    /**
     * __Mandatory__. The Yapily generated UUID for the user.
     * @type string
     * @memberof FinancialProfileApigetProfileConsent
     */
    userUuid: string
    /**
     * __Mandatory__. The ID of the ProfileConsent
     * @type string
     * @memberof FinancialProfileApigetProfileConsent
     */
    profileConsentId: string
}

export interface FinancialProfileApiGetUserProfileRequest {
    /**
     * __Mandatory__. The Yapily generated UUID for the user.
     * @type string
     * @memberof FinancialProfileApigetUserProfile
     */
    userUuid: string
}

export class ObjectFinancialProfileApi {
    private api: ObservableFinancialProfileApi

    public constructor(configuration: Configuration, requestFactory?: FinancialProfileApiRequestFactory, responseProcessor?: FinancialProfileApiResponseProcessor) {
        this.api = new ObservableFinancialProfileApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Used to add a consent to a `Financial Profile` for a `User`.  The response is asynchronous, returned with pending status, while retrieval of financial data is commenced.  There is a limit of 10,000 transactions for enrichment.
     * Create Profile Consent
     * @param param the request object
     */
    public createProfileConsentWithHttpInfo(param: FinancialProfileApiCreateProfileConsentRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfFinancialProfileAuthorisationResponse>> {
        return this.api.createProfileConsentWithHttpInfo(param.userUuid, param.consent,  options).toPromise();
    }

    /**
     * Used to add a consent to a `Financial Profile` for a `User`.  The response is asynchronous, returned with pending status, while retrieval of financial data is commenced.  There is a limit of 10,000 transactions for enrichment.
     * Create Profile Consent
     * @param param the request object
     */
    public createProfileConsent(param: FinancialProfileApiCreateProfileConsentRequest, options?: Configuration): Promise<ApiResponseOfFinancialProfileAuthorisationResponse> {
        return this.api.createProfileConsent(param.userUuid, param.consent,  options).toPromise();
    }

    /**
     * Used to delete a `ProfileConsent` for a `User`. This will remove the consent and all associated financial data from the \'Financial Profile\'.
     * Delete Profile Consent
     * @param param the request object
     */
    public deleteProfileConsentWithHttpInfo(param: FinancialProfileApiDeleteProfileConsentRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfFinancialProfileConsentRemoveResponse>> {
        return this.api.deleteProfileConsentWithHttpInfo(param.userUuid, param.profileConsentId,  options).toPromise();
    }

    /**
     * Used to delete a `ProfileConsent` for a `User`. This will remove the consent and all associated financial data from the \'Financial Profile\'.
     * Delete Profile Consent
     * @param param the request object
     */
    public deleteProfileConsent(param: FinancialProfileApiDeleteProfileConsentRequest, options?: Configuration): Promise<ApiResponseOfFinancialProfileConsentRemoveResponse> {
        return this.api.deleteProfileConsent(param.userUuid, param.profileConsentId,  options).toPromise();
    }

    /**
     * Used to retrieve a `Balance Prediction Profile` for a `User`.  Status will be `PENDING` until all ProfileConsents are `COMPLETED`.
     * Get Predicted Balances
     * @param param the request object
     */
    public getBalancePredictionWithHttpInfo(param: FinancialProfileApiGetBalancePredictionRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfFinancialProfileBalancePrediction>> {
        return this.api.getBalancePredictionWithHttpInfo(param.userUuid,  options).toPromise();
    }

    /**
     * Used to retrieve a `Balance Prediction Profile` for a `User`.  Status will be `PENDING` until all ProfileConsents are `COMPLETED`.
     * Get Predicted Balances
     * @param param the request object
     */
    public getBalancePrediction(param: FinancialProfileApiGetBalancePredictionRequest, options?: Configuration): Promise<ApiResponseOfFinancialProfileBalancePrediction> {
        return this.api.getBalancePrediction(param.userUuid,  options).toPromise();
    }

    /**
     * Used to retrieve a specific ProfileConsent for a User.
     * Get Profile Consent
     * @param param the request object
     */
    public getProfileConsentWithHttpInfo(param: FinancialProfileApiGetProfileConsentRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfFinancialProfileConsent>> {
        return this.api.getProfileConsentWithHttpInfo(param.userUuid, param.profileConsentId,  options).toPromise();
    }

    /**
     * Used to retrieve a specific ProfileConsent for a User.
     * Get Profile Consent
     * @param param the request object
     */
    public getProfileConsent(param: FinancialProfileApiGetProfileConsentRequest, options?: Configuration): Promise<ApiResponseOfFinancialProfileConsent> {
        return this.api.getProfileConsent(param.userUuid, param.profileConsentId,  options).toPromise();
    }

    /**
     * Used to retrieve a `TransactionGroups` for a `User`.  Status will be `PENDING` until all ProfileConsents are `COMPLETED`.
     * Get Transaction Groups
     * @param param the request object
     */
    public getUserProfileWithHttpInfo(param: FinancialProfileApiGetUserProfileRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfFinancialProfile>> {
        return this.api.getUserProfileWithHttpInfo(param.userUuid,  options).toPromise();
    }

    /**
     * Used to retrieve a `TransactionGroups` for a `User`.  Status will be `PENDING` until all ProfileConsents are `COMPLETED`.
     * Get Transaction Groups
     * @param param the request object
     */
    public getUserProfile(param: FinancialProfileApiGetUserProfileRequest, options?: Configuration): Promise<ApiResponseOfFinancialProfile> {
        return this.api.getUserProfile(param.userUuid,  options).toPromise();
    }

}

import { ObservableHostedPagesApi } from "./ObservableAPI";
import { HostedPagesApiRequestFactory, HostedPagesApiResponseProcessor} from "../apis/HostedPagesApi";

export interface HostedPagesApiCreateHostedPaymentRequestRequest {
    /**
     * 
     * @type CreateHostedPaymentRequest
     * @memberof HostedPagesApicreateHostedPaymentRequest
     */
    createHostedPaymentRequest: CreateHostedPaymentRequest
}

export interface HostedPagesApiCreateHostedPaymentRequestLinkRequest {
    /**
     * 
     * @type CreateHostedPaymentRequestLink
     * @memberof HostedPagesApicreateHostedPaymentRequestLink
     */
    createHostedPaymentRequestLink: CreateHostedPaymentRequestLink
}

export interface HostedPagesApiCreateHostedVRPConsentRequestRequest {
    /**
     * __Mandatory__. The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     * @type string
     * @memberof HostedPagesApicreateHostedVRPConsentRequest
     */
    subApplication: string
    /**
     * 
     * @type CreateHostedVRPConsentRequest
     * @memberof HostedPagesApicreateHostedVRPConsentRequest
     */
    createHostedVRPConsentRequest: CreateHostedVRPConsentRequest
}

export interface HostedPagesApiCreateHostedVrpFundsConfirmationRequest {
    /**
     * Unique Identifier of the Consent Request
     * @type string
     * @memberof HostedPagesApicreateHostedVrpFundsConfirmation
     */
    consentRequestId: string
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof HostedPagesApicreateHostedVrpFundsConfirmation
     */
    consentToken: string
    /**
     * 
     * @type FundsConfirmationRequest
     * @memberof HostedPagesApicreateHostedVrpFundsConfirmation
     */
    fundsConfirmationRequest: FundsConfirmationRequest
    /**
     * The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     * @type string
     * @memberof HostedPagesApicreateHostedVrpFundsConfirmation
     */
    subApplication?: string
}

export interface HostedPagesApiCreateHostedVrpPaymentRequest {
    /**
     * Unique Identifier of the Consent Request
     * @type string
     * @memberof HostedPagesApicreateHostedVrpPayment
     */
    consentRequestId: string
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof HostedPagesApicreateHostedVrpPayment
     */
    consentToken: string
    /**
     * 
     * @type CreateHostedVRPPaymentRequest
     * @memberof HostedPagesApicreateHostedVrpPayment
     */
    createHostedVRPPaymentRequest: CreateHostedVRPPaymentRequest
    /**
     * The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     * @type string
     * @memberof HostedPagesApicreateHostedVrpPayment
     */
    subApplication?: string
}

export interface HostedPagesApiGetHostedConsentRequestRequest {
    /**
     * Unique Identifier of the Consent Request
     * @type string
     * @memberof HostedPagesApigetHostedConsentRequest
     */
    consentRequestId: string
    /**
     * The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     * @type string
     * @memberof HostedPagesApigetHostedConsentRequest
     */
    subApplication?: string
}

export interface HostedPagesApiGetHostedPaymentRequestRequest {
    /**
     * Unique Identifier of the payment request
     * @type string
     * @memberof HostedPagesApigetHostedPaymentRequest
     */
    paymentRequestId: string
}

export interface HostedPagesApiGetHostedVRPConsentRequestsRequest {
    /**
     * __Mandatory__. The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     * @type string
     * @memberof HostedPagesApigetHostedVRPConsentRequests
     */
    subApplication: string
}

export interface HostedPagesApiGetHostedVRPPaymentRequestRequest {
    /**
     * Unique Identifier of the Consent Request
     * @type string
     * @memberof HostedPagesApigetHostedVRPPaymentRequest
     */
    consentRequestId: string
    /**
     * Unique Identifier of the Consent Request
     * @type string
     * @memberof HostedPagesApigetHostedVRPPaymentRequest
     */
    paymentId: string
    /**
     * The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     * @type string
     * @memberof HostedPagesApigetHostedVRPPaymentRequest
     */
    subApplication?: string
}

export interface HostedPagesApiRevokeHostedConsentRequestRequest {
    /**
     * Unique Identifier of the Consent Request
     * @type string
     * @memberof HostedPagesApirevokeHostedConsentRequest
     */
    consentRequestId: string
    /**
     * The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     * @type string
     * @memberof HostedPagesApirevokeHostedConsentRequest
     */
    subApplication?: string
}

export class ObjectHostedPagesApi {
    private api: ObservableHostedPagesApi

    public constructor(configuration: Configuration, requestFactory?: HostedPagesApiRequestFactory, responseProcessor?: HostedPagesApiResponseProcessor) {
        this.api = new ObservableHostedPagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Used to initiate a payment request using Yapily Hosted Pages.
     * Create Hosted payment request
     * @param param the request object
     */
    public createHostedPaymentRequestWithHttpInfo(param: HostedPagesApiCreateHostedPaymentRequestRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfCreateHostedPaymentRequest>> {
        return this.api.createHostedPaymentRequestWithHttpInfo(param.createHostedPaymentRequest,  options).toPromise();
    }

    /**
     * Used to initiate a payment request using Yapily Hosted Pages.
     * Create Hosted payment request
     * @param param the request object
     */
    public createHostedPaymentRequest(param: HostedPagesApiCreateHostedPaymentRequestRequest, options?: Configuration): Promise<ApiResponseOfCreateHostedPaymentRequest> {
        return this.api.createHostedPaymentRequest(param.createHostedPaymentRequest,  options).toPromise();
    }

    /**
     * Used to created a long lived payment request for Pay By Link
     * Create Pay By Link
     * @param param the request object
     */
    public createHostedPaymentRequestLinkWithHttpInfo(param: HostedPagesApiCreateHostedPaymentRequestLinkRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfCreateHostedPaymentRequestLink>> {
        return this.api.createHostedPaymentRequestLinkWithHttpInfo(param.createHostedPaymentRequestLink,  options).toPromise();
    }

    /**
     * Used to created a long lived payment request for Pay By Link
     * Create Pay By Link
     * @param param the request object
     */
    public createHostedPaymentRequestLink(param: HostedPagesApiCreateHostedPaymentRequestLinkRequest, options?: Configuration): Promise<ApiResponseOfCreateHostedPaymentRequestLink> {
        return this.api.createHostedPaymentRequestLink(param.createHostedPaymentRequestLink,  options).toPromise();
    }

    /**
     * Used to initiate a VRP consent / mandate request through Yapily Hosted Pages
     * Create VRP Consent
     * @param param the request object
     */
    public createHostedVRPConsentRequestWithHttpInfo(param: HostedPagesApiCreateHostedVRPConsentRequestRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfCreateHostedVRPConsentRequest>> {
        return this.api.createHostedVRPConsentRequestWithHttpInfo(param.subApplication, param.createHostedVRPConsentRequest,  options).toPromise();
    }

    /**
     * Used to initiate a VRP consent / mandate request through Yapily Hosted Pages
     * Create VRP Consent
     * @param param the request object
     */
    public createHostedVRPConsentRequest(param: HostedPagesApiCreateHostedVRPConsentRequestRequest, options?: Configuration): Promise<ApiResponseOfCreateHostedVRPConsentRequest> {
        return this.api.createHostedVRPConsentRequest(param.subApplication, param.createHostedVRPConsentRequest,  options).toPromise();
    }

    /**
     * Confirms whether there are available funds on the Payer account to execute a Variable Recurring Payment after obtaining the user\'s authorisation. <br><br>Features:<ul><li>`VARIABLE_RECURRING_PAYMENT_FUNDS_CONFIRMATION`</li></ul>
     * Check Funds Availability
     * @param param the request object
     */
    public createHostedVrpFundsConfirmationWithHttpInfo(param: HostedPagesApiCreateHostedVrpFundsConfirmationRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfFundsConfirmationResponse>> {
        return this.api.createHostedVrpFundsConfirmationWithHttpInfo(param.consentRequestId, param.consentToken, param.fundsConfirmationRequest, param.subApplication,  options).toPromise();
    }

    /**
     * Confirms whether there are available funds on the Payer account to execute a Variable Recurring Payment after obtaining the user\'s authorisation. <br><br>Features:<ul><li>`VARIABLE_RECURRING_PAYMENT_FUNDS_CONFIRMATION`</li></ul>
     * Check Funds Availability
     * @param param the request object
     */
    public createHostedVrpFundsConfirmation(param: HostedPagesApiCreateHostedVrpFundsConfirmationRequest, options?: Configuration): Promise<ApiResponseOfFundsConfirmationResponse> {
        return this.api.createHostedVrpFundsConfirmation(param.consentRequestId, param.consentToken, param.fundsConfirmationRequest, param.subApplication,  options).toPromise();
    }

    /**
     * Creates a Variable Recurring Payment
     * Create VRP Payment
     * @param param the request object
     */
    public createHostedVrpPaymentWithHttpInfo(param: HostedPagesApiCreateHostedVrpPaymentRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfCreateHostedVRPPaymentRequest>> {
        return this.api.createHostedVrpPaymentWithHttpInfo(param.consentRequestId, param.consentToken, param.createHostedVRPPaymentRequest, param.subApplication,  options).toPromise();
    }

    /**
     * Creates a Variable Recurring Payment
     * Create VRP Payment
     * @param param the request object
     */
    public createHostedVrpPayment(param: HostedPagesApiCreateHostedVrpPaymentRequest, options?: Configuration): Promise<ApiResponseOfCreateHostedVRPPaymentRequest> {
        return this.api.createHostedVrpPayment(param.consentRequestId, param.consentToken, param.createHostedVRPPaymentRequest, param.subApplication,  options).toPromise();
    }

    /**
     * Used to get details of a VRP Consent Request
     * Get Hosted VRP Consent Request
     * @param param the request object
     */
    public getHostedConsentRequestWithHttpInfo(param: HostedPagesApiGetHostedConsentRequestRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfGetHostedVRPConsentRequest>> {
        return this.api.getHostedConsentRequestWithHttpInfo(param.consentRequestId, param.subApplication,  options).toPromise();
    }

    /**
     * Used to get details of a VRP Consent Request
     * Get Hosted VRP Consent Request
     * @param param the request object
     */
    public getHostedConsentRequest(param: HostedPagesApiGetHostedConsentRequestRequest, options?: Configuration): Promise<ApiResponseOfGetHostedVRPConsentRequest> {
        return this.api.getHostedConsentRequest(param.consentRequestId, param.subApplication,  options).toPromise();
    }

    /**
     * Used to get details of a payment request
     * Get Hosted payment request
     * @param param the request object
     */
    public getHostedPaymentRequestWithHttpInfo(param: HostedPagesApiGetHostedPaymentRequestRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfGetHostedPaymentRequest>> {
        return this.api.getHostedPaymentRequestWithHttpInfo(param.paymentRequestId,  options).toPromise();
    }

    /**
     * Used to get details of a payment request
     * Get Hosted payment request
     * @param param the request object
     */
    public getHostedPaymentRequest(param: HostedPagesApiGetHostedPaymentRequestRequest, options?: Configuration): Promise<ApiResponseOfGetHostedPaymentRequest> {
        return this.api.getHostedPaymentRequest(param.paymentRequestId,  options).toPromise();
    }

    /**
     * Used to get all VRP consent requests initiated through Yapily Hosted Pages
     * Get Hosted VRP Consent Requests
     * @param param the request object
     */
    public getHostedVRPConsentRequestsWithHttpInfo(param: HostedPagesApiGetHostedVRPConsentRequestsRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfGetHostedVRPConsentsRequest>> {
        return this.api.getHostedVRPConsentRequestsWithHttpInfo(param.subApplication,  options).toPromise();
    }

    /**
     * Used to get all VRP consent requests initiated through Yapily Hosted Pages
     * Get Hosted VRP Consent Requests
     * @param param the request object
     */
    public getHostedVRPConsentRequests(param: HostedPagesApiGetHostedVRPConsentRequestsRequest, options?: Configuration): Promise<ApiResponseOfGetHostedVRPConsentsRequest> {
        return this.api.getHostedVRPConsentRequests(param.subApplication,  options).toPromise();
    }

    /**
     * Used to get details of a VRP Payment
     * Get VRP payment
     * @param param the request object
     */
    public getHostedVRPPaymentRequestWithHttpInfo(param: HostedPagesApiGetHostedVRPPaymentRequestRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfGetHostedVRPPaymentRequest>> {
        return this.api.getHostedVRPPaymentRequestWithHttpInfo(param.consentRequestId, param.paymentId, param.subApplication,  options).toPromise();
    }

    /**
     * Used to get details of a VRP Payment
     * Get VRP payment
     * @param param the request object
     */
    public getHostedVRPPaymentRequest(param: HostedPagesApiGetHostedVRPPaymentRequestRequest, options?: Configuration): Promise<ApiResponseOfGetHostedVRPPaymentRequest> {
        return this.api.getHostedVRPPaymentRequest(param.consentRequestId, param.paymentId, param.subApplication,  options).toPromise();
    }

    /**
     * Revoke Hosted VRP Consent Request
     * Revoke Hosted VRP Consent Request
     * @param param the request object
     */
    public revokeHostedConsentRequestWithHttpInfo(param: HostedPagesApiRevokeHostedConsentRequestRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfRevokeHostedVRPConsentRequest>> {
        return this.api.revokeHostedConsentRequestWithHttpInfo(param.consentRequestId, param.subApplication,  options).toPromise();
    }

    /**
     * Revoke Hosted VRP Consent Request
     * Revoke Hosted VRP Consent Request
     * @param param the request object
     */
    public revokeHostedConsentRequest(param: HostedPagesApiRevokeHostedConsentRequestRequest, options?: Configuration): Promise<ApiResponseOfRevokeHostedVRPConsentRequest> {
        return this.api.revokeHostedConsentRequest(param.consentRequestId, param.subApplication,  options).toPromise();
    }

}

import { ObservableInstitutionsApi } from "./ObservableAPI";
import { InstitutionsApiRequestFactory, InstitutionsApiResponseProcessor} from "../apis/InstitutionsApi";

export interface InstitutionsApiGetFeatureDetailsRequest {
}

export interface InstitutionsApiGetInstitutionRequest {
    /**
     * __Mandatory__. The Yapily institution Id for the &#x60;Institution&#x60;.
     * @type string
     * @memberof InstitutionsApigetInstitution
     */
    institutionId: string
}

export interface InstitutionsApiGetInstitutionsRequest {
}

export class ObjectInstitutionsApi {
    private api: ObservableInstitutionsApi

    public constructor(configuration: Configuration, requestFactory?: InstitutionsApiRequestFactory, responseProcessor?: InstitutionsApiResponseProcessor) {
        this.api = new ObservableInstitutionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Used to retrieve all features available from Yapily. Each `Institution` supports a one, many or all of these features and can be seen in the features field of the `Institution` object.<br><br>Note: Every `Institution` does not necessarily support every feature. To see which features are available for a particular Institution, use either the [Get Institutions](https://docs.yapily.com/api/reference/#operation/getInstitutions) or [Get Institution](https://docs.yapily.com/api/reference/#operation/getInstitution) endpoint and check the features array within the `Institution` payload.
     * Get Features
     * @param param the request object
     */
    public getFeatureDetailsWithHttpInfo(param: InstitutionsApiGetFeatureDetailsRequest = {}, options?: Configuration): Promise<HttpInfo<ApiListResponseOfFeatureDetails>> {
        return this.api.getFeatureDetailsWithHttpInfo( options).toPromise();
    }

    /**
     * Used to retrieve all features available from Yapily. Each `Institution` supports a one, many or all of these features and can be seen in the features field of the `Institution` object.<br><br>Note: Every `Institution` does not necessarily support every feature. To see which features are available for a particular Institution, use either the [Get Institutions](https://docs.yapily.com/api/reference/#operation/getInstitutions) or [Get Institution](https://docs.yapily.com/api/reference/#operation/getInstitution) endpoint and check the features array within the `Institution` payload.
     * Get Features
     * @param param the request object
     */
    public getFeatureDetails(param: InstitutionsApiGetFeatureDetailsRequest = {}, options?: Configuration): Promise<ApiListResponseOfFeatureDetails> {
        return this.api.getFeatureDetails( options).toPromise();
    }

    /**
     * Used to retrieves details of a specific `Institution` within an application
     * Get Institution
     * @param param the request object
     */
    public getInstitutionWithHttpInfo(param: InstitutionsApiGetInstitutionRequest, options?: Configuration): Promise<HttpInfo<Institution>> {
        return this.api.getInstitutionWithHttpInfo(param.institutionId,  options).toPromise();
    }

    /**
     * Used to retrieves details of a specific `Institution` within an application
     * Get Institution
     * @param param the request object
     */
    public getInstitution(param: InstitutionsApiGetInstitutionRequest, options?: Configuration): Promise<Institution> {
        return this.api.getInstitution(param.institutionId,  options).toPromise();
    }

    /**
     * Used to retrieve all `Institutions` within an application
     * Get Institutions
     * @param param the request object
     */
    public getInstitutionsWithHttpInfo(param: InstitutionsApiGetInstitutionsRequest = {}, options?: Configuration): Promise<HttpInfo<ApiListResponseOfInstitution>> {
        return this.api.getInstitutionsWithHttpInfo( options).toPromise();
    }

    /**
     * Used to retrieve all `Institutions` within an application
     * Get Institutions
     * @param param the request object
     */
    public getInstitutions(param: InstitutionsApiGetInstitutionsRequest = {}, options?: Configuration): Promise<ApiListResponseOfInstitution> {
        return this.api.getInstitutions( options).toPromise();
    }

}

import { ObservableNotificationsApi } from "./ObservableAPI";
import { NotificationsApiRequestFactory, NotificationsApiResponseProcessor} from "../apis/NotificationsApi";

export interface NotificationsApiCreateEventSubscriptionRequest {
    /**
     * 
     * @type EventSubscriptionRequest
     * @memberof NotificationsApicreateEventSubscription
     */
    eventSubscriptionRequest: EventSubscriptionRequest
}

export interface NotificationsApiDeleteEventSubscriptionByIdRequest {
    /**
     * Unique identifier of the event type (for which notifications will be sent). 
     * @type string
     * @memberof NotificationsApideleteEventSubscriptionById
     */
    eventTypeId: string
}

export interface NotificationsApiGetEventSubscriptionByIdRequest {
    /**
     * Unique identifier of the event type (for which notifications will be sent). 
     * @type string
     * @memberof NotificationsApigetEventSubscriptionById
     */
    eventTypeId: string
}

export interface NotificationsApiGetEventSubscriptionsRequest {
}

export class ObjectNotificationsApi {
    private api: ObservableNotificationsApi

    public constructor(configuration: Configuration, requestFactory?: NotificationsApiRequestFactory, responseProcessor?: NotificationsApiResponseProcessor) {
        this.api = new ObservableNotificationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Used to subscribe to notifications relating to a specified event type.
     * Create Event Subscription
     * @param param the request object
     */
    public createEventSubscriptionWithHttpInfo(param: NotificationsApiCreateEventSubscriptionRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfEventSubscriptionResponse>> {
        return this.api.createEventSubscriptionWithHttpInfo(param.eventSubscriptionRequest,  options).toPromise();
    }

    /**
     * Used to subscribe to notifications relating to a specified event type.
     * Create Event Subscription
     * @param param the request object
     */
    public createEventSubscription(param: NotificationsApiCreateEventSubscriptionRequest, options?: Configuration): Promise<ApiResponseOfEventSubscriptionResponse> {
        return this.api.createEventSubscription(param.eventSubscriptionRequest,  options).toPromise();
    }

    /**
     * Used to unsubscribe to notifications relating to a specified event type.
     * Delete Event Subscription
     * @param param the request object
     */
    public deleteEventSubscriptionByIdWithHttpInfo(param: NotificationsApiDeleteEventSubscriptionByIdRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfEventSubscriptionDeleteResponse>> {
        return this.api.deleteEventSubscriptionByIdWithHttpInfo(param.eventTypeId,  options).toPromise();
    }

    /**
     * Used to unsubscribe to notifications relating to a specified event type.
     * Delete Event Subscription
     * @param param the request object
     */
    public deleteEventSubscriptionById(param: NotificationsApiDeleteEventSubscriptionByIdRequest, options?: Configuration): Promise<ApiResponseOfEventSubscriptionDeleteResponse> {
        return this.api.deleteEventSubscriptionById(param.eventTypeId,  options).toPromise();
    }

    /**
     * Used to get details of your subscription to a specified event type.
     * Get Event Subscription
     * @param param the request object
     */
    public getEventSubscriptionByIdWithHttpInfo(param: NotificationsApiGetEventSubscriptionByIdRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfEventSubscriptionResponse>> {
        return this.api.getEventSubscriptionByIdWithHttpInfo(param.eventTypeId,  options).toPromise();
    }

    /**
     * Used to get details of your subscription to a specified event type.
     * Get Event Subscription
     * @param param the request object
     */
    public getEventSubscriptionById(param: NotificationsApiGetEventSubscriptionByIdRequest, options?: Configuration): Promise<ApiResponseOfEventSubscriptionResponse> {
        return this.api.getEventSubscriptionById(param.eventTypeId,  options).toPromise();
    }

    /**
     * Get all event subscriptions that your application is subscribed to
     * Get Event Subscriptions
     * @param param the request object
     */
    public getEventSubscriptionsWithHttpInfo(param: NotificationsApiGetEventSubscriptionsRequest = {}, options?: Configuration): Promise<HttpInfo<ApiListResponseOfEventSubscriptionResponse>> {
        return this.api.getEventSubscriptionsWithHttpInfo( options).toPromise();
    }

    /**
     * Get all event subscriptions that your application is subscribed to
     * Get Event Subscriptions
     * @param param the request object
     */
    public getEventSubscriptions(param: NotificationsApiGetEventSubscriptionsRequest = {}, options?: Configuration): Promise<ApiListResponseOfEventSubscriptionResponse> {
        return this.api.getEventSubscriptions( options).toPromise();
    }

}

import { ObservablePaymentsApi } from "./ObservableAPI";
import { PaymentsApiRequestFactory, PaymentsApiResponseProcessor} from "../apis/PaymentsApi";

export interface PaymentsApiCreateBulkPaymentRequest {
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof PaymentsApicreateBulkPayment
     */
    consent: string
    /**
     * 
     * @type BulkPaymentRequest
     * @memberof PaymentsApicreateBulkPayment
     */
    bulkPaymentRequest: BulkPaymentRequest
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof PaymentsApicreateBulkPayment
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof PaymentsApicreateBulkPayment
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof PaymentsApicreateBulkPayment
     */
    psuIpAddress?: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof PaymentsApicreateBulkPayment
     */
    raw?: boolean
}

export interface PaymentsApiCreatePaymentRequest {
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof PaymentsApicreatePayment
     */
    consent: string
    /**
     * 
     * @type PaymentRequest
     * @memberof PaymentsApicreatePayment
     */
    paymentRequest: PaymentRequest
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof PaymentsApicreatePayment
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof PaymentsApicreatePayment
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof PaymentsApicreatePayment
     */
    psuIpAddress?: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof PaymentsApicreatePayment
     */
    raw?: boolean
}

export interface PaymentsApiGetPaymentsRequest {
    /**
     * __Mandatory__. The payment Id of the payment.
     * @type string
     * @memberof PaymentsApigetPayments
     */
    paymentId: string
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof PaymentsApigetPayments
     */
    consent: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof PaymentsApigetPayments
     */
    psuId?: string
    /**
     * __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof PaymentsApigetPayments
     */
    psuCorporateId?: string
    /**
     * __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @type string
     * @memberof PaymentsApigetPayments
     */
    psuIpAddress?: string
    /**
     * __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @type boolean
     * @memberof PaymentsApigetPayments
     */
    raw?: boolean
}

export class ObjectPaymentsApi {
    private api: ObservablePaymentsApi

    public constructor(configuration: Configuration, requestFactory?: PaymentsApiRequestFactory, responseProcessor?: PaymentsApiResponseProcessor) {
        this.api = new ObservablePaymentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a bulk payment after obtaining the user\'s authorisation. <br><br>Feature: `CREATE_BULK_PAYMENT`
     * Create Bulk Payment
     * @param param the request object
     */
    public createBulkPaymentWithHttpInfo(param: PaymentsApiCreateBulkPaymentRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfPaymentResponse>> {
        return this.api.createBulkPaymentWithHttpInfo(param.consent, param.bulkPaymentRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Creates a bulk payment after obtaining the user\'s authorisation. <br><br>Feature: `CREATE_BULK_PAYMENT`
     * Create Bulk Payment
     * @param param the request object
     */
    public createBulkPayment(param: PaymentsApiCreateBulkPaymentRequest, options?: Configuration): Promise<ApiResponseOfPaymentResponse> {
        return this.api.createBulkPayment(param.consent, param.bulkPaymentRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Creates a payment after obtaining the user\'s authorisation. <br><br>Features:<ul><li>`CREATE_DOMESTIC_PERIODIC_PAYMENT`</li><li>`CREATE_DOMESTIC_SCHEDULED_PAYMENT`</li><li>`CREATE_DOMESTIC_SINGLE_INSTANT_PAYMENT`</li><li>`CREATE_DOMESTIC_SINGLE_PAYMENT`</li><li>`CREATE_INTERNATIONAL_PERIODIC_PAYMENT`</li><li>`CREATE_INTERNATIONAL_SCHEDULED_PAYMENT`</li><li>`CREATE_INTERNATIONAL_SINGLE_PAYMENT`</li></ul>
     * Create Payment
     * @param param the request object
     */
    public createPaymentWithHttpInfo(param: PaymentsApiCreatePaymentRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfPaymentResponse>> {
        return this.api.createPaymentWithHttpInfo(param.consent, param.paymentRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Creates a payment after obtaining the user\'s authorisation. <br><br>Features:<ul><li>`CREATE_DOMESTIC_PERIODIC_PAYMENT`</li><li>`CREATE_DOMESTIC_SCHEDULED_PAYMENT`</li><li>`CREATE_DOMESTIC_SINGLE_INSTANT_PAYMENT`</li><li>`CREATE_DOMESTIC_SINGLE_PAYMENT`</li><li>`CREATE_INTERNATIONAL_PERIODIC_PAYMENT`</li><li>`CREATE_INTERNATIONAL_SCHEDULED_PAYMENT`</li><li>`CREATE_INTERNATIONAL_SINGLE_PAYMENT`</li></ul>
     * Create Payment
     * @param param the request object
     */
    public createPayment(param: PaymentsApiCreatePaymentRequest, options?: Configuration): Promise<ApiResponseOfPaymentResponse> {
        return this.api.createPayment(param.consent, param.paymentRequest, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Returns the details of a payment. <br><br>Most commonly used to check for payment status updates. <br><br>Feature: `EXISTING_PAYMENTS_DETAILS`
     * Get Payment Details
     * @param param the request object
     */
    public getPaymentsWithHttpInfo(param: PaymentsApiGetPaymentsRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfPaymentResponses>> {
        return this.api.getPaymentsWithHttpInfo(param.paymentId, param.consent, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

    /**
     * Returns the details of a payment. <br><br>Most commonly used to check for payment status updates. <br><br>Feature: `EXISTING_PAYMENTS_DETAILS`
     * Get Payment Details
     * @param param the request object
     */
    public getPayments(param: PaymentsApiGetPaymentsRequest, options?: Configuration): Promise<ApiResponseOfPaymentResponses> {
        return this.api.getPayments(param.paymentId, param.consent, param.psuId, param.psuCorporateId, param.psuIpAddress, param.raw,  options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiAddUserRequest {
    /**
     * 
     * @type NewApplicationUser
     * @memberof UsersApiaddUser
     */
    newApplicationUser: NewApplicationUser
}

export interface UsersApiDeleteUserRequest {
    /**
     * __Mandatory__. The Yapily generated UUID for the user.
     * @type string
     * @memberof UsersApideleteUser
     */
    userUuid: string
}

export interface UsersApiGetUserRequest {
    /**
     * __Mandatory__. The Yapily generated UUID for the user.
     * @type string
     * @memberof UsersApigetUser
     */
    userUuid: string
}

export interface UsersApiGetUsersRequest {
    /**
     * __Optional__. Filter records based on the list of &#x60;applicationUserId&#x60; users provided.
     * @type Set&lt;string&gt;
     * @memberof UsersApigetUsers
     */
    filterApplicationUserId?: Set<string>
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new user in your application
     * Create User
     * @param param the request object
     */
    public addUserWithHttpInfo(param: UsersApiAddUserRequest, options?: Configuration): Promise<HttpInfo<ApplicationUser>> {
        return this.api.addUserWithHttpInfo(param.newApplicationUser,  options).toPromise();
    }

    /**
     * Create a new user in your application
     * Create User
     * @param param the request object
     */
    public addUser(param: UsersApiAddUserRequest, options?: Configuration): Promise<ApplicationUser> {
        return this.api.addUser(param.newApplicationUser,  options).toPromise();
    }

    /**
     * Delete a user from your application along with any sub-resources (including consent resources on institution APIs if they exist)
     * Delete User
     * @param param the request object
     */
    public deleteUserWithHttpInfo(param: UsersApiDeleteUserRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfUserDeleteResponse>> {
        return this.api.deleteUserWithHttpInfo(param.userUuid,  options).toPromise();
    }

    /**
     * Delete a user from your application along with any sub-resources (including consent resources on institution APIs if they exist)
     * Delete User
     * @param param the request object
     */
    public deleteUser(param: UsersApiDeleteUserRequest, options?: Configuration): Promise<ApiResponseOfUserDeleteResponse> {
        return this.api.deleteUser(param.userUuid,  options).toPromise();
    }

    /**
     * Get a specific user using the user UUID
     * Get User
     * @param param the request object
     */
    public getUserWithHttpInfo(param: UsersApiGetUserRequest, options?: Configuration): Promise<HttpInfo<ApplicationUser>> {
        return this.api.getUserWithHttpInfo(param.userUuid,  options).toPromise();
    }

    /**
     * Get a specific user using the user UUID
     * Get User
     * @param param the request object
     */
    public getUser(param: UsersApiGetUserRequest, options?: Configuration): Promise<ApplicationUser> {
        return this.api.getUser(param.userUuid,  options).toPromise();
    }

    /**
     * Get all the users configured in your application
     * Get Users
     * @param param the request object
     */
    public getUsersWithHttpInfo(param: UsersApiGetUsersRequest = {}, options?: Configuration): Promise<HttpInfo<Array<ApplicationUser>>> {
        return this.api.getUsersWithHttpInfo(param.filterApplicationUserId,  options).toPromise();
    }

    /**
     * Get all the users configured in your application
     * Get Users
     * @param param the request object
     */
    public getUsers(param: UsersApiGetUsersRequest = {}, options?: Configuration): Promise<Array<ApplicationUser>> {
        return this.api.getUsers(param.filterApplicationUserId,  options).toPromise();
    }

}

import { ObservableVariableRecurringPaymentsApi } from "./ObservableAPI";
import { VariableRecurringPaymentsApiRequestFactory, VariableRecurringPaymentsApiResponseProcessor} from "../apis/VariableRecurringPaymentsApi";

export interface VariableRecurringPaymentsApiCreateNonSweepingAuthorisationRequest {
    /**
     * 
     * @type NonSweepingAuthorisationRequest
     * @memberof VariableRecurringPaymentsApicreateNonSweepingAuthorisation
     */
    nonSweepingAuthorisationRequest: NonSweepingAuthorisationRequest
}

export interface VariableRecurringPaymentsApiCreateSweepingAuthorisationRequest {
    /**
     * 
     * @type SweepingAuthorisationRequest
     * @memberof VariableRecurringPaymentsApicreateSweepingAuthorisation
     */
    sweepingAuthorisationRequest: SweepingAuthorisationRequest
}

export interface VariableRecurringPaymentsApiCreateVrpFundsConfirmationRequest {
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof VariableRecurringPaymentsApicreateVrpFundsConfirmation
     */
    consent: string
    /**
     * 
     * @type FundsConfirmationRequest
     * @memberof VariableRecurringPaymentsApicreateVrpFundsConfirmation
     */
    fundsConfirmationRequest: FundsConfirmationRequest
}

export interface VariableRecurringPaymentsApiCreateVrpPaymentRequest {
    /**
     * __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @type string
     * @memberof VariableRecurringPaymentsApicreateVrpPayment
     */
    consent: string
    /**
     * 
     * @type SubmissionRequest
     * @memberof VariableRecurringPaymentsApicreateVrpPayment
     */
    submissionRequest: SubmissionRequest
}

export interface VariableRecurringPaymentsApiGetNonSweepingVrpConsentByIdRequest {
    /**
     * __Mandatory__. The consent Id of the &#x60;Variable Recurring Payments Consent&#x60; to retrieve.
     * @type string
     * @memberof VariableRecurringPaymentsApigetNonSweepingVrpConsentById
     */
    consentId: string
}

export interface VariableRecurringPaymentsApiGetSweepingVrpConsentByIdRequest {
    /**
     * __Mandatory__. The consent Id of the &#x60;Variable Recurring Payments Consent&#x60; to retrieve.
     * @type string
     * @memberof VariableRecurringPaymentsApigetSweepingVrpConsentById
     */
    consentId: string
}

export interface VariableRecurringPaymentsApiGetVrpPaymentDetailsRequest {
    /**
     * __Mandatory__. The Payment Id of the &#x60;Variable Recurring Payments&#x60; to retrieve.
     * @type string
     * @memberof VariableRecurringPaymentsApigetVrpPaymentDetails
     */
    paymentId: string
    /**
     * __Mandatory__. The consent token containing the user\&#39;s authorisation to make the &#x60;Variable Recurring Payments&#x60; request.
     * @type string
     * @memberof VariableRecurringPaymentsApigetVrpPaymentDetails
     */
    consent: string
}

export class ObjectVariableRecurringPaymentsApi {
    private api: ObservableVariableRecurringPaymentsApi

    public constructor(configuration: Configuration, requestFactory?: VariableRecurringPaymentsApiRequestFactory, responseProcessor?: VariableRecurringPaymentsApiResponseProcessor) {
        this.api = new ObservableVariableRecurringPaymentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for Non-Sweeping Variable Recurring Payments. The request would return an Authorization URL and an Identifier for the consent created at the Institution. First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/#get-institution). <br><br>See [Redirect Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/redirect/) for more information about this flow.<br><br>Features:<ul><li>`INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_NONSWEEPING`</li></ul>
     * Create Non-Sweeping Variable Recurring Payment Authorisation
     * @param param the request object
     */
    public createNonSweepingAuthorisationWithHttpInfo(param: VariableRecurringPaymentsApiCreateNonSweepingAuthorisationRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfNonSweepingAuthorisationResponse>> {
        return this.api.createNonSweepingAuthorisationWithHttpInfo(param.nonSweepingAuthorisationRequest,  options).toPromise();
    }

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for Non-Sweeping Variable Recurring Payments. The request would return an Authorization URL and an Identifier for the consent created at the Institution. First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/#get-institution). <br><br>See [Redirect Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/redirect/) for more information about this flow.<br><br>Features:<ul><li>`INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_NONSWEEPING`</li></ul>
     * Create Non-Sweeping Variable Recurring Payment Authorisation
     * @param param the request object
     */
    public createNonSweepingAuthorisation(param: VariableRecurringPaymentsApiCreateNonSweepingAuthorisationRequest, options?: Configuration): Promise<ApiResponseOfNonSweepingAuthorisationResponse> {
        return this.api.createNonSweepingAuthorisation(param.nonSweepingAuthorisationRequest,  options).toPromise();
    }

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for Sweeping Variable Recurring Payments. The request would return an Authorization URL and an Identifier for the consent created at the Institution. First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/#get-institution). <br><br>See [Redirect Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/redirect/) for more information about this flow.<br><br>Features:<ul><li>`INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_SWEEPING`</li></ul>
     * Create Sweeping Variable Recurring Payment Authorisation
     * @param param the request object
     */
    public createSweepingAuthorisationWithHttpInfo(param: VariableRecurringPaymentsApiCreateSweepingAuthorisationRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfSweepingAuthorisationResponse>> {
        return this.api.createSweepingAuthorisationWithHttpInfo(param.sweepingAuthorisationRequest,  options).toPromise();
    }

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for Sweeping Variable Recurring Payments. The request would return an Authorization URL and an Identifier for the consent created at the Institution. First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/#get-institution). <br><br>See [Redirect Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/redirect/) for more information about this flow.<br><br>Features:<ul><li>`INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_SWEEPING`</li></ul>
     * Create Sweeping Variable Recurring Payment Authorisation
     * @param param the request object
     */
    public createSweepingAuthorisation(param: VariableRecurringPaymentsApiCreateSweepingAuthorisationRequest, options?: Configuration): Promise<ApiResponseOfSweepingAuthorisationResponse> {
        return this.api.createSweepingAuthorisation(param.sweepingAuthorisationRequest,  options).toPromise();
    }

    /**
     * Confirms whether there are available funds on the Payer account to execute a Variable Recurring Payment after obtaining the user\'s authorisation. <br><br>Features:<ul><li>`VARIABLE_RECURRING_PAYMENT_FUNDS_CONFIRMATION`</li></ul>
     * Confirm Funds for Variable Recurring Payment
     * @param param the request object
     */
    public createVrpFundsConfirmationWithHttpInfo(param: VariableRecurringPaymentsApiCreateVrpFundsConfirmationRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfFundsConfirmationResponse>> {
        return this.api.createVrpFundsConfirmationWithHttpInfo(param.consent, param.fundsConfirmationRequest,  options).toPromise();
    }

    /**
     * Confirms whether there are available funds on the Payer account to execute a Variable Recurring Payment after obtaining the user\'s authorisation. <br><br>Features:<ul><li>`VARIABLE_RECURRING_PAYMENT_FUNDS_CONFIRMATION`</li></ul>
     * Confirm Funds for Variable Recurring Payment
     * @param param the request object
     */
    public createVrpFundsConfirmation(param: VariableRecurringPaymentsApiCreateVrpFundsConfirmationRequest, options?: Configuration): Promise<ApiResponseOfFundsConfirmationResponse> {
        return this.api.createVrpFundsConfirmation(param.consent, param.fundsConfirmationRequest,  options).toPromise();
    }

    /**
     * Creates a Variable Recurring Payment transaction after obtaining the user\'s authorisation.<br><br>Features:<ul><li>`CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_SWEEPING`</li><li>`CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_NONSWEEPING`</li></ul>
     * Create Variable Recurring Payment
     * @param param the request object
     */
    public createVrpPaymentWithHttpInfo(param: VariableRecurringPaymentsApiCreateVrpPaymentRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfSubmissionResponse>> {
        return this.api.createVrpPaymentWithHttpInfo(param.consent, param.submissionRequest,  options).toPromise();
    }

    /**
     * Creates a Variable Recurring Payment transaction after obtaining the user\'s authorisation.<br><br>Features:<ul><li>`CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_SWEEPING`</li><li>`CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_NONSWEEPING`</li></ul>
     * Create Variable Recurring Payment
     * @param param the request object
     */
    public createVrpPayment(param: VariableRecurringPaymentsApiCreateVrpPaymentRequest, options?: Configuration): Promise<ApiResponseOfSubmissionResponse> {
        return this.api.createVrpPayment(param.consent, param.submissionRequest,  options).toPromise();
    }

    /**
     * Get Non-Sweeping Variable Recurring Payments consent details using the consent Id
     * Get Non-Sweeping Variable Recurring Payment Consent Details
     * @param param the request object
     */
    public getNonSweepingVrpConsentByIdWithHttpInfo(param: VariableRecurringPaymentsApiGetNonSweepingVrpConsentByIdRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfNonSweepingAuthorisationResponse>> {
        return this.api.getNonSweepingVrpConsentByIdWithHttpInfo(param.consentId,  options).toPromise();
    }

    /**
     * Get Non-Sweeping Variable Recurring Payments consent details using the consent Id
     * Get Non-Sweeping Variable Recurring Payment Consent Details
     * @param param the request object
     */
    public getNonSweepingVrpConsentById(param: VariableRecurringPaymentsApiGetNonSweepingVrpConsentByIdRequest, options?: Configuration): Promise<ApiResponseOfNonSweepingAuthorisationResponse> {
        return this.api.getNonSweepingVrpConsentById(param.consentId,  options).toPromise();
    }

    /**
     * Get Sweeping Variable Recurring Payments consent details using the consent Id
     * Get Sweeping Variable Recurring Payment Consent Details
     * @param param the request object
     */
    public getSweepingVrpConsentByIdWithHttpInfo(param: VariableRecurringPaymentsApiGetSweepingVrpConsentByIdRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfSweepingAuthorisationResponse>> {
        return this.api.getSweepingVrpConsentByIdWithHttpInfo(param.consentId,  options).toPromise();
    }

    /**
     * Get Sweeping Variable Recurring Payments consent details using the consent Id
     * Get Sweeping Variable Recurring Payment Consent Details
     * @param param the request object
     */
    public getSweepingVrpConsentById(param: VariableRecurringPaymentsApiGetSweepingVrpConsentByIdRequest, options?: Configuration): Promise<ApiResponseOfSweepingAuthorisationResponse> {
        return this.api.getSweepingVrpConsentById(param.consentId,  options).toPromise();
    }

    /**
     * Get Variable Recurring Payment details using the Payment Id
     * Get Variable Recurring Payment Details
     * @param param the request object
     */
    public getVrpPaymentDetailsWithHttpInfo(param: VariableRecurringPaymentsApiGetVrpPaymentDetailsRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfSubmissionResponse>> {
        return this.api.getVrpPaymentDetailsWithHttpInfo(param.paymentId, param.consent,  options).toPromise();
    }

    /**
     * Get Variable Recurring Payment details using the Payment Id
     * Get Variable Recurring Payment Details
     * @param param the request object
     */
    public getVrpPaymentDetails(param: VariableRecurringPaymentsApiGetVrpPaymentDetailsRequest, options?: Configuration): Promise<ApiResponseOfSubmissionResponse> {
        return this.api.getVrpPaymentDetails(param.paymentId, param.consent,  options).toPromise();
    }

}

import { ObservableVirtualAccountsApi } from "./ObservableAPI";
import { VirtualAccountsApiRequestFactory, VirtualAccountsApiResponseProcessor} from "../apis/VirtualAccountsApi";

export interface VirtualAccountsApiCreateVirtualAccountRequest {
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsApicreateVirtualAccount
     */
    clientId: string
    /**
     * 
     * @type VirtualAccountRequest
     * @memberof VirtualAccountsApicreateVirtualAccount
     */
    virtualAccountRequest: VirtualAccountRequest
}

export interface VirtualAccountsApiCreateVirtualAccountBeneficiaryRequest {
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsApicreateVirtualAccountBeneficiary
     */
    clientId: string
    /**
     * 
     * @type VirtualAccountBeneficiaryRequest
     * @memberof VirtualAccountsApicreateVirtualAccountBeneficiary
     */
    virtualAccountBeneficiaryRequest: VirtualAccountBeneficiaryRequest
}

export interface VirtualAccountsApiCreateVirtualAccountClientRequest {
    /**
     * __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     * @type string
     * @memberof VirtualAccountsApicreateVirtualAccountClient
     */
    clientId: string
    /**
     * 
     * @type VirtualAccountClientRequest
     * @memberof VirtualAccountsApicreateVirtualAccountClient
     */
    virtualAccountClientRequest: VirtualAccountClientRequest
}

export interface VirtualAccountsApiCreateVirtualAccountPayOutRequest {
    /**
     * Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @type string
     * @memberof VirtualAccountsApicreateVirtualAccountPayOut
     */
    idempotencyKey: string
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsApicreateVirtualAccountPayOut
     */
    clientId: string
    /**
     * 
     * @type VirtualAccountPayOutRequest
     * @memberof VirtualAccountsApicreateVirtualAccountPayOut
     */
    virtualAccountPayOutRequest: VirtualAccountPayOutRequest
}

export interface VirtualAccountsApiCreateVirtualAccountRefundRequest {
    /**
     * Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @type string
     * @memberof VirtualAccountsApicreateVirtualAccountRefund
     */
    idempotencyKey: string
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsApicreateVirtualAccountRefund
     */
    clientId: string
    /**
     * 
     * @type VirtualAccountRefundRequest
     * @memberof VirtualAccountsApicreateVirtualAccountRefund
     */
    virtualAccountRefundRequest: VirtualAccountRefundRequest
}

export interface VirtualAccountsApiCreateVirtualAccountTransferRequest {
    /**
     * Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @type string
     * @memberof VirtualAccountsApicreateVirtualAccountTransfer
     */
    idempotencyKey: string
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsApicreateVirtualAccountTransfer
     */
    clientId: string
    /**
     * 
     * @type VirtualAccountTransferRequest
     * @memberof VirtualAccountsApicreateVirtualAccountTransfer
     */
    virtualAccountTransferRequest: VirtualAccountTransferRequest
}

export interface VirtualAccountsApiDeleteVirtualAccountBeneficiaryRequest {
    /**
     * __Mandatory__. The Id of the beneficiary that will be deleted
     * @type string
     * @memberof VirtualAccountsApideleteVirtualAccountBeneficiary
     */
    beneficiaryId: string
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsApideleteVirtualAccountBeneficiary
     */
    clientId: string
}

export interface VirtualAccountsApiGetPayInDetailsRequest {
    /**
     * Uniquely identifies a transaction
     * @type string
     * @memberof VirtualAccountsApigetPayInDetails
     */
    paymentId: string
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsApigetPayInDetails
     */
    clientId: string
}

export interface VirtualAccountsApiGetPaymentsByIdRequest {
    /**
     * __Mandatory__. The id of the payment
     * @type string
     * @memberof VirtualAccountsApigetPaymentsById
     */
    id: string
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsApigetPaymentsById
     */
    clientId: string
}

export interface VirtualAccountsApiGetVirtualAccountBeneficiariesRequest {
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountBeneficiaries
     */
    clientId: string
    /**
     * __Optional__. Data required to provide pagination
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountBeneficiaries
     */
    cursor?: string
}

export interface VirtualAccountsApiGetVirtualAccountBeneficiaryRequest {
    /**
     * __Mandatory__. The Id of the requested beneficiary.
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountBeneficiary
     */
    beneficiaryId: string
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountBeneficiary
     */
    clientId: string
}

export interface VirtualAccountsApiGetVirtualAccountByIdRequest {
    /**
     * __Mandatory__. The Id of the account.
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountById
     */
    accountId: string
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountById
     */
    clientId: string
}

export interface VirtualAccountsApiGetVirtualAccountClientByIdRequest {
    /**
     * __Mandatory__. The ID of the client.
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountClientById
     */
    clientId: string
    /**
     * __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountClientById
     */
    clientId2: string
}

export interface VirtualAccountsApiGetVirtualAccountClientsRequest {
    /**
     * __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountClients
     */
    clientId: string
    /**
     * __Optional__.  Filter clients based on client type. One of BUSINESS or INDIVIDUAL
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountClients
     */
    type?: string
    /**
     * __Optional__.  Filter clients based on client status. One of ACTIVE, PENDING or SUSPENDED
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountClients
     */
    status?: string
    /**
     * __Optional__. Data required to provide pagination
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountClients
     */
    cursor?: string
}

export interface VirtualAccountsApiGetVirtualAccountPaymentsRequest {
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountPayments
     */
    clientId: string
    /**
     * __Optional__. Filter payments based on accountId
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountPayments
     */
    accountId?: string
    /**
     * __Optional__. Filter payments based on the createdDateTime
     * @type Date
     * @memberof VirtualAccountsApigetVirtualAccountPayments
     */
    createdDateTimeFrom?: Date
    /**
     * __Optional__. Filter payments based on the createdDateTime
     * @type Date
     * @memberof VirtualAccountsApigetVirtualAccountPayments
     */
    createdDateTimeTo?: Date
    /**
     * __Optional__. Filter payments based on the payment status. One of INITIATED, PENDING, PROCESSING, COMPLETED, FAILED
     * @type Array&lt;string&gt;
     * @memberof VirtualAccountsApigetVirtualAccountPayments
     */
    status?: Array<string>
    /**
     * __Optional__. Filter payments based on the payment type. One of PAY_IN, PAY_OUT, RETURN_IN, RETURN_OUT
     * @type Array&lt;string&gt;
     * @memberof VirtualAccountsApigetVirtualAccountPayments
     */
    type?: Array<string>
    /**
     * __Optional__. Data required to provide pagination
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountPayments
     */
    cursor?: string
}

export interface VirtualAccountsApiGetVirtualAccountRefundByIdRequest {
    /**
     * __Mandatory__. The id of the refund
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountRefundById
     */
    id: string
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountRefundById
     */
    clientId: string
}

export interface VirtualAccountsApiGetVirtualAccountRefundsRequest {
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountRefunds
     */
    clientId: string
    /**
     * __Optional__. Filter refunds based on unique ID of the original payment
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountRefunds
     */
    paymentInitiationId?: string
    /**
     * __Optional__.  Filter refunds based on refund status. One of INITIATED, SCHEDULED, PROCESSING, COMPLETED, FAILED
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountRefunds
     */
    status?: string
    /**
     * __Optional__.  Filter to get refunds created on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ)
     * @type Date
     * @memberof VirtualAccountsApigetVirtualAccountRefunds
     */
    createdDateTimeAfter?: Date
    /**
     * __Optional__.  Filter to get refunds created on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ)
     * @type Date
     * @memberof VirtualAccountsApigetVirtualAccountRefunds
     */
    createdDateTimeBefore?: Date
    /**
     * __Optional__. Encoded pagination cursor to fetch next page
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccountRefunds
     */
    cursor?: string
}

export interface VirtualAccountsApiGetVirtualAccountsRequest {
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccounts
     */
    clientId: string
    /**
     * __Optional__. Filter accounts based on reference provided in order to help with identification of the account
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccounts
     */
    nickname?: string
    /**
     * __Optional__. Filter accounts based on three-letter ISO 4217 currency code
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccounts
     */
    currency?: string
    /**
     * __Optional__. Filter accounts based on their current state. One of PENDING, ACTIVE, FAILED, SUSPENDED or CLOSED
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccounts
     */
    status?: string
    /**
     * __Optional__. Data required to provide pagination
     * @type string
     * @memberof VirtualAccountsApigetVirtualAccounts
     */
    cursor?: string
}

export interface VirtualAccountsApiUpdateVirtualAccountByIdRequest {
    /**
     * __Mandatory__. The Id of the account.
     * @type string
     * @memberof VirtualAccountsApiupdateVirtualAccountById
     */
    accountId: string
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsApiupdateVirtualAccountById
     */
    clientId: string
    /**
     * 
     * @type UpdateVirtualAccountRequest
     * @memberof VirtualAccountsApiupdateVirtualAccountById
     */
    updateVirtualAccountRequest: UpdateVirtualAccountRequest
}

export class ObjectVirtualAccountsApi {
    private api: ObservableVirtualAccountsApi

    public constructor(configuration: Configuration, requestFactory?: VirtualAccountsApiRequestFactory, responseProcessor?: VirtualAccountsApiResponseProcessor) {
        this.api = new ObservableVirtualAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new virtual account
     * Create Account
     * @param param the request object
     */
    public createVirtualAccountWithHttpInfo(param: VirtualAccountsApiCreateVirtualAccountRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccount>> {
        return this.api.createVirtualAccountWithHttpInfo(param.clientId, param.virtualAccountRequest,  options).toPromise();
    }

    /**
     * Create a new virtual account
     * Create Account
     * @param param the request object
     */
    public createVirtualAccount(param: VirtualAccountsApiCreateVirtualAccountRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccount> {
        return this.api.createVirtualAccount(param.clientId, param.virtualAccountRequest,  options).toPromise();
    }

    /**
     * Create a new beneficiary (individual or business account) to which a Pay Out can be made. The beneficiary can be used from any virtual account that is held
     * Create Beneficiary
     * @param param the request object
     */
    public createVirtualAccountBeneficiaryWithHttpInfo(param: VirtualAccountsApiCreateVirtualAccountBeneficiaryRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccountBeneficiary>> {
        return this.api.createVirtualAccountBeneficiaryWithHttpInfo(param.clientId, param.virtualAccountBeneficiaryRequest,  options).toPromise();
    }

    /**
     * Create a new beneficiary (individual or business account) to which a Pay Out can be made. The beneficiary can be used from any virtual account that is held
     * Create Beneficiary
     * @param param the request object
     */
    public createVirtualAccountBeneficiary(param: VirtualAccountsApiCreateVirtualAccountBeneficiaryRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccountBeneficiary> {
        return this.api.createVirtualAccountBeneficiary(param.clientId, param.virtualAccountBeneficiaryRequest,  options).toPromise();
    }

    /**
     * Create a new virtual account client (individual or business client). Available for clients who have direct onboarding permissions only. Please contact your CSM to enquire about access
     * Create Virtual Account Client
     * @param param the request object
     */
    public createVirtualAccountClientWithHttpInfo(param: VirtualAccountsApiCreateVirtualAccountClientRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccountClient>> {
        return this.api.createVirtualAccountClientWithHttpInfo(param.clientId, param.virtualAccountClientRequest,  options).toPromise();
    }

    /**
     * Create a new virtual account client (individual or business client). Available for clients who have direct onboarding permissions only. Please contact your CSM to enquire about access
     * Create Virtual Account Client
     * @param param the request object
     */
    public createVirtualAccountClient(param: VirtualAccountsApiCreateVirtualAccountClientRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccountClient> {
        return this.api.createVirtualAccountClient(param.clientId, param.virtualAccountClientRequest,  options).toPromise();
    }

    /**
     * Initiate a payment from a specified virtual account to a previously added beneficiary using any of the schemes that it supports <br> When subscribed to virtualAccount.payOut.status notifications, further updates on payment processing status will be delivered asynchronously 
     * Create Pay Out
     * @param param the request object
     */
    public createVirtualAccountPayOutWithHttpInfo(param: VirtualAccountsApiCreateVirtualAccountPayOutRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccountPayment>> {
        return this.api.createVirtualAccountPayOutWithHttpInfo(param.idempotencyKey, param.clientId, param.virtualAccountPayOutRequest,  options).toPromise();
    }

    /**
     * Initiate a payment from a specified virtual account to a previously added beneficiary using any of the schemes that it supports <br> When subscribed to virtualAccount.payOut.status notifications, further updates on payment processing status will be delivered asynchronously 
     * Create Pay Out
     * @param param the request object
     */
    public createVirtualAccountPayOut(param: VirtualAccountsApiCreateVirtualAccountPayOutRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccountPayment> {
        return this.api.createVirtualAccountPayOut(param.idempotencyKey, param.clientId, param.virtualAccountPayOutRequest,  options).toPromise();
    }

    /**
     * Create a refund for a payment received into a virtual account. Funds are returned to the source account. When subscribed to `virtualAccount.refund.status` notifications, updates on the refund status are delivered asynchronously.
     * Create Refund
     * @param param the request object
     */
    public createVirtualAccountRefundWithHttpInfo(param: VirtualAccountsApiCreateVirtualAccountRefundRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccountRefund>> {
        return this.api.createVirtualAccountRefundWithHttpInfo(param.idempotencyKey, param.clientId, param.virtualAccountRefundRequest,  options).toPromise();
    }

    /**
     * Create a refund for a payment received into a virtual account. Funds are returned to the source account. When subscribed to `virtualAccount.refund.status` notifications, updates on the refund status are delivered asynchronously.
     * Create Refund
     * @param param the request object
     */
    public createVirtualAccountRefund(param: VirtualAccountsApiCreateVirtualAccountRefundRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccountRefund> {
        return this.api.createVirtualAccountRefund(param.idempotencyKey, param.clientId, param.virtualAccountRefundRequest,  options).toPromise();
    }

    /**
     * Create a transfer between two virtual accounts
     * Create Virtual Account Transfer
     * @param param the request object
     */
    public createVirtualAccountTransferWithHttpInfo(param: VirtualAccountsApiCreateVirtualAccountTransferRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccountPayment>> {
        return this.api.createVirtualAccountTransferWithHttpInfo(param.idempotencyKey, param.clientId, param.virtualAccountTransferRequest,  options).toPromise();
    }

    /**
     * Create a transfer between two virtual accounts
     * Create Virtual Account Transfer
     * @param param the request object
     */
    public createVirtualAccountTransfer(param: VirtualAccountsApiCreateVirtualAccountTransferRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccountPayment> {
        return this.api.createVirtualAccountTransfer(param.idempotencyKey, param.clientId, param.virtualAccountTransferRequest,  options).toPromise();
    }

    /**
     * Delete a specific beneficiary (individual or business account)
     * Delete Beneficiary
     * @param param the request object
     */
    public deleteVirtualAccountBeneficiaryWithHttpInfo(param: VirtualAccountsApiDeleteVirtualAccountBeneficiaryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteVirtualAccountBeneficiaryWithHttpInfo(param.beneficiaryId, param.clientId,  options).toPromise();
    }

    /**
     * Delete a specific beneficiary (individual or business account)
     * Delete Beneficiary
     * @param param the request object
     */
    public deleteVirtualAccountBeneficiary(param: VirtualAccountsApiDeleteVirtualAccountBeneficiaryRequest, options?: Configuration): Promise<void> {
        return this.api.deleteVirtualAccountBeneficiary(param.beneficiaryId, param.clientId,  options).toPromise();
    }

    /**
     * Get the details of a pay-in transaction
     * Get Pay-In Details
     * @param param the request object
     */
    public getPayInDetailsWithHttpInfo(param: VirtualAccountsApiGetPayInDetailsRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccountPayInDetails>> {
        return this.api.getPayInDetailsWithHttpInfo(param.paymentId, param.clientId,  options).toPromise();
    }

    /**
     * Get the details of a pay-in transaction
     * Get Pay-In Details
     * @param param the request object
     */
    public getPayInDetails(param: VirtualAccountsApiGetPayInDetailsRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccountPayInDetails> {
        return this.api.getPayInDetails(param.paymentId, param.clientId,  options).toPromise();
    }

    /**
     * Get the details of a specific payment using its Id
     * Get Payment
     * @param param the request object
     */
    public getPaymentsByIdWithHttpInfo(param: VirtualAccountsApiGetPaymentsByIdRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccountPayment>> {
        return this.api.getPaymentsByIdWithHttpInfo(param.id, param.clientId,  options).toPromise();
    }

    /**
     * Get the details of a specific payment using its Id
     * Get Payment
     * @param param the request object
     */
    public getPaymentsById(param: VirtualAccountsApiGetPaymentsByIdRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccountPayment> {
        return this.api.getPaymentsById(param.id, param.clientId,  options).toPromise();
    }

    /**
     * Gets the list of beneficiaries (individual or business account) to which a Pay Out can be made.
     * Get List Of Beneficiaries
     * @param param the request object
     */
    public getVirtualAccountBeneficiariesWithHttpInfo(param: VirtualAccountsApiGetVirtualAccountBeneficiariesRequest, options?: Configuration): Promise<HttpInfo<ApiListResponseOfVirtualAccountBeneficiary>> {
        return this.api.getVirtualAccountBeneficiariesWithHttpInfo(param.clientId, param.cursor,  options).toPromise();
    }

    /**
     * Gets the list of beneficiaries (individual or business account) to which a Pay Out can be made.
     * Get List Of Beneficiaries
     * @param param the request object
     */
    public getVirtualAccountBeneficiaries(param: VirtualAccountsApiGetVirtualAccountBeneficiariesRequest, options?: Configuration): Promise<ApiListResponseOfVirtualAccountBeneficiary> {
        return this.api.getVirtualAccountBeneficiaries(param.clientId, param.cursor,  options).toPromise();
    }

    /**
     * Get the details of a specific beneficiary (individual or business account) to which a Pay Out can be made from its id.
     * Get Beneficiary
     * @param param the request object
     */
    public getVirtualAccountBeneficiaryWithHttpInfo(param: VirtualAccountsApiGetVirtualAccountBeneficiaryRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccountBeneficiary>> {
        return this.api.getVirtualAccountBeneficiaryWithHttpInfo(param.beneficiaryId, param.clientId,  options).toPromise();
    }

    /**
     * Get the details of a specific beneficiary (individual or business account) to which a Pay Out can be made from its id.
     * Get Beneficiary
     * @param param the request object
     */
    public getVirtualAccountBeneficiary(param: VirtualAccountsApiGetVirtualAccountBeneficiaryRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccountBeneficiary> {
        return this.api.getVirtualAccountBeneficiary(param.beneficiaryId, param.clientId,  options).toPromise();
    }

    /**
     * Get the details of a specific account using its Id
     * Get Account
     * @param param the request object
     */
    public getVirtualAccountByIdWithHttpInfo(param: VirtualAccountsApiGetVirtualAccountByIdRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccount>> {
        return this.api.getVirtualAccountByIdWithHttpInfo(param.accountId, param.clientId,  options).toPromise();
    }

    /**
     * Get the details of a specific account using its Id
     * Get Account
     * @param param the request object
     */
    public getVirtualAccountById(param: VirtualAccountsApiGetVirtualAccountByIdRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccount> {
        return this.api.getVirtualAccountById(param.accountId, param.clientId,  options).toPromise();
    }

    /**
     * Get a Virtual Account Client using its ID. Restricted to applications with direct onboarding permissions only
     * Get a Virtual Account Client by ID
     * @param param the request object
     */
    public getVirtualAccountClientByIdWithHttpInfo(param: VirtualAccountsApiGetVirtualAccountClientByIdRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccountClient>> {
        return this.api.getVirtualAccountClientByIdWithHttpInfo(param.clientId, param.clientId2,  options).toPromise();
    }

    /**
     * Get a Virtual Account Client using its ID. Restricted to applications with direct onboarding permissions only
     * Get a Virtual Account Client by ID
     * @param param the request object
     */
    public getVirtualAccountClientById(param: VirtualAccountsApiGetVirtualAccountClientByIdRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccountClient> {
        return this.api.getVirtualAccountClientById(param.clientId, param.clientId2,  options).toPromise();
    }

    /**
     * Get Virtual Account Clients (individual or business client).
     * Get List of Virtual Account Clients
     * @param param the request object
     */
    public getVirtualAccountClientsWithHttpInfo(param: VirtualAccountsApiGetVirtualAccountClientsRequest, options?: Configuration): Promise<HttpInfo<ApiListResponseOfVirtualAccountClient>> {
        return this.api.getVirtualAccountClientsWithHttpInfo(param.clientId, param.type, param.status, param.cursor,  options).toPromise();
    }

    /**
     * Get Virtual Account Clients (individual or business client).
     * Get List of Virtual Account Clients
     * @param param the request object
     */
    public getVirtualAccountClients(param: VirtualAccountsApiGetVirtualAccountClientsRequest, options?: Configuration): Promise<ApiListResponseOfVirtualAccountClient> {
        return this.api.getVirtualAccountClients(param.clientId, param.type, param.status, param.cursor,  options).toPromise();
    }

    /**
     * Retrieve a list of virtual account payments
     * Get Payments
     * @param param the request object
     */
    public getVirtualAccountPaymentsWithHttpInfo(param: VirtualAccountsApiGetVirtualAccountPaymentsRequest, options?: Configuration): Promise<HttpInfo<ApiListResponseOfVirtualAccountPayment>> {
        return this.api.getVirtualAccountPaymentsWithHttpInfo(param.clientId, param.accountId, param.createdDateTimeFrom, param.createdDateTimeTo, param.status, param.type, param.cursor,  options).toPromise();
    }

    /**
     * Retrieve a list of virtual account payments
     * Get Payments
     * @param param the request object
     */
    public getVirtualAccountPayments(param: VirtualAccountsApiGetVirtualAccountPaymentsRequest, options?: Configuration): Promise<ApiListResponseOfVirtualAccountPayment> {
        return this.api.getVirtualAccountPayments(param.clientId, param.accountId, param.createdDateTimeFrom, param.createdDateTimeTo, param.status, param.type, param.cursor,  options).toPromise();
    }

    /**
     * Get the details of a refund by its ID
     * Get Refund By Id
     * @param param the request object
     */
    public getVirtualAccountRefundByIdWithHttpInfo(param: VirtualAccountsApiGetVirtualAccountRefundByIdRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccountRefund>> {
        return this.api.getVirtualAccountRefundByIdWithHttpInfo(param.id, param.clientId,  options).toPromise();
    }

    /**
     * Get the details of a refund by its ID
     * Get Refund By Id
     * @param param the request object
     */
    public getVirtualAccountRefundById(param: VirtualAccountsApiGetVirtualAccountRefundByIdRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccountRefund> {
        return this.api.getVirtualAccountRefundById(param.id, param.clientId,  options).toPromise();
    }

    /**
     * Retrieve a list of refunds
     * Get list of refunds
     * @param param the request object
     */
    public getVirtualAccountRefundsWithHttpInfo(param: VirtualAccountsApiGetVirtualAccountRefundsRequest, options?: Configuration): Promise<HttpInfo<ApiListResponseOfVirtualAccountRefund>> {
        return this.api.getVirtualAccountRefundsWithHttpInfo(param.clientId, param.paymentInitiationId, param.status, param.createdDateTimeAfter, param.createdDateTimeBefore, param.cursor,  options).toPromise();
    }

    /**
     * Retrieve a list of refunds
     * Get list of refunds
     * @param param the request object
     */
    public getVirtualAccountRefunds(param: VirtualAccountsApiGetVirtualAccountRefundsRequest, options?: Configuration): Promise<ApiListResponseOfVirtualAccountRefund> {
        return this.api.getVirtualAccountRefunds(param.clientId, param.paymentInitiationId, param.status, param.createdDateTimeAfter, param.createdDateTimeBefore, param.cursor,  options).toPromise();
    }

    /**
     * Retrieve a list of all virtual accounts held
     * Get Accounts
     * @param param the request object
     */
    public getVirtualAccountsWithHttpInfo(param: VirtualAccountsApiGetVirtualAccountsRequest, options?: Configuration): Promise<HttpInfo<ApiListResponseOfVirtualAccount>> {
        return this.api.getVirtualAccountsWithHttpInfo(param.clientId, param.nickname, param.currency, param.status, param.cursor,  options).toPromise();
    }

    /**
     * Retrieve a list of all virtual accounts held
     * Get Accounts
     * @param param the request object
     */
    public getVirtualAccounts(param: VirtualAccountsApiGetVirtualAccountsRequest, options?: Configuration): Promise<ApiListResponseOfVirtualAccount> {
        return this.api.getVirtualAccounts(param.clientId, param.nickname, param.currency, param.status, param.cursor,  options).toPromise();
    }

    /**
     * Update the details of a specific account using its Id
     * Update Account
     * @param param the request object
     */
    public updateVirtualAccountByIdWithHttpInfo(param: VirtualAccountsApiUpdateVirtualAccountByIdRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccount>> {
        return this.api.updateVirtualAccountByIdWithHttpInfo(param.accountId, param.clientId, param.updateVirtualAccountRequest,  options).toPromise();
    }

    /**
     * Update the details of a specific account using its Id
     * Update Account
     * @param param the request object
     */
    public updateVirtualAccountById(param: VirtualAccountsApiUpdateVirtualAccountByIdRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccount> {
        return this.api.updateVirtualAccountById(param.accountId, param.clientId, param.updateVirtualAccountRequest,  options).toPromise();
    }

}

import { ObservableVirtualAccountsAccountsApi } from "./ObservableAPI";
import { VirtualAccountsAccountsApiRequestFactory, VirtualAccountsAccountsApiResponseProcessor} from "../apis/VirtualAccountsAccountsApi";

export interface VirtualAccountsAccountsApiCreateVirtualAccountRequest {
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsAccountsApicreateVirtualAccount
     */
    clientId: string
    /**
     * 
     * @type VirtualAccountRequest
     * @memberof VirtualAccountsAccountsApicreateVirtualAccount
     */
    virtualAccountRequest: VirtualAccountRequest
}

export interface VirtualAccountsAccountsApiGetVirtualAccountByIdRequest {
    /**
     * __Mandatory__. The Id of the account.
     * @type string
     * @memberof VirtualAccountsAccountsApigetVirtualAccountById
     */
    accountId: string
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsAccountsApigetVirtualAccountById
     */
    clientId: string
}

export interface VirtualAccountsAccountsApiGetVirtualAccountsRequest {
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsAccountsApigetVirtualAccounts
     */
    clientId: string
    /**
     * __Optional__. Filter accounts based on reference provided in order to help with identification of the account
     * @type string
     * @memberof VirtualAccountsAccountsApigetVirtualAccounts
     */
    nickname?: string
    /**
     * __Optional__. Filter accounts based on three-letter ISO 4217 currency code
     * @type string
     * @memberof VirtualAccountsAccountsApigetVirtualAccounts
     */
    currency?: string
    /**
     * __Optional__. Filter accounts based on their current state. One of PENDING, ACTIVE, FAILED, SUSPENDED or CLOSED
     * @type string
     * @memberof VirtualAccountsAccountsApigetVirtualAccounts
     */
    status?: string
    /**
     * __Optional__. Data required to provide pagination
     * @type string
     * @memberof VirtualAccountsAccountsApigetVirtualAccounts
     */
    cursor?: string
}

export interface VirtualAccountsAccountsApiUpdateVirtualAccountByIdRequest {
    /**
     * __Mandatory__. The Id of the account.
     * @type string
     * @memberof VirtualAccountsAccountsApiupdateVirtualAccountById
     */
    accountId: string
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsAccountsApiupdateVirtualAccountById
     */
    clientId: string
    /**
     * 
     * @type UpdateVirtualAccountRequest
     * @memberof VirtualAccountsAccountsApiupdateVirtualAccountById
     */
    updateVirtualAccountRequest: UpdateVirtualAccountRequest
}

export class ObjectVirtualAccountsAccountsApi {
    private api: ObservableVirtualAccountsAccountsApi

    public constructor(configuration: Configuration, requestFactory?: VirtualAccountsAccountsApiRequestFactory, responseProcessor?: VirtualAccountsAccountsApiResponseProcessor) {
        this.api = new ObservableVirtualAccountsAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new virtual account
     * Create Account
     * @param param the request object
     */
    public createVirtualAccountWithHttpInfo(param: VirtualAccountsAccountsApiCreateVirtualAccountRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccount>> {
        return this.api.createVirtualAccountWithHttpInfo(param.clientId, param.virtualAccountRequest,  options).toPromise();
    }

    /**
     * Create a new virtual account
     * Create Account
     * @param param the request object
     */
    public createVirtualAccount(param: VirtualAccountsAccountsApiCreateVirtualAccountRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccount> {
        return this.api.createVirtualAccount(param.clientId, param.virtualAccountRequest,  options).toPromise();
    }

    /**
     * Get the details of a specific account using its Id
     * Get Account
     * @param param the request object
     */
    public getVirtualAccountByIdWithHttpInfo(param: VirtualAccountsAccountsApiGetVirtualAccountByIdRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccount>> {
        return this.api.getVirtualAccountByIdWithHttpInfo(param.accountId, param.clientId,  options).toPromise();
    }

    /**
     * Get the details of a specific account using its Id
     * Get Account
     * @param param the request object
     */
    public getVirtualAccountById(param: VirtualAccountsAccountsApiGetVirtualAccountByIdRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccount> {
        return this.api.getVirtualAccountById(param.accountId, param.clientId,  options).toPromise();
    }

    /**
     * Retrieve a list of all virtual accounts held
     * Get Accounts
     * @param param the request object
     */
    public getVirtualAccountsWithHttpInfo(param: VirtualAccountsAccountsApiGetVirtualAccountsRequest, options?: Configuration): Promise<HttpInfo<ApiListResponseOfVirtualAccount>> {
        return this.api.getVirtualAccountsWithHttpInfo(param.clientId, param.nickname, param.currency, param.status, param.cursor,  options).toPromise();
    }

    /**
     * Retrieve a list of all virtual accounts held
     * Get Accounts
     * @param param the request object
     */
    public getVirtualAccounts(param: VirtualAccountsAccountsApiGetVirtualAccountsRequest, options?: Configuration): Promise<ApiListResponseOfVirtualAccount> {
        return this.api.getVirtualAccounts(param.clientId, param.nickname, param.currency, param.status, param.cursor,  options).toPromise();
    }

    /**
     * Update the details of a specific account using its Id
     * Update Account
     * @param param the request object
     */
    public updateVirtualAccountByIdWithHttpInfo(param: VirtualAccountsAccountsApiUpdateVirtualAccountByIdRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccount>> {
        return this.api.updateVirtualAccountByIdWithHttpInfo(param.accountId, param.clientId, param.updateVirtualAccountRequest,  options).toPromise();
    }

    /**
     * Update the details of a specific account using its Id
     * Update Account
     * @param param the request object
     */
    public updateVirtualAccountById(param: VirtualAccountsAccountsApiUpdateVirtualAccountByIdRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccount> {
        return this.api.updateVirtualAccountById(param.accountId, param.clientId, param.updateVirtualAccountRequest,  options).toPromise();
    }

}

import { ObservableVirtualAccountsBeneficiariesApi } from "./ObservableAPI";
import { VirtualAccountsBeneficiariesApiRequestFactory, VirtualAccountsBeneficiariesApiResponseProcessor} from "../apis/VirtualAccountsBeneficiariesApi";

export interface VirtualAccountsBeneficiariesApiCreateVirtualAccountBeneficiaryRequest {
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsBeneficiariesApicreateVirtualAccountBeneficiary
     */
    clientId: string
    /**
     * 
     * @type VirtualAccountBeneficiaryRequest
     * @memberof VirtualAccountsBeneficiariesApicreateVirtualAccountBeneficiary
     */
    virtualAccountBeneficiaryRequest: VirtualAccountBeneficiaryRequest
}

export interface VirtualAccountsBeneficiariesApiDeleteVirtualAccountBeneficiaryRequest {
    /**
     * __Mandatory__. The Id of the beneficiary that will be deleted
     * @type string
     * @memberof VirtualAccountsBeneficiariesApideleteVirtualAccountBeneficiary
     */
    beneficiaryId: string
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsBeneficiariesApideleteVirtualAccountBeneficiary
     */
    clientId: string
}

export interface VirtualAccountsBeneficiariesApiGetVirtualAccountBeneficiariesRequest {
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsBeneficiariesApigetVirtualAccountBeneficiaries
     */
    clientId: string
    /**
     * __Optional__. Data required to provide pagination
     * @type string
     * @memberof VirtualAccountsBeneficiariesApigetVirtualAccountBeneficiaries
     */
    cursor?: string
}

export interface VirtualAccountsBeneficiariesApiGetVirtualAccountBeneficiaryRequest {
    /**
     * __Mandatory__. The Id of the requested beneficiary.
     * @type string
     * @memberof VirtualAccountsBeneficiariesApigetVirtualAccountBeneficiary
     */
    beneficiaryId: string
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsBeneficiariesApigetVirtualAccountBeneficiary
     */
    clientId: string
}

export class ObjectVirtualAccountsBeneficiariesApi {
    private api: ObservableVirtualAccountsBeneficiariesApi

    public constructor(configuration: Configuration, requestFactory?: VirtualAccountsBeneficiariesApiRequestFactory, responseProcessor?: VirtualAccountsBeneficiariesApiResponseProcessor) {
        this.api = new ObservableVirtualAccountsBeneficiariesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new beneficiary (individual or business account) to which a Pay Out can be made. The beneficiary can be used from any virtual account that is held
     * Create Beneficiary
     * @param param the request object
     */
    public createVirtualAccountBeneficiaryWithHttpInfo(param: VirtualAccountsBeneficiariesApiCreateVirtualAccountBeneficiaryRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccountBeneficiary>> {
        return this.api.createVirtualAccountBeneficiaryWithHttpInfo(param.clientId, param.virtualAccountBeneficiaryRequest,  options).toPromise();
    }

    /**
     * Create a new beneficiary (individual or business account) to which a Pay Out can be made. The beneficiary can be used from any virtual account that is held
     * Create Beneficiary
     * @param param the request object
     */
    public createVirtualAccountBeneficiary(param: VirtualAccountsBeneficiariesApiCreateVirtualAccountBeneficiaryRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccountBeneficiary> {
        return this.api.createVirtualAccountBeneficiary(param.clientId, param.virtualAccountBeneficiaryRequest,  options).toPromise();
    }

    /**
     * Delete a specific beneficiary (individual or business account)
     * Delete Beneficiary
     * @param param the request object
     */
    public deleteVirtualAccountBeneficiaryWithHttpInfo(param: VirtualAccountsBeneficiariesApiDeleteVirtualAccountBeneficiaryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteVirtualAccountBeneficiaryWithHttpInfo(param.beneficiaryId, param.clientId,  options).toPromise();
    }

    /**
     * Delete a specific beneficiary (individual or business account)
     * Delete Beneficiary
     * @param param the request object
     */
    public deleteVirtualAccountBeneficiary(param: VirtualAccountsBeneficiariesApiDeleteVirtualAccountBeneficiaryRequest, options?: Configuration): Promise<void> {
        return this.api.deleteVirtualAccountBeneficiary(param.beneficiaryId, param.clientId,  options).toPromise();
    }

    /**
     * Gets the list of beneficiaries (individual or business account) to which a Pay Out can be made.
     * Get List Of Beneficiaries
     * @param param the request object
     */
    public getVirtualAccountBeneficiariesWithHttpInfo(param: VirtualAccountsBeneficiariesApiGetVirtualAccountBeneficiariesRequest, options?: Configuration): Promise<HttpInfo<ApiListResponseOfVirtualAccountBeneficiary>> {
        return this.api.getVirtualAccountBeneficiariesWithHttpInfo(param.clientId, param.cursor,  options).toPromise();
    }

    /**
     * Gets the list of beneficiaries (individual or business account) to which a Pay Out can be made.
     * Get List Of Beneficiaries
     * @param param the request object
     */
    public getVirtualAccountBeneficiaries(param: VirtualAccountsBeneficiariesApiGetVirtualAccountBeneficiariesRequest, options?: Configuration): Promise<ApiListResponseOfVirtualAccountBeneficiary> {
        return this.api.getVirtualAccountBeneficiaries(param.clientId, param.cursor,  options).toPromise();
    }

    /**
     * Get the details of a specific beneficiary (individual or business account) to which a Pay Out can be made from its id.
     * Get Beneficiary
     * @param param the request object
     */
    public getVirtualAccountBeneficiaryWithHttpInfo(param: VirtualAccountsBeneficiariesApiGetVirtualAccountBeneficiaryRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccountBeneficiary>> {
        return this.api.getVirtualAccountBeneficiaryWithHttpInfo(param.beneficiaryId, param.clientId,  options).toPromise();
    }

    /**
     * Get the details of a specific beneficiary (individual or business account) to which a Pay Out can be made from its id.
     * Get Beneficiary
     * @param param the request object
     */
    public getVirtualAccountBeneficiary(param: VirtualAccountsBeneficiariesApiGetVirtualAccountBeneficiaryRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccountBeneficiary> {
        return this.api.getVirtualAccountBeneficiary(param.beneficiaryId, param.clientId,  options).toPromise();
    }

}

import { ObservableVirtualAccountsClientsApi } from "./ObservableAPI";
import { VirtualAccountsClientsApiRequestFactory, VirtualAccountsClientsApiResponseProcessor} from "../apis/VirtualAccountsClientsApi";

export interface VirtualAccountsClientsApiCreateVirtualAccountClientRequest {
    /**
     * __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     * @type string
     * @memberof VirtualAccountsClientsApicreateVirtualAccountClient
     */
    clientId: string
    /**
     * 
     * @type VirtualAccountClientRequest
     * @memberof VirtualAccountsClientsApicreateVirtualAccountClient
     */
    virtualAccountClientRequest: VirtualAccountClientRequest
}

export interface VirtualAccountsClientsApiGetVirtualAccountClientByIdRequest {
    /**
     * __Mandatory__. The ID of the client.
     * @type string
     * @memberof VirtualAccountsClientsApigetVirtualAccountClientById
     */
    clientId: string
    /**
     * __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     * @type string
     * @memberof VirtualAccountsClientsApigetVirtualAccountClientById
     */
    clientId2: string
}

export interface VirtualAccountsClientsApiGetVirtualAccountClientsRequest {
    /**
     * __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     * @type string
     * @memberof VirtualAccountsClientsApigetVirtualAccountClients
     */
    clientId: string
    /**
     * __Optional__.  Filter clients based on client type. One of BUSINESS or INDIVIDUAL
     * @type string
     * @memberof VirtualAccountsClientsApigetVirtualAccountClients
     */
    type?: string
    /**
     * __Optional__.  Filter clients based on client status. One of ACTIVE, PENDING or SUSPENDED
     * @type string
     * @memberof VirtualAccountsClientsApigetVirtualAccountClients
     */
    status?: string
    /**
     * __Optional__. Data required to provide pagination
     * @type string
     * @memberof VirtualAccountsClientsApigetVirtualAccountClients
     */
    cursor?: string
}

export class ObjectVirtualAccountsClientsApi {
    private api: ObservableVirtualAccountsClientsApi

    public constructor(configuration: Configuration, requestFactory?: VirtualAccountsClientsApiRequestFactory, responseProcessor?: VirtualAccountsClientsApiResponseProcessor) {
        this.api = new ObservableVirtualAccountsClientsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new virtual account client (individual or business client). Available for clients who have direct onboarding permissions only. Please contact your CSM to enquire about access
     * Create Virtual Account Client
     * @param param the request object
     */
    public createVirtualAccountClientWithHttpInfo(param: VirtualAccountsClientsApiCreateVirtualAccountClientRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccountClient>> {
        return this.api.createVirtualAccountClientWithHttpInfo(param.clientId, param.virtualAccountClientRequest,  options).toPromise();
    }

    /**
     * Create a new virtual account client (individual or business client). Available for clients who have direct onboarding permissions only. Please contact your CSM to enquire about access
     * Create Virtual Account Client
     * @param param the request object
     */
    public createVirtualAccountClient(param: VirtualAccountsClientsApiCreateVirtualAccountClientRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccountClient> {
        return this.api.createVirtualAccountClient(param.clientId, param.virtualAccountClientRequest,  options).toPromise();
    }

    /**
     * Get a Virtual Account Client using its ID. Restricted to applications with direct onboarding permissions only
     * Get a Virtual Account Client by ID
     * @param param the request object
     */
    public getVirtualAccountClientByIdWithHttpInfo(param: VirtualAccountsClientsApiGetVirtualAccountClientByIdRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccountClient>> {
        return this.api.getVirtualAccountClientByIdWithHttpInfo(param.clientId, param.clientId2,  options).toPromise();
    }

    /**
     * Get a Virtual Account Client using its ID. Restricted to applications with direct onboarding permissions only
     * Get a Virtual Account Client by ID
     * @param param the request object
     */
    public getVirtualAccountClientById(param: VirtualAccountsClientsApiGetVirtualAccountClientByIdRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccountClient> {
        return this.api.getVirtualAccountClientById(param.clientId, param.clientId2,  options).toPromise();
    }

    /**
     * Get Virtual Account Clients (individual or business client).
     * Get List of Virtual Account Clients
     * @param param the request object
     */
    public getVirtualAccountClientsWithHttpInfo(param: VirtualAccountsClientsApiGetVirtualAccountClientsRequest, options?: Configuration): Promise<HttpInfo<ApiListResponseOfVirtualAccountClient>> {
        return this.api.getVirtualAccountClientsWithHttpInfo(param.clientId, param.type, param.status, param.cursor,  options).toPromise();
    }

    /**
     * Get Virtual Account Clients (individual or business client).
     * Get List of Virtual Account Clients
     * @param param the request object
     */
    public getVirtualAccountClients(param: VirtualAccountsClientsApiGetVirtualAccountClientsRequest, options?: Configuration): Promise<ApiListResponseOfVirtualAccountClient> {
        return this.api.getVirtualAccountClients(param.clientId, param.type, param.status, param.cursor,  options).toPromise();
    }

}

import { ObservableVirtualAccountsPaymentsApi } from "./ObservableAPI";
import { VirtualAccountsPaymentsApiRequestFactory, VirtualAccountsPaymentsApiResponseProcessor} from "../apis/VirtualAccountsPaymentsApi";

export interface VirtualAccountsPaymentsApiCreateVirtualAccountPayOutRequest {
    /**
     * Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @type string
     * @memberof VirtualAccountsPaymentsApicreateVirtualAccountPayOut
     */
    idempotencyKey: string
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsPaymentsApicreateVirtualAccountPayOut
     */
    clientId: string
    /**
     * 
     * @type VirtualAccountPayOutRequest
     * @memberof VirtualAccountsPaymentsApicreateVirtualAccountPayOut
     */
    virtualAccountPayOutRequest: VirtualAccountPayOutRequest
}

export interface VirtualAccountsPaymentsApiCreateVirtualAccountTransferRequest {
    /**
     * Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @type string
     * @memberof VirtualAccountsPaymentsApicreateVirtualAccountTransfer
     */
    idempotencyKey: string
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsPaymentsApicreateVirtualAccountTransfer
     */
    clientId: string
    /**
     * 
     * @type VirtualAccountTransferRequest
     * @memberof VirtualAccountsPaymentsApicreateVirtualAccountTransfer
     */
    virtualAccountTransferRequest: VirtualAccountTransferRequest
}

export interface VirtualAccountsPaymentsApiGetPayInDetailsRequest {
    /**
     * Uniquely identifies a transaction
     * @type string
     * @memberof VirtualAccountsPaymentsApigetPayInDetails
     */
    paymentId: string
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsPaymentsApigetPayInDetails
     */
    clientId: string
}

export interface VirtualAccountsPaymentsApiGetPaymentsByIdRequest {
    /**
     * __Mandatory__. The id of the payment
     * @type string
     * @memberof VirtualAccountsPaymentsApigetPaymentsById
     */
    id: string
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsPaymentsApigetPaymentsById
     */
    clientId: string
}

export interface VirtualAccountsPaymentsApiGetVirtualAccountPaymentsRequest {
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsPaymentsApigetVirtualAccountPayments
     */
    clientId: string
    /**
     * __Optional__. Filter payments based on accountId
     * @type string
     * @memberof VirtualAccountsPaymentsApigetVirtualAccountPayments
     */
    accountId?: string
    /**
     * __Optional__. Filter payments based on the createdDateTime
     * @type Date
     * @memberof VirtualAccountsPaymentsApigetVirtualAccountPayments
     */
    createdDateTimeFrom?: Date
    /**
     * __Optional__. Filter payments based on the createdDateTime
     * @type Date
     * @memberof VirtualAccountsPaymentsApigetVirtualAccountPayments
     */
    createdDateTimeTo?: Date
    /**
     * __Optional__. Filter payments based on the payment status. One of INITIATED, PENDING, PROCESSING, COMPLETED, FAILED
     * @type Array&lt;string&gt;
     * @memberof VirtualAccountsPaymentsApigetVirtualAccountPayments
     */
    status?: Array<string>
    /**
     * __Optional__. Filter payments based on the payment type. One of PAY_IN, PAY_OUT, RETURN_IN, RETURN_OUT
     * @type Array&lt;string&gt;
     * @memberof VirtualAccountsPaymentsApigetVirtualAccountPayments
     */
    type?: Array<string>
    /**
     * __Optional__. Data required to provide pagination
     * @type string
     * @memberof VirtualAccountsPaymentsApigetVirtualAccountPayments
     */
    cursor?: string
}

export class ObjectVirtualAccountsPaymentsApi {
    private api: ObservableVirtualAccountsPaymentsApi

    public constructor(configuration: Configuration, requestFactory?: VirtualAccountsPaymentsApiRequestFactory, responseProcessor?: VirtualAccountsPaymentsApiResponseProcessor) {
        this.api = new ObservableVirtualAccountsPaymentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Initiate a payment from a specified virtual account to a previously added beneficiary using any of the schemes that it supports <br> When subscribed to virtualAccount.payOut.status notifications, further updates on payment processing status will be delivered asynchronously 
     * Create Pay Out
     * @param param the request object
     */
    public createVirtualAccountPayOutWithHttpInfo(param: VirtualAccountsPaymentsApiCreateVirtualAccountPayOutRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccountPayment>> {
        return this.api.createVirtualAccountPayOutWithHttpInfo(param.idempotencyKey, param.clientId, param.virtualAccountPayOutRequest,  options).toPromise();
    }

    /**
     * Initiate a payment from a specified virtual account to a previously added beneficiary using any of the schemes that it supports <br> When subscribed to virtualAccount.payOut.status notifications, further updates on payment processing status will be delivered asynchronously 
     * Create Pay Out
     * @param param the request object
     */
    public createVirtualAccountPayOut(param: VirtualAccountsPaymentsApiCreateVirtualAccountPayOutRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccountPayment> {
        return this.api.createVirtualAccountPayOut(param.idempotencyKey, param.clientId, param.virtualAccountPayOutRequest,  options).toPromise();
    }

    /**
     * Create a transfer between two virtual accounts
     * Create Virtual Account Transfer
     * @param param the request object
     */
    public createVirtualAccountTransferWithHttpInfo(param: VirtualAccountsPaymentsApiCreateVirtualAccountTransferRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccountPayment>> {
        return this.api.createVirtualAccountTransferWithHttpInfo(param.idempotencyKey, param.clientId, param.virtualAccountTransferRequest,  options).toPromise();
    }

    /**
     * Create a transfer between two virtual accounts
     * Create Virtual Account Transfer
     * @param param the request object
     */
    public createVirtualAccountTransfer(param: VirtualAccountsPaymentsApiCreateVirtualAccountTransferRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccountPayment> {
        return this.api.createVirtualAccountTransfer(param.idempotencyKey, param.clientId, param.virtualAccountTransferRequest,  options).toPromise();
    }

    /**
     * Get the details of a pay-in transaction
     * Get Pay-In Details
     * @param param the request object
     */
    public getPayInDetailsWithHttpInfo(param: VirtualAccountsPaymentsApiGetPayInDetailsRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccountPayInDetails>> {
        return this.api.getPayInDetailsWithHttpInfo(param.paymentId, param.clientId,  options).toPromise();
    }

    /**
     * Get the details of a pay-in transaction
     * Get Pay-In Details
     * @param param the request object
     */
    public getPayInDetails(param: VirtualAccountsPaymentsApiGetPayInDetailsRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccountPayInDetails> {
        return this.api.getPayInDetails(param.paymentId, param.clientId,  options).toPromise();
    }

    /**
     * Get the details of a specific payment using its Id
     * Get Payment
     * @param param the request object
     */
    public getPaymentsByIdWithHttpInfo(param: VirtualAccountsPaymentsApiGetPaymentsByIdRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccountPayment>> {
        return this.api.getPaymentsByIdWithHttpInfo(param.id, param.clientId,  options).toPromise();
    }

    /**
     * Get the details of a specific payment using its Id
     * Get Payment
     * @param param the request object
     */
    public getPaymentsById(param: VirtualAccountsPaymentsApiGetPaymentsByIdRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccountPayment> {
        return this.api.getPaymentsById(param.id, param.clientId,  options).toPromise();
    }

    /**
     * Retrieve a list of virtual account payments
     * Get Payments
     * @param param the request object
     */
    public getVirtualAccountPaymentsWithHttpInfo(param: VirtualAccountsPaymentsApiGetVirtualAccountPaymentsRequest, options?: Configuration): Promise<HttpInfo<ApiListResponseOfVirtualAccountPayment>> {
        return this.api.getVirtualAccountPaymentsWithHttpInfo(param.clientId, param.accountId, param.createdDateTimeFrom, param.createdDateTimeTo, param.status, param.type, param.cursor,  options).toPromise();
    }

    /**
     * Retrieve a list of virtual account payments
     * Get Payments
     * @param param the request object
     */
    public getVirtualAccountPayments(param: VirtualAccountsPaymentsApiGetVirtualAccountPaymentsRequest, options?: Configuration): Promise<ApiListResponseOfVirtualAccountPayment> {
        return this.api.getVirtualAccountPayments(param.clientId, param.accountId, param.createdDateTimeFrom, param.createdDateTimeTo, param.status, param.type, param.cursor,  options).toPromise();
    }

}

import { ObservableVirtualAccountsRefundsApi } from "./ObservableAPI";
import { VirtualAccountsRefundsApiRequestFactory, VirtualAccountsRefundsApiResponseProcessor} from "../apis/VirtualAccountsRefundsApi";

export interface VirtualAccountsRefundsApiCreateVirtualAccountRefundRequest {
    /**
     * Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @type string
     * @memberof VirtualAccountsRefundsApicreateVirtualAccountRefund
     */
    idempotencyKey: string
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsRefundsApicreateVirtualAccountRefund
     */
    clientId: string
    /**
     * 
     * @type VirtualAccountRefundRequest
     * @memberof VirtualAccountsRefundsApicreateVirtualAccountRefund
     */
    virtualAccountRefundRequest: VirtualAccountRefundRequest
}

export interface VirtualAccountsRefundsApiGetVirtualAccountRefundByIdRequest {
    /**
     * __Mandatory__. The id of the refund
     * @type string
     * @memberof VirtualAccountsRefundsApigetVirtualAccountRefundById
     */
    id: string
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsRefundsApigetVirtualAccountRefundById
     */
    clientId: string
}

export interface VirtualAccountsRefundsApiGetVirtualAccountRefundsRequest {
    /**
     * The customer or sub-customer ID. Identifies the customer to perform the request for
     * @type string
     * @memberof VirtualAccountsRefundsApigetVirtualAccountRefunds
     */
    clientId: string
    /**
     * __Optional__. Filter refunds based on unique ID of the original payment
     * @type string
     * @memberof VirtualAccountsRefundsApigetVirtualAccountRefunds
     */
    paymentInitiationId?: string
    /**
     * __Optional__.  Filter refunds based on refund status. One of INITIATED, SCHEDULED, PROCESSING, COMPLETED, FAILED
     * @type string
     * @memberof VirtualAccountsRefundsApigetVirtualAccountRefunds
     */
    status?: string
    /**
     * __Optional__.  Filter to get refunds created on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ)
     * @type Date
     * @memberof VirtualAccountsRefundsApigetVirtualAccountRefunds
     */
    createdDateTimeAfter?: Date
    /**
     * __Optional__.  Filter to get refunds created on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ)
     * @type Date
     * @memberof VirtualAccountsRefundsApigetVirtualAccountRefunds
     */
    createdDateTimeBefore?: Date
    /**
     * __Optional__. Encoded pagination cursor to fetch next page
     * @type string
     * @memberof VirtualAccountsRefundsApigetVirtualAccountRefunds
     */
    cursor?: string
}

export class ObjectVirtualAccountsRefundsApi {
    private api: ObservableVirtualAccountsRefundsApi

    public constructor(configuration: Configuration, requestFactory?: VirtualAccountsRefundsApiRequestFactory, responseProcessor?: VirtualAccountsRefundsApiResponseProcessor) {
        this.api = new ObservableVirtualAccountsRefundsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a refund for a payment received into a virtual account. Funds are returned to the source account. When subscribed to `virtualAccount.refund.status` notifications, updates on the refund status are delivered asynchronously.
     * Create Refund
     * @param param the request object
     */
    public createVirtualAccountRefundWithHttpInfo(param: VirtualAccountsRefundsApiCreateVirtualAccountRefundRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccountRefund>> {
        return this.api.createVirtualAccountRefundWithHttpInfo(param.idempotencyKey, param.clientId, param.virtualAccountRefundRequest,  options).toPromise();
    }

    /**
     * Create a refund for a payment received into a virtual account. Funds are returned to the source account. When subscribed to `virtualAccount.refund.status` notifications, updates on the refund status are delivered asynchronously.
     * Create Refund
     * @param param the request object
     */
    public createVirtualAccountRefund(param: VirtualAccountsRefundsApiCreateVirtualAccountRefundRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccountRefund> {
        return this.api.createVirtualAccountRefund(param.idempotencyKey, param.clientId, param.virtualAccountRefundRequest,  options).toPromise();
    }

    /**
     * Get the details of a refund by its ID
     * Get Refund By Id
     * @param param the request object
     */
    public getVirtualAccountRefundByIdWithHttpInfo(param: VirtualAccountsRefundsApiGetVirtualAccountRefundByIdRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfVirtualAccountRefund>> {
        return this.api.getVirtualAccountRefundByIdWithHttpInfo(param.id, param.clientId,  options).toPromise();
    }

    /**
     * Get the details of a refund by its ID
     * Get Refund By Id
     * @param param the request object
     */
    public getVirtualAccountRefundById(param: VirtualAccountsRefundsApiGetVirtualAccountRefundByIdRequest, options?: Configuration): Promise<ApiResponseOfVirtualAccountRefund> {
        return this.api.getVirtualAccountRefundById(param.id, param.clientId,  options).toPromise();
    }

    /**
     * Retrieve a list of refunds
     * Get list of refunds
     * @param param the request object
     */
    public getVirtualAccountRefundsWithHttpInfo(param: VirtualAccountsRefundsApiGetVirtualAccountRefundsRequest, options?: Configuration): Promise<HttpInfo<ApiListResponseOfVirtualAccountRefund>> {
        return this.api.getVirtualAccountRefundsWithHttpInfo(param.clientId, param.paymentInitiationId, param.status, param.createdDateTimeAfter, param.createdDateTimeBefore, param.cursor,  options).toPromise();
    }

    /**
     * Retrieve a list of refunds
     * Get list of refunds
     * @param param the request object
     */
    public getVirtualAccountRefunds(param: VirtualAccountsRefundsApiGetVirtualAccountRefundsRequest, options?: Configuration): Promise<ApiListResponseOfVirtualAccountRefund> {
        return this.api.getVirtualAccountRefunds(param.clientId, param.paymentInitiationId, param.status, param.createdDateTimeAfter, param.createdDateTimeBefore, param.cursor,  options).toPromise();
    }

}
