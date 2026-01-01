(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/homepage/components/Explore.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MyBtn.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$contextSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/contextSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Explore = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "fc1a5a8e9c8123cea3c1787efecdefa5f0bc2982b30f6bdb63fd30495314a406") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fc1a5a8e9c8123cea3c1787efecdefa5f0bc2982b30f6bdb63fd30495314a406";
    }
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { screenWidth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_temp);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                bg: "/bag-bg.avif",
                header: "FFI Bags",
                text: "From 349",
                category: "Bags",
                id: 139
            },
            {
                bg: "/shoe-bg.avif",
                header: "FFI Foot-wears",
                text: "From 349",
                category: "Shoes",
                id: 239
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const explores = t0;
    let t1;
    if ($[2] !== dispatch || $[3] !== router) {
        t1 = (category)=>{
            router.push("/discover");
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$contextSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setproductCategory"])(category));
        };
        $[2] = dispatch;
        $[3] = router;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const handleExplore = t1;
    let t2;
    if ($[5] !== handleExplore || $[6] !== screenWidth) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 gap-5 my-5 px-5 md:grid-cols-2 md:w-[85%] md:m-auto  md:py-10 md:h-[70vh]",
            children: explores.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:w-full md:m-auto md:h-[60vh] relative ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: `${item.bg}`,
                            className: "h-72 w-full m-auto rounded-2xl object-bottom object-cover md:h-full"
                        }, void 0, false, {
                            fileName: "[project]/app/homepage/components/Explore.jsx",
                            lineNumber: 56,
                            columnNumber: 220
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute h-full w-full bg-linear-to-b from-neutral-950/0 to-neutral-950/70 top-0 left-0 rounded-2xl hidden md:block"
                        }, void 0, false, {
                            fileName: "[project]/app/homepage/components/Explore.jsx",
                            lineNumber: 56,
                            columnNumber: 326
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-full justify-between items-center py-3 md:absolute md:bottom-0 md:p-10 ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl text-[#4a4741]  md:text-[#f7f1e8]",
                                            children: item.header
                                        }, void 0, false, {
                                            fileName: "[project]/app/homepage/components/Explore.jsx",
                                            lineNumber: 56,
                                            columnNumber: 575
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base font-semibold text-[#4a4741]  md:text-[#f7f1e8]",
                                            children: item.text
                                        }, void 0, false, {
                                            fileName: "[project]/app/homepage/components/Explore.jsx",
                                            lineNumber: 56,
                                            columnNumber: 652
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/homepage/components/Explore.jsx",
                                    lineNumber: 56,
                                    columnNumber: 557
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-5 items-center ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            onClick: ()=>{
                                                handleExplore(item.category);
                                            },
                                            className: `${screenWidth < 768 ? "hidden" : "block bg-transparent border border-[#f7f1e8] text-[#f7f1e8] px-5 py-3 rounded-3xl"}`,
                                            children: "Explore"
                                        }, void 0, false, {
                                            fileName: "[project]/app/homepage/components/Explore.jsx",
                                            lineNumber: 56,
                                            columnNumber: 788
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            to: `/discover/${item.id}`,
                                            classname: "bg-[#4a4741] px-5 py-3 rounded-3xl md:text-[#4a4741] md:bg-[#f7f1e8] ",
                                            children: "Shop"
                                        }, void 0, false, {
                                            fileName: "[project]/app/homepage/components/Explore.jsx",
                                            lineNumber: 58,
                                            columnNumber: 162
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/homepage/components/Explore.jsx",
                                    lineNumber: 56,
                                    columnNumber: 746
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/homepage/components/Explore.jsx",
                            lineNumber: 56,
                            columnNumber: 461
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, index, true, {
                    fileName: "[project]/app/homepage/components/Explore.jsx",
                    lineNumber: 56,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/Explore.jsx",
            lineNumber: 56,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = handleExplore;
        $[6] = screenWidth;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    return t2;
};
_s(Explore, "wjmfb4tFz4Gt2OWjkM/TgwucfMo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = Explore;
const __TURBOPACK__default__export__ = Explore;
function _temp(state) {
    return state.width;
}
var _c;
__turbopack_context__.k.register(_c, "Explore");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Products.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const Products = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "78485e9e9ce7263ae407491bdf0f6a4072ee853e7d418344a1b9ecd24029a359") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "78485e9e9ce7263ae407491bdf0f6a4072ee853e7d418344a1b9ecd24029a359";
    }
    const { image, classname, onClick } = t0;
    const t1 = `${classname} min-w-[200px] h-[250px] cursor-pointer rounded-2xl bg-cover bg-center`;
    const t2 = `url('${image}')`;
    let t3;
    if ($[1] !== t2) {
        t3 = {
            backgroundImage: t2,
            backgroundRepeat: "no-repeat"
        };
        $[1] = t2;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== onClick || $[4] !== t1 || $[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: onClick,
            className: t1,
            style: t3
        }, void 0, false, {
            fileName: "[project]/app/components/Products.jsx",
            lineNumber: 30,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = onClick;
        $[4] = t1;
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    return t4;
};
_c = Products;
const __TURBOPACK__default__export__ = Products;
var _c;
__turbopack_context__.k.register(_c, "Products");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/homepage/components/Featured.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// import Products from "../molecules/Products";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Products$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Products.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MyBtn.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const Featured = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43);
    if ($[0] !== "f305822872e7ab32a99b75414e2c73e0a565ffed6d6f4eb9b0361a4dc33979f6") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f305822872e7ab32a99b75414e2c73e0a565ffed6d6f4eb9b0361a4dc33979f6";
    }
    const [featured, setFeatured] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [scrollPercent, setScrollPercent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            0,
            1,
            2,
            3,
            4
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [positionIndexes, setPositionIndexes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            const container = scrollRef.current;
            if (!container) {
                return;
            }
            const scrollLeft = container.scrollLeft;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            const percent = scrollLeft / maxScrollLeft * 100;
            setScrollPercent(percent);
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleScroll = t1;
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ()=>{
            const container_0 = scrollRef.current;
            if (container_0) {
                container_0.addEventListener("scroll", handleScroll);
            }
            return ()=>{
                if (container_0) {
                    container_0.removeEventListener("scroll", handleScroll);
                }
            };
        };
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ()=>{
            fetch("/featured.json").then(_temp).then((data)=>{
                const updated = data.map(_temp2);
                setFeatured(updated);
            });
        };
        t5 = [];
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = (item)=>{
            fetch("/featured.json").then(_temp3).then((data_0)=>{
                const updated_0 = data_0.map((i_0)=>i_0.id === item.id ? {
                        ...i_0,
                        display: !i_0.display
                    } : i_0);
                setFeatured(updated_0);
            });
        };
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const handleDisplay = t6;
    let handleNext;
    let t10;
    let t11;
    let t12;
    let t7;
    let t8;
    let t9;
    if ($[8] !== featured || $[9] !== positionIndexes || $[10] !== scrollPercent) {
        handleNext = ()=>{
            setPositionIndexes((previndexes)=>{
                const updated_1 = previndexes.map((previndex)=>(previndex + 1) % images.length);
                return updated_1;
            });
        };
        let t13;
        if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = [
                "center",
                "left1",
                "left",
                "right",
                "right1"
            ];
            $[18] = t13;
        } else {
            t13 = $[18];
        }
        const positions = t13;
        const images = [
            "/heel1.jpg",
            "/bag1.jpg",
            "/wig1.jpg",
            "/jewel1.jpg",
            "/dress2.jpg"
        ];
        let t14;
        if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = {
                center: {
                    x: "0%",
                    scale: 1,
                    zIndex: 5
                },
                left1: {
                    x: "-90%",
                    scale: 0.7,
                    zIndex: 2
                },
                left: {
                    x: "-180%",
                    scale: 0.5,
                    zIndex: 1
                },
                right: {
                    x: "180%",
                    scale: 0.5,
                    zIndex: 1
                },
                right1: {
                    x: "90%",
                    scale: 0.7,
                    zIndex: 2
                }
            };
            $[19] = t14;
        } else {
            t14 = $[19];
        }
        const imageVariants = t14;
        t9 = "pb-20 md:px-28 md:pt-28 pt-10 md:bg-white ";
        let t15;
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-semibold py-2 md:text-center",
                children: "Curated Elegance"
            }, void 0, false, {
                fileName: "[project]/app/homepage/components/Featured.jsx",
                lineNumber: 159,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[20] = t15;
        } else {
            t15 = $[20];
        }
        if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[#4a4741] px-5",
                children: [
                    t15,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center md:flex-col md:justify-center md:items-center md:pb-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-4xl font-extralight py-2",
                                children: "Inspire your next look"
                            }, void 0, false, {
                                fileName: "[project]/app/homepage/components/Featured.jsx",
                                lineNumber: 165,
                                columnNumber: 160
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                to: "/discover",
                                classname: "px-5 py-3 rounded-3xl bg-[#4a4741] text-[#f7f1e8]",
                                children: "Discover"
                            }, void 0, false, {
                                fileName: "[project]/app/homepage/components/Featured.jsx",
                                lineNumber: 165,
                                columnNumber: 231
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/homepage/components/Featured.jsx",
                        lineNumber: 165,
                        columnNumber: 55
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/homepage/components/Featured.jsx",
                lineNumber: 165,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[21] = t10;
        } else {
            t10 = $[21];
        }
        let t16;
        if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = {
                scrollbarWidth: "none"
            };
            $[22] = t16;
        } else {
            t16 = $[22];
        }
        let t17;
        if ($[23] !== featured) {
            t17 = featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex gap-5 w-max ",
                children: featured.map((item_0, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Products$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        classname: "w-[200px] h-[250px] shrink-0",
                        image: item_0.image,
                        name: item_0.name,
                        description: item_0.description,
                        to: `/product/${item_0.id}`,
                        onClick: ()=>handleDisplay(item_0)
                    }, item_0.id, false, {
                        fileName: "[project]/app/homepage/components/Featured.jsx",
                        lineNumber: 181,
                        columnNumber: 102
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/homepage/components/Featured.jsx",
                lineNumber: 181,
                columnNumber: 25
            }, ("TURBOPACK compile-time value", void 0));
            $[23] = featured;
            $[24] = t17;
        } else {
            t17 = $[24];
        }
        if ($[25] !== t17) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                style: t16,
                className: "w-96 m-auto overflow-auto md:hidden py-10 px-5",
                children: t17
            }, void 0, false, {
                fileName: "[project]/app/homepage/components/Featured.jsx",
                lineNumber: 188,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[25] = t17;
            $[26] = t11;
        } else {
            t11 = $[26];
        }
        const t18 = `${scrollPercent}%`;
        if ($[27] !== t18) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-px w-72 mx-auto bg-[#c3c3c2] my-10 md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: t18
                    },
                    className: "h-px bg-[#4a4741]"
                }, void 0, false, {
                    fileName: "[project]/app/homepage/components/Featured.jsx",
                    lineNumber: 196,
                    columnNumber: 77
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/homepage/components/Featured.jsx",
                lineNumber: 196,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[27] = t18;
            $[28] = t12;
        } else {
            t12 = $[28];
        }
        t7 = "hidden md:flex items-center flex-col justify-center h-[50vh]";
        let t19;
        if ($[29] !== positionIndexes) {
            t19 = (item_1, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                    src: item_1,
                    className: "rounded-lg",
                    initial: "center",
                    animate: positions[positionIndexes[index_0]],
                    variants: imageVariants,
                    transition: {
                        duration: 0.5
                    },
                    style: {
                        width: "20%",
                        position: "absolute"
                    }
                }, index_0, false, {
                    fileName: "[project]/app/homepage/components/Featured.jsx",
                    lineNumber: 207,
                    columnNumber: 34
                }, ("TURBOPACK compile-time value", void 0));
            $[29] = positionIndexes;
            $[30] = t19;
        } else {
            t19 = $[30];
        }
        t8 = images.map(t19);
        $[8] = featured;
        $[9] = positionIndexes;
        $[10] = scrollPercent;
        $[11] = handleNext;
        $[12] = t10;
        $[13] = t11;
        $[14] = t12;
        $[15] = t7;
        $[16] = t8;
        $[17] = t9;
    } else {
        handleNext = $[11];
        t10 = $[12];
        t11 = $[13];
        t12 = $[14];
        t7 = $[15];
        t8 = $[16];
        t9 = $[17];
    }
    let t13;
    if ($[31] !== t7 || $[32] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: t8
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/Featured.jsx",
            lineNumber: 240,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t7;
        $[32] = t8;
        $[33] = t13;
    } else {
        t13 = $[33];
    }
    let t14;
    if ($[34] !== handleNext) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleNext,
            className: "text-[#f7f1e8] bg-[#4a4741] rounded-3xl px-4 text-sm mx-auto w-40 md:block py-3 mt-10 hidden ",
            children: "View styles"
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/Featured.jsx",
            lineNumber: 249,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = handleNext;
        $[35] = t14;
    } else {
        t14 = $[35];
    }
    let t15;
    if ($[36] !== t10 || $[37] !== t11 || $[38] !== t12 || $[39] !== t13 || $[40] !== t14 || $[41] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: [
                t10,
                t11,
                t12,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/app/homepage/components/Featured.jsx",
            lineNumber: 257,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = t10;
        $[37] = t11;
        $[38] = t12;
        $[39] = t13;
        $[40] = t14;
        $[41] = t9;
        $[42] = t15;
    } else {
        t15 = $[42];
    }
    return t15;
};
_s(Featured, "LkkqeRoYq5w3h3Hc5ZOh9Blx04k=");
_c = Featured;
const __TURBOPACK__default__export__ = Featured;
// f7f1e8
function _temp(res) {
    return res.json();
}
function _temp2(i) {
    return {
        ...i,
        display: false
    };
}
function _temp3(res_0) {
    return res_0.json();
}
var _c;
__turbopack_context__.k.register(_c, "Featured");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ArrowRight.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
;
;
;
const ArrowRight = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "938e3de62ac67ab9753c765901589f1fd398c313b10bda06482f169df5983d12") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "938e3de62ac67ab9753c765901589f1fd398c313b10bda06482f169df5983d12";
    }
    const { classname, onclick } = t0;
    let t1;
    if ($[1] !== classname || $[2] !== onclick) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosArrowRoundForward"], {
            onClick: onclick,
            className: classname
        }, void 0, false, {
            fileName: "[project]/app/components/ArrowRight.jsx",
            lineNumber: 17,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = classname;
        $[2] = onclick;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
};
_c = ArrowRight;
const __TURBOPACK__default__export__ = ArrowRight;
var _c;
__turbopack_context__.k.register(_c, "ArrowRight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Plus.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
;
;
;
const Plus = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "b197f994eb078df9142c233902717c00c845b06205f4dff6c4b5d77f1b475453") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b197f994eb078df9142c233902717c00c845b06205f4dff6c4b5d77f1b475453";
    }
    const { classname, onclick } = t0;
    let t1;
    if ($[1] !== classname || $[2] !== onclick) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {
            onClick: onclick,
            className: classname
        }, void 0, false, {
            fileName: "[project]/app/components/Plus.jsx",
            lineNumber: 17,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = classname;
        $[2] = onclick;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
};
_c = Plus;
const __TURBOPACK__default__export__ = Plus;
var _c;
__turbopack_context__.k.register(_c, "Plus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/homepage/components/FFIDisplay.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ArrowLeft$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ArrowLeft.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ArrowRight$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ArrowRight.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MyBtn.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Plus$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Plus.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$XBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/XBar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
const FFIDisplay = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "dc69cca7709dba07e2fa13bf35413a574c8a386560e493f1c557b52fc387b795") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dc69cca7709dba07e2fa13bf35413a574c8a386560e493f1c557b52fc387b795";
    }
    const [ffiCategory, setFfiCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [scrollPercent, setScrollPercent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { screenWidth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_temp);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ()=>{
            fetch("/category.json").then(_temp2).then((data)=>{
                const updated = data.map(_temp3);
                setFfiCategory(updated);
            });
        };
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ()=>{
            const container = scrollRef.current;
            if (!container) {
                return;
            }
            const scrollLeft = container.scrollLeft;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            const percent = scrollLeft / maxScrollLeft * 100;
            setScrollPercent(percent);
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleScroll = t2;
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ()=>{
            const container_0 = scrollRef.current;
            if (container_0) {
                container_0.addEventListener("scroll", handleScroll);
            }
            return ()=>{
                if (container_0) {
                    container_0.removeEventListener("scroll", handleScroll);
                }
            };
        };
        t4 = [];
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] !== ffiCategory || $[7] !== screenWidth) {
        t5 = (box)=>{
            if (screenWidth < 768) {
                const updateCat = ffiCategory.map((i)=>i.id === box.id ? {
                        ...i,
                        showText: !i.showText
                    } : i);
                setFfiCategory(updateCat);
            } else {
                const updateCat_0 = ffiCategory.map((i_0)=>i_0.id === box.id ? {
                        ...i_0,
                        LgShow: !i_0.LgShow
                    } : i_0);
                setFfiCategory(updateCat_0);
            }
        };
        $[6] = ffiCategory;
        $[7] = screenWidth;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const handlePlus = t5;
    let t6;
    if ($[9] !== ffiCategory) {
        t6 = ()=>{
            const currentIndex = ffiCategory.findIndex(_temp4);
            if (currentIndex !== -1 && currentIndex < ffiCategory.length - 1) {
                const updated_0 = ffiCategory.map((item_1, idx)=>({
                        ...item_1,
                        showText: idx === currentIndex + 1
                    }));
                setFfiCategory(updated_0);
            }
        };
        $[9] = ffiCategory;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const handleArrowRight = t6;
    let t7;
    if ($[11] !== ffiCategory) {
        t7 = ()=>{
            const currentIndex_0 = ffiCategory.findIndex(_temp5);
            if (currentIndex_0 > 0) {
                const updated_1 = ffiCategory.map((item_3, idx_0)=>({
                        ...item_3,
                        showText: idx_0 === currentIndex_0 - 1
                    }));
                setFfiCategory(updated_1);
            }
        };
        $[11] = ffiCategory;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    const handleArrowLeft = t7;
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col item-center  gap-8 md:justify-center  md:py-20 ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-[rgb(74,71,65)] text-4xl font-extralight text-center md:text-7xl md:w-[50%] md:font-light md:leading-24 md:mx-auto",
                    children: [
                        "FFI Membership gives your body a",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                            className: "slant font-serif italic",
                            children: "voice"
                        }, void 0, false, {
                            fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                            lineNumber: 141,
                            columnNumber: 262
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                    lineNumber: 141,
                    columnNumber: 89
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    to: "/about-us",
                    classname: "bg-[rgb(74,71,65)] w-32 text-center mx-auto px-5 py-3 rounded-4xl",
                    children: "Why FFI"
                }, void 0, false, {
                    fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                    lineNumber: 141,
                    columnNumber: 317
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
            lineNumber: 141,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            scrollbarWidth: "none"
        };
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== ffiCategory || $[16] !== handleArrowLeft || $[17] !== handleArrowRight || $[18] !== handlePlus) {
        t10 = ffiCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-max gap-8 md:h-full",
            children: ffiCategory.map((box_0, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: box_0.showText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-30 overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: `url('${box_0.image}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                },
                                className: "min-h-[50vh] md:h-1/2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-linear-to-b from-black/0 to-black w-full min-h-[50vh] md:h-96 p-5 md:p-7 flex flex-col justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-white/40 backdrop-blur-3xl px-3 py-1.5 md:px-5 md:py-2 rounded-3xl text-sm md:text-base",
                                                    children: box_0.Tag
                                                }, void 0, false, {
                                                    fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                    lineNumber: 161,
                                                    columnNumber: 222
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$XBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    onclick: ()=>handlePlus(box_0),
                                                    classname: "p-1.5 md:p-2 stroke-2 size-8 md:size-10 bg-white text-[#4a4741] rounded-full cursor-pointer"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                    lineNumber: 161,
                                                    columnNumber: 349
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                            lineNumber: 161,
                                            columnNumber: 171
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-2xl md:text-3xl lg:text-4xl font-light",
                                                        children: box_0.Heading
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                        lineNumber: 161,
                                                        columnNumber: 511
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "py-2 md:py-3 text-sm md:text-base leading-relaxed",
                                                        children: box_0.Paragraph
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                        lineNumber: 161,
                                                        columnNumber: 591
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                lineNumber: 161,
                                                columnNumber: 506
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                            lineNumber: 161,
                                            columnNumber: 501
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                    lineNumber: 161,
                                    columnNumber: 48
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                lineNumber: 157,
                                columnNumber: 192
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black p-5 md:p-7 min-h-[50vh] md:h-1/2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-neutral-900 min-h-[40vh] md:h-[70%] rounded-xl px-4 py-6 md:px-6 md:py-10 flex flex-col justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-base md:text-lg",
                                                children: box_0.ProfileName
                                            }, void 0, false, {
                                                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                lineNumber: 161,
                                                columnNumber: 890
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-light text-base md:text-lg",
                                                children: box_0.SpotlightTitle
                                            }, void 0, false, {
                                                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                lineNumber: 161,
                                                columnNumber: 965
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm md:text-base leading-relaxed",
                                                children: [
                                                    '"',
                                                    box_0.Quote,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                lineNumber: 161,
                                                columnNumber: 1038
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                        lineNumber: 161,
                                        columnNumber: 760
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 items-center gap-4 py-5 md:flex md:justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                to: "/learn-more",
                                                classname: "bg-[#f7f1e8] text-[#4a4741] px-4 py-2.5 md:p-3 rounded-3xl text-sm md:text-base text-center",
                                                children: "Learn More"
                                            }, void 0, false, {
                                                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                lineNumber: 161,
                                                columnNumber: 1200
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3 md:gap-5 justify-end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ArrowLeft$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        onclick: handleArrowLeft,
                                                        classname: "p-2 md:p-3 bg-neutral-900 rounded-full size-10 md:size-13"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                        lineNumber: 161,
                                                        columnNumber: 1395
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ArrowRight$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        onclick: handleArrowRight,
                                                        classname: "p-2 md:p-3 bg-neutral-900 rounded-full size-10 md:size-13"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                        lineNumber: 161,
                                                        columnNumber: 1504
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                lineNumber: 161,
                                                columnNumber: 1346
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                        lineNumber: 161,
                                        columnNumber: 1115
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                lineNumber: 161,
                                columnNumber: 701
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                        lineNumber: 157,
                        columnNumber: 140
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: box_0.LgShow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: `url('${box_0.image}')`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "top"
                                    },
                                    className: "rounded-lg h-96 md:h-full w-[320px] md:w-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-linear-to-b from-black/0 to-black/70 w-80 h-96 rounded-lg p-7 flex flex-col justify-between md:h-full md:w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-white/40 backdrop-blur-3xl px-5 py-2 rounded-3xl",
                                                        children: box_0.Tag
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 258
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    box_0.LgShow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$XBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            onclick: ()=>handlePlus(box_0),
                                                            classname: "p-2 stroke-2 size-10 bg-white  text-[#4a4741] rounded-full cursor-pointer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                            lineNumber: 165,
                                                            columnNumber: 364
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Plus$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        onclick: ()=>handlePlus(box_0),
                                                        classname: "p-2 size-10 bg-white  text-[#4a4741] rounded-full cursor-pointer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 498
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                lineNumber: 165,
                                                columnNumber: 207
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-3xl md:text-3xl md:font-extralight md:w-[40%]",
                                                                children: box_0.Heading
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                                lineNumber: 165,
                                                                columnNumber: 699
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: box_0.LgShow ? "block w-[40%]" : "hidden",
                                                                children: box_0.Paragraph
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                                lineNumber: 165,
                                                                columnNumber: 786
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                to: "/learn-more",
                                                                classname: "bg-[#f7f1e8] text-[#4a4741] px-7 py-3 rounded-3xl w-48 text-center",
                                                                children: "Learn More"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                                lineNumber: 165,
                                                                columnNumber: 864
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 662
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "backdrop-blur-md h-min bg-neutral-100/30 rounded-xl px-6 py-5 flex flex-col gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-semibold",
                                                                children: box_0.ProfileName
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                                lineNumber: 165,
                                                                columnNumber: 1090
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-light text-lg",
                                                                children: box_0.SpotlightTitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                                lineNumber: 165,
                                                                columnNumber: 1144
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    '"',
                                                                    box_0.Quote,
                                                                    '"'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                                lineNumber: 165,
                                                                columnNumber: 1204
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 991
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                lineNumber: 165,
                                                columnNumber: 624
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                        lineNumber: 165,
                                        columnNumber: 75
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                    lineNumber: 161,
                                    columnNumber: 1689
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                lineNumber: 161,
                                columnNumber: 1662
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: `url('${box_0.image}')`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    },
                                    className: "rounded-lg h-96 md:h-full w-[320px] md:w-175",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-linear-to-b from-black/0 to-black/70 w-80 h-96 rounded-lg p-7 flex flex-col justify-between md:h-full md:w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-white/40 backdrop-blur-3xl px-5 py-2 rounded-3xl",
                                                        children: box_0.Tag
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                        lineNumber: 169,
                                                        columnNumber: 258
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Plus$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        onclick: ()=>handlePlus(box_0),
                                                        classname: "p-2 size-10 bg-white  text-[#4a4741] rounded-full cursor-pointer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                        lineNumber: 169,
                                                        columnNumber: 346
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                lineNumber: 169,
                                                columnNumber: 207
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "text-3xl md:text-4xl md:font-extralight md:w-[70%]",
                                                            children: box_0.Heading
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                            lineNumber: 169,
                                                            columnNumber: 481
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: box_0.showText ? "block" : "hidden",
                                                            children: box_0.Paragraph
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                            lineNumber: 169,
                                                            columnNumber: 568
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                    lineNumber: 169,
                                                    columnNumber: 476
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                                lineNumber: 169,
                                                columnNumber: 471
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                        lineNumber: 169,
                                        columnNumber: 75
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                    lineNumber: 165,
                                    columnNumber: 1291
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                                lineNumber: 165,
                                columnNumber: 1264
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false)
                    }, void 0, false)
                }, index, false, {
                    fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                    lineNumber: 157,
                    columnNumber: 105
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
            lineNumber: 157,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = ffiCategory;
        $[16] = handleArrowLeft;
        $[17] = handleArrowRight;
        $[18] = handlePlus;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: scrollRef,
            style: t9,
            className: "w-96 mx-auto overflow-auto pt-16 pb-5 md:w-[85%] md:m-auto md:h-[90vh] md:py-28",
            children: t10
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
            lineNumber: 180,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t10;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    const t12 = `${scrollPercent}%`;
    let t13;
    if ($[22] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-px w-72 mx-auto bg-[#c3c3c2] my-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: t12
                },
                className: "h-px bg-[#4a4741]"
            }, void 0, false, {
                fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
                lineNumber: 189,
                columnNumber: 65
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
            lineNumber: 189,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t12;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== t11 || $[25] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-5 py-16",
            children: [
                t8,
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/app/homepage/components/FFIDisplay.jsx",
            lineNumber: 199,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t11;
        $[25] = t13;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    return t14;
};
_s(FFIDisplay, "kVXIQGJqfSXZuOyWfQdRJWgG/qE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = FFIDisplay;
const __TURBOPACK__default__export__ = FFIDisplay;
function _temp(state) {
    return state.width;
}
function _temp2(res) {
    return res.json();
}
function _temp3(item) {
    return {
        ...item,
        showText: false,
        LgShow: false
    };
}
function _temp4(item_0) {
    return item_0.showText === true;
}
function _temp5(item_2) {
    return item_2.showText === true;
}
var _c;
__turbopack_context__.k.register(_c, "FFIDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/homepage/components/Hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MyBtn.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
const Hero = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "ed98b7878de99e81f14e824d305965bdfcf4fe9f32cea33ff839a61f143a10fc") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ed98b7878de99e81f14e824d305965bdfcf4fe9f32cea33ff839a61f143a10fc";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl w-72 mx-auto md:m-0 md:text-7xl md:w-full md:",
            children: [
                "Where Elegance ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "slant",
                    children: "Becomes you"
                }, void 0, false, {
                    fileName: "[project]/app/homepage/components/Hero.jsx",
                    lineNumber: 14,
                    columnNumber: 96
                }, ("TURBOPACK compile-time value", void 0)),
                "."
            ]
        }, void 0, true, {
            fileName: "[project]/app/homepage/components/Hero.jsx",
            lineNumber: 14,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[url('/herotry1.jpg')] pb-10 h-screen bg-no-repeat bg-center bg-cover flex flex-col  items-center justify-end gap-10 md:items-start ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative md:left-24 gap-5 flex flex-col md:h-[60%] md:justify-center md:w-[40%]  text-center md:text-left",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-5 md:gap-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base w-[96%] mx-auto md:m-0 md:font-light md:w-full md:text-xl",
                                children: "Elegant fashion for modern women — discover outfits, accessories, and style tips to elevate your everyday look."
                            }, void 0, false, {
                                fileName: "[project]/app/homepage/components/Hero.jsx",
                                lineNumber: 21,
                                columnNumber: 336
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                to: "/discover",
                                classname: "bg-blue-500 text-sm px-5 py-3 rounded-3xl cursor-pointer hover:bg-blue-700 md:w-[20%] text-center mx-auto md:m-0 md:text-lg md:font-light ",
                                children: "Shop"
                            }, void 0, false, {
                                fileName: "[project]/app/homepage/components/Hero.jsx",
                                lineNumber: 21,
                                columnNumber: 534
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/homepage/components/Hero.jsx",
                        lineNumber: 21,
                        columnNumber: 290
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/homepage/components/Hero.jsx",
                lineNumber: 21,
                columnNumber: 163
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/Hero.jsx",
            lineNumber: 21,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
};
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/homepage/components/StyleGuide.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import React, { useEffect, useState } from "react";
// import MyBtn from "../atoms/MyBtn";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import ArrowLeft from "../atoms/ArrowLeft";
// import ArrowRight from "../atoms/ArrowRight";
// import { Like, Liked, storeAPI } from "../../pages/discovery/DisplayProducts";
// import useFetch from "../../hooks/useFetch";
// import { NavLink } from "react-router-dom";
// import useLikedProducts from "../../hooks/useLikedProducts";
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ArrowLeft$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ArrowLeft.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ArrowRight$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ArrowRight.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MyBtn.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const tips = [
    {
        title: "Layering Like a Pro",
        desc: "Master the monochrome look for an effortlessly sleek vibe.",
        image: "/slide1.jpg"
    },
    {
        title: "Bold Accessories",
        desc: "Use statement pieces to elevate a simple outfit.",
        image: "/slide2.jpg"
    },
    {
        title: "Tailored Fit",
        desc: "A perfect fit adds class to any look. Tailor what matters.",
        image: "/slide3.jpg"
    },
    {
        title: "Textures That Speak",
        desc: "Play with textures like silk, leather, or wool for depth.",
        image: "/slide4.jpg"
    },
    {
        title: "Monochrome Magic",
        desc: "Create a refined look with one color in different tones.",
        image: "/slide5.jpg"
    },
    {
        title: "Minimalism Is Key",
        desc: "Less is more when aiming for a luxury aesthetic.",
        image: "/slide6.jpg"
    }
];
const StyleGuide = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "70eca8caa51ec2136af875573ba3766cf6ad44a9f4253f5d1f26bf3e36137edc") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "70eca8caa51ec2136af875573ba3766cf6ad44a9f4253f5d1f26bf3e36137edc";
    }
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { products } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_temp);
    const FeaturedProducts = products?.filter(_temp2);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ()=>{
            const timeout = setTimeout(()=>{
                setCurrentIndex(_temp3);
            }, 4000);
            return ()=>clearTimeout(timeout);
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== currentIndex) {
        t1 = [
            currentIndex
        ];
        $[2] = currentIndex;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const t2 = "px-5 md:px-12 py-12 bg-[#fafafa] text-[#4a4741]";
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl w-4/5 mx-auto pt-10 pb-5 md:text-4xl font-extralight",
                    children: "Style Tips & Digital Styling Guide"
                }, void 0, false, {
                    fileName: "[project]/app/homepage/components/StyleGuide.jsx",
                    lineNumber: 86,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 max-w-xl mx-auto",
                    children: "Explore our expert tips on how to achieve a luxurious, fashionable look with confidence."
                }, void 0, false, {
                    fileName: "[project]/app/homepage/components/StyleGuide.jsx",
                    lineNumber: 86,
                    columnNumber: 166
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/homepage/components/StyleGuide.jsx",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            to: "/guide",
            classname: "block px-6 py-3 rounded-full transition bg-[#4a4741] w-max text-[#f7f1e8] text-center m-auto",
            children: "Explore the Use Guide"
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/StyleGuide.jsx",
            lineNumber: 87,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    const t5 = "md:max-w-[80vw] md:mx-auto";
    const t6 = "grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 z-10  sm:grid-cols-2";
    const t7 = FeaturedProducts && FeaturedProducts.slice(0, 8).map(_temp4);
    let t8;
    if ($[6] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t6,
                children: t7
            }, void 0, false, {
                fileName: "[project]/app/homepage/components/StyleGuide.jsx",
                lineNumber: 99,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/StyleGuide.jsx",
            lineNumber: 99,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t7;
        $[7] = t8;
    } else {
        t8 = $[7];
    }
    let t9;
    if ($[8] !== t3 || $[9] !== t4 || $[10] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t2,
            children: [
                t3,
                t4,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/app/homepage/components/StyleGuide.jsx",
            lineNumber: 107,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t3;
        $[9] = t4;
        $[10] = t8;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    return t9;
};
_s(StyleGuide, "VEOLJXq/ox6eFQu6a8J2PjBfluM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = StyleGuide;
const __TURBOPACK__default__export__ = StyleGuide;
function _temp(state) {
    return state.context;
}
function _temp2(item) {
    return item.trending === true;
}
function _temp3(prev) {
    const nextIndex = (prev + 1) % 6;
    return nextIndex;
}
function _temp4(product) {
    const isLiked = likedProducts.includes(product.id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
        to: `/discover/${product.id}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: product.image,
                        alt: product.title,
                        className: "w-full md:h-96 h-48 object-cover mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-4"
                    }, void 0, false, {
                        fileName: "[project]/app/homepage/components/StyleGuide.jsx",
                        lineNumber: 130,
                        columnNumber: 93
                    }, this),
                    isLiked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Liked, {
                        onClick: (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            dislike(product.id);
                        },
                        className: "absolute top-2 right-2 bg-[#4a4741] p-1.5 text-[#f7f1e8] rounded-full size-7"
                    }, void 0, false, {
                        fileName: "[project]/app/homepage/components/StyleGuide.jsx",
                        lineNumber: 130,
                        columnNumber: 282
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Like, {
                        onClick: (e_0)=>{
                            e_0.preventDefault();
                            e_0.stopPropagation();
                            like(product.id);
                        },
                        className: "absolute top-2 right-2 bg-[#4a4741] p-1 text-[#f7f1e8] rounded-full size-8"
                    }, void 0, false, {
                        fileName: "[project]/app/homepage/components/StyleGuide.jsx",
                        lineNumber: 134,
                        columnNumber: 104
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/homepage/components/StyleGuide.jsx",
                lineNumber: 130,
                columnNumber: 67
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-light mb-2",
                        children: [
                            product.title.slice(0, 20),
                            "..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/homepage/components/StyleGuide.jsx",
                        lineNumber: 138,
                        columnNumber: 111
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700 font-semibold mb-2",
                            children: [
                                "$",
                                product.price
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/homepage/components/StyleGuide.jsx",
                            lineNumber: 138,
                            columnNumber: 225
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/homepage/components/StyleGuide.jsx",
                        lineNumber: 138,
                        columnNumber: 187
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/homepage/components/StyleGuide.jsx",
                lineNumber: 138,
                columnNumber: 106
            }, this)
        ]
    }, product.id, true, {
        fileName: "[project]/app/homepage/components/StyleGuide.jsx",
        lineNumber: 130,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "StyleGuide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/homepage/components/StyleMoments.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MyBtn.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const StyleMoments = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "b72e46cf223d3ba64a25d35313c2e7f7fdaaae4082d0876458d9b1170e847236") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b72e46cf223d3ba64a25d35313c2e7f7fdaaae4082d0876458d9b1170e847236";
    }
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [border, setBorder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                id: 1,
                title: "Starting Her Day",
                quote: "Every outfit from ELEGANCE+ gives me that 'I\u2019m ready to win' energy.",
                author: "Chiamaka B.",
                role: "ELEGANCE+ Woman",
                img: "/sit.jpg",
                overlay: "/stat3.avif"
            },
            {
                id: 2,
                title: "Stepping Out",
                quote: "Wearing this, I don\u2019t just feel dressed\u2014I feel defined",
                author: "Ugochi M.",
                role: "ELEGANCE+ Muse",
                img: "/step.jpg",
                overlay: "/stat4.avif"
            },
            {
                id: 3,
                title: "Weathering the Mood",
                quote: "The comfort, the fit, the compliments\u2014I never knew clothing could feel like this.",
                author: "Ada O.",
                role: "ELEGANCE+ Loyalist",
                img: "/feel.avif",
                overlay: "/stat5.avif"
            },
            {
                id: 4,
                title: " Power in the Pause",
                quote: "It's not just fashion. It's how I reset, recharge, and remind myself who I am..",
                author: "Lena M.",
                role: " ELEGANCE+ Muse",
                img: "/mood.avif",
                overlay: "/stat6.avif"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [moments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = (index)=>{
            setCurrentIndex(index);
            setBorder(index);
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleclick = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-semibold text-2xl md:text-3xl md:font-normal",
            children: "Form meets Fashion"
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/StyleMoments.jsx",
            lineNumber: 67,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl font-light md:w-[60%] md:text-7xl md:leading-20",
            children: [
                "Effortless elegance, designed to move",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "slant md:ml-5",
                    children: "with you."
                }, void 0, false, {
                    fileName: "[project]/app/homepage/components/StyleMoments.jsx",
                    lineNumber: 74,
                    columnNumber: 120
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/homepage/components/StyleMoments.jsx",
            lineNumber: 74,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-5 items-start  px-5",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-5 md:flex md:flex-row md:justify-between md:pb-20",
                    children: [
                        t3,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-5 md:w-[40%] md:flex md:flex-col md:items-start md:gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium md:text-lg md:font-normal md:py-10",
                                    children: "By your side—day or night—our pieces are tailored to fit your story. Feel empowered in outfits that blend timeless design with everyday comfort. Your wardrobe should work for you, not the other way around."
                                }, void 0, false, {
                                    fileName: "[project]/app/homepage/components/StyleMoments.jsx",
                                    lineNumber: 81,
                                    columnNumber: 250
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    to: "/style-with-us",
                                    classname: "bg-[#4a4741] text-[#f7f1e8] px-5 py-3 rounded-3xl md:text-lg w-40 text-center ",
                                    children: "How to style"
                                }, void 0, false, {
                                    fileName: "[project]/app/homepage/components/StyleMoments.jsx",
                                    lineNumber: 81,
                                    columnNumber: 529
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/homepage/components/StyleMoments.jsx",
                            lineNumber: 81,
                            columnNumber: 158
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/homepage/components/StyleMoments.jsx",
                    lineNumber: 81,
                    columnNumber: 69
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/homepage/components/StyleMoments.jsx",
            lineNumber: 81,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== moments) {
        t5 = moments.map(_temp);
        $[6] = moments;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:hidden",
            children: t5
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/StyleMoments.jsx",
            lineNumber: 96,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== border || $[11] !== moments) {
        let t8;
        if ($[13] !== border) {
            t8 = (item_0, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: ()=>handleclick(idx),
                    className: `text-lg font-medium cursor-pointer ${border === idx && "border-b-2 border-[#4a4741] pb-3 px-3"}`,
                    children: item_0.title
                }, item_0.id, false, {
                    fileName: "[project]/app/homepage/components/StyleMoments.jsx",
                    lineNumber: 106,
                    columnNumber: 29
                }, ("TURBOPACK compile-time value", void 0));
            $[13] = border;
            $[14] = t8;
        } else {
            t8 = $[14];
        }
        t7 = moments.map(t8);
        $[10] = border;
        $[11] = moments;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " justify-between border-b mb-20 border-neutral-300 pt-5 hidden md:flex",
            children: t7
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/StyleMoments.jsx",
            lineNumber: 121,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== currentIndex || $[18] !== moments) {
        let t10;
        if ($[20] !== currentIndex) {
            t10 = (item_1, idx_0)=>idx_0 === currentIndex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item_1.img,
                            className: "absolute h-[90%] top-0 left-[14%] rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/app/homepage/components/StyleMoments.jsx",
                            lineNumber: 131,
                            columnNumber: 92
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item_1.overlay,
                            className: "absolute bg-black/30 backdrop-blur-md top-40 left-[40%] rounded-lg h-72 w-72 object-center object-cover"
                        }, void 0, false, {
                            fileName: "[project]/app/homepage/components/StyleMoments.jsx",
                            lineNumber: 131,
                            columnNumber: 173
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/stretch-legs.avif",
                            className: "absolute bg-black/30 backdrop-blur-md top-10 left-[45%] rounded-lg h-24"
                        }, void 0, false, {
                            fileName: "[project]/app/homepage/components/StyleMoments.jsx",
                            lineNumber: 131,
                            columnNumber: 317
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bg-transparent border border-[#4a4741] top-[30%] right-[21%] rounded-lg h-72 w-60 text-[#4a4741] px-5 py-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "quote text-2xl font-light pb-5",
                                    children: item_1.quote
                                }, void 0, false, {
                                    fileName: "[project]/app/homepage/components/StyleMoments.jsx",
                                    lineNumber: 131,
                                    columnNumber: 566
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium",
                                    children: [
                                        item_1.author,
                                        ", ",
                                        item_1.role
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/homepage/components/StyleMoments.jsx",
                                    lineNumber: 131,
                                    columnNumber: 632
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/homepage/components/StyleMoments.jsx",
                            lineNumber: 131,
                            columnNumber: 433
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, item_1.id, true, {
                    fileName: "[project]/app/homepage/components/StyleMoments.jsx",
                    lineNumber: 131,
                    columnNumber: 58
                }, ("TURBOPACK compile-time value", void 0));
            $[20] = currentIndex;
            $[21] = t10;
        } else {
            t10 = $[21];
        }
        t9 = moments.map(t10);
        $[17] = currentIndex;
        $[18] = moments;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[22] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-10 h-[60vh] relative hidden md:block",
            children: t9
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/StyleMoments.jsx",
            lineNumber: 146,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t9;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] !== t10 || $[25] !== t6 || $[26] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[#4a4741] md:px-28",
            children: [
                t4,
                t6,
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/app/homepage/components/StyleMoments.jsx",
            lineNumber: 154,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t10;
        $[25] = t6;
        $[26] = t8;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    return t11;
};
_s(StyleMoments, "EM0+qGSauQ23HbqiUbR0p940CUg=");
_c = StyleMoments;
const __TURBOPACK__default__export__ = StyleMoments;
/* f7f1e8 */ /* 4a4741 */ function _temp(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: " px-5 text-3xl font-extralight py-5",
                children: item.title
            }, void 0, false, {
                fileName: "[project]/app/homepage/components/StyleMoments.jsx",
                lineNumber: 168,
                columnNumber: 29
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[90vh]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: item.img,
                        className: "h-[60vh] object-cover w-full"
                    }, void 0, false, {
                        fileName: "[project]/app/homepage/components/StyleMoments.jsx",
                        lineNumber: 168,
                        columnNumber: 133
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: item.overlay,
                        className: "absolute top-72 left-10 backdrop-blur-3xl bg-black/20 w-[80%] rounded-2xl"
                    }, void 0, false, {
                        fileName: "[project]/app/homepage/components/StyleMoments.jsx",
                        lineNumber: 168,
                        columnNumber: 196
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/homepage/components/StyleMoments.jsx",
                lineNumber: 168,
                columnNumber: 98
            }, this)
        ]
    }, item.id, true, {
        fileName: "[project]/app/homepage/components/StyleMoments.jsx",
        lineNumber: 168,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "StyleMoments");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/homepage/components/Testimonial.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Card = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "36a128285f8b955ffcf36089622a473d4ab313948f1dbd82f06f5a0175df3f96") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "36a128285f8b955ffcf36089622a473d4ab313948f1dbd82f06f5a0175df3f96";
    }
    const { name, testimony, img } = t0;
    let t1;
    if ($[1] !== img) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            className: "w-14 h-14 object-cover object-center rounded-full",
            src: img
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/Testimonial.jsx",
            lineNumber: 19,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = img;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== name) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
            className: "font-bold pt-1 pb-3",
            children: name
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/Testimonial.jsx",
            lineNumber: 27,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = name;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== testimony) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: testimony
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/Testimonial.jsx",
            lineNumber: 35,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = testimony;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center gap-1 py-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStar"], {
                    className: "text-[#4a4741] text-xs"
                }, void 0, false, {
                    fileName: "[project]/app/homepage/components/Testimonial.jsx",
                    lineNumber: 43,
                    columnNumber: 71
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStar"], {
                    className: "text-[#4a4741] text-xs"
                }, void 0, false, {
                    fileName: "[project]/app/homepage/components/Testimonial.jsx",
                    lineNumber: 43,
                    columnNumber: 116
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStar"], {
                    className: "text-[#4a4741] text-xs"
                }, void 0, false, {
                    fileName: "[project]/app/homepage/components/Testimonial.jsx",
                    lineNumber: 43,
                    columnNumber: 161
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStar"], {
                    className: "text-[#4a4741] text-xs"
                }, void 0, false, {
                    fileName: "[project]/app/homepage/components/Testimonial.jsx",
                    lineNumber: 43,
                    columnNumber: 206
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStar"], {
                    className: "text-[#4a4741] text-xs"
                }, void 0, false, {
                    fileName: "[project]/app/homepage/components/Testimonial.jsx",
                    lineNumber: 43,
                    columnNumber: 251
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/homepage/components/Testimonial.jsx",
            lineNumber: 43,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t1 || $[9] !== t2 || $[10] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-between items-center text-center bg-white w-80 px-5 py-8 rounded-xl h-72 m-auto",
            children: [
                t1,
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/app/homepage/components/Testimonial.jsx",
            lineNumber: 50,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t1;
        $[9] = t2;
        $[10] = t3;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    return t5;
};
_c = Card;
const Testimonial = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "36a128285f8b955ffcf36089622a473d4ab313948f1dbd82f06f5a0175df3f96") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "36a128285f8b955ffcf36089622a473d4ab313948f1dbd82f06f5a0175df3f96";
    }
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                name: "Ugochi F, p",
                img: "/user2.jpeg",
                testimony: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, natus."
            },
            {
                name: "Francis Pop",
                img: "/user1.jpeg",
                testimony: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ea aut placeat deleniti repellendus corrupti!"
            },
            {
                name: "Elesh Cairo",
                img: "/sit.jpg",
                testimony: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, natus."
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const details = t0;
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            const interval = setInterval(()=>{
                setSelectedIndex((prev)=>(prev + 1) % details.length);
            }, 4000);
            return ()=>clearInterval(interval);
        };
        t2 = [
            details.length
        ];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "py-8 text-3xl md:text-center",
                children: "Testimonials"
            }, void 0, false, {
                fileName: "[project]/app/homepage/components/Testimonial.jsx",
                lineNumber: 108,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/Testimonial.jsx",
            lineNumber: 108,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== selectedIndex) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center items-center gap-5 w-max md:hidden",
            children: details.map((card, idx)=>selectedIndex === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                    name: card.name,
                    testimony: card.testimony,
                    img: card.img
                }, idx, false, {
                    fileName: "[project]/app/homepage/components/Testimonial.jsx",
                    lineNumber: 115,
                    columnNumber: 144
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/Testimonial.jsx",
            lineNumber: 115,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = selectedIndex;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " grid-cols-3 gap-7 hidden md:grid",
            children: details.map(_temp)
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/Testimonial.jsx",
            lineNumber: 123,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-auto flex justify-center",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/app/homepage/components/Testimonial.jsx",
            lineNumber: 130,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t4;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== selectedIndex) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-12 m-auto my-8 flex justify-between items-center md:hidden",
            children: details.map((_, idx_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center w-2 h-2 bg-[#4a4741] rounded-full",
                    children: selectedIndex === idx_1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1 h-1 bg-white rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/app/homepage/components/Testimonial.jsx",
                        lineNumber: 138,
                        columnNumber: 239
                    }, ("TURBOPACK compile-time value", void 0))
                }, idx_1, false, {
                    fileName: "[project]/app/homepage/components/Testimonial.jsx",
                    lineNumber: 138,
                    columnNumber: 115
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/Testimonial.jsx",
            lineNumber: 138,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = selectedIndex;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t6 || $[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "text-[#4a4741] py-20 px-5",
            children: [
                t3,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/app/homepage/components/Testimonial.jsx",
            lineNumber: 146,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t6;
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    return t8;
};
_s(Testimonial, "D4YQCQY2pZ6fGhoc4JfJZCPfwwU=");
_c1 = Testimonial;
const __TURBOPACK__default__export__ = Testimonial;
function _temp(card_0, idx_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
        name: card_0.name,
        testimony: card_0.testimony,
        img: card_0.img
    }, idx_0, false, {
        fileName: "[project]/app/homepage/components/Testimonial.jsx",
        lineNumber: 157,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "Testimonial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/homepage/components/TopBar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TopBar = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "8439fd2e9d459b6027385244bd017fb94670397646bbc8cc0edc530fa825590d") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8439fd2e9d459b6027385244bd017fb94670397646bbc8cc0edc530fa825590d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            "Discover timeless elegance \u2014 new arrivals just dropped!",
            "Elevate your wardrobe with exclusive designs \u2014 Shop our latest collection.",
            "Elegance redefined \u2014 Your journey to flawless style starts here."
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const topInfo = t0;
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            const interval = setInterval(()=>{
                setCurrentIndex((prevIndex)=>(prevIndex + 1) % topInfo.length);
            }, 5000);
            return ()=>clearInterval(interval);
        };
        t2 = [
            topInfo.length
        ];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const t3 = topInfo[currentIndex];
    let t4;
    if ($[4] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-black font-semibold m-auto",
                children: t3
            }, void 0, false, {
                fileName: "[project]/app/homepage/components/TopBar.jsx",
                lineNumber: 42,
                columnNumber: 32
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/homepage/components/TopBar.jsx",
            lineNumber: 42,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
};
_s(TopBar, "tPjzCc9H5UuFdWNuAHYoD0K4UOk=");
_c = TopBar;
const __TURBOPACK__default__export__ = TopBar;
var _c;
__turbopack_context__.k.register(_c, "TopBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/homepage/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$homepage$2f$components$2f$Explore$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/homepage/components/Explore.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$homepage$2f$components$2f$Featured$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/homepage/components/Featured.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$homepage$2f$components$2f$FFIDisplay$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/homepage/components/FFIDisplay.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$homepage$2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/homepage/components/Hero.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$homepage$2f$components$2f$StyleGuide$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/homepage/components/StyleGuide.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$homepage$2f$components$2f$StyleMoments$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/homepage/components/StyleMoments.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$homepage$2f$components$2f$Testimonial$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/homepage/components/Testimonial.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$homepage$2f$components$2f$TopBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/homepage/components/TopBar.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
const HomePage = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "4820d56cda281827e8c6cb760f30fe8e5cc465a1665dca3b904c2591b85dbbc1") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4820d56cda281827e8c6cb760f30fe8e5cc465a1665dca3b904c2591b85dbbc1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative text-white overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$homepage$2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/homepage/page.jsx",
                        lineNumber: 22,
                        columnNumber: 65
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$homepage$2f$components$2f$Explore$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/homepage/page.jsx",
                        lineNumber: 22,
                        columnNumber: 73
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$homepage$2f$components$2f$FFIDisplay$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/homepage/page.jsx",
                        lineNumber: 22,
                        columnNumber: 84
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$homepage$2f$components$2f$StyleMoments$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/homepage/page.jsx",
                        lineNumber: 22,
                        columnNumber: 98
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$homepage$2f$components$2f$Featured$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/homepage/page.jsx",
                        lineNumber: 22,
                        columnNumber: 114
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$homepage$2f$components$2f$StyleGuide$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/homepage/page.jsx",
                        lineNumber: 22,
                        columnNumber: 126
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$homepage$2f$components$2f$Testimonial$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/homepage/page.jsx",
                        lineNumber: 22,
                        columnNumber: 140
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/homepage/page.jsx",
                lineNumber: 22,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = HomePage;
const __TURBOPACK__default__export__ = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_2125368a._.js.map