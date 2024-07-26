"use strict";
(self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || []).push([["apps_files_sharing_src_views_PublicAuthPrompt_vue-nc-vue_dist_chunks_Check-PawIlCwa_mjs"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=script&lang=ts":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=script&lang=ts ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "../nc-vue/dist/Components/NcButton.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcDialog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcDialog.js */ "../nc-vue/dist/Components/NcDialog.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcNoteCard.js */ "../nc-vue/dist/Components/NcNoteCard.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcTextField.js */ "../nc-vue/dist/Components/NcTextField.mjs");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.mjs");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_6__.defineComponent)({
  name: 'PublicAuthPrompt',
  components: {
    NcButton: _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    NcDialog: _nextcloud_vue_dist_Components_NcDialog_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    NcNoteCard: _nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    NcTextField: _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  setup() {
    return {
      t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.t,
      owner: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_5__.loadState)('files_sharing', 'owner', ''),
      ownerDisplayName: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_5__.loadState)('files_sharing', 'ownerDisplayName', ''),
      label: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_5__.loadState)('files_sharing', 'label', ''),
      note: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_5__.loadState)('files_sharing', 'note', ''),
      filename: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_5__.loadState)('files_sharing', 'filename', '')
    };
  },
  data() {
    return {
      name: ''
    };
  },
  computed: {
    dialogName() {
      return this.t('files_sharing', 'Upload files to {folder}', {
        folder: this.label || this.filename
      });
    }
  },
  beforeMount() {
    // Pre-load the name from local storage if already set by another app
    // like Talk, Colabora or Text...
    const talkNick = localStorage.getItem('nick');
    if (talkNick) {
      this.name = talkNick;
    }
  },
  methods: {
    onSubmit() {
      const form = this.$refs.form;
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (this.name.trim() === '') {
        return;
      }
      localStorage.setItem('nick', this.name);
      this.$emit('close');
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=template&id=4bbba25b":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=template&id=4bbba25b ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("NcDialog", {
    staticClass: "public-auth-prompt",
    attrs: {
      "data-cy-public-auth-prompt-dialog": "",
      "dialog-classes": "public-auth-prompt__dialog",
      "can-close": false,
      name: _vm.dialogName
    },
    scopedSlots: _vm._u([{
      key: "actions",
      fn: function () {
        return [_c("NcButton", {
          ref: "submit",
          attrs: {
            "data-cy-public-auth-prompt-dialog-submit": "",
            disabled: _vm.name.trim() === ""
          },
          on: {
            click: _vm.onSubmit
          }
        }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("files_sharing", "Submit name")) + "\n\t\t")])];
      },
      proxy: true
    }])
  }, [_vm.owner ? _c("h3", {
    staticClass: "public-auth-prompt__subtitle"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("files_sharing", "{ownerDisplayName} shared a folder with you.", {
    ownerDisplayName: _vm.ownerDisplayName
  })) + "\n\t")]) : _vm._e(), _vm._v(" "), _c("NcNoteCard", {
    staticClass: "public-auth-prompt__header",
    attrs: {
      type: "info"
    }
  }, [_c("p", {
    staticClass: "public-auth-prompt__description",
    attrs: {
      id: "public-auth-prompt-dialog-description"
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("files_sharing", "To upload files, you need to provide your name first.")) + "\n\t\t")])]), _vm._v(" "), _c("form", {
    ref: "form",
    staticClass: "public-auth-prompt__form",
    attrs: {
      "aria-describedby": "public-auth-prompt-dialog-description"
    },
    on: {
      submit: function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
      }
    }
  }, [_c("NcTextField", {
    ref: "input",
    staticClass: "public-auth-prompt__input",
    attrs: {
      "data-cy-public-auth-prompt-dialog-name": "",
      label: _vm.t("files_sharing", "Enter your name"),
      minlength: 2,
      required: true,
      value: _vm.name,
      name: "name"
    },
    on: {
      "update:value": function ($event) {
        _vm.name = $event;
      }
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=style&index=0&id=4bbba25b&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=style&index=0&id=4bbba25b&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.public-auth-prompt__subtitle {
  font-size: 16px;
  margin-block: 12px;
}
.public-auth-prompt__header {
  margin-block: 12px;
}
.public-auth-prompt__form {
  margin-block: 24px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=style&index=0&id=4bbba25b&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=style&index=0&id=4bbba25b&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicAuthPrompt_vue_vue_type_style_index_0_id_4bbba25b_lang_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PublicAuthPrompt.vue?vue&type=style&index=0&id=4bbba25b&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=style&index=0&id=4bbba25b&lang=scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicAuthPrompt_vue_vue_type_style_index_0_id_4bbba25b_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicAuthPrompt_vue_vue_type_style_index_0_id_4bbba25b_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicAuthPrompt_vue_vue_type_style_index_0_id_4bbba25b_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicAuthPrompt_vue_vue_type_style_index_0_id_4bbba25b_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./apps/files_sharing/src/views/PublicAuthPrompt.vue":
/*!***********************************************************!*\
  !*** ./apps/files_sharing/src/views/PublicAuthPrompt.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PublicAuthPrompt_vue_vue_type_template_id_4bbba25b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PublicAuthPrompt.vue?vue&type=template&id=4bbba25b */ "./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=template&id=4bbba25b");
/* harmony import */ var _PublicAuthPrompt_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublicAuthPrompt.vue?vue&type=script&lang=ts */ "./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=script&lang=ts");
/* harmony import */ var _PublicAuthPrompt_vue_vue_type_style_index_0_id_4bbba25b_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PublicAuthPrompt.vue?vue&type=style&index=0&id=4bbba25b&lang=scss */ "./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=style&index=0&id=4bbba25b&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PublicAuthPrompt_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PublicAuthPrompt_vue_vue_type_template_id_4bbba25b__WEBPACK_IMPORTED_MODULE_0__.render,
  _PublicAuthPrompt_vue_vue_type_template_id_4bbba25b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files_sharing/src/views/PublicAuthPrompt.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=script&lang=ts":
/*!***********************************************************************************!*\
  !*** ./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=script&lang=ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicAuthPrompt_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PublicAuthPrompt.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=script&lang=ts");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicAuthPrompt_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=template&id=4bbba25b":
/*!*****************************************************************************************!*\
  !*** ./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=template&id=4bbba25b ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicAuthPrompt_vue_vue_type_template_id_4bbba25b__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicAuthPrompt_vue_vue_type_template_id_4bbba25b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicAuthPrompt_vue_vue_type_template_id_4bbba25b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PublicAuthPrompt.vue?vue&type=template&id=4bbba25b */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=template&id=4bbba25b");


/***/ }),

/***/ "./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=style&index=0&id=4bbba25b&lang=scss":
/*!********************************************************************************************************!*\
  !*** ./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=style&index=0&id=4bbba25b&lang=scss ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicAuthPrompt_vue_vue_type_style_index_0_id_4bbba25b_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PublicAuthPrompt.vue?vue&type=style&index=0&id=4bbba25b&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/PublicAuthPrompt.vue?vue&type=style&index=0&id=4bbba25b&lang=scss");


/***/ }),

/***/ "../nc-vue/dist/Components/NcTextField.mjs":
/*!*************************************************!*\
  !*** ../nc-vue/dist/Components/NcTextField.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_NcTextField_Cz_7BFoR_mjs__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _chunks_NcTextField_Cz_7BFoR_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/NcTextField-Cz-7BFoR.mjs */ "../nc-vue/dist/chunks/NcTextField-Cz-7BFoR.mjs");




/***/ }),

/***/ "../nc-vue/dist/chunks/ArrowRight-Clf455e1.mjs":
/*!*****************************************************!*\
  !*** ../nc-vue/dist/chunks/ArrowRight-Clf455e1.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowRight)
/* harmony export */ });
/* harmony import */ var _plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-D637Qkok.mjs */ "../nc-vue/dist/chunks/_plugin-vue2_normalizer-D637Qkok.mjs");

const _sfc_main = {
  name: "ArrowRightIcon",
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
  return _c("span", _vm._b({ staticClass: "material-design-icon arrow-right-icon", attrs: { "aria-hidden": _vm.title ? null : true, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
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
const ArrowRight = __component__.exports;



/***/ }),

/***/ "../nc-vue/dist/chunks/Check-PawIlCwa.mjs":
/*!************************************************!*\
  !*** ../nc-vue/dist/chunks/Check-PawIlCwa.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ Check)
/* harmony export */ });
/* harmony import */ var _plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-D637Qkok.mjs */ "../nc-vue/dist/chunks/_plugin-vue2_normalizer-D637Qkok.mjs");

const _sfc_main = {
  name: "CheckIcon",
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
  return _c("span", _vm._b({ staticClass: "material-design-icon check-icon", attrs: { "aria-hidden": _vm.title ? null : true, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
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
const Check = __component__.exports;



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



/***/ })

}]);
//# sourceMappingURL=apps_files_sharing_src_views_PublicAuthPrompt_vue-nc-vue_dist_chunks_Check-PawIlCwa_mjs-apps_files_sharing_src_views_PublicAuthPrompt_vue-nc-vue_dist_chunks_Check-PawIlCwa_mjs.js.map?v=7bfb96f670e9b945279e