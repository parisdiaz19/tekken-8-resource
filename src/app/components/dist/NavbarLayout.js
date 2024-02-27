"use strict";
exports.__esModule = true;
var Navbar_1 = require("./Navbar");
var Footer_1 = require("./Footer");
var react_1 = require("react");
var NavbarLayout = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement("main", { className: "flex min-h-screen flex-col items-center justify-between p-24" }, children),
        react_1["default"].createElement(Footer_1["default"], null)));
};
exports["default"] = NavbarLayout;
