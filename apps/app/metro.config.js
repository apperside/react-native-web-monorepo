/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
const getWorkspaces = require('get-yarn-workspaces');
const blacklist = require("metro-config/src/defaults/blacklist");
const workspaces = getWorkspaces(__dirname);

const watchFolders = [
  path.resolve(__dirname, "..", "..", "node_modules"),
  ...workspaces.filter((workspaceDir) => !(workspaceDir === __dirname))
];

module.exports = {
  watchFolders,
  blacklistRE: blacklist([
    // Ignore other resolved react-native installations outside of
    // myapp-native - this prevents a module naming collision when mapped.
    /^((?!TaxyApp).)+[\/\\]node_modules[/\\]react-native[/\\].*/,

    // Ignore react-native-svg dependency in myapp-ui, mapped below.
    // react-native-svg must only be included once due to a side-effect. It
    // has not been hoisted as it requires native module linking here.
    // http://bit.ly/2LJ7V4b
    // /myapp-ui[\/\\]node_modules[/\\]react-native-svg[/\\].*/,
  ]),
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  }
};
