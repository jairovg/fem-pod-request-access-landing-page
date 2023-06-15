import { throwSizeError } from './_utils.mjs';

const BASE_FONT_SIZE = 16;
const CATEGORY = 'text';
const PATHS = ['height', 'size', 'space'];
const UNIT = 'rem';

export default {
  name: 'size/pxToRem',
  type: 'value',
  // only transforms that have transitive: true will be applied to tokens
  // that alias/reference other tokens
  transitive: true,
  matcher: (token) =>
    token.attributes.category === CATEGORY &&
    PATHS.includes(token.path[token.path.length - 1]),
  transformer(token) {
    const { value, path = [] } = token;

    const floatVal = parseFloat(token.value);

    if (isNaN(floatVal)) {
      throwSizeError(token.name, token.value, UNIT);
    }

    if (floatVal === 0) {
      return '0';
    }

    return `${floatVal / BASE_FONT_SIZE}${UNIT}`;

    return value;
  },
};
