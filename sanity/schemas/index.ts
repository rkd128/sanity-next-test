import project from './project-schema';
import page from './page-schema';
import seo from './seo';
import figure from './figure';
import service from './service-schema';
import heroType from './heroType';
import imageGallery from './imageGallery';
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
    imageGallery,
    videoType,
    quoteType,
]

export default schemas