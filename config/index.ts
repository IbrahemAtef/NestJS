import development from './config.development';
import production from './config.production';
// import {
//   DEVELOPMENT,
//   PRODUCTION,
// } from '../src/common/constants/config.constants';

let configiration : any

  switch (process.env.NODE_ENV) {
    case 'development':
      configiration = development;
    case 'production':
      configiration = production;
    default:
      configiration = development;
  }

export default configiration;
