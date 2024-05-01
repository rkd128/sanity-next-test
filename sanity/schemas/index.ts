import project from './schema-project';
import page from './schema-page';
import seo from './seo';
import figure from './figure';
import service from './schema-service';
import heroType from './heroType';
import imageGalleryType from './imageGalleryType';
import textWithIllustrationType from './textWithIllustrationType';
import videoType from './videoType';
import quoteType from './quoteType';
import pageBuilder from './pageBuilder';

const schemas = [
    pageBuilder,
    page, 
    project, 
    seo, 
    figure, 
    service,
    heroType,
    textWithIllustrationType,
    imageGalleryType,
    videoType,
    quoteType,
]

export default schemas