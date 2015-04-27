# Hexo Beautify
[![Build Status](https://travis-ci.org/celsomiranda/hexo-beautify.svg)](https://travis-ci.org/celsomiranda/hexo-beautify)
[![NPM Version](https://badge.fury.io/js/hexo-beautify.svg)](http://badge.fury.io/js/hexo-beautify)
[![NPM Dependencies](https://david-dm.org/celsomiranda/hexo-beautify.svg)](https://www.npmjs.com/package/hexo-beautify)
[![Coverage Status](https://coveralls.io/repos/celsomiranda/hexo-beautify/badge.svg)](https://coveralls.io/r/celsomiranda/hexo-beautify)

A Hexo filter wrapper for `js-beautify`. Supports HTML, CSS and JS files.

## Instalation
To install `hexo-beautify` run:

``` shell
npm install hexo-beautify --save
```

## Configuration
Inside your `_config.yml`:

``` yaml
# Hexo Beautify
beautify:
  types:
    - html
    - css
    - js
  exclude:
    - *.min.css
    - *.min.js
  html:
    'indent_inner_html': false
    'indent_size': 2
    'indent_with_tabs': false
    # (...)
  css:
    'indent_size': 2
    'newline_between_rules': true
    'indent_with_tabs': false
    # (...)
  js:
    'indent_size': 2
    'indent_with_tabs': false
    # (...)
```

You can discover [more options](https://github.com/beautify-web/js-beautify) in the `js-beautify` repo.
