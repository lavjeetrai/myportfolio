(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/potifolio-main/potifolio-main/src/components/ErrorReporter.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ErrorReporter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ErrorReporter({ error, reset }) {
    _s();
    /* ─ instrumentation shared by every route ─ */ const lastOverlayMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const pollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ErrorReporter.useEffect": ()=>{
            const inIframe = window.parent !== window;
            if (!inIframe) return;
            const send = {
                "ErrorReporter.useEffect.send": (payload)=>window.parent.postMessage(payload, "*")
            }["ErrorReporter.useEffect.send"];
            const onError = {
                "ErrorReporter.useEffect.onError": (e)=>send({
                        type: "ERROR_CAPTURED",
                        error: {
                            message: e.message,
                            stack: e.error?.stack,
                            filename: e.filename,
                            lineno: e.lineno,
                            colno: e.colno,
                            source: "window.onerror"
                        },
                        timestamp: Date.now()
                    })
            }["ErrorReporter.useEffect.onError"];
            const onReject = {
                "ErrorReporter.useEffect.onReject": (e)=>send({
                        type: "ERROR_CAPTURED",
                        error: {
                            message: e.reason?.message ?? String(e.reason),
                            stack: e.reason?.stack,
                            source: "unhandledrejection"
                        },
                        timestamp: Date.now()
                    })
            }["ErrorReporter.useEffect.onReject"];
            const pollOverlay = {
                "ErrorReporter.useEffect.pollOverlay": ()=>{
                    const overlay = document.querySelector("[data-nextjs-dialog-overlay]");
                    const node = overlay?.querySelector("h1, h2, .error-message, [data-nextjs-dialog-body]") ?? null;
                    const txt = node?.textContent ?? node?.innerHTML ?? "";
                    if (txt && txt !== lastOverlayMsg.current) {
                        lastOverlayMsg.current = txt;
                        send({
                            type: "ERROR_CAPTURED",
                            error: {
                                message: txt,
                                source: "nextjs-dev-overlay"
                            },
                            timestamp: Date.now()
                        });
                    }
                }
            }["ErrorReporter.useEffect.pollOverlay"];
            window.addEventListener("error", onError);
            window.addEventListener("unhandledrejection", onReject);
            pollRef.current = setInterval(pollOverlay, 1000);
            return ({
                "ErrorReporter.useEffect": ()=>{
                    window.removeEventListener("error", onError);
                    window.removeEventListener("unhandledrejection", onReject);
                    pollRef.current && clearInterval(pollRef.current);
                }
            })["ErrorReporter.useEffect"];
        }
    }["ErrorReporter.useEffect"], []);
    /* ─ extra postMessage when on the global-error route ─ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ErrorReporter.useEffect": ()=>{
            if (!error) return;
            window.parent.postMessage({
                type: "global-error-reset",
                error: {
                    message: error.message,
                    stack: error.stack,
                    digest: error.digest,
                    name: error.name
                },
                timestamp: Date.now(),
                userAgent: navigator.userAgent
            }, "*");
        }
    }["ErrorReporter.useEffect"], [
        error
    ]);
    /* ─ ordinary pages render nothing ─ */ if (!error) return null;
    /* ─ global-error UI ─ */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "min-h-screen bg-background text-foreground flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md w-full text-center space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-destructive",
                                children: "Something went wrong!"
                            }, void 0, false, {
                                fileName: "[project]/potifolio-main/potifolio-main/src/components/ErrorReporter.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: "An unexpected error occurred. Please try again fixing with Orchids"
                            }, void 0, false, {
                                fileName: "[project]/potifolio-main/potifolio-main/src/components/ErrorReporter.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/potifolio-main/potifolio-main/src/components/ErrorReporter.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: ("TURBOPACK compile-time value", "development") === "development" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                            className: "mt-4 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                    className: "cursor-pointer text-sm text-muted-foreground hover:text-foreground",
                                    children: "Error details"
                                }, void 0, false, {
                                    fileName: "[project]/potifolio-main/potifolio-main/src/components/ErrorReporter.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "mt-2 text-xs bg-muted p-2 rounded overflow-auto",
                                    children: [
                                        error.message,
                                        error.stack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-muted-foreground",
                                            children: error.stack
                                        }, void 0, false, {
                                            fileName: "[project]/potifolio-main/potifolio-main/src/components/ErrorReporter.tsx",
                                            lineNumber: 119,
                                            columnNumber: 21
                                        }, this),
                                        error.digest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-muted-foreground",
                                            children: [
                                                "Digest: ",
                                                error.digest
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/potifolio-main/potifolio-main/src/components/ErrorReporter.tsx",
                                            lineNumber: 124,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/potifolio-main/potifolio-main/src/components/ErrorReporter.tsx",
                                    lineNumber: 116,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/potifolio-main/potifolio-main/src/components/ErrorReporter.tsx",
                            lineNumber: 112,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/potifolio-main/potifolio-main/src/components/ErrorReporter.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/potifolio-main/potifolio-main/src/components/ErrorReporter.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/potifolio-main/potifolio-main/src/components/ErrorReporter.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/potifolio-main/potifolio-main/src/components/ErrorReporter.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(ErrorReporter, "di0lBv7IERZfX0QO5gVW3YWNTLI=");
_c = ErrorReporter;
var _c;
__turbopack_context__.k.register(_c, "ErrorReporter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/potifolio-main/potifolio-main/src/components/SmoothScroll.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SmoothScroll)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SmoothScroll({ children }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScroll.useEffect": ()=>{
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.2,
                easing: {
                    "SmoothScroll.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["SmoothScroll.useEffect"],
                orientation: "vertical",
                gestureOrientation: "vertical",
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 2,
                infinite: false
            });
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
            return ({
                "SmoothScroll.useEffect": ()=>{
                    lenis.destroy();
                }
            })["SmoothScroll.useEffect"];
        }
    }["SmoothScroll.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(SmoothScroll, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SmoothScroll;
var _c;
__turbopack_context__.k.register(_c, "SmoothScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=potifolio-main_potifolio-main_src_components_c37a84fe._.js.map