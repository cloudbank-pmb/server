"use strict";
(self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || []).push([["apps_files_sharing_src_models_Share_js-apps_files_sharing_src_utils_GeneratePassword_ts-node_-80b24f"],{

/***/ "./apps/files_sharing/src/models/Share.js":
/*!************************************************!*\
  !*** ./apps/files_sharing/src/models/Share.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Share)
/* harmony export */ });
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

class Share {
  /**
   * Create the share object
   *
   * @param {object} ocsData ocs request response
   */
  constructor(ocsData) {
    var _ocsData$attributes;
    _defineProperty(this, "_share", void 0);
    if (ocsData.ocs && ocsData.ocs.data && ocsData.ocs.data[0]) {
      ocsData = ocsData.ocs.data[0];
    }

    // convert int into boolean
    ocsData.hide_download = !!ocsData.hide_download;
    ocsData.mail_send = !!ocsData.mail_send;
    if (ocsData.attributes && typeof ocsData.attributes === 'string') {
      try {
        ocsData.attributes = JSON.parse(ocsData.attributes);
      } catch (e) {
        console.warn('Could not parse share attributes returned by server', ocsData.attributes);
      }
    }
    ocsData.attributes = (_ocsData$attributes = ocsData.attributes) !== null && _ocsData$attributes !== void 0 ? _ocsData$attributes : [];

    // store state
    this._share = ocsData;
  }

  /**
   * Get the share state
   * ! used for reactivity purpose
   * Do not remove. It allow vuejs to
   * inject its watchers into the #share
   * state and make the whole class reactive
   *
   * @return {object} the share raw state
   * @readonly
   * @memberof Sidebar
   */
  get state() {
    return this._share;
  }

  /**
   * get the share id
   *
   * @return {number}
   * @readonly
   * @memberof Share
   */
  get id() {
    return this._share.id;
  }

  /**
   * Get the share type
   *
   * @return {number}
   * @readonly
   * @memberof Share
   */
  get type() {
    return this._share.share_type;
  }

  /**
   * Get the share permissions
   * See OC.PERMISSION_* variables
   *
   * @return {number}
   * @readonly
   * @memberof Share
   */
  get permissions() {
    return this._share.permissions;
  }

  /**
   * Get the share attributes
   *
   * @return {Array}
   * @readonly
   * @memberof Share
   */
  get attributes() {
    return this._share.attributes;
  }

  /**
   * Set the share permissions
   * See OC.PERMISSION_* variables
   *
   * @param {number} permissions valid permission, See OC.PERMISSION_* variables
   * @memberof Share
   */
  set permissions(permissions) {
    this._share.permissions = permissions;
  }

  // SHARE OWNER --------------------------------------------------
  /**
   * Get the share owner uid
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */
  get owner() {
    return this._share.uid_owner;
  }

  /**
   * Get the share owner's display name
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */
  get ownerDisplayName() {
    return this._share.displayname_owner;
  }

  // SHARED WITH --------------------------------------------------
  /**
   * Get the share with entity uid
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */
  get shareWith() {
    return this._share.share_with;
  }

  /**
   * Get the share with entity display name
   * fallback to its uid if none
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */
  get shareWithDisplayName() {
    return this._share.share_with_displayname || this._share.share_with;
  }

  /**
   * Unique display name in case of multiple
   * duplicates results with the same name.
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */
  get shareWithDisplayNameUnique() {
    return this._share.share_with_displayname_unique || this._share.share_with;
  }

  /**
   * Get the share with entity link
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */
  get shareWithLink() {
    return this._share.share_with_link;
  }

  /**
   * Get the share with avatar if any
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */
  get shareWithAvatar() {
    return this._share.share_with_avatar;
  }

  // SHARED FILE OR FOLDER OWNER ----------------------------------
  /**
   * Get the shared item owner uid
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */
  get uidFileOwner() {
    return this._share.uid_file_owner;
  }

  /**
   * Get the shared item display name
   * fallback to its uid if none
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */
  get displaynameFileOwner() {
    return this._share.displayname_file_owner || this._share.uid_file_owner;
  }

  // TIME DATA ----------------------------------------------------
  /**
   * Get the share creation timestamp
   *
   * @return {number}
   * @readonly
   * @memberof Share
   */
  get createdTime() {
    return this._share.stime;
  }

  /**
   * Get the expiration date
   *
   * @return {string} date with YYYY-MM-DD format
   * @readonly
   * @memberof Share
   */
  get expireDate() {
    return this._share.expiration;
  }

  /**
   * Set the expiration date
   *
   * @param {string} date the share expiration date with YYYY-MM-DD format
   * @memberof Share
   */
  set expireDate(date) {
    this._share.expiration = date;
  }

  // EXTRA DATA ---------------------------------------------------
  /**
   * Get the public share token
   *
   * @return {string} the token
   * @readonly
   * @memberof Share
   */
  get token() {
    return this._share.token;
  }

  /**
   * Get the share note if any
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */
  get note() {
    return this._share.note;
  }

  /**
   * Set the share note if any
   *
   * @param {string} note the note
   * @memberof Share
   */
  set note(note) {
    this._share.note = note;
  }

  /**
   * Get the share label if any
   * Should only exist on link shares
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */
  get label() {
    var _this$_share$label;
    return (_this$_share$label = this._share.label) !== null && _this$_share$label !== void 0 ? _this$_share$label : '';
  }

  /**
   * Set the share label if any
   * Should only be set on link shares
   *
   * @param {string} label the label
   * @memberof Share
   */
  set label(label) {
    this._share.label = label;
  }

  /**
   * Have a mail been sent
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */
  get mailSend() {
    return this._share.mail_send === true;
  }

  /**
   * Hide the download button on public page
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */
  get hideDownload() {
    return this._share.hide_download === true;
  }

  /**
   * Hide the download button on public page
   *
   * @param {boolean} state hide the button ?
   * @memberof Share
   */
  set hideDownload(state) {
    this._share.hide_download = state === true;
  }

  /**
   * Password protection of the share
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */
  get password() {
    return this._share.password;
  }

  /**
   * Password protection of the share
   *
   * @param {string} password the share password
   * @memberof Share
   */
  set password(password) {
    this._share.password = password;
  }

  /**
   * Password expiration time
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */
  get passwordExpirationTime() {
    return this._share.password_expiration_time;
  }

  /**
   * Password expiration time
   *
   * @param {string} password expiration time
   * @memberof Share
   */
  set passwordExpirationTime(passwordExpirationTime) {
    this._share.password_expiration_time = passwordExpirationTime;
  }

  /**
   * Password protection by Talk of the share
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */
  get sendPasswordByTalk() {
    return this._share.send_password_by_talk;
  }

  /**
   * Password protection by Talk of the share
   *
   * @param {boolean} sendPasswordByTalk whether to send the password by Talk
   *        or not
   * @memberof Share
   */
  set sendPasswordByTalk(sendPasswordByTalk) {
    this._share.send_password_by_talk = sendPasswordByTalk;
  }

  // SHARED ITEM DATA ---------------------------------------------
  /**
   * Get the shared item absolute full path
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */
  get path() {
    return this._share.path;
  }

  /**
   * Return the item type: file or folder
   *
   * @return {string} 'folder' or 'file'
   * @readonly
   * @memberof Share
   */
  get itemType() {
    return this._share.item_type;
  }

  /**
   * Get the shared item mimetype
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */
  get mimetype() {
    return this._share.mimetype;
  }

  /**
   * Get the shared item id
   *
   * @return {number}
   * @readonly
   * @memberof Share
   */
  get fileSource() {
    return this._share.file_source;
  }

  /**
   * Get the target path on the receiving end
   * e.g the file /xxx/aaa will be shared in
   * the receiving root as /aaa, the fileTarget is /aaa
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */
  get fileTarget() {
    return this._share.file_target;
  }

  /**
   * Get the parent folder id if any
   *
   * @return {number}
   * @readonly
   * @memberof Share
   */
  get fileParent() {
    return this._share.file_parent;
  }

  // PERMISSIONS Shortcuts

  /**
   * Does this share have READ permissions
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */
  get hasReadPermission() {
    return !!(this.permissions & OC.PERMISSION_READ);
  }

  /**
   * Does this share have CREATE permissions
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */
  get hasCreatePermission() {
    return !!(this.permissions & OC.PERMISSION_CREATE);
  }

  /**
   * Does this share have DELETE permissions
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */
  get hasDeletePermission() {
    return !!(this.permissions & OC.PERMISSION_DELETE);
  }

  /**
   * Does this share have UPDATE permissions
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */
  get hasUpdatePermission() {
    return !!(this.permissions & OC.PERMISSION_UPDATE);
  }

  /**
   * Does this share have SHARE permissions
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */
  get hasSharePermission() {
    return !!(this.permissions & OC.PERMISSION_SHARE);
  }

  /**
   * Does this share have download permissions
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */
  get hasDownloadPermission() {
    const hasDisabledDownload = attribute => {
      return attribute.scope === 'permissions' && attribute.key === 'download' && attribute.value === false;
    };
    return this.attributes.some(hasDisabledDownload);
  }

  /**
   * Is this mail share a file request ?
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */
  get isFileRequest() {
    const isFileRequest = attribute => {
      return attribute.scope === 'fileRequest' && attribute.key === 'enabled' && attribute.value === true;
    };
    return this.attributes.some(isFileRequest);
  }
  set hasDownloadPermission(enabled) {
    this.setAttribute('permissions', 'download', !!enabled);
  }
  setAttribute(scope, key, value) {
    const attrUpdate = {
      scope,
      key,
      value
    };

    // try and replace existing
    for (const i in this._share.attributes) {
      const attr = this._share.attributes[i];
      if (attr.scope === attrUpdate.scope && attr.key === attrUpdate.key) {
        this._share.attributes.splice(i, 1, attrUpdate);
        return;
      }
    }
    this._share.attributes.push(attrUpdate);
  }

  // PERMISSIONS Shortcuts for the CURRENT USER
  // ! the permissions above are the share settings,
  // ! meaning the permissions for the recipient
  /**
   * Can the current user EDIT this share ?
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */
  get canEdit() {
    return this._share.can_edit === true;
  }

  /**
   * Can the current user DELETE this share ?
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */
  get canDelete() {
    return this._share.can_delete === true;
  }

  /**
   * Top level accessible shared folder fileid for the current user
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */
  get viaFileid() {
    return this._share.via_fileid;
  }

  /**
   * Top level accessible shared folder path for the current user
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */
  get viaPath() {
    return this._share.via_path;
  }

  // TODO: SORT THOSE PROPERTIES

  get parent() {
    return this._share.parent;
  }
  get storageId() {
    return this._share.storage_id;
  }
  get storage() {
    return this._share.storage;
  }
  get itemSource() {
    return this._share.item_source;
  }
  get status() {
    return this._share.status;
  }
}

/***/ }),

/***/ "./apps/files_sharing/src/utils/GeneratePassword.ts":
/*!**********************************************************!*\
  !*** ./apps/files_sharing/src/utils/GeneratePassword.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _services_ConfigService_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ConfigService.ts */ "./apps/files_sharing/src/services/ConfigService.ts");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */




const config = new _services_ConfigService_ts__WEBPACK_IMPORTED_MODULE_1__["default"]();
// note: some chars removed on purpose to make them human friendly when read out
const passwordSet = 'abcdefgijkmnopqrstwxyzABCDEFGHJKLMNPQRSTWXYZ23456789';
/**
 * Generate a valid policy password or
 * request a valid password if password_policy
 * is enabled
 */
/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__() {
  let verbose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  // password policy is enabled, let's request a pass
  if (config.passwordPolicy.api && config.passwordPolicy.api.generate) {
    try {
      const request = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(config.passwordPolicy.api.generate);
      if (request.data.ocs.data.password) {
        if (verbose) {
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showSuccess)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('files_sharing', 'Password created successfully'));
        }
        return request.data.ocs.data.password;
      }
    } catch (error) {
      console.info('Error generating password from password_policy', error);
      if (verbose) {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('files_sharing', 'Error generating password from password policy'));
      }
    }
  }
  const array = new Uint8Array(10);
  const ratio = passwordSet.length / 255;
  self.crypto.getRandomValues(array);
  let password = '';
  for (let i = 0; i < array.length; i++) {
    password += passwordSet.charAt(array[i] * ratio);
  }
  return password;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!../nc-vue/dist/assets/NcLoadingIcon-BSONDy7x.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nc-vue/dist/assets/NcLoadingIcon-BSONDy7x.css ***!
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
.material-design-icon[data-v-551209a3] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.loading-icon svg[data-v-551209a3] {
  animation: rotate var(--animation-duration, 0.8s) linear infinite;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../nc-vue/dist/assets/NcLoadingIcon-BSONDy7x.css":
/*!********************************************************!*\
  !*** ../nc-vue/dist/assets/NcLoadingIcon-BSONDy7x.css ***!
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
/* harmony import */ var _server_node_modules_css_loader_dist_cjs_js_NcLoadingIcon_BSONDy7x_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../server/node_modules/css-loader/dist/cjs.js!./NcLoadingIcon-BSONDy7x.css */ "./node_modules/css-loader/dist/cjs.js!../nc-vue/dist/assets/NcLoadingIcon-BSONDy7x.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_server_node_modules_css_loader_dist_cjs_js_NcLoadingIcon_BSONDy7x_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_server_node_modules_css_loader_dist_cjs_js_NcLoadingIcon_BSONDy7x_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _server_node_modules_css_loader_dist_cjs_js_NcLoadingIcon_BSONDy7x_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _server_node_modules_css_loader_dist_cjs_js_NcLoadingIcon_BSONDy7x_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/vue-material-design-icons/Lock.vue":
/*!*********************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Lock.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Lock_vue_vue_type_template_id_0e7c8452__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lock.vue?vue&type=template&id=0e7c8452 */ "./node_modules/vue-material-design-icons/Lock.vue?vue&type=template&id=0e7c8452");
/* harmony import */ var _Lock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lock.vue?vue&type=script&lang=js */ "./node_modules/vue-material-design-icons/Lock.vue?vue&type=script&lang=js");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Lock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Lock_vue_vue_type_template_id_0e7c8452__WEBPACK_IMPORTED_MODULE_0__.render,
  _Lock_vue_vue_type_template_id_0e7c8452__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/Lock.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Lock.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Lock.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LockIcon",
  emits: ['click'],
  props: {
    title: {
      type: String,
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
});


/***/ }),

/***/ "./node_modules/vue-material-design-icons/Lock.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Lock.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_Lock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./Lock.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Lock.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_Lock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/Lock.vue?vue&type=template&id=0e7c8452":
/*!***************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Lock.vue?vue&type=template&id=0e7c8452 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Lock_vue_vue_type_template_id_0e7c8452__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Lock_vue_vue_type_template_id_0e7c8452__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Lock_vue_vue_type_template_id_0e7c8452__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./Lock.vue?vue&type=template&id=0e7c8452 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Lock.vue?vue&type=template&id=0e7c8452");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Lock.vue?vue&type=template&id=0e7c8452":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Lock.vue?vue&type=template&id=0e7c8452 ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "span",
    _vm._b(
      {
        staticClass: "material-design-icon lock-icon",
        attrs: {
          "aria-hidden": _vm.title ? null : true,
          "aria-label": _vm.title,
          role: "img",
        },
        on: {
          click: function ($event) {
            return _vm.$emit("click", $event)
          },
        },
      },
      "span",
      _vm.$attrs,
      false
    ),
    [
      _c(
        "svg",
        {
          staticClass: "material-design-icon__svg",
          attrs: {
            fill: _vm.fillColor,
            width: _vm.size,
            height: _vm.size,
            viewBox: "0 0 24 24",
          },
        },
        [
          _c(
            "path",
            {
              attrs: {
                d: "M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z",
              },
            },
            [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../nc-vue/dist/Components/NcAvatar.mjs":
/*!**********************************************!*\
  !*** ../nc-vue/dist/Components/NcAvatar.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_NcAvatar_BlmojhP0_mjs__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _chunks_NcAvatar_BlmojhP0_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/NcAvatar-BlmojhP0.mjs */ "../nc-vue/dist/chunks/NcAvatar-BlmojhP0.mjs");




/***/ }),

/***/ "../nc-vue/dist/Components/NcCheckboxRadioSwitch.mjs":
/*!***********************************************************!*\
  !*** ../nc-vue/dist/Components/NcCheckboxRadioSwitch.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_NcCheckboxRadioSwitch_CoScyICz_mjs__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _chunks_NcCheckboxRadioSwitch_CoScyICz_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/NcCheckboxRadioSwitch-CoScyICz.mjs */ "../nc-vue/dist/chunks/NcCheckboxRadioSwitch-CoScyICz.mjs");




/***/ }),

/***/ "../nc-vue/dist/Components/NcLoadingIcon.mjs":
/*!***************************************************!*\
  !*** ../nc-vue/dist/Components/NcLoadingIcon.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NcLoadingIcon)
/* harmony export */ });
/* harmony import */ var _assets_NcLoadingIcon_BSONDy7x_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcLoadingIcon-BSONDy7x.css */ "../nc-vue/dist/assets/NcLoadingIcon-BSONDy7x.css");
/* harmony import */ var _chunks_plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/_plugin-vue2_normalizer-D637Qkok.mjs */ "../nc-vue/dist/chunks/_plugin-vue2_normalizer-D637Qkok.mjs");


const _sfc_main = {
  name: "NcLoadingIcon",
  props: {
    /**
     * Specify the size of the loading icon.
     */
    size: {
      type: Number,
      default: 20
    },
    /**
     * The appearance of the loading icon.
     * 'auto' adjusts to the Nextcloud color scheme,
     * 'light' and 'dark' are static.
     */
    appearance: {
      type: String,
      validator(value) {
        return ["auto", "light", "dark"].includes(value);
      },
      default: "auto"
    },
    /**
     * Specify what is loading.
     */
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    colors() {
      const colors = ["#777", "#CCC"];
      if (this.appearance === "light") {
        return colors;
      } else if (this.appearance === "dark") {
        return colors.reverse();
      }
      return ["var(--color-loading-light)", "var(--color-loading-dark)"];
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", { staticClass: "material-design-icon loading-icon", attrs: { "aria-label": _vm.name, "role": "img" } }, [_c("svg", { attrs: { "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "fill": _vm.colors[0], "d": "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z" } }), _c("path", { attrs: { "fill": _vm.colors[1], "d": "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z" } }, [_vm.name ? _c("title", [_vm._v(_vm._s(_vm.name))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "551209a3",
  null,
  null
);
const NcLoadingIcon = __component__.exports;



/***/ }),

/***/ "../nc-vue/dist/Components/NcPasswordField.mjs":
/*!*****************************************************!*\
  !*** ../nc-vue/dist/Components/NcPasswordField.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_NcPasswordField_CyGHMIpL_mjs__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _chunks_NcPasswordField_CyGHMIpL_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/NcPasswordField-CyGHMIpL.mjs */ "../nc-vue/dist/chunks/NcPasswordField-CyGHMIpL.mjs");




/***/ }),

/***/ "../nc-vue/dist/Composables/useIsMobile.mjs":
/*!**************************************************!*\
  !*** ../nc-vue/dist/Composables/useIsMobile.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MOBILE_BREAKPOINT: () => (/* binding */ MOBILE_BREAKPOINT),
/* harmony export */   MOBILE_SMALL_BREAKPOINT: () => (/* binding */ MOBILE_SMALL_BREAKPOINT),
/* harmony export */   isMobileState: () => (/* binding */ isMobileState),
/* harmony export */   useIsMobile: () => (/* binding */ useIsMobile),
/* harmony export */   useIsSmallMobile: () => (/* binding */ useIsSmallMobile)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");

const MOBILE_BREAKPOINT = 1024;
const MOBILE_SMALL_BREAKPOINT = MOBILE_BREAKPOINT / 2;
const isLessThanBreakpoint = (breakpoint) => document.documentElement.clientWidth < breakpoint;
const isMobile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(isLessThanBreakpoint(MOBILE_BREAKPOINT));
const isSmallMobile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(isLessThanBreakpoint(MOBILE_SMALL_BREAKPOINT));
window.addEventListener("resize", () => {
  isMobile.value = isLessThanBreakpoint(MOBILE_BREAKPOINT);
  isSmallMobile.value = isLessThanBreakpoint(MOBILE_SMALL_BREAKPOINT);
}, { passive: true });
function useIsMobile() {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.readonly)(isMobile);
}
function useIsSmallMobile() {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.readonly)(isSmallMobile);
}
const isMobileState = (0,vue__WEBPACK_IMPORTED_MODULE_0__.readonly)(isMobile);



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

/***/ "../nc-vue/dist/chunks/NcPasswordField-CyGHMIpL.mjs":
/*!**********************************************************!*\
  !*** ../nc-vue/dist/chunks/NcPasswordField-CyGHMIpL.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcPasswordField)
/* harmony export */ });
/* harmony import */ var _plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-D637Qkok.mjs */ "../nc-vue/dist/chunks/_plugin-vue2_normalizer-D637Qkok.mjs");
/* harmony import */ var _Components_NcInputField_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/NcInputField.mjs */ "../nc-vue/dist/Components/NcInputField.mjs");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! debounce */ "../nc-vue/node_modules/debounce/index.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/axios */ "../nc-vue/node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/initial-state */ "../nc-vue/node_modules/@nextcloud/initial-state/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/router */ "../nc-vue/node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_l10n-RVLriO4S.mjs */ "../nc-vue/dist/chunks/_l10n-RVLriO4S.mjs");
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/logger */ "../nc-vue/node_modules/@nextcloud/logger/dist/index.mjs");








const _sfc_main$2 = {
  name: "EyeIcon",
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
  return _c("span", _vm._b({ staticClass: "material-design-icon eye-icon", attrs: { "aria-hidden": _vm.title ? null : true, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$2 = [];
var __component__$2 = /* @__PURE__ */ (0,_plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(
  _sfc_main$2,
  _sfc_render$2,
  _sfc_staticRenderFns$2,
  false,
  null,
  null,
  null,
  null
);
const Eye = __component__$2.exports;
const _sfc_main$1 = {
  name: "EyeOffIcon",
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
  return _c("span", _vm._b({ staticClass: "material-design-icon eye-off-icon", attrs: { "aria-hidden": _vm.title ? null : true, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ (0,_plugin_vue2_normalizer_D637Qkok_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  null,
  null,
  null
);
const EyeOff = __component__$1.exports;
(0,_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_5__.r)(_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_5__.y);
const logger = (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_6__.getLoggerBuilder)().detectUser().setApp("@nextcloud/vue").build();
const passwordPolicy = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_3__.loadState)("core", "capabilities", {}).password_policy || null;
const NcInputFieldProps = new Set(Object.keys(_Components_NcInputField_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].props));
const _sfc_main = {
  name: "NcPasswordField",
  components: {
    NcInputField: _Components_NcInputField_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
    Eye,
    EyeOff
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
    ..._Components_NcInputField_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].props,
    // Redefined props
    /**
     * Controls whether to display the trailing button.
     */
    showTrailingButton: {
      type: Boolean,
      default: true
    },
    // Removed NcInputField props, defined only by this component
    trailingButtonLabel: void 0,
    // Custom props
    /**
     * Check if the user entered a valid password using the password_policy
     * app if available.
     *
     * Warning: this doesn't replace server side checking and will do nothing
     * if the password_policy app is disabled.
     */
    checkPasswordStrength: {
      type: Boolean,
      default: false
    },
    /**
     * The minlength property defines the minimum number of characters
     * (as UTF-16 code units) the user can enter
     */
    minlength: {
      type: Number,
      default: 0
    },
    /**
     * The maxlength property defines the maximum number of characters
     * (as UTF-16 code units) the user can enter
     */
    maxlength: {
      type: Number,
      default: null
    }
  },
  emits: [
    "valid",
    "invalid",
    "update:value"
  ],
  data() {
    return {
      isPasswordHidden: true,
      internalHelpMessage: "",
      isValid: null
    };
  },
  computed: {
    computedError() {
      return this.error || this.isValid === false;
    },
    computedSuccess() {
      return this.success || this.isValid === true;
    },
    computedHelperText() {
      if (this.helperText.length > 0) {
        return this.helperText;
      }
      return this.internalHelpMessage;
    },
    rules() {
      const { minlength } = this;
      return {
        minlength: minlength != null ? minlength : passwordPolicy == null ? void 0 : passwordPolicy.minLength
      };
    },
    trailingButtonLabelPassword() {
      return this.isPasswordHidden ? (0,_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_5__.a)("Show password") : (0,_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_5__.a)("Hide password");
    },
    propsAndAttrsToForward() {
      return {
        // Proxy all the HTML attributes
        ...this.$attrs,
        // Proxy original NcInputField's props
        ...Object.fromEntries(
          Object.entries(this.$props).filter(([key]) => NcInputFieldProps.has(key))
        )
      };
    }
  },
  watch: {
    value(newValue) {
      if (this.checkPasswordStrength) {
        if (passwordPolicy === null) {
          return;
        }
        this.checkPassword(newValue);
      }
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
    },
    togglePasswordVisibility() {
      this.isPasswordHidden = !this.isPasswordHidden;
    },
    checkPassword: debounce__WEBPACK_IMPORTED_MODULE_7__(async function(password) {
      try {
        const { data } = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_4__.generateOcsUrl)("apps/password_policy/api/v1/validate"), { password });
        this.isValid = data.ocs.data.passed;
        if (data.ocs.data.passed) {
          this.internalHelpMessage = (0,_l10n_RVLriO4S_mjs__WEBPACK_IMPORTED_MODULE_5__.a)("Password is secure");
          this.$emit("valid");
          return;
        }
        this.internalHelpMessage = data.ocs.data.reason;
        this.$emit("invalid");
      } catch (e) {
        logger.error("Password policy returned an error", e);
      }
    }, 500)
  }
};
var _sfc_render = function render3() {
  var _vm = this, _c = _vm._self._c;
  return _c("NcInputField", _vm._g(_vm._b({ ref: "inputField", attrs: { "type": _vm.isPasswordHidden ? "password" : "text", "trailing-button-label": _vm.trailingButtonLabelPassword, "helper-text": _vm.computedHelperText, "error": _vm.computedError, "success": _vm.computedSuccess, "minlength": _vm.rules.minlength }, on: { "trailing-button-click": _vm.togglePasswordVisibility, "input": _vm.handleInput }, scopedSlots: _vm._u([{ key: "trailing-button-icon", fn: function() {
    return [_vm.isPasswordHidden ? _c("Eye", { attrs: { "size": 18 } }) : _c("EyeOff", { attrs: { "size": 18 } })];
  }, proxy: true }]) }, "NcInputField", _vm.propsAndAttrsToForward, false), _vm.$listeners), [_vm._t("default")], 2);
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
const NcPasswordField = __component__.exports;



/***/ })

}]);
//# sourceMappingURL=apps_files_sharing_src_models_Share_js-apps_files_sharing_src_utils_GeneratePassword_ts-node_-80b24f-apps_files_sharing_src_models_Share_js-apps_files_sharing_src_utils_GeneratePassword_ts-node_-80b24f.js.map?v=4d61d59302a025d08b7c