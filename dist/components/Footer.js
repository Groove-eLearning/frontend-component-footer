function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform/config';
import { AppContext } from '@edx/frontend-platform/react';
import messages from './Footer.messages';
import LanguageSelector from './LanguageSelector';
ensureConfig(['LOGO_TRADEMARK_URL'], 'Footer component');
var EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link'
};

var SiteFooter = /*#__PURE__*/function (_React$Component) {
  _inherits(SiteFooter, _React$Component);

  var _super = _createSuper(SiteFooter);

  function SiteFooter(props) {
    var _this;

    _classCallCheck(this, SiteFooter);

    _this = _super.call(this, props);
    _this.externalLinkClickHandler = _this.externalLinkClickHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SiteFooter, [{
    key: "getLocalePrefix",
    value: function getLocalePrefix(locale) {
      var twoLetterPrefix = locale.substring(0, 2).toLowerCase();

      if (twoLetterPrefix === 'en') {
        return '';
      }

      return "/".concat(twoLetterPrefix);
    }
  }, {
    key: "externalLinkClickHandler",
    value: function externalLinkClickHandler(event) {
      var label = event.currentTarget.getAttribute('href');
      var eventName = EVENT_NAMES.FOOTER_LINK;
      var properties = {
        category: 'outbound_link',
        label: label
      };
      sendTrackEvent(eventName, properties);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          supportedLanguages = _this$props.supportedLanguages,
          onLanguageSelected = _this$props.onLanguageSelected,
          logo = _this$props.logo,
          intl = _this$props.intl;
      var showLanguageSelector = supportedLanguages.length > 0 && onLanguageSelected;
      var config = this.context.config;
      return /*#__PURE__*/React.createElement("footer", {
        role: "contentinfo",
        className: "footer py-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "container-fluid overflow-hidden"
      }, /*#__PURE__*/React.createElement("div", {
        className: "d-block d-md-flex align-items-center flex-wrap justify-content-between m-n3"
      }, /*#__PURE__*/React.createElement("ul", {
        className: "navigations d-flex align-items-center flex-wrap justify-content-center justify-content-md-start my-n1 mx-n3 p-3 list-unstyled"
      }, /*#__PURE__*/React.createElement("li", {
        className: "py-1 px-3"
      }, /*#__PURE__*/React.createElement(Link, {
        to: "/about"
      }, "About")), /*#__PURE__*/React.createElement("li", {
        className: "py-1 px-3"
      }, /*#__PURE__*/React.createElement(Link, {
        to: "/faq"
      }, "FAQ")), /*#__PURE__*/React.createElement("li", {
        className: "py-1 px-3"
      }, /*#__PURE__*/React.createElement(Link, {
        to: "/contact"
      }, "Contact")), /*#__PURE__*/React.createElement("li", {
        className: "py-1 px-3"
      }, /*#__PURE__*/React.createElement(Link, {
        to: "/term-of-service"
      }, "Terms of Service")), /*#__PURE__*/React.createElement("li", {
        className: "py-1 px-3"
      }, /*#__PURE__*/React.createElement(Link, {
        to: "/privacy-policy"
      }, "Privacy Policy"))), /*#__PURE__*/React.createElement("ul", {
        className: "external-links d-flex align-items-center flex-wrap justify-content-center justify-content-md-end my-n1 mx-n2 p-3 list-unstyled"
      }, showLanguageSelector && /*#__PURE__*/React.createElement("li", {
        className: "py-1 px-2"
      }, /*#__PURE__*/React.createElement(LanguageSelector, {
        options: supportedLanguages,
        onSubmit: onLanguageSelected
      })), /*#__PURE__*/React.createElement("li", {
        className: "py-1 px-2"
      }, /*#__PURE__*/React.createElement("a", {
        className: "d-block",
        rel: "noreferrer",
        target: "_blank",
        href: "https://open.edx.org",
        "aria-label": intl.formatMessage(messages['footer.logo.ariaLabel'])
      }, /*#__PURE__*/React.createElement("img", {
        className: "logo-trade-mark",
        src: logo || config.LOGO_TRADEMARK_URL,
        alt: intl.formatMessage(messages['footer.logo.altText'])
      }))), /*#__PURE__*/React.createElement("li", {
        className: "py-1 px-2"
      }, /*#__PURE__*/React.createElement("a", {
        className: "d-block",
        rel: "noreferrer",
        target: "_blank",
        href: "https://www.facebook.com/groovetechnologycom"
      }, /*#__PURE__*/React.createElement("svg", {
        className: "social-media",
        xmlns: "http://www.w3.org/2000/svg",
        width: "37.444",
        height: "36",
        viewBox: "0 0 37.444 36"
      }, /*#__PURE__*/React.createElement("g", {
        transform: "translate(-1393 -8294)"
      }, /*#__PURE__*/React.createElement("path", {
        "class": "icon-bg",
        d: "M29.767,36,7.3,35.346A7.485,7.485,0,0,1,.033,27.172L1.463,9.478a7.486,7.486,0,0,1,6.5-6.734L25.477.062a7.486,7.486,0,0,1,8.316,6.045l3.521,21.027A7.486,7.486,0,0,1,29.767,36Z",
        transform: "translate(1430.444 8330) rotate(180)"
      }), /*#__PURE__*/React.createElement("path", {
        "class": "icon-content",
        d: "M2286.954,862.208h-2.247v-3.089h2.247v-1.826a5.007,5.007,0,0,1,.772-3.071,3.46,3.46,0,0,1,2.879-1h3.089v3.089h-2.141q-.807,0-1.018.281a1.7,1.7,0,0,0-.21.983v1.545h3.37l-.316,3.089h-3.054v8.987h-3.37Z",
        transform: "translate(-877.478 7449.766)"
      }))))), /*#__PURE__*/React.createElement("li", {
        className: "py-1 px-2"
      }, /*#__PURE__*/React.createElement("a", {
        className: "d-block",
        rel: "noreferrer",
        target: "_blank",
        href: "https://www.linkedin.com/company/groove-technology"
      }, /*#__PURE__*/React.createElement("svg", {
        className: "social-media",
        xmlns: "http://www.w3.org/2000/svg",
        width: "37.444",
        height: "36",
        viewBox: "0 0 37.444 36"
      }, /*#__PURE__*/React.createElement("g", {
        transform: "translate(-1453 -8294)"
      }, /*#__PURE__*/React.createElement("path", {
        "class": "icon-bg",
        d: "M2236.563,1026.046l-22.47-.652a7.485,7.485,0,0,1-7.265-8.173l1.43-17.694a7.486,7.486,0,0,1,6.5-6.734l17.518-2.682a7.487,7.487,0,0,1,8.316,6.045l3.521,21.027A7.486,7.486,0,0,1,2236.563,1026.046Z",
        transform: "translate(-753.797 7303.951)"
      }), /*#__PURE__*/React.createElement("g", {
        transform: "translate(1462.736 8302.986)"
      }, /*#__PURE__*/React.createElement("path", {
        "class": "icon-content",
        d: "M2450.486,1021.085h0V1014.5c0-3.221-.693-5.7-4.459-5.7a3.911,3.911,0,0,0-3.521,1.935h-.055V1009.1h-3.571v11.986h3.718v-5.936c0-1.562.3-3.073,2.231-3.073,1.907,0,1.935,1.783,1.935,3.174v5.835Z",
        transform: "translate(-2432.517 -1003.131)"
      }), /*#__PURE__*/React.createElement("path", {
        "class": "icon-content",
        d: "M2430.8,1009.2h3.722v11.984H2430.8Z",
        transform: "translate(-2430.488 -1003.233)"
      }), /*#__PURE__*/React.createElement("path", {
        "class": "icon-content",
        d: "M2432.559,1001.232a2.166,2.166,0,1,0,2.156,2.176v-.019A2.157,2.157,0,0,0,2432.559,1001.232Z",
        transform: "translate(-2430.382 -1001.232)"
      }))))))))));
    }
  }]);

  return SiteFooter;
}(React.Component);

SiteFooter.contextType = AppContext;
SiteFooter.propTypes = {
  intl: intlShape.isRequired,
  logo: PropTypes.string,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }))
};
SiteFooter.defaultProps = {
  logo: undefined,
  onLanguageSelected: undefined,
  supportedLanguages: []
};
export default injectIntl(SiteFooter);
export { EVENT_NAMES };
//# sourceMappingURL=Footer.js.map