// client/metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const exclusionList = require("metro-config/src/defaults/exclusionList");
const path = require("path");

const projectRoot = __dirname;
const config = getDefaultConfig(projectRoot);

// Block any files under your global Expo CLI install
config.resolver.blockList = exclusionList([
  // properly escape both / and \ on Windows paths
  /.*[\/\\]AppData[\/\\]Roaming[\/\\]npm[\/\\]node_modules[\/\\]expo[\/\\]node_modules[\/\\].*/,
]);

// Only watch your project folder
config.watchFolders = [path.resolve(projectRoot)];

module.exports = config;
