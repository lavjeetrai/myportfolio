module.exports = {

"[project]/potifolio-main/potifolio-main/src/lib/resume.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "resumeData": (()=>resumeData)
});
const resumeData = {
    name: "Lavjeet Kumar Rai",
    role: "Full Stack Developer & AI/ML Enthusiast",
    about: "I am a Computer Science student specializing in AI & ML, focused on building robust full-stack applications and exploring the intersection of data science and web technology. I have experience in creating financial platforms, healthcare systems, and efficient task management tools.",
    experience: [
        {
            company: "Microsoft Student Community",
            role: "Member",
            period: "Present",
            description: "Active member of a Microsoft Student Community powered lab, collaborating on technical projects and community initiatives."
        }
    ],
    skills: [
        "Java",
        "Python",
        "JavaScript",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Django",
        "PostgreSQL",
        "MongoDB",
        "Tailwind CSS",
        "Supabase",
        "Stripe API",
        "Git",
        "Linux",
        "Data Visualization",
        "Pandas",
        "NumPy"
    ],
    projects: [
        {
            title: "TaxSahyog",
            description: "A full-stack financial application with Next.js 16, Supabase Auth, and Stripe API integration for payment processing.",
            link: "https://taxsahyogbylavjeet.vercel.app/"
        },
        {
            title: "BioNexus",
            description: "A healthcare management platform built with Node.js, Express, and MongoDB, featuring a React-based interactive dashboard.",
            link: "https://quick-start-react.lovable.app/"
        },
        {
            title: "List It",
            description: "A task management web application developed using Django and SQLite3 with a clean HTML/CSS/JS frontend.",
            link: "https://github.com/lavjeetrai"
        }
    ],
    education: [
        {
            school: "SRM University, AP",
            degree: "B.Tech in Computer Science (AI & ML)",
            period: "2025 - Present"
        },
        {
            school: "St. Francis School, Varanasi",
            degree: "Class XII (PCM) - 84.27%",
            period: "2023 - 2024"
        }
    ],
    contact: {
        github: "https://github.com/lavjeetrai",
        linkedin: "https://www.linkedin.com/in/lavjeet-rai/"
    }
};
}}),
"[externals]/module [external] (module, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}}),
"[project]/potifolio-main/potifolio-main/src/components/Scene.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Scene)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/core/Float.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshDistortMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/core/MeshDistortMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/core/Sparkles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/core/Stars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/core/Environment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshTransmissionMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/core/MeshTransmissionMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/@react-three/drei/core/Text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function BackgroundText() {
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((state)=>{
        const time = state.clock.getElapsedTime();
        textRef.current.rotation.y = time * 0.3;
        textRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: textRef,
        position: [
            0,
            0,
            -5
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Float"], {
            speed: 2,
            rotationIntensity: 0.5,
            floatIntensity: 0.5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                fontSize: 6,
                color: "#ffffff",
                anchorX: "center",
                anchorY: "middle",
                maxWidth: 20,
                lineHeight: 1,
                font: "https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkFtoMM3T6rjif3Prf0vI0.woff",
                fillOpacity: 0.6,
                strokeWidth: 0.05,
                strokeColor: "#3b82f6",
                strokeOpacity: 0.8,
                letterSpacing: 0.1,
                children: "BHUMIHAR"
            }, void 0, false, {
                fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function MovingGrid() {
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((state)=>{
        const time = state.clock.getElapsedTime();
        gridRef.current.position.z = time * 1.5 % 4;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            0,
            -10,
            0
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("gridHelper", {
            ref: gridRef,
            args: [
                100,
                25,
                "#1e1e1e",
                "#0a0a0a"
            ],
            rotation: [
                0,
                0,
                0
            ]
        }, void 0, false, {
            fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
function ParticleBackground() {
    const points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const p = new Float32Array(3000 * 3);
        for(let i = 0; i < 3000; i++){
            p[i * 3] = (Math.random() - 0.5) * 25;
            p[i * 3 + 1] = (Math.random() - 0.5) * 25;
            p[i * 3 + 2] = (Math.random() - 0.5) * 15;
        }
        return p;
    }, []);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((state)=>{
        const time = state.clock.getElapsedTime();
        ref.current.rotation.y = time * 0.03;
        ref.current.rotation.x = Math.sin(time * 0.05) * 0.05;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                    attach: "attributes-position",
                    count: points.length / 3,
                    array: points,
                    itemSize: 3
                }, void 0, false, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                size: 0.015,
                color: "#ffffff",
                transparent: true,
                opacity: 0.2,
                sizeAttenuation: true
            }, void 0, false, {
                fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
function Shapes({ scrollYProgress }) {
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const meshRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const meshRef3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((state)=>{
        const progress = scrollYProgress.get();
        const time = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.position.y = progress * 4;
            groupRef.current.rotation.y = progress * Math.PI * 0.2;
        }
        meshRef.current.rotation.x = time * 0.1 + progress * Math.PI;
        meshRef.current.rotation.y = time * 0.15;
        meshRef2.current.rotation.x = -time * 0.2;
        meshRef2.current.rotation.z = time * 0.1 + progress * Math.PI;
        meshRef3.current.position.y = Math.sin(time * 0.5) * 0.5;
        meshRef3.current.rotation.x = time * 0.3;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Float"], {
                speed: 2,
                rotationIntensity: 1,
                floatIntensity: 1,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    ref: meshRef,
                    position: [
                        4,
                        0,
                        -5
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("octahedronGeometry", {
                            args: [
                                2,
                                0
                            ]
                        }, void 0, false, {
                            fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshDistortMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshDistortMaterial"], {
                            color: "#1a1a1a",
                            speed: 1.5,
                            distort: 0.4,
                            radius: 1,
                            metalness: 1,
                            roughness: 0.2,
                            emissive: "#222"
                        }, void 0, false, {
                            fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                    lineNumber: 127,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Float"], {
                speed: 1.5,
                rotationIntensity: 2,
                floatIntensity: 2,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    ref: meshRef2,
                    position: [
                        -5,
                        -4,
                        -8
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("icosahedronGeometry", {
                            args: [
                                3,
                                1
                            ]
                        }, void 0, false, {
                            fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshTransmissionMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshTransmissionMaterial"], {
                            backside: true,
                            samples: 4,
                            thickness: 1,
                            chromaticAberration: 0.02,
                            anisotropy: 0.1,
                            distortion: 0.1,
                            distortionScale: 0.1,
                            temporalDistortion: 0.1,
                            color: "#050505"
                        }, void 0, false, {
                            fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Float"], {
                speed: 3,
                rotationIntensity: 0.5,
                floatIntensity: 0.5,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    ref: meshRef3,
                    position: [
                        0,
                        -8,
                        -10
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                            args: [
                                5,
                                0.02,
                                16,
                                100
                            ]
                        }, void 0, false, {
                            fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#333",
                            emissive: "#111"
                        }, void 0, false, {
                            fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
function DarkNebula() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((state)=>{
        const time = state.clock.getElapsedTime();
        ref.current.rotation.z = time * 0.05;
        ref.current.rotation.x = time * 0.02;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: ref,
        position: [
            0,
            0,
            -15
        ],
        scale: [
            50,
            50,
            50
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                args: [
                    1,
                    32,
                    32
                ]
            }, void 0, false, {
                fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                color: "#050505",
                emissive: "#0a0a0a",
                side: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackSide"],
                wireframe: false
            }, void 0, false, {
                fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
function Scene() {
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 -z-10 h-screen w-full bg-[radial-gradient(circle_at_center,_#111_0%,_#000_100%)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            dpr: [
                1,
                2
            ],
            camera: {
                position: [
                    0,
                    0,
                    10
                ],
                fov: 50
            },
            gl: {
                alpha: true
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fog", {
                    attach: "fog",
                    args: [
                        "#000000",
                        5,
                        25
                    ]
                }, void 0, false, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: 0.1
                }, void 0, false, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("spotLight", {
                    position: [
                        15,
                        15,
                        15
                    ],
                    angle: 0.15,
                    penumbra: 1,
                    intensity: 2,
                    color: "#444"
                }, void 0, false, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        -15,
                        -15,
                        -15
                    ],
                    intensity: 1,
                    color: "#222"
                }, void 0, false, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        0,
                        5,
                        5
                    ],
                    intensity: 0.5,
                    color: "#3b82f6"
                }, void 0, false, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stars"], {
                    radius: 100,
                    depth: 50,
                    count: 7000,
                    factor: 4,
                    saturation: 0,
                    fade: true,
                    speed: 1
                }, void 0, false, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sparkles"], {
                    count: 150,
                    scale: 25,
                    size: 1,
                    speed: 0.3,
                    opacity: 0.1,
                    color: "#ffffff"
                }, void 0, false, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticleBackground, {}, void 0, false, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                    lineNumber: 208,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MovingGrid, {}, void 0, false, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                    lineNumber: 209,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundText, {}, void 0, false, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                    lineNumber: 210,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Shapes, {
                    scrollYProgress: scrollYProgress
                }, void 0, false, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                    lineNumber: 211,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DarkNebula, {}, void 0, false, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                    lineNumber: 212,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Environment"], {
                    preset: "night"
                }, void 0, false, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
            lineNumber: 195,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/potifolio-main/potifolio-main/src/components/Scene.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
}}),
"[project]/potifolio-main/potifolio-main/src/components/CursorTrail.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CursorTrail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const COLORS = [
    '#00f2ff',
    '#0066ff',
    '#7000ff',
    '#ff00d0',
    '#ff0055',
    '#ff9900',
    '#ccff00',
    '#00ff99',
    '#3b82f6',
    '#8b5cf6',
    '#ec4899',
    '#f43f5e',
    '#10b981'
];
function CursorTrail() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        let animationFrameId;
        const resize = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        const addPoint = (x, y)=>{
            const color = COLORS[Math.floor(Math.random() * COLORS.length)];
            pointsRef.current.push({
                x,
                y,
                age: 0,
                color
            });
        };
        const onMouseMove = (e)=>{
            mouseRef.current = {
                x: e.clientX,
                y: e.clientY
            };
            addPoint(e.clientX, e.clientY);
        };
        const onTouchMove = (e)=>{
            if (e.touches[0]) {
                const touch = e.touches[0];
                mouseRef.current = {
                    x: touch.clientX,
                    y: touch.clientY
                };
                addPoint(touch.clientX, touch.clientY);
            }
        };
        const animate = ()=>{
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const points = pointsRef.current;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            const MAX_AGE = 120;
            for(let i = 0; i < points.length; i++){
                const p = points[i];
                p.age += 1;
                if (p.age > MAX_AGE) {
                    points.splice(i, 1);
                    i--;
                    continue;
                }
                if (i > 0) {
                    const prevP = points[i - 1];
                    const opacity = 1 - p.age / MAX_AGE;
                    ctx.beginPath();
                    ctx.moveTo(prevP.x, prevP.y);
                    ctx.lineTo(p.x, p.y);
                    ctx.strokeStyle = p.color;
                    ctx.globalAlpha = opacity;
                    ctx.lineWidth = 6 * opacity;
                    ctx.stroke();
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('touchmove', onTouchMove);
        resize();
        animate();
        return ()=>{
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('touchmove', onTouchMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 pointer-events-none z-[9999]",
        style: {
            mixBlendMode: 'screen'
        }
    }, void 0, false, {
        fileName: "[project]/potifolio-main/potifolio-main/src/components/CursorTrail.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
}}),
"[project]/potifolio-main/potifolio-main/src/components/PixelBackground.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PixelBackground)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function PixelBackground({ isVisible }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [imageLoaded, setImageLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", {
            willReadFrequently: true
        });
        if (!ctx) return;
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";
        const render = ()=>{
            if (!img.complete) return;
            const width = window.innerWidth;
            const height = window.innerHeight;
            if (width === 0 || height === 0) return;
            canvas.width = width;
            canvas.height = height;
            // Pixelation factor
            const pixelSize = 10;
            const w = Math.ceil(width / pixelSize);
            const h = Math.ceil(height / pixelSize);
            if (w === 0 || h === 0) return;
            // Draw small version
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(img, 0, 0, w, h);
            // Scale up
            ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
        };
        img.onload = ()=>{
            setImageLoaded(true);
            render();
        };
        window.addEventListener("resize", render);
        return ()=>{
            window.removeEventListener("resize", render);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 1
        },
        animate: {
            opacity: isVisible ? 1 : 0
        },
        transition: {
            duration: 1.5,
            ease: "easeInOut"
        },
        className: "fixed inset-0 z-0 pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "w-full h-full object-cover grayscale opacity-40"
            }, void 0, false, {
                fileName: "[project]/potifolio-main/potifolio-main/src/components/PixelBackground.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60"
            }, void 0, false, {
                fileName: "[project]/potifolio-main/potifolio-main/src/components/PixelBackground.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/potifolio-main/potifolio-main/src/components/PixelBackground.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
}}),
"[project]/potifolio-main/potifolio-main/src/app/data:7a5ffd [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"404137bb78b9e04fc8f19cb6dde06e79c2de9285bc":"sendEmail"},"potifolio-main/potifolio-main/src/app/actions.ts",""] */ __turbopack_context__.s({
    "sendEmail": (()=>sendEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var sendEmail = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("404137bb78b9e04fc8f19cb6dde06e79c2de9285bc", __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "sendEmail"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IFJlc2VuZCB9IGZyb20gJ3Jlc2VuZCc7XG5pbXBvcnQgeyBFbWFpbFRlbXBsYXRlIH0gZnJvbSAnQC9jb21wb25lbnRzL0VtYWlsVGVtcGxhdGUnO1xuaW1wb3J0IHsgcmVzdW1lRGF0YSB9IGZyb20gJ0AvbGliL3Jlc3VtZSc7XG5cbi8vIEluaXRpYWxpemUgbGF6aWx5IHRvIGF2b2lkIGNyYXNoIGlmIEFQSSBrZXkgaXMgbWlzc2luZyBkdXJpbmcgbW9kdWxlIGV2YWx1YXRpb25cbmxldCByZXNlbmRJbnN0YW5jZTogUmVzZW5kIHwgbnVsbCA9IG51bGw7XG5cbmZ1bmN0aW9uIGdldFJlc2VuZCgpIHtcbiAgaWYgKCFyZXNlbmRJbnN0YW5jZSkge1xuICAgIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52LlJFU0VORF9BUElfS0VZO1xuICAgIGlmICghYXBpS2V5KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmVzZW5kSW5zdGFuY2UgPSBuZXcgUmVzZW5kKGFwaUtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc2VuZEluc3RhbmNlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZEVtYWlsKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJykgYXMgc3RyaW5nO1xuICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldCgnZW1haWwnKSBhcyBzdHJpbmc7XG4gIGNvbnN0IG1lc3NhZ2UgPSBmb3JtRGF0YS5nZXQoJ21lc3NhZ2UnKSBhcyBzdHJpbmc7XG5cbiAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhbWVzc2FnZSkge1xuICAgIHJldHVybiB7IGVycm9yOiAnUGxlYXNlIGZpbGwgaW4gYWxsIGZpZWxkcy4nIH07XG4gIH1cblxuICBjb25zdCByZXNlbmQgPSBnZXRSZXNlbmQoKTtcbiAgaWYgKCFyZXNlbmQpIHtcbiAgICBjb25zb2xlLmVycm9yKCdSRVNFTkRfQVBJX0tFWSBpcyBub3QgY29uZmlndXJlZCcpO1xuICAgIHJldHVybiB7IGVycm9yOiAnRW1haWwgc2VydmljZSBpcyBub3QgY29uZmlndXJlZC4gUGxlYXNlIHNldCBSRVNFTkRfQVBJX0tFWS4nIH07XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHRvRW1haWwgPSBwcm9jZXNzLmVudi5DT05UQUNUX0VNQUlMIHx8ICdsYXZqZWV0a3VtYXJyYWlAZ21haWwuY29tJztcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xuICAgICAgZnJvbTogJ1BvcnRmb2xpbyBDb250YWN0IDxvbmJvYXJkaW5nQHJlc2VuZC5kZXY+JyxcbiAgICAgIHRvOiBbdG9FbWFpbF0sXG4gICAgICBzdWJqZWN0OiBgTmV3IG1lc3NhZ2UgZnJvbSAke25hbWV9YCxcbiAgICAgIHJlYWN0OiBFbWFpbFRlbXBsYXRlKHsgbmFtZSwgZW1haWwsIG1lc3NhZ2UgfSksXG4gICAgfSk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1Jlc2VuZCBlcnJvcjonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byBzZW5kIG1lc3NhZ2UuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignRW1haWwgYWN0aW9uIGVycm9yOicsIGVycik7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkLicgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtVEFvQnNCIn0=
}}),
"[project]/potifolio-main/potifolio-main/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$lib$2f$resume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/src/lib/resume.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$components$2f$Scene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/src/components/Scene.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$components$2f$CursorTrail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/src/components/CursorTrail.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$components$2f$PixelBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/src/components/PixelBackground.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/react-icons/si/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$app$2f$data$3a$7a5ffd__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/src/app/data:7a5ffd [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/potifolio-main/potifolio-main/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
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
;
function Section({ title, children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `min-h-screen flex flex-col justify-center px-8 md:px-24 py-20 relative z-10 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                initial: {
                    opacity: 0,
                    x: -20
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    duration: 0.8
                },
                className: "text-4xl md:text-6xl font-bold mb-12 tracking-tighter text-white",
                children: title
            }, void 0, false, {
                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
function Home() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hasMoved, setHasMoved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleInteraction = ()=>{
            if (!hasMoved) setHasMoved(true);
        };
        window.addEventListener("mousemove", handleInteraction, {
            once: true
        });
        window.addEventListener("touchmove", handleInteraction, {
            once: true
        });
        window.addEventListener("scroll", handleInteraction, {
            once: true
        });
        return ()=>{
            window.removeEventListener("mousemove", handleInteraction);
            window.removeEventListener("touchmove", handleInteraction);
            window.removeEventListener("scroll", handleInteraction);
        };
    }, [
        hasMoved
    ]);
    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const form = e.currentTarget;
        startTransition(async ()=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$app$2f$data$3a$7a5ffd__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["sendEmail"])(formData);
            if (result.error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(result.error);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Message sent successfully!");
                form.reset();
            }
        });
    }
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.1
    ], [
        1,
        0
    ]);
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.1
    ], [
        1,
        0.8
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        ref: containerRef,
        className: "relative text-white overflow-hidden selection:bg-blue-500/30 bg-transparent",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$components$2f$Scene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$components$2f$PixelBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isVisible: !hasMoved
            }, void 0, false, {
                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$components$2f$CursorTrail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-8 right-8 z-50 flex flex-col md:flex-row items-end md:items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                        href: "#contact",
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1,
                            delay: 1.3
                        },
                        className: "flex items-center gap-2 px-4 py-2 bg-red-500/10 backdrop-blur-md border border-red-500/20 rounded-full hover:bg-red-500/20 transition-all group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SiGmail"], {
                                className: "w-5 h-5 text-red-500 group-hover:scale-110 transition-transform"
                            }, void 0, false, {
                                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium hidden md:block text-red-500",
                                children: "Gmail"
                            }, void 0, false, {
                                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$lib$2f$resume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resumeData"].contact.github,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1,
                            delay: 1.5
                        },
                        className: "flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 transition-all group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                className: "w-5 h-5 group-hover:scale-110 transition-transform"
                            }, void 0, false, {
                                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium hidden md:block",
                                children: "GitHub"
                            }, void 0, false, {
                                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$lib$2f$resume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resumeData"].contact.linkedin,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1,
                            delay: 1.7
                        },
                        className: "flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-md border border-blue-500/20 rounded-full hover:bg-blue-500/20 transition-all group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                className: "w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform"
                            }, void 0, false, {
                                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium hidden md:block text-blue-400",
                                children: "LinkedIn"
                            }, void 0, false, {
                                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "h-screen flex flex-col items-center justify-center relative px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            opacity,
                            scale
                        },
                        className: "text-center z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 1,
                                    delay: 0.2
                                },
                                className: "text-6xl md:text-9xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$lib$2f$resume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resumeData"].name
                            }, void 0, false, {
                                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 1,
                                    delay: 0.4
                                },
                                className: "text-xl md:text-2xl text-zinc-400 font-light tracking-widest uppercase mb-8",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$lib$2f$resume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resumeData"].role
                            }, void 0, false, {
                                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 1,
                                    delay: 0.6
                                },
                                className: "flex flex-wrap justify-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$lib$2f$resume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resumeData"].contact.github,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this),
                                            "GitHub"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$lib$2f$resume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resumeData"].contact.linkedin,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this),
                                            "LinkedIn"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#contact",
                                        className: "inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SiGmail"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this),
                                            "Gmail"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 1,
                            delay: 1
                        },
                        className: "absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs uppercase tracking-[0.3em] text-zinc-500",
                                children: "Scroll to explore"
                            }, void 0, false, {
                                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "About",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.8
                    },
                    className: "text-2xl md:text-4xl text-zinc-300 max-w-4xl leading-tight font-light",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$lib$2f$resume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resumeData"].about
                }, void 0, false, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Experience",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-12 max-w-5xl",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$lib$2f$resume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resumeData"].experience.map((exp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8,
                                delay: i * 0.1
                            },
                            className: "border-l border-zinc-800 pl-8 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute w-2 h-2 bg-blue-500 rounded-full -left-[5px] top-2"
                                }, void 0, false, {
                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold text-white mb-1",
                                    children: exp.role
                                }, void 0, false, {
                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-blue-400 font-medium mb-2",
                                    children: [
                                        exp.company,
                                        " | ",
                                        exp.period
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-zinc-400 text-lg leading-relaxed",
                                    children: exp.description
                                }, void 0, false, {
                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Capabilities",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-4 max-w-4xl",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$lib$2f$resume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resumeData"].skills.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                            initial: {
                                opacity: 0,
                                scale: 0.9
                            },
                            whileInView: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                duration: 0.4,
                                delay: i * 0.05
                            },
                            className: "px-6 py-3 border border-zinc-800 rounded-full text-zinc-300 hover:bg-white hover:text-black transition-colors duration-300 cursor-default",
                            children: skill
                        }, i, false, {
                            fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                    lineNumber: 221,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Selected Works",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-8 max-w-6xl",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$lib$2f$resume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resumeData"].projects.map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            className: "group relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"
                                }, void 0, false, {
                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-white mb-2",
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-zinc-400 mb-4",
                                            children: project.description
                                        }, void 0, false, {
                                            fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: project.link,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center text-sm font-bold uppercase tracking-widest text-white border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-colors",
                                            children: "View Live Project"
                                        }, void 0, false, {
                                            fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                            lineNumber: 240,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                    lineNumber: 238,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contact",
                className: "min-h-screen flex flex-col justify-center px-8 md:px-24 py-20 bg-zinc-950/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-20 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-6xl font-bold mb-12 tracking-tighter text-white",
                                    children: "Education"
                                }, void 0, false, {
                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$lib$2f$resume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resumeData"].education.map((edu, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0
                                        },
                                        whileInView: {
                                            opacity: 1
                                        },
                                        className: "mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-white",
                                                children: edu.school
                                            }, void 0, false, {
                                                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-zinc-400",
                                                children: [
                                                    edu.degree,
                                                    " | ",
                                                    edu.period
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-5xl md:text-8xl font-bold mb-8 tracking-tighter",
                                            children: "Let's connect."
                                        }, void 0, false, {
                                            fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                            lineNumber: 278,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4 mt-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                                    href: "#contact",
                                                    whileHover: {
                                                        scale: 1.1
                                                    },
                                                    whileTap: {
                                                        scale: 0.9
                                                    },
                                                    className: "p-4 bg-red-500/10 border border-red-500/20 rounded-full hover:bg-red-500/20 transition-colors group",
                                                    title: "Email me",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SiGmail"], {
                                                        className: "w-8 h-8 text-red-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$lib$2f$resume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resumeData"].contact.github,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    whileHover: {
                                                        scale: 1.1
                                                    },
                                                    whileTap: {
                                                        scale: 0.9
                                                    },
                                                    className: "p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                        className: "w-8 h-8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$lib$2f$resume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resumeData"].contact.linkedin,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    whileHover: {
                                                        scale: 1.1
                                                    },
                                                    whileTap: {
                                                        scale: 0.9
                                                    },
                                                    className: "p-4 bg-blue-500/10 border border-blue-500/20 rounded-full hover:bg-blue-500/20 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                        className: "w-8 h-8 text-blue-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                            lineNumber: 279,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            className: "bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-3xl font-bold mb-8 tracking-tight",
                                    children: "Leave your information"
                                }, void 0, false, {
                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                    lineNumber: 319,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "space-y-6",
                                    onSubmit: handleSubmit,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs uppercase tracking-widest text-zinc-500 font-bold",
                                                    children: "Your Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "name",
                                                    required: true,
                                                    placeholder: "John Doe",
                                                    className: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                            lineNumber: 321,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs uppercase tracking-widest text-zinc-500 font-bold",
                                                    children: "Email Address"
                                                }, void 0, false, {
                                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    name: "email",
                                                    required: true,
                                                    placeholder: "john@example.com",
                                                    className: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs uppercase tracking-widest text-zinc-500 font-bold",
                                                    children: "Message"
                                                }, void 0, false, {
                                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    name: "message",
                                                    required: true,
                                                    placeholder: "Tell me about your project...",
                                                    rows: 4,
                                                    className: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                            lineNumber: 341,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isPending,
                                            className: "w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]",
                                            children: [
                                                isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "w-5 h-5 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 19
                                                }, this),
                                                isPending ? "Sending..." : "Send Message"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                            lineNumber: 351,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                            lineNumber: 313,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                    lineNumber: 262,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "px-8 md:px-24 py-8 border-t border-zinc-900 flex justify-between text-zinc-600 text-xs uppercase tracking-widest",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "© 2026 ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$src$2f$lib$2f$resume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resumeData"].name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$potifolio$2d$main$2f$potifolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Built with Next.js & Three.js"
                    }, void 0, false, {
                        fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/potifolio-main/potifolio-main/src/app/page.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__e983fd23._.js.map