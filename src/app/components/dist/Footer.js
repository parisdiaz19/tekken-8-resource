"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Footer() {
    var today = new Date();
    var year = today.getFullYear();
    return (react_1["default"].createElement("footer", { className: "mb-10 px-4 text-center text-gray-500 dark:text-white" },
        react_1["default"].createElement("small", { className: "mb-2 block text-xs" },
            "\u00A9 ",
            year,
            " Paris Diaz. All rights reserved."),
        react_1["default"].createElement("p", { className: "text-xs" },
            react_1["default"].createElement("span", { className: "font-semibold" }, "About this website:"),
            " built with React & Next.js ( App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, hosted on Vercel.")));
}
exports["default"] = Footer;
