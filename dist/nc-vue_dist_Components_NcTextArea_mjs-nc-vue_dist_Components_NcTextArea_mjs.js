"use strict";
(self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || []).push([["nc-vue_dist_Components_NcTextArea_mjs"],{

/***/ "./node_modules/css-loader/dist/cjs.js!../nc-vue/dist/assets/NcTextArea-D8bZi2fT.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nc-vue/dist/assets/NcTextArea-D8bZi2fT.css ***!
  \*******************************************************************************************/
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
.material-design-icon[data-v-4b6abfac] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.textarea[data-v-4b6abfac] {
  position: relative;
  width: 100%;
  border-radius: var(--border-radius-large);
  margin-block-start: 6px;
  resize: vertical;
}
.textarea__main-wrapper[data-v-4b6abfac] {
  position: relative;
}
.textarea--disabled[data-v-4b6abfac] {
  opacity: 0.7;
  filter: saturate(0.7);
}
.textarea__input[data-v-4b6abfac] {
  margin: 0;
  padding-inline: 10px 6px;
  width: 100%;
  height: calc(var(--default-clickable-area) * 2);
  font-size: var(--default-font-size);
  text-overflow: ellipsis;
  background-color: var(--color-main-background);
  color: var(--color-main-text);
  border: var(--border-width-input, 2px) solid var(--color-border-maxcontrast);
  border-radius: var(--border-radius-large);
  cursor: pointer;
}
.textarea__input[data-v-4b6abfac]:active:not([disabled]), .textarea__input[data-v-4b6abfac]:hover:not([disabled]), .textarea__input[data-v-4b6abfac]:focus:not([disabled]) {
  border-width: var(--border-width-input-focused, 2px);
  border-color: var(--color-main-text);
  box-shadow: 0 0 0 2px var(--color-main-background) !important;
}
.textarea__input[data-v-4b6abfac]:not(:focus, .textarea__input--label-outside)::placeholder {
  opacity: 0;
}
.textarea__input[data-v-4b6abfac]:focus {
  cursor: text;
}
.textarea__input[data-v-4b6abfac]:disabled {
  cursor: default;
}
.textarea__input[data-v-4b6abfac]:focus-visible {
  box-shadow: unset !important;
}
.textarea__input--success[data-v-4b6abfac] {
  border-color: var(--color-success) !important;
}
.textarea__input--success[data-v-4b6abfac]:focus-visible {
  box-shadow: rgb(248, 250, 252) 0px 0px 0px 2px, var(--color-primary-element) 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}
.textarea__input--error[data-v-4b6abfac] {
  border-color: var(--color-error) !important;
}
.textarea__input--error[data-v-4b6abfac]:focus-visible {
  box-shadow: rgb(248, 250, 252) 0px 0px 0px 2px, var(--color-primary-element) 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}
.textarea__label[data-v-4b6abfac] {
  position: absolute;
  margin-inline: 12px 0;
  max-width: fit-content;
  inset-block-start: 11px;
  inset-inline: 0;
  color: var(--color-text-maxcontrast);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  transition: height var(--animation-quick), inset-block-start var(--animation-quick), font-size var(--animation-quick), color var(--animation-quick), background-color var(--animation-quick) var(--animation-slow);
}
.textarea__input:focus + .textarea__label[data-v-4b6abfac], .textarea__input:not(:placeholder-shown) + .textarea__label[data-v-4b6abfac] {
  inset-block-start: -10px;
  line-height: 1.5;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-main-text);
  background-color: var(--color-main-background);
  padding-inline: 4px;
  margin-inline-start: 8px;
  transition: height var(--animation-quick), inset-block-start var(--animation-quick), font-size var(--animation-quick), color var(--animation-quick);
}
.textarea__helper-text-message[data-v-4b6abfac] {
  padding-block: 4px;
  display: flex;
  align-items: center;
}
.textarea__helper-text-message__icon[data-v-4b6abfac] {
  margin-inline-end: 8px;
}
.textarea__helper-text-message--error[data-v-4b6abfac] {
  color: var(--color-error-text);
}
.textarea__helper-text-message--success[data-v-4b6abfac] {
  color: var(--color-success-text);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../nc-vue/dist/assets/NcTextArea-D8bZi2fT.css":
/*!*****************************************************!*\
  !*** ../nc-vue/dist/assets/NcTextArea-D8bZi2fT.css ***!
  \*****************************************************/
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
/* harmony import */ var _server_node_modules_css_loader_dist_cjs_js_NcTextArea_D8bZi2fT_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../server/node_modules/css-loader/dist/cjs.js!./NcTextArea-D8bZi2fT.css */ "./node_modules/css-loader/dist/cjs.js!../nc-vue/dist/assets/NcTextArea-D8bZi2fT.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_server_node_modules_css_loader_dist_cjs_js_NcTextArea_D8bZi2fT_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_server_node_modules_css_loader_dist_cjs_js_NcTextArea_D8bZi2fT_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _server_node_modules_css_loader_dist_cjs_js_NcTextArea_D8bZi2fT_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _server_node_modules_css_loader_dist_cjs_js_NcTextArea_D8bZi2fT_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../nc-vue/dist/Components/NcTextArea.mjs":
/*!************************************************!*\
  !*** ../nc-vue/dist/Components/NcTextArea.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NcTextArea)
/* harmony export */ });
/* harmony import */ var _assets_NcTextArea_D8bZi2fT_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcTextArea-D8bZi2fT.css */ "../nc-vue/dist/assets/NcTextArea-D8bZi2fT.css");
/* harmony import */ var _chunks_GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/GenRandomId-CMooMQt0.mjs */ "../nc-vue/dist/chunks/GenRandomId-CMooMQt0.mjs");
/* harmony import */ var _chunks_AlertCircleOutline_BzttElgq_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/AlertCircleOutline-BzttElgq.mjs */ "../nc-vue/dist/chunks/AlertCircleOutline-BzttElgq.mjs");
/* harmony import */ var _chunks_Check_PawIlCwa_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chunks/Check-PawIlCwa.mjs */ "../nc-vue/dist/chunks/Check-PawIlCwa.mjs");
/* harmony import */ var _chunks_plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chunks/_plugin-vue2_normalizer-D637Qkok.mjs */ "../nc-vue/dist/chunks/_plugin-vue2_normalizer-D637Qkok.mjs");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");





const _sfc_main = {
  name: "NcTextArea",
  components: {
    AlertCircle: _chunks_AlertCircleOutline_BzttElgq_mjs__WEBPACK_IMPORTED_MODULE_2__.A,
    Check: _chunks_Check_PawIlCwa_mjs__WEBPACK_IMPORTED_MODULE_3__.C
  },
  inheritAttrs: false,
  props: {
    /**
     * The value of the input field
     */
    value: {
      type: String,
      required: true
    },
    /**
     * The input label, always provide one for accessibility purposes.
     * This will also be used as a placeholder unless the placeholder
     * prop is populated with a different string.
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
     * Class to add to the input field.
     * Necessary to use NcInputField in the NcActionInput component.
     */
    inputClass: {
      type: [Object, String],
      default: ""
    },
    /**
     * The resize CSS property sets whether an element is resizable, and if
     * so, in which directions.
     */
    resize: {
      type: String,
      default: "both",
      validator: (value) => ["both", "vertical", "horizontal", "none"].includes(value)
    }
  },
  emits: [
    "update:value"
  ],
  computed: {
    computedId() {
      return this.$attrs.id && this.$attrs.id !== "" ? this.$attrs.id : this.inputName;
    },
    inputName() {
      return "input" + (0,_chunks_GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_1__.G)();
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
      this.$emit("update:value", event.target.value);
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "textarea", class: { "textarea--disabled": _vm.disabled } }, [_c("div", { staticClass: "textarea__main-wrapper" }, [_c("textarea", _vm._g(_vm._b({ ref: "input", staticClass: "textarea__input", class: [
    _vm.inputClass,
    {
      "textarea__input--label-outside": _vm.labelOutside,
      "textarea__input--success": _vm.success,
      "textarea__input--error": _vm.error
    }
  ], style: { resize: _vm.resize }, attrs: { "id": _vm.computedId, "type": _vm.type, "disabled": _vm.disabled, "placeholder": _vm.computedPlaceholder, "aria-describedby": _vm.ariaDescribedby, "aria-live": "polite" }, domProps: { "value": _vm.value }, on: { "input": _vm.handleInput } }, "textarea", _vm.$attrs, false), _vm.$listeners)), _vm._v(" "), !_vm.labelOutside && _vm.isValidLabel ? _c("label", { staticClass: "textarea__label", attrs: { "for": _vm.computedId } }, [_vm._v(" " + _vm._s(_vm.label) + " ")]) : _vm._e()]), _vm.helperText.length > 0 ? _c("p", { staticClass: "textarea__helper-text-message", class: {
    "textarea__helper-text-message--error": _vm.error,
    "textarea__helper-text-message--success": _vm.success
  }, attrs: { "id": "".concat(_vm.inputName, "-helper-text") } }, [_vm.success ? _c("Check", { staticClass: "textarea__helper-text-message__icon", attrs: { "size": 18 } }) : _vm.error ? _c("AlertCircle", { staticClass: "textarea__helper-text-message__icon", attrs: { "size": 18 } }) : _vm._e(), _vm._v(" " + _vm._s(_vm.helperText) + " ")], 1) : _vm._e()]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_4__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "4b6abfac",
  null,
  null
);
const NcTextArea = __component__.exports;



/***/ })

}]);
//# sourceMappingURL=nc-vue_dist_Components_NcTextArea_mjs-nc-vue_dist_Components_NcTextArea_mjs.js.map?v=6af82c960d3296fa3fb9