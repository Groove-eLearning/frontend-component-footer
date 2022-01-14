import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform/config';
import { AppContext } from '@edx/frontend-platform/react';


import messages from './Footer.messages';
import LanguageSelector from './LanguageSelector';

ensureConfig([
  'LOGO_TRADEMARK_URL',
], 'Footer component');

const EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link',
};

class SiteFooter extends React.Component {
  constructor(props) {
    super(props);
    this.externalLinkClickHandler = this.externalLinkClickHandler.bind(this);
  }

  getLocalePrefix(locale) {
    const twoLetterPrefix = locale.substring(0, 2).toLowerCase();
    if (twoLetterPrefix === 'en') {
      return '';
    }
    return `/${twoLetterPrefix}`;
  }

  externalLinkClickHandler(event) {
    const label = event.currentTarget.getAttribute('href');
    const eventName = EVENT_NAMES.FOOTER_LINK;
    const properties = {
      category: 'outbound_link',
      label,
    };
    sendTrackEvent(eventName, properties);
  }

  render() {
    const {
      supportedLanguages,
      onLanguageSelected,
      logo,
      intl,
    } = this.props;
    const showLanguageSelector = supportedLanguages.length > 0 && onLanguageSelected;
    const { config } = this.context;

    return (
      <footer
        role="contentinfo"
        className="footer d-flex border-top py-3 overflow-hidden"
      >
        <div className="container-fluid">
          <div className="d-block d-md-flex align-items-center flex-wrap justify-content-between m-n3">
            <ul className="navigations d-flex align-items-center flex-wrap justify-content-center justify-content-md-start my-n1 mx-n3 p-3 list-unstyled">
              <li className="py-1 px-3"><Link to="/about">About</Link></li>
              <li className="py-1 px-3"><Link to="/faq">FAQ</Link></li>
              <li className="py-1 px-3"><Link to="/contact">Contact</Link></li>
              <li className="py-1 px-3"><Link to="/term-of-service">Terms of Service</Link></li>
              <li className="py-1 px-3"><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
            <ul className="external-links d-flex align-items-center flex-wrap justify-content-center justify-content-md-end my-n1 mx-n2 p-3 list-unstyled">
              {showLanguageSelector && (
                <li className="py-1 px-2">
                  <LanguageSelector
                    options={supportedLanguages}
                    onSubmit={onLanguageSelected}
                  />
                </li>
              )}
              <li className="py-1 px-2">
                <a className="d-block" rel="noreferrer" target="_blank" href="https://open.edx.org" aria-label={intl.formatMessage(messages['footer.logo.ariaLabel'])}>
                  <img className="logo-trade-mark" src={logo || config.LOGO_TRADEMARK_URL} alt={intl.formatMessage(messages['footer.logo.altText'])}/>
                </a>
              </li>
              <li className="py-1 px-2">
                <a className="d-block" rel="noreferrer" target="_blank" href="https://www.facebook.com/groovetechnologycom">
                  <svg className="social-media" xmlns="http://www.w3.org/2000/svg" width="37.444" height="36" viewBox="0 0 37.444 36">
                    <g transform="translate(-1393 -8294)">
                      <path class="icon-bg" d="M29.767,36,7.3,35.346A7.485,7.485,0,0,1,.033,27.172L1.463,9.478a7.486,7.486,0,0,1,6.5-6.734L25.477.062a7.486,7.486,0,0,1,8.316,6.045l3.521,21.027A7.486,7.486,0,0,1,29.767,36Z" transform="translate(1430.444 8330) rotate(180)"></path>
                      <path class="icon-content" d="M2286.954,862.208h-2.247v-3.089h2.247v-1.826a5.007,5.007,0,0,1,.772-3.071,3.46,3.46,0,0,1,2.879-1h3.089v3.089h-2.141q-.807,0-1.018.281a1.7,1.7,0,0,0-.21.983v1.545h3.37l-.316,3.089h-3.054v8.987h-3.37Z" transform="translate(-877.478 7449.766)"></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li className="py-1 px-2">
                <a className="d-block" rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/groove-technology">
                  <svg className="social-media" xmlns="http://www.w3.org/2000/svg" width="37.444" height="36" viewBox="0 0 37.444 36">
                    <g transform="translate(-1453 -8294)">
                      <path class="icon-bg" d="M2236.563,1026.046l-22.47-.652a7.485,7.485,0,0,1-7.265-8.173l1.43-17.694a7.486,7.486,0,0,1,6.5-6.734l17.518-2.682a7.487,7.487,0,0,1,8.316,6.045l3.521,21.027A7.486,7.486,0,0,1,2236.563,1026.046Z" transform="translate(-753.797 7303.951)"></path>
                      <g transform="translate(1462.736 8302.986)">
                        <path class="icon-content" d="M2450.486,1021.085h0V1014.5c0-3.221-.693-5.7-4.459-5.7a3.911,3.911,0,0,0-3.521,1.935h-.055V1009.1h-3.571v11.986h3.718v-5.936c0-1.562.3-3.073,2.231-3.073,1.907,0,1.935,1.783,1.935,3.174v5.835Z" transform="translate(-2432.517 -1003.131)"></path>
                        <path class="icon-content" d="M2430.8,1009.2h3.722v11.984H2430.8Z" transform="translate(-2430.488 -1003.233)"></path>
                        <path class="icon-content" d="M2432.559,1001.232a2.166,2.166,0,1,0,2.156,2.176v-.019A2.157,2.157,0,0,0,2432.559,1001.232Z" transform="translate(-2430.382 -1001.232)"></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

SiteFooter.contextType = AppContext;

SiteFooter.propTypes = {
  intl: intlShape.isRequired,
  logo: PropTypes.string,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

SiteFooter.defaultProps = {
  logo: undefined,
  onLanguageSelected: undefined,
  supportedLanguages: [],
};

export default injectIntl(SiteFooter);
export { EVENT_NAMES };
