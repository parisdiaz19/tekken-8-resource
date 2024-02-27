"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AdditionalResourceData_1 = require("../data/AdditionalResourceData");
var Navbar_1 = require("../components/Navbar");
function AdditionalResources() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("header", null,
                react_1["default"].createElement("h1", null, "Additional Resources")),
            react_1["default"].createElement("p", null, "Below are some additional resources that you can find that will help improve your technique in Tekken."),
            react_1["default"].createElement("div", null, AdditionalResourceData_1.AdditionalResourceData.map(function (resource, key) { return (react_1["default"].createElement("div", { key: key },
                react_1["default"].createElement("header", null,
                    react_1["default"].createElement("h2", null, resource.title)),
                react_1["default"].createElement("p", null, resource.description),
                react_1["default"].createElement("iframe", { className: "w-full h-[500px]", src: resource.video }))); })))));
}
exports["default"] = AdditionalResources;
