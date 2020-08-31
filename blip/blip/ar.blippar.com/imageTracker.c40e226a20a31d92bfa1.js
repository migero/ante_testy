!(function (e) {
    function t(t) {
        for (var n, a, u = t[0], s = t[1], l = t[2], f = 0, d = []; f < u.length; f++) (a = u[f]), Object.prototype.hasOwnProperty.call(o, a) && o[a] && d.push(o[a][0]), (o[a] = 0);
        for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
        for (c && c(t); d.length; ) d.shift()();
        return i.push.apply(i, l || []), r();
    }
    function r() {
        for (var e, t = 0; t < i.length; t++) {
            for (var r = i[t], n = !0, u = 1; u < r.length; u++) {
                var s = r[u];
                0 !== o[s] && (n = !1);
            }
            n && (i.splice(t--, 1), (e = a((a.s = r[0]))));
        }
        return e;
    }
    var n = {},
        o = { 7: 0, 9: 0 },
        i = [];
    function a(t) {
        if (n[t]) return n[t].exports;
        var r = (n[t] = { i: t, l: !1, exports: {} });
        return e[t].call(r.exports, r, r.exports, a), (r.l = !0), r.exports;
    }
    (a.m = e),
        (a.c = n),
        (a.d = function (e, t, r) {
            a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (a.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (a.t = function (e, t) {
            if ((1 & t && (e = a(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if ((a.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var n in e)
                    a.d(
                        r,
                        n,
                        function (t) {
                            return e[t];
                        }.bind(null, n)
                    );
            return r;
        }),
        (a.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return a.d(t, "a", t), t;
        }),
        (a.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (a.p = "");
    var u = (window.webpackJsonp = window.webpackJsonp || []),
        s = u.push.bind(u);
    (u.push = t), (u = u.slice());
    for (var l = 0; l < u.length; l++) t(u[l]);
    var c = s;
    i.push([45, 1, 0]), r();
})({
    22: function (e, t, r) {
        "use strict";
        (function (e, n, o) {
            function i(e) {
                return (i =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            var a,
                u =
                    ((a = ""),
                    function (t) {
                        t = void 0 !== (t = t || {}) ? t : {};
                        var u,
                            s = {};
                        for (u in t) t.hasOwnProperty(u) && (s[u] = t[u]);
                        var l = [],
                            c = "./this.program",
                            f = function (e, t) {
                                throw t;
                            },
                            d = !1,
                            m = !1,
                            p = !1,
                            h = !1,
                            g = !1;
                        (d = "object" === ("undefined" == typeof window ? "undefined" : i(window))),
                            (m = "function" == typeof importScripts),
                            (h = "object" === (void 0 === e ? "undefined" : i(e)) && "object" === i(e.versions) && "string" == typeof e.versions.node),
                            (p = h && !d && !m),
                            (g = !d && !p && !m);
                        var y,
                            w,
                            v,
                            _,
                            E = "";
                        function b(e) {
                            return t.locateFile ? t.locateFile(e, E) : E + e;
                        }
                        p
                            ? ((E = n + "/"),
                              (y = function (e, t) {
                                  return v || (v = r(47)), _ || (_ = r(48)), (e = _.normalize(e)), v.readFileSync(e, t ? null : "utf8");
                              }),
                              (w = function (e) {
                                  var t = y(e, !0);
                                  return t.buffer || (t = new Uint8Array(t)), I(t.buffer), t;
                              }),
                              e.argv.length > 1 && (c = e.argv[1].replace(/\\/g, "/")),
                              (l = e.argv.slice(2)),
                              e.on("uncaughtException", function (e) {
                                  if (!(e instanceof Ut)) throw e;
                              }),
                              e.on("unhandledRejection", Ae),
                              (f = function (t) {
                                  e.exit(t);
                              }),
                              (t.inspect = function () {
                                  return "[Emscripten Module object]";
                              }))
                            : g
                            ? ("undefined" != typeof read &&
                                  (y = function (e) {
                                      return read(e);
                                  }),
                              (w = function (e) {
                                  var t;
                                  return "function" == typeof readbuffer ? new Uint8Array(readbuffer(e)) : (I("object" === i((t = read(e, "binary")))), t);
                              }),
                              "undefined" != typeof scriptArgs ? (l = scriptArgs) : void 0 !== arguments && (l = arguments),
                              "function" == typeof quit &&
                                  (f = function (e) {
                                      quit(e);
                                  }),
                              "undefined" != typeof print && ("undefined" == typeof console && (console = {}), (console.log = print), (console.warn = console.error = "undefined" != typeof printErr ? printErr : print)))
                            : (d || m) &&
                              (m ? (E = self.location.href) : document.currentScript && (E = document.currentScript.src),
                              (E = 0 !== (E = a).indexOf("blob:") ? E.substr(0, E.lastIndexOf("/") + 1) : ""),
                              (y = function (e) {
                                  var t = new XMLHttpRequest();
                                  return t.open("GET", e, !1), t.send(null), t.responseText;
                              }),
                              m &&
                                  (w = function (e) {
                                      var t = new XMLHttpRequest();
                                      return t.open("GET", e, !1), (t.responseType = "arraybuffer"), t.send(null), new Uint8Array(t.response);
                                  }));
                        var k = t.print || console.log.bind(console),
                            D = t.printErr || console.warn.bind(console);
                        for (u in s) s.hasOwnProperty(u) && (t[u] = s[u]);
                        (s = null), t.arguments && (l = t.arguments), t.thisProgram && (c = t.thisProgram), t.quit && (f = t.quit);
                        var S = 16;
                        function x(e, t) {
                            return t || (t = S), Math.ceil(e / t) * t;
                        }
                        var M,
                            A,
                            F,
                            z = function (e) {};
                        function P(e, t, r, n) {
                            switch (("*" === (r = r || "i8").charAt(r.length - 1) && (r = "i32"), r)) {
                                case "i1":
                                case "i8":
                                    X[e >> 0] = t;
                                    break;
                                case "i16":
                                    K[e >> 1] = t;
                                    break;
                                case "i32":
                                    Z[e >> 2] = t;
                                    break;
                                case "i64":
                                    (je = [t >>> 0, ((Pe = t), +ve(Pe) >= 1 ? (Pe > 0 ? (0 | be(+Ee(Pe / 4294967296), 4294967295)) >>> 0 : ~~+_e((Pe - +(~~Pe >>> 0)) / 4294967296) >>> 0) : 0)]),
                                        (Z[e >> 2] = je[0]),
                                        (Z[(e + 4) >> 2] = je[1]);
                                    break;
                                case "float":
                                    $[e >> 2] = t;
                                    break;
                                case "double":
                                    Q[e >> 3] = t;
                                    break;
                                default:
                                    Ae("invalid type for setValue: " + r);
                            }
                        }
                        function j(e, t, r) {
                            switch (("*" === (t = t || "i8").charAt(t.length - 1) && (t = "i32"), t)) {
                                case "i1":
                                case "i8":
                                    return X[e >> 0];
                                case "i16":
                                    return K[e >> 1];
                                case "i32":
                                case "i64":
                                    return Z[e >> 2];
                                case "float":
                                    return $[e >> 2];
                                case "double":
                                    return Q[e >> 3];
                                default:
                                    Ae("invalid type for getValue: " + t);
                            }
                            return null;
                        }
                        t.wasmBinary && (M = t.wasmBinary), t.noExitRuntime && (A = t.noExitRuntime), "object" !== ("undefined" == typeof WebAssembly ? "undefined" : i(WebAssembly)) && D("no native wasm support detected");
                        var C = new WebAssembly.Table({ initial: 390, maximum: 390, element: "anyfunc" }),
                            R = !1;
                        function I(e, t) {
                            e || Ae("Assertion failed: " + t);
                        }
                        function T(e) {
                            var r = t["_" + e];
                            return I(r, "Cannot call unknown function " + e + ", make sure it is exported"), r;
                        }
                        function N(e, t, r, n, o) {
                            var i = {
                                    string: function (e) {
                                        var t = 0;
                                        if (null != e && 0 !== e) {
                                            var r = 1 + (e.length << 2);
                                            W(e, (t = Ht(r)), r);
                                        }
                                        return t;
                                    },
                                    array: function (e) {
                                        var t = Ht(e.length);
                                        return V(e, t), t;
                                    },
                                },
                                a = T(e),
                                u = [],
                                s = 0;
                            if (n)
                                for (var l = 0; l < n.length; l++) {
                                    var c = i[r[l]];
                                    c ? (0 === s && (s = Bt()), (u[l] = c(n[l]))) : (u[l] = n[l]);
                                }
                            var f = a.apply(null, u);
                            return (
                                (f = (function (e) {
                                    return "string" === t ? L(e) : "boolean" === t ? Boolean(e) : e;
                                })(f)),
                                0 !== s && Lt(s),
                                f
                            );
                        }
                        function O(e, t, r, n) {
                            var o = (r = r || []).every(function (e) {
                                return "number" === e;
                            });
                            return "string" !== t && o && !n
                                ? T(e)
                                : function () {
                                      return N(e, t, r, arguments);
                                  };
                        }
                        var B = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
                        function H(e, t, r) {
                            for (var n = t + r, o = t; e[o] && !(o >= n); ) ++o;
                            if (o - t > 16 && e.subarray && B) return B.decode(e.subarray(t, o));
                            for (var i = ""; t < o; ) {
                                var a = e[t++];
                                if (128 & a) {
                                    var u = 63 & e[t++];
                                    if (192 != (224 & a)) {
                                        var s = 63 & e[t++];
                                        if ((a = 224 == (240 & a) ? ((15 & a) << 12) | (u << 6) | s : ((7 & a) << 18) | (u << 12) | (s << 6) | (63 & e[t++])) < 65536) i += String.fromCharCode(a);
                                        else {
                                            var l = a - 65536;
                                            i += String.fromCharCode(55296 | (l >> 10), 56320 | (1023 & l));
                                        }
                                    } else i += String.fromCharCode(((31 & a) << 6) | u);
                                } else i += String.fromCharCode(a);
                            }
                            return i;
                        }
                        function L(e, t) {
                            return e ? H(J, e, t) : "";
                        }
                        function U(e, t, r, n) {
                            if (!(n > 0)) return 0;
                            for (var o = r, i = r + n - 1, a = 0; a < e.length; ++a) {
                                var u = e.charCodeAt(a);
                                if ((u >= 55296 && u <= 57343 && (u = (65536 + ((1023 & u) << 10)) | (1023 & e.charCodeAt(++a))), u <= 127)) {
                                    if (r >= i) break;
                                    t[r++] = u;
                                } else if (u <= 2047) {
                                    if (r + 1 >= i) break;
                                    (t[r++] = 192 | (u >> 6)), (t[r++] = 128 | (63 & u));
                                } else if (u <= 65535) {
                                    if (r + 2 >= i) break;
                                    (t[r++] = 224 | (u >> 12)), (t[r++] = 128 | ((u >> 6) & 63)), (t[r++] = 128 | (63 & u));
                                } else {
                                    if (r + 3 >= i) break;
                                    (t[r++] = 240 | (u >> 18)), (t[r++] = 128 | ((u >> 12) & 63)), (t[r++] = 128 | ((u >> 6) & 63)), (t[r++] = 128 | (63 & u));
                                }
                            }
                            return (t[r] = 0), r - o;
                        }
                        function W(e, t, r) {
                            return U(e, J, t, r);
                        }
                        function q(e) {
                            for (var t = 0, r = 0; r < e.length; ++r) {
                                var n = e.charCodeAt(r);
                                n >= 55296 && n <= 57343 && (n = (65536 + ((1023 & n) << 10)) | (1023 & e.charCodeAt(++r))), n <= 127 ? ++t : (t += n <= 2047 ? 2 : n <= 65535 ? 3 : 4);
                            }
                            return t;
                        }
                        function V(e, t) {
                            X.set(e, t);
                        }
                        function Y(e, t, r) {
                            for (var n = 0; n < e.length; ++n) X[t++ >> 0] = e.charCodeAt(n);
                            r || (X[t >> 0] = 0);
                        }
                        "undefined" != typeof TextDecoder && new TextDecoder("utf-16le");
                        var G,
                            X,
                            J,
                            K,
                            Z,
                            $,
                            Q,
                            ee = 65536;
                        function te(e, t) {
                            return e % t > 0 && (e += t - (e % t)), e;
                        }
                        function re(e) {
                            (G = e),
                                (t.HEAP8 = X = new Int8Array(e)),
                                (t.HEAP16 = K = new Int16Array(e)),
                                (t.HEAP32 = Z = new Int32Array(e)),
                                (t.HEAPU8 = J = new Uint8Array(e)),
                                (t.HEAPU16 = new Uint16Array(e)),
                                (t.HEAPU32 = new Uint32Array(e)),
                                (t.HEAPF32 = $ = new Float32Array(e)),
                                (t.HEAPF64 = Q = new Float64Array(e));
                        }
                        var ne = 5281520,
                            oe = 38480,
                            ie = t.TOTAL_MEMORY || 16777216;
                        function ae(e) {
                            for (; e.length > 0; ) {
                                var r = e.shift();
                                if ("function" != typeof r) {
                                    var n = r.func;
                                    "number" == typeof n ? (void 0 === r.arg ? t.dynCall_v(n) : t.dynCall_vi(n, r.arg)) : n(void 0 === r.arg ? null : r.arg);
                                } else r();
                            }
                        }
                        (F = t.wasmMemory ? t.wasmMemory : new WebAssembly.Memory({ initial: ie / ee })) && (G = F.buffer), (ie = G.byteLength), re(G), (Z[oe >> 2] = ne);
                        var ue = [],
                            se = [],
                            le = [],
                            ce = [],
                            fe = [];
                        function de() {
                            if (t.preRun) for ("function" == typeof t.preRun && (t.preRun = [t.preRun]); t.preRun.length; ) ye(t.preRun.shift());
                            ae(ue);
                        }
                        function me() {
                            t.noFSInit || nt.init.initialized || nt.init(), tt.init(), ae(se);
                        }
                        function pe() {
                            (nt.ignorePermissions = !1), ae(le);
                        }
                        function he() {}
                        function ge() {
                            if (t.postRun) for ("function" == typeof t.postRun && (t.postRun = [t.postRun]); t.postRun.length; ) we(t.postRun.shift());
                            ae(fe);
                        }
                        function ye(e) {
                            ue.unshift(e);
                        }
                        function we(e) {
                            fe.unshift(e);
                        }
                        var ve = Math.abs,
                            _e = (Math.cos, Math.sin, Math.tan, Math.acos, Math.asin, Math.atan, Math.atan2, Math.exp, Math.log, Math.sqrt, Math.ceil),
                            Ee = Math.floor,
                            be = (Math.pow, Math.imul, Math.fround, Math.round, Math.min),
                            ke = (Math.max, Math.clz32, Math.trunc, 0),
                            De = null,
                            Se = null;
                        function xe(e) {
                            ke++, t.monitorRunDependencies && t.monitorRunDependencies(ke);
                        }
                        function Me(e) {
                            if ((ke--, t.monitorRunDependencies && t.monitorRunDependencies(ke), 0 == ke && (null !== De && (clearInterval(De), (De = null)), Se))) {
                                var r = Se;
                                (Se = null), r();
                            }
                        }
                        function Ae(e) {
                            throw (t.onAbort && t.onAbort(e), k((e += "")), D(e), (R = !0), (e = "abort(" + e + "). Build with -s ASSERTIONS=1 for more info."), new WebAssembly.RuntimeError(e));
                        }
                        (t.preloadedImages = {}), (t.preloadedAudios = {});
                        var Fe = "data:application/octet-stream;base64,";
                        function ze(e) {
                            return String.prototype.startsWith ? e.startsWith(Fe) : 0 === e.indexOf(Fe);
                        }
                        var Pe,
                            je,
                            Ce = "https://webar-static.blippar.com/augmentedVision.wasm";
                        function Re() {
                            try {
                                if (M) return new Uint8Array(M);
                                if (w) return w(Ce);
                                throw "both async and sync fetching of the wasm failed";
                            } catch (e) {
                                Ae(e);
                            }
                        }
                        function Ie() {
                            return M || (!d && !m) || "function" != typeof fetch
                                ? new Promise(function (e, t) {
                                      e(Re());
                                  })
                                : fetch(Ce, { credentials: "same-origin" })
                                      .then(function (e) {
                                          if (!e.ok) throw "failed to load wasm binary file at '" + Ce + "'";
                                          return e.arrayBuffer();
                                      })
                                      .catch(function () {
                                          return Re();
                                      });
                        }
                        function Te() {
                            var e = { env: jt, wasi_unstable: jt };
                            function r(e, r) {
                                var n = e.exports;
                                (t.asm = n), Me();
                            }
                            function n(e) {
                                r(e.instance);
                            }
                            function o(t) {
                                return Ie()
                                    .then(function (t) {
                                        return WebAssembly.instantiate(t, e);
                                    })
                                    .then(t, function (e) {
                                        D("failed to asynchronously prepare wasm: " + e), Ae(e);
                                    });
                            }
                            if ((xe(), t.instantiateWasm))
                                try {
                                    return t.instantiateWasm(e, r);
                                } catch (e) {
                                    return D("Module.instantiateWasm callback failed with error: " + e), !1;
                                }
                            return (
                                (function () {
                                    if (M || "function" != typeof WebAssembly.instantiateStreaming || ze(Ce) || "function" != typeof fetch) return o(n);
                                    fetch(Ce, { credentials: "same-origin" }).then(function (t) {
                                        return WebAssembly.instantiateStreaming(t, e).then(n, function (e) {
                                            D("wasm streaming compile failed: " + e), D("falling back to ArrayBuffer instantiation"), o(n);
                                        });
                                    });
                                })(),
                                {}
                            );
                        }
                        ze(Ce) || (Ce = b(Ce));
                        var Ne = {
                                1184: function () {
                                    allReady();
                                },
                            },
                            Oe = [];
                        function Be(e, t) {
                            var r = Oe;
                            for (r.length = 0; ; ) {
                                var n = J[e++];
                                if (!n) return r;
                                n === "d".charCodeAt(0) || n === "f".charCodeAt(0) ? ((t = x(t, 8)), r.push(Q[t >> 3]), (t += 8)) : n === "i".charCodeAt(0) && ((t = x(t, 4)), r.push(Z[t >> 2]), (t += 4));
                            }
                        }
                        function He(e, t, r) {
                            var n = Be(t, r);
                            return Ne[e].apply(null, n);
                        }
                        function Le(e) {
                            return e.replace(/\b_Z[\w\d_]+/g, function (e) {
                                return e == e ? e : e + " [" + e + "]";
                            });
                        }
                        function Ue() {
                            var e = new Error();
                            if (!e.stack) {
                                try {
                                    throw new Error(0);
                                } catch (t) {
                                    e = t;
                                }
                                if (!e.stack) return "(no stack trace available)";
                            }
                            return e.stack.toString();
                        }
                        function We() {
                            var e = Ue();
                            return t.extraStackTrace && (e += "\n" + t.extraStackTrace()), Le(e);
                        }
                        function qe(e, t, r, n) {
                            Ae("Assertion failed: " + L(e) + ", at: " + [t ? L(t) : "unknown filename", r, n ? L(n) : "unknown function"]);
                        }
                        function Ve(e) {
                            return Tt(e);
                        }
                        function Ye(e, t) {
                            ce.unshift({ func: e, arg: t });
                        }
                        function Ge() {
                            return Ye.apply(null, arguments);
                        }
                        se.push({
                            func: function () {
                                It();
                            },
                        });
                        var Xe = {};
                        function Je(e, t, r) {
                            throw ((Xe[e] = { ptr: e, adjusted: [e], type: t, destructor: r, refcount: 0, caught: !1, rethrown: !1 }), "uncaught_exception" in Ot ? Ot.uncaught_exceptions++ : (Ot.uncaught_exceptions = 1), e);
                        }
                        function Ke() {}
                        function Ze(e) {
                            return t.___errno_location && (Z[t.___errno_location() >> 2] = e), e;
                        }
                        function $e(e, t) {
                            return Ze(63), -1;
                        }
                        var Qe = {
                                splitPath: function (e) {
                                    return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);
                                },
                                normalizeArray: function (e, t) {
                                    for (var r = 0, n = e.length - 1; n >= 0; n--) {
                                        var o = e[n];
                                        "." === o ? e.splice(n, 1) : ".." === o ? (e.splice(n, 1), r++) : r && (e.splice(n, 1), r--);
                                    }
                                    if (t) for (; r; r--) e.unshift("..");
                                    return e;
                                },
                                normalize: function (e) {
                                    var t = "/" === e.charAt(0),
                                        r = "/" === e.substr(-1);
                                    return (
                                        (e = Qe.normalizeArray(
                                            e.split("/").filter(function (e) {
                                                return !!e;
                                            }),
                                            !t
                                        ).join("/")) ||
                                            t ||
                                            (e = "."),
                                        e && r && (e += "/"),
                                        (t ? "/" : "") + e
                                    );
                                },
                                dirname: function (e) {
                                    var t = Qe.splitPath(e),
                                        r = t[0],
                                        n = t[1];
                                    return r || n ? (n && (n = n.substr(0, n.length - 1)), r + n) : ".";
                                },
                                basename: function (e) {
                                    if ("/" === e) return "/";
                                    var t = e.lastIndexOf("/");
                                    return -1 === t ? e : e.substr(t + 1);
                                },
                                extname: function (e) {
                                    return Qe.splitPath(e)[3];
                                },
                                join: function () {
                                    var e = Array.prototype.slice.call(arguments, 0);
                                    return Qe.normalize(e.join("/"));
                                },
                                join2: function (e, t) {
                                    return Qe.normalize(e + "/" + t);
                                },
                            },
                            et = {
                                resolve: function () {
                                    for (var e = "", t = !1, r = arguments.length - 1; r >= -1 && !t; r--) {
                                        var n = r >= 0 ? arguments[r] : nt.cwd();
                                        if ("string" != typeof n) throw new TypeError("Arguments to path.resolve must be strings");
                                        if (!n) return "";
                                        (e = n + "/" + e), (t = "/" === n.charAt(0));
                                    }
                                    return (
                                        (t ? "/" : "") +
                                            (e = Qe.normalizeArray(
                                                e.split("/").filter(function (e) {
                                                    return !!e;
                                                }),
                                                !t
                                            ).join("/")) || "."
                                    );
                                },
                                relative: function (e, t) {
                                    function r(e) {
                                        for (var t = 0; t < e.length && "" === e[t]; t++);
                                        for (var r = e.length - 1; r >= 0 && "" === e[r]; r--);
                                        return t > r ? [] : e.slice(t, r - t + 1);
                                    }
                                    (e = et.resolve(e).substr(1)), (t = et.resolve(t).substr(1));
                                    for (var n = r(e.split("/")), o = r(t.split("/")), i = Math.min(n.length, o.length), a = i, u = 0; u < i; u++)
                                        if (n[u] !== o[u]) {
                                            a = u;
                                            break;
                                        }
                                    var s = [];
                                    for (u = a; u < n.length; u++) s.push("..");
                                    return (s = s.concat(o.slice(a))).join("/");
                                },
                            },
                            tt = {
                                ttys: [],
                                init: function () {},
                                shutdown: function () {},
                                register: function (e, t) {
                                    (tt.ttys[e] = { input: [], output: [], ops: t }), nt.registerDevice(e, tt.stream_ops);
                                },
                                stream_ops: {
                                    open: function (e) {
                                        var t = tt.ttys[e.node.rdev];
                                        if (!t) throw new nt.ErrnoError(43);
                                        (e.tty = t), (e.seekable = !1);
                                    },
                                    close: function (e) {
                                        e.tty.ops.flush(e.tty);
                                    },
                                    flush: function (e) {
                                        e.tty.ops.flush(e.tty);
                                    },
                                    read: function (e, t, r, n, o) {
                                        if (!e.tty || !e.tty.ops.get_char) throw new nt.ErrnoError(60);
                                        for (var i = 0, a = 0; a < n; a++) {
                                            var u;
                                            try {
                                                u = e.tty.ops.get_char(e.tty);
                                            } catch (e) {
                                                throw new nt.ErrnoError(29);
                                            }
                                            if (void 0 === u && 0 === i) throw new nt.ErrnoError(6);
                                            if (null == u) break;
                                            i++, (t[r + a] = u);
                                        }
                                        return i && (e.node.timestamp = Date.now()), i;
                                    },
                                    write: function (e, t, r, n, o) {
                                        if (!e.tty || !e.tty.ops.put_char) throw new nt.ErrnoError(60);
                                        try {
                                            for (var i = 0; i < n; i++) e.tty.ops.put_char(e.tty, t[r + i]);
                                        } catch (e) {
                                            throw new nt.ErrnoError(29);
                                        }
                                        return n && (e.node.timestamp = Date.now()), i;
                                    },
                                },
                                default_tty_ops: {
                                    get_char: function (t) {
                                        if (!t.input.length) {
                                            var r = null;
                                            if (p) {
                                                var n = o.alloc ? o.alloc(256) : new o(256),
                                                    i = 0;
                                                try {
                                                    i = v.readSync(e.stdin.fd, n, 0, 256, null);
                                                } catch (e) {
                                                    if (-1 == e.toString().indexOf("EOF")) throw e;
                                                    i = 0;
                                                }
                                                r = i > 0 ? n.slice(0, i).toString("utf-8") : null;
                                            } else
                                                "undefined" != typeof window && "function" == typeof window.prompt
                                                    ? null !== (r = window.prompt("Input: ")) && (r += "\n")
                                                    : "function" == typeof readline && null !== (r = readline()) && (r += "\n");
                                            if (!r) return null;
                                            t.input = Pt(r, !0);
                                        }
                                        return t.input.shift();
                                    },
                                    put_char: function (e, t) {
                                        null === t || 10 === t ? (k(H(e.output, 0)), (e.output = [])) : 0 != t && e.output.push(t);
                                    },
                                    flush: function (e) {
                                        e.output && e.output.length > 0 && (k(H(e.output, 0)), (e.output = []));
                                    },
                                },
                                default_tty1_ops: {
                                    put_char: function (e, t) {
                                        null === t || 10 === t ? (D(H(e.output, 0)), (e.output = [])) : 0 != t && e.output.push(t);
                                    },
                                    flush: function (e) {
                                        e.output && e.output.length > 0 && (D(H(e.output, 0)), (e.output = []));
                                    },
                                },
                            },
                            rt = {
                                ops_table: null,
                                mount: function (e) {
                                    return rt.createNode(null, "/", 16895, 0);
                                },
                                createNode: function (e, t, r, n) {
                                    if (nt.isBlkdev(r) || nt.isFIFO(r)) throw new nt.ErrnoError(63);
                                    rt.ops_table ||
                                        (rt.ops_table = {
                                            dir: {
                                                node: {
                                                    getattr: rt.node_ops.getattr,
                                                    setattr: rt.node_ops.setattr,
                                                    lookup: rt.node_ops.lookup,
                                                    mknod: rt.node_ops.mknod,
                                                    rename: rt.node_ops.rename,
                                                    unlink: rt.node_ops.unlink,
                                                    rmdir: rt.node_ops.rmdir,
                                                    readdir: rt.node_ops.readdir,
                                                    symlink: rt.node_ops.symlink,
                                                },
                                                stream: { llseek: rt.stream_ops.llseek },
                                            },
                                            file: {
                                                node: { getattr: rt.node_ops.getattr, setattr: rt.node_ops.setattr },
                                                stream: { llseek: rt.stream_ops.llseek, read: rt.stream_ops.read, write: rt.stream_ops.write, allocate: rt.stream_ops.allocate, mmap: rt.stream_ops.mmap, msync: rt.stream_ops.msync },
                                            },
                                            link: { node: { getattr: rt.node_ops.getattr, setattr: rt.node_ops.setattr, readlink: rt.node_ops.readlink }, stream: {} },
                                            chrdev: { node: { getattr: rt.node_ops.getattr, setattr: rt.node_ops.setattr }, stream: nt.chrdev_stream_ops },
                                        });
                                    var o = nt.createNode(e, t, r, n);
                                    return (
                                        nt.isDir(o.mode)
                                            ? ((o.node_ops = rt.ops_table.dir.node), (o.stream_ops = rt.ops_table.dir.stream), (o.contents = {}))
                                            : nt.isFile(o.mode)
                                            ? ((o.node_ops = rt.ops_table.file.node), (o.stream_ops = rt.ops_table.file.stream), (o.usedBytes = 0), (o.contents = null))
                                            : nt.isLink(o.mode)
                                            ? ((o.node_ops = rt.ops_table.link.node), (o.stream_ops = rt.ops_table.link.stream))
                                            : nt.isChrdev(o.mode) && ((o.node_ops = rt.ops_table.chrdev.node), (o.stream_ops = rt.ops_table.chrdev.stream)),
                                        (o.timestamp = Date.now()),
                                        e && (e.contents[t] = o),
                                        o
                                    );
                                },
                                getFileDataAsRegularArray: function (e) {
                                    if (e.contents && e.contents.subarray) {
                                        for (var t = [], r = 0; r < e.usedBytes; ++r) t.push(e.contents[r]);
                                        return t;
                                    }
                                    return e.contents;
                                },
                                getFileDataAsTypedArray: function (e) {
                                    return e.contents ? (e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents)) : new Uint8Array();
                                },
                                expandFileStorage: function (e, t) {
                                    var r = e.contents ? e.contents.length : 0;
                                    if (!(r >= t)) {
                                        (t = Math.max(t, (r * (r < 1048576 ? 2 : 1.125)) | 0)), 0 != r && (t = Math.max(t, 256));
                                        var n = e.contents;
                                        (e.contents = new Uint8Array(t)), e.usedBytes > 0 && e.contents.set(n.subarray(0, e.usedBytes), 0);
                                    }
                                },
                                resizeFileStorage: function (e, t) {
                                    if (e.usedBytes != t) {
                                        if (0 == t) return (e.contents = null), void (e.usedBytes = 0);
                                        if (!e.contents || e.contents.subarray) {
                                            var r = e.contents;
                                            return (e.contents = new Uint8Array(new ArrayBuffer(t))), r && e.contents.set(r.subarray(0, Math.min(t, e.usedBytes))), void (e.usedBytes = t);
                                        }
                                        if ((e.contents || (e.contents = []), e.contents.length > t)) e.contents.length = t;
                                        else for (; e.contents.length < t; ) e.contents.push(0);
                                        e.usedBytes = t;
                                    }
                                },
                                node_ops: {
                                    getattr: function (e) {
                                        var t = {};
                                        return (
                                            (t.dev = nt.isChrdev(e.mode) ? e.id : 1),
                                            (t.ino = e.id),
                                            (t.mode = e.mode),
                                            (t.nlink = 1),
                                            (t.uid = 0),
                                            (t.gid = 0),
                                            (t.rdev = e.rdev),
                                            nt.isDir(e.mode) ? (t.size = 4096) : nt.isFile(e.mode) ? (t.size = e.usedBytes) : nt.isLink(e.mode) ? (t.size = e.link.length) : (t.size = 0),
                                            (t.atime = new Date(e.timestamp)),
                                            (t.mtime = new Date(e.timestamp)),
                                            (t.ctime = new Date(e.timestamp)),
                                            (t.blksize = 4096),
                                            (t.blocks = Math.ceil(t.size / t.blksize)),
                                            t
                                        );
                                    },
                                    setattr: function (e, t) {
                                        void 0 !== t.mode && (e.mode = t.mode), void 0 !== t.timestamp && (e.timestamp = t.timestamp), void 0 !== t.size && rt.resizeFileStorage(e, t.size);
                                    },
                                    lookup: function (e, t) {
                                        throw nt.genericErrors[44];
                                    },
                                    mknod: function (e, t, r, n) {
                                        return rt.createNode(e, t, r, n);
                                    },
                                    rename: function (e, t, r) {
                                        if (nt.isDir(e.mode)) {
                                            var n;
                                            try {
                                                n = nt.lookupNode(t, r);
                                            } catch (e) {}
                                            if (n) for (var o in n.contents) throw new nt.ErrnoError(55);
                                        }
                                        delete e.parent.contents[e.name], (e.name = r), (t.contents[r] = e), (e.parent = t);
                                    },
                                    unlink: function (e, t) {
                                        delete e.contents[t];
                                    },
                                    rmdir: function (e, t) {
                                        var r = nt.lookupNode(e, t);
                                        for (var n in r.contents) throw new nt.ErrnoError(55);
                                        delete e.contents[t];
                                    },
                                    readdir: function (e) {
                                        var t = [".", ".."];
                                        for (var r in e.contents) e.contents.hasOwnProperty(r) && t.push(r);
                                        return t;
                                    },
                                    symlink: function (e, t, r) {
                                        var n = rt.createNode(e, t, 41471, 0);
                                        return (n.link = r), n;
                                    },
                                    readlink: function (e) {
                                        if (!nt.isLink(e.mode)) throw new nt.ErrnoError(28);
                                        return e.link;
                                    },
                                },
                                stream_ops: {
                                    read: function (e, t, r, n, o) {
                                        var i = e.node.contents;
                                        if (o >= e.node.usedBytes) return 0;
                                        var a = Math.min(e.node.usedBytes - o, n);
                                        if (a > 8 && i.subarray) t.set(i.subarray(o, o + a), r);
                                        else for (var u = 0; u < a; u++) t[r + u] = i[o + u];
                                        return a;
                                    },
                                    write: function (e, t, r, n, o, i) {
                                        if ((t.buffer === X.buffer && (i = !1), !n)) return 0;
                                        var a = e.node;
                                        if (((a.timestamp = Date.now()), t.subarray && (!a.contents || a.contents.subarray))) {
                                            if (i) return (a.contents = t.subarray(r, r + n)), (a.usedBytes = n), n;
                                            if (0 === a.usedBytes && 0 === o) return (a.contents = new Uint8Array(t.subarray(r, r + n))), (a.usedBytes = n), n;
                                            if (o + n <= a.usedBytes) return a.contents.set(t.subarray(r, r + n), o), n;
                                        }
                                        if ((rt.expandFileStorage(a, o + n), a.contents.subarray && t.subarray)) a.contents.set(t.subarray(r, r + n), o);
                                        else for (var u = 0; u < n; u++) a.contents[o + u] = t[r + u];
                                        return (a.usedBytes = Math.max(a.usedBytes, o + n)), n;
                                    },
                                    llseek: function (e, t, r) {
                                        var n = t;
                                        if ((1 === r ? (n += e.position) : 2 === r && nt.isFile(e.node.mode) && (n += e.node.usedBytes), n < 0)) throw new nt.ErrnoError(28);
                                        return n;
                                    },
                                    allocate: function (e, t, r) {
                                        rt.expandFileStorage(e.node, t + r), (e.node.usedBytes = Math.max(e.node.usedBytes, t + r));
                                    },
                                    mmap: function (e, t, r, n, o, i, a) {
                                        if (!nt.isFile(e.node.mode)) throw new nt.ErrnoError(43);
                                        var u,
                                            s,
                                            l = e.node.contents;
                                        if (2 & a || l.buffer !== t.buffer) {
                                            (o > 0 || o + n < e.node.usedBytes) && (l = l.subarray ? l.subarray(o, o + n) : Array.prototype.slice.call(l, o, o + n)), (s = !0);
                                            var c = t.buffer == X.buffer;
                                            if (!(u = Tt(n))) throw new nt.ErrnoError(48);
                                            (c ? X : t).set(l, u);
                                        } else (s = !1), (u = l.byteOffset);
                                        return { ptr: u, allocated: s };
                                    },
                                    msync: function (e, t, r, n, o) {
                                        if (!nt.isFile(e.node.mode)) throw new nt.ErrnoError(43);
                                        return 2 & o ? 0 : (rt.stream_ops.write(e, t, 0, n, r, !1), 0);
                                    },
                                },
                            },
                            nt = {
                                root: null,
                                mounts: [],
                                devices: {},
                                streams: [],
                                nextInode: 1,
                                nameTable: null,
                                currentPath: "/",
                                initialized: !1,
                                ignorePermissions: !0,
                                trackingDelegate: {},
                                tracking: { openFlags: { READ: 1, WRITE: 2 } },
                                ErrnoError: null,
                                genericErrors: {},
                                filesystems: null,
                                syncFSRequests: 0,
                                handleFSError: function (e) {
                                    if (!(e instanceof nt.ErrnoError)) throw e + " : " + We();
                                    return Ze(e.errno);
                                },
                                lookupPath: function (e, t) {
                                    if (((t = t || {}), !(e = et.resolve(nt.cwd(), e)))) return { path: "", node: null };
                                    var r = { follow_mount: !0, recurse_count: 0 };
                                    for (var n in r) void 0 === t[n] && (t[n] = r[n]);
                                    if (t.recurse_count > 8) throw new nt.ErrnoError(32);
                                    for (
                                        var o = Qe.normalizeArray(
                                                e.split("/").filter(function (e) {
                                                    return !!e;
                                                }),
                                                !1
                                            ),
                                            i = nt.root,
                                            a = "/",
                                            u = 0;
                                        u < o.length;
                                        u++
                                    ) {
                                        var s = u === o.length - 1;
                                        if (s && t.parent) break;
                                        if (((i = nt.lookupNode(i, o[u])), (a = Qe.join2(a, o[u])), nt.isMountpoint(i) && (!s || (s && t.follow_mount)) && (i = i.mounted.root), !s || t.follow))
                                            for (var l = 0; nt.isLink(i.mode); ) {
                                                var c = nt.readlink(a);
                                                if (((a = et.resolve(Qe.dirname(a), c)), (i = nt.lookupPath(a, { recurse_count: t.recurse_count }).node), l++ > 40)) throw new nt.ErrnoError(32);
                                            }
                                    }
                                    return { path: a, node: i };
                                },
                                getPath: function (e) {
                                    for (var t; ; ) {
                                        if (nt.isRoot(e)) {
                                            var r = e.mount.mountpoint;
                                            return t ? ("/" !== r[r.length - 1] ? r + "/" + t : r + t) : r;
                                        }
                                        (t = t ? e.name + "/" + t : e.name), (e = e.parent);
                                    }
                                },
                                hashName: function (e, t) {
                                    for (var r = 0, n = 0; n < t.length; n++) r = ((r << 5) - r + t.charCodeAt(n)) | 0;
                                    return ((e + r) >>> 0) % nt.nameTable.length;
                                },
                                hashAddNode: function (e) {
                                    var t = nt.hashName(e.parent.id, e.name);
                                    (e.name_next = nt.nameTable[t]), (nt.nameTable[t] = e);
                                },
                                hashRemoveNode: function (e) {
                                    var t = nt.hashName(e.parent.id, e.name);
                                    if (nt.nameTable[t] === e) nt.nameTable[t] = e.name_next;
                                    else
                                        for (var r = nt.nameTable[t]; r; ) {
                                            if (r.name_next === e) {
                                                r.name_next = e.name_next;
                                                break;
                                            }
                                            r = r.name_next;
                                        }
                                },
                                lookupNode: function (e, t) {
                                    var r = nt.mayLookup(e);
                                    if (r) throw new nt.ErrnoError(r, e);
                                    for (var n = nt.hashName(e.id, t), o = nt.nameTable[n]; o; o = o.name_next) {
                                        var i = o.name;
                                        if (o.parent.id === e.id && i === t) return o;
                                    }
                                    return nt.lookup(e, t);
                                },
                                createNode: function (e, t, r, n) {
                                    nt.FSNode ||
                                        ((nt.FSNode = function (e, t, r, n) {
                                            e || (e = this),
                                                (this.parent = e),
                                                (this.mount = e.mount),
                                                (this.mounted = null),
                                                (this.id = nt.nextInode++),
                                                (this.name = t),
                                                (this.mode = r),
                                                (this.node_ops = {}),
                                                (this.stream_ops = {}),
                                                (this.rdev = n);
                                        }),
                                        (nt.FSNode.prototype = {}),
                                        Object.defineProperties(nt.FSNode.prototype, {
                                            read: {
                                                get: function () {
                                                    return 365 == (365 & this.mode);
                                                },
                                                set: function (e) {
                                                    e ? (this.mode |= 365) : (this.mode &= -366);
                                                },
                                            },
                                            write: {
                                                get: function () {
                                                    return 146 == (146 & this.mode);
                                                },
                                                set: function (e) {
                                                    e ? (this.mode |= 146) : (this.mode &= -147);
                                                },
                                            },
                                            isFolder: {
                                                get: function () {
                                                    return nt.isDir(this.mode);
                                                },
                                            },
                                            isDevice: {
                                                get: function () {
                                                    return nt.isChrdev(this.mode);
                                                },
                                            },
                                        }));
                                    var o = new nt.FSNode(e, t, r, n);
                                    return nt.hashAddNode(o), o;
                                },
                                destroyNode: function (e) {
                                    nt.hashRemoveNode(e);
                                },
                                isRoot: function (e) {
                                    return e === e.parent;
                                },
                                isMountpoint: function (e) {
                                    return !!e.mounted;
                                },
                                isFile: function (e) {
                                    return 32768 == (61440 & e);
                                },
                                isDir: function (e) {
                                    return 16384 == (61440 & e);
                                },
                                isLink: function (e) {
                                    return 40960 == (61440 & e);
                                },
                                isChrdev: function (e) {
                                    return 8192 == (61440 & e);
                                },
                                isBlkdev: function (e) {
                                    return 24576 == (61440 & e);
                                },
                                isFIFO: function (e) {
                                    return 4096 == (61440 & e);
                                },
                                isSocket: function (e) {
                                    return 49152 == (49152 & e);
                                },
                                flagModes: { r: 0, rs: 1052672, "r+": 2, w: 577, wx: 705, xw: 705, "w+": 578, "wx+": 706, "xw+": 706, a: 1089, ax: 1217, xa: 1217, "a+": 1090, "ax+": 1218, "xa+": 1218 },
                                modeStringToFlags: function (e) {
                                    var t = nt.flagModes[e];
                                    if (void 0 === t) throw new Error("Unknown file open mode: " + e);
                                    return t;
                                },
                                flagsToPermissionString: function (e) {
                                    var t = ["r", "w", "rw"][3 & e];
                                    return 512 & e && (t += "w"), t;
                                },
                                nodePermissions: function (e, t) {
                                    return nt.ignorePermissions ? 0 : (-1 === t.indexOf("r") || 292 & e.mode) && (-1 === t.indexOf("w") || 146 & e.mode) && (-1 === t.indexOf("x") || 73 & e.mode) ? 0 : 2;
                                },
                                mayLookup: function (e) {
                                    var t = nt.nodePermissions(e, "x");
                                    return t || (e.node_ops.lookup ? 0 : 2);
                                },
                                mayCreate: function (e, t) {
                                    try {
                                        return nt.lookupNode(e, t), 20;
                                    } catch (e) {}
                                    return nt.nodePermissions(e, "wx");
                                },
                                mayDelete: function (e, t, r) {
                                    var n;
                                    try {
                                        n = nt.lookupNode(e, t);
                                    } catch (e) {
                                        return e.errno;
                                    }
                                    var o = nt.nodePermissions(e, "wx");
                                    if (o) return o;
                                    if (r) {
                                        if (!nt.isDir(n.mode)) return 54;
                                        if (nt.isRoot(n) || nt.getPath(n) === nt.cwd()) return 10;
                                    } else if (nt.isDir(n.mode)) return 31;
                                    return 0;
                                },
                                mayOpen: function (e, t) {
                                    return e ? (nt.isLink(e.mode) ? 32 : nt.isDir(e.mode) && ("r" !== nt.flagsToPermissionString(t) || 512 & t) ? 31 : nt.nodePermissions(e, nt.flagsToPermissionString(t))) : 44;
                                },
                                MAX_OPEN_FDS: 4096,
                                nextfd: function (e, t) {
                                    (e = e || 0), (t = t || nt.MAX_OPEN_FDS);
                                    for (var r = e; r <= t; r++) if (!nt.streams[r]) return r;
                                    throw new nt.ErrnoError(33);
                                },
                                getStream: function (e) {
                                    return nt.streams[e];
                                },
                                createStream: function (e, t, r) {
                                    nt.FSStream ||
                                        ((nt.FSStream = function () {}),
                                        (nt.FSStream.prototype = {}),
                                        Object.defineProperties(nt.FSStream.prototype, {
                                            object: {
                                                get: function () {
                                                    return this.node;
                                                },
                                                set: function (e) {
                                                    this.node = e;
                                                },
                                            },
                                            isRead: {
                                                get: function () {
                                                    return 1 != (2097155 & this.flags);
                                                },
                                            },
                                            isWrite: {
                                                get: function () {
                                                    return 0 != (2097155 & this.flags);
                                                },
                                            },
                                            isAppend: {
                                                get: function () {
                                                    return 1024 & this.flags;
                                                },
                                            },
                                        }));
                                    var n = new nt.FSStream();
                                    for (var o in e) n[o] = e[o];
                                    e = n;
                                    var i = nt.nextfd(t, r);
                                    return (e.fd = i), (nt.streams[i] = e), e;
                                },
                                closeStream: function (e) {
                                    nt.streams[e] = null;
                                },
                                chrdev_stream_ops: {
                                    open: function (e) {
                                        var t = nt.getDevice(e.node.rdev);
                                        (e.stream_ops = t.stream_ops), e.stream_ops.open && e.stream_ops.open(e);
                                    },
                                    llseek: function () {
                                        throw new nt.ErrnoError(70);
                                    },
                                },
                                major: function (e) {
                                    return e >> 8;
                                },
                                minor: function (e) {
                                    return 255 & e;
                                },
                                makedev: function (e, t) {
                                    return (e << 8) | t;
                                },
                                registerDevice: function (e, t) {
                                    nt.devices[e] = { stream_ops: t };
                                },
                                getDevice: function (e) {
                                    return nt.devices[e];
                                },
                                getMounts: function (e) {
                                    for (var t = [], r = [e]; r.length; ) {
                                        var n = r.pop();
                                        t.push(n), r.push.apply(r, n.mounts);
                                    }
                                    return t;
                                },
                                syncfs: function (e, t) {
                                    "function" == typeof e && ((t = e), (e = !1)),
                                        nt.syncFSRequests++,
                                        nt.syncFSRequests > 1 && console.log("warning: " + nt.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
                                    var r = nt.getMounts(nt.root.mount),
                                        n = 0;
                                    function o(e) {
                                        return nt.syncFSRequests--, t(e);
                                    }
                                    function i(e) {
                                        if (e) return i.errored ? void 0 : ((i.errored = !0), o(e));
                                        ++n >= r.length && o(null);
                                    }
                                    r.forEach(function (t) {
                                        if (!t.type.syncfs) return i(null);
                                        t.type.syncfs(t, e, i);
                                    });
                                },
                                mount: function (e, t, r) {
                                    var n,
                                        o = "/" === r,
                                        i = !r;
                                    if (o && nt.root) throw new nt.ErrnoError(10);
                                    if (!o && !i) {
                                        var a = nt.lookupPath(r, { follow_mount: !1 });
                                        if (((r = a.path), (n = a.node), nt.isMountpoint(n))) throw new nt.ErrnoError(10);
                                        if (!nt.isDir(n.mode)) throw new nt.ErrnoError(54);
                                    }
                                    var u = { type: e, opts: t, mountpoint: r, mounts: [] },
                                        s = e.mount(u);
                                    return (s.mount = u), (u.root = s), o ? (nt.root = s) : n && ((n.mounted = u), n.mount && n.mount.mounts.push(u)), s;
                                },
                                unmount: function (e) {
                                    var t = nt.lookupPath(e, { follow_mount: !1 });
                                    if (!nt.isMountpoint(t.node)) throw new nt.ErrnoError(28);
                                    var r = t.node,
                                        n = r.mounted,
                                        o = nt.getMounts(n);
                                    Object.keys(nt.nameTable).forEach(function (e) {
                                        for (var t = nt.nameTable[e]; t; ) {
                                            var r = t.name_next;
                                            -1 !== o.indexOf(t.mount) && nt.destroyNode(t), (t = r);
                                        }
                                    }),
                                        (r.mounted = null);
                                    var i = r.mount.mounts.indexOf(n);
                                    r.mount.mounts.splice(i, 1);
                                },
                                lookup: function (e, t) {
                                    return e.node_ops.lookup(e, t);
                                },
                                mknod: function (e, t, r) {
                                    var n = nt.lookupPath(e, { parent: !0 }).node,
                                        o = Qe.basename(e);
                                    if (!o || "." === o || ".." === o) throw new nt.ErrnoError(28);
                                    var i = nt.mayCreate(n, o);
                                    if (i) throw new nt.ErrnoError(i);
                                    if (!n.node_ops.mknod) throw new nt.ErrnoError(63);
                                    return n.node_ops.mknod(n, o, t, r);
                                },
                                create: function (e, t) {
                                    return (t = void 0 !== t ? t : 438), (t &= 4095), (t |= 32768), nt.mknod(e, t, 0);
                                },
                                mkdir: function (e, t) {
                                    return (t = void 0 !== t ? t : 511), (t &= 1023), (t |= 16384), nt.mknod(e, t, 0);
                                },
                                mkdirTree: function (e, t) {
                                    for (var r = e.split("/"), n = "", o = 0; o < r.length; ++o)
                                        if (r[o]) {
                                            n += "/" + r[o];
                                            try {
                                                nt.mkdir(n, t);
                                            } catch (e) {
                                                if (20 != e.errno) throw e;
                                            }
                                        }
                                },
                                mkdev: function (e, t, r) {
                                    return void 0 === r && ((r = t), (t = 438)), (t |= 8192), nt.mknod(e, t, r);
                                },
                                symlink: function (e, t) {
                                    if (!et.resolve(e)) throw new nt.ErrnoError(44);
                                    var r = nt.lookupPath(t, { parent: !0 }).node;
                                    if (!r) throw new nt.ErrnoError(44);
                                    var n = Qe.basename(t),
                                        o = nt.mayCreate(r, n);
                                    if (o) throw new nt.ErrnoError(o);
                                    if (!r.node_ops.symlink) throw new nt.ErrnoError(63);
                                    return r.node_ops.symlink(r, n, e);
                                },
                                rename: function (e, t) {
                                    var r,
                                        n,
                                        o = Qe.dirname(e),
                                        i = Qe.dirname(t),
                                        a = Qe.basename(e),
                                        u = Qe.basename(t);
                                    try {
                                        (r = nt.lookupPath(e, { parent: !0 }).node), (n = nt.lookupPath(t, { parent: !0 }).node);
                                    } catch (e) {
                                        throw new nt.ErrnoError(10);
                                    }
                                    if (!r || !n) throw new nt.ErrnoError(44);
                                    if (r.mount !== n.mount) throw new nt.ErrnoError(75);
                                    var s,
                                        l = nt.lookupNode(r, a),
                                        c = et.relative(e, i);
                                    if ("." !== c.charAt(0)) throw new nt.ErrnoError(28);
                                    if ("." !== (c = et.relative(t, o)).charAt(0)) throw new nt.ErrnoError(55);
                                    try {
                                        s = nt.lookupNode(n, u);
                                    } catch (e) {}
                                    if (l !== s) {
                                        var f = nt.isDir(l.mode),
                                            d = nt.mayDelete(r, a, f);
                                        if (d) throw new nt.ErrnoError(d);
                                        if ((d = s ? nt.mayDelete(n, u, f) : nt.mayCreate(n, u))) throw new nt.ErrnoError(d);
                                        if (!r.node_ops.rename) throw new nt.ErrnoError(63);
                                        if (nt.isMountpoint(l) || (s && nt.isMountpoint(s))) throw new nt.ErrnoError(10);
                                        if (n !== r && (d = nt.nodePermissions(r, "w"))) throw new nt.ErrnoError(d);
                                        try {
                                            nt.trackingDelegate.willMovePath && nt.trackingDelegate.willMovePath(e, t);
                                        } catch (r) {
                                            console.log("FS.trackingDelegate['willMovePath']('" + e + "', '" + t + "') threw an exception: " + r.message);
                                        }
                                        nt.hashRemoveNode(l);
                                        try {
                                            r.node_ops.rename(l, n, u);
                                        } catch (e) {
                                            throw e;
                                        } finally {
                                            nt.hashAddNode(l);
                                        }
                                        try {
                                            nt.trackingDelegate.onMovePath && nt.trackingDelegate.onMovePath(e, t);
                                        } catch (r) {
                                            console.log("FS.trackingDelegate['onMovePath']('" + e + "', '" + t + "') threw an exception: " + r.message);
                                        }
                                    }
                                },
                                rmdir: function (e) {
                                    var t = nt.lookupPath(e, { parent: !0 }).node,
                                        r = Qe.basename(e),
                                        n = nt.lookupNode(t, r),
                                        o = nt.mayDelete(t, r, !0);
                                    if (o) throw new nt.ErrnoError(o);
                                    if (!t.node_ops.rmdir) throw new nt.ErrnoError(63);
                                    if (nt.isMountpoint(n)) throw new nt.ErrnoError(10);
                                    try {
                                        nt.trackingDelegate.willDeletePath && nt.trackingDelegate.willDeletePath(e);
                                    } catch (t) {
                                        console.log("FS.trackingDelegate['willDeletePath']('" + e + "') threw an exception: " + t.message);
                                    }
                                    t.node_ops.rmdir(t, r), nt.destroyNode(n);
                                    try {
                                        nt.trackingDelegate.onDeletePath && nt.trackingDelegate.onDeletePath(e);
                                    } catch (t) {
                                        console.log("FS.trackingDelegate['onDeletePath']('" + e + "') threw an exception: " + t.message);
                                    }
                                },
                                readdir: function (e) {
                                    var t = nt.lookupPath(e, { follow: !0 }).node;
                                    if (!t.node_ops.readdir) throw new nt.ErrnoError(54);
                                    return t.node_ops.readdir(t);
                                },
                                unlink: function (e) {
                                    var t = nt.lookupPath(e, { parent: !0 }).node,
                                        r = Qe.basename(e),
                                        n = nt.lookupNode(t, r),
                                        o = nt.mayDelete(t, r, !1);
                                    if (o) throw new nt.ErrnoError(o);
                                    if (!t.node_ops.unlink) throw new nt.ErrnoError(63);
                                    if (nt.isMountpoint(n)) throw new nt.ErrnoError(10);
                                    try {
                                        nt.trackingDelegate.willDeletePath && nt.trackingDelegate.willDeletePath(e);
                                    } catch (t) {
                                        console.log("FS.trackingDelegate['willDeletePath']('" + e + "') threw an exception: " + t.message);
                                    }
                                    t.node_ops.unlink(t, r), nt.destroyNode(n);
                                    try {
                                        nt.trackingDelegate.onDeletePath && nt.trackingDelegate.onDeletePath(e);
                                    } catch (t) {
                                        console.log("FS.trackingDelegate['onDeletePath']('" + e + "') threw an exception: " + t.message);
                                    }
                                },
                                readlink: function (e) {
                                    var t = nt.lookupPath(e).node;
                                    if (!t) throw new nt.ErrnoError(44);
                                    if (!t.node_ops.readlink) throw new nt.ErrnoError(28);
                                    return et.resolve(nt.getPath(t.parent), t.node_ops.readlink(t));
                                },
                                stat: function (e, t) {
                                    var r = nt.lookupPath(e, { follow: !t }).node;
                                    if (!r) throw new nt.ErrnoError(44);
                                    if (!r.node_ops.getattr) throw new nt.ErrnoError(63);
                                    return r.node_ops.getattr(r);
                                },
                                lstat: function (e) {
                                    return nt.stat(e, !0);
                                },
                                chmod: function (e, t, r) {
                                    var n;
                                    if (!(n = "string" == typeof e ? nt.lookupPath(e, { follow: !r }).node : e).node_ops.setattr) throw new nt.ErrnoError(63);
                                    n.node_ops.setattr(n, { mode: (4095 & t) | (-4096 & n.mode), timestamp: Date.now() });
                                },
                                lchmod: function (e, t) {
                                    nt.chmod(e, t, !0);
                                },
                                fchmod: function (e, t) {
                                    var r = nt.getStream(e);
                                    if (!r) throw new nt.ErrnoError(8);
                                    nt.chmod(r.node, t);
                                },
                                chown: function (e, t, r, n) {
                                    var o;
                                    if (!(o = "string" == typeof e ? nt.lookupPath(e, { follow: !n }).node : e).node_ops.setattr) throw new nt.ErrnoError(63);
                                    o.node_ops.setattr(o, { timestamp: Date.now() });
                                },
                                lchown: function (e, t, r) {
                                    nt.chown(e, t, r, !0);
                                },
                                fchown: function (e, t, r) {
                                    var n = nt.getStream(e);
                                    if (!n) throw new nt.ErrnoError(8);
                                    nt.chown(n.node, t, r);
                                },
                                truncate: function (e, t) {
                                    if (t < 0) throw new nt.ErrnoError(28);
                                    var r;
                                    if (!(r = "string" == typeof e ? nt.lookupPath(e, { follow: !0 }).node : e).node_ops.setattr) throw new nt.ErrnoError(63);
                                    if (nt.isDir(r.mode)) throw new nt.ErrnoError(31);
                                    if (!nt.isFile(r.mode)) throw new nt.ErrnoError(28);
                                    var n = nt.nodePermissions(r, "w");
                                    if (n) throw new nt.ErrnoError(n);
                                    r.node_ops.setattr(r, { size: t, timestamp: Date.now() });
                                },
                                ftruncate: function (e, t) {
                                    var r = nt.getStream(e);
                                    if (!r) throw new nt.ErrnoError(8);
                                    if (0 == (2097155 & r.flags)) throw new nt.ErrnoError(28);
                                    nt.truncate(r.node, t);
                                },
                                utime: function (e, t, r) {
                                    var n = nt.lookupPath(e, { follow: !0 }).node;
                                    n.node_ops.setattr(n, { timestamp: Math.max(t, r) });
                                },
                                open: function (e, r, n, o, a) {
                                    if ("" === e) throw new nt.ErrnoError(44);
                                    var u;
                                    if (((n = void 0 === n ? 438 : n), (n = 64 & (r = "string" == typeof r ? nt.modeStringToFlags(r) : r) ? (4095 & n) | 32768 : 0), "object" === i(e))) u = e;
                                    else {
                                        e = Qe.normalize(e);
                                        try {
                                            u = nt.lookupPath(e, { follow: !(131072 & r) }).node;
                                        } catch (e) {}
                                    }
                                    var s = !1;
                                    if (64 & r)
                                        if (u) {
                                            if (128 & r) throw new nt.ErrnoError(20);
                                        } else (u = nt.mknod(e, n, 0)), (s = !0);
                                    if (!u) throw new nt.ErrnoError(44);
                                    if ((nt.isChrdev(u.mode) && (r &= -513), 65536 & r && !nt.isDir(u.mode))) throw new nt.ErrnoError(54);
                                    if (!s) {
                                        var l = nt.mayOpen(u, r);
                                        if (l) throw new nt.ErrnoError(l);
                                    }
                                    512 & r && nt.truncate(u, 0), (r &= -641);
                                    var c = nt.createStream({ node: u, path: nt.getPath(u), flags: r, seekable: !0, position: 0, stream_ops: u.stream_ops, ungotten: [], error: !1 }, o, a);
                                    c.stream_ops.open && c.stream_ops.open(c),
                                        !t.logReadFiles || 1 & r || (nt.readFiles || (nt.readFiles = {}), e in nt.readFiles || ((nt.readFiles[e] = 1), console.log("FS.trackingDelegate error on read file: " + e)));
                                    try {
                                        if (nt.trackingDelegate.onOpenFile) {
                                            var f = 0;
                                            1 != (2097155 & r) && (f |= nt.tracking.openFlags.READ), 0 != (2097155 & r) && (f |= nt.tracking.openFlags.WRITE), nt.trackingDelegate.onOpenFile(e, f);
                                        }
                                    } catch (t) {
                                        console.log("FS.trackingDelegate['onOpenFile']('" + e + "', flags) threw an exception: " + t.message);
                                    }
                                    return c;
                                },
                                close: function (e) {
                                    if (nt.isClosed(e)) throw new nt.ErrnoError(8);
                                    e.getdents && (e.getdents = null);
                                    try {
                                        e.stream_ops.close && e.stream_ops.close(e);
                                    } catch (e) {
                                        throw e;
                                    } finally {
                                        nt.closeStream(e.fd);
                                    }
                                    e.fd = null;
                                },
                                isClosed: function (e) {
                                    return null === e.fd;
                                },
                                llseek: function (e, t, r) {
                                    if (nt.isClosed(e)) throw new nt.ErrnoError(8);
                                    if (!e.seekable || !e.stream_ops.llseek) throw new nt.ErrnoError(70);
                                    if (0 != r && 1 != r && 2 != r) throw new nt.ErrnoError(28);
                                    return (e.position = e.stream_ops.llseek(e, t, r)), (e.ungotten = []), e.position;
                                },
                                read: function (e, t, r, n, o) {
                                    if (n < 0 || o < 0) throw new nt.ErrnoError(28);
                                    if (nt.isClosed(e)) throw new nt.ErrnoError(8);
                                    if (1 == (2097155 & e.flags)) throw new nt.ErrnoError(8);
                                    if (nt.isDir(e.node.mode)) throw new nt.ErrnoError(31);
                                    if (!e.stream_ops.read) throw new nt.ErrnoError(28);
                                    var i = void 0 !== o;
                                    if (i) {
                                        if (!e.seekable) throw new nt.ErrnoError(70);
                                    } else o = e.position;
                                    var a = e.stream_ops.read(e, t, r, n, o);
                                    return i || (e.position += a), a;
                                },
                                write: function (e, t, r, n, o, i) {
                                    if (n < 0 || o < 0) throw new nt.ErrnoError(28);
                                    if (nt.isClosed(e)) throw new nt.ErrnoError(8);
                                    if (0 == (2097155 & e.flags)) throw new nt.ErrnoError(8);
                                    if (nt.isDir(e.node.mode)) throw new nt.ErrnoError(31);
                                    if (!e.stream_ops.write) throw new nt.ErrnoError(28);
                                    1024 & e.flags && nt.llseek(e, 0, 2);
                                    var a = void 0 !== o;
                                    if (a) {
                                        if (!e.seekable) throw new nt.ErrnoError(70);
                                    } else o = e.position;
                                    var u = e.stream_ops.write(e, t, r, n, o, i);
                                    a || (e.position += u);
                                    try {
                                        e.path && nt.trackingDelegate.onWriteToFile && nt.trackingDelegate.onWriteToFile(e.path);
                                    } catch (t) {
                                        console.log("FS.trackingDelegate['onWriteToFile']('" + e.path + "') threw an exception: " + t.message);
                                    }
                                    return u;
                                },
                                allocate: function (e, t, r) {
                                    if (nt.isClosed(e)) throw new nt.ErrnoError(8);
                                    if (t < 0 || r <= 0) throw new nt.ErrnoError(28);
                                    if (0 == (2097155 & e.flags)) throw new nt.ErrnoError(8);
                                    if (!nt.isFile(e.node.mode) && !nt.isDir(e.node.mode)) throw new nt.ErrnoError(43);
                                    if (!e.stream_ops.allocate) throw new nt.ErrnoError(138);
                                    e.stream_ops.allocate(e, t, r);
                                },
                                mmap: function (e, t, r, n, o, i, a) {
                                    if (0 != (2 & i) && 0 == (2 & a) && 2 != (2097155 & e.flags)) throw new nt.ErrnoError(2);
                                    if (1 == (2097155 & e.flags)) throw new nt.ErrnoError(2);
                                    if (!e.stream_ops.mmap) throw new nt.ErrnoError(43);
                                    return e.stream_ops.mmap(e, t, r, n, o, i, a);
                                },
                                msync: function (e, t, r, n, o) {
                                    return e && e.stream_ops.msync ? e.stream_ops.msync(e, t, r, n, o) : 0;
                                },
                                munmap: function (e) {
                                    return 0;
                                },
                                ioctl: function (e, t, r) {
                                    if (!e.stream_ops.ioctl) throw new nt.ErrnoError(59);
                                    return e.stream_ops.ioctl(e, t, r);
                                },
                                readFile: function (e, t) {
                                    if ((((t = t || {}).flags = t.flags || "r"), (t.encoding = t.encoding || "binary"), "utf8" !== t.encoding && "binary" !== t.encoding)) throw new Error('Invalid encoding type "' + t.encoding + '"');
                                    var r,
                                        n = nt.open(e, t.flags),
                                        o = nt.stat(e).size,
                                        i = new Uint8Array(o);
                                    return nt.read(n, i, 0, o, 0), "utf8" === t.encoding ? (r = H(i, 0)) : "binary" === t.encoding && (r = i), nt.close(n), r;
                                },
                                writeFile: function (e, t, r) {
                                    (r = r || {}).flags = r.flags || "w";
                                    var n = nt.open(e, r.flags, r.mode);
                                    if ("string" == typeof t) {
                                        var o = new Uint8Array(q(t) + 1),
                                            i = U(t, o, 0, o.length);
                                        nt.write(n, o, 0, i, void 0, r.canOwn);
                                    } else {
                                        if (!ArrayBuffer.isView(t)) throw new Error("Unsupported data type");
                                        nt.write(n, t, 0, t.byteLength, void 0, r.canOwn);
                                    }
                                    nt.close(n);
                                },
                                cwd: function () {
                                    return nt.currentPath;
                                },
                                chdir: function (e) {
                                    var t = nt.lookupPath(e, { follow: !0 });
                                    if (null === t.node) throw new nt.ErrnoError(44);
                                    if (!nt.isDir(t.node.mode)) throw new nt.ErrnoError(54);
                                    var r = nt.nodePermissions(t.node, "x");
                                    if (r) throw new nt.ErrnoError(r);
                                    nt.currentPath = t.path;
                                },
                                createDefaultDirectories: function () {
                                    nt.mkdir("/tmp"), nt.mkdir("/home"), nt.mkdir("/home/web_user");
                                },
                                createDefaultDevices: function () {
                                    var e;
                                    if (
                                        (nt.mkdir("/dev"),
                                        nt.registerDevice(nt.makedev(1, 3), {
                                            read: function () {
                                                return 0;
                                            },
                                            write: function (e, t, r, n, o) {
                                                return n;
                                            },
                                        }),
                                        nt.mkdev("/dev/null", nt.makedev(1, 3)),
                                        tt.register(nt.makedev(5, 0), tt.default_tty_ops),
                                        tt.register(nt.makedev(6, 0), tt.default_tty1_ops),
                                        nt.mkdev("/dev/tty", nt.makedev(5, 0)),
                                        nt.mkdev("/dev/tty1", nt.makedev(6, 0)),
                                        "object" === ("undefined" == typeof crypto ? "undefined" : i(crypto)) && "function" == typeof crypto.getRandomValues)
                                    ) {
                                        var t = new Uint8Array(1);
                                        e = function () {
                                            return crypto.getRandomValues(t), t[0];
                                        };
                                    } else if (p)
                                        try {
                                            var n = r(49);
                                            e = function () {
                                                return n.randomBytes(1)[0];
                                            };
                                        } catch (e) {}
                                    e ||
                                        (e = function () {
                                            Ae("random_device");
                                        }),
                                        nt.createDevice("/dev", "random", e),
                                        nt.createDevice("/dev", "urandom", e),
                                        nt.mkdir("/dev/shm"),
                                        nt.mkdir("/dev/shm/tmp");
                                },
                                createSpecialDirectories: function () {
                                    nt.mkdir("/proc"),
                                        nt.mkdir("/proc/self"),
                                        nt.mkdir("/proc/self/fd"),
                                        nt.mount(
                                            {
                                                mount: function () {
                                                    var e = nt.createNode("/proc/self", "fd", 16895, 73);
                                                    return (
                                                        (e.node_ops = {
                                                            lookup: function (e, t) {
                                                                var r = +t,
                                                                    n = nt.getStream(r);
                                                                if (!n) throw new nt.ErrnoError(8);
                                                                var o = {
                                                                    parent: null,
                                                                    mount: { mountpoint: "fake" },
                                                                    node_ops: {
                                                                        readlink: function () {
                                                                            return n.path;
                                                                        },
                                                                    },
                                                                };
                                                                return (o.parent = o), o;
                                                            },
                                                        }),
                                                        e
                                                    );
                                                },
                                            },
                                            {},
                                            "/proc/self/fd"
                                        );
                                },
                                createStandardStreams: function () {
                                    t.stdin ? nt.createDevice("/dev", "stdin", t.stdin) : nt.symlink("/dev/tty", "/dev/stdin"),
                                        t.stdout ? nt.createDevice("/dev", "stdout", null, t.stdout) : nt.symlink("/dev/tty", "/dev/stdout"),
                                        t.stderr ? nt.createDevice("/dev", "stderr", null, t.stderr) : nt.symlink("/dev/tty1", "/dev/stderr"),
                                        nt.open("/dev/stdin", "r"),
                                        nt.open("/dev/stdout", "w"),
                                        nt.open("/dev/stderr", "w");
                                },
                                ensureErrnoError: function () {
                                    nt.ErrnoError ||
                                        ((nt.ErrnoError = function (e, t) {
                                            (this.node = t),
                                                (this.setErrno = function (e) {
                                                    this.errno = e;
                                                }),
                                                this.setErrno(e),
                                                (this.message = "FS error");
                                        }),
                                        (nt.ErrnoError.prototype = new Error()),
                                        (nt.ErrnoError.prototype.constructor = nt.ErrnoError),
                                        [44].forEach(function (e) {
                                            (nt.genericErrors[e] = new nt.ErrnoError(e)), (nt.genericErrors[e].stack = "<generic error, no stack>");
                                        }));
                                },
                                staticInit: function () {
                                    nt.ensureErrnoError(), (nt.nameTable = new Array(4096)), nt.mount(rt, {}, "/"), nt.createDefaultDirectories(), nt.createDefaultDevices(), nt.createSpecialDirectories(), (nt.filesystems = { MEMFS: rt });
                                },
                                init: function (e, r, n) {
                                    (nt.init.initialized = !0), nt.ensureErrnoError(), (t.stdin = e || t.stdin), (t.stdout = r || t.stdout), (t.stderr = n || t.stderr), nt.createStandardStreams();
                                },
                                quit: function () {
                                    nt.init.initialized = !1;
                                    var e = t._fflush;
                                    e && e(0);
                                    for (var r = 0; r < nt.streams.length; r++) {
                                        var n = nt.streams[r];
                                        n && nt.close(n);
                                    }
                                },
                                getMode: function (e, t) {
                                    var r = 0;
                                    return e && (r |= 365), t && (r |= 146), r;
                                },
                                joinPath: function (e, t) {
                                    var r = Qe.join.apply(null, e);
                                    return t && "/" == r[0] && (r = r.substr(1)), r;
                                },
                                absolutePath: function (e, t) {
                                    return et.resolve(t, e);
                                },
                                standardizePath: function (e) {
                                    return Qe.normalize(e);
                                },
                                findObject: function (e, t) {
                                    var r = nt.analyzePath(e, t);
                                    return r.exists ? r.object : (Ze(r.error), null);
                                },
                                analyzePath: function (e, t) {
                                    try {
                                        e = (n = nt.lookupPath(e, { follow: !t })).path;
                                    } catch (e) {}
                                    var r = { isRoot: !1, exists: !1, error: 0, name: null, path: null, object: null, parentExists: !1, parentPath: null, parentObject: null };
                                    try {
                                        var n = nt.lookupPath(e, { parent: !0 });
                                        (r.parentExists = !0),
                                            (r.parentPath = n.path),
                                            (r.parentObject = n.node),
                                            (r.name = Qe.basename(e)),
                                            (n = nt.lookupPath(e, { follow: !t })),
                                            (r.exists = !0),
                                            (r.path = n.path),
                                            (r.object = n.node),
                                            (r.name = n.node.name),
                                            (r.isRoot = "/" === n.path);
                                    } catch (e) {
                                        r.error = e.errno;
                                    }
                                    return r;
                                },
                                createFolder: function (e, t, r, n) {
                                    var o = Qe.join2("string" == typeof e ? e : nt.getPath(e), t),
                                        i = nt.getMode(r, n);
                                    return nt.mkdir(o, i);
                                },
                                createPath: function (e, t, r, n) {
                                    e = "string" == typeof e ? e : nt.getPath(e);
                                    for (var o = t.split("/").reverse(); o.length; ) {
                                        var i = o.pop();
                                        if (i) {
                                            var a = Qe.join2(e, i);
                                            try {
                                                nt.mkdir(a);
                                            } catch (e) {}
                                            e = a;
                                        }
                                    }
                                    return a;
                                },
                                createFile: function (e, t, r, n, o) {
                                    var i = Qe.join2("string" == typeof e ? e : nt.getPath(e), t),
                                        a = nt.getMode(n, o);
                                    return nt.create(i, a);
                                },
                                createDataFile: function (e, t, r, n, o, i) {
                                    var a = t ? Qe.join2("string" == typeof e ? e : nt.getPath(e), t) : e,
                                        u = nt.getMode(n, o),
                                        s = nt.create(a, u);
                                    if (r) {
                                        if ("string" == typeof r) {
                                            for (var l = new Array(r.length), c = 0, f = r.length; c < f; ++c) l[c] = r.charCodeAt(c);
                                            r = l;
                                        }
                                        nt.chmod(s, 146 | u);
                                        var d = nt.open(s, "w");
                                        nt.write(d, r, 0, r.length, 0, i), nt.close(d), nt.chmod(s, u);
                                    }
                                    return s;
                                },
                                createDevice: function (e, t, r, n) {
                                    var o = Qe.join2("string" == typeof e ? e : nt.getPath(e), t),
                                        i = nt.getMode(!!r, !!n);
                                    nt.createDevice.major || (nt.createDevice.major = 64);
                                    var a = nt.makedev(nt.createDevice.major++, 0);
                                    return (
                                        nt.registerDevice(a, {
                                            open: function (e) {
                                                e.seekable = !1;
                                            },
                                            close: function (e) {
                                                n && n.buffer && n.buffer.length && n(10);
                                            },
                                            read: function (e, t, n, o, i) {
                                                for (var a = 0, u = 0; u < o; u++) {
                                                    var s;
                                                    try {
                                                        s = r();
                                                    } catch (e) {
                                                        throw new nt.ErrnoError(29);
                                                    }
                                                    if (void 0 === s && 0 === a) throw new nt.ErrnoError(6);
                                                    if (null == s) break;
                                                    a++, (t[n + u] = s);
                                                }
                                                return a && (e.node.timestamp = Date.now()), a;
                                            },
                                            write: function (e, t, r, o, i) {
                                                for (var a = 0; a < o; a++)
                                                    try {
                                                        n(t[r + a]);
                                                    } catch (e) {
                                                        throw new nt.ErrnoError(29);
                                                    }
                                                return o && (e.node.timestamp = Date.now()), a;
                                            },
                                        }),
                                        nt.mkdev(o, i, a)
                                    );
                                },
                                createLink: function (e, t, r, n, o) {
                                    var i = Qe.join2("string" == typeof e ? e : nt.getPath(e), t);
                                    return nt.symlink(r, i);
                                },
                                forceLoadFile: function (e) {
                                    if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
                                    var t = !0;
                                    if ("undefined" != typeof XMLHttpRequest)
                                        throw new Error(
                                            "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
                                        );
                                    if (!y) throw new Error("Cannot load without read() or XMLHttpRequest.");
                                    try {
                                        (e.contents = Pt(y(e.url), !0)), (e.usedBytes = e.contents.length);
                                    } catch (e) {
                                        t = !1;
                                    }
                                    return t || Ze(29), t;
                                },
                                createLazyFile: function (e, t, r, n, o) {
                                    function i() {
                                        (this.lengthKnown = !1), (this.chunks = []);
                                    }
                                    if (
                                        ((i.prototype.get = function (e) {
                                            if (!(e > this.length - 1 || e < 0)) {
                                                var t = e % this.chunkSize,
                                                    r = (e / this.chunkSize) | 0;
                                                return this.getter(r)[t];
                                            }
                                        }),
                                        (i.prototype.setDataGetter = function (e) {
                                            this.getter = e;
                                        }),
                                        (i.prototype.cacheLength = function () {
                                            var e = new XMLHttpRequest();
                                            if ((e.open("HEAD", r, !1), e.send(null), !((e.status >= 200 && e.status < 300) || 304 === e.status))) throw new Error("Couldn't load " + r + ". Status: " + e.status);
                                            var t,
                                                n = Number(e.getResponseHeader("Content-length")),
                                                o = (t = e.getResponseHeader("Accept-Ranges")) && "bytes" === t,
                                                i = (t = e.getResponseHeader("Content-Encoding")) && "gzip" === t,
                                                a = 1048576;
                                            o || (a = n);
                                            var u = this;
                                            u.setDataGetter(function (e) {
                                                var t = e * a,
                                                    o = (e + 1) * a - 1;
                                                if (
                                                    ((o = Math.min(o, n - 1)),
                                                    void 0 === u.chunks[e] &&
                                                        (u.chunks[e] = (function (e, t) {
                                                            if (e > t) throw new Error("invalid range (" + e + ", " + t + ") or no bytes requested!");
                                                            if (t > n - 1) throw new Error("only " + n + " bytes available! programmer error!");
                                                            var o = new XMLHttpRequest();
                                                            if (
                                                                (o.open("GET", r, !1),
                                                                n !== a && o.setRequestHeader("Range", "bytes=" + e + "-" + t),
                                                                "undefined" != typeof Uint8Array && (o.responseType = "arraybuffer"),
                                                                o.overrideMimeType && o.overrideMimeType("text/plain; charset=x-user-defined"),
                                                                o.send(null),
                                                                !((o.status >= 200 && o.status < 300) || 304 === o.status))
                                                            )
                                                                throw new Error("Couldn't load " + r + ". Status: " + o.status);
                                                            return void 0 !== o.response ? new Uint8Array(o.response || []) : Pt(o.responseText || "", !0);
                                                        })(t, o)),
                                                    void 0 === u.chunks[e])
                                                )
                                                    throw new Error("doXHR failed!");
                                                return u.chunks[e];
                                            }),
                                                (!i && n) || ((a = n = 1), (n = this.getter(0).length), (a = n), console.log("LazyFiles on gzip forces download of the whole file when length is accessed")),
                                                (this._length = n),
                                                (this._chunkSize = a),
                                                (this.lengthKnown = !0);
                                        }),
                                        "undefined" != typeof XMLHttpRequest)
                                    ) {
                                        if (!m) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                                        var a = new i();
                                        Object.defineProperties(a, {
                                            length: {
                                                get: function () {
                                                    return this.lengthKnown || this.cacheLength(), this._length;
                                                },
                                            },
                                            chunkSize: {
                                                get: function () {
                                                    return this.lengthKnown || this.cacheLength(), this._chunkSize;
                                                },
                                            },
                                        });
                                        var u = { isDevice: !1, contents: a };
                                    } else u = { isDevice: !1, url: r };
                                    var s = nt.createFile(e, t, u, n, o);
                                    u.contents ? (s.contents = u.contents) : u.url && ((s.contents = null), (s.url = u.url)),
                                        Object.defineProperties(s, {
                                            usedBytes: {
                                                get: function () {
                                                    return this.contents.length;
                                                },
                                            },
                                        });
                                    var l = {};
                                    return (
                                        Object.keys(s.stream_ops).forEach(function (e) {
                                            var t = s.stream_ops[e];
                                            l[e] = function () {
                                                if (!nt.forceLoadFile(s)) throw new nt.ErrnoError(29);
                                                return t.apply(null, arguments);
                                            };
                                        }),
                                        (l.read = function (e, t, r, n, o) {
                                            if (!nt.forceLoadFile(s)) throw new nt.ErrnoError(29);
                                            var i = e.node.contents;
                                            if (o >= i.length) return 0;
                                            var a = Math.min(i.length - o, n);
                                            if (i.slice) for (var u = 0; u < a; u++) t[r + u] = i[o + u];
                                            else for (u = 0; u < a; u++) t[r + u] = i.get(o + u);
                                            return a;
                                        }),
                                        (s.stream_ops = l),
                                        s
                                    );
                                },
                                createPreloadedFile: function (e, r, n, o, i, a, u, s, l, c) {
                                    Browser.init();
                                    var f = r ? et.resolve(Qe.join2(e, r)) : e;
                                    function d(n) {
                                        function d(t) {
                                            c && c(), s || nt.createDataFile(e, r, t, o, i, l), a && a(), Me();
                                        }
                                        var m = !1;
                                        t.preloadPlugins.forEach(function (e) {
                                            m ||
                                                (e.canHandle(f) &&
                                                    (e.handle(n, f, d, function () {
                                                        u && u(), Me();
                                                    }),
                                                    (m = !0)));
                                        }),
                                            m || d(n);
                                    }
                                    xe(),
                                        "string" == typeof n
                                            ? Browser.asyncLoad(
                                                  n,
                                                  function (e) {
                                                      d(e);
                                                  },
                                                  u
                                              )
                                            : d(n);
                                },
                                indexedDB: function () {
                                    return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                                },
                                DB_NAME: function () {
                                    return "EM_FS_" + window.location.pathname;
                                },
                                DB_VERSION: 20,
                                DB_STORE_NAME: "FILE_DATA",
                                saveFilesToDB: function (e, t, r) {
                                    (t = t || function () {}), (r = r || function () {});
                                    var n = nt.indexedDB();
                                    try {
                                        var o = n.open(nt.DB_NAME(), nt.DB_VERSION);
                                    } catch (e) {
                                        return r(e);
                                    }
                                    (o.onupgradeneeded = function () {
                                        console.log("creating db"), o.result.createObjectStore(nt.DB_STORE_NAME);
                                    }),
                                        (o.onsuccess = function () {
                                            var n = o.result.transaction([nt.DB_STORE_NAME], "readwrite"),
                                                i = n.objectStore(nt.DB_STORE_NAME),
                                                a = 0,
                                                u = 0,
                                                s = e.length;
                                            function l() {
                                                0 == u ? t() : r();
                                            }
                                            e.forEach(function (e) {
                                                var t = i.put(nt.analyzePath(e).object.contents, e);
                                                (t.onsuccess = function () {
                                                    ++a + u == s && l();
                                                }),
                                                    (t.onerror = function () {
                                                        u++, a + u == s && l();
                                                    });
                                            }),
                                                (n.onerror = r);
                                        }),
                                        (o.onerror = r);
                                },
                                loadFilesFromDB: function (e, t, r) {
                                    (t = t || function () {}), (r = r || function () {});
                                    var n = nt.indexedDB();
                                    try {
                                        var o = n.open(nt.DB_NAME(), nt.DB_VERSION);
                                    } catch (e) {
                                        return r(e);
                                    }
                                    (o.onupgradeneeded = r),
                                        (o.onsuccess = function () {
                                            var n = o.result;
                                            try {
                                                var i = n.transaction([nt.DB_STORE_NAME], "readonly");
                                            } catch (e) {
                                                return void r(e);
                                            }
                                            var a = i.objectStore(nt.DB_STORE_NAME),
                                                u = 0,
                                                s = 0,
                                                l = e.length;
                                            function c() {
                                                0 == s ? t() : r();
                                            }
                                            e.forEach(function (e) {
                                                var t = a.get(e);
                                                (t.onsuccess = function () {
                                                    nt.analyzePath(e).exists && nt.unlink(e), nt.createDataFile(Qe.dirname(e), Qe.basename(e), t.result, !0, !0, !0), ++u + s == l && c();
                                                }),
                                                    (t.onerror = function () {
                                                        s++, u + s == l && c();
                                                    });
                                            }),
                                                (i.onerror = r);
                                        }),
                                        (o.onerror = r);
                                },
                            },
                            ot = {
                                DEFAULT_POLLMASK: 5,
                                mappings: {},
                                umask: 511,
                                calculateAt: function (e, t) {
                                    if ("/" !== t[0]) {
                                        var r;
                                        if (-100 === e) r = nt.cwd();
                                        else {
                                            var n = nt.getStream(e);
                                            if (!n) throw new nt.ErrnoError(8);
                                            r = n.path;
                                        }
                                        t = Qe.join2(r, t);
                                    }
                                    return t;
                                },
                                doStat: function (e, t, r) {
                                    try {
                                        var n = e(t);
                                    } catch (e) {
                                        if (e && e.node && Qe.normalize(t) !== Qe.normalize(nt.getPath(e.node))) return -54;
                                        throw e;
                                    }
                                    return (
                                        (Z[r >> 2] = n.dev),
                                        (Z[(r + 4) >> 2] = 0),
                                        (Z[(r + 8) >> 2] = n.ino),
                                        (Z[(r + 12) >> 2] = n.mode),
                                        (Z[(r + 16) >> 2] = n.nlink),
                                        (Z[(r + 20) >> 2] = n.uid),
                                        (Z[(r + 24) >> 2] = n.gid),
                                        (Z[(r + 28) >> 2] = n.rdev),
                                        (Z[(r + 32) >> 2] = 0),
                                        (je = [n.size >>> 0, ((Pe = n.size), +ve(Pe) >= 1 ? (Pe > 0 ? (0 | be(+Ee(Pe / 4294967296), 4294967295)) >>> 0 : ~~+_e((Pe - +(~~Pe >>> 0)) / 4294967296) >>> 0) : 0)]),
                                        (Z[(r + 40) >> 2] = je[0]),
                                        (Z[(r + 44) >> 2] = je[1]),
                                        (Z[(r + 48) >> 2] = 4096),
                                        (Z[(r + 52) >> 2] = n.blocks),
                                        (Z[(r + 56) >> 2] = (n.atime.getTime() / 1e3) | 0),
                                        (Z[(r + 60) >> 2] = 0),
                                        (Z[(r + 64) >> 2] = (n.mtime.getTime() / 1e3) | 0),
                                        (Z[(r + 68) >> 2] = 0),
                                        (Z[(r + 72) >> 2] = (n.ctime.getTime() / 1e3) | 0),
                                        (Z[(r + 76) >> 2] = 0),
                                        (je = [n.ino >>> 0, ((Pe = n.ino), +ve(Pe) >= 1 ? (Pe > 0 ? (0 | be(+Ee(Pe / 4294967296), 4294967295)) >>> 0 : ~~+_e((Pe - +(~~Pe >>> 0)) / 4294967296) >>> 0) : 0)]),
                                        (Z[(r + 80) >> 2] = je[0]),
                                        (Z[(r + 84) >> 2] = je[1]),
                                        0
                                    );
                                },
                                doMsync: function (e, t, r, n) {
                                    var o = new Uint8Array(J.subarray(e, e + r));
                                    nt.msync(t, o, 0, r, n);
                                },
                                doMkdir: function (e, t) {
                                    return "/" === (e = Qe.normalize(e))[e.length - 1] && (e = e.substr(0, e.length - 1)), nt.mkdir(e, t, 0), 0;
                                },
                                doMknod: function (e, t, r) {
                                    switch (61440 & t) {
                                        case 32768:
                                        case 8192:
                                        case 24576:
                                        case 4096:
                                        case 49152:
                                            break;
                                        default:
                                            return -28;
                                    }
                                    return nt.mknod(e, t, r), 0;
                                },
                                doReadlink: function (e, t, r) {
                                    if (r <= 0) return -28;
                                    var n = nt.readlink(e),
                                        o = Math.min(r, q(n)),
                                        i = X[t + o];
                                    return W(n, t, r + 1), (X[t + o] = i), o;
                                },
                                doAccess: function (e, t) {
                                    if (-8 & t) return -28;
                                    var r;
                                    if (!(r = nt.lookupPath(e, { follow: !0 }).node)) return -44;
                                    var n = "";
                                    return 4 & t && (n += "r"), 2 & t && (n += "w"), 1 & t && (n += "x"), n && nt.nodePermissions(r, n) ? -2 : 0;
                                },
                                doDup: function (e, t, r) {
                                    var n = nt.getStream(r);
                                    return n && nt.close(n), nt.open(e, t, 0, r, r).fd;
                                },
                                doReadv: function (e, t, r, n) {
                                    for (var o = 0, i = 0; i < r; i++) {
                                        var a = Z[(t + 8 * i) >> 2],
                                            u = Z[(t + (8 * i + 4)) >> 2],
                                            s = nt.read(e, X, a, u, n);
                                        if (s < 0) return -1;
                                        if (((o += s), s < u)) break;
                                    }
                                    return o;
                                },
                                doWritev: function (e, t, r, n) {
                                    for (var o = 0, i = 0; i < r; i++) {
                                        var a = Z[(t + 8 * i) >> 2],
                                            u = Z[(t + (8 * i + 4)) >> 2],
                                            s = nt.write(e, X, a, u, n);
                                        if (s < 0) return -1;
                                        o += s;
                                    }
                                    return o;
                                },
                                varargs: 0,
                                get: function (e) {
                                    return (ot.varargs += 4), Z[(ot.varargs - 4) >> 2];
                                },
                                getStr: function () {
                                    return L(ot.get());
                                },
                                getStreamFromFD: function (e) {
                                    void 0 === e && (e = ot.get());
                                    var t = nt.getStream(e);
                                    if (!t) throw new nt.ErrnoError(8);
                                    return t;
                                },
                                get64: function () {
                                    var e = ot.get();
                                    return ot.get(), e;
                                },
                                getZero: function () {
                                    ot.get();
                                },
                            };
                        function it(e, t) {
                            if (-1 === e || 0 === t) return -28;
                            var r = ot.mappings[e];
                            if (!r) return 0;
                            if (t === r.len) {
                                var n = nt.getStream(r.fd);
                                ot.doMsync(e, n, t, r.flags), nt.munmap(n), (ot.mappings[e] = null), r.allocated && Nt(r.malloc);
                            }
                            return 0;
                        }
                        function at(e, t) {
                            ot.varargs = t;
                            try {
                                return it(ot.get(), ot.get());
                            } catch (e) {
                                return (void 0 !== nt && e instanceof nt.ErrnoError) || Ae(e), -e.errno;
                            }
                        }
                        function ut() {}
                        function st() {
                            Ae();
                        }
                        function lt() {
                            return X.length;
                        }
                        function ct() {
                            return 38480;
                        }
                        function ft(e, t, r) {
                            J.set(J.subarray(t, t + r), e);
                        }
                        function dt(e) {
                            try {
                                return F.grow((e - G.byteLength + 65535) >> 16), re(F.buffer), 1;
                            } catch (e) {}
                        }
                        function mt(e) {
                            var t = lt();
                            if (e > 2147418112) return !1;
                            for (var r = Math.max(t, 16777216); r < e; ) r = r <= 536870912 ? te(2 * r, 65536) : Math.min(te((3 * r + 2147483648) / 4, 65536), 2147418112);
                            return !!dt(r);
                        }
                        var pt = {};
                        function ht() {
                            if (!ht.strings) {
                                var e = {
                                    USER: "web_user",
                                    LOGNAME: "web_user",
                                    PATH: "/",
                                    PWD: "/",
                                    HOME: "/home/web_user",
                                    LANG: (("object" === ("undefined" == typeof navigator ? "undefined" : i(navigator)) && navigator.languages && navigator.languages[0]) || "C").replace("-", "_") + ".UTF-8",
                                    _: c,
                                };
                                for (var t in pt) e[t] = pt[t];
                                var r = [];
                                for (var t in e) r.push(t + "=" + e[t]);
                                ht.strings = r;
                            }
                            return ht.strings;
                        }
                        function gt(e, t) {
                            var r = ht(),
                                n = 0;
                            return (
                                r.forEach(function (r, o) {
                                    var i = t + n;
                                    (Z[(e + 4 * o) >> 2] = i), Y(r, i), (n += r.length + 1);
                                }),
                                0
                            );
                        }
                        function yt(e, t) {
                            var r = ht();
                            Z[e >> 2] = r.length;
                            var n = 0;
                            return (
                                r.forEach(function (e) {
                                    n += e.length + 1;
                                }),
                                (Z[t >> 2] = n),
                                0
                            );
                        }
                        function wt(e) {
                            Vt(e);
                        }
                        function vt(e) {
                            try {
                                var t = ot.getStreamFromFD(e);
                                return nt.close(t), 0;
                            } catch (e) {
                                return (void 0 !== nt && e instanceof nt.ErrnoError) || Ae(e), e.errno;
                            }
                        }
                        function _t(e, t, r, n) {
                            try {
                                var o = ot.getStreamFromFD(e),
                                    i = ot.doReadv(o, t, r);
                                return (Z[n >> 2] = i), 0;
                            } catch (e) {
                                return (void 0 !== nt && e instanceof nt.ErrnoError) || Ae(e), e.errno;
                            }
                        }
                        function Et(e, t, r, n, o) {
                            try {
                                var i = ot.getStreamFromFD(e),
                                    a = 4294967296 * r + (t >>> 0);
                                return a <= -9007199254740992 || a >= 9007199254740992
                                    ? -61
                                    : (nt.llseek(i, a, n),
                                      (je = [i.position >>> 0, ((Pe = i.position), +ve(Pe) >= 1 ? (Pe > 0 ? (0 | be(+Ee(Pe / 4294967296), 4294967295)) >>> 0 : ~~+_e((Pe - +(~~Pe >>> 0)) / 4294967296) >>> 0) : 0)]),
                                      (Z[o >> 2] = je[0]),
                                      (Z[(o + 4) >> 2] = je[1]),
                                      i.getdents && 0 === a && 0 === n && (i.getdents = null),
                                      0);
                            } catch (e) {
                                return (void 0 !== nt && e instanceof nt.ErrnoError) || Ae(e), e.errno;
                            }
                        }
                        function bt(e, t, r, n) {
                            try {
                                var o = ot.getStreamFromFD(e),
                                    i = ot.doWritev(o, t, r);
                                return (Z[n >> 2] = i), 0;
                            } catch (e) {
                                return (void 0 !== nt && e instanceof nt.ErrnoError) || Ae(e), e.errno;
                            }
                        }
                        function kt(e) {
                            z(0 | e);
                        }
                        function Dt(e) {
                            return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
                        }
                        function St(e, t) {
                            for (var r = 0, n = 0; n <= t; r += e[n++]);
                            return r;
                        }
                        var xt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                            Mt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                        function At(e, t) {
                            for (var r = new Date(e.getTime()); t > 0; ) {
                                var n = Dt(r.getFullYear()),
                                    o = r.getMonth(),
                                    i = (n ? xt : Mt)[o];
                                if (!(t > i - r.getDate())) return r.setDate(r.getDate() + t), r;
                                (t -= i - r.getDate() + 1), r.setDate(1), o < 11 ? r.setMonth(o + 1) : (r.setMonth(0), r.setFullYear(r.getFullYear() + 1));
                            }
                            return r;
                        }
                        function Ft(e, t, r, n) {
                            var o = Z[(n + 40) >> 2],
                                i = {
                                    tm_sec: Z[n >> 2],
                                    tm_min: Z[(n + 4) >> 2],
                                    tm_hour: Z[(n + 8) >> 2],
                                    tm_mday: Z[(n + 12) >> 2],
                                    tm_mon: Z[(n + 16) >> 2],
                                    tm_year: Z[(n + 20) >> 2],
                                    tm_wday: Z[(n + 24) >> 2],
                                    tm_yday: Z[(n + 28) >> 2],
                                    tm_isdst: Z[(n + 32) >> 2],
                                    tm_gmtoff: Z[(n + 36) >> 2],
                                    tm_zone: o ? L(o) : "",
                                },
                                a = L(r),
                                u = {
                                    "%c": "%a %b %d %H:%M:%S %Y",
                                    "%D": "%m/%d/%y",
                                    "%F": "%Y-%m-%d",
                                    "%h": "%b",
                                    "%r": "%I:%M:%S %p",
                                    "%R": "%H:%M",
                                    "%T": "%H:%M:%S",
                                    "%x": "%m/%d/%y",
                                    "%X": "%H:%M:%S",
                                    "%Ec": "%c",
                                    "%EC": "%C",
                                    "%Ex": "%m/%d/%y",
                                    "%EX": "%H:%M:%S",
                                    "%Ey": "%y",
                                    "%EY": "%Y",
                                    "%Od": "%d",
                                    "%Oe": "%e",
                                    "%OH": "%H",
                                    "%OI": "%I",
                                    "%Om": "%m",
                                    "%OM": "%M",
                                    "%OS": "%S",
                                    "%Ou": "%u",
                                    "%OU": "%U",
                                    "%OV": "%V",
                                    "%Ow": "%w",
                                    "%OW": "%W",
                                    "%Oy": "%y",
                                };
                            for (var s in u) a = a.replace(new RegExp(s, "g"), u[s]);
                            var l = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                c = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                            function f(e, t, r) {
                                for (var n = "number" == typeof e ? e.toString() : e || ""; n.length < t; ) n = r[0] + n;
                                return n;
                            }
                            function d(e, t) {
                                return f(e, t, "0");
                            }
                            function m(e, t) {
                                function r(e) {
                                    return e < 0 ? -1 : e > 0 ? 1 : 0;
                                }
                                var n;
                                return 0 === (n = r(e.getFullYear() - t.getFullYear())) && 0 === (n = r(e.getMonth() - t.getMonth())) && (n = r(e.getDate() - t.getDate())), n;
                            }
                            function p(e) {
                                switch (e.getDay()) {
                                    case 0:
                                        return new Date(e.getFullYear() - 1, 11, 29);
                                    case 1:
                                        return e;
                                    case 2:
                                        return new Date(e.getFullYear(), 0, 3);
                                    case 3:
                                        return new Date(e.getFullYear(), 0, 2);
                                    case 4:
                                        return new Date(e.getFullYear(), 0, 1);
                                    case 5:
                                        return new Date(e.getFullYear() - 1, 11, 31);
                                    case 6:
                                        return new Date(e.getFullYear() - 1, 11, 30);
                                }
                            }
                            function h(e) {
                                var t = At(new Date(e.tm_year + 1900, 0, 1), e.tm_yday),
                                    r = new Date(t.getFullYear(), 0, 4),
                                    n = new Date(t.getFullYear() + 1, 0, 4),
                                    o = p(r),
                                    i = p(n);
                                return m(o, t) <= 0 ? (m(i, t) <= 0 ? t.getFullYear() + 1 : t.getFullYear()) : t.getFullYear() - 1;
                            }
                            var g = {
                                "%a": function (e) {
                                    return l[e.tm_wday].substring(0, 3);
                                },
                                "%A": function (e) {
                                    return l[e.tm_wday];
                                },
                                "%b": function (e) {
                                    return c[e.tm_mon].substring(0, 3);
                                },
                                "%B": function (e) {
                                    return c[e.tm_mon];
                                },
                                "%C": function (e) {
                                    return d(((e.tm_year + 1900) / 100) | 0, 2);
                                },
                                "%d": function (e) {
                                    return d(e.tm_mday, 2);
                                },
                                "%e": function (e) {
                                    return f(e.tm_mday, 2, " ");
                                },
                                "%g": function (e) {
                                    return h(e).toString().substring(2);
                                },
                                "%G": function (e) {
                                    return h(e);
                                },
                                "%H": function (e) {
                                    return d(e.tm_hour, 2);
                                },
                                "%I": function (e) {
                                    var t = e.tm_hour;
                                    return 0 == t ? (t = 12) : t > 12 && (t -= 12), d(t, 2);
                                },
                                "%j": function (e) {
                                    return d(e.tm_mday + St(Dt(e.tm_year + 1900) ? xt : Mt, e.tm_mon - 1), 3);
                                },
                                "%m": function (e) {
                                    return d(e.tm_mon + 1, 2);
                                },
                                "%M": function (e) {
                                    return d(e.tm_min, 2);
                                },
                                "%n": function () {
                                    return "\n";
                                },
                                "%p": function (e) {
                                    return e.tm_hour >= 0 && e.tm_hour < 12 ? "AM" : "PM";
                                },
                                "%S": function (e) {
                                    return d(e.tm_sec, 2);
                                },
                                "%t": function () {
                                    return "\t";
                                },
                                "%u": function (e) {
                                    return e.tm_wday || 7;
                                },
                                "%U": function (e) {
                                    var t = new Date(e.tm_year + 1900, 0, 1),
                                        r = 0 === t.getDay() ? t : At(t, 7 - t.getDay()),
                                        n = new Date(e.tm_year + 1900, e.tm_mon, e.tm_mday);
                                    if (m(r, n) < 0) {
                                        var o = St(Dt(n.getFullYear()) ? xt : Mt, n.getMonth() - 1) - 31,
                                            i = 31 - r.getDate() + o + n.getDate();
                                        return d(Math.ceil(i / 7), 2);
                                    }
                                    return 0 === m(r, t) ? "01" : "00";
                                },
                                "%V": function (e) {
                                    var t,
                                        r = new Date(e.tm_year + 1900, 0, 4),
                                        n = new Date(e.tm_year + 1901, 0, 4),
                                        o = p(r),
                                        i = p(n),
                                        a = At(new Date(e.tm_year + 1900, 0, 1), e.tm_yday);
                                    return m(a, o) < 0 ? "53" : m(i, a) <= 0 ? "01" : ((t = o.getFullYear() < e.tm_year + 1900 ? e.tm_yday + 32 - o.getDate() : e.tm_yday + 1 - o.getDate()), d(Math.ceil(t / 7), 2));
                                },
                                "%w": function (e) {
                                    return e.tm_wday;
                                },
                                "%W": function (e) {
                                    var t = new Date(e.tm_year, 0, 1),
                                        r = 1 === t.getDay() ? t : At(t, 0 === t.getDay() ? 1 : 7 - t.getDay() + 1),
                                        n = new Date(e.tm_year + 1900, e.tm_mon, e.tm_mday);
                                    if (m(r, n) < 0) {
                                        var o = St(Dt(n.getFullYear()) ? xt : Mt, n.getMonth() - 1) - 31,
                                            i = 31 - r.getDate() + o + n.getDate();
                                        return d(Math.ceil(i / 7), 2);
                                    }
                                    return 0 === m(r, t) ? "01" : "00";
                                },
                                "%y": function (e) {
                                    return (e.tm_year + 1900).toString().substring(2);
                                },
                                "%Y": function (e) {
                                    return e.tm_year + 1900;
                                },
                                "%z": function (e) {
                                    var t = e.tm_gmtoff,
                                        r = t >= 0;
                                    return (t = ((t = Math.abs(t) / 60) / 60) * 100 + (t % 60)), (r ? "+" : "-") + String("0000" + t).slice(-4);
                                },
                                "%Z": function (e) {
                                    return e.tm_zone;
                                },
                                "%%": function () {
                                    return "%";
                                },
                            };
                            for (var s in g) a.indexOf(s) >= 0 && (a = a.replace(new RegExp(s, "g"), g[s](i)));
                            var y = Pt(a, !1);
                            return y.length > t ? 0 : (V(y, e), y.length - 1);
                        }
                        function zt(e, t, r, n) {
                            return Ft(e, t, r, n);
                        }
                        function Pt(e, t, r) {
                            var n = r > 0 ? r : q(e) + 1,
                                o = new Array(n),
                                i = U(e, o, 0, o.length);
                            return t && (o.length = i), o;
                        }
                        nt.staticInit();
                        var jt = {
                                __assert_fail: qe,
                                __cxa_allocate_exception: Ve,
                                __cxa_atexit: Ge,
                                __cxa_throw: Je,
                                __lock: Ke,
                                __map_file: $e,
                                __syscall91: at,
                                __unlock: ut,
                                abort: st,
                                emscripten_asm_const_iii: He,
                                emscripten_get_sbrk_ptr: ct,
                                emscripten_memcpy_big: ft,
                                emscripten_resize_heap: mt,
                                environ_get: gt,
                                environ_sizes_get: yt,
                                exit: wt,
                                fd_close: vt,
                                fd_read: _t,
                                fd_seek: Et,
                                fd_write: bt,
                                memory: F,
                                setTempRet0: kt,
                                strftime_l: zt,
                                table: C,
                            },
                            Ct = Te();
                        t.asm = Ct;
                        var Rt,
                            It = (t.___wasm_call_ctors = function () {
                                return t.asm.__wasm_call_ctors.apply(null, arguments);
                            }),
                            Tt =
                                ((t._xzimgMarkerInitialize = function () {
                                    return t.asm.xzimgMarkerInitialize.apply(null, arguments);
                                }),
                                (t._xzimgMarkerSetActiveIndices = function () {
                                    return t.asm.xzimgMarkerSetActiveIndices.apply(null, arguments);
                                }),
                                (t._xzimgMarkerSetFovx = function () {
                                    return t.asm.xzimgMarkerSetFovx.apply(null, arguments);
                                }),
                                (t._xzimgMarkerSetFovy = function () {
                                    return t.asm.xzimgMarkerSetFovy.apply(null, arguments);
                                }),
                                (t._xzimgMarkerDetect = function () {
                                    return t.asm.xzimgMarkerDetect.apply(null, arguments);
                                }),
                                (t._xzimgMarkerDetect_js = function () {
                                    return t.asm.xzimgMarkerDetect_js.apply(null, arguments);
                                }),
                                (t._xzimgMarkerGetNumber = function () {
                                    return t.asm.xzimgMarkerGetNumber.apply(null, arguments);
                                }),
                                (t._xzimgMarkerGetInfo = function () {
                                    return t.asm.xzimgMarkerGetInfo.apply(null, arguments);
                                }),
                                (t._xzimgMarkerGetInfoForUnity = function () {
                                    return t.asm.xzimgMarkerGetInfoForUnity.apply(null, arguments);
                                }),
                                (t._xzimgMarkerRelease = function () {
                                    return t.asm.xzimgMarkerRelease.apply(null, arguments);
                                }),
                                (t._xzimgNaturalImageInitialize = function () {
                                    return t.asm.xzimgNaturalImageInitialize.apply(null, arguments);
                                }),
                                (t._xzimgNaturalImageAddTarget = function () {
                                    return t.asm.xzimgNaturalImageAddTarget.apply(null, arguments);
                                }),
                                (t._xzimgNaturalImageFinalizeLearning = function () {
                                    return t.asm.xzimgNaturalImageFinalizeLearning.apply(null, arguments);
                                }),
                                (t._xzimgSetTrackingResourceLevel = function () {
                                    return t.asm.xzimgSetTrackingResourceLevel.apply(null, arguments);
                                }),
                                (t._xzimgNaturalImageAddImageTarget = function () {
                                    return t.asm.xzimgNaturalImageAddImageTarget.apply(null, arguments);
                                }),
                                (t._xzimgNaturalImageTrack = function () {
                                    return t.asm.xzimgNaturalImageTrack.apply(null, arguments);
                                }),
                                (t._xzimgNaturalImageTrack_js = function () {
                                    return t.asm.xzimgNaturalImageTrack_js.apply(null, arguments);
                                }),
                                (t._xzimgNaturalImageGetNumber = function () {
                                    return t.asm.xzimgNaturalImageGetNumber.apply(null, arguments);
                                }),
                                (t._xzimgNaturalImageGetInfo = function () {
                                    return t.asm.xzimgNaturalImageGetInfo.apply(null, arguments);
                                }),
                                (t._xzimgNaturalImageRelease = function () {
                                    return t.asm.xzimgNaturalImageRelease.apply(null, arguments);
                                }),
                                (t._main = function () {
                                    return t.asm.main.apply(null, arguments);
                                }),
                                (t._malloc = function () {
                                    return t.asm.malloc.apply(null, arguments);
                                })),
                            Nt = (t._free = function () {
                                return t.asm.free.apply(null, arguments);
                            }),
                            Ot =
                                ((t.___errno_location = function () {
                                    return t.asm.__errno_location.apply(null, arguments);
                                }),
                                (t._setThrew = function () {
                                    return t.asm.setThrew.apply(null, arguments);
                                }),
                                (t.__ZSt18uncaught_exceptionv = function () {
                                    return t.asm._ZSt18uncaught_exceptionv.apply(null, arguments);
                                })),
                            Bt = (t.stackSave = function () {
                                return t.asm.stackSave.apply(null, arguments);
                            }),
                            Ht = (t.stackAlloc = function () {
                                return t.asm.stackAlloc.apply(null, arguments);
                            }),
                            Lt = (t.stackRestore = function () {
                                return t.asm.stackRestore.apply(null, arguments);
                            });
                        function Ut(e) {
                            (this.name = "ExitStatus"), (this.message = "Program terminated with exit(" + e + ")"), (this.status = e);
                        }
                        function Wt(e) {
                            var r = t._main;
                            try {
                                Vt(r(0, 0), !0);
                            } catch (e) {
                                if (e instanceof Ut) return;
                                if ("SimulateInfiniteLoop" == e) return void (A = !0);
                                var n = e;
                                e && "object" === i(e) && e.stack && (n = [e, e.stack]), D("exception thrown: " + n), f(1, e);
                            }
                        }
                        function qt(e) {
                            function r() {
                                Rt || ((Rt = !0), R || (me(), pe(), t.onRuntimeInitialized && t.onRuntimeInitialized(), Yt && Wt(), ge()));
                            }
                            (e = e || l),
                                ke > 0 ||
                                    (de(),
                                    ke > 0 ||
                                        (t.setStatus
                                            ? (t.setStatus("Running..."),
                                              setTimeout(function () {
                                                  setTimeout(function () {
                                                      t.setStatus("");
                                                  }, 1),
                                                      r();
                                              }, 1))
                                            : r()));
                        }
                        function Vt(e, r) {
                            (r && A && 0 === e) || (A || ((R = !0), he(), t.onExit && t.onExit(e)), f(e, new Ut(e)));
                        }
                        if (
                            ((t.__growWasmMemory = function () {
                                return t.asm.__growWasmMemory.apply(null, arguments);
                            }),
                            (t.dynCall_vi = function () {
                                return t.asm.dynCall_vi.apply(null, arguments);
                            }),
                            (t.dynCall_ii = function () {
                                return t.asm.dynCall_ii.apply(null, arguments);
                            }),
                            (t.dynCall_iii = function () {
                                return t.asm.dynCall_iii.apply(null, arguments);
                            }),
                            (t.dynCall_di = function () {
                                return t.asm.dynCall_di.apply(null, arguments);
                            }),
                            (t.dynCall_v = function () {
                                return t.asm.dynCall_v.apply(null, arguments);
                            }),
                            (t.dynCall_vii = function () {
                                return t.asm.dynCall_vii.apply(null, arguments);
                            }),
                            (t.dynCall_iiiiifi = function () {
                                return t.asm.dynCall_iiiiifi.apply(null, arguments);
                            }),
                            (t.dynCall_viiiifiii = function () {
                                return t.asm.dynCall_viiiifiii.apply(null, arguments);
                            }),
                            (t.dynCall_iiii = function () {
                                return t.asm.dynCall_iiii.apply(null, arguments);
                            }),
                            (t.dynCall_jiji = function () {
                                return t.asm.dynCall_jiji.apply(null, arguments);
                            }),
                            (t.dynCall_iidiiii = function () {
                                return t.asm.dynCall_iidiiii.apply(null, arguments);
                            }),
                            (t.dynCall_viijii = function () {
                                return t.asm.dynCall_viijii.apply(null, arguments);
                            }),
                            (t.dynCall_viiii = function () {
                                return t.asm.dynCall_viiii.apply(null, arguments);
                            }),
                            (t.dynCall_iiiii = function () {
                                return t.asm.dynCall_iiiii.apply(null, arguments);
                            }),
                            (t.dynCall_iiiiii = function () {
                                return t.asm.dynCall_iiiiii.apply(null, arguments);
                            }),
                            (t.dynCall_iiiiiiiii = function () {
                                return t.asm.dynCall_iiiiiiiii.apply(null, arguments);
                            }),
                            (t.dynCall_iiiiiii = function () {
                                return t.asm.dynCall_iiiiiii.apply(null, arguments);
                            }),
                            (t.dynCall_iiiiij = function () {
                                return t.asm.dynCall_iiiiij.apply(null, arguments);
                            }),
                            (t.dynCall_iiiiid = function () {
                                return t.asm.dynCall_iiiiid.apply(null, arguments);
                            }),
                            (t.dynCall_iiiiijj = function () {
                                return t.asm.dynCall_iiiiijj.apply(null, arguments);
                            }),
                            (t.dynCall_iiiiiiii = function () {
                                return t.asm.dynCall_iiiiiiii.apply(null, arguments);
                            }),
                            (t.dynCall_iiiiiijj = function () {
                                return t.asm.dynCall_iiiiiijj.apply(null, arguments);
                            }),
                            (t.dynCall_viiiiii = function () {
                                return t.asm.dynCall_viiiiii.apply(null, arguments);
                            }),
                            (t.dynCall_viiiii = function () {
                                return t.asm.dynCall_viiiii.apply(null, arguments);
                            }),
                            (t.asm = Ct),
                            (t.ccall = N),
                            (t.cwrap = O),
                            (t.setValue = P),
                            (t.getValue = j),
                            (t.then = function (e) {
                                if (Rt) e(t);
                                else {
                                    var r = t.onRuntimeInitialized;
                                    t.onRuntimeInitialized = function () {
                                        r && r(), e(t);
                                    };
                                }
                                return t;
                            }),
                            (Se = function e() {
                                Rt || qt(), Rt || (Se = e);
                            }),
                            (t.run = qt),
                            t.preInit)
                        )
                            for ("function" == typeof t.preInit && (t.preInit = [t.preInit]); t.preInit.length > 0; ) t.preInit.pop()();
                        var Yt = !0;
                        return t.noInitialRun && (Yt = !1), (A = !0), qt(), t;
                    });
            t.a = u;
        }.call(this, r(8), "/", r(3).Buffer));
    },
    4: function (e, t) {
        var r = {
            sourceOs: "Apple",
            sourceAgent: "iphone",
            surface: null,
            markerUrl: null,
            trackingState: null,
            getSurface:
                (function () {
                    return "gyro";
                },
                function (e) {
                    return null !== r.surface
                        ? new Promise(function (e, t) {
                              e({ markerUrl: r.markerUrl, surface: r.surface });
                          })
                        : fetch("/blippSurface?address=".concat(e))
                              .then(function (e) {
                                  return e.json();
                              })
                              .then(function (e) {
                                  return (r.surface = e.surface), (r.markerUrl = e.markerUrl), { markerUrl: e.markerUrl, surface: e.surface ? e.surface : "gyro" };
                              })
                              .catch(function (e) {
                                  return console.log("Failed to fetch surface :", e), { markerUrl: "", surface: "gyro" };
                              });
                }),
        };
        e.exports = { sharedConstants: r };
    },
    45: function (e, t, r) {
        "use strict";
        r.r(t);
        var n,
            o,
            i = r(22),
            a = r(4);
        r.d(t, "initializeTracking", function () {
            return k;
        }),
            r.d(t, "initializeClassifiers", function () {
                return D;
            }),
            r.d(t, "initializeVideoBuffers", function () {
                return S;
            }),
            r.d(t, "callback_frame", function () {
                return z;
            }),
            r.d(t, "release", function () {
                return P;
            }),
            r.d(t, "onLoad", function () {
                return j;
            });
        var u,
            s,
            l,
            c,
            f = 1,
            d = 1,
            m = 0,
            p = 0,
            h = !1,
            g = !1,
            y = !1,
            w = 1,
            v = (0, r(7).getUrlParameter)("a"),
            _ = document.getElementById("videorender"),
            E = document.getElementById("videoElement1"),
            b = Object(i.a)({
                locateFile: function (e) {
                    return e.endsWith(".wasm") ? "0b0c2b9ec86e9e0801e8d7830a2966b6.wasm" : e;
                },
            });
        function k() {
            var e = b.cwrap("xzimgNaturalImageInitialize", "number", ["number", "number", "number", "number", "number"]);
            Math.atan((Math.tan((25 * 3.1415) / 180) * _.width) / _.height);
            f = e(E.videoWidth, E.videoHeight, E.videoWidth / 2, E.videoHeight / 2, (50 * 3.1415) / 180);
        }
        function D(e) {
            F = !0;
            var t = new XMLHttpRequest();
            t.open("GET", e, !0),
                (t.responseType = "arraybuffer"),
                (t.onload = function (e) {
                    console.log("XML Http event: ", e);
                    var r = t.response;
                    if (r) {
                        var n = new Uint8Array(r);
                        (c = n.byteLength), (l = b._malloc(c)), b.HEAPU8.set(n, l);
                        var o = b.cwrap("xzimgNaturalImageAddTarget", "number", ["number", "number", "number"]);
                        (f = o(l, c, 1)), b._free(l), (w -= 1), f && (noProblemsFound = !0);
                    } else console.log("Loading classifier file failed");
                }),
                t.send(null);
        }
        function S() {
            if (0 != E.videoWidth && 0 != E.videoHeight)
                if (b.asm.malloc) {
                    console.log("==> canvas (initialize_video_and_buffers) ---: " + _.width + " " + _.height),
                        null == (n = _.getContext("2d")) && console.log("==> NULL"),
                        (u = b._malloc(_.width * _.height * 1 * 4)),
                        (s = b._malloc(160)),
                        (g = !0);
                    var e = document.getElementById("videoElement1"),
                        t = document.getElementById("aframeHolder");
                    console.log("Device proportion : (".concat(e.offsetWidth, ", ").concat(e.offsetHeight, ")")), (t.height = e.offsetHeight), (t.width = e.offsetWidth);
                } else console.log("==> Augmented Vision library is not ready");
            else console.log("==> Video Capture is not ready");
        }
        var x = document.getElementById("videoElement1"),
            M = !1;
        window.allReady = function () {
            M = !0;
        };
        var A = 0,
            F = !1;
        function z() {
            if ((0 != m && x.videoWidth != m) || (0 != p && x.videoHeight != p)) {
                if (w > 0) return void requestAnimationFrame(z);
                console.log("Releasing"), b.cwrap("xzimgNaturalImageRelease")(), (g = !1), (y = !1), (h = !1), (w = 1);
            }
            if (
                ((m = x.videoWidth),
                (p = x.videoHeight),
                (_.width = x.videoWidth),
                (_.height = x.videoHeight),
                x.readyState == x.HAVE_ENOUGH_DATA &&
                    (M && !g && S(),
                    M && g && !y && (k(), (y = !0)),
                    M &&
                        y &&
                        !h &&
                        ((h = !0),
                        (function e(t) {
                            F ||
                                ((F = !0),
                                fetch(t).then(function (r) {
                                    (F = !1),
                                        403 === r.status && A++ < 2
                                            ? ((document.querySelector("#splash").style.display = "block"),
                                              (document.querySelector("#messagewrapper").style.display = "block"),
                                              (document.querySelector("#waitingmessage").style.display = "block"),
                                              $("#waitingmessage").html("Loading tracker"),
                                              setTimeout(function () {
                                                  e(t);
                                              }, 2e3))
                                            : (200 !== r.status && 206 !== r.status) ||
                                              ((document.querySelector("#splash").style.display = "none"),
                                              (document.querySelector("#messagewrapper").style.display = "none"),
                                              (document.querySelector("#waitingmessage").style.display = "none"),
                                              D("https://img-classifier.blippar.com" + "/".concat(v, ".jpg.cl")));
                                }));
                        })("https://img-classifier.blippar.com" + "/".concat(v, ".jpg.cl")))),
                y && 0 == w && x.readyState == x.HAVE_ENOUGH_DATA)
            ) {
                n.drawImage(x, 0, 0, _.width, _.height), (o = n.getImageData(0, 0, _.width, _.height));
                for (var e = performance.now(), t = new Uint32Array(o.data.buffer), r = t.length, i = u / 4, l = 0; l < r; l++) b.HEAPU32[i + l] = t[l];
                var c = b.cwrap("xzimgNaturalImageTrack_js", "number", ["number", "number", "number", "number"]);
                -11 == (f = c(u, _.width, _.height, 1)) && console.log("protection activated, please reload your plugin");
                var E = performance.now();
                d = 0.9 * d + 0.1 * (E - e);
                var P = document.getElementById("trackingWrapper");
                if (f > 0) {
                    var j, C, R;
                    b.cwrap("xzimgNaturalImageGetInfo", "number", ["number", "number", "number"])(0, 1, s);
                    (j = b.getValue(s, "double")), (C = b.getValue(s + 8, "double")), (R = b.getValue(s + 16, "double"));
                    var I = b.getValue(s + 24, "double"),
                        T = b.getValue(s + 32, "double"),
                        N = b.getValue(s + 40, "double"),
                        O = b.getValue(s + 48, "double"),
                        B = b.getValue(s + 56, "double"),
                        H = b.getValue(s + 64, "double"),
                        L = b.getValue(s + 72, "double"),
                        U = b.getValue(s + 80, "double"),
                        W = b.getValue(s + 88, "double"),
                        q = (b.getValue(s + 152, "i32"), new THREE.Matrix4());
                    q.set(I, T, N, j, -O, -B, -H, C, -L, -U, -W, R, 0, 0, 0, 1),
                        (P.object3D.position.x = q.elements[12]),
                        (P.object3D.position.y = -q.elements[13]),
                        (P.object3D.position.z = -q.elements[14]),
                        console.log("Marker size : ".concat(window.markerWidth, "x").concat(window.markerHeight));
                    var V = 90 / window.markerWidth;
                    (P.object3D.scale.x = V),
                        (P.object3D.scale.y = V),
                        (P.object3D.scale.z = V),
                        console.log(P.object3D.scale),
                        0 !== q.elements[12] && (console.log(P.object3D.scale.x), console.log(P.object3D.scale.y)),
                        (P.object3D.matrix = q),
                        P.object3D.rotation.setFromRotationMatrix(P.object3D.matrix),
                        (a.sharedConstants.trackingState = "have_marker");
                } else (P.object3D.position.x = 0), (P.object3D.position.y = 0), (P.object3D.position.z = 15), (a.sharedConstants.trackingState = "lost_marker");
                void 0;
            }
            requestAnimationFrame(z);
        }
        function P() {
            b._free(u), b._free(s);
        }
        function j() {
            console.log("==> onLoad (page) function ");
            var e = document.querySelector("#camera"),
                t = !(window.innerWidth > window.innerHeight);
            a.sharedConstants.getSurface(v).then(function (r) {
                if ("tracking" === r.surface) {
                    window.addEventListener(
                        "orientationchange",
                        function () {
                            this.setTimeout(function () {
                                window.innerWidth > window.innerHeight ? document.querySelector("#camera").setAttribute("zoom", (window.innerWidth / window.innerHeight) * 0.75) : document.querySelector("#camera").setAttribute("zoom", 1);
                            }, 500);
                        },
                        !1
                    ),
                        window.dispatchEvent(new Event("orientationchange")),
                        document.querySelector("#camera").setAttribute("zoom", 1),
                        requestAnimationFrame(z),
                        document.getElementById("trackingWrapper").setAttribute("position", "0 0 15"),
                        console.log("Marker: ", r.markerUrl),
                        (document.getElementById("trackingImg").style.backgroundImage = "url(" + r.markerUrl[0] + ")");
                    var n = new Image();
                    (n.onload = function () {
                        (window.markerWidth = this.width), (window.markerHeight = this.height);
                    }),
                        (n.src = r.markerUrl[0]);
                } else {
                    document.querySelector("#rotationfixer").classList.add("rotationfix"),
                        e.setAttribute("wasd-controls-enabled", "true"),
                        e.setAttribute("look-controls", "enabled: true"),
                        e.setAttribute("camera", "fov:80"),
                        t ? e.setAttribute("zoom", "2") : e.setAttribute("zoom", "3"),
                        window.addEventListener("orientationchange", function () {
                            switch (window.orientation) {
                                case -90:
                                case 90:
                                    (t = !1), e.setAttribute("zoom", "3");
                                    break;
                                default:
                                    (t = !0), e.setAttribute("zoom", "2");
                            }
                        });
                }
            });
        }
        window.onload = j;
    },
    53: function (e, t) {},
    54: function (e, t) {},
    74: function (e, t) {},
    76: function (e, t) {},
});
