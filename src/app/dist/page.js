"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CharacterList_1 = require("./components/CharacterList");
var Navbar_1 = require("./components/Navbar");
function Home() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement(CharacterList_1["default"], null)));
}
exports["default"] = Home;
