"use strict";
exports.__esModule = true;
var Navbar_1 = require("./Navbar");
var Footer_1 = require("./Footer");
var NavbarLayout = function (_a) {
    var children = _a.children;
    return (React.createElement("div", null,
        React.createElement(Navbar_1["default"], null),
        React.createElement("main", { className: "flex min-h-screen flex-col items-center justify-between p-24" }, children),
        React.createElement(Footer_1["default"], null)));
};
exports["default"] = NavbarLayout;
