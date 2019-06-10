import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import HomePagePreview from './preview-templates/HomePagePreview'
import HeaderPreview from './preview-templates/HeaderPreview';
import ServicesPreview from './preview-templates/ServicesPreview';


CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', HomePagePreview)
CMS.registerPreviewTemplate('header', HeaderPreview)
CMS.registerPreviewTemplate('services', ServicesPreview)


