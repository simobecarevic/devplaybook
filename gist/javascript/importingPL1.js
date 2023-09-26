document.getElementById("pl-syn-wn-1").innerHTML += '<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-3c6bff8100e5.css">'
document.getElementById("pl-syn-wn-1").innerHTML += '<div id=\"gist125089711\" class=\"gist\">\n    <div class=\"gist-file\" translate=\"no\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-importing-js\" class=\"file my-2\">\n    \n    <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-javascript  \">\n\n        \n<div class=\"js-check-bidi js-blob-code-container blob-code-content\">\n\n  <template class=\"js-file-alert-template\">\n  <div data-view-component=\"true\" class=\"flash flash-warn flash-full d-flex flex-items-center\">\n  <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path d=\"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z\"><\/path>\n<\/svg>\n    <span>\n      This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.\n      <a class=\"Link--inTextBlock\" href=\"https://github.co/hiddenchars\" target=\"_blank\">Learn more about bidirectional Unicode characters<\/a>\n    <\/span>\n\n\n  <div data-view-component=\"true\" class=\"flash-action\">        <a href=\"{{ revealButtonHref }}\" data-view-component=\"true\" class=\"btn-sm btn\">    Show hidden characters\n<\/a>\n<\/div>\n<\/div><\/template>\n<template class=\"js-line-alert-template\">\n  <span aria-label=\"This line has hidden Unicode characters\" data-view-component=\"true\" class=\"line-alert tooltipped tooltipped-e\">\n    <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path d=\"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z\"><\/path>\n<\/svg>\n<\/span><\/template>\n\n  <table data-hpc class=\"highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file\" data-tab-size=\"8\" data-paste-markdown-skip data-tagsearch-lang=\"JavaScript\" data-tagsearch-path=\"importing.js\">\n        <tr>\n          <td id=\"file-importing-js-L1\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"1\"><\/td>\n          <td id=\"file-importing-js-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>/* Front End JavaScript Importing */<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L2\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"2\"><\/td>\n          <td id=\"file-importing-js-LC2\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L3\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"3\"><\/td>\n          <td id=\"file-importing-js-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// Import individual resources<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L4\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"4\"><\/td>\n          <td id=\"file-importing-js-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>import<\/span> <span class=pl-kos>{<\/span><span class=pl-s1>exportedResourceA<\/span><span class=pl-kos>,<\/span> <span class=pl-s1>exportedResourceB<\/span><span class=pl-kos>}<\/span> <span class=pl-k>from<\/span> <span class=pl-s>&#39;./path/to/module.js&#39;<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L5\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"5\"><\/td>\n          <td id=\"file-importing-js-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// or, avoiding name collisions<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L6\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"6\"><\/td>\n          <td id=\"file-importing-js-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>import<\/span> <span class=pl-kos>{<\/span><span class=pl-s1>method<\/span> <span class=pl-k>as<\/span> <span class=pl-s1>uniqueMdName<\/span><span class=pl-kos>}<\/span> <span class=pl-k>from<\/span> <span class=pl-s>&#39;mdu.js&#39;<\/span><span class=pl-kos>;<\/span> <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L7\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"7\"><\/td>\n          <td id=\"file-importing-js-LC7\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L8\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"8\"><\/td>\n          <td id=\"file-importing-js-LC8\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// Import entire module (default object)<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L9\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"9\"><\/td>\n          <td id=\"file-importing-js-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>import<\/span> <span class=pl-kos>{<\/span> <span class=pl-s1>default<\/span> <span class=pl-k>as<\/span> <span class=pl-s1>importedResources<\/span> <span class=pl-kos>}<\/span> <span class=pl-k>from<\/span> <span class=pl-s>&#39;module.js&#39;<\/span><span class=pl-kos>;<\/span> <span class=pl-c>// variable name is arbitrary<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L10\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"10\"><\/td>\n          <td id=\"file-importing-js-LC10\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// Shorthand version, curly braces dropped <\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L11\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"11\"><\/td>\n          <td id=\"file-importing-js-LC11\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>import<\/span> <span class=pl-s1>importedResources<\/span> <span class=pl-k>from<\/span> <span class=pl-s>&#39;module.js&#39;<\/span><span class=pl-kos>;<\/span> <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L12\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"12\"><\/td>\n          <td id=\"file-importing-js-LC12\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L13\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"13\"><\/td>\n          <td id=\"file-importing-js-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// Import both default object and individual resources<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L14\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"14\"><\/td>\n          <td id=\"file-importing-js-LC14\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>import<\/span> <span class=pl-s1>anyName<\/span><span class=pl-kos>,<\/span> <span class=pl-kos>{<\/span><span class=pl-s1>x<\/span><span class=pl-kos>,<\/span> <span class=pl-s1>y<\/span><span class=pl-kos>,<\/span> <span class=pl-s1>square<\/span><span class=pl-kos>}<\/span> <span class=pl-k>from<\/span> <span class=pl-s>&#39;./module.js&#39;<\/span><span class=pl-kos>;<\/span> <span class=pl-c>// default object can be given any variable name<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L15\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"15\"><\/td>\n          <td id=\"file-importing-js-LC15\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L16\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"16\"><\/td>\n          <td id=\"file-importing-js-LC16\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>/* Back End Node.js JavaScript Importing */<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L17\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"17\"><\/td>\n          <td id=\"file-importing-js-LC17\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// use built-in require function, passing in argument a string of the file path to module<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L18\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"18\"><\/td>\n          <td id=\"file-importing-js-LC18\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L19\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"19\"><\/td>\n          <td id=\"file-importing-js-LC19\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// Import entire module.exports object of a file/module<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L20\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"20\"><\/td>\n          <td id=\"file-importing-js-LC20\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>const<\/span> <span class=pl-s1>converters<\/span> <span class=pl-c1>=<\/span> <span class=pl-en>require<\/span><span class=pl-kos>(<\/span><span class=pl-s>&#39;./converters.js&#39;<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L21\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"21\"><\/td>\n          <td id=\"file-importing-js-LC21\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// Qualify with dot notation to access module resources<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L22\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"22\"><\/td>\n          <td id=\"file-importing-js-LC22\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>const<\/span> <span class=pl-s1>freezingPointF<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>converters<\/span><span class=pl-kos>.<\/span><span class=pl-en>celsiusToFarhenheit<\/span><span class=pl-kos>(<\/span><span class=pl-c1>0<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span> <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L23\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"23\"><\/td>\n          <td id=\"file-importing-js-LC23\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L24\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"24\"><\/td>\n          <td id=\"file-importing-js-LC24\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// Object destructuring shorthand to extract/unpack individual resources<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L25\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"25\"><\/td>\n          <td id=\"file-importing-js-LC25\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>const<\/span> <span class=pl-kos>{<\/span> celsiusToFarhenheit <span class=pl-kos>}<\/span> <span class=pl-c1>=<\/span> <span class=pl-en>require<\/span><span class=pl-kos>(<\/span><span class=pl-s>&#39;./converters.js&#39;<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-importing-js-L26\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"26\"><\/td>\n          <td id=\"file-importing-js-LC26\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>const<\/span> <span class=pl-s1>freezingPointF<\/span> <span class=pl-c1>=<\/span> <span class=pl-en>celsiusToFarhenheit<\/span><span class=pl-kos>(<\/span><span class=pl-s1>celsiusInput<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n  <\/table>\n<\/div>\n\n\n    <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/simobecarevic/c493f3f1ca30d08ec0ff387f4ab334ff/raw/95739b4d09acd2c32aaa4897fed7b34c38f6c2a5/importing.js\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/simobecarevic/c493f3f1ca30d08ec0ff387f4ab334ff#file-importing-js\">\n          importing.js\n        <\/a>\n        hosted with &#10084; by <a class=\"Link--inTextBlock\" href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n'