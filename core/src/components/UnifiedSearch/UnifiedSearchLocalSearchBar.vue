<!--
 - SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<NcDialog ref="modal"
		:open="open"
		name="Search"
		@update:open="onUpdateOpen">
		<NcInputField ref="searchInput"
			class="local-unified-search__input animated-width"
			:aria-label="t('core', 'Search in current app')"
			:placeholder="t('core', 'Search in current app')"
			:trailing-button-label="t('core', 'Clear search')"
			:value="query"
			@update:value="$emit('update:query', $event)">
			<template #trailing-button-icon>
				<NcIconSvgWrapper :path="mdiClose" />
			</template>
		</NcInputField>
		<NcButton ref="searchGlobalButton"
			class="local-unified-search__global-search"
			:aria-label="t('core', 'Search everywhere')"
			:title="t('core', 'Search everywhere')"
			type="tertiary-no-background"
			@click="$emit('global-search')">
			<template v-if="!isMobile" #default>
				{{ t('core', 'Search everywhere') }}
			</template>
			<template #icon>
				<NcIconSvgWrapper :path="mdiCloudSearch" />
			</template>
		</NcButton>
	</NcDialog>
</template>

<script lang="ts" setup>
import type { ComponentPublicInstance } from 'vue'
import { mdiCloudSearch, mdiClose } from '@mdi/js'
import { translate as t } from '@nextcloud/l10n'
import { useIsMobile } from '@nextcloud/vue/dist/Composables/useIsMobile.js'
import { computed, ref, watchEffect } from 'vue'

import NcButton from '@nextcloud/vue/dist/Components/NcButton.js'
import NcIconSvgWrapper from '@nextcloud/vue/dist/Components/NcIconSvgWrapper.js'
import NcInputField from '@nextcloud/vue/dist/Components/NcInputField.js'
import NcDialog from '@nextcloud/vue/dist/Components/NcDialog.js'
import { useElementSize } from '@vueuse/core'

const props = defineProps<{
	query: string,
	open: boolean
}>()

const emit = defineEmits<{
	(e: 'update:open', open: boolean): void
	(e: 'update:query', query: string): void
	(e: 'global-search'): void
}>()

// Hacky type until the library provides real Types
type FocusableComponent = ComponentPublicInstance<object, object, object, Record<string, never>, { focus: () => void }>
/** The input field component */
const searchInput = ref<FocusableComponent>()
/** When the search bar is opened we focus the input */
watchEffect(() => {
	if (props.open && searchInput.value) {
		searchInput.value.focus()
	}
})

/** Current window size is below the "mobile" breakpoint (currently 1024px) */
const isMobile = useIsMobile()

const searchGlobalButton = ref<ComponentPublicInstance>()
/** Width of the search global button, used to resize the input field */
const { width: searchGlobalButtonWidth } = useElementSize(searchGlobalButton)

/**
 * Clear the search query and close the search bar
 */

/**
 *
 * @param open
 */
function onUpdateOpen() {
	if (props.open) {
		emit('update:open', false)
		emit('update:query', '')
	}
}
</script>

<style scoped lang="scss">
.local-unified-search__global-search {
	display: block;
	margin: 8px auto;
}
</style>
