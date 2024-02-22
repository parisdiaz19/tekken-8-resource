"use client";
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var CharacterData_1 = require("../data/CharacterData");
var image_1 = require("next/image");
var link_1 = require("next/link");
function CharacterList() {
    var sortedCharacters = __spreadArrays(CharacterData_1.CharacterData).sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    return (react_1["default"].createElement("div", { className: "text-white container" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("p", null, "It is time to get started. No more playing games. This is the real game."),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("p", null, "Take your Tekken experience to the next level"),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("p", null, "Dive into the intricate world of this iconic fighting game and gain a competitive edge by mastering frame data. Our comprehensive guide provides in-depth insights into Tekken 8\u2019s frame data mechanics, allowing you to make informed decisions during every match."),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("p", null, "Discover the precise advantage and disadvantage of every move, perfect your combos, and optimize your defensive strategies. With Tekken 8 frame data at your fingertips, you\u2019ll be better equipped to outmaneuver your opponents, execute punishing punishes, and climb the ranks to become a true Tekken champion.")),
        react_1["default"].createElement("ul", { className: "flex items-center justify-center flex-wrap gap-3 mt-[4rem]" }, sortedCharacters.map(function (character, index) { return (react_1["default"].createElement(link_1["default"], { key: index, href: "/characters/[character]", as: "/characters/" + character.name.toLowerCase() },
            react_1["default"].createElement("li", { className: "flex-20 flex-col justify-center items-center max-w-[10rem] border-[3px] border-solid border-white rounded-md hover:border-blue-500 hover:opacity-[0.5] transition-all duration-300" },
                react_1["default"].createElement("div", { className: "" },
                    react_1["default"].createElement(image_1["default"], { className: "w-full max-h-[10rem] object-contain bg-gradient-to-r from-red-800 to-indigo-950 h-auto", src: character.picture, width: 100, height: 100, alt: character.name })),
                react_1["default"].createElement("div", { className: "flex items-center justify-center" },
                    react_1["default"].createElement("strong", { className: "text-center" }, character.name))))); }))));
}
exports["default"] = CharacterList;
