<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OCA\Settings\SetupChecks;

use OCP\Http\Client\IClientService;
use OCP\IConfig;
use OCP\IL10N;
use OCP\IURLGenerator;
use OCP\SetupCheck\ISetupCheck;
use OCP\SetupCheck\SetupResult;
use Psr\Log\LoggerInterface;

/**
 * Check whether the WOFF2 URLs works
 */
class Woff2Loading implements ISetupCheck {
	use CheckServerResponseTrait;

	public function __construct(
		protected IL10N $l10n,
		protected IConfig $config,
		protected IURLGenerator $urlGenerator,
		protected IClientService $clientService,
		protected LoggerInterface $logger,
	) {
	}

	public function getCategory(): string {
		return 'network';
	}

	public function getName(): string {
		return $this->l10n->t('WOFF2 file loading');
	}

	public function run(): SetupResult {
		$url = $this->urlGenerator->linkTo('', 'core/fonts/NotoSans-Regular-latin.woff2');
		$noResponse = true;
		$responses = $this->runHEAD($url);
		foreach ($responses as $response) {
			$noResponse = false;
			if ($response->getStatusCode() === 200) {
				return SetupResult::success();
			}
		}

		if ($noResponse) {
			return SetupResult::info(
				$this->l10n->t('Could not check for WOFF2 loading support. Please check manually if your webserver serves `.woff2` files.') . "\n" . $this->serverConfigHelp(),
				$this->urlGenerator->linkToDocs('admin-nginx'),
			);
		}
		return SetupResult::warning(
			$this->l10n->t('Your web server is not properly set up to deliver .woff2 files. This is typically an issue with the Nginx configuration. For Nextcloud 15 it needs an adjustement to also deliver .woff2 files. Compare your Nginx configuration to the recommended configuration in our documentation.'),
			$this->urlGenerator->linkToDocs('admin-nginx'),
		);
		
	}
}
