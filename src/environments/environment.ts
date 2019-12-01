// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
declare var apiConfig: any;
export const environment = {
  production: false,
  apiUrl: 'http://13.234.5.9:8080',
  //uiTemplateBaseUrl: document.getElementsByTagName('base')[0].href + '/resources/static/src/assets',
  baseHref: document.getElementsByTagName('base')[0].href,
  encryptionKey:'',
  cdnURL:'',
  apiGatewayUrl:'http://13.234.5.9:8080/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
