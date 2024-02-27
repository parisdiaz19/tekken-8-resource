"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var image_1 = require("next/image");
var banner_jpg_1 = require("@/app/images/banner.jpg");
var Navbar = function () {
    return (React.createElement("header", null,
        React.createElement("div", null,
            React.createElement(image_1["default"], { className: "w-full h-[30rem] object-contain", src: banner_jpg_1["default"], alt: "Banner" })),
        React.createElement("div", { className: "flex items-center justify-center my-[2rem]" },
            React.createElement("ul", { className: "flex flex-row gap-[2rem] justify-center items-center" },
                React.createElement(link_1["default"], { href: "/" }, "Home"),
                React.createElement(link_1["default"], { href: "/additional-resources" }, "Additional Resources"))),
        React.createElement("div", { className: "flex items-center justify-center my-[2rem]" },
            React.createElement("h1", { className: "text-4xl" }, "Tekken 8 Resource Library"))));
};
exports["default"] = Navbar;
