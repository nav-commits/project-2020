"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../App.scss");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var free_brands_svg_icons_2 = require("@fortawesome/free-brands-svg-icons");
var free_brands_svg_icons_3 = require("@fortawesome/free-brands-svg-icons");
var free_brands_svg_icons_4 = require("@fortawesome/free-brands-svg-icons");
var free_brands_svg_icons_5 = require("@fortawesome/free-brands-svg-icons");
var free_brands_svg_icons_6 = require("@fortawesome/free-brands-svg-icons");
var di_1 = require("react-icons/di");
var di_2 = require("react-icons/di");
var di_3 = require("react-icons/di");
var di_4 = require("react-icons/di");
var About = function () {
    return (react_1["default"].createElement("div", { className: "About-section", id: "About" },
        react_1["default"].createElement("h1", { className: "Abt" },
            "About",
            react_1["default"].createElement("span", { className: "out" }, "Me")),
        react_1["default"].createElement("div", { className: "img-txt" },
            react_1["default"].createElement("img", { className: "code-pic", src: "https://www.enginess.io/assets/enginess/images/insights/2015/10/web-development-e1444737604137.jpg", alt: "pic" }),
            react_1["default"].createElement("p", { className: "web-dev" },
                "I've been developing for over a year, it all started when i wrote my first line of code in Python. Then I wanted a career in programming so I did a Web Development bootcamp on Udemy, this is where i learned the Full-Stack Web Development. Even though I know it, I still prefer Front-End Development beacuse I love building the User interface.The technoglies that I'm proficent with are ",
                react_1["default"].createElement("span", null, "HTML"),
                ", ",
                react_1["default"].createElement("span", null),
                " CSS, JavaScript, Node.js, MySQL and MongoDB")),
        react_1["default"].createElement("h2", { className: "skills" },
            "Technological ",
            react_1["default"].createElement("span", { className: "tech" }, "Skills")),
        react_1["default"].createElement("div", { className: "program" },
            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faJsSquare, size: '6x', className: "js-script" }),
            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_2.faHtml5, size: '6x', className: "html" }),
            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_3.faCss3, size: '6x', className: "css" }),
            react_1["default"].createElement(di_4.DiSass, { size: "80px", className: "sass" }),
            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_4.faReact, size: '6x', className: "react" }),
            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_5.faNode, size: '6x', className: "node" }),
            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_6.faBootstrap, size: '6x', className: "boot" }),
            react_1["default"].createElement(di_1.DiPython, { size: '80px', className: "python" }),
            react_1["default"].createElement(di_2.DiMongodb, { size: "80px", className: "Mongo" }),
            react_1["default"].createElement(di_3.DiMysql, { size: "80px", className: "sql" }))));
};
exports["default"] = About;
