import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FacebookShareButton
} from 'react-share';
import './SharePostFacebook.scss';

library.add(fab, faFacebookF);



const Share = ({ socialConfig, tags }) => (
  <div className="post-social">
    <FacebookShareButton url={socialConfig.siteMetadata.url} className="button is-outlined is-rounded facebook" >
      <span className="icon">
        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
      </span>
      <span className="text">Facebook</span>
    </FacebookShareButton>

  </div>
);

Share.propTypes = {
  socialConfig: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
  tags: [],
};

export default Share;
