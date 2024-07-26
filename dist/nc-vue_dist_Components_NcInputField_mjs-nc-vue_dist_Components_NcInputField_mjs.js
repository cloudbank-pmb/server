"use strict";
(self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || []).push([["nc-vue_dist_Components_NcInputField_mjs"],{

/***/ "./node_modules/css-loader/dist/cjs.js!../nc-vue/dist/assets/NcInputField-B7T0X2lM.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nc-vue/dist/assets/NcInputField-B7T0X2lM.css ***!
  \*********************************************************************************************/
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
.material-design-icon[data-v-07b05442] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.input-field[data-v-07b05442] {
  --input-border-radius: var(--border-radius-element, var(--border-radius-large));
  --input-padding-start: var(--border-radius-large);
  --input-padding-end: var(--border-radius-large);
  position: relative;
  width: 100%;
  margin-block-start: 6px;
}
.input-field--disabled[data-v-07b05442] {
  opacity: 0.4;
  filter: saturate(0.4);
}
.input-field--label-outside[data-v-07b05442] {
  margin-block-start: 0;
}
.input-field--leading-icon[data-v-07b05442] {
  --input-padding-start: calc(var(--default-clickable-area) - var(--default-grid-baseline));
}
.input-field--trailing-icon[data-v-07b05442] {
  --input-padding-end: calc(var(--default-clickable-area) - var(--default-grid-baseline));
}
.input-field--pill[data-v-07b05442] {
  --input-border-radius: var(--border-radius-pill);
}
.input-field__main-wrapper[data-v-07b05442] {
  height: var(--default-clickable-area);
  position: relative;
}
.input-field__input[data-v-07b05442] {
  --input-border-width-offset: calc(var(--border-width-input-focused, 2px) - var(--border-width-input, 2px));
  background-color: var(--color-main-background);
  color: var(--color-main-text);
  border: var(--border-width-input, 2px) solid var(--color-border-maxcontrast);
  border-radius: var(--input-border-radius);
  cursor: pointer;
  -webkit-appearance: textfield !important;
  -moz-appearance: textfield !important;
  appearance: textfield !important;
  font-size: var(--default-font-size);
  text-overflow: ellipsis;
  height: calc(var(--default-clickable-area) - 2 * var(--input-border-width-offset)) !important;
  width: 100%;
  padding-inline: calc(var(--input-padding-start) + var(--input-border-width-offset)) calc(var(--input-padding-end) + var(--input-border-width-offset));
  padding-block: var(--input-border-width-offset);
}
.input-field__input[data-v-07b05442]:active:not([disabled]), .input-field__input[data-v-07b05442]:hover:not([disabled]), .input-field__input[data-v-07b05442]:focus:not([disabled]) {
  border-width: var(--border-width-input-focused, 2px);
  border-color: var(--color-main-text) !important;
  box-shadow: 0 0 0 2px var(--color-main-background) !important;
  --input-border-width-offset: 0px;
}
.input-field__input:focus + .input-field__label[data-v-07b05442], .input-field__input:hover:not(:placeholder-shown) + .input-field__label[data-v-07b05442] {
  color: var(--color-main-text);
}
.input-field__input[data-v-07b05442]:focus {
  cursor: text;
}
.input-field__input[data-v-07b05442]:disabled {
  cursor: default;
}
.input-field__input[data-v-07b05442]:focus-visible {
  box-shadow: unset !important;
}
.input-field__input--success[data-v-07b05442] {
  border-color: var(--color-success) !important;
}
.input-field__input--success[data-v-07b05442]:focus-visible {
  box-shadow: rgb(248, 250, 252) 0px 0px 0px 2px, var(--color-primary-element) 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}
.input-field__input--error[data-v-07b05442] {
  border-color: var(--color-error) !important;
}
.input-field__input--error[data-v-07b05442]:focus-visible {
  box-shadow: rgb(248, 250, 252) 0px 0px 0px 2px, var(--color-primary-element) 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}
.input-field:not(.input-field--label-outside) .input-field__input[data-v-07b05442]:not(:focus)::placeholder {
  opacity: 0;
}
.input-field__label[data-v-07b05442] {
  --input-label-font-size: var(--default-font-size);
  position: absolute;
  margin-inline: var(--input-padding-start) var(--input-padding-end);
  max-width: fit-content;
  font-size: var(--input-label-font-size);
  inset-block-start: calc((var(--default-clickable-area) - var(--default-line-height)) / 2);
  inset-inline: var(--border-width-input-focused, 2px);
  color: var(--color-text-maxcontrast);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  transition: height var(--animation-quick), inset-block-start var(--animation-quick), font-size var(--animation-quick), color var(--animation-quick), background-color var(--animation-quick) var(--animation-slow);
}
.input-field__input:focus + .input-field__label[data-v-07b05442], .input-field__input:not(:placeholder-shown) + .input-field__label[data-v-07b05442] {
  --input-label-font-size: 13px;
  line-height: 1.5;
  inset-block-start: calc(-1.5 * var(--input-label-font-size) / 2);
  font-weight: 500;
  border-radius: var(--default-grid-baseline) var(--default-grid-baseline) 0 0;
  background-color: var(--color-main-background);
  padding-inline: var(--default-grid-baseline);
  margin-inline: calc(var(--input-padding-start) - var(--default-grid-baseline)) calc(var(--input-padding-end) - var(--default-grid-baseline));
  transition: height var(--animation-quick), inset-block-start var(--animation-quick), font-size var(--animation-quick), color var(--animation-quick);
}
.input-field__icon[data-v-07b05442] {
  position: absolute;
  height: var(--default-clickable-area);
  width: var(--default-clickable-area);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  inset-block-end: 0;
}
.input-field__icon--leading[data-v-07b05442] {
  inset-inline-start: 0px;
}
.input-field__icon--trailing[data-v-07b05442] {
  inset-inline-end: 0px;
}
.input-field__trailing-button[data-v-07b05442] {
  --button-size: calc(var(--default-clickable-area) - 2 * var(--border-width-input-focused, 2px)) !important;
  --button-radius: calc(var(--input-border-radius) - var(--border-width-input-focused, 2px));
}
.input-field__trailing-button.button-vue[data-v-07b05442] {
  position: absolute;
  top: var(--border-width-input-focused, 2px);
  right: var(--border-width-input-focused, 2px);
}
.input-field__trailing-button.button-vue[data-v-07b05442]:focus-visible {
  box-shadow: none !important;
}
.input-field__helper-text-message[data-v-07b05442] {
  padding-block: 4px;
  padding-inline: var(--border-radius-large);
  display: flex;
  align-items: center;
  color: var(--color-text-maxcontrast);
}
.input-field__helper-text-message__icon[data-v-07b05442] {
  margin-inline-end: 8px;
}
.input-field__helper-text-message--error[data-v-07b05442] {
  color: var(--color-error-text);
}
.input-field__helper-text-message--success[data-v-07b05442] {
  color: var(--color-success-text);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../nc-vue/dist/assets/NcInputField-B7T0X2lM.css":
/*!*******************************************************!*\
  !*** ../nc-vue/dist/assets/NcInputField-B7T0X2lM.css ***!
  \*******************************************************/
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
/* harmony import */ var _server_node_modules_css_loader_dist_cjs_js_NcInputField_B7T0X2lM_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../server/node_modules/css-loader/dist/cjs.js!./NcInputField-B7T0X2lM.css */ "./node_modules/css-loader/dist/cjs.js!../nc-vue/dist/assets/NcInputField-B7T0X2lM.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_server_node_modules_css_loader_dist_cjs_js_NcInputField_B7T0X2lM_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_server_node_modules_css_loader_dist_cjs_js_NcInputField_B7T0X2lM_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _server_node_modules_css_loader_dist_cjs_js_NcInputField_B7T0X2lM_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _server_node_modules_css_loader_dist_cjs_js_NcInputField_B7T0X2lM_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../nc-vue/dist/Components/NcInputField.mjs":
/*!**************************************************!*\
  !*** ../nc-vue/dist/Components/NcInputField.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NcInputField)
/* harmony export */ });
/* harmony import */ var _assets_NcInputField_B7T0X2lM_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcInputField-B7T0X2lM.css */ "../nc-vue/dist/assets/NcInputField-B7T0X2lM.css");
/* harmony import */ var _NcButton_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NcButton.mjs */ "../nc-vue/dist/Components/NcButton.mjs");
/* harmony import */ var _chunks_GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/GenRandomId-CMooMQt0.mjs */ "../nc-vue/dist/chunks/GenRandomId-CMooMQt0.mjs");
/* harmony import */ var _chunks_AlertCircleOutline_BzttElgq_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chunks/AlertCircleOutline-BzttElgq.mjs */ "../nc-vue/dist/chunks/AlertCircleOutline-BzttElgq.mjs");
/* harmony import */ var _chunks_Check_PawIlCwa_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chunks/Check-PawIlCwa.mjs */ "../nc-vue/dist/chunks/Check-PawIlCwa.mjs");
/* harmony import */ var _chunks_plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chunks/_plugin-vue2_normalizer-D637Qkok.mjs */ "../nc-vue/dist/chunks/_plugin-vue2_normalizer-D637Qkok.mjs");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");






const _sfc_main = {
  name: "NcInputField",
  components: {
    NcButton: _NcButton_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
    AlertCircle: _chunks_AlertCircleOutline_BzttElgq_mjs__WEBPACK_IMPORTED_MODULE_3__.A,
    Check: _chunks_Check_PawIlCwa_mjs__WEBPACK_IMPORTED_MODULE_4__.C
  },
  inheritAttrs: false,
  props: {
    /**
     * The value of the input field
     * If type is 'number' and a number is passed as value than the type of `update:value` will also be 'number'
     */
    value: {
      type: [String, Number],
      required: true
    },
    /**
     * The type of the input element
     */
    type: {
      type: String,
      default: "text",
      validator: (value) => [
        "text",
        "password",
        "email",
        "tel",
        "url",
        "search",
        "number"
      ].includes(value)
    },
    /**
     * The input label, always provide one for accessibility purposes.
     * This will also be used as a placeholder unless the placeholder
     * prop is populated with a different string.
     *
     * Note: If the background color is not `--color-main-background` consider using an external label instead (see `labelOutside`).
     */
    label: {
      type: String,
      default: void 0
    },
    /**
     * Pass in true if you want to use an external label. This is useful
     * if you need a label that looks different from the one provided by
     * this component
     */
    labelOutside: {
      type: Boolean,
      default: false
    },
    /**
     * The placeholder of the input. This defaults as the string that's
     * passed into the label prop. In order to remove the placeholder,
     * pass in an empty string.
     */
    placeholder: {
      type: String,
      default: void 0
    },
    /**
     * Controls whether to display the trailing button.
     */
    showTrailingButton: {
      type: Boolean,
      default: false
    },
    /**
     * Label of the trailing button
     *
     * Required when showTrailingButton is set
     */
    trailingButtonLabel: {
      type: String,
      default: ""
    },
    /**
     * Toggles the success state of the component. Adds a checkmark icon.
     * this cannot be used together with canClear.
     */
    success: {
      type: Boolean,
      default: false
    },
    /**
     * Toggles the error state of the component. Adds an error icon.
     * this cannot be used together with canClear.
     */
    error: {
      type: Boolean,
      default: false
    },
    /**
     * Additional helper text message
     *
     * This will be displayed beneath the input field. In case the field is
     * also marked as having an error, the text will be displayed in red.
     */
    helperText: {
      type: String,
      default: ""
    },
    /**
     * Disable the input field
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Specifies whether the input should have a pill form.
     * By default, input has rounded corners.
     */
    pill: {
      type: Boolean,
      default: false
    },
    /**
     * Class to add to the input field.
     * Necessary to use NcInputField in the NcActionInput component.
     */
    inputClass: {
      type: [Object, String],
      default: ""
    }
  },
  emits: [
    "update:value",
    "trailing-button-click"
  ],
  computed: {
    computedId() {
      return this.$attrs.id && this.$attrs.id !== "" ? this.$attrs.id : this.inputName;
    },
    inputName() {
      return "input" + (0,_chunks_GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_2__.G)();
    },
    hasLeadingIcon() {
      return this.$slots.default;
    },
    hasTrailingIcon() {
      return this.success;
    },
    hasPlaceholder() {
      return this.placeholder !== "" && this.placeholder !== void 0;
    },
    computedPlaceholder() {
      return this.hasPlaceholder ? this.placeholder : this.label;
    },
    isValidLabel() {
      const isValidLabel = this.label || this.labelOutside;
      if (!isValidLabel) {
        console.warn("You need to add a label to the NcInputField component. Either use the prop label or use an external one, as per the example in the documentation.");
      }
      return isValidLabel;
    },
    ariaDescribedby() {
      const ariaDescribedby = [];
      if (this.helperText.length > 0) {
        ariaDescribedby.push("".concat(this.inputName, "-helper-text"));
      }
      if (this.$attrs["aria-describedby"]) {
        ariaDescribedby.push(this.$attrs["aria-describedby"]);
      }
      return ariaDescribedby.join(" ") || null;
    }
  },
  methods: {
    /**
     * Focus the input element
     *
     * @public
     */
    focus() {
      this.$refs.input.focus();
    },
    /**
     * Select all the text in the input
     *
     * @public
     */
    select() {
      this.$refs.input.select();
    },
    handleInput(event) {
      this.$emit("update:value", this.type === "number" && typeof this.value === "number" ? parseFloat(event.target.value, 10) : event.target.value);
    },
    handleTrailingButtonClick(event) {
      this.$emit("trailing-button-click", event);
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "input-field", class: {
    "input-field--disabled": _vm.disabled,
    "input-field--label-outside": _vm.labelOutside || !_vm.isValidLabel,
    "input-field--leading-icon": _vm.hasLeadingIcon,
    "input-field--trailing-icon": _vm.showTrailingButton || _vm.hasTrailingIcon,
    "input-field--pill": _vm.pill
  } }, [_c("div", { staticClass: "input-field__main-wrapper" }, [_c("input", _vm._g(_vm._b({ ref: "input", staticClass: "input-field__input", class: [
    _vm.inputClass,
    {
      "input-field__input--success": _vm.success,
      "input-field__input--error": _vm.error
    }
  ], attrs: { "id": _vm.computedId, "type": _vm.type, "disabled": _vm.disabled, "placeholder": _vm.computedPlaceholder, "aria-describedby": _vm.ariaDescribedby, "aria-live": "polite" }, domProps: { "value": _vm.value.toString() }, on: { "input": _vm.handleInput } }, "input", _vm.$attrs, false), _vm.$listeners)), !_vm.labelOutside && _vm.isValidLabel ? _c("label", { staticClass: "input-field__label", attrs: { "for": _vm.computedId } }, [_vm._v(" " + _vm._s(_vm.label) + " ")]) : _vm._e(), _c("div", { directives: [{ name: "show", rawName: "v-show", value: _vm.hasLeadingIcon, expression: "hasLeadingIcon" }], staticClass: "input-field__icon input-field__icon--leading" }, [_vm._t("default")], 2), _vm.showTrailingButton ? _c("NcButton", { staticClass: "input-field__trailing-button", attrs: { "type": "tertiary-no-background", "aria-label": _vm.trailingButtonLabel, "disabled": _vm.disabled }, on: { "click": _vm.handleTrailingButtonClick }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_vm._t("trailing-button-icon")];
  }, proxy: true }], null, true) }) : _vm.success || _vm.error ? _c("div", { staticClass: "input-field__icon input-field__icon--trailing" }, [_vm.success ? _c("Check", { staticStyle: { "color": "var(--color-success-text)" }, attrs: { "size": 20 } }) : _vm.error ? _c("AlertCircle", { staticStyle: { "color": "var(--color-error-text)" }, attrs: { "size": 20 } }) : _vm._e()], 1) : _vm._e()], 1), _vm.helperText.length > 0 ? _c("p", { staticClass: "input-field__helper-text-message", class: {
    "input-field__helper-text-message--error": _vm.error,
    "input-field__helper-text-message--success": _vm.success
  }, attrs: { "id": "".concat(_vm.inputName, "-helper-text") } }, [_vm.success ? _c("Check", { staticClass: "input-field__helper-text-message__icon", attrs: { "size": 18 } }) : _vm.error ? _c("AlertCircle", { staticClass: "input-field__helper-text-message__icon", attrs: { "size": 18 } }) : _vm._e(), _vm._v(" " + _vm._s(_vm.helperText) + " ")], 1) : _vm._e()]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_5__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "07b05442",
  null,
  null
);
const NcInputField = __component__.exports;



/***/ }),

/***/ "../nc-vue/dist/chunks/AlertCircleOutline-BzttElgq.mjs":
/*!*************************************************************!*\
  !*** ../nc-vue/dist/chunks/AlertCircleOutline-BzttElgq.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AlertCircle)
/* harmony export */ });
/* harmony import */ var _plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-D637Qkok.mjs */ "../nc-vue/dist/chunks/_plugin-vue2_normalizer-D637Qkok.mjs");

const _sfc_main = {
  name: "AlertCircleOutlineIcon",
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
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon alert-circle-outline-icon", attrs: { "aria-hidden": _vm.title ? null : true, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const AlertCircle = __component__.exports;



/***/ })

}]);
//# sourceMappingURL=nc-vue_dist_Components_NcInputField_mjs-nc-vue_dist_Components_NcInputField_mjs.js.map?v=a3e297b15e67d6c1378e