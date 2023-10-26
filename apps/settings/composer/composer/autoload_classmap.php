<?php

// autoload_classmap.php @generated by Composer

$vendorDir = dirname(__DIR__);
$baseDir = $vendorDir;

return array(
    'Composer\\InstalledVersions' => $vendorDir . '/composer/InstalledVersions.php',
    'OCA\\Settings\\Activity\\GroupProvider' => $baseDir . '/../lib/Activity/GroupProvider.php',
    'OCA\\Settings\\Activity\\GroupSetting' => $baseDir . '/../lib/Activity/GroupSetting.php',
    'OCA\\Settings\\Activity\\Provider' => $baseDir . '/../lib/Activity/Provider.php',
    'OCA\\Settings\\Activity\\SecurityFilter' => $baseDir . '/../lib/Activity/SecurityFilter.php',
    'OCA\\Settings\\Activity\\SecurityProvider' => $baseDir . '/../lib/Activity/SecurityProvider.php',
    'OCA\\Settings\\Activity\\SecuritySetting' => $baseDir . '/../lib/Activity/SecuritySetting.php',
    'OCA\\Settings\\Activity\\Setting' => $baseDir . '/../lib/Activity/Setting.php',
    'OCA\\Settings\\AppInfo\\Application' => $baseDir . '/../lib/AppInfo/Application.php',
    'OCA\\Settings\\BackgroundJobs\\VerifyUserData' => $baseDir . '/../lib/BackgroundJobs/VerifyUserData.php',
    'OCA\\Settings\\Controller\\AISettingsController' => $baseDir . '/../lib/Controller/AISettingsController.php',
    'OCA\\Settings\\Controller\\AdminSettingsController' => $baseDir . '/../lib/Controller/AdminSettingsController.php',
    'OCA\\Settings\\Controller\\AppSettingsController' => $baseDir . '/../lib/Controller/AppSettingsController.php',
    'OCA\\Settings\\Controller\\AuthSettingsController' => $baseDir . '/../lib/Controller/AuthSettingsController.php',
    'OCA\\Settings\\Controller\\AuthorizedGroupController' => $baseDir . '/../lib/Controller/AuthorizedGroupController.php',
    'OCA\\Settings\\Controller\\ChangePasswordController' => $baseDir . '/../lib/Controller/ChangePasswordController.php',
    'OCA\\Settings\\Controller\\CheckSetupController' => $baseDir . '/../lib/Controller/CheckSetupController.php',
    'OCA\\Settings\\Controller\\CommonSettingsTrait' => $baseDir . '/../lib/Controller/CommonSettingsTrait.php',
    'OCA\\Settings\\Controller\\HelpController' => $baseDir . '/../lib/Controller/HelpController.php',
    'OCA\\Settings\\Controller\\LogSettingsController' => $baseDir . '/../lib/Controller/LogSettingsController.php',
    'OCA\\Settings\\Controller\\MailSettingsController' => $baseDir . '/../lib/Controller/MailSettingsController.php',
    'OCA\\Settings\\Controller\\PersonalSettingsController' => $baseDir . '/../lib/Controller/PersonalSettingsController.php',
    'OCA\\Settings\\Controller\\ReasonsController' => $baseDir . '/../lib/Controller/ReasonsController.php',
    'OCA\\Settings\\Controller\\TwoFactorSettingsController' => $baseDir . '/../lib/Controller/TwoFactorSettingsController.php',
    'OCA\\Settings\\Controller\\UsersController' => $baseDir . '/../lib/Controller/UsersController.php',
    'OCA\\Settings\\Controller\\WebAuthnController' => $baseDir . '/../lib/Controller/WebAuthnController.php',
    'OCA\\Settings\\Events\\BeforeTemplateRenderedEvent' => $baseDir . '/../lib/Events/BeforeTemplateRenderedEvent.php',
    'OCA\\Settings\\Hooks' => $baseDir . '/../lib/Hooks.php',
    'OCA\\Settings\\Listener\\AppPasswordCreatedActivityListener' => $baseDir . '/../lib/Listener/AppPasswordCreatedActivityListener.php',
    'OCA\\Settings\\Listener\\GroupRemovedListener' => $baseDir . '/../lib/Listener/GroupRemovedListener.php',
    'OCA\\Settings\\Listener\\UserAddedToGroupActivityListener' => $baseDir . '/../lib/Listener/UserAddedToGroupActivityListener.php',
    'OCA\\Settings\\Listener\\UserRemovedFromGroupActivityListener' => $baseDir . '/../lib/Listener/UserRemovedFromGroupActivityListener.php',
    'OCA\\Settings\\Mailer\\NewUserMailHelper' => $baseDir . '/../lib/Mailer/NewUserMailHelper.php',
    'OCA\\Settings\\Middleware\\SubadminMiddleware' => $baseDir . '/../lib/Middleware/SubadminMiddleware.php',
    'OCA\\Settings\\Search\\AppSearch' => $baseDir . '/../lib/Search/AppSearch.php',
    'OCA\\Settings\\Search\\SectionSearch' => $baseDir . '/../lib/Search/SectionSearch.php',
    'OCA\\Settings\\Search\\UserSearch' => $baseDir . '/../lib/Search/UserSearch.php',
    'OCA\\Settings\\Sections\\Admin\\Additional' => $baseDir . '/../lib/Sections/Admin/Additional.php',
    'OCA\\Settings\\Sections\\Admin\\ArtificialIntelligence' => $baseDir . '/../lib/Sections/Admin/ArtificialIntelligence.php',
    'OCA\\Settings\\Sections\\Admin\\Delegation' => $baseDir . '/../lib/Sections/Admin/Delegation.php',
    'OCA\\Settings\\Sections\\Admin\\Groupware' => $baseDir . '/../lib/Sections/Admin/Groupware.php',
    'OCA\\Settings\\Sections\\Admin\\Overview' => $baseDir . '/../lib/Sections/Admin/Overview.php',
    'OCA\\Settings\\Sections\\Admin\\Security' => $baseDir . '/../lib/Sections/Admin/Security.php',
    'OCA\\Settings\\Sections\\Admin\\Server' => $baseDir . '/../lib/Sections/Admin/Server.php',
    'OCA\\Settings\\Sections\\Admin\\Sharing' => $baseDir . '/../lib/Sections/Admin/Sharing.php',
    'OCA\\Settings\\Sections\\Personal\\Availability' => $baseDir . '/../lib/Sections/Personal/Availability.php',
    'OCA\\Settings\\Sections\\Personal\\Calendar' => $baseDir . '/../lib/Sections/Personal/Calendar.php',
    'OCA\\Settings\\Sections\\Personal\\PersonalInfo' => $baseDir . '/../lib/Sections/Personal/PersonalInfo.php',
    'OCA\\Settings\\Sections\\Personal\\Security' => $baseDir . '/../lib/Sections/Personal/Security.php',
    'OCA\\Settings\\Sections\\Personal\\SyncClients' => $baseDir . '/../lib/Sections/Personal/SyncClients.php',
    'OCA\\Settings\\Service\\AuthorizedGroupService' => $baseDir . '/../lib/Service/AuthorizedGroupService.php',
    'OCA\\Settings\\Service\\NotFoundException' => $baseDir . '/../lib/Service/NotFoundException.php',
    'OCA\\Settings\\Service\\ServiceException' => $baseDir . '/../lib/Service/ServiceException.php',
    'OCA\\Settings\\Settings\\Admin\\ArtificialIntelligence' => $baseDir . '/../lib/Settings/Admin/ArtificialIntelligence.php',
    'OCA\\Settings\\Settings\\Admin\\Delegation' => $baseDir . '/../lib/Settings/Admin/Delegation.php',
    'OCA\\Settings\\Settings\\Admin\\Mail' => $baseDir . '/../lib/Settings/Admin/Mail.php',
    'OCA\\Settings\\Settings\\Admin\\Overview' => $baseDir . '/../lib/Settings/Admin/Overview.php',
    'OCA\\Settings\\Settings\\Admin\\Security' => $baseDir . '/../lib/Settings/Admin/Security.php',
    'OCA\\Settings\\Settings\\Admin\\Server' => $baseDir . '/../lib/Settings/Admin/Server.php',
    'OCA\\Settings\\Settings\\Admin\\Sharing' => $baseDir . '/../lib/Settings/Admin/Sharing.php',
    'OCA\\Settings\\Settings\\Personal\\Additional' => $baseDir . '/../lib/Settings/Personal/Additional.php',
    'OCA\\Settings\\Settings\\Personal\\PersonalInfo' => $baseDir . '/../lib/Settings/Personal/PersonalInfo.php',
    'OCA\\Settings\\Settings\\Personal\\Security\\Authtokens' => $baseDir . '/../lib/Settings/Personal/Security/Authtokens.php',
    'OCA\\Settings\\Settings\\Personal\\Security\\Password' => $baseDir . '/../lib/Settings/Personal/Security/Password.php',
    'OCA\\Settings\\Settings\\Personal\\Security\\TwoFactor' => $baseDir . '/../lib/Settings/Personal/Security/TwoFactor.php',
    'OCA\\Settings\\Settings\\Personal\\Security\\WebAuthn' => $baseDir . '/../lib/Settings/Personal/Security/WebAuthn.php',
    'OCA\\Settings\\Settings\\Personal\\ServerDevNotice' => $baseDir . '/../lib/Settings/Personal/ServerDevNotice.php',
    'OCA\\Settings\\SetupChecks\\CheckUserCertificates' => $baseDir . '/../lib/SetupChecks/CheckUserCertificates.php',
    'OCA\\Settings\\SetupChecks\\DefaultPhoneRegionSet' => $baseDir . '/../lib/SetupChecks/DefaultPhoneRegionSet.php',
    'OCA\\Settings\\SetupChecks\\EmailTestSuccessful' => $baseDir . '/../lib/SetupChecks/EmailTestSuccessful.php',
    'OCA\\Settings\\SetupChecks\\FileLocking' => $baseDir . '/../lib/SetupChecks/FileLocking.php',
    'OCA\\Settings\\SetupChecks\\InternetConnectivity' => $baseDir . '/../lib/SetupChecks/InternetConnectivity.php',
    'OCA\\Settings\\SetupChecks\\LegacySSEKeyFormat' => $baseDir . '/../lib/SetupChecks/LegacySSEKeyFormat.php',
    'OCA\\Settings\\SetupChecks\\PhpDefaultCharset' => $baseDir . '/../lib/SetupChecks/PhpDefaultCharset.php',
    'OCA\\Settings\\SetupChecks\\PhpGetEnv' => $baseDir . '/../lib/SetupChecks/PhpGetEnv.php',
    'OCA\\Settings\\SetupChecks\\PhpModules' => $baseDir . '/../lib/SetupChecks/PhpModules.php',
    'OCA\\Settings\\SetupChecks\\PhpOutdated' => $baseDir . '/../lib/SetupChecks/PhpOutdated.php',
    'OCA\\Settings\\SetupChecks\\PhpOutputBuffering' => $baseDir . '/../lib/SetupChecks/PhpOutputBuffering.php',
    'OCA\\Settings\\SetupChecks\\ReadOnlyConfig' => $baseDir . '/../lib/SetupChecks/ReadOnlyConfig.php',
    'OCA\\Settings\\SetupChecks\\SupportedDatabase' => $baseDir . '/../lib/SetupChecks/SupportedDatabase.php',
    'OCA\\Settings\\SetupChecks\\TransactionIsolation' => $baseDir . '/../lib/SetupChecks/TransactionIsolation.php',
    'OCA\\Settings\\UserMigration\\AccountMigrator' => $baseDir . '/../lib/UserMigration/AccountMigrator.php',
    'OCA\\Settings\\UserMigration\\AccountMigratorException' => $baseDir . '/../lib/UserMigration/AccountMigratorException.php',
    'OCA\\Settings\\WellKnown\\ChangePasswordHandler' => $baseDir . '/../lib/WellKnown/ChangePasswordHandler.php',
    'OCA\\Settings\\WellKnown\\SecurityTxtHandler' => $baseDir . '/../lib/WellKnown/SecurityTxtHandler.php',
);
