"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedMenu = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const __1 = __importDefault(require(".."));
exports.default = {
    title: 'Nested Menu Item'
};
const NestedMenu = () => {
    const [menuPosition, setMenuPosition] = react_1.useState({ top: 10, left: 10 });
    const menuItemRef = react_1.useRef(null);
    const handleRightClick = (event) => {
        if (menuPosition) {
            return;
        }
        event.preventDefault();
        setMenuPosition({
            top: event.pageY,
            left: event.pageX
        });
    };
    const handleItemClick = (event) => {
        setMenuPosition(null);
    };
    return (react_1.default.createElement("div", { onContextMenu: handleRightClick },
        react_1.default.createElement(core_1.Typography, null, "Right click to open menu"),
        react_1.default.createElement(core_1.Menu, { open: !!menuPosition, onClose: () => setMenuPosition(null), anchorReference: 'anchorPosition', anchorPosition: menuPosition },
            react_1.default.createElement(core_1.MenuItem, { onClick: handleItemClick }, "Button 1"),
            react_1.default.createElement(core_1.MenuItem, { onClick: handleItemClick }, "Button 2"),
            react_1.default.createElement(__1.default, { ref: menuItemRef, label: 'Button 3', parentMenuOpen: !!menuPosition, onClick: handleItemClick },
                react_1.default.createElement(core_1.MenuItem, { onClick: handleItemClick }, "Sub-Button 1"),
                react_1.default.createElement(core_1.MenuItem, { onClick: handleItemClick }, "Sub-Button 2"),
                react_1.default.createElement(__1.default, { label: 'Sub-Button 3', parentMenuOpen: !!menuPosition, onClick: handleItemClick },
                    react_1.default.createElement(core_1.MenuItem, { onClick: handleItemClick }, "Sub-Sub-Button 1"),
                    react_1.default.createElement(core_1.MenuItem, { onClick: handleItemClick }, "Sub-Sub-Button 2"))),
            react_1.default.createElement(core_1.MenuItem, { onClick: handleItemClick }, "Button 4"))));
};
exports.NestedMenu = NestedMenu;
