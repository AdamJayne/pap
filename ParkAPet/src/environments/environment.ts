// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDwH8kSn06Sy2qM_hnD6BQ6zIG9to3oheg",
    authDomain: "parkapet-75ae0.firebaseapp.com",
    databaseURL: "https://parkapet-75ae0.firebaseio.com",
    storageBucket: "gs://parkapet-75ae0.appspot.com"
  }
};
