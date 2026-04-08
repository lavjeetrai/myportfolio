(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clamp": (()=>clamp)
});
const clamp = (min, max, v)=>{
    if (v > max) return max;
    if (v < min) return min;
    return v;
};
;
 //# sourceMappingURL=clamp.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatErrorMessage": (()=>formatErrorMessage)
});
function formatErrorMessage(message, errorCode) {
    return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}
;
 //# sourceMappingURL=format-error-message.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "invariant": (()=>invariant),
    "warning": (()=>warning)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)");
;
let warning = ()=>{};
let invariant = ()=>{};
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") !== "production") {
    warning = (check, message, errorCode)=>{
        if (!check && typeof console !== "undefined") {
            console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
    invariant = (check, message, errorCode)=>{
        if (!check) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
}
;
 //# sourceMappingURL=errors.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */ __turbopack_context__.s({
    "isNumericalString": (()=>isNumericalString)
});
const isNumericalString = (v)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
;
 //# sourceMappingURL=is-numerical-string.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s({
    "noop": (()=>noop)
});
const noop = (any)=>any;
;
 //# sourceMappingURL=noop.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/global-config.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MotionGlobalConfig": (()=>MotionGlobalConfig)
});
const MotionGlobalConfig = {};
;
 //# sourceMappingURL=global-config.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Check if the value is a zero value string like "0px" or "0%"
 */ __turbopack_context__.s({
    "isZeroValueString": (()=>isZeroValueString)
});
const isZeroValueString = (v)=>/^0[^.\s]+$/u.test(v);
;
 //# sourceMappingURL=is-zero-value-string.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hasWarned": (()=>hasWarned),
    "warnOnce": (()=>warnOnce)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)");
;
const warned = new Set();
function hasWarned(message) {
    return warned.has(message);
}
function warnOnce(condition, message, errorCode) {
    if (condition || warned.has(message)) return;
    console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
    warned.add(message);
}
;
 //# sourceMappingURL=warn-once.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addUniqueItem": (()=>addUniqueItem),
    "moveItem": (()=>moveItem),
    "removeItem": (()=>removeItem)
});
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}
;
 //# sourceMappingURL=array.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SubscriptionManager": (()=>SubscriptionManager)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
;
class SubscriptionManager {
    constructor(){
        this.subscriptions = [];
    }
    add(handler) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.subscriptions, handler);
        return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions) return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */ this.subscriptions[0](a, b, c);
        } else {
            for(let i = 0; i < numSubscriptions; i++){
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */ const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
;
 //# sourceMappingURL=subscription-manager.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ __turbopack_context__.s({
    "velocityPerSecond": (()=>velocityPerSecond)
});
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}
;
 //# sourceMappingURL=velocity-per-second.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s({
    "millisecondsToSeconds": (()=>millisecondsToSeconds),
    "secondsToMilliseconds": (()=>secondsToMilliseconds)
});
const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;
;
 //# sourceMappingURL=time-conversion.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/pipe.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */ __turbopack_context__.s({
    "pipe": (()=>pipe)
});
const combineFunctions = (a, b)=>(v)=>b(a(v));
const pipe = (...transformers)=>transformers.reduce(combineFunctions);
;
 //# sourceMappingURL=pipe.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cubicBezier": (()=>cubicBezier)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
;
/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticeably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        } else {
            lowerBound = currentT;
        }
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations)
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
;
 //# sourceMappingURL=cubic-bezier.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "easeIn": (()=>easeIn),
    "easeInOut": (()=>easeInOut),
    "easeOut": (()=>easeOut)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
;
const easeIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 0.58, 1);
;
 //# sourceMappingURL=ease.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isEasingArray": (()=>isEasingArray)
});
const isEasingArray = (ease)=>{
    return Array.isArray(ease) && typeof ease[0] !== "number";
};
;
 //# sourceMappingURL=is-easing-array.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
__turbopack_context__.s({
    "mirrorEasing": (()=>mirrorEasing)
});
const mirrorEasing = (easing)=>(p)=>p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
;
 //# sourceMappingURL=mirror.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
__turbopack_context__.s({
    "reverseEasing": (()=>reverseEasing)
});
const reverseEasing = (easing)=>(p)=>1 - easing(1 - p);
;
 //# sourceMappingURL=reverse.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "backIn": (()=>backIn),
    "backInOut": (()=>backInOut),
    "backOut": (()=>backOut)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)");
;
;
;
const backOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseEasing"])(backOut);
const backInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorEasing"])(backIn);
;
 //# sourceMappingURL=back.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "anticipate": (()=>anticipate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)");
;
const anticipate = (p)=>(p *= 2) < 1 ? 0.5 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backIn"])(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
;
 //# sourceMappingURL=anticipate.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/circ.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "circIn": (()=>circIn),
    "circInOut": (()=>circInOut),
    "circOut": (()=>circOut)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)");
;
;
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseEasing"])(circIn);
const circInOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorEasing"])(circIn);
;
 //# sourceMappingURL=circ.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isBezierDefinition": (()=>isBezierDefinition)
});
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
 //# sourceMappingURL=is-bezier-definition.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "easingDefinitionToFunction": (()=>easingDefinitionToFunction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/circ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const easingLookup = {
    linear: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"],
    easeIn: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeIn"],
    easeInOut: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"],
    easeOut: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"],
    circIn: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circIn"],
    circInOut: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circInOut"],
    circOut: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circOut"],
    backIn: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backIn"],
    backInOut: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backInOut"],
    backOut: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backOut"],
    anticipate: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anticipate"]
};
const isValidEasing = (easing)=>{
    return typeof easing === "string";
};
const easingDefinitionToFunction = (definition)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBezierDefinition"])(definition)) {
        // If cubic bezier definition, create bezier curve
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
        const [x1, y1, x2, y2] = definition;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(x1, y1, x2, y2);
    } else if (isValidEasing(definition)) {
        // Else lookup from table
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`, "invalid-easing-type");
        return easingLookup[definition];
    }
    return definition;
};
;
 //# sourceMappingURL=map.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s({
    "progress": (()=>progress)
});
const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
;
 //# sourceMappingURL=progress.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/memo.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s({
    "memo": (()=>memo)
});
function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}
;
 //# sourceMappingURL=memo.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/motion-utils/dist/es/is-object.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isObject": (()=>isObject)
});
function isObject(value) {
    return typeof value === "object" && value !== null;
}
;
 //# sourceMappingURL=is-object.mjs.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect({
            "useSyncExternalStore$2.useLayoutEffect": function() {
                inst.value = value;
                inst.getSnapshot = getSnapshot;
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            }
        }["useSyncExternalStore$2.useLayoutEffect"], [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect({
            "useSyncExternalStore$2.useEffect": function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
                return subscribe({
                    "useSyncExternalStore$2.useEffect": function() {
                        checkIfSnapshotChanged(inst) && forceUpdate({
                            inst: inst
                        });
                    }
                }["useSyncExternalStore$2.useEffect"]);
            }
        }["useSyncExternalStore$2.useEffect"], [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}}),
"[project]/potifolio-main/potifolio-main/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/potifolio-main/potifolio-main/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)");
}
}}),
"[project]/potifolio-main/potifolio-main/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), shim = __turbopack_context__.r("[project]/potifolio-main/potifolio-main/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
            var inst = {
                hasValue: !1,
                value: null
            };
            instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(function() {
            function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                    hasMemo = !0;
                    memoizedSnapshot = nextSnapshot;
                    nextSnapshot = selector(nextSnapshot);
                    if (void 0 !== isEqual && inst.hasValue) {
                        var currentSelection = inst.value;
                        if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                    }
                    return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
            }
            var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
                function() {
                    return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                }
            ];
        }, [
            getSnapshot,
            getServerSnapshot,
            selector,
            isEqual
        ]);
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(function() {
            inst.hasValue = !0;
            inst.value = value;
        }, [
            value
        ]);
        useDebugValue(value);
        return value;
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}}),
"[project]/potifolio-main/potifolio-main/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/potifolio-main/potifolio-main/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-client] (ecmascript)");
}
}}),
"[project]/potifolio-main/potifolio-main/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createStore": (()=>createStore)
});
const createStoreImpl = (createState)=>{
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const getInitialState = ()=>initialState;
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const api = {
        setState,
        getState,
        getInitialState,
        subscribe
    };
    const initialState = state = createState(setState, getState, api);
    return api;
};
const createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/zustand/esm/traditional.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createWithEqualityFn": (()=>createWithEqualityFn),
    "useStoreWithEqualityFn": (()=>useStoreWithEqualityFn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)");
;
;
;
const { useSyncExternalStoreWithSelector } = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const identity = (arg)=>arg;
function useStoreWithEqualityFn(api, selector = identity, equalityFn) {
    const slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getInitialState, selector, equalityFn);
    __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useDebugValue(slice);
    return slice;
}
const createWithEqualityFnImpl = (createState, defaultEqualityFn)=>{
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])(createState);
    const useBoundStoreWithEqualityFn = (selector, equalityFn = defaultEqualityFn)=>useStoreWithEqualityFn(api, selector, equalityFn);
    Object.assign(useBoundStoreWithEqualityFn, api);
    return useBoundStoreWithEqualityFn;
};
const createWithEqualityFn = (createState, defaultEqualityFn)=>createState ? createWithEqualityFnImpl(createState, defaultEqualityFn) : createWithEqualityFnImpl;
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/suspend-react/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clear": (()=>clear),
    "peek": (()=>peek),
    "preload": (()=>preload),
    "suspend": (()=>suspend)
});
const isPromise = (promise)=>typeof promise === 'object' && typeof promise.then === 'function';
const globalCache = [];
function shallowEqualArrays(arrA, arrB, equal = (a, b)=>a === b) {
    if (arrA === arrB) return true;
    if (!arrA || !arrB) return false;
    const len = arrA.length;
    if (arrB.length !== len) return false;
    for(let i = 0; i < len; i++)if (!equal(arrA[i], arrB[i])) return false;
    return true;
}
function query(fn, keys = null, preload = false, config = {}) {
    // If no keys were given, the function is the key
    if (keys === null) keys = [
        fn
    ];
    for (const entry of globalCache){
        // Find a match
        if (shallowEqualArrays(keys, entry.keys, entry.equal)) {
            // If we're pre-loading and the element is present, just return
            if (preload) return undefined; // If an error occurred, throw
            if (Object.prototype.hasOwnProperty.call(entry, 'error')) throw entry.error; // If a response was successful, return
            if (Object.prototype.hasOwnProperty.call(entry, 'response')) {
                if (config.lifespan && config.lifespan > 0) {
                    if (entry.timeout) clearTimeout(entry.timeout);
                    entry.timeout = setTimeout(entry.remove, config.lifespan);
                }
                return entry.response;
            } // If the promise is still unresolved, throw
            if (!preload) throw entry.promise;
        }
    } // The request is new or has changed.
    const entry = {
        keys,
        equal: config.equal,
        remove: ()=>{
            const index = globalCache.indexOf(entry);
            if (index !== -1) globalCache.splice(index, 1);
        },
        promise: (isPromise(fn) ? fn : fn(...keys) // When it resolves, store its value
        ).then((response)=>{
            entry.response = response; // Remove the entry in time if a lifespan was given
            if (config.lifespan && config.lifespan > 0) {
                entry.timeout = setTimeout(entry.remove, config.lifespan);
            }
        }) // Store caught errors, they will be thrown in the render-phase to bubble into an error-bound
        .catch((error)=>entry.error = error)
    }; // Register the entry
    globalCache.push(entry); // And throw the promise, this yields control back to React
    if (!preload) throw entry.promise;
    return undefined;
}
const suspend = (fn, keys, config)=>query(fn, keys, false, config);
const preload = (fn, keys, config)=>void query(fn, keys, true, config);
const peek = (keys)=>{
    var _globalCache$find;
    return (_globalCache$find = globalCache.find((entry)=>shallowEqualArrays(keys, entry.keys, entry.equal))) == null ? void 0 : _globalCache$find.response;
};
const clear = (keys)=>{
    if (keys === undefined || keys.length === 0) globalCache.splice(0, globalCache.length);
    else {
        const entry = globalCache.find((entry)=>shallowEqualArrays(keys, entry.keys, entry.equal));
        if (entry) entry.remove();
    }
};
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/scheduler/cjs/scheduler.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function performWorkUntilDeadline() {
        needsPaint = !1;
        if (isMessageLoopRunning) {
            var currentTime = exports.unstable_now();
            startTime = currentTime;
            var hasMoreWork = !0;
            try {
                a: {
                    isHostCallbackScheduled = !1;
                    isHostTimeoutScheduled && (isHostTimeoutScheduled = !1, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
                    isPerformingWork = !0;
                    var previousPriorityLevel = currentPriorityLevel;
                    try {
                        b: {
                            advanceTimers(currentTime);
                            for(currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost());){
                                var callback = currentTask.callback;
                                if ("function" === typeof callback) {
                                    currentTask.callback = null;
                                    currentPriorityLevel = currentTask.priorityLevel;
                                    var continuationCallback = callback(currentTask.expirationTime <= currentTime);
                                    currentTime = exports.unstable_now();
                                    if ("function" === typeof continuationCallback) {
                                        currentTask.callback = continuationCallback;
                                        advanceTimers(currentTime);
                                        hasMoreWork = !0;
                                        break b;
                                    }
                                    currentTask === peek(taskQueue) && pop(taskQueue);
                                    advanceTimers(currentTime);
                                } else pop(taskQueue);
                                currentTask = peek(taskQueue);
                            }
                            if (null !== currentTask) hasMoreWork = !0;
                            else {
                                var firstTimer = peek(timerQueue);
                                null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                                hasMoreWork = !1;
                            }
                        }
                        break a;
                    } finally{
                        currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = !1;
                    }
                    hasMoreWork = void 0;
                }
            } finally{
                hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = !1;
            }
        }
    }
    function push(heap, node) {
        var index = heap.length;
        heap.push(node);
        a: for(; 0 < index;){
            var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
            if (0 < compare(parent, node)) heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
            else break a;
        }
    }
    function peek(heap) {
        return 0 === heap.length ? null : heap[0];
    }
    function pop(heap) {
        if (0 === heap.length) return null;
        var first = heap[0], last = heap.pop();
        if (last !== first) {
            heap[0] = last;
            a: for(var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength;){
                var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
                if (0 > compare(left, last)) rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
                else if (rightIndex < length && 0 > compare(right, last)) heap[index] = right, heap[rightIndex] = last, index = rightIndex;
                else break a;
            }
        }
        return first;
    }
    function compare(a, b) {
        var diff = a.sortIndex - b.sortIndex;
        return 0 !== diff ? diff : a.id - b.id;
    }
    function advanceTimers(currentTime) {
        for(var timer = peek(timerQueue); null !== timer;){
            if (null === timer.callback) pop(timerQueue);
            else if (timer.startTime <= currentTime) pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
            else break;
            timer = peek(timerQueue);
        }
    }
    function handleTimeout(currentTime) {
        isHostTimeoutScheduled = !1;
        advanceTimers(currentTime);
        if (!isHostCallbackScheduled) if (null !== peek(taskQueue)) isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline());
        else {
            var firstTimer = peek(timerQueue);
            null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
        }
    }
    function shouldYieldToHost() {
        return needsPaint ? !0 : exports.unstable_now() - startTime < frameInterval ? !1 : !0;
    }
    function requestHostTimeout(callback, ms) {
        taskTimeoutID = localSetTimeout(function() {
            callback(exports.unstable_now());
        }, ms);
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    exports.unstable_now = void 0;
    if ("object" === typeof performance && "function" === typeof performance.now) {
        var localPerformance = performance;
        exports.unstable_now = function() {
            return localPerformance.now();
        };
    } else {
        var localDate = Date, initialTime = localDate.now();
        exports.unstable_now = function() {
            return localDate.now() - initialTime;
        };
    }
    var taskQueue = [], timerQueue = [], taskIdCounter = 1, currentTask = null, currentPriorityLevel = 3, isPerformingWork = !1, isHostCallbackScheduled = !1, isHostTimeoutScheduled = !1, needsPaint = !1, localSetTimeout = "function" === typeof setTimeout ? setTimeout : null, localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null, localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null, isMessageLoopRunning = !1, taskTimeoutID = -1, frameInterval = 5, startTime = -1;
    if ("function" === typeof localSetImmediate) var schedulePerformWorkUntilDeadline = function() {
        localSetImmediate(performWorkUntilDeadline);
    };
    else if ("undefined" !== typeof MessageChannel) {
        var channel = new MessageChannel(), port = channel.port2;
        channel.port1.onmessage = performWorkUntilDeadline;
        schedulePerformWorkUntilDeadline = function() {
            port.postMessage(null);
        };
    } else schedulePerformWorkUntilDeadline = function() {
        localSetTimeout(performWorkUntilDeadline, 0);
    };
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(task) {
        task.callback = null;
    };
    exports.unstable_forceFrameRate = function(fps) {
        0 > fps || 125 < fps ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
        return currentPriorityLevel;
    };
    exports.unstable_next = function(eventHandler) {
        switch(currentPriorityLevel){
            case 1:
            case 2:
            case 3:
                var priorityLevel = 3;
                break;
            default:
                priorityLevel = currentPriorityLevel;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_requestPaint = function() {
        needsPaint = !0;
    };
    exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
        switch(priorityLevel){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                priorityLevel = 3;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
        var currentTime = exports.unstable_now();
        "object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
        switch(priorityLevel){
            case 1:
                var timeout = -1;
                break;
            case 2:
                timeout = 250;
                break;
            case 5:
                timeout = 1073741823;
                break;
            case 4:
                timeout = 1e4;
                break;
            default:
                timeout = 5e3;
        }
        timeout = options + timeout;
        priorityLevel = {
            id: taskIdCounter++,
            callback: callback,
            priorityLevel: priorityLevel,
            startTime: options,
            expirationTime: timeout,
            sortIndex: -1
        };
        options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = !0, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline())));
        return priorityLevel;
    };
    exports.unstable_shouldYield = shouldYieldToHost;
    exports.unstable_wrapCallback = function(callback) {
        var parentPriorityLevel = currentPriorityLevel;
        return function() {
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = parentPriorityLevel;
            try {
                return callback.apply(this, arguments);
            } finally{
                currentPriorityLevel = previousPriorityLevel;
            }
        };
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}}),
"[project]/potifolio-main/potifolio-main/node_modules/scheduler/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/potifolio-main/potifolio-main/node_modules/scheduler/cjs/scheduler.development.js [app-client] (ecmascript)");
}
}}),
"[project]/potifolio-main/potifolio-main/node_modules/its-fine/dist/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FiberProvider": (()=>m),
    "traverseFiber": (()=>i),
    "useContainer": (()=>w),
    "useContextBridge": (()=>x),
    "useContextMap": (()=>h),
    "useFiber": (()=>c),
    "useNearestChild": (()=>v),
    "useNearestParent": (()=>y)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const f = /* @__PURE__ */ (()=>{
    var e, t;
    return typeof window != "undefined" && (((e = window.document) == null ? void 0 : e.createElement) || ((t = window.navigator) == null ? void 0 : t.product) === "ReactNative");
})() ? __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
function i(e, t, r) {
    if (!e) return;
    if (r(e) === !0) return e;
    let n = t ? e.return : e.child;
    for(; n;){
        const u = i(n, t, r);
        if (u) return u;
        n = t ? null : n.sibling;
    }
}
function l(e) {
    try {
        return Object.defineProperties(e, {
            _currentRenderer: {
                get () {
                    return null;
                },
                set () {}
            },
            _currentRenderer2: {
                get () {
                    return null;
                },
                set () {}
            }
        });
    } catch (t) {
        return e;
    }
}
const a = /* @__PURE__ */ l(/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null));
class m extends __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    render() {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(a.Provider, {
            value: this._reactInternals
        }, this.props.children);
    }
}
function c() {
    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(a);
    if (e === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "c.useMemo": ()=>{
            for (const n of [
                e,
                e == null ? void 0 : e.alternate
            ]){
                if (!n) continue;
                const u = i(n, !1, {
                    "c.useMemo.u": (d)=>{
                        let s = d.memoizedState;
                        for(; s;){
                            if (s.memoizedState === t) return !0;
                            s = s.next;
                        }
                    }
                }["c.useMemo.u"]);
                if (u) return u;
            }
        }
    }["c.useMemo"], [
        e,
        t
    ]);
}
function w() {
    const e = c(), t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "w.useMemo[t]": ()=>i(e, !0, {
                "w.useMemo[t]": (r)=>{
                    var n;
                    return ((n = r.stateNode) == null ? void 0 : n.containerInfo) != null;
                }
            }["w.useMemo[t]"])
    }["w.useMemo[t]"], [
        e
    ]);
    return t == null ? void 0 : t.stateNode.containerInfo;
}
function v(e) {
    const t = c(), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    return f(()=>{
        var n;
        r.current = (n = i(t, !1, (u)=>typeof u.type == "string" && (e === void 0 || u.type === e))) == null ? void 0 : n.stateNode;
    }, [
        t
    ]), r;
}
function y(e) {
    const t = c(), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    return f(()=>{
        var n;
        r.current = (n = i(t, !0, (u)=>typeof u.type == "string" && (e === void 0 || u.type === e))) == null ? void 0 : n.stateNode;
    }, [
        t
    ]), r;
}
const p = Symbol.for("react.context"), b = (e)=>e !== null && typeof e == "object" && "$$typeof" in e && e.$$typeof === p;
function h() {
    const e = c(), [t] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "h.useState": ()=>/* @__PURE__ */ new Map()
    }["h.useState"]);
    t.clear();
    let r = e;
    for(; r;){
        const n = r.type;
        b(n) && n !== a && !t.has(n) && t.set(n, (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(l(n))), r = r.return;
    }
    return t;
}
function x() {
    const e = h();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "x.useMemo": ()=>Array.from(e.keys()).reduce({
                "x.useMemo": (t, r)=>({
                        "x.useMemo": (n)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(t, null, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(r.Provider, {
                                ...n,
                                value: e.get(r)
                            }))
                    })["x.useMemo"]
            }["x.useMemo"], {
                "x.useMemo": (t)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(m, {
                        ...t
                    })
            }["x.useMemo"])
    }["x.useMemo"], [
        e
    ]);
}
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/react-use-measure/dist/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>j)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function g(n, t) {
    let o;
    return (...i)=>{
        window.clearTimeout(o), o = window.setTimeout(()=>n(...i), t);
    };
}
function j({ debounce: n, scroll: t, polyfill: o, offsetSize: i } = {
    debounce: 0,
    scroll: !1,
    offsetSize: !1
}) {
    const a = o || (typeof window == "undefined" ? class {
    } : window.ResizeObserver);
    if (!a) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
    const [c, h] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0
    }), e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        element: null,
        scrollContainers: null,
        resizeObserver: null,
        lastBounds: c,
        orientationHandler: null
    }), d = n ? typeof n == "number" ? n : n.scroll : null, f = n ? typeof n == "number" ? n : n.resize : null, w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>(w.current = !0, ()=>void (w.current = !1)));
    const [z, m, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const r = ()=>{
            if (!e.current.element) return;
            const { left: y, top: C, width: H, height: O, bottom: S, right: x, x: B, y: R } = e.current.element.getBoundingClientRect(), l = {
                left: y,
                top: C,
                width: H,
                height: O,
                bottom: S,
                right: x,
                x: B,
                y: R
            };
            e.current.element instanceof HTMLElement && i && (l.height = e.current.element.offsetHeight, l.width = e.current.element.offsetWidth), Object.freeze(l), w.current && !D(e.current.lastBounds, l) && h(e.current.lastBounds = l);
        };
        return [
            r,
            f ? g(r, f) : r,
            d ? g(r, d) : r
        ];
    }, [
        h,
        i,
        d,
        f
    ]);
    function v() {
        e.current.scrollContainers && (e.current.scrollContainers.forEach((r)=>r.removeEventListener("scroll", s, !0)), e.current.scrollContainers = null), e.current.resizeObserver && (e.current.resizeObserver.disconnect(), e.current.resizeObserver = null), e.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", e.current.orientationHandler));
    }
    function b() {
        e.current.element && (e.current.resizeObserver = new a(s), e.current.resizeObserver.observe(e.current.element), t && e.current.scrollContainers && e.current.scrollContainers.forEach((r)=>r.addEventListener("scroll", s, {
                capture: !0,
                passive: !0
            })), e.current.orientationHandler = ()=>{
            s();
        }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", e.current.orientationHandler));
    }
    const L = (r)=>{
        !r || r === e.current.element || (v(), e.current.element = r, e.current.scrollContainers = E(r), b());
    };
    return X(s, !!t), W(m), (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        v(), b();
    }, [
        t,
        s,
        m
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>v, []), [
        L,
        c,
        z
    ];
}
function W(n) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = n;
        return window.addEventListener("resize", t), ()=>void window.removeEventListener("resize", t);
    }, [
        n
    ]);
}
function X(n, t) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (t) {
            const o = n;
            return window.addEventListener("scroll", o, {
                capture: !0,
                passive: !0
            }), ()=>void window.removeEventListener("scroll", o, !0);
        }
    }, [
        n,
        t
    ]);
}
function E(n) {
    const t = [];
    if (!n || n === document.body) return t;
    const { overflow: o, overflowX: i, overflowY: a } = window.getComputedStyle(n);
    return [
        o,
        i,
        a
    ].some((c)=>c === "auto" || c === "scroll") && t.push(n), [
        ...t,
        ...E(n.parentElement)
    ];
}
const k = [
    "x",
    "y",
    "top",
    "bottom",
    "left",
    "right",
    "width",
    "height"
], D = (n, t)=>k.every((o)=>n[o] === t[o]);
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/core/Float.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Float": (()=>Float)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
;
;
const Float = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ children, enabled = true, speed = 1, rotationIntensity = 1, floatIntensity = 1, floatingRange = [
    -0.1,
    0.1
], autoInvalidate = false, ...props }, forwardRef)=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardRef, {
        "Float.useImperativeHandle": ()=>ref.current
    }["Float.useImperativeHandle"], []);
    const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Math.random() * 10000);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Float.useFrame": (state)=>{
            var _floatingRange$, _floatingRange$2;
            if (!enabled || speed === 0) return;
            if (autoInvalidate) state.invalidate();
            const t = offset.current + state.clock.elapsedTime;
            ref.current.rotation.x = Math.cos(t / 4 * speed) / 8 * rotationIntensity;
            ref.current.rotation.y = Math.sin(t / 4 * speed) / 8 * rotationIntensity;
            ref.current.rotation.z = Math.sin(t / 4 * speed) / 20 * rotationIntensity;
            let yPosition = Math.sin(t / 4 * speed) / 10;
            yPosition = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].mapLinear(yPosition, -0.1, 0.1, (_floatingRange$ = floatingRange == null ? void 0 : floatingRange[0]) !== null && _floatingRange$ !== void 0 ? _floatingRange$ : -0.1, (_floatingRange$2 = floatingRange == null ? void 0 : floatingRange[1]) !== null && _floatingRange$2 !== void 0 ? _floatingRange$2 : 0.1);
            ref.current.position.y = yPosition * floatIntensity;
            ref.current.updateMatrix();
        }
    }["Float.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("group", props, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("group", {
        ref: ref,
        matrixAutoUpdate: false
    }, children));
});
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/helpers/glsl/distort.vert.glsl.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>distort)
});
var distort = "#define GLSLIFY 1\nvec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}"; // eslint-disable-line
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/core/MeshDistortMaterial.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MeshDistortMaterial": (()=>MeshDistortMaterial)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$glsl$2f$distort$2e$vert$2e$glsl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/helpers/glsl/distort.vert.glsl.js [app-client] (ecmascript)");
;
;
;
;
;
class DistortMaterialImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"] {
    constructor(parameters = {}){
        super(parameters);
        this.setValues(parameters);
        this._time = {
            value: 0
        };
        this._distort = {
            value: 0.4
        };
        this._radius = {
            value: 1
        };
    }
    // FIXME Use `THREE.WebGLProgramParametersWithUniforms` type when able to target @types/three@0.160.0
    onBeforeCompile(shader) {
        shader.uniforms.time = this._time;
        shader.uniforms.radius = this._radius;
        shader.uniforms.distort = this._distort;
        shader.vertexShader = `
      uniform float time;
      uniform float radius;
      uniform float distort;
      ${__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$glsl$2f$distort$2e$vert$2e$glsl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]}
      ${shader.vertexShader}
    `;
        shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `
        float updateTime = time / 50.0;
        float noise = snoise(vec3(position / 2.0 + updateTime * 5.0));
        vec3 transformed = vec3(position * (noise * pow(distort, 2.0) + radius));
        `);
    }
    get time() {
        return this._time.value;
    }
    set time(v) {
        this._time.value = v;
    }
    get distort() {
        return this._distort.value;
    }
    set distort(v) {
        this._distort.value = v;
    }
    get radius() {
        return this._radius.value;
    }
    set radius(v) {
        this._radius.value = v;
    }
}
const MeshDistortMaterial = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ speed = 1, ...props }, ref)=>{
    const [material] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MeshDistortMaterial.useState": ()=>new DistortMaterialImpl()
    }["MeshDistortMaterial.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "MeshDistortMaterial.useFrame": (state)=>material && (material.time = state.clock.elapsedTime * speed)
    }["MeshDistortMaterial.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        object: material,
        ref: ref,
        attach: "material"
    }, props));
});
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/helpers/constants.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "version": (()=>version)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const getVersion = ()=>parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVISION"].replace(/\D+/g, ''));
const version = /* @__PURE__ */ getVersion();
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/core/Sparkles.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Sparkles": (()=>Sparkles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/helpers/constants.js [app-client] (ecmascript)");
;
;
;
;
;
class SparklesImplMaterial extends __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"] {
    constructor(){
        super({
            uniforms: {
                time: {
                    value: 0
                },
                pixelRatio: {
                    value: 1
                }
            },
            vertexShader: /* glsl */ `
        uniform float pixelRatio;
        uniform float time;
        attribute float size;  
        attribute float speed;  
        attribute float opacity;
        attribute vec3 noise;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.y += sin(time * speed + modelPosition.x * noise.x * 100.0) * 0.2;
          modelPosition.z += cos(time * speed + modelPosition.x * noise.y * 100.0) * 0.2;
          modelPosition.x += cos(time * speed + modelPosition.x * noise.z * 100.0) * 0.2;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPostion = projectionMatrix * viewPosition;
          gl_Position = projectionPostion;
          gl_PointSize = size * 25. * pixelRatio;
          gl_PointSize *= (1.0 / - viewPosition.z);
          vColor = color;
          vOpacity = opacity;
        }
      `,
            fragmentShader: /* glsl */ `
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          gl_FragColor = vec4(vColor, strength * vOpacity);
          #include <tonemapping_fragment>
          #include <${__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"] >= 154 ? 'colorspace_fragment' : 'encodings_fragment'}>
        }
      `
        });
    }
    get time() {
        return this.uniforms.time.value;
    }
    set time(value) {
        this.uniforms.time.value = value;
    }
    get pixelRatio() {
        return this.uniforms.pixelRatio.value;
    }
    set pixelRatio(value) {
        this.uniforms.pixelRatio.value = value;
    }
}
const isFloat32Array = (def)=>def && def.constructor === Float32Array;
const expandColor = (v)=>[
        v.r,
        v.g,
        v.b
    ];
const isVector = (v)=>v instanceof __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"] || v instanceof __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"] || v instanceof __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector4"];
const normalizeVector = (v)=>{
    if (Array.isArray(v)) return v;
    else if (isVector(v)) return v.toArray();
    return [
        v,
        v,
        v
    ];
};
function usePropAsIsOrAsAttribute(count, prop, setDefault) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePropAsIsOrAsAttribute.useMemo": ()=>{
            if (prop !== undefined) {
                if (isFloat32Array(prop)) {
                    return prop;
                } else {
                    if (prop instanceof __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]) {
                        const a = Array.from({
                            length: count * 3
                        }, {
                            "usePropAsIsOrAsAttribute.useMemo.a": ()=>expandColor(prop)
                        }["usePropAsIsOrAsAttribute.useMemo.a"]).flat();
                        return Float32Array.from(a);
                    } else if (isVector(prop) || Array.isArray(prop)) {
                        const a = Array.from({
                            length: count * 3
                        }, {
                            "usePropAsIsOrAsAttribute.useMemo.a": ()=>normalizeVector(prop)
                        }["usePropAsIsOrAsAttribute.useMemo.a"]).flat();
                        return Float32Array.from(a);
                    }
                    return Float32Array.from({
                        length: count
                    }, {
                        "usePropAsIsOrAsAttribute.useMemo": ()=>prop
                    }["usePropAsIsOrAsAttribute.useMemo"]);
                }
            }
            return Float32Array.from({
                length: count
            }, setDefault);
        }
    }["usePropAsIsOrAsAttribute.useMemo"], [
        prop
    ]);
}
const Sparkles = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ noise = 1, count = 100, speed = 1, opacity = 1, scale = 1, size, color, children, ...props }, forwardRef)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Sparkles.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
                SparklesImplMaterial
            })
    }["Sparkles.useMemo"], []);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dpr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "Sparkles.useThree[dpr]": (state)=>state.viewport.dpr
    }["Sparkles.useThree[dpr]"]);
    const _scale = normalizeVector(scale);
    const positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Sparkles.useMemo[positions]": ()=>Float32Array.from(Array.from({
                length: count
            }, {
                "Sparkles.useMemo[positions]": ()=>_scale.map(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread)
            }["Sparkles.useMemo[positions]"]).flat())
    }["Sparkles.useMemo[positions]"], [
        count,
        ..._scale
    ]);
    const sizes = usePropAsIsOrAsAttribute(count, size, Math.random);
    const opacities = usePropAsIsOrAsAttribute(count, opacity);
    const speeds = usePropAsIsOrAsAttribute(count, speed);
    const noises = usePropAsIsOrAsAttribute(count * 3, noise);
    const colors = usePropAsIsOrAsAttribute(color === undefined ? count * 3 : count, !isFloat32Array(color) ? new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color) : color, {
        "Sparkles.usePropAsIsOrAsAttribute[colors]": ()=>1
    }["Sparkles.usePropAsIsOrAsAttribute[colors]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Sparkles.useFrame": (state)=>{
            if (ref.current && ref.current.material) ref.current.material.time = state.clock.elapsedTime;
        }
    }["Sparkles.useFrame"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardRef, {
        "Sparkles.useImperativeHandle": ()=>ref.current
    }["Sparkles.useImperativeHandle"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("points", (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        key: `particle-${count}-${JSON.stringify(scale)}`
    }, props, {
        ref: ref
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("bufferGeometry", null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("bufferAttribute", {
        attach: "attributes-position",
        args: [
            positions,
            3
        ]
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("bufferAttribute", {
        attach: "attributes-size",
        args: [
            sizes,
            1
        ]
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("bufferAttribute", {
        attach: "attributes-opacity",
        args: [
            opacities,
            1
        ]
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("bufferAttribute", {
        attach: "attributes-speed",
        args: [
            speeds,
            1
        ]
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("bufferAttribute", {
        attach: "attributes-color",
        args: [
            colors,
            3
        ]
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("bufferAttribute", {
        attach: "attributes-noise",
        args: [
            noises,
            3
        ]
    })), children ? children : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("sparklesImplMaterial", {
        transparent: true,
        pixelRatio: dpr,
        depthWrite: false
    }));
});
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/core/Stars.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Stars": (()=>Stars)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/helpers/constants.js [app-client] (ecmascript)");
;
;
;
;
class StarfieldMaterial extends __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"] {
    constructor(){
        super({
            uniforms: {
                time: {
                    value: 0.0
                },
                fade: {
                    value: 1.0
                }
            },
            vertexShader: /* glsl */ `
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`,
            fragmentShader: /* glsl */ `
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <${__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"] >= 154 ? 'colorspace_fragment' : 'encodings_fragment'}>
      }`
        });
    }
}
const genStar = (r)=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().setFromSpherical(new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spherical"](r, Math.acos(1 - Math.random() * 2), Math.random() * 2 * Math.PI));
};
const Stars = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ radius = 100, depth = 50, count = 5000, saturation = 0, factor = 4, fade = false, speed = 1 }, ref)=>{
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [position, color, size] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Stars.useMemo": ()=>{
            const positions = [];
            const colors = [];
            const sizes = Array.from({
                length: count
            }, {
                "Stars.useMemo.sizes": ()=>(0.5 + 0.5 * Math.random()) * factor
            }["Stars.useMemo.sizes"]);
            const color = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
            let r = radius + depth;
            const increment = depth / count;
            for(let i = 0; i < count; i++){
                r -= increment * Math.random();
                positions.push(...genStar(r).toArray());
                color.setHSL(i / count, saturation, 0.9);
                colors.push(color.r, color.g, color.b);
            }
            return [
                new Float32Array(positions),
                new Float32Array(colors),
                new Float32Array(sizes)
            ];
        }
    }["Stars.useMemo"], [
        count,
        depth,
        factor,
        radius,
        saturation
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Stars.useFrame": (state)=>material.current && (material.current.uniforms.time.value = state.clock.elapsedTime * speed)
    }["Stars.useFrame"]);
    const [starfieldMaterial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Stars.useState": ()=>new StarfieldMaterial()
    }["Stars.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("points", {
        ref: ref
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("bufferGeometry", null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("bufferAttribute", {
        attach: "attributes-position",
        args: [
            position,
            3
        ]
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("bufferAttribute", {
        attach: "attributes-color",
        args: [
            color,
            3
        ]
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("bufferAttribute", {
        attach: "attributes-size",
        args: [
            size,
            1
        ]
    })), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("primitive", {
        ref: material,
        object: starfieldMaterial,
        attach: "material",
        blending: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
        "uniforms-fade-value": fade,
        depthWrite: false,
        transparent: true,
        vertexColors: true
    }));
});
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/helpers/environment-assets.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "presetsObj": (()=>presetsObj)
});
const presetsObj = {
    apartment: 'lebombo_1k.hdr',
    city: 'potsdamer_platz_1k.hdr',
    dawn: 'kiara_1_dawn_1k.hdr',
    forest: 'forest_slope_1k.hdr',
    lobby: 'st_fagans_interior_1k.hdr',
    night: 'dikhololo_night_1k.hdr',
    park: 'rooitou_park_1k.hdr',
    studio: 'studio_small_03_1k.hdr',
    sunset: 'venice_sunset_1k.hdr',
    warehouse: 'empty_warehouse_01_1k.hdr'
};
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/core/useEnvironment.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useEnvironment": (()=>useEnvironment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export G as useLoader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2d$stdlib$2f$loaders$2f$RGBELoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three-stdlib/loaders/RGBELoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2d$stdlib$2f$loaders$2f$EXRLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three-stdlib/loaders/EXRLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$monogrid$2f$gainmap$2d$js$2f$dist$2f$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@monogrid/gainmap-js/dist/decode.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$environment$2d$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/helpers/environment-assets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
const CUBEMAP_ROOT = 'https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/';
const isArray = (arr)=>Array.isArray(arr);
const defaultFiles = [
    '/px.png',
    '/nx.png',
    '/py.png',
    '/ny.png',
    '/pz.png',
    '/nz.png'
];
function useEnvironment({ files = defaultFiles, path = '', preset = undefined, colorSpace = undefined, extensions } = {}) {
    if (preset) {
        validatePreset(preset);
        files = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$environment$2d$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetsObj"][preset];
        path = CUBEMAP_ROOT;
    }
    // Everything else
    const multiFile = isArray(files);
    const { extension, isCubemap } = getExtension(files);
    const loader = getLoader(extension);
    if (!loader) throw new Error('useEnvironment: Unrecognized file extension: ' + files);
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "useEnvironment.useThree[gl]": (state)=>state.gl
    }["useEnvironment.useThree[gl]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useEnvironment.useLayoutEffect": ()=>{
            // Only required for gainmap
            if (extension !== 'webp' && extension !== 'jpg' && extension !== 'jpeg') return;
            function clearGainmapTexture() {
                __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__["useLoader"].clear(loader, multiFile ? [
                    files
                ] : files);
            }
            gl.domElement.addEventListener('webglcontextlost', clearGainmapTexture, {
                once: true
            });
        }
    }["useEnvironment.useLayoutEffect"], [
        files,
        gl.domElement
    ]);
    const loaderResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__["useLoader"])(loader, multiFile ? [
        files
    ] : files, {
        "useEnvironment.useLoader[loaderResult]": (loader)=>{
            // Gainmap requires a renderer
            if (extension === 'webp' || extension === 'jpg' || extension === 'jpeg') {
                // @ts-expect-error
                loader.setRenderer(gl);
            }
            loader.setPath == null || loader.setPath(path);
            // @ts-expect-error
            if (extensions) extensions(loader);
        }
    }["useEnvironment.useLoader[loaderResult]"]);
    let texture = multiFile ? // @ts-ignore
    loaderResult[0] : loaderResult;
    if (extension === 'jpg' || extension === 'jpeg' || extension === 'webp') {
        var _renderTarget;
        texture = (_renderTarget = texture.renderTarget) == null ? void 0 : _renderTarget.texture;
    }
    texture.mapping = isCubemap ? __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeReflectionMapping"] : __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EquirectangularReflectionMapping"];
    texture.colorSpace = colorSpace !== null && colorSpace !== void 0 ? colorSpace : isCubemap ? 'srgb' : 'srgb-linear';
    return texture;
}
const preloadDefaultOptions = {
    files: defaultFiles,
    path: '',
    preset: undefined,
    extensions: undefined
};
useEnvironment.preload = (preloadOptions)=>{
    const options = {
        ...preloadDefaultOptions,
        ...preloadOptions
    };
    let { files, path = '' } = options;
    const { preset, extensions } = options;
    if (preset) {
        validatePreset(preset);
        files = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$environment$2d$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetsObj"][preset];
        path = CUBEMAP_ROOT;
    }
    const { extension } = getExtension(files);
    if (extension === 'webp' || extension === 'jpg' || extension === 'jpeg') {
        throw new Error('useEnvironment: Preloading gainmaps is not supported');
    }
    const loader = getLoader(extension);
    if (!loader) throw new Error('useEnvironment: Unrecognized file extension: ' + files);
    __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__["useLoader"].preload(loader, isArray(files) ? [
        files
    ] : files, (loader)=>{
        loader.setPath == null || loader.setPath(path);
        // @ts-expect-error
        if (extensions) extensions(loader);
    });
};
const clearDefaultOptins = {
    files: defaultFiles,
    preset: undefined
};
useEnvironment.clear = (clearOptions)=>{
    const options = {
        ...clearDefaultOptins,
        ...clearOptions
    };
    let { files } = options;
    const { preset } = options;
    if (preset) {
        validatePreset(preset);
        files = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$environment$2d$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetsObj"][preset];
    }
    const { extension } = getExtension(files);
    const loader = getLoader(extension);
    if (!loader) throw new Error('useEnvironment: Unrecognized file extension: ' + files);
    __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__["useLoader"].clear(loader, isArray(files) ? [
        files
    ] : files);
};
function validatePreset(preset) {
    if (!(preset in __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$environment$2d$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetsObj"])) throw new Error('Preset must be one of: ' + Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$environment$2d$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetsObj"]).join(', '));
}
function getExtension(files) {
    var _firstEntry$split$pop;
    const isCubemap = isArray(files) && files.length === 6;
    const isGainmap = isArray(files) && files.length === 3 && files.some((file)=>file.endsWith('json'));
    const firstEntry = isArray(files) ? files[0] : files;
    // Everything else
    const extension = isCubemap ? 'cube' : isGainmap ? 'webp' : firstEntry.startsWith('data:application/exr') ? 'exr' : firstEntry.startsWith('data:application/hdr') ? 'hdr' : firstEntry.startsWith('data:image/jpeg') ? 'jpg' : (_firstEntry$split$pop = firstEntry.split('.').pop()) == null || (_firstEntry$split$pop = _firstEntry$split$pop.split('?')) == null || (_firstEntry$split$pop = _firstEntry$split$pop.shift()) == null ? void 0 : _firstEntry$split$pop.toLowerCase();
    return {
        extension,
        isCubemap,
        isGainmap
    };
}
function getLoader(extension) {
    const loader = extension === 'cube' ? __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeTextureLoader"] : extension === 'hdr' ? __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2d$stdlib$2f$loaders$2f$RGBELoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RGBELoader"] : extension === 'exr' ? __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2d$stdlib$2f$loaders$2f$EXRLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXRLoader"] : extension === 'jpg' || extension === 'jpeg' ? __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$monogrid$2f$gainmap$2d$js$2f$dist$2f$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HDRJPGLoader"] : extension === 'webp' ? __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$monogrid$2f$gainmap$2d$js$2f$dist$2f$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GainMapLoader"] : null;
    return loader;
}
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Environment": (()=>Environment),
    "EnvironmentCube": (()=>EnvironmentCube),
    "EnvironmentMap": (()=>EnvironmentMap),
    "EnvironmentPortal": (()=>EnvironmentPortal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__o__as__createPortal$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export o as createPortal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__applyProps$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export s as applyProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2d$stdlib$2f$objects$2f$GroundProjectedEnv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three-stdlib/objects/GroundProjectedEnv.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$useEnvironment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/core/useEnvironment.js [app-client] (ecmascript)");
;
;
;
;
;
;
const isRef = (obj)=>obj.current && obj.current.isScene;
const resolveScene = (scene)=>isRef(scene) ? scene.current : scene;
function setEnvProps(background, scene, defaultScene, texture, sceneProps = {}) {
    var _target$backgroundRot, _target$backgroundRot2, _target$environmentRo, _target$environmentRo2;
    // defaults
    sceneProps = {
        backgroundBlurriness: 0,
        backgroundIntensity: 1,
        backgroundRotation: [
            0,
            0,
            0
        ],
        environmentIntensity: 1,
        environmentRotation: [
            0,
            0,
            0
        ],
        ...sceneProps
    };
    const target = resolveScene(scene || defaultScene);
    const oldbg = target.background;
    const oldenv = target.environment;
    const oldSceneProps = {
        // @ts-ignore
        backgroundBlurriness: target.backgroundBlurriness,
        // @ts-ignore
        backgroundIntensity: target.backgroundIntensity,
        // @ts-ignore
        backgroundRotation: (_target$backgroundRot = (_target$backgroundRot2 = target.backgroundRotation) == null || _target$backgroundRot2.clone == null ? void 0 : _target$backgroundRot2.clone()) !== null && _target$backgroundRot !== void 0 ? _target$backgroundRot : [
            0,
            0,
            0
        ],
        // @ts-ignore
        environmentIntensity: target.environmentIntensity,
        // @ts-ignore
        environmentRotation: (_target$environmentRo = (_target$environmentRo2 = target.environmentRotation) == null || _target$environmentRo2.clone == null ? void 0 : _target$environmentRo2.clone()) !== null && _target$environmentRo !== void 0 ? _target$environmentRo : [
            0,
            0,
            0
        ]
    };
    if (background !== 'only') target.environment = texture;
    if (background) target.background = texture;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__applyProps$3e$__["applyProps"])(target, sceneProps);
    return ()=>{
        if (background !== 'only') target.environment = oldenv;
        if (background) target.background = oldbg;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__applyProps$3e$__["applyProps"])(target, oldSceneProps);
    };
}
function EnvironmentMap({ scene, background = false, map, ...config }) {
    const defaultScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "EnvironmentMap.useThree[defaultScene]": (state)=>state.scene
    }["EnvironmentMap.useThree[defaultScene]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "EnvironmentMap.useLayoutEffect": ()=>{
            if (map) return setEnvProps(background, scene, defaultScene, map, config);
        }
    }["EnvironmentMap.useLayoutEffect"]);
    return null;
}
function EnvironmentCube({ background = false, scene, blur, backgroundBlurriness, backgroundIntensity, backgroundRotation, environmentIntensity, environmentRotation, ...rest }) {
    const texture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$useEnvironment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironment"])(rest);
    const defaultScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "EnvironmentCube.useThree[defaultScene]": (state)=>state.scene
    }["EnvironmentCube.useThree[defaultScene]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "EnvironmentCube.useLayoutEffect": ()=>{
            return setEnvProps(background, scene, defaultScene, texture, {
                backgroundBlurriness: blur !== null && blur !== void 0 ? blur : backgroundBlurriness,
                backgroundIntensity,
                backgroundRotation,
                environmentIntensity,
                environmentRotation
            });
        }
    }["EnvironmentCube.useLayoutEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnvironmentCube.useEffect": ()=>{
            return ({
                "EnvironmentCube.useEffect": ()=>{
                    texture.dispose();
                }
            })["EnvironmentCube.useEffect"];
        }
    }["EnvironmentCube.useEffect"], [
        texture
    ]);
    return null;
}
function EnvironmentPortal({ children, near = 0.1, far = 1000, resolution = 256, frames = 1, map, background = false, blur, backgroundBlurriness, backgroundIntensity, backgroundRotation, environmentIntensity, environmentRotation, scene, files, path, preset = undefined, extensions }) {
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "EnvironmentPortal.useThree[gl]": (state)=>state.gl
    }["EnvironmentPortal.useThree[gl]"]);
    const defaultScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "EnvironmentPortal.useThree[defaultScene]": (state)=>state.scene
    }["EnvironmentPortal.useThree[defaultScene]"]);
    const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [virtualScene] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "EnvironmentPortal.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]()
    }["EnvironmentPortal.useState"]);
    const fbo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EnvironmentPortal.useMemo[fbo]": ()=>{
            const fbo = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLCubeRenderTarget"](resolution);
            fbo.texture.type = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"];
            return fbo;
        }
    }["EnvironmentPortal.useMemo[fbo]"], [
        resolution
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnvironmentPortal.useEffect": ()=>{
            return ({
                "EnvironmentPortal.useEffect": ()=>{
                    fbo.dispose();
                }
            })["EnvironmentPortal.useEffect"];
        }
    }["EnvironmentPortal.useEffect"], [
        fbo
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "EnvironmentPortal.useLayoutEffect": ()=>{
            if (frames === 1) {
                const autoClear = gl.autoClear;
                gl.autoClear = true;
                camera.current.update(gl, virtualScene);
                gl.autoClear = autoClear;
            }
            return setEnvProps(background, scene, defaultScene, fbo.texture, {
                backgroundBlurriness: blur !== null && blur !== void 0 ? blur : backgroundBlurriness,
                backgroundIntensity,
                backgroundRotation,
                environmentIntensity,
                environmentRotation
            });
        }
    }["EnvironmentPortal.useLayoutEffect"], [
        children,
        virtualScene,
        fbo.texture,
        scene,
        defaultScene,
        background,
        frames,
        gl
    ]);
    let count = 1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "EnvironmentPortal.useFrame": ()=>{
            if (frames === Infinity || count < frames) {
                const autoClear = gl.autoClear;
                gl.autoClear = true;
                camera.current.update(gl, virtualScene);
                gl.autoClear = autoClear;
                count++;
            }
        }
    }["EnvironmentPortal.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__o__as__createPortal$3e$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, children, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("cubeCamera", {
        ref: camera,
        args: [
            near,
            far,
            fbo
        ]
    }), files || preset ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(EnvironmentCube, {
        background: true,
        files: files,
        preset: preset,
        path: path,
        extensions: extensions
    }) : map ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(EnvironmentMap, {
        background: true,
        map: map,
        extensions: extensions
    }) : null), virtualScene));
}
function EnvironmentGround(props) {
    var _props$ground, _props$ground2, _scale, _props$ground3;
    const textureDefault = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$useEnvironment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironment"])(props);
    const texture = props.map || textureDefault;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EnvironmentGround.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
                GroundProjectedEnvImpl: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2d$stdlib$2f$objects$2f$GroundProjectedEnv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroundProjectedEnv"]
            })
    }["EnvironmentGround.useMemo"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnvironmentGround.useEffect": ()=>{
            return ({
                "EnvironmentGround.useEffect": ()=>{
                    textureDefault.dispose();
                }
            })["EnvironmentGround.useEffect"];
        }
    }["EnvironmentGround.useEffect"], [
        textureDefault
    ]);
    const args = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EnvironmentGround.useMemo[args]": ()=>[
                texture
            ]
    }["EnvironmentGround.useMemo[args]"], [
        texture
    ]);
    const height = (_props$ground = props.ground) == null ? void 0 : _props$ground.height;
    const radius = (_props$ground2 = props.ground) == null ? void 0 : _props$ground2.radius;
    const scale = (_scale = (_props$ground3 = props.ground) == null ? void 0 : _props$ground3.scale) !== null && _scale !== void 0 ? _scale : 1000;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(EnvironmentMap, (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        map: texture
    })), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("groundProjectedEnvImpl", {
        args: args,
        scale: scale,
        height: height,
        radius: radius
    }));
}
function Environment(props) {
    return props.ground ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(EnvironmentGround, props) : props.map ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(EnvironmentMap, props) : props.children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(EnvironmentPortal, props) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(EnvironmentCube, props);
}
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/core/Fbo.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Fbo": (()=>Fbo),
    "useFBO": (()=>useFBO)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
;
;
;
;
// 👇 uncomment when TS version supports function overloads
// export function useFBO(settings?: FBOSettings)
function useFBO(/** Width in pixels, or settings (will render fullscreen by default) */ width, /** Height in pixels */ height, /**Settings */ settings) {
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "useFBO.useThree[size]": (state)=>state.size
    }["useFBO.useThree[size]"]);
    const viewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "useFBO.useThree[viewport]": (state)=>state.viewport
    }["useFBO.useThree[viewport]"]);
    const _width = typeof width === 'number' ? width : size.width * viewport.dpr;
    const _height = typeof height === 'number' ? height : size.height * viewport.dpr;
    const _settings = (typeof width === 'number' ? settings : width) || {};
    const { samples = 0, depth, ...targetSettings } = _settings;
    const depthBuffer = depth !== null && depth !== void 0 ? depth : _settings.depthBuffer; // backwards compatibility for deprecated `depth` prop
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useFBO.useMemo[target]": ()=>{
            const target = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](_width, _height, {
                minFilter: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"],
                magFilter: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"],
                type: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"],
                ...targetSettings
            });
            if (depthBuffer) {
                target.depthTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthTexture"](_width, _height, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatType"]);
            }
            target.samples = samples;
            return target;
        }
    }["useFBO.useMemo[target]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useFBO.useLayoutEffect": ()=>{
            target.setSize(_width, _height);
            if (samples) target.samples = samples;
        }
    }["useFBO.useLayoutEffect"], [
        samples,
        target,
        _width,
        _height
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFBO.useEffect": ()=>{
            return ({
                "useFBO.useEffect": ()=>target.dispose()
            })["useFBO.useEffect"];
        }
    }["useFBO.useEffect"], []);
    return target;
}
//
// Fbo component
//
const Fbo = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ children, width, height, ...settings }, fref)=>{
    const target = useFBO(width, height, settings);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(fref, {
        "Fbo.useImperativeHandle": ()=>target
    }["Fbo.useImperativeHandle"], [
        target
    ]); // expose target through ref
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, children == null ? void 0 : children(target));
});
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/core/shaderMaterial.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "shaderMaterial": (()=>shaderMaterial)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
function shaderMaterial(uniforms, vertexShader, fragmentShader, onInit) {
    var _Class;
    return _Class = class extends __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"] {
        constructor(parameters){
            super({
                vertexShader,
                fragmentShader,
                ...parameters
            });
            for(const key in uniforms){
                this.uniforms[key] = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](uniforms[key]);
                Object.defineProperty(this, key, {
                    get () {
                        return this.uniforms[key].value;
                    },
                    set (value) {
                        this.uniforms[key].value = value;
                    }
                });
            }
            this.uniforms = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniformsUtils"].clone(this.uniforms);
            onInit == null || onInit(this);
        }
    }, _Class.key = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].generateUUID(), _Class;
}
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/materials/DiscardMaterial.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DiscardMaterial": (()=>DiscardMaterial)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shaderMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/core/shaderMaterial.js [app-client] (ecmascript)");
;
const DiscardMaterial = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shaderMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shaderMaterial"])({}, 'void main() { }', 'void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }');
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/core/MeshTransmissionMaterial.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MeshTransmissionMaterial": (()=>MeshTransmissionMaterial)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Fbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/core/Fbo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$materials$2f$DiscardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/materials/DiscardMaterial.js [app-client] (ecmascript)");
;
;
;
;
;
;
class MeshTransmissionMaterialImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"] {
    constructor(samples = 6, transmissionSampler = false){
        super();
        this.uniforms = {
            chromaticAberration: {
                value: 0.05
            },
            // Transmission must always be 0, unless transmissionSampler is being used
            transmission: {
                value: 0
            },
            // Instead a workaround is used, see below for reasons why
            _transmission: {
                value: 1
            },
            transmissionMap: {
                value: null
            },
            // Roughness is 1 in THREE.MeshPhysicalMaterial but it makes little sense in a transmission material
            roughness: {
                value: 0
            },
            thickness: {
                value: 0
            },
            thicknessMap: {
                value: null
            },
            attenuationDistance: {
                value: Infinity
            },
            attenuationColor: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('white')
            },
            anisotropicBlur: {
                value: 0.1
            },
            time: {
                value: 0
            },
            distortion: {
                value: 0.0
            },
            distortionScale: {
                value: 0.5
            },
            temporalDistortion: {
                value: 0.0
            },
            buffer: {
                value: null
            }
        };
        this.onBeforeCompile = (shader)=>{
            shader.uniforms = {
                ...shader.uniforms,
                ...this.uniforms
            };
            // Fix for r153-r156 anisotropy chunks
            // https://github.com/mrdoob/three.js/pull/26716
            if (this.anisotropy > 0) shader.defines.USE_ANISOTROPY = '';
            // If the transmission sampler is active inject a flag
            if (transmissionSampler) shader.defines.USE_SAMPLER = '';
            else shader.defines.USE_TRANSMISSION = '';
            // Head
            shader.fragmentShader = /*glsl*/ `
      uniform float chromaticAberration;         
      uniform float anisotropicBlur;      
      uniform float time;
      uniform float distortion;
      uniform float distortionScale;
      uniform float temporalDistortion;
      uniform sampler2D buffer;

      vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
      }

      uint hash( uint x ) {
        x += ( x << 10u );
        x ^= ( x >>  6u );
        x += ( x <<  3u );
        x ^= ( x >> 11u );
        x += ( x << 15u );
        return x;
      }

      // Compound versions of the hashing algorithm I whipped together.
      uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
      uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
      uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

      // Construct a float with half-open range [0:1] using low 23 bits.
      // All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
      float floatConstruct( uint m ) {
        const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
        const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
        m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
        m |= ieeeOne;                          // Add fractional part to 1.0
        float  f = uintBitsToFloat( m );       // Range [1:2]
        return f - 1.0;                        // Range [0:1]
      }

      // Pseudo-random value in half-open range [0:1].
      float randomBase( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
      float randomBase( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float rand(float seed) {
        float result = randomBase(vec3(gl_FragCoord.xy, seed));
        return result;
      }

      const float F3 =  0.3333333;
      const float G3 =  0.1666667;

      float snoise(vec3 p) {
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;
        vec4 w, d;
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);
        w = max(0.6 - w, 0.0);
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);
        w *= w;
        w *= w;
        d *= w;
        return dot(d, vec4(52.0));
      }

      float snoiseFractal(vec3 m) {
        return 0.5333333* snoise(m)
              +0.2666667* snoise(2.0*m)
              +0.1333333* snoise(4.0*m)
              +0.0666667* snoise(8.0*m);
      }\n` + shader.fragmentShader;
            // Remove transmission
            shader.fragmentShader = shader.fragmentShader.replace('#include <transmission_pars_fragment>', /*glsl*/ `
        #ifdef USE_TRANSMISSION
          // Transmission code is based on glTF-Sampler-Viewer
          // https://github.com/KhronosGroup/glTF-Sample-Viewer
          uniform float _transmission;
          uniform float thickness;
          uniform float attenuationDistance;
          uniform vec3 attenuationColor;
          #ifdef USE_TRANSMISSIONMAP
            uniform sampler2D transmissionMap;
          #endif
          #ifdef USE_THICKNESSMAP
            uniform sampler2D thicknessMap;
          #endif
          uniform vec2 transmissionSamplerSize;
          uniform sampler2D transmissionSamplerMap;
          uniform mat4 modelMatrix;
          uniform mat4 projectionMatrix;
          varying vec3 vWorldPosition;
          vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
            // Direction of refracted light.
            vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
            // Compute rotation-independant scaling of the model matrix.
            vec3 modelScale;
            modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
            modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
            modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
            // The thickness is specified in local space.
            return normalize( refractionVector ) * thickness * modelScale;
          }
          float applyIorToRoughness( const in float roughness, const in float ior ) {
            // Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
            // an IOR of 1.5 results in the default amount of microfacet refraction.
            return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
          }
          vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
            float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );            
            #ifdef USE_SAMPLER
              #ifdef texture2DLodEXT
                return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #else
                return texture2D(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #endif
            #else
              return texture2D(buffer, fragCoord.xy);
            #endif
          }
          vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
            if ( isinf( attenuationDistance ) ) {
              // Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
              return radiance;
            } else {
              // Compute light attenuation using Beer's law.
              vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
              vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
              return transmittance * radiance;
            }
          }
          vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
            const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
            const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
            const in vec3 attenuationColor, const in float attenuationDistance ) {
            vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
            vec3 refractedRayExit = position + transmissionRay;
            // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
            vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
            vec2 refractionCoords = ndcPos.xy / ndcPos.w;
            refractionCoords += 1.0;
            refractionCoords /= 2.0;
            // Sample framebuffer to get pixel the refracted ray hits.
            vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
            vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
            // Get the specular component.
            vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
            return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
          }
        #endif\n`);
            // Add refraction
            shader.fragmentShader = shader.fragmentShader.replace('#include <transmission_fragment>', /*glsl*/ `  
        // Improve the refraction to use the world pos
        material.transmission = _transmission;
        material.transmissionAlpha = 1.0;
        material.thickness = thickness;
        material.attenuationDistance = attenuationDistance;
        material.attenuationColor = attenuationColor;
        #ifdef USE_TRANSMISSIONMAP
          material.transmission *= texture2D( transmissionMap, vUv ).r;
        #endif
        #ifdef USE_THICKNESSMAP
          material.thickness *= texture2D( thicknessMap, vUv ).g;
        #endif
        
        vec3 pos = vWorldPosition;
        float runningSeed = 0.0;
        vec3 v = normalize( cameraPosition - pos );
        vec3 n = inverseTransformDirection( normal, viewMatrix );
        vec3 transmission = vec3(0.0);
        float transmissionR, transmissionB, transmissionG;
        float randomCoords = rand(runningSeed++);
        float thickness_smear = thickness * max(pow(roughnessFactor, 0.33), anisotropicBlur);
        vec3 distortionNormal = vec3(0.0);
        vec3 temporalOffset = vec3(time, -time, -time) * temporalDistortion;
        if (distortion > 0.0) {
          distortionNormal = distortion * vec3(snoiseFractal(vec3((pos * distortionScale + temporalOffset))), snoiseFractal(vec3(pos.zxy * distortionScale - temporalOffset)), snoiseFractal(vec3(pos.yxz * distortionScale + temporalOffset)));
        }
        for (float i = 0.0; i < ${samples}.0; i ++) {
          vec3 sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5)) * pow(rand(runningSeed++), 0.33) + distortionNormal);
          transmissionR = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness  + thickness_smear * (i + randomCoords) / float(${samples}),
            material.attenuationColor, material.attenuationDistance
          ).r;
          transmissionG = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior  * (1.0 + chromaticAberration * (i + randomCoords) / float(${samples})) , material.thickness + thickness_smear * (i + randomCoords) / float(${samples}),
            material.attenuationColor, material.attenuationDistance
          ).g;
          transmissionB = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * chromaticAberration * (i + randomCoords) / float(${samples})), material.thickness + thickness_smear * (i + randomCoords) / float(${samples}),
            material.attenuationColor, material.attenuationDistance
          ).b;
          transmission.r += transmissionR;
          transmission.g += transmissionG;
          transmission.b += transmissionB;
        }
        transmission /= ${samples}.0;
        totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );\n`);
        };
        Object.keys(this.uniforms).forEach((name)=>Object.defineProperty(this, name, {
                get: ()=>this.uniforms[name].value,
                set: (v)=>this.uniforms[name].value = v
            }));
    }
}
const MeshTransmissionMaterial = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ buffer, transmissionSampler = false, backside = false, side = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FrontSide"], transmission = 1, thickness = 0, backsideThickness = 0, backsideEnvMapIntensity = 1, samples = 10, resolution, backsideResolution, background, anisotropy, anisotropicBlur, ...props }, fref)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
        MeshTransmissionMaterial: MeshTransmissionMaterialImpl
    });
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [discardMaterial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MeshTransmissionMaterial.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$materials$2f$DiscardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiscardMaterial"]()
    }["MeshTransmissionMaterial.useState"]);
    const fboBack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Fbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFBO"])(backsideResolution || resolution);
    const fboMain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Fbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFBO"])(resolution);
    let oldBg;
    let oldEnvMapIntensity;
    let oldTone;
    let parent;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "MeshTransmissionMaterial.useFrame": (state)=>{
            ref.current.time = state.clock.elapsedTime;
            // Render only if the buffer matches the built-in and no transmission sampler is set
            if (ref.current.buffer === fboMain.texture && !transmissionSampler) {
                var _r3f$parent;
                parent = (_r3f$parent = ref.current.__r3f.parent) == null ? void 0 : _r3f$parent.object;
                if (parent) {
                    // Save defaults
                    oldTone = state.gl.toneMapping;
                    oldBg = state.scene.background;
                    oldEnvMapIntensity = ref.current.envMapIntensity;
                    // Switch off tonemapping lest it double tone maps
                    // Save the current background and set the HDR as the new BG
                    // Use discardmaterial, the parent will be invisible, but it's shadows will still be cast
                    state.gl.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoToneMapping"];
                    if (background) state.scene.background = background;
                    parent.material = discardMaterial;
                    if (backside) {
                        // Render into the backside buffer
                        state.gl.setRenderTarget(fboBack);
                        state.gl.render(state.scene, state.camera);
                        // And now prepare the material for the main render using the backside buffer
                        parent.material = ref.current;
                        parent.material.buffer = fboBack.texture;
                        parent.material.thickness = backsideThickness;
                        parent.material.side = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"];
                        parent.material.envMapIntensity = backsideEnvMapIntensity;
                    }
                    // Render into the main buffer
                    state.gl.setRenderTarget(fboMain);
                    state.gl.render(state.scene, state.camera);
                    parent.material = ref.current;
                    parent.material.thickness = thickness;
                    parent.material.side = side;
                    parent.material.buffer = fboMain.texture;
                    parent.material.envMapIntensity = oldEnvMapIntensity;
                    // Set old state back
                    state.scene.background = oldBg;
                    state.gl.setRenderTarget(null);
                    state.gl.toneMapping = oldTone;
                }
            }
        }
    }["MeshTransmissionMaterial.useFrame"]);
    // Forward ref
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(fref, {
        "MeshTransmissionMaterial.useImperativeHandle": ()=>ref.current
    }["MeshTransmissionMaterial.useImperativeHandle"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("meshTransmissionMaterial", (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        // Samples must re-compile the shader so we memoize it
        args: [
            samples,
            transmissionSampler
        ],
        ref: ref
    }, props, {
        buffer: buffer || fboMain.texture,
        _transmission: transmission,
        anisotropicBlur: anisotropicBlur !== null && anisotropicBlur !== void 0 ? anisotropicBlur : anisotropy,
        transmission: transmissionSampler ? transmission : 0,
        thickness: thickness,
        side: side
    }));
});
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/core/Text.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Text": (()=>Text)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$troika$2d$three$2d$text$2f$dist$2f$troika$2d$three$2d$text$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/troika-three-text/dist/troika-three-text.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$suspend$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/suspend-react/index.js [app-client] (ecmascript)");
;
;
;
;
;
const Text = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ sdfGlyphSize = 64, anchorX = 'center', anchorY = 'middle', font, fontSize = 1, children, characters, onSync, ...props }, ref)=>{
    const invalidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "Text.useThree[invalidate]": ({ invalidate })=>invalidate
    }["Text.useThree[invalidate]"]);
    const [troikaMesh] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Text.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$troika$2d$three$2d$text$2f$dist$2f$troika$2d$three$2d$text$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"]()
    }["Text.useState"]);
    const [nodes, text] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Text.useMemo": ()=>{
            const n = [];
            let t = '';
            __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].forEach(children, {
                "Text.useMemo": (child)=>{
                    if (typeof child === 'string' || typeof child === 'number') {
                        t += child;
                    } else {
                        n.push(child);
                    }
                }
            }["Text.useMemo"]);
            return [
                n,
                t
            ];
        }
    }["Text.useMemo"], [
        children
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$suspend$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["suspend"])(()=>new Promise((res)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$troika$2d$three$2d$text$2f$dist$2f$troika$2d$three$2d$text$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preloadFont"])({
                font,
                characters
            }, res)), [
        'troika-text',
        font,
        characters
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Text.useLayoutEffect": ()=>void troikaMesh.sync({
                "Text.useLayoutEffect": ()=>{
                    invalidate();
                    if (onSync) onSync(troikaMesh);
                }
            }["Text.useLayoutEffect"])
    }["Text.useLayoutEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Text.useEffect": ()=>{
            return ({
                "Text.useEffect": ()=>troikaMesh.dispose()
            })["Text.useEffect"];
        }
    }["Text.useEffect"], [
        troikaMesh
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        object: troikaMesh,
        ref: ref,
        font: font,
        text: text,
        anchorX: anchorX,
        anchorY: anchorY,
        fontSize: fontSize,
        sdfGlyphSize: sdfGlyphSize
    }, props), nodes);
});
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>_extends)
});
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/three-stdlib/_polyfill/constants.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "version": (()=>version)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const version = /* @__PURE__ */ (()=>parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVISION"].replace(/\D+/g, "")))();
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/three-stdlib/objects/GroundProjectedEnv.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GroundProjectedEnv": (()=>GroundProjectedEnv)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2d$stdlib$2f$_polyfill$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three-stdlib/_polyfill/constants.js [app-client] (ecmascript)");
;
;
const isCubeTexture = (def)=>def && def.isCubeTexture;
class GroundProjectedEnv extends __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"] {
    constructor(texture, options){
        var _a, _b;
        const isCubeMap = isCubeTexture(texture);
        const w = (_b = isCubeMap ? (_a = texture.image[0]) == null ? void 0 : _a.width : texture.image.width) != null ? _b : 1024;
        const cubeSize = w / 4;
        const _lodMax = Math.floor(Math.log2(cubeSize));
        const _cubeSize = Math.pow(2, _lodMax);
        const width = 3 * Math.max(_cubeSize, 16 * 7);
        const height = 4 * _cubeSize;
        const defines = [
            isCubeMap ? "#define ENVMAP_TYPE_CUBE" : "",
            `#define CUBEUV_TEXEL_WIDTH ${1 / width}`,
            `#define CUBEUV_TEXEL_HEIGHT ${1 / height}`,
            `#define CUBEUV_MAX_MIP ${_lodMax}.0`
        ];
        const vertexShader = /* glsl */ `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `;
        const fragmentShader = defines.join("\n") + /* glsl */ `
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2d$stdlib$2f$_polyfill$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"] >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }
        `;
        const uniforms = {
            map: {
                value: texture
            },
            height: {
                value: (options == null ? void 0 : options.height) || 15
            },
            radius: {
                value: (options == null ? void 0 : options.radius) || 100
            }
        };
        const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](1, 16);
        const material = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
            uniforms,
            fragmentShader,
            vertexShader,
            side: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
        });
        super(geometry, material);
    }
    set radius(radius) {
        this.material.uniforms.radius.value = radius;
    }
    get radius() {
        return this.material.uniforms.radius.value;
    }
    set height(height) {
        this.material.uniforms.height.value = height;
    }
    get height() {
        return this.material.uniforms.height.value;
    }
}
;
 //# sourceMappingURL=GroundProjectedEnv.js.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/three-stdlib/loaders/RGBELoader.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RGBELoader": (()=>RGBELoader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
class RGBELoader extends __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTextureLoader"] {
    constructor(manager){
        super(manager);
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"];
    }
    // adapted from http://www.graphics.cornell.edu/~bjw/rgbe.html
    parse(buffer) {
        const rgbe_read_error = 1, rgbe_write_error = 2, rgbe_format_error = 3, rgbe_memory_error = 4, rgbe_error = function(rgbe_error_code, msg) {
            switch(rgbe_error_code){
                case rgbe_read_error:
                    throw new Error("THREE.RGBELoader: Read Error: " + (msg || ""));
                case rgbe_write_error:
                    throw new Error("THREE.RGBELoader: Write Error: " + (msg || ""));
                case rgbe_format_error:
                    throw new Error("THREE.RGBELoader: Bad File Format: " + (msg || ""));
                default:
                case rgbe_memory_error:
                    throw new Error("THREE.RGBELoader: Memory Error: " + (msg || ""));
            }
        }, RGBE_VALID_PROGRAMTYPE = 1, RGBE_VALID_FORMAT = 2, RGBE_VALID_DIMENSIONS = 4, NEWLINE = "\n", fgets = function(buffer2, lineLimit, consume) {
            const chunkSize = 128;
            lineLimit = !lineLimit ? 1024 : lineLimit;
            let p = buffer2.pos, i = -1, len = 0, s = "", chunk = String.fromCharCode.apply(null, new Uint16Array(buffer2.subarray(p, p + chunkSize)));
            while(0 > (i = chunk.indexOf(NEWLINE)) && len < lineLimit && p < buffer2.byteLength){
                s += chunk;
                len += chunk.length;
                p += chunkSize;
                chunk += String.fromCharCode.apply(null, new Uint16Array(buffer2.subarray(p, p + chunkSize)));
            }
            if (-1 < i) {
                if (false !== consume) buffer2.pos += len + i + 1;
                return s + chunk.slice(0, i);
            }
            return false;
        }, RGBE_ReadHeader = function(buffer2) {
            const magic_token_re = /^#\?(\S+)/, gamma_re = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, exposure_re = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, format_re = /^\s*FORMAT=(\S+)\s*$/, dimensions_re = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, header = {
                valid: 0,
                string: "",
                comments: "",
                programtype: "RGBE",
                format: "",
                gamma: 1,
                exposure: 1,
                width: 0,
                height: 0
            };
            let line, match;
            if (buffer2.pos >= buffer2.byteLength || !(line = fgets(buffer2))) {
                rgbe_error(rgbe_read_error, "no header found");
            }
            if (!(match = line.match(magic_token_re))) {
                rgbe_error(rgbe_format_error, "bad initial token");
            }
            header.valid |= RGBE_VALID_PROGRAMTYPE;
            header.programtype = match[1];
            header.string += line + "\n";
            while(true){
                line = fgets(buffer2);
                if (false === line) break;
                header.string += line + "\n";
                if ("#" === line.charAt(0)) {
                    header.comments += line + "\n";
                    continue;
                }
                if (match = line.match(gamma_re)) {
                    header.gamma = parseFloat(match[1]);
                }
                if (match = line.match(exposure_re)) {
                    header.exposure = parseFloat(match[1]);
                }
                if (match = line.match(format_re)) {
                    header.valid |= RGBE_VALID_FORMAT;
                    header.format = match[1];
                }
                if (match = line.match(dimensions_re)) {
                    header.valid |= RGBE_VALID_DIMENSIONS;
                    header.height = parseInt(match[1], 10);
                    header.width = parseInt(match[2], 10);
                }
                if (header.valid & RGBE_VALID_FORMAT && header.valid & RGBE_VALID_DIMENSIONS) break;
            }
            if (!(header.valid & RGBE_VALID_FORMAT)) {
                rgbe_error(rgbe_format_error, "missing format specifier");
            }
            if (!(header.valid & RGBE_VALID_DIMENSIONS)) {
                rgbe_error(rgbe_format_error, "missing image size specifier");
            }
            return header;
        }, RGBE_ReadPixels_RLE = function(buffer2, w2, h2) {
            const scanline_width = w2;
            if (// run length encoding is not allowed so read flat
            scanline_width < 8 || scanline_width > 32767 || // this file is not run length encoded
            2 !== buffer2[0] || 2 !== buffer2[1] || buffer2[2] & 128) {
                return new Uint8Array(buffer2);
            }
            if (scanline_width !== (buffer2[2] << 8 | buffer2[3])) {
                rgbe_error(rgbe_format_error, "wrong scanline width");
            }
            const data_rgba = new Uint8Array(4 * w2 * h2);
            if (!data_rgba.length) {
                rgbe_error(rgbe_memory_error, "unable to allocate buffer space");
            }
            let offset = 0, pos = 0;
            const ptr_end = 4 * scanline_width;
            const rgbeStart = new Uint8Array(4);
            const scanline_buffer = new Uint8Array(ptr_end);
            let num_scanlines = h2;
            while(num_scanlines > 0 && pos < buffer2.byteLength){
                if (pos + 4 > buffer2.byteLength) {
                    rgbe_error(rgbe_read_error);
                }
                rgbeStart[0] = buffer2[pos++];
                rgbeStart[1] = buffer2[pos++];
                rgbeStart[2] = buffer2[pos++];
                rgbeStart[3] = buffer2[pos++];
                if (2 != rgbeStart[0] || 2 != rgbeStart[1] || (rgbeStart[2] << 8 | rgbeStart[3]) != scanline_width) {
                    rgbe_error(rgbe_format_error, "bad rgbe scanline format");
                }
                let ptr = 0, count;
                while(ptr < ptr_end && pos < buffer2.byteLength){
                    count = buffer2[pos++];
                    const isEncodedRun = count > 128;
                    if (isEncodedRun) count -= 128;
                    if (0 === count || ptr + count > ptr_end) {
                        rgbe_error(rgbe_format_error, "bad scanline data");
                    }
                    if (isEncodedRun) {
                        const byteValue = buffer2[pos++];
                        for(let i = 0; i < count; i++){
                            scanline_buffer[ptr++] = byteValue;
                        }
                    } else {
                        scanline_buffer.set(buffer2.subarray(pos, pos + count), ptr);
                        ptr += count;
                        pos += count;
                    }
                }
                const l = scanline_width;
                for(let i = 0; i < l; i++){
                    let off = 0;
                    data_rgba[offset] = scanline_buffer[i + off];
                    off += scanline_width;
                    data_rgba[offset + 1] = scanline_buffer[i + off];
                    off += scanline_width;
                    data_rgba[offset + 2] = scanline_buffer[i + off];
                    off += scanline_width;
                    data_rgba[offset + 3] = scanline_buffer[i + off];
                    offset += 4;
                }
                num_scanlines--;
            }
            return data_rgba;
        };
        const RGBEByteToRGBFloat = function(sourceArray, sourceOffset, destArray, destOffset) {
            const e = sourceArray[sourceOffset + 3];
            const scale = Math.pow(2, e - 128) / 255;
            destArray[destOffset + 0] = sourceArray[sourceOffset + 0] * scale;
            destArray[destOffset + 1] = sourceArray[sourceOffset + 1] * scale;
            destArray[destOffset + 2] = sourceArray[sourceOffset + 2] * scale;
            destArray[destOffset + 3] = 1;
        };
        const RGBEByteToRGBHalf = function(sourceArray, sourceOffset, destArray, destOffset) {
            const e = sourceArray[sourceOffset + 3];
            const scale = Math.pow(2, e - 128) / 255;
            destArray[destOffset + 0] = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataUtils"].toHalfFloat(Math.min(sourceArray[sourceOffset + 0] * scale, 65504));
            destArray[destOffset + 1] = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataUtils"].toHalfFloat(Math.min(sourceArray[sourceOffset + 1] * scale, 65504));
            destArray[destOffset + 2] = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataUtils"].toHalfFloat(Math.min(sourceArray[sourceOffset + 2] * scale, 65504));
            destArray[destOffset + 3] = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataUtils"].toHalfFloat(1);
        };
        const byteArray = new Uint8Array(buffer);
        byteArray.pos = 0;
        const rgbe_header_info = RGBE_ReadHeader(byteArray);
        const w = rgbe_header_info.width, h = rgbe_header_info.height, image_rgba_data = RGBE_ReadPixels_RLE(byteArray.subarray(byteArray.pos), w, h);
        let data, type;
        let numElements;
        switch(this.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatType"]:
                numElements = image_rgba_data.length / 4;
                const floatArray = new Float32Array(numElements * 4);
                for(let j = 0; j < numElements; j++){
                    RGBEByteToRGBFloat(image_rgba_data, j * 4, floatArray, j * 4);
                }
                data = floatArray;
                type = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatType"];
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"]:
                numElements = image_rgba_data.length / 4;
                const halfArray = new Uint16Array(numElements * 4);
                for(let j = 0; j < numElements; j++){
                    RGBEByteToRGBHalf(image_rgba_data, j * 4, halfArray, j * 4);
                }
                data = halfArray;
                type = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"];
                break;
            default:
                throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
        }
        return {
            width: w,
            height: h,
            data,
            header: rgbe_header_info.string,
            gamma: rgbe_header_info.gamma,
            exposure: rgbe_header_info.exposure,
            type
        };
    }
    setDataType(value) {
        this.type = value;
        return this;
    }
    load(url, onLoad, onProgress, onError) {
        function onLoadCallback(texture, texData) {
            switch(texture.type){
                case __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatType"]:
                case __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"]:
                    if ("colorSpace" in texture) texture.colorSpace = "srgb-linear";
                    else texture.encoding = 3e3;
                    texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
                    texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
                    texture.generateMipmaps = false;
                    texture.flipY = true;
                    break;
            }
            if (onLoad) onLoad(texture, texData);
        }
        return super.load(url, onLoadCallback, onProgress, onError);
    }
}
;
 //# sourceMappingURL=RGBELoader.js.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/three-stdlib/loaders/EXRLoader.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EXRLoader": (()=>EXRLoader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2d$stdlib$2f$node_modules$2f$fflate$2f$esm$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three-stdlib/node_modules/fflate/esm/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2d$stdlib$2f$_polyfill$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three-stdlib/_polyfill/constants.js [app-client] (ecmascript)");
;
;
;
const hasColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2d$stdlib$2f$_polyfill$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"] >= 152;
class EXRLoader extends __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTextureLoader"] {
    constructor(manager){
        super(manager);
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"];
    }
    parse(buffer) {
        const USHORT_RANGE = 1 << 16;
        const BITMAP_SIZE = USHORT_RANGE >> 3;
        const HUF_ENCBITS = 16;
        const HUF_DECBITS = 14;
        const HUF_ENCSIZE = (1 << HUF_ENCBITS) + 1;
        const HUF_DECSIZE = 1 << HUF_DECBITS;
        const HUF_DECMASK = HUF_DECSIZE - 1;
        const NBITS = 16;
        const A_OFFSET = 1 << NBITS - 1;
        const MOD_MASK = (1 << NBITS) - 1;
        const SHORT_ZEROCODE_RUN = 59;
        const LONG_ZEROCODE_RUN = 63;
        const SHORTEST_LONG_RUN = 2 + LONG_ZEROCODE_RUN - SHORT_ZEROCODE_RUN;
        const ULONG_SIZE = 8;
        const FLOAT32_SIZE = 4;
        const INT32_SIZE = 4;
        const INT16_SIZE = 2;
        const INT8_SIZE = 1;
        const STATIC_HUFFMAN = 0;
        const DEFLATE = 1;
        const UNKNOWN = 0;
        const LOSSY_DCT = 1;
        const RLE = 2;
        const logBase = Math.pow(2.7182818, 2.2);
        function reverseLutFromBitmap(bitmap, lut) {
            var k = 0;
            for(var i = 0; i < USHORT_RANGE; ++i){
                if (i == 0 || bitmap[i >> 3] & 1 << (i & 7)) {
                    lut[k++] = i;
                }
            }
            var n = k - 1;
            while(k < USHORT_RANGE)lut[k++] = 0;
            return n;
        }
        function hufClearDecTable(hdec) {
            for(var i = 0; i < HUF_DECSIZE; i++){
                hdec[i] = {};
                hdec[i].len = 0;
                hdec[i].lit = 0;
                hdec[i].p = null;
            }
        }
        const getBitsReturn = {
            l: 0,
            c: 0,
            lc: 0
        };
        function getBits(nBits, c, lc, uInt8Array2, inOffset) {
            while(lc < nBits){
                c = c << 8 | parseUint8Array(uInt8Array2, inOffset);
                lc += 8;
            }
            lc -= nBits;
            getBitsReturn.l = c >> lc & (1 << nBits) - 1;
            getBitsReturn.c = c;
            getBitsReturn.lc = lc;
        }
        const hufTableBuffer = new Array(59);
        function hufCanonicalCodeTable(hcode) {
            for(var i = 0; i <= 58; ++i)hufTableBuffer[i] = 0;
            for(var i = 0; i < HUF_ENCSIZE; ++i)hufTableBuffer[hcode[i]] += 1;
            var c = 0;
            for(var i = 58; i > 0; --i){
                var nc = c + hufTableBuffer[i] >> 1;
                hufTableBuffer[i] = c;
                c = nc;
            }
            for(var i = 0; i < HUF_ENCSIZE; ++i){
                var l = hcode[i];
                if (l > 0) hcode[i] = l | hufTableBuffer[l]++ << 6;
            }
        }
        function hufUnpackEncTable(uInt8Array2, inDataView, inOffset, ni, im, iM, hcode) {
            var p = inOffset;
            var c = 0;
            var lc = 0;
            for(; im <= iM; im++){
                if (p.value - inOffset.value > ni) return false;
                getBits(6, c, lc, uInt8Array2, p);
                var l = getBitsReturn.l;
                c = getBitsReturn.c;
                lc = getBitsReturn.lc;
                hcode[im] = l;
                if (l == LONG_ZEROCODE_RUN) {
                    if (p.value - inOffset.value > ni) {
                        throw "Something wrong with hufUnpackEncTable";
                    }
                    getBits(8, c, lc, uInt8Array2, p);
                    var zerun = getBitsReturn.l + SHORTEST_LONG_RUN;
                    c = getBitsReturn.c;
                    lc = getBitsReturn.lc;
                    if (im + zerun > iM + 1) {
                        throw "Something wrong with hufUnpackEncTable";
                    }
                    while(zerun--)hcode[im++] = 0;
                    im--;
                } else if (l >= SHORT_ZEROCODE_RUN) {
                    var zerun = l - SHORT_ZEROCODE_RUN + 2;
                    if (im + zerun > iM + 1) {
                        throw "Something wrong with hufUnpackEncTable";
                    }
                    while(zerun--)hcode[im++] = 0;
                    im--;
                }
            }
            hufCanonicalCodeTable(hcode);
        }
        function hufLength(code) {
            return code & 63;
        }
        function hufCode(code) {
            return code >> 6;
        }
        function hufBuildDecTable(hcode, im, iM, hdecod) {
            for(; im <= iM; im++){
                var c = hufCode(hcode[im]);
                var l = hufLength(hcode[im]);
                if (c >> l) {
                    throw "Invalid table entry";
                }
                if (l > HUF_DECBITS) {
                    var pl = hdecod[c >> l - HUF_DECBITS];
                    if (pl.len) {
                        throw "Invalid table entry";
                    }
                    pl.lit++;
                    if (pl.p) {
                        var p = pl.p;
                        pl.p = new Array(pl.lit);
                        for(var i = 0; i < pl.lit - 1; ++i){
                            pl.p[i] = p[i];
                        }
                    } else {
                        pl.p = new Array(1);
                    }
                    pl.p[pl.lit - 1] = im;
                } else if (l) {
                    var plOffset = 0;
                    for(var i = 1 << HUF_DECBITS - l; i > 0; i--){
                        var pl = hdecod[(c << HUF_DECBITS - l) + plOffset];
                        if (pl.len || pl.p) {
                            throw "Invalid table entry";
                        }
                        pl.len = l;
                        pl.lit = im;
                        plOffset++;
                    }
                }
            }
            return true;
        }
        const getCharReturn = {
            c: 0,
            lc: 0
        };
        function getChar(c, lc, uInt8Array2, inOffset) {
            c = c << 8 | parseUint8Array(uInt8Array2, inOffset);
            lc += 8;
            getCharReturn.c = c;
            getCharReturn.lc = lc;
        }
        const getCodeReturn = {
            c: 0,
            lc: 0
        };
        function getCode(po, rlc, c, lc, uInt8Array2, inDataView, inOffset, outBuffer, outBufferOffset, outBufferEndOffset) {
            if (po == rlc) {
                if (lc < 8) {
                    getChar(c, lc, uInt8Array2, inOffset);
                    c = getCharReturn.c;
                    lc = getCharReturn.lc;
                }
                lc -= 8;
                var cs = c >> lc;
                var cs = new Uint8Array([
                    cs
                ])[0];
                if (outBufferOffset.value + cs > outBufferEndOffset) {
                    return false;
                }
                var s = outBuffer[outBufferOffset.value - 1];
                while(cs-- > 0){
                    outBuffer[outBufferOffset.value++] = s;
                }
            } else if (outBufferOffset.value < outBufferEndOffset) {
                outBuffer[outBufferOffset.value++] = po;
            } else {
                return false;
            }
            getCodeReturn.c = c;
            getCodeReturn.lc = lc;
        }
        function UInt16(value) {
            return value & 65535;
        }
        function Int16(value) {
            var ref = UInt16(value);
            return ref > 32767 ? ref - 65536 : ref;
        }
        const wdec14Return = {
            a: 0,
            b: 0
        };
        function wdec14(l, h) {
            var ls = Int16(l);
            var hs = Int16(h);
            var hi = hs;
            var ai = ls + (hi & 1) + (hi >> 1);
            var as = ai;
            var bs = ai - hi;
            wdec14Return.a = as;
            wdec14Return.b = bs;
        }
        function wdec16(l, h) {
            var m = UInt16(l);
            var d = UInt16(h);
            var bb = m - (d >> 1) & MOD_MASK;
            var aa = d + bb - A_OFFSET & MOD_MASK;
            wdec14Return.a = aa;
            wdec14Return.b = bb;
        }
        function wav2Decode(buffer2, j, nx, ox, ny, oy, mx) {
            var w14 = mx < 1 << 14;
            var n = nx > ny ? ny : nx;
            var p = 1;
            var p2;
            while(p <= n)p <<= 1;
            p >>= 1;
            p2 = p;
            p >>= 1;
            while(p >= 1){
                var py = 0;
                var ey = py + oy * (ny - p2);
                var oy1 = oy * p;
                var oy2 = oy * p2;
                var ox1 = ox * p;
                var ox2 = ox * p2;
                var i00, i01, i10, i11;
                for(; py <= ey; py += oy2){
                    var px = py;
                    var ex = py + ox * (nx - p2);
                    for(; px <= ex; px += ox2){
                        var p01 = px + ox1;
                        var p10 = px + oy1;
                        var p11 = p10 + ox1;
                        if (w14) {
                            wdec14(buffer2[px + j], buffer2[p10 + j]);
                            i00 = wdec14Return.a;
                            i10 = wdec14Return.b;
                            wdec14(buffer2[p01 + j], buffer2[p11 + j]);
                            i01 = wdec14Return.a;
                            i11 = wdec14Return.b;
                            wdec14(i00, i01);
                            buffer2[px + j] = wdec14Return.a;
                            buffer2[p01 + j] = wdec14Return.b;
                            wdec14(i10, i11);
                            buffer2[p10 + j] = wdec14Return.a;
                            buffer2[p11 + j] = wdec14Return.b;
                        } else {
                            wdec16(buffer2[px + j], buffer2[p10 + j]);
                            i00 = wdec14Return.a;
                            i10 = wdec14Return.b;
                            wdec16(buffer2[p01 + j], buffer2[p11 + j]);
                            i01 = wdec14Return.a;
                            i11 = wdec14Return.b;
                            wdec16(i00, i01);
                            buffer2[px + j] = wdec14Return.a;
                            buffer2[p01 + j] = wdec14Return.b;
                            wdec16(i10, i11);
                            buffer2[p10 + j] = wdec14Return.a;
                            buffer2[p11 + j] = wdec14Return.b;
                        }
                    }
                    if (nx & p) {
                        var p10 = px + oy1;
                        if (w14) wdec14(buffer2[px + j], buffer2[p10 + j]);
                        else wdec16(buffer2[px + j], buffer2[p10 + j]);
                        i00 = wdec14Return.a;
                        buffer2[p10 + j] = wdec14Return.b;
                        buffer2[px + j] = i00;
                    }
                }
                if (ny & p) {
                    var px = py;
                    var ex = py + ox * (nx - p2);
                    for(; px <= ex; px += ox2){
                        var p01 = px + ox1;
                        if (w14) wdec14(buffer2[px + j], buffer2[p01 + j]);
                        else wdec16(buffer2[px + j], buffer2[p01 + j]);
                        i00 = wdec14Return.a;
                        buffer2[p01 + j] = wdec14Return.b;
                        buffer2[px + j] = i00;
                    }
                }
                p2 = p;
                p >>= 1;
            }
            return py;
        }
        function hufDecode(encodingTable, decodingTable, uInt8Array2, inDataView, inOffset, ni, rlc, no, outBuffer, outOffset) {
            var c = 0;
            var lc = 0;
            var outBufferEndOffset = no;
            var inOffsetEnd = Math.trunc(inOffset.value + (ni + 7) / 8);
            while(inOffset.value < inOffsetEnd){
                getChar(c, lc, uInt8Array2, inOffset);
                c = getCharReturn.c;
                lc = getCharReturn.lc;
                while(lc >= HUF_DECBITS){
                    var index = c >> lc - HUF_DECBITS & HUF_DECMASK;
                    var pl = decodingTable[index];
                    if (pl.len) {
                        lc -= pl.len;
                        getCode(pl.lit, rlc, c, lc, uInt8Array2, inDataView, inOffset, outBuffer, outOffset, outBufferEndOffset);
                        c = getCodeReturn.c;
                        lc = getCodeReturn.lc;
                    } else {
                        if (!pl.p) {
                            throw "hufDecode issues";
                        }
                        var j;
                        for(j = 0; j < pl.lit; j++){
                            var l = hufLength(encodingTable[pl.p[j]]);
                            while(lc < l && inOffset.value < inOffsetEnd){
                                getChar(c, lc, uInt8Array2, inOffset);
                                c = getCharReturn.c;
                                lc = getCharReturn.lc;
                            }
                            if (lc >= l) {
                                if (hufCode(encodingTable[pl.p[j]]) == (c >> lc - l & (1 << l) - 1)) {
                                    lc -= l;
                                    getCode(pl.p[j], rlc, c, lc, uInt8Array2, inDataView, inOffset, outBuffer, outOffset, outBufferEndOffset);
                                    c = getCodeReturn.c;
                                    lc = getCodeReturn.lc;
                                    break;
                                }
                            }
                        }
                        if (j == pl.lit) {
                            throw "hufDecode issues";
                        }
                    }
                }
            }
            var i = 8 - ni & 7;
            c >>= i;
            lc -= i;
            while(lc > 0){
                var pl = decodingTable[c << HUF_DECBITS - lc & HUF_DECMASK];
                if (pl.len) {
                    lc -= pl.len;
                    getCode(pl.lit, rlc, c, lc, uInt8Array2, inDataView, inOffset, outBuffer, outOffset, outBufferEndOffset);
                    c = getCodeReturn.c;
                    lc = getCodeReturn.lc;
                } else {
                    throw "hufDecode issues";
                }
            }
            return true;
        }
        function hufUncompress(uInt8Array2, inDataView, inOffset, nCompressed, outBuffer, nRaw) {
            var outOffset = {
                value: 0
            };
            var initialInOffset = inOffset.value;
            var im = parseUint32(inDataView, inOffset);
            var iM = parseUint32(inDataView, inOffset);
            inOffset.value += 4;
            var nBits = parseUint32(inDataView, inOffset);
            inOffset.value += 4;
            if (im < 0 || im >= HUF_ENCSIZE || iM < 0 || iM >= HUF_ENCSIZE) {
                throw "Something wrong with HUF_ENCSIZE";
            }
            var freq = new Array(HUF_ENCSIZE);
            var hdec = new Array(HUF_DECSIZE);
            hufClearDecTable(hdec);
            var ni = nCompressed - (inOffset.value - initialInOffset);
            hufUnpackEncTable(uInt8Array2, inDataView, inOffset, ni, im, iM, freq);
            if (nBits > 8 * (nCompressed - (inOffset.value - initialInOffset))) {
                throw "Something wrong with hufUncompress";
            }
            hufBuildDecTable(freq, im, iM, hdec);
            hufDecode(freq, hdec, uInt8Array2, inDataView, inOffset, nBits, iM, nRaw, outBuffer, outOffset);
        }
        function applyLut(lut, data, nData) {
            for(var i = 0; i < nData; ++i){
                data[i] = lut[data[i]];
            }
        }
        function predictor(source) {
            for(var t = 1; t < source.length; t++){
                var d = source[t - 1] + source[t] - 128;
                source[t] = d;
            }
        }
        function interleaveScalar(source, out) {
            var t1 = 0;
            var t2 = Math.floor((source.length + 1) / 2);
            var s = 0;
            var stop = source.length - 1;
            while(true){
                if (s > stop) break;
                out[s++] = source[t1++];
                if (s > stop) break;
                out[s++] = source[t2++];
            }
        }
        function decodeRunLength(source) {
            var size = source.byteLength;
            var out = new Array();
            var p = 0;
            var reader = new DataView(source);
            while(size > 0){
                var l = reader.getInt8(p++);
                if (l < 0) {
                    var count = -l;
                    size -= count + 1;
                    for(var i = 0; i < count; i++){
                        out.push(reader.getUint8(p++));
                    }
                } else {
                    var count = l;
                    size -= 2;
                    var value = reader.getUint8(p++);
                    for(var i = 0; i < count + 1; i++){
                        out.push(value);
                    }
                }
            }
            return out;
        }
        function lossyDctDecode(cscSet, rowPtrs, channelData, acBuffer, dcBuffer, outBuffer) {
            var dataView = new DataView(outBuffer.buffer);
            var width = channelData[cscSet.idx[0]].width;
            var height = channelData[cscSet.idx[0]].height;
            var numComp = 3;
            var numFullBlocksX = Math.floor(width / 8);
            var numBlocksX = Math.ceil(width / 8);
            var numBlocksY = Math.ceil(height / 8);
            var leftoverX = width - (numBlocksX - 1) * 8;
            var leftoverY = height - (numBlocksY - 1) * 8;
            var currAcComp = {
                value: 0
            };
            var currDcComp = new Array(numComp);
            var dctData = new Array(numComp);
            var halfZigBlock = new Array(numComp);
            var rowBlock = new Array(numComp);
            var rowOffsets = new Array(numComp);
            for(let comp2 = 0; comp2 < numComp; ++comp2){
                rowOffsets[comp2] = rowPtrs[cscSet.idx[comp2]];
                currDcComp[comp2] = comp2 < 1 ? 0 : currDcComp[comp2 - 1] + numBlocksX * numBlocksY;
                dctData[comp2] = new Float32Array(64);
                halfZigBlock[comp2] = new Uint16Array(64);
                rowBlock[comp2] = new Uint16Array(numBlocksX * 64);
            }
            for(let blocky = 0; blocky < numBlocksY; ++blocky){
                var maxY = 8;
                if (blocky == numBlocksY - 1) maxY = leftoverY;
                var maxX = 8;
                for(let blockx = 0; blockx < numBlocksX; ++blockx){
                    if (blockx == numBlocksX - 1) maxX = leftoverX;
                    for(let comp2 = 0; comp2 < numComp; ++comp2){
                        halfZigBlock[comp2].fill(0);
                        halfZigBlock[comp2][0] = dcBuffer[currDcComp[comp2]++];
                        unRleAC(currAcComp, acBuffer, halfZigBlock[comp2]);
                        unZigZag(halfZigBlock[comp2], dctData[comp2]);
                        dctInverse(dctData[comp2]);
                    }
                    {
                        csc709Inverse(dctData);
                    }
                    for(let comp2 = 0; comp2 < numComp; ++comp2){
                        convertToHalf(dctData[comp2], rowBlock[comp2], blockx * 64);
                    }
                }
                let offset2 = 0;
                for(let comp2 = 0; comp2 < numComp; ++comp2){
                    const type2 = channelData[cscSet.idx[comp2]].type;
                    for(let y2 = 8 * blocky; y2 < 8 * blocky + maxY; ++y2){
                        offset2 = rowOffsets[comp2][y2];
                        for(let blockx = 0; blockx < numFullBlocksX; ++blockx){
                            const src = blockx * 64 + (y2 & 7) * 8;
                            dataView.setUint16(offset2 + 0 * INT16_SIZE * type2, rowBlock[comp2][src + 0], true);
                            dataView.setUint16(offset2 + 1 * INT16_SIZE * type2, rowBlock[comp2][src + 1], true);
                            dataView.setUint16(offset2 + 2 * INT16_SIZE * type2, rowBlock[comp2][src + 2], true);
                            dataView.setUint16(offset2 + 3 * INT16_SIZE * type2, rowBlock[comp2][src + 3], true);
                            dataView.setUint16(offset2 + 4 * INT16_SIZE * type2, rowBlock[comp2][src + 4], true);
                            dataView.setUint16(offset2 + 5 * INT16_SIZE * type2, rowBlock[comp2][src + 5], true);
                            dataView.setUint16(offset2 + 6 * INT16_SIZE * type2, rowBlock[comp2][src + 6], true);
                            dataView.setUint16(offset2 + 7 * INT16_SIZE * type2, rowBlock[comp2][src + 7], true);
                            offset2 += 8 * INT16_SIZE * type2;
                        }
                    }
                    if (numFullBlocksX != numBlocksX) {
                        for(let y2 = 8 * blocky; y2 < 8 * blocky + maxY; ++y2){
                            const offset3 = rowOffsets[comp2][y2] + 8 * numFullBlocksX * INT16_SIZE * type2;
                            const src = numFullBlocksX * 64 + (y2 & 7) * 8;
                            for(let x2 = 0; x2 < maxX; ++x2){
                                dataView.setUint16(offset3 + x2 * INT16_SIZE * type2, rowBlock[comp2][src + x2], true);
                            }
                        }
                    }
                }
            }
            var halfRow = new Uint16Array(width);
            var dataView = new DataView(outBuffer.buffer);
            for(var comp = 0; comp < numComp; ++comp){
                channelData[cscSet.idx[comp]].decoded = true;
                var type = channelData[cscSet.idx[comp]].type;
                if (channelData[comp].type != 2) continue;
                for(var y = 0; y < height; ++y){
                    const offset2 = rowOffsets[comp][y];
                    for(var x = 0; x < width; ++x){
                        halfRow[x] = dataView.getUint16(offset2 + x * INT16_SIZE * type, true);
                    }
                    for(var x = 0; x < width; ++x){
                        dataView.setFloat32(offset2 + x * INT16_SIZE * type, decodeFloat16(halfRow[x]), true);
                    }
                }
            }
        }
        function unRleAC(currAcComp, acBuffer, halfZigBlock) {
            var acValue;
            var dctComp = 1;
            while(dctComp < 64){
                acValue = acBuffer[currAcComp.value];
                if (acValue == 65280) {
                    dctComp = 64;
                } else if (acValue >> 8 == 255) {
                    dctComp += acValue & 255;
                } else {
                    halfZigBlock[dctComp] = acValue;
                    dctComp++;
                }
                currAcComp.value++;
            }
        }
        function unZigZag(src, dst) {
            dst[0] = decodeFloat16(src[0]);
            dst[1] = decodeFloat16(src[1]);
            dst[2] = decodeFloat16(src[5]);
            dst[3] = decodeFloat16(src[6]);
            dst[4] = decodeFloat16(src[14]);
            dst[5] = decodeFloat16(src[15]);
            dst[6] = decodeFloat16(src[27]);
            dst[7] = decodeFloat16(src[28]);
            dst[8] = decodeFloat16(src[2]);
            dst[9] = decodeFloat16(src[4]);
            dst[10] = decodeFloat16(src[7]);
            dst[11] = decodeFloat16(src[13]);
            dst[12] = decodeFloat16(src[16]);
            dst[13] = decodeFloat16(src[26]);
            dst[14] = decodeFloat16(src[29]);
            dst[15] = decodeFloat16(src[42]);
            dst[16] = decodeFloat16(src[3]);
            dst[17] = decodeFloat16(src[8]);
            dst[18] = decodeFloat16(src[12]);
            dst[19] = decodeFloat16(src[17]);
            dst[20] = decodeFloat16(src[25]);
            dst[21] = decodeFloat16(src[30]);
            dst[22] = decodeFloat16(src[41]);
            dst[23] = decodeFloat16(src[43]);
            dst[24] = decodeFloat16(src[9]);
            dst[25] = decodeFloat16(src[11]);
            dst[26] = decodeFloat16(src[18]);
            dst[27] = decodeFloat16(src[24]);
            dst[28] = decodeFloat16(src[31]);
            dst[29] = decodeFloat16(src[40]);
            dst[30] = decodeFloat16(src[44]);
            dst[31] = decodeFloat16(src[53]);
            dst[32] = decodeFloat16(src[10]);
            dst[33] = decodeFloat16(src[19]);
            dst[34] = decodeFloat16(src[23]);
            dst[35] = decodeFloat16(src[32]);
            dst[36] = decodeFloat16(src[39]);
            dst[37] = decodeFloat16(src[45]);
            dst[38] = decodeFloat16(src[52]);
            dst[39] = decodeFloat16(src[54]);
            dst[40] = decodeFloat16(src[20]);
            dst[41] = decodeFloat16(src[22]);
            dst[42] = decodeFloat16(src[33]);
            dst[43] = decodeFloat16(src[38]);
            dst[44] = decodeFloat16(src[46]);
            dst[45] = decodeFloat16(src[51]);
            dst[46] = decodeFloat16(src[55]);
            dst[47] = decodeFloat16(src[60]);
            dst[48] = decodeFloat16(src[21]);
            dst[49] = decodeFloat16(src[34]);
            dst[50] = decodeFloat16(src[37]);
            dst[51] = decodeFloat16(src[47]);
            dst[52] = decodeFloat16(src[50]);
            dst[53] = decodeFloat16(src[56]);
            dst[54] = decodeFloat16(src[59]);
            dst[55] = decodeFloat16(src[61]);
            dst[56] = decodeFloat16(src[35]);
            dst[57] = decodeFloat16(src[36]);
            dst[58] = decodeFloat16(src[48]);
            dst[59] = decodeFloat16(src[49]);
            dst[60] = decodeFloat16(src[57]);
            dst[61] = decodeFloat16(src[58]);
            dst[62] = decodeFloat16(src[62]);
            dst[63] = decodeFloat16(src[63]);
        }
        function dctInverse(data) {
            const a = 0.5 * Math.cos(3.14159 / 4);
            const b = 0.5 * Math.cos(3.14159 / 16);
            const c = 0.5 * Math.cos(3.14159 / 8);
            const d = 0.5 * Math.cos(3 * 3.14159 / 16);
            const e = 0.5 * Math.cos(5 * 3.14159 / 16);
            const f = 0.5 * Math.cos(3 * 3.14159 / 8);
            const g = 0.5 * Math.cos(7 * 3.14159 / 16);
            var alpha = new Array(4);
            var beta = new Array(4);
            var theta = new Array(4);
            var gamma = new Array(4);
            for(var row = 0; row < 8; ++row){
                var rowPtr = row * 8;
                alpha[0] = c * data[rowPtr + 2];
                alpha[1] = f * data[rowPtr + 2];
                alpha[2] = c * data[rowPtr + 6];
                alpha[3] = f * data[rowPtr + 6];
                beta[0] = b * data[rowPtr + 1] + d * data[rowPtr + 3] + e * data[rowPtr + 5] + g * data[rowPtr + 7];
                beta[1] = d * data[rowPtr + 1] - g * data[rowPtr + 3] - b * data[rowPtr + 5] - e * data[rowPtr + 7];
                beta[2] = e * data[rowPtr + 1] - b * data[rowPtr + 3] + g * data[rowPtr + 5] + d * data[rowPtr + 7];
                beta[3] = g * data[rowPtr + 1] - e * data[rowPtr + 3] + d * data[rowPtr + 5] - b * data[rowPtr + 7];
                theta[0] = a * (data[rowPtr + 0] + data[rowPtr + 4]);
                theta[3] = a * (data[rowPtr + 0] - data[rowPtr + 4]);
                theta[1] = alpha[0] + alpha[3];
                theta[2] = alpha[1] - alpha[2];
                gamma[0] = theta[0] + theta[1];
                gamma[1] = theta[3] + theta[2];
                gamma[2] = theta[3] - theta[2];
                gamma[3] = theta[0] - theta[1];
                data[rowPtr + 0] = gamma[0] + beta[0];
                data[rowPtr + 1] = gamma[1] + beta[1];
                data[rowPtr + 2] = gamma[2] + beta[2];
                data[rowPtr + 3] = gamma[3] + beta[3];
                data[rowPtr + 4] = gamma[3] - beta[3];
                data[rowPtr + 5] = gamma[2] - beta[2];
                data[rowPtr + 6] = gamma[1] - beta[1];
                data[rowPtr + 7] = gamma[0] - beta[0];
            }
            for(var column = 0; column < 8; ++column){
                alpha[0] = c * data[16 + column];
                alpha[1] = f * data[16 + column];
                alpha[2] = c * data[48 + column];
                alpha[3] = f * data[48 + column];
                beta[0] = b * data[8 + column] + d * data[24 + column] + e * data[40 + column] + g * data[56 + column];
                beta[1] = d * data[8 + column] - g * data[24 + column] - b * data[40 + column] - e * data[56 + column];
                beta[2] = e * data[8 + column] - b * data[24 + column] + g * data[40 + column] + d * data[56 + column];
                beta[3] = g * data[8 + column] - e * data[24 + column] + d * data[40 + column] - b * data[56 + column];
                theta[0] = a * (data[column] + data[32 + column]);
                theta[3] = a * (data[column] - data[32 + column]);
                theta[1] = alpha[0] + alpha[3];
                theta[2] = alpha[1] - alpha[2];
                gamma[0] = theta[0] + theta[1];
                gamma[1] = theta[3] + theta[2];
                gamma[2] = theta[3] - theta[2];
                gamma[3] = theta[0] - theta[1];
                data[0 + column] = gamma[0] + beta[0];
                data[8 + column] = gamma[1] + beta[1];
                data[16 + column] = gamma[2] + beta[2];
                data[24 + column] = gamma[3] + beta[3];
                data[32 + column] = gamma[3] - beta[3];
                data[40 + column] = gamma[2] - beta[2];
                data[48 + column] = gamma[1] - beta[1];
                data[56 + column] = gamma[0] - beta[0];
            }
        }
        function csc709Inverse(data) {
            for(var i = 0; i < 64; ++i){
                var y = data[0][i];
                var cb = data[1][i];
                var cr = data[2][i];
                data[0][i] = y + 1.5747 * cr;
                data[1][i] = y - 0.1873 * cb - 0.4682 * cr;
                data[2][i] = y + 1.8556 * cb;
            }
        }
        function convertToHalf(src, dst, idx) {
            for(var i = 0; i < 64; ++i){
                dst[idx + i] = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataUtils"].toHalfFloat(toLinear(src[i]));
            }
        }
        function toLinear(float) {
            if (float <= 1) {
                return Math.sign(float) * Math.pow(Math.abs(float), 2.2);
            } else {
                return Math.sign(float) * Math.pow(logBase, Math.abs(float) - 1);
            }
        }
        function uncompressRAW(info) {
            return new DataView(info.array.buffer, info.offset.value, info.size);
        }
        function uncompressRLE(info) {
            var compressed = info.viewer.buffer.slice(info.offset.value, info.offset.value + info.size);
            var rawBuffer = new Uint8Array(decodeRunLength(compressed));
            var tmpBuffer = new Uint8Array(rawBuffer.length);
            predictor(rawBuffer);
            interleaveScalar(rawBuffer, tmpBuffer);
            return new DataView(tmpBuffer.buffer);
        }
        function uncompressZIP(info) {
            var compressed = info.array.slice(info.offset.value, info.offset.value + info.size);
            var rawBuffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2d$stdlib$2f$node_modules$2f$fflate$2f$esm$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unzlibSync"])(compressed);
            var tmpBuffer = new Uint8Array(rawBuffer.length);
            predictor(rawBuffer);
            interleaveScalar(rawBuffer, tmpBuffer);
            return new DataView(tmpBuffer.buffer);
        }
        function uncompressPIZ(info) {
            var inDataView = info.viewer;
            var inOffset = {
                value: info.offset.value
            };
            var outBuffer = new Uint16Array(info.width * info.scanlineBlockSize * (info.channels * info.type));
            var bitmap = new Uint8Array(BITMAP_SIZE);
            var outBufferEnd = 0;
            var pizChannelData = new Array(info.channels);
            for(var i = 0; i < info.channels; i++){
                pizChannelData[i] = {};
                pizChannelData[i]["start"] = outBufferEnd;
                pizChannelData[i]["end"] = pizChannelData[i]["start"];
                pizChannelData[i]["nx"] = info.width;
                pizChannelData[i]["ny"] = info.lines;
                pizChannelData[i]["size"] = info.type;
                outBufferEnd += pizChannelData[i].nx * pizChannelData[i].ny * pizChannelData[i].size;
            }
            var minNonZero = parseUint16(inDataView, inOffset);
            var maxNonZero = parseUint16(inDataView, inOffset);
            if (maxNonZero >= BITMAP_SIZE) {
                throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
            }
            if (minNonZero <= maxNonZero) {
                for(var i = 0; i < maxNonZero - minNonZero + 1; i++){
                    bitmap[i + minNonZero] = parseUint8(inDataView, inOffset);
                }
            }
            var lut = new Uint16Array(USHORT_RANGE);
            var maxValue = reverseLutFromBitmap(bitmap, lut);
            var length = parseUint32(inDataView, inOffset);
            hufUncompress(info.array, inDataView, inOffset, length, outBuffer, outBufferEnd);
            for(var i = 0; i < info.channels; ++i){
                var cd = pizChannelData[i];
                for(var j = 0; j < pizChannelData[i].size; ++j){
                    wav2Decode(outBuffer, cd.start + j, cd.nx, cd.size, cd.ny, cd.nx * cd.size, maxValue);
                }
            }
            applyLut(lut, outBuffer, outBufferEnd);
            var tmpOffset2 = 0;
            var tmpBuffer = new Uint8Array(outBuffer.buffer.byteLength);
            for(var y = 0; y < info.lines; y++){
                for(var c = 0; c < info.channels; c++){
                    var cd = pizChannelData[c];
                    var n = cd.nx * cd.size;
                    var cp = new Uint8Array(outBuffer.buffer, cd.end * INT16_SIZE, n * INT16_SIZE);
                    tmpBuffer.set(cp, tmpOffset2);
                    tmpOffset2 += n * INT16_SIZE;
                    cd.end += n;
                }
            }
            return new DataView(tmpBuffer.buffer);
        }
        function uncompressPXR(info) {
            var compressed = info.array.slice(info.offset.value, info.offset.value + info.size);
            var rawBuffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2d$stdlib$2f$node_modules$2f$fflate$2f$esm$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unzlibSync"])(compressed);
            const sz = info.lines * info.channels * info.width;
            const tmpBuffer = info.type == 1 ? new Uint16Array(sz) : new Uint32Array(sz);
            let tmpBufferEnd = 0;
            let writePtr = 0;
            const ptr = new Array(4);
            for(let y = 0; y < info.lines; y++){
                for(let c = 0; c < info.channels; c++){
                    let pixel = 0;
                    switch(info.type){
                        case 1:
                            ptr[0] = tmpBufferEnd;
                            ptr[1] = ptr[0] + info.width;
                            tmpBufferEnd = ptr[1] + info.width;
                            for(let j = 0; j < info.width; ++j){
                                const diff = rawBuffer[ptr[0]++] << 8 | rawBuffer[ptr[1]++];
                                pixel += diff;
                                tmpBuffer[writePtr] = pixel;
                                writePtr++;
                            }
                            break;
                        case 2:
                            ptr[0] = tmpBufferEnd;
                            ptr[1] = ptr[0] + info.width;
                            ptr[2] = ptr[1] + info.width;
                            tmpBufferEnd = ptr[2] + info.width;
                            for(let j = 0; j < info.width; ++j){
                                const diff = rawBuffer[ptr[0]++] << 24 | rawBuffer[ptr[1]++] << 16 | rawBuffer[ptr[2]++] << 8;
                                pixel += diff;
                                tmpBuffer[writePtr] = pixel;
                                writePtr++;
                            }
                            break;
                    }
                }
            }
            return new DataView(tmpBuffer.buffer);
        }
        function uncompressDWA(info) {
            var inDataView = info.viewer;
            var inOffset = {
                value: info.offset.value
            };
            var outBuffer = new Uint8Array(info.width * info.lines * (info.channels * info.type * INT16_SIZE));
            var dwaHeader = {
                version: parseInt64(inDataView, inOffset),
                unknownUncompressedSize: parseInt64(inDataView, inOffset),
                unknownCompressedSize: parseInt64(inDataView, inOffset),
                acCompressedSize: parseInt64(inDataView, inOffset),
                dcCompressedSize: parseInt64(inDataView, inOffset),
                rleCompressedSize: parseInt64(inDataView, inOffset),
                rleUncompressedSize: parseInt64(inDataView, inOffset),
                rleRawSize: parseInt64(inDataView, inOffset),
                totalAcUncompressedCount: parseInt64(inDataView, inOffset),
                totalDcUncompressedCount: parseInt64(inDataView, inOffset),
                acCompression: parseInt64(inDataView, inOffset)
            };
            if (dwaHeader.version < 2) {
                throw "EXRLoader.parse: " + EXRHeader.compression + " version " + dwaHeader.version + " is unsupported";
            }
            var channelRules = new Array();
            var ruleSize = parseUint16(inDataView, inOffset) - INT16_SIZE;
            while(ruleSize > 0){
                var name = parseNullTerminatedString(inDataView.buffer, inOffset);
                var value = parseUint8(inDataView, inOffset);
                var compression = value >> 2 & 3;
                var csc = (value >> 4) - 1;
                var index = new Int8Array([
                    csc
                ])[0];
                var type = parseUint8(inDataView, inOffset);
                channelRules.push({
                    name,
                    index,
                    type,
                    compression
                });
                ruleSize -= name.length + 3;
            }
            var channels = EXRHeader.channels;
            var channelData = new Array(info.channels);
            for(var i = 0; i < info.channels; ++i){
                var cd = channelData[i] = {};
                var channel = channels[i];
                cd.name = channel.name;
                cd.compression = UNKNOWN;
                cd.decoded = false;
                cd.type = channel.pixelType;
                cd.pLinear = channel.pLinear;
                cd.width = info.width;
                cd.height = info.lines;
            }
            var cscSet = {
                idx: new Array(3)
            };
            for(var offset2 = 0; offset2 < info.channels; ++offset2){
                var cd = channelData[offset2];
                for(var i = 0; i < channelRules.length; ++i){
                    var rule = channelRules[i];
                    if (cd.name == rule.name) {
                        cd.compression = rule.compression;
                        if (rule.index >= 0) {
                            cscSet.idx[rule.index] = offset2;
                        }
                        cd.offset = offset2;
                    }
                }
            }
            if (dwaHeader.acCompressedSize > 0) {
                switch(dwaHeader.acCompression){
                    case STATIC_HUFFMAN:
                        var acBuffer = new Uint16Array(dwaHeader.totalAcUncompressedCount);
                        hufUncompress(info.array, inDataView, inOffset, dwaHeader.acCompressedSize, acBuffer, dwaHeader.totalAcUncompressedCount);
                        break;
                    case DEFLATE:
                        var compressed = info.array.slice(inOffset.value, inOffset.value + dwaHeader.totalAcUncompressedCount);
                        var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2d$stdlib$2f$node_modules$2f$fflate$2f$esm$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unzlibSync"])(compressed);
                        var acBuffer = new Uint16Array(data.buffer);
                        inOffset.value += dwaHeader.totalAcUncompressedCount;
                        break;
                }
            }
            if (dwaHeader.dcCompressedSize > 0) {
                var zlibInfo = {
                    array: info.array,
                    offset: inOffset,
                    size: dwaHeader.dcCompressedSize
                };
                var dcBuffer = new Uint16Array(uncompressZIP(zlibInfo).buffer);
                inOffset.value += dwaHeader.dcCompressedSize;
            }
            if (dwaHeader.rleRawSize > 0) {
                var compressed = info.array.slice(inOffset.value, inOffset.value + dwaHeader.rleCompressedSize);
                var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2d$stdlib$2f$node_modules$2f$fflate$2f$esm$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unzlibSync"])(compressed);
                var rleBuffer = decodeRunLength(data.buffer);
                inOffset.value += dwaHeader.rleCompressedSize;
            }
            var outBufferEnd = 0;
            var rowOffsets = new Array(channelData.length);
            for(var i = 0; i < rowOffsets.length; ++i){
                rowOffsets[i] = new Array();
            }
            for(var y = 0; y < info.lines; ++y){
                for(var chan = 0; chan < channelData.length; ++chan){
                    rowOffsets[chan].push(outBufferEnd);
                    outBufferEnd += channelData[chan].width * info.type * INT16_SIZE;
                }
            }
            lossyDctDecode(cscSet, rowOffsets, channelData, acBuffer, dcBuffer, outBuffer);
            for(var i = 0; i < channelData.length; ++i){
                var cd = channelData[i];
                if (cd.decoded) continue;
                switch(cd.compression){
                    case RLE:
                        var row = 0;
                        var rleOffset = 0;
                        for(var y = 0; y < info.lines; ++y){
                            var rowOffsetBytes = rowOffsets[i][row];
                            for(var x = 0; x < cd.width; ++x){
                                for(var byte = 0; byte < INT16_SIZE * cd.type; ++byte){
                                    outBuffer[rowOffsetBytes++] = rleBuffer[rleOffset + byte * cd.width * cd.height];
                                }
                                rleOffset++;
                            }
                            row++;
                        }
                        break;
                    case LOSSY_DCT:
                    default:
                        throw "EXRLoader.parse: unsupported channel compression";
                }
            }
            return new DataView(outBuffer.buffer);
        }
        function parseNullTerminatedString(buffer2, offset2) {
            var uintBuffer = new Uint8Array(buffer2);
            var endOffset = 0;
            while(uintBuffer[offset2.value + endOffset] != 0){
                endOffset += 1;
            }
            var stringValue = new TextDecoder().decode(uintBuffer.slice(offset2.value, offset2.value + endOffset));
            offset2.value = offset2.value + endOffset + 1;
            return stringValue;
        }
        function parseFixedLengthString(buffer2, offset2, size) {
            var stringValue = new TextDecoder().decode(new Uint8Array(buffer2).slice(offset2.value, offset2.value + size));
            offset2.value = offset2.value + size;
            return stringValue;
        }
        function parseRational(dataView, offset2) {
            var x = parseInt32(dataView, offset2);
            var y = parseUint32(dataView, offset2);
            return [
                x,
                y
            ];
        }
        function parseTimecode(dataView, offset2) {
            var x = parseUint32(dataView, offset2);
            var y = parseUint32(dataView, offset2);
            return [
                x,
                y
            ];
        }
        function parseInt32(dataView, offset2) {
            var Int32 = dataView.getInt32(offset2.value, true);
            offset2.value = offset2.value + INT32_SIZE;
            return Int32;
        }
        function parseUint32(dataView, offset2) {
            var Uint32 = dataView.getUint32(offset2.value, true);
            offset2.value = offset2.value + INT32_SIZE;
            return Uint32;
        }
        function parseUint8Array(uInt8Array2, offset2) {
            var Uint8 = uInt8Array2[offset2.value];
            offset2.value = offset2.value + INT8_SIZE;
            return Uint8;
        }
        function parseUint8(dataView, offset2) {
            var Uint8 = dataView.getUint8(offset2.value);
            offset2.value = offset2.value + INT8_SIZE;
            return Uint8;
        }
        const parseInt64 = function(dataView, offset2) {
            let int;
            if ("getBigInt64" in DataView.prototype) {
                int = Number(dataView.getBigInt64(offset2.value, true));
            } else {
                int = dataView.getUint32(offset2.value + 4, true) + Number(dataView.getUint32(offset2.value, true) << 32);
            }
            offset2.value += ULONG_SIZE;
            return int;
        };
        function parseFloat32(dataView, offset2) {
            var float = dataView.getFloat32(offset2.value, true);
            offset2.value += FLOAT32_SIZE;
            return float;
        }
        function decodeFloat32(dataView, offset2) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataUtils"].toHalfFloat(parseFloat32(dataView, offset2));
        }
        function decodeFloat16(binary) {
            var exponent = (binary & 31744) >> 10, fraction = binary & 1023;
            return (binary >> 15 ? -1 : 1) * (exponent ? exponent === 31 ? fraction ? NaN : Infinity : Math.pow(2, exponent - 15) * (1 + fraction / 1024) : 6103515625e-14 * (fraction / 1024));
        }
        function parseUint16(dataView, offset2) {
            var Uint16 = dataView.getUint16(offset2.value, true);
            offset2.value += INT16_SIZE;
            return Uint16;
        }
        function parseFloat16(buffer2, offset2) {
            return decodeFloat16(parseUint16(buffer2, offset2));
        }
        function parseChlist(dataView, buffer2, offset2, size) {
            var startOffset = offset2.value;
            var channels = [];
            while(offset2.value < startOffset + size - 1){
                var name = parseNullTerminatedString(buffer2, offset2);
                var pixelType = parseInt32(dataView, offset2);
                var pLinear = parseUint8(dataView, offset2);
                offset2.value += 3;
                var xSampling = parseInt32(dataView, offset2);
                var ySampling = parseInt32(dataView, offset2);
                channels.push({
                    name,
                    pixelType,
                    pLinear,
                    xSampling,
                    ySampling
                });
            }
            offset2.value += 1;
            return channels;
        }
        function parseChromaticities(dataView, offset2) {
            var redX = parseFloat32(dataView, offset2);
            var redY = parseFloat32(dataView, offset2);
            var greenX = parseFloat32(dataView, offset2);
            var greenY = parseFloat32(dataView, offset2);
            var blueX = parseFloat32(dataView, offset2);
            var blueY = parseFloat32(dataView, offset2);
            var whiteX = parseFloat32(dataView, offset2);
            var whiteY = parseFloat32(dataView, offset2);
            return {
                redX,
                redY,
                greenX,
                greenY,
                blueX,
                blueY,
                whiteX,
                whiteY
            };
        }
        function parseCompression(dataView, offset2) {
            var compressionCodes = [
                "NO_COMPRESSION",
                "RLE_COMPRESSION",
                "ZIPS_COMPRESSION",
                "ZIP_COMPRESSION",
                "PIZ_COMPRESSION",
                "PXR24_COMPRESSION",
                "B44_COMPRESSION",
                "B44A_COMPRESSION",
                "DWAA_COMPRESSION",
                "DWAB_COMPRESSION"
            ];
            var compression = parseUint8(dataView, offset2);
            return compressionCodes[compression];
        }
        function parseBox2i(dataView, offset2) {
            var xMin = parseUint32(dataView, offset2);
            var yMin = parseUint32(dataView, offset2);
            var xMax = parseUint32(dataView, offset2);
            var yMax = parseUint32(dataView, offset2);
            return {
                xMin,
                yMin,
                xMax,
                yMax
            };
        }
        function parseLineOrder(dataView, offset2) {
            var lineOrders = [
                "INCREASING_Y"
            ];
            var lineOrder = parseUint8(dataView, offset2);
            return lineOrders[lineOrder];
        }
        function parseV2f(dataView, offset2) {
            var x = parseFloat32(dataView, offset2);
            var y = parseFloat32(dataView, offset2);
            return [
                x,
                y
            ];
        }
        function parseV3f(dataView, offset2) {
            var x = parseFloat32(dataView, offset2);
            var y = parseFloat32(dataView, offset2);
            var z = parseFloat32(dataView, offset2);
            return [
                x,
                y,
                z
            ];
        }
        function parseValue(dataView, buffer2, offset2, type, size) {
            if (type === "string" || type === "stringvector" || type === "iccProfile") {
                return parseFixedLengthString(buffer2, offset2, size);
            } else if (type === "chlist") {
                return parseChlist(dataView, buffer2, offset2, size);
            } else if (type === "chromaticities") {
                return parseChromaticities(dataView, offset2);
            } else if (type === "compression") {
                return parseCompression(dataView, offset2);
            } else if (type === "box2i") {
                return parseBox2i(dataView, offset2);
            } else if (type === "lineOrder") {
                return parseLineOrder(dataView, offset2);
            } else if (type === "float") {
                return parseFloat32(dataView, offset2);
            } else if (type === "v2f") {
                return parseV2f(dataView, offset2);
            } else if (type === "v3f") {
                return parseV3f(dataView, offset2);
            } else if (type === "int") {
                return parseInt32(dataView, offset2);
            } else if (type === "rational") {
                return parseRational(dataView, offset2);
            } else if (type === "timecode") {
                return parseTimecode(dataView, offset2);
            } else if (type === "preview") {
                offset2.value += size;
                return "skipped";
            } else {
                offset2.value += size;
                return void 0;
            }
        }
        function parseHeader(dataView, buffer2, offset2) {
            const EXRHeader2 = {};
            if (dataView.getUint32(0, true) != 20000630) {
                throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
            }
            EXRHeader2.version = dataView.getUint8(4);
            const spec = dataView.getUint8(5);
            EXRHeader2.spec = {
                singleTile: !!(spec & 2),
                longName: !!(spec & 4),
                deepFormat: !!(spec & 8),
                multiPart: !!(spec & 16)
            };
            offset2.value = 8;
            var keepReading = true;
            while(keepReading){
                var attributeName = parseNullTerminatedString(buffer2, offset2);
                if (attributeName == 0) {
                    keepReading = false;
                } else {
                    var attributeType = parseNullTerminatedString(buffer2, offset2);
                    var attributeSize = parseUint32(dataView, offset2);
                    var attributeValue = parseValue(dataView, buffer2, offset2, attributeType, attributeSize);
                    if (attributeValue === void 0) {
                        console.warn(`EXRLoader.parse: skipped unknown header attribute type '${attributeType}'.`);
                    } else {
                        EXRHeader2[attributeName] = attributeValue;
                    }
                }
            }
            if ((spec & ~4) != 0) {
                console.error("EXRHeader:", EXRHeader2);
                throw "THREE.EXRLoader: provided file is currently unsupported.";
            }
            return EXRHeader2;
        }
        function setupDecoder(EXRHeader2, dataView, uInt8Array2, offset2, outputType) {
            const EXRDecoder2 = {
                size: 0,
                viewer: dataView,
                array: uInt8Array2,
                offset: offset2,
                width: EXRHeader2.dataWindow.xMax - EXRHeader2.dataWindow.xMin + 1,
                height: EXRHeader2.dataWindow.yMax - EXRHeader2.dataWindow.yMin + 1,
                channels: EXRHeader2.channels.length,
                bytesPerLine: null,
                lines: null,
                inputSize: null,
                type: EXRHeader2.channels[0].pixelType,
                uncompress: null,
                getter: null,
                format: null,
                [hasColorSpace ? "colorSpace" : "encoding"]: null
            };
            switch(EXRHeader2.compression){
                case "NO_COMPRESSION":
                    EXRDecoder2.lines = 1;
                    EXRDecoder2.uncompress = uncompressRAW;
                    break;
                case "RLE_COMPRESSION":
                    EXRDecoder2.lines = 1;
                    EXRDecoder2.uncompress = uncompressRLE;
                    break;
                case "ZIPS_COMPRESSION":
                    EXRDecoder2.lines = 1;
                    EXRDecoder2.uncompress = uncompressZIP;
                    break;
                case "ZIP_COMPRESSION":
                    EXRDecoder2.lines = 16;
                    EXRDecoder2.uncompress = uncompressZIP;
                    break;
                case "PIZ_COMPRESSION":
                    EXRDecoder2.lines = 32;
                    EXRDecoder2.uncompress = uncompressPIZ;
                    break;
                case "PXR24_COMPRESSION":
                    EXRDecoder2.lines = 16;
                    EXRDecoder2.uncompress = uncompressPXR;
                    break;
                case "DWAA_COMPRESSION":
                    EXRDecoder2.lines = 32;
                    EXRDecoder2.uncompress = uncompressDWA;
                    break;
                case "DWAB_COMPRESSION":
                    EXRDecoder2.lines = 256;
                    EXRDecoder2.uncompress = uncompressDWA;
                    break;
                default:
                    throw "EXRLoader.parse: " + EXRHeader2.compression + " is unsupported";
            }
            EXRDecoder2.scanlineBlockSize = EXRDecoder2.lines;
            if (EXRDecoder2.type == 1) {
                switch(outputType){
                    case __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatType"]:
                        EXRDecoder2.getter = parseFloat16;
                        EXRDecoder2.inputSize = INT16_SIZE;
                        break;
                    case __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"]:
                        EXRDecoder2.getter = parseUint16;
                        EXRDecoder2.inputSize = INT16_SIZE;
                        break;
                }
            } else if (EXRDecoder2.type == 2) {
                switch(outputType){
                    case __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatType"]:
                        EXRDecoder2.getter = parseFloat32;
                        EXRDecoder2.inputSize = FLOAT32_SIZE;
                        break;
                    case __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"]:
                        EXRDecoder2.getter = decodeFloat32;
                        EXRDecoder2.inputSize = FLOAT32_SIZE;
                }
            } else {
                throw "EXRLoader.parse: unsupported pixelType " + EXRDecoder2.type + " for " + EXRHeader2.compression + ".";
            }
            EXRDecoder2.blockCount = (EXRHeader2.dataWindow.yMax + 1) / EXRDecoder2.scanlineBlockSize;
            for(var i = 0; i < EXRDecoder2.blockCount; i++)parseInt64(dataView, offset2);
            EXRDecoder2.outputChannels = EXRDecoder2.channels == 3 ? 4 : EXRDecoder2.channels;
            const size = EXRDecoder2.width * EXRDecoder2.height * EXRDecoder2.outputChannels;
            switch(outputType){
                case __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatType"]:
                    EXRDecoder2.byteArray = new Float32Array(size);
                    if (EXRDecoder2.channels < EXRDecoder2.outputChannels) EXRDecoder2.byteArray.fill(1, 0, size);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"]:
                    EXRDecoder2.byteArray = new Uint16Array(size);
                    if (EXRDecoder2.channels < EXRDecoder2.outputChannels) EXRDecoder2.byteArray.fill(15360, 0, size);
                    break;
                default:
                    console.error("THREE.EXRLoader: unsupported type: ", outputType);
                    break;
            }
            EXRDecoder2.bytesPerLine = EXRDecoder2.width * EXRDecoder2.inputSize * EXRDecoder2.channels;
            if (EXRDecoder2.outputChannels == 4) EXRDecoder2.format = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RGBAFormat"];
            else EXRDecoder2.format = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedFormat"];
            if (hasColorSpace) EXRDecoder2.colorSpace = "srgb-linear";
            else EXRDecoder2.encoding = 3e3;
            return EXRDecoder2;
        }
        const bufferDataView = new DataView(buffer);
        const uInt8Array = new Uint8Array(buffer);
        const offset = {
            value: 0
        };
        const EXRHeader = parseHeader(bufferDataView, buffer, offset);
        const EXRDecoder = setupDecoder(EXRHeader, bufferDataView, uInt8Array, offset, this.type);
        const tmpOffset = {
            value: 0
        };
        const channelOffsets = {
            R: 0,
            G: 1,
            B: 2,
            A: 3,
            Y: 0
        };
        for(let scanlineBlockIdx = 0; scanlineBlockIdx < EXRDecoder.height / EXRDecoder.scanlineBlockSize; scanlineBlockIdx++){
            const line = parseUint32(bufferDataView, offset);
            EXRDecoder.size = parseUint32(bufferDataView, offset);
            EXRDecoder.lines = line + EXRDecoder.scanlineBlockSize > EXRDecoder.height ? EXRDecoder.height - line : EXRDecoder.scanlineBlockSize;
            const isCompressed = EXRDecoder.size < EXRDecoder.lines * EXRDecoder.bytesPerLine;
            const viewer = isCompressed ? EXRDecoder.uncompress(EXRDecoder) : uncompressRAW(EXRDecoder);
            offset.value += EXRDecoder.size;
            for(let line_y = 0; line_y < EXRDecoder.scanlineBlockSize; line_y++){
                const true_y = line_y + scanlineBlockIdx * EXRDecoder.scanlineBlockSize;
                if (true_y >= EXRDecoder.height) break;
                for(let channelID = 0; channelID < EXRDecoder.channels; channelID++){
                    const cOff = channelOffsets[EXRHeader.channels[channelID].name];
                    for(let x = 0; x < EXRDecoder.width; x++){
                        tmpOffset.value = (line_y * (EXRDecoder.channels * EXRDecoder.width) + channelID * EXRDecoder.width + x) * EXRDecoder.inputSize;
                        const outIndex = (EXRDecoder.height - 1 - true_y) * (EXRDecoder.width * EXRDecoder.outputChannels) + x * EXRDecoder.outputChannels + cOff;
                        EXRDecoder.byteArray[outIndex] = EXRDecoder.getter(viewer, tmpOffset);
                    }
                }
            }
        }
        return {
            header: EXRHeader,
            width: EXRDecoder.width,
            height: EXRDecoder.height,
            data: EXRDecoder.byteArray,
            format: EXRDecoder.format,
            [hasColorSpace ? "colorSpace" : "encoding"]: EXRDecoder[hasColorSpace ? "colorSpace" : "encoding"],
            type: this.type
        };
    }
    setDataType(value) {
        this.type = value;
        return this;
    }
    load(url, onLoad, onProgress, onError) {
        function onLoadCallback(texture, texData) {
            if (hasColorSpace) texture.colorSpace = texData.colorSpace;
            else texture.encoding = texData.encoding;
            texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
            texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
            texture.generateMipmaps = false;
            texture.flipY = false;
            if (onLoad) onLoad(texture, texData);
        }
        return super.load(url, onLoadCallback, onProgress, onError);
    }
}
;
 //# sourceMappingURL=EXRLoader.js.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/three-stdlib/node_modules/fflate/esm/browser.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// DEFLATE is a complex format; to read this code, you should probably check the RFC first:
// https://tools.ietf.org/html/rfc1951
// You may also wish to take a look at the guide I made about this program:
// https://gist.github.com/101arrowz/253f31eb5abc3d9275ab943003ffecad
// Some of the following code is similar to that of UZIP.js:
// https://github.com/photopea/UZIP.js
// However, the vast majority of the codebase has diverged from UZIP.js to increase performance and reduce bundle size.
// Sometimes 0 will appear where -1 would be more appropriate. This is because using a uint
// is better for memory in most engines (I *think*).
__turbopack_context__.s({
    "AsyncCompress": (()=>AsyncGzip),
    "AsyncDecompress": (()=>AsyncDecompress),
    "AsyncDeflate": (()=>AsyncDeflate),
    "AsyncGunzip": (()=>AsyncGunzip),
    "AsyncGzip": (()=>AsyncGzip),
    "AsyncInflate": (()=>AsyncInflate),
    "AsyncUnzipInflate": (()=>AsyncUnzipInflate),
    "AsyncUnzlib": (()=>AsyncUnzlib),
    "AsyncZipDeflate": (()=>AsyncZipDeflate),
    "AsyncZlib": (()=>AsyncZlib),
    "Compress": (()=>Gzip),
    "DecodeUTF8": (()=>DecodeUTF8),
    "Decompress": (()=>Decompress),
    "Deflate": (()=>Deflate),
    "EncodeUTF8": (()=>EncodeUTF8),
    "Gunzip": (()=>Gunzip),
    "Gzip": (()=>Gzip),
    "Inflate": (()=>Inflate),
    "Unzip": (()=>Unzip),
    "UnzipInflate": (()=>UnzipInflate),
    "UnzipPassThrough": (()=>UnzipPassThrough),
    "Unzlib": (()=>Unzlib),
    "Zip": (()=>Zip),
    "ZipDeflate": (()=>ZipDeflate),
    "ZipPassThrough": (()=>ZipPassThrough),
    "Zlib": (()=>Zlib),
    "compress": (()=>gzip),
    "compressSync": (()=>gzipSync),
    "decompress": (()=>decompress),
    "decompressSync": (()=>decompressSync),
    "deflate": (()=>deflate),
    "deflateSync": (()=>deflateSync),
    "gunzip": (()=>gunzip),
    "gunzipSync": (()=>gunzipSync),
    "gzip": (()=>gzip),
    "gzipSync": (()=>gzipSync),
    "inflate": (()=>inflate),
    "inflateSync": (()=>inflateSync),
    "strFromU8": (()=>strFromU8),
    "strToU8": (()=>strToU8),
    "unzip": (()=>unzip),
    "unzipSync": (()=>unzipSync),
    "unzlib": (()=>unzlib),
    "unzlibSync": (()=>unzlibSync),
    "zip": (()=>zip),
    "zipSync": (()=>zipSync),
    "zlib": (()=>zlib),
    "zlibSync": (()=>zlibSync)
});
var ch2 = {};
var wk = function(c, id, msg, transfer, cb) {
    var w = new Worker(ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([
        c
    ], {
        type: 'text/javascript'
    }))));
    w.onerror = function(e) {
        return cb(e.error, null);
    };
    w.onmessage = function(e) {
        return cb(null, e.data);
    };
    w.postMessage(msg, transfer);
    return w;
};
// aliases for shorter compressed code (most minifers don't do this)
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
// fixed length extra bits
var fleb = new u8([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    /* unused */ 0,
    0,
    /* impossible */ 0
]);
// fixed distance extra bits
// see fleb note
var fdeb = new u8([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    /* unused */ 0,
    0
]);
// code length index map
var clim = new u8([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
]);
// get base, reverse index map from extra bits
var freb = function(eb, start) {
    var b = new u16(31);
    for(var i = 0; i < 31; ++i){
        b[i] = start += 1 << eb[i - 1];
    }
    // numbers here are at max 18 bits
    var r = new u32(b[30]);
    for(var i = 1; i < 30; ++i){
        for(var j = b[i]; j < b[i + 1]; ++j){
            r[j] = j - b[i] << 5 | i;
        }
    }
    return [
        b,
        r
    ];
};
var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
// we can ignore the fact that the other numbers are wrong; they never happen anyway
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b[0], revfd = _b[1];
// map of value to reverse (assuming 16 bits)
var rev = new u16(32768);
for(var i = 0; i < 32768; ++i){
    // reverse table algorithm from SO
    var x = (i & 0xAAAA) >>> 1 | (i & 0x5555) << 1;
    x = (x & 0xCCCC) >>> 2 | (x & 0x3333) << 2;
    x = (x & 0xF0F0) >>> 4 | (x & 0x0F0F) << 4;
    rev[i] = ((x & 0xFF00) >>> 8 | (x & 0x00FF) << 8) >>> 1;
}
// create huffman tree from u8 "map": index -> code length for code index
// mb (max bits) must be at most 15
// TODO: optimize/split up?
var hMap = function(cd, mb, r) {
    var s = cd.length;
    // index
    var i = 0;
    // u16 "map": index -> # of codes with bit length = index
    var l = new u16(mb);
    // length of cd must be 288 (total # of codes)
    for(; i < s; ++i)++l[cd[i] - 1];
    // u16 "map": index -> minimum code for bit length = index
    var le = new u16(mb);
    for(i = 0; i < mb; ++i){
        le[i] = le[i - 1] + l[i - 1] << 1;
    }
    var co;
    if (r) {
        // u16 "map": index -> number of actual bits, symbol for code
        co = new u16(1 << mb);
        // bits to remove for reverser
        var rvb = 15 - mb;
        for(i = 0; i < s; ++i){
            // ignore 0 lengths
            if (cd[i]) {
                // num encoding both symbol and bits read
                var sv = i << 4 | cd[i];
                // free bits
                var r_1 = mb - cd[i];
                // start value
                var v = le[cd[i] - 1]++ << r_1;
                // m is end value
                for(var m = v | (1 << r_1) - 1; v <= m; ++v){
                    // every 16 bit value starting with the code yields the same result
                    co[rev[v] >>> rvb] = sv;
                }
            }
        }
    } else {
        co = new u16(s);
        for(i = 0; i < s; ++i){
            if (cd[i]) {
                co[i] = rev[le[cd[i] - 1]++] >>> 15 - cd[i];
            }
        }
    }
    return co;
};
// fixed length tree
var flt = new u8(288);
for(var i = 0; i < 144; ++i)flt[i] = 8;
for(var i = 144; i < 256; ++i)flt[i] = 9;
for(var i = 256; i < 280; ++i)flt[i] = 7;
for(var i = 280; i < 288; ++i)flt[i] = 8;
// fixed distance tree
var fdt = new u8(32);
for(var i = 0; i < 32; ++i)fdt[i] = 5;
// fixed length map
var flm = /*#__PURE__*/ hMap(flt, 9, 0), flrm = /*#__PURE__*/ hMap(flt, 9, 1);
// fixed distance map
var fdm = /*#__PURE__*/ hMap(fdt, 5, 0), fdrm = /*#__PURE__*/ hMap(fdt, 5, 1);
// find max of array
var max = function(a) {
    var m = a[0];
    for(var i = 1; i < a.length; ++i){
        if (a[i] > m) m = a[i];
    }
    return m;
};
// read d, starting at bit p and mask with m
var bits = function(d, p, m) {
    var o = p / 8 | 0;
    return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
// read d, starting at bit p continuing for at least 16 bits
var bits16 = function(d, p) {
    var o = p / 8 | 0;
    return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
// get end of byte
var shft = function(p) {
    return (p / 8 | 0) + (p & 7 && 1);
};
// typed array slice - allows garbage collector to free original reference,
// while being more compatible than .slice
var slc = function(v, s, e) {
    if (s == null || s < 0) s = 0;
    if (e == null || e > v.length) e = v.length;
    // can't use .constructor in case user-supplied
    var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
    n.set(v.subarray(s, e));
    return n;
};
// expands raw DEFLATE data
var inflt = function(dat, buf, st) {
    // source length
    var sl = dat.length;
    if (!sl || st && !st.l && sl < 5) return buf || new u8(0);
    // have to estimate size
    var noBuf = !buf || st;
    // no state
    var noSt = !st || st.i;
    if (!st) st = {};
    // Assumes roughly 33% compression ratio average
    if (!buf) buf = new u8(sl * 3);
    // ensure buffer can fit at least l elements
    var cbuf = function(l) {
        var bl = buf.length;
        // need to increase size to fit
        if (l > bl) {
            // Double or set to necessary, whichever is greater
            var nbuf = new u8(Math.max(bl * 2, l));
            nbuf.set(buf);
            buf = nbuf;
        }
    };
    //  last chunk         bitpos           bytes
    var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
    // total bits
    var tbts = sl * 8;
    do {
        if (!lm) {
            // BFINAL - this is only 1 when last chunk is next
            st.f = final = bits(dat, pos, 1);
            // type: 0 = no compression, 1 = fixed huffman, 2 = dynamic huffman
            var type = bits(dat, pos + 1, 3);
            pos += 3;
            if (!type) {
                // go to end of byte boundary
                var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
                if (t > sl) {
                    if (noSt) throw 'unexpected EOF';
                    break;
                }
                // ensure size
                if (noBuf) cbuf(bt + l);
                // Copy over uncompressed data
                buf.set(dat.subarray(s, t), bt);
                // Get new bitpos, update byte count
                st.b = bt += l, st.p = pos = t * 8;
                continue;
            } else if (type == 1) lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
            else if (type == 2) {
                //  literal                            lengths
                var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
                var tl = hLit + bits(dat, pos + 5, 31) + 1;
                pos += 14;
                // length+distance tree
                var ldt = new u8(tl);
                // code length tree
                var clt = new u8(19);
                for(var i = 0; i < hcLen; ++i){
                    // use index map to get real code
                    clt[clim[i]] = bits(dat, pos + i * 3, 7);
                }
                pos += hcLen * 3;
                // code lengths bits
                var clb = max(clt), clbmsk = (1 << clb) - 1;
                // code lengths map
                var clm = hMap(clt, clb, 1);
                for(var i = 0; i < tl;){
                    var r = clm[bits(dat, pos, clbmsk)];
                    // bits read
                    pos += r & 15;
                    // symbol
                    var s = r >>> 4;
                    // code length to copy
                    if (s < 16) {
                        ldt[i++] = s;
                    } else {
                        //  copy   count
                        var c = 0, n = 0;
                        if (s == 16) n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
                        else if (s == 17) n = 3 + bits(dat, pos, 7), pos += 3;
                        else if (s == 18) n = 11 + bits(dat, pos, 127), pos += 7;
                        while(n--)ldt[i++] = c;
                    }
                }
                //    length tree                 distance tree
                var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
                // max length bits
                lbt = max(lt);
                // max dist bits
                dbt = max(dt);
                lm = hMap(lt, lbt, 1);
                dm = hMap(dt, dbt, 1);
            } else throw 'invalid block type';
            if (pos > tbts) {
                if (noSt) throw 'unexpected EOF';
                break;
            }
        }
        // Make sure the buffer can hold this + the largest possible addition
        // Maximum chunk size (practically, theoretically infinite) is 2^17;
        if (noBuf) cbuf(bt + 131072);
        var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
        var lpos = pos;
        for(;; lpos = pos){
            // bits read, code
            var c = lm[bits16(dat, pos) & lms], sym = c >>> 4;
            pos += c & 15;
            if (pos > tbts) {
                if (noSt) throw 'unexpected EOF';
                break;
            }
            if (!c) throw 'invalid length/literal';
            if (sym < 256) buf[bt++] = sym;
            else if (sym == 256) {
                lpos = pos, lm = null;
                break;
            } else {
                var add = sym - 254;
                // no extra bits needed if less
                if (sym > 264) {
                    // index
                    var i = sym - 257, b = fleb[i];
                    add = bits(dat, pos, (1 << b) - 1) + fl[i];
                    pos += b;
                }
                // dist
                var d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
                if (!d) throw 'invalid distance';
                pos += d & 15;
                var dt = fd[dsym];
                if (dsym > 3) {
                    var b = fdeb[dsym];
                    dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
                }
                if (pos > tbts) {
                    if (noSt) throw 'unexpected EOF';
                    break;
                }
                if (noBuf) cbuf(bt + 131072);
                var end = bt + add;
                for(; bt < end; bt += 4){
                    buf[bt] = buf[bt - dt];
                    buf[bt + 1] = buf[bt + 1 - dt];
                    buf[bt + 2] = buf[bt + 2 - dt];
                    buf[bt + 3] = buf[bt + 3 - dt];
                }
                bt = end;
            }
        }
        st.l = lm, st.p = lpos, st.b = bt;
        if (lm) final = 1, st.m = lbt, st.d = dm, st.n = dbt;
    }while (!final)
    return bt == buf.length ? buf : slc(buf, 0, bt);
};
// starting at p, write the minimum number of bits that can hold v to d
var wbits = function(d, p, v) {
    v <<= p & 7;
    var o = p / 8 | 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
};
// starting at p, write the minimum number of bits (>8) that can hold v to d
var wbits16 = function(d, p, v) {
    v <<= p & 7;
    var o = p / 8 | 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
    d[o + 2] |= v >>> 16;
};
// creates code lengths from a frequency table
var hTree = function(d, mb) {
    // Need extra info to make a tree
    var t = [];
    for(var i = 0; i < d.length; ++i){
        if (d[i]) t.push({
            s: i,
            f: d[i]
        });
    }
    var s = t.length;
    var t2 = t.slice();
    if (!s) return [
        et,
        0
    ];
    if (s == 1) {
        var v = new u8(t[0].s + 1);
        v[t[0].s] = 1;
        return [
            v,
            1
        ];
    }
    t.sort(function(a, b) {
        return a.f - b.f;
    });
    // after i2 reaches last ind, will be stopped
    // freq must be greater than largest possible number of symbols
    t.push({
        s: -1,
        f: 25001
    });
    var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
    t[0] = {
        s: -1,
        f: l.f + r.f,
        l: l,
        r: r
    };
    // efficient algorithm from UZIP.js
    // i0 is lookbehind, i2 is lookahead - after processing two low-freq
    // symbols that combined have high freq, will start processing i2 (high-freq,
    // non-composite) symbols instead
    // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/
    while(i1 != s - 1){
        l = t[t[i0].f < t[i2].f ? i0++ : i2++];
        r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
        t[i1++] = {
            s: -1,
            f: l.f + r.f,
            l: l,
            r: r
        };
    }
    var maxSym = t2[0].s;
    for(var i = 1; i < s; ++i){
        if (t2[i].s > maxSym) maxSym = t2[i].s;
    }
    // code lengths
    var tr = new u16(maxSym + 1);
    // max bits in tree
    var mbt = ln(t[i1 - 1], tr, 0);
    if (mbt > mb) {
        // more algorithms from UZIP.js
        // TODO: find out how this code works (debt)
        //  ind    debt
        var i = 0, dt = 0;
        //    left            cost
        var lft = mbt - mb, cst = 1 << lft;
        t2.sort(function(a, b) {
            return tr[b.s] - tr[a.s] || a.f - b.f;
        });
        for(; i < s; ++i){
            var i2_1 = t2[i].s;
            if (tr[i2_1] > mb) {
                dt += cst - (1 << mbt - tr[i2_1]);
                tr[i2_1] = mb;
            } else break;
        }
        dt >>>= lft;
        while(dt > 0){
            var i2_2 = t2[i].s;
            if (tr[i2_2] < mb) dt -= 1 << mb - tr[i2_2]++ - 1;
            else ++i;
        }
        for(; i >= 0 && dt; --i){
            var i2_3 = t2[i].s;
            if (tr[i2_3] == mb) {
                --tr[i2_3];
                ++dt;
            }
        }
        mbt = mb;
    }
    return [
        new u8(tr),
        mbt
    ];
};
// get the max length and assign length codes
var ln = function(n, l, d) {
    return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
};
// length codes generation
var lc = function(c) {
    var s = c.length;
    // Note that the semicolon was intentional
    while(s && !c[--s]);
    var cl = new u16(++s);
    //  ind      num         streak
    var cli = 0, cln = c[0], cls = 1;
    var w = function(v) {
        cl[cli++] = v;
    };
    for(var i = 1; i <= s; ++i){
        if (c[i] == cln && i != s) ++cls;
        else {
            if (!cln && cls > 2) {
                for(; cls > 138; cls -= 138)w(32754);
                if (cls > 2) {
                    w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
                    cls = 0;
                }
            } else if (cls > 3) {
                w(cln), --cls;
                for(; cls > 6; cls -= 6)w(8304);
                if (cls > 2) w(cls - 3 << 5 | 8208), cls = 0;
            }
            while(cls--)w(cln);
            cls = 1;
            cln = c[i];
        }
    }
    return [
        cl.subarray(0, cli),
        s
    ];
};
// calculate the length of output from tree, code lengths
var clen = function(cf, cl) {
    var l = 0;
    for(var i = 0; i < cl.length; ++i)l += cf[i] * cl[i];
    return l;
};
// writes a fixed block
// returns the new bit pos
var wfblk = function(out, pos, dat) {
    // no need to write 00 as type: TypedArray defaults to 0
    var s = dat.length;
    var o = shft(pos + 2);
    out[o] = s & 255;
    out[o + 1] = s >>> 8;
    out[o + 2] = out[o] ^ 255;
    out[o + 3] = out[o + 1] ^ 255;
    for(var i = 0; i < s; ++i)out[o + i + 4] = dat[i];
    return (o + 4 + s) * 8;
};
// writes a block
var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
    wbits(out, p++, final);
    ++lf[256];
    var _a = hTree(lf, 15), dlt = _a[0], mlb = _a[1];
    var _b = hTree(df, 15), ddt = _b[0], mdb = _b[1];
    var _c = lc(dlt), lclt = _c[0], nlc = _c[1];
    var _d = lc(ddt), lcdt = _d[0], ndc = _d[1];
    var lcfreq = new u16(19);
    for(var i = 0; i < lclt.length; ++i)lcfreq[lclt[i] & 31]++;
    for(var i = 0; i < lcdt.length; ++i)lcfreq[lcdt[i] & 31]++;
    var _e = hTree(lcfreq, 7), lct = _e[0], mlcb = _e[1];
    var nlcc = 19;
    for(; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc);
    var flen = bl + 5 << 3;
    var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
    var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
    if (flen <= ftlen && flen <= dtlen) return wfblk(out, p, dat.subarray(bs, bs + bl));
    var lm, ll, dm, dl;
    wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
    if (dtlen < ftlen) {
        lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
        var llm = hMap(lct, mlcb, 0);
        wbits(out, p, nlc - 257);
        wbits(out, p + 5, ndc - 1);
        wbits(out, p + 10, nlcc - 4);
        p += 14;
        for(var i = 0; i < nlcc; ++i)wbits(out, p + 3 * i, lct[clim[i]]);
        p += 3 * nlcc;
        var lcts = [
            lclt,
            lcdt
        ];
        for(var it = 0; it < 2; ++it){
            var clct = lcts[it];
            for(var i = 0; i < clct.length; ++i){
                var len = clct[i] & 31;
                wbits(out, p, llm[len]), p += lct[len];
                if (len > 15) wbits(out, p, clct[i] >>> 5 & 127), p += clct[i] >>> 12;
            }
        }
    } else {
        lm = flm, ll = flt, dm = fdm, dl = fdt;
    }
    for(var i = 0; i < li; ++i){
        if (syms[i] > 255) {
            var len = syms[i] >>> 18 & 31;
            wbits16(out, p, lm[len + 257]), p += ll[len + 257];
            if (len > 7) wbits(out, p, syms[i] >>> 23 & 31), p += fleb[len];
            var dst = syms[i] & 31;
            wbits16(out, p, dm[dst]), p += dl[dst];
            if (dst > 3) wbits16(out, p, syms[i] >>> 5 & 8191), p += fdeb[dst];
        } else {
            wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];
        }
    }
    wbits16(out, p, lm[256]);
    return p + ll[256];
};
// deflate options (nice << 13) | chain
var deo = /*#__PURE__*/ new u32([
    65540,
    131080,
    131088,
    131104,
    262176,
    1048704,
    1048832,
    2114560,
    2117632
]);
// empty
var et = /*#__PURE__*/ new u8(0);
// compresses data into a raw DEFLATE buffer
var dflt = function(dat, lvl, plvl, pre, post, lst) {
    var s = dat.length;
    var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7000)) + post);
    // writing to this writes to the output buffer
    var w = o.subarray(pre, o.length - post);
    var pos = 0;
    if (!lvl || s < 8) {
        for(var i = 0; i <= s; i += 65535){
            // end
            var e = i + 65535;
            if (e < s) {
                // write full block
                pos = wfblk(w, pos, dat.subarray(i, e));
            } else {
                // write final block
                w[i] = lst;
                pos = wfblk(w, pos, dat.subarray(i, s));
            }
        }
    } else {
        var opt = deo[lvl - 1];
        var n = opt >>> 13, c = opt & 8191;
        var msk_1 = (1 << plvl) - 1;
        //    prev 2-byte val map    curr 2-byte val map
        var prev = new u16(32768), head = new u16(msk_1 + 1);
        var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
        var hsh = function(i) {
            return (dat[i] ^ dat[i + 1] << bs1_1 ^ dat[i + 2] << bs2_1) & msk_1;
        };
        // 24576 is an arbitrary number of maximum symbols per block
        // 424 buffer for last block
        var syms = new u32(25000);
        // length/literal freq   distance freq
        var lf = new u16(288), df = new u16(32);
        //  l/lcnt  exbits  index  l/lind  waitdx  bitpos
        var lc_1 = 0, eb = 0, i = 0, li = 0, wi = 0, bs = 0;
        for(; i < s; ++i){
            // hash value
            // deopt when i > s - 3 - at end, deopt acceptable
            var hv = hsh(i);
            // index mod 32768    previous index mod
            var imod = i & 32767, pimod = head[hv];
            prev[imod] = pimod;
            head[hv] = imod;
            // We always should modify head and prev, but only add symbols if
            // this data is not yet processed ("wait" for wait index)
            if (wi <= i) {
                // bytes remaining
                var rem = s - i;
                if ((lc_1 > 7000 || li > 24576) && rem > 423) {
                    pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
                    li = lc_1 = eb = 0, bs = i;
                    for(var j = 0; j < 286; ++j)lf[j] = 0;
                    for(var j = 0; j < 30; ++j)df[j] = 0;
                }
                //  len    dist   chain
                var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
                if (rem > 2 && hv == hsh(i - dif)) {
                    var maxn = Math.min(n, rem) - 1;
                    var maxd = Math.min(32767, i);
                    // max possible length
                    // not capped at dif because decompressors implement "rolling" index population
                    var ml = Math.min(258, rem);
                    while(dif <= maxd && --ch_1 && imod != pimod){
                        if (dat[i + l] == dat[i + l - dif]) {
                            var nl = 0;
                            for(; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl);
                            if (nl > l) {
                                l = nl, d = dif;
                                // break out early when we reach "nice" (we are satisfied enough)
                                if (nl > maxn) break;
                                // now, find the rarest 2-byte sequence within this
                                // length of literals and search for that instead.
                                // Much faster than just using the start
                                var mmd = Math.min(dif, nl - 2);
                                var md = 0;
                                for(var j = 0; j < mmd; ++j){
                                    var ti = i - dif + j + 32768 & 32767;
                                    var pti = prev[ti];
                                    var cd = ti - pti + 32768 & 32767;
                                    if (cd > md) md = cd, pimod = ti;
                                }
                            }
                        }
                        // check the previous match
                        imod = pimod, pimod = prev[imod];
                        dif += imod - pimod + 32768 & 32767;
                    }
                }
                // d will be nonzero only when a match was found
                if (d) {
                    // store both dist and len data in one Uint32
                    // Make sure this is recognized as a len/dist with 28th bit (2^28)
                    syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
                    var lin = revfl[l] & 31, din = revfd[d] & 31;
                    eb += fleb[lin] + fdeb[din];
                    ++lf[257 + lin];
                    ++df[din];
                    wi = i + l;
                    ++lc_1;
                } else {
                    syms[li++] = dat[i];
                    ++lf[dat[i]];
                }
            }
        }
        pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
        // this is the easiest way to avoid needing to maintain state
        if (!lst && pos & 7) pos = wfblk(w, pos + 1, et);
    }
    return slc(o, 0, pre + shft(pos) + post);
};
// CRC32 table
var crct = /*#__PURE__*/ function() {
    var t = new Int32Array(256);
    for(var i = 0; i < 256; ++i){
        var c = i, k = 9;
        while(--k)c = (c & 1 && -306674912) ^ c >>> 1;
        t[i] = c;
    }
    return t;
}();
// CRC32
var crc = function() {
    var c = -1;
    return {
        p: function(d) {
            // closures have awful performance
            var cr = c;
            for(var i = 0; i < d.length; ++i)cr = crct[cr & 255 ^ d[i]] ^ cr >>> 8;
            c = cr;
        },
        d: function() {
            return ~c;
        }
    };
};
// Alder32
var adler = function() {
    var a = 1, b = 0;
    return {
        p: function(d) {
            // closures have awful performance
            var n = a, m = b;
            var l = d.length;
            for(var i = 0; i != l;){
                var e = Math.min(i + 2655, l);
                for(; i < e; ++i)m += n += d[i];
                n = (n & 65535) + 15 * (n >> 16), m = (m & 65535) + 15 * (m >> 16);
            }
            a = n, b = m;
        },
        d: function() {
            a %= 65521, b %= 65521;
            return (a & 255) << 24 | a >>> 8 << 16 | (b & 255) << 8 | b >>> 8;
        }
    };
};
;
// deflate with opts
var dopt = function(dat, opt, pre, post, st) {
    return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 12 + opt.mem, pre, post, !st);
};
// Walmart object spread
var mrg = function(a, b) {
    var o = {};
    for(var k in a)o[k] = a[k];
    for(var k in b)o[k] = b[k];
    return o;
};
// worker clone
// This is possibly the craziest part of the entire codebase, despite how simple it may seem.
// The only parameter to this function is a closure that returns an array of variables outside of the function scope.
// We're going to try to figure out the variable names used in the closure as strings because that is crucial for workerization.
// We will return an object mapping of true variable name to value (basically, the current scope as a JS object).
// The reason we can't just use the original variable names is minifiers mangling the toplevel scope.
// This took me three weeks to figure out how to do.
var wcln = function(fn, fnStr, td) {
    var dt = fn();
    var st = fn.toString();
    var ks = st.slice(st.indexOf('[') + 1, st.lastIndexOf(']')).replace(/ /g, '').split(',');
    for(var i = 0; i < dt.length; ++i){
        var v = dt[i], k = ks[i];
        if (typeof v == 'function') {
            fnStr += ';' + k + '=';
            var st_1 = v.toString();
            if (v.prototype) {
                // for global objects
                if (st_1.indexOf('[native code]') != -1) {
                    var spInd = st_1.indexOf(' ', 8) + 1;
                    fnStr += st_1.slice(spInd, st_1.indexOf('(', spInd));
                } else {
                    fnStr += st_1;
                    for(var t in v.prototype)fnStr += ';' + k + '.prototype.' + t + '=' + v.prototype[t].toString();
                }
            } else fnStr += st_1;
        } else td[k] = v;
    }
    return [
        fnStr,
        td
    ];
};
var ch = [];
// clone bufs
var cbfs = function(v) {
    var tl = [];
    for(var k in v){
        if (v[k] instanceof u8 || v[k] instanceof u16 || v[k] instanceof u32) tl.push((v[k] = new v[k].constructor(v[k])).buffer);
    }
    return tl;
};
// use a worker to execute code
var wrkr = function(fns, init, id, cb) {
    var _a;
    if (!ch[id]) {
        var fnStr = '', td_1 = {}, m = fns.length - 1;
        for(var i = 0; i < m; ++i)_a = wcln(fns[i], fnStr, td_1), fnStr = _a[0], td_1 = _a[1];
        ch[id] = wcln(fns[m], fnStr, td_1);
    }
    var td = mrg({}, ch[id][1]);
    return wk(ch[id][0] + ';onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=' + init.toString() + '}', id, td, cbfs(td), cb);
};
// base async inflate fn
var bInflt = function() {
    return [
        u8,
        u16,
        u32,
        fleb,
        fdeb,
        clim,
        fl,
        fd,
        flrm,
        fdrm,
        rev,
        hMap,
        max,
        bits,
        bits16,
        shft,
        slc,
        inflt,
        inflateSync,
        pbf,
        gu8
    ];
};
var bDflt = function() {
    return [
        u8,
        u16,
        u32,
        fleb,
        fdeb,
        clim,
        revfl,
        revfd,
        flm,
        flt,
        fdm,
        fdt,
        rev,
        deo,
        et,
        hMap,
        wbits,
        wbits16,
        hTree,
        ln,
        lc,
        clen,
        wfblk,
        wblk,
        shft,
        slc,
        dflt,
        dopt,
        deflateSync,
        pbf
    ];
};
// gzip extra
var gze = function() {
    return [
        gzh,
        gzhl,
        wbytes,
        crc,
        crct
    ];
};
// gunzip extra
var guze = function() {
    return [
        gzs,
        gzl
    ];
};
// zlib extra
var zle = function() {
    return [
        zlh,
        wbytes,
        adler
    ];
};
// unzlib extra
var zule = function() {
    return [
        zlv
    ];
};
// post buf
var pbf = function(msg) {
    return postMessage(msg, [
        msg.buffer
    ]);
};
// get u8
var gu8 = function(o) {
    return o && o.size && new u8(o.size);
};
// async helper
var cbify = function(dat, opts, fns, init, id, cb) {
    var w = wrkr(fns, init, id, function(err, dat) {
        w.terminate();
        cb(err, dat);
    });
    w.postMessage([
        dat,
        opts
    ], opts.consume ? [
        dat.buffer
    ] : []);
    return function() {
        w.terminate();
    };
};
// auto stream
var astrm = function(strm) {
    strm.ondata = function(dat, final) {
        return postMessage([
            dat,
            final
        ], [
            dat.buffer
        ]);
    };
    return function(ev) {
        return strm.push(ev.data[0], ev.data[1]);
    };
};
// async stream attach
var astrmify = function(fns, strm, opts, init, id) {
    var t;
    var w = wrkr(fns, init, id, function(err, dat) {
        if (err) w.terminate(), strm.ondata.call(strm, err);
        else {
            if (dat[1]) w.terminate();
            strm.ondata.call(strm, err, dat[0], dat[1]);
        }
    });
    w.postMessage(opts);
    strm.push = function(d, f) {
        if (t) throw 'stream finished';
        if (!strm.ondata) throw 'no stream handler';
        w.postMessage([
            d,
            t = f
        ], [
            d.buffer
        ]);
    };
    strm.terminate = function() {
        w.terminate();
    };
};
// read 2 bytes
var b2 = function(d, b) {
    return d[b] | d[b + 1] << 8;
};
// read 4 bytes
var b4 = function(d, b) {
    return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
};
var b8 = function(d, b) {
    return b4(d, b) + b4(d, b + 4) * 4294967296;
};
// write bytes
var wbytes = function(d, b, v) {
    for(; v; ++b)d[b] = v, v >>>= 8;
};
// gzip header
var gzh = function(c, o) {
    var fn = o.filename;
    c[0] = 31, c[1] = 139, c[2] = 8, c[8] = o.level < 2 ? 4 : o.level == 9 ? 2 : 0, c[9] = 3; // assume Unix
    if (o.mtime != 0) wbytes(c, 4, Math.floor(new Date(o.mtime || Date.now()) / 1000));
    if (fn) {
        c[3] = 8;
        for(var i = 0; i <= fn.length; ++i)c[i + 10] = fn.charCodeAt(i);
    }
};
// gzip footer: -8 to -4 = CRC, -4 to -0 is length
// gzip start
var gzs = function(d) {
    if (d[0] != 31 || d[1] != 139 || d[2] != 8) throw 'invalid gzip data';
    var flg = d[3];
    var st = 10;
    if (flg & 4) st += d[10] | (d[11] << 8) + 2;
    for(var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++]);
    return st + (flg & 2);
};
// gzip length
var gzl = function(d) {
    var l = d.length;
    return (d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16 | d[l - 1] << 24) >>> 0;
};
// gzip header length
var gzhl = function(o) {
    return 10 + (o.filename && o.filename.length + 1 || 0);
};
// zlib header
var zlh = function(c, o) {
    var lv = o.level, fl = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
    c[0] = 120, c[1] = fl << 6 | (fl ? 32 - 2 * fl : 1);
};
// zlib valid
var zlv = function(d) {
    if ((d[0] & 15) != 8 || d[0] >>> 4 > 7 || (d[0] << 8 | d[1]) % 31) throw 'invalid zlib data';
    if (d[1] & 32) throw 'invalid zlib data: preset dictionaries not supported';
};
function AsyncCmpStrm(opts, cb) {
    if (!cb && typeof opts == 'function') cb = opts, opts = {};
    this.ondata = cb;
    return opts;
}
// zlib footer: -4 to -0 is Adler32
/**
 * Streaming DEFLATE compression
 */ var Deflate = function() {
    function Deflate(opts, cb) {
        if (!cb && typeof opts == 'function') cb = opts, opts = {};
        this.ondata = cb;
        this.o = opts || {};
    }
    Deflate.prototype.p = function(c, f) {
        this.ondata(dopt(c, this.o, 0, 0, !f), f);
    };
    /**
     * Pushes a chunk to be deflated
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Deflate.prototype.push = function(chunk, final) {
        if (this.d) throw 'stream finished';
        if (!this.ondata) throw 'no stream handler';
        this.d = final;
        this.p(chunk, final || false);
    };
    return Deflate;
}();
;
/**
 * Asynchronous streaming DEFLATE compression
 */ var AsyncDeflate = function() {
    function AsyncDeflate(opts, cb) {
        astrmify([
            bDflt,
            function() {
                return [
                    astrm,
                    Deflate
                ];
            }
        ], this, AsyncCmpStrm.call(this, opts, cb), function(ev) {
            var strm = new Deflate(ev.data);
            onmessage = astrm(strm);
        }, 6);
    }
    return AsyncDeflate;
}();
;
function deflate(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') throw 'no callback';
    return cbify(data, opts, [
        bDflt
    ], function(ev) {
        return pbf(deflateSync(ev.data[0], ev.data[1]));
    }, 0, cb);
}
function deflateSync(data, opts) {
    return dopt(data, opts || {}, 0, 0);
}
/**
 * Streaming DEFLATE decompression
 */ var Inflate = function() {
    /**
     * Creates an inflation stream
     * @param cb The callback to call whenever data is inflated
     */ function Inflate(cb) {
        this.s = {};
        this.p = new u8(0);
        this.ondata = cb;
    }
    Inflate.prototype.e = function(c) {
        if (this.d) throw 'stream finished';
        if (!this.ondata) throw 'no stream handler';
        var l = this.p.length;
        var n = new u8(l + c.length);
        n.set(this.p), n.set(c, l), this.p = n;
    };
    Inflate.prototype.c = function(final) {
        this.d = this.s.i = final || false;
        var bts = this.s.b;
        var dt = inflt(this.p, this.o, this.s);
        this.ondata(slc(dt, bts, this.s.b), this.d);
        this.o = slc(dt, this.s.b - 32768), this.s.b = this.o.length;
        this.p = slc(this.p, this.s.p / 8 | 0), this.s.p &= 7;
    };
    /**
     * Pushes a chunk to be inflated
     * @param chunk The chunk to push
     * @param final Whether this is the final chunk
     */ Inflate.prototype.push = function(chunk, final) {
        this.e(chunk), this.c(final);
    };
    return Inflate;
}();
;
/**
 * Asynchronous streaming DEFLATE decompression
 */ var AsyncInflate = function() {
    /**
     * Creates an asynchronous inflation stream
     * @param cb The callback to call whenever data is deflated
     */ function AsyncInflate(cb) {
        this.ondata = cb;
        astrmify([
            bInflt,
            function() {
                return [
                    astrm,
                    Inflate
                ];
            }
        ], this, 0, function() {
            var strm = new Inflate();
            onmessage = astrm(strm);
        }, 7);
    }
    return AsyncInflate;
}();
;
function inflate(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') throw 'no callback';
    return cbify(data, opts, [
        bInflt
    ], function(ev) {
        return pbf(inflateSync(ev.data[0], gu8(ev.data[1])));
    }, 1, cb);
}
function inflateSync(data, out) {
    return inflt(data, out);
}
// before you yell at me for not just using extends, my reason is that TS inheritance is hard to workerize.
/**
 * Streaming GZIP compression
 */ var Gzip = function() {
    function Gzip(opts, cb) {
        this.c = crc();
        this.l = 0;
        this.v = 1;
        Deflate.call(this, opts, cb);
    }
    /**
     * Pushes a chunk to be GZIPped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Gzip.prototype.push = function(chunk, final) {
        Deflate.prototype.push.call(this, chunk, final);
    };
    Gzip.prototype.p = function(c, f) {
        this.c.p(c);
        this.l += c.length;
        var raw = dopt(c, this.o, this.v && gzhl(this.o), f && 8, !f);
        if (this.v) gzh(raw, this.o), this.v = 0;
        if (f) wbytes(raw, raw.length - 8, this.c.d()), wbytes(raw, raw.length - 4, this.l);
        this.ondata(raw, f);
    };
    return Gzip;
}();
;
/**
 * Asynchronous streaming GZIP compression
 */ var AsyncGzip = function() {
    function AsyncGzip(opts, cb) {
        astrmify([
            bDflt,
            gze,
            function() {
                return [
                    astrm,
                    Deflate,
                    Gzip
                ];
            }
        ], this, AsyncCmpStrm.call(this, opts, cb), function(ev) {
            var strm = new Gzip(ev.data);
            onmessage = astrm(strm);
        }, 8);
    }
    return AsyncGzip;
}();
;
function gzip(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') throw 'no callback';
    return cbify(data, opts, [
        bDflt,
        gze,
        function() {
            return [
                gzipSync
            ];
        }
    ], function(ev) {
        return pbf(gzipSync(ev.data[0], ev.data[1]));
    }, 2, cb);
}
function gzipSync(data, opts) {
    if (!opts) opts = {};
    var c = crc(), l = data.length;
    c.p(data);
    var d = dopt(data, opts, gzhl(opts), 8), s = d.length;
    return gzh(d, opts), wbytes(d, s - 8, c.d()), wbytes(d, s - 4, l), d;
}
/**
 * Streaming GZIP decompression
 */ var Gunzip = function() {
    /**
     * Creates a GUNZIP stream
     * @param cb The callback to call whenever data is inflated
     */ function Gunzip(cb) {
        this.v = 1;
        Inflate.call(this, cb);
    }
    /**
     * Pushes a chunk to be GUNZIPped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Gunzip.prototype.push = function(chunk, final) {
        Inflate.prototype.e.call(this, chunk);
        if (this.v) {
            var s = this.p.length > 3 ? gzs(this.p) : 4;
            if (s >= this.p.length && !final) return;
            this.p = this.p.subarray(s), this.v = 0;
        }
        if (final) {
            if (this.p.length < 8) throw 'invalid gzip stream';
            this.p = this.p.subarray(0, -8);
        }
        // necessary to prevent TS from using the closure value
        // This allows for workerization to function correctly
        Inflate.prototype.c.call(this, final);
    };
    return Gunzip;
}();
;
/**
 * Asynchronous streaming GZIP decompression
 */ var AsyncGunzip = function() {
    /**
     * Creates an asynchronous GUNZIP stream
     * @param cb The callback to call whenever data is deflated
     */ function AsyncGunzip(cb) {
        this.ondata = cb;
        astrmify([
            bInflt,
            guze,
            function() {
                return [
                    astrm,
                    Inflate,
                    Gunzip
                ];
            }
        ], this, 0, function() {
            var strm = new Gunzip();
            onmessage = astrm(strm);
        }, 9);
    }
    return AsyncGunzip;
}();
;
function gunzip(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') throw 'no callback';
    return cbify(data, opts, [
        bInflt,
        guze,
        function() {
            return [
                gunzipSync
            ];
        }
    ], function(ev) {
        return pbf(gunzipSync(ev.data[0]));
    }, 3, cb);
}
function gunzipSync(data, out) {
    return inflt(data.subarray(gzs(data), -8), out || new u8(gzl(data)));
}
/**
 * Streaming Zlib compression
 */ var Zlib = function() {
    function Zlib(opts, cb) {
        this.c = adler();
        this.v = 1;
        Deflate.call(this, opts, cb);
    }
    /**
     * Pushes a chunk to be zlibbed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Zlib.prototype.push = function(chunk, final) {
        Deflate.prototype.push.call(this, chunk, final);
    };
    Zlib.prototype.p = function(c, f) {
        this.c.p(c);
        var raw = dopt(c, this.o, this.v && 2, f && 4, !f);
        if (this.v) zlh(raw, this.o), this.v = 0;
        if (f) wbytes(raw, raw.length - 4, this.c.d());
        this.ondata(raw, f);
    };
    return Zlib;
}();
;
/**
 * Asynchronous streaming Zlib compression
 */ var AsyncZlib = function() {
    function AsyncZlib(opts, cb) {
        astrmify([
            bDflt,
            zle,
            function() {
                return [
                    astrm,
                    Deflate,
                    Zlib
                ];
            }
        ], this, AsyncCmpStrm.call(this, opts, cb), function(ev) {
            var strm = new Zlib(ev.data);
            onmessage = astrm(strm);
        }, 10);
    }
    return AsyncZlib;
}();
;
function zlib(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') throw 'no callback';
    return cbify(data, opts, [
        bDflt,
        zle,
        function() {
            return [
                zlibSync
            ];
        }
    ], function(ev) {
        return pbf(zlibSync(ev.data[0], ev.data[1]));
    }, 4, cb);
}
function zlibSync(data, opts) {
    if (!opts) opts = {};
    var a = adler();
    a.p(data);
    var d = dopt(data, opts, 2, 4);
    return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
}
/**
 * Streaming Zlib decompression
 */ var Unzlib = function() {
    /**
     * Creates a Zlib decompression stream
     * @param cb The callback to call whenever data is inflated
     */ function Unzlib(cb) {
        this.v = 1;
        Inflate.call(this, cb);
    }
    /**
     * Pushes a chunk to be unzlibbed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Unzlib.prototype.push = function(chunk, final) {
        Inflate.prototype.e.call(this, chunk);
        if (this.v) {
            if (this.p.length < 2 && !final) return;
            this.p = this.p.subarray(2), this.v = 0;
        }
        if (final) {
            if (this.p.length < 4) throw 'invalid zlib stream';
            this.p = this.p.subarray(0, -4);
        }
        // necessary to prevent TS from using the closure value
        // This allows for workerization to function correctly
        Inflate.prototype.c.call(this, final);
    };
    return Unzlib;
}();
;
/**
 * Asynchronous streaming Zlib decompression
 */ var AsyncUnzlib = function() {
    /**
     * Creates an asynchronous Zlib decompression stream
     * @param cb The callback to call whenever data is deflated
     */ function AsyncUnzlib(cb) {
        this.ondata = cb;
        astrmify([
            bInflt,
            zule,
            function() {
                return [
                    astrm,
                    Inflate,
                    Unzlib
                ];
            }
        ], this, 0, function() {
            var strm = new Unzlib();
            onmessage = astrm(strm);
        }, 11);
    }
    return AsyncUnzlib;
}();
;
function unzlib(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') throw 'no callback';
    return cbify(data, opts, [
        bInflt,
        zule,
        function() {
            return [
                unzlibSync
            ];
        }
    ], function(ev) {
        return pbf(unzlibSync(ev.data[0], gu8(ev.data[1])));
    }, 5, cb);
}
function unzlibSync(data, out) {
    return inflt((zlv(data), data.subarray(2, -4)), out);
}
;
;
/**
 * Streaming GZIP, Zlib, or raw DEFLATE decompression
 */ var Decompress = function() {
    /**
     * Creates a decompression stream
     * @param cb The callback to call whenever data is decompressed
     */ function Decompress(cb) {
        this.G = Gunzip;
        this.I = Inflate;
        this.Z = Unzlib;
        this.ondata = cb;
    }
    /**
     * Pushes a chunk to be decompressed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Decompress.prototype.push = function(chunk, final) {
        if (!this.ondata) throw 'no stream handler';
        if (!this.s) {
            if (this.p && this.p.length) {
                var n = new u8(this.p.length + chunk.length);
                n.set(this.p), n.set(chunk, this.p.length);
            } else this.p = chunk;
            if (this.p.length > 2) {
                var _this_1 = this;
                var cb = function() {
                    _this_1.ondata.apply(_this_1, arguments);
                };
                this.s = this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8 ? new this.G(cb) : (this.p[0] & 15) != 8 || this.p[0] >> 4 > 7 || (this.p[0] << 8 | this.p[1]) % 31 ? new this.I(cb) : new this.Z(cb);
                this.s.push(this.p, final);
                this.p = null;
            }
        } else this.s.push(chunk, final);
    };
    return Decompress;
}();
;
/**
 * Asynchronous streaming GZIP, Zlib, or raw DEFLATE decompression
 */ var AsyncDecompress = function() {
    /**
   * Creates an asynchronous decompression stream
   * @param cb The callback to call whenever data is decompressed
   */ function AsyncDecompress(cb) {
        this.G = AsyncGunzip;
        this.I = AsyncInflate;
        this.Z = AsyncUnzlib;
        this.ondata = cb;
    }
    /**
     * Pushes a chunk to be decompressed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ AsyncDecompress.prototype.push = function(chunk, final) {
        Decompress.prototype.push.call(this, chunk, final);
    };
    return AsyncDecompress;
}();
;
function decompress(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') throw 'no callback';
    return data[0] == 31 && data[1] == 139 && data[2] == 8 ? gunzip(data, opts, cb) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? inflate(data, opts, cb) : unzlib(data, opts, cb);
}
function decompressSync(data, out) {
    return data[0] == 31 && data[1] == 139 && data[2] == 8 ? gunzipSync(data, out) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? inflateSync(data, out) : unzlibSync(data, out);
}
// flatten a directory structure
var fltn = function(d, p, t, o) {
    for(var k in d){
        var val = d[k], n = p + k;
        if (val instanceof u8) t[n] = [
            val,
            o
        ];
        else if (Array.isArray(val)) t[n] = [
            val[0],
            mrg(o, val[1])
        ];
        else fltn(val, n + '/', t, o);
    }
};
// text encoder
var te = typeof TextEncoder != 'undefined' && /*#__PURE__*/ new TextEncoder();
// text decoder
var td = typeof TextDecoder != 'undefined' && /*#__PURE__*/ new TextDecoder();
// text decoder stream
var tds = 0;
try {
    td.decode(et, {
        stream: true
    });
    tds = 1;
} catch (e) {}
// decode UTF8
var dutf8 = function(d) {
    for(var r = '', i = 0;;){
        var c = d[i++];
        var eb = (c > 127) + (c > 223) + (c > 239);
        if (i + eb > d.length) return [
            r,
            slc(d, i - 1)
        ];
        if (!eb) r += String.fromCharCode(c);
        else if (eb == 3) {
            c = ((c & 15) << 18 | (d[i++] & 63) << 12 | (d[i++] & 63) << 6 | d[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
        } else if (eb & 1) r += String.fromCharCode((c & 31) << 6 | d[i++] & 63);
        else r += String.fromCharCode((c & 15) << 12 | (d[i++] & 63) << 6 | d[i++] & 63);
    }
};
/**
 * Streaming UTF-8 decoding
 */ var DecodeUTF8 = function() {
    /**
     * Creates a UTF-8 decoding stream
     * @param cb The callback to call whenever data is decoded
     */ function DecodeUTF8(cb) {
        this.ondata = cb;
        if (tds) this.t = new TextDecoder();
        else this.p = et;
    }
    /**
     * Pushes a chunk to be decoded from UTF-8 binary
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ DecodeUTF8.prototype.push = function(chunk, final) {
        if (!this.ondata) throw 'no callback';
        final = !!final;
        if (this.t) {
            this.ondata(this.t.decode(chunk, {
                stream: true
            }), final);
            if (final) {
                if (this.t.decode().length) throw 'invalid utf-8 data';
                this.t = null;
            }
            return;
        }
        if (!this.p) throw 'stream finished';
        var dat = new u8(this.p.length + chunk.length);
        dat.set(this.p);
        dat.set(chunk, this.p.length);
        var _a = dutf8(dat), ch = _a[0], np = _a[1];
        if (final) {
            if (np.length) throw 'invalid utf-8 data';
            this.p = null;
        } else this.p = np;
        this.ondata(ch, final);
    };
    return DecodeUTF8;
}();
;
/**
 * Streaming UTF-8 encoding
 */ var EncodeUTF8 = function() {
    /**
     * Creates a UTF-8 decoding stream
     * @param cb The callback to call whenever data is encoded
     */ function EncodeUTF8(cb) {
        this.ondata = cb;
    }
    /**
     * Pushes a chunk to be encoded to UTF-8
     * @param chunk The string data to push
     * @param final Whether this is the last chunk
     */ EncodeUTF8.prototype.push = function(chunk, final) {
        if (!this.ondata) throw 'no callback';
        if (this.d) throw 'stream finished';
        this.ondata(strToU8(chunk), this.d = final || false);
    };
    return EncodeUTF8;
}();
;
function strToU8(str, latin1) {
    if (latin1) {
        var ar_1 = new u8(str.length);
        for(var i = 0; i < str.length; ++i)ar_1[i] = str.charCodeAt(i);
        return ar_1;
    }
    if (te) return te.encode(str);
    var l = str.length;
    var ar = new u8(str.length + (str.length >> 1));
    var ai = 0;
    var w = function(v) {
        ar[ai++] = v;
    };
    for(var i = 0; i < l; ++i){
        if (ai + 5 > ar.length) {
            var n = new u8(ai + 8 + (l - i << 1));
            n.set(ar);
            ar = n;
        }
        var c = str.charCodeAt(i);
        if (c < 128 || latin1) w(c);
        else if (c < 2048) w(192 | c >> 6), w(128 | c & 63);
        else if (c > 55295 && c < 57344) c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);
        else w(224 | c >> 12), w(128 | c >> 6 & 63), w(128 | c & 63);
    }
    return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
    if (latin1) {
        var r = '';
        for(var i = 0; i < dat.length; i += 16384)r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));
        return r;
    } else if (td) return td.decode(dat);
    else {
        var _a = dutf8(dat), out = _a[0], ext = _a[1];
        if (ext.length) throw 'invalid utf-8 data';
        return out;
    }
}
;
// deflate bit flag
var dbf = function(l) {
    return l == 1 ? 3 : l < 6 ? 2 : l == 9 ? 1 : 0;
};
// skip local zip header
var slzh = function(d, b) {
    return b + 30 + b2(d, b + 26) + b2(d, b + 28);
};
// read zip header
var zh = function(d, b, z) {
    var fnl = b2(d, b + 28), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl, bs = b4(d, b + 20);
    var _a = z && bs == 4294967295 ? z64e(d, es) : [
        bs,
        b4(d, b + 24),
        b4(d, b + 42)
    ], sc = _a[0], su = _a[1], off = _a[2];
    return [
        b2(d, b + 10),
        sc,
        su,
        fn,
        es + b2(d, b + 30) + b2(d, b + 32),
        off
    ];
};
// read zip64 extra field
var z64e = function(d, b) {
    for(; b2(d, b) != 1; b += 4 + b2(d, b + 2));
    return [
        b8(d, b + 12),
        b8(d, b + 4),
        b8(d, b + 20)
    ];
};
// extra field length
var exfl = function(ex) {
    var le = 0;
    if (ex) {
        for(var k in ex){
            var l = ex[k].length;
            if (l > 65535) throw 'extra field too long';
            le += l + 4;
        }
    }
    return le;
};
// write zip header
var wzh = function(d, b, f, fn, u, c, ce, co) {
    var fl = fn.length, ex = f.extra, col = co && co.length;
    var exl = exfl(ex);
    wbytes(d, b, ce != null ? 0x2014B50 : 0x4034B50), b += 4;
    if (ce != null) d[b++] = 20, d[b++] = f.os;
    d[b] = 20, b += 2; // spec compliance? what's that?
    d[b++] = f.flag << 1 | (c == null && 8), d[b++] = u && 8;
    d[b++] = f.compression & 255, d[b++] = f.compression >> 8;
    var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;
    if (y < 0 || y > 119) throw 'date not in range 1980-2099';
    wbytes(d, b, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >>> 1), b += 4;
    if (c != null) {
        wbytes(d, b, f.crc);
        wbytes(d, b + 4, c);
        wbytes(d, b + 8, f.size);
    }
    wbytes(d, b + 12, fl);
    wbytes(d, b + 14, exl), b += 16;
    if (ce != null) {
        wbytes(d, b, col);
        wbytes(d, b + 6, f.attrs);
        wbytes(d, b + 10, ce), b += 14;
    }
    d.set(fn, b);
    b += fl;
    if (exl) {
        for(var k in ex){
            var exf = ex[k], l = exf.length;
            wbytes(d, b, +k);
            wbytes(d, b + 2, l);
            d.set(exf, b + 4), b += 4 + l;
        }
    }
    if (col) d.set(co, b), b += col;
    return b;
};
// write zip footer (end of central directory)
var wzf = function(o, b, c, d, e) {
    wbytes(o, b, 0x6054B50); // skip disk
    wbytes(o, b + 8, c);
    wbytes(o, b + 10, c);
    wbytes(o, b + 12, d);
    wbytes(o, b + 16, e);
};
/**
 * A pass-through stream to keep data uncompressed in a ZIP archive.
 */ var ZipPassThrough = function() {
    /**
     * Creates a pass-through stream that can be added to ZIP archives
     * @param filename The filename to associate with this data stream
     */ function ZipPassThrough(filename) {
        this.filename = filename;
        this.c = crc();
        this.size = 0;
        this.compression = 0;
    }
    /**
     * Processes a chunk and pushes to the output stream. You can override this
     * method in a subclass for custom behavior, but by default this passes
     * the data through. You must call this.ondata(err, chunk, final) at some
     * point in this method.
     * @param chunk The chunk to process
     * @param final Whether this is the last chunk
     */ ZipPassThrough.prototype.process = function(chunk, final) {
        this.ondata(null, chunk, final);
    };
    /**
     * Pushes a chunk to be added. If you are subclassing this with a custom
     * compression algorithm, note that you must push data from the source
     * file only, pre-compression.
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ ZipPassThrough.prototype.push = function(chunk, final) {
        if (!this.ondata) throw 'no callback - add to ZIP archive before pushing';
        this.c.p(chunk);
        this.size += chunk.length;
        if (final) this.crc = this.c.d();
        this.process(chunk, final || false);
    };
    return ZipPassThrough;
}();
;
// I don't extend because TypeScript extension adds 1kB of runtime bloat
/**
 * Streaming DEFLATE compression for ZIP archives. Prefer using AsyncZipDeflate
 * for better performance
 */ var ZipDeflate = function() {
    /**
     * Creates a DEFLATE stream that can be added to ZIP archives
     * @param filename The filename to associate with this data stream
     * @param opts The compression options
     */ function ZipDeflate(filename, opts) {
        var _this_1 = this;
        if (!opts) opts = {};
        ZipPassThrough.call(this, filename);
        this.d = new Deflate(opts, function(dat, final) {
            _this_1.ondata(null, dat, final);
        });
        this.compression = 8;
        this.flag = dbf(opts.level);
    }
    ZipDeflate.prototype.process = function(chunk, final) {
        try {
            this.d.push(chunk, final);
        } catch (e) {
            this.ondata(e, null, final);
        }
    };
    /**
     * Pushes a chunk to be deflated
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ ZipDeflate.prototype.push = function(chunk, final) {
        ZipPassThrough.prototype.push.call(this, chunk, final);
    };
    return ZipDeflate;
}();
;
/**
 * Asynchronous streaming DEFLATE compression for ZIP archives
 */ var AsyncZipDeflate = function() {
    /**
     * Creates a DEFLATE stream that can be added to ZIP archives
     * @param filename The filename to associate with this data stream
     * @param opts The compression options
     */ function AsyncZipDeflate(filename, opts) {
        var _this_1 = this;
        if (!opts) opts = {};
        ZipPassThrough.call(this, filename);
        this.d = new AsyncDeflate(opts, function(err, dat, final) {
            _this_1.ondata(err, dat, final);
        });
        this.compression = 8;
        this.flag = dbf(opts.level);
        this.terminate = this.d.terminate;
    }
    AsyncZipDeflate.prototype.process = function(chunk, final) {
        this.d.push(chunk, final);
    };
    /**
     * Pushes a chunk to be deflated
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ AsyncZipDeflate.prototype.push = function(chunk, final) {
        ZipPassThrough.prototype.push.call(this, chunk, final);
    };
    return AsyncZipDeflate;
}();
;
// TODO: Better tree shaking
/**
 * A zippable archive to which files can incrementally be added
 */ var Zip = function() {
    /**
     * Creates an empty ZIP archive to which files can be added
     * @param cb The callback to call whenever data for the generated ZIP archive
     *           is available
     */ function Zip(cb) {
        this.ondata = cb;
        this.u = [];
        this.d = 1;
    }
    /**
     * Adds a file to the ZIP archive
     * @param file The file stream to add
     */ Zip.prototype.add = function(file) {
        var _this_1 = this;
        if (this.d & 2) throw 'stream finished';
        var f = strToU8(file.filename), fl = f.length;
        var com = file.comment, o = com && strToU8(com);
        var u = fl != file.filename.length || o && com.length != o.length;
        var hl = fl + exfl(file.extra) + 30;
        if (fl > 65535) throw 'filename too long';
        var header = new u8(hl);
        wzh(header, 0, file, f, u);
        var chks = [
            header
        ];
        var pAll = function() {
            for(var _i = 0, chks_1 = chks; _i < chks_1.length; _i++){
                var chk = chks_1[_i];
                _this_1.ondata(null, chk, false);
            }
            chks = [];
        };
        var tr = this.d;
        this.d = 0;
        var ind = this.u.length;
        var uf = mrg(file, {
            f: f,
            u: u,
            o: o,
            t: function() {
                if (file.terminate) file.terminate();
            },
            r: function() {
                pAll();
                if (tr) {
                    var nxt = _this_1.u[ind + 1];
                    if (nxt) nxt.r();
                    else _this_1.d = 1;
                }
                tr = 1;
            }
        });
        var cl = 0;
        file.ondata = function(err, dat, final) {
            if (err) {
                _this_1.ondata(err, dat, final);
                _this_1.terminate();
            } else {
                cl += dat.length;
                chks.push(dat);
                if (final) {
                    var dd = new u8(16);
                    wbytes(dd, 0, 0x8074B50);
                    wbytes(dd, 4, file.crc);
                    wbytes(dd, 8, cl);
                    wbytes(dd, 12, file.size);
                    chks.push(dd);
                    uf.c = cl, uf.b = hl + cl + 16, uf.crc = file.crc, uf.size = file.size;
                    if (tr) uf.r();
                    tr = 1;
                } else if (tr) pAll();
            }
        };
        this.u.push(uf);
    };
    /**
     * Ends the process of adding files and prepares to emit the final chunks.
     * This *must* be called after adding all desired files for the resulting
     * ZIP file to work properly.
     */ Zip.prototype.end = function() {
        var _this_1 = this;
        if (this.d & 2) {
            if (this.d & 1) throw 'stream finishing';
            throw 'stream finished';
        }
        if (this.d) this.e();
        else this.u.push({
            r: function() {
                if (!(_this_1.d & 1)) return;
                _this_1.u.splice(-1, 1);
                _this_1.e();
            },
            t: function() {}
        });
        this.d = 3;
    };
    Zip.prototype.e = function() {
        var bt = 0, l = 0, tl = 0;
        for(var _i = 0, _a = this.u; _i < _a.length; _i++){
            var f = _a[_i];
            tl += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0);
        }
        var out = new u8(tl + 22);
        for(var _b = 0, _c = this.u; _b < _c.length; _b++){
            var f = _c[_b];
            wzh(out, bt, f, f.f, f.u, f.c, l, f.o);
            bt += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0), l += f.b;
        }
        wzf(out, bt, this.u.length, tl, l);
        this.ondata(null, out, true);
        this.d = 2;
    };
    /**
     * A method to terminate any internal workers used by the stream. Subsequent
     * calls to add() will fail.
     */ Zip.prototype.terminate = function() {
        for(var _i = 0, _a = this.u; _i < _a.length; _i++){
            var f = _a[_i];
            f.t();
        }
        this.d = 2;
    };
    return Zip;
}();
;
function zip(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') throw 'no callback';
    var r = {};
    fltn(data, '', r, opts);
    var k = Object.keys(r);
    var lft = k.length, o = 0, tot = 0;
    var slft = lft, files = new Array(lft);
    var term = [];
    var tAll = function() {
        for(var i = 0; i < term.length; ++i)term[i]();
    };
    var cbf = function() {
        var out = new u8(tot + 22), oe = o, cdl = tot - o;
        tot = 0;
        for(var i = 0; i < slft; ++i){
            var f = files[i];
            try {
                var l = f.c.length;
                wzh(out, tot, f, f.f, f.u, l);
                var badd = 30 + f.f.length + exfl(f.extra);
                var loc = tot + badd;
                out.set(f.c, loc);
                wzh(out, o, f, f.f, f.u, l, tot, f.m), o += 16 + badd + (f.m ? f.m.length : 0), tot = loc + l;
            } catch (e) {
                return cb(e, null);
            }
        }
        wzf(out, o, files.length, cdl, oe);
        cb(null, out);
    };
    if (!lft) cbf();
    var _loop_1 = function(i) {
        var fn = k[i];
        var _a = r[fn], file = _a[0], p = _a[1];
        var c = crc(), size = file.length;
        c.p(file);
        var f = strToU8(fn), s = f.length;
        var com = p.comment, m = com && strToU8(com), ms = m && m.length;
        var exl = exfl(p.extra);
        var compression = p.level == 0 ? 0 : 8;
        var cbl = function(e, d) {
            if (e) {
                tAll();
                cb(e, null);
            } else {
                var l = d.length;
                files[i] = mrg(p, {
                    size: size,
                    crc: c.d(),
                    c: d,
                    f: f,
                    m: m,
                    u: s != fn.length || m && com.length != ms,
                    compression: compression
                });
                o += 30 + s + exl + l;
                tot += 76 + 2 * (s + exl) + (ms || 0) + l;
                if (!--lft) cbf();
            }
        };
        if (s > 65535) cbl('filename too long', null);
        if (!compression) cbl(null, file);
        else if (size < 160000) {
            try {
                cbl(null, deflateSync(file, p));
            } catch (e) {
                cbl(e, null);
            }
        } else term.push(deflate(file, p, cbl));
    };
    // Cannot use lft because it can decrease
    for(var i = 0; i < slft; ++i){
        _loop_1(i);
    }
    return tAll;
}
function zipSync(data, opts) {
    if (!opts) opts = {};
    var r = {};
    var files = [];
    fltn(data, '', r, opts);
    var o = 0;
    var tot = 0;
    for(var fn in r){
        var _a = r[fn], file = _a[0], p = _a[1];
        var compression = p.level == 0 ? 0 : 8;
        var f = strToU8(fn), s = f.length;
        var com = p.comment, m = com && strToU8(com), ms = m && m.length;
        var exl = exfl(p.extra);
        if (s > 65535) throw 'filename too long';
        var d = compression ? deflateSync(file, p) : file, l = d.length;
        var c = crc();
        c.p(file);
        files.push(mrg(p, {
            size: file.length,
            crc: c.d(),
            c: d,
            f: f,
            m: m,
            u: s != fn.length || m && com.length != ms,
            o: o,
            compression: compression
        }));
        o += 30 + s + exl + l;
        tot += 76 + 2 * (s + exl) + (ms || 0) + l;
    }
    var out = new u8(tot + 22), oe = o, cdl = tot - o;
    for(var i = 0; i < files.length; ++i){
        var f = files[i];
        wzh(out, f.o, f, f.f, f.u, f.c.length);
        var badd = 30 + f.f.length + exfl(f.extra);
        out.set(f.c, f.o + badd);
        wzh(out, o, f, f.f, f.u, f.c.length, f.o, f.m), o += 16 + badd + (f.m ? f.m.length : 0);
    }
    wzf(out, o, files.length, cdl, oe);
    return out;
}
/**
 * Streaming pass-through decompression for ZIP archives
 */ var UnzipPassThrough = function() {
    function UnzipPassThrough() {}
    UnzipPassThrough.prototype.push = function(data, final) {
        this.ondata(null, data, final);
    };
    UnzipPassThrough.compression = 0;
    return UnzipPassThrough;
}();
;
/**
 * Streaming DEFLATE decompression for ZIP archives. Prefer AsyncZipInflate for
 * better performance.
 */ var UnzipInflate = function() {
    /**
     * Creates a DEFLATE decompression that can be used in ZIP archives
     */ function UnzipInflate() {
        var _this_1 = this;
        this.i = new Inflate(function(dat, final) {
            _this_1.ondata(null, dat, final);
        });
    }
    UnzipInflate.prototype.push = function(data, final) {
        try {
            this.i.push(data, final);
        } catch (e) {
            this.ondata(e, data, final);
        }
    };
    UnzipInflate.compression = 8;
    return UnzipInflate;
}();
;
/**
 * Asynchronous streaming DEFLATE decompression for ZIP archives
 */ var AsyncUnzipInflate = function() {
    /**
     * Creates a DEFLATE decompression that can be used in ZIP archives
     */ function AsyncUnzipInflate(_, sz) {
        var _this_1 = this;
        if (sz < 320000) {
            this.i = new Inflate(function(dat, final) {
                _this_1.ondata(null, dat, final);
            });
        } else {
            this.i = new AsyncInflate(function(err, dat, final) {
                _this_1.ondata(err, dat, final);
            });
            this.terminate = this.i.terminate;
        }
    }
    AsyncUnzipInflate.prototype.push = function(data, final) {
        if (this.i.terminate) data = slc(data, 0);
        this.i.push(data, final);
    };
    AsyncUnzipInflate.compression = 8;
    return AsyncUnzipInflate;
}();
;
/**
 * A ZIP archive decompression stream that emits files as they are discovered
 */ var Unzip = function() {
    /**
     * Creates a ZIP decompression stream
     * @param cb The callback to call whenever a file in the ZIP archive is found
     */ function Unzip(cb) {
        this.onfile = cb;
        this.k = [];
        this.o = {
            0: UnzipPassThrough
        };
        this.p = et;
    }
    /**
     * Pushes a chunk to be unzipped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Unzip.prototype.push = function(chunk, final) {
        var _this_1 = this;
        if (!this.onfile) throw 'no callback';
        if (!this.p) throw 'stream finished';
        if (this.c > 0) {
            var len = Math.min(this.c, chunk.length);
            var toAdd = chunk.subarray(0, len);
            this.c -= len;
            if (this.d) this.d.push(toAdd, !this.c);
            else this.k[0].push(toAdd);
            chunk = chunk.subarray(len);
            if (chunk.length) return this.push(chunk, final);
        } else {
            var f = 0, i = 0, is = void 0, buf = void 0;
            if (!this.p.length) buf = chunk;
            else if (!chunk.length) buf = this.p;
            else {
                buf = new u8(this.p.length + chunk.length);
                buf.set(this.p), buf.set(chunk, this.p.length);
            }
            var l = buf.length, oc = this.c, add = oc && this.d;
            var _loop_2 = function() {
                var _a;
                var sig = b4(buf, i);
                if (sig == 0x4034B50) {
                    f = 1, is = i;
                    this_1.d = null;
                    this_1.c = 0;
                    var bf = b2(buf, i + 6), cmp_1 = b2(buf, i + 8), u = bf & 2048, dd = bf & 8, fnl = b2(buf, i + 26), es = b2(buf, i + 28);
                    if (l > i + 30 + fnl + es) {
                        var chks_2 = [];
                        this_1.k.unshift(chks_2);
                        f = 2;
                        var sc_1 = b4(buf, i + 18), su_1 = b4(buf, i + 22);
                        var fn_1 = strFromU8(buf.subarray(i + 30, i += 30 + fnl), !u);
                        if (sc_1 == 4294967295) {
                            _a = dd ? [
                                -2
                            ] : z64e(buf, i), sc_1 = _a[0], su_1 = _a[1];
                        } else if (dd) sc_1 = -1;
                        i += es;
                        this_1.c = sc_1;
                        var d_1;
                        var file_1 = {
                            name: fn_1,
                            compression: cmp_1,
                            start: function() {
                                if (!file_1.ondata) throw 'no callback';
                                if (!sc_1) file_1.ondata(null, et, true);
                                else {
                                    var ctr = _this_1.o[cmp_1];
                                    if (!ctr) throw 'unknown compression type ' + cmp_1;
                                    d_1 = sc_1 < 0 ? new ctr(fn_1) : new ctr(fn_1, sc_1, su_1);
                                    d_1.ondata = function(err, dat, final) {
                                        file_1.ondata(err, dat, final);
                                    };
                                    for(var _i = 0, chks_3 = chks_2; _i < chks_3.length; _i++){
                                        var dat = chks_3[_i];
                                        d_1.push(dat, false);
                                    }
                                    if (_this_1.k[0] == chks_2 && _this_1.c) _this_1.d = d_1;
                                    else d_1.push(et, true);
                                }
                            },
                            terminate: function() {
                                if (d_1 && d_1.terminate) d_1.terminate();
                            }
                        };
                        if (sc_1 >= 0) file_1.size = sc_1, file_1.originalSize = su_1;
                        this_1.onfile(file_1);
                    }
                    return "break";
                } else if (oc) {
                    if (sig == 0x8074B50) {
                        is = i += 12 + (oc == -2 && 8), f = 3, this_1.c = 0;
                        return "break";
                    } else if (sig == 0x2014B50) {
                        is = i -= 4, f = 3, this_1.c = 0;
                        return "break";
                    }
                }
            };
            var this_1 = this;
            for(; i < l - 4; ++i){
                var state_1 = _loop_2();
                if (state_1 === "break") break;
            }
            this.p = et;
            if (oc < 0) {
                var dat = f ? buf.subarray(0, is - 12 - (oc == -2 && 8) - (b4(buf, is - 16) == 0x8074B50 && 4)) : buf.subarray(0, i);
                if (add) add.push(dat, !!f);
                else this.k[+(f == 2)].push(dat);
            }
            if (f & 2) return this.push(buf.subarray(i), final);
            this.p = buf.subarray(i);
        }
        if (final) {
            if (this.c) throw 'invalid zip file';
            this.p = null;
        }
    };
    /**
     * Registers a decoder with the stream, allowing for files compressed with
     * the compression type provided to be expanded correctly
     * @param decoder The decoder constructor
     */ Unzip.prototype.register = function(decoder) {
        this.o[decoder.compression] = decoder;
    };
    return Unzip;
}();
;
function unzip(data, cb) {
    if (typeof cb != 'function') throw 'no callback';
    var term = [];
    var tAll = function() {
        for(var i = 0; i < term.length; ++i)term[i]();
    };
    var files = {};
    var e = data.length - 22;
    for(; b4(data, e) != 0x6054B50; --e){
        if (!e || data.length - e > 65558) {
            cb('invalid zip file', null);
            return;
        }
    }
    ;
    var lft = b2(data, e + 8);
    if (!lft) cb(null, {});
    var c = lft;
    var o = b4(data, e + 16);
    var z = o == 4294967295;
    if (z) {
        e = b4(data, e - 12);
        if (b4(data, e) != 0x6064B50) {
            cb('invalid zip file', null);
            return;
        }
        c = lft = b4(data, e + 32);
        o = b4(data, e + 48);
    }
    var _loop_3 = function(i) {
        var _a = zh(data, o, z), c_1 = _a[0], sc = _a[1], su = _a[2], fn = _a[3], no = _a[4], off = _a[5], b = slzh(data, off);
        o = no;
        var cbl = function(e, d) {
            if (e) {
                tAll();
                cb(e, null);
            } else {
                files[fn] = d;
                if (!--lft) cb(null, files);
            }
        };
        if (!c_1) cbl(null, slc(data, b, b + sc));
        else if (c_1 == 8) {
            var infl = data.subarray(b, b + sc);
            if (sc < 320000) {
                try {
                    cbl(null, inflateSync(infl, new u8(su)));
                } catch (e) {
                    cbl(e, null);
                }
            } else term.push(inflate(infl, {
                size: su
            }, cbl));
        } else cbl('unknown compression type ' + c_1, null);
    };
    for(var i = 0; i < c; ++i){
        _loop_3(i);
    }
    return tAll;
}
function unzipSync(data) {
    var files = {};
    var e = data.length - 22;
    for(; b4(data, e) != 0x6054B50; --e){
        if (!e || data.length - e > 65558) throw 'invalid zip file';
    }
    ;
    var c = b2(data, e + 8);
    if (!c) return {};
    var o = b4(data, e + 16);
    var z = o == 4294967295;
    if (z) {
        e = b4(data, e - 12);
        if (b4(data, e) != 0x6064B50) throw 'invalid zip file';
        c = b4(data, e + 32);
        o = b4(data, e + 48);
    }
    for(var i = 0; i < c; ++i){
        var _a = zh(data, o, z), c_2 = _a[0], sc = _a[1], su = _a[2], fn = _a[3], no = _a[4], off = _a[5], b = slzh(data, off);
        o = no;
        if (!c_2) files[fn] = slc(data, b, b + sc);
        else if (c_2 == 8) files[fn] = inflateSync(data.subarray(b, b + sc), new u8(su));
        else throw 'unknown compression type ' + c_2;
    }
    return files;
}
}}),
"[project]/potifolio-main/potifolio-main/node_modules/@monogrid/gainmap-js/dist/QuadRenderer-Bj1xl_EK.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @monogrid/gainmap-js v3.4.0
 * With ❤️, by MONOGRID <gainmap@monogrid.com>
 */ __turbopack_context__.s({
    "Q": (()=>QuadRenderer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
const getBufferForType = (type, width, height)=>{
    let out;
    switch(type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsignedByteType"]:
            out = new Uint8ClampedArray(width * height * 4);
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"]:
            out = new Uint16Array(width * height * 4);
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsignedIntType"]:
            out = new Uint32Array(width * height * 4);
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ByteType"]:
            out = new Int8Array(width * height * 4);
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShortType"]:
            out = new Int16Array(width * height * 4);
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IntType"]:
            out = new Int32Array(width * height * 4);
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatType"]:
            out = new Float32Array(width * height * 4);
            break;
        default:
            throw new Error('Unsupported data type');
    }
    return out;
};
let _canReadPixelsResult;
/**
 * Test if this browser implementation can correctly read pixels from the specified
 * Render target type.
 *
 * Runs only once
 *
 * @param type
 * @param renderer
 * @param camera
 * @param renderTargetOptions
 * @returns
 */ const canReadPixels = (type, renderer, camera, renderTargetOptions)=>{
    if (_canReadPixelsResult !== undefined) return _canReadPixelsResult;
    const testRT = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](1, 1, renderTargetOptions);
    renderer.setRenderTarget(testRT);
    const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](), new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
        color: 0xffffff
    }));
    renderer.render(mesh, camera);
    renderer.setRenderTarget(null);
    const out = getBufferForType(type, testRT.width, testRT.height);
    renderer.readRenderTargetPixels(testRT, 0, 0, testRT.width, testRT.height, out);
    testRT.dispose();
    mesh.geometry.dispose();
    mesh.material.dispose();
    _canReadPixelsResult = out[0] !== 0;
    return _canReadPixelsResult;
};
/**
 * Utility class used for rendering a texture with a material
 *
 * @category Core
 * @group Core
 */ class QuadRenderer {
    _renderer;
    _rendererIsDisposable = false;
    _material;
    _scene;
    _camera;
    _quad;
    _renderTarget;
    _width;
    _height;
    _type;
    _colorSpace;
    _supportsReadPixels = true;
    /**
     * Constructs a new QuadRenderer
     *
     * @param options Parameters for this QuadRenderer
     */ constructor(options){
        this._width = options.width;
        this._height = options.height;
        this._type = options.type;
        this._colorSpace = options.colorSpace;
        const rtOptions = {
            // fixed options
            format: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RGBAFormat"],
            depthBuffer: false,
            stencilBuffer: false,
            // user options
            type: this._type,
            colorSpace: this._colorSpace,
            anisotropy: options.renderTargetOptions?.anisotropy !== undefined ? options.renderTargetOptions?.anisotropy : 1,
            generateMipmaps: options.renderTargetOptions?.generateMipmaps !== undefined ? options.renderTargetOptions?.generateMipmaps : false,
            magFilter: options.renderTargetOptions?.magFilter !== undefined ? options.renderTargetOptions?.magFilter : __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"],
            minFilter: options.renderTargetOptions?.minFilter !== undefined ? options.renderTargetOptions?.minFilter : __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"],
            samples: options.renderTargetOptions?.samples !== undefined ? options.renderTargetOptions?.samples : undefined,
            wrapS: options.renderTargetOptions?.wrapS !== undefined ? options.renderTargetOptions?.wrapS : __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"],
            wrapT: options.renderTargetOptions?.wrapT !== undefined ? options.renderTargetOptions?.wrapT : __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"]
        };
        this._material = options.material;
        if (options.renderer) {
            this._renderer = options.renderer;
        } else {
            this._renderer = QuadRenderer.instantiateRenderer();
            this._rendererIsDisposable = true;
        }
        this._scene = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
        this._camera = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrthographicCamera"]();
        this._camera.position.set(0, 0, 10);
        this._camera.left = -0.5;
        this._camera.right = 0.5;
        this._camera.top = 0.5;
        this._camera.bottom = -0.5;
        this._camera.updateProjectionMatrix();
        if (!canReadPixels(this._type, this._renderer, this._camera, rtOptions)) {
            let alternativeType;
            switch(this._type){
                case __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"]:
                    alternativeType = this._renderer.extensions.has('EXT_color_buffer_float') ? __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatType"] : undefined;
                    break;
            }
            if (alternativeType !== undefined) {
                console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatType"]}`);
                this._type = alternativeType;
            } else {
                this._supportsReadPixels = false;
                console.warn('This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown');
            }
        }
        this._quad = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](), this._material);
        this._quad.geometry.computeBoundingBox();
        this._scene.add(this._quad);
        this._renderTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](this.width, this.height, rtOptions);
        this._renderTarget.texture.mapping = options.renderTargetOptions?.mapping !== undefined ? options.renderTargetOptions?.mapping : __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UVMapping"];
    }
    /**
     * Instantiates a temporary renderer
     *
     * @returns
     */ static instantiateRenderer() {
        const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]();
        renderer.setSize(128, 128);
        // renderer.outputColorSpace = SRGBColorSpace
        // renderer.toneMapping = LinearToneMapping
        // renderer.debug.checkShaderErrors = false
        // this._rendererIsDisposable = true
        return renderer;
    }
    /**
     * Renders the input texture using the specified material
     */ render = ()=>{
        this._renderer.setRenderTarget(this._renderTarget);
        try {
            this._renderer.render(this._scene, this._camera);
        } catch (e) {
            this._renderer.setRenderTarget(null);
            throw e;
        }
        this._renderer.setRenderTarget(null);
    };
    /**
     * Obtains a Buffer containing the rendered texture.
     *
     * @throws Error if the browser cannot read pixels from this RenderTarget type.
     * @returns a TypedArray containing RGBA values from this renderer
     */ toArray() {
        if (!this._supportsReadPixels) throw new Error('Can\'t read pixels in this browser');
        const out = getBufferForType(this._type, this._width, this._height);
        this._renderer.readRenderTargetPixels(this._renderTarget, 0, 0, this._width, this._height, out);
        return out;
    }
    /**
     * Performs a readPixel operation in the renderTarget
     * and returns a DataTexture containing the read data
     *
     * @param options options
     * @returns
     */ toDataTexture(options) {
        const returnValue = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTexture"](// fixed values
        this.toArray(), this.width, this.height, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RGBAFormat"], this._type, // user values
        options?.mapping || __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UVMapping"], options?.wrapS || __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"], options?.wrapT || __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"], options?.magFilter || __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"], options?.minFilter || __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"], options?.anisotropy || 1, // fixed value
        __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearSRGBColorSpace"]);
        // set this afterwards, we can't set it in constructor
        returnValue.generateMipmaps = options?.generateMipmaps !== undefined ? options?.generateMipmaps : false;
        return returnValue;
    }
    /**
     * If using a disposable renderer, it will dispose it.
     */ disposeOnDemandRenderer() {
        this._renderer.setRenderTarget(null);
        if (this._rendererIsDisposable) {
            this._renderer.dispose();
            this._renderer.forceContextLoss();
        }
    }
    /**
     * Will dispose of **all** assets used by this renderer.
     *
     *
     * @param disposeRenderTarget will dispose of the renderTarget which will not be usable later
     * set this to true if you passed the `renderTarget.texture` to a `PMREMGenerator`
     * or are otherwise done with it.
     *
     * @example
     * ```js
     * const loader = new HDRJPGLoader(renderer)
     * const result = await loader.loadAsync('gainmap.jpeg')
     * const mesh = new Mesh(geometry, new MeshBasicMaterial({ map: result.renderTarget.texture }) )
     * // DO NOT dispose the renderTarget here,
     * // it is used directly in the material
     * result.dispose()
     * ```
     *
     * @example
     * ```js
     * const loader = new HDRJPGLoader(renderer)
     * const pmremGenerator = new PMREMGenerator( renderer );
     * const result = await loader.loadAsync('gainmap.jpeg')
     * const envMap = pmremGenerator.fromEquirectangular(result.renderTarget.texture)
     * const mesh = new Mesh(geometry, new MeshStandardMaterial({ envMap }) )
     * // renderTarget can be disposed here
     * // because it was used to generate a PMREM texture
     * result.dispose(true)
     * ```
     */ dispose(disposeRenderTarget) {
        this.disposeOnDemandRenderer();
        if (disposeRenderTarget) {
            this.renderTarget.dispose();
        }
        // dispose shader material texture uniforms
        if (this.material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]) {
            Object.values(this.material.uniforms).forEach((v)=>{
                if (v.value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"]) v.value.dispose();
            });
        }
        // dispose other material properties
        Object.values(this.material).forEach((value)=>{
            if (value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"]) value.dispose();
        });
        this.material.dispose();
        this._quad.geometry.dispose();
    }
    /**
     * Width of the texture
     */ get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
        this._renderTarget.setSize(this._width, this._height);
    }
    /**
     * Height of the texture
     */ get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
        this._renderTarget.setSize(this._width, this._height);
    }
    /**
     * The renderer used
     */ get renderer() {
        return this._renderer;
    }
    /**
     * The `WebGLRenderTarget` used.
     */ get renderTarget() {
        return this._renderTarget;
    }
    set renderTarget(value) {
        this._renderTarget = value;
        this._width = value.width;
        this._height = value.height;
    // this._type = value.texture.type
    }
    /**
     * The `Material` used.
     */ get material() {
        return this._material;
    }
    /**
     *
     */ get type() {
        return this._type;
    }
    get colorSpace() {
        return this._colorSpace;
    }
}
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/@monogrid/gainmap-js/dist/Loader-DLI-_JDP.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @monogrid/gainmap-js v3.4.0
 * With ❤️, by MONOGRID <gainmap@monogrid.com>
 */ __turbopack_context__.s({
    "G": (()=>GainMapNotFoundError),
    "L": (()=>LoaderBaseShared),
    "M": (()=>MPFExtractor),
    "X": (()=>XMPMetadataNotFoundError),
    "a": (()=>extractXMP),
    "c": (()=>createDecodeFunction),
    "e": (()=>extractGainmapFromJPEG)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
/**
 * Shared decode implementation factory
 * Creates a decode function that prepares a QuadRenderer with the given parameters
 */ function createDecodeFunction(config) {
    return (params)=>{
        const { sdr, gainMap, renderer } = params;
        if (sdr.colorSpace !== __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"]) {
            console.warn('SDR Colorspace needs to be *SRGBColorSpace*, setting it automatically');
            sdr.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
        }
        sdr.needsUpdate = true;
        if (gainMap.colorSpace !== __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearSRGBColorSpace"]) {
            console.warn('Gainmap Colorspace needs to be *LinearSRGBColorSpace*, setting it automatically');
            gainMap.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearSRGBColorSpace"];
        }
        gainMap.needsUpdate = true;
        const material = config.createMaterial({
            ...params,
            sdr,
            gainMap
        });
        const quadRenderer = config.createQuadRenderer({
            width: sdr.image.width,
            height: sdr.image.height,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"],
            colorSpace: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearSRGBColorSpace"],
            material,
            renderer,
            renderTargetOptions: params.renderTargetOptions
        });
        return quadRenderer;
    };
}
class GainMapNotFoundError extends Error {
}
class XMPMetadataNotFoundError extends Error {
}
const getXMLValue = (xml, tag, defaultValue)=>{
    // Check for attribute format first: tag="value"
    const attributeMatch = new RegExp(`${tag}="([^"]*)"`, 'i').exec(xml);
    if (attributeMatch) return attributeMatch[1];
    // Check for tag format: <tag>value</tag> or <tag><rdf:li>value</rdf:li>...</tag>
    const tagMatch = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i').exec(xml);
    if (tagMatch) {
        // Check if it contains rdf:li elements
        const liValues = tagMatch[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);
        if (liValues && liValues.length === 3) {
            return liValues.map((v)=>v.replace(/<\/?rdf:li>/g, ''));
        }
        return tagMatch[1].trim();
    }
    if (defaultValue !== undefined) return defaultValue;
    throw new Error(`Can't find ${tag} in gainmap metadata`);
};
const extractXMP = (input)=>{
    let str;
    // support node test environment
    if (typeof TextDecoder !== 'undefined') str = new TextDecoder().decode(input);
    else str = input.toString();
    let start = str.indexOf('<x:xmpmeta');
    while(start !== -1){
        const end = str.indexOf('x:xmpmeta>', start);
        const xmpBlock = str.slice(start, end + 10);
        try {
            const gainMapMin = getXMLValue(xmpBlock, 'hdrgm:GainMapMin', '0');
            const gainMapMax = getXMLValue(xmpBlock, 'hdrgm:GainMapMax');
            const gamma = getXMLValue(xmpBlock, 'hdrgm:Gamma', '1');
            const offsetSDR = getXMLValue(xmpBlock, 'hdrgm:OffsetSDR', '0.015625');
            const offsetHDR = getXMLValue(xmpBlock, 'hdrgm:OffsetHDR', '0.015625');
            // These are always attributes, so we can use a simpler regex
            const hdrCapacityMinMatch = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(xmpBlock);
            const hdrCapacityMin = hdrCapacityMinMatch ? hdrCapacityMinMatch[1] : '0';
            const hdrCapacityMaxMatch = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(xmpBlock);
            if (!hdrCapacityMaxMatch) throw new Error('Incomplete gainmap metadata');
            const hdrCapacityMax = hdrCapacityMaxMatch[1];
            return {
                gainMapMin: Array.isArray(gainMapMin) ? gainMapMin.map((v)=>parseFloat(v)) : [
                    parseFloat(gainMapMin),
                    parseFloat(gainMapMin),
                    parseFloat(gainMapMin)
                ],
                gainMapMax: Array.isArray(gainMapMax) ? gainMapMax.map((v)=>parseFloat(v)) : [
                    parseFloat(gainMapMax),
                    parseFloat(gainMapMax),
                    parseFloat(gainMapMax)
                ],
                gamma: Array.isArray(gamma) ? gamma.map((v)=>parseFloat(v)) : [
                    parseFloat(gamma),
                    parseFloat(gamma),
                    parseFloat(gamma)
                ],
                offsetSdr: Array.isArray(offsetSDR) ? offsetSDR.map((v)=>parseFloat(v)) : [
                    parseFloat(offsetSDR),
                    parseFloat(offsetSDR),
                    parseFloat(offsetSDR)
                ],
                offsetHdr: Array.isArray(offsetHDR) ? offsetHDR.map((v)=>parseFloat(v)) : [
                    parseFloat(offsetHDR),
                    parseFloat(offsetHDR),
                    parseFloat(offsetHDR)
                ],
                hdrCapacityMin: parseFloat(hdrCapacityMin),
                hdrCapacityMax: parseFloat(hdrCapacityMax)
            };
        } catch (e) {
        // Continue searching for another xmpmeta block if this one fails
        }
        start = str.indexOf('<x:xmpmeta', end);
    }
};
/**
 * MPF Extractor (Multi Picture Format Extractor)
 * By Henrik S Nilsson 2019
 *
 * Extracts images stored in images based on the MPF format (found here: https://www.cipa.jp/e/std/std-sec.html
 * under "CIPA DC-007-Translation-2021 Multi-Picture Format"
 *
 * Overly commented, and without intention of being complete or production ready.
 * Created to extract depth maps from iPhone images, and to learn about image metadata.
 * Kudos to: Phil Harvey (exiftool), Jaume Sanchez (android-lens-blur-depth-extractor)
 */ class MPFExtractor {
    options;
    constructor(options){
        this.options = {
            debug: options && options.debug !== undefined ? options.debug : false,
            extractFII: options && options.extractFII !== undefined ? options.extractFII : true,
            extractNonFII: options && options.extractNonFII !== undefined ? options.extractNonFII : true
        };
    }
    extract(imageArrayBuffer) {
        return new Promise((resolve, reject)=>{
            const debug = this.options.debug;
            const dataView = new DataView(imageArrayBuffer.buffer);
            // If you're executing this line on a big endian machine, it'll be reversed.
            // bigEnd further down though, refers to the endianness of the image itself.
            if (dataView.getUint16(0) !== 0xffd8) {
                reject(new Error('Not a valid jpeg'));
                return;
            }
            const length = dataView.byteLength;
            let offset = 2;
            let loops = 0;
            let marker; // APP# marker
            while(offset < length){
                if (++loops > 250) {
                    reject(new Error(`Found no marker after ${loops} loops 😵`));
                    return;
                }
                if (dataView.getUint8(offset) !== 0xff) {
                    reject(new Error(`Not a valid marker at offset 0x${offset.toString(16)}, found: 0x${dataView.getUint8(offset).toString(16)}`));
                    return;
                }
                marker = dataView.getUint8(offset + 1);
                if (debug) console.log(`Marker: ${marker.toString(16)}`);
                if (marker === 0xe2) {
                    if (debug) console.log('Found APP2 marker (0xffe2)');
                    // Works for iPhone 8 Plus, X, and XSMax. Or any photos of MPF format.
                    // Great way to visualize image information in html is using Exiftool. E.g.:
                    // ./exiftool.exe -htmldump -wantTrailer photo.jpg > photo.html
                    const formatPt = offset + 4;
                    /*
                     *  Structure of the MP Format Identifier
                     *
                     *  Offset Addr.  | Code (Hex)  | Description
                     *  +00             ff            Marker Prefix      <-- offset
                     *  +01             e2            APP2
                     *  +02             #n            APP2 Field Length
                     *  +03             #n            APP2 Field Length
                     *  +04             4d            'M'                <-- formatPt
                     *  +05             50            'P'
                     *  +06             46            'F'
                     *  +07             00            NULL
                     *                                                   <-- tiffOffset
                     */ if (dataView.getUint32(formatPt) === 0x4d504600) {
                        // Found MPF tag, so we start dig out sub images
                        const tiffOffset = formatPt + 4;
                        let bigEnd; // Endianness from TIFF header
                        // Test for TIFF validity and endianness
                        // 0x4949 and 0x4D4D ('II' and 'MM') marks Little Endian and Big Endian
                        if (dataView.getUint16(tiffOffset) === 0x4949) {
                            bigEnd = false;
                        } else if (dataView.getUint16(tiffOffset) === 0x4d4d) {
                            bigEnd = true;
                        } else {
                            reject(new Error('No valid endianness marker found in TIFF header'));
                            return;
                        }
                        if (dataView.getUint16(tiffOffset + 2, !bigEnd) !== 0x002a) {
                            reject(new Error('Not valid TIFF data! (no 0x002A marker)'));
                            return;
                        }
                        // 32 bit number stating the offset from the start of the 8 Byte MP Header
                        // to MP Index IFD Least possible value is thus 8 (means 0 offset)
                        const firstIFDOffset = dataView.getUint32(tiffOffset + 4, !bigEnd);
                        if (firstIFDOffset < 0x00000008) {
                            reject(new Error('Not valid TIFF data! (First offset less than 8)'));
                            return;
                        }
                        // Move ahead to MP Index IFD
                        // Assume we're at the first IFD, so firstIFDOffset points to
                        // MP Index IFD and not MP Attributes IFD. (If we try extract from a sub image,
                        // we fail silently here due to this assumption)
                        // Count (2 Byte) | MP Index Fields a.k.a. MP Entries (count * 12 Byte) | Offset of Next IFD (4 Byte)
                        const dirStart = tiffOffset + firstIFDOffset; // Start of IFD (Image File Directory)
                        const count = dataView.getUint16(dirStart, !bigEnd); // Count of MPEntries (2 Byte)
                        // Extract info from MPEntries (starting after Count)
                        const entriesStart = dirStart + 2;
                        let numberOfImages = 0;
                        for(let i = entriesStart; i < entriesStart + 12 * count; i += 12){
                            // Each entry is 12 Bytes long
                            // Check MP Index IFD tags, here we only take tag 0xb001 = Number of images
                            if (dataView.getUint16(i, !bigEnd) === 0xb001) {
                                // stored in Last 4 bytes of its 12 Byte entry.
                                numberOfImages = dataView.getUint32(i + 8, !bigEnd);
                            }
                        }
                        const nextIFDOffsetLen = 4; // 4 Byte offset field that appears after MP Index IFD tags
                        const MPImageListValPt = dirStart + 2 + count * 12 + nextIFDOffsetLen;
                        const images = [];
                        for(let i = MPImageListValPt; i < MPImageListValPt + numberOfImages * 16; i += 16){
                            const image = {
                                MPType: dataView.getUint32(i, !bigEnd),
                                size: dataView.getUint32(i + 4, !bigEnd),
                                // This offset is specified relative to the address of the MP Endian
                                // field in the MP Header, unless the image is a First Individual Image,
                                // in which case the value of the offset shall be NULL (0x00000000).
                                dataOffset: dataView.getUint32(i + 8, !bigEnd),
                                dependantImages: dataView.getUint32(i + 12, !bigEnd),
                                start: -1,
                                end: -1,
                                isFII: false
                            };
                            if (!image.dataOffset) {
                                // dataOffset is 0x00000000 for First Individual Image
                                image.start = 0;
                                image.isFII = true;
                            } else {
                                image.start = tiffOffset + image.dataOffset;
                                image.isFII = false;
                            }
                            image.end = image.start + image.size;
                            images.push(image);
                        }
                        if (this.options.extractNonFII && images.length) {
                            const bufferBlob = new Blob([
                                dataView
                            ]);
                            const imgs = [];
                            for (const image of images){
                                if (image.isFII && !this.options.extractFII) {
                                    continue; // Skip FII
                                }
                                const imageBlob = bufferBlob.slice(image.start, image.end + 1, 'image/jpeg');
                                // we don't need this
                                // const imageUrl = URL.createObjectURL(imageBlob)
                                // image.img = document.createElement('img')
                                // image.img.src = imageUrl
                                imgs.push(imageBlob);
                            }
                            resolve(imgs);
                        }
                    }
                }
                offset += 2 + dataView.getUint16(offset + 2);
            }
        });
    }
}
/**
 * Extracts XMP Metadata and the gain map recovery image
 * from a single JPEG file.
 *
 * @category Decoding Functions
 * @group Decoding Functions
 * @param jpegFile an `Uint8Array` containing and encoded JPEG file
 * @returns an sdr `Uint8Array` compressed in JPEG, a gainMap `Uint8Array` compressed in JPEG and the XMP parsed XMP metadata
 * @throws Error if XMP Metadata is not found
 * @throws Error if Gain map image is not found
 * @example
 * import { FileLoader } from 'three'
 * import { extractGainmapFromJPEG } from '@monogrid/gainmap-js'
 *
 * const jpegFile = await new FileLoader()
 *  .setResponseType('arraybuffer')
 *  .loadAsync('image.jpg')
 *
 * const { sdr, gainMap, metadata } = extractGainmapFromJPEG(jpegFile)
 */ const extractGainmapFromJPEG = async (jpegFile)=>{
    const metadata = extractXMP(jpegFile);
    if (!metadata) throw new XMPMetadataNotFoundError('Gain map XMP metadata not found');
    const mpfExtractor = new MPFExtractor({
        extractFII: true,
        extractNonFII: true
    });
    const images = await mpfExtractor.extract(jpegFile);
    if (images.length !== 2) throw new GainMapNotFoundError('Gain map recovery image not found');
    return {
        sdr: new Uint8Array(await images[0].arrayBuffer()),
        gainMap: new Uint8Array(await images[1].arrayBuffer()),
        metadata
    };
};
/**
 * private function, async get image from blob
 *
 * @param blob
 * @returns
 */ const getHTMLImageFromBlob = (blob)=>{
    return new Promise((resolve, reject)=>{
        const img = document.createElement('img');
        img.onload = ()=>{
            resolve(img);
        };
        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
        img.onerror = (e)=>{
            reject(e);
        };
        img.src = URL.createObjectURL(blob);
    });
};
/**
 * Shared base class for loaders that extracts common logic
 */ class LoaderBaseShared extends __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"] {
    _renderer;
    _renderTargetOptions;
    _internalLoadingManager;
    _config;
    constructor(config, manager){
        super(manager);
        this._config = config;
        if (config.renderer) this._renderer = config.renderer;
        this._internalLoadingManager = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingManager"]();
    }
    setRenderer(renderer) {
        this._renderer = renderer;
        return this;
    }
    setRenderTargetOptions(options) {
        this._renderTargetOptions = options;
        return this;
    }
    prepareQuadRenderer() {
        if (!this._renderer) {
            console.warn('WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.');
        }
        const material = this._config.createMaterial({
            gainMapMax: [
                1,
                1,
                1
            ],
            gainMapMin: [
                0,
                0,
                0
            ],
            gamma: [
                1,
                1,
                1
            ],
            offsetHdr: [
                1,
                1,
                1
            ],
            offsetSdr: [
                1,
                1,
                1
            ],
            hdrCapacityMax: 1,
            hdrCapacityMin: 0,
            maxDisplayBoost: 1,
            gainMap: new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"](),
            sdr: new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"]()
        });
        return this._config.createQuadRenderer({
            width: 16,
            height: 16,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"],
            colorSpace: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearSRGBColorSpace"],
            material,
            renderer: this._renderer,
            renderTargetOptions: this._renderTargetOptions
        });
    }
    async processImages(sdrBuffer, gainMapBuffer, imageOrientation) {
        const gainMapBlob = gainMapBuffer ? new Blob([
            gainMapBuffer
        ], {
            type: 'image/jpeg'
        }) : undefined;
        const sdrBlob = new Blob([
            sdrBuffer
        ], {
            type: 'image/jpeg'
        });
        let sdrImage;
        let gainMapImage;
        let needsFlip = false;
        if (typeof createImageBitmap === 'undefined') {
            const res = await Promise.all([
                gainMapBlob ? getHTMLImageFromBlob(gainMapBlob) : Promise.resolve(undefined),
                getHTMLImageFromBlob(sdrBlob)
            ]);
            gainMapImage = res[0];
            sdrImage = res[1];
            needsFlip = imageOrientation === 'flipY';
        } else {
            const res = await Promise.all([
                gainMapBlob ? createImageBitmap(gainMapBlob, {
                    imageOrientation: imageOrientation || 'flipY'
                }) : Promise.resolve(undefined),
                createImageBitmap(sdrBlob, {
                    imageOrientation: imageOrientation || 'flipY'
                })
            ]);
            gainMapImage = res[0];
            sdrImage = res[1];
        }
        return {
            sdrImage,
            gainMapImage,
            needsFlip
        };
    }
    createTextures(sdrImage, gainMapImage, needsFlip) {
        const gainMap = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"](gainMapImage || new ImageData(2, 2), __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UVMapping"], __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"], __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"], __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearMipMapLinearFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RGBAFormat"], __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsignedByteType"], 1, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearSRGBColorSpace"]);
        gainMap.flipY = needsFlip;
        gainMap.needsUpdate = true;
        const sdr = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"](sdrImage, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UVMapping"], __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"], __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"], __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearMipMapLinearFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RGBAFormat"], __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsignedByteType"], 1, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"]);
        sdr.flipY = needsFlip;
        sdr.needsUpdate = true;
        return {
            gainMap,
            sdr
        };
    }
    updateQuadRenderer(quadRenderer, sdrImage, gainMap, sdr, metadata) {
        quadRenderer.width = sdrImage.width;
        quadRenderer.height = sdrImage.height;
        quadRenderer.material.gainMap = gainMap;
        quadRenderer.material.sdr = sdr;
        quadRenderer.material.gainMapMin = metadata.gainMapMin;
        quadRenderer.material.gainMapMax = metadata.gainMapMax;
        quadRenderer.material.offsetHdr = metadata.offsetHdr;
        quadRenderer.material.offsetSdr = metadata.offsetSdr;
        quadRenderer.material.gamma = metadata.gamma;
        quadRenderer.material.hdrCapacityMin = metadata.hdrCapacityMin;
        quadRenderer.material.hdrCapacityMax = metadata.hdrCapacityMax;
        quadRenderer.material.maxDisplayBoost = Math.pow(2, metadata.hdrCapacityMax);
        quadRenderer.material.needsUpdate = true;
    }
}
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/@monogrid/gainmap-js/dist/decode.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @monogrid/gainmap-js v3.4.0
 * With ❤️, by MONOGRID <gainmap@monogrid.com>
 */ __turbopack_context__.s({
    "GainMapDecoderMaterial": (()=>GainMapDecoderMaterial),
    "GainMapLoader": (()=>GainMapLoader),
    "HDRJPGLoader": (()=>HDRJPGLoader),
    "JPEGRLoader": (()=>HDRJPGLoader),
    "decode": (()=>decode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$monogrid$2f$gainmap$2d$js$2f$dist$2f$QuadRenderer$2d$Bj1xl_EK$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@monogrid/gainmap-js/dist/QuadRenderer-Bj1xl_EK.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$monogrid$2f$gainmap$2d$js$2f$dist$2f$Loader$2d$DLI$2d$_JDP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@monogrid/gainmap-js/dist/Loader-DLI-_JDP.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
;
;
;
const vertexShader = /* glsl */ `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
const fragmentShader = /* glsl */ `
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;
/**
 * A Material which is able to decode the Gainmap into a full HDR Representation
 *
 * @category Materials
 * @group Materials
 */ class GainMapDecoderMaterial extends __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"] {
    _maxDisplayBoost;
    _hdrCapacityMin;
    _hdrCapacityMax;
    /**
     *
     * @param params
     */ constructor({ gamma, offsetHdr, offsetSdr, gainMapMin, gainMapMax, maxDisplayBoost, hdrCapacityMin, hdrCapacityMax, sdr, gainMap }){
        super({
            name: 'GainMapDecoderMaterial',
            vertexShader,
            fragmentShader,
            uniforms: {
                sdr: {
                    value: sdr
                },
                gainMap: {
                    value: gainMap
                },
                gamma: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1.0 / gamma[0], 1.0 / gamma[1], 1.0 / gamma[2])
                },
                offsetHdr: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().fromArray(offsetHdr)
                },
                offsetSdr: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().fromArray(offsetSdr)
                },
                gainMapMin: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().fromArray(gainMapMin)
                },
                gainMapMax: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().fromArray(gainMapMax)
                },
                weightFactor: {
                    value: (Math.log2(maxDisplayBoost) - hdrCapacityMin) / (hdrCapacityMax - hdrCapacityMin)
                }
            },
            blending: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoBlending"],
            depthTest: false,
            depthWrite: false
        });
        this._maxDisplayBoost = maxDisplayBoost;
        this._hdrCapacityMin = hdrCapacityMin;
        this._hdrCapacityMax = hdrCapacityMax;
        this.needsUpdate = true;
        this.uniformsNeedUpdate = true;
    }
    get sdr() {
        return this.uniforms.sdr.value;
    }
    set sdr(value) {
        this.uniforms.sdr.value = value;
    }
    get gainMap() {
        return this.uniforms.gainMap.value;
    }
    set gainMap(value) {
        this.uniforms.gainMap.value = value;
    }
    /**
     * @see {@link GainMapMetadata.offsetHdr}
     */ get offsetHdr() {
        return this.uniforms.offsetHdr.value.toArray();
    }
    set offsetHdr(value) {
        this.uniforms.offsetHdr.value.fromArray(value);
    }
    /**
     * @see {@link GainMapMetadata.offsetSdr}
     */ get offsetSdr() {
        return this.uniforms.offsetSdr.value.toArray();
    }
    set offsetSdr(value) {
        this.uniforms.offsetSdr.value.fromArray(value);
    }
    /**
     * @see {@link GainMapMetadata.gainMapMin}
     */ get gainMapMin() {
        return this.uniforms.gainMapMin.value.toArray();
    }
    set gainMapMin(value) {
        this.uniforms.gainMapMin.value.fromArray(value);
    }
    /**
     * @see {@link GainMapMetadata.gainMapMax}
     */ get gainMapMax() {
        return this.uniforms.gainMapMax.value.toArray();
    }
    set gainMapMax(value) {
        this.uniforms.gainMapMax.value.fromArray(value);
    }
    /**
     * @see {@link GainMapMetadata.gamma}
     */ get gamma() {
        const g = this.uniforms.gamma.value;
        return [
            1 / g.x,
            1 / g.y,
            1 / g.z
        ];
    }
    set gamma(value) {
        const g = this.uniforms.gamma.value;
        g.x = 1.0 / value[0];
        g.y = 1.0 / value[1];
        g.z = 1.0 / value[2];
    }
    /**
     * @see {@link GainMapMetadata.hdrCapacityMin}
     * @remarks Logarithmic space
     */ get hdrCapacityMin() {
        return this._hdrCapacityMin;
    }
    set hdrCapacityMin(value) {
        this._hdrCapacityMin = value;
        this.calculateWeight();
    }
    /**
     * @see {@link GainMapMetadata.hdrCapacityMin}
     * @remarks Logarithmic space
     */ get hdrCapacityMax() {
        return this._hdrCapacityMax;
    }
    set hdrCapacityMax(value) {
        this._hdrCapacityMax = value;
        this.calculateWeight();
    }
    /**
     * @see {@link GainmapDecodingParameters.maxDisplayBoost}
     * @remarks Non Logarithmic space
     */ get maxDisplayBoost() {
        return this._maxDisplayBoost;
    }
    set maxDisplayBoost(value) {
        this._maxDisplayBoost = Math.max(1, Math.min(65504, value));
        this.calculateWeight();
    }
    calculateWeight() {
        const val = (Math.log2(this._maxDisplayBoost) - this._hdrCapacityMin) / (this._hdrCapacityMax - this._hdrCapacityMin);
        this.uniforms.weightFactor.value = Math.max(0, Math.min(1, val));
    }
}
const decodeImpl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$monogrid$2f$gainmap$2d$js$2f$dist$2f$Loader$2d$DLI$2d$_JDP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
    renderer: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"],
    createMaterial: (params)=>new GainMapDecoderMaterial(params),
    createQuadRenderer: (params)=>new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$monogrid$2f$gainmap$2d$js$2f$dist$2f$QuadRenderer$2d$Bj1xl_EK$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Q"](params)
});
/**
 * Decodes a gain map using a WebGL RenderTarget
 *
 * @category Decoding Functions
 * @group Decoding Functions
 * @example
 * import { decode } from '@monogrid/gainmap-js'
 * import {
 *   Mesh,
 *   MeshBasicMaterial,
 *   PerspectiveCamera,
 *   PlaneGeometry,
 *   Scene,
 *   TextureLoader,
 *   WebGLRenderer
 * } from 'three'
 *
 * const renderer = new WebGLRenderer()
 *
 * const textureLoader = new TextureLoader()
 *
 * // load SDR Representation
 * const sdr = await textureLoader.loadAsync('sdr.jpg')
 * // load Gain map recovery image
 * const gainMap = await textureLoader.loadAsync('gainmap.jpg')
 * // load metadata
 * const metadata = await (await fetch('metadata.json')).json()
 *
 * const result = decode({
 *   sdr,
 *   gainMap,
 *   // this allows to use `result.renderTarget.texture` directly
 *   renderer,
 *   // this will restore the full HDR range
 *   maxDisplayBoost: Math.pow(2, metadata.hdrCapacityMax),
 *   ...metadata
 * })
 *
 * const scene = new Scene()
 * // `result` can be used to populate a Texture
 * const mesh = new Mesh(
 *   new PlaneGeometry(),
 *   new MeshBasicMaterial({ map: result.renderTarget.texture })
 * )
 * scene.add(mesh)
 * renderer.render(scene, new PerspectiveCamera())
 *
 * // result must be manually disposed
 * // when you are done using it
 * result.dispose()
 *
 * @param params
 * @returns
 * @throws {Error} if the WebGLRenderer fails to render the gain map
 */ const decode = (params)=>{
    // Ensure renderer is defined for the base function
    if (!params.renderer) {
        throw new Error('Renderer is required for decode function');
    }
    const quadRenderer = decodeImpl({
        ...params,
        renderer: params.renderer
    });
    try {
        quadRenderer.render();
    } catch (e) {
        quadRenderer.disposeOnDemandRenderer();
        throw e;
    }
    return quadRenderer;
};
/**
 * Base class for WebGL loaders
 * @template TUrl - The type of URL used to load resources
 */ class LoaderBaseWebGL extends __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$monogrid$2f$gainmap$2d$js$2f$dist$2f$Loader$2d$DLI$2d$_JDP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"] {
    constructor(renderer, manager){
        super({
            renderer,
            createMaterial: (params)=>new GainMapDecoderMaterial(params),
            createQuadRenderer: (params)=>new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$monogrid$2f$gainmap$2d$js$2f$dist$2f$QuadRenderer$2d$Bj1xl_EK$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Q"](params)
        }, manager);
    }
    /**
     * @private
     * @param quadRenderer
     * @param metadata
     * @param sdrBuffer
     * @param gainMapBuffer
     */ async render(quadRenderer, metadata, sdrBuffer, gainMapBuffer) {
        const { sdrImage, gainMapImage, needsFlip } = await this.processImages(sdrBuffer, gainMapBuffer, 'flipY');
        const { gainMap, sdr } = this.createTextures(sdrImage, gainMapImage, needsFlip);
        this.updateQuadRenderer(quadRenderer, sdrImage, gainMap, sdr, metadata);
        quadRenderer.render();
    }
}
/**
 * A Three.js Loader for the gain map format.
 *
 * @category Loaders
 * @group Loaders
 *
 * @example
 * import { GainMapLoader } from '@monogrid/gainmap-js'
 * import {
 *   EquirectangularReflectionMapping,
 *   Mesh,
 *   MeshBasicMaterial,
 *   PerspectiveCamera,
 *   PlaneGeometry,
 *   Scene,
 *   WebGLRenderer
 * } from 'three'
 *
 * const renderer = new WebGLRenderer()
 *
 * const loader = new GainMapLoader(renderer)
 *   .setRenderTargetOptions({ mapping: EquirectangularReflectionMapping })
 *
 * const result = await loader.loadAsync(['sdr.jpeg', 'gainmap.jpeg', 'metadata.json'])
 * // `result` can be used to populate a Texture
 *
 * const scene = new Scene()
 * const mesh = new Mesh(
 *   new PlaneGeometry(),
 *   new MeshBasicMaterial({ map: result.renderTarget.texture })
 * )
 * scene.add(mesh)
 * renderer.render(scene, new PerspectiveCamera())
 *
 * // Starting from three.js r159
 * // `result.renderTarget.texture` can
 * // also be used as Equirectangular scene background
 * //
 * // it was previously needed to convert it
 * // to a DataTexture with `result.toDataTexture()`
 * scene.background = result.renderTarget.texture
 *
 * // result must be manually disposed
 * // when you are done using it
 * result.dispose()
 *
 */ class GainMapLoader extends LoaderBaseWebGL {
    /**
     * Loads a gainmap using separate data
     * * sdr image
     * * gain map image
     * * metadata json
     *
     * useful for webp gain maps
     *
     * @param urls An array in the form of [sdr.jpg, gainmap.jpg, metadata.json]
     * @param onLoad Load complete callback, will receive the result
     * @param onProgress Progress callback, will receive a `ProgressEvent`
     * @param onError Error callback
     * @returns
     */ load([sdrUrl, gainMapUrl, metadataUrl], onLoad, onProgress, onError) {
        const quadRenderer = this.prepareQuadRenderer();
        let sdr;
        let gainMap;
        let metadata;
        const loadCheck = async ()=>{
            if (sdr && gainMap && metadata) {
                // solves #16
                try {
                    await this.render(quadRenderer, metadata, sdr, gainMap);
                } catch (error) {
                    this.manager.itemError(sdrUrl);
                    this.manager.itemError(gainMapUrl);
                    this.manager.itemError(metadataUrl);
                    if (typeof onError === 'function') onError(error);
                    quadRenderer.disposeOnDemandRenderer();
                    return;
                }
                if (typeof onLoad === 'function') onLoad(quadRenderer);
                this.manager.itemEnd(sdrUrl);
                this.manager.itemEnd(gainMapUrl);
                this.manager.itemEnd(metadataUrl);
                quadRenderer.disposeOnDemandRenderer();
            }
        };
        let sdrLengthComputable = true;
        let sdrTotal = 0;
        let sdrLoaded = 0;
        let gainMapLengthComputable = true;
        let gainMapTotal = 0;
        let gainMapLoaded = 0;
        let metadataLengthComputable = true;
        let metadataTotal = 0;
        let metadataLoaded = 0;
        const progressHandler = ()=>{
            if (typeof onProgress === 'function') {
                const total = sdrTotal + gainMapTotal + metadataTotal;
                const loaded = sdrLoaded + gainMapLoaded + metadataLoaded;
                const lengthComputable = sdrLengthComputable && gainMapLengthComputable && metadataLengthComputable;
                onProgress(new ProgressEvent('progress', {
                    lengthComputable,
                    loaded,
                    total
                }));
            }
        };
        this.manager.itemStart(sdrUrl);
        this.manager.itemStart(gainMapUrl);
        this.manager.itemStart(metadataUrl);
        const sdrLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileLoader"](this._internalLoadingManager);
        sdrLoader.setResponseType('arraybuffer');
        sdrLoader.setRequestHeader(this.requestHeader);
        sdrLoader.setPath(this.path);
        sdrLoader.setWithCredentials(this.withCredentials);
        sdrLoader.load(sdrUrl, async (buffer)=>{
            /* istanbul ignore if
             this condition exists only because of three.js types + strict mode
            */ if (typeof buffer === 'string') throw new Error('Invalid sdr buffer');
            sdr = buffer;
            await loadCheck();
        }, (e)=>{
            sdrLengthComputable = e.lengthComputable;
            sdrLoaded = e.loaded;
            sdrTotal = e.total;
            progressHandler();
        }, (error)=>{
            this.manager.itemError(sdrUrl);
            if (typeof onError === 'function') onError(error);
        });
        const gainMapLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileLoader"](this._internalLoadingManager);
        gainMapLoader.setResponseType('arraybuffer');
        gainMapLoader.setRequestHeader(this.requestHeader);
        gainMapLoader.setPath(this.path);
        gainMapLoader.setWithCredentials(this.withCredentials);
        gainMapLoader.load(gainMapUrl, async (buffer)=>{
            /* istanbul ignore if
             this condition exists only because of three.js types + strict mode
            */ if (typeof buffer === 'string') throw new Error('Invalid gainmap buffer');
            gainMap = buffer;
            await loadCheck();
        }, (e)=>{
            gainMapLengthComputable = e.lengthComputable;
            gainMapLoaded = e.loaded;
            gainMapTotal = e.total;
            progressHandler();
        }, (error)=>{
            this.manager.itemError(gainMapUrl);
            if (typeof onError === 'function') onError(error);
        });
        const metadataLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileLoader"](this._internalLoadingManager);
        // metadataLoader.setResponseType('json')
        metadataLoader.setRequestHeader(this.requestHeader);
        metadataLoader.setPath(this.path);
        metadataLoader.setWithCredentials(this.withCredentials);
        metadataLoader.load(metadataUrl, async (json)=>{
            /* istanbul ignore if
             this condition exists only because of three.js types + strict mode
            */ if (typeof json !== 'string') throw new Error('Invalid metadata string');
            // TODO: implement check on JSON file and remove this eslint disable
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            metadata = JSON.parse(json);
            await loadCheck();
        }, (e)=>{
            metadataLengthComputable = e.lengthComputable;
            metadataLoaded = e.loaded;
            metadataTotal = e.total;
            progressHandler();
        }, (error)=>{
            this.manager.itemError(metadataUrl);
            if (typeof onError === 'function') onError(error);
        });
        return quadRenderer;
    }
}
/**
 * A Three.js Loader for a JPEG with embedded gainmap metadata.
 *
 * @category Loaders
 * @group Loaders
 *
 * @example
 * import { HDRJPGLoader } from '@monogrid/gainmap-js'
 * import {
 *   EquirectangularReflectionMapping,
 *   Mesh,
 *   MeshBasicMaterial,
 *   PerspectiveCamera,
 *   PlaneGeometry,
 *   Scene,
 *   WebGLRenderer
 * } from 'three'
 *
 * const renderer = new WebGLRenderer()
 *
 * const loader = new HDRJPGLoader(renderer)
 *   .setRenderTargetOptions({ mapping: EquirectangularReflectionMapping })
 *
 * const result = await loader.loadAsync('gainmap.jpeg')
 * // `result` can be used to populate a Texture
 *
 * const scene = new Scene()
 * const mesh = new Mesh(
 *   new PlaneGeometry(),
 *   new MeshBasicMaterial({ map: result.renderTarget.texture })
 * )
 * scene.add(mesh)
 * renderer.render(scene, new PerspectiveCamera())
 *
 * // Starting from three.js r159
 * // `result.renderTarget.texture` can
 * // also be used as Equirectangular scene background
 * //
 * // it was previously needed to convert it
 * // to a DataTexture with `result.toDataTexture()`
 * scene.background = result.renderTarget.texture
 *
 * // result must be manually disposed
 * // when you are done using it
 * result.dispose()
 *
 */ class HDRJPGLoader extends LoaderBaseWebGL {
    /**
     * Loads a JPEG containing gain map metadata
     * Renders a normal SDR image if gainmap data is not found
     *
     * @param url Path to a JPEG file containing embedded gain map metadata
     * @param onLoad Load complete callback, will receive the result
     * @param onProgress Progress callback, will receive a `ProgressEvent`
     * @param onError Error callback
     * @returns
     */ load(url, onLoad, onProgress, onError) {
        const quadRenderer = this.prepareQuadRenderer();
        const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileLoader"](this._internalLoadingManager);
        loader.setResponseType('arraybuffer');
        loader.setRequestHeader(this.requestHeader);
        loader.setPath(this.path);
        loader.setWithCredentials(this.withCredentials);
        this.manager.itemStart(url);
        loader.load(url, async (jpeg)=>{
            /* istanbul ignore if
             this condition exists only because of three.js types + strict mode
            */ if (typeof jpeg === 'string') throw new Error('Invalid buffer, received [string], was expecting [ArrayBuffer]');
            const jpegBuffer = new Uint8Array(jpeg);
            let sdrJPEG;
            let gainMapJPEG;
            let metadata;
            try {
                const extractionResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$monogrid$2f$gainmap$2d$js$2f$dist$2f$Loader$2d$DLI$2d$_JDP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(jpegBuffer);
                // gain map is successfully reconstructed
                sdrJPEG = extractionResult.sdr;
                gainMapJPEG = extractionResult.gainMap;
                metadata = extractionResult.metadata;
            } catch (e) {
                // render the SDR version if this is not a gainmap
                if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$monogrid$2f$gainmap$2d$js$2f$dist$2f$Loader$2d$DLI$2d$_JDP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["X"] || e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$monogrid$2f$gainmap$2d$js$2f$dist$2f$Loader$2d$DLI$2d$_JDP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["G"]) {
                    console.warn(`Failure to reconstruct an HDR image from ${url}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`);
                    metadata = {
                        gainMapMin: [
                            0,
                            0,
                            0
                        ],
                        gainMapMax: [
                            1,
                            1,
                            1
                        ],
                        gamma: [
                            1,
                            1,
                            1
                        ],
                        hdrCapacityMin: 0,
                        hdrCapacityMax: 1,
                        offsetHdr: [
                            0,
                            0,
                            0
                        ],
                        offsetSdr: [
                            0,
                            0,
                            0
                        ]
                    };
                    sdrJPEG = jpegBuffer;
                } else {
                    throw e;
                }
            }
            // solves #16
            try {
                await this.render(quadRenderer, metadata, sdrJPEG.buffer, gainMapJPEG?.buffer);
            } catch (error) {
                this.manager.itemError(url);
                if (typeof onError === 'function') onError(error);
                quadRenderer.disposeOnDemandRenderer();
                return;
            }
            if (typeof onLoad === 'function') onLoad(quadRenderer);
            this.manager.itemEnd(url);
            quadRenderer.disposeOnDemandRenderer();
        }, onProgress, (error)=>{
            this.manager.itemError(url);
            if (typeof onError === 'function') onError(error);
        });
        return quadRenderer;
    }
}
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/troika-worker-utils/dist/troika-worker-utils.esm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Main content for the worker that handles the loading and execution of
 * modules within it.
 */ __turbopack_context__.s({
    "defineWorkerModule": (()=>defineWorkerModule),
    "stringifyFunction": (()=>stringifyFunction),
    "terminateWorker": (()=>terminateWorker)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function workerBootstrap() {
    var modules = Object.create(null);
    // Handle messages for registering a module
    function registerModule(ref, callback) {
        var id = ref.id;
        var name = ref.name;
        var dependencies = ref.dependencies;
        if (dependencies === void 0) dependencies = [];
        var init = ref.init;
        if (init === void 0) init = function() {};
        var getTransferables = ref.getTransferables;
        if (getTransferables === void 0) getTransferables = null;
        // Only register once
        if (modules[id]) {
            return;
        }
        try {
            // If any dependencies are modules, ensure they're registered and grab their value
            dependencies = dependencies.map(function(dep) {
                if (dep && dep.isWorkerModule) {
                    registerModule(dep, function(depResult) {
                        if (depResult instanceof Error) {
                            throw depResult;
                        }
                    });
                    dep = modules[dep.id].value;
                }
                return dep;
            });
            // Rehydrate functions
            init = rehydrate("<" + name + ">.init", init);
            if (getTransferables) {
                getTransferables = rehydrate("<" + name + ">.getTransferables", getTransferables);
            }
            // Initialize the module and store its value
            var value = null;
            if (typeof init === 'function') {
                value = init.apply(void 0, dependencies);
            } else {
                console.error('worker module init function failed to rehydrate');
            }
            modules[id] = {
                id: id,
                value: value,
                getTransferables: getTransferables
            };
            callback(value);
        } catch (err) {
            if (!(err && err.noLog)) {
                console.error(err);
            }
            callback(err);
        }
    }
    // Handle messages for calling a registered module's result function
    function callModule(ref, callback) {
        var ref$1;
        var id = ref.id;
        var args = ref.args;
        if (!modules[id] || typeof modules[id].value !== 'function') {
            callback(new Error("Worker module " + id + ": not found or its 'init' did not return a function"));
        }
        try {
            var result = (ref$1 = modules[id]).value.apply(ref$1, args);
            if (result && typeof result.then === 'function') {
                result.then(handleResult, function(rej) {
                    return callback(rej instanceof Error ? rej : new Error('' + rej));
                });
            } else {
                handleResult(result);
            }
        } catch (err) {
            callback(err);
        }
        function handleResult(result) {
            try {
                var tx = modules[id].getTransferables && modules[id].getTransferables(result);
                if (!tx || !Array.isArray(tx) || !tx.length) {
                    tx = undefined; //postMessage is very picky about not passing null or empty transferables
                }
                callback(result, tx);
            } catch (err) {
                console.error(err);
                callback(err);
            }
        }
    }
    function rehydrate(name, str) {
        var result = void 0;
        self.troikaDefine = function(r) {
            return result = r;
        };
        var url = URL.createObjectURL(new Blob([
            "/** " + name.replace(/\*/g, '') + " **/\n\ntroikaDefine(\n" + str + "\n)"
        ], {
            type: 'application/javascript'
        }));
        try {
            importScripts(url);
        } catch (err) {
            console.error(err);
        }
        URL.revokeObjectURL(url);
        delete self.troikaDefine;
        return result;
    }
    // Handler for all messages within the worker
    self.addEventListener('message', function(e) {
        var ref = e.data;
        var messageId = ref.messageId;
        var action = ref.action;
        var data = ref.data;
        try {
            // Module registration
            if (action === 'registerModule') {
                registerModule(data, function(result) {
                    if (result instanceof Error) {
                        postMessage({
                            messageId: messageId,
                            success: false,
                            error: result.message
                        });
                    } else {
                        postMessage({
                            messageId: messageId,
                            success: true,
                            result: {
                                isCallable: typeof result === 'function'
                            }
                        });
                    }
                });
            }
            // Invocation
            if (action === 'callModule') {
                callModule(data, function(result, transferables) {
                    if (result instanceof Error) {
                        postMessage({
                            messageId: messageId,
                            success: false,
                            error: result.message
                        });
                    } else {
                        postMessage({
                            messageId: messageId,
                            success: true,
                            result: result
                        }, transferables || undefined);
                    }
                });
            }
        } catch (err) {
            postMessage({
                messageId: messageId,
                success: false,
                error: err.stack
            });
        }
    });
}
/**
 * Fallback for `defineWorkerModule` that behaves identically but runs in the main
 * thread, for when the execution environment doesn't support web workers or they
 * are disallowed due to e.g. CSP security restrictions.
 */ function defineMainThreadModule(options) {
    var moduleFunc = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return moduleFunc._getInitResult().then(function(initResult) {
            if (typeof initResult === 'function') {
                return initResult.apply(void 0, args);
            } else {
                throw new Error('Worker module function was called but `init` did not return a callable function');
            }
        });
    };
    moduleFunc._getInitResult = function() {
        // We can ignore getTransferables in main thread. TODO workerId?
        var dependencies = options.dependencies;
        var init = options.init;
        // Resolve dependencies
        dependencies = Array.isArray(dependencies) ? dependencies.map(function(dep) {
            if (dep) {
                // If it's a worker module, use its main thread impl
                dep = dep.onMainThread || dep;
                // If it's a main thread worker module, use its init return value
                if (dep._getInitResult) {
                    dep = dep._getInitResult();
                }
            }
            return dep;
        }) : [];
        // Invoke init with the resolved dependencies
        var initPromise = Promise.all(dependencies).then(function(deps) {
            return init.apply(null, deps);
        });
        // Cache the resolved promise for subsequent calls
        moduleFunc._getInitResult = function() {
            return initPromise;
        };
        return initPromise;
    };
    return moduleFunc;
}
var supportsWorkers = function() {
    var supported = false;
    // Only attempt worker initialization in browsers; elsewhere it would just be
    // noise e.g. loading into a Node environment for SSR.
    if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
        try {
            // TODO additional checks for things like importScripts within the worker?
            //  Would need to be an async check.
            var worker = new Worker(URL.createObjectURL(new Blob([
                ''
            ], {
                type: 'application/javascript'
            })));
            worker.terminate();
            supported = true;
        } catch (err) {
            if ("TURBOPACK compile-time falsy", 0) ;
            else {
                console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: [" + err.message + "]");
            }
        }
    }
    // Cached result
    supportsWorkers = function() {
        return supported;
    };
    return supported;
};
var _workerModuleId = 0;
var _messageId = 0;
var _allowInitAsString = false;
var workers = Object.create(null);
var registeredModules = Object.create(null); //workerId -> Set<unregisterFn>
var openRequests = Object.create(null);
/**
 * Define a module of code that will be executed with a web worker. This provides a simple
 * interface for moving chunks of logic off the main thread, and managing their dependencies
 * among one another.
 *
 * @param {object} options
 * @param {function} options.init
 * @param {array} [options.dependencies]
 * @param {function} [options.getTransferables]
 * @param {string} [options.name]
 * @param {string} [options.workerId]
 * @return {function(...[*]): {then}}
 */ function defineWorkerModule(options) {
    if ((!options || typeof options.init !== 'function') && !_allowInitAsString) {
        throw new Error('requires `options.init` function');
    }
    var dependencies = options.dependencies;
    var init = options.init;
    var getTransferables = options.getTransferables;
    var workerId = options.workerId;
    var onMainThread = defineMainThreadModule(options);
    if (workerId == null) {
        workerId = '#default';
    }
    var id = "workerModule" + ++_workerModuleId;
    var name = options.name || id;
    var registrationPromise = null;
    dependencies = dependencies && dependencies.map(function(dep) {
        // Wrap raw functions as worker modules with no dependencies
        if (typeof dep === 'function' && !dep.workerModuleData) {
            _allowInitAsString = true;
            dep = defineWorkerModule({
                workerId: workerId,
                name: "<" + name + "> function dependency: " + dep.name,
                init: "function(){return (\n" + stringifyFunction(dep) + "\n)}"
            });
            _allowInitAsString = false;
        }
        // Grab postable data for worker modules
        if (dep && dep.workerModuleData) {
            dep = dep.workerModuleData;
        }
        return dep;
    });
    function moduleFunc() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        if (!supportsWorkers()) {
            return onMainThread.apply(void 0, args);
        }
        // Register this module if needed
        if (!registrationPromise) {
            registrationPromise = callWorker(workerId, 'registerModule', moduleFunc.workerModuleData);
            var unregister = function() {
                registrationPromise = null;
                registeredModules[workerId].delete(unregister);
            };
            (registeredModules[workerId] || (registeredModules[workerId] = new Set())).add(unregister);
        }
        // Invoke the module, returning a promise
        return registrationPromise.then(function(ref) {
            var isCallable = ref.isCallable;
            if (isCallable) {
                return callWorker(workerId, 'callModule', {
                    id: id,
                    args: args
                });
            } else {
                throw new Error('Worker module function was called but `init` did not return a callable function');
            }
        });
    }
    moduleFunc.workerModuleData = {
        isWorkerModule: true,
        id: id,
        name: name,
        dependencies: dependencies,
        init: stringifyFunction(init),
        getTransferables: getTransferables && stringifyFunction(getTransferables)
    };
    moduleFunc.onMainThread = onMainThread;
    return moduleFunc;
}
/**
 * Terminate an active Worker by a workerId that was passed to defineWorkerModule.
 * This only terminates the Worker itself; the worker module will remain available
 * and if you call it again its Worker will be respawned.
 * @param {string} workerId
 */ function terminateWorker(workerId) {
    // Unregister all modules that were registered in that worker
    if (registeredModules[workerId]) {
        registeredModules[workerId].forEach(function(unregister) {
            unregister();
        });
    }
    // Terminate the Worker object
    if (workers[workerId]) {
        workers[workerId].terminate();
        delete workers[workerId];
    }
}
/**
 * Stringifies a function into a form that can be deserialized in the worker
 * @param fn
 */ function stringifyFunction(fn) {
    var str = fn.toString();
    // If it was defined in object method/property format, it needs to be modified
    if (!/^function/.test(str) && /^\w+\s*\(/.test(str)) {
        str = 'function ' + str;
    }
    return str;
}
function getWorker(workerId) {
    var worker = workers[workerId];
    if (!worker) {
        // Bootstrap the worker's content
        var bootstrap = stringifyFunction(workerBootstrap);
        // Create the worker from the bootstrap function content
        worker = workers[workerId] = new Worker(URL.createObjectURL(new Blob([
            "/** Worker Module Bootstrap: " + workerId.replace(/\*/g, '') + " **/\n\n;(" + bootstrap + ")()"
        ], {
            type: 'application/javascript'
        })));
        // Single handler for response messages from the worker
        worker.onmessage = function(e) {
            var response = e.data;
            var msgId = response.messageId;
            var callback = openRequests[msgId];
            if (!callback) {
                throw new Error('WorkerModule response with empty or unknown messageId');
            }
            delete openRequests[msgId];
            callback(response);
        };
    }
    return worker;
}
// Issue a call to the worker with a callback to handle the response
function callWorker(workerId, action, data) {
    return new Promise(function(resolve, reject) {
        var messageId = ++_messageId;
        openRequests[messageId] = function(response) {
            if (response.success) {
                resolve(response.result);
            } else {
                reject(new Error("Error in worker " + action + " call: " + response.error));
            }
        };
        getWorker(workerId).postMessage({
            messageId: messageId,
            action: action,
            data: data
        });
    });
}
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/webgl-sdf-generator/dist/webgl-sdf-generator.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SDFGenerator)
});
function SDFGenerator() {
    var exports = function(exports) {
        /**
   * Find the point on a quadratic bezier curve at t where t is in the range [0, 1]
   */ function pointOnQuadraticBezier(x0, y0, x1, y1, x2, y2, t, pointOut) {
            var t2 = 1 - t;
            pointOut.x = t2 * t2 * x0 + 2 * t2 * t * x1 + t * t * x2;
            pointOut.y = t2 * t2 * y0 + 2 * t2 * t * y1 + t * t * y2;
        }
        /**
   * Find the point on a cubic bezier curve at t where t is in the range [0, 1]
   */ function pointOnCubicBezier(x0, y0, x1, y1, x2, y2, x3, y3, t, pointOut) {
            var t2 = 1 - t;
            pointOut.x = t2 * t2 * t2 * x0 + 3 * t2 * t2 * t * x1 + 3 * t2 * t * t * x2 + t * t * t * x3;
            pointOut.y = t2 * t2 * t2 * y0 + 3 * t2 * t2 * t * y1 + 3 * t2 * t * t * y2 + t * t * t * y3;
        }
        /**
   * Parse a path string into its constituent line/curve commands, invoking a callback for each.
   * @param {string} pathString - An SVG-like path string to parse; should only contain commands: M/L/Q/C/Z
   * @param {function(
   *   command: 'L'|'Q'|'C',
   *   startX: number,
   *   startY: number,
   *   endX: number,
   *   endY: number,
   *   ctrl1X?: number,
   *   ctrl1Y?: number,
   *   ctrl2X?: number,
   *   ctrl2Y?: number
   * )} commandCallback - A callback function that will be called once for each parsed path command, passing the
   *                      command identifier (only L/Q/C commands) and its numeric arguments.
   */ function forEachPathCommand(pathString, commandCallback) {
            var segmentRE = /([MLQCZ])([^MLQCZ]*)/g;
            var match, firstX, firstY, prevX, prevY;
            while(match = segmentRE.exec(pathString)){
                var args = match[2].replace(/^\s*|\s*$/g, '').split(/[,\s]+/).map(function(v) {
                    return parseFloat(v);
                });
                switch(match[1]){
                    case 'M':
                        prevX = firstX = args[0];
                        prevY = firstY = args[1];
                        break;
                    case 'L':
                        if (args[0] !== prevX || args[1] !== prevY) {
                            commandCallback('L', prevX, prevY, prevX = args[0], prevY = args[1]);
                        }
                        break;
                    case 'Q':
                        {
                            commandCallback('Q', prevX, prevY, prevX = args[2], prevY = args[3], args[0], args[1]);
                            break;
                        }
                    case 'C':
                        {
                            commandCallback('C', prevX, prevY, prevX = args[4], prevY = args[5], args[0], args[1], args[2], args[3]);
                            break;
                        }
                    case 'Z':
                        if (prevX !== firstX || prevY !== firstY) {
                            commandCallback('L', prevX, prevY, firstX, firstY);
                        }
                        break;
                }
            }
        }
        /**
   * Convert a path string to a series of straight line segments
   * @param {string} pathString - An SVG-like path string to parse; should only contain commands: M/L/Q/C/Z
   * @param {function(x1:number, y1:number, x2:number, y2:number)} segmentCallback - A callback
   *        function that will be called once for every line segment
   * @param {number} [curvePoints] - How many straight line segments to use when approximating a
   *        bezier curve in the path. Defaults to 16.
   */ function pathToLineSegments(pathString, segmentCallback, curvePoints) {
            if (curvePoints === void 0) curvePoints = 16;
            var tempPoint = {
                x: 0,
                y: 0
            };
            forEachPathCommand(pathString, function(command, startX, startY, endX, endY, ctrl1X, ctrl1Y, ctrl2X, ctrl2Y) {
                switch(command){
                    case 'L':
                        segmentCallback(startX, startY, endX, endY);
                        break;
                    case 'Q':
                        {
                            var prevCurveX = startX;
                            var prevCurveY = startY;
                            for(var i = 1; i < curvePoints; i++){
                                pointOnQuadraticBezier(startX, startY, ctrl1X, ctrl1Y, endX, endY, i / (curvePoints - 1), tempPoint);
                                segmentCallback(prevCurveX, prevCurveY, tempPoint.x, tempPoint.y);
                                prevCurveX = tempPoint.x;
                                prevCurveY = tempPoint.y;
                            }
                            break;
                        }
                    case 'C':
                        {
                            var prevCurveX$1 = startX;
                            var prevCurveY$1 = startY;
                            for(var i$1 = 1; i$1 < curvePoints; i$1++){
                                pointOnCubicBezier(startX, startY, ctrl1X, ctrl1Y, ctrl2X, ctrl2Y, endX, endY, i$1 / (curvePoints - 1), tempPoint);
                                segmentCallback(prevCurveX$1, prevCurveY$1, tempPoint.x, tempPoint.y);
                                prevCurveX$1 = tempPoint.x;
                                prevCurveY$1 = tempPoint.y;
                            }
                            break;
                        }
                }
            });
        }
        var viewportQuadVertex = "precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}";
        var copyTexFragment = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}";
        var cache = new WeakMap();
        var glContextParams = {
            premultipliedAlpha: false,
            preserveDrawingBuffer: true,
            antialias: false,
            depth: false
        };
        /**
   * This is a little helper library for WebGL. It assists with state management for a GL context.
   * It's pretty tightly wrapped to the needs of this package, not very general-purpose.
   *
   * @param { WebGLRenderingContext | HTMLCanvasElement | OffscreenCanvas } glOrCanvas - the GL context to wrap
   * @param { ({gl, getExtension, withProgram, withTexture, withTextureFramebuffer, handleContextLoss}) => void } callback
   */ function withWebGLContext(glOrCanvas, callback) {
            var gl = glOrCanvas.getContext ? glOrCanvas.getContext('webgl', glContextParams) : glOrCanvas;
            var wrapper = cache.get(gl);
            if (!wrapper) {
                var isWebGL2 = typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext;
                var extensions = {};
                var programs = {};
                var textures = {};
                var textureUnit = -1;
                var framebufferStack = [];
                gl.canvas.addEventListener('webglcontextlost', function(e) {
                    handleContextLoss();
                    e.preventDefault();
                }, false);
                function getExtension(name) {
                    var ext = extensions[name];
                    if (!ext) {
                        ext = extensions[name] = gl.getExtension(name);
                        if (!ext) {
                            throw new Error(name + " not supported");
                        }
                    }
                    return ext;
                }
                function compileShader(src, type) {
                    var shader = gl.createShader(type);
                    gl.shaderSource(shader, src);
                    gl.compileShader(shader);
                    // const status = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
                    // if (!status && !gl.isContextLost()) {
                    //   throw new Error(gl.getShaderInfoLog(shader).trim())
                    // }
                    return shader;
                }
                function withProgram(name, vert, frag, func) {
                    if (!programs[name]) {
                        var attributes = {};
                        var uniforms = {};
                        var program = gl.createProgram();
                        gl.attachShader(program, compileShader(vert, gl.VERTEX_SHADER));
                        gl.attachShader(program, compileShader(frag, gl.FRAGMENT_SHADER));
                        gl.linkProgram(program);
                        programs[name] = {
                            program: program,
                            transaction: function transaction(func) {
                                gl.useProgram(program);
                                func({
                                    setUniform: function setUniform(type, name) {
                                        var values = [], len = arguments.length - 2;
                                        while(len-- > 0)values[len] = arguments[len + 2];
                                        var uniformLoc = uniforms[name] || (uniforms[name] = gl.getUniformLocation(program, name));
                                        gl["uniform" + type].apply(gl, [
                                            uniformLoc
                                        ].concat(values));
                                    },
                                    setAttribute: function setAttribute(name, size, usage, instancingDivisor, data) {
                                        var attr = attributes[name];
                                        if (!attr) {
                                            attr = attributes[name] = {
                                                buf: gl.createBuffer(),
                                                loc: gl.getAttribLocation(program, name),
                                                data: null
                                            };
                                        }
                                        gl.bindBuffer(gl.ARRAY_BUFFER, attr.buf);
                                        gl.vertexAttribPointer(attr.loc, size, gl.FLOAT, false, 0, 0);
                                        gl.enableVertexAttribArray(attr.loc);
                                        if (isWebGL2) {
                                            gl.vertexAttribDivisor(attr.loc, instancingDivisor);
                                        } else {
                                            getExtension('ANGLE_instanced_arrays').vertexAttribDivisorANGLE(attr.loc, instancingDivisor);
                                        }
                                        if (data !== attr.data) {
                                            gl.bufferData(gl.ARRAY_BUFFER, data, usage);
                                            attr.data = data;
                                        }
                                    }
                                });
                            }
                        };
                    }
                    programs[name].transaction(func);
                }
                function withTexture(name, func) {
                    textureUnit++;
                    try {
                        gl.activeTexture(gl.TEXTURE0 + textureUnit);
                        var texture = textures[name];
                        if (!texture) {
                            texture = textures[name] = gl.createTexture();
                            gl.bindTexture(gl.TEXTURE_2D, texture);
                            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                        }
                        gl.bindTexture(gl.TEXTURE_2D, texture);
                        func(texture, textureUnit);
                    } finally{
                        textureUnit--;
                    }
                }
                function withTextureFramebuffer(texture, textureUnit, func) {
                    var framebuffer = gl.createFramebuffer();
                    framebufferStack.push(framebuffer);
                    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
                    gl.activeTexture(gl.TEXTURE0 + textureUnit);
                    gl.bindTexture(gl.TEXTURE_2D, texture);
                    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
                    try {
                        func(framebuffer);
                    } finally{
                        gl.deleteFramebuffer(framebuffer);
                        gl.bindFramebuffer(gl.FRAMEBUFFER, framebufferStack[--framebufferStack.length - 1] || null);
                    }
                }
                function handleContextLoss() {
                    extensions = {};
                    programs = {};
                    textures = {};
                    textureUnit = -1;
                    framebufferStack.length = 0;
                }
                cache.set(gl, wrapper = {
                    gl: gl,
                    isWebGL2: isWebGL2,
                    getExtension: getExtension,
                    withProgram: withProgram,
                    withTexture: withTexture,
                    withTextureFramebuffer: withTextureFramebuffer,
                    handleContextLoss: handleContextLoss
                });
            }
            callback(wrapper);
        }
        function renderImageData(glOrCanvas, imageData, x, y, width, height, channels, framebuffer) {
            if (channels === void 0) channels = 15;
            if (framebuffer === void 0) framebuffer = null;
            withWebGLContext(glOrCanvas, function(ref) {
                var gl = ref.gl;
                var withProgram = ref.withProgram;
                var withTexture = ref.withTexture;
                withTexture('copy', function(tex, texUnit) {
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, imageData);
                    withProgram('copy', viewportQuadVertex, copyTexFragment, function(ref) {
                        var setUniform = ref.setUniform;
                        var setAttribute = ref.setAttribute;
                        setAttribute('aUV', 2, gl.STATIC_DRAW, 0, new Float32Array([
                            0,
                            0,
                            2,
                            0,
                            0,
                            2
                        ]));
                        setUniform('1i', 'image', texUnit);
                        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer || null);
                        gl.disable(gl.BLEND);
                        gl.colorMask(channels & 8, channels & 4, channels & 2, channels & 1);
                        gl.viewport(x, y, width, height);
                        gl.scissor(x, y, width, height);
                        gl.drawArrays(gl.TRIANGLES, 0, 3);
                    });
                });
            });
        }
        /**
   * Resizing a canvas clears its contents; this utility copies the previous contents over.
   * @param canvas
   * @param newWidth
   * @param newHeight
   */ function resizeWebGLCanvasWithoutClearing(canvas, newWidth, newHeight) {
            var width = canvas.width;
            var height = canvas.height;
            withWebGLContext(canvas, function(ref) {
                var gl = ref.gl;
                var data = new Uint8Array(width * height * 4);
                gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, data);
                canvas.width = newWidth;
                canvas.height = newHeight;
                renderImageData(gl, data, 0, 0, width, height);
            });
        }
        var webglUtils = /*#__PURE__*/ Object.freeze({
            __proto__: null,
            withWebGLContext: withWebGLContext,
            renderImageData: renderImageData,
            resizeWebGLCanvasWithoutClearing: resizeWebGLCanvasWithoutClearing
        });
        function generate$2(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent) {
            if (sdfExponent === void 0) sdfExponent = 1;
            var textureData = new Uint8Array(sdfWidth * sdfHeight);
            var viewBoxWidth = viewBox[2] - viewBox[0];
            var viewBoxHeight = viewBox[3] - viewBox[1];
            // Decompose all paths into straight line segments and add them to an index
            var segments = [];
            pathToLineSegments(path, function(x1, y1, x2, y2) {
                segments.push({
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2,
                    minX: Math.min(x1, x2),
                    minY: Math.min(y1, y2),
                    maxX: Math.max(x1, x2),
                    maxY: Math.max(y1, y2)
                });
            });
            // Sort segments by maxX, this will let us short-circuit some loops below
            segments.sort(function(a, b) {
                return a.maxX - b.maxX;
            });
            // For each target SDF texel, find the distance from its center to its nearest line segment,
            // map that distance to an alpha value, and write that alpha to the texel
            for(var sdfX = 0; sdfX < sdfWidth; sdfX++){
                for(var sdfY = 0; sdfY < sdfHeight; sdfY++){
                    var signedDist = findNearestSignedDistance(viewBox[0] + viewBoxWidth * (sdfX + 0.5) / sdfWidth, viewBox[1] + viewBoxHeight * (sdfY + 0.5) / sdfHeight);
                    // Use an exponential scale to ensure the texels very near the glyph path have adequate
                    // precision, while allowing the distance field to cover the entire texture, given that
                    // there are only 8 bits available. Formula visualized: https://www.desmos.com/calculator/uiaq5aqiam
                    var alpha = Math.pow(1 - Math.abs(signedDist) / maxDistance, sdfExponent) / 2;
                    if (signedDist < 0) {
                        alpha = 1 - alpha;
                    }
                    alpha = Math.max(0, Math.min(255, Math.round(alpha * 255))); //clamp
                    textureData[sdfY * sdfWidth + sdfX] = alpha;
                }
            }
            return textureData;
            "TURBOPACK unreachable";
            /**
     * For a given x/y, search the index for the closest line segment and return
     * its signed distance. Negative = inside, positive = outside, zero = on edge
     * @param x
     * @param y
     * @returns {number}
     */ function findNearestSignedDistance(x, y) {
                var closestDistSq = Infinity;
                var closestDist = Infinity;
                for(var i = segments.length; i--;){
                    var seg = segments[i];
                    if (seg.maxX + closestDist <= x) {
                        break;
                    } //sorting by maxX means no more can be closer, so we can short-circuit
                    if (x + closestDist > seg.minX && y - closestDist < seg.maxY && y + closestDist > seg.minY) {
                        var distSq = absSquareDistanceToLineSegment(x, y, seg.x1, seg.y1, seg.x2, seg.y2);
                        if (distSq < closestDistSq) {
                            closestDistSq = distSq;
                            closestDist = Math.sqrt(closestDistSq);
                        }
                    }
                }
                // Flip to negative distance if inside the poly
                if (isPointInPoly(x, y)) {
                    closestDist = -closestDist;
                }
                return closestDist;
            }
            /**
     * Determine whether the given point lies inside or outside the glyph. Uses a simple
     * winding-number ray casting algorithm using a ray pointing east from the point.
     */ function isPointInPoly(x, y) {
                var winding = 0;
                for(var i = segments.length; i--;){
                    var seg = segments[i];
                    if (seg.maxX <= x) {
                        break;
                    } //sorting by maxX means no more can cross, so we can short-circuit
                    var intersects = seg.y1 > y !== seg.y2 > y && x < (seg.x2 - seg.x1) * (y - seg.y1) / (seg.y2 - seg.y1) + seg.x1;
                    if (intersects) {
                        winding += seg.y1 < seg.y2 ? 1 : -1;
                    }
                }
                return winding !== 0;
            }
        }
        function generateIntoCanvas$2(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, x, y, channel) {
            if (sdfExponent === void 0) sdfExponent = 1;
            if (x === void 0) x = 0;
            if (y === void 0) y = 0;
            if (channel === void 0) channel = 0;
            generateIntoFramebuffer$1(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, null, x, y, channel);
        }
        function generateIntoFramebuffer$1(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, glOrCanvas, framebuffer, x, y, channel) {
            if (sdfExponent === void 0) sdfExponent = 1;
            if (x === void 0) x = 0;
            if (y === void 0) y = 0;
            if (channel === void 0) channel = 0;
            var data = generate$2(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent);
            // Expand single-channel data to rbga
            var rgbaData = new Uint8Array(data.length * 4);
            for(var i = 0; i < data.length; i++){
                rgbaData[i * 4 + channel] = data[i];
            }
            renderImageData(glOrCanvas, rgbaData, x, y, sdfWidth, sdfHeight, 1 << 3 - channel, framebuffer);
        }
        /**
   * Find the absolute distance from a point to a line segment at closest approach
   */ function absSquareDistanceToLineSegment(x, y, lineX0, lineY0, lineX1, lineY1) {
            var ldx = lineX1 - lineX0;
            var ldy = lineY1 - lineY0;
            var lengthSq = ldx * ldx + ldy * ldy;
            var t = lengthSq ? Math.max(0, Math.min(1, ((x - lineX0) * ldx + (y - lineY0) * ldy) / lengthSq)) : 0;
            var dx = x - (lineX0 + t * ldx);
            var dy = y - (lineY0 + t * ldy);
            return dx * dx + dy * dy;
        }
        var javascript = /*#__PURE__*/ Object.freeze({
            __proto__: null,
            generate: generate$2,
            generateIntoCanvas: generateIntoCanvas$2,
            generateIntoFramebuffer: generateIntoFramebuffer$1
        });
        var mainVertex = "precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}";
        var mainFragment = "precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}";
        var postFragment = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}";
        // Single triangle covering viewport
        var viewportUVs = new Float32Array([
            0,
            0,
            2,
            0,
            0,
            2
        ]);
        var implicitContext = null;
        var isTestingSupport = false;
        var NULL_OBJECT = {};
        var supportByCanvas = new WeakMap(); // canvas -> bool
        function validateSupport(glOrCanvas) {
            if (!isTestingSupport && !isSupported(glOrCanvas)) {
                throw new Error('WebGL generation not supported');
            }
        }
        function generate$1(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, glOrCanvas) {
            if (sdfExponent === void 0) sdfExponent = 1;
            if (glOrCanvas === void 0) glOrCanvas = null;
            if (!glOrCanvas) {
                glOrCanvas = implicitContext;
                if (!glOrCanvas) {
                    var canvas = typeof OffscreenCanvas === 'function' ? new OffscreenCanvas(1, 1) : typeof document !== 'undefined' ? document.createElement('canvas') : null;
                    if (!canvas) {
                        throw new Error('OffscreenCanvas or DOM canvas not supported');
                    }
                    glOrCanvas = implicitContext = canvas.getContext('webgl', {
                        depth: false
                    });
                }
            }
            validateSupport(glOrCanvas);
            var rgbaData = new Uint8Array(sdfWidth * sdfHeight * 4); //not Uint8ClampedArray, cuz Safari
            // Render into a background texture framebuffer
            withWebGLContext(glOrCanvas, function(ref) {
                var gl = ref.gl;
                var withTexture = ref.withTexture;
                var withTextureFramebuffer = ref.withTextureFramebuffer;
                withTexture('readable', function(texture, textureUnit) {
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, sdfWidth, sdfHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
                    withTextureFramebuffer(texture, textureUnit, function(framebuffer) {
                        generateIntoFramebuffer(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, gl, framebuffer, 0, 0, 0 // red channel
                        );
                        gl.readPixels(0, 0, sdfWidth, sdfHeight, gl.RGBA, gl.UNSIGNED_BYTE, rgbaData);
                    });
                });
            });
            // Throw away all but the red channel
            var data = new Uint8Array(sdfWidth * sdfHeight);
            for(var i = 0, j = 0; i < rgbaData.length; i += 4){
                data[j++] = rgbaData[i];
            }
            return data;
        }
        function generateIntoCanvas$1(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, x, y, channel) {
            if (sdfExponent === void 0) sdfExponent = 1;
            if (x === void 0) x = 0;
            if (y === void 0) y = 0;
            if (channel === void 0) channel = 0;
            generateIntoFramebuffer(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, null, x, y, channel);
        }
        function generateIntoFramebuffer(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, glOrCanvas, framebuffer, x, y, channel) {
            if (sdfExponent === void 0) sdfExponent = 1;
            if (x === void 0) x = 0;
            if (y === void 0) y = 0;
            if (channel === void 0) channel = 0;
            // Verify support
            validateSupport(glOrCanvas);
            // Compute path segments
            var lineSegmentCoords = [];
            pathToLineSegments(path, function(x1, y1, x2, y2) {
                lineSegmentCoords.push(x1, y1, x2, y2);
            });
            lineSegmentCoords = new Float32Array(lineSegmentCoords);
            withWebGLContext(glOrCanvas, function(ref) {
                var gl = ref.gl;
                var isWebGL2 = ref.isWebGL2;
                var getExtension = ref.getExtension;
                var withProgram = ref.withProgram;
                var withTexture = ref.withTexture;
                var withTextureFramebuffer = ref.withTextureFramebuffer;
                var handleContextLoss = ref.handleContextLoss;
                withTexture('rawDistances', function(intermediateTexture, intermediateTextureUnit) {
                    if (sdfWidth !== intermediateTexture._lastWidth || sdfHeight !== intermediateTexture._lastHeight) {
                        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, intermediateTexture._lastWidth = sdfWidth, intermediateTexture._lastHeight = sdfHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
                    }
                    // Unsigned distance pass
                    withProgram('main', mainVertex, mainFragment, function(ref) {
                        var setAttribute = ref.setAttribute;
                        var setUniform = ref.setUniform;
                        // Init extensions
                        var instancingExtension = !isWebGL2 && getExtension('ANGLE_instanced_arrays');
                        var blendMinMaxExtension = !isWebGL2 && getExtension('EXT_blend_minmax');
                        // Init/update attributes
                        setAttribute('aUV', 2, gl.STATIC_DRAW, 0, viewportUVs);
                        setAttribute('aLineSegment', 4, gl.DYNAMIC_DRAW, 1, lineSegmentCoords);
                        // Init/update uniforms
                        setUniform.apply(void 0, [
                            '4f',
                            'uGlyphBounds'
                        ].concat(viewBox));
                        setUniform('1f', 'uMaxDistance', maxDistance);
                        setUniform('1f', 'uExponent', sdfExponent);
                        // Render initial unsigned distance / winding number info to a texture
                        withTextureFramebuffer(intermediateTexture, intermediateTextureUnit, function(framebuffer) {
                            gl.enable(gl.BLEND);
                            gl.colorMask(true, true, true, true);
                            gl.viewport(0, 0, sdfWidth, sdfHeight);
                            gl.scissor(0, 0, sdfWidth, sdfHeight);
                            gl.blendFunc(gl.ONE, gl.ONE);
                            // Red+Green channels are incremented (FUNC_ADD) for segment-ray crossings to give a "winding number".
                            // Alpha holds the closest (MAX) unsigned distance.
                            gl.blendEquationSeparate(gl.FUNC_ADD, isWebGL2 ? gl.MAX : blendMinMaxExtension.MAX_EXT);
                            gl.clear(gl.COLOR_BUFFER_BIT);
                            if (isWebGL2) {
                                gl.drawArraysInstanced(gl.TRIANGLES, 0, 3, lineSegmentCoords.length / 4);
                            } else {
                                instancingExtension.drawArraysInstancedANGLE(gl.TRIANGLES, 0, 3, lineSegmentCoords.length / 4);
                            }
                        // Debug
                        // const debug = new Uint8Array(sdfWidth * sdfHeight * 4)
                        // gl.readPixels(0, 0, sdfWidth, sdfHeight, gl.RGBA, gl.UNSIGNED_BYTE, debug)
                        // console.log('intermediate texture data: ', debug)
                        });
                    });
                    // Use the data stored in the texture to apply inside/outside and write to the output framebuffer rect+channel.
                    withProgram('post', viewportQuadVertex, postFragment, function(program) {
                        program.setAttribute('aUV', 2, gl.STATIC_DRAW, 0, viewportUVs);
                        program.setUniform('1i', 'tex', intermediateTextureUnit);
                        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
                        gl.disable(gl.BLEND);
                        gl.colorMask(channel === 0, channel === 1, channel === 2, channel === 3);
                        gl.viewport(x, y, sdfWidth, sdfHeight);
                        gl.scissor(x, y, sdfWidth, sdfHeight);
                        gl.drawArrays(gl.TRIANGLES, 0, 3);
                    });
                });
                // Handle context loss occurring during any of the above calls
                if (gl.isContextLost()) {
                    handleContextLoss();
                    throw new Error('webgl context lost');
                }
            });
        }
        function isSupported(glOrCanvas) {
            var key = !glOrCanvas || glOrCanvas === implicitContext ? NULL_OBJECT : glOrCanvas.canvas || glOrCanvas;
            var supported = supportByCanvas.get(key);
            if (supported === undefined) {
                isTestingSupport = true;
                var failReason = null;
                try {
                    // Since we can't detect all failure modes up front, let's just do a trial run of a
                    // simple path and compare what we get back to the correct expected result. This will
                    // also serve to prime the shader compilation.
                    var expectedResult = [
                        97,
                        106,
                        97,
                        61,
                        99,
                        137,
                        118,
                        80,
                        80,
                        118,
                        137,
                        99,
                        61,
                        97,
                        106,
                        97
                    ];
                    var testResult = generate$1(4, 4, 'M8,8L16,8L24,24L16,24Z', [
                        0,
                        0,
                        32,
                        32
                    ], 24, 1, glOrCanvas);
                    supported = testResult && expectedResult.length === testResult.length && testResult.every(function(val, i) {
                        return val === expectedResult[i];
                    });
                    if (!supported) {
                        failReason = 'bad trial run results';
                        console.info(expectedResult, testResult);
                    }
                } catch (err) {
                    // TODO if it threw due to webgl context loss, should we maybe leave isSupported as null and try again later?
                    supported = false;
                    failReason = err.message;
                }
                if (failReason) {
                    console.warn('WebGL SDF generation not supported:', failReason);
                }
                isTestingSupport = false;
                supportByCanvas.set(key, supported);
            }
            return supported;
        }
        var webgl = /*#__PURE__*/ Object.freeze({
            __proto__: null,
            generate: generate$1,
            generateIntoCanvas: generateIntoCanvas$1,
            generateIntoFramebuffer: generateIntoFramebuffer,
            isSupported: isSupported
        });
        /**
   * Generate an SDF texture image for a 2D path.
   *
   * @param {number} sdfWidth - width of the SDF output image in pixels.
   * @param {number} sdfHeight - height of the SDF output image in pixels.
   * @param {string} path - an SVG-like path string describing the glyph; should only contain commands: M/L/Q/C/Z.
   * @param {number[]} viewBox - [minX, minY, maxX, maxY] in font units aligning with the texture's edges.
   * @param {number} maxDistance - the maximum distance from the glyph path in font units that will be encoded; defaults
   *        to half the maximum viewBox dimension.
   * @param {number} [sdfExponent] - specifies an exponent for encoding the SDF's distance values; higher exponents
   *        will give greater precision nearer the glyph's path.
   * @return {Uint8Array}
   */ function generate(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent) {
            if (maxDistance === void 0) maxDistance = Math.max(viewBox[2] - viewBox[0], viewBox[3] - viewBox[1]) / 2;
            if (sdfExponent === void 0) sdfExponent = 1;
            try {
                return generate$1.apply(webgl, arguments);
            } catch (e) {
                console.info('WebGL SDF generation failed, falling back to JS', e);
                return generate$2.apply(javascript, arguments);
            }
        }
        /**
   * Generate an SDF texture image for a 2D path, inserting the result into a WebGL `canvas` at a given x/y position
   * and color channel. This is generally much faster than calling `generate` because it does not require reading pixels
   * back from the GPU->CPU -- the `canvas` can be used directly as a WebGL texture image, so it all stays on the GPU.
   *
   * @param {number} sdfWidth - width of the SDF output image in pixels.
   * @param {number} sdfHeight - height of the SDF output image in pixels.
   * @param {string} path - an SVG-like path string describing the glyph; should only contain commands: M/L/Q/C/Z.
   * @param {number[]} viewBox - [minX, minY, maxX, maxY] in font units aligning with the texture's edges.
   * @param {number} maxDistance - the maximum distance from the glyph path in font units that will be encoded; defaults
   *        to half the maximum viewBox dimension.
   * @param {number} [sdfExponent] - specifies an exponent for encoding the SDF's distance values; higher exponents
   *        will give greater precision nearer the glyph's path.
   * @param {HTMLCanvasElement|OffscreenCanvas} canvas - a WebGL-enabled canvas into which the SDF will be rendered.
   *        Only the relevant rect/channel will be modified, the rest will be preserved. To avoid unpredictable results
   *        due to shared GL context state, this canvas should be dedicated to use by this library alone.
   * @param {number} x - the x position at which to render the SDF.
   * @param {number} y - the y position at which to render the SDF.
   * @param {number} channel - the color channel index (0-4) into which the SDF will be rendered.
   * @return {Uint8Array}
   */ function generateIntoCanvas(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, x, y, channel) {
            if (maxDistance === void 0) maxDistance = Math.max(viewBox[2] - viewBox[0], viewBox[3] - viewBox[1]) / 2;
            if (sdfExponent === void 0) sdfExponent = 1;
            if (x === void 0) x = 0;
            if (y === void 0) y = 0;
            if (channel === void 0) channel = 0;
            try {
                return generateIntoCanvas$1.apply(webgl, arguments);
            } catch (e) {
                console.info('WebGL SDF generation failed, falling back to JS', e);
                return generateIntoCanvas$2.apply(javascript, arguments);
            }
        }
        exports.forEachPathCommand = forEachPathCommand;
        exports.generate = generate;
        exports.generateIntoCanvas = generateIntoCanvas;
        exports.javascript = javascript;
        exports.pathToLineSegments = pathToLineSegments;
        exports.webgl = webgl;
        exports.webglUtils = webglUtils;
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        return exports;
    }({});
    return exports;
}
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/bidi-js/dist/bidi.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function bidiFactory() {
    var bidi = function(exports) {
        // Bidi character types data, auto generated
        var DATA = {
            "R": "13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",
            "EN": "1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",
            "ES": "17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",
            "ET": "z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",
            "AN": "16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",
            "CS": "18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",
            "B": "a,3,f+2,2v,690",
            "S": "9,2,k",
            "WS": "c,k,4f4,1vk+a,u,1j,335",
            "ON": "x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",
            "BN": "0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",
            "NSM": "lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",
            "AL": "16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",
            "LRO": "6ct",
            "RLO": "6cu",
            "LRE": "6cq",
            "RLE": "6cr",
            "PDF": "6cs",
            "LRI": "6ee",
            "RLI": "6ef",
            "FSI": "6eg",
            "PDI": "6eh"
        };
        var TYPES = {};
        var TYPES_TO_NAMES = {};
        TYPES.L = 1; //L is the default
        TYPES_TO_NAMES[1] = 'L';
        Object.keys(DATA).forEach(function(type, i) {
            TYPES[type] = 1 << i + 1;
            TYPES_TO_NAMES[TYPES[type]] = type;
        });
        Object.freeze(TYPES);
        var ISOLATE_INIT_TYPES = TYPES.LRI | TYPES.RLI | TYPES.FSI;
        var STRONG_TYPES = TYPES.L | TYPES.R | TYPES.AL;
        var NEUTRAL_ISOLATE_TYPES = TYPES.B | TYPES.S | TYPES.WS | TYPES.ON | TYPES.FSI | TYPES.LRI | TYPES.RLI | TYPES.PDI;
        var BN_LIKE_TYPES = TYPES.BN | TYPES.RLE | TYPES.LRE | TYPES.RLO | TYPES.LRO | TYPES.PDF;
        var TRAILING_TYPES = TYPES.S | TYPES.WS | TYPES.B | ISOLATE_INIT_TYPES | TYPES.PDI | BN_LIKE_TYPES;
        var map = null;
        function parseData() {
            if (!map) {
                //const start = performance.now()
                map = new Map();
                var loop = function(type) {
                    if (DATA.hasOwnProperty(type)) {
                        var lastCode = 0;
                        DATA[type].split(',').forEach(function(range) {
                            var ref = range.split('+');
                            var skip = ref[0];
                            var step = ref[1];
                            skip = parseInt(skip, 36);
                            step = step ? parseInt(step, 36) : 0;
                            map.set(lastCode += skip, TYPES[type]);
                            for(var i = 0; i < step; i++){
                                map.set(++lastCode, TYPES[type]);
                            }
                        });
                    }
                };
                for(var type in DATA)loop(type);
            //console.log(`char types parsed in ${performance.now() - start}ms`)
            }
        }
        /**
   * @param {string} char
   * @return {number}
   */ function getBidiCharType(char) {
            parseData();
            return map.get(char.codePointAt(0)) || TYPES.L;
        }
        function getBidiCharTypeName(char) {
            return TYPES_TO_NAMES[getBidiCharType(char)];
        }
        // Bidi bracket pairs data, auto generated
        var data$1 = {
            "pairs": "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",
            "canonical": "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"
        };
        /**
   * Parses an string that holds encoded codepoint mappings, e.g. for bracket pairs or
   * mirroring characters, as encoded by scripts/generateBidiData.js. Returns an object
   * holding the `map`, and optionally a `reverseMap` if `includeReverse:true`.
   * @param {string} encodedString
   * @param {boolean} includeReverse - true if you want reverseMap in the output
   * @return {{map: Map<number, number>, reverseMap?: Map<number, number>}}
   */ function parseCharacterMap(encodedString, includeReverse) {
            var radix = 36;
            var lastCode = 0;
            var map = new Map();
            var reverseMap = includeReverse && new Map();
            var prevPair;
            encodedString.split(',').forEach(function visit(entry) {
                if (entry.indexOf('+') !== -1) {
                    for(var i = +entry; i--;){
                        visit(prevPair);
                    }
                } else {
                    prevPair = entry;
                    var ref = entry.split('>');
                    var a = ref[0];
                    var b = ref[1];
                    a = String.fromCodePoint(lastCode += parseInt(a, radix));
                    b = String.fromCodePoint(lastCode += parseInt(b, radix));
                    map.set(a, b);
                    includeReverse && reverseMap.set(b, a);
                }
            });
            return {
                map: map,
                reverseMap: reverseMap
            };
        }
        var openToClose, closeToOpen, canonical;
        function parse$1() {
            if (!openToClose) {
                //const start = performance.now()
                var ref = parseCharacterMap(data$1.pairs, true);
                var map = ref.map;
                var reverseMap = ref.reverseMap;
                openToClose = map;
                closeToOpen = reverseMap;
                canonical = parseCharacterMap(data$1.canonical, false).map;
            //console.log(`brackets parsed in ${performance.now() - start}ms`)
            }
        }
        function openingToClosingBracket(char) {
            parse$1();
            return openToClose.get(char) || null;
        }
        function closingToOpeningBracket(char) {
            parse$1();
            return closeToOpen.get(char) || null;
        }
        function getCanonicalBracket(char) {
            parse$1();
            return canonical.get(char) || null;
        }
        // Local type aliases
        var TYPE_L = TYPES.L;
        var TYPE_R = TYPES.R;
        var TYPE_EN = TYPES.EN;
        var TYPE_ES = TYPES.ES;
        var TYPE_ET = TYPES.ET;
        var TYPE_AN = TYPES.AN;
        var TYPE_CS = TYPES.CS;
        var TYPE_B = TYPES.B;
        var TYPE_S = TYPES.S;
        var TYPE_ON = TYPES.ON;
        var TYPE_BN = TYPES.BN;
        var TYPE_NSM = TYPES.NSM;
        var TYPE_AL = TYPES.AL;
        var TYPE_LRO = TYPES.LRO;
        var TYPE_RLO = TYPES.RLO;
        var TYPE_LRE = TYPES.LRE;
        var TYPE_RLE = TYPES.RLE;
        var TYPE_PDF = TYPES.PDF;
        var TYPE_LRI = TYPES.LRI;
        var TYPE_RLI = TYPES.RLI;
        var TYPE_FSI = TYPES.FSI;
        var TYPE_PDI = TYPES.PDI;
        /**
   * @typedef {object} GetEmbeddingLevelsResult
   * @property {{start, end, level}[]} paragraphs
   * @property {Uint8Array} levels
   */ /**
   * This function applies the Bidirectional Algorithm to a string, returning the resolved embedding levels
   * in a single Uint8Array plus a list of objects holding each paragraph's start and end indices and resolved
   * base embedding level.
   *
   * @param {string} string - The input string
   * @param {"ltr"|"rtl"|"auto"} [baseDirection] - Use "ltr" or "rtl" to force a base paragraph direction,
   *        otherwise a direction will be chosen automatically from each paragraph's contents.
   * @return {GetEmbeddingLevelsResult}
   */ function getEmbeddingLevels(string, baseDirection) {
            var MAX_DEPTH = 125;
            // Start by mapping all characters to their unicode type, as a bitmask integer
            var charTypes = new Uint32Array(string.length);
            for(var i = 0; i < string.length; i++){
                charTypes[i] = getBidiCharType(string[i]);
            }
            var charTypeCounts = new Map(); //will be cleared at start of each paragraph
            function changeCharType(i, type) {
                var oldType = charTypes[i];
                charTypes[i] = type;
                charTypeCounts.set(oldType, charTypeCounts.get(oldType) - 1);
                if (oldType & NEUTRAL_ISOLATE_TYPES) {
                    charTypeCounts.set(NEUTRAL_ISOLATE_TYPES, charTypeCounts.get(NEUTRAL_ISOLATE_TYPES) - 1);
                }
                charTypeCounts.set(type, (charTypeCounts.get(type) || 0) + 1);
                if (type & NEUTRAL_ISOLATE_TYPES) {
                    charTypeCounts.set(NEUTRAL_ISOLATE_TYPES, (charTypeCounts.get(NEUTRAL_ISOLATE_TYPES) || 0) + 1);
                }
            }
            var embedLevels = new Uint8Array(string.length);
            var isolationPairs = new Map(); //init->pdi and pdi->init
            // === 3.3.1 The Paragraph Level ===
            // 3.3.1 P1: Split the text into paragraphs
            var paragraphs = []; // [{start, end, level}, ...]
            var paragraph = null;
            for(var i$1 = 0; i$1 < string.length; i$1++){
                if (!paragraph) {
                    paragraphs.push(paragraph = {
                        start: i$1,
                        end: string.length - 1,
                        // 3.3.1 P2-P3: Determine the paragraph level
                        level: baseDirection === 'rtl' ? 1 : baseDirection === 'ltr' ? 0 : determineAutoEmbedLevel(i$1, false)
                    });
                }
                if (charTypes[i$1] & TYPE_B) {
                    paragraph.end = i$1;
                    paragraph = null;
                }
            }
            var FORMATTING_TYPES = TYPE_RLE | TYPE_LRE | TYPE_RLO | TYPE_LRO | ISOLATE_INIT_TYPES | TYPE_PDI | TYPE_PDF | TYPE_B;
            var nextEven = function(n) {
                return n + (n & 1 ? 1 : 2);
            };
            var nextOdd = function(n) {
                return n + (n & 1 ? 2 : 1);
            };
            // Everything from here on will operate per paragraph.
            for(var paraIdx = 0; paraIdx < paragraphs.length; paraIdx++){
                paragraph = paragraphs[paraIdx];
                var statusStack = [
                    {
                        _level: paragraph.level,
                        _override: 0,
                        _isolate: 0 //bool
                    }
                ];
                var stackTop = void 0;
                var overflowIsolateCount = 0;
                var overflowEmbeddingCount = 0;
                var validIsolateCount = 0;
                charTypeCounts.clear();
                // === 3.3.2 Explicit Levels and Directions ===
                for(var i$2 = paragraph.start; i$2 <= paragraph.end; i$2++){
                    var charType = charTypes[i$2];
                    stackTop = statusStack[statusStack.length - 1];
                    // Set initial counts
                    charTypeCounts.set(charType, (charTypeCounts.get(charType) || 0) + 1);
                    if (charType & NEUTRAL_ISOLATE_TYPES) {
                        charTypeCounts.set(NEUTRAL_ISOLATE_TYPES, (charTypeCounts.get(NEUTRAL_ISOLATE_TYPES) || 0) + 1);
                    }
                    // Explicit Embeddings: 3.3.2 X2 - X3
                    if (charType & FORMATTING_TYPES) {
                        if (charType & (TYPE_RLE | TYPE_LRE)) {
                            embedLevels[i$2] = stackTop._level; // 5.2
                            var level = (charType === TYPE_RLE ? nextOdd : nextEven)(stackTop._level);
                            if (level <= MAX_DEPTH && !overflowIsolateCount && !overflowEmbeddingCount) {
                                statusStack.push({
                                    _level: level,
                                    _override: 0,
                                    _isolate: 0
                                });
                            } else if (!overflowIsolateCount) {
                                overflowEmbeddingCount++;
                            }
                        } else if (charType & (TYPE_RLO | TYPE_LRO)) {
                            embedLevels[i$2] = stackTop._level; // 5.2
                            var level$1 = (charType === TYPE_RLO ? nextOdd : nextEven)(stackTop._level);
                            if (level$1 <= MAX_DEPTH && !overflowIsolateCount && !overflowEmbeddingCount) {
                                statusStack.push({
                                    _level: level$1,
                                    _override: charType & TYPE_RLO ? TYPE_R : TYPE_L,
                                    _isolate: 0
                                });
                            } else if (!overflowIsolateCount) {
                                overflowEmbeddingCount++;
                            }
                        } else if (charType & ISOLATE_INIT_TYPES) {
                            // X5c - FSI becomes either RLI or LRI
                            if (charType & TYPE_FSI) {
                                charType = determineAutoEmbedLevel(i$2 + 1, true) === 1 ? TYPE_RLI : TYPE_LRI;
                            }
                            embedLevels[i$2] = stackTop._level;
                            if (stackTop._override) {
                                changeCharType(i$2, stackTop._override);
                            }
                            var level$2 = (charType === TYPE_RLI ? nextOdd : nextEven)(stackTop._level);
                            if (level$2 <= MAX_DEPTH && overflowIsolateCount === 0 && overflowEmbeddingCount === 0) {
                                validIsolateCount++;
                                statusStack.push({
                                    _level: level$2,
                                    _override: 0,
                                    _isolate: 1,
                                    _isolInitIndex: i$2
                                });
                            } else {
                                overflowIsolateCount++;
                            }
                        } else if (charType & TYPE_PDI) {
                            if (overflowIsolateCount > 0) {
                                overflowIsolateCount--;
                            } else if (validIsolateCount > 0) {
                                overflowEmbeddingCount = 0;
                                while(!statusStack[statusStack.length - 1]._isolate){
                                    statusStack.pop();
                                }
                                // Add to isolation pairs bidirectional mapping:
                                var isolInitIndex = statusStack[statusStack.length - 1]._isolInitIndex;
                                if (isolInitIndex != null) {
                                    isolationPairs.set(isolInitIndex, i$2);
                                    isolationPairs.set(i$2, isolInitIndex);
                                }
                                statusStack.pop();
                                validIsolateCount--;
                            }
                            stackTop = statusStack[statusStack.length - 1];
                            embedLevels[i$2] = stackTop._level;
                            if (stackTop._override) {
                                changeCharType(i$2, stackTop._override);
                            }
                        } else if (charType & TYPE_PDF) {
                            if (overflowIsolateCount === 0) {
                                if (overflowEmbeddingCount > 0) {
                                    overflowEmbeddingCount--;
                                } else if (!stackTop._isolate && statusStack.length > 1) {
                                    statusStack.pop();
                                    stackTop = statusStack[statusStack.length - 1];
                                }
                            }
                            embedLevels[i$2] = stackTop._level; // 5.2
                        } else if (charType & TYPE_B) {
                            embedLevels[i$2] = paragraph.level;
                        }
                    } else {
                        embedLevels[i$2] = stackTop._level;
                        // NOTE: This exclusion of BN seems to go against what section 5.2 says, but is required for test passage
                        if (stackTop._override && charType !== TYPE_BN) {
                            changeCharType(i$2, stackTop._override);
                        }
                    }
                }
                // === 3.3.3 Preparations for Implicit Processing ===
                // Remove all RLE, LRE, RLO, LRO, PDF, and BN characters: 3.3.3 X9
                // Note: Due to section 5.2, we won't remove them, but we'll use the BN_LIKE_TYPES bitset to
                // easily ignore them all from here on out.
                // 3.3.3 X10
                // Compute the set of isolating run sequences as specified by BD13
                var levelRuns = [];
                var currentRun = null;
                for(var i$3 = paragraph.start; i$3 <= paragraph.end; i$3++){
                    var charType$1 = charTypes[i$3];
                    if (!(charType$1 & BN_LIKE_TYPES)) {
                        var lvl = embedLevels[i$3];
                        var isIsolInit = charType$1 & ISOLATE_INIT_TYPES;
                        var isPDI = charType$1 === TYPE_PDI;
                        if (currentRun && lvl === currentRun._level) {
                            currentRun._end = i$3;
                            currentRun._endsWithIsolInit = isIsolInit;
                        } else {
                            levelRuns.push(currentRun = {
                                _start: i$3,
                                _end: i$3,
                                _level: lvl,
                                _startsWithPDI: isPDI,
                                _endsWithIsolInit: isIsolInit
                            });
                        }
                    }
                }
                var isolatingRunSeqs = []; // [{seqIndices: [], sosType: L|R, eosType: L|R}]
                for(var runIdx = 0; runIdx < levelRuns.length; runIdx++){
                    var run = levelRuns[runIdx];
                    if (!run._startsWithPDI || run._startsWithPDI && !isolationPairs.has(run._start)) {
                        var seqRuns = [
                            currentRun = run
                        ];
                        for(var pdiIndex = void 0; currentRun && currentRun._endsWithIsolInit && (pdiIndex = isolationPairs.get(currentRun._end)) != null;){
                            for(var i$4 = runIdx + 1; i$4 < levelRuns.length; i$4++){
                                if (levelRuns[i$4]._start === pdiIndex) {
                                    seqRuns.push(currentRun = levelRuns[i$4]);
                                    break;
                                }
                            }
                        }
                        // build flat list of indices across all runs:
                        var seqIndices = [];
                        for(var i$5 = 0; i$5 < seqRuns.length; i$5++){
                            var run$1 = seqRuns[i$5];
                            for(var j = run$1._start; j <= run$1._end; j++){
                                seqIndices.push(j);
                            }
                        }
                        // determine the sos/eos types:
                        var firstLevel = embedLevels[seqIndices[0]];
                        var prevLevel = paragraph.level;
                        for(var i$6 = seqIndices[0] - 1; i$6 >= 0; i$6--){
                            if (!(charTypes[i$6] & BN_LIKE_TYPES)) {
                                prevLevel = embedLevels[i$6];
                                break;
                            }
                        }
                        var lastIndex = seqIndices[seqIndices.length - 1];
                        var lastLevel = embedLevels[lastIndex];
                        var nextLevel = paragraph.level;
                        if (!(charTypes[lastIndex] & ISOLATE_INIT_TYPES)) {
                            for(var i$7 = lastIndex + 1; i$7 <= paragraph.end; i$7++){
                                if (!(charTypes[i$7] & BN_LIKE_TYPES)) {
                                    nextLevel = embedLevels[i$7];
                                    break;
                                }
                            }
                        }
                        isolatingRunSeqs.push({
                            _seqIndices: seqIndices,
                            _sosType: Math.max(prevLevel, firstLevel) % 2 ? TYPE_R : TYPE_L,
                            _eosType: Math.max(nextLevel, lastLevel) % 2 ? TYPE_R : TYPE_L
                        });
                    }
                }
                // The next steps are done per isolating run sequence
                for(var seqIdx = 0; seqIdx < isolatingRunSeqs.length; seqIdx++){
                    var ref = isolatingRunSeqs[seqIdx];
                    var seqIndices$1 = ref._seqIndices;
                    var sosType = ref._sosType;
                    var eosType = ref._eosType;
                    /**
         * All the level runs in an isolating run sequence have the same embedding level.
         * 
         * DO NOT change any `embedLevels[i]` within the current scope.
         */ var embedDirection = embedLevels[seqIndices$1[0]] & 1 ? TYPE_R : TYPE_L;
                    // === 3.3.4 Resolving Weak Types ===
                    // W1 + 5.2. Search backward from each NSM to the first character in the isolating run sequence whose
                    // bidirectional type is not BN, and set the NSM to ON if it is an isolate initiator or PDI, and to its
                    // type otherwise. If the NSM is the first non-BN character, change the NSM to the type of sos.
                    if (charTypeCounts.get(TYPE_NSM)) {
                        for(var si = 0; si < seqIndices$1.length; si++){
                            var i$8 = seqIndices$1[si];
                            if (charTypes[i$8] & TYPE_NSM) {
                                var prevType = sosType;
                                for(var sj = si - 1; sj >= 0; sj--){
                                    if (!(charTypes[seqIndices$1[sj]] & BN_LIKE_TYPES)) {
                                        prevType = charTypes[seqIndices$1[sj]];
                                        break;
                                    }
                                }
                                changeCharType(i$8, prevType & (ISOLATE_INIT_TYPES | TYPE_PDI) ? TYPE_ON : prevType);
                            }
                        }
                    }
                    // W2. Search backward from each instance of a European number until the first strong type (R, L, AL, or sos)
                    // is found. If an AL is found, change the type of the European number to Arabic number.
                    if (charTypeCounts.get(TYPE_EN)) {
                        for(var si$1 = 0; si$1 < seqIndices$1.length; si$1++){
                            var i$9 = seqIndices$1[si$1];
                            if (charTypes[i$9] & TYPE_EN) {
                                for(var sj$1 = si$1 - 1; sj$1 >= -1; sj$1--){
                                    var prevCharType = sj$1 === -1 ? sosType : charTypes[seqIndices$1[sj$1]];
                                    if (prevCharType & STRONG_TYPES) {
                                        if (prevCharType === TYPE_AL) {
                                            changeCharType(i$9, TYPE_AN);
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    // W3. Change all ALs to R
                    if (charTypeCounts.get(TYPE_AL)) {
                        for(var si$2 = 0; si$2 < seqIndices$1.length; si$2++){
                            var i$10 = seqIndices$1[si$2];
                            if (charTypes[i$10] & TYPE_AL) {
                                changeCharType(i$10, TYPE_R);
                            }
                        }
                    }
                    // W4. A single European separator between two European numbers changes to a European number. A single common
                    // separator between two numbers of the same type changes to that type.
                    if (charTypeCounts.get(TYPE_ES) || charTypeCounts.get(TYPE_CS)) {
                        for(var si$3 = 1; si$3 < seqIndices$1.length - 1; si$3++){
                            var i$11 = seqIndices$1[si$3];
                            if (charTypes[i$11] & (TYPE_ES | TYPE_CS)) {
                                var prevType$1 = 0, nextType = 0;
                                for(var sj$2 = si$3 - 1; sj$2 >= 0; sj$2--){
                                    prevType$1 = charTypes[seqIndices$1[sj$2]];
                                    if (!(prevType$1 & BN_LIKE_TYPES)) {
                                        break;
                                    }
                                }
                                for(var sj$3 = si$3 + 1; sj$3 < seqIndices$1.length; sj$3++){
                                    nextType = charTypes[seqIndices$1[sj$3]];
                                    if (!(nextType & BN_LIKE_TYPES)) {
                                        break;
                                    }
                                }
                                if (prevType$1 === nextType && (charTypes[i$11] === TYPE_ES ? prevType$1 === TYPE_EN : prevType$1 & (TYPE_EN | TYPE_AN))) {
                                    changeCharType(i$11, prevType$1);
                                }
                            }
                        }
                    }
                    // W5. A sequence of European terminators adjacent to European numbers changes to all European numbers.
                    if (charTypeCounts.get(TYPE_EN)) {
                        for(var si$4 = 0; si$4 < seqIndices$1.length; si$4++){
                            var i$12 = seqIndices$1[si$4];
                            if (charTypes[i$12] & TYPE_EN) {
                                for(var sj$4 = si$4 - 1; sj$4 >= 0 && charTypes[seqIndices$1[sj$4]] & (TYPE_ET | BN_LIKE_TYPES); sj$4--){
                                    changeCharType(seqIndices$1[sj$4], TYPE_EN);
                                }
                                for(si$4++; si$4 < seqIndices$1.length && charTypes[seqIndices$1[si$4]] & (TYPE_ET | BN_LIKE_TYPES | TYPE_EN); si$4++){
                                    if (charTypes[seqIndices$1[si$4]] !== TYPE_EN) {
                                        changeCharType(seqIndices$1[si$4], TYPE_EN);
                                    }
                                }
                            }
                        }
                    }
                    // W6. Otherwise, separators and terminators change to Other Neutral.
                    if (charTypeCounts.get(TYPE_ET) || charTypeCounts.get(TYPE_ES) || charTypeCounts.get(TYPE_CS)) {
                        for(var si$5 = 0; si$5 < seqIndices$1.length; si$5++){
                            var i$13 = seqIndices$1[si$5];
                            if (charTypes[i$13] & (TYPE_ET | TYPE_ES | TYPE_CS)) {
                                changeCharType(i$13, TYPE_ON);
                                // 5.2 transform adjacent BNs too:
                                for(var sj$5 = si$5 - 1; sj$5 >= 0 && charTypes[seqIndices$1[sj$5]] & BN_LIKE_TYPES; sj$5--){
                                    changeCharType(seqIndices$1[sj$5], TYPE_ON);
                                }
                                for(var sj$6 = si$5 + 1; sj$6 < seqIndices$1.length && charTypes[seqIndices$1[sj$6]] & BN_LIKE_TYPES; sj$6++){
                                    changeCharType(seqIndices$1[sj$6], TYPE_ON);
                                }
                            }
                        }
                    }
                    // W7. Search backward from each instance of a European number until the first strong type (R, L, or sos)
                    // is found. If an L is found, then change the type of the European number to L.
                    // NOTE: implemented in single forward pass for efficiency
                    if (charTypeCounts.get(TYPE_EN)) {
                        for(var si$6 = 0, prevStrongType = sosType; si$6 < seqIndices$1.length; si$6++){
                            var i$14 = seqIndices$1[si$6];
                            var type = charTypes[i$14];
                            if (type & TYPE_EN) {
                                if (prevStrongType === TYPE_L) {
                                    changeCharType(i$14, TYPE_L);
                                }
                            } else if (type & STRONG_TYPES) {
                                prevStrongType = type;
                            }
                        }
                    }
                    // === 3.3.5 Resolving Neutral and Isolate Formatting Types ===
                    if (charTypeCounts.get(NEUTRAL_ISOLATE_TYPES)) {
                        // N0. Process bracket pairs in an isolating run sequence sequentially in the logical order of the text
                        // positions of the opening paired brackets using the logic given below. Within this scope, bidirectional
                        // types EN and AN are treated as R.
                        var R_TYPES_FOR_N_STEPS = TYPE_R | TYPE_EN | TYPE_AN;
                        var STRONG_TYPES_FOR_N_STEPS = R_TYPES_FOR_N_STEPS | TYPE_L;
                        // * Identify the bracket pairs in the current isolating run sequence according to BD16.
                        var bracketPairs = [];
                        {
                            var openerStack = [];
                            for(var si$7 = 0; si$7 < seqIndices$1.length; si$7++){
                                // NOTE: for any potential bracket character we also test that it still carries a NI
                                // type, as that may have been changed earlier. This doesn't seem to be explicitly
                                // called out in the spec, but is required for passage of certain tests.
                                if (charTypes[seqIndices$1[si$7]] & NEUTRAL_ISOLATE_TYPES) {
                                    var char = string[seqIndices$1[si$7]];
                                    var oppositeBracket = void 0;
                                    // Opening bracket
                                    if (openingToClosingBracket(char) !== null) {
                                        if (openerStack.length < 63) {
                                            openerStack.push({
                                                char: char,
                                                seqIndex: si$7
                                            });
                                        } else {
                                            break;
                                        }
                                    } else if ((oppositeBracket = closingToOpeningBracket(char)) !== null) {
                                        for(var stackIdx = openerStack.length - 1; stackIdx >= 0; stackIdx--){
                                            var stackChar = openerStack[stackIdx].char;
                                            if (stackChar === oppositeBracket || stackChar === closingToOpeningBracket(getCanonicalBracket(char)) || openingToClosingBracket(getCanonicalBracket(stackChar)) === char) {
                                                bracketPairs.push([
                                                    openerStack[stackIdx].seqIndex,
                                                    si$7
                                                ]);
                                                openerStack.length = stackIdx; //pop the matching bracket and all following
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            bracketPairs.sort(function(a, b) {
                                return a[0] - b[0];
                            });
                        }
                        // * For each bracket-pair element in the list of pairs of text positions
                        for(var pairIdx = 0; pairIdx < bracketPairs.length; pairIdx++){
                            var ref$1 = bracketPairs[pairIdx];
                            var openSeqIdx = ref$1[0];
                            var closeSeqIdx = ref$1[1];
                            // a. Inspect the bidirectional types of the characters enclosed within the bracket pair.
                            // b. If any strong type (either L or R) matching the embedding direction is found, set the type for both
                            // brackets in the pair to match the embedding direction.
                            var foundStrongType = false;
                            var useStrongType = 0;
                            for(var si$8 = openSeqIdx + 1; si$8 < closeSeqIdx; si$8++){
                                var i$15 = seqIndices$1[si$8];
                                if (charTypes[i$15] & STRONG_TYPES_FOR_N_STEPS) {
                                    foundStrongType = true;
                                    var lr = charTypes[i$15] & R_TYPES_FOR_N_STEPS ? TYPE_R : TYPE_L;
                                    if (lr === embedDirection) {
                                        useStrongType = lr;
                                        break;
                                    }
                                }
                            }
                            // c. Otherwise, if there is a strong type it must be opposite the embedding direction. Therefore, test
                            // for an established context with a preceding strong type by checking backwards before the opening paired
                            // bracket until the first strong type (L, R, or sos) is found.
                            //    1. If the preceding strong type is also opposite the embedding direction, context is established, so
                            //    set the type for both brackets in the pair to that direction.
                            //    2. Otherwise set the type for both brackets in the pair to the embedding direction.
                            if (foundStrongType && !useStrongType) {
                                useStrongType = sosType;
                                for(var si$9 = openSeqIdx - 1; si$9 >= 0; si$9--){
                                    var i$16 = seqIndices$1[si$9];
                                    if (charTypes[i$16] & STRONG_TYPES_FOR_N_STEPS) {
                                        var lr$1 = charTypes[i$16] & R_TYPES_FOR_N_STEPS ? TYPE_R : TYPE_L;
                                        if (lr$1 !== embedDirection) {
                                            useStrongType = lr$1;
                                        } else {
                                            useStrongType = embedDirection;
                                        }
                                        break;
                                    }
                                }
                            }
                            if (useStrongType) {
                                charTypes[seqIndices$1[openSeqIdx]] = charTypes[seqIndices$1[closeSeqIdx]] = useStrongType;
                                // * Any number of characters that had original bidirectional character type NSM prior to the application
                                // of W1 that immediately follow a paired bracket which changed to L or R under N0 should change to match
                                // the type of their preceding bracket.
                                if (useStrongType !== embedDirection) {
                                    for(var si$10 = openSeqIdx + 1; si$10 < seqIndices$1.length; si$10++){
                                        if (!(charTypes[seqIndices$1[si$10]] & BN_LIKE_TYPES)) {
                                            if (getBidiCharType(string[seqIndices$1[si$10]]) & TYPE_NSM) {
                                                charTypes[seqIndices$1[si$10]] = useStrongType;
                                            }
                                            break;
                                        }
                                    }
                                }
                                if (useStrongType !== embedDirection) {
                                    for(var si$11 = closeSeqIdx + 1; si$11 < seqIndices$1.length; si$11++){
                                        if (!(charTypes[seqIndices$1[si$11]] & BN_LIKE_TYPES)) {
                                            if (getBidiCharType(string[seqIndices$1[si$11]]) & TYPE_NSM) {
                                                charTypes[seqIndices$1[si$11]] = useStrongType;
                                            }
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        // N1. A sequence of NIs takes the direction of the surrounding strong text if the text on both sides has the
                        // same direction.
                        // N2. Any remaining NIs take the embedding direction.
                        for(var si$12 = 0; si$12 < seqIndices$1.length; si$12++){
                            if (charTypes[seqIndices$1[si$12]] & NEUTRAL_ISOLATE_TYPES) {
                                var niRunStart = si$12, niRunEnd = si$12;
                                var prevType$2 = sosType; //si === 0 ? sosType : (charTypes[seqIndices[si - 1]] & R_TYPES_FOR_N_STEPS) ? TYPE_R : TYPE_L
                                for(var si2 = si$12 - 1; si2 >= 0; si2--){
                                    if (charTypes[seqIndices$1[si2]] & BN_LIKE_TYPES) {
                                        niRunStart = si2; //5.2 treat BNs adjacent to NIs as NIs
                                    } else {
                                        prevType$2 = charTypes[seqIndices$1[si2]] & R_TYPES_FOR_N_STEPS ? TYPE_R : TYPE_L;
                                        break;
                                    }
                                }
                                var nextType$1 = eosType;
                                for(var si2$1 = si$12 + 1; si2$1 < seqIndices$1.length; si2$1++){
                                    if (charTypes[seqIndices$1[si2$1]] & (NEUTRAL_ISOLATE_TYPES | BN_LIKE_TYPES)) {
                                        niRunEnd = si2$1;
                                    } else {
                                        nextType$1 = charTypes[seqIndices$1[si2$1]] & R_TYPES_FOR_N_STEPS ? TYPE_R : TYPE_L;
                                        break;
                                    }
                                }
                                for(var sj$7 = niRunStart; sj$7 <= niRunEnd; sj$7++){
                                    charTypes[seqIndices$1[sj$7]] = prevType$2 === nextType$1 ? prevType$2 : embedDirection;
                                }
                                si$12 = niRunEnd;
                            }
                        }
                    }
                }
                // === 3.3.6 Resolving Implicit Levels ===
                for(var i$17 = paragraph.start; i$17 <= paragraph.end; i$17++){
                    var level$3 = embedLevels[i$17];
                    var type$1 = charTypes[i$17];
                    // I2. For all characters with an odd (right-to-left) embedding level, those of type L, EN or AN go up one level.
                    if (level$3 & 1) {
                        if (type$1 & (TYPE_L | TYPE_EN | TYPE_AN)) {
                            embedLevels[i$17]++;
                        }
                    } else {
                        if (type$1 & TYPE_R) {
                            embedLevels[i$17]++;
                        } else if (type$1 & (TYPE_AN | TYPE_EN)) {
                            embedLevels[i$17] += 2;
                        }
                    }
                    // 5.2: Resolve any LRE, RLE, LRO, RLO, PDF, or BN to the level of the preceding character if there is one,
                    // and otherwise to the base level.
                    if (type$1 & BN_LIKE_TYPES) {
                        embedLevels[i$17] = i$17 === 0 ? paragraph.level : embedLevels[i$17 - 1];
                    }
                    // 3.4 L1.1-4: Reset the embedding level of segment/paragraph separators, and any sequence of whitespace or
                    // isolate formatting characters preceding them or the end of the paragraph, to the paragraph level.
                    // NOTE: this will also need to be applied to each individual line ending after line wrapping occurs.
                    if (i$17 === paragraph.end || getBidiCharType(string[i$17]) & (TYPE_S | TYPE_B)) {
                        for(var j$1 = i$17; j$1 >= 0 && getBidiCharType(string[j$1]) & TRAILING_TYPES; j$1--){
                            embedLevels[j$1] = paragraph.level;
                        }
                    }
                }
            }
            // DONE! The resolved levels can then be used, after line wrapping, to flip runs of characters
            // according to section 3.4 Reordering Resolved Levels
            return {
                levels: embedLevels,
                paragraphs: paragraphs
            };
            "TURBOPACK unreachable";
            function determineAutoEmbedLevel(start, isFSI) {
                // 3.3.1 P2 - P3
                for(var i = start; i < string.length; i++){
                    var charType = charTypes[i];
                    if (charType & (TYPE_R | TYPE_AL)) {
                        return 1;
                    }
                    if (charType & (TYPE_B | TYPE_L) || isFSI && charType === TYPE_PDI) {
                        return 0;
                    }
                    if (charType & ISOLATE_INIT_TYPES) {
                        var pdi = indexOfMatchingPDI(i);
                        i = pdi === -1 ? string.length : pdi;
                    }
                }
                return 0;
            }
            function indexOfMatchingPDI(isolateStart) {
                // 3.1.2 BD9
                var isolationLevel = 1;
                for(var i = isolateStart + 1; i < string.length; i++){
                    var charType = charTypes[i];
                    if (charType & TYPE_B) {
                        break;
                    }
                    if (charType & TYPE_PDI) {
                        if (--isolationLevel === 0) {
                            return i;
                        }
                    } else if (charType & ISOLATE_INIT_TYPES) {
                        isolationLevel++;
                    }
                }
                return -1;
            }
        }
        // Bidi mirrored chars data, auto generated
        var data = "14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1";
        var mirrorMap;
        function parse() {
            if (!mirrorMap) {
                //const start = performance.now()
                var ref = parseCharacterMap(data, true);
                var map = ref.map;
                var reverseMap = ref.reverseMap;
                // Combine both maps into one
                reverseMap.forEach(function(value, key) {
                    map.set(key, value);
                });
                mirrorMap = map;
            //console.log(`mirrored chars parsed in ${performance.now() - start}ms`)
            }
        }
        function getMirroredCharacter(char) {
            parse();
            return mirrorMap.get(char) || null;
        }
        /**
   * Given a string and its resolved embedding levels, build a map of indices to replacement chars
   * for any characters in right-to-left segments that have defined mirrored characters.
   * @param string
   * @param embeddingLevels
   * @param [start]
   * @param [end]
   * @return {Map<number, string>}
   */ function getMirroredCharactersMap(string, embeddingLevels, start, end) {
            var strLen = string.length;
            start = Math.max(0, start == null ? 0 : +start);
            end = Math.min(strLen - 1, end == null ? strLen - 1 : +end);
            var map = new Map();
            for(var i = start; i <= end; i++){
                if (embeddingLevels[i] & 1) {
                    var mirror = getMirroredCharacter(string[i]);
                    if (mirror !== null) {
                        map.set(i, mirror);
                    }
                }
            }
            return map;
        }
        /**
   * Given a start and end denoting a single line within a string, and a set of precalculated
   * bidi embedding levels, produce a list of segments whose ordering should be flipped, in sequence.
   * @param {string} string - the full input string
   * @param {GetEmbeddingLevelsResult} embeddingLevelsResult - the result object from getEmbeddingLevels
   * @param {number} [start] - first character in a subset of the full string
   * @param {number} [end] - last character in a subset of the full string
   * @return {number[][]} - the list of start/end segments that should be flipped, in order.
   */ function getReorderSegments(string, embeddingLevelsResult, start, end) {
            var strLen = string.length;
            start = Math.max(0, start == null ? 0 : +start);
            end = Math.min(strLen - 1, end == null ? strLen - 1 : +end);
            var segments = [];
            embeddingLevelsResult.paragraphs.forEach(function(paragraph) {
                var lineStart = Math.max(start, paragraph.start);
                var lineEnd = Math.min(end, paragraph.end);
                if (lineStart < lineEnd) {
                    // Local slice for mutation
                    var lineLevels = embeddingLevelsResult.levels.slice(lineStart, lineEnd + 1);
                    // 3.4 L1.4: Reset any sequence of whitespace characters and/or isolate formatting characters at the
                    // end of the line to the paragraph level.
                    for(var i = lineEnd; i >= lineStart && getBidiCharType(string[i]) & TRAILING_TYPES; i--){
                        lineLevels[i] = paragraph.level;
                    }
                    // L2. From the highest level found in the text to the lowest odd level on each line, including intermediate levels
                    // not actually present in the text, reverse any contiguous sequence of characters that are at that level or higher.
                    var maxLevel = paragraph.level;
                    var minOddLevel = Infinity;
                    for(var i$1 = 0; i$1 < lineLevels.length; i$1++){
                        var level = lineLevels[i$1];
                        if (level > maxLevel) {
                            maxLevel = level;
                        }
                        if (level < minOddLevel) {
                            minOddLevel = level | 1;
                        }
                    }
                    for(var lvl = maxLevel; lvl >= minOddLevel; lvl--){
                        for(var i$2 = 0; i$2 < lineLevels.length; i$2++){
                            if (lineLevels[i$2] >= lvl) {
                                var segStart = i$2;
                                while(i$2 + 1 < lineLevels.length && lineLevels[i$2 + 1] >= lvl){
                                    i$2++;
                                }
                                if (i$2 > segStart) {
                                    segments.push([
                                        segStart + lineStart,
                                        i$2 + lineStart
                                    ]);
                                }
                            }
                        }
                    }
                }
            });
            return segments;
        }
        /**
   * @param {string} string
   * @param {GetEmbeddingLevelsResult} embedLevelsResult
   * @param {number} [start]
   * @param {number} [end]
   * @return {string} the new string with bidi segments reordered
   */ function getReorderedString(string, embedLevelsResult, start, end) {
            var indices = getReorderedIndices(string, embedLevelsResult, start, end);
            var chars = [].concat(string);
            indices.forEach(function(charIndex, i) {
                chars[i] = (embedLevelsResult.levels[charIndex] & 1 ? getMirroredCharacter(string[charIndex]) : null) || string[charIndex];
            });
            return chars.join('');
        }
        /**
   * @param {string} string
   * @param {GetEmbeddingLevelsResult} embedLevelsResult
   * @param {number} [start]
   * @param {number} [end]
   * @return {number[]} an array with character indices in their new bidi order
   */ function getReorderedIndices(string, embedLevelsResult, start, end) {
            var segments = getReorderSegments(string, embedLevelsResult, start, end);
            // Fill an array with indices
            var indices = [];
            for(var i = 0; i < string.length; i++){
                indices[i] = i;
            }
            // Reverse each segment in order
            segments.forEach(function(ref) {
                var start = ref[0];
                var end = ref[1];
                var slice = indices.slice(start, end + 1);
                for(var i = slice.length; i--;){
                    indices[end - i] = slice[i];
                }
            });
            return indices;
        }
        exports.closingToOpeningBracket = closingToOpeningBracket;
        exports.getBidiCharType = getBidiCharType;
        exports.getBidiCharTypeName = getBidiCharTypeName;
        exports.getCanonicalBracket = getCanonicalBracket;
        exports.getEmbeddingLevels = getEmbeddingLevels;
        exports.getMirroredCharacter = getMirroredCharacter;
        exports.getMirroredCharactersMap = getMirroredCharactersMap;
        exports.getReorderSegments = getReorderSegments;
        exports.getReorderedIndices = getReorderedIndices;
        exports.getReorderedString = getReorderedString;
        exports.openingToClosingBracket = openingToClosingBracket;
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        return exports;
    }({});
    return bidi;
}
const __TURBOPACK__default__export__ = bidiFactory;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/troika-three-utils/dist/troika-three-utils.esm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BezierMesh": (()=>BezierMesh),
    "createDerivedMaterial": (()=>createDerivedMaterial),
    "expandShaderIncludes": (()=>expandShaderIncludes),
    "getShaderUniformTypes": (()=>getShaderUniformTypes),
    "getShadersForMaterial": (()=>getShadersForMaterial),
    "invertMatrix4": (()=>invertMatrix4),
    "voidMainRegExp": (()=>voidMainRegExp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
/**
 * Regular expression for matching the `void main() {` opener line in GLSL.
 * @type {RegExp}
 */ const voidMainRegExp = /\bvoid\s+main\s*\(\s*\)\s*{/g;
/**
 * Recursively expands all `#include <xyz>` statements within string of shader code.
 * Copied from three's WebGLProgram#parseIncludes for external use.
 *
 * @param {string} source - The GLSL source code to evaluate
 * @return {string} The GLSL code with all includes expanded
 */ function expandShaderIncludes(source) {
    const pattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
    function replace(match, include) {
        let chunk = __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ShaderChunk"][include];
        return chunk ? expandShaderIncludes(chunk) : match;
    }
    return source.replace(pattern, replace);
}
/*
 * This is a direct copy of MathUtils.generateUUID from Three.js, to preserve compatibility with three
 * versions before 0.113.0 as it was changed from Math to MathUtils in that version.
 * https://github.com/mrdoob/three.js/blob/dd8b5aa3b270c17096b90945cd2d6d1b13aaec53/src/math/MathUtils.js#L16
 */ const _lut = [];
for(let i = 0; i < 256; i++){
    _lut[i] = (i < 16 ? '0' : '') + i.toString(16);
}
function generateUUID() {
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
    const d0 = Math.random() * 0xffffffff | 0;
    const d1 = Math.random() * 0xffffffff | 0;
    const d2 = Math.random() * 0xffffffff | 0;
    const d3 = Math.random() * 0xffffffff | 0;
    const uuid = _lut[d0 & 0xff] + _lut[d0 >> 8 & 0xff] + _lut[d0 >> 16 & 0xff] + _lut[d0 >> 24 & 0xff] + '-' + _lut[d1 & 0xff] + _lut[d1 >> 8 & 0xff] + '-' + _lut[d1 >> 16 & 0x0f | 0x40] + _lut[d1 >> 24 & 0xff] + '-' + _lut[d2 & 0x3f | 0x80] + _lut[d2 >> 8 & 0xff] + '-' + _lut[d2 >> 16 & 0xff] + _lut[d2 >> 24 & 0xff] + _lut[d3 & 0xff] + _lut[d3 >> 8 & 0xff] + _lut[d3 >> 16 & 0xff] + _lut[d3 >> 24 & 0xff];
    // .toUpperCase() here flattens concatenated strings to save heap memory space.
    return uuid.toUpperCase();
}
// Local assign polyfill to avoid importing troika-core
const assign = Object.assign || function() {
    let target = arguments[0];
    for(let i = 1, len = arguments.length; i < len; i++){
        let source = arguments[i];
        if (source) {
            for(let prop in source){
                if (Object.prototype.hasOwnProperty.call(source, prop)) {
                    target[prop] = source[prop];
                }
            }
        }
    }
    return target;
};
const epoch = Date.now();
const CONSTRUCTOR_CACHE = new WeakMap();
const SHADER_UPGRADE_CACHE = new Map();
// Material ids must be integers, but we can't access the increment from Three's `Material` module,
// so let's choose a sufficiently large starting value that should theoretically never collide.
let materialInstanceId = 1e10;
/**
 * A utility for creating a custom shader material derived from another material's
 * shaders. This allows you to inject custom shader logic and transforms into the
 * builtin ThreeJS materials without having to recreate them from scratch.
 *
 * @param {THREE.Material} baseMaterial - the original material to derive from
 *
 * @param {Object} options - How the base material should be modified.
 * @param {Object=} options.defines - Custom `defines` for the material
 * @param {Object=} options.extensions - Custom `extensions` for the material, e.g. `{derivatives: true}`
 * @param {Object=} options.uniforms - Custom `uniforms` for use in the modified shader. These can
 *        be accessed and manipulated via the resulting material's `uniforms` property, just like
 *        in a ShaderMaterial. You do not need to repeat the base material's own uniforms here.
 * @param {String=} options.timeUniform - If specified, a uniform of this name will be injected into
 *        both shaders, and it will automatically be updated on each render frame with a number of
 *        elapsed milliseconds. The "zero" epoch time is not significant so don't rely on this as a
 *        true calendar time.
 * @param {String=} options.vertexDefs - Custom GLSL code to inject into the vertex shader's top-level
 *        definitions, above the `void main()` function.
 * @param {String=} options.vertexMainIntro - Custom GLSL code to inject at the top of the vertex
 *        shader's `void main` function.
 * @param {String=} options.vertexMainOutro - Custom GLSL code to inject at the end of the vertex
 *        shader's `void main` function.
 * @param {String=} options.vertexTransform - Custom GLSL code to manipulate the `position`, `normal`,
 *        and/or `uv` vertex attributes. This code will be wrapped within a standalone function with
 *        those attributes exposed by their normal names as read/write values.
 * @param {String=} options.fragmentDefs - Custom GLSL code to inject into the fragment shader's top-level
 *        definitions, above the `void main()` function.
 * @param {String=} options.fragmentMainIntro - Custom GLSL code to inject at the top of the fragment
 *        shader's `void main` function.
 * @param {String=} options.fragmentMainOutro - Custom GLSL code to inject at the end of the fragment
 *        shader's `void main` function. You can manipulate `gl_FragColor` here but keep in mind it goes
 *        after any of ThreeJS's color postprocessing shader chunks (tonemapping, fog, etc.), so if you
 *        want those to apply to your changes use `fragmentColorTransform` instead.
 * @param {String=} options.fragmentColorTransform - Custom GLSL code to manipulate the `gl_FragColor`
 *        output value. Will be injected near the end of the `void main` function, but before any
 *        of ThreeJS's color postprocessing shader chunks (tonemapping, fog, etc.), and before the
 *        `fragmentMainOutro`.
 * @param {function({fragmentShader: string, vertexShader:string}):
 *        {fragmentShader: string, vertexShader:string}} options.customRewriter - A function
 *        for performing custom rewrites of the full shader code. Useful if you need to do something
 *        special that's not covered by the other builtin options. This function will be executed before
 *        any other transforms are applied.
 * @param {boolean=} options.chained - Set to `true` to prototype-chain the derived material to the base
 *        material, rather than the default behavior of copying it. This allows the derived material to
 *        automatically pick up changes made to the base material and its properties. This can be useful
 *        where the derived material is hidden from the user as an implementation detail, allowing them
 *        to work with the original material like normal. But it can result in unexpected behavior if not
 *        handled carefully.
 *
 * @return {THREE.Material}
 *
 * The returned material will also have two new methods, `getDepthMaterial()` and `getDistanceMaterial()`,
 * which can be called to get a variant of the derived material for use in shadow casting. If the
 * target mesh is expected to cast shadows, then you can assign these to the mesh's `customDepthMaterial`
 * (for directional and spot lights) and/or `customDistanceMaterial` (for point lights) properties to
 * allow the cast shadow to honor your derived shader's vertex transforms and discarded fragments. These
 * will also set a custom `#define IS_DEPTH_MATERIAL` or `#define IS_DISTANCE_MATERIAL` that you can look
 * for in your derived shaders with `#ifdef` to customize their behavior for the depth or distance
 * scenarios, e.g. skipping antialiasing or expensive shader logic.
 */ function createDerivedMaterial(baseMaterial, options) {
    // Generate a key that is unique to the content of these `options`. We'll use this
    // throughout for caching and for generating the upgraded shader code. This increases
    // the likelihood that the resulting shaders will line up across multiple calls so
    // their GL programs can be shared and cached.
    const optionsKey = getKeyForOptions(options);
    // First check to see if we've already derived from this baseMaterial using this
    // unique set of options, and if so reuse the constructor to avoid some allocations.
    let ctorsByDerivation = CONSTRUCTOR_CACHE.get(baseMaterial);
    if (!ctorsByDerivation) {
        CONSTRUCTOR_CACHE.set(baseMaterial, ctorsByDerivation = Object.create(null));
    }
    if (ctorsByDerivation[optionsKey]) {
        return new ctorsByDerivation[optionsKey]();
    }
    const privateBeforeCompileProp = `_onBeforeCompile${optionsKey}`;
    // Private onBeforeCompile handler that injects the modified shaders and uniforms when
    // the renderer switches to this material's program
    const onBeforeCompile = function(shaderInfo, renderer) {
        baseMaterial.onBeforeCompile.call(this, shaderInfo, renderer);
        // Upgrade the shaders, caching the result by incoming source code
        const cacheKey = this.customProgramCacheKey() + '|' + shaderInfo.vertexShader + '|' + shaderInfo.fragmentShader;
        let upgradedShaders = SHADER_UPGRADE_CACHE[cacheKey];
        if (!upgradedShaders) {
            const upgraded = upgradeShaders(this, shaderInfo, options, optionsKey);
            upgradedShaders = SHADER_UPGRADE_CACHE[cacheKey] = upgraded;
        }
        // Inject upgraded shaders and uniforms into the program
        shaderInfo.vertexShader = upgradedShaders.vertexShader;
        shaderInfo.fragmentShader = upgradedShaders.fragmentShader;
        assign(shaderInfo.uniforms, this.uniforms);
        // Inject auto-updating time uniform if requested
        if (options.timeUniform) {
            shaderInfo.uniforms[options.timeUniform] = {
                get value () {
                    return Date.now() - epoch;
                }
            };
        }
        // Users can still add their own handlers on top of ours
        if (this[privateBeforeCompileProp]) {
            this[privateBeforeCompileProp](shaderInfo);
        }
    };
    const DerivedMaterial = function DerivedMaterial() {
        return derive(options.chained ? baseMaterial : baseMaterial.clone());
    };
    const derive = function(base) {
        // Prototype chain to the base material
        const derived = Object.create(base, descriptor);
        // Store the baseMaterial for reference; this is always the original even when cloning
        Object.defineProperty(derived, 'baseMaterial', {
            value: baseMaterial
        });
        // Needs its own ids
        Object.defineProperty(derived, 'id', {
            value: materialInstanceId++
        });
        derived.uuid = generateUUID();
        // Merge uniforms, defines, and extensions
        derived.uniforms = assign({}, base.uniforms, options.uniforms);
        derived.defines = assign({}, base.defines, options.defines);
        derived.defines[`TROIKA_DERIVED_MATERIAL_${optionsKey}`] = ''; //force a program change from the base material
        derived.extensions = assign({}, base.extensions, options.extensions);
        // Don't inherit EventDispatcher listeners
        derived._listeners = undefined;
        return derived;
    };
    const descriptor = {
        constructor: {
            value: DerivedMaterial
        },
        isDerivedMaterial: {
            value: true
        },
        type: {
            get: ()=>baseMaterial.type,
            set: (value)=>{
                baseMaterial.type = value;
            }
        },
        isDerivedFrom: {
            writable: true,
            configurable: true,
            value: function(testMaterial) {
                const base = this.baseMaterial;
                return testMaterial === base || base.isDerivedMaterial && base.isDerivedFrom(testMaterial) || false;
            }
        },
        customProgramCacheKey: {
            writable: true,
            configurable: true,
            value: function() {
                return baseMaterial.customProgramCacheKey() + '|' + optionsKey;
            }
        },
        onBeforeCompile: {
            get () {
                return onBeforeCompile;
            },
            set (fn) {
                this[privateBeforeCompileProp] = fn;
            }
        },
        copy: {
            writable: true,
            configurable: true,
            value: function(source) {
                baseMaterial.copy.call(this, source);
                if (!baseMaterial.isShaderMaterial && !baseMaterial.isDerivedMaterial) {
                    assign(this.extensions, source.extensions);
                    assign(this.defines, source.defines);
                    assign(this.uniforms, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniformsUtils"].clone(source.uniforms));
                }
                return this;
            }
        },
        clone: {
            writable: true,
            configurable: true,
            value: function() {
                const newBase = new baseMaterial.constructor();
                return derive(newBase).copy(this);
            }
        },
        /**
     * Utility to get a MeshDepthMaterial that will honor this derived material's vertex
     * transformations and discarded fragments.
     */ getDepthMaterial: {
            writable: true,
            configurable: true,
            value: function() {
                let depthMaterial = this._depthMaterial;
                if (!depthMaterial) {
                    depthMaterial = this._depthMaterial = createDerivedMaterial(baseMaterial.isDerivedMaterial ? baseMaterial.getDepthMaterial() : new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshDepthMaterial"]({
                        depthPacking: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RGBADepthPacking"]
                    }), options);
                    depthMaterial.defines.IS_DEPTH_MATERIAL = '';
                    depthMaterial.uniforms = this.uniforms; //automatically recieve same uniform values
                }
                return depthMaterial;
            }
        },
        /**
     * Utility to get a MeshDistanceMaterial that will honor this derived material's vertex
     * transformations and discarded fragments.
     */ getDistanceMaterial: {
            writable: true,
            configurable: true,
            value: function() {
                let distanceMaterial = this._distanceMaterial;
                if (!distanceMaterial) {
                    distanceMaterial = this._distanceMaterial = createDerivedMaterial(baseMaterial.isDerivedMaterial ? baseMaterial.getDistanceMaterial() : new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshDistanceMaterial"](), options);
                    distanceMaterial.defines.IS_DISTANCE_MATERIAL = '';
                    distanceMaterial.uniforms = this.uniforms; //automatically recieve same uniform values
                }
                return distanceMaterial;
            }
        },
        dispose: {
            writable: true,
            configurable: true,
            value () {
                const { _depthMaterial, _distanceMaterial } = this;
                if (_depthMaterial) _depthMaterial.dispose();
                if (_distanceMaterial) _distanceMaterial.dispose();
                baseMaterial.dispose.call(this);
            }
        }
    };
    ctorsByDerivation[optionsKey] = DerivedMaterial;
    return new DerivedMaterial();
}
function upgradeShaders(material, { vertexShader, fragmentShader }, options, key) {
    let { vertexDefs, vertexMainIntro, vertexMainOutro, vertexTransform, fragmentDefs, fragmentMainIntro, fragmentMainOutro, fragmentColorTransform, customRewriter, timeUniform } = options;
    vertexDefs = vertexDefs || '';
    vertexMainIntro = vertexMainIntro || '';
    vertexMainOutro = vertexMainOutro || '';
    fragmentDefs = fragmentDefs || '';
    fragmentMainIntro = fragmentMainIntro || '';
    fragmentMainOutro = fragmentMainOutro || '';
    // Expand includes if needed
    if (vertexTransform || customRewriter) {
        vertexShader = expandShaderIncludes(vertexShader);
    }
    if (fragmentColorTransform || customRewriter) {
        // We need to be able to find postprocessing chunks after include expansion in order to
        // put them after the fragmentColorTransform, so mark them with comments first. Even if
        // this particular derivation doesn't have a fragmentColorTransform, other derivations may,
        // so we still mark them.
        fragmentShader = fragmentShader.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm, '\n//!BEGIN_POST_CHUNK $1\n$&\n//!END_POST_CHUNK\n');
        fragmentShader = expandShaderIncludes(fragmentShader);
    }
    // Apply custom rewriter function
    if (customRewriter) {
        let res = customRewriter({
            vertexShader,
            fragmentShader
        });
        vertexShader = res.vertexShader;
        fragmentShader = res.fragmentShader;
    }
    // The fragmentColorTransform needs to go before any postprocessing chunks, so extract
    // those and re-insert them into the outro in the correct place:
    if (fragmentColorTransform) {
        let postChunks = [];
        fragmentShader = fragmentShader.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm, (match)=>{
            postChunks.push(match);
            return '';
        });
        fragmentMainOutro = `${fragmentColorTransform}\n${postChunks.join('\n')}\n${fragmentMainOutro}`;
    }
    // Inject auto-updating time uniform if requested
    if (timeUniform) {
        const code = `\nuniform float ${timeUniform};\n`;
        vertexDefs = code + vertexDefs;
        fragmentDefs = code + fragmentDefs;
    }
    // Inject a function for the vertexTransform and rename all usages of position/normal/uv
    if (vertexTransform) {
        // Hoist these defs to the very top so they work in other function defs
        vertexShader = `vec3 troika_position_${key};
vec3 troika_normal_${key};
vec2 troika_uv_${key};
${vertexShader}
`;
        vertexDefs = `${vertexDefs}
void troikaVertexTransform${key}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${vertexTransform}
}
`;
        vertexMainIntro = `
troika_position_${key} = vec3(position);
troika_normal_${key} = vec3(normal);
troika_uv_${key} = vec2(uv);
troikaVertexTransform${key}(troika_position_${key}, troika_normal_${key}, troika_uv_${key});
${vertexMainIntro}
`;
        vertexShader = vertexShader.replace(/\b(position|normal|uv)\b/g, (match, match1, index, fullStr)=>{
            return /\battribute\s+vec[23]\s+$/.test(fullStr.substr(0, index)) ? match1 : `troika_${match1}_${key}`;
        });
        // Three r152 introduced the MAP_UV token, replace it too if it's pointing to the main 'uv'
        // Perhaps the other textures too going forward?
        if (!(material.map && material.map.channel > 0)) {
            vertexShader = vertexShader.replace(/\bMAP_UV\b/g, `troika_uv_${key}`);
        }
    }
    // Inject defs and intro/outro snippets
    vertexShader = injectIntoShaderCode(vertexShader, key, vertexDefs, vertexMainIntro, vertexMainOutro);
    fragmentShader = injectIntoShaderCode(fragmentShader, key, fragmentDefs, fragmentMainIntro, fragmentMainOutro);
    return {
        vertexShader,
        fragmentShader
    };
}
function injectIntoShaderCode(shaderCode, id, defs, intro, outro) {
    if (intro || outro || defs) {
        shaderCode = shaderCode.replace(voidMainRegExp, `
${defs}
void troikaOrigMain${id}() {`);
        shaderCode += `
void main() {
  ${intro}
  troikaOrigMain${id}();
  ${outro}
}`;
    }
    return shaderCode;
}
function optionsJsonReplacer(key, value) {
    return key === 'uniforms' ? undefined : typeof value === 'function' ? value.toString() : value;
}
let _idCtr = 0;
const optionsHashesToIds = new Map();
function getKeyForOptions(options) {
    const optionsHash = JSON.stringify(options, optionsJsonReplacer);
    let id = optionsHashesToIds.get(optionsHash);
    if (id == null) {
        optionsHashesToIds.set(optionsHash, id = ++_idCtr);
    }
    return id;
}
// Copied from threejs WebGLPrograms.js so we can resolve builtin materials to their shaders
// TODO how can we keep this from getting stale?
const MATERIAL_TYPES_TO_SHADERS = {
    MeshDepthMaterial: 'depth',
    MeshDistanceMaterial: 'distanceRGBA',
    MeshNormalMaterial: 'normal',
    MeshBasicMaterial: 'basic',
    MeshLambertMaterial: 'lambert',
    MeshPhongMaterial: 'phong',
    MeshToonMaterial: 'toon',
    MeshStandardMaterial: 'physical',
    MeshPhysicalMaterial: 'physical',
    MeshMatcapMaterial: 'matcap',
    LineBasicMaterial: 'basic',
    LineDashedMaterial: 'dashed',
    PointsMaterial: 'points',
    ShadowMaterial: 'shadow',
    SpriteMaterial: 'sprite'
};
/**
 * Given a Three.js `Material` instance, find the shaders/uniforms that will be
 * used to render that material.
 *
 * @param material - the Material instance
 * @return {object} - the material's shader info: `{uniforms:{}, fragmentShader:'', vertexShader:''}`
 */ function getShadersForMaterial(material) {
    let builtinType = MATERIAL_TYPES_TO_SHADERS[material.type];
    return builtinType ? __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ShaderLib"][builtinType] : material //TODO fallback for unknown type?
    ;
}
/**
 * Find all uniforms and their types within a shader code string.
 *
 * @param {string} shader - The shader code to parse
 * @return {object} mapping of uniform names to their glsl type
 */ function getShaderUniformTypes(shader) {
    let uniformRE = /\buniform\s+(int|float|vec[234]|mat[34])\s+([A-Za-z_][\w]*)/g;
    let uniforms = Object.create(null);
    let match;
    while((match = uniformRE.exec(shader)) !== null){
        uniforms[match[2]] = match[1];
    }
    return uniforms;
}
/**
 * Helper for smoothing out the `m.getInverse(x)` --> `m.copy(x).invert()` conversion
 * that happened in ThreeJS r123.
 * @param {Matrix4} srcMatrix
 * @param {Matrix4} [tgtMatrix]
 */ function invertMatrix4(srcMatrix, tgtMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]()) {
    if (typeof tgtMatrix.invert === 'function') {
        tgtMatrix.copy(srcMatrix).invert();
    } else {
        tgtMatrix.getInverse(srcMatrix);
    }
    return tgtMatrix;
}
/*
Input geometry is a cylinder with r=1, height in y dimension from 0 to 1,
divided into a reasonable number of height segments.
*/ const vertexDefs = `
uniform vec3 pointA;
uniform vec3 controlA;
uniform vec3 controlB;
uniform vec3 pointB;
uniform float radius;
varying float bezierT;

vec3 cubicBezier(vec3 p1, vec3 c1, vec3 c2, vec3 p2, float t) {
  float t2 = 1.0 - t;
  float b0 = t2 * t2 * t2;
  float b1 = 3.0 * t * t2 * t2;
  float b2 = 3.0 * t * t * t2;
  float b3 = t * t * t;
  return b0 * p1 + b1 * c1 + b2 * c2 + b3 * p2;
}

vec3 cubicBezierDerivative(vec3 p1, vec3 c1, vec3 c2, vec3 p2, float t) {
  float t2 = 1.0 - t;
  return -3.0 * p1 * t2 * t2 +
    c1 * (3.0 * t2 * t2 - 6.0 * t2 * t) +
    c2 * (6.0 * t2 * t - 3.0 * t * t) +
    3.0 * p2 * t * t;
}
`;
const vertexTransform = `
float t = position.y;
bezierT = t;
vec3 bezierCenterPos = cubicBezier(pointA, controlA, controlB, pointB, t);
vec3 bezierDir = normalize(cubicBezierDerivative(pointA, controlA, controlB, pointB, t));

// Make "sideways" always perpendicular to the camera ray; this ensures that any twists
// in the cylinder occur where you won't see them: 
vec3 viewDirection = normalMatrix * vec3(0.0, 0.0, 1.0);
if (bezierDir == viewDirection) {
  bezierDir = normalize(cubicBezierDerivative(pointA, controlA, controlB, pointB, t == 1.0 ? t - 0.0001 : t + 0.0001));
}
vec3 sideways = normalize(cross(bezierDir, viewDirection));
vec3 upish = normalize(cross(sideways, bezierDir));

// Build a matrix for transforming this disc in the cylinder:
mat4 discTx;
discTx[0].xyz = sideways * radius;
discTx[1].xyz = bezierDir * radius;
discTx[2].xyz = upish * radius;
discTx[3].xyz = bezierCenterPos;
discTx[3][3] = 1.0;

// Apply transform, ignoring original y
position = (discTx * vec4(position.x, 0.0, position.z, 1.0)).xyz;
normal = normalize(mat3(discTx) * normal);
`;
const fragmentDefs = `
uniform vec3 dashing;
varying float bezierT;
`;
const fragmentMainIntro = `
if (dashing.x + dashing.y > 0.0) {
  float dashFrac = mod(bezierT - dashing.z, dashing.x + dashing.y);
  if (dashFrac > dashing.x) {
    discard;
  }
}
`;
// Debugging: separate color for each of the 6 sides:
// const fragmentColorTransform = `
// float sideNum = floor(vUV.x * 6.0);
// vec3 mixColor = sideNum < 1.0 ? vec3(1.0, 0.0, 0.0) :
//   sideNum < 2.0 ? vec3(0.0, 1.0, 1.0) :
//   sideNum < 3.0 ? vec3(1.0, 1.0, 0.0) :
//   sideNum < 4.0 ? vec3(0.0, 0.0, 1.0) :
//   sideNum < 5.0 ? vec3(0.0, 1.0, 0.0) :
//   vec3(1.0, 0.0, 1.0);
// gl_FragColor.xyz = mix(gl_FragColor.xyz, mixColor, 0.5);
// `
function createBezierMeshMaterial(baseMaterial) {
    return createDerivedMaterial(baseMaterial, {
        chained: true,
        uniforms: {
            pointA: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
            },
            controlA: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
            },
            controlB: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
            },
            pointB: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
            },
            radius: {
                value: 0.01
            },
            dashing: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
            } //on, off, offset
        },
        vertexDefs,
        vertexTransform,
        fragmentDefs,
        fragmentMainIntro
    });
}
let geometry = null;
const defaultBaseMaterial = /*#__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
    color: 0xffffff,
    side: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
});
/**
 * A ThreeJS `Mesh` that bends a tube shape along a 3D cubic bezier path. The bending is done
 * by deforming a straight cylindrical geometry in the vertex shader based on a set of four
 * control point uniforms. It patches the necessary GLSL into the mesh's assigned `material`
 * automatically.
 *
 * The cubiz bezier path is determined by its four `Vector3` properties:
 * - `pointA`
 * - `controlA`
 * - `controlB`
 * - `pointB`
 *
 * The tube's radius is controlled by its `radius` property, which defaults to `0.01`.
 *
 * You can also give the tube a dashed appearance with two properties:
 *
 * - `dashArray` - an array of two numbers, defining the length of "on" and "off" parts of
 *   the dash. Each is a 0-1 ratio of the entire path's length. (Actually this is the `t` length
 *   used as input to the cubic bezier function, not its visible length.)
 * - `dashOffset` - offset of where the dash starts. You can animate this to make the dashes move.
 *
 * Note that the dashes will appear like a hollow tube, not solid. This will be more apparent on
 * thicker tubes.
 *
 * TODO: proper geometry bounding sphere and raycasting
 * TODO: allow control of the geometry's segment counts
 */ class BezierMesh extends __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"] {
    static getGeometry() {
        return geometry || (geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](1, 1, 1, 6, 64).translate(0, 0.5, 0));
    }
    constructor(){
        super(BezierMesh.getGeometry(), defaultBaseMaterial);
        this.pointA = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this.controlA = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this.controlB = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this.pointB = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this.radius = 0.01;
        this.dashArray = new __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
        this.dashOffset = 0;
        // TODO - disabling frustum culling until I figure out how to customize the
        //  geometry's bounding sphere that gets used
        this.frustumCulled = false;
    }
    // Handler for automatically wrapping the base material with our upgrades. We do the wrapping
    // lazily on _read_ rather than write to avoid unnecessary wrapping on transient values.
    get material() {
        let derivedMaterial = this._derivedMaterial;
        const baseMaterial = this._baseMaterial || this._defaultMaterial || (this._defaultMaterial = defaultBaseMaterial.clone());
        if (!derivedMaterial || derivedMaterial.baseMaterial !== baseMaterial) {
            derivedMaterial = this._derivedMaterial = createBezierMeshMaterial(baseMaterial);
            // dispose the derived material when its base material is disposed:
            baseMaterial.addEventListener('dispose', function onDispose() {
                baseMaterial.removeEventListener('dispose', onDispose);
                derivedMaterial.dispose();
            });
        }
        return derivedMaterial;
    }
    set material(baseMaterial) {
        this._baseMaterial = baseMaterial;
    }
    // Create and update material for shadows upon request:
    get customDepthMaterial() {
        return this.material.getDepthMaterial();
    }
    set customDepthMaterial(m) {
    // future: let the user override with their own?
    }
    get customDistanceMaterial() {
        return this.material.getDistanceMaterial();
    }
    set customDistanceMaterial(m) {
    // future: let the user override with their own?
    }
    onBeforeRender() {
        const { uniforms } = this.material;
        const { pointA, controlA, controlB, pointB, radius, dashArray, dashOffset } = this;
        uniforms.pointA.value.copy(pointA);
        uniforms.controlA.value.copy(controlA);
        uniforms.controlB.value.copy(controlB);
        uniforms.pointB.value.copy(pointB);
        uniforms.radius.value = radius;
        uniforms.dashing.value.set(dashArray.x, dashArray.y, dashOffset || 0);
    }
    raycast() {
    // TODO - just fail for now
    }
}
;
}}),
"[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "hasA11yProp": (()=>hasA11yProp),
    "mergeClasses": (()=>mergeClasses),
    "toCamelCase": (()=>toCamelCase),
    "toKebabCase": (()=>toKebabCase),
    "toPascalCase": (()=>toPascalCase)
});
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>defaultAttributes)
});
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>Icon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>createLucideIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Github)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef"
        }
    ],
    [
        "path",
        {
            d: "M9 18c-4.51 2-5-2-7-2",
            key: "9comsn"
        }
    ]
];
const Github = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("github", __iconNode);
;
 //# sourceMappingURL=github.js.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Github": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript)");
}}),
"[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Linkedin)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "c2jq9f"
        }
    ],
    [
        "rect",
        {
            width: "4",
            height: "12",
            x: "2",
            y: "9",
            key: "mk3on5"
        }
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "4",
            r: "2",
            key: "bt5ra8"
        }
    ]
];
const Linkedin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("linkedin", __iconNode);
;
 //# sourceMappingURL=linkedin.js.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Linkedin": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript)");
}}),
"[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Send)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }
    ],
    [
        "path",
        {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }
    ]
];
const Send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("send", __iconNode);
;
 //# sourceMappingURL=send.js.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Send": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)");
}}),
"[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>LoaderCircle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
];
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("loader-circle", __iconNode);
;
 //# sourceMappingURL=loader-circle.js.map
}}),
"[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Loader2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)");
}}),
"[project]/potifolio-main/potifolio-main/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/potifolio-main/potifolio-main/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/potifolio-main/potifolio-main/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const createServerReference = (("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : __turbopack_context__.r("[project]/potifolio-main/potifolio-main/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)")).createServerReference; //# sourceMappingURL=action-client-wrapper.js.map
}}),
}]);

//# sourceMappingURL=e1201_e3538034._.js.map