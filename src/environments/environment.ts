/* tslint:disable */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { SpotifyAPIKey } from './spotifyApiKey';

export const environment = {
  production: true,

  // Here's our Spotify API token you can use for testing. Acquiring one of these tokens
  // is beyond the scope of this book. See spotify's developer docs for details
  // See the scripts/spotifyKey.js script for updating this file
  spotifyApiKey: SpotifyAPIKey
};
