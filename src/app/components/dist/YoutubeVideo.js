"use strict";
exports.__esModule = true;
var react_1 = require("react");
function YoutubeVideo(key, source) {
    return (react_1["default"].createElement("iframe", { width: "560", height: "315", src: source, title: "YouTube video player", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" }));
}
exports["default"] = YoutubeVideo;
