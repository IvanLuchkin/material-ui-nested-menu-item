"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const __1 = __importDefault(require(".."));
exports.default = {
    title: 'Nested Menu Item'
};
exports.NestedMenu = () => {
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
