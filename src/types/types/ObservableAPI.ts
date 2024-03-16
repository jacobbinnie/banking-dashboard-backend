import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { ApplicationApiRequestFactory, ApplicationApiResponseProcessor} from "../apis/ApplicationApi";
export class ObservableApplicationApi {
    private requestFactory: ApplicationApiRequestFactory;
    private responseProcessor: ApplicationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationApiRequestFactory,
        responseProcessor?: ApplicationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApplicationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApplicationApiResponseProcessor();
    }

    /**
     * Get the information about the institutions configured in your application
     * Get Application Self
     */
    public getApplicationMeWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Application>> {
        const requestContextPromise = this.requestFactory.getApplicationMe(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplicationMeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the information about the institutions configured in your application
     * Get Application Self
     */
    public getApplicationMe(_options?: Configuration): Observable<Application> {
        return this.getApplicationMeWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Application>) => apiResponse.data));
    }

}

import { ApplicationManagementApiRequestFactory, ApplicationManagementApiResponseProcessor} from "../apis/ApplicationManagementApi";
export class ObservableApplicationManagementApi {
    private requestFactory: ApplicationManagementApiRequestFactory;
    private responseProcessor: ApplicationManagementApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationManagementApiRequestFactory,
        responseProcessor?: ApplicationManagementApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApplicationManagementApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApplicationManagementApiResponseProcessor();
    }

    /**
     * Create application vrp configuration
     * Create application VRP configuration by Application Id
     * @param applicationId The id of the application that vrp configuration being created for
     * @param vrpConfiguration The vrp configuration to create
     */
    public createApplicationVRPConfigurationByApplicationIdWithHttpInfo(applicationId: string, vrpConfiguration: VrpConfiguration, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createApplicationVRPConfigurationByApplicationId(applicationId, vrpConfiguration, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createApplicationVRPConfigurationByApplicationIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create application vrp configuration
     * Create application VRP configuration by Application Id
     * @param applicationId The id of the application that vrp configuration being created for
     * @param vrpConfiguration The vrp configuration to create
     */
    public createApplicationVRPConfigurationByApplicationId(applicationId: string, vrpConfiguration: VrpConfiguration, _options?: Configuration): Observable<void> {
        return this.createApplicationVRPConfigurationByApplicationIdWithHttpInfo(applicationId, vrpConfiguration, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a sub-application under the given root application id provided in the authentication token. The sub-application can use the root\'s credentials to call the API
     * Creates a sub-application for the root application id provided in the authentication token
     * @param applicationRequest The sub-application to create
     */
    public createSubApplicationWithHttpInfo(applicationRequest: ApplicationRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfApplicationResponse>> {
        const requestContextPromise = this.requestFactory.createSubApplication(applicationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSubApplicationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a sub-application under the given root application id provided in the authentication token. The sub-application can use the root\'s credentials to call the API
     * Creates a sub-application for the root application id provided in the authentication token
     * @param applicationRequest The sub-application to create
     */
    public createSubApplication(applicationRequest: ApplicationRequest, _options?: Configuration): Observable<ApiResponseOfApplicationResponse> {
        return this.createSubApplicationWithHttpInfo(applicationRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfApplicationResponse>) => apiResponse.data));
    }

    /**
     * Deletes the application with the given ID in the path
     * Delete an application
     * @param applicationId The id of the application being deleted
     */
    public deleteApplicationWithHttpInfo(applicationId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteApplication(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteApplicationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the application with the given ID in the path
     * Delete an application
     * @param applicationId The id of the application being deleted
     */
    public deleteApplication(applicationId: string, _options?: Configuration): Observable<void> {
        return this.deleteApplicationWithHttpInfo(applicationId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves an application by the id provided in the path
     * Get application details
     * @param applicationId The id of the application being fetched
     */
    public getApplicationByIdWithHttpInfo(applicationId: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfApplicationResponse>> {
        const requestContextPromise = this.requestFactory.getApplicationById(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplicationByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves an application by the id provided in the path
     * Get application details
     * @param applicationId The id of the application being fetched
     */
    public getApplicationById(applicationId: string, _options?: Configuration): Observable<ApiResponseOfApplicationResponse> {
        return this.getApplicationByIdWithHttpInfo(applicationId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfApplicationResponse>) => apiResponse.data));
    }

    /**
     * Get application vrp configuration
     * Get application VRP configuration by Application Id
     * @param applicationId The id of the application that vrp configuration being created for
     */
    public getApplicationVRPConfigurationByApplicationIdWithHttpInfo(applicationId: string, _options?: Configuration): Observable<HttpInfo<VrpConfiguration>> {
        const requestContextPromise = this.requestFactory.getApplicationVRPConfigurationByApplicationId(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplicationVRPConfigurationByApplicationIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get application vrp configuration
     * Get application VRP configuration by Application Id
     * @param applicationId The id of the application that vrp configuration being created for
     */
    public getApplicationVRPConfigurationByApplicationId(applicationId: string, _options?: Configuration): Observable<VrpConfiguration> {
        return this.getApplicationVRPConfigurationByApplicationIdWithHttpInfo(applicationId, _options).pipe(map((apiResponse: HttpInfo<VrpConfiguration>) => apiResponse.data));
    }

    /**
     * Retrieves sub-applications for the root application provided in the authentication token. If a sub-application is provided in the authentication token, it will return an empty list.
     * Retrieve sub-applications for the root application provided in the authentication token.
     * @param publicFilterValues 
     */
    public searchApplicationsWithHttpInfo(publicFilterValues?: SearchApplicationsPublicFilterValuesParameter, _options?: Configuration): Observable<HttpInfo<ApiListOfApplicationResponse>> {
        const requestContextPromise = this.requestFactory.searchApplications(publicFilterValues, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchApplicationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves sub-applications for the root application provided in the authentication token. If a sub-application is provided in the authentication token, it will return an empty list.
     * Retrieve sub-applications for the root application provided in the authentication token.
     * @param publicFilterValues 
     */
    public searchApplications(publicFilterValues?: SearchApplicationsPublicFilterValuesParameter, _options?: Configuration): Observable<ApiListOfApplicationResponse> {
        return this.searchApplicationsWithHttpInfo(publicFilterValues, _options).pipe(map((apiResponse: HttpInfo<ApiListOfApplicationResponse>) => apiResponse.data));
    }

    /**
     * Updates the application properties for the application with the given ID in the path
     * Update an Application
     * @param applicationId The id of the application being updated
     * @param applicationRequest The application to update
     */
    public updateApplicationWithHttpInfo(applicationId: string, applicationRequest: ApplicationRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfApplicationResponse>> {
        const requestContextPromise = this.requestFactory.updateApplication(applicationId, applicationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateApplicationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the application properties for the application with the given ID in the path
     * Update an Application
     * @param applicationId The id of the application being updated
     * @param applicationRequest The application to update
     */
    public updateApplication(applicationId: string, applicationRequest: ApplicationRequest, _options?: Configuration): Observable<ApiResponseOfApplicationResponse> {
        return this.updateApplicationWithHttpInfo(applicationId, applicationRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfApplicationResponse>) => apiResponse.data));
    }

    /**
     * Update application vrp configuration
     * Update application VRP configuration by Application Id
     * @param applicationId The id of the application that vrp configuration being created for
     * @param vrpConfiguration The vrp configuration to create
     */
    public updateApplicationVRPConfigurationByApplicationIdWithHttpInfo(applicationId: string, vrpConfiguration: VrpConfiguration, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateApplicationVRPConfigurationByApplicationId(applicationId, vrpConfiguration, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateApplicationVRPConfigurationByApplicationIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update application vrp configuration
     * Update application VRP configuration by Application Id
     * @param applicationId The id of the application that vrp configuration being created for
     * @param vrpConfiguration The vrp configuration to create
     */
    public updateApplicationVRPConfigurationByApplicationId(applicationId: string, vrpConfiguration: VrpConfiguration, _options?: Configuration): Observable<void> {
        return this.updateApplicationVRPConfigurationByApplicationIdWithHttpInfo(applicationId, vrpConfiguration, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { AuthorisationsApiRequestFactory, AuthorisationsApiResponseProcessor} from "../apis/AuthorisationsApi";
export class ObservableAuthorisationsApi {
    private requestFactory: AuthorisationsApiRequestFactory;
    private responseProcessor: AuthorisationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthorisationsApiRequestFactory,
        responseProcessor?: AuthorisationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthorisationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthorisationsApiResponseProcessor();
    }

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. <br><br>See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_BULK_PAYMENT`
     * Create Bulk Payment Authorisation
     * @param bulkPaymentAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public createBulkPaymentAuthorisationWithHttpInfo(bulkPaymentAuthorisationRequest: BulkPaymentAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiResponseOfPaymentAuthorisationRequestResponse>> {
        const requestContextPromise = this.requestFactory.createBulkPaymentAuthorisation(bulkPaymentAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBulkPaymentAuthorisationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. <br><br>See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_BULK_PAYMENT`
     * Create Bulk Payment Authorisation
     * @param bulkPaymentAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public createBulkPaymentAuthorisation(bulkPaymentAuthorisationRequest: BulkPaymentAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<ApiResponseOfPaymentAuthorisationRequestResponse> {
        return this.createBulkPaymentAuthorisationWithHttpInfo(bulkPaymentAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfPaymentAuthorisationRequestResponse>) => apiResponse.data));
    }

    /**
     * Used to initiate the embedded authorisation process for an `Institution` that contains the `INITIATE_EMBEDDED_BULK_PAYMENT` feature in order to obtain the the user\'s authorisation for a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. <br><br> See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_BULK_PAYMENT`
     * Create Embedded Bulk Payment Authorisation
     * @param bulkPaymentEmbeddedAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public createEmbeddedBulkPaymentAuthorisationWithHttpInfo(bulkPaymentEmbeddedAuthorisationRequest: BulkPaymentEmbeddedAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse>> {
        const requestContextPromise = this.requestFactory.createEmbeddedBulkPaymentAuthorisation(bulkPaymentEmbeddedAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEmbeddedBulkPaymentAuthorisationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to initiate the embedded authorisation process for an `Institution` that contains the `INITIATE_EMBEDDED_BULK_PAYMENT` feature in order to obtain the the user\'s authorisation for a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. <br><br> See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_BULK_PAYMENT`
     * Create Embedded Bulk Payment Authorisation
     * @param bulkPaymentEmbeddedAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public createEmbeddedBulkPaymentAuthorisation(bulkPaymentEmbeddedAuthorisationRequest: BulkPaymentEmbeddedAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse> {
        return this.createEmbeddedBulkPaymentAuthorisationWithHttpInfo(bulkPaymentEmbeddedAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse>) => apiResponse.data));
    }

    /**
     * Used to initiate the embedded authorisation process for an `Institution` that contains the `INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT` feature in order to obtain the the user\'s authorisation for a payment.<br><br> See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT`
     * Create Embedded Payment Authorisation
     * @param paymentEmbeddedAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public createEmbeddedPaymentAuthorisationWithHttpInfo(paymentEmbeddedAuthorisationRequest: PaymentEmbeddedAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse>> {
        const requestContextPromise = this.requestFactory.createEmbeddedPaymentAuthorisation(paymentEmbeddedAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEmbeddedPaymentAuthorisationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to initiate the embedded authorisation process for an `Institution` that contains the `INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT` feature in order to obtain the the user\'s authorisation for a payment.<br><br> See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT`
     * Create Embedded Payment Authorisation
     * @param paymentEmbeddedAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public createEmbeddedPaymentAuthorisation(paymentEmbeddedAuthorisationRequest: PaymentEmbeddedAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse> {
        return this.createEmbeddedPaymentAuthorisationWithHttpInfo(paymentEmbeddedAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse>) => apiResponse.data));
    }

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for a payment. This endpoint is used to initiate all the different payment listed below. Based on the type of payment you wish to make, you may be required to provide specific properties in [PaymentRequest](https://docs.yapily.com/api/reference/#operation/createPaymentAuthorisation!path=paymentRequest&t=request). First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/reference/#operation/getInstitution). <br><br>See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow.<br><br>Features:<ul><li>`INITIATE_DOMESTIC_PERIODIC_PAYMENT`</li><li>`INITIATE_DOMESTIC_SCHEDULED_PAYMENT`</li><li>`INITIATE_DOMESTIC_SINGLE_INSTANT_PAYMENT`</li><li>`INITIATE_DOMESTIC_SINGLE_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_PERIODIC_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_SCHEDULED_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_SINGLE_PAYMENT`</li></ul>
     * Create Payment Authorisation
     * @param paymentAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public createPaymentAuthorisationWithHttpInfo(paymentAuthorisationRequest: PaymentAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiResponseOfPaymentAuthorisationRequestResponse>> {
        const requestContextPromise = this.requestFactory.createPaymentAuthorisation(paymentAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPaymentAuthorisationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for a payment. This endpoint is used to initiate all the different payment listed below. Based on the type of payment you wish to make, you may be required to provide specific properties in [PaymentRequest](https://docs.yapily.com/api/reference/#operation/createPaymentAuthorisation!path=paymentRequest&t=request). First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/reference/#operation/getInstitution). <br><br>See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow.<br><br>Features:<ul><li>`INITIATE_DOMESTIC_PERIODIC_PAYMENT`</li><li>`INITIATE_DOMESTIC_SCHEDULED_PAYMENT`</li><li>`INITIATE_DOMESTIC_SINGLE_INSTANT_PAYMENT`</li><li>`INITIATE_DOMESTIC_SINGLE_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_PERIODIC_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_SCHEDULED_PAYMENT`</li><li>`INITIATE_INTERNATIONAL_SINGLE_PAYMENT`</li></ul>
     * Create Payment Authorisation
     * @param paymentAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public createPaymentAuthorisation(paymentAuthorisationRequest: PaymentAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<ApiResponseOfPaymentAuthorisationRequestResponse> {
        return this.createPaymentAuthorisationWithHttpInfo(paymentAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfPaymentAuthorisationRequestResponse>) => apiResponse.data));
    }

    /**
     * Used to initiate the pre-authorisation process for payments for CBI Globe institutions that contain the `INITIATE_ONETIME_PRE_AUTHORISATION_PAYMENTS` feature to authenticate the user. <br><br>Feature: `INITIATE_ONETIME_PRE_AUTHORISATION_PAYMENTS`
     * Create Payment Pre-authorisation
     * @param paymentPreAuthorisationRequest 
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     */
    public createPaymentPreAuthorisationRequestWithHttpInfo(paymentPreAuthorisationRequest: PaymentPreAuthorisationRequest, raw?: boolean, psuIpAddress?: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfPreAuthorisationResponse>> {
        const requestContextPromise = this.requestFactory.createPaymentPreAuthorisationRequest(paymentPreAuthorisationRequest, raw, psuIpAddress, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPaymentPreAuthorisationRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to initiate the pre-authorisation process for payments for CBI Globe institutions that contain the `INITIATE_ONETIME_PRE_AUTHORISATION_PAYMENTS` feature to authenticate the user. <br><br>Feature: `INITIATE_ONETIME_PRE_AUTHORISATION_PAYMENTS`
     * Create Payment Pre-authorisation
     * @param paymentPreAuthorisationRequest 
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     */
    public createPaymentPreAuthorisationRequest(paymentPreAuthorisationRequest: PaymentPreAuthorisationRequest, raw?: boolean, psuIpAddress?: string, _options?: Configuration): Observable<ApiResponseOfPreAuthorisationResponse> {
        return this.createPaymentPreAuthorisationRequestWithHttpInfo(paymentPreAuthorisationRequest, raw, psuIpAddress, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfPreAuthorisationResponse>) => apiResponse.data));
    }

    /**
     * Used to initiate the pre-authorisation process for any `Institution` that contains the `INITIATE_PRE_AUTHORISATION` feature to authenticate the user. <br><br>Feature: `INITIATE_PRE_AUTHORISATION`
     * Create Pre-authorisation
     * @param preAuthorisationRequest 
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     */
    public createPreAuthorisationRequestWithHttpInfo(preAuthorisationRequest: PreAuthorisationRequest, raw?: boolean, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfPreAuthorisationResponse>> {
        const requestContextPromise = this.requestFactory.createPreAuthorisationRequest(preAuthorisationRequest, raw, psuId, psuCorporateId, psuIpAddress, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPreAuthorisationRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to initiate the pre-authorisation process for any `Institution` that contains the `INITIATE_PRE_AUTHORISATION` feature to authenticate the user. <br><br>Feature: `INITIATE_PRE_AUTHORISATION`
     * Create Pre-authorisation
     * @param preAuthorisationRequest 
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     */
    public createPreAuthorisationRequest(preAuthorisationRequest: PreAuthorisationRequest, raw?: boolean, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, _options?: Configuration): Observable<ApiResponseOfPreAuthorisationResponse> {
        return this.createPreAuthorisationRequestWithHttpInfo(preAuthorisationRequest, raw, psuId, psuCorporateId, psuIpAddress, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfPreAuthorisationResponse>) => apiResponse.data));
    }

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial institution in order to give consent to access account data.<br><br>See [Redirect Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/redirect-account-flows/) for more information about this flow.<br><br>Feature: `INITIATE_ACCOUNT_REQUEST`
     * Create Account Authorisation
     * @param accountAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public initiateAccountRequestWithHttpInfo(accountAuthorisationRequest: AccountAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiResponseOfAccountAuthorisationResponse>> {
        const requestContextPromise = this.requestFactory.initiateAccountRequest(accountAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.initiateAccountRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial institution in order to give consent to access account data.<br><br>See [Redirect Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/redirect-account-flows/) for more information about this flow.<br><br>Feature: `INITIATE_ACCOUNT_REQUEST`
     * Create Account Authorisation
     * @param accountAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public initiateAccountRequest(accountAuthorisationRequest: AccountAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<ApiResponseOfAccountAuthorisationResponse> {
        return this.initiateAccountRequestWithHttpInfo(accountAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfAccountAuthorisationResponse>) => apiResponse.data));
    }

    /**
     * Used to initiate the embedded authorisation process for an `Institution` that contains the `INITIATE_EMBEDDED_ACCOUNT_REQUEST` feature in order to obtain the the user\'s authorisation to access their account information. <br><br>See [Embedded Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/embedded-account-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_ACCOUNT_REQUEST`
     * Create Embedded Account Authorisation
     * @param embeddedAccountAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public initiateEmbeddedAccountRequestWithHttpInfo(embeddedAccountAuthorisationRequest: EmbeddedAccountAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiResponseOfEmbeddedAccountAuthorisationResponse>> {
        const requestContextPromise = this.requestFactory.initiateEmbeddedAccountRequest(embeddedAccountAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.initiateEmbeddedAccountRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to initiate the embedded authorisation process for an `Institution` that contains the `INITIATE_EMBEDDED_ACCOUNT_REQUEST` feature in order to obtain the the user\'s authorisation to access their account information. <br><br>See [Embedded Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/embedded-account-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_ACCOUNT_REQUEST`
     * Create Embedded Account Authorisation
     * @param embeddedAccountAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public initiateEmbeddedAccountRequest(embeddedAccountAuthorisationRequest: EmbeddedAccountAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<ApiResponseOfEmbeddedAccountAuthorisationResponse> {
        return this.initiateEmbeddedAccountRequestWithHttpInfo(embeddedAccountAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfEmbeddedAccountAuthorisationResponse>) => apiResponse.data));
    }

    /**
     * Used to prompt the account holder for continued access to their financial data. This endpoint should be used when a `Consent` that was previously `AUTHORIZED` can no longer be used to retrieve data.<br><br>See [Re-Authorisation](https://docs.yapily.com/pages/key-concepts/account-data/account-consents/#re-authorisation) for more information.
     * Re-authorise Account Consent
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public reAuthoriseAccountWithHttpInfo(consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiResponseOfAccountAuthorisationResponse>> {
        const requestContextPromise = this.requestFactory.reAuthoriseAccount(consent, psuId, psuCorporateId, psuIpAddress, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.reAuthoriseAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to prompt the account holder for continued access to their financial data. This endpoint should be used when a `Consent` that was previously `AUTHORIZED` can no longer be used to retrieve data.<br><br>See [Re-Authorisation](https://docs.yapily.com/pages/key-concepts/account-data/account-consents/#re-authorisation) for more information.
     * Re-authorise Account Consent
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public reAuthoriseAccount(consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<ApiResponseOfAccountAuthorisationResponse> {
        return this.reAuthoriseAccountWithHttpInfo(consent, psuId, psuCorporateId, psuIpAddress, raw, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfAccountAuthorisationResponse>) => apiResponse.data));
    }

    /**
     * Used to pass the SCA Code received from the `Institution` (and the SCA method selected by the user where multiple SCA methods are supported by the `Institution`) in order to complete the embedded authorisation to access the user\'s financial data. <br><br>See [Embedded Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/embedded-account-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_ACCOUNT_REQUEST`
     * Update Embedded Account Authorisation
     * @param consentId __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @param embeddedAccountAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public updateEmbeddedAccountRequestWithHttpInfo(consentId: string, embeddedAccountAuthorisationRequest: EmbeddedAccountAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiResponseOfEmbeddedAccountAuthorisationResponse>> {
        const requestContextPromise = this.requestFactory.updateEmbeddedAccountRequest(consentId, embeddedAccountAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateEmbeddedAccountRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to pass the SCA Code received from the `Institution` (and the SCA method selected by the user where multiple SCA methods are supported by the `Institution`) in order to complete the embedded authorisation to access the user\'s financial data. <br><br>See [Embedded Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/embedded-account-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_ACCOUNT_REQUEST`
     * Update Embedded Account Authorisation
     * @param consentId __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @param embeddedAccountAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public updateEmbeddedAccountRequest(consentId: string, embeddedAccountAuthorisationRequest: EmbeddedAccountAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<ApiResponseOfEmbeddedAccountAuthorisationResponse> {
        return this.updateEmbeddedAccountRequestWithHttpInfo(consentId, embeddedAccountAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfEmbeddedAccountAuthorisationResponse>) => apiResponse.data));
    }

    /**
     * Used to pass the SCA Code received from the `Institution` (and the SCA method selected by the user where multiple SCA methods are supported by the `Institution`) in order to complete the embedded authorisation to initiate a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. <br><br>See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_BULK_PAYMENT`
     * Update Embedded Bulk Payment Authorisation
     * @param consentId __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @param bulkPaymentEmbeddedAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public updateEmbeddedBulkPaymentAuthorisationWithHttpInfo(consentId: string, bulkPaymentEmbeddedAuthorisationRequest: BulkPaymentEmbeddedAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse>> {
        const requestContextPromise = this.requestFactory.updateEmbeddedBulkPaymentAuthorisation(consentId, bulkPaymentEmbeddedAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateEmbeddedBulkPaymentAuthorisationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to pass the SCA Code received from the `Institution` (and the SCA method selected by the user where multiple SCA methods are supported by the `Institution`) in order to complete the embedded authorisation to initiate a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. <br><br>See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_BULK_PAYMENT`
     * Update Embedded Bulk Payment Authorisation
     * @param consentId __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @param bulkPaymentEmbeddedAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public updateEmbeddedBulkPaymentAuthorisation(consentId: string, bulkPaymentEmbeddedAuthorisationRequest: BulkPaymentEmbeddedAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse> {
        return this.updateEmbeddedBulkPaymentAuthorisationWithHttpInfo(consentId, bulkPaymentEmbeddedAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse>) => apiResponse.data));
    }

    /**
     * Used to pass the SCA Code received from the `Institution` (and the SCA method selected by the user where multiple SCA methods are supported by the `Institution`) in order to complete the embedded authorisation to initiate a payment. <br><br> See [Embedded Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/embedded/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT`
     * Update Embedded Payment Authorisation
     * @param consentId __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @param paymentEmbeddedAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public updateEmbeddedPaymentAuthorisationWithHttpInfo(consentId: string, paymentEmbeddedAuthorisationRequest: PaymentEmbeddedAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse>> {
        const requestContextPromise = this.requestFactory.updateEmbeddedPaymentAuthorisation(consentId, paymentEmbeddedAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateEmbeddedPaymentAuthorisationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to pass the SCA Code received from the `Institution` (and the SCA method selected by the user where multiple SCA methods are supported by the `Institution`) in order to complete the embedded authorisation to initiate a payment. <br><br> See [Embedded Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/embedded/) for more information about this flow.<br><br>Feature: `INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT`
     * Update Embedded Payment Authorisation
     * @param consentId __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @param paymentEmbeddedAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public updateEmbeddedPaymentAuthorisation(consentId: string, paymentEmbeddedAuthorisationRequest: PaymentEmbeddedAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse> {
        return this.updateEmbeddedPaymentAuthorisationWithHttpInfo(consentId, paymentEmbeddedAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse>) => apiResponse.data));
    }

    /**
     * Used to continue the authorisation process and for any `Institution` that contains the `INITIATE_PRE_AUTHORISATION` feature and direct user to the login screen of their financial institution in order to give consent to initiate a payment. <br><br>See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow. <br><br>Feature: `INITIATE_PRE_AUTHORISATION`
     * Update Payment Pre-authorisation
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param paymentAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public updatePaymentAuthorisationWithHttpInfo(consent: string, paymentAuthorisationRequest: PaymentAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiResponseOfPaymentAuthorisationRequestResponse>> {
        const requestContextPromise = this.requestFactory.updatePaymentAuthorisation(consent, paymentAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePaymentAuthorisationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to continue the authorisation process and for any `Institution` that contains the `INITIATE_PRE_AUTHORISATION` feature and direct user to the login screen of their financial institution in order to give consent to initiate a payment. <br><br>See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow. <br><br>Feature: `INITIATE_PRE_AUTHORISATION`
     * Update Payment Pre-authorisation
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param paymentAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public updatePaymentAuthorisation(consent: string, paymentAuthorisationRequest: PaymentAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<ApiResponseOfPaymentAuthorisationRequestResponse> {
        return this.updatePaymentAuthorisationWithHttpInfo(consent, paymentAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfPaymentAuthorisationRequestResponse>) => apiResponse.data));
    }

    /**
     * Used to continue the authorisation process and for any `Institution` that contains the `INITIATE_PRE_AUTHORISATION` feature and direct user to the login screen of their financial institution in order to give consent to access account data. <br><br>See [Redirect Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/redirect-account-flows/) for more information about this flow. <br><br>Features: <ul><li>`INITIATE_ACCOUNT_REQUEST`</li><li>`INITIATE_PRE_AUTHORISATION`</li></ul>
     * Update Account Pre-authorisation
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param accountAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public updatePreAuthoriseAccountConsentWithHttpInfo(consent: string, accountAuthorisationRequest: AccountAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiResponseOfAccountAuthorisationResponse>> {
        const requestContextPromise = this.requestFactory.updatePreAuthoriseAccountConsent(consent, accountAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePreAuthoriseAccountConsentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to continue the authorisation process and for any `Institution` that contains the `INITIATE_PRE_AUTHORISATION` feature and direct user to the login screen of their financial institution in order to give consent to access account data. <br><br>See [Redirect Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/redirect-account-flows/) for more information about this flow. <br><br>Features: <ul><li>`INITIATE_ACCOUNT_REQUEST`</li><li>`INITIATE_PRE_AUTHORISATION`</li></ul>
     * Update Account Pre-authorisation
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param accountAuthorisationRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public updatePreAuthoriseAccountConsent(consent: string, accountAuthorisationRequest: AccountAuthorisationRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<ApiResponseOfAccountAuthorisationResponse> {
        return this.updatePreAuthoriseAccountConsentWithHttpInfo(consent, accountAuthorisationRequest, psuId, psuCorporateId, psuIpAddress, raw, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfAccountAuthorisationResponse>) => apiResponse.data));
    }

}

import { ConsentsApiRequestFactory, ConsentsApiResponseProcessor} from "../apis/ConsentsApi";
export class ObservableConsentsApi {
    private requestFactory: ConsentsApiRequestFactory;
    private responseProcessor: ConsentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConsentsApiRequestFactory,
        responseProcessor?: ConsentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConsentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConsentsApiResponseProcessor();
    }

    /**
     * Delete a consent using the consent Id
     * Delete Consent
     * @param consentId __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @param forceDelete __Optional__. Whether to force the deletion.
     */
    public _deleteWithHttpInfo(consentId: string, forceDelete?: boolean, _options?: Configuration): Observable<HttpInfo<ApiResponseOfConsentDeleteResponse>> {
        const requestContextPromise = this.requestFactory._delete(consentId, forceDelete, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._deleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a consent using the consent Id
     * Delete Consent
     * @param consentId __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @param forceDelete __Optional__. Whether to force the deletion.
     */
    public _delete(consentId: string, forceDelete?: boolean, _options?: Configuration): Observable<ApiResponseOfConsentDeleteResponse> {
        return this._deleteWithHttpInfo(consentId, forceDelete, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfConsentDeleteResponse>) => apiResponse.data));
    }

    /**
     * Used to obtain a Yapily Consent object containing the `consentToken` once the user has authenticated and you have an OAuth2 authorisation code `auth-code` and state `auth-state`.
     * Exchange OAuth2 Code
     * @param consentAuthCodeRequest 
     */
    public createConsentWithCodeWithHttpInfo(consentAuthCodeRequest: ConsentAuthCodeRequest, _options?: Configuration): Observable<HttpInfo<Consent>> {
        const requestContextPromise = this.requestFactory.createConsentWithCode(consentAuthCodeRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createConsentWithCodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to obtain a Yapily Consent object containing the `consentToken` once the user has authenticated and you have an OAuth2 authorisation code `auth-code` and state `auth-state`.
     * Exchange OAuth2 Code
     * @param consentAuthCodeRequest 
     */
    public createConsentWithCode(consentAuthCodeRequest: ConsentAuthCodeRequest, _options?: Configuration): Observable<Consent> {
        return this.createConsentWithCodeWithHttpInfo(consentAuthCodeRequest, _options).pipe(map((apiResponse: HttpInfo<Consent>) => apiResponse.data));
    }

    /**
     * Used to indicate to Yapily that reconfirmation has occurred for a given Consent, and to update lastUpdatedAt and reconfirmBy for that Consent. Returns the Consent.
     * Extend Consent
     * @param consentId __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @param extendConsentRequest 
     */
    public extendConsentWithHttpInfo(consentId: string, extendConsentRequest: ExtendConsentRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfConsent>> {
        const requestContextPromise = this.requestFactory.extendConsent(consentId, extendConsentRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.extendConsentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to indicate to Yapily that reconfirmation has occurred for a given Consent, and to update lastUpdatedAt and reconfirmBy for that Consent. Returns the Consent.
     * Extend Consent
     * @param consentId __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     * @param extendConsentRequest 
     */
    public extendConsent(consentId: string, extendConsentRequest: ExtendConsentRequest, _options?: Configuration): Observable<ApiResponseOfConsent> {
        return this.extendConsentWithHttpInfo(consentId, extendConsentRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfConsent>) => apiResponse.data));
    }

    /**
     * Get consent using the consent Id
     * Get Consent
     * @param consentId __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     */
    public getConsentByIdWithHttpInfo(consentId: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfConsent>> {
        const requestContextPromise = this.requestFactory.getConsentById(consentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConsentByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get consent using the consent Id
     * Get Consent
     * @param consentId __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update.
     */
    public getConsentById(consentId: string, _options?: Configuration): Observable<ApiResponseOfConsent> {
        return this.getConsentByIdWithHttpInfo(consentId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfConsent>) => apiResponse.data));
    }

    /**
     * Exchange a One-time-token for the consent token
     * Exchange One Time Token
     * @param oneTimeTokenRequest 
     */
    public getConsentBySingleAccessConsentWithHttpInfo(oneTimeTokenRequest: OneTimeTokenRequest, _options?: Configuration): Observable<HttpInfo<Consent>> {
        const requestContextPromise = this.requestFactory.getConsentBySingleAccessConsent(oneTimeTokenRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConsentBySingleAccessConsentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Exchange a One-time-token for the consent token
     * Exchange One Time Token
     * @param oneTimeTokenRequest 
     */
    public getConsentBySingleAccessConsent(oneTimeTokenRequest: OneTimeTokenRequest, _options?: Configuration): Observable<Consent> {
        return this.getConsentBySingleAccessConsentWithHttpInfo(oneTimeTokenRequest, _options).pipe(map((apiResponse: HttpInfo<Consent>) => apiResponse.data));
    }

    /**
     * Used to retrieve all the consents created for each user within an application
     * Get Consents
     * @param filterApplicationUserId __Optional__. Filter records based on the list of &#x60;applicationUserId&#x60; users provided.
     * @param filterUserUuid __Optional__. Filter records based on the list of &#x60;userUuid&#x60; users provided.
     * @param filterInstitution __Optional__. Filter records based on the list of &#x60;Institution&#x60; provided.
     * @param filterStatus __Optional__. Filter records based on the list of &#x60;Consent&#x60; [statuses](https://docs.yapily.com/api/reference/#operation/getConsents!c&#x3D;200&amp;path&#x3D;data/status&amp;t&#x3D;response).
     * @param _from __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ). 
     * @param before __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).
     * @param limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param offset __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
     */
    public getConsentsWithHttpInfo(filterApplicationUserId?: Set<string>, filterUserUuid?: Set<string>, filterInstitution?: Set<string>, filterStatus?: Set<string>, _from?: string, before?: string, limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<ApiListResponseOfConsent>> {
        const requestContextPromise = this.requestFactory.getConsents(filterApplicationUserId, filterUserUuid, filterInstitution, filterStatus, _from, before, limit, offset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConsentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to retrieve all the consents created for each user within an application
     * Get Consents
     * @param filterApplicationUserId __Optional__. Filter records based on the list of &#x60;applicationUserId&#x60; users provided.
     * @param filterUserUuid __Optional__. Filter records based on the list of &#x60;userUuid&#x60; users provided.
     * @param filterInstitution __Optional__. Filter records based on the list of &#x60;Institution&#x60; provided.
     * @param filterStatus __Optional__. Filter records based on the list of &#x60;Consent&#x60; [statuses](https://docs.yapily.com/api/reference/#operation/getConsents!c&#x3D;200&amp;path&#x3D;data/status&amp;t&#x3D;response).
     * @param _from __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ). 
     * @param before __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).
     * @param limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param offset __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
     */
    public getConsents(filterApplicationUserId?: Set<string>, filterUserUuid?: Set<string>, filterInstitution?: Set<string>, filterStatus?: Set<string>, _from?: string, before?: string, limit?: number, offset?: number, _options?: Configuration): Observable<ApiListResponseOfConsent> {
        return this.getConsentsWithHttpInfo(filterApplicationUserId, filterUserUuid, filterInstitution, filterStatus, _from, before, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfConsent>) => apiResponse.data));
    }

}

import { ConstraintsApiRequestFactory, ConstraintsApiResponseProcessor} from "../apis/ConstraintsApi";
export class ObservableConstraintsApi {
    private requestFactory: ConstraintsApiRequestFactory;
    private responseProcessor: ConstraintsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConstraintsApiRequestFactory,
        responseProcessor?: ConstraintsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConstraintsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConstraintsApiResponseProcessor();
    }

    /**
     * Get Data Constraints Rules against an Institution for Account Authorisation requests
     * Get Data Constraints Rules
     * @param institutionIds Unique Id(s) of the &#x60;Institution&#x60;(s) to retrieve the Data Constraints for. Multiple institutionIds need to be separated by &#x60;,&#x60;
     * @param institutionCountryCode Country code of the &#x60;Institution&#x60;(s). Ensure that the country code matches the respective institutionIds; any mismatch will result in an HTTP 404 error response.
     * @param endpointPath The path on the API that is associated with the operation for which constraints are to be retrieved
     * @param endpointMethod The HTTP method that is associated with the operation for which constraints are to be retrieved
     */
    public getAccountConstraintsRulesByInstitutionWithHttpInfo(institutionIds: Array<string>, institutionCountryCode: string, endpointPath?: string, endpointMethod?: 'POST' | 'PATCH' | 'PUT' | 'GET' | 'DELETE', _options?: Configuration): Observable<HttpInfo<ApiListResponseOfDataConstraints>> {
        const requestContextPromise = this.requestFactory.getAccountConstraintsRulesByInstitution(institutionIds, institutionCountryCode, endpointPath, endpointMethod, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountConstraintsRulesByInstitutionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Data Constraints Rules against an Institution for Account Authorisation requests
     * Get Data Constraints Rules
     * @param institutionIds Unique Id(s) of the &#x60;Institution&#x60;(s) to retrieve the Data Constraints for. Multiple institutionIds need to be separated by &#x60;,&#x60;
     * @param institutionCountryCode Country code of the &#x60;Institution&#x60;(s). Ensure that the country code matches the respective institutionIds; any mismatch will result in an HTTP 404 error response.
     * @param endpointPath The path on the API that is associated with the operation for which constraints are to be retrieved
     * @param endpointMethod The HTTP method that is associated with the operation for which constraints are to be retrieved
     */
    public getAccountConstraintsRulesByInstitution(institutionIds: Array<string>, institutionCountryCode: string, endpointPath?: string, endpointMethod?: 'POST' | 'PATCH' | 'PUT' | 'GET' | 'DELETE', _options?: Configuration): Observable<ApiListResponseOfDataConstraints> {
        return this.getAccountConstraintsRulesByInstitutionWithHttpInfo(institutionIds, institutionCountryCode, endpointPath, endpointMethod, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfDataConstraints>) => apiResponse.data));
    }

    /**
     * Retrieve institution specific constraints for payment authorisation and submission requests
     * Get Payment Constraints Rules
     * @param institutionIds Unique Id(s) of the &#x60;Institution&#x60;(s) to retrieve the Payment Constraints for. Multiple institutionIds need to be separated by &#x60;,&#x60;
     * @param institutionCountryCode Country code of the &#x60;Institution&#x60;(s). Ensure that the country code matches the respective institutionIds; any mismatch will result in an HTTP 404 error response.
     * @param paymentType Type of payment to retrieve payment constraints for
     * @param endpointPath The path on the API that is associated with the operation for which constraints are to be retrieved
     * @param endpointMethod The HTTP method that is associated with the operation for which constraints are to be retrieved
     */
    public getPaymentConstraintsRulesByInstitutionWithHttpInfo(institutionIds: Array<string>, institutionCountryCode: string, paymentType: 'DOMESTIC_PAYMENT' | 'DOMESTIC_INSTANT_PAYMENT' | 'DOMESTIC_VARIABLE_RECURRING_PAYMENT' | 'DOMESTIC_SCHEDULED_PAYMENT' | 'DOMESTIC_PERIODIC_PAYMENT' | 'INTERNATIONAL_PAYMENT' | 'INTERNATIONAL_SCHEDULED_PAYMENT' | 'INTERNATIONAL_PERIODIC_PAYMENT' | 'BULK_PAYMENT', endpointPath?: string, endpointMethod?: 'POST' | 'PATCH' | 'PUT' | 'GET' | 'DELETE', _options?: Configuration): Observable<HttpInfo<ApiListResponseOfPaymentConstraints>> {
        const requestContextPromise = this.requestFactory.getPaymentConstraintsRulesByInstitution(institutionIds, institutionCountryCode, paymentType, endpointPath, endpointMethod, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPaymentConstraintsRulesByInstitutionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve institution specific constraints for payment authorisation and submission requests
     * Get Payment Constraints Rules
     * @param institutionIds Unique Id(s) of the &#x60;Institution&#x60;(s) to retrieve the Payment Constraints for. Multiple institutionIds need to be separated by &#x60;,&#x60;
     * @param institutionCountryCode Country code of the &#x60;Institution&#x60;(s). Ensure that the country code matches the respective institutionIds; any mismatch will result in an HTTP 404 error response.
     * @param paymentType Type of payment to retrieve payment constraints for
     * @param endpointPath The path on the API that is associated with the operation for which constraints are to be retrieved
     * @param endpointMethod The HTTP method that is associated with the operation for which constraints are to be retrieved
     */
    public getPaymentConstraintsRulesByInstitution(institutionIds: Array<string>, institutionCountryCode: string, paymentType: 'DOMESTIC_PAYMENT' | 'DOMESTIC_INSTANT_PAYMENT' | 'DOMESTIC_VARIABLE_RECURRING_PAYMENT' | 'DOMESTIC_SCHEDULED_PAYMENT' | 'DOMESTIC_PERIODIC_PAYMENT' | 'INTERNATIONAL_PAYMENT' | 'INTERNATIONAL_SCHEDULED_PAYMENT' | 'INTERNATIONAL_PERIODIC_PAYMENT' | 'BULK_PAYMENT', endpointPath?: string, endpointMethod?: 'POST' | 'PATCH' | 'PUT' | 'GET' | 'DELETE', _options?: Configuration): Observable<ApiListResponseOfPaymentConstraints> {
        return this.getPaymentConstraintsRulesByInstitutionWithHttpInfo(institutionIds, institutionCountryCode, paymentType, endpointPath, endpointMethod, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfPaymentConstraints>) => apiResponse.data));
    }

}

import { FinancialDataApiRequestFactory, FinancialDataApiResponseProcessor} from "../apis/FinancialDataApi";
export class ObservableFinancialDataApi {
    private requestFactory: FinancialDataApiRequestFactory;
    private responseProcessor: FinancialDataApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FinancialDataApiRequestFactory,
        responseProcessor?: FinancialDataApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FinancialDataApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FinancialDataApiResponseProcessor();
    }

    /**
     * Returns the account and balance information for a user\'s specified account.<br><br>Feature: `ACCOUNT`
     * Get Account
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getAccountWithHttpInfo(accountId: string, consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiResponseOfAccount>> {
        const requestContextPromise = this.requestFactory.getAccount(accountId, consent, psuId, psuCorporateId, psuIpAddress, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the account and balance information for a user\'s specified account.<br><br>Feature: `ACCOUNT`
     * Get Account
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getAccount(accountId: string, consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<ApiResponseOfAccount> {
        return this.getAccountWithHttpInfo(accountId, consent, psuId, psuCorporateId, psuIpAddress, raw, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfAccount>) => apiResponse.data));
    }

    /**
     * Returns the balance for the end user associated with the presented consent token.<br><br>Feature: `ACCOUNT_BALANCES`
     * Get Account Balances
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getAccountBalancesWithHttpInfo(accountId: string, consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiResponseOfBalances>> {
        const requestContextPromise = this.requestFactory.getAccountBalances(accountId, consent, psuId, psuCorporateId, psuIpAddress, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountBalancesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the balance for the end user associated with the presented consent token.<br><br>Feature: `ACCOUNT_BALANCES`
     * Get Account Balances
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getAccountBalances(accountId: string, consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<ApiResponseOfBalances> {
        return this.getAccountBalancesWithHttpInfo(accountId, consent, psuId, psuCorporateId, psuIpAddress, raw, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfBalances>) => apiResponse.data));
    }

    /**
     * Returns the list of direct debits for an account.<br><br>Feature: `ACCOUNT_DIRECT_DEBITS`
     * Get Account Direct Debits
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getAccountDirectDebitsWithHttpInfo(accountId: string, consent: string, limit?: number, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiListResponseOfDirectDebitResponse>> {
        const requestContextPromise = this.requestFactory.getAccountDirectDebits(accountId, consent, limit, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountDirectDebitsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the list of direct debits for an account.<br><br>Feature: `ACCOUNT_DIRECT_DEBITS`
     * Get Account Direct Debits
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getAccountDirectDebits(accountId: string, consent: string, limit?: number, raw?: boolean, _options?: Configuration): Observable<ApiListResponseOfDirectDebitResponse> {
        return this.getAccountDirectDebitsWithHttpInfo(accountId, consent, limit, raw, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfDirectDebitResponse>) => apiResponse.data));
    }

    /**
     * Returns the list of periodic payments (standing orders in the UK) for an account.<br><br>Feature: `ACCOUNT_PERIODIC_PAYMENTS`
     * Get Account Periodic Payments
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getAccountPeriodicPaymentsWithHttpInfo(accountId: string, consent: string, limit?: number, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiListResponseOfPaymentResponse>> {
        const requestContextPromise = this.requestFactory.getAccountPeriodicPayments(accountId, consent, limit, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountPeriodicPaymentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the list of periodic payments (standing orders in the UK) for an account.<br><br>Feature: `ACCOUNT_PERIODIC_PAYMENTS`
     * Get Account Periodic Payments
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getAccountPeriodicPayments(accountId: string, consent: string, limit?: number, raw?: boolean, _options?: Configuration): Observable<ApiListResponseOfPaymentResponse> {
        return this.getAccountPeriodicPaymentsWithHttpInfo(accountId, consent, limit, raw, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfPaymentResponse>) => apiResponse.data));
    }

    /**
     * Returns the list of scheduled payments for an account.<br><br>Feature: `ACCOUNT_SCHEDULED_PAYMENTS`
     * Get Account Scheduled Payments
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getAccountScheduledPaymentsWithHttpInfo(accountId: string, consent: string, limit?: number, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiListResponseOfPaymentResponse>> {
        const requestContextPromise = this.requestFactory.getAccountScheduledPayments(accountId, consent, limit, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountScheduledPaymentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the list of scheduled payments for an account.<br><br>Feature: `ACCOUNT_SCHEDULED_PAYMENTS`
     * Get Account Scheduled Payments
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getAccountScheduledPayments(accountId: string, consent: string, limit?: number, raw?: boolean, _options?: Configuration): Observable<ApiListResponseOfPaymentResponse> {
        return this.getAccountScheduledPaymentsWithHttpInfo(accountId, consent, limit, raw, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfPaymentResponse>) => apiResponse.data));
    }

    /**
     * Returns all accounts and balances for the end user associated with the presented consent token.<br><br>Feature: `ACCOUNTS`
     * Get Accounts
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getAccountsWithHttpInfo(consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<AccountApiListResponse>> {
        const requestContextPromise = this.requestFactory.getAccounts(consent, psuId, psuCorporateId, psuIpAddress, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all accounts and balances for the end user associated with the presented consent token.<br><br>Feature: `ACCOUNTS`
     * Get Accounts
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getAccounts(consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<AccountApiListResponse> {
        return this.getAccountsWithHttpInfo(consent, psuId, psuCorporateId, psuIpAddress, raw, _options).pipe(map((apiResponse: HttpInfo<AccountApiListResponse>) => apiResponse.data));
    }

    /**
     * Returns all the beneficiaries of a user\'s account.<br><br>Feature: `ACCOUNT_BENEFICIARIES`
     * Get Account Beneficiaries
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getBeneficiariesWithHttpInfo(accountId: string, consent: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiListResponseOfBeneficiary>> {
        const requestContextPromise = this.requestFactory.getBeneficiaries(accountId, consent, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBeneficiariesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all the beneficiaries of a user\'s account.<br><br>Feature: `ACCOUNT_BENEFICIARIES`
     * Get Account Beneficiaries
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getBeneficiaries(accountId: string, consent: string, raw?: boolean, _options?: Configuration): Observable<ApiListResponseOfBeneficiary> {
        return this.getBeneficiariesWithHttpInfo(accountId, consent, raw, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfBeneficiary>) => apiResponse.data));
    }

    /**
     * Used to retrieve the list of categories returned by the Yapily Categorisation engine for a given locale. <br><br>See [Data Enrichment](https://docs.yapily.com/pages/key-concepts/account-data/data-enrichment/intro-to-data-enrichment/) for more information.
     * Get Categories
     * @param country __Mandatory__. The 2 letter country code e.g. \&#39;GB\&#39;.
     */
    public getCategoriesWithHttpInfo(country: string, _options?: Configuration): Observable<HttpInfo<ApiListResponseOfCategory>> {
        const requestContextPromise = this.requestFactory.getCategories(country, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCategoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to retrieve the list of categories returned by the Yapily Categorisation engine for a given locale. <br><br>See [Data Enrichment](https://docs.yapily.com/pages/key-concepts/account-data/data-enrichment/intro-to-data-enrichment/) for more information.
     * Get Categories
     * @param country __Mandatory__. The 2 letter country code e.g. \&#39;GB\&#39;.
     */
    public getCategories(country: string, _options?: Configuration): Observable<ApiListResponseOfCategory> {
        return this.getCategoriesWithHttpInfo(country, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfCategory>) => apiResponse.data));
    }

    /**
     * Returns the identity information for an account.<br><br>Feature: `IDENTITY`
     * Get Identity
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getIdentityWithHttpInfo(consent: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiResponseOfIdentity>> {
        const requestContextPromise = this.requestFactory.getIdentity(consent, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getIdentityWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the identity information for an account.<br><br>Feature: `IDENTITY`
     * Get Identity
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getIdentity(consent: string, raw?: boolean, _options?: Configuration): Observable<ApiResponseOfIdentity> {
        return this.getIdentityWithHttpInfo(consent, raw, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfIdentity>) => apiResponse.data));
    }

    /**
     * Used to get the account transactions for an account in real time with cursor pagination<br><br>Feature: `ACCOUNT_TRANSACTIONS`
     * Get Real Time Account Transactions
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param _from __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).
     * @param before __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).
     * @param cursor __Optional__. The cursor token supplied by a previous call. The cursor represents a location in the data set.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getRealTimeTransactionsWithHttpInfo(accountId: string, consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, _from?: string, before?: string, cursor?: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiListResponseOfRealTimeTransaction>> {
        const requestContextPromise = this.requestFactory.getRealTimeTransactions(accountId, consent, psuId, psuCorporateId, psuIpAddress, _from, before, cursor, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRealTimeTransactionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to get the account transactions for an account in real time with cursor pagination<br><br>Feature: `ACCOUNT_TRANSACTIONS`
     * Get Real Time Account Transactions
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
     * @param _from __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).
     * @param before __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).
     * @param cursor __Optional__. The cursor token supplied by a previous call. The cursor represents a location in the data set.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getRealTimeTransactions(accountId: string, consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, _from?: string, before?: string, cursor?: string, raw?: boolean, _options?: Configuration): Observable<ApiListResponseOfRealTimeTransaction> {
        return this.getRealTimeTransactionsWithHttpInfo(accountId, consent, psuId, psuCorporateId, psuIpAddress, _from, before, cursor, raw, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfRealTimeTransaction>) => apiResponse.data));
    }

    /**
     * Returns a statement for an account.<br><br>Feature: `ACCOUNT_STATEMENT`
     * Get Account Statement
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param statementId __Mandatory__. The statement Id of the statement file.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getStatementWithHttpInfo(consent: string, accountId: string, statementId: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiResponseOfAccountStatement>> {
        const requestContextPromise = this.requestFactory.getStatement(consent, accountId, statementId, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getStatementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a statement for an account.<br><br>Feature: `ACCOUNT_STATEMENT`
     * Get Account Statement
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param statementId __Mandatory__. The statement Id of the statement file.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getStatement(consent: string, accountId: string, statementId: string, raw?: boolean, _options?: Configuration): Observable<ApiResponseOfAccountStatement> {
        return this.getStatementWithHttpInfo(consent, accountId, statementId, raw, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfAccountStatement>) => apiResponse.data));
    }

    /**
     * Returns a PDF file of a statement for an account.<br><br>Feature: `ACCOUNT_STATEMENT_FILE`
     * Get Account Statement File
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param statementId __Mandatory__. The statement Id of the statement file.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getStatementFileWithHttpInfo(consent: string, accountId: string, statementId: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<HttpFile>> {
        const requestContextPromise = this.requestFactory.getStatementFile(consent, accountId, statementId, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getStatementFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a PDF file of a statement for an account.<br><br>Feature: `ACCOUNT_STATEMENT_FILE`
     * Get Account Statement File
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param statementId __Mandatory__. The statement Id of the statement file.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getStatementFile(consent: string, accountId: string, statementId: string, raw?: boolean, _options?: Configuration): Observable<HttpFile> {
        return this.getStatementFileWithHttpInfo(consent, accountId, statementId, raw, _options).pipe(map((apiResponse: HttpInfo<HttpFile>) => apiResponse.data));
    }

    /**
     * Returns the list of statements for an account.<br><br>Feature: `ACCOUNT_STATEMENTS`
     * Get Account Statements
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param _from __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ). 
     * @param before __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).
     * @param limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param sort __Optional__. Sort transaction records by date ascending with \&#39;date\&#39; or descending with \&#39;-date\&#39;. The default sort order is descending
     * @param offset __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getStatementsWithHttpInfo(consent: string, accountId: string, _from?: string, before?: string, limit?: number, sort?: SortEnum, offset?: number, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiListResponseOfAccountStatement>> {
        const requestContextPromise = this.requestFactory.getStatements(consent, accountId, _from, before, limit, sort, offset, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getStatementsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the list of statements for an account.<br><br>Feature: `ACCOUNT_STATEMENTS`
     * Get Account Statements
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param _from __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ). 
     * @param before __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).
     * @param limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param sort __Optional__. Sort transaction records by date ascending with \&#39;date\&#39; or descending with \&#39;-date\&#39;. The default sort order is descending
     * @param offset __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getStatements(consent: string, accountId: string, _from?: string, before?: string, limit?: number, sort?: SortEnum, offset?: number, raw?: boolean, _options?: Configuration): Observable<ApiListResponseOfAccountStatement> {
        return this.getStatementsWithHttpInfo(consent, accountId, _from, before, limit, sort, offset, raw, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfAccountStatement>) => apiResponse.data));
    }

    /**
     * Returns the account transactions for an account.<br><br>Feature: `ACCOUNT_TRANSACTIONS`
     * Get Account Transactions
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param _with __Optional__. Acceptable value: &#x60;categorisation&#x60;. When set, will include enrichment data in the transactions returned. &lt;br&gt;&lt;br&gt;Enrichment data is optional, e.g. when \&#39;categorisation\&#39; enrichment data is requested, the enrichment response will include categorisation data and merchant name, only if it can be evaluated from the transaction. This service is limited for UK institution transactions currently.
     * @param _from __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ). 
     * @param before __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).
     * @param limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param sort __Optional__. Sort transaction records by date ascending with \&#39;date\&#39; or descending with \&#39;-date\&#39;. The default sort order is descending
     * @param offset __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
     * @param cursor __Optional__. This property is not currently in use.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getTransactionsWithHttpInfo(accountId: string, consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, _with?: Array<string>, _from?: string, before?: string, limit?: number, sort?: SortEnum, offset?: number, cursor?: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiListResponseOfTransaction>> {
        const requestContextPromise = this.requestFactory.getTransactions(accountId, consent, psuId, psuCorporateId, psuIpAddress, _with, _from, before, limit, sort, offset, cursor, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransactionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the account transactions for an account.<br><br>Feature: `ACCOUNT_TRANSACTIONS`
     * Get Account Transactions
     * @param accountId __Mandatory__. The account Id of the user\&#39;s bank account.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param _with __Optional__. Acceptable value: &#x60;categorisation&#x60;. When set, will include enrichment data in the transactions returned. &lt;br&gt;&lt;br&gt;Enrichment data is optional, e.g. when \&#39;categorisation\&#39; enrichment data is requested, the enrichment response will include categorisation data and merchant name, only if it can be evaluated from the transaction. This service is limited for UK institution transactions currently.
     * @param _from __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ). 
     * @param before __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSSZ).
     * @param limit __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
     * @param sort __Optional__. Sort transaction records by date ascending with \&#39;date\&#39; or descending with \&#39;-date\&#39;. The default sort order is descending
     * @param offset __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
     * @param cursor __Optional__. This property is not currently in use.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getTransactions(accountId: string, consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, _with?: Array<string>, _from?: string, before?: string, limit?: number, sort?: SortEnum, offset?: number, cursor?: string, raw?: boolean, _options?: Configuration): Observable<ApiListResponseOfTransaction> {
        return this.getTransactionsWithHttpInfo(accountId, consent, psuId, psuCorporateId, psuIpAddress, _with, _from, before, limit, sort, offset, cursor, raw, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfTransaction>) => apiResponse.data));
    }

}

import { FinancialProfileApiRequestFactory, FinancialProfileApiResponseProcessor} from "../apis/FinancialProfileApi";
export class ObservableFinancialProfileApi {
    private requestFactory: FinancialProfileApiRequestFactory;
    private responseProcessor: FinancialProfileApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FinancialProfileApiRequestFactory,
        responseProcessor?: FinancialProfileApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FinancialProfileApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FinancialProfileApiResponseProcessor();
    }

    /**
     * Used to add a consent to a `Financial Profile` for a `User`.  The response is asynchronous, returned with pending status, while retrieval of financial data is commenced.  There is a limit of 10,000 transactions for enrichment.
     * Create Profile Consent
     * @param userUuid __Mandatory__. The Yapily generated UUID for the user.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; obtained from the original authorisation.
     */
    public createProfileConsentWithHttpInfo(userUuid: string, consent: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfFinancialProfileAuthorisationResponse>> {
        const requestContextPromise = this.requestFactory.createProfileConsent(userUuid, consent, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProfileConsentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to add a consent to a `Financial Profile` for a `User`.  The response is asynchronous, returned with pending status, while retrieval of financial data is commenced.  There is a limit of 10,000 transactions for enrichment.
     * Create Profile Consent
     * @param userUuid __Mandatory__. The Yapily generated UUID for the user.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; obtained from the original authorisation.
     */
    public createProfileConsent(userUuid: string, consent: string, _options?: Configuration): Observable<ApiResponseOfFinancialProfileAuthorisationResponse> {
        return this.createProfileConsentWithHttpInfo(userUuid, consent, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfFinancialProfileAuthorisationResponse>) => apiResponse.data));
    }

    /**
     * Used to delete a `ProfileConsent` for a `User`. This will remove the consent and all associated financial data from the \'Financial Profile\'.
     * Delete Profile Consent
     * @param userUuid __Mandatory__. The Yapily generated UUID for the user.
     * @param profileConsentId __Mandatory__. The ID of the ProfileConsent
     */
    public deleteProfileConsentWithHttpInfo(userUuid: string, profileConsentId: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfFinancialProfileConsentRemoveResponse>> {
        const requestContextPromise = this.requestFactory.deleteProfileConsent(userUuid, profileConsentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProfileConsentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to delete a `ProfileConsent` for a `User`. This will remove the consent and all associated financial data from the \'Financial Profile\'.
     * Delete Profile Consent
     * @param userUuid __Mandatory__. The Yapily generated UUID for the user.
     * @param profileConsentId __Mandatory__. The ID of the ProfileConsent
     */
    public deleteProfileConsent(userUuid: string, profileConsentId: string, _options?: Configuration): Observable<ApiResponseOfFinancialProfileConsentRemoveResponse> {
        return this.deleteProfileConsentWithHttpInfo(userUuid, profileConsentId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfFinancialProfileConsentRemoveResponse>) => apiResponse.data));
    }

    /**
     * Used to retrieve a `Balance Prediction Profile` for a `User`.  Status will be `PENDING` until all ProfileConsents are `COMPLETED`.
     * Get Predicted Balances
     * @param userUuid __Mandatory__. The Yapily generated UUID for the user.
     */
    public getBalancePredictionWithHttpInfo(userUuid: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfFinancialProfileBalancePrediction>> {
        const requestContextPromise = this.requestFactory.getBalancePrediction(userUuid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBalancePredictionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to retrieve a `Balance Prediction Profile` for a `User`.  Status will be `PENDING` until all ProfileConsents are `COMPLETED`.
     * Get Predicted Balances
     * @param userUuid __Mandatory__. The Yapily generated UUID for the user.
     */
    public getBalancePrediction(userUuid: string, _options?: Configuration): Observable<ApiResponseOfFinancialProfileBalancePrediction> {
        return this.getBalancePredictionWithHttpInfo(userUuid, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfFinancialProfileBalancePrediction>) => apiResponse.data));
    }

    /**
     * Used to retrieve a specific ProfileConsent for a User.
     * Get Profile Consent
     * @param userUuid __Mandatory__. The Yapily generated UUID for the user.
     * @param profileConsentId __Mandatory__. The ID of the ProfileConsent
     */
    public getProfileConsentWithHttpInfo(userUuid: string, profileConsentId: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfFinancialProfileConsent>> {
        const requestContextPromise = this.requestFactory.getProfileConsent(userUuid, profileConsentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProfileConsentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to retrieve a specific ProfileConsent for a User.
     * Get Profile Consent
     * @param userUuid __Mandatory__. The Yapily generated UUID for the user.
     * @param profileConsentId __Mandatory__. The ID of the ProfileConsent
     */
    public getProfileConsent(userUuid: string, profileConsentId: string, _options?: Configuration): Observable<ApiResponseOfFinancialProfileConsent> {
        return this.getProfileConsentWithHttpInfo(userUuid, profileConsentId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfFinancialProfileConsent>) => apiResponse.data));
    }

    /**
     * Used to retrieve a `TransactionGroups` for a `User`.  Status will be `PENDING` until all ProfileConsents are `COMPLETED`.
     * Get Transaction Groups
     * @param userUuid __Mandatory__. The Yapily generated UUID for the user.
     */
    public getUserProfileWithHttpInfo(userUuid: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfFinancialProfile>> {
        const requestContextPromise = this.requestFactory.getUserProfile(userUuid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserProfileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to retrieve a `TransactionGroups` for a `User`.  Status will be `PENDING` until all ProfileConsents are `COMPLETED`.
     * Get Transaction Groups
     * @param userUuid __Mandatory__. The Yapily generated UUID for the user.
     */
    public getUserProfile(userUuid: string, _options?: Configuration): Observable<ApiResponseOfFinancialProfile> {
        return this.getUserProfileWithHttpInfo(userUuid, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfFinancialProfile>) => apiResponse.data));
    }

}

import { HostedPagesApiRequestFactory, HostedPagesApiResponseProcessor} from "../apis/HostedPagesApi";
export class ObservableHostedPagesApi {
    private requestFactory: HostedPagesApiRequestFactory;
    private responseProcessor: HostedPagesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: HostedPagesApiRequestFactory,
        responseProcessor?: HostedPagesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HostedPagesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HostedPagesApiResponseProcessor();
    }

    /**
     * Used to initiate a payment request using Yapily Hosted Pages.
     * Create Hosted payment request
     * @param createHostedPaymentRequest 
     */
    public createHostedPaymentRequestWithHttpInfo(createHostedPaymentRequest: CreateHostedPaymentRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfCreateHostedPaymentRequest>> {
        const requestContextPromise = this.requestFactory.createHostedPaymentRequest(createHostedPaymentRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createHostedPaymentRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to initiate a payment request using Yapily Hosted Pages.
     * Create Hosted payment request
     * @param createHostedPaymentRequest 
     */
    public createHostedPaymentRequest(createHostedPaymentRequest: CreateHostedPaymentRequest, _options?: Configuration): Observable<ApiResponseOfCreateHostedPaymentRequest> {
        return this.createHostedPaymentRequestWithHttpInfo(createHostedPaymentRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfCreateHostedPaymentRequest>) => apiResponse.data));
    }

    /**
     * Used to created a long lived payment request for Pay By Link
     * Create Pay By Link
     * @param createHostedPaymentRequestLink 
     */
    public createHostedPaymentRequestLinkWithHttpInfo(createHostedPaymentRequestLink: CreateHostedPaymentRequestLink, _options?: Configuration): Observable<HttpInfo<ApiResponseOfCreateHostedPaymentRequestLink>> {
        const requestContextPromise = this.requestFactory.createHostedPaymentRequestLink(createHostedPaymentRequestLink, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createHostedPaymentRequestLinkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to created a long lived payment request for Pay By Link
     * Create Pay By Link
     * @param createHostedPaymentRequestLink 
     */
    public createHostedPaymentRequestLink(createHostedPaymentRequestLink: CreateHostedPaymentRequestLink, _options?: Configuration): Observable<ApiResponseOfCreateHostedPaymentRequestLink> {
        return this.createHostedPaymentRequestLinkWithHttpInfo(createHostedPaymentRequestLink, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfCreateHostedPaymentRequestLink>) => apiResponse.data));
    }

    /**
     * Used to initiate a VRP consent / mandate request through Yapily Hosted Pages
     * Create VRP Consent
     * @param subApplication __Mandatory__. The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     * @param createHostedVRPConsentRequest 
     */
    public createHostedVRPConsentRequestWithHttpInfo(subApplication: string, createHostedVRPConsentRequest: CreateHostedVRPConsentRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfCreateHostedVRPConsentRequest>> {
        const requestContextPromise = this.requestFactory.createHostedVRPConsentRequest(subApplication, createHostedVRPConsentRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createHostedVRPConsentRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to initiate a VRP consent / mandate request through Yapily Hosted Pages
     * Create VRP Consent
     * @param subApplication __Mandatory__. The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     * @param createHostedVRPConsentRequest 
     */
    public createHostedVRPConsentRequest(subApplication: string, createHostedVRPConsentRequest: CreateHostedVRPConsentRequest, _options?: Configuration): Observable<ApiResponseOfCreateHostedVRPConsentRequest> {
        return this.createHostedVRPConsentRequestWithHttpInfo(subApplication, createHostedVRPConsentRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfCreateHostedVRPConsentRequest>) => apiResponse.data));
    }

    /**
     * Confirms whether there are available funds on the Payer account to execute a Variable Recurring Payment after obtaining the user\'s authorisation. <br><br>Features:<ul><li>`VARIABLE_RECURRING_PAYMENT_FUNDS_CONFIRMATION`</li></ul>
     * Check Funds Availability
     * @param consentRequestId Unique Identifier of the Consent Request
     * @param consentToken __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param fundsConfirmationRequest 
     * @param subApplication The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     */
    public createHostedVrpFundsConfirmationWithHttpInfo(consentRequestId: string, consentToken: string, fundsConfirmationRequest: FundsConfirmationRequest, subApplication?: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfFundsConfirmationResponse>> {
        const requestContextPromise = this.requestFactory.createHostedVrpFundsConfirmation(consentRequestId, consentToken, fundsConfirmationRequest, subApplication, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createHostedVrpFundsConfirmationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Confirms whether there are available funds on the Payer account to execute a Variable Recurring Payment after obtaining the user\'s authorisation. <br><br>Features:<ul><li>`VARIABLE_RECURRING_PAYMENT_FUNDS_CONFIRMATION`</li></ul>
     * Check Funds Availability
     * @param consentRequestId Unique Identifier of the Consent Request
     * @param consentToken __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param fundsConfirmationRequest 
     * @param subApplication The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     */
    public createHostedVrpFundsConfirmation(consentRequestId: string, consentToken: string, fundsConfirmationRequest: FundsConfirmationRequest, subApplication?: string, _options?: Configuration): Observable<ApiResponseOfFundsConfirmationResponse> {
        return this.createHostedVrpFundsConfirmationWithHttpInfo(consentRequestId, consentToken, fundsConfirmationRequest, subApplication, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfFundsConfirmationResponse>) => apiResponse.data));
    }

    /**
     * Creates a Variable Recurring Payment
     * Create VRP Payment
     * @param consentRequestId Unique Identifier of the Consent Request
     * @param consentToken __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param createHostedVRPPaymentRequest 
     * @param subApplication The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     */
    public createHostedVrpPaymentWithHttpInfo(consentRequestId: string, consentToken: string, createHostedVRPPaymentRequest: CreateHostedVRPPaymentRequest, subApplication?: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfCreateHostedVRPPaymentRequest>> {
        const requestContextPromise = this.requestFactory.createHostedVrpPayment(consentRequestId, consentToken, createHostedVRPPaymentRequest, subApplication, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createHostedVrpPaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a Variable Recurring Payment
     * Create VRP Payment
     * @param consentRequestId Unique Identifier of the Consent Request
     * @param consentToken __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param createHostedVRPPaymentRequest 
     * @param subApplication The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     */
    public createHostedVrpPayment(consentRequestId: string, consentToken: string, createHostedVRPPaymentRequest: CreateHostedVRPPaymentRequest, subApplication?: string, _options?: Configuration): Observable<ApiResponseOfCreateHostedVRPPaymentRequest> {
        return this.createHostedVrpPaymentWithHttpInfo(consentRequestId, consentToken, createHostedVRPPaymentRequest, subApplication, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfCreateHostedVRPPaymentRequest>) => apiResponse.data));
    }

    /**
     * Used to get details of a VRP Consent Request
     * Get Hosted VRP Consent Request
     * @param consentRequestId Unique Identifier of the Consent Request
     * @param subApplication The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     */
    public getHostedConsentRequestWithHttpInfo(consentRequestId: string, subApplication?: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfGetHostedVRPConsentRequest>> {
        const requestContextPromise = this.requestFactory.getHostedConsentRequest(consentRequestId, subApplication, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getHostedConsentRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to get details of a VRP Consent Request
     * Get Hosted VRP Consent Request
     * @param consentRequestId Unique Identifier of the Consent Request
     * @param subApplication The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     */
    public getHostedConsentRequest(consentRequestId: string, subApplication?: string, _options?: Configuration): Observable<ApiResponseOfGetHostedVRPConsentRequest> {
        return this.getHostedConsentRequestWithHttpInfo(consentRequestId, subApplication, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfGetHostedVRPConsentRequest>) => apiResponse.data));
    }

    /**
     * Used to get details of a payment request
     * Get Hosted payment request
     * @param paymentRequestId Unique Identifier of the payment request
     */
    public getHostedPaymentRequestWithHttpInfo(paymentRequestId: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfGetHostedPaymentRequest>> {
        const requestContextPromise = this.requestFactory.getHostedPaymentRequest(paymentRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getHostedPaymentRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to get details of a payment request
     * Get Hosted payment request
     * @param paymentRequestId Unique Identifier of the payment request
     */
    public getHostedPaymentRequest(paymentRequestId: string, _options?: Configuration): Observable<ApiResponseOfGetHostedPaymentRequest> {
        return this.getHostedPaymentRequestWithHttpInfo(paymentRequestId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfGetHostedPaymentRequest>) => apiResponse.data));
    }

    /**
     * Used to get all VRP consent requests initiated through Yapily Hosted Pages
     * Get Hosted VRP Consent Requests
     * @param subApplication __Mandatory__. The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     */
    public getHostedVRPConsentRequestsWithHttpInfo(subApplication: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfGetHostedVRPConsentsRequest>> {
        const requestContextPromise = this.requestFactory.getHostedVRPConsentRequests(subApplication, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getHostedVRPConsentRequestsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to get all VRP consent requests initiated through Yapily Hosted Pages
     * Get Hosted VRP Consent Requests
     * @param subApplication __Mandatory__. The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     */
    public getHostedVRPConsentRequests(subApplication: string, _options?: Configuration): Observable<ApiResponseOfGetHostedVRPConsentsRequest> {
        return this.getHostedVRPConsentRequestsWithHttpInfo(subApplication, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfGetHostedVRPConsentsRequest>) => apiResponse.data));
    }

    /**
     * Used to get details of a VRP Payment
     * Get VRP payment
     * @param consentRequestId Unique Identifier of the Consent Request
     * @param paymentId Unique Identifier of the Consent Request
     * @param subApplication The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     */
    public getHostedVRPPaymentRequestWithHttpInfo(consentRequestId: string, paymentId: string, subApplication?: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfGetHostedVRPPaymentRequest>> {
        const requestContextPromise = this.requestFactory.getHostedVRPPaymentRequest(consentRequestId, paymentId, subApplication, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getHostedVRPPaymentRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to get details of a VRP Payment
     * Get VRP payment
     * @param consentRequestId Unique Identifier of the Consent Request
     * @param paymentId Unique Identifier of the Consent Request
     * @param subApplication The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     */
    public getHostedVRPPaymentRequest(consentRequestId: string, paymentId: string, subApplication?: string, _options?: Configuration): Observable<ApiResponseOfGetHostedVRPPaymentRequest> {
        return this.getHostedVRPPaymentRequestWithHttpInfo(consentRequestId, paymentId, subApplication, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfGetHostedVRPPaymentRequest>) => apiResponse.data));
    }

    /**
     * Revoke Hosted VRP Consent Request
     * Revoke Hosted VRP Consent Request
     * @param consentRequestId Unique Identifier of the Consent Request
     * @param subApplication The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     */
    public revokeHostedConsentRequestWithHttpInfo(consentRequestId: string, subApplication?: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfRevokeHostedVRPConsentRequest>> {
        const requestContextPromise = this.requestFactory.revokeHostedConsentRequest(consentRequestId, subApplication, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.revokeHostedConsentRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Revoke Hosted VRP Consent Request
     * Revoke Hosted VRP Consent Request
     * @param consentRequestId Unique Identifier of the Consent Request
     * @param subApplication The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
     */
    public revokeHostedConsentRequest(consentRequestId: string, subApplication?: string, _options?: Configuration): Observable<ApiResponseOfRevokeHostedVRPConsentRequest> {
        return this.revokeHostedConsentRequestWithHttpInfo(consentRequestId, subApplication, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfRevokeHostedVRPConsentRequest>) => apiResponse.data));
    }

}

import { InstitutionsApiRequestFactory, InstitutionsApiResponseProcessor} from "../apis/InstitutionsApi";
export class ObservableInstitutionsApi {
    private requestFactory: InstitutionsApiRequestFactory;
    private responseProcessor: InstitutionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InstitutionsApiRequestFactory,
        responseProcessor?: InstitutionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InstitutionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InstitutionsApiResponseProcessor();
    }

    /**
     * Used to retrieve all features available from Yapily. Each `Institution` supports a one, many or all of these features and can be seen in the features field of the `Institution` object.<br><br>Note: Every `Institution` does not necessarily support every feature. To see which features are available for a particular Institution, use either the [Get Institutions](https://docs.yapily.com/api/reference/#operation/getInstitutions) or [Get Institution](https://docs.yapily.com/api/reference/#operation/getInstitution) endpoint and check the features array within the `Institution` payload.
     * Get Features
     */
    public getFeatureDetailsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ApiListResponseOfFeatureDetails>> {
        const requestContextPromise = this.requestFactory.getFeatureDetails(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFeatureDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to retrieve all features available from Yapily. Each `Institution` supports a one, many or all of these features and can be seen in the features field of the `Institution` object.<br><br>Note: Every `Institution` does not necessarily support every feature. To see which features are available for a particular Institution, use either the [Get Institutions](https://docs.yapily.com/api/reference/#operation/getInstitutions) or [Get Institution](https://docs.yapily.com/api/reference/#operation/getInstitution) endpoint and check the features array within the `Institution` payload.
     * Get Features
     */
    public getFeatureDetails(_options?: Configuration): Observable<ApiListResponseOfFeatureDetails> {
        return this.getFeatureDetailsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfFeatureDetails>) => apiResponse.data));
    }

    /**
     * Used to retrieves details of a specific `Institution` within an application
     * Get Institution
     * @param institutionId __Mandatory__. The Yapily institution Id for the &#x60;Institution&#x60;.
     */
    public getInstitutionWithHttpInfo(institutionId: string, _options?: Configuration): Observable<HttpInfo<Institution>> {
        const requestContextPromise = this.requestFactory.getInstitution(institutionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInstitutionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to retrieves details of a specific `Institution` within an application
     * Get Institution
     * @param institutionId __Mandatory__. The Yapily institution Id for the &#x60;Institution&#x60;.
     */
    public getInstitution(institutionId: string, _options?: Configuration): Observable<Institution> {
        return this.getInstitutionWithHttpInfo(institutionId, _options).pipe(map((apiResponse: HttpInfo<Institution>) => apiResponse.data));
    }

    /**
     * Used to retrieve all `Institutions` within an application
     * Get Institutions
     */
    public getInstitutionsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ApiListResponseOfInstitution>> {
        const requestContextPromise = this.requestFactory.getInstitutions(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInstitutionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to retrieve all `Institutions` within an application
     * Get Institutions
     */
    public getInstitutions(_options?: Configuration): Observable<ApiListResponseOfInstitution> {
        return this.getInstitutionsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfInstitution>) => apiResponse.data));
    }

}

import { NotificationsApiRequestFactory, NotificationsApiResponseProcessor} from "../apis/NotificationsApi";
export class ObservableNotificationsApi {
    private requestFactory: NotificationsApiRequestFactory;
    private responseProcessor: NotificationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NotificationsApiRequestFactory,
        responseProcessor?: NotificationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NotificationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NotificationsApiResponseProcessor();
    }

    /**
     * Used to subscribe to notifications relating to a specified event type.
     * Create Event Subscription
     * @param eventSubscriptionRequest 
     */
    public createEventSubscriptionWithHttpInfo(eventSubscriptionRequest: EventSubscriptionRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfEventSubscriptionResponse>> {
        const requestContextPromise = this.requestFactory.createEventSubscription(eventSubscriptionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEventSubscriptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to subscribe to notifications relating to a specified event type.
     * Create Event Subscription
     * @param eventSubscriptionRequest 
     */
    public createEventSubscription(eventSubscriptionRequest: EventSubscriptionRequest, _options?: Configuration): Observable<ApiResponseOfEventSubscriptionResponse> {
        return this.createEventSubscriptionWithHttpInfo(eventSubscriptionRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfEventSubscriptionResponse>) => apiResponse.data));
    }

    /**
     * Used to unsubscribe to notifications relating to a specified event type.
     * Delete Event Subscription
     * @param eventTypeId Unique identifier of the event type (for which notifications will be sent). 
     */
    public deleteEventSubscriptionByIdWithHttpInfo(eventTypeId: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfEventSubscriptionDeleteResponse>> {
        const requestContextPromise = this.requestFactory.deleteEventSubscriptionById(eventTypeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEventSubscriptionByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to unsubscribe to notifications relating to a specified event type.
     * Delete Event Subscription
     * @param eventTypeId Unique identifier of the event type (for which notifications will be sent). 
     */
    public deleteEventSubscriptionById(eventTypeId: string, _options?: Configuration): Observable<ApiResponseOfEventSubscriptionDeleteResponse> {
        return this.deleteEventSubscriptionByIdWithHttpInfo(eventTypeId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfEventSubscriptionDeleteResponse>) => apiResponse.data));
    }

    /**
     * Used to get details of your subscription to a specified event type.
     * Get Event Subscription
     * @param eventTypeId Unique identifier of the event type (for which notifications will be sent). 
     */
    public getEventSubscriptionByIdWithHttpInfo(eventTypeId: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfEventSubscriptionResponse>> {
        const requestContextPromise = this.requestFactory.getEventSubscriptionById(eventTypeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEventSubscriptionByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to get details of your subscription to a specified event type.
     * Get Event Subscription
     * @param eventTypeId Unique identifier of the event type (for which notifications will be sent). 
     */
    public getEventSubscriptionById(eventTypeId: string, _options?: Configuration): Observable<ApiResponseOfEventSubscriptionResponse> {
        return this.getEventSubscriptionByIdWithHttpInfo(eventTypeId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfEventSubscriptionResponse>) => apiResponse.data));
    }

    /**
     * Get all event subscriptions that your application is subscribed to
     * Get Event Subscriptions
     */
    public getEventSubscriptionsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ApiListResponseOfEventSubscriptionResponse>> {
        const requestContextPromise = this.requestFactory.getEventSubscriptions(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEventSubscriptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all event subscriptions that your application is subscribed to
     * Get Event Subscriptions
     */
    public getEventSubscriptions(_options?: Configuration): Observable<ApiListResponseOfEventSubscriptionResponse> {
        return this.getEventSubscriptionsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfEventSubscriptionResponse>) => apiResponse.data));
    }

}

import { PaymentsApiRequestFactory, PaymentsApiResponseProcessor} from "../apis/PaymentsApi";
export class ObservablePaymentsApi {
    private requestFactory: PaymentsApiRequestFactory;
    private responseProcessor: PaymentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentsApiRequestFactory,
        responseProcessor?: PaymentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PaymentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PaymentsApiResponseProcessor();
    }

    /**
     * Creates a bulk payment after obtaining the user\'s authorisation. <br><br>Feature: `CREATE_BULK_PAYMENT`
     * Create Bulk Payment
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param bulkPaymentRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public createBulkPaymentWithHttpInfo(consent: string, bulkPaymentRequest: BulkPaymentRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiResponseOfPaymentResponse>> {
        const requestContextPromise = this.requestFactory.createBulkPayment(consent, bulkPaymentRequest, psuId, psuCorporateId, psuIpAddress, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBulkPaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a bulk payment after obtaining the user\'s authorisation. <br><br>Feature: `CREATE_BULK_PAYMENT`
     * Create Bulk Payment
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param bulkPaymentRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public createBulkPayment(consent: string, bulkPaymentRequest: BulkPaymentRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<ApiResponseOfPaymentResponse> {
        return this.createBulkPaymentWithHttpInfo(consent, bulkPaymentRequest, psuId, psuCorporateId, psuIpAddress, raw, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfPaymentResponse>) => apiResponse.data));
    }

    /**
     * Creates a payment after obtaining the user\'s authorisation. <br><br>Features:<ul><li>`CREATE_DOMESTIC_PERIODIC_PAYMENT`</li><li>`CREATE_DOMESTIC_SCHEDULED_PAYMENT`</li><li>`CREATE_DOMESTIC_SINGLE_INSTANT_PAYMENT`</li><li>`CREATE_DOMESTIC_SINGLE_PAYMENT`</li><li>`CREATE_INTERNATIONAL_PERIODIC_PAYMENT`</li><li>`CREATE_INTERNATIONAL_SCHEDULED_PAYMENT`</li><li>`CREATE_INTERNATIONAL_SINGLE_PAYMENT`</li></ul>
     * Create Payment
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param paymentRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public createPaymentWithHttpInfo(consent: string, paymentRequest: PaymentRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiResponseOfPaymentResponse>> {
        const requestContextPromise = this.requestFactory.createPayment(consent, paymentRequest, psuId, psuCorporateId, psuIpAddress, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a payment after obtaining the user\'s authorisation. <br><br>Features:<ul><li>`CREATE_DOMESTIC_PERIODIC_PAYMENT`</li><li>`CREATE_DOMESTIC_SCHEDULED_PAYMENT`</li><li>`CREATE_DOMESTIC_SINGLE_INSTANT_PAYMENT`</li><li>`CREATE_DOMESTIC_SINGLE_PAYMENT`</li><li>`CREATE_INTERNATIONAL_PERIODIC_PAYMENT`</li><li>`CREATE_INTERNATIONAL_SCHEDULED_PAYMENT`</li><li>`CREATE_INTERNATIONAL_SINGLE_PAYMENT`</li></ul>
     * Create Payment
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param paymentRequest 
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public createPayment(consent: string, paymentRequest: PaymentRequest, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<ApiResponseOfPaymentResponse> {
        return this.createPaymentWithHttpInfo(consent, paymentRequest, psuId, psuCorporateId, psuIpAddress, raw, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfPaymentResponse>) => apiResponse.data));
    }

    /**
     * Returns the details of a payment. <br><br>Most commonly used to check for payment status updates. <br><br>Feature: `EXISTING_PAYMENTS_DETAILS`
     * Get Payment Details
     * @param paymentId __Mandatory__. The payment Id of the payment.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getPaymentsWithHttpInfo(paymentId: string, consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<HttpInfo<ApiResponseOfPaymentResponses>> {
        const requestContextPromise = this.requestFactory.getPayments(paymentId, consent, psuId, psuCorporateId, psuIpAddress, raw, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPaymentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the details of a payment. <br><br>Most commonly used to check for payment status updates. <br><br>Feature: `EXISTING_PAYMENTS_DETAILS`
     * Get Payment Details
     * @param paymentId __Mandatory__. The payment Id of the payment.
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param psuId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuCorporateId __Conditional__. Represents the user\&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param psuIpAddress __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
     * @param raw __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;.
     */
    public getPayments(paymentId: string, consent: string, psuId?: string, psuCorporateId?: string, psuIpAddress?: string, raw?: boolean, _options?: Configuration): Observable<ApiResponseOfPaymentResponses> {
        return this.getPaymentsWithHttpInfo(paymentId, consent, psuId, psuCorporateId, psuIpAddress, raw, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfPaymentResponses>) => apiResponse.data));
    }

}

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class ObservableUsersApi {
    private requestFactory: UsersApiRequestFactory;
    private responseProcessor: UsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApiResponseProcessor();
    }

    /**
     * Create a new user in your application
     * Create User
     * @param newApplicationUser 
     */
    public addUserWithHttpInfo(newApplicationUser: NewApplicationUser, _options?: Configuration): Observable<HttpInfo<ApplicationUser>> {
        const requestContextPromise = this.requestFactory.addUser(newApplicationUser, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new user in your application
     * Create User
     * @param newApplicationUser 
     */
    public addUser(newApplicationUser: NewApplicationUser, _options?: Configuration): Observable<ApplicationUser> {
        return this.addUserWithHttpInfo(newApplicationUser, _options).pipe(map((apiResponse: HttpInfo<ApplicationUser>) => apiResponse.data));
    }

    /**
     * Delete a user from your application along with any sub-resources (including consent resources on institution APIs if they exist)
     * Delete User
     * @param userUuid __Mandatory__. The Yapily generated UUID for the user.
     */
    public deleteUserWithHttpInfo(userUuid: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfUserDeleteResponse>> {
        const requestContextPromise = this.requestFactory.deleteUser(userUuid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a user from your application along with any sub-resources (including consent resources on institution APIs if they exist)
     * Delete User
     * @param userUuid __Mandatory__. The Yapily generated UUID for the user.
     */
    public deleteUser(userUuid: string, _options?: Configuration): Observable<ApiResponseOfUserDeleteResponse> {
        return this.deleteUserWithHttpInfo(userUuid, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfUserDeleteResponse>) => apiResponse.data));
    }

    /**
     * Get a specific user using the user UUID
     * Get User
     * @param userUuid __Mandatory__. The Yapily generated UUID for the user.
     */
    public getUserWithHttpInfo(userUuid: string, _options?: Configuration): Observable<HttpInfo<ApplicationUser>> {
        const requestContextPromise = this.requestFactory.getUser(userUuid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a specific user using the user UUID
     * Get User
     * @param userUuid __Mandatory__. The Yapily generated UUID for the user.
     */
    public getUser(userUuid: string, _options?: Configuration): Observable<ApplicationUser> {
        return this.getUserWithHttpInfo(userUuid, _options).pipe(map((apiResponse: HttpInfo<ApplicationUser>) => apiResponse.data));
    }

    /**
     * Get all the users configured in your application
     * Get Users
     * @param filterApplicationUserId __Optional__. Filter records based on the list of &#x60;applicationUserId&#x60; users provided.
     */
    public getUsersWithHttpInfo(filterApplicationUserId?: Set<string>, _options?: Configuration): Observable<HttpInfo<Array<ApplicationUser>>> {
        const requestContextPromise = this.requestFactory.getUsers(filterApplicationUserId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUsersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all the users configured in your application
     * Get Users
     * @param filterApplicationUserId __Optional__. Filter records based on the list of &#x60;applicationUserId&#x60; users provided.
     */
    public getUsers(filterApplicationUserId?: Set<string>, _options?: Configuration): Observable<Array<ApplicationUser>> {
        return this.getUsersWithHttpInfo(filterApplicationUserId, _options).pipe(map((apiResponse: HttpInfo<Array<ApplicationUser>>) => apiResponse.data));
    }

}

import { VariableRecurringPaymentsApiRequestFactory, VariableRecurringPaymentsApiResponseProcessor} from "../apis/VariableRecurringPaymentsApi";
export class ObservableVariableRecurringPaymentsApi {
    private requestFactory: VariableRecurringPaymentsApiRequestFactory;
    private responseProcessor: VariableRecurringPaymentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VariableRecurringPaymentsApiRequestFactory,
        responseProcessor?: VariableRecurringPaymentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VariableRecurringPaymentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VariableRecurringPaymentsApiResponseProcessor();
    }

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for Non-Sweeping Variable Recurring Payments. The request would return an Authorization URL and an Identifier for the consent created at the Institution. First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/#get-institution). <br><br>See [Redirect Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/redirect/) for more information about this flow.<br><br>Features:<ul><li>`INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_NONSWEEPING`</li></ul>
     * Create Non-Sweeping Variable Recurring Payment Authorisation
     * @param nonSweepingAuthorisationRequest 
     */
    public createNonSweepingAuthorisationWithHttpInfo(nonSweepingAuthorisationRequest: NonSweepingAuthorisationRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfNonSweepingAuthorisationResponse>> {
        const requestContextPromise = this.requestFactory.createNonSweepingAuthorisation(nonSweepingAuthorisationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNonSweepingAuthorisationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for Non-Sweeping Variable Recurring Payments. The request would return an Authorization URL and an Identifier for the consent created at the Institution. First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/#get-institution). <br><br>See [Redirect Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/redirect/) for more information about this flow.<br><br>Features:<ul><li>`INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_NONSWEEPING`</li></ul>
     * Create Non-Sweeping Variable Recurring Payment Authorisation
     * @param nonSweepingAuthorisationRequest 
     */
    public createNonSweepingAuthorisation(nonSweepingAuthorisationRequest: NonSweepingAuthorisationRequest, _options?: Configuration): Observable<ApiResponseOfNonSweepingAuthorisationResponse> {
        return this.createNonSweepingAuthorisationWithHttpInfo(nonSweepingAuthorisationRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfNonSweepingAuthorisationResponse>) => apiResponse.data));
    }

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for Sweeping Variable Recurring Payments. The request would return an Authorization URL and an Identifier for the consent created at the Institution. First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/#get-institution). <br><br>See [Redirect Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/redirect/) for more information about this flow.<br><br>Features:<ul><li>`INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_SWEEPING`</li></ul>
     * Create Sweeping Variable Recurring Payment Authorisation
     * @param sweepingAuthorisationRequest 
     */
    public createSweepingAuthorisationWithHttpInfo(sweepingAuthorisationRequest: SweepingAuthorisationRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfSweepingAuthorisationResponse>> {
        const requestContextPromise = this.requestFactory.createSweepingAuthorisation(sweepingAuthorisationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSweepingAuthorisationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for Sweeping Variable Recurring Payments. The request would return an Authorization URL and an Identifier for the consent created at the Institution. First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/#get-institution). <br><br>See [Redirect Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/redirect/) for more information about this flow.<br><br>Features:<ul><li>`INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_SWEEPING`</li></ul>
     * Create Sweeping Variable Recurring Payment Authorisation
     * @param sweepingAuthorisationRequest 
     */
    public createSweepingAuthorisation(sweepingAuthorisationRequest: SweepingAuthorisationRequest, _options?: Configuration): Observable<ApiResponseOfSweepingAuthorisationResponse> {
        return this.createSweepingAuthorisationWithHttpInfo(sweepingAuthorisationRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfSweepingAuthorisationResponse>) => apiResponse.data));
    }

    /**
     * Confirms whether there are available funds on the Payer account to execute a Variable Recurring Payment after obtaining the user\'s authorisation. <br><br>Features:<ul><li>`VARIABLE_RECURRING_PAYMENT_FUNDS_CONFIRMATION`</li></ul>
     * Confirm Funds for Variable Recurring Payment
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param fundsConfirmationRequest 
     */
    public createVrpFundsConfirmationWithHttpInfo(consent: string, fundsConfirmationRequest: FundsConfirmationRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfFundsConfirmationResponse>> {
        const requestContextPromise = this.requestFactory.createVrpFundsConfirmation(consent, fundsConfirmationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVrpFundsConfirmationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Confirms whether there are available funds on the Payer account to execute a Variable Recurring Payment after obtaining the user\'s authorisation. <br><br>Features:<ul><li>`VARIABLE_RECURRING_PAYMENT_FUNDS_CONFIRMATION`</li></ul>
     * Confirm Funds for Variable Recurring Payment
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param fundsConfirmationRequest 
     */
    public createVrpFundsConfirmation(consent: string, fundsConfirmationRequest: FundsConfirmationRequest, _options?: Configuration): Observable<ApiResponseOfFundsConfirmationResponse> {
        return this.createVrpFundsConfirmationWithHttpInfo(consent, fundsConfirmationRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfFundsConfirmationResponse>) => apiResponse.data));
    }

    /**
     * Creates a Variable Recurring Payment transaction after obtaining the user\'s authorisation.<br><br>Features:<ul><li>`CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_SWEEPING`</li><li>`CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_NONSWEEPING`</li></ul>
     * Create Variable Recurring Payment
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param submissionRequest 
     */
    public createVrpPaymentWithHttpInfo(consent: string, submissionRequest: SubmissionRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfSubmissionResponse>> {
        const requestContextPromise = this.requestFactory.createVrpPayment(consent, submissionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVrpPaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a Variable Recurring Payment transaction after obtaining the user\'s authorisation.<br><br>Features:<ul><li>`CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_SWEEPING`</li><li>`CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_NONSWEEPING`</li></ul>
     * Create Variable Recurring Payment
     * @param consent __Mandatory__. The &#x60;consent-token&#x60; containing the user\&#39;s authorisation to make the request.
     * @param submissionRequest 
     */
    public createVrpPayment(consent: string, submissionRequest: SubmissionRequest, _options?: Configuration): Observable<ApiResponseOfSubmissionResponse> {
        return this.createVrpPaymentWithHttpInfo(consent, submissionRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfSubmissionResponse>) => apiResponse.data));
    }

    /**
     * Get Non-Sweeping Variable Recurring Payments consent details using the consent Id
     * Get Non-Sweeping Variable Recurring Payment Consent Details
     * @param consentId __Mandatory__. The consent Id of the &#x60;Variable Recurring Payments Consent&#x60; to retrieve.
     */
    public getNonSweepingVrpConsentByIdWithHttpInfo(consentId: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfNonSweepingAuthorisationResponse>> {
        const requestContextPromise = this.requestFactory.getNonSweepingVrpConsentById(consentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNonSweepingVrpConsentByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Non-Sweeping Variable Recurring Payments consent details using the consent Id
     * Get Non-Sweeping Variable Recurring Payment Consent Details
     * @param consentId __Mandatory__. The consent Id of the &#x60;Variable Recurring Payments Consent&#x60; to retrieve.
     */
    public getNonSweepingVrpConsentById(consentId: string, _options?: Configuration): Observable<ApiResponseOfNonSweepingAuthorisationResponse> {
        return this.getNonSweepingVrpConsentByIdWithHttpInfo(consentId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfNonSweepingAuthorisationResponse>) => apiResponse.data));
    }

    /**
     * Get Sweeping Variable Recurring Payments consent details using the consent Id
     * Get Sweeping Variable Recurring Payment Consent Details
     * @param consentId __Mandatory__. The consent Id of the &#x60;Variable Recurring Payments Consent&#x60; to retrieve.
     */
    public getSweepingVrpConsentByIdWithHttpInfo(consentId: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfSweepingAuthorisationResponse>> {
        const requestContextPromise = this.requestFactory.getSweepingVrpConsentById(consentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSweepingVrpConsentByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Sweeping Variable Recurring Payments consent details using the consent Id
     * Get Sweeping Variable Recurring Payment Consent Details
     * @param consentId __Mandatory__. The consent Id of the &#x60;Variable Recurring Payments Consent&#x60; to retrieve.
     */
    public getSweepingVrpConsentById(consentId: string, _options?: Configuration): Observable<ApiResponseOfSweepingAuthorisationResponse> {
        return this.getSweepingVrpConsentByIdWithHttpInfo(consentId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfSweepingAuthorisationResponse>) => apiResponse.data));
    }

    /**
     * Get Variable Recurring Payment details using the Payment Id
     * Get Variable Recurring Payment Details
     * @param paymentId __Mandatory__. The Payment Id of the &#x60;Variable Recurring Payments&#x60; to retrieve.
     * @param consent __Mandatory__. The consent token containing the user\&#39;s authorisation to make the &#x60;Variable Recurring Payments&#x60; request.
     */
    public getVrpPaymentDetailsWithHttpInfo(paymentId: string, consent: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfSubmissionResponse>> {
        const requestContextPromise = this.requestFactory.getVrpPaymentDetails(paymentId, consent, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVrpPaymentDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Variable Recurring Payment details using the Payment Id
     * Get Variable Recurring Payment Details
     * @param paymentId __Mandatory__. The Payment Id of the &#x60;Variable Recurring Payments&#x60; to retrieve.
     * @param consent __Mandatory__. The consent token containing the user\&#39;s authorisation to make the &#x60;Variable Recurring Payments&#x60; request.
     */
    public getVrpPaymentDetails(paymentId: string, consent: string, _options?: Configuration): Observable<ApiResponseOfSubmissionResponse> {
        return this.getVrpPaymentDetailsWithHttpInfo(paymentId, consent, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfSubmissionResponse>) => apiResponse.data));
    }

}

import { VirtualAccountsApiRequestFactory, VirtualAccountsApiResponseProcessor} from "../apis/VirtualAccountsApi";
export class ObservableVirtualAccountsApi {
    private requestFactory: VirtualAccountsApiRequestFactory;
    private responseProcessor: VirtualAccountsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VirtualAccountsApiRequestFactory,
        responseProcessor?: VirtualAccountsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VirtualAccountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VirtualAccountsApiResponseProcessor();
    }

    /**
     * Create a new virtual account
     * Create Account
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountRequest 
     */
    public createVirtualAccountWithHttpInfo(clientId: string, virtualAccountRequest: VirtualAccountRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccount>> {
        const requestContextPromise = this.requestFactory.createVirtualAccount(clientId, virtualAccountRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVirtualAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new virtual account
     * Create Account
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountRequest 
     */
    public createVirtualAccount(clientId: string, virtualAccountRequest: VirtualAccountRequest, _options?: Configuration): Observable<ApiResponseOfVirtualAccount> {
        return this.createVirtualAccountWithHttpInfo(clientId, virtualAccountRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccount>) => apiResponse.data));
    }

    /**
     * Create a new beneficiary (individual or business account) to which a Pay Out can be made. The beneficiary can be used from any virtual account that is held
     * Create Beneficiary
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountBeneficiaryRequest 
     */
    public createVirtualAccountBeneficiaryWithHttpInfo(clientId: string, virtualAccountBeneficiaryRequest: VirtualAccountBeneficiaryRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccountBeneficiary>> {
        const requestContextPromise = this.requestFactory.createVirtualAccountBeneficiary(clientId, virtualAccountBeneficiaryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVirtualAccountBeneficiaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new beneficiary (individual or business account) to which a Pay Out can be made. The beneficiary can be used from any virtual account that is held
     * Create Beneficiary
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountBeneficiaryRequest 
     */
    public createVirtualAccountBeneficiary(clientId: string, virtualAccountBeneficiaryRequest: VirtualAccountBeneficiaryRequest, _options?: Configuration): Observable<ApiResponseOfVirtualAccountBeneficiary> {
        return this.createVirtualAccountBeneficiaryWithHttpInfo(clientId, virtualAccountBeneficiaryRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccountBeneficiary>) => apiResponse.data));
    }

    /**
     * Create a new virtual account client (individual or business client). Available for clients who have direct onboarding permissions only. Please contact your CSM to enquire about access
     * Create Virtual Account Client
     * @param clientId __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     * @param virtualAccountClientRequest 
     */
    public createVirtualAccountClientWithHttpInfo(clientId: string, virtualAccountClientRequest: VirtualAccountClientRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccountClient>> {
        const requestContextPromise = this.requestFactory.createVirtualAccountClient(clientId, virtualAccountClientRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVirtualAccountClientWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new virtual account client (individual or business client). Available for clients who have direct onboarding permissions only. Please contact your CSM to enquire about access
     * Create Virtual Account Client
     * @param clientId __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     * @param virtualAccountClientRequest 
     */
    public createVirtualAccountClient(clientId: string, virtualAccountClientRequest: VirtualAccountClientRequest, _options?: Configuration): Observable<ApiResponseOfVirtualAccountClient> {
        return this.createVirtualAccountClientWithHttpInfo(clientId, virtualAccountClientRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccountClient>) => apiResponse.data));
    }

    /**
     * Initiate a payment from a specified virtual account to a previously added beneficiary using any of the schemes that it supports <br> When subscribed to virtualAccount.payOut.status notifications, further updates on payment processing status will be delivered asynchronously 
     * Create Pay Out
     * @param idempotencyKey Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountPayOutRequest 
     */
    public createVirtualAccountPayOutWithHttpInfo(idempotencyKey: string, clientId: string, virtualAccountPayOutRequest: VirtualAccountPayOutRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccountPayment>> {
        const requestContextPromise = this.requestFactory.createVirtualAccountPayOut(idempotencyKey, clientId, virtualAccountPayOutRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVirtualAccountPayOutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Initiate a payment from a specified virtual account to a previously added beneficiary using any of the schemes that it supports <br> When subscribed to virtualAccount.payOut.status notifications, further updates on payment processing status will be delivered asynchronously 
     * Create Pay Out
     * @param idempotencyKey Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountPayOutRequest 
     */
    public createVirtualAccountPayOut(idempotencyKey: string, clientId: string, virtualAccountPayOutRequest: VirtualAccountPayOutRequest, _options?: Configuration): Observable<ApiResponseOfVirtualAccountPayment> {
        return this.createVirtualAccountPayOutWithHttpInfo(idempotencyKey, clientId, virtualAccountPayOutRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccountPayment>) => apiResponse.data));
    }

    /**
     * Create a refund for a payment received into a virtual account. Funds are returned to the source account. When subscribed to `virtualAccount.refund.status` notifications, updates on the refund status are delivered asynchronously.
     * Create Refund
     * @param idempotencyKey Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountRefundRequest 
     */
    public createVirtualAccountRefundWithHttpInfo(idempotencyKey: string, clientId: string, virtualAccountRefundRequest: VirtualAccountRefundRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccountRefund>> {
        const requestContextPromise = this.requestFactory.createVirtualAccountRefund(idempotencyKey, clientId, virtualAccountRefundRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVirtualAccountRefundWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a refund for a payment received into a virtual account. Funds are returned to the source account. When subscribed to `virtualAccount.refund.status` notifications, updates on the refund status are delivered asynchronously.
     * Create Refund
     * @param idempotencyKey Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountRefundRequest 
     */
    public createVirtualAccountRefund(idempotencyKey: string, clientId: string, virtualAccountRefundRequest: VirtualAccountRefundRequest, _options?: Configuration): Observable<ApiResponseOfVirtualAccountRefund> {
        return this.createVirtualAccountRefundWithHttpInfo(idempotencyKey, clientId, virtualAccountRefundRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccountRefund>) => apiResponse.data));
    }

    /**
     * Create a transfer between two virtual accounts
     * Create Virtual Account Transfer
     * @param idempotencyKey Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountTransferRequest 
     */
    public createVirtualAccountTransferWithHttpInfo(idempotencyKey: string, clientId: string, virtualAccountTransferRequest: VirtualAccountTransferRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccountPayment>> {
        const requestContextPromise = this.requestFactory.createVirtualAccountTransfer(idempotencyKey, clientId, virtualAccountTransferRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVirtualAccountTransferWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a transfer between two virtual accounts
     * Create Virtual Account Transfer
     * @param idempotencyKey Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountTransferRequest 
     */
    public createVirtualAccountTransfer(idempotencyKey: string, clientId: string, virtualAccountTransferRequest: VirtualAccountTransferRequest, _options?: Configuration): Observable<ApiResponseOfVirtualAccountPayment> {
        return this.createVirtualAccountTransferWithHttpInfo(idempotencyKey, clientId, virtualAccountTransferRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccountPayment>) => apiResponse.data));
    }

    /**
     * Delete a specific beneficiary (individual or business account)
     * Delete Beneficiary
     * @param beneficiaryId __Mandatory__. The Id of the beneficiary that will be deleted
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public deleteVirtualAccountBeneficiaryWithHttpInfo(beneficiaryId: string, clientId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteVirtualAccountBeneficiary(beneficiaryId, clientId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteVirtualAccountBeneficiaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a specific beneficiary (individual or business account)
     * Delete Beneficiary
     * @param beneficiaryId __Mandatory__. The Id of the beneficiary that will be deleted
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public deleteVirtualAccountBeneficiary(beneficiaryId: string, clientId: string, _options?: Configuration): Observable<void> {
        return this.deleteVirtualAccountBeneficiaryWithHttpInfo(beneficiaryId, clientId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the details of a pay-in transaction
     * Get Pay-In Details
     * @param paymentId Uniquely identifies a transaction
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public getPayInDetailsWithHttpInfo(paymentId: string, clientId: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccountPayInDetails>> {
        const requestContextPromise = this.requestFactory.getPayInDetails(paymentId, clientId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPayInDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the details of a pay-in transaction
     * Get Pay-In Details
     * @param paymentId Uniquely identifies a transaction
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public getPayInDetails(paymentId: string, clientId: string, _options?: Configuration): Observable<ApiResponseOfVirtualAccountPayInDetails> {
        return this.getPayInDetailsWithHttpInfo(paymentId, clientId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccountPayInDetails>) => apiResponse.data));
    }

    /**
     * Get the details of a specific payment using its Id
     * Get Payment
     * @param id __Mandatory__. The id of the payment
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public getPaymentsByIdWithHttpInfo(id: string, clientId: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccountPayment>> {
        const requestContextPromise = this.requestFactory.getPaymentsById(id, clientId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPaymentsByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the details of a specific payment using its Id
     * Get Payment
     * @param id __Mandatory__. The id of the payment
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public getPaymentsById(id: string, clientId: string, _options?: Configuration): Observable<ApiResponseOfVirtualAccountPayment> {
        return this.getPaymentsByIdWithHttpInfo(id, clientId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccountPayment>) => apiResponse.data));
    }

    /**
     * Gets the list of beneficiaries (individual or business account) to which a Pay Out can be made.
     * Get List Of Beneficiaries
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param cursor __Optional__. Data required to provide pagination
     */
    public getVirtualAccountBeneficiariesWithHttpInfo(clientId: string, cursor?: string, _options?: Configuration): Observable<HttpInfo<ApiListResponseOfVirtualAccountBeneficiary>> {
        const requestContextPromise = this.requestFactory.getVirtualAccountBeneficiaries(clientId, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVirtualAccountBeneficiariesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the list of beneficiaries (individual or business account) to which a Pay Out can be made.
     * Get List Of Beneficiaries
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param cursor __Optional__. Data required to provide pagination
     */
    public getVirtualAccountBeneficiaries(clientId: string, cursor?: string, _options?: Configuration): Observable<ApiListResponseOfVirtualAccountBeneficiary> {
        return this.getVirtualAccountBeneficiariesWithHttpInfo(clientId, cursor, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfVirtualAccountBeneficiary>) => apiResponse.data));
    }

    /**
     * Get the details of a specific beneficiary (individual or business account) to which a Pay Out can be made from its id.
     * Get Beneficiary
     * @param beneficiaryId __Mandatory__. The Id of the requested beneficiary.
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public getVirtualAccountBeneficiaryWithHttpInfo(beneficiaryId: string, clientId: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccountBeneficiary>> {
        const requestContextPromise = this.requestFactory.getVirtualAccountBeneficiary(beneficiaryId, clientId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVirtualAccountBeneficiaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the details of a specific beneficiary (individual or business account) to which a Pay Out can be made from its id.
     * Get Beneficiary
     * @param beneficiaryId __Mandatory__. The Id of the requested beneficiary.
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public getVirtualAccountBeneficiary(beneficiaryId: string, clientId: string, _options?: Configuration): Observable<ApiResponseOfVirtualAccountBeneficiary> {
        return this.getVirtualAccountBeneficiaryWithHttpInfo(beneficiaryId, clientId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccountBeneficiary>) => apiResponse.data));
    }

    /**
     * Get the details of a specific account using its Id
     * Get Account
     * @param accountId __Mandatory__. The Id of the account.
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public getVirtualAccountByIdWithHttpInfo(accountId: string, clientId: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccount>> {
        const requestContextPromise = this.requestFactory.getVirtualAccountById(accountId, clientId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVirtualAccountByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the details of a specific account using its Id
     * Get Account
     * @param accountId __Mandatory__. The Id of the account.
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public getVirtualAccountById(accountId: string, clientId: string, _options?: Configuration): Observable<ApiResponseOfVirtualAccount> {
        return this.getVirtualAccountByIdWithHttpInfo(accountId, clientId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccount>) => apiResponse.data));
    }

    /**
     * Get a Virtual Account Client using its ID. Restricted to applications with direct onboarding permissions only
     * Get a Virtual Account Client by ID
     * @param clientId __Mandatory__. The ID of the client.
     * @param clientId2 __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     */
    public getVirtualAccountClientByIdWithHttpInfo(clientId: string, clientId2: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccountClient>> {
        const requestContextPromise = this.requestFactory.getVirtualAccountClientById(clientId, clientId2, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVirtualAccountClientByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Virtual Account Client using its ID. Restricted to applications with direct onboarding permissions only
     * Get a Virtual Account Client by ID
     * @param clientId __Mandatory__. The ID of the client.
     * @param clientId2 __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     */
    public getVirtualAccountClientById(clientId: string, clientId2: string, _options?: Configuration): Observable<ApiResponseOfVirtualAccountClient> {
        return this.getVirtualAccountClientByIdWithHttpInfo(clientId, clientId2, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccountClient>) => apiResponse.data));
    }

    /**
     * Get Virtual Account Clients (individual or business client).
     * Get List of Virtual Account Clients
     * @param clientId __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     * @param type __Optional__.  Filter clients based on client type. One of BUSINESS or INDIVIDUAL
     * @param status __Optional__.  Filter clients based on client status. One of ACTIVE, PENDING or SUSPENDED
     * @param cursor __Optional__. Data required to provide pagination
     */
    public getVirtualAccountClientsWithHttpInfo(clientId: string, type?: string, status?: string, cursor?: string, _options?: Configuration): Observable<HttpInfo<ApiListResponseOfVirtualAccountClient>> {
        const requestContextPromise = this.requestFactory.getVirtualAccountClients(clientId, type, status, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVirtualAccountClientsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Virtual Account Clients (individual or business client).
     * Get List of Virtual Account Clients
     * @param clientId __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     * @param type __Optional__.  Filter clients based on client type. One of BUSINESS or INDIVIDUAL
     * @param status __Optional__.  Filter clients based on client status. One of ACTIVE, PENDING or SUSPENDED
     * @param cursor __Optional__. Data required to provide pagination
     */
    public getVirtualAccountClients(clientId: string, type?: string, status?: string, cursor?: string, _options?: Configuration): Observable<ApiListResponseOfVirtualAccountClient> {
        return this.getVirtualAccountClientsWithHttpInfo(clientId, type, status, cursor, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfVirtualAccountClient>) => apiResponse.data));
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
    public getVirtualAccountPaymentsWithHttpInfo(clientId: string, accountId?: string, createdDateTimeFrom?: Date, createdDateTimeTo?: Date, status?: Array<string>, type?: Array<string>, cursor?: string, _options?: Configuration): Observable<HttpInfo<ApiListResponseOfVirtualAccountPayment>> {
        const requestContextPromise = this.requestFactory.getVirtualAccountPayments(clientId, accountId, createdDateTimeFrom, createdDateTimeTo, status, type, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVirtualAccountPaymentsWithHttpInfo(rsp)));
            }));
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
    public getVirtualAccountPayments(clientId: string, accountId?: string, createdDateTimeFrom?: Date, createdDateTimeTo?: Date, status?: Array<string>, type?: Array<string>, cursor?: string, _options?: Configuration): Observable<ApiListResponseOfVirtualAccountPayment> {
        return this.getVirtualAccountPaymentsWithHttpInfo(clientId, accountId, createdDateTimeFrom, createdDateTimeTo, status, type, cursor, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfVirtualAccountPayment>) => apiResponse.data));
    }

    /**
     * Get the details of a refund by its ID
     * Get Refund By Id
     * @param id __Mandatory__. The id of the refund
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public getVirtualAccountRefundByIdWithHttpInfo(id: string, clientId: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccountRefund>> {
        const requestContextPromise = this.requestFactory.getVirtualAccountRefundById(id, clientId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVirtualAccountRefundByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the details of a refund by its ID
     * Get Refund By Id
     * @param id __Mandatory__. The id of the refund
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public getVirtualAccountRefundById(id: string, clientId: string, _options?: Configuration): Observable<ApiResponseOfVirtualAccountRefund> {
        return this.getVirtualAccountRefundByIdWithHttpInfo(id, clientId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccountRefund>) => apiResponse.data));
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
    public getVirtualAccountRefundsWithHttpInfo(clientId: string, paymentInitiationId?: string, status?: string, createdDateTimeAfter?: Date, createdDateTimeBefore?: Date, cursor?: string, _options?: Configuration): Observable<HttpInfo<ApiListResponseOfVirtualAccountRefund>> {
        const requestContextPromise = this.requestFactory.getVirtualAccountRefunds(clientId, paymentInitiationId, status, createdDateTimeAfter, createdDateTimeBefore, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVirtualAccountRefundsWithHttpInfo(rsp)));
            }));
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
    public getVirtualAccountRefunds(clientId: string, paymentInitiationId?: string, status?: string, createdDateTimeAfter?: Date, createdDateTimeBefore?: Date, cursor?: string, _options?: Configuration): Observable<ApiListResponseOfVirtualAccountRefund> {
        return this.getVirtualAccountRefundsWithHttpInfo(clientId, paymentInitiationId, status, createdDateTimeAfter, createdDateTimeBefore, cursor, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfVirtualAccountRefund>) => apiResponse.data));
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
    public getVirtualAccountsWithHttpInfo(clientId: string, nickname?: string, currency?: string, status?: string, cursor?: string, _options?: Configuration): Observable<HttpInfo<ApiListResponseOfVirtualAccount>> {
        const requestContextPromise = this.requestFactory.getVirtualAccounts(clientId, nickname, currency, status, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVirtualAccountsWithHttpInfo(rsp)));
            }));
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
    public getVirtualAccounts(clientId: string, nickname?: string, currency?: string, status?: string, cursor?: string, _options?: Configuration): Observable<ApiListResponseOfVirtualAccount> {
        return this.getVirtualAccountsWithHttpInfo(clientId, nickname, currency, status, cursor, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfVirtualAccount>) => apiResponse.data));
    }

    /**
     * Update the details of a specific account using its Id
     * Update Account
     * @param accountId __Mandatory__. The Id of the account.
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param updateVirtualAccountRequest 
     */
    public updateVirtualAccountByIdWithHttpInfo(accountId: string, clientId: string, updateVirtualAccountRequest: UpdateVirtualAccountRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccount>> {
        const requestContextPromise = this.requestFactory.updateVirtualAccountById(accountId, clientId, updateVirtualAccountRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateVirtualAccountByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the details of a specific account using its Id
     * Update Account
     * @param accountId __Mandatory__. The Id of the account.
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param updateVirtualAccountRequest 
     */
    public updateVirtualAccountById(accountId: string, clientId: string, updateVirtualAccountRequest: UpdateVirtualAccountRequest, _options?: Configuration): Observable<ApiResponseOfVirtualAccount> {
        return this.updateVirtualAccountByIdWithHttpInfo(accountId, clientId, updateVirtualAccountRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccount>) => apiResponse.data));
    }

}

import { VirtualAccountsAccountsApiRequestFactory, VirtualAccountsAccountsApiResponseProcessor} from "../apis/VirtualAccountsAccountsApi";
export class ObservableVirtualAccountsAccountsApi {
    private requestFactory: VirtualAccountsAccountsApiRequestFactory;
    private responseProcessor: VirtualAccountsAccountsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VirtualAccountsAccountsApiRequestFactory,
        responseProcessor?: VirtualAccountsAccountsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VirtualAccountsAccountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VirtualAccountsAccountsApiResponseProcessor();
    }

    /**
     * Create a new virtual account
     * Create Account
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountRequest 
     */
    public createVirtualAccountWithHttpInfo(clientId: string, virtualAccountRequest: VirtualAccountRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccount>> {
        const requestContextPromise = this.requestFactory.createVirtualAccount(clientId, virtualAccountRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVirtualAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new virtual account
     * Create Account
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountRequest 
     */
    public createVirtualAccount(clientId: string, virtualAccountRequest: VirtualAccountRequest, _options?: Configuration): Observable<ApiResponseOfVirtualAccount> {
        return this.createVirtualAccountWithHttpInfo(clientId, virtualAccountRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccount>) => apiResponse.data));
    }

    /**
     * Get the details of a specific account using its Id
     * Get Account
     * @param accountId __Mandatory__. The Id of the account.
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public getVirtualAccountByIdWithHttpInfo(accountId: string, clientId: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccount>> {
        const requestContextPromise = this.requestFactory.getVirtualAccountById(accountId, clientId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVirtualAccountByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the details of a specific account using its Id
     * Get Account
     * @param accountId __Mandatory__. The Id of the account.
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public getVirtualAccountById(accountId: string, clientId: string, _options?: Configuration): Observable<ApiResponseOfVirtualAccount> {
        return this.getVirtualAccountByIdWithHttpInfo(accountId, clientId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccount>) => apiResponse.data));
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
    public getVirtualAccountsWithHttpInfo(clientId: string, nickname?: string, currency?: string, status?: string, cursor?: string, _options?: Configuration): Observable<HttpInfo<ApiListResponseOfVirtualAccount>> {
        const requestContextPromise = this.requestFactory.getVirtualAccounts(clientId, nickname, currency, status, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVirtualAccountsWithHttpInfo(rsp)));
            }));
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
    public getVirtualAccounts(clientId: string, nickname?: string, currency?: string, status?: string, cursor?: string, _options?: Configuration): Observable<ApiListResponseOfVirtualAccount> {
        return this.getVirtualAccountsWithHttpInfo(clientId, nickname, currency, status, cursor, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfVirtualAccount>) => apiResponse.data));
    }

    /**
     * Update the details of a specific account using its Id
     * Update Account
     * @param accountId __Mandatory__. The Id of the account.
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param updateVirtualAccountRequest 
     */
    public updateVirtualAccountByIdWithHttpInfo(accountId: string, clientId: string, updateVirtualAccountRequest: UpdateVirtualAccountRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccount>> {
        const requestContextPromise = this.requestFactory.updateVirtualAccountById(accountId, clientId, updateVirtualAccountRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateVirtualAccountByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the details of a specific account using its Id
     * Update Account
     * @param accountId __Mandatory__. The Id of the account.
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param updateVirtualAccountRequest 
     */
    public updateVirtualAccountById(accountId: string, clientId: string, updateVirtualAccountRequest: UpdateVirtualAccountRequest, _options?: Configuration): Observable<ApiResponseOfVirtualAccount> {
        return this.updateVirtualAccountByIdWithHttpInfo(accountId, clientId, updateVirtualAccountRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccount>) => apiResponse.data));
    }

}

import { VirtualAccountsBeneficiariesApiRequestFactory, VirtualAccountsBeneficiariesApiResponseProcessor} from "../apis/VirtualAccountsBeneficiariesApi";
export class ObservableVirtualAccountsBeneficiariesApi {
    private requestFactory: VirtualAccountsBeneficiariesApiRequestFactory;
    private responseProcessor: VirtualAccountsBeneficiariesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VirtualAccountsBeneficiariesApiRequestFactory,
        responseProcessor?: VirtualAccountsBeneficiariesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VirtualAccountsBeneficiariesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VirtualAccountsBeneficiariesApiResponseProcessor();
    }

    /**
     * Create a new beneficiary (individual or business account) to which a Pay Out can be made. The beneficiary can be used from any virtual account that is held
     * Create Beneficiary
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountBeneficiaryRequest 
     */
    public createVirtualAccountBeneficiaryWithHttpInfo(clientId: string, virtualAccountBeneficiaryRequest: VirtualAccountBeneficiaryRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccountBeneficiary>> {
        const requestContextPromise = this.requestFactory.createVirtualAccountBeneficiary(clientId, virtualAccountBeneficiaryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVirtualAccountBeneficiaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new beneficiary (individual or business account) to which a Pay Out can be made. The beneficiary can be used from any virtual account that is held
     * Create Beneficiary
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountBeneficiaryRequest 
     */
    public createVirtualAccountBeneficiary(clientId: string, virtualAccountBeneficiaryRequest: VirtualAccountBeneficiaryRequest, _options?: Configuration): Observable<ApiResponseOfVirtualAccountBeneficiary> {
        return this.createVirtualAccountBeneficiaryWithHttpInfo(clientId, virtualAccountBeneficiaryRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccountBeneficiary>) => apiResponse.data));
    }

    /**
     * Delete a specific beneficiary (individual or business account)
     * Delete Beneficiary
     * @param beneficiaryId __Mandatory__. The Id of the beneficiary that will be deleted
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public deleteVirtualAccountBeneficiaryWithHttpInfo(beneficiaryId: string, clientId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteVirtualAccountBeneficiary(beneficiaryId, clientId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteVirtualAccountBeneficiaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a specific beneficiary (individual or business account)
     * Delete Beneficiary
     * @param beneficiaryId __Mandatory__. The Id of the beneficiary that will be deleted
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public deleteVirtualAccountBeneficiary(beneficiaryId: string, clientId: string, _options?: Configuration): Observable<void> {
        return this.deleteVirtualAccountBeneficiaryWithHttpInfo(beneficiaryId, clientId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Gets the list of beneficiaries (individual or business account) to which a Pay Out can be made.
     * Get List Of Beneficiaries
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param cursor __Optional__. Data required to provide pagination
     */
    public getVirtualAccountBeneficiariesWithHttpInfo(clientId: string, cursor?: string, _options?: Configuration): Observable<HttpInfo<ApiListResponseOfVirtualAccountBeneficiary>> {
        const requestContextPromise = this.requestFactory.getVirtualAccountBeneficiaries(clientId, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVirtualAccountBeneficiariesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the list of beneficiaries (individual or business account) to which a Pay Out can be made.
     * Get List Of Beneficiaries
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param cursor __Optional__. Data required to provide pagination
     */
    public getVirtualAccountBeneficiaries(clientId: string, cursor?: string, _options?: Configuration): Observable<ApiListResponseOfVirtualAccountBeneficiary> {
        return this.getVirtualAccountBeneficiariesWithHttpInfo(clientId, cursor, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfVirtualAccountBeneficiary>) => apiResponse.data));
    }

    /**
     * Get the details of a specific beneficiary (individual or business account) to which a Pay Out can be made from its id.
     * Get Beneficiary
     * @param beneficiaryId __Mandatory__. The Id of the requested beneficiary.
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public getVirtualAccountBeneficiaryWithHttpInfo(beneficiaryId: string, clientId: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccountBeneficiary>> {
        const requestContextPromise = this.requestFactory.getVirtualAccountBeneficiary(beneficiaryId, clientId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVirtualAccountBeneficiaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the details of a specific beneficiary (individual or business account) to which a Pay Out can be made from its id.
     * Get Beneficiary
     * @param beneficiaryId __Mandatory__. The Id of the requested beneficiary.
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public getVirtualAccountBeneficiary(beneficiaryId: string, clientId: string, _options?: Configuration): Observable<ApiResponseOfVirtualAccountBeneficiary> {
        return this.getVirtualAccountBeneficiaryWithHttpInfo(beneficiaryId, clientId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccountBeneficiary>) => apiResponse.data));
    }

}

import { VirtualAccountsClientsApiRequestFactory, VirtualAccountsClientsApiResponseProcessor} from "../apis/VirtualAccountsClientsApi";
export class ObservableVirtualAccountsClientsApi {
    private requestFactory: VirtualAccountsClientsApiRequestFactory;
    private responseProcessor: VirtualAccountsClientsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VirtualAccountsClientsApiRequestFactory,
        responseProcessor?: VirtualAccountsClientsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VirtualAccountsClientsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VirtualAccountsClientsApiResponseProcessor();
    }

    /**
     * Create a new virtual account client (individual or business client). Available for clients who have direct onboarding permissions only. Please contact your CSM to enquire about access
     * Create Virtual Account Client
     * @param clientId __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     * @param virtualAccountClientRequest 
     */
    public createVirtualAccountClientWithHttpInfo(clientId: string, virtualAccountClientRequest: VirtualAccountClientRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccountClient>> {
        const requestContextPromise = this.requestFactory.createVirtualAccountClient(clientId, virtualAccountClientRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVirtualAccountClientWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new virtual account client (individual or business client). Available for clients who have direct onboarding permissions only. Please contact your CSM to enquire about access
     * Create Virtual Account Client
     * @param clientId __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     * @param virtualAccountClientRequest 
     */
    public createVirtualAccountClient(clientId: string, virtualAccountClientRequest: VirtualAccountClientRequest, _options?: Configuration): Observable<ApiResponseOfVirtualAccountClient> {
        return this.createVirtualAccountClientWithHttpInfo(clientId, virtualAccountClientRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccountClient>) => apiResponse.data));
    }

    /**
     * Get a Virtual Account Client using its ID. Restricted to applications with direct onboarding permissions only
     * Get a Virtual Account Client by ID
     * @param clientId __Mandatory__. The ID of the client.
     * @param clientId2 __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     */
    public getVirtualAccountClientByIdWithHttpInfo(clientId: string, clientId2: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccountClient>> {
        const requestContextPromise = this.requestFactory.getVirtualAccountClientById(clientId, clientId2, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVirtualAccountClientByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Virtual Account Client using its ID. Restricted to applications with direct onboarding permissions only
     * Get a Virtual Account Client by ID
     * @param clientId __Mandatory__. The ID of the client.
     * @param clientId2 __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     */
    public getVirtualAccountClientById(clientId: string, clientId2: string, _options?: Configuration): Observable<ApiResponseOfVirtualAccountClient> {
        return this.getVirtualAccountClientByIdWithHttpInfo(clientId, clientId2, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccountClient>) => apiResponse.data));
    }

    /**
     * Get Virtual Account Clients (individual or business client).
     * Get List of Virtual Account Clients
     * @param clientId __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     * @param type __Optional__.  Filter clients based on client type. One of BUSINESS or INDIVIDUAL
     * @param status __Optional__.  Filter clients based on client status. One of ACTIVE, PENDING or SUSPENDED
     * @param cursor __Optional__. Data required to provide pagination
     */
    public getVirtualAccountClientsWithHttpInfo(clientId: string, type?: string, status?: string, cursor?: string, _options?: Configuration): Observable<HttpInfo<ApiListResponseOfVirtualAccountClient>> {
        const requestContextPromise = this.requestFactory.getVirtualAccountClients(clientId, type, status, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVirtualAccountClientsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Virtual Account Clients (individual or business client).
     * Get List of Virtual Account Clients
     * @param clientId __Mandatory__. This must be your master client-id (and not one associated with one of your clients)
     * @param type __Optional__.  Filter clients based on client type. One of BUSINESS or INDIVIDUAL
     * @param status __Optional__.  Filter clients based on client status. One of ACTIVE, PENDING or SUSPENDED
     * @param cursor __Optional__. Data required to provide pagination
     */
    public getVirtualAccountClients(clientId: string, type?: string, status?: string, cursor?: string, _options?: Configuration): Observable<ApiListResponseOfVirtualAccountClient> {
        return this.getVirtualAccountClientsWithHttpInfo(clientId, type, status, cursor, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfVirtualAccountClient>) => apiResponse.data));
    }

}

import { VirtualAccountsPaymentsApiRequestFactory, VirtualAccountsPaymentsApiResponseProcessor} from "../apis/VirtualAccountsPaymentsApi";
export class ObservableVirtualAccountsPaymentsApi {
    private requestFactory: VirtualAccountsPaymentsApiRequestFactory;
    private responseProcessor: VirtualAccountsPaymentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VirtualAccountsPaymentsApiRequestFactory,
        responseProcessor?: VirtualAccountsPaymentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VirtualAccountsPaymentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VirtualAccountsPaymentsApiResponseProcessor();
    }

    /**
     * Initiate a payment from a specified virtual account to a previously added beneficiary using any of the schemes that it supports <br> When subscribed to virtualAccount.payOut.status notifications, further updates on payment processing status will be delivered asynchronously 
     * Create Pay Out
     * @param idempotencyKey Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountPayOutRequest 
     */
    public createVirtualAccountPayOutWithHttpInfo(idempotencyKey: string, clientId: string, virtualAccountPayOutRequest: VirtualAccountPayOutRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccountPayment>> {
        const requestContextPromise = this.requestFactory.createVirtualAccountPayOut(idempotencyKey, clientId, virtualAccountPayOutRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVirtualAccountPayOutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Initiate a payment from a specified virtual account to a previously added beneficiary using any of the schemes that it supports <br> When subscribed to virtualAccount.payOut.status notifications, further updates on payment processing status will be delivered asynchronously 
     * Create Pay Out
     * @param idempotencyKey Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountPayOutRequest 
     */
    public createVirtualAccountPayOut(idempotencyKey: string, clientId: string, virtualAccountPayOutRequest: VirtualAccountPayOutRequest, _options?: Configuration): Observable<ApiResponseOfVirtualAccountPayment> {
        return this.createVirtualAccountPayOutWithHttpInfo(idempotencyKey, clientId, virtualAccountPayOutRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccountPayment>) => apiResponse.data));
    }

    /**
     * Create a transfer between two virtual accounts
     * Create Virtual Account Transfer
     * @param idempotencyKey Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountTransferRequest 
     */
    public createVirtualAccountTransferWithHttpInfo(idempotencyKey: string, clientId: string, virtualAccountTransferRequest: VirtualAccountTransferRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccountPayment>> {
        const requestContextPromise = this.requestFactory.createVirtualAccountTransfer(idempotencyKey, clientId, virtualAccountTransferRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVirtualAccountTransferWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a transfer between two virtual accounts
     * Create Virtual Account Transfer
     * @param idempotencyKey Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountTransferRequest 
     */
    public createVirtualAccountTransfer(idempotencyKey: string, clientId: string, virtualAccountTransferRequest: VirtualAccountTransferRequest, _options?: Configuration): Observable<ApiResponseOfVirtualAccountPayment> {
        return this.createVirtualAccountTransferWithHttpInfo(idempotencyKey, clientId, virtualAccountTransferRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccountPayment>) => apiResponse.data));
    }

    /**
     * Get the details of a pay-in transaction
     * Get Pay-In Details
     * @param paymentId Uniquely identifies a transaction
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public getPayInDetailsWithHttpInfo(paymentId: string, clientId: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccountPayInDetails>> {
        const requestContextPromise = this.requestFactory.getPayInDetails(paymentId, clientId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPayInDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the details of a pay-in transaction
     * Get Pay-In Details
     * @param paymentId Uniquely identifies a transaction
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public getPayInDetails(paymentId: string, clientId: string, _options?: Configuration): Observable<ApiResponseOfVirtualAccountPayInDetails> {
        return this.getPayInDetailsWithHttpInfo(paymentId, clientId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccountPayInDetails>) => apiResponse.data));
    }

    /**
     * Get the details of a specific payment using its Id
     * Get Payment
     * @param id __Mandatory__. The id of the payment
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public getPaymentsByIdWithHttpInfo(id: string, clientId: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccountPayment>> {
        const requestContextPromise = this.requestFactory.getPaymentsById(id, clientId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPaymentsByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the details of a specific payment using its Id
     * Get Payment
     * @param id __Mandatory__. The id of the payment
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public getPaymentsById(id: string, clientId: string, _options?: Configuration): Observable<ApiResponseOfVirtualAccountPayment> {
        return this.getPaymentsByIdWithHttpInfo(id, clientId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccountPayment>) => apiResponse.data));
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
    public getVirtualAccountPaymentsWithHttpInfo(clientId: string, accountId?: string, createdDateTimeFrom?: Date, createdDateTimeTo?: Date, status?: Array<string>, type?: Array<string>, cursor?: string, _options?: Configuration): Observable<HttpInfo<ApiListResponseOfVirtualAccountPayment>> {
        const requestContextPromise = this.requestFactory.getVirtualAccountPayments(clientId, accountId, createdDateTimeFrom, createdDateTimeTo, status, type, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVirtualAccountPaymentsWithHttpInfo(rsp)));
            }));
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
    public getVirtualAccountPayments(clientId: string, accountId?: string, createdDateTimeFrom?: Date, createdDateTimeTo?: Date, status?: Array<string>, type?: Array<string>, cursor?: string, _options?: Configuration): Observable<ApiListResponseOfVirtualAccountPayment> {
        return this.getVirtualAccountPaymentsWithHttpInfo(clientId, accountId, createdDateTimeFrom, createdDateTimeTo, status, type, cursor, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfVirtualAccountPayment>) => apiResponse.data));
    }

}

import { VirtualAccountsRefundsApiRequestFactory, VirtualAccountsRefundsApiResponseProcessor} from "../apis/VirtualAccountsRefundsApi";
export class ObservableVirtualAccountsRefundsApi {
    private requestFactory: VirtualAccountsRefundsApiRequestFactory;
    private responseProcessor: VirtualAccountsRefundsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VirtualAccountsRefundsApiRequestFactory,
        responseProcessor?: VirtualAccountsRefundsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VirtualAccountsRefundsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VirtualAccountsRefundsApiResponseProcessor();
    }

    /**
     * Create a refund for a payment received into a virtual account. Funds are returned to the source account. When subscribed to `virtualAccount.refund.status` notifications, updates on the refund status are delivered asynchronously.
     * Create Refund
     * @param idempotencyKey Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountRefundRequest 
     */
    public createVirtualAccountRefundWithHttpInfo(idempotencyKey: string, clientId: string, virtualAccountRefundRequest: VirtualAccountRefundRequest, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccountRefund>> {
        const requestContextPromise = this.requestFactory.createVirtualAccountRefund(idempotencyKey, clientId, virtualAccountRefundRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVirtualAccountRefundWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a refund for a payment received into a virtual account. Funds are returned to the source account. When subscribed to `virtualAccount.refund.status` notifications, updates on the refund status are delivered asynchronously.
     * Create Refund
     * @param idempotencyKey Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied 
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     * @param virtualAccountRefundRequest 
     */
    public createVirtualAccountRefund(idempotencyKey: string, clientId: string, virtualAccountRefundRequest: VirtualAccountRefundRequest, _options?: Configuration): Observable<ApiResponseOfVirtualAccountRefund> {
        return this.createVirtualAccountRefundWithHttpInfo(idempotencyKey, clientId, virtualAccountRefundRequest, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccountRefund>) => apiResponse.data));
    }

    /**
     * Get the details of a refund by its ID
     * Get Refund By Id
     * @param id __Mandatory__. The id of the refund
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public getVirtualAccountRefundByIdWithHttpInfo(id: string, clientId: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfVirtualAccountRefund>> {
        const requestContextPromise = this.requestFactory.getVirtualAccountRefundById(id, clientId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVirtualAccountRefundByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the details of a refund by its ID
     * Get Refund By Id
     * @param id __Mandatory__. The id of the refund
     * @param clientId The customer or sub-customer ID. Identifies the customer to perform the request for
     */
    public getVirtualAccountRefundById(id: string, clientId: string, _options?: Configuration): Observable<ApiResponseOfVirtualAccountRefund> {
        return this.getVirtualAccountRefundByIdWithHttpInfo(id, clientId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfVirtualAccountRefund>) => apiResponse.data));
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
    public getVirtualAccountRefundsWithHttpInfo(clientId: string, paymentInitiationId?: string, status?: string, createdDateTimeAfter?: Date, createdDateTimeBefore?: Date, cursor?: string, _options?: Configuration): Observable<HttpInfo<ApiListResponseOfVirtualAccountRefund>> {
        const requestContextPromise = this.requestFactory.getVirtualAccountRefunds(clientId, paymentInitiationId, status, createdDateTimeAfter, createdDateTimeBefore, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVirtualAccountRefundsWithHttpInfo(rsp)));
            }));
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
    public getVirtualAccountRefunds(clientId: string, paymentInitiationId?: string, status?: string, createdDateTimeAfter?: Date, createdDateTimeBefore?: Date, cursor?: string, _options?: Configuration): Observable<ApiListResponseOfVirtualAccountRefund> {
        return this.getVirtualAccountRefundsWithHttpInfo(clientId, paymentInitiationId, status, createdDateTimeAfter, createdDateTimeBefore, cursor, _options).pipe(map((apiResponse: HttpInfo<ApiListResponseOfVirtualAccountRefund>) => apiResponse.data));
    }

}
