"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
const styles_1 = require("@material-ui/core/styles");
const Menu_1 = __importDefault(require("@material-ui/core/Menu"));
const MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
const ArrowRight_1 = __importDefault(require("@material-ui/icons/ArrowRight"));
const clsx_1 = __importDefault(require("clsx"));
const TRANSPARENT = 'rgba(0,0,0,0)';
const useMenuItemStyles = styles_1.makeStyles((theme) => ({
    root: (props) => ({
        backgroundColor: props.open ? theme.palette.action.hover : TRANSPARENT
    })
}));
/**
 * Use as a drop-in replacement for `<MenuItem>` when you need to add cascading
 * menu elements as children to this component.
 */
const NestedMenuItem = react_1.default.forwardRef(function NestedMenuItem(props, ref) {
    const { parentMenuOpen, component = 'div', label, rightIcon = react_1.default.createElement(ArrowRight_1.default, null), children, className, tabIndex: tabIndexProp, MenuProps = {}, ContainerProps: ContainerPropsProp = {} } = props, MenuItemProps = __rest(props, ["parentMenuOpen", "component", "label", "rightIcon", "children", "className", "tabIndex", "MenuProps", "ContainerProps"]);
    const { ref: containerRefProp } = ContainerPropsProp, ContainerProps = __rest(ContainerPropsProp, ["ref"]);
    const menuItemRef = react_1.useRef(null);
    react_1.useImperativeHandle(ref, () => menuItemRef.current);
    const containerRef = react_1.useRef(null);
    react_1.useImperativeHandle(containerRefProp, () => containerRef.current);
    const menuContainerRef = react_1.useRef(null);
    const [isSubMenuOpen, setIsSubMenuOpen] = react_1.useState(false);
    const handleMouseEnter = (event) => {
        var _a;
        setIsSubMenuOpen(true);
        if ((_a = ContainerProps) === null || _a === void 0 ? void 0 : _a.onMouseEnter) {
            ContainerProps.onMouseEnter(event);
        }
    };
    const handleMouseLeave = (event) => {
        var _a;
        setIsSubMenuOpen(false);
        if ((_a = ContainerProps) === null || _a === void 0 ? void 0 : _a.onMouseLeave) {
            ContainerProps.onMouseLeave(event);
        }
    };
    // Check if any immediate children are active
    const isSubmenuFocused = () => {
        var _a, _b, _c, _d;
        const active = (_b = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.activeElement;
        for (const child of (_d = (_c = menuContainerRef.current) === null || _c === void 0 ? void 0 : _c.children, (_d !== null && _d !== void 0 ? _d : []))) {
            if (child === active) {
                return true;
            }
        }
        return false;
    };
    const handleFocus = (event) => {
        var _a;
        if (event.target === containerRef.current) {
            setIsSubMenuOpen(true);
        }
        if ((_a = ContainerProps) === null || _a === void 0 ? void 0 : _a.onFocus) {
            ContainerProps.onFocus(event);
        }
    };
    const handleKeyDown = (event) => {
        var _a, _b, _c, _d, _e;
        if (event.key === 'Escape') {
            return;
        }
        if (isSubmenuFocused()) {
            event.stopPropagation();
        }
        const active = (_b = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.activeElement;
        if (event.key === 'ArrowLeft' && isSubmenuFocused()) {
            (_c = containerRef.current) === null || _c === void 0 ? void 0 : _c.focus();
        }
        if (event.key === 'ArrowRight' &&
            event.target === containerRef.current &&
            event.target === active) {
            const firstChild = (_d = menuContainerRef.current) === null || _d === void 0 ? void 0 : _d.children[0];
            (_e = firstChild) === null || _e === void 0 ? void 0 : _e.focus();
        }
    };
    const open = isSubMenuOpen && parentMenuOpen;
    const menuItemClasses = useMenuItemStyles({ open });
    // Root element must have a `tabIndex` attribute for keyboard navigation
    let tabIndex;
    if (!props.disabled) {
        tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
    }
    return (react_1.default.createElement("div", Object.assign({}, ContainerProps, { ref: containerRef, onFocus: handleFocus, tabIndex: tabIndex, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onKeyDown: handleKeyDown }),
        react_1.default.createElement(MenuItem_1.default, Object.assign({}, MenuItemProps, { className: clsx_1.default(menuItemClasses.root, className), ref: menuItemRef }),
            label,
            rightIcon),
        react_1.default.createElement(Menu_1.default, Object.assign({ style: { pointerEvents: 'auto' }, anchorEl: menuItemRef.current, anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
            }, transformOrigin: {
                vertical: 'top',
                horizontal: 'left'
            }, open: open, autoFocus: false, disableAutoFocus: true, disableEnforceFocus: true, onClose: () => {
                setIsSubMenuOpen(false);
            } }, MenuProps),
            react_1.default.createElement("div", { ref: menuContainerRef, style: { pointerEvents: 'auto' } }, children))));
});
exports.default = NestedMenuItem;
