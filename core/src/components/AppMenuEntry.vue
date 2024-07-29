<!--
 - SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 - SPDX-License-Identifier: AGPL-3.0-or-later
 -->

<template>
	<li class="app-menu-entry"
		:class="{
			'app-menu-entry--active': app.active,
		}">
		<a class="app-menu-entry__link"
			:href="app.href"
			:title="app.name"
			:aria-current="app.active ? 'page' : false"
			:target="app.target ? '_blank' : undefined"
			:rel="app.target ? 'noopener noreferrer' : undefined">
			<AppMenuIcon class="app-menu-entry__icon" :app="app" />
			<span class="app-menu-entry__label">
				{{ app.name }}
			</span>
		</a>
	</li>
</template>

<script setup lang="ts">
import type { INavigationEntry } from '../types/navigation'
import AppMenuIcon from './AppMenuIcon.vue'

defineProps<{
	app: INavigationEntry
}>()
</script>

<style scoped lang="scss">
$header-icon-size: 20px;

.app-menu-entry {
	position: relative;
	display: flex;
	align-items: center;
	height: auto;
	border-radius: 50px;
	transition: all 0.1s ease-in-out;

	&__link {
		position: relative;
		display: flex;
		align-items: center;
		width: calc(100% - 4px);
		height: calc(100% - 4px);
		margin: 2px;
		// this is shown directly on the background
		color: var(--color-main-text);
		position: relative;
		padding: 2.5px 10px;
		padding-right: 20px;
	}

	&__label {
		font-size: 12px;
		// this is shown directly on the background
		color: var(--color-main-text);
		text-align: center;
		display: block;
		min-width: 100%;
		transition: all 0.1s ease-in-out;
		width: 100%;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	&--active {
		// When hover or focus, show the label and make it bolder than the other entries
		background-color: var(--color-primary-element-hover);
			border-radius: 50px;
			font-weight: 700;
			&__link {
				display: flex;
				color: var(--color-primary-element-text);
				img {
					filter: var(--background-invert-if-dark);
				}
			}

	}

	&:hover,
	&:focus-within {
		background-color: var(--color-primary-element-hover);
	}
}
</style>
