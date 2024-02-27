"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var image_1 = require("next/image");
var banner_jpg_1 = require("../images/banner.jpg");
var Navbar = function () {
    return (react_1["default"].createElement("header", null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(image_1["default"], { className: "w-full h-[30rem] object-contain", src: banner_jpg_1["default"], alt: "Banner" })),
        react_1["default"].createElement("div", { className: "flex items-center justify-center my-[2rem]" },
            react_1["default"].createElement("ul", { className: "flex flex-row gap-[2rem] justify-center items-center" },
                react_1["default"].createElement(link_1["default"], { href: "/" }, "Home"),
                react_1["default"].createElement(link_1["default"], { href: "/additional-resources" }, "Additional Resources"))),
        react_1["default"].createElement("div", { className: "flex items-center justify-center my-[2rem]" },
            react_1["default"].createElement("h1", { className: "text-4xl" }, "Tekken 8 Resource Library"))));
};
exports["default"] = Navbar;
