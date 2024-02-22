"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var inter = google_1.Inter({ subsets: ["latin"] });
exports.metadata = {
    title: "Tekken 8 Resources | Improve Your Game",
    description: "Resource site for all things Tekken 8",
    icons: {
        icon: "/favicon.ico"
    }
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en", className: "dark-bg text-white" },
        React.createElement("body", { className: inter.className }, children)));
}
exports["default"] = RootLayout;
