document.getElementById("pl-syn-wn-2").innerHTML += '<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-3c6bff8100e5.css">'
document.getElementById("pl-syn-wn-2").innerHTML += '<div id=\"gist125092525\" class=\"gist\">\n    <div class=\"gist-file\" translate=\"no\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-error_handling-js\" class=\"file my-2\">\n    \n    <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-javascript  \">\n\n        \n<div class=\"js-check-bidi js-blob-code-container blob-code-content\">\n\n  <template class=\"js-file-alert-template\">\n  <div data-view-component=\"true\" class=\"flash flash-warn flash-full d-flex flex-items-center\">\n  <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path d=\"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z\"><\/path>\n<\/svg>\n    <span>\n      This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.\n      <a class=\"Link--inTextBlock\" href=\"https://github.co/hiddenchars\" target=\"_blank\">Learn more about bidirectional Unicode characters<\/a>\n    <\/span>\n\n\n  <div data-view-component=\"true\" class=\"flash-action\">        <a href=\"{{ revealButtonHref }}\" data-view-component=\"true\" class=\"btn-sm btn\">    Show hidden characters\n<\/a>\n<\/div>\n<\/div><\/template>\n<template class=\"js-line-alert-template\">\n  <span aria-label=\"This line has hidden Unicode characters\" data-view-component=\"true\" class=\"line-alert tooltipped tooltipped-e\">\n    <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path d=\"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z\"><\/path>\n<\/svg>\n<\/span><\/template>\n\n  <table data-hpc class=\"highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file\" data-tab-size=\"8\" data-paste-markdown-skip data-tagsearch-lang=\"JavaScript\" data-tagsearch-path=\"error_handling.js\">\n        <tr>\n          <td id=\"file-error_handling-js-L1\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"1\"><\/td>\n          <td id=\"file-error_handling-js-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// JavaScript try ... catch statement: anticipate and handle thrown errors (both built-in errors as well as those constructed with Error() ) while allowing a program to continue running. Code that may throw an error(s) when executed is written within the try block, and actions for handling these errors are written within the catch block. The optional finally statement defines a code block to run regardless of the result.<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-error_handling-js-L2\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"2\"><\/td>\n          <td id=\"file-error_handling-js-LC2\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-error_handling-js-L3\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"3\"><\/td>\n          <td id=\"file-error_handling-js-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>try<\/span> <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-error_handling-js-L4\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"4\"><\/td>\n          <td id=\"file-error_handling-js-LC4\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-k>throw<\/span> <span class=pl-v>Error<\/span><span class=pl-kos>(<\/span><span class=pl-s>&#39;This constructed error will be caught&#39;<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-error_handling-js-L5\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"5\"><\/td>\n          <td id=\"file-error_handling-js-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-kos>}<\/span> <span class=pl-k>catch<\/span> <span class=pl-kos>(<\/span><span class=pl-s1>e<\/span><span class=pl-kos>)<\/span> <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-error_handling-js-L6\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"6\"><\/td>\n          <td id=\"file-error_handling-js-LC6\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-smi>console<\/span><span class=pl-kos>.<\/span><span class=pl-en>log<\/span><span class=pl-kos>(<\/span><span class=pl-s1>e<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span> <span class=pl-c>// Prints the thrown Error object <\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-error_handling-js-L7\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"7\"><\/td>\n          <td id=\"file-error_handling-js-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-kos>}<\/span> <span class=pl-k>finally<\/span> <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-error_handling-js-L8\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"8\"><\/td>\n          <td id=\"file-error_handling-js-LC8\" class=\"blob-code blob-code-inner js-file-line\"> <span class=pl-c>/* Block of code to be executed regardless of the try...catch result */<\/span> <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-error_handling-js-L9\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"9\"><\/td>\n          <td id=\"file-error_handling-js-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-kos>}<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-error_handling-js-L10\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"10\"><\/td>\n          <td id=\"file-error_handling-js-LC10\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-error_handling-js-L11\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"11\"><\/td>\n          <td id=\"file-error_handling-js-LC11\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// JavaScript Error() function creates an error object with a custom message. This function takes a string argument which becomes the value of the error&#39;s message property. An error created with this function will not stop a program from running unless throw keyword is placed before an Error() function call or object in order to raise an error<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-error_handling-js-L12\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"12\"><\/td>\n          <td id=\"file-error_handling-js-LC12\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-error_handling-js-L13\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"13\"><\/td>\n          <td id=\"file-error_handling-js-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// The following statement will not stop program execution<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-error_handling-js-L14\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"14\"><\/td>\n          <td id=\"file-error_handling-js-LC14\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-smi>console<\/span><span class=pl-kos>.<\/span><span class=pl-en>log<\/span><span class=pl-kos>(<\/span><span class=pl-k>new<\/span> <span class=pl-v>Error<\/span><span class=pl-kos>(<\/span><span class=pl-s>&#39;Your password is too weak.&#39;<\/span><span class=pl-kos>)<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span> <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-error_handling-js-L15\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"15\"><\/td>\n          <td id=\"file-error_handling-js-LC15\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// The following statement will stop program execution<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-error_handling-js-L16\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"16\"><\/td>\n          <td id=\"file-error_handling-js-LC16\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>throw<\/span> <span class=pl-v>Error<\/span><span class=pl-kos>(<\/span><span class=pl-s>&#39;nothing after this line runs&#39;<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span> <\/td>\n        <\/tr>\n  <\/table>\n<\/div>\n\n\n    <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/simobecarevic/bddda7043f3b465048827001fa1db805/raw/255a22cd34ec16709540ffcfb61695febee00744/error_handling.js\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/simobecarevic/bddda7043f3b465048827001fa1db805#file-error_handling-js\">\n          error_handling.js\n        <\/a>\n        hosted with &#10084; by <a class=\"Link--inTextBlock\" href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n'