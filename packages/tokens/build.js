const BaseStyleDictionary = require('style-dictionary');
const config = require('./config');
const formatSassMixin = require('./formats/scss-mixin');

const StyleDictionary = BaseStyleDictionary.extend(config);

StyleDictionary.registerFormat(formatSassMixin);
StyleDictionary.buildAllPlatforms();
