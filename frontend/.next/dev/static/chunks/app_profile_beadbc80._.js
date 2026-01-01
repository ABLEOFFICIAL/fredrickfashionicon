(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/profile/ProfileCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
const ProfileCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "66e45cef670e9e60c79f623074ee32e4e46fbae5c1b6269ae5f75b53a2a12bc9") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "66e45cef670e9e60c79f623074ee32e4e46fbae5c1b6269ae5f75b53a2a12bc9";
    }
    const { children } = t0;
    let t1;
    if ($[1] !== children) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border border-[#4a4741]/10 shadow-md rounded-xl h-[250px] w-full relative",
            children: children
        }, void 0, false, {
            fileName: "[project]/app/profile/ProfileCard.jsx",
            lineNumber: 17,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = children;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
};
_c = ProfileCard;
const __TURBOPACK__default__export__ = ProfileCard;
var _c;
__turbopack_context__.k.register(_c, "ProfileCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/profile/profile/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteModal",
    ()=>DeleteModal,
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$profile$2f$ProfileCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/profile/ProfileCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Pen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const DeleteModal = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "80856a314d3b4412771efe0c3324f9a4041cfc577cdd4c6791266f22aa7dbd50") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "80856a314d3b4412771efe0c3324f9a4041cfc577cdd4c6791266f22aa7dbd50";
    }
    const { onConfirm, onCancel } = t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                className: "w-6 h-6 text-red-600"
            }, void 0, false, {
                fileName: "[project]/app/profile/profile/page.jsx",
                lineNumber: 26,
                columnNumber: 107
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/profile/profile/page.jsx",
            lineNumber: 26,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold text-gray-900 text-center mb-2",
            children: "Delete Address"
        }, void 0, false, {
            fileName: "[project]/app/profile/profile/page.jsx",
            lineNumber: 27,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 text-center mb-6",
            children: "Are you sure you want to delete this address? This action cannot be undone."
        }, void 0, false, {
            fileName: "[project]/app/profile/profile/page.jsx",
            lineNumber: 28,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    if ($[4] !== onCancel) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onCancel,
            className: "flex-1 px-4 py-3 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors",
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/app/profile/profile/page.jsx",
            lineNumber: 39,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = onCancel;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== onConfirm) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onConfirm,
            className: "flex-1 px-4 py-3 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition-colors",
            children: "Delete"
        }, void 0, false, {
            fileName: "[project]/app/profile/profile/page.jsx",
            lineNumber: 47,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = onConfirm;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t4 || $[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white w-full max-w-sm rounded-2xl shadow-2xl p-6",
                children: [
                    t1,
                    t2,
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            t4,
                            t5
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/profile/page.jsx",
                        lineNumber: 55,
                        columnNumber: 193
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/profile/profile/page.jsx",
                lineNumber: 55,
                columnNumber: 112
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/profile/profile/page.jsx",
            lineNumber: 55,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    return t6;
};
_c = DeleteModal;
function Page() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "80856a314d3b4412771efe0c3324f9a4041cfc577cdd4c6791266f22aa7dbd50") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "80856a314d3b4412771efe0c3324f9a4041cfc577cdd4c6791266f22aa7dbd50";
    }
    const { user, userAddresses } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_PageUseSelector);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const [showEditProfileModal, setShowEditProfileModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAddAddressModal, setShowAddAddressModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEditAddressModal, setShowEditAddressModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDeleteModal, setShowDeleteModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentAddressId, setCurrentAddressId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editName, setEditName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(user?.name || "");
    const [editEmail, setEditEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(user?.email || "");
    const [editPhone, setEditPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(user?.phone || "");
    const [label, setLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [street, setStreet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [stateName, setStateName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [country, setCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [zipCode, setZipCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isDefault, setIsDefault] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Page[fillEditAddress]": (address)=>{
                setLabel(address.label);
                setStreet(address.street);
                setCity(address.city);
                setStateName(address.state);
                setCountry(address.country);
                setZipCode(address.zipCode);
                setIsDefault(address.isDefault);
            }
        })["Page[fillEditAddress]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const fillEditAddress = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Page[resetAddressForm]": ()=>{
                setLabel("");
                setStreet("");
                setCity("");
                setStateName("");
                setCountry("");
                setZipCode("");
                setIsDefault(false);
            }
        })["Page[resetAddressForm]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const resetAddressForm = t1;
    let t2;
    if ($[3] !== dispatch || $[4] !== editEmail || $[5] !== editName || $[6] !== editPhone) {
        t2 = ({
            "Page[handleProfileSubmit]": async (e)=>{
                e.preventDefault();
                ;
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userAPI"].updateProfile({
                        name: editName,
                        email: editEmail,
                        phone: editPhone
                    });
                    await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUserProfile"])());
                    setShowEditProfileModal(false);
                } catch (t3) {
                    const error = t3;
                    console.error(error);
                }
            }
        })["Page[handleProfileSubmit]"];
        $[3] = dispatch;
        $[4] = editEmail;
        $[5] = editName;
        $[6] = editPhone;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    const handleProfileSubmit = t2;
    let t3;
    if ($[8] !== city || $[9] !== country || $[10] !== dispatch || $[11] !== isDefault || $[12] !== label || $[13] !== stateName || $[14] !== street || $[15] !== zipCode) {
        t3 = ({
            "Page[handleAddAddress]": async (e_0)=>{
                e_0.preventDefault();
                ;
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userAPI"].addAddress({
                        label,
                        street,
                        city,
                        state: stateName,
                        country,
                        zipCode,
                        isDefault
                    });
                    await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUserAddresses"])());
                    setShowAddAddressModal(false);
                    resetAddressForm();
                } catch (t4) {
                    const error_0 = t4;
                    console.error(error_0);
                }
            }
        })["Page[handleAddAddress]"];
        $[8] = city;
        $[9] = country;
        $[10] = dispatch;
        $[11] = isDefault;
        $[12] = label;
        $[13] = stateName;
        $[14] = street;
        $[15] = zipCode;
        $[16] = t3;
    } else {
        t3 = $[16];
    }
    const handleAddAddress = t3;
    let t4;
    if ($[17] !== city || $[18] !== country || $[19] !== currentAddressId || $[20] !== dispatch || $[21] !== isDefault || $[22] !== label || $[23] !== stateName || $[24] !== street || $[25] !== zipCode) {
        t4 = ({
            "Page[handleUpdateAddress]": async (e_1)=>{
                e_1.preventDefault();
                ;
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userAPI"].updateAddress(currentAddressId, {
                        label,
                        street,
                        city,
                        state: stateName,
                        country,
                        zipCode,
                        isDefault
                    });
                    await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUserAddresses"])());
                    setShowEditAddressModal(false);
                } catch (t5) {
                    const error_1 = t5;
                    console.error(error_1);
                }
            }
        })["Page[handleUpdateAddress]"];
        $[17] = city;
        $[18] = country;
        $[19] = currentAddressId;
        $[20] = dispatch;
        $[21] = isDefault;
        $[22] = label;
        $[23] = stateName;
        $[24] = street;
        $[25] = zipCode;
        $[26] = t4;
    } else {
        t4 = $[26];
    }
    const handleUpdateAddress = t4;
    let t5;
    if ($[27] !== currentAddressId || $[28] !== dispatch) {
        t5 = ({
            "Page[confirmDeleteAddress]": async ()=>{
                ;
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userAPI"].deleteAddress(currentAddressId);
                    await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUserAddresses"])());
                    setShowDeleteModal(false);
                    setCurrentAddressId(null);
                } catch (t6) {
                    const error_2 = t6;
                    console.error(error_2);
                }
            }
        })["Page[confirmDeleteAddress]"];
        $[27] = currentAddressId;
        $[28] = dispatch;
        $[29] = t5;
    } else {
        t5 = $[29];
    }
    const confirmDeleteAddress = t5;
    const ModalWrapper = _PageModalWrapper;
    const FormInput = _PageFormInput;
    let t6;
    if ($[30] !== city || $[31] !== confirmDeleteAddress || $[32] !== country || $[33] !== editEmail || $[34] !== editName || $[35] !== editPhone || $[36] !== handleAddAddress || $[37] !== handleProfileSubmit || $[38] !== handleUpdateAddress || $[39] !== isDefault || $[40] !== label || $[41] !== showAddAddressModal || $[42] !== showDeleteModal || $[43] !== showEditAddressModal || $[44] !== showEditProfileModal || $[45] !== stateName || $[46] !== street || $[47] !== user || $[48] !== userAddresses || $[49] !== zipCode) {
        t6 = user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    showDeleteModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeleteModal, {
                        onConfirm: confirmDeleteAddress,
                        onCancel: {
                            "Page[<DeleteModal>.onCancel]": ()=>setShowDeleteModal(false)
                        }["Page[<DeleteModal>.onCancel]"]
                    }, void 0, false, {
                        fileName: "[project]/app/profile/profile/page.jsx",
                        lineNumber: 260,
                        columnNumber: 140
                    }, this),
                    showEditProfileModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalWrapper, {
                        title: "Edit Profile",
                        onClose: {
                            "Page[<ModalWrapper>.onClose]": ()=>setShowEditProfileModal(false)
                        }["Page[<ModalWrapper>.onClose]"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormInput, {
                                        label: "Full Name",
                                        value: editName,
                                        onChange: {
                                            "Page[<FormInput>.onChange]": (e_2)=>setEditName(e_2.target.value)
                                        }["Page[<FormInput>.onChange]"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 264,
                                        columnNumber: 75
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormInput, {
                                        label: "Email Address",
                                        value: editEmail,
                                        onChange: {
                                            "Page[<FormInput>.onChange]": (e_3)=>setEditEmail(e_3.target.value)
                                        }["Page[<FormInput>.onChange]"],
                                        type: "email"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 266,
                                        columnNumber: 48
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormInput, {
                                        label: "Phone Number",
                                        value: editPhone,
                                        onChange: {
                                            "Page[<FormInput>.onChange]": (e_4)=>setEditPhone(e_4.target.value)
                                        }["Page[<FormInput>.onChange]"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 268,
                                        columnNumber: 61
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/profile/page.jsx",
                                lineNumber: 264,
                                columnNumber: 44
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 bg-gray-50 border-t border-gray-100 flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "Page[<button>.onClick]": ()=>setShowEditProfileModal(false)
                                        }["Page[<button>.onClick]"],
                                        className: "flex-1 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 270,
                                        columnNumber: 122
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "Page[<button>.onClick]": (e_5)=>handleProfileSubmit(e_5)
                                        }["Page[<button>.onClick]"],
                                        className: "flex-1 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors",
                                        children: "Save Changes"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 272,
                                        columnNumber: 190
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/profile/page.jsx",
                                lineNumber: 270,
                                columnNumber: 54
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/profile/page.jsx",
                        lineNumber: 262,
                        columnNumber: 72
                    }, this),
                    showAddAddressModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalWrapper, {
                        title: "Add New Address",
                        onClose: {
                            "Page[<ModalWrapper>.onClose]": ()=>setShowAddAddressModal(false)
                        }["Page[<ModalWrapper>.onClose]"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 space-y-4 max-h-[60vh] overflow-y-auto",
                                children: [
                                    [
                                        [
                                            "Label (e.g., Home, Office)",
                                            label,
                                            setLabel
                                        ],
                                        [
                                            "Street Address",
                                            street,
                                            setStreet
                                        ],
                                        [
                                            "City",
                                            city,
                                            setCity
                                        ],
                                        [
                                            "State",
                                            stateName,
                                            setStateName
                                        ],
                                        [
                                            "Country",
                                            country,
                                            setCountry
                                        ],
                                        [
                                            "Zip Code",
                                            zipCode,
                                            setZipCode
                                        ]
                                    ].map({
                                        "Page[(anonymous)()]": (t7, idx)=>{
                                            const [labelText, value_0, setter] = t7;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormInput, {
                                                label: labelText,
                                                value: value_0,
                                                onChange: {
                                                    "Page[(anonymous)() > <FormInput>.onChange]": (e_6)=>setter(e_6.target.value)
                                                }["Page[(anonymous)() > <FormInput>.onChange]"]
                                            }, idx, false, {
                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                lineNumber: 279,
                                                columnNumber: 24
                                            }, this);
                                        }
                                    }["Page[(anonymous)()]"]),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: isDefault,
                                                onChange: {
                                                    "Page[<input>.onChange]": (e_7)=>setIsDefault(e_7.target.checked)
                                                }["Page[<input>.onChange]"],
                                                className: "w-5 h-5 accent-gray-900"
                                            }, void 0, false, {
                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                lineNumber: 283,
                                                columnNumber: 123
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Set as default address"
                                            }, void 0, false, {
                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                lineNumber: 285,
                                                columnNumber: 82
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 283,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/profile/page.jsx",
                                lineNumber: 276,
                                columnNumber: 44
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 bg-gray-50 border-t border-gray-100 flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "Page[<button>.onClick]": ()=>setShowAddAddressModal(false)
                                        }["Page[<button>.onClick]"],
                                        className: "flex-1 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 285,
                                        columnNumber: 245
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "Page[<button>.onClick]": (e_8)=>handleAddAddress(e_8)
                                        }["Page[<button>.onClick]"],
                                        className: "flex-1 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors",
                                        children: "Save Address"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 287,
                                        columnNumber: 190
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/profile/page.jsx",
                                lineNumber: 285,
                                columnNumber: 177
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/profile/page.jsx",
                        lineNumber: 274,
                        columnNumber: 220
                    }, this),
                    showEditAddressModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalWrapper, {
                        title: "Edit Address",
                        onClose: {
                            "Page[<ModalWrapper>.onClose]": ()=>setShowEditAddressModal(false)
                        }["Page[<ModalWrapper>.onClose]"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 space-y-4 max-h-[60vh] overflow-y-auto",
                                children: [
                                    [
                                        [
                                            "Label",
                                            label,
                                            setLabel
                                        ],
                                        [
                                            "Street Address",
                                            street,
                                            setStreet
                                        ],
                                        [
                                            "City",
                                            city,
                                            setCity
                                        ],
                                        [
                                            "State",
                                            stateName,
                                            setStateName
                                        ],
                                        [
                                            "Country",
                                            country,
                                            setCountry
                                        ],
                                        [
                                            "Zip Code",
                                            zipCode,
                                            setZipCode
                                        ]
                                    ].map({
                                        "Page[(anonymous)()]": (t8, idx_0)=>{
                                            const [labelText_0, value_1, setter_0] = t8;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormInput, {
                                                label: labelText_0,
                                                value: value_1,
                                                onChange: {
                                                    "Page[(anonymous)() > <FormInput>.onChange]": (e_9)=>setter_0(e_9.target.value)
                                                }["Page[(anonymous)() > <FormInput>.onChange]"]
                                            }, idx_0, false, {
                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                lineNumber: 294,
                                                columnNumber: 24
                                            }, this);
                                        }
                                    }["Page[(anonymous)()]"]),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: isDefault,
                                                onChange: {
                                                    "Page[<input>.onChange]": (e_10)=>setIsDefault(e_10.target.checked)
                                                }["Page[<input>.onChange]"],
                                                className: "w-5 h-5 accent-gray-900"
                                            }, void 0, false, {
                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                lineNumber: 298,
                                                columnNumber: 123
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Set as default address"
                                            }, void 0, false, {
                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                lineNumber: 300,
                                                columnNumber: 82
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 298,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/profile/page.jsx",
                                lineNumber: 291,
                                columnNumber: 44
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 bg-gray-50 border-t border-gray-100 flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "Page[<button>.onClick]": ()=>setShowEditAddressModal(false)
                                        }["Page[<button>.onClick]"],
                                        className: "flex-1 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 300,
                                        columnNumber: 245
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "Page[<button>.onClick]": (e_11)=>handleUpdateAddress(e_11)
                                        }["Page[<button>.onClick]"],
                                        className: "flex-1 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors",
                                        children: "Update Address"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 302,
                                        columnNumber: 190
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/profile/page.jsx",
                                lineNumber: 300,
                                columnNumber: 177
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/profile/page.jsx",
                        lineNumber: 289,
                        columnNumber: 221
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-gray-900 mb-2",
                                children: "Profile Overview"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/profile/page.jsx",
                                lineNumber: 304,
                                columnNumber: 220
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Manage your personal information and addresses"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/profile/page.jsx",
                                lineNumber: 304,
                                columnNumber: 295
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/profile/page.jsx",
                        lineNumber: 304,
                        columnNumber: 198
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border-b border-gray-100 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 bg-[#4a4741] rounded-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "w-6 h-6 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profile/profile/page.jsx",
                                                    lineNumber: 304,
                                                    columnNumber: 679
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                lineNumber: 304,
                                                columnNumber: 593
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-semibold text-gray-900",
                                                        children: "Profile Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/profile/page.jsx",
                                                        lineNumber: 304,
                                                        columnNumber: 729
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500",
                                                        children: "Your personal information"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/profile/page.jsx",
                                                        lineNumber: 304,
                                                        columnNumber: 801
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                lineNumber: 304,
                                                columnNumber: 724
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 304,
                                        columnNumber: 552
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "Page[<button>.onClick]": ()=>setShowEditProfileModal(true)
                                        }["Page[<button>.onClick]"],
                                        className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pen$3e$__["Pen"], {
                                            className: "w-5 h-5 text-gray-600"
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/profile/page.jsx",
                                            lineNumber: 306,
                                            columnNumber: 105
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 304,
                                        columnNumber: 879
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/profile/page.jsx",
                                lineNumber: 304,
                                columnNumber: 472
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 grid grid-cols-1 md:grid-cols-3 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "w-5 h-5 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profile/profile/page.jsx",
                                                    lineNumber: 306,
                                                    columnNumber: 352
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                lineNumber: 306,
                                                columnNumber: 260
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 mb-1",
                                                        children: "Full Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/profile/page.jsx",
                                                        lineNumber: 306,
                                                        columnNumber: 405
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium text-gray-900",
                                                        children: user.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/profile/page.jsx",
                                                        lineNumber: 306,
                                                        columnNumber: 460
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                lineNumber: 306,
                                                columnNumber: 400
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 306,
                                        columnNumber: 220
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "w-5 h-5 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profile/profile/page.jsx",
                                                    lineNumber: 306,
                                                    columnNumber: 660
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                lineNumber: 306,
                                                columnNumber: 568
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 mb-1",
                                                        children: "Email Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/profile/page.jsx",
                                                        lineNumber: 306,
                                                        columnNumber: 713
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium text-gray-900",
                                                        children: user.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/profile/page.jsx",
                                                        lineNumber: 306,
                                                        columnNumber: 772
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                lineNumber: 306,
                                                columnNumber: 708
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 306,
                                        columnNumber: 528
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "w-5 h-5 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profile/profile/page.jsx",
                                                    lineNumber: 306,
                                                    columnNumber: 973
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                lineNumber: 306,
                                                columnNumber: 881
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 mb-1",
                                                        children: "Phone Number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/profile/page.jsx",
                                                        lineNumber: 306,
                                                        columnNumber: 1027
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium text-gray-900",
                                                        children: user.phone || "Not provided"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/profile/page.jsx",
                                                        lineNumber: 306,
                                                        columnNumber: 1085
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                lineNumber: 306,
                                                columnNumber: 1022
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 306,
                                        columnNumber: 841
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/profile/page.jsx",
                                lineNumber: 306,
                                columnNumber: 161
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/profile/page.jsx",
                        lineNumber: 304,
                        columnNumber: 380
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-900 mb-1",
                                                children: "Delivery Addresses"
                                            }, void 0, false, {
                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                lineNumber: 306,
                                                columnNumber: 1267
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: "Manage your shipping addresses"
                                            }, void 0, false, {
                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                lineNumber: 306,
                                                columnNumber: 1344
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 306,
                                        columnNumber: 1262
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "Page[<button>.onClick]": ()=>{
                                                resetAddressForm();
                                                setCurrentAddressId(null);
                                                setShowAddAddressModal(true);
                                            }
                                        }["Page[<button>.onClick]"],
                                        className: "flex items-center gap-2 px-4 py-3 bg-[#4a4741] text-white rounded-xl font-medium hover:bg-gray-800 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                lineNumber: 312,
                                                columnNumber: 171
                                            }, this),
                                            "Add Address"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 306,
                                        columnNumber: 1413
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/profile/page.jsx",
                                lineNumber: 306,
                                columnNumber: 1206
                            }, this),
                            userAddresses && userAddresses.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: userAddresses.map({
                                    "Page[userAddresses.map()]": (address_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-10 h-10 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                            className: "w-5 h-5 text-white"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/profile/profile/page.jsx",
                                                                            lineNumber: 313,
                                                                            columnNumber: 428
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/profile/profile/page.jsx",
                                                                        lineNumber: 313,
                                                                        columnNumber: 315
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "font-semibold text-gray-900",
                                                                                children: address_0.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                                                lineNumber: 313,
                                                                                columnNumber: 480
                                                                            }, this),
                                                                            address_0.isDefault && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-md mt-1",
                                                                                children: "Default"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                                                lineNumber: 313,
                                                                                columnNumber: 570
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/profile/profile/page.jsx",
                                                                        lineNumber: 313,
                                                                        columnNumber: 475
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                                lineNumber: 313,
                                                                columnNumber: 274
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: {
                                                                            "Page[userAddresses.map() > <button>.onClick]": ()=>{
                                                                                fillEditAddress(address_0);
                                                                                setCurrentAddressId(address_0._id);
                                                                                setShowEditAddressModal(true);
                                                                            }
                                                                        }["Page[userAddresses.map() > <button>.onClick]"],
                                                                        className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pen$3e$__["Pen"], {
                                                                            className: "w-4 h-4 text-gray-600"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/profile/profile/page.jsx",
                                                                            lineNumber: 319,
                                                                            columnNumber: 137
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/profile/profile/page.jsx",
                                                                        lineNumber: 313,
                                                                        columnNumber: 730
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: {
                                                                            "Page[userAddresses.map() > <button>.onClick]": ()=>{
                                                                                setCurrentAddressId(address_0._id);
                                                                                setShowDeleteModal(true);
                                                                            }
                                                                        }["Page[userAddresses.map() > <button>.onClick]"],
                                                                        className: "p-2 hover:bg-red-50 rounded-lg transition-colors",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            className: "w-4 h-4 text-red-600"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/profile/profile/page.jsx",
                                                                            lineNumber: 324,
                                                                            columnNumber: 135
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/profile/profile/page.jsx",
                                                                        lineNumber: 319,
                                                                        columnNumber: 187
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                                lineNumber: 313,
                                                                columnNumber: 702
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/profile/profile/page.jsx",
                                                        lineNumber: 313,
                                                        columnNumber: 219
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 text-sm text-gray-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: address_0.street
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                                lineNumber: 324,
                                                                columnNumber: 248
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    address_0.city,
                                                                    ", ",
                                                                    address_0.state
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                                lineNumber: 324,
                                                                columnNumber: 273
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    address_0.country,
                                                                    " - ",
                                                                    address_0.zipCode
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                                lineNumber: 324,
                                                                columnNumber: 315
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/profile/profile/page.jsx",
                                                        lineNumber: 324,
                                                        columnNumber: 199
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                lineNumber: 313,
                                                columnNumber: 198
                                            }, this)
                                        }, address_0._id, false, {
                                            fileName: "[project]/app/profile/profile/page.jsx",
                                            lineNumber: 313,
                                            columnNumber: 57
                                        }, this)
                                }["Page[userAddresses.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/app/profile/profile/page.jsx",
                                lineNumber: 312,
                                columnNumber: 270
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-8 h-8 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/profile/page.jsx",
                                            lineNumber: 325,
                                            columnNumber: 240
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 325,
                                        columnNumber: 142
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-gray-900 mb-2",
                                        children: "No addresses yet"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 325,
                                        columnNumber: 290
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-6",
                                        children: "Add your first delivery address to get started"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 325,
                                        columnNumber: 368
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "Page[<button>.onClick]": ()=>{
                                                resetAddressForm();
                                                setCurrentAddressId(null);
                                                setShowAddAddressModal(true);
                                            }
                                        }["Page[<button>.onClick]"],
                                        className: "inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/profile/profile/page.jsx",
                                                lineNumber: 331,
                                                columnNumber: 177
                                            }, this),
                                            "Add Your First Address"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/profile/profile/page.jsx",
                                        lineNumber: 325,
                                        columnNumber: 452
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/profile/page.jsx",
                                lineNumber: 325,
                                columnNumber: 54
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/profile/page.jsx",
                        lineNumber: 306,
                        columnNumber: 1184
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/profile/profile/page.jsx",
                lineNumber: 260,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/profile/profile/page.jsx",
            lineNumber: 260,
            columnNumber: 18
        }, this);
        $[30] = city;
        $[31] = confirmDeleteAddress;
        $[32] = country;
        $[33] = editEmail;
        $[34] = editName;
        $[35] = editPhone;
        $[36] = handleAddAddress;
        $[37] = handleProfileSubmit;
        $[38] = handleUpdateAddress;
        $[39] = isDefault;
        $[40] = label;
        $[41] = showAddAddressModal;
        $[42] = showDeleteModal;
        $[43] = showEditAddressModal;
        $[44] = showEditProfileModal;
        $[45] = stateName;
        $[46] = street;
        $[47] = user;
        $[48] = userAddresses;
        $[49] = zipCode;
        $[50] = t6;
    } else {
        t6 = $[50];
    }
    return t6;
}
_s(Page, "6jXhari3ZpNuw63iAGBWOIUDJes=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c1 = Page;
function _PageFormInput(t0) {
    const { label: label_0, value, onChange, type: t1 } = t0;
    const type = t1 === undefined ? "text" : t1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-gray-700 mb-2",
                children: label_0
            }, void 0, false, {
                fileName: "[project]/app/profile/profile/page.jsx",
                lineNumber: 366,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                value: value,
                onChange: onChange,
                className: "w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
            }, void 0, false, {
                fileName: "[project]/app/profile/profile/page.jsx",
                lineNumber: 366,
                columnNumber: 96
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/profile/profile/page.jsx",
        lineNumber: 366,
        columnNumber: 10
    }, this);
}
function _PageModalWrapper(t0) {
    const { children, title } = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-b border-gray-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-900",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/profile/profile/page.jsx",
                        lineNumber: 373,
                        columnNumber: 239
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/profile/profile/page.jsx",
                    lineNumber: 373,
                    columnNumber: 193
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/profile/page.jsx",
            lineNumber: 373,
            columnNumber: 112
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/profile/profile/page.jsx",
        lineNumber: 373,
        columnNumber: 10
    }, this);
}
function _PageUseSelector(state) {
    return state.auth;
}
var _c, _c1;
__turbopack_context__.k.register(_c, "DeleteModal");
__turbopack_context__.k.register(_c1, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_profile_beadbc80._.js.map