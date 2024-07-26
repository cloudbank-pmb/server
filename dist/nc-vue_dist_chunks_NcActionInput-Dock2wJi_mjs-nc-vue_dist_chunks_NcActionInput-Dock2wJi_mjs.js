"use strict";
(self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || []).push([["nc-vue_dist_chunks_NcActionInput-Dock2wJi_mjs"],{

/***/ "./node_modules/css-loader/dist/cjs.js!../nc-vue/dist/assets/NcActionInput-C_3Csa6A.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nc-vue/dist/assets/NcActionInput-C_3Csa6A.css ***!
  \**********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _server_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../server/node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _server_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../server/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _server_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _server_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_server_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon[data-v-6ba44c48] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * color-text-lighter		normal state
 * color-text-lighter		active state
 * color-text-maxcontrast 	disabled state
 */
/* Default global values */
button[data-v-6ba44c48]:not(.button-vue),
input[data-v-6ba44c48]:not([type=range]),
textarea[data-v-6ba44c48] {
  margin: 0;
  padding: 7px 6px;
  cursor: text;
  color: var(--color-text-lighter);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--color-main-background);
  font-size: 13px;
  /* Primary action button, use sparingly */
}
button[data-v-6ba44c48]:not(.button-vue):not(:disabled):not(.primary):hover, button[data-v-6ba44c48]:not(.button-vue):not(:disabled):not(.primary):focus, button:not(.button-vue):not(:disabled):not(.primary).active[data-v-6ba44c48],
input[data-v-6ba44c48]:not([type=range]):not(:disabled):not(.primary):hover,
input[data-v-6ba44c48]:not([type=range]):not(:disabled):not(.primary):focus,
input:not([type=range]):not(:disabled):not(.primary).active[data-v-6ba44c48],
textarea[data-v-6ba44c48]:not(:disabled):not(.primary):hover,
textarea[data-v-6ba44c48]:not(:disabled):not(.primary):focus,
textarea:not(:disabled):not(.primary).active[data-v-6ba44c48] {
  /* active class used for multiselect */
  border-color: var(--color-primary-element);
  outline: none;
}
button[data-v-6ba44c48]:not(.button-vue):not(:disabled):not(.primary):active,
input[data-v-6ba44c48]:not([type=range]):not(:disabled):not(.primary):active,
textarea[data-v-6ba44c48]:not(:disabled):not(.primary):active {
  color: var(--color-text-light);
  outline: none;
  background-color: var(--color-main-background);
}
button[data-v-6ba44c48]:not(.button-vue):disabled,
input[data-v-6ba44c48]:not([type=range]):disabled,
textarea[data-v-6ba44c48]:disabled {
  cursor: default;
  opacity: 0.5;
  color: var(--color-text-maxcontrast);
  background-color: var(--color-background-dark);
}
button[data-v-6ba44c48]:not(.button-vue):required,
input[data-v-6ba44c48]:not([type=range]):required,
textarea[data-v-6ba44c48]:required {
  box-shadow: none;
}
button[data-v-6ba44c48]:not(.button-vue):invalid,
input[data-v-6ba44c48]:not([type=range]):invalid,
textarea[data-v-6ba44c48]:invalid {
  border-color: var(--color-error);
  box-shadow: none !important;
}
button:not(.button-vue).primary[data-v-6ba44c48],
input:not([type=range]).primary[data-v-6ba44c48],
textarea.primary[data-v-6ba44c48] {
  cursor: pointer;
  color: var(--color-primary-element-text);
  border-color: var(--color-primary-element);
  background-color: var(--color-primary-element);
}
button:not(.button-vue).primary[data-v-6ba44c48]:not(:disabled):hover, button:not(.button-vue).primary[data-v-6ba44c48]:not(:disabled):focus, button:not(.button-vue).primary[data-v-6ba44c48]:not(:disabled):active,
input:not([type=range]).primary[data-v-6ba44c48]:not(:disabled):hover,
input:not([type=range]).primary[data-v-6ba44c48]:not(:disabled):focus,
input:not([type=range]).primary[data-v-6ba44c48]:not(:disabled):active,
textarea.primary[data-v-6ba44c48]:not(:disabled):hover,
textarea.primary[data-v-6ba44c48]:not(:disabled):focus,
textarea.primary[data-v-6ba44c48]:not(:disabled):active {
  border-color: var(--color-primary-element-light);
  background-color: var(--color-primary-element-light);
}
button:not(.button-vue).primary[data-v-6ba44c48]:not(:disabled):active,
input:not([type=range]).primary[data-v-6ba44c48]:not(:disabled):active,
textarea.primary[data-v-6ba44c48]:not(:disabled):active {
  color: var(--color-primary-element-text-dark);
}
button:not(.button-vue).primary[data-v-6ba44c48]:disabled,
input:not([type=range]).primary[data-v-6ba44c48]:disabled,
textarea.primary[data-v-6ba44c48]:disabled {
  cursor: default;
  color: var(--color-primary-element-text-dark);
  background-color: var(--color-primary-element);
}
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
li.action.active[data-v-6ba44c48] {
  background-color: var(--color-background-hover);
  border-radius: 6px;
  padding: 0;
}
.action--disabled[data-v-6ba44c48] {
  pointer-events: none;
  opacity: 0.5;
}
.action--disabled[data-v-6ba44c48]:hover, .action--disabled[data-v-6ba44c48]:focus {
  cursor: default;
  opacity: 0.5;
}
.action--disabled *[data-v-6ba44c48] {
  opacity: 1 !important;
}
.action-input[data-v-6ba44c48] {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  cursor: pointer;
  white-space: nowrap;
  color: var(--color-main-text);
  border: 0;
  border-radius: 0;
  background-color: transparent;
  box-shadow: none;
  font-weight: normal;
}
.action-input__icon-wrapper[data-v-6ba44c48] {
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}
.action-input__icon-wrapper[data-v-6ba44c48] .material-design-icon {
  width: var(--default-clickable-area);
  height: var(--default-clickable-area);
  opacity: 1;
}
.action-input__icon-wrapper[data-v-6ba44c48] .material-design-icon .material-design-icon__svg {
  vertical-align: middle;
}
.action-input > span[data-v-6ba44c48] {
  cursor: pointer;
  white-space: nowrap;
}
.action-input__icon[data-v-6ba44c48] {
  min-width: 0; /* Overwrite icons*/
  min-height: 0;
  padding: calc(var(--default-clickable-area) / 2) 0 calc(var(--default-clickable-area) / 2) var(--default-clickable-area);
  background-position: calc((var(--default-clickable-area) - 16px) / 2) center;
  background-size: 16px;
}
.action-input__form[data-v-6ba44c48] {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  margin: 4px 0;
  padding-right: calc((var(--default-clickable-area) - 16px) / 2);
}
.action-input__container[data-v-6ba44c48] {
  width: 100%;
}
.action-input__input-container[data-v-6ba44c48] {
  display: flex;
}
.action-input__input-container .colorpicker__trigger[data-v-6ba44c48], .action-input__input-container .colorpicker__preview[data-v-6ba44c48] {
  width: 100%;
}
.action-input__input-container .colorpicker__preview[data-v-6ba44c48] {
  width: 100%;
  height: 36px;
  border-radius: var(--border-radius-large);
  border: 2px solid var(--color-border-maxcontrast);
  box-shadow: none !important;
}
.action-input__text-label[data-v-6ba44c48] {
  padding: 4px 0;
  display: block;
}
.action-input__text-label--hidden[data-v-6ba44c48] {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
.action-input__datetimepicker[data-v-6ba44c48] {
  width: 100%;
}
.action-input__datetimepicker[data-v-6ba44c48] .mx-input {
  margin: 0;
}
.action-input__multi[data-v-6ba44c48] {
  width: 100%;
}
li:last-child > .action-input[data-v-6ba44c48] {
  padding-bottom: calc((var(--default-clickable-area) - 16px) / 2 - 4px);
}
li:first-child > .action-input[data-v-6ba44c48]:not(.action-input--visible-label) {
  padding-top: calc((var(--default-clickable-area) - 16px) / 2 - 4px);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!../nc-vue/dist/assets/NcDateTimePicker-Aq9TnHYj.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nc-vue/dist/assets/NcDateTimePicker-Aq9TnHYj.css ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _server_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../server/node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _server_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../server/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _server_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _server_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../server/node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _server_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _server_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_server_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _server_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _server_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _server_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _server_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
/**
* SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
* SPDX-License-Identifier: AGPL-3.0-or-later
*/
.mx-icon-left:before,
.mx-icon-right:before,
.mx-icon-double-left:before,
.mx-icon-double-right:before,
.mx-icon-double-left:after,
.mx-icon-double-right:after {
  content: "";
  position: relative;
  top: -1px;
  display: inline-block;
  width: 10px;
  height: 10px;
  vertical-align: middle;
  border-style: solid;
  border-color: currentColor;
  border-width: 2px 0 0 2px;
  border-radius: 1px;
  box-sizing: border-box;
  transform-origin: center;
  transform: rotate(-45deg) scale(0.7);
}
.mx-icon-double-left:after {
  left: -4px;
}
.mx-icon-double-right:before {
  left: 4px;
}
.mx-icon-right:before,
.mx-icon-double-right:before,
.mx-icon-double-right:after {
  transform: rotate(135deg) scale(0.7);
}
.mx-btn {
  box-sizing: border-box;
  line-height: 1;
  font-size: 14px;
  font-weight: 500;
  padding: 7px 15px;
  margin: 0;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: #73879c;
  white-space: nowrap;
}
.mx-btn:hover {
  border-color: #1284e7;
  color: #1284e7;
}
.mx-btn:disabled, .mx-btn.disabled {
  color: #ccc;
  cursor: not-allowed;
}
.mx-btn-text {
  border: 0;
  padding: 0 4px;
  text-align: left;
  line-height: inherit;
}
.mx-scrollbar {
  height: 100%;
}
.mx-scrollbar:hover .mx-scrollbar-track {
  opacity: 1;
}
.mx-scrollbar-wrap {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.mx-scrollbar-track {
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  width: 6px;
  z-index: 1;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.24s ease-out;
}
.mx-scrollbar-track .mx-scrollbar-thumb {
  position: absolute;
  width: 100%;
  height: 0;
  cursor: pointer;
  border-radius: inherit;
  background-color: rgba(144, 147, 153, 0.3);
  transition: background-color 0.3s;
}
.mx-zoom-in-down-enter-active,
.mx-zoom-in-down-leave-active {
  opacity: 1;
  transform: scaleY(1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center top;
}
.mx-zoom-in-down-enter,
.mx-zoom-in-down-enter-from,
.mx-zoom-in-down-leave-to {
  opacity: 0;
  transform: scaleY(0);
}
.mx-datepicker {
  position: relative;
  display: inline-block;
  width: 210px;
}
.mx-datepicker svg {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.mx-datepicker-range {
  width: 320px;
}
.mx-datepicker-inline {
  width: auto;
}
.mx-input-wrapper {
  position: relative;
}
.mx-input {
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  height: 34px;
  padding: 6px 30px;
  padding-left: 10px;
  font-size: 14px;
  line-height: 1.4;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.mx-input:hover, .mx-input:focus {
  border-color: #409aff;
}
.mx-input:disabled, .mx-input.disabled {
  color: #ccc;
  background-color: #f3f3f3;
  border-color: #ccc;
  cursor: not-allowed;
}
.mx-input:focus {
  outline: none;
}
.mx-input::-ms-clear {
  display: none;
}
.mx-icon-calendar,
.mx-icon-clear {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  font-size: 16px;
  line-height: 1;
  color: rgba(0, 0, 0, 0.5);
  vertical-align: middle;
}
.mx-icon-clear {
  cursor: pointer;
}
.mx-icon-clear:hover {
  color: rgba(0, 0, 0, 0.8);
}
.mx-datepicker-main {
  font: 14px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", sans-serif;
  color: #73879c;
  background-color: #fff;
  border: 1px solid #e8e8e8;
}
.mx-datepicker-popup {
  position: absolute;
  margin-top: 1px;
  margin-bottom: 1px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  z-index: 2001;
}
.mx-datepicker-sidebar {
  float: left;
  box-sizing: border-box;
  width: 100px;
  padding: 6px;
  overflow: auto;
}
.mx-datepicker-sidebar + .mx-datepicker-content {
  margin-left: 100px;
  border-left: 1px solid #e8e8e8;
}
.mx-datepicker-body {
  position: relative;
  user-select: none;
}
.mx-btn-shortcut {
  display: block;
  padding: 0 6px;
  line-height: 24px;
}
.mx-range-wrapper {
  display: flex;
}
@media (max-width: 750px) {
  .mx-range-wrapper {
    flex-direction: column;
  }
}
.mx-datepicker-header {
  padding: 6px 8px;
  border-bottom: 1px solid #e8e8e8;
}
.mx-datepicker-footer {
  padding: 6px 8px;
  text-align: right;
  border-top: 1px solid #e8e8e8;
}
.mx-calendar {
  box-sizing: border-box;
  width: 248px;
  padding: 6px 12px;
}
.mx-calendar + .mx-calendar {
  border-left: 1px solid #e8e8e8;
}
.mx-calendar-header, .mx-time-header {
  box-sizing: border-box;
  height: 34px;
  line-height: 34px;
  text-align: center;
  overflow: hidden;
}
.mx-btn-icon-left,
.mx-btn-icon-double-left {
  float: left;
}
.mx-btn-icon-right,
.mx-btn-icon-double-right {
  float: right;
}
.mx-calendar-header-label {
  font-size: 14px;
}
.mx-calendar-decade-separator {
  margin: 0 2px;
}
.mx-calendar-decade-separator:after {
  content: "~";
}
.mx-calendar-content {
  position: relative;
  height: 224px;
  box-sizing: border-box;
}
.mx-calendar-content .cell {
  cursor: pointer;
}
.mx-calendar-content .cell:hover {
  color: #73879c;
  background-color: #f3f9fe;
}
.mx-calendar-content .cell.active {
  color: #fff;
  background-color: #1284e7;
}
.mx-calendar-content .cell.in-range, .mx-calendar-content .cell.hover-in-range {
  color: #73879c;
  background-color: #dbedfb;
}
.mx-calendar-content .cell.disabled {
  cursor: not-allowed;
  color: #ccc;
  background-color: #f3f3f3;
}
.mx-calendar-week-mode .mx-date-row {
  cursor: pointer;
}
.mx-calendar-week-mode .mx-date-row:hover {
  background-color: #f3f9fe;
}
.mx-calendar-week-mode .mx-date-row.mx-active-week {
  background-color: #dbedfb;
}
.mx-calendar-week-mode .mx-date-row .cell:hover {
  color: inherit;
  background-color: transparent;
}
.mx-calendar-week-mode .mx-date-row .cell.active {
  color: inherit;
  background-color: transparent;
}
.mx-week-number {
  opacity: 0.5;
}
.mx-table {
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
}
.mx-table th {
  padding: 0;
  font-weight: 500;
  vertical-align: middle;
}
.mx-table td {
  padding: 0;
  vertical-align: middle;
}
.mx-table-date td,
.mx-table-date th {
  height: 32px;
  font-size: 12px;
}
.mx-table-date .today {
  color: #2a90e9;
}
.mx-table-date .cell.not-current-month {
  color: #ccc;
  background: none;
}
.mx-time {
  flex: 1;
  width: 224px;
  background: #fff;
}
.mx-time + .mx-time {
  border-left: 1px solid #e8e8e8;
}
.mx-calendar-time {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.mx-time-header {
  border-bottom: 1px solid #e8e8e8;
}
.mx-time-content {
  height: 224px;
  box-sizing: border-box;
  overflow: hidden;
}
.mx-time-columns {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.mx-time-column {
  flex: 1;
  position: relative;
  border-left: 1px solid #e8e8e8;
  text-align: center;
}
.mx-time-column:first-child {
  border-left: 0;
}
.mx-time-column .mx-time-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.mx-time-column .mx-time-list::after {
  content: "";
  display: block;
  height: 192px;
}
.mx-time-column .mx-time-item {
  cursor: pointer;
  font-size: 12px;
  height: 32px;
  line-height: 32px;
}
.mx-time-column .mx-time-item:hover {
  color: #73879c;
  background-color: #f3f9fe;
}
.mx-time-column .mx-time-item.active {
  color: #1284e7;
  background-color: transparent;
  font-weight: 700;
}
.mx-time-column .mx-time-item.disabled {
  cursor: not-allowed;
  color: #ccc;
  background-color: #f3f3f3;
}
.mx-time-option {
  cursor: pointer;
  padding: 8px 10px;
  font-size: 14px;
  line-height: 20px;
}
.mx-time-option:hover {
  color: #73879c;
  background-color: #f3f9fe;
}
.mx-time-option.active {
  color: #1284e7;
  background-color: transparent;
  font-weight: 700;
}
.mx-time-option.disabled {
  cursor: not-allowed;
  color: #ccc;
  background-color: #f3f3f3;
}
.mx-datepicker[data-v-197a635] {
  user-select: none;
  color: var(--color-main-text);
  /* INPUT CONTAINER */
}
.mx-datepicker[data-v-197a635] svg {
  fill: var(--color-main-text);
}
.mx-datepicker[data-v-197a635] .mx-input-wrapper .mx-input {
  width: 100%;
  border: 2px solid var(--color-border-maxcontrast);
  background-color: var(--color-main-background);
  background-clip: content-box;
}
.mx-datepicker[data-v-197a635] .mx-input-wrapper .mx-input:active:not(.disabled), .mx-datepicker[data-v-197a635] .mx-input-wrapper .mx-input:hover:not(.disabled), .mx-datepicker[data-v-197a635] .mx-input-wrapper .mx-input:focus:not(.disabled) {
  border-color: var(--color-primary-element);
}
.mx-datepicker[data-v-197a635] .mx-input-wrapper:disabled, .mx-datepicker[data-v-197a635] .mx-input-wrapper.disabled {
  cursor: not-allowed;
  opacity: 0.7;
}
.mx-datepicker[data-v-197a635] .mx-input-wrapper .mx-icon-calendar,
.mx-datepicker[data-v-197a635] .mx-input-wrapper .mx-icon-clear {
  color: var(--color-text-lighter);
}
.mx-datepicker-main {
  color: var(--color-main-text);
  border: 1px solid var(--color-border);
  background-color: var(--color-main-background);
  font-family: var(--font-face) !important;
  line-height: 1.5;
}
.mx-datepicker-main svg {
  fill: var(--color-main-text);
}
.mx-datepicker-main.mx-datepicker-popup {
  z-index: 2000;
  box-shadow: none;
}
.mx-datepicker-main.mx-datepicker-popup .mx-datepicker-sidebar + .mx-datepicker-content {
  border-left: 1px solid var(--color-border);
}
.mx-datepicker-main.show-week-number .mx-calendar {
  width: 296px;
}
.mx-datepicker-main .mx-datepicker-header {
  border-bottom: 1px solid var(--color-border);
}
.mx-datepicker-main .mx-datepicker-footer {
  border-top: 1px solid var(--color-border);
}
.mx-datepicker-main .mx-datepicker-btn-confirm {
  background-color: var(--color-primary-element);
  border-color: var(--color-primary-element);
  color: var(--color-primary-element-text) !important;
  opacity: 1 !important;
}
.mx-datepicker-main .mx-datepicker-btn-confirm:hover {
  background-color: var(--color-primary-element-light) !important;
  border-color: var(--color-primary-element-light) !important;
}
.mx-datepicker-main .mx-calendar {
  width: 264px;
  padding: 5px;
}
.mx-datepicker-main .mx-calendar.mx-calendar-week-mode {
  width: 296px;
}
.mx-datepicker-main .mx-time + .mx-time,
.mx-datepicker-main .mx-calendar + .mx-calendar {
  border-left: 1px solid var(--color-border);
}
.mx-datepicker-main .mx-range-wrapper {
  display: flex;
  overflow: hidden;
}
.mx-datepicker-main .mx-range-wrapper .mx-calendar-content .mx-table-date .cell.active {
  border-radius: var(--border-radius) 0 0 var(--border-radius);
}
.mx-datepicker-main .mx-range-wrapper .mx-calendar-content .mx-table-date .cell.in-range + .cell.active {
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
}
.mx-datepicker-main .mx-table {
  text-align: center;
}
.mx-datepicker-main .mx-table thead > tr > th {
  text-align: center;
  opacity: 0.5;
  color: var(--color-text-lighter);
}
.mx-datepicker-main .mx-table tr:focus,
.mx-datepicker-main .mx-table tr:hover,
.mx-datepicker-main .mx-table tr:active {
  background-color: transparent;
}
.mx-datepicker-main .mx-table .cell {
  transition: all 100ms ease-in-out;
  text-align: center;
  opacity: 0.7;
  border-radius: 50px;
}
.mx-datepicker-main .mx-table .cell > * {
  cursor: pointer;
}
.mx-datepicker-main .mx-table .cell.today {
  opacity: 1;
  color: var(--color-primary-element);
  font-weight: bold;
}
.mx-datepicker-main .mx-table .cell.today:hover, .mx-datepicker-main .mx-table .cell.today:focus {
  color: var(--color-primary-element-text);
}
.mx-datepicker-main .mx-table .cell.in-range, .mx-datepicker-main .mx-table .cell.disabled {
  border-radius: 0;
  font-weight: normal;
}
.mx-datepicker-main .mx-table .cell.in-range {
  opacity: 0.7;
}
.mx-datepicker-main .mx-table .cell.not-current-month {
  opacity: 0.5;
  color: var(--color-text-lighter);
}
.mx-datepicker-main .mx-table .cell.not-current-month:hover, .mx-datepicker-main .mx-table .cell.not-current-month:focus {
  opacity: 1;
}
.mx-datepicker-main .mx-table .cell:hover, .mx-datepicker-main .mx-table .cell:focus, .mx-datepicker-main .mx-table .cell.actived, .mx-datepicker-main .mx-table .cell.active, .mx-datepicker-main .mx-table .cell.in-range {
  opacity: 1;
  color: var(--color-primary-element-text);
  background-color: var(--color-primary-element);
  font-weight: bold;
}
.mx-datepicker-main .mx-table .cell.disabled {
  opacity: 0.5;
  color: var(--color-text-lighter);
  border-radius: 0;
  background-color: var(--color-background-darker);
}
.mx-datepicker-main .mx-table .mx-week-number {
  text-align: center;
  opacity: 0.7;
  border-radius: 50px;
}
.mx-datepicker-main .mx-table span.mx-week-number,
.mx-datepicker-main .mx-table li.mx-week-number,
.mx-datepicker-main .mx-table span.cell,
.mx-datepicker-main .mx-table li.cell {
  min-height: 32px;
}
.mx-datepicker-main .mx-table.mx-table-date thead, .mx-datepicker-main .mx-table.mx-table-date tbody, .mx-datepicker-main .mx-table.mx-table-year, .mx-datepicker-main .mx-table.mx-table-month {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.mx-datepicker-main .mx-table.mx-table-date thead tr, .mx-datepicker-main .mx-table.mx-table-date tbody tr, .mx-datepicker-main .mx-table.mx-table-year tr, .mx-datepicker-main .mx-table.mx-table-month tr {
  display: inline-flex;
  align-items: center;
  flex: 1 1 32px;
  justify-content: space-around;
  min-height: 32px;
}
.mx-datepicker-main .mx-table.mx-table-date thead th,
.mx-datepicker-main .mx-table.mx-table-date thead td, .mx-datepicker-main .mx-table.mx-table-date tbody th,
.mx-datepicker-main .mx-table.mx-table-date tbody td, .mx-datepicker-main .mx-table.mx-table-year th,
.mx-datepicker-main .mx-table.mx-table-year td, .mx-datepicker-main .mx-table.mx-table-month th,
.mx-datepicker-main .mx-table.mx-table-month td {
  display: flex;
  align-items: center;
  flex: 0 1 32%;
  justify-content: center;
  min-width: 32px;
  height: 95%;
  min-height: 32px;
  transition: background 100ms ease-in-out;
}
.mx-datepicker-main .mx-table.mx-table-year tr th,
.mx-datepicker-main .mx-table.mx-table-year tr td {
  flex-basis: 48%;
}
.mx-datepicker-main .mx-table.mx-table-date tr th,
.mx-datepicker-main .mx-table.mx-table-date tr td {
  flex-basis: 32px;
}
.mx-datepicker-main .mx-btn {
  min-width: 32px;
  height: 32px;
  margin: 0 2px !important;
  padding: 7px 10px;
  cursor: pointer;
  text-decoration: none;
  opacity: 0.5;
  color: var(--color-text-lighter);
  border-radius: 32px;
  line-height: 20px;
}
.mx-datepicker-main .mx-btn:hover, .mx-datepicker-main .mx-btn:focus {
  opacity: 1;
  color: var(--color-main-text);
  background-color: var(--color-background-darker);
}
.mx-datepicker-main .mx-calendar-header, .mx-datepicker-main .mx-time-header {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: var(--default-clickable-area);
  margin-bottom: 4px;
}
.mx-datepicker-main .mx-calendar-header button, .mx-datepicker-main .mx-time-header button {
  min-width: 32px;
  min-height: 32px;
  margin: 0;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  opacity: 0.7;
  color: var(--color-main-text);
  border-radius: 32px;
  line-height: 20px;
}
.mx-datepicker-main .mx-calendar-header button:hover, .mx-datepicker-main .mx-time-header button:hover, .mx-datepicker-main .mx-calendar-header button:focus, .mx-datepicker-main .mx-time-header button:focus {
  opacity: 1;
  color: var(--color-main-text);
  background-color: var(--color-background-darker);
}
.mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-left, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-left, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-left, .mx-datepicker-main .mx-time-header button.mx-btn-icon-left, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-right, .mx-datepicker-main .mx-time-header button.mx-btn-icon-right, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-right, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-right {
  align-items: center;
  justify-content: center;
  width: 32px;
  padding: 0;
}
.mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-left > i, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-left > i, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-left > i, .mx-datepicker-main .mx-time-header button.mx-btn-icon-left > i, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-right > i, .mx-datepicker-main .mx-time-header button.mx-btn-icon-right > i, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-right > i, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-right > i {
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: center;
  filter: var(--background-invert-if-dark);
  display: inline-block;
  width: 32px;
  height: 32px;
}
.mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-left > i::after, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-left > i::after, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-left > i::before, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-left > i::before, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-left > i::after, .mx-datepicker-main .mx-time-header button.mx-btn-icon-left > i::after, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-left > i::before, .mx-datepicker-main .mx-time-header button.mx-btn-icon-left > i::before, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-right > i::after, .mx-datepicker-main .mx-time-header button.mx-btn-icon-right > i::after, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-right > i::before, .mx-datepicker-main .mx-time-header button.mx-btn-icon-right > i::before, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-right > i::after, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-right > i::after, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-right > i::before, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-right > i::before {
  content: none;
}
.mx-datepicker-main .mx-calendar-header button.mx-btn-text, .mx-datepicker-main .mx-time-header button.mx-btn-text {
  line-height: initial;
}
.mx-datepicker-main .mx-calendar-header .mx-calendar-header-label, .mx-datepicker-main .mx-time-header .mx-calendar-header-label {
  display: flex;
}
.mx-datepicker-main .mx-calendar-header .mx-btn-icon-double-left > i, .mx-datepicker-main .mx-time-header .mx-btn-icon-double-left > i {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
.mx-datepicker-main .mx-calendar-header .mx-btn-icon-left > i, .mx-datepicker-main .mx-time-header .mx-btn-icon-left > i {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
.mx-datepicker-main .mx-calendar-header .mx-btn-icon-right > i, .mx-datepicker-main .mx-time-header .mx-btn-icon-right > i {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}
.mx-datepicker-main .mx-calendar-header .mx-btn-icon-double-right > i, .mx-datepicker-main .mx-time-header .mx-btn-icon-double-right > i {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
.mx-datepicker-main .mx-calendar-header button.mx-btn-icon-right, .mx-datepicker-main .mx-time-header button.mx-btn-icon-right {
  order: 2;
}
.mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-right, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-right {
  order: 3;
}
.mx-datepicker-main .mx-calendar-week-mode .mx-date-row .mx-week-number {
  font-weight: bold;
}
.mx-datepicker-main .mx-calendar-week-mode .mx-date-row:hover, .mx-datepicker-main .mx-calendar-week-mode .mx-date-row.mx-active-week {
  opacity: 1;
  border-radius: 50px;
  background-color: var(--color-background-dark);
}
.mx-datepicker-main .mx-calendar-week-mode .mx-date-row:hover td, .mx-datepicker-main .mx-calendar-week-mode .mx-date-row.mx-active-week td {
  background-color: transparent;
}
.mx-datepicker-main .mx-calendar-week-mode .mx-date-row:hover td, .mx-datepicker-main .mx-calendar-week-mode .mx-date-row:hover td:hover, .mx-datepicker-main .mx-calendar-week-mode .mx-date-row:hover td:focus, .mx-datepicker-main .mx-calendar-week-mode .mx-date-row.mx-active-week td, .mx-datepicker-main .mx-calendar-week-mode .mx-date-row.mx-active-week td:hover, .mx-datepicker-main .mx-calendar-week-mode .mx-date-row.mx-active-week td:focus {
  color: inherit;
}
.mx-datepicker-main .mx-calendar-week-mode .mx-date-row.mx-active-week {
  color: var(--color-primary-element-text);
  background-color: var(--color-primary-element);
}
.mx-datepicker-main .mx-calendar-week-mode .mx-date-row.mx-active-week td {
  opacity: 0.7;
  font-weight: normal;
}
.mx-datepicker-main .mx-time {
  background-color: var(--color-main-background);
}
.mx-datepicker-main .mx-time .mx-time-header {
  justify-content: center;
  border-bottom: 1px solid var(--color-border);
}
.mx-datepicker-main .mx-time .mx-time-column {
  border-left: 1px solid var(--color-border);
}
.mx-datepicker-main .mx-time .mx-time-option.active, .mx-datepicker-main .mx-time .mx-time-option:hover,
.mx-datepicker-main .mx-time .mx-time-item.active,
.mx-datepicker-main .mx-time .mx-time-item:hover {
  color: var(--color-primary-element-text);
  background-color: var(--color-primary-element);
}
.mx-datepicker-main .mx-time .mx-time-option.disabled,
.mx-datepicker-main .mx-time .mx-time-item.disabled {
  cursor: not-allowed;
  opacity: 0.5;
  color: var(--color-main-text);
  background-color: var(--color-main-background);
}/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon[data-v-4727c294] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.mx-datepicker[data-v-4727c294] .mx-input-wrapper .mx-input {
  background-clip: border-box;
}
.datetime-picker-inline-icon[data-v-4727c294] {
  opacity: 0.3;
  border: none;
  background-color: transparent;
  border-radius: 0;
  padding: 0 !important;
  margin: 0;
}
.datetime-picker-inline-icon--highlighted[data-v-4727c294] {
  opacity: 0.7;
}
.datetime-picker-inline-icon[data-v-4727c294]:focus, .datetime-picker-inline-icon[data-v-4727c294]:hover {
  opacity: 1;
}/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.v-popper--theme-dropdown.v-popper__popper.timezone-select__popper .v-popper__wrapper {
  border-radius: var(--border-radius-large);
}
.v-popper--theme-dropdown.v-popper__popper.timezone-select__popper .v-popper__wrapper .v-popper__inner {
  padding: 4px;
  border-radius: var(--border-radius-large);
}
.v-popper--theme-dropdown.v-popper__popper.timezone-select__popper .v-popper__wrapper .v-popper__inner .timezone-popover-wrapper__label {
  padding: 4px 0;
  padding-left: 14px;
}
.v-popper--theme-dropdown.v-popper__popper.timezone-select__popper .v-popper__wrapper .v-popper__inner .timezone-popover-wrapper__timezone-select.v-select .vs__dropdown-toggle {
  border-radius: calc(var(--border-radius-large) - 4px);
}
.v-popper--theme-dropdown.v-popper__popper.timezone-select__popper .v-popper__wrapper .v-popper__inner .timezone-popover-wrapper__timezone-select.v-select.vs--open .vs__dropdown-toggle {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.v-popper--theme-dropdown.v-popper__popper.timezone-select__popper .v-popper__wrapper .v-popper__inner .timezone-popover-wrapper__timezone-select.v-select.vs--open.select--drop-up .vs__dropdown-toggle {
  border-radius: 0 0 calc(var(--border-radius-large) - 4px) calc(var(--border-radius-large) - 4px);
}
.vs__dropdown-menu--floating {
  z-index: 100001 !important;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../nc-vue/dist/assets/NcActionInput-C_3Csa6A.css":
/*!********************************************************!*\
  !*** ../nc-vue/dist/assets/NcActionInput-C_3Csa6A.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../server/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../server/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../server/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../server/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../server/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../server/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _server_node_modules_css_loader_dist_cjs_js_NcActionInput_C_3Csa6A_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../server/node_modules/css-loader/dist/cjs.js!./NcActionInput-C_3Csa6A.css */ "./node_modules/css-loader/dist/cjs.js!../nc-vue/dist/assets/NcActionInput-C_3Csa6A.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_server_node_modules_css_loader_dist_cjs_js_NcActionInput_C_3Csa6A_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_server_node_modules_css_loader_dist_cjs_js_NcActionInput_C_3Csa6A_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _server_node_modules_css_loader_dist_cjs_js_NcActionInput_C_3Csa6A_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _server_node_modules_css_loader_dist_cjs_js_NcActionInput_C_3Csa6A_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../nc-vue/dist/assets/NcDateTimePicker-Aq9TnHYj.css":
/*!***********************************************************!*\
  !*** ../nc-vue/dist/assets/NcDateTimePicker-Aq9TnHYj.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../server/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../server/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../server/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../server/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../server/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../server/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _server_node_modules_css_loader_dist_cjs_js_NcDateTimePicker_Aq9TnHYj_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../server/node_modules/css-loader/dist/cjs.js!./NcDateTimePicker-Aq9TnHYj.css */ "./node_modules/css-loader/dist/cjs.js!../nc-vue/dist/assets/NcDateTimePicker-Aq9TnHYj.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_server_node_modules_css_loader_dist_cjs_js_NcDateTimePicker_Aq9TnHYj_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_server_node_modules_css_loader_dist_cjs_js_NcDateTimePicker_Aq9TnHYj_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _server_node_modules_css_loader_dist_cjs_js_NcDateTimePicker_Aq9TnHYj_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _server_node_modules_css_loader_dist_cjs_js_NcDateTimePicker_Aq9TnHYj_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "../nc-vue/dist/Components/NcDateTimePicker.mjs":
/*!******************************************************!*\
  !*** ../nc-vue/dist/Components/NcDateTimePicker.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NcDateTimePicker)
/* harmony export */ });
/* harmony import */ var _assets_NcDateTimePicker_Aq9TnHYj_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcDateTimePicker-Aq9TnHYj.css */ "../nc-vue/dist/assets/NcDateTimePicker-Aq9TnHYj.css");
/* harmony import */ var _chunks_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/_l10n-RVLriO4S.mjs */ "../nc-vue/dist/chunks/_l10n-RVLriO4S.mjs");
/* harmony import */ var _chunks_GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/GenRandomId-CMooMQt0.mjs */ "../nc-vue/dist/chunks/GenRandomId-CMooMQt0.mjs");
/* harmony import */ var _chunks_NcTimezonePicker_DbWP6xoM_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chunks/NcTimezonePicker-DbWP6xoM.mjs */ "../nc-vue/dist/chunks/NcTimezonePicker-DbWP6xoM.mjs");
/* harmony import */ var _chunks_NcPopover_VxUr4c6P_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chunks/NcPopover-VxUr4c6P.mjs */ "../nc-vue/dist/chunks/NcPopover-VxUr4c6P.mjs");
/* harmony import */ var _chunks_plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chunks/_plugin-vue2_normalizer-D637Qkok.mjs */ "../nc-vue/dist/chunks/_plugin-vue2_normalizer-D637Qkok.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/l10n */ "../nc-vue/node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue2-datepicker */ "../nc-vue/node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var _chunks_ScopeComponent_C0xOBUg_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../chunks/ScopeComponent-C0xOBUg-.mjs */ "../nc-vue/dist/chunks/ScopeComponent-C0xOBUg-.mjs");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");









(0,_chunks_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_1__.r)(_chunks_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_1__.H);
const _sfc_main$2 = {
  name: "CalendarBlankIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$2 = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon calendar-blank-icon", attrs: { "aria-hidden": _vm.title ? null : true, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$2 = [];
var __component__$2 = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_5__.n)(
  _sfc_main$2,
  _sfc_render$2,
  _sfc_staticRenderFns$2,
  false,
  null,
  null,
  null,
  null
);
const CalendarBlank = __component__$2.exports;
const _sfc_main$1 = {
  name: "WebIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$1 = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon web-icon", attrs: { "aria-hidden": _vm.title ? null : true, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_5__.n)(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  null,
  null,
  null
);
const Web = __component__$1.exports;
const formatMap = {
  date: "YYYY-MM-DD",
  datetime: "YYYY-MM-DD H:mm:ss",
  year: "YYYY",
  month: "YYYY-MM",
  time: "H:mm:ss",
  week: "w"
};
const _sfc_main = {
  name: "NcDateTimePicker",
  components: {
    CalendarBlank,
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_7__["default"],
    NcPopover: _chunks_NcPopover_VxUr4c6P_mjs__WEBPACK_IMPORTED_MODULE_4__.N,
    NcTimezonePicker: _chunks_NcTimezonePicker_DbWP6xoM_mjs__WEBPACK_IMPORTED_MODULE_3__.N,
    Web
  },
  inheritAttrs: false,
  props: {
    clearable: {
      type: Boolean,
      default: false
    },
    minuteStep: {
      type: Number,
      default: 10
    },
    type: {
      type: String,
      default: "date"
    },
    format: {
      type: String,
      default: null
    },
    formatter: {
      type: Object,
      default: null
    },
    lang: {
      type: Object,
      default: null
    },
    /**
     * The value to initialize, but also two-way bind the selected date. The date is – like the `Date` object in
     * JavaScript – tied to UTC. The selected time zone does not have an influence of the selected time and date
     * value. You have to translate the time yourself when you want to factor in time zones.
     */
    // eslint-disable-next-line
    value: {
      default: () => /* @__PURE__ */ new Date()
    },
    /**
     * The preselected IANA time zone ID for the time zone picker, only relevant in combination with `:show-timezone-select="true"`. Example: `Europe/Berlin`. The prop supports two-way binding through the .sync modifier.
     */
    timezoneId: {
      type: String,
      default: "UTC"
    },
    showTimezoneSelect: {
      type: Boolean,
      default: false
    },
    highlightTimezone: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    showWeekNumber: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    }
  },
  emits: [
    "update:value",
    "update:timezone-id"
  ],
  setup() {
    return {
      timezoneDialogHeaderId: "timezone-dialog-header-".concat((0,_chunks_GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_2__.G)())
    };
  },
  data() {
    return {
      showTimezonePopover: false,
      tzVal: this.timezoneId
    };
  },
  computed: {
    /**
     * Datepicker language
     * https://github.com/mengxiong10/vue2-datepicker/blob/master/locale.md
     *
     * @return {object}
     */
    defaultLang() {
      return {
        formatLocale: {
          months: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_6__.getMonthNames)(),
          monthsShort: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_6__.getMonthNamesShort)(),
          weekdays: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_6__.getDayNames)(),
          weekdaysShort: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_6__.getDayNamesShort)(),
          weekdaysMin: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_6__.getDayNamesMin)(),
          // 0 = sunday, 1 = monday
          firstDayOfWeek: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_6__.getFirstDay)()
        },
        monthFormat: "MMM"
      };
    },
    /**
     * Translated placeholder
     *
     * @return {string}
     */
    defaultPlaceholder() {
      if (this.type === "time") {
        return (0,_chunks_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("Pick a time");
      }
      if (this.type === "month") {
        return (0,_chunks_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("Pick a month");
      }
      if (this.type === "year") {
        return (0,_chunks_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("Pick a year");
      }
      if (this.type === "week") {
        return (0,_chunks_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("Pick a week");
      }
      if (this.type === "date") {
        return (0,_chunks_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("Pick a date");
      }
      return (0,_chunks_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("Pick a date and a time");
    },
    /**
     * If format is not provided, try to match the type
     * or fallback to 'date'
     *
     * @return {string}
     */
    formatTypeMap() {
      var _a;
      return (_a = formatMap[this.type]) != null ? _a : formatMap.date;
    },
    /**
     * The formatter used for the vue-datepicker to fix nextcloud-libraries/nextcloud-vue#5044
     */
    internalFormatter() {
      var _a;
      const getWeek = (date) => {
        const firstThursday = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        firstThursday.setUTCDate(firstThursday.getUTCDate() + 4 - (firstThursday.getUTCDay() || 7));
        const yearStart = new Date(Date.UTC(firstThursday.getUTCFullYear(), 0, 1));
        return Math.ceil(((firstThursday - yearStart) / 864e5 + 1) / 7);
      };
      return {
        getWeek,
        // allow to override it by users using the `formatter` prop
        ...(_a = this.formatter) != null ? _a : {}
      };
    }
  },
  methods: {
    t: _chunks_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_1__.a,
    handleSelectYear(year) {
      const value = this.$refs.datepicker.currentValue;
      if (value) {
        try {
          const date = new Date(new Date(value).setFullYear(year));
          this.$refs.datepicker.selectDate(date);
        } catch (error) {
          console.error("Invalid value", value, year);
        }
      }
    },
    handleSelectMonth(month) {
      const value = this.$refs.datepicker.currentValue;
      if (value) {
        try {
          const date = new Date(new Date(value).setMonth(month));
          this.$refs.datepicker.selectDate(date);
        } catch (error) {
          console.error("Invalid value", value, month);
        }
      }
    },
    /**
     * Toggles the visibility of the time zone popover
     */
    toggleTimezonePopover() {
      if (!this.showTimezoneSelect) {
        return;
      }
      this.showTimezonePopover = !this.showTimezonePopover;
    }
  }
};
var _sfc_render = function render3() {
  var _vm = this, _c = _vm._self._c;
  return _c("DatePicker", _vm._g(_vm._b({ ref: "datepicker", attrs: { "append-to-body": _vm.appendToBody, "clearable": _vm.clearable, "format": _vm.format ? _vm.format : _vm.formatTypeMap, "formatter": _vm.internalFormatter, "lang": _vm.lang ? _vm.lang : _vm.defaultLang, "minute-step": _vm.minuteStep, "placeholder": _vm.placeholder ? _vm.placeholder : _vm.defaultPlaceholder, "popup-class": { "show-week-number": _vm.showWeekNumber }, "show-week-number": _vm.showWeekNumber, "type": _vm.type, "value": _vm.value }, on: { "select-year": _vm.handleSelectYear, "select-month": _vm.handleSelectMonth, "update:value": function($event) {
    return _vm.$emit("update:value", _vm.value);
  } }, scopedSlots: _vm._u([{ key: "icon-calendar", fn: function() {
    return [_vm.showTimezoneSelect ? _c("NcPopover", { attrs: { "popup-role": "dialog", "shown": _vm.showTimezonePopover, "popover-base-class": "timezone-select__popper" }, on: { "update:shown": function($event) {
      _vm.showTimezonePopover = $event;
    } }, scopedSlots: _vm._u([{ key: "trigger", fn: function({ attrs }) {
      return [_c("button", _vm._b({ staticClass: "datetime-picker-inline-icon", class: { "datetime-picker-inline-icon--highlighted": _vm.highlightTimezone }, on: { "mousedown": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return (() => {
        }).apply(null, arguments);
      } } }, "button", attrs, false), [_c("Web", { attrs: { "size": 20 } })], 1)];
    } }], null, false, 270852355) }, [_c("div", { attrs: { "role": "dialog", "aria-labelledby": _vm.timezoneDialogHeaderId } }, [_c("div", { staticClass: "timezone-popover-wrapper__label" }, [_c("strong", { attrs: { "id": _vm.timezoneDialogHeaderId } }, [_vm._v(" " + _vm._s(_vm.t("Please select a time zone:")) + " ")])]), _c("NcTimezonePicker", { staticClass: "timezone-popover-wrapper__timezone-select", on: { "input": function($event) {
      return _vm.$emit("update:timezone-id", arguments[0]);
    } }, model: { value: _vm.tzVal, callback: function($$v) {
      _vm.tzVal = $$v;
    }, expression: "tzVal" } })], 1)]) : _c("CalendarBlank", { attrs: { "size": 20 } })];
  }, proxy: true }, _vm._l(_vm.$scopedSlots, function(_, slot) {
    return { key: slot, fn: function(scope) {
      return [_vm._t(slot, null, null, scope)];
    } };
  })], null, true) }, "DatePicker", _vm.$attrs, false), _vm.$listeners));
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_5__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "4727c294",
  null,
  null
);
const NcDateTimePicker = __component__.exports;
(0,_chunks_ScopeComponent_C0xOBUg_mjs__WEBPACK_IMPORTED_MODULE_8__.S)(NcDateTimePicker);



/***/ }),

/***/ "../nc-vue/dist/chunks/NcActionInput-Dock2wJi.mjs":
/*!********************************************************!*\
  !*** ../nc-vue/dist/chunks/NcActionInput-Dock2wJi.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcActionInput)
/* harmony export */ });
/* harmony import */ var _assets_NcActionInput_C_3Csa6A_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcActionInput-C_3Csa6A.css */ "../nc-vue/dist/assets/NcActionInput-C_3Csa6A.css");
/* harmony import */ var _Components_NcDateTimePicker_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/NcDateTimePicker.mjs */ "../nc-vue/dist/Components/NcDateTimePicker.mjs");
/* harmony import */ var _Components_NcDateTimePickerNative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/NcDateTimePickerNative.mjs */ "../nc-vue/dist/Components/NcDateTimePickerNative.mjs");
/* harmony import */ var _NcPasswordField_CyGHMIpL_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NcPasswordField-CyGHMIpL.mjs */ "../nc-vue/dist/chunks/NcPasswordField-CyGHMIpL.mjs");
/* harmony import */ var _NcSelect_EBEqP4yf_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NcSelect-EBEqP4yf.mjs */ "../nc-vue/dist/chunks/NcSelect-EBEqP4yf.mjs");
/* harmony import */ var _NcTextField_Cz_7BFoR_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NcTextField-Cz-7BFoR.mjs */ "../nc-vue/dist/chunks/NcTextField-Cz-7BFoR.mjs");
/* harmony import */ var _actionGlobal_DqVa7c7G_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actionGlobal-DqVa7c7G.mjs */ "../nc-vue/dist/chunks/actionGlobal-DqVa7c7G.mjs");
/* harmony import */ var _GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GenRandomId-CMooMQt0.mjs */ "../nc-vue/dist/chunks/GenRandomId-CMooMQt0.mjs");
/* harmony import */ var _l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_l10n-RVLriO4S.mjs */ "../nc-vue/dist/chunks/_l10n-RVLriO4S.mjs");
/* harmony import */ var _plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-D637Qkok.mjs */ "../nc-vue/dist/chunks/_plugin-vue2_normalizer-D637Qkok.mjs");










(0,_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_8__.r)(_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_8__.f);
const _sfc_main = {
  name: "NcActionInput",
  components: {
    NcDateTimePicker: _Components_NcDateTimePicker_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
    NcDateTimePickerNative: _Components_NcDateTimePickerNative_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
    NcPasswordField: _NcPasswordField_CyGHMIpL_mjs__WEBPACK_IMPORTED_MODULE_3__.N,
    NcSelect: _NcSelect_EBEqP4yf_mjs__WEBPACK_IMPORTED_MODULE_4__.N,
    NcTextField: _NcTextField_Cz_7BFoR_mjs__WEBPACK_IMPORTED_MODULE_5__.N
  },
  mixins: [_actionGlobal_DqVa7c7G_mjs__WEBPACK_IMPORTED_MODULE_6__.A],
  props: {
    /**
     * id attribute of the checkbox element
     */
    id: {
      type: String,
      default: () => "action-" + (0,_GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_7__.G)(),
      validator: (id) => id.trim() !== ""
    },
    /**
     * id attribute of the text input element
     */
    inputId: {
      type: String,
      default: () => "action-input-" + (0,_GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_7__.G)(),
      validator: (id) => id.trim() !== ""
    },
    /**
     * Icon to show with the action, can be either a CSS class or an URL
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * type attribute of the input field
     */
    type: {
      type: String,
      default: "text",
      validator(type) {
        return [
          "date",
          "datetime-local",
          "month",
          "multiselect",
          "number",
          "password",
          "search",
          "tel",
          "text",
          "time",
          "url",
          "week",
          "color",
          "email"
        ].indexOf(type) > -1;
      }
    },
    /**
     * id attribute for the native date time picker
     */
    idNativeDateTimePicker: {
      type: String,
      default: "date-time-picker_id"
    },
    /**
     * Flag to use a native date time picker
     */
    isNativePicker: {
      type: Boolean,
      default: false
    },
    /**
     * The visible input label for accessibility purposes.
     */
    label: {
      type: String,
      default: null
    },
    /**
     * If you want to show the label just above the
     * input field, pass in `true` to this prop.
     */
    labelOutside: {
      type: Boolean,
      default: true
    },
    /**
     * value attribute of the input field
     */
    value: {
      type: [String, Date, Number, Array],
      default: ""
    },
    /**
     * disabled state of the input field
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * aria-label attribute of the input field
     */
    ariaLabel: {
      type: String,
      default: ""
    },
    /**
     * @deprecated To be removed in @nextcloud/vue 9. Migration guide: remove ariaHidden prop from NcAction* components.
     * @todo Add a check in @nextcloud/vue 9 that this prop is not provided,
     * otherwise root element will inherit incorrect aria-hidden.
     */
    ariaHidden: {
      type: Boolean,
      default: null
    },
    /**
     * Attribute forwarded to the underlying NcPasswordField and NcTextField
     */
    showTrailingButton: {
      type: Boolean,
      default: true
    },
    /**
     * Trailing button label forwarded to the underlying NcTextField
     */
    trailingButtonLabel: {
      type: String,
      default: (0,_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_8__.a)("Submit")
    }
  },
  emits: [
    "input",
    "submit",
    "change",
    "update:value"
  ],
  computed: {
    isIconUrl() {
      try {
        return new URL(this.icon);
      } catch (error) {
        return false;
      }
    },
    isMultiselectType() {
      return this.type === "multiselect";
    },
    nativeDatePickerType() {
      switch (this.type) {
        case "date":
        case "month":
        case "time":
        case "week":
        case "datetime-local":
          return this.type;
      }
      return false;
    },
    datePickerType() {
      if (!this.isNativePicker) {
        switch (this.type) {
          case "date":
          case "month":
          case "time":
            return this.type;
          case "datetime-local":
            return "datetime";
        }
      }
      return false;
    },
    /**
     * determines if the action is focusable
     *
     * @return {boolean} is the action focusable ?
     */
    isFocusable() {
      return !this.disabled;
    }
  },
  methods: {
    // closing datepicker popup on mouseleave = unfocus
    onLeave() {
      if (this.$refs.datetimepicker && this.$refs.datetimepicker.$refs.datepicker) {
        this.$refs.datetimepicker.$refs.datepicker.closePopup();
      }
    },
    onInput(event) {
      this.$emit("input", event);
      this.$emit("update:value", event.target ? event.target.value : event);
    },
    onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      if (!this.disabled) {
        this.$emit("submit", event);
      } else {
        return false;
      }
    },
    onChange(event) {
      this.$emit("change", event);
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("li", { staticClass: "action", class: { "action--disabled": _vm.disabled } }, [_c("span", { staticClass: "action-input", class: {
    "action-input-picker--disabled": _vm.disabled,
    "action-input--visible-label": _vm.labelOutside && _vm.label
  }, on: { "mouseleave": _vm.onLeave } }, [_c("span", { staticClass: "action-input__icon-wrapper" }, [_vm._t("icon", function() {
    return [_c("span", { staticClass: "action-input__icon", class: [_vm.isIconUrl ? "action-input__icon--url" : _vm.icon], style: { backgroundImage: _vm.isIconUrl ? "url(".concat(_vm.icon, ")") : null }, attrs: { "aria-hidden": "true" } })];
  })], 2), _c("form", { ref: "form", staticClass: "action-input__form", attrs: { "disabled": _vm.disabled }, on: { "submit": function($event) {
    $event.preventDefault();
    return _vm.onSubmit.apply(null, arguments);
  } } }, [_c("div", { staticClass: "action-input__container" }, [_vm.label && _vm.labelOutside ? _c("label", { staticClass: "action-input__text-label", class: { "action-input__text-label--hidden": !_vm.labelOutside }, attrs: { "for": _vm.inputId } }, [_vm._v(" " + _vm._s(_vm.label) + " ")]) : _vm._e(), _c("div", { staticClass: "action-input__input-container" }, [_vm.datePickerType ? _c("NcDateTimePicker", _vm._b({ ref: "datetimepicker", staticClass: "action-input__datetimepicker", staticStyle: { "z-index": "99999999999" }, attrs: { "value": _vm.value, "placeholder": _vm.text, "disabled": _vm.disabled, "type": _vm.datePickerType, "input-class": ["mx-input", { focusable: _vm.isFocusable }] }, on: { "input": _vm.onInput, "change": _vm.onChange } }, "NcDateTimePicker", _vm.$attrs, false)) : _vm.isNativePicker ? _c("NcDateTimePickerNative", _vm._b({ staticClass: "action-input__datetimepicker", attrs: { "id": _vm.idNativeDateTimePicker, "value": _vm.value, "type": _vm.nativeDatePickerType, "input-class": { focusable: _vm.isFocusable } }, on: { "input": function($event) {
    return _vm.$emit("input", $event);
  }, "change": function($event) {
    return _vm.$emit("change", $event);
  } } }, "NcDateTimePickerNative", _vm.$attrs, false)) : _vm.isMultiselectType ? _c("NcSelect", _vm._g(_vm._b({ staticClass: "action-input__multi", attrs: { "value": _vm.value, "placeholder": _vm.text, "disabled": _vm.disabled, "append-to-body": _vm.$attrs.appendToBody || _vm.$attrs["append-to-body"] || false, "input-class": { focusable: _vm.isFocusable } } }, "NcSelect", _vm.$attrs, false), _vm.$listeners)) : _vm.type === "password" ? _c("NcPasswordField", _vm._g(_vm._b({ attrs: { "id": _vm.inputId, "value": _vm.value, "label": _vm.label, "label-outside": !_vm.label || _vm.labelOutside, "placeholder": _vm.text, "disabled": _vm.disabled, "input-class": { focusable: _vm.isFocusable }, "show-trailing-button": _vm.showTrailingButton && !_vm.disabled }, on: { "input": _vm.onInput, "change": _vm.onChange } }, "NcPasswordField", _vm.$attrs, false), _vm.$listeners)) : _vm.type === "color" ? _c("div", { staticClass: "action-input__container" }, [_vm.label && _vm.type === "color" ? _c("label", { staticClass: "action-input__text-label", class: { "action-input__text-label--hidden": !_vm.labelOutside }, attrs: { "for": _vm.inputId } }, [_vm._v(" " + _vm._s(_vm.label) + " ")]) : _vm._e(), _c("div", { staticClass: "action-input__input-container" }, [_c("NcColorPicker", _vm._g(_vm._b({ staticClass: "colorpicker__trigger", attrs: { "id": "inputId", "value": _vm.value }, on: { "input": _vm.onInput, "submit": function($event) {
    return _vm.$refs.form.requestSubmit();
  } } }, "NcColorPicker", _vm.$attrs, false), _vm.$listeners), [_c("button", { staticClass: "colorpicker__preview", class: { focusable: _vm.isFocusable }, style: { "background-color": _vm.value } })])], 1)]) : _c("NcTextField", _vm._g(_vm._b({ attrs: { "id": _vm.inputId, "value": _vm.value, "label": _vm.label, "label-outside": !_vm.label || _vm.labelOutside, "placeholder": _vm.text, "disabled": _vm.disabled, "input-class": { focusable: _vm.isFocusable }, "type": _vm.type, "trailing-button-icon": "arrowRight", "trailing-button-label": _vm.trailingButtonLabel, "show-trailing-button": _vm.showTrailingButton && !_vm.disabled }, on: { "trailing-button-click": function($event) {
    return _vm.$refs.form.requestSubmit();
  }, "input": _vm.onInput, "change": _vm.onChange } }, "NcTextField", _vm.$attrs, false), _vm.$listeners))], 1)])])])]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_9__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "6ba44c48",
  null,
  null
);
const NcActionInput = __component__.exports;



/***/ }),

/***/ "../nc-vue/dist/chunks/NcTextField-Cz-7BFoR.mjs":
/*!******************************************************!*\
  !*** ../nc-vue/dist/chunks/NcTextField-Cz-7BFoR.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcTextField)
/* harmony export */ });
/* harmony import */ var _Components_NcInputField_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/NcInputField.mjs */ "../nc-vue/dist/Components/NcInputField.mjs");
/* harmony import */ var _Close_1V1F2F_M_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Close-1V1F2F-M.mjs */ "../nc-vue/dist/chunks/Close-1V1F2F-M.mjs");
/* harmony import */ var _ArrowRight_Clf455e1_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArrowRight-Clf455e1.mjs */ "../nc-vue/dist/chunks/ArrowRight-Clf455e1.mjs");
/* harmony import */ var _plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-D637Qkok.mjs */ "../nc-vue/dist/chunks/_plugin-vue2_normalizer-D637Qkok.mjs");
/* harmony import */ var _l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_l10n-RVLriO4S.mjs */ "../nc-vue/dist/chunks/_l10n-RVLriO4S.mjs");





const _sfc_main$1 = {
  name: "UndoVariantIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$1 = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon undo-variant-icon", attrs: { "aria-hidden": _vm.title ? null : true, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M13.5,7A6.5,6.5 0 0,1 20,13.5A6.5,6.5 0 0,1 13.5,20H10V18H13.5C16,18 18,16 18,13.5C18,11 16,9 13.5,9H7.83L10.91,12.09L9.5,13.5L4,8L9.5,2.5L10.92,3.91L7.83,7H13.5M6,18H8V20H6V18Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ (0,_plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_3__.n)(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  null,
  null,
  null
);
const Undo = __component__$1.exports;
(0,_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_4__.r)(_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_4__.d, _l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_4__.c);
const NcInputFieldProps = new Set(Object.keys(_Components_NcInputField_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].props));
const _sfc_main = {
  name: "NcTextField",
  components: {
    NcInputField: _Components_NcInputField_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    Close: _Close_1V1F2F_M_mjs__WEBPACK_IMPORTED_MODULE_1__.C,
    ArrowRight: _ArrowRight_Clf455e1_mjs__WEBPACK_IMPORTED_MODULE_2__.A,
    Undo
  },
  // Allow forwarding all attributes
  inheritAttrs: false,
  props: {
    /**
     * Any [NcInputField](#/Components/NcFields?id=ncinputfield) props
     */
    // Not an actual prop but needed to show in vue-styleguidist docs
    // eslint-disable-next-line
    " ": {},
    // Reuse all the props from NcInputField for better typing and documentation
    ..._Components_NcInputField_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].props,
    /**
     * The `aria-label` to set on the trailing button
     * If no explicit value is set it will default to the one matching the `trailingButtonIcon`:
     * @default 'Clear text'|'Save changes'|'Undo changes'
     */
    trailingButtonLabel: {
      type: String,
      default: ""
    },
    // Custom props
    /**
     * Specifies which material design icon should be used for the trailing
     * button.
     * @type {'close'|'arrowRight'|'undo'}
     */
    trailingButtonIcon: {
      type: String,
      default: "close",
      validator: (value) => [
        "close",
        "arrowRight",
        "undo"
      ].includes(value)
    }
  },
  emits: [
    "update:value"
  ],
  computed: {
    propsAndAttrsToForward() {
      const predefinedLabels = {
        undo: (0,_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_4__.a)("Undo changes"),
        close: (0,_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_4__.a)("Clear text"),
        arrowRight: (0,_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_4__.a)("Save changes")
      };
      return {
        // Proxy all the HTML attributes
        ...this.$attrs,
        // Proxy original NcInputField's props
        ...Object.fromEntries(
          Object.entries(this.$props).filter(([key]) => NcInputFieldProps.has(key))
        ),
        // Adjust aria-label for predefined trailing buttons
        trailingButtonLabel: this.trailingButtonLabel || predefinedLabels[this.trailingButtonIcon]
      };
    }
  },
  methods: {
    /**
     * Focus the input element
     *
     * @public
     */
    focus() {
      this.$refs.inputField.focus();
    },
    /**
     * Select all the text in the input
     *
     * @public
     */
    select() {
      this.$refs.inputField.select();
    },
    handleInput(event) {
      this.$emit("update:value", event.target.value);
    }
  }
};
var _sfc_render = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("NcInputField", _vm._g(_vm._b({ ref: "inputField", on: { "input": _vm.handleInput }, scopedSlots: _vm._u([_vm.type !== "search" ? { key: "trailing-button-icon", fn: function() {
    return [_vm.trailingButtonIcon === "close" ? _c("Close", { attrs: { "size": 20 } }) : _vm.trailingButtonIcon === "arrowRight" ? _c("ArrowRight", { attrs: { "size": 20 } }) : _vm.trailingButtonIcon === "undo" ? _c("Undo", { attrs: { "size": 20 } }) : _vm._e()];
  }, proxy: true } : null], null, true) }, "NcInputField", _vm.propsAndAttrsToForward, false), _vm.$listeners), [_vm._t("default")], 2);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_3__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const NcTextField = __component__.exports;



/***/ }),

/***/ "../nc-vue/dist/chunks/NcTimezonePicker-DbWP6xoM.mjs":
/*!***********************************************************!*\
  !*** ../nc-vue/dist/chunks/NcTimezonePicker-DbWP6xoM.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcTimezonePicker)
/* harmony export */ });
/* harmony import */ var _l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_l10n-RVLriO4S.mjs */ "../nc-vue/dist/chunks/_l10n-RVLriO4S.mjs");
/* harmony import */ var _nextcloud_timezones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/timezones */ "../nc-vue/node_modules/@nextcloud/timezones/dist/index.mjs");
/* harmony import */ var _GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GenRandomId-CMooMQt0.mjs */ "../nc-vue/dist/chunks/GenRandomId-CMooMQt0.mjs");
/* harmony import */ var _NcSelect_EBEqP4yf_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NcSelect-EBEqP4yf.mjs */ "../nc-vue/dist/chunks/NcSelect-EBEqP4yf.mjs");
/* harmony import */ var _plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-D637Qkok.mjs */ "../nc-vue/dist/chunks/_plugin-vue2_normalizer-D637Qkok.mjs");





(0,_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_0__.r)(_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_0__.w);
function getSortedTimezoneList(timezoneList = [], additionalTimezones = []) {
  const sortedByContinent = {};
  const sortedList = [];
  for (const timezoneId of timezoneList) {
    const components = timezoneId.split("/");
    let [continent, name] = [components.shift(), components.join("/")];
    if (!name) {
      name = continent;
      continent = (0,_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_0__.a)("Global");
    }
    sortedByContinent[continent] = sortedByContinent[continent] || {
      continent,
      regions: []
    };
    sortedByContinent[continent].regions.push({
      label: getReadableTimezoneName(name),
      cities: [],
      timezoneId
    });
  }
  for (const additionalTimezone of additionalTimezones) {
    const { continent, label, timezoneId } = additionalTimezone;
    sortedByContinent[continent] = sortedByContinent[continent] || {
      continent,
      regions: []
    };
    sortedByContinent[continent].regions.push({
      label,
      cities: [],
      timezoneId
    });
  }
  for (const continent in sortedByContinent) {
    if (!Object.prototype.hasOwnProperty.call(sortedByContinent, continent)) {
      continue;
    }
    sortedByContinent[continent].regions.sort((a, b) => {
      if (a.label < b.label) {
        return -1;
      }
      return 1;
    });
    sortedList.push(sortedByContinent[continent]);
  }
  sortedList.sort((a, b) => {
    if (a.continent < b.continent) {
      return -1;
    }
    return 1;
  });
  return sortedList;
}
function getReadableTimezoneName(timezoneId) {
  return timezoneId.split("_").join(" ").replace("St ", "St. ").split("/").join(" - ");
}
const timezoneManager = (0,_nextcloud_timezones__WEBPACK_IMPORTED_MODULE_1__.getTimezoneManager)();
let initialized = false;
function getTimezoneManager() {
  if (!initialized) {
    timezoneManager.registerDefaultTimezones();
    initialized = true;
  }
  return timezoneManager;
}
(0,_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_0__.r)(_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_0__.x);
const _sfc_main = {
  name: "NcTimezonePicker",
  components: {
    NcSelect: _NcSelect_EBEqP4yf_mjs__WEBPACK_IMPORTED_MODULE_3__.N
  },
  props: {
    /**
     * An array of additional timezones to include with the standard database. Useful if there is a custom timezone, e.g. read from user data
     */
    additionalTimezones: {
      type: Array,
      default: () => []
    },
    /**
     * The selected timezone. Use v-model for two-way binding. The default timezone is floating, which means a time independent of timezone. See https://icalendar.org/CalDAV-Access-RFC-4791/7-3-date-and-floating-time.html for details.
     */
    value: {
      type: String,
      default: "floating"
    },
    /**
     * ID of the inner vue-select element, can be used for labels like: `vs-${uid}__combobox`
     */
    uid: {
      type: [String, Number],
      default: () => "tz-".concat((0,_GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_2__.G)(5))
    }
  },
  emits: ["input"],
  computed: {
    placeholder() {
      return (0,_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_0__.a)("Type to search time zone");
    },
    selectedTimezone() {
      for (const additionalTimezone of this.additionalTimezones) {
        if (additionalTimezone.timezoneId === this.value) {
          return additionalTimezone;
        }
      }
      return {
        label: getReadableTimezoneName(this.value),
        timezoneId: this.value
      };
    },
    options() {
      const timezoneManager2 = getTimezoneManager();
      const timezoneList = getSortedTimezoneList(timezoneManager2.listAllTimezones(), this.additionalTimezones);
      let timezonesGrouped = [];
      Object.values(timezoneList).forEach((group) => {
        timezonesGrouped = timezonesGrouped.concat(group.regions);
      });
      return timezonesGrouped;
    }
  },
  methods: {
    t: _l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_0__.a,
    change(newValue) {
      if (!newValue) {
        return;
      }
      this.$emit("input", newValue.timezoneId);
    },
    /**
     * Returns whether this is a continent label,
     * or an actual timezone. Continent labels are not selectable.
     *
     * @param {string} option The option
     * @return {boolean}
     */
    isSelectable(option) {
      return !option.timezoneId.startsWith("tz-group__");
    },
    /**
     * Function to filter the timezone list.
     * We search in the timezoneId, so both continent and region names can be matched.
     *
     * @param {object} option The timezone option
     * @param {string} label The label of the timezone
     * @param {string} search The search string
     * @return {boolean}
     */
    filterBy(option, label, search) {
      const terms = search.trim().split(" ");
      if (option.timezoneId.startsWith("tz-group__")) {
        return option.regions.some((region) => {
          return this.matchTimezoneId(region.timezoneId, terms);
        });
      }
      return this.matchTimezoneId(option.timezoneId, terms);
    },
    matchTimezoneId(timezoneId, terms) {
      return terms.every((term) => timezoneId.toLowerCase().includes(term.toLowerCase()));
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("NcSelect", { attrs: { "aria-label-combobox": _vm.t("Search for time zone"), "clearable": false, "filter-by": _vm.filterBy, "multiple": false, "options": _vm.options, "placeholder": _vm.placeholder, "selectable": _vm.isSelectable, "uid": _vm.uid, "value": _vm.selectedTimezone, "label": "label" }, on: { "option:selected": _vm.change } });
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_4__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const NcTimezonePicker = __component__.exports;



/***/ })

}]);
//# sourceMappingURL=nc-vue_dist_chunks_NcActionInput-Dock2wJi_mjs-nc-vue_dist_chunks_NcActionInput-Dock2wJi_mjs.js.map?v=1a814db48c166e845ffa