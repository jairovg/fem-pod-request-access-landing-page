const BaseStyleDictionary = require('style-dictionary');
const config = require('./config');

const StyleDictionary = BaseStyleDictionary.extend(config);

StyleDictionary.buildAllPlatforms();
