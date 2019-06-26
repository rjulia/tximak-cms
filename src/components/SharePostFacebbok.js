import React from 'react';

import { FacebookProvider, Share } from 'react-facebook';

const SharePostFacebook = ({ url }) => {

  return (
    <FacebookProvider appId="461810257965104">
      <Share href={url}>
        {({ handleClick, loading }) => {
          console.log(loading)
          return <button type="button" disabled="loading" onClick={handleClick}>Share</button>
        }}
      </Share>
    </FacebookProvider>
  );

}

export default SharePostFacebook
