"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@restart";
exports.ids = ["vendor-chunks/@restart"];
exports.modules = {

/***/ "(ssr)/./node_modules/@restart/hooks/esm/useMergedRefs.js":
/*!**********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useMergedRefs.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   mergeRefs: () => (/* binding */ mergeRefs)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst toFnRef = ref => !ref || typeof ref === 'function' ? ref : value => {\n  ref.current = value;\n};\nfunction mergeRefs(refA, refB) {\n  const a = toFnRef(refA);\n  const b = toFnRef(refB);\n  return value => {\n    if (a) a(value);\n    if (b) b(value);\n  };\n}\n\n/**\n * Create and returns a single callback ref composed from two other Refs.\n *\n * ```tsx\n * const Button = React.forwardRef((props, ref) => {\n *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();\n *   const mergedRef = useMergedRefs(ref, attachRef);\n *\n *   return <button ref={mergedRef} {...props}/>\n * })\n * ```\n *\n * @param refA A Callback or mutable Ref\n * @param refB A Callback or mutable Ref\n * @category refs\n */\nfunction useMergedRefs(refA, refB) {\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => mergeRefs(refA, refB), [refA, refB]);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMergedRefs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZU1lcmdlZFJlZnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsWUFBWSxTQUFTO0FBQzlDLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOENBQU87QUFDaEI7QUFDQSxpRUFBZSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhbnNsby1uZXh0Ly4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VNZXJnZWRSZWZzLmpzPzIzZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IHRvRm5SZWYgPSByZWYgPT4gIXJlZiB8fCB0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nID8gcmVmIDogdmFsdWUgPT4ge1xuICByZWYuY3VycmVudCA9IHZhbHVlO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVJlZnMocmVmQSwgcmVmQikge1xuICBjb25zdCBhID0gdG9GblJlZihyZWZBKTtcbiAgY29uc3QgYiA9IHRvRm5SZWYocmVmQik7XG4gIHJldHVybiB2YWx1ZSA9PiB7XG4gICAgaWYgKGEpIGEodmFsdWUpO1xuICAgIGlmIChiKSBiKHZhbHVlKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybnMgYSBzaW5nbGUgY2FsbGJhY2sgcmVmIGNvbXBvc2VkIGZyb20gdHdvIG90aGVyIFJlZnMuXG4gKlxuICogYGBgdHN4XG4gKiBjb25zdCBCdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gKiAgIGNvbnN0IFtlbGVtZW50LCBhdHRhY2hSZWZdID0gdXNlQ2FsbGJhY2tSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KCk7XG4gKiAgIGNvbnN0IG1lcmdlZFJlZiA9IHVzZU1lcmdlZFJlZnMocmVmLCBhdHRhY2hSZWYpO1xuICpcbiAqICAgcmV0dXJuIDxidXR0b24gcmVmPXttZXJnZWRSZWZ9IHsuLi5wcm9wc30vPlxuICogfSlcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSByZWZBIEEgQ2FsbGJhY2sgb3IgbXV0YWJsZSBSZWZcbiAqIEBwYXJhbSByZWZCIEEgQ2FsbGJhY2sgb3IgbXV0YWJsZSBSZWZcbiAqIEBjYXRlZ29yeSByZWZzXG4gKi9cbmZ1bmN0aW9uIHVzZU1lcmdlZFJlZnMocmVmQSwgcmVmQikge1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiBtZXJnZVJlZnMocmVmQSwgcmVmQiksIFtyZWZBLCByZWZCXSk7XG59XG5leHBvcnQgZGVmYXVsdCB1c2VNZXJnZWRSZWZzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@restart/hooks/esm/useMergedRefs.js\n");

/***/ })

};
;