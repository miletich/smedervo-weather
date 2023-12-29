"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var sourceDir = 'public';
var outDir = 'static';
var getFileList = function () {
    var fullPath = (0, path_1.join)(__dirname, sourceDir);
    var list = (0, fs_1.readdir)(fullPath, function (err, files) {
        if (err) {
            console.error(err);
        }
        else {
            console.log(files);
        }
    });
};
console.log('run');
getFileList();
