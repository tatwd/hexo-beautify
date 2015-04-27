'use strict';
var fs = require('fs');
var ctx = {
  config: {
    beautify: {
      exclude: [],
      types: ['html', 'css', 'js'],
      html: {
        'indent_inner_html': false,
        'indent_size': 2,
        'indent_char': ' ',
        'brace_style': 'collapse',
        'indent_scripts': 'normal',
        'wrap_line_length': 80,
        'wrap_attributes': 'auto',
        'wrap_attributes_indent_size': 80,
        'preserve_newlines': true,
        'max_preserve_newlines': 1,
        'unformatted': [],
        'end_with_newline': true,
        'extra_liners': true
      },
      css: {
        'indent_size': 2,
        'indent_char': ' ',
        'selector_separator_newline': false,
        'newline_between_rules': true,
        'end_with_newline': true
      },
      js: {
        'indent_size': 2,
        'indent_char': ' ',
        'eol': '\n',
        'indent_level': 0,
        'indent_with_tabs': false,
        'preserve_newlines': true,
        'max_preserve_newlines': 1,
        'jslint_happy': true,
        'space_after_anon_function': true,
        'brace_style': 'collapse',
        'keep_array_indentation': true,
        'keep_function_indentation': false,
        'space_before_conditional': true,
        'break_chained_methods': false,
        'eval_code': false,
        'unescape_strings': false,
        'wrap_line_length': 80,
        'wrap_attributes': 'auto',
        'wrap_attributes_indent_size': 2,
        'end_with_newline': true
      }
    }
  }
};

var chai = require('chai');
var should = chai.should();

var htmlSource = fs.readFileSync('./test/fixtures/html/html_source.html', 'utf8');
var htmlResult = fs.readFileSync('./test/fixtures/html/html_result.html', 'utf8');

var cssSource = fs.readFileSync('./test/fixtures/css/css_source.css', 'utf8');
var cssResult = fs.readFileSync('./test/fixtures/css/css_result.css', 'utf8');

var jsSource = fs.readFileSync('./test/fixtures/js/js_source.js', 'utf8');
var jsResult = fs.readFileSync('./test/fixtures/js/js_result.js', 'utf8');

describe('Hexo Beautify', function () {
  it('should filter HTML, CSS and JS files', function () {

    var filterHtml = require('../lib/filter_html')
      .bind(ctx);
    var filterCss = require('../lib/filter_css')
      .bind(ctx);
    var filterJs = require('../lib/filter_js')
      .bind(ctx);

    var resultHtml = filterHtml(htmlSource, {
      path: './test/fixtures/html/html_source.html'
    });
    var resultCss = filterCss(cssSource, {
      path: './test/fixtures/html/css_source.html'
    });
    var resultJs = filterJs(jsSource, {
      path: './test/fixtures/html/js_source.html'
    });

    resultHtml.should.equal(htmlResult);
    resultCss.should.equal(cssResult);
    resultJs.should.equal(jsResult);
  });

  it('should filter without options', function () {

    var ctxEmpty = {config:{}};

    var filterHtml = require('../lib/filter_html')
      .bind(ctxEmpty);
    var filterCss = require('../lib/filter_css')
      .bind(ctxEmpty);
    var filterJs = require('../lib/filter_js')
      .bind(ctxEmpty);

    var resultHtml = filterHtml(htmlSource, {
      path: './test/fixtures/html/html_source.html'
    });
    var resultCss = filterCss(cssSource, {
      path: './test/fixtures/html/css_source.html'
    });
    var resultJs = filterJs(jsSource, {
      path: './test/fixtures/html/js_source.html'
    });

    resultHtml.should.equal(htmlResult);
    resultCss.should.equal(cssResult.trim());
    resultJs.should.equal(jsResult);
  });

  it('should ignore file types not provided', function () {

    ctx.config.beautify.types = [];

    var filterHtml = require('../lib/filter_html')
      .bind(ctx);
    var filterCss = require('../lib/filter_css')
      .bind(ctx);
    var filterJs = require('../lib/filter_js')
      .bind(ctx);

    var resIgnoreHtml = filterHtml(htmlSource, {
      path: './test/fixtures/html/html_source.html'
    });
    var resIgnoreCss = filterCss(cssSource, {
      path: './test/fixtures/html/css_source.html'
    });
    var resIgnoreJs = filterJs(jsSource, {
      path: './test/fixtures/html/js_source.html'
    });

    ctx.config.beautify.types = ['html', 'css', 'js'];

    resIgnoreHtml.should.equal(htmlSource);
    resIgnoreCss.should.equal(cssSource);
    resIgnoreJs.should.equal(jsSource);
  });

});
