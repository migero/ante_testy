!(function (e) {
    function t(t) {
        for (var r, o, s = t[0], c = t[1], l = t[2], d = 0, m = []; d < s.length; d++) (o = s[d]), Object.prototype.hasOwnProperty.call(a, o) && a[o] && m.push(a[o][0]), (a[o] = 0);
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        for (u && u(t); m.length; ) m.shift()();
        return i.push.apply(i, l || []), n();
    }
    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], r = !0, s = 1; s < n.length; s++) {
                var c = n[s];
                0 !== a[c] && (r = !1);
            }
            r && (i.splice(t--, 1), (e = o((o.s = n[0]))));
        }
        return e;
    }
    var r = {},
        a = { 8: 0, 2: 0, 3: 0, 7: 0, 9: 0 },
        i = [];
    function o(t) {
        if (r[t]) return r[t].exports;
        var n = (r[t] = { i: t, l: !1, exports: {} });
        return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
    }
    (o.m = e),
        (o.c = r),
        (o.d = function (e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (o.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (o.t = function (e, t) {
            if ((1 & t && (e = o(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if ((o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var r in e)
                    o.d(
                        n,
                        r,
                        function (t) {
                            return e[t];
                        }.bind(null, r)
                    );
            return n;
        }),
        (o.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return o.d(t, "a", t), t;
        }),
        (o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (o.p = "https://webar-static.blippar.com/");
    var s = (window.webpackJsonp = window.webpackJsonp || []),
        c = s.push.bind(s);
    (s.push = t), (s = s.slice());
    for (var l = 0; l < s.length; l++) t(s[l]);
    var u = c;
    i.push([173, 1, 0]), n();
})({
    13: function (e, t, n) {
        var r = [],
            a = n(7).rgbToHex;
        e.exports = {
            addAsset: function (e, t) {
                var n = document.getElementById("sceneassets");
                switch (t.className) {
                    case "BasicShapes":
                    case "Sprite":
                    case "CylinderMap":
                    case "SphereMap":
                        if (r.indexOf(t.texture) < 0 && void 0 !== t.texture)
                            if ("gif" !== t.texture.split(".").pop()) {
                                var a = document.createElement("img");
                                a.setAttribute("id", t.texture), a.setAttribute("crossorigin", "anonymous");
                                var i = e + t.texture;
                                (i = i.replace(/\s/g, "+")), a.setAttribute("src", i), n.appendChild(a), r.push(t.texture);
                            }
                }
            },
            setScale: function (e, t) {
                e.setAttribute("scale", { x: t[0] / 100, y: t[1] / 100, z: t[2] / 100 });
            },
            setSides: function (e, t) {
                switch (t) {
                    case "back":
                        e.setAttribute("material", "side: back");
                        break;
                    case "front":
                        e.setAttribute("material", "side: front");
                        break;
                    case "both":
                        e.setAttribute("material", "side: double");
                }
            },
            setColor: function (e, t) {
                (colToUse = a(Math.round(255 * t[0]), Math.round(255 * t[1]), Math.round(255 * t[2]))), e.setAttribute("color", colToUse);
            },
            setRotation: function (e, t) {
                (e.object3D.rotation.order = "XYZ"), e.object3D.rotation.set(THREE.Math.degToRad(t[0].toFixed(4)), THREE.Math.degToRad(t[1].toFixed(4)), THREE.Math.degToRad(t[2].toFixed(4)));
            },
            setGLTFColor: function (e, t) {
                colToUse = a(Math.round(255 * t[0]), Math.round(255 * t[1]), Math.round(255 * t[2]));
                var n = Number(colToUse.replace("#", "0x"));
                e.setAttribute("gltfcolor", { col: n });
            },
        };
    },
    173: function (e, t, n) {
        var r = n(23).changeSceneAndRefresh;
        $("#loadingstatus").fadeIn();
        var a = document.querySelector("#cssprogress"),
            i = document.querySelector("circle"),
            o = 2 * i.r.baseVal.value * Math.PI;
        function s(e) {
            var t = o - (e / 100) * o;
            i.style.strokeDashoffset = t;
        }
        (i.style.strokeDasharray = "".concat(o, " ").concat(o)),
            (i.style.strokeDashoffset = "".concat(o)),
            s(0),
            setTimeout(function () {
                a.style.display = "block";
            }, 300);
        var c,
            l,
            u = ["Nearly there", "Setting things up", "Preparing the scene", "Downloading resources", "Unpacking assets", "Getting ready"],
            d = 0;
        (window.startSceneCalled = !1),
            $("#waitingmessage").fadeIn(),
            (window.loadingTimer = setInterval(function () {
                var e = document.getElementById("waitingmessage");
                $("#waitingmessage").fadeOut(),
                    setTimeout(function () {
                        (e.innerHTML = u[d]), startSceneCalled || $("#waitingmessage").fadeIn(), ++d > 5 && (d = 0);
                    }, 500);
            }, 2e3)),
            (window.gyroPresent = !1),
            (window.isMobile = !1),
            (window.isPortrait = !0),
            (window.noProblemsFound = !0),
            (window.scenenum = 0),
            (window.startTime = 0),
            (window.endTime = 0);
        var m = new Date();
        startTime = m.getTime();
        document.querySelector("#camera");
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (isMobile = !0), window.innerWidth, window.innerHeight;
        var p = new MobileDetect(window.navigator.userAgent),
            f = p.os(),
            h = p.userAgent(),
            y = (p.mobile(), n(7).getUrlParameter);
        isMobile && "iOS" != f
            ? window.addEventListener("devicemotion", function (e) {
                  e.rotationRate.alpha || e.rotationRate.beta || e.rotationRate.gamma
                      ? ((gyroPresent = !0), (window.hasGyroScope = !0), (window.gyroBeta = e.rotationRate.beta), (window.GravityY = e.accelerationIncludingGravity.y), (window.accY = e.acceleration.y))
                      : (window.hasGyroScope = !1);
              })
            : (gyroPresent = !0);
        var g = y("vr");
        (window.isvr = !1), g.length > 0 && (isvr = !0);
        window.innerWidth, window.innerHeight;
        var b,
            v = !1,
            w = document.querySelector("#vrmode"),
            A = document.querySelector("#videoElement1"),
            E = document.querySelector("#videoElement2"),
            k = document.getElementById("Loading-problem"),
            S = document.getElementById("issueFound"),
            _ = document.getElementById("rightarrow");
        if (isMobile && "iOS" == f) {
            var x = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            b = null === x ? 10 : parseInt(x[1], 10);
        }
        var T = window.navigator.userAgent || window.navigator.vendor || window.window.opera;
        T.indexOf("FBAN") > -1 || T.indexOf("FBAV") > -1 || T.indexOf("Instagram") > -1
            ? ((noProblemsFound = !1),
              (T.indexOf("FBAN") > -1 || T.indexOf("FBAV") > -1) &&
                  (isMobile && "iOS" === f
                      ? ((k.innerHTML = "Please open this AR experience using the Safari Browser"), (addInstruc.innerHTML = "OR copy the link, open Safari and then paste the link into the address bar"), (S.style.display = "block"))
                      : ((k.innerHTML = "Please open this AR experience using the Chrome Browser"), (addInstruc.innerHTML = "OR copy the link, open Chrome and then paste the link into the address bar"), (S.style.display = "block"))),
              T.indexOf("Instagram") > -1 &&
                  (isMobile && "iOS" === f
                      ? ((k.innerHTML = "Please open this AR experience using the Safari Browser"), (addInstruc.innerHTML = "OR copy the link, open Safari and then paste the link into the address bar"), (S.style.display = "block"))
                      : ((k.innerHTML = "Please open this AR experience using the Chrome Browser"), (addInstruc.innerHTML = "OR copy the link, open Chrome and then paste the link into the address bar"), (S.style.display = "block"))))
            : void 0 === navigator.mediaDevices || void 0 === navigator.mediaDevices.enumerateDevices || void 0 === navigator.mediaDevices.getUserMedia
            ? ((_.style.display = "none"),
              isMobile
                  ? "iOS" == f
                      ? ((k.innerHTML = "Sorry! We've detected that your browser does not support this experience"), (addInstruc.innerHTML = "Please open in Safari."), (S.style.display = "block"), (noProblemsFound = !1))
                      : ((k.innerHTML = "Sorry! We've detected that your browser does not support this experience"), (addInstruc.innerHTML = "Please open in Chrome."), (S.style.display = "block"), (noProblemsFound = !1))
                  : ((k.innerHTML = "Sorry! We've detected that your browser does not support this experience"), (addInstruc.innerHTML = "Please try another browser."), (S.style.display = "block"), (noProblemsFound = !1)),
              (noProblemsFound = !1))
            : navigator.mediaDevices.getUserMedia &&
              (isMobile ? (videoConstraints = { facingMode: { exact: "environment" } }) : (videoConstraints = { facingMode: "environment" }),
              isvr
                  ? ((document.querySelector("#container").style.width = "50%"),
                    (document.querySelector("#container").style.right = null),
                    (document.querySelector("#container2").style.display = "block"),
                    navigator.mediaDevices.getUserMedia &&
                        navigator.mediaDevices
                            .getUserMedia({ video: { facingMode: "environment" } })
                            .then(function (e) {
                                (A.srcObject = e), (E.srcObject = e), !0;
                            })
                            .catch(function (e) {
                                alert("Could not connect to camera, please try again"), !1, (noProblemsFound = !1);
                            }),
                    document.getElementById("camera").setAttribute("zoom", "1"))
                  : navigator.mediaDevices
                        .getUserMedia({ video: videoConstraints })
                        .then(function (e) {
                            (A.srcObject = e),
                                !0,
                                setTimeout(function () {
                                    isMobile &&
                                        ("iOS" == f &&
                                            "Safari" == h &&
                                            !gyroPresent &&
                                            b < 13 &&
                                            ((_.style.display = "none"),
                                            (k.innerHTML = "Sorry! We've detected that your browser does not have access to the gyroscope."),
                                            (addInstruc.innerHTML = "Please change Safari settings and refresh."),
                                            (S.style.display = "block"),
                                            (noProblemsFound = !1),
                                            (gyroPresent = !1)),
                                        "iOS" != f || "Safari" != h || gyroPresent || 13 !== b || (gyroPresent = !1));
                                }, 900);
                        })
                        .catch(function (e) {
                            (_.style.display = "none"),
                                "iOS" == f
                                    ? ((k.innerHTML = "Sorry! We've detected that your browser does not support this experience"), (addInstruc.innerHTML = "Please open in Safari."), (S.style.display = "block"), (noProblemsFound = !1))
                                    : ((k.innerHTML = "Sorry! We've detected that your browser does not support this experience"), (addInstruc.innerHTML = "Please open in Chrome."), (S.style.display = "block"), (noProblemsFound = !1)),
                                !1;
                        })),
            document.addEventListener("visibilitychange", function (e) {
                document.hidden ? O() : isMobile && "iOS" == f ? window.location.reload(!1) : O();
            });
        var M = document.getElementById("urlbox"),
            D = document.getElementById("urlclickbut");
        (M.innerHTML = window.location),
            D.addEventListener("click", function () {
                var e = window.getSelection(),
                    t = document.createRange();
                t.selectNodeContents(M),
                    e.removeAllRanges(),
                    e.addRange(t),
                    document.execCommand("copy"),
                    (document.getElementById("urlCopied").style.display = "block"),
                    setTimeout(function () {
                        document.getElementById("urlCopied").style.display = "none";
                    }, 1e3),
                    e.removeAllRanges();
            }),
            (window.sceneNames = []),
            (window.loadingProgress = 0),
            (window.loadingProgressStep = 0),
            (window.animationNames = []),
            (window.animeTransArray = []),
            (window.animeRotArray = []),
            (window.animeScaleArray = []),
            (window.animeOpacityArray = []),
            (window.animeTransValuesArray = []),
            (window.animeRotValuesArray = []),
            (window.animeScaleValuesArray = []),
            (window.animeOpacityValuesArray = []),
            (window.vidsToStartArray = []),
            (window.meshToStartArray = []),
            (window.textElementsArray = []),
            (window.runningAniminations = []),
            (window.runningBounceAniminations = []),
            (window.gltfClipAnimations = []),
            (window.animTimeouts = []),
            (window.playingClickVideos = []),
            (window.playingGifs = []),
            (window.playingSounds = []),
            (window.sceneRids = []),
            (window.currentScene = 0),
            (window.analyticsLoaded = !1),
            window.assetPath,
            window.actual_JSON,
            window.assetSize,
            window.packageData,
            (window.setSceneLights = !1),
            (c = y("a")),
            (l = y("v")),
            isvr &&
                window.addEventListener(
                    "orientationchange",
                    function () {
                        switch (window.orientation) {
                            case -90:
                            case 90:
                                !1, v && vrmodestarted && ((w.style.display = "none"), (v = !1));
                                break;
                            default:
                                !0;
                        }
                    },
                    !1
                );
        var F = "";
        l > 0
            ? $.getJSON("/main.json"))
                  .success(function (e) {
                      (actual_JSON = e), (assetPath = "".concat(F + c, "/").concat(l, "/asset/")), j(), L(), V(), H();
                  })
                  
            : $.ajax({
                  url: "/getversion?address=".concat(c),
                  type: "GET",
                  crossDomain: !0,
                  dataType: "text",
                  cache: !1,
                  success: function (e) {
                      "Sorry" === e.substring(0, 5)
                          ? alert("Sorry blipp address or version not found")
                          : ((l = e),
                            $.getJSON("".concat(F + c, "/").concat(l, "/main"))
                                .success(function (e) {
                                    (actual_JSON = e), (assetPath = "".concat(F + c, "/").concat(l, "/asset/")), j(), L(), V(), H();
                                })
                                .error(function () {
                                    alert("Sorry, blipp details not found");
                                }));
                  },
                  error: function (e) {
                      console.log("ERROR: ", e);
                  },
              }),
            (window.soundElement = null),
            window.looping,
            (window.bgSoundMade = !1),
            (window.newObjectCount = 0);
        var I = n(13).addAsset,
            B = n(23),
            C = B.createElement,
            N = B.createdObjectCount,
            R = (B.loadingProgressStep, n(7)),
            O = R.doPause,
            P = R.doSceneClearup,
            z = n(45).startScene;
        function j() {
            actual_JSON.userData &&
                actual_JSON.userData.blippActions &&
                (actual_JSON.userData.blippActions.goToUrl && actual_JSON.userData.blippActions.goToUrl.url.length > 0 && (window.location.href = actual_JSON.userData.blippActions.goToUrl.url),
                actual_JSON.userData.blippActions.playAudio && ((soundElement = actual_JSON.userData.blippActions.playAudio), actual_JSON.userData.blippActions.playAudio.params.playInLoop ? (looping = "true") : (looping = "false"))),
                actual_JSON.children.map(function (e) {
                    sceneNames.push(e.name), sceneRids.push(e.rid);
                }),
                (scenenum = 0),
                (scenenum = y("s")),
                scenenum > 0 ? void 0 === actual_JSON.children[scenenum] && (scenenum = 0) : (scenenum = 0);
            var e = actual_JSON.children,
                t = [];
            function n(e) {
                for (var r = e.children.length, a = 0; a < r; a++)
                    "Move" !== e.children[a].className &&
                        "Rotate" !== e.children[a].className &&
                        "Scale" !== e.children[a].className &&
                        "Opacity" !== e.children[a].className &&
                        "Bounce" !== e.children[a].className &&
                        "TargetedAction" !== e.children[a].className &&
                        "FadeIn" !== e.children[a].className &&
                        "FadeOut" !== e.children[a].className &&
                        "Material" !== e.children[a].className &&
                        "Space" !== e.children[a].className &&
                        "Anim" !== e.children[a].className &&
                        (newObjectCount++, I(assetPath, e.children[a]), t.push([e.children[a], e.rid]), "TransformGroup" === e.children[a].className && n(e.children[a]));
            }
            e.map(function (e) {
                if ("Scene" === e.className) {
                    (e.className = "TransformGroup"), newObjectCount++, t.push([e, e.rid]);
                    for (var r = e.children.length, a = 0; a < r; a++)
                        "Material" !== e.children[a].className &&
                            "Space" !== e.children[a].className &&
                            "Move" !== e.children[a].className &&
                            "Rotate" !== e.children[a].className &&
                            "Scale" !== e.children[a].className &&
                            "Opacity" !== e.children[a].className &&
                            "Bounce" !== e.children[a].className &&
                            "TargetedAction" !== e.children[a].className &&
                            "FadeIn" !== e.children[a].className &&
                            "FadeOut" !== e.children[a].className &&
                            "Material" !== e.children[a].className &&
                            "Space" !== e.children[a].className &&
                            "Anim" !== e.children[a].className &&
                            (newObjectCount++, I(assetPath, e.children[a]), t.push([e.children[a], e.rid])),
                            "TransformGroup" === e.children[a].className && n(e.children[a]);
                }
            }),
                newObjectCount < 1
                    ? setTimeout(function () {
                          $("#loadingstatus").fadeOut(),
                              setTimeout(function () {
                                  noProblemsFound &&
                                      ((document.querySelector("#splash").style.display = "none"),
                                      (document.getElementById("waitingmessage").style.display = "none"),
                                      clearInterval(loadingTimer),
                                      (document.getElementById("photoModeContainer").style.display = "block"),
                                      z());
                              }, 800);
                      }, 800)
                    : (100 / newObjectCount,
                      $("#loadingstatus").html("Created ".concat(N, " of ").concat(newObjectCount, " elements")),
                      setTimeout(function () {
                          noProblemsFound &&
                              t.map(function (e) {
                                  "Sprite" === e[0].className && e[0].texture && "gif" === e[0].texture.split(".").pop() && (e[0].className = "GifSprite");
                                  e[0].rid === e[1] ? C(assetPath, s, e[0], e[0].rid) : C(assetPath, s, e[0], e[0].rid, e[1]);
                              });
                      }, 500));
        }
        function L() {
            if (void 0 !== navigator.share && isMobile) {
                var e = document.getElementById("shareButton");
                (e.style.display = "block"),
                    e.addEventListener("click", function () {
                        navigator.share({ title: "Blippar webAR experience", url: window.location.href, text: "View this AR experience in your browser made using Blippar BlippBuilder." });
                    });
            }
        }
        function V() {
            (window.pausebut.style.display = "block"),
                window.pausebut.addEventListener("click", function () {
                    O();
                }),
                refreshbut.addEventListener("click", function () {
                    if ((P(), null !== soundElement)) {
                        var e = document.getElementById("sceneSound");
                        e.components.sound.stopSound(), e.components.sound.playSound();
                    }
                    r("s", 0), (window.animsPaused = !1);
                });
        }
        function H() {
            var e = document.getElementById("photoModeContainer"),
                t = document.getElementById("photoModeImage"),
                n = document.getElementById("shutterButton"),
                r = document.getElementById("closeButton"),
                a = document.getElementById("saveMessage"),
                i = document.getElementById("softerMessage"),
                o = document.getElementById("scene1"),
                s = document.querySelector("#videoElement1");
            t.addEventListener("touchforcechange", function (e) {
                e.changedTouches[0].force > 0.1 && e.preventDefault(), e.changedTouches[0].force > 0.3 && (i.style.display = "block"), e.changedTouches[0].force < 0.2 && (i.style.display = "none");
            }),
                (e.style.display = "none"),
                r.addEventListener("click", function () {
                    e.classList.remove("photo"), (a.style.display = "none");
                }),
                n.addEventListener("click", function () {
                    o.setAttribute("screenshot", { width: $(document).width(), height: $(document).height() });
                    var n = document.createElement("canvas");
                    (n.width = $(document).width()), (n.height = $(document).height());
                    var r = Math.max(n.width / s.videoWidth, n.height / s.videoHeight),
                        i = n.width / 2 - (s.videoWidth / 2) * r,
                        c = n.height / 2 - (s.videoHeight / 2) * r;
                    n.getContext("2d").drawImage(s, i, c, s.videoWidth * r, s.videoHeight * r);
                    var l = o.components.screenshot.getCanvas("perspective");
                    e.classList.add("flash"),
                        setTimeout(function () {
                            e.classList.remove("flash");
                        }, 200);
                    var u = document.createElement("canvas");
                    (u.width = $(document).width()), (u.height = $(document).height()), u.getContext("2d").drawImage(n, 0, 0), u.getContext("2d").drawImage(l, 0, 0);
                    var d = u.toDataURL("image/png");
                    if (((t.src = d), isMobile && "iOS" == f && "Safari" == h && 13 === b)) {
                        var m = document.createElement("a");
                        (m.href = t.src), (m.download = "blippar_webar_ss"), document.body.appendChild(m), m.click(), document.body.removeChild(m);
                    } else e.classList.add("photo"), (a.style.display = "block");
                });
        }
        (jQuery.loadScript = function (e, t) {
            jQuery.ajax({ url: e, dataType: "script", success: t, async: !0 });
        }),
            (window.refreshbut = document.getElementById("refreshButton"));
    },
    22: function (e, t, n) {
        "use strict";
        (function (e, r, a) {
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
            var o,
                s =
                    ((o = "https://webar-static.blippar.com/"),
                    function (t) {
                        t = void 0 !== (t = t || {}) ? t : {};
                        var s,
                            c = {};
                        for (s in t) t.hasOwnProperty(s) && (c[s] = t[s]);
                        var l = [],
                            u = "./this.program",
                            d = function (e, t) {
                                throw t;
                            },
                            m = !1,
                            p = !1,
                            f = !1,
                            h = !1,
                            y = !1;
                        (m = "object" === ("undefined" == typeof window ? "undefined" : i(window))),
                            (p = "function" == typeof importScripts),
                            (h = "object" === (void 0 === e ? "undefined" : i(e)) && "object" === i(e.versions) && "string" == typeof e.versions.node),
                            (f = h && !m && !p),
                            (y = !m && !f && !p);
                        var g,
                            b,
                            v,
                            w,
                            A = "";
                        function E(e) {
                            return t.locateFile ? t.locateFile(e, A) : A + e;
                        }
                        f
                            ? ((A = r + "/"),
                              (g = function (e, t) {
                                  return v || (v = n(47)), w || (w = n(48)), (e = w.normalize(e)), v.readFileSync(e, t ? null : "utf8");
                              }),
                              (b = function (e) {
                                  var t = g(e, !0);
                                  return t.buffer || (t = new Uint8Array(t)), R(t.buffer), t;
                              }),
                              e.argv.length > 1 && (u = e.argv[1].replace(/\\/g, "/")),
                              (l = e.argv.slice(2)),
                              e.on("uncaughtException", function (e) {
                                  if (!(e instanceof Ht)) throw e;
                              }),
                              e.on("unhandledRejection", Me),
                              (d = function (t) {
                                  e.exit(t);
                              }),
                              (t.inspect = function () {
                                  return "[Emscripten Module object]";
                              }))
                            : y
                            ? ("undefined" != typeof read &&
                                  (g = function (e) {
                                      return read(e);
                                  }),
                              (b = function (e) {
                                  var t;
                                  return "function" == typeof readbuffer ? new Uint8Array(readbuffer(e)) : (R("object" === i((t = read(e, "binary")))), t);
                              }),
                              "undefined" != typeof scriptArgs ? (l = scriptArgs) : void 0 !== arguments && (l = arguments),
                              "function" == typeof quit &&
                                  (d = function (e) {
                                      quit(e);
                                  }),
                              "undefined" != typeof print && ("undefined" == typeof console && (console = {}), (console.log = print), (console.warn = console.error = "undefined" != typeof printErr ? printErr : print)))
                            : (m || p) &&
                              (p ? (A = self.location.href) : document.currentScript && (A = document.currentScript.src),
                              (A = 0 !== (A = o).indexOf("blob:") ? A.substr(0, A.lastIndexOf("/") + 1) : ""),
                              (g = function (e) {
                                  var t = new XMLHttpRequest();
                                  return t.open("GET", e, !1), t.send(null), t.responseText;
                              }),
                              p &&
                                  (b = function (e) {
                                      var t = new XMLHttpRequest();
                                      return t.open("GET", e, !1), (t.responseType = "arraybuffer"), t.send(null), new Uint8Array(t.response);
                                  }));
                        var k = t.print || console.log.bind(console),
                            S = t.printErr || console.warn.bind(console);
                        for (s in c) c.hasOwnProperty(s) && (t[s] = c[s]);
                        (c = null), t.arguments && (l = t.arguments), t.thisProgram && (u = t.thisProgram), t.quit && (d = t.quit);
                        var _ = 16;
                        function x(e, t) {
                            return t || (t = _), Math.ceil(e / t) * t;
                        }
                        var T,
                            M,
                            D,
                            F = function (e) {};
                        function I(e, t, n, r) {
                            switch (("*" === (n = n || "i8").charAt(n.length - 1) && (n = "i32"), n)) {
                                case "i1":
                                case "i8":
                                    $[e >> 0] = t;
                                    break;
                                case "i16":
                                    J[e >> 1] = t;
                                    break;
                                case "i32":
                                    Z[e >> 2] = t;
                                    break;
                                case "i64":
                                    (Be = [t >>> 0, ((Ie = t), +ve(Ie) >= 1 ? (Ie > 0 ? (0 | Ee(+Ae(Ie / 4294967296), 4294967295)) >>> 0 : ~~+we((Ie - +(~~Ie >>> 0)) / 4294967296) >>> 0) : 0)]),
                                        (Z[e >> 2] = Be[0]),
                                        (Z[(e + 4) >> 2] = Be[1]);
                                    break;
                                case "float":
                                    K[e >> 2] = t;
                                    break;
                                case "double":
                                    Q[e >> 3] = t;
                                    break;
                                default:
                                    Me("invalid type for setValue: " + n);
                            }
                        }
                        function B(e, t, n) {
                            switch (("*" === (t = t || "i8").charAt(t.length - 1) && (t = "i32"), t)) {
                                case "i1":
                                case "i8":
                                    return $[e >> 0];
                                case "i16":
                                    return J[e >> 1];
                                case "i32":
                                case "i64":
                                    return Z[e >> 2];
                                case "float":
                                    return K[e >> 2];
                                case "double":
                                    return Q[e >> 3];
                                default:
                                    Me("invalid type for getValue: " + t);
                            }
                            return null;
                        }
                        t.wasmBinary && (T = t.wasmBinary), t.noExitRuntime && (M = t.noExitRuntime), "object" !== ("undefined" == typeof WebAssembly ? "undefined" : i(WebAssembly)) && S("no native wasm support detected");
                        var C = new WebAssembly.Table({ initial: 390, maximum: 390, element: "anyfunc" }),
                            N = !1;
                        function R(e, t) {
                            e || Me("Assertion failed: " + t);
                        }
                        function O(e) {
                            var n = t["_" + e];
                            return R(n, "Cannot call unknown function " + e + ", make sure it is exported"), n;
                        }
                        function P(e, t, n, r, a) {
                            var i = {
                                    string: function (e) {
                                        var t = 0;
                                        if (null != e && 0 !== e) {
                                            var n = 1 + (e.length << 2);
                                            G(e, (t = Lt(n)), n);
                                        }
                                        return t;
                                    },
                                    array: function (e) {
                                        var t = Lt(e.length);
                                        return W(e, t), t;
                                    },
                                },
                                o = O(e),
                                s = [],
                                c = 0;
                            if (r)
                                for (var l = 0; l < r.length; l++) {
                                    var u = i[n[l]];
                                    u ? (0 === c && (c = jt()), (s[l] = u(r[l]))) : (s[l] = r[l]);
                                }
                            var d = o.apply(null, s);
                            return (
                                (d = (function (e) {
                                    return "string" === t ? V(e) : "boolean" === t ? Boolean(e) : e;
                                })(d)),
                                0 !== c && Vt(c),
                                d
                            );
                        }
                        function z(e, t, n, r) {
                            var a = (n = n || []).every(function (e) {
                                return "number" === e;
                            });
                            return "string" !== t && a && !r
                                ? O(e)
                                : function () {
                                      return P(e, t, n, arguments);
                                  };
                        }
                        var j = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
                        function L(e, t, n) {
                            for (var r = t + n, a = t; e[a] && !(a >= r); ) ++a;
                            if (a - t > 16 && e.subarray && j) return j.decode(e.subarray(t, a));
                            for (var i = ""; t < a; ) {
                                var o = e[t++];
                                if (128 & o) {
                                    var s = 63 & e[t++];
                                    if (192 != (224 & o)) {
                                        var c = 63 & e[t++];
                                        if ((o = 224 == (240 & o) ? ((15 & o) << 12) | (s << 6) | c : ((7 & o) << 18) | (s << 12) | (c << 6) | (63 & e[t++])) < 65536) i += String.fromCharCode(o);
                                        else {
                                            var l = o - 65536;
                                            i += String.fromCharCode(55296 | (l >> 10), 56320 | (1023 & l));
                                        }
                                    } else i += String.fromCharCode(((31 & o) << 6) | s);
                                } else i += String.fromCharCode(o);
                            }
                            return i;
                        }
                        function V(e, t) {
                            return e ? L(X, e, t) : "";
                        }
                        function H(e, t, n, r) {
                            if (!(r > 0)) return 0;
                            for (var a = n, i = n + r - 1, o = 0; o < e.length; ++o) {
                                var s = e.charCodeAt(o);
                                if ((s >= 55296 && s <= 57343 && (s = (65536 + ((1023 & s) << 10)) | (1023 & e.charCodeAt(++o))), s <= 127)) {
                                    if (n >= i) break;
                                    t[n++] = s;
                                } else if (s <= 2047) {
                                    if (n + 1 >= i) break;
                                    (t[n++] = 192 | (s >> 6)), (t[n++] = 128 | (63 & s));
                                } else if (s <= 65535) {
                                    if (n + 2 >= i) break;
                                    (t[n++] = 224 | (s >> 12)), (t[n++] = 128 | ((s >> 6) & 63)), (t[n++] = 128 | (63 & s));
                                } else {
                                    if (n + 3 >= i) break;
                                    (t[n++] = 240 | (s >> 18)), (t[n++] = 128 | ((s >> 12) & 63)), (t[n++] = 128 | ((s >> 6) & 63)), (t[n++] = 128 | (63 & s));
                                }
                            }
                            return (t[n] = 0), n - a;
                        }
                        function G(e, t, n) {
                            return H(e, X, t, n);
                        }
                        function U(e) {
                            for (var t = 0, n = 0; n < e.length; ++n) {
                                var r = e.charCodeAt(n);
                                r >= 55296 && r <= 57343 && (r = (65536 + ((1023 & r) << 10)) | (1023 & e.charCodeAt(++n))), r <= 127 ? ++t : (t += r <= 2047 ? 2 : r <= 65535 ? 3 : 4);
                            }
                            return t;
                        }
                        function W(e, t) {
                            $.set(e, t);
                        }
                        function q(e, t, n) {
                            for (var r = 0; r < e.length; ++r) $[t++ >> 0] = e.charCodeAt(r);
                            n || ($[t >> 0] = 0);
                        }
                        "undefined" != typeof TextDecoder && new TextDecoder("utf-16le");
                        var Y,
                            $,
                            X,
                            J,
                            Z,
                            K,
                            Q,
                            ee = 65536;
                        function te(e, t) {
                            return e % t > 0 && (e += t - (e % t)), e;
                        }
                        function ne(e) {
                            (Y = e),
                                (t.HEAP8 = $ = new Int8Array(e)),
                                (t.HEAP16 = J = new Int16Array(e)),
                                (t.HEAP32 = Z = new Int32Array(e)),
                                (t.HEAPU8 = X = new Uint8Array(e)),
                                (t.HEAPU16 = new Uint16Array(e)),
                                (t.HEAPU32 = new Uint32Array(e)),
                                (t.HEAPF32 = K = new Float32Array(e)),
                                (t.HEAPF64 = Q = new Float64Array(e));
                        }
                        var re = 5281520,
                            ae = 38480,
                            ie = t.TOTAL_MEMORY || 16777216;
                        function oe(e) {
                            for (; e.length > 0; ) {
                                var n = e.shift();
                                if ("function" != typeof n) {
                                    var r = n.func;
                                    "number" == typeof r ? (void 0 === n.arg ? t.dynCall_v(r) : t.dynCall_vi(r, n.arg)) : r(void 0 === n.arg ? null : n.arg);
                                } else n();
                            }
                        }
                        (D = t.wasmMemory ? t.wasmMemory : new WebAssembly.Memory({ initial: ie / ee })) && (Y = D.buffer), (ie = Y.byteLength), ne(Y), (Z[ae >> 2] = re);
                        var se = [],
                            ce = [],
                            le = [],
                            ue = [],
                            de = [];
                        function me() {
                            if (t.preRun) for ("function" == typeof t.preRun && (t.preRun = [t.preRun]); t.preRun.length; ) ge(t.preRun.shift());
                            oe(se);
                        }
                        function pe() {
                            t.noFSInit || rt.init.initialized || rt.init(), tt.init(), oe(ce);
                        }
                        function fe() {
                            (rt.ignorePermissions = !1), oe(le);
                        }
                        function he() {}
                        function ye() {
                            if (t.postRun) for ("function" == typeof t.postRun && (t.postRun = [t.postRun]); t.postRun.length; ) be(t.postRun.shift());
                            oe(de);
                        }
                        function ge(e) {
                            se.unshift(e);
                        }
                        function be(e) {
                            de.unshift(e);
                        }
                        var ve = Math.abs,
                            we = (Math.cos, Math.sin, Math.tan, Math.acos, Math.asin, Math.atan, Math.atan2, Math.exp, Math.log, Math.sqrt, Math.ceil),
                            Ae = Math.floor,
                            Ee = (Math.pow, Math.imul, Math.fround, Math.round, Math.min),
                            ke = (Math.max, Math.clz32, Math.trunc, 0),
                            Se = null,
                            _e = null;
                        function xe(e) {
                            ke++, t.monitorRunDependencies && t.monitorRunDependencies(ke);
                        }
                        function Te(e) {
                            if ((ke--, t.monitorRunDependencies && t.monitorRunDependencies(ke), 0 == ke && (null !== Se && (clearInterval(Se), (Se = null)), _e))) {
                                var n = _e;
                                (_e = null), n();
                            }
                        }
                        function Me(e) {
                            throw (t.onAbort && t.onAbort(e), k((e += "")), S(e), (N = !0), (e = "abort(" + e + "). Build with -s ASSERTIONS=1 for more info."), new WebAssembly.RuntimeError(e));
                        }
                        (t.preloadedImages = {}), (t.preloadedAudios = {});
                        var De = "data:application/octet-stream;base64,";
                        function Fe(e) {
                            return String.prototype.startsWith ? e.startsWith(De) : 0 === e.indexOf(De);
                        }
                        var Ie,
                            Be,
                            Ce = "https://webar-static.blippar.com/augmentedVision.wasm";
                        function Ne() {
                            try {
                                if (T) return new Uint8Array(T);
                                if (b) return b(Ce);
                                throw "both async and sync fetching of the wasm failed";
                            } catch (e) {
                                Me(e);
                            }
                        }
                        function Re() {
                            return T || (!m && !p) || "function" != typeof fetch
                                ? new Promise(function (e, t) {
                                      e(Ne());
                                  })
                                : fetch(Ce, { credentials: "same-origin" })
                                      .then(function (e) {
                                          if (!e.ok) throw "failed to load wasm binary file at '" + Ce + "'";
                                          return e.arrayBuffer();
                                      })
                                      .catch(function () {
                                          return Ne();
                                      });
                        }
                        function Oe() {
                            var e = { env: Bt, wasi_unstable: Bt };
                            function n(e, n) {
                                var r = e.exports;
                                (t.asm = r), Te();
                            }
                            function r(e) {
                                n(e.instance);
                            }
                            function a(t) {
                                return Re()
                                    .then(function (t) {
                                        return WebAssembly.instantiate(t, e);
                                    })
                                    .then(t, function (e) {
                                        S("failed to asynchronously prepare wasm: " + e), Me(e);
                                    });
                            }
                            if ((xe(), t.instantiateWasm))
                                try {
                                    return t.instantiateWasm(e, n);
                                } catch (e) {
                                    return S("Module.instantiateWasm callback failed with error: " + e), !1;
                                }
                            return (
                                (function () {
                                    if (T || "function" != typeof WebAssembly.instantiateStreaming || Fe(Ce) || "function" != typeof fetch) return a(r);
                                    fetch(Ce, { credentials: "same-origin" }).then(function (t) {
                                        return WebAssembly.instantiateStreaming(t, e).then(r, function (e) {
                                            S("wasm streaming compile failed: " + e), S("falling back to ArrayBuffer instantiation"), a(r);
                                        });
                                    });
                                })(),
                                {}
                            );
                        }
                        Fe(Ce) || (Ce = E(Ce));
                        var Pe = {
                                1184: function () {
                                    allReady();
                                },
                            },
                            ze = [];
                        function je(e, t) {
                            var n = ze;
                            for (n.length = 0; ; ) {
                                var r = X[e++];
                                if (!r) return n;
                                r === "d".charCodeAt(0) || r === "f".charCodeAt(0) ? ((t = x(t, 8)), n.push(Q[t >> 3]), (t += 8)) : r === "i".charCodeAt(0) && ((t = x(t, 4)), n.push(Z[t >> 2]), (t += 4));
                            }
                        }
                        function Le(e, t, n) {
                            var r = je(t, n);
                            return Pe[e].apply(null, r);
                        }
                        function Ve(e) {
                            return e.replace(/\b_Z[\w\d_]+/g, function (e) {
                                return e == e ? e : e + " [" + e + "]";
                            });
                        }
                        function He() {
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
                        function Ge() {
                            var e = He();
                            return t.extraStackTrace && (e += "\n" + t.extraStackTrace()), Ve(e);
                        }
                        function Ue(e, t, n, r) {
                            Me("Assertion failed: " + V(e) + ", at: " + [t ? V(t) : "unknown filename", n, r ? V(r) : "unknown function"]);
                        }
                        function We(e) {
                            return Ot(e);
                        }
                        function qe(e, t) {
                            ue.unshift({ func: e, arg: t });
                        }
                        function Ye() {
                            return qe.apply(null, arguments);
                        }
                        ce.push({
                            func: function () {
                                Rt();
                            },
                        });
                        var $e = {};
                        function Xe(e, t, n) {
                            throw (($e[e] = { ptr: e, adjusted: [e], type: t, destructor: n, refcount: 0, caught: !1, rethrown: !1 }), "uncaught_exception" in zt ? zt.uncaught_exceptions++ : (zt.uncaught_exceptions = 1), e);
                        }
                        function Je() {}
                        function Ze(e) {
                            return t.___errno_location && (Z[t.___errno_location() >> 2] = e), e;
                        }
                        function Ke(e, t) {
                            return Ze(63), -1;
                        }
                        var Qe = {
                                splitPath: function (e) {
                                    return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);
                                },
                                normalizeArray: function (e, t) {
                                    for (var n = 0, r = e.length - 1; r >= 0; r--) {
                                        var a = e[r];
                                        "." === a ? e.splice(r, 1) : ".." === a ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--);
                                    }
                                    if (t) for (; n; n--) e.unshift("..");
                                    return e;
                                },
                                normalize: function (e) {
                                    var t = "/" === e.charAt(0),
                                        n = "/" === e.substr(-1);
                                    return (
                                        (e = Qe.normalizeArray(
                                            e.split("/").filter(function (e) {
                                                return !!e;
                                            }),
                                            !t
                                        ).join("/")) ||
                                            t ||
                                            (e = "."),
                                        e && n && (e += "/"),
                                        (t ? "/" : "") + e
                                    );
                                },
                                dirname: function (e) {
                                    var t = Qe.splitPath(e),
                                        n = t[0],
                                        r = t[1];
                                    return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : ".";
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
                                    for (var e = "", t = !1, n = arguments.length - 1; n >= -1 && !t; n--) {
                                        var r = n >= 0 ? arguments[n] : rt.cwd();
                                        if ("string" != typeof r) throw new TypeError("Arguments to path.resolve must be strings");
                                        if (!r) return "";
                                        (e = r + "/" + e), (t = "/" === r.charAt(0));
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
                                    function n(e) {
                                        for (var t = 0; t < e.length && "" === e[t]; t++);
                                        for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
                                        return t > n ? [] : e.slice(t, n - t + 1);
                                    }
                                    (e = et.resolve(e).substr(1)), (t = et.resolve(t).substr(1));
                                    for (var r = n(e.split("/")), a = n(t.split("/")), i = Math.min(r.length, a.length), o = i, s = 0; s < i; s++)
                                        if (r[s] !== a[s]) {
                                            o = s;
                                            break;
                                        }
                                    var c = [];
                                    for (s = o; s < r.length; s++) c.push("..");
                                    return (c = c.concat(a.slice(o))).join("/");
                                },
                            },
                            tt = {
                                ttys: [],
                                init: function () {},
                                shutdown: function () {},
                                register: function (e, t) {
                                    (tt.ttys[e] = { input: [], output: [], ops: t }), rt.registerDevice(e, tt.stream_ops);
                                },
                                stream_ops: {
                                    open: function (e) {
                                        var t = tt.ttys[e.node.rdev];
                                        if (!t) throw new rt.ErrnoError(43);
                                        (e.tty = t), (e.seekable = !1);
                                    },
                                    close: function (e) {
                                        e.tty.ops.flush(e.tty);
                                    },
                                    flush: function (e) {
                                        e.tty.ops.flush(e.tty);
                                    },
                                    read: function (e, t, n, r, a) {
                                        if (!e.tty || !e.tty.ops.get_char) throw new rt.ErrnoError(60);
                                        for (var i = 0, o = 0; o < r; o++) {
                                            var s;
                                            try {
                                                s = e.tty.ops.get_char(e.tty);
                                            } catch (e) {
                                                throw new rt.ErrnoError(29);
                                            }
                                            if (void 0 === s && 0 === i) throw new rt.ErrnoError(6);
                                            if (null == s) break;
                                            i++, (t[n + o] = s);
                                        }
                                        return i && (e.node.timestamp = Date.now()), i;
                                    },
                                    write: function (e, t, n, r, a) {
                                        if (!e.tty || !e.tty.ops.put_char) throw new rt.ErrnoError(60);
                                        try {
                                            for (var i = 0; i < r; i++) e.tty.ops.put_char(e.tty, t[n + i]);
                                        } catch (e) {
                                            throw new rt.ErrnoError(29);
                                        }
                                        return r && (e.node.timestamp = Date.now()), i;
                                    },
                                },
                                default_tty_ops: {
                                    get_char: function (t) {
                                        if (!t.input.length) {
                                            var n = null;
                                            if (f) {
                                                var r = a.alloc ? a.alloc(256) : new a(256),
                                                    i = 0;
                                                try {
                                                    i = v.readSync(e.stdin.fd, r, 0, 256, null);
                                                } catch (e) {
                                                    if (-1 == e.toString().indexOf("EOF")) throw e;
                                                    i = 0;
                                                }
                                                n = i > 0 ? r.slice(0, i).toString("utf-8") : null;
                                            } else
                                                "undefined" != typeof window && "function" == typeof window.prompt
                                                    ? null !== (n = window.prompt("Input: ")) && (n += "\n")
                                                    : "function" == typeof readline && null !== (n = readline()) && (n += "\n");
                                            if (!n) return null;
                                            t.input = It(n, !0);
                                        }
                                        return t.input.shift();
                                    },
                                    put_char: function (e, t) {
                                        null === t || 10 === t ? (k(L(e.output, 0)), (e.output = [])) : 0 != t && e.output.push(t);
                                    },
                                    flush: function (e) {
                                        e.output && e.output.length > 0 && (k(L(e.output, 0)), (e.output = []));
                                    },
                                },
                                default_tty1_ops: {
                                    put_char: function (e, t) {
                                        null === t || 10 === t ? (S(L(e.output, 0)), (e.output = [])) : 0 != t && e.output.push(t);
                                    },
                                    flush: function (e) {
                                        e.output && e.output.length > 0 && (S(L(e.output, 0)), (e.output = []));
                                    },
                                },
                            },
                            nt = {
                                ops_table: null,
                                mount: function (e) {
                                    return nt.createNode(null, "/", 16895, 0);
                                },
                                createNode: function (e, t, n, r) {
                                    if (rt.isBlkdev(n) || rt.isFIFO(n)) throw new rt.ErrnoError(63);
                                    nt.ops_table ||
                                        (nt.ops_table = {
                                            dir: {
                                                node: {
                                                    getattr: nt.node_ops.getattr,
                                                    setattr: nt.node_ops.setattr,
                                                    lookup: nt.node_ops.lookup,
                                                    mknod: nt.node_ops.mknod,
                                                    rename: nt.node_ops.rename,
                                                    unlink: nt.node_ops.unlink,
                                                    rmdir: nt.node_ops.rmdir,
                                                    readdir: nt.node_ops.readdir,
                                                    symlink: nt.node_ops.symlink,
                                                },
                                                stream: { llseek: nt.stream_ops.llseek },
                                            },
                                            file: {
                                                node: { getattr: nt.node_ops.getattr, setattr: nt.node_ops.setattr },
                                                stream: { llseek: nt.stream_ops.llseek, read: nt.stream_ops.read, write: nt.stream_ops.write, allocate: nt.stream_ops.allocate, mmap: nt.stream_ops.mmap, msync: nt.stream_ops.msync },
                                            },
                                            link: { node: { getattr: nt.node_ops.getattr, setattr: nt.node_ops.setattr, readlink: nt.node_ops.readlink }, stream: {} },
                                            chrdev: { node: { getattr: nt.node_ops.getattr, setattr: nt.node_ops.setattr }, stream: rt.chrdev_stream_ops },
                                        });
                                    var a = rt.createNode(e, t, n, r);
                                    return (
                                        rt.isDir(a.mode)
                                            ? ((a.node_ops = nt.ops_table.dir.node), (a.stream_ops = nt.ops_table.dir.stream), (a.contents = {}))
                                            : rt.isFile(a.mode)
                                            ? ((a.node_ops = nt.ops_table.file.node), (a.stream_ops = nt.ops_table.file.stream), (a.usedBytes = 0), (a.contents = null))
                                            : rt.isLink(a.mode)
                                            ? ((a.node_ops = nt.ops_table.link.node), (a.stream_ops = nt.ops_table.link.stream))
                                            : rt.isChrdev(a.mode) && ((a.node_ops = nt.ops_table.chrdev.node), (a.stream_ops = nt.ops_table.chrdev.stream)),
                                        (a.timestamp = Date.now()),
                                        e && (e.contents[t] = a),
                                        a
                                    );
                                },
                                getFileDataAsRegularArray: function (e) {
                                    if (e.contents && e.contents.subarray) {
                                        for (var t = [], n = 0; n < e.usedBytes; ++n) t.push(e.contents[n]);
                                        return t;
                                    }
                                    return e.contents;
                                },
                                getFileDataAsTypedArray: function (e) {
                                    return e.contents ? (e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents)) : new Uint8Array();
                                },
                                expandFileStorage: function (e, t) {
                                    var n = e.contents ? e.contents.length : 0;
                                    if (!(n >= t)) {
                                        (t = Math.max(t, (n * (n < 1048576 ? 2 : 1.125)) | 0)), 0 != n && (t = Math.max(t, 256));
                                        var r = e.contents;
                                        (e.contents = new Uint8Array(t)), e.usedBytes > 0 && e.contents.set(r.subarray(0, e.usedBytes), 0);
                                    }
                                },
                                resizeFileStorage: function (e, t) {
                                    if (e.usedBytes != t) {
                                        if (0 == t) return (e.contents = null), void (e.usedBytes = 0);
                                        if (!e.contents || e.contents.subarray) {
                                            var n = e.contents;
                                            return (e.contents = new Uint8Array(new ArrayBuffer(t))), n && e.contents.set(n.subarray(0, Math.min(t, e.usedBytes))), void (e.usedBytes = t);
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
                                            (t.dev = rt.isChrdev(e.mode) ? e.id : 1),
                                            (t.ino = e.id),
                                            (t.mode = e.mode),
                                            (t.nlink = 1),
                                            (t.uid = 0),
                                            (t.gid = 0),
                                            (t.rdev = e.rdev),
                                            rt.isDir(e.mode) ? (t.size = 4096) : rt.isFile(e.mode) ? (t.size = e.usedBytes) : rt.isLink(e.mode) ? (t.size = e.link.length) : (t.size = 0),
                                            (t.atime = new Date(e.timestamp)),
                                            (t.mtime = new Date(e.timestamp)),
                                            (t.ctime = new Date(e.timestamp)),
                                            (t.blksize = 4096),
                                            (t.blocks = Math.ceil(t.size / t.blksize)),
                                            t
                                        );
                                    },
                                    setattr: function (e, t) {
                                        void 0 !== t.mode && (e.mode = t.mode), void 0 !== t.timestamp && (e.timestamp = t.timestamp), void 0 !== t.size && nt.resizeFileStorage(e, t.size);
                                    },
                                    lookup: function (e, t) {
                                        throw rt.genericErrors[44];
                                    },
                                    mknod: function (e, t, n, r) {
                                        return nt.createNode(e, t, n, r);
                                    },
                                    rename: function (e, t, n) {
                                        if (rt.isDir(e.mode)) {
                                            var r;
                                            try {
                                                r = rt.lookupNode(t, n);
                                            } catch (e) {}
                                            if (r) for (var a in r.contents) throw new rt.ErrnoError(55);
                                        }
                                        delete e.parent.contents[e.name], (e.name = n), (t.contents[n] = e), (e.parent = t);
                                    },
                                    unlink: function (e, t) {
                                        delete e.contents[t];
                                    },
                                    rmdir: function (e, t) {
                                        var n = rt.lookupNode(e, t);
                                        for (var r in n.contents) throw new rt.ErrnoError(55);
                                        delete e.contents[t];
                                    },
                                    readdir: function (e) {
                                        var t = [".", ".."];
                                        for (var n in e.contents) e.contents.hasOwnProperty(n) && t.push(n);
                                        return t;
                                    },
                                    symlink: function (e, t, n) {
                                        var r = nt.createNode(e, t, 41471, 0);
                                        return (r.link = n), r;
                                    },
                                    readlink: function (e) {
                                        if (!rt.isLink(e.mode)) throw new rt.ErrnoError(28);
                                        return e.link;
                                    },
                                },
                                stream_ops: {
                                    read: function (e, t, n, r, a) {
                                        var i = e.node.contents;
                                        if (a >= e.node.usedBytes) return 0;
                                        var o = Math.min(e.node.usedBytes - a, r);
                                        if (o > 8 && i.subarray) t.set(i.subarray(a, a + o), n);
                                        else for (var s = 0; s < o; s++) t[n + s] = i[a + s];
                                        return o;
                                    },
                                    write: function (e, t, n, r, a, i) {
                                        if ((t.buffer === $.buffer && (i = !1), !r)) return 0;
                                        var o = e.node;
                                        if (((o.timestamp = Date.now()), t.subarray && (!o.contents || o.contents.subarray))) {
                                            if (i) return (o.contents = t.subarray(n, n + r)), (o.usedBytes = r), r;
                                            if (0 === o.usedBytes && 0 === a) return (o.contents = new Uint8Array(t.subarray(n, n + r))), (o.usedBytes = r), r;
                                            if (a + r <= o.usedBytes) return o.contents.set(t.subarray(n, n + r), a), r;
                                        }
                                        if ((nt.expandFileStorage(o, a + r), o.contents.subarray && t.subarray)) o.contents.set(t.subarray(n, n + r), a);
                                        else for (var s = 0; s < r; s++) o.contents[a + s] = t[n + s];
                                        return (o.usedBytes = Math.max(o.usedBytes, a + r)), r;
                                    },
                                    llseek: function (e, t, n) {
                                        var r = t;
                                        if ((1 === n ? (r += e.position) : 2 === n && rt.isFile(e.node.mode) && (r += e.node.usedBytes), r < 0)) throw new rt.ErrnoError(28);
                                        return r;
                                    },
                                    allocate: function (e, t, n) {
                                        nt.expandFileStorage(e.node, t + n), (e.node.usedBytes = Math.max(e.node.usedBytes, t + n));
                                    },
                                    mmap: function (e, t, n, r, a, i, o) {
                                        if (!rt.isFile(e.node.mode)) throw new rt.ErrnoError(43);
                                        var s,
                                            c,
                                            l = e.node.contents;
                                        if (2 & o || l.buffer !== t.buffer) {
                                            (a > 0 || a + r < e.node.usedBytes) && (l = l.subarray ? l.subarray(a, a + r) : Array.prototype.slice.call(l, a, a + r)), (c = !0);
                                            var u = t.buffer == $.buffer;
                                            if (!(s = Ot(r))) throw new rt.ErrnoError(48);
                                            (u ? $ : t).set(l, s);
                                        } else (c = !1), (s = l.byteOffset);
                                        return { ptr: s, allocated: c };
                                    },
                                    msync: function (e, t, n, r, a) {
                                        if (!rt.isFile(e.node.mode)) throw new rt.ErrnoError(43);
                                        return 2 & a ? 0 : (nt.stream_ops.write(e, t, 0, r, n, !1), 0);
                                    },
                                },
                            },
                            rt = {
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
                                    if (!(e instanceof rt.ErrnoError)) throw e + " : " + Ge();
                                    return Ze(e.errno);
                                },
                                lookupPath: function (e, t) {
                                    if (((t = t || {}), !(e = et.resolve(rt.cwd(), e)))) return { path: "", node: null };
                                    var n = { follow_mount: !0, recurse_count: 0 };
                                    for (var r in n) void 0 === t[r] && (t[r] = n[r]);
                                    if (t.recurse_count > 8) throw new rt.ErrnoError(32);
                                    for (
                                        var a = Qe.normalizeArray(
                                                e.split("/").filter(function (e) {
                                                    return !!e;
                                                }),
                                                !1
                                            ),
                                            i = rt.root,
                                            o = "/",
                                            s = 0;
                                        s < a.length;
                                        s++
                                    ) {
                                        var c = s === a.length - 1;
                                        if (c && t.parent) break;
                                        if (((i = rt.lookupNode(i, a[s])), (o = Qe.join2(o, a[s])), rt.isMountpoint(i) && (!c || (c && t.follow_mount)) && (i = i.mounted.root), !c || t.follow))
                                            for (var l = 0; rt.isLink(i.mode); ) {
                                                var u = rt.readlink(o);
                                                if (((o = et.resolve(Qe.dirname(o), u)), (i = rt.lookupPath(o, { recurse_count: t.recurse_count }).node), l++ > 40)) throw new rt.ErrnoError(32);
                                            }
                                    }
                                    return { path: o, node: i };
                                },
                                getPath: function (e) {
                                    for (var t; ; ) {
                                        if (rt.isRoot(e)) {
                                            var n = e.mount.mountpoint;
                                            return t ? ("/" !== n[n.length - 1] ? n + "/" + t : n + t) : n;
                                        }
                                        (t = t ? e.name + "/" + t : e.name), (e = e.parent);
                                    }
                                },
                                hashName: function (e, t) {
                                    for (var n = 0, r = 0; r < t.length; r++) n = ((n << 5) - n + t.charCodeAt(r)) | 0;
                                    return ((e + n) >>> 0) % rt.nameTable.length;
                                },
                                hashAddNode: function (e) {
                                    var t = rt.hashName(e.parent.id, e.name);
                                    (e.name_next = rt.nameTable[t]), (rt.nameTable[t] = e);
                                },
                                hashRemoveNode: function (e) {
                                    var t = rt.hashName(e.parent.id, e.name);
                                    if (rt.nameTable[t] === e) rt.nameTable[t] = e.name_next;
                                    else
                                        for (var n = rt.nameTable[t]; n; ) {
                                            if (n.name_next === e) {
                                                n.name_next = e.name_next;
                                                break;
                                            }
                                            n = n.name_next;
                                        }
                                },
                                lookupNode: function (e, t) {
                                    var n = rt.mayLookup(e);
                                    if (n) throw new rt.ErrnoError(n, e);
                                    for (var r = rt.hashName(e.id, t), a = rt.nameTable[r]; a; a = a.name_next) {
                                        var i = a.name;
                                        if (a.parent.id === e.id && i === t) return a;
                                    }
                                    return rt.lookup(e, t);
                                },
                                createNode: function (e, t, n, r) {
                                    rt.FSNode ||
                                        ((rt.FSNode = function (e, t, n, r) {
                                            e || (e = this),
                                                (this.parent = e),
                                                (this.mount = e.mount),
                                                (this.mounted = null),
                                                (this.id = rt.nextInode++),
                                                (this.name = t),
                                                (this.mode = n),
                                                (this.node_ops = {}),
                                                (this.stream_ops = {}),
                                                (this.rdev = r);
                                        }),
                                        (rt.FSNode.prototype = {}),
                                        Object.defineProperties(rt.FSNode.prototype, {
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
                                                    return rt.isDir(this.mode);
                                                },
                                            },
                                            isDevice: {
                                                get: function () {
                                                    return rt.isChrdev(this.mode);
                                                },
                                            },
                                        }));
                                    var a = new rt.FSNode(e, t, n, r);
                                    return rt.hashAddNode(a), a;
                                },
                                destroyNode: function (e) {
                                    rt.hashRemoveNode(e);
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
                                    var t = rt.flagModes[e];
                                    if (void 0 === t) throw new Error("Unknown file open mode: " + e);
                                    return t;
                                },
                                flagsToPermissionString: function (e) {
                                    var t = ["r", "w", "rw"][3 & e];
                                    return 512 & e && (t += "w"), t;
                                },
                                nodePermissions: function (e, t) {
                                    return rt.ignorePermissions ? 0 : (-1 === t.indexOf("r") || 292 & e.mode) && (-1 === t.indexOf("w") || 146 & e.mode) && (-1 === t.indexOf("x") || 73 & e.mode) ? 0 : 2;
                                },
                                mayLookup: function (e) {
                                    var t = rt.nodePermissions(e, "x");
                                    return t || (e.node_ops.lookup ? 0 : 2);
                                },
                                mayCreate: function (e, t) {
                                    try {
                                        return rt.lookupNode(e, t), 20;
                                    } catch (e) {}
                                    return rt.nodePermissions(e, "wx");
                                },
                                mayDelete: function (e, t, n) {
                                    var r;
                                    try {
                                        r = rt.lookupNode(e, t);
                                    } catch (e) {
                                        return e.errno;
                                    }
                                    var a = rt.nodePermissions(e, "wx");
                                    if (a) return a;
                                    if (n) {
                                        if (!rt.isDir(r.mode)) return 54;
                                        if (rt.isRoot(r) || rt.getPath(r) === rt.cwd()) return 10;
                                    } else if (rt.isDir(r.mode)) return 31;
                                    return 0;
                                },
                                mayOpen: function (e, t) {
                                    return e ? (rt.isLink(e.mode) ? 32 : rt.isDir(e.mode) && ("r" !== rt.flagsToPermissionString(t) || 512 & t) ? 31 : rt.nodePermissions(e, rt.flagsToPermissionString(t))) : 44;
                                },
                                MAX_OPEN_FDS: 4096,
                                nextfd: function (e, t) {
                                    (e = e || 0), (t = t || rt.MAX_OPEN_FDS);
                                    for (var n = e; n <= t; n++) if (!rt.streams[n]) return n;
                                    throw new rt.ErrnoError(33);
                                },
                                getStream: function (e) {
                                    return rt.streams[e];
                                },
                                createStream: function (e, t, n) {
                                    rt.FSStream ||
                                        ((rt.FSStream = function () {}),
                                        (rt.FSStream.prototype = {}),
                                        Object.defineProperties(rt.FSStream.prototype, {
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
                                    var r = new rt.FSStream();
                                    for (var a in e) r[a] = e[a];
                                    e = r;
                                    var i = rt.nextfd(t, n);
                                    return (e.fd = i), (rt.streams[i] = e), e;
                                },
                                closeStream: function (e) {
                                    rt.streams[e] = null;
                                },
                                chrdev_stream_ops: {
                                    open: function (e) {
                                        var t = rt.getDevice(e.node.rdev);
                                        (e.stream_ops = t.stream_ops), e.stream_ops.open && e.stream_ops.open(e);
                                    },
                                    llseek: function () {
                                        throw new rt.ErrnoError(70);
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
                                    rt.devices[e] = { stream_ops: t };
                                },
                                getDevice: function (e) {
                                    return rt.devices[e];
                                },
                                getMounts: function (e) {
                                    for (var t = [], n = [e]; n.length; ) {
                                        var r = n.pop();
                                        t.push(r), n.push.apply(n, r.mounts);
                                    }
                                    return t;
                                },
                                syncfs: function (e, t) {
                                    "function" == typeof e && ((t = e), (e = !1)),
                                        rt.syncFSRequests++,
                                        rt.syncFSRequests > 1 && console.log("warning: " + rt.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
                                    var n = rt.getMounts(rt.root.mount),
                                        r = 0;
                                    function a(e) {
                                        return rt.syncFSRequests--, t(e);
                                    }
                                    function i(e) {
                                        if (e) return i.errored ? void 0 : ((i.errored = !0), a(e));
                                        ++r >= n.length && a(null);
                                    }
                                    n.forEach(function (t) {
                                        if (!t.type.syncfs) return i(null);
                                        t.type.syncfs(t, e, i);
                                    });
                                },
                                mount: function (e, t, n) {
                                    var r,
                                        a = "/" === n,
                                        i = !n;
                                    if (a && rt.root) throw new rt.ErrnoError(10);
                                    if (!a && !i) {
                                        var o = rt.lookupPath(n, { follow_mount: !1 });
                                        if (((n = o.path), (r = o.node), rt.isMountpoint(r))) throw new rt.ErrnoError(10);
                                        if (!rt.isDir(r.mode)) throw new rt.ErrnoError(54);
                                    }
                                    var s = { type: e, opts: t, mountpoint: n, mounts: [] },
                                        c = e.mount(s);
                                    return (c.mount = s), (s.root = c), a ? (rt.root = c) : r && ((r.mounted = s), r.mount && r.mount.mounts.push(s)), c;
                                },
                                unmount: function (e) {
                                    var t = rt.lookupPath(e, { follow_mount: !1 });
                                    if (!rt.isMountpoint(t.node)) throw new rt.ErrnoError(28);
                                    var n = t.node,
                                        r = n.mounted,
                                        a = rt.getMounts(r);
                                    Object.keys(rt.nameTable).forEach(function (e) {
                                        for (var t = rt.nameTable[e]; t; ) {
                                            var n = t.name_next;
                                            -1 !== a.indexOf(t.mount) && rt.destroyNode(t), (t = n);
                                        }
                                    }),
                                        (n.mounted = null);
                                    var i = n.mount.mounts.indexOf(r);
                                    n.mount.mounts.splice(i, 1);
                                },
                                lookup: function (e, t) {
                                    return e.node_ops.lookup(e, t);
                                },
                                mknod: function (e, t, n) {
                                    var r = rt.lookupPath(e, { parent: !0 }).node,
                                        a = Qe.basename(e);
                                    if (!a || "." === a || ".." === a) throw new rt.ErrnoError(28);
                                    var i = rt.mayCreate(r, a);
                                    if (i) throw new rt.ErrnoError(i);
                                    if (!r.node_ops.mknod) throw new rt.ErrnoError(63);
                                    return r.node_ops.mknod(r, a, t, n);
                                },
                                create: function (e, t) {
                                    return (t = void 0 !== t ? t : 438), (t &= 4095), (t |= 32768), rt.mknod(e, t, 0);
                                },
                                mkdir: function (e, t) {
                                    return (t = void 0 !== t ? t : 511), (t &= 1023), (t |= 16384), rt.mknod(e, t, 0);
                                },
                                mkdirTree: function (e, t) {
                                    for (var n = e.split("/"), r = "", a = 0; a < n.length; ++a)
                                        if (n[a]) {
                                            r += "/" + n[a];
                                            try {
                                                rt.mkdir(r, t);
                                            } catch (e) {
                                                if (20 != e.errno) throw e;
                                            }
                                        }
                                },
                                mkdev: function (e, t, n) {
                                    return void 0 === n && ((n = t), (t = 438)), (t |= 8192), rt.mknod(e, t, n);
                                },
                                symlink: function (e, t) {
                                    if (!et.resolve(e)) throw new rt.ErrnoError(44);
                                    var n = rt.lookupPath(t, { parent: !0 }).node;
                                    if (!n) throw new rt.ErrnoError(44);
                                    var r = Qe.basename(t),
                                        a = rt.mayCreate(n, r);
                                    if (a) throw new rt.ErrnoError(a);
                                    if (!n.node_ops.symlink) throw new rt.ErrnoError(63);
                                    return n.node_ops.symlink(n, r, e);
                                },
                                rename: function (e, t) {
                                    var n,
                                        r,
                                        a = Qe.dirname(e),
                                        i = Qe.dirname(t),
                                        o = Qe.basename(e),
                                        s = Qe.basename(t);
                                    try {
                                        (n = rt.lookupPath(e, { parent: !0 }).node), (r = rt.lookupPath(t, { parent: !0 }).node);
                                    } catch (e) {
                                        throw new rt.ErrnoError(10);
                                    }
                                    if (!n || !r) throw new rt.ErrnoError(44);
                                    if (n.mount !== r.mount) throw new rt.ErrnoError(75);
                                    var c,
                                        l = rt.lookupNode(n, o),
                                        u = et.relative(e, i);
                                    if ("." !== u.charAt(0)) throw new rt.ErrnoError(28);
                                    if ("." !== (u = et.relative(t, a)).charAt(0)) throw new rt.ErrnoError(55);
                                    try {
                                        c = rt.lookupNode(r, s);
                                    } catch (e) {}
                                    if (l !== c) {
                                        var d = rt.isDir(l.mode),
                                            m = rt.mayDelete(n, o, d);
                                        if (m) throw new rt.ErrnoError(m);
                                        if ((m = c ? rt.mayDelete(r, s, d) : rt.mayCreate(r, s))) throw new rt.ErrnoError(m);
                                        if (!n.node_ops.rename) throw new rt.ErrnoError(63);
                                        if (rt.isMountpoint(l) || (c && rt.isMountpoint(c))) throw new rt.ErrnoError(10);
                                        if (r !== n && (m = rt.nodePermissions(n, "w"))) throw new rt.ErrnoError(m);
                                        try {
                                            rt.trackingDelegate.willMovePath && rt.trackingDelegate.willMovePath(e, t);
                                        } catch (n) {
                                            console.log("FS.trackingDelegate['willMovePath']('" + e + "', '" + t + "') threw an exception: " + n.message);
                                        }
                                        rt.hashRemoveNode(l);
                                        try {
                                            n.node_ops.rename(l, r, s);
                                        } catch (e) {
                                            throw e;
                                        } finally {
                                            rt.hashAddNode(l);
                                        }
                                        try {
                                            rt.trackingDelegate.onMovePath && rt.trackingDelegate.onMovePath(e, t);
                                        } catch (n) {
                                            console.log("FS.trackingDelegate['onMovePath']('" + e + "', '" + t + "') threw an exception: " + n.message);
                                        }
                                    }
                                },
                                rmdir: function (e) {
                                    var t = rt.lookupPath(e, { parent: !0 }).node,
                                        n = Qe.basename(e),
                                        r = rt.lookupNode(t, n),
                                        a = rt.mayDelete(t, n, !0);
                                    if (a) throw new rt.ErrnoError(a);
                                    if (!t.node_ops.rmdir) throw new rt.ErrnoError(63);
                                    if (rt.isMountpoint(r)) throw new rt.ErrnoError(10);
                                    try {
                                        rt.trackingDelegate.willDeletePath && rt.trackingDelegate.willDeletePath(e);
                                    } catch (t) {
                                        console.log("FS.trackingDelegate['willDeletePath']('" + e + "') threw an exception: " + t.message);
                                    }
                                    t.node_ops.rmdir(t, n), rt.destroyNode(r);
                                    try {
                                        rt.trackingDelegate.onDeletePath && rt.trackingDelegate.onDeletePath(e);
                                    } catch (t) {
                                        console.log("FS.trackingDelegate['onDeletePath']('" + e + "') threw an exception: " + t.message);
                                    }
                                },
                                readdir: function (e) {
                                    var t = rt.lookupPath(e, { follow: !0 }).node;
                                    if (!t.node_ops.readdir) throw new rt.ErrnoError(54);
                                    return t.node_ops.readdir(t);
                                },
                                unlink: function (e) {
                                    var t = rt.lookupPath(e, { parent: !0 }).node,
                                        n = Qe.basename(e),
                                        r = rt.lookupNode(t, n),
                                        a = rt.mayDelete(t, n, !1);
                                    if (a) throw new rt.ErrnoError(a);
                                    if (!t.node_ops.unlink) throw new rt.ErrnoError(63);
                                    if (rt.isMountpoint(r)) throw new rt.ErrnoError(10);
                                    try {
                                        rt.trackingDelegate.willDeletePath && rt.trackingDelegate.willDeletePath(e);
                                    } catch (t) {
                                        console.log("FS.trackingDelegate['willDeletePath']('" + e + "') threw an exception: " + t.message);
                                    }
                                    t.node_ops.unlink(t, n), rt.destroyNode(r);
                                    try {
                                        rt.trackingDelegate.onDeletePath && rt.trackingDelegate.onDeletePath(e);
                                    } catch (t) {
                                        console.log("FS.trackingDelegate['onDeletePath']('" + e + "') threw an exception: " + t.message);
                                    }
                                },
                                readlink: function (e) {
                                    var t = rt.lookupPath(e).node;
                                    if (!t) throw new rt.ErrnoError(44);
                                    if (!t.node_ops.readlink) throw new rt.ErrnoError(28);
                                    return et.resolve(rt.getPath(t.parent), t.node_ops.readlink(t));
                                },
                                stat: function (e, t) {
                                    var n = rt.lookupPath(e, { follow: !t }).node;
                                    if (!n) throw new rt.ErrnoError(44);
                                    if (!n.node_ops.getattr) throw new rt.ErrnoError(63);
                                    return n.node_ops.getattr(n);
                                },
                                lstat: function (e) {
                                    return rt.stat(e, !0);
                                },
                                chmod: function (e, t, n) {
                                    var r;
                                    if (!(r = "string" == typeof e ? rt.lookupPath(e, { follow: !n }).node : e).node_ops.setattr) throw new rt.ErrnoError(63);
                                    r.node_ops.setattr(r, { mode: (4095 & t) | (-4096 & r.mode), timestamp: Date.now() });
                                },
                                lchmod: function (e, t) {
                                    rt.chmod(e, t, !0);
                                },
                                fchmod: function (e, t) {
                                    var n = rt.getStream(e);
                                    if (!n) throw new rt.ErrnoError(8);
                                    rt.chmod(n.node, t);
                                },
                                chown: function (e, t, n, r) {
                                    var a;
                                    if (!(a = "string" == typeof e ? rt.lookupPath(e, { follow: !r }).node : e).node_ops.setattr) throw new rt.ErrnoError(63);
                                    a.node_ops.setattr(a, { timestamp: Date.now() });
                                },
                                lchown: function (e, t, n) {
                                    rt.chown(e, t, n, !0);
                                },
                                fchown: function (e, t, n) {
                                    var r = rt.getStream(e);
                                    if (!r) throw new rt.ErrnoError(8);
                                    rt.chown(r.node, t, n);
                                },
                                truncate: function (e, t) {
                                    if (t < 0) throw new rt.ErrnoError(28);
                                    var n;
                                    if (!(n = "string" == typeof e ? rt.lookupPath(e, { follow: !0 }).node : e).node_ops.setattr) throw new rt.ErrnoError(63);
                                    if (rt.isDir(n.mode)) throw new rt.ErrnoError(31);
                                    if (!rt.isFile(n.mode)) throw new rt.ErrnoError(28);
                                    var r = rt.nodePermissions(n, "w");
                                    if (r) throw new rt.ErrnoError(r);
                                    n.node_ops.setattr(n, { size: t, timestamp: Date.now() });
                                },
                                ftruncate: function (e, t) {
                                    var n = rt.getStream(e);
                                    if (!n) throw new rt.ErrnoError(8);
                                    if (0 == (2097155 & n.flags)) throw new rt.ErrnoError(28);
                                    rt.truncate(n.node, t);
                                },
                                utime: function (e, t, n) {
                                    var r = rt.lookupPath(e, { follow: !0 }).node;
                                    r.node_ops.setattr(r, { timestamp: Math.max(t, n) });
                                },
                                open: function (e, n, r, a, o) {
                                    if ("" === e) throw new rt.ErrnoError(44);
                                    var s;
                                    if (((r = void 0 === r ? 438 : r), (r = 64 & (n = "string" == typeof n ? rt.modeStringToFlags(n) : n) ? (4095 & r) | 32768 : 0), "object" === i(e))) s = e;
                                    else {
                                        e = Qe.normalize(e);
                                        try {
                                            s = rt.lookupPath(e, { follow: !(131072 & n) }).node;
                                        } catch (e) {}
                                    }
                                    var c = !1;
                                    if (64 & n)
                                        if (s) {
                                            if (128 & n) throw new rt.ErrnoError(20);
                                        } else (s = rt.mknod(e, r, 0)), (c = !0);
                                    if (!s) throw new rt.ErrnoError(44);
                                    if ((rt.isChrdev(s.mode) && (n &= -513), 65536 & n && !rt.isDir(s.mode))) throw new rt.ErrnoError(54);
                                    if (!c) {
                                        var l = rt.mayOpen(s, n);
                                        if (l) throw new rt.ErrnoError(l);
                                    }
                                    512 & n && rt.truncate(s, 0), (n &= -641);
                                    var u = rt.createStream({ node: s, path: rt.getPath(s), flags: n, seekable: !0, position: 0, stream_ops: s.stream_ops, ungotten: [], error: !1 }, a, o);
                                    u.stream_ops.open && u.stream_ops.open(u),
                                        !t.logReadFiles || 1 & n || (rt.readFiles || (rt.readFiles = {}), e in rt.readFiles || ((rt.readFiles[e] = 1), console.log("FS.trackingDelegate error on read file: " + e)));
                                    try {
                                        if (rt.trackingDelegate.onOpenFile) {
                                            var d = 0;
                                            1 != (2097155 & n) && (d |= rt.tracking.openFlags.READ), 0 != (2097155 & n) && (d |= rt.tracking.openFlags.WRITE), rt.trackingDelegate.onOpenFile(e, d);
                                        }
                                    } catch (t) {
                                        console.log("FS.trackingDelegate['onOpenFile']('" + e + "', flags) threw an exception: " + t.message);
                                    }
                                    return u;
                                },
                                close: function (e) {
                                    if (rt.isClosed(e)) throw new rt.ErrnoError(8);
                                    e.getdents && (e.getdents = null);
                                    try {
                                        e.stream_ops.close && e.stream_ops.close(e);
                                    } catch (e) {
                                        throw e;
                                    } finally {
                                        rt.closeStream(e.fd);
                                    }
                                    e.fd = null;
                                },
                                isClosed: function (e) {
                                    return null === e.fd;
                                },
                                llseek: function (e, t, n) {
                                    if (rt.isClosed(e)) throw new rt.ErrnoError(8);
                                    if (!e.seekable || !e.stream_ops.llseek) throw new rt.ErrnoError(70);
                                    if (0 != n && 1 != n && 2 != n) throw new rt.ErrnoError(28);
                                    return (e.position = e.stream_ops.llseek(e, t, n)), (e.ungotten = []), e.position;
                                },
                                read: function (e, t, n, r, a) {
                                    if (r < 0 || a < 0) throw new rt.ErrnoError(28);
                                    if (rt.isClosed(e)) throw new rt.ErrnoError(8);
                                    if (1 == (2097155 & e.flags)) throw new rt.ErrnoError(8);
                                    if (rt.isDir(e.node.mode)) throw new rt.ErrnoError(31);
                                    if (!e.stream_ops.read) throw new rt.ErrnoError(28);
                                    var i = void 0 !== a;
                                    if (i) {
                                        if (!e.seekable) throw new rt.ErrnoError(70);
                                    } else a = e.position;
                                    var o = e.stream_ops.read(e, t, n, r, a);
                                    return i || (e.position += o), o;
                                },
                                write: function (e, t, n, r, a, i) {
                                    if (r < 0 || a < 0) throw new rt.ErrnoError(28);
                                    if (rt.isClosed(e)) throw new rt.ErrnoError(8);
                                    if (0 == (2097155 & e.flags)) throw new rt.ErrnoError(8);
                                    if (rt.isDir(e.node.mode)) throw new rt.ErrnoError(31);
                                    if (!e.stream_ops.write) throw new rt.ErrnoError(28);
                                    1024 & e.flags && rt.llseek(e, 0, 2);
                                    var o = void 0 !== a;
                                    if (o) {
                                        if (!e.seekable) throw new rt.ErrnoError(70);
                                    } else a = e.position;
                                    var s = e.stream_ops.write(e, t, n, r, a, i);
                                    o || (e.position += s);
                                    try {
                                        e.path && rt.trackingDelegate.onWriteToFile && rt.trackingDelegate.onWriteToFile(e.path);
                                    } catch (t) {
                                        console.log("FS.trackingDelegate['onWriteToFile']('" + e.path + "') threw an exception: " + t.message);
                                    }
                                    return s;
                                },
                                allocate: function (e, t, n) {
                                    if (rt.isClosed(e)) throw new rt.ErrnoError(8);
                                    if (t < 0 || n <= 0) throw new rt.ErrnoError(28);
                                    if (0 == (2097155 & e.flags)) throw new rt.ErrnoError(8);
                                    if (!rt.isFile(e.node.mode) && !rt.isDir(e.node.mode)) throw new rt.ErrnoError(43);
                                    if (!e.stream_ops.allocate) throw new rt.ErrnoError(138);
                                    e.stream_ops.allocate(e, t, n);
                                },
                                mmap: function (e, t, n, r, a, i, o) {
                                    if (0 != (2 & i) && 0 == (2 & o) && 2 != (2097155 & e.flags)) throw new rt.ErrnoError(2);
                                    if (1 == (2097155 & e.flags)) throw new rt.ErrnoError(2);
                                    if (!e.stream_ops.mmap) throw new rt.ErrnoError(43);
                                    return e.stream_ops.mmap(e, t, n, r, a, i, o);
                                },
                                msync: function (e, t, n, r, a) {
                                    return e && e.stream_ops.msync ? e.stream_ops.msync(e, t, n, r, a) : 0;
                                },
                                munmap: function (e) {
                                    return 0;
                                },
                                ioctl: function (e, t, n) {
                                    if (!e.stream_ops.ioctl) throw new rt.ErrnoError(59);
                                    return e.stream_ops.ioctl(e, t, n);
                                },
                                readFile: function (e, t) {
                                    if ((((t = t || {}).flags = t.flags || "r"), (t.encoding = t.encoding || "binary"), "utf8" !== t.encoding && "binary" !== t.encoding)) throw new Error('Invalid encoding type "' + t.encoding + '"');
                                    var n,
                                        r = rt.open(e, t.flags),
                                        a = rt.stat(e).size,
                                        i = new Uint8Array(a);
                                    return rt.read(r, i, 0, a, 0), "utf8" === t.encoding ? (n = L(i, 0)) : "binary" === t.encoding && (n = i), rt.close(r), n;
                                },
                                writeFile: function (e, t, n) {
                                    (n = n || {}).flags = n.flags || "w";
                                    var r = rt.open(e, n.flags, n.mode);
                                    if ("string" == typeof t) {
                                        var a = new Uint8Array(U(t) + 1),
                                            i = H(t, a, 0, a.length);
                                        rt.write(r, a, 0, i, void 0, n.canOwn);
                                    } else {
                                        if (!ArrayBuffer.isView(t)) throw new Error("Unsupported data type");
                                        rt.write(r, t, 0, t.byteLength, void 0, n.canOwn);
                                    }
                                    rt.close(r);
                                },
                                cwd: function () {
                                    return rt.currentPath;
                                },
                                chdir: function (e) {
                                    var t = rt.lookupPath(e, { follow: !0 });
                                    if (null === t.node) throw new rt.ErrnoError(44);
                                    if (!rt.isDir(t.node.mode)) throw new rt.ErrnoError(54);
                                    var n = rt.nodePermissions(t.node, "x");
                                    if (n) throw new rt.ErrnoError(n);
                                    rt.currentPath = t.path;
                                },
                                createDefaultDirectories: function () {
                                    rt.mkdir("/tmp"), rt.mkdir("/home"), rt.mkdir("/home/web_user");
                                },
                                createDefaultDevices: function () {
                                    var e;
                                    if (
                                        (rt.mkdir("/dev"),
                                        rt.registerDevice(rt.makedev(1, 3), {
                                            read: function () {
                                                return 0;
                                            },
                                            write: function (e, t, n, r, a) {
                                                return r;
                                            },
                                        }),
                                        rt.mkdev("/dev/null", rt.makedev(1, 3)),
                                        tt.register(rt.makedev(5, 0), tt.default_tty_ops),
                                        tt.register(rt.makedev(6, 0), tt.default_tty1_ops),
                                        rt.mkdev("/dev/tty", rt.makedev(5, 0)),
                                        rt.mkdev("/dev/tty1", rt.makedev(6, 0)),
                                        "object" === ("undefined" == typeof crypto ? "undefined" : i(crypto)) && "function" == typeof crypto.getRandomValues)
                                    ) {
                                        var t = new Uint8Array(1);
                                        e = function () {
                                            return crypto.getRandomValues(t), t[0];
                                        };
                                    } else if (f)
                                        try {
                                            var r = n(49);
                                            e = function () {
                                                return r.randomBytes(1)[0];
                                            };
                                        } catch (e) {}
                                    e ||
                                        (e = function () {
                                            Me("random_device");
                                        }),
                                        rt.createDevice("/dev", "random", e),
                                        rt.createDevice("/dev", "urandom", e),
                                        rt.mkdir("/dev/shm"),
                                        rt.mkdir("/dev/shm/tmp");
                                },
                                createSpecialDirectories: function () {
                                    rt.mkdir("/proc"),
                                        rt.mkdir("/proc/self"),
                                        rt.mkdir("/proc/self/fd"),
                                        rt.mount(
                                            {
                                                mount: function () {
                                                    var e = rt.createNode("/proc/self", "fd", 16895, 73);
                                                    return (
                                                        (e.node_ops = {
                                                            lookup: function (e, t) {
                                                                var n = +t,
                                                                    r = rt.getStream(n);
                                                                if (!r) throw new rt.ErrnoError(8);
                                                                var a = {
                                                                    parent: null,
                                                                    mount: { mountpoint: "fake" },
                                                                    node_ops: {
                                                                        readlink: function () {
                                                                            return r.path;
                                                                        },
                                                                    },
                                                                };
                                                                return (a.parent = a), a;
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
                                    t.stdin ? rt.createDevice("/dev", "stdin", t.stdin) : rt.symlink("/dev/tty", "/dev/stdin"),
                                        t.stdout ? rt.createDevice("/dev", "stdout", null, t.stdout) : rt.symlink("/dev/tty", "/dev/stdout"),
                                        t.stderr ? rt.createDevice("/dev", "stderr", null, t.stderr) : rt.symlink("/dev/tty1", "/dev/stderr"),
                                        rt.open("/dev/stdin", "r"),
                                        rt.open("/dev/stdout", "w"),
                                        rt.open("/dev/stderr", "w");
                                },
                                ensureErrnoError: function () {
                                    rt.ErrnoError ||
                                        ((rt.ErrnoError = function (e, t) {
                                            (this.node = t),
                                                (this.setErrno = function (e) {
                                                    this.errno = e;
                                                }),
                                                this.setErrno(e),
                                                (this.message = "FS error");
                                        }),
                                        (rt.ErrnoError.prototype = new Error()),
                                        (rt.ErrnoError.prototype.constructor = rt.ErrnoError),
                                        [44].forEach(function (e) {
                                            (rt.genericErrors[e] = new rt.ErrnoError(e)), (rt.genericErrors[e].stack = "<generic error, no stack>");
                                        }));
                                },
                                staticInit: function () {
                                    rt.ensureErrnoError(), (rt.nameTable = new Array(4096)), rt.mount(nt, {}, "/"), rt.createDefaultDirectories(), rt.createDefaultDevices(), rt.createSpecialDirectories(), (rt.filesystems = { MEMFS: nt });
                                },
                                init: function (e, n, r) {
                                    (rt.init.initialized = !0), rt.ensureErrnoError(), (t.stdin = e || t.stdin), (t.stdout = n || t.stdout), (t.stderr = r || t.stderr), rt.createStandardStreams();
                                },
                                quit: function () {
                                    rt.init.initialized = !1;
                                    var e = t._fflush;
                                    e && e(0);
                                    for (var n = 0; n < rt.streams.length; n++) {
                                        var r = rt.streams[n];
                                        r && rt.close(r);
                                    }
                                },
                                getMode: function (e, t) {
                                    var n = 0;
                                    return e && (n |= 365), t && (n |= 146), n;
                                },
                                joinPath: function (e, t) {
                                    var n = Qe.join.apply(null, e);
                                    return t && "/" == n[0] && (n = n.substr(1)), n;
                                },
                                absolutePath: function (e, t) {
                                    return et.resolve(t, e);
                                },
                                standardizePath: function (e) {
                                    return Qe.normalize(e);
                                },
                                findObject: function (e, t) {
                                    var n = rt.analyzePath(e, t);
                                    return n.exists ? n.object : (Ze(n.error), null);
                                },
                                analyzePath: function (e, t) {
                                    try {
                                        e = (r = rt.lookupPath(e, { follow: !t })).path;
                                    } catch (e) {}
                                    var n = { isRoot: !1, exists: !1, error: 0, name: null, path: null, object: null, parentExists: !1, parentPath: null, parentObject: null };
                                    try {
                                        var r = rt.lookupPath(e, { parent: !0 });
                                        (n.parentExists = !0),
                                            (n.parentPath = r.path),
                                            (n.parentObject = r.node),
                                            (n.name = Qe.basename(e)),
                                            (r = rt.lookupPath(e, { follow: !t })),
                                            (n.exists = !0),
                                            (n.path = r.path),
                                            (n.object = r.node),
                                            (n.name = r.node.name),
                                            (n.isRoot = "/" === r.path);
                                    } catch (e) {
                                        n.error = e.errno;
                                    }
                                    return n;
                                },
                                createFolder: function (e, t, n, r) {
                                    var a = Qe.join2("string" == typeof e ? e : rt.getPath(e), t),
                                        i = rt.getMode(n, r);
                                    return rt.mkdir(a, i);
                                },
                                createPath: function (e, t, n, r) {
                                    e = "string" == typeof e ? e : rt.getPath(e);
                                    for (var a = t.split("/").reverse(); a.length; ) {
                                        var i = a.pop();
                                        if (i) {
                                            var o = Qe.join2(e, i);
                                            try {
                                                rt.mkdir(o);
                                            } catch (e) {}
                                            e = o;
                                        }
                                    }
                                    return o;
                                },
                                createFile: function (e, t, n, r, a) {
                                    var i = Qe.join2("string" == typeof e ? e : rt.getPath(e), t),
                                        o = rt.getMode(r, a);
                                    return rt.create(i, o);
                                },
                                createDataFile: function (e, t, n, r, a, i) {
                                    var o = t ? Qe.join2("string" == typeof e ? e : rt.getPath(e), t) : e,
                                        s = rt.getMode(r, a),
                                        c = rt.create(o, s);
                                    if (n) {
                                        if ("string" == typeof n) {
                                            for (var l = new Array(n.length), u = 0, d = n.length; u < d; ++u) l[u] = n.charCodeAt(u);
                                            n = l;
                                        }
                                        rt.chmod(c, 146 | s);
                                        var m = rt.open(c, "w");
                                        rt.write(m, n, 0, n.length, 0, i), rt.close(m), rt.chmod(c, s);
                                    }
                                    return c;
                                },
                                createDevice: function (e, t, n, r) {
                                    var a = Qe.join2("string" == typeof e ? e : rt.getPath(e), t),
                                        i = rt.getMode(!!n, !!r);
                                    rt.createDevice.major || (rt.createDevice.major = 64);
                                    var o = rt.makedev(rt.createDevice.major++, 0);
                                    return (
                                        rt.registerDevice(o, {
                                            open: function (e) {
                                                e.seekable = !1;
                                            },
                                            close: function (e) {
                                                r && r.buffer && r.buffer.length && r(10);
                                            },
                                            read: function (e, t, r, a, i) {
                                                for (var o = 0, s = 0; s < a; s++) {
                                                    var c;
                                                    try {
                                                        c = n();
                                                    } catch (e) {
                                                        throw new rt.ErrnoError(29);
                                                    }
                                                    if (void 0 === c && 0 === o) throw new rt.ErrnoError(6);
                                                    if (null == c) break;
                                                    o++, (t[r + s] = c);
                                                }
                                                return o && (e.node.timestamp = Date.now()), o;
                                            },
                                            write: function (e, t, n, a, i) {
                                                for (var o = 0; o < a; o++)
                                                    try {
                                                        r(t[n + o]);
                                                    } catch (e) {
                                                        throw new rt.ErrnoError(29);
                                                    }
                                                return a && (e.node.timestamp = Date.now()), o;
                                            },
                                        }),
                                        rt.mkdev(a, i, o)
                                    );
                                },
                                createLink: function (e, t, n, r, a) {
                                    var i = Qe.join2("string" == typeof e ? e : rt.getPath(e), t);
                                    return rt.symlink(n, i);
                                },
                                forceLoadFile: function (e) {
                                    if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
                                    var t = !0;
                                    if ("undefined" != typeof XMLHttpRequest)
                                        throw new Error(
                                            "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
                                        );
                                    if (!g) throw new Error("Cannot load without read() or XMLHttpRequest.");
                                    try {
                                        (e.contents = It(g(e.url), !0)), (e.usedBytes = e.contents.length);
                                    } catch (e) {
                                        t = !1;
                                    }
                                    return t || Ze(29), t;
                                },
                                createLazyFile: function (e, t, n, r, a) {
                                    function i() {
                                        (this.lengthKnown = !1), (this.chunks = []);
                                    }
                                    if (
                                        ((i.prototype.get = function (e) {
                                            if (!(e > this.length - 1 || e < 0)) {
                                                var t = e % this.chunkSize,
                                                    n = (e / this.chunkSize) | 0;
                                                return this.getter(n)[t];
                                            }
                                        }),
                                        (i.prototype.setDataGetter = function (e) {
                                            this.getter = e;
                                        }),
                                        (i.prototype.cacheLength = function () {
                                            var e = new XMLHttpRequest();
                                            if ((e.open("HEAD", n, !1), e.send(null), !((e.status >= 200 && e.status < 300) || 304 === e.status))) throw new Error("Couldn't load " + n + ". Status: " + e.status);
                                            var t,
                                                r = Number(e.getResponseHeader("Content-length")),
                                                a = (t = e.getResponseHeader("Accept-Ranges")) && "bytes" === t,
                                                i = (t = e.getResponseHeader("Content-Encoding")) && "gzip" === t,
                                                o = 1048576;
                                            a || (o = r);
                                            var s = this;
                                            s.setDataGetter(function (e) {
                                                var t = e * o,
                                                    a = (e + 1) * o - 1;
                                                if (
                                                    ((a = Math.min(a, r - 1)),
                                                    void 0 === s.chunks[e] &&
                                                        (s.chunks[e] = (function (e, t) {
                                                            if (e > t) throw new Error("invalid range (" + e + ", " + t + ") or no bytes requested!");
                                                            if (t > r - 1) throw new Error("only " + r + " bytes available! programmer error!");
                                                            var a = new XMLHttpRequest();
                                                            if (
                                                                (a.open("GET", n, !1),
                                                                r !== o && a.setRequestHeader("Range", "bytes=" + e + "-" + t),
                                                                "undefined" != typeof Uint8Array && (a.responseType = "arraybuffer"),
                                                                a.overrideMimeType && a.overrideMimeType("text/plain; charset=x-user-defined"),
                                                                a.send(null),
                                                                !((a.status >= 200 && a.status < 300) || 304 === a.status))
                                                            )
                                                                throw new Error("Couldn't load " + n + ". Status: " + a.status);
                                                            return void 0 !== a.response ? new Uint8Array(a.response || []) : It(a.responseText || "", !0);
                                                        })(t, a)),
                                                    void 0 === s.chunks[e])
                                                )
                                                    throw new Error("doXHR failed!");
                                                return s.chunks[e];
                                            }),
                                                (!i && r) || ((o = r = 1), (r = this.getter(0).length), (o = r), console.log("LazyFiles on gzip forces download of the whole file when length is accessed")),
                                                (this._length = r),
                                                (this._chunkSize = o),
                                                (this.lengthKnown = !0);
                                        }),
                                        "undefined" != typeof XMLHttpRequest)
                                    ) {
                                        if (!p) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                                        var o = new i();
                                        Object.defineProperties(o, {
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
                                        var s = { isDevice: !1, contents: o };
                                    } else s = { isDevice: !1, url: n };
                                    var c = rt.createFile(e, t, s, r, a);
                                    s.contents ? (c.contents = s.contents) : s.url && ((c.contents = null), (c.url = s.url)),
                                        Object.defineProperties(c, {
                                            usedBytes: {
                                                get: function () {
                                                    return this.contents.length;
                                                },
                                            },
                                        });
                                    var l = {};
                                    return (
                                        Object.keys(c.stream_ops).forEach(function (e) {
                                            var t = c.stream_ops[e];
                                            l[e] = function () {
                                                if (!rt.forceLoadFile(c)) throw new rt.ErrnoError(29);
                                                return t.apply(null, arguments);
                                            };
                                        }),
                                        (l.read = function (e, t, n, r, a) {
                                            if (!rt.forceLoadFile(c)) throw new rt.ErrnoError(29);
                                            var i = e.node.contents;
                                            if (a >= i.length) return 0;
                                            var o = Math.min(i.length - a, r);
                                            if (i.slice) for (var s = 0; s < o; s++) t[n + s] = i[a + s];
                                            else for (s = 0; s < o; s++) t[n + s] = i.get(a + s);
                                            return o;
                                        }),
                                        (c.stream_ops = l),
                                        c
                                    );
                                },
                                createPreloadedFile: function (e, n, r, a, i, o, s, c, l, u) {
                                    Browser.init();
                                    var d = n ? et.resolve(Qe.join2(e, n)) : e;
                                    function m(r) {
                                        function m(t) {
                                            u && u(), c || rt.createDataFile(e, n, t, a, i, l), o && o(), Te();
                                        }
                                        var p = !1;
                                        t.preloadPlugins.forEach(function (e) {
                                            p ||
                                                (e.canHandle(d) &&
                                                    (e.handle(r, d, m, function () {
                                                        s && s(), Te();
                                                    }),
                                                    (p = !0)));
                                        }),
                                            p || m(r);
                                    }
                                    xe(),
                                        "string" == typeof r
                                            ? Browser.asyncLoad(
                                                  r,
                                                  function (e) {
                                                      m(e);
                                                  },
                                                  s
                                              )
                                            : m(r);
                                },
                                indexedDB: function () {
                                    return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                                },
                                DB_NAME: function () {
                                    return "EM_FS_" + window.location.pathname;
                                },
                                DB_VERSION: 20,
                                DB_STORE_NAME: "FILE_DATA",
                                saveFilesToDB: function (e, t, n) {
                                    (t = t || function () {}), (n = n || function () {});
                                    var r = rt.indexedDB();
                                    try {
                                        var a = r.open(rt.DB_NAME(), rt.DB_VERSION);
                                    } catch (e) {
                                        return n(e);
                                    }
                                    (a.onupgradeneeded = function () {
                                        console.log("creating db"), a.result.createObjectStore(rt.DB_STORE_NAME);
                                    }),
                                        (a.onsuccess = function () {
                                            var r = a.result.transaction([rt.DB_STORE_NAME], "readwrite"),
                                                i = r.objectStore(rt.DB_STORE_NAME),
                                                o = 0,
                                                s = 0,
                                                c = e.length;
                                            function l() {
                                                0 == s ? t() : n();
                                            }
                                            e.forEach(function (e) {
                                                var t = i.put(rt.analyzePath(e).object.contents, e);
                                                (t.onsuccess = function () {
                                                    ++o + s == c && l();
                                                }),
                                                    (t.onerror = function () {
                                                        s++, o + s == c && l();
                                                    });
                                            }),
                                                (r.onerror = n);
                                        }),
                                        (a.onerror = n);
                                },
                                loadFilesFromDB: function (e, t, n) {
                                    (t = t || function () {}), (n = n || function () {});
                                    var r = rt.indexedDB();
                                    try {
                                        var a = r.open(rt.DB_NAME(), rt.DB_VERSION);
                                    } catch (e) {
                                        return n(e);
                                    }
                                    (a.onupgradeneeded = n),
                                        (a.onsuccess = function () {
                                            var r = a.result;
                                            try {
                                                var i = r.transaction([rt.DB_STORE_NAME], "readonly");
                                            } catch (e) {
                                                return void n(e);
                                            }
                                            var o = i.objectStore(rt.DB_STORE_NAME),
                                                s = 0,
                                                c = 0,
                                                l = e.length;
                                            function u() {
                                                0 == c ? t() : n();
                                            }
                                            e.forEach(function (e) {
                                                var t = o.get(e);
                                                (t.onsuccess = function () {
                                                    rt.analyzePath(e).exists && rt.unlink(e), rt.createDataFile(Qe.dirname(e), Qe.basename(e), t.result, !0, !0, !0), ++s + c == l && u();
                                                }),
                                                    (t.onerror = function () {
                                                        c++, s + c == l && u();
                                                    });
                                            }),
                                                (i.onerror = n);
                                        }),
                                        (a.onerror = n);
                                },
                            },
                            at = {
                                DEFAULT_POLLMASK: 5,
                                mappings: {},
                                umask: 511,
                                calculateAt: function (e, t) {
                                    if ("/" !== t[0]) {
                                        var n;
                                        if (-100 === e) n = rt.cwd();
                                        else {
                                            var r = rt.getStream(e);
                                            if (!r) throw new rt.ErrnoError(8);
                                            n = r.path;
                                        }
                                        t = Qe.join2(n, t);
                                    }
                                    return t;
                                },
                                doStat: function (e, t, n) {
                                    try {
                                        var r = e(t);
                                    } catch (e) {
                                        if (e && e.node && Qe.normalize(t) !== Qe.normalize(rt.getPath(e.node))) return -54;
                                        throw e;
                                    }
                                    return (
                                        (Z[n >> 2] = r.dev),
                                        (Z[(n + 4) >> 2] = 0),
                                        (Z[(n + 8) >> 2] = r.ino),
                                        (Z[(n + 12) >> 2] = r.mode),
                                        (Z[(n + 16) >> 2] = r.nlink),
                                        (Z[(n + 20) >> 2] = r.uid),
                                        (Z[(n + 24) >> 2] = r.gid),
                                        (Z[(n + 28) >> 2] = r.rdev),
                                        (Z[(n + 32) >> 2] = 0),
                                        (Be = [r.size >>> 0, ((Ie = r.size), +ve(Ie) >= 1 ? (Ie > 0 ? (0 | Ee(+Ae(Ie / 4294967296), 4294967295)) >>> 0 : ~~+we((Ie - +(~~Ie >>> 0)) / 4294967296) >>> 0) : 0)]),
                                        (Z[(n + 40) >> 2] = Be[0]),
                                        (Z[(n + 44) >> 2] = Be[1]),
                                        (Z[(n + 48) >> 2] = 4096),
                                        (Z[(n + 52) >> 2] = r.blocks),
                                        (Z[(n + 56) >> 2] = (r.atime.getTime() / 1e3) | 0),
                                        (Z[(n + 60) >> 2] = 0),
                                        (Z[(n + 64) >> 2] = (r.mtime.getTime() / 1e3) | 0),
                                        (Z[(n + 68) >> 2] = 0),
                                        (Z[(n + 72) >> 2] = (r.ctime.getTime() / 1e3) | 0),
                                        (Z[(n + 76) >> 2] = 0),
                                        (Be = [r.ino >>> 0, ((Ie = r.ino), +ve(Ie) >= 1 ? (Ie > 0 ? (0 | Ee(+Ae(Ie / 4294967296), 4294967295)) >>> 0 : ~~+we((Ie - +(~~Ie >>> 0)) / 4294967296) >>> 0) : 0)]),
                                        (Z[(n + 80) >> 2] = Be[0]),
                                        (Z[(n + 84) >> 2] = Be[1]),
                                        0
                                    );
                                },
                                doMsync: function (e, t, n, r) {
                                    var a = new Uint8Array(X.subarray(e, e + n));
                                    rt.msync(t, a, 0, n, r);
                                },
                                doMkdir: function (e, t) {
                                    return "/" === (e = Qe.normalize(e))[e.length - 1] && (e = e.substr(0, e.length - 1)), rt.mkdir(e, t, 0), 0;
                                },
                                doMknod: function (e, t, n) {
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
                                    return rt.mknod(e, t, n), 0;
                                },
                                doReadlink: function (e, t, n) {
                                    if (n <= 0) return -28;
                                    var r = rt.readlink(e),
                                        a = Math.min(n, U(r)),
                                        i = $[t + a];
                                    return G(r, t, n + 1), ($[t + a] = i), a;
                                },
                                doAccess: function (e, t) {
                                    if (-8 & t) return -28;
                                    var n;
                                    if (!(n = rt.lookupPath(e, { follow: !0 }).node)) return -44;
                                    var r = "";
                                    return 4 & t && (r += "r"), 2 & t && (r += "w"), 1 & t && (r += "x"), r && rt.nodePermissions(n, r) ? -2 : 0;
                                },
                                doDup: function (e, t, n) {
                                    var r = rt.getStream(n);
                                    return r && rt.close(r), rt.open(e, t, 0, n, n).fd;
                                },
                                doReadv: function (e, t, n, r) {
                                    for (var a = 0, i = 0; i < n; i++) {
                                        var o = Z[(t + 8 * i) >> 2],
                                            s = Z[(t + (8 * i + 4)) >> 2],
                                            c = rt.read(e, $, o, s, r);
                                        if (c < 0) return -1;
                                        if (((a += c), c < s)) break;
                                    }
                                    return a;
                                },
                                doWritev: function (e, t, n, r) {
                                    for (var a = 0, i = 0; i < n; i++) {
                                        var o = Z[(t + 8 * i) >> 2],
                                            s = Z[(t + (8 * i + 4)) >> 2],
                                            c = rt.write(e, $, o, s, r);
                                        if (c < 0) return -1;
                                        a += c;
                                    }
                                    return a;
                                },
                                varargs: 0,
                                get: function (e) {
                                    return (at.varargs += 4), Z[(at.varargs - 4) >> 2];
                                },
                                getStr: function () {
                                    return V(at.get());
                                },
                                getStreamFromFD: function (e) {
                                    void 0 === e && (e = at.get());
                                    var t = rt.getStream(e);
                                    if (!t) throw new rt.ErrnoError(8);
                                    return t;
                                },
                                get64: function () {
                                    var e = at.get();
                                    return at.get(), e;
                                },
                                getZero: function () {
                                    at.get();
                                },
                            };
                        function it(e, t) {
                            if (-1 === e || 0 === t) return -28;
                            var n = at.mappings[e];
                            if (!n) return 0;
                            if (t === n.len) {
                                var r = rt.getStream(n.fd);
                                at.doMsync(e, r, t, n.flags), rt.munmap(r), (at.mappings[e] = null), n.allocated && Pt(n.malloc);
                            }
                            return 0;
                        }
                        function ot(e, t) {
                            at.varargs = t;
                            try {
                                return it(at.get(), at.get());
                            } catch (e) {
                                return (void 0 !== rt && e instanceof rt.ErrnoError) || Me(e), -e.errno;
                            }
                        }
                        function st() {}
                        function ct() {
                            Me();
                        }
                        function lt() {
                            return $.length;
                        }
                        function ut() {
                            return 38480;
                        }
                        function dt(e, t, n) {
                            X.set(X.subarray(t, t + n), e);
                        }
                        function mt(e) {
                            try {
                                return D.grow((e - Y.byteLength + 65535) >> 16), ne(D.buffer), 1;
                            } catch (e) {}
                        }
                        function pt(e) {
                            var t = lt();
                            if (e > 2147418112) return !1;
                            for (var n = Math.max(t, 16777216); n < e; ) n = n <= 536870912 ? te(2 * n, 65536) : Math.min(te((3 * n + 2147483648) / 4, 65536), 2147418112);
                            return !!mt(n);
                        }
                        var ft = {};
                        function ht() {
                            if (!ht.strings) {
                                var e = {
                                    USER: "web_user",
                                    LOGNAME: "web_user",
                                    PATH: "/",
                                    PWD: "/",
                                    HOME: "/home/web_user",
                                    LANG: (("object" === ("undefined" == typeof navigator ? "undefined" : i(navigator)) && navigator.languages && navigator.languages[0]) || "C").replace("-", "_") + ".UTF-8",
                                    _: u,
                                };
                                for (var t in ft) e[t] = ft[t];
                                var n = [];
                                for (var t in e) n.push(t + "=" + e[t]);
                                ht.strings = n;
                            }
                            return ht.strings;
                        }
                        function yt(e, t) {
                            var n = ht(),
                                r = 0;
                            return (
                                n.forEach(function (n, a) {
                                    var i = t + r;
                                    (Z[(e + 4 * a) >> 2] = i), q(n, i), (r += n.length + 1);
                                }),
                                0
                            );
                        }
                        function gt(e, t) {
                            var n = ht();
                            Z[e >> 2] = n.length;
                            var r = 0;
                            return (
                                n.forEach(function (e) {
                                    r += e.length + 1;
                                }),
                                (Z[t >> 2] = r),
                                0
                            );
                        }
                        function bt(e) {
                            Wt(e);
                        }
                        function vt(e) {
                            try {
                                var t = at.getStreamFromFD(e);
                                return rt.close(t), 0;
                            } catch (e) {
                                return (void 0 !== rt && e instanceof rt.ErrnoError) || Me(e), e.errno;
                            }
                        }
                        function wt(e, t, n, r) {
                            try {
                                var a = at.getStreamFromFD(e),
                                    i = at.doReadv(a, t, n);
                                return (Z[r >> 2] = i), 0;
                            } catch (e) {
                                return (void 0 !== rt && e instanceof rt.ErrnoError) || Me(e), e.errno;
                            }
                        }
                        function At(e, t, n, r, a) {
                            try {
                                var i = at.getStreamFromFD(e),
                                    o = 4294967296 * n + (t >>> 0);
                                return o <= -9007199254740992 || o >= 9007199254740992
                                    ? -61
                                    : (rt.llseek(i, o, r),
                                      (Be = [i.position >>> 0, ((Ie = i.position), +ve(Ie) >= 1 ? (Ie > 0 ? (0 | Ee(+Ae(Ie / 4294967296), 4294967295)) >>> 0 : ~~+we((Ie - +(~~Ie >>> 0)) / 4294967296) >>> 0) : 0)]),
                                      (Z[a >> 2] = Be[0]),
                                      (Z[(a + 4) >> 2] = Be[1]),
                                      i.getdents && 0 === o && 0 === r && (i.getdents = null),
                                      0);
                            } catch (e) {
                                return (void 0 !== rt && e instanceof rt.ErrnoError) || Me(e), e.errno;
                            }
                        }
                        function Et(e, t, n, r) {
                            try {
                                var a = at.getStreamFromFD(e),
                                    i = at.doWritev(a, t, n);
                                return (Z[r >> 2] = i), 0;
                            } catch (e) {
                                return (void 0 !== rt && e instanceof rt.ErrnoError) || Me(e), e.errno;
                            }
                        }
                        function kt(e) {
                            F(0 | e);
                        }
                        function St(e) {
                            return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
                        }
                        function _t(e, t) {
                            for (var n = 0, r = 0; r <= t; n += e[r++]);
                            return n;
                        }
                        var xt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                            Tt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                        function Mt(e, t) {
                            for (var n = new Date(e.getTime()); t > 0; ) {
                                var r = St(n.getFullYear()),
                                    a = n.getMonth(),
                                    i = (r ? xt : Tt)[a];
                                if (!(t > i - n.getDate())) return n.setDate(n.getDate() + t), n;
                                (t -= i - n.getDate() + 1), n.setDate(1), a < 11 ? n.setMonth(a + 1) : (n.setMonth(0), n.setFullYear(n.getFullYear() + 1));
                            }
                            return n;
                        }
                        function Dt(e, t, n, r) {
                            var a = Z[(r + 40) >> 2],
                                i = {
                                    tm_sec: Z[r >> 2],
                                    tm_min: Z[(r + 4) >> 2],
                                    tm_hour: Z[(r + 8) >> 2],
                                    tm_mday: Z[(r + 12) >> 2],
                                    tm_mon: Z[(r + 16) >> 2],
                                    tm_year: Z[(r + 20) >> 2],
                                    tm_wday: Z[(r + 24) >> 2],
                                    tm_yday: Z[(r + 28) >> 2],
                                    tm_isdst: Z[(r + 32) >> 2],
                                    tm_gmtoff: Z[(r + 36) >> 2],
                                    tm_zone: a ? V(a) : "",
                                },
                                o = V(n),
                                s = {
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
                            for (var c in s) o = o.replace(new RegExp(c, "g"), s[c]);
                            var l = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                u = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                            function d(e, t, n) {
                                for (var r = "number" == typeof e ? e.toString() : e || ""; r.length < t; ) r = n[0] + r;
                                return r;
                            }
                            function m(e, t) {
                                return d(e, t, "0");
                            }
                            function p(e, t) {
                                function n(e) {
                                    return e < 0 ? -1 : e > 0 ? 1 : 0;
                                }
                                var r;
                                return 0 === (r = n(e.getFullYear() - t.getFullYear())) && 0 === (r = n(e.getMonth() - t.getMonth())) && (r = n(e.getDate() - t.getDate())), r;
                            }
                            function f(e) {
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
                                var t = Mt(new Date(e.tm_year + 1900, 0, 1), e.tm_yday),
                                    n = new Date(t.getFullYear(), 0, 4),
                                    r = new Date(t.getFullYear() + 1, 0, 4),
                                    a = f(n),
                                    i = f(r);
                                return p(a, t) <= 0 ? (p(i, t) <= 0 ? t.getFullYear() + 1 : t.getFullYear()) : t.getFullYear() - 1;
                            }
                            var y = {
                                "%a": function (e) {
                                    return l[e.tm_wday].substring(0, 3);
                                },
                                "%A": function (e) {
                                    return l[e.tm_wday];
                                },
                                "%b": function (e) {
                                    return u[e.tm_mon].substring(0, 3);
                                },
                                "%B": function (e) {
                                    return u[e.tm_mon];
                                },
                                "%C": function (e) {
                                    return m(((e.tm_year + 1900) / 100) | 0, 2);
                                },
                                "%d": function (e) {
                                    return m(e.tm_mday, 2);
                                },
                                "%e": function (e) {
                                    return d(e.tm_mday, 2, " ");
                                },
                                "%g": function (e) {
                                    return h(e).toString().substring(2);
                                },
                                "%G": function (e) {
                                    return h(e);
                                },
                                "%H": function (e) {
                                    return m(e.tm_hour, 2);
                                },
                                "%I": function (e) {
                                    var t = e.tm_hour;
                                    return 0 == t ? (t = 12) : t > 12 && (t -= 12), m(t, 2);
                                },
                                "%j": function (e) {
                                    return m(e.tm_mday + _t(St(e.tm_year + 1900) ? xt : Tt, e.tm_mon - 1), 3);
                                },
                                "%m": function (e) {
                                    return m(e.tm_mon + 1, 2);
                                },
                                "%M": function (e) {
                                    return m(e.tm_min, 2);
                                },
                                "%n": function () {
                                    return "\n";
                                },
                                "%p": function (e) {
                                    return e.tm_hour >= 0 && e.tm_hour < 12 ? "AM" : "PM";
                                },
                                "%S": function (e) {
                                    return m(e.tm_sec, 2);
                                },
                                "%t": function () {
                                    return "\t";
                                },
                                "%u": function (e) {
                                    return e.tm_wday || 7;
                                },
                                "%U": function (e) {
                                    var t = new Date(e.tm_year + 1900, 0, 1),
                                        n = 0 === t.getDay() ? t : Mt(t, 7 - t.getDay()),
                                        r = new Date(e.tm_year + 1900, e.tm_mon, e.tm_mday);
                                    if (p(n, r) < 0) {
                                        var a = _t(St(r.getFullYear()) ? xt : Tt, r.getMonth() - 1) - 31,
                                            i = 31 - n.getDate() + a + r.getDate();
                                        return m(Math.ceil(i / 7), 2);
                                    }
                                    return 0 === p(n, t) ? "01" : "00";
                                },
                                "%V": function (e) {
                                    var t,
                                        n = new Date(e.tm_year + 1900, 0, 4),
                                        r = new Date(e.tm_year + 1901, 0, 4),
                                        a = f(n),
                                        i = f(r),
                                        o = Mt(new Date(e.tm_year + 1900, 0, 1), e.tm_yday);
                                    return p(o, a) < 0 ? "53" : p(i, o) <= 0 ? "01" : ((t = a.getFullYear() < e.tm_year + 1900 ? e.tm_yday + 32 - a.getDate() : e.tm_yday + 1 - a.getDate()), m(Math.ceil(t / 7), 2));
                                },
                                "%w": function (e) {
                                    return e.tm_wday;
                                },
                                "%W": function (e) {
                                    var t = new Date(e.tm_year, 0, 1),
                                        n = 1 === t.getDay() ? t : Mt(t, 0 === t.getDay() ? 1 : 7 - t.getDay() + 1),
                                        r = new Date(e.tm_year + 1900, e.tm_mon, e.tm_mday);
                                    if (p(n, r) < 0) {
                                        var a = _t(St(r.getFullYear()) ? xt : Tt, r.getMonth() - 1) - 31,
                                            i = 31 - n.getDate() + a + r.getDate();
                                        return m(Math.ceil(i / 7), 2);
                                    }
                                    return 0 === p(n, t) ? "01" : "00";
                                },
                                "%y": function (e) {
                                    return (e.tm_year + 1900).toString().substring(2);
                                },
                                "%Y": function (e) {
                                    return e.tm_year + 1900;
                                },
                                "%z": function (e) {
                                    var t = e.tm_gmtoff,
                                        n = t >= 0;
                                    return (t = ((t = Math.abs(t) / 60) / 60) * 100 + (t % 60)), (n ? "+" : "-") + String("0000" + t).slice(-4);
                                },
                                "%Z": function (e) {
                                    return e.tm_zone;
                                },
                                "%%": function () {
                                    return "%";
                                },
                            };
                            for (var c in y) o.indexOf(c) >= 0 && (o = o.replace(new RegExp(c, "g"), y[c](i)));
                            var g = It(o, !1);
                            return g.length > t ? 0 : (W(g, e), g.length - 1);
                        }
                        function Ft(e, t, n, r) {
                            return Dt(e, t, n, r);
                        }
                        function It(e, t, n) {
                            var r = n > 0 ? n : U(e) + 1,
                                a = new Array(r),
                                i = H(e, a, 0, a.length);
                            return t && (a.length = i), a;
                        }
                        rt.staticInit();
                        var Bt = {
                                __assert_fail: Ue,
                                __cxa_allocate_exception: We,
                                __cxa_atexit: Ye,
                                __cxa_throw: Xe,
                                __lock: Je,
                                __map_file: Ke,
                                __syscall91: ot,
                                __unlock: st,
                                abort: ct,
                                emscripten_asm_const_iii: Le,
                                emscripten_get_sbrk_ptr: ut,
                                emscripten_memcpy_big: dt,
                                emscripten_resize_heap: pt,
                                environ_get: yt,
                                environ_sizes_get: gt,
                                exit: bt,
                                fd_close: vt,
                                fd_read: wt,
                                fd_seek: At,
                                fd_write: Et,
                                memory: D,
                                setTempRet0: kt,
                                strftime_l: Ft,
                                table: C,
                            },
                            Ct = Oe();
                        t.asm = Ct;
                        var Nt,
                            Rt = (t.___wasm_call_ctors = function () {
                                return t.asm.__wasm_call_ctors.apply(null, arguments);
                            }),
                            Ot =
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
                            Pt = (t._free = function () {
                                return t.asm.free.apply(null, arguments);
                            }),
                            zt =
                                ((t.___errno_location = function () {
                                    return t.asm.__errno_location.apply(null, arguments);
                                }),
                                (t._setThrew = function () {
                                    return t.asm.setThrew.apply(null, arguments);
                                }),
                                (t.__ZSt18uncaught_exceptionv = function () {
                                    return t.asm._ZSt18uncaught_exceptionv.apply(null, arguments);
                                })),
                            jt = (t.stackSave = function () {
                                return t.asm.stackSave.apply(null, arguments);
                            }),
                            Lt = (t.stackAlloc = function () {
                                return t.asm.stackAlloc.apply(null, arguments);
                            }),
                            Vt = (t.stackRestore = function () {
                                return t.asm.stackRestore.apply(null, arguments);
                            });
                        function Ht(e) {
                            (this.name = "ExitStatus"), (this.message = "Program terminated with exit(" + e + ")"), (this.status = e);
                        }
                        function Gt(e) {
                            var n = t._main;
                            try {
                                Wt(n(0, 0), !0);
                            } catch (e) {
                                if (e instanceof Ht) return;
                                if ("SimulateInfiniteLoop" == e) return void (M = !0);
                                var r = e;
                                e && "object" === i(e) && e.stack && (r = [e, e.stack]), S("exception thrown: " + r), d(1, e);
                            }
                        }
                        function Ut(e) {
                            function n() {
                                Nt || ((Nt = !0), N || (pe(), fe(), t.onRuntimeInitialized && t.onRuntimeInitialized(), qt && Gt(), ye()));
                            }
                            (e = e || l),
                                ke > 0 ||
                                    (me(),
                                    ke > 0 ||
                                        (t.setStatus
                                            ? (t.setStatus("Running..."),
                                              setTimeout(function () {
                                                  setTimeout(function () {
                                                      t.setStatus("");
                                                  }, 1),
                                                      n();
                                              }, 1))
                                            : n()));
                        }
                        function Wt(e, n) {
                            (n && M && 0 === e) || (M || ((N = !0), he(), t.onExit && t.onExit(e)), d(e, new Ht(e)));
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
                            (t.ccall = P),
                            (t.cwrap = z),
                            (t.setValue = I),
                            (t.getValue = B),
                            (t.then = function (e) {
                                if (Nt) e(t);
                                else {
                                    var n = t.onRuntimeInitialized;
                                    t.onRuntimeInitialized = function () {
                                        n && n(), e(t);
                                    };
                                }
                                return t;
                            }),
                            (_e = function e() {
                                Nt || Ut(), Nt || (_e = e);
                            }),
                            (t.run = Ut),
                            t.preInit)
                        )
                            for ("function" == typeof t.preInit && (t.preInit = [t.preInit]); t.preInit.length > 0; ) t.preInit.pop()();
                        var qt = !0;
                        return t.noInitialRun && (qt = !1), (M = !0), Ut(), t;
                    });
            t.a = s;
        }.call(this, n(8), "/", n(3).Buffer));
    },
    23: function (e, t, n) {
        var r = window.popmotion,
            a = r.easing,
            i = r.keyframes,
            o = r.value,
            s = r.tween,
            c = (r.action, []),
            l = function () {
                return /Android/i.test(navigator.userAgent) || /iPhone|iPad|iPod/i.test(navigator.userAgent);
            },
            u = new MobileDetect(window.navigator.userAgent).os(),
            d = n(7),
            m = d.addInteraction,
            p = d.rgbToHex,
            f = d.doPause,
            h = d.switchOffSceneLighting,
            y = d.doSceneClearup,
            g = d.switchOnSceneLighting,
            b = d.removeClickableInScene,
            v = d.setTextMeshWidth,
            w = d.addSceneSound,
            A = d.addClickableInScene,
            E = d.resetToStart,
            k = d.getAnimTimeScale,
            S = n(13),
            _ = S.setScale,
            x = S.setSides,
            T = S.setColor,
            M = S.setGLTFColor,
            D = S.setRotation;
        function F(e, t, n) {
            -1 === nodeAddedToProgress.indexOf(e) &&
                (nodeAddedToProgress.push(e),
                createdObjectCount++,
                (loadingProgressStep = 100 / t),
                $("#loadingstatus").html("Created ".concat(createdObjectCount, " of ").concat(t, " elements")),
                (loadingProgress += loadingProgressStep),
                loadingProgress > 100 && (loadingProgress = 100),
                n(loadingProgress),
                createdObjectCount == t &&
                    noProblemsFound &&
                    loadingProgress > 98 &&
                    (startSceneCalled ||
                        ((startSceneCalled = !0),
                        "undefined" != typeof DeviceOrientationEvent && DeviceOrientationEvent.requestPermission
                            ? (function e() {
                                  gyroPresent
                                      ? P()
                                      : setTimeout(function () {
                                            e();
                                        }, 200);
                              })()
                            : P())));
        }
        (window.nodeAddedToProgress = []), (window.createdObjectCount = 0), (window.loadingProgress = 0), (window.loadingProgressStep = 0);
        var I = !1,
            B = !1,
            C = !1,
            N = n(7).getUrlParameter,
            R = n(4).sharedConstants,
            O = N("a");
        function P() {
            $("#loadingstatus").fadeOut(),
                clearInterval(loadingTimer),
                isvr
                    ? ((vrmode.style.display = "block"),
                      (vrrotmessage = !0),
                      document.getElementById("entervrbut").addEventListener("click", function () {
                          if (!B) {
                              document.querySelector("a-scene").setAttribute("cursor", "fuse: true; rayOrigin: entity; fuseTimeout: 2500;");
                              var e = document.getElementById("camera");
                              (entityCR = document.createElement("a-entity")),
                                  entityCR.setAttribute("cursor", ""),
                                  entityCR.setAttribute("raycaster", "objects: .clickable"),
                                  entityCR.setAttribute("position", "0 0 -1.0"),
                                  entityCR.setAttribute("geometry", "primitive: ring; radiusInner: 0.02; radiusOuter: 0.025"),
                                  entityCR.setAttribute("material", "color: orange; shader: flat"),
                                  entityCR.setAttribute("animation__fusing", "property: scale; startEvents: fusing; easing: easeInCubic; dur: 2100; from: 1 1 1; to: 0.1 0.1 0.1"),
                                  entityCR.setAttribute("animation__click", "property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1"),
                                  entityCR.setAttribute("animation__mouseleave", "property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1"),
                                  e.appendChild(entityCR);
                          }
                          document.querySelector("a-scene").enterVR(),
                              (B = !0),
                              (vrmode.style.display = "none"),
                              (vrrotmessage = !1),
                              setTimeout(function () {
                                  j();
                              }, 800);
                      }))
                    : setTimeout(function () {
                          textElementsArray.length > 0
                              ? (textElementsArray.map(function (e) {
                                    v(e[0], e[1], e[2]);
                                }),
                                (function e() {
                                    var t = 0;
                                    if (
                                        (textElementsArray.map(function (e) {
                                            e[0].fixedWidth && t++;
                                        }),
                                        t === textElementsArray.length)
                                    ) {
                                        $("#splash").fadeOut(200),
                                            (document.getElementById("messagewrapper").style.display = "none"),
                                            sceneRids.map(function (e, t) {
                                                t !== Number(scenenum) && (document.getElementById(e).setAttribute("visible", "false"), b(document.getElementById(e)));
                                            }),
                                            (document.getElementById("photoModeContainer").style.display = "block"),
                                            C
                                                ? ("lost_marker" === R.trackingState
                                                      ? z()
                                                      : "have_marker" === R.trackingState &&
                                                        setTimeout(function () {
                                                            j();
                                                        }, 500),
                                                  setInterval(function () {
                                                      H();
                                                  }, 1e3))
                                                : setTimeout(function () {
                                                      j();
                                                  }, 200);
                                    } else
                                        setTimeout(function () {
                                            e();
                                        }, 50);
                                })())
                              : ($("#splash").fadeOut(200),
                                (document.getElementById("messagewrapper").style.display = "none"),
                                sceneRids.map(function (e, t) {
                                    t !== Number(scenenum) && (document.getElementById(e).setAttribute("visible", "false"), b(document.getElementById(e)));
                                }),
                                (document.getElementById("photoModeContainer").style.display = "block"),
                                C
                                    ? ("lost_marker" === R.trackingState
                                          ? setTimeout(function () {
                                                z();
                                            }, 500)
                                          : "have_marker" === R.trackingState &&
                                            setTimeout(function () {
                                                j();
                                            }, 400),
                                      setInterval(function () {
                                          H();
                                      }, 1e3))
                                    : setTimeout(function () {
                                          j();
                                      }, 200));
                      }, 1e3);
        }
        function z() {
            (L = !0),
                $("#photoModeContainer").hide(),
                (document.getElementById("trackingInstruc").style.display = "inline-block"),
                $("#trackInstrucBG").fadeTo("slow", 0.4),
                setTimeout(function () {
                    $("#trackingImg").fadeTo("slow", 0.9);
                }, 400),
                $("#markerFrame").fadeTo("fast", 1),
                $("#markerFrame").animate({ top: "10vh" }, 800),
                $("#markerFrame").animate({ width: "34vh" }, 400),
                $("#markerFrame").animate({ width: "37vh" }, 300),
                $("#markerFrame").animate({ width: "36vh" }, 500),
                setTimeout(function () {
                    $("#trackHintTxt").fadeTo("slow", 0.8);
                }, 800);
        }
        function j() {
            animeTransArray.length > 0 &&
                (function (e) {
                    e.map(function (e, t) {
                        document.getElementById(e[0]).inScene === Number(scenenum) &&
                            (Timeout.set(
                                "".concat(e[0], "_trans").concat(t),
                                function () {
                                    var t = document.getElementById(e[0]);
                                    if ("x" === e[7])
                                        var n = o(e[1] / 100, function (e) {
                                            return (t.object3D.position.x = e);
                                        });
                                    if ("y" === e[7])
                                        n = o(e[1] / 100, function (e) {
                                            return (t.object3D.position.y = e);
                                        });
                                    if ("z" === e[7])
                                        n = o(e[1] / 100, function (e) {
                                            return (t.object3D.position.z = e);
                                        });
                                    var r = s({ from: e[1] / 100, to: e[2] / 100, duration: e[3], ease: e[4], loop: e[5] }).start(n);
                                    runningAniminations.push(r);
                                },
                                e[6]
                            ),
                            animTimeouts.push("".concat(e[0], "_trans").concat(t)));
                    });
                })(animeTransArray),
                animeRotArray.length > 0 &&
                    (function (e) {
                        e.map(function (e, t) {
                            document.getElementById(e[0]).inScene === Number(scenenum) &&
                                (Timeout.set(
                                    "".concat(e[0], "_rot").concat(t),
                                    function () {
                                        var t = document.getElementById(e[0]);
                                        if ("x" === e[7])
                                            var n = o(THREE.Math.degToRad(e[1]), function (e) {
                                                return (t.object3D.rotation.x = e);
                                            });
                                        if ("y" === e[7])
                                            n = o(THREE.Math.degToRad(e[1]), function (e) {
                                                return (t.object3D.rotation.y = e);
                                            });
                                        if ("z" === e[7])
                                            n = o(THREE.Math.degToRad(e[1]), function (e) {
                                                return (t.object3D.rotation.z = e);
                                            });
                                        var r = s({ from: THREE.Math.degToRad(e[1]), to: THREE.Math.degToRad(e[2]), duration: e[3], ease: e[4], loop: e[5] }).start(n);
                                        runningAniminations.push(r);
                                    },
                                    e[6]
                                ),
                                animTimeouts.push("".concat(e[0], "_rot").concat(t)));
                        });
                    })(animeRotArray),
                animeScaleArray.length > 0 &&
                    (function (e) {
                        e.map(function (e, t) {
                            document.getElementById(e[0]).inScene === Number(scenenum) &&
                                (Timeout.set(
                                    "".concat(e[0], "_scale").concat(t),
                                    function () {
                                        var t = document.getElementById(e[0]);
                                        if ("x" === e[7])
                                            var n = o(e[1], function (e) {
                                                return (t.object3D.scale.x = e);
                                            });
                                        if ("y" === e[7])
                                            n = o(e[1], function (e) {
                                                return (t.object3D.scale.y = e);
                                            });
                                        if ("z" === e[7])
                                            n = o(e[1], function (e) {
                                                return (t.object3D.scale.z = e);
                                            });
                                        var r = s({ from: e[1], to: e[2], duration: e[3], ease: e[4], loop: e[5] }).start(n);
                                        runningAniminations.push(r);
                                    },
                                    e[6]
                                ),
                                animTimeouts.push("".concat(e[0], "_scale").concat(t)));
                        });
                    })(animeScaleArray),
                animeOpacityArray.length > 0 &&
                    (function (e) {
                        e.map(function (e, t) {
                            if (document.getElementById(e[0]).inScene === Number(scenenum)) {
                                var n = document.getElementById(e[0]);
                                if (n.isTransform || "RichText" === n.entityName || "Video" === n.entityName) {
                                    var r = n.childNodes;
                                    Array.from(r).map(function (n, r) {
                                        Timeout.set(
                                            "".concat(e[0], "_opac").concat(t, "_").concat(r),
                                            function () {
                                                if (n.isMesh)
                                                    var t = o(e[1], function (e) {
                                                        return document.getElementById(n.id).setAttribute("modelopacity", e);
                                                    });
                                                else
                                                    t = o(e[1], function (e) {
                                                        return document.getElementById(n.id).setAttribute("material", "opacity: ".concat(e));
                                                    });
                                                var r = s({ from: e[1], to: e[2], duration: e[3], ease: e[4], loop: e[5] }).start(t);
                                                runningAniminations.push(r);
                                            },
                                            e[6]
                                        ),
                                            animTimeouts.push("".concat(e[0], "_opac").concat(t, "_").concat(r));
                                    });
                                } else
                                    Timeout.set(
                                        "".concat(e[0], "_opac").concat(t),
                                        function () {
                                            if (e[7])
                                                var t = o(e[1], function (e) {
                                                    return n.setAttribute("modelopacity", e);
                                                });
                                            else
                                                t = o(e[1], function (e) {
                                                    return n.setAttribute("material", "opacity: ".concat(e));
                                                });
                                            var r = s({ from: e[1], to: e[2], duration: e[3], ease: e[4], loop: e[5] }).start(t);
                                            runningAniminations.push(r);
                                        },
                                        e[6]
                                    ),
                                        animTimeouts.push("".concat(e[0], "_opac").concat(t));
                            }
                        });
                    })(animeOpacityArray),
                animeTransValuesArray.length > 0 &&
                    animeTransValuesArray.map(function (e, t) {
                        if (document.getElementById(e[0]).inScene === Number(scenenum)) {
                            var n = document.getElementById(e[0]),
                                r = e[3][e[3].length - 1] / 100,
                                s = [],
                                c = [],
                                l = [];
                            e[3].map(function (t, n) {
                                n < e[3].length - 1 ? s.push(t / r / 100) : s.push(1);
                            }),
                                s.unshift(0),
                                s.map(function () {
                                    c.push(a.linear);
                                }),
                                e[2].map(function (t, n) {
                                    0 === n ? (l.push(e[1]).toFixed(4), l.push(t).toFixed(4)) : l.push(t).toFixed(4);
                                }),
                                Timeout.set(
                                    "".concat(e[0], "_transValues").concat(t),
                                    function () {
                                        switch (e[6]) {
                                            case "x":
                                                var t = o(e[1].toFixed(4), function (e) {
                                                        return (n.object3D.position.x = e);
                                                    }),
                                                    r = i({ values: l, duration: e[3][e[3].length - 1], easings: c, ease: e[5], loop: e[4], times: s }).start(t);
                                                runningAniminations.push(r);
                                                break;
                                            case "y":
                                                var a = o(e[1].toFixed(4), function (e) {
                                                    return (n.object3D.position.y = e);
                                                });
                                                (r = i({ values: l, duration: e[3][e[3].length - 1], easings: c, ease: e[5], loop: e[4], times: s }).start(a)), runningAniminations.push(r);
                                                break;
                                            case "z":
                                                var u = o(e[1].toFixed(4), function (e) {
                                                    return (n.object3D.position.z = e);
                                                });
                                                (r = i({ values: l, duration: e[3][e[3].length - 1], easings: c, ease: e[5], loop: e[4], times: s }).start(u)), runningAniminations.push(r);
                                        }
                                    },
                                    e[7]
                                ),
                                animTimeouts.push("".concat(e[0], "_transValues").concat(t));
                        }
                    }),
                animeRotValuesArray.length > 0 &&
                    (function (e) {
                        e.map(function (e, t) {
                            if (document.getElementById(e[0]).inScene === Number(scenenum)) {
                                var n = document.getElementById(e[0]),
                                    r = e[3][e[3].length - 1] / 100,
                                    s = [],
                                    c = [],
                                    l = [];
                                switch (
                                    (e[3].map(function (t, n) {
                                        n < e[3].length - 1 ? s.push(t / r / 100) : s.push(1);
                                    }),
                                    s.unshift(0),
                                    s.map(function (e) {
                                        c.push(a.linear);
                                    }),
                                    e[2].map(function (t, n) {
                                        0 === n ? (l.push(e[1]), l.push(t)) : l.push(t);
                                    }),
                                    e[6])
                                ) {
                                    case "x":
                                        var u = o(e[1], function (e) {
                                            return (n.object3D.rotation.x = e);
                                        });
                                        if (e[7] > 0)
                                            Timeout.set(
                                                "".concat(e[0], "_rotValuesX").concat(t),
                                                function () {
                                                    var t = i({ values: l, duration: e[3][e[3].length - 1], easings: c, ease: e[5], loop: e[4], times: s }).start(u);
                                                    runningAniminations.push(t);
                                                },
                                                e[7]
                                            ),
                                                animTimeouts.push("".concat(e[0], "_rotValuesX").concat(t));
                                        else {
                                            var d = i({ values: l, duration: e[3][e[3].length - 1], easings: c, ease: e[5], loop: e[4], times: s }).start(u);
                                            runningAniminations.push(d);
                                        }
                                        break;
                                    case "y":
                                        var m = o(e[1], function (e) {
                                            return (n.object3D.rotation.y = e);
                                        });
                                        if (e[7] > 0)
                                            Timeout.set(
                                                "".concat(e[0], "_rotValuesY").concat(t),
                                                function () {
                                                    var t = i({ values: l, duration: e[3][e[3].length - 1], easings: c, ease: e[5], loop: e[4], times: s }).start(m);
                                                    runningAniminations.push(t);
                                                },
                                                e[7]
                                            ),
                                                animTimeouts.push("".concat(e[0], "_rotValuesY").concat(t));
                                        else {
                                            d = i({ values: l, duration: e[3][e[3].length - 1], easings: c, ease: e[5], loop: e[4], times: s }).start(m);
                                            runningAniminations.push(d);
                                        }
                                        break;
                                    case "z":
                                        var p = o(e[1], function (e) {
                                            return (n.object3D.rotation.z = e);
                                        });
                                        if (e[7] > 0)
                                            Timeout.set(
                                                "".concat(e[0], "_rotValuesZ").concat(t),
                                                function () {
                                                    var t = i({ values: l, duration: e[3][e[3].length - 1], easings: c, ease: e[5], loop: e[4], times: s }).start(p);
                                                    runningAniminations.push(t);
                                                },
                                                e[7]
                                            ),
                                                animTimeouts.push("".concat(e[0], "_rotValuesZ").concat(t));
                                        else {
                                            d = i({ values: l, duration: e[3][e[3].length - 1], easings: c, ease: e[5], loop: e[4], times: s }).start(p);
                                            runningAniminations.push(d);
                                        }
                                }
                            }
                        });
                    })(animeRotValuesArray),
                animeScaleValuesArray.length > 0 &&
                    (function (e) {
                        e.map(function (e, t) {
                            if (document.getElementById(e[0]).inScene === Number(scenenum)) {
                                "false" === e[4] && (e[4] = 0), "true" === e[4] && (e[4] = 1 / 0);
                                var n = document.getElementById(e[0]);
                                Timeout.set(
                                    "".concat(e[0], "_scaleValues").concat(t),
                                    function () {
                                        if ("x" === e[6]) {
                                            var t = e[3][e[3].length - 1] / 100,
                                                r = [],
                                                s = [],
                                                c = [];
                                            e[3].map(function (n, a) {
                                                a < e[3].length - 1 ? r.push(n / t / 100) : r.push(1);
                                            }),
                                                r.unshift(0),
                                                r.map(function () {
                                                    s.push(a.linear);
                                                }),
                                                e[2].map(function (t, n) {
                                                    0 === n ? (c.push(e[1]), c.push(t)) : c.push(t);
                                                });
                                            var l = o(e[1], function (e) {
                                                    return (n.object3D.scale.x = e);
                                                }),
                                                u = i({ values: c, duration: e[3][e[3].length - 1], easings: s, ease: e[5], loop: e[4], times: r }).start(l);
                                            runningAniminations.push(u);
                                        }
                                        if ("y" === e[6]) {
                                            (t = e[3][e[3].length - 1] / 100), (r = []), (s = []);
                                            var d = [];
                                            e[3].map(function (n, a) {
                                                a < e[3].length - 1 ? r.push(n / t / 100) : r.push(1);
                                            }),
                                                r.unshift(0),
                                                r.map(function () {
                                                    s.push(a.linear);
                                                }),
                                                e[2].map(function (t, n) {
                                                    0 === n ? (d.push(e[1]), d.push(t)) : d.push(t);
                                                });
                                            var m = o(e[1], function (e) {
                                                return (n.object3D.scale.y = e);
                                            });
                                            u = i({ values: d, duration: e[3][e[3].length - 1], easings: s, ease: e[5], loop: e[4], times: r }).start(m);
                                            runningAniminations.push(u);
                                        }
                                        if ("z" === e[6]) {
                                            (t = e[3][e[3].length - 1] / 100), (r = []), (s = []);
                                            var p = [];
                                            e[3].map(function (n, a) {
                                                a < e[3].length - 1 ? r.push(n / t / 100) : r.push(1);
                                            }),
                                                r.unshift(0),
                                                r.map(function () {
                                                    s.push(a.linear);
                                                }),
                                                e[2].map(function (t, n) {
                                                    0 === n ? (p.push(e[1]), p.push(t)) : p.push(t);
                                                });
                                            var f = o(e[1], function (e) {
                                                return (n.object3D.scale.z = e);
                                            });
                                            u = i({ values: p, duration: e[3][e[3].length - 1], easings: s, ease: e[5], loop: e[4], times: r }).start(f);
                                            runningAniminations.push(u);
                                        }
                                    },
                                    e[7]
                                ),
                                    animTimeouts.push("".concat(e[0], "_scaleValues").concat(t));
                            }
                        });
                    })(animeScaleValuesArray),
                animeOpacityValuesArray.length > 0 &&
                    (function (e) {
                        e.map(function (e, t) {
                            if (document.getElementById(e[0]).inScene === Number(scenenum)) {
                                var n = document.getElementById(e[0]);
                                Timeout.set(
                                    "".concat(e[0], "_opacityValues").concat(t),
                                    function () {
                                        var t = e[3][e[3].length - 1] / 100,
                                            r = [],
                                            s = [],
                                            c = [];
                                        if (
                                            (e[3].map(function (n, a) {
                                                a < e[3].length - 1 ? r.push(n / t / 100) : r.push(1);
                                            }),
                                            r.unshift(0),
                                            r.map(function () {
                                                s.push(a.linear);
                                            }),
                                            e[2].map(function (t, n) {
                                                0 === n ? (c.push(e[1]), c.push(t)) : c.push(t);
                                            }),
                                            n.isTransform || "RichText" === n.entityName)
                                        ) {
                                            var l = n.childNodes;
                                            Array.from(l).map(function (t) {
                                                if (e[6])
                                                    var n = o(e[1], function (e) {
                                                        return document.getElementById(t.id).setAttribute("modelopacity", e);
                                                    });
                                                else
                                                    n = o(e[1], function (e) {
                                                        return document.getElementById(t.id).setAttribute("material", "opacity: ".concat(e));
                                                    });
                                                var a = i({ values: c, duration: e[3][e[3].length - 1], easings: s, ease: e[5], loop: e[4], times: r }).start(n);
                                                runningAniminations.push(a);
                                            });
                                        } else {
                                            if (e[6])
                                                var u = o(e[1], function (e) {
                                                    return n.setAttribute("modelopacity", e);
                                                });
                                            else
                                                u = o(e[1], function (e) {
                                                    return n.setAttribute("material", "opacity: ".concat(e));
                                                });
                                            var d = i({ values: c, duration: e[3][e[3].length - 1], easings: s, ease: e[5], loop: e[4], times: r }).start(u);
                                            runningAniminations.push(d);
                                        }
                                    },
                                    e[7]
                                ),
                                    animTimeouts.push("".concat(e[0], "_opacityValues").concat(t));
                            }
                        });
                    })(animeOpacityValuesArray),
                c.length > 0 &&
                    (function (e) {
                        e.map(function (e, t) {
                            if (document.getElementById(e[0]).inScene === Number(scenenum)) {
                                var n = e[1].toFixed(4),
                                    r = e[2].toFixed(4),
                                    a = e[4];
                                a = "false" !== e[4] || 1;
                                var i = document.getElementById(e[0]);
                                Timeout.set(
                                    "".concat(e[0], "_bounce").concat(t),
                                    function () {
                                        var t = { mov: n },
                                            o = AFRAME.ANIME({
                                                targets: t,
                                                mov: r,
                                                easing: function (e, t, n) {
                                                    return function (e) {
                                                        var t = 7.5625,
                                                            n = 2.75;
                                                        return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + 0.75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + 0.9375 : t * (e -= 2.625 / n) * e + 0.984375;
                                                    };
                                                },
                                                loop: a,
                                                duration: e[3],
                                                update: function () {
                                                    switch (e[5]) {
                                                        case "x":
                                                            i.object3D.position.x = t.mov;
                                                            break;
                                                        case "y":
                                                            i.object3D.position.y = t.mov;
                                                            break;
                                                        case "z":
                                                            i.object3D.position.z = t.mov;
                                                    }
                                                },
                                            });
                                        runningBounceAniminations.push(o);
                                    },
                                    e[6]
                                ),
                                    animTimeouts.push("".concat(e[0], "_bounce").concat(t));
                            }
                        });
                    })(c),
                vidsToStartArray.length > 0 &&
                    (function (e) {
                        e.map(function (e) {
                            e[1].inScene === Number(scenenum) && document.getElementById(e[0]).play();
                        });
                    })(vidsToStartArray),
                gltfClipAnimations.length > 0 &&
                    gltfClipAnimations.map(function (e, t) {
                        var n = document.getElementById(e[0]);
                        if (n.inScene === Number(scenenum)) {
                            var r = "repeat",
                                a = "false";
                            e[4] || ((r = "once"), (a = "true")),
                                Timeout.set(
                                    "".concat(e[0], "_glbclip").concat(t),
                                    function () {
                                        if ("*" === e[1]) var t = "clip: ".concat(e[1], ";") + "loop: ".concat(r, ";");
                                        else t = "clip: " + e[1] + ";duration: " + e[3] / 1e3 + ";loop: " + r + ";clampWhenFinished: " + a + ";";
                                        n.hasAttribute("animation-mixer") && n.removeAttribute("animation-mixer"),
                                            n.setAttribute("animation-mixer", t),
                                            (n.runningClip = e[1]),
                                            (n.runningClipTimeScale = k(n, e[1], e[3] / 1e3)),
                                            meshToStartArray.push(n);
                                    },
                                    e[2]
                                ),
                                animTimeouts.push("".concat(e[0], "_glbclip").concat(t));
                        }
                    }),
                null !== soundElement && w(soundElement, looping),
                (I = !0);
        }
        R.getSurface(O).then(function (e) {
            C = "tracking" === e.surface;
        });
        var L = !1,
            V = 0;
        function H() {
            ++V > 2 && "lost_marker" === R.trackingState && !L
                ? z()
                : "have_marker" === R.trackingState &&
                  L &&
                  ($("#photoModeContainer").show(),
                  $("#trackInstrucBG").fadeTo("fast", 0),
                  $("#markerFrame").fadeTo("fast", 0),
                  $("#trackHintTxt").fadeTo("fast", 0),
                  $("#trackingImg").fadeTo("fast", 0),
                  setTimeout(function () {
                      $("#markerFrame").animate({ top: "100vh" }, 400), (document.getElementById("trackingInstruc").style.display = "none");
                  }, 500),
                  (L = !1),
                  (V = 0),
                  setTimeout(function () {
                      I || j();
                  }, 500));
        }
        function G(e, t) {
            b(document.getElementById(sceneRids[scenenum])),
                y(),
                setTimeout(function () {
                    (scenenum = t),
                        sceneRids.map(function (e, t) {
                            if (t !== Number(scenenum)) document.getElementById(e).setAttribute("visible", "false"), E(document.getElementById(e));
                            else {
                                document.getElementById(e).setAttribute("visible", "true");
                                var n = !1;
                                Array.from(document.getElementById(e).children).map(function (e) {
                                    ("DirectionalLight" !== e.entityName && "SpotLight" !== e.entityName && "AmbientLight" !== e.entityName && "PointLight" !== e.entityName) || (n = !0);
                                }),
                                    n ? h() : g();
                            }
                        }),
                        setTimeout(function () {
                            A(document.getElementById(sceneRids[scenenum]));
                        }, 100),
                        playingGifs.length > 0 &&
                            playingGifs.map(function (e) {
                                e.inScene === Number(scenenum) && e.play();
                            }),
                        j();
                }, 100);
        }
        e.exports = {
            createElement: function (e, t, n, r, i) {
                var o,
                    s = document.getElementById("trackingWrapper");
                switch (n.className) {
                    case "BasicShapes":
                        var d = n.mesh.toLowerCase();
                        (d = (d = d.replace("blippbuilder/catalog", "https://webar-static.blippar.com/".replace(/\/$/, ""))).replace("b3m", "obj")),
                            (o = document.createElement("a-obj-model")),
                            void 0 !== n.color && T(o, n.color),
                            o.setAttribute("src", d),
                            void 0 !== n.scale ? _(o, n.scale) : o.setAttribute("scale", { x: 0.01, y: 0.01, z: 0.01 }),
                            (o.scaleFactor = 100),
                            void 0 !== n.texture && o.setAttribute("material", "src: #".concat(n.texture)),
                            o.setAttribute("material", "transparent: true"),
                            void 0 !== n.alpha
                                ? (o.setAttribute("material", "opacity: ".concat(n.alpha.toString())), (o.opacityStart = n.alpha.toString()))
                                : void 0 !== n.alphaMultiplier
                                ? (o.setAttribute("material", "opacity: ".concat(n.alphaMultiplier.toString())), (o.opacityStart = n.alphaMultiplier.toString()))
                                : (o.opacityStart = "1.0"),
                            void 0 !== n.sides ? x(o, n.sides) : o.setAttribute("material", "side: double"),
                            void 0 !== n.type && "hider" === n.type && o.setAttribute("material", "blending: subtractive"),
                            void 0 !== n.rotation ? D(o, n.rotation) : o.setAttribute("rotation", { x: 0, y: 0, z: 0 }),
                            void 0 !== n.hidden && (n.hidden ? (o.setAttribute("visible", !1), (o.isVisible = !1)) : (o.setAttribute("visible", !0), (o.isVisible = !0))),
                            (o.isMesh = !1),
                            (o.entityName = "BasicShapes");
                        break;
                    case "Mesh":
                        (o = document.createElement("a-entity")).setAttribute("gltf-model", e + n.mesh),
                            (o.hasEnvMaps = !1),
                            (void 0 !== n.ignoreEnvMaps && n.ignoreEnvMaps) || (o.setAttribute("jk-env-map", { path: "https://webar-static.blippar.com/" }), (o.hasEnvMaps = !0)),
                            void 0 !== n.color && M(o, n.color),
                            void 0 !== n.scale
                                ? ((o.object3D.scale.x = n.scale[0] / 100), (o.object3D.scale.y = n.scale[1] / 100), (o.object3D.scale.z = n.scale[2] / 100))
                                : ((o.object3D.scale.x = 0.01), (o.object3D.scale.y = 0.01), (o.object3D.scale.z = 0.01)),
                            (o.scaleFactor = 100),
                            o.setAttribute("material", "transparent: true"),
                            void 0 !== n.alpha
                                ? (o.setAttribute("modelopacity", n.alpha.toString()), (o.opacityStart = n.alpha.toString()))
                                : void 0 !== n.alphaMultiplier
                                ? (o.setAttribute("modelopacity", n.alphaMultiplier.toString()), (o.opacityStart = n.alphaMultiplier.toString()))
                                : (o.opacityStart = "1.0"),
                            void 0 !== n.sides ? x(o, n.sides) : o.setAttribute("material", "side: double"),
                            meshToStartArray.push(o),
                            void 0 !== n.rotation
                                ? ((o.object3D.rotation.order = "XYZ"),
                                  (o.object3D.rotation.x = n.rotation[0] * (Math.PI / 180)),
                                  (o.object3D.rotation.y = n.rotation[1] * (Math.PI / 180)),
                                  (o.object3D.rotation.z = n.rotation[2] * (Math.PI / 180)))
                                : o.setAttribute("rotation", { x: 0, y: 0, z: 0 }),
                            void 0 !== n.hidden && (n.hidden ? (o.setAttribute("visible", !1), (o.isVisible = !1)) : (o.setAttribute("visible", !0), (o.isVisible = !0))),
                            (o.isMesh = !0),
                            (o.entityName = "Mesh"),
                            o.addEventListener("animation-finished", function (e) {
                                var t = meshToStartArray.indexOf(o);
                                -1 != t && meshToStartArray.splice(t, 1);
                            });
                        break;
                    case "Sprite":
                        (o = document.createElement("a-plane")),
                            void 0 !== n.color && T(o, n.color),
                            o.setAttribute("height", n.height),
                            o.setAttribute("width", n.width),
                            void 0 !== n.texture && o.setAttribute("material", "src: #".concat(n.texture)),
                            void 0 !== n.scale ? _(o, n.scale) : o.setAttribute("scale", { x: 0.01, y: 0.01, z: 0.01 }),
                            (o.scaleFactor = 100),
                            void 0 !== n.alpha
                                ? (o.setAttribute("material", "opacity: ".concat(n.alpha.toString())), (o.opacityStart = n.alpha.toString()))
                                : void 0 !== n.alphaMultiplier
                                ? (o.setAttribute("material", "opacity: ".concat(n.alphaMultiplier.toString())), (o.opacityStart = n.alphaMultiplier.toString()))
                                : (o.opacityStart = "1.0"),
                            o.setAttribute("material", "transparent: true"),
                            void 0 !== n.sides ? x(o, n.sides) : o.setAttribute("material", "side: front"),
                            o.setAttribute("material", "shader: flat"),
                            void 0 !== n.type && "hider" === n.type && (o.setAttribute("material", "transparent: false"), o.setAttribute("material", "blending: subtractive")),
                            o.setAttribute("material", "alphaTest: 0.01"),
                            void 0 !== n.rotation && D(o, n.rotation),
                            void 0 !== n.hidden && (n.hidden ? (o.setAttribute("visible", !1), (o.isVisible = !1)) : (o.setAttribute("visible", !0), (o.isVisible = !0))),
                            (o.isMesh = !1),
                            (o.entityName = "Sprite");
                        break;
                    case "GifSprite":
                        (o = document.createElement("a-entity")),
                            void 0 !== n.scale ? _(o, n.scale) : o.setAttribute("scale", { x: 0.01, y: 0.01, z: 0.01 }),
                            (o.scaleFactor = 100),
                            void 0 !== n.rotation && D(o, n.rotation),
                            void 0 !== n.sides ? x(o, n.sides) : o.setAttribute("material", "side: front"),
                            void 0 !== n.color && ((colToUse = p(Math.round(255 * n.color[0]), Math.round(255 * n.color[1]), Math.round(255 * n.color[2]))), o.setAttribute("material", "color: ".concat(colToUse))),
                            o.setAttribute("geometry", "primitive: plane; width: ".concat(n.width, "; height: ").concat(n.height)),
                            o.setAttribute("material", "shader: gif; src: url(".concat(e).concat(n.texture, ");")),
                            void 0 !== n.alpha
                                ? (o.setAttribute("material", "opacity: ".concat(n.alpha)), o.setAttribute("material", "alphaTest: ".concat(n.alpha - 0.01, ";")), (o.opacityStart = n.alpha))
                                : (o.setAttribute("material", "alphaTest: 0.8;"), (o.opacityStart = 1)),
                            void 0 !== n.hidden && (n.hidden ? (o.setAttribute("visible", !1), (o.isVisible = !1)) : (o.setAttribute("visible", !0), (o.isVisible = !0))),
                            playingGifs.push(o),
                            (o.isMesh = !1),
                            (o.entityName = "GifSprite");
                        break;
                    case "Video":
                        if (n.userData.blippAction.params.fullScreen) {
                            var g = document.createElement("video");
                            if ((g.setAttribute("width", "100%"), g.setAttribute("height", "auto"), n.userData.blippAction.params.stream)) g.setAttribute("src", n.userData.blippAction.params.fullName);
                            else (L = (L = e + n.userData.blippAction.params.fullName).replace(/\s/g, "+")), g.setAttribute("src", L);
                            g.setAttribute("controls", ""),
                                (g.style.display = "none"),
                                document.body.appendChild(g),
                                ((o = document.createElement("a-plane")).fullscreen = !0),
                                void 0 !== n.rotation && D(o, n.rotation),
                                void 0 !== n.scale ? _(o, n.scale) : o.setAttribute("scale", { x: 0.01, y: 0.01, z: 0.01 }),
                                (o.scaleFactor = 100),
                                o.setAttribute("height", n.children[0].height),
                                o.setAttribute("width", n.children[0].width),
                                void 0 !== n.alpha || void 0 !== n.alphaMultiplier
                                    ? (void 0 !== n.alpha && (o.setAttribute("material", "opacity: ".concat(n.alpha)), o.setAttribute("material", "transparent: true"), (o.opacityStart = n.alpha)),
                                      void 0 !== n.alphaMultiplier && (o.setAttribute("material", "opacity: ".concat(n.alphaMultiplier)), o.setAttribute("material", "transparent: true"), (o.opacityStart = n.alphaMultiplier)))
                                    : (o.opacityStart = 1),
                                o.setAttribute("src", n.userData.blippAction.params.thumbSrc),
                                o.setAttribute("material", "shader: flat"),
                                void 0 !== n.sides ? x(o, n.sides) : o.setAttribute("material", "side: front"),
                                (b = document.createElement("a-plane")).setAttribute("id", "".concat(r, "playBut")),
                                b.setAttribute("position", { x: 0, y: 0, z: 10 }),
                                b.setAttribute("height", 0.8 * n.children[0].height),
                                b.setAttribute("width", 0.8 * n.children[0].height),
                                b.setAttribute("color", "white"),
                                b.setAttribute("transparent", "true"),
                                b.classList.add("clickable"),
                                (b.shouldClick = !0),
                                b.setAttribute("material", "shader: flat"),
                                b.setAttribute("scale", { x: 1, y: 1, z: 1 }),
                                void 0 !== n.rotation && D(b, n.rotation),
                                b.setAttribute("src", "".concat("https://webar-static.blippar.com/", "common/vidplay.png")),
                                o.appendChild(b),
                                b.addEventListener("click", function (e) {
                                    if (!animsPaused) {
                                        if (null !== soundElement) document.getElementById("sceneSound").components.sound.pauseSound();
                                        playingSounds.length > 0 &&
                                            playingSounds.map(function (e) {
                                                e.playing && (e.components.sound.pauseSound(), (e.playing = !1));
                                            }),
                                            playingClickVideos.length > 0 &&
                                                playingClickVideos.map(function (e) {
                                                    e.pause();
                                                }),
                                            vidsToStartArray.length > 0 &&
                                                vidsToStartArray.map(function (e) {
                                                    e[1].inScene === Number(scenenum) && document.getElementById(e[0]).pause();
                                                }),
                                            (g.style.display = "block"),
                                            l
                                                ? g.webkitEnterFullScreen()
                                                : g.requestFullscreen
                                                ? g.requestFullscreen()
                                                : g.mozRequestFullScreen
                                                ? g.mozRequestFullScreen()
                                                : g.webkitRequestFullscreen
                                                ? g.webkitRequestFullscreen()
                                                : g.msRequestFullscreen && g.msRequestFullscreen();
                                    }
                                }),
                                g.addEventListener("fullscreenchange", function (e) {
                                    switch (document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen ? "FullscreenOn" : "FullscreenOff") {
                                        case "FullscreenOn":
                                            this.play();
                                            break;
                                        case "FullscreenOff":
                                            if ((this.pause(), (this.currentTime = 0), null !== soundElement)) document.getElementById("sceneSound").components.sound.playSound();
                                            playingSounds.length > 0 &&
                                                playingSounds.map(function (e) {
                                                    e.playing && e.components.sound.playSound();
                                                }),
                                                playingClickVideos.length > 0 &&
                                                    playingClickVideos.map(function (e) {
                                                        e.play();
                                                    }),
                                                vidsToStartArray.length > 0 &&
                                                    vidsToStartArray.map(function (e) {
                                                        e[1].inScene === Number(scenenum) && document.getElementById(e[0]).play();
                                                    });
                                    }
                                }),
                                g.addEventListener("webkitfullscreenchange", function (e) {
                                    switch (document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen ? "FullscreenOn" : "FullscreenOff") {
                                        case "FullscreenOn":
                                            this.play();
                                            break;
                                        case "FullscreenOff":
                                            if ((this.pause(), (this.currentTime = 0), null !== soundElement)) document.getElementById("sceneSound").components.sound.playSound();
                                            playingSounds.length > 0 &&
                                                playingSounds.map(function (e) {
                                                    e.playing && e.components.sound.playSound();
                                                }),
                                                playingClickVideos.length > 0 &&
                                                    playingClickVideos.map(function (e) {
                                                        e.play();
                                                    });
                                    }
                                }),
                                g.addEventListener("mozfullscreenchange", function (e) {
                                    switch (document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen ? "FullscreenOn" : "FullscreenOff") {
                                        case "FullscreenOn":
                                            this.play();
                                            break;
                                        case "FullscreenOff":
                                            if ((this.pause(), (this.currentTime = 0), null !== soundElement)) document.getElementById("sceneSound").components.sound.playSound();
                                            playingSounds.length > 0 &&
                                                playingSounds.map(function (e) {
                                                    e.playing && e.components.sound.playSound();
                                                }),
                                                playingClickVideos.length > 0 &&
                                                    playingClickVideos.map(function (e) {
                                                        e.play();
                                                    });
                                    }
                                });
                        } else {
                            var b,
                                v = document.getElementById("sceneassets"),
                                w = document.createElement("video");
                            if ((w.setAttribute("id", "Vid".concat(r)), w.setAttribute("crossOrigin", "anonymous"), w.setAttribute("preload", "auto"), n.userData.blippAction.params.stream))
                                w.setAttribute("src", n.userData.blippAction.params.fullName);
                            else (L = (L = e + n.userData.blippAction.params.fullName).replace(/\s/g, "+")), w.setAttribute("src", L);
                            if (
                                (n.userData.blippAction.params.playInLoop && w.setAttribute("loop", n.userData.blippAction.params.playInLoop),
                                l && "iOS" == u && n.userData.blippAction.params.autoPlay && w.setAttribute("muted", ""),
                                n.userData.blippAction.params.autoPlay ||
                                    n.userData.blippAction.params.external ||
                                    (w.setAttribute("autoplay", ""),
                                    (w.volume = 0),
                                    setTimeout(function () {
                                        (w.currentTime = 0), (w.volume = 1), w.pause();
                                    }, 500)),
                                w.setAttribute("playsinline", ""),
                                v.appendChild(w),
                                ((o = document.createElement("a-entity")).vidAsset = w),
                                (o.fullscreen = !1),
                                void 0 !== n.rotation && D(o, n.rotation),
                                void 0 !== n.scale ? _(o, n.scale) : o.setAttribute("scale", { x: 0.01, y: 0.01, z: 0.01 }),
                                (o.scaleFactor = 100),
                                (vidEl = document.createElement("a-entity")),
                                vidEl.setAttribute("id", "".concat(r, "vidscreen")),
                                n.userData.blippAction.params.alphaChannel)
                            ) {
                                var A = 0.333,
                                    E = 0.7,
                                    k = 0.69,
                                    S = 0.2;
                                void 0 !== n.userData.blippAction.params.chromaKeyHue && (A = n.userData.blippAction.params.chromaKeyHue / 360),
                                    void 0 !== n.userData.blippAction.params.chromaToleranceV && (k = n.userData.blippAction.params.chromaToleranceV),
                                    void 0 !== n.userData.blippAction.params.chromaToleranceS && (E = n.userData.blippAction.params.chromaToleranceS),
                                    void 0 !== n.userData.blippAction.params.chromaToleranceH && (S = n.userData.blippAction.params.chromaToleranceH / 360);
                                var I = 0;
                                A - k / 360 < 0 ? (I = 0.5) : A + k / 360 > 1 && (I = -0.5);
                                var B = "".concat(A, " ").concat(E, " ").concat(k, " ").concat(S);
                                vidEl.setAttribute("material", "".concat("shader: chromakey; src: #Vid").concat(r, "; chromaVals: ").concat(B, "; notchWidth: ").concat(S, "; chromaAdjust: ").concat(I, "; depthTest: false;")),
                                    (vidEl.testingDepth = !1),
                                    vidEl.setAttribute("geometry", "primitive: plane; width: ".concat(n.children[0].width, "; height: ").concat(n.children[0].height));
                            } else
                                vidEl.setAttribute("geometry", "primitive: plane"),
                                    vidEl.setAttribute("material", "".concat("src: #Vid").concat(r)),
                                    vidEl.setAttribute("geometry", "height: ".concat(n.children[0].height)),
                                    vidEl.setAttribute("geometry", "width: ".concat(n.children[0].width)),
                                    void 0 !== n.sides && x(vidEl, n.sides),
                                    vidEl.setAttribute("material", "shader: flat"),
                                    (vidEl.testingDepth = !0);
                            if (
                                (vidEl.setAttribute("visible", "false"),
                                void 0 !== n.alpha || void 0 !== n.alphaMultiplier
                                    ? (void 0 !== n.alpha && (vidEl.setAttribute("material", "opacity: ".concat(n.alpha)), (vidEl.opacityStart = n.alpha)),
                                      void 0 !== n.alphaMultiplier && (vidEl.setAttribute("material", "opacity: ".concat(n.alphaMultiplier)), (vidEl.opacityStart = n.alphaMultiplier)))
                                    : (vidEl.opacityStart = 1),
                                (vidEl.isMesh = !1),
                                o.appendChild(vidEl),
                                n.userData.blippAction.params.alphaChannel)
                            ) {
                                (C = document.createElement("a-entity")).setAttribute("id", "".concat(r, "thumbnail"));
                                (A = 0.3325), (E = 0.7), (k = 0.67), (S = 0.4);
                                void 0 !== n.userData.blippAction.params.chromaKeyHue && (A = n.userData.blippAction.params.chromaKeyHue / 360),
                                    void 0 !== n.userData.blippAction.params.chromaToleranceV && (k = n.userData.blippAction.params.chromaToleranceV),
                                    void 0 !== n.userData.blippAction.params.chromaToleranceS && (E = n.userData.blippAction.params.chromaToleranceS),
                                    void 0 !== n.userData.blippAction.params.chromaToleranceH && (S = n.userData.blippAction.params.chromaToleranceH / 360);
                                I = 0;
                                A - k / 360 < 0 ? (I = 0.5) : A + k / 360 > 1 && (I = -0.5);
                                B = "".concat(A, " ").concat(E, " ").concat(k, " ").concat(S);
                                C.setAttribute("material", "".concat("shader: chromakey; src: #Vid").concat(r, "; chromaVals: ").concat(B, "; notchWidth: ").concat(S, "; chromaAdjust: ").concat(I, "; depthTest: false;")),
                                    (C.testingDepth = !1),
                                    C.setAttribute("geometry", "primitive: plane; width: ".concat(n.children[0].width, "; height: ").concat(n.children[0].height));
                            } else {
                                var C;
                                (C = document.createElement("a-plane")).setAttribute("id", "".concat(r, "thumbnail")),
                                    C.setAttribute("height", n.children[0].height),
                                    C.setAttribute("width", n.children[0].width),
                                    C.setAttribute("transparent", "true"),
                                    void 0 !== n.sides ? x(C, n.sides) : C.setAttribute("material", "side: front"),
                                    void 0 !== n.color && ((colToUse = p(Math.round(255 * n.color[0]), Math.round(255 * n.color[1]), Math.round(255 * n.color[2]))), C.setAttribute("material", "color: ".concat(colToUse))),
                                    C.setAttribute("material", "shader: flat; src: ".concat(n.userData.blippAction.params.thumbSrc));
                            }
                            if (
                                (void 0 !== n.alpha || void 0 !== n.alphaMultiplier
                                    ? (void 0 !== n.alpha && (C.setAttribute("material", "opacity: ".concat(n.alpha)), (C.opacityStart = n.alpha)),
                                      void 0 !== n.alphaMultiplier && (C.setAttribute("material", "opacity: ".concat(n.alphaMultiplier)), (C.opacityStart = n.alphaMultiplier)))
                                    : (C.opacityStart = 1),
                                (C.isMesh = !1),
                                o.appendChild(C),
                                n.userData.blippAction.params.autoPlay)
                            )
                                vidEl.setAttribute("visible", "true"), C.setAttribute("visible", "false"), vidsToStartArray.push(["Vid".concat(r), o]);
                            else
                                (b = document.createElement("a-plane")).setAttribute("id", "".concat(r, "playBut")),
                                    b.setAttribute("position", { x: 0, y: 0, z: 10 }),
                                    b.setAttribute("height", 0.8 * n.children[0].height),
                                    b.setAttribute("width", 0.8 * n.children[0].height),
                                    b.setAttribute("color", "white"),
                                    b.setAttribute("transparent", "true"),
                                    b.classList.add("clickable"),
                                    (b.shouldClick = !0),
                                    b.setAttribute("material", "shader: flat;"),
                                    b.setAttribute("scale", { x: 1, y: 1, z: 1 }),
                                    b.setAttribute("src", "".concat("https://webar-static.blippar.com/", "common/vidplay.png")),
                                    void 0 !== n.alpha || void 0 !== n.alphaMultiplier
                                        ? (void 0 !== n.alpha && (b.setAttribute("material", "opacity: ".concat(n.alpha)), (b.opacityStart = n.alpha)),
                                          void 0 !== n.alphaMultiplier && (b.setAttribute("material", "opacity: ".concat(n.alphaMultiplier)), (b.opacityStart = n.alphaMultiplier)))
                                        : (b.opacityStart = 1),
                                    (b.isMesh = !1),
                                    o.appendChild(b),
                                    b.addEventListener("click", function (e) {
                                        if (!animsPaused) {
                                            var t = document.getElementById("".concat(r, "playBut")),
                                                n = document.getElementById("".concat(r, "vidscreen")),
                                                a = document.getElementById("".concat(r, "thumbnail"));
                                            t.setAttribute("visible", "false"),
                                                n.setAttribute("visible", "true"),
                                                a.setAttribute("visible", "false"),
                                                l && "iOS" !== u && t.classList.remove("clickable"),
                                                w.play(),
                                                playingClickVideos.push(w);
                                        }
                                    }),
                                    n.userData.blippAction.params.playInLoop ||
                                        w.addEventListener("ended", function () {
                                            var e = document.getElementById("".concat(r, "playBut")),
                                                t = document.getElementById("".concat(r, "vidscreen")),
                                                n = document.getElementById("".concat(r, "thumbnail"));
                                            e.setAttribute("visible", "true"), t.setAttribute("visible", "false"), n.setAttribute("visible", "true");
                                            var a = playingClickVideos.indexOf(w);
                                            playingClickVideos.splice(a, 1), (this.currentTime = 0), l && "iOS" !== u && (e.classList.add("clickable"), (e.shouldClick = !0));
                                        });
                        }
                        (o.isMesh = !1), (o.entityName = "Video");
                        break;
                    case "RichText":
                        if (
                            ((o = document.createElement("a-entity")).setAttribute("position", { x: n.translation[0] / 100, y: n.translation[1] / 100, z: n.translation[2] / 100 }),
                            void 0 !== n.scale ? o.setAttribute("scale", { x: n.scale[0], y: n.scale[1], z: n.scale[2] }) : o.setAttribute("scale", "1.0 1.0 1.0"),
                            (o.scaleFactor = 1),
                            void 0 !== n.rotation && D(o, n.rotation),
                            (textEl = document.createElement("a-entity")),
                            textEl.setAttribute("id", r + "text"),
                            void 0 !== n.text)
                        ) {
                            var N = "value: " + n.text + ";";
                            (N += "size: " + n.fontSize / 140 + ";"), textEl.setAttribute("text-geometry", N);
                        } else textEl.setAttribute("text-geometry", "value:  ; size: 10;");
                        switch (n.fontName) {
                            case "Open-Sans-regular.ttf":
                                textEl.setAttribute("text-geometry", { font: "".concat("https://webar-static.blippar.com/", "fonts/opensans.json") });
                                break;
                            case "Cutive-Mono-regular.ttf":
                                textEl.setAttribute("text-geometry", { font: "".concat("https://webar-static.blippar.com/", "fonts/cutive_mono.json") });
                                break;
                            case "Raleway-regular.ttf":
                                textEl.setAttribute("text-geometry", { font: "".concat("https://webar-static.blippar.com/", "fonts/raleway.json") });
                                break;
                            case "Roboto-Slab-regular.ttf":
                                textEl.setAttribute("text-geometry", { font: "".concat("https://webar-static.blippar.com/", "fonts/roboto.json") });
                                break;
                            case "Lato-Bold.ttf":
                                textEl.setAttribute("text-geometry", { font: "".concat("https://webar-static.blippar.com/", "fonts/lato.json") });
                        }
                        if (
                            (void 0 !== n.color
                                ? ((colToUse = p(Math.round(255 * n.color[0]), Math.round(255 * n.color[1]), Math.round(255 * n.color[2]))), textEl.setAttribute("material", { color: colToUse }))
                                : textEl.setAttribute("material", { color: "white" }),
                            textEl.setAttribute("material", { shader: "flat" }),
                            void 0 !== n.text)
                        )
                            var R = n.text.length;
                        else R = 0;
                        var O = R * (0.0042 * n.fontSize),
                            P = 0.0057 * n.fontSize;
                        if (
                            (textEl.setAttribute("position", { x: -0.5 * O, y: -0.5 * P, z: 0.01 }),
                            textEl.setAttribute("scale", { x: 1, y: 1, z: 0.01 }),
                            void 0 !== n.alpha
                                ? (textEl.setAttribute("material", "opacity: ".concat(n.alpha)), (textEl.opacityStart = n.alpha.toString()), textEl.setAttribute("material", "transparent: true"))
                                : void 0 !== n.alphaMultiplier
                                ? (textEl.setAttribute("material", "opacity: ".concat(n.alphaMultiplier)), (textEl.opacityStart = n.alphaMultiplier.toString()), textEl.setAttribute("material", "transparent: true"))
                                : (textEl.opacityStart = "1.0"),
                            (textEl.isMesh = !1),
                            (textEl.fixedWidth = !1),
                            void 0 !== n.bgColor)
                        ) {
                            var z = p(Math.round(255 * n.bgColor[0]), Math.round(255 * n.bgColor[1]), Math.round(255 * n.bgColor[2]));
                            if (void 0 !== n.cornerRadius) {
                                if (((textBGentity = document.createElement("a-rounded")), textBGentity.setAttribute("id", "".concat(r, "textbg")), void 0 !== n.cornerRadius)) {
                                    var j = n.cornerRadius / 50;
                                    j > P / 2 && (j = P / 2), textBGentity.setAttribute("radius", j.toString());
                                } else textBGentity.setAttribute("radius", "0");
                                textBGentity.setAttribute("position", { x: -0.6 * O, y: -1.2 * P, z: -0.03 }),
                                    textBGentity.setAttribute("scale", { x: 1.2, y: 2.4, z: 1 }),
                                    textBGentity.setAttribute("color", z),
                                    textBGentity.setAttribute("material", "shader: flat; side: double; color: ".concat(z, ";")),
                                    textBGentity.setAttribute("height", P),
                                    textBGentity.setAttribute("width", O),
                                    void 0 !== n.alpha
                                        ? (textBGentity.setAttribute("material", "opacity: ".concat(n.alpha)),
                                          textBGentity.setAttribute("opacity", n.alpha),
                                          (textBGentity.opacityStart = n.alpha.toString()),
                                          textBGentity.setAttribute("material", "transparent: true"))
                                        : void 0 !== n.alphaMultiplier
                                        ? (textBGentity.setAttribute("opacity", n.alphaMultiplier), (textBGentity.opacityStart = n.alphaMultiplier))
                                        : (textBGentity.setAttribute("opacity", n.bgColor[3]), (textBGentity.opacityStart = n.bgColor[3])),
                                    o.appendChild(textBGentity),
                                    (o.type = "rounded");
                            } else
                                (textBGentity = document.createElement("a-plane")),
                                    textBGentity.setAttribute("id", "".concat(r, "textbg")),
                                    textBGentity.setAttribute("position", { x: 0, y: 0, z: -0.03 }),
                                    textBGentity.setAttribute("height", P),
                                    textBGentity.setAttribute("width", O),
                                    textBGentity.setAttribute("scale", { x: 1.2, y: 2.4, z: 1 }),
                                    textBGentity.setAttribute("color", z),
                                    textBGentity.setAttribute("material", "shader: flat; side: double; color: ".concat(z, ";")),
                                    textBGentity.setAttribute("material", { opacity: n.bgColor[3] }),
                                    void 0 !== n.alpha
                                        ? (textBGentity.setAttribute("material", "opacity: ".concat(n.alpha)), (textBGentity.opacityStart = n.alpha.toString()), textBGentity.setAttribute("material", "transparent: true"))
                                        : void 0 !== n.alphaMultiplier
                                        ? (textBGentity.setAttribute("opacity", n.alphaMultiplier), (textBGentity.opacityStart = n.alphaMultiplier))
                                        : (textBGentity.setAttribute("opacity", n.bgColor[3]), (textBGentity.opacityStart = n.bgColor[3])),
                                    o.appendChild(textBGentity),
                                    (o.type = "flat");
                        } else
                            (textBGentity = document.createElement("a-plane")),
                                textBGentity.setAttribute("id", "".concat(r, "textbg")),
                                textBGentity.setAttribute("position", { x: 0, y: 0, z: -0.03 }),
                                textBGentity.setAttribute("height", P),
                                textBGentity.setAttribute("width", O),
                                textBGentity.setAttribute("scale", { x: 1.2, y: 2.4, z: 1 }),
                                textBGentity.setAttribute("color", "#000000"),
                                textBGentity.setAttribute("material", "shader: flat; side: double;"),
                                textBGentity.setAttribute("material", { opacity: 0 }),
                                textBGentity.setAttribute("visible", "false"),
                                o.appendChild(textBGentity),
                                (o.type = "sensor");
                        (textBGentity.isMesh = !1),
                            o.appendChild(textEl),
                            void 0 !== n.hidden && (n.hidden ? (o.setAttribute("visible", !1), (o.isVisible = !1)) : (o.setAttribute("visible", !0), (o.isVisible = !0))),
                            void 0 !== n.bgColor && void 0 !== n.cornerRadius ? textElementsArray.push([textEl, textBGentity, "rounded"]) : textElementsArray.push([textEl, textBGentity, "sensor"]),
                            (o.isMesh = !1),
                            (o.entityName = "RichText");
                        break;
                    case "Audio":
                    case "Email":
                        var L;
                        (o = document.createElement("a-plane")).setAttribute("height", n.children[0].height),
                            o.setAttribute("width", n.children[0].width),
                            (L = (L = e + n.children[0].texture).replace(/\s/g, "+")),
                            o.setAttribute("src", L),
                            void 0 !== n.scale ? _(o, n.scale) : o.setAttribute("scale", { x: 0.01, y: 0.01, z: 0.01 }),
                            (o.scaleFactor = 100),
                            void 0 !== n.alpha && (o.setAttribute("material", "opacity: ".concat(n.alpha)), (o.opacityStart = n.alpha), o.setAttribute("material", "transparent: true")),
                            void 0 !== n.sides ? x(o, n.sides) : o.setAttribute("material", "side: front"),
                            o.setAttribute("material", "alphaTest: 0.05"),
                            void 0 !== n.rotation && D(o, n.rotation),
                            void 0 !== n.hidden && (n.hidden ? (o.setAttribute("visible", !1), (o.isVisible = !1)) : (o.setAttribute("visible", !0), (o.isVisible = !0))),
                            (o.isMesh = !1),
                            (o.entityName = "Email");
                        break;
                    case "Scene":
                    case "TransformGroup":
                        (o = document.createElement("a-entity")),
                            void 0 !== n.scale && o.setAttribute("scale", { x: n.scale[0], y: n.scale[1], z: n.scale[2] }),
                            (o.scaleFactor = 1),
                            void 0 !== n.rotation && D(o, n.rotation),
                            void 0 !== n.alpha ? (o.opacityStart = n.alpha) : void 0 !== n.alphaMultiplier ? (o.opacityStart = n.alphaMultiplier) : (o.opacityStart = 1),
                            void 0 !== n.hidden && (n.hidden ? (o.setAttribute("visible", !1), (o.isVisible = !1)) : (o.setAttribute("visible", !0), (o.isVisible = !0))),
                            (o.isMesh = !1),
                            (o.isTransform = !0),
                            (o.entityName = "TransformGroup");
                        break;
                    case "SphereMap":
                        (o = document.createElement("a-obj-model")),
                            void 0 !== n.color && T(o, n.color),
                            o.setAttribute("src", "https://webar-static.blippar.com/basic_shapes/skysphere.obj"),
                            void 0 !== n.scale ? _(o, n.scale) : o.setAttribute("scale", { x: 0.01, y: 0.01, z: 0.01 }),
                            (o.scaleFactor = 100),
                            void 0 !== n.texture && o.setAttribute("material", "src: #".concat(n.texture)),
                            o.setAttribute("material", "transparent: false; alphaTest: 0.001"),
                            void 0 !== n.sides ? x(o, n.sides) : o.setAttribute("material", "side: double"),
                            void 0 !== n.rotation ? D(o, n.rotation) : o.setAttribute("rotation", { x: 0, y: 0, z: 0 }),
                            void 0 !== n.hidden && (n.hidden ? (o.setAttribute("visible", !1), (o.isVisible = !1)) : (o.setAttribute("visible", !0), (o.isVisible = !0))),
                            (o.opacityStart = 1),
                            (o.isMesh = !0),
                            (o.entityName = "SphereMap");
                        break;
                    case "CylinderMap":
                        (o = document.createElement("a-obj-model")),
                            void 0 !== n.color && T(o, n.color),
                            o.setAttribute("src", "https://webar-static.blippar.com/basic_shapes/cylindermap.obj"),
                            void 0 !== n.scale ? _(o, n.scale) : o.setAttribute("scale", { x: 0.01, y: 0.01, z: 0.01 }),
                            (o.scaleFactor = 100),
                            void 0 !== n.texture && o.setAttribute("material", "src: #".concat(n.texture)),
                            o.setAttribute("material", "transparent: false; alphaTest: 0.001"),
                            void 0 !== n.sides ? x(o, n.sides) : o.setAttribute("material", "side: double"),
                            void 0 !== n.rotation ? D(o, n.rotation) : o.setAttribute("rotation", { x: 0, y: 0, z: 0 }),
                            void 0 !== n.hidden && (n.hidden ? (o.setAttribute("visible", !1), (o.isVisible = !1)) : (o.setAttribute("visible", !0), (o.isVisible = !0))),
                            (o.opacityStart = 1),
                            (o.isMesh = !0),
                            (o.entityName = "CylinderMap");
                        break;
                    case "PointLight":
                        if (
                            (setSceneLights || h(),
                            (o = document.createElement("a-entity")).setAttribute("light", "type: point"),
                            void 0 !== n.intensity ? o.setAttribute("light", "intensity: ".concat(n.intensity)) : o.setAttribute("light", "intensity: 1.0"),
                            void 0 !== n.distance ? o.setAttribute("light", "distance: ".concat(n.distance)) : o.setAttribute("light", "distance: 0.0"),
                            void 0 !== n.decay ? o.setAttribute("light", "decay: ".concat(n.decay)) : o.setAttribute("light", "decay: 1.0"),
                            void 0 !== n.color)
                        ) {
                            var V = p(Math.round(255 * n.color[0]), Math.round(255 * n.color[1]), Math.round(255 * n.color[2]));
                            o.setAttribute("light", "color: ".concat(V));
                        } else o.setAttribute("light", "color: #FFF");
                        void 0 !== n.hidden && (n.hidden ? (o.setAttribute("visible", !1), (o.isVisible = !1)) : (o.setAttribute("visible", !0), (o.isVisible = !0))), (o.entityName = "PointLight");
                        break;
                    case "SpotLight":
                        if (
                            (setSceneLights || h(),
                            (o = document.createElement("a-entity")).setAttribute("light", "type: spot"),
                            void 0 !== n.intensity ? o.setAttribute("light", "intensity: ".concat(n.intensity)) : o.setAttribute("light", "intensity: 1.0"),
                            void 0 !== n.distance ? o.setAttribute("light", "distance: ".concat(n.distance)) : o.setAttribute("light", "distance: 0.0"),
                            void 0 !== n.angle ? o.setAttribute("light", "angle: ".concat(THREE.Math.radToDeg(n.angle).toFixed(4))) : o.setAttribute("light", "angle: 30"),
                            void 0 !== n.penumbra ? o.setAttribute("light", "penumbra: ".concat(n.penumbra)) : o.setAttribute("light", "penumbra: 0.0"),
                            void 0 !== n.decay ? o.setAttribute("light", "decay: ".concat(n.decay)) : o.setAttribute("light", "decay: 1.0"),
                            void 0 !== n.color)
                        ) {
                            V = p(Math.round(255 * n.color[0]), Math.round(255 * n.color[1]), Math.round(255 * n.color[2]));
                            o.setAttribute("light", "color: ".concat(V));
                        } else o.setAttribute("light", "color: #FFF");
                        void 0 !== n.rotation
                            ? ((o.object3D.rotation.order = "XYZ"), o.object3D.rotation.set(THREE.Math.degToRad(n.rotation[0].toFixed(4)), THREE.Math.degToRad(n.rotation[1].toFixed(4)), THREE.Math.degToRad(n.rotation[2].toFixed(4))))
                            : o.setAttribute("rotation", { x: 0, y: 0, z: 0 }),
                            void 0 !== n.hidden && (n.hidden ? (o.setAttribute("visible", !1), (o.isVisible = !1)) : (o.setAttribute("visible", !0), (o.isVisible = !0))),
                            (o.entityName = "SpotLight");
                        break;
                    case "AmbientLight":
                        if (
                            (setSceneLights || h(),
                            (o = document.createElement("a-entity")).setAttribute("light", "type: ambient"),
                            void 0 !== n.intensity ? o.setAttribute("light", "intensity: ".concat(n.intensity)) : o.setAttribute("light", "intensity: 1.0"),
                            void 0 !== n.color)
                        ) {
                            V = p(Math.round(255 * n.color[0]), Math.round(255 * n.color[1]), Math.round(255 * n.color[2]));
                            o.setAttribute("light", "color: ".concat(V));
                        } else o.setAttribute("light", "color: #FFF");
                        void 0 !== n.hidden && (n.hidden ? (o.setAttribute("visible", !1), (o.isVisible = !1)) : (o.setAttribute("visible", !0), (o.isVisible = !0))), (o.entityName = "AmbientLight");
                        break;
                    case "DirectionalLight":
                        if (
                            (setSceneLights || h(),
                            (o = document.createElement("a-light")).setAttribute("type", "directional"),
                            void 0 !== n.intensity ? o.setAttribute("intensity", n.intensity) : o.setAttribute("intensity", "1.0"),
                            void 0 !== n.color)
                        ) {
                            V = p(Math.round(255 * n.color[0]), Math.round(255 * n.color[1]), Math.round(255 * n.color[2]));
                            o.setAttribute("color", V);
                        } else o.setAttribute("color", "#FFF");
                        void 0 !== n.hidden && (n.hidden ? (o.setAttribute("visible", !1), (o.isVisible = !1)) : (o.setAttribute("visible", !0), (o.isVisible = !0))),
                            void 0 !== n.rotation
                                ? ((o.object3D.rotation.order = "XYZ"), o.object3D.rotation.set(THREE.Math.degToRad(n.rotation[0].toFixed(4)), THREE.Math.degToRad(n.rotation[1].toFixed(4)), THREE.Math.degToRad(n.rotation[2].toFixed(4))))
                                : o.setAttribute("rotation", { x: 0, y: 0, z: 0 }),
                            (lightTarget = document.createElement("a-entity")),
                            lightTarget.setAttribute("id", "".concat(r, "_target")),
                            lightTarget.setAttribute("position", "0 0 -1"),
                            o.append(lightTarget),
                            setTimeout(function () {
                                o.setAttribute("target", "#".concat(r, "_target"));
                            }, 100),
                            (o.entityName = "DirectionalLight");
                }
                o && o.setAttribute("id", r),
                    n.translation
                        ? (o.setAttribute("position", { x: n.translation[0].toFixed(4) / 100, y: n.translation[1].toFixed(4) / 100 - 0, z: n.translation[2].toFixed(4) / 100 }),
                          (o.Xstart = n.translation[0].toFixed(4) / 100),
                          (o.Ystart = n.translation[1].toFixed(4) / 100 - 0),
                          (o.Zstart = n.translation[2].toFixed(4) / 100))
                        : (o.setAttribute("position", { x: 0, y: 0, z: 0 }), (o.Xstart = 0), (o.Ystart = 0), (o.Zstart = 0)),
                    void 0 !== n.scale
                        ? ((o.scaleStartX = n.scale[0] / o.scaleFactor), (o.scaleStartY = n.scale[1] / o.scaleFactor), (o.scaleStartZ = n.scale[2] / o.scaleFactor))
                        : ((o.scaleStartX = 1 / o.scaleFactor), (o.scaleStartY = 1 / o.scaleFactor), (o.scaleStartZ = 1 / o.scaleFactor)),
                    void 0 !== n.rotation ? ((o.rotStartX = n.rotation[0]), (o.rotStartY = n.rotation[1]), (o.rotStartZ = n.rotation[2])) : ((o.rotStartX = 0), (o.rotStartY = 0), (o.rotStartZ = 0)),
                    n.children &&
                        n.children.map(function (e, t) {
                            var i, s, l, u, d, m;
                            ("Move" === e.className &&
                                e.children.map(function (e, t) {
                                    if ("Anim" === e.className) {
                                        (o.loopTrue = 0), e.doLoop && (o.loopTrue = 1 / 0), e.startTime ? (o.startTime = e.startTime) : (o.startTime = 0);
                                        var n = a.linear;
                                        switch (e.interpolatorName) {
                                            case "easeIn":
                                                n = a.easeIn;
                                                break;
                                            case "easeOut":
                                                n = a.easeOut;
                                                break;
                                            case "easeInOut":
                                                n = a.easeInOut;
                                        }
                                        var i = e.durationMs;
                                        e.animValues.map(function (e, t) {
                                            switch (e.name) {
                                                case "translationX":
                                                    if (e.keys && e.keys.length > 0) {
                                                        var a = [],
                                                            s = [],
                                                            c = e.start / 100;
                                                        for (Z = 0; Z < e.keys.length; Z++) a.push(e.keys[Z].value / 100), s.push(e.keys[Z].time);
                                                        a.push(e.end / 100), s.push(i), animeTransValuesArray.push([r, c, a, s, o.loopTrue, n, "x", o.startTime]);
                                                    } else animeTransArray.push([r, e.start, e.end, i, n, o.loopTrue, o.startTime, "x"]);
                                                    break;
                                                case "translationY":
                                                    if (e.keys && e.keys.length > 0) {
                                                        (a = []), (s = []), (c = e.start / 100 - 0);
                                                        for (Z = 0; Z < e.keys.length; Z++) a.push(e.keys[Z].value / 100 - 0), s.push(e.keys[Z].time);
                                                        a.push(e.end / 100 - 0), s.push(i), animeTransValuesArray.push([r, c, a, s, o.loopTrue, n, "y", o.startTime]);
                                                    } else animeTransArray.push([r, e.start, e.end, i, n, o.loopTrue, o.startTime, "y"]);
                                                    break;
                                                case "translationZ":
                                                    if (e.keys && e.keys.length > 0) {
                                                        (a = []), (s = []), (c = e.start / 100);
                                                        for (Z = 0; Z < e.keys.length; Z++) a.push(e.keys[Z].value / 100), s.push(e.keys[Z].time);
                                                        a.push(e.end / 100), s.push(i), animeTransValuesArray.push([r, c, a, s, o.loopTrue, n, "z", o.startTime]);
                                                    } else animeTransArray.push([r, e.start, e.end, i, n, o.loopTrue, o.startTime, "z"]);
                                            }
                                        });
                                    }
                                }),
                            "Rotate" === e.className &&
                                e.children.map(function (e, t) {
                                    if ("Anim" === e.className) {
                                        (o.loopTrue = 0), e.doLoop && (o.loopTrue = 1 / 0);
                                        var n = a.linear;
                                        switch (e.interpolatorName) {
                                            case "easeIn":
                                                n = a.easeIn;
                                                break;
                                            case "easeOut":
                                                n = a.easeOut;
                                                break;
                                            case "easeInOut":
                                                n = a.easeInOut;
                                        }
                                        e.startTime ? (o.startTime = e.startTime) : (o.startTime = 0);
                                        var i = e.durationMs;
                                        e.animValues.map(function (e, t) {
                                            switch (e.name) {
                                                case "rotationX":
                                                    if (e.keys && e.keys.length > 0) {
                                                        var a = [],
                                                            s = [],
                                                            c = THREE.Math.degToRad(e.start);
                                                        for (Z = 0; Z < e.keys.length; Z++) a.push(THREE.Math.degToRad(e.keys[Z].value)), s.push(e.keys[Z].time);
                                                        a.push(THREE.Math.degToRad(e.end)), s.push(i), animeRotValuesArray.push([r, c, a, s, o.loopTrue, n, "x", o.startTime]);
                                                    } else e.start != e.end && animeRotArray.push([r, e.start, e.end, i, n, o.loopTrue, o.startTime, "x"]);
                                                    break;
                                                case "rotationY":
                                                    if (e.keys && e.keys.length > 0) {
                                                        (a = []), (s = []), (c = THREE.Math.degToRad(e.start));
                                                        for (Z = 0; Z < e.keys.length; Z++) a.push(THREE.Math.degToRad(e.keys[Z].value)), s.push(e.keys[Z].time);
                                                        a.push(THREE.Math.degToRad(e.end)), s.push(i), animeRotValuesArray.push([r, c, a, s, o.loopTrue, n, "y", o.startTime]);
                                                    } else e.start != e.end && animeRotArray.push([r, e.start, e.end, i, n, o.loopTrue, o.startTime, "y"]);
                                                    break;
                                                case "rotationZ":
                                                    if (e.keys && e.keys.length > 0) {
                                                        (a = []), (s = []), (c = THREE.Math.degToRad(e.start));
                                                        for (Z = 0; Z < e.keys.length; Z++) a.push(THREE.Math.degToRad(e.keys[Z].value)), s.push(e.keys[Z].time);
                                                        a.push(THREE.Math.degToRad(e.end)), s.push(i), animeRotValuesArray.push([r, c, a, s, o.loopTrue, n, "z", o.startTime]);
                                                    } else e.start != e.end && animeRotArray.push([r, e.start, e.end, i, n, o.loopTrue, o.startTime, "z"]);
                                            }
                                        });
                                    }
                                }),
                            "Scale" === e.className &&
                                e.children.map(function (e, t) {
                                    if ("Anim" === e.className) {
                                        (o.loopTrue = 0), e.doLoop && (o.loopTrue = 1 / 0);
                                        var n = "false";
                                        e.doLoop && (n = "true");
                                        var i = a.linear;
                                        switch (e.interpolatorName) {
                                            case "easeIn":
                                                i = a.easeIn;
                                                break;
                                            case "easeOut":
                                                i = a.easeOut;
                                                break;
                                            case "easeInOut":
                                                i = a.easeInOut;
                                        }
                                        e.startTime ? (o.startTime = e.startTime) : (o.startTime = 0);
                                        var s = e.durationMs;
                                        e.animValues.map(function (e, t) {
                                            switch (e.name) {
                                                case "scaleX":
                                                    if (e.keys && e.keys.length > 0) {
                                                        var a = [],
                                                            c = [],
                                                            l = e.start / o.scaleFactor;
                                                        for (Z = 0; Z < e.keys.length; Z++) a.push(e.keys[Z].value / o.scaleFactor), c.push(e.keys[Z].time);
                                                        a.push(e.end / o.scaleFactor), c.push(s), animeScaleValuesArray.push([r, l, a, c, n, i, "x", o.startTime]);
                                                    } else e.start != e.end && animeScaleArray.push([r, e.start / o.scaleFactor, e.end / o.scaleFactor, s, i, o.loopTrue, o.startTime, "x"]);
                                                    break;
                                                case "scaleY":
                                                    if (e.keys && e.keys.length > 0) {
                                                        (a = []), (c = []), (l = e.start / o.scaleFactor);
                                                        for (Z = 0; Z < e.keys.length; Z++) a.push(e.keys[Z].value / o.scaleFactor), c.push(e.keys[Z].time);
                                                        a.push(e.end / o.scaleFactor), c.push(s), animeScaleValuesArray.push([r, l, a, c, n, i, "y", o.startTime]);
                                                    } else e.start != e.end && animeScaleArray.push([r, e.start / o.scaleFactor, e.end / o.scaleFactor, s, i, o.loopTrue, o.startTime, "y"]);
                                                    break;
                                                case "scaleZ":
                                                    if (e.keys && e.keys.length > 0) {
                                                        (a = []), (c = []), (l = e.start / o.scaleFactor);
                                                        for (Z = 0; Z < e.keys.length; Z++) a.push(e.keys[Z].value / o.scaleFactor), c.push(e.keys[Z].time);
                                                        a.push(e.end / o.scaleFactor), c.push(s), animeScaleValuesArray.push([r, l, a, c, n, i, "z", o.startTime]);
                                                    } else e.start != e.end && animeScaleArray.push([r, e.start / o.scaleFactor, e.end / o.scaleFactor, s, i, o.loopTrue, o.startTime, "z"]);
                                            }
                                        });
                                    }
                                }),
                            ("Opacity" !== e.className && "FadeIn" !== e.className && "FadeOut" !== e.className) ||
                                ("RichText" === n.className ? o.setAttribute("transparent", !0) : o.setAttribute("material", "transparent: true"),
                                e.startTime ? (o.startTime = e.startTime) : (o.startTime = 0),
                                e.children.map(function (e, t) {
                                    if ("Anim" === e.className) {
                                        (o.loopTrue = 0), e.doLoop && (o.loopTrue = 1 / 0);
                                        var i = a.linear;
                                        switch (e.interpolatorName) {
                                            case "easeIn":
                                                i = a.easeIn;
                                                break;
                                            case "easeOut":
                                                i = a.easeOut;
                                                break;
                                            case "easeInOut":
                                                i = a.easeInOut;
                                        }
                                        var s = !1;
                                        "Mesh" === n.className && (s = !0);
                                        var c = e.durationMs;
                                        e.animValues.map(function (e, t) {
                                            if (e.keys && e.keys.length > 0) {
                                                var a = [],
                                                    l = [],
                                                    u = e.start;
                                                for (p = 0; p < e.keys.length; p++) a.push(e.keys[p].value), l.push(e.keys[p].time);
                                                a.push(e.end), l.push(c), animeOpacityValuesArray.push([r, u, a, l, o.loopTrue, i, s, o.startTime]);
                                            } else if (e.start != e.end && (animeOpacityArray.push([r, e.start, e.end, c, i, o.loopTrue, o.startTime, s]), "RichText" === n.className || "TransformGroup" === n.className)) {
                                                for (var d = [], m = o.childNodes, p = m.length; p--; ) 1 == m[p].nodeType && d.unshift(m[p]);
                                                d.map(function (t) {
                                                    animeOpacityArray.push([t.getAttribute("id"), e.start, e.end, c, i, o.loopTrue, o.startTime, t.isMesh]);
                                                });
                                            }
                                        });
                                    }
                                })),
                            "Bounce" === e.className) &&
                                (e.startTime ? (o.startTime = e.startTime) : (o.startTime = 0),
                                e.children.map(function (e, t) {
                                    if ("Anim" === e.className) {
                                        var n = "false";
                                        e.doLoop && (n = "true");
                                        var a = e.durationMs;
                                        e.animValues.map(function (e, t) {
                                            switch (e.name) {
                                                case "translationX":
                                                    (i = e.start / 100), (u = e.end / 100), c.push([r, i, u, a, n, "x", o.startTime]);
                                                    break;
                                                case "translationY":
                                                    (s = e.start / 100), (d = e.end / 100), c.push([r, s, d, a, n, "y", o.startTime]);
                                                    break;
                                                case "translationZ":
                                                    (l = e.start / 100), (m = e.end / 100), c.push([r, l, m, a, n, "z", o.startTime]);
                                            }
                                        });
                                    }
                                }));
                            "TargetedAction" === e.className &&
                                (o.classList.add("clickable"),
                                (o.shouldClick = !0),
                                e.children.map(function (t) {
                                    switch (t.className) {
                                        case "ActionPlayAnimation":
                                            var n = !1;
                                            void 0 !== t.loop && (n = t.loop),
                                                o.addEventListener("click", function () {
                                                    triggerGLBanim(e.target, t.clipName, n);
                                                });
                                    }
                                })),
                                "AnimClip" === e.className &&
                                    e.children.map(function (t) {
                                        var n = !1;
                                        void 0 !== t.doLoop && t.doLoop && (n = !0);
                                        var a = 0;
                                        void 0 !== t.startTime && (a = t.startTime);
                                        var i = "*";
                                        void 0 !== e.clipName && (i = e.clipName), gltfClipAnimations.push([r, i, a, t.durationMs, n]);
                                    });
                        }),
                    n.userData &&
                        ((n.userData.blippAction && "no-action" !== n.userData.blippAction.type && void 0 === n.hidden) || (n.userData.blippAction && "no-action" !== n.userData.blippAction.type && !n.hidden)) &&
                        ("RichText" === n.className ? (o.childNodes[0].classList.add("clickable"), (o.childNodes[0].shouldClick = !0)) : (o.classList.add("clickable"), (o.shouldClick = !0)),
                        n.eventLabel
                            ? o.addEventListener("click", function () {
                                  if (!animsPaused) {
                                      var e = n.eventLabel;
                                      new CustomEvent("cta-clicked", { detail: { id: e } });
                                  }
                              })
                            : o.addEventListener("click", function () {
                                  if (!animsPaused) {
                                      var e = n.className + n.userData.blippAction.type;
                                      new CustomEvent("cta-clicked", { detail: { id: e } });
                                  }
                              })),
                    void 0 !== i ? (W = document.getElementById(i)).appendChild(o) : s.appendChild(o);
                for (var H = o, U = []; H; ) U.push(H), (H = H.parentNode);
                if (
                    (U.length > 4 &&
                        sceneRids.map(function (e, t) {
                            var n,
                                r = o.childNodes;
                            if (U.indexOf(document.getElementById(e)) > -1)
                                if (r.length > 0) for (o.inScene = t, n = 0; n < r.length; n++) r[n].inScene = t;
                                else o.inScene = t;
                        }),
                    void 0 !== i)
                ) {
                    var W = document.getElementById(i);
                    sceneRids.indexOf(i) < 0 &&
                        (("TransformGroup" !== W.entityName && "RichText" !== W.entityName) ||
                            (1 !== W.opacityStart &&
                                (o.isMesh ? (o.setAttribute("modelopacity", W.opacityStart), (o.opacityStart = W.opacityStart)) : (o.setAttribute("material", "opacity: ".concat(W.opacityStart)), (o.opacityStart = W.opacityStart)))));
                }
                var q = 0,
                    Y = 0,
                    $ = 0;
                switch (n.className) {
                    case "Sprite":
                        void 0 !== n.texture
                            ? o.addEventListener("materialtextureloaded", function () {
                                  F(r, newObjectCount, t);
                              })
                            : setTimeout(function () {
                                  F(r, newObjectCount, t);
                              }, 200);
                        break;
                    case "Email":
                        o.addEventListener("materialtextureloaded", function () {
                            F(r, newObjectCount, t);
                        });
                        break;
                    case "CylinderMap":
                    case "SphereMap":
                        void 0 !== n.texture
                            ? document.getElementById(n.texture).addEventListener("load", function () {
                                  F(r, newObjectCount, t);
                              })
                            : o.addEventListener("model-loaded", function () {
                                  F(r, newObjectCount, t);
                              });
                        break;
                    case "BasicShapes":
                    case "Mesh":
                        o.addEventListener("model-loaded", function () {
                            F(r, newObjectCount, t);
                        });
                        break;
                    case "RichText":
                        o.addEventListener("loaded", function () {
                            F(r, newObjectCount, t);
                        });
                        break;
                    case "Video":
                        !n.userData.blippAction.params.fullScreen && n.userData.blippAction.params.autoPlay
                            ? o.vidAsset.addEventListener("progress", function (e) {
                                  0 === Y
                                      ? ((Y = Date.now()),
                                        (q = Date.now()),
                                        (function e() {
                                            0 === $ && ($ = Date.now() - Y);
                                            $ < 900
                                                ? setTimeout(function () {
                                                      ($ = Date.now() - q), e();
                                                  }, 1e3)
                                                : setTimeout(function () {
                                                      F(r, newObjectCount, t);
                                                  }, 500);
                                        })())
                                      : (q = Date.now());
                              })
                            : setTimeout(function () {
                                  F(r, newObjectCount, t);
                              }, 500);
                    case "GifSprite":
                        document.getElementById("scene1").addEventListener(e + n.texture, function () {
                            F(r, newObjectCount, t);
                        });
                        break;
                    default:
                        setTimeout(function () {
                            F(r, newObjectCount, t);
                        }, 500);
                }
                if (n.userData && n.userData.blippAction)
                    if (n.userData.blippAction.params) {
                        if (n.userData.blippAction.type)
                            switch (n.userData.blippAction.type) {
                                case "playAudio":
                                    m(r, n.userData.blippAction.type, n.userData.blippAction.params.fullName, n.userData.blippAction.params.refId);
                                    break;
                                case "playVideo":
                                    "Video" !== n.className &&
                                        (n.userData.blippAction.params.external ? m(r, "playVideoExternal", n.userData.blippAction.params.fullName) : m(r, n.userData.blippAction.type, n.userData.blippAction.params.fullName));
                                    break;
                                case "website":
                                case "buylink":
                                case "facebook":
                                case "instagram":
                                case "linkedin":
                                case "website":
                                case "youtube":
                                case "twitter":
                                case "pinterest":
                                case "soundcloud":
                                case "buy":
                                case "spotify":
                                    m(r, n.userData.blippAction.type, n.userData.blippAction.params.value);
                                    break;
                                case "call":
                                    m(r, n.userData.blippAction.type, n.userData.blippAction.params.number);
                                    break;
                                case "scene-switch":
                                    if ("RichText" === n.className) {
                                        for (var X = [], J = o.childNodes, Z = J.length; Z--; ) X.unshift(J[Z]);
                                        (X[0].toScene = sceneNames.indexOf(n.userData.blippAction.params.scene)),
                                            X[0].addEventListener("click", function (e) {
                                                animsPaused || (f(), y(), G("s", this.toScene), (animsPaused = !1));
                                            });
                                    } else
                                        (o.toScene = sceneNames.indexOf(n.userData.blippAction.params.scene)),
                                            o.addEventListener("click", function (e) {
                                                animsPaused || (f(), y(), G("s", this.toScene), (animsPaused = !1));
                                            });
                            }
                    } else "email" === n.userData.blippAction.type && addEmailInteraction(r, n.senderEmail, n.subjectLine, n.body);
            },
            createdObjectCount: createdObjectCount,
            loadingProgressStep: loadingProgressStep,
            startSceneActions: j,
            changeSceneAndRefresh: G,
        };
    },
    4: function (e, t) {
        var n = {
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
                    return null !== n.surface
                        ? new Promise(function (e, t) {
                              e({ markerUrl: n.markerUrl, surface: n.surface });
                          })
                        : fetch("/blippSurface?address=".concat(e))
                              .then(function (e) {
                                  return e.json();
                              })
                              .then(function (e) {
                                  return (n.surface = e.surface), (n.markerUrl = e.markerUrl), { markerUrl: e.markerUrl, surface: e.surface ? e.surface : "gyro" };
                              })
                              .catch(function (e) {
                                  return console.log("Failed to fetch surface :", e), { markerUrl: "", surface: "gyro" };
                              });
                }),
        };
        e.exports = { sharedConstants: n };
    },
    45: function (e, t, n) {
        "use strict";
        n.r(t);
        var r,
            a,
            i = n(22),
            o = n(4);
        n.d(t, "initializeTracking", function () {
            return k;
        }),
            n.d(t, "initializeClassifiers", function () {
                return S;
            }),
            n.d(t, "initializeVideoBuffers", function () {
                return _;
            }),
            n.d(t, "callback_frame", function () {
                return F;
            }),
            n.d(t, "release", function () {
                return I;
            }),
            n.d(t, "onLoad", function () {
                return B;
            });
        var s,
            c,
            l,
            u,
            d = 1,
            m = 1,
            p = 0,
            f = 0,
            h = !1,
            y = !1,
            g = !1,
            b = 1,
            v = (0, n(7).getUrlParameter)("a"),
            w = document.getElementById("videorender"),
            A = document.getElementById("videoElement1"),
            E = Object(i.a)({
                locateFile: function (e) {
                    return e.endsWith(".wasm") ? "0b0c2b9ec86e9e0801e8d7830a2966b6.wasm" : e;
                },
            });
        function k() {
            var e = E.cwrap("xzimgNaturalImageInitialize", "number", ["number", "number", "number", "number", "number"]);
            Math.atan((Math.tan((25 * 3.1415) / 180) * w.width) / w.height);
            d = e(A.videoWidth, A.videoHeight, A.videoWidth / 2, A.videoHeight / 2, (50 * 3.1415) / 180);
        }
        function S(e) {
            D = !0;
            var t = new XMLHttpRequest();
            t.open("GET", e, !0),
                (t.responseType = "arraybuffer"),
                (t.onload = function (e) {
                    console.log("XML Http event: ", e);
                    var n = t.response;
                    if (n) {
                        var r = new Uint8Array(n);
                        (u = r.byteLength), (l = E._malloc(u)), E.HEAPU8.set(r, l);
                        var a = E.cwrap("xzimgNaturalImageAddTarget", "number", ["number", "number", "number"]);
                        (d = a(l, u, 1)), E._free(l), (b -= 1), d && (noProblemsFound = !0);
                    } else console.log("Loading classifier file failed");
                }),
                t.send(null);
        }
        function _() {
            if (0 != A.videoWidth && 0 != A.videoHeight)
                if (E.asm.malloc) {
                    console.log("==> canvas (initialize_video_and_buffers) ---: " + w.width + " " + w.height),
                        null == (r = w.getContext("2d")) && console.log("==> NULL"),
                        (s = E._malloc(w.width * w.height * 1 * 4)),
                        (c = E._malloc(160)),
                        (y = !0);
                    var e = document.getElementById("videoElement1"),
                        t = document.getElementById("aframeHolder");
                    console.log("Device proportion : (".concat(e.offsetWidth, ", ").concat(e.offsetHeight, ")")), (t.height = e.offsetHeight), (t.width = e.offsetWidth);
                } else console.log("==> Augmented Vision library is not ready");
            else console.log("==> Video Capture is not ready");
        }
        var x = document.getElementById("videoElement1"),
            T = !1;
        window.allReady = function () {
            T = !0;
        };
        var M = 0,
            D = !1;
        function F() {
            if ((0 != p && x.videoWidth != p) || (0 != f && x.videoHeight != f)) {
                if (b > 0) return void requestAnimationFrame(F);
                console.log("Releasing"), E.cwrap("xzimgNaturalImageRelease")(), (y = !1), (g = !1), (h = !1), (b = 1);
            }
            if (
                ((p = x.videoWidth),
                (f = x.videoHeight),
                (w.width = x.videoWidth),
                (w.height = x.videoHeight),
                x.readyState == x.HAVE_ENOUGH_DATA &&
                    (T && !y && _(),
                    T && y && !g && (k(), (g = !0)),
                    T &&
                        g &&
                        !h &&
                        ((h = !0),
                        (function e(t) {
                            D ||
                                ((D = !0),
                                fetch(t).then(function (n) {
                                    (D = !1),
                                        403 === n.status && M++ < 2
                                            ? ((document.querySelector("#splash").style.display = "block"),
                                              (document.querySelector("#messagewrapper").style.display = "block"),
                                              (document.querySelector("#waitingmessage").style.display = "block"),
                                              $("#waitingmessage").html("Loading tracker"),
                                              setTimeout(function () {
                                                  e(t);
                                              }, 2e3))
                                            : (200 !== n.status && 206 !== n.status) ||
                                              ((document.querySelector("#splash").style.display = "none"),
                                              (document.querySelector("#messagewrapper").style.display = "none"),
                                              (document.querySelector("#waitingmessage").style.display = "none"),
                                              S("https://img-classifier.blippar.com" + "/".concat(v, ".jpg.cl")));
                                }));
                        })("https://img-classifier.blippar.com" + "/".concat(v, ".jpg.cl")))),
                g && 0 == b && x.readyState == x.HAVE_ENOUGH_DATA)
            ) {
                r.drawImage(x, 0, 0, w.width, w.height), (a = r.getImageData(0, 0, w.width, w.height));
                for (var e = performance.now(), t = new Uint32Array(a.data.buffer), n = t.length, i = s / 4, l = 0; l < n; l++) E.HEAPU32[i + l] = t[l];
                var u = E.cwrap("xzimgNaturalImageTrack_js", "number", ["number", "number", "number", "number"]);
                -11 == (d = u(s, w.width, w.height, 1)) && console.log("protection activated, please reload your plugin");
                var A = performance.now();
                m = 0.9 * m + 0.1 * (A - e);
                var I = document.getElementById("trackingWrapper");
                if (d > 0) {
                    var B, C, N;
                    E.cwrap("xzimgNaturalImageGetInfo", "number", ["number", "number", "number"])(0, 1, c);
                    (B = E.getValue(c, "double")), (C = E.getValue(c + 8, "double")), (N = E.getValue(c + 16, "double"));
                    var R = E.getValue(c + 24, "double"),
                        O = E.getValue(c + 32, "double"),
                        P = E.getValue(c + 40, "double"),
                        z = E.getValue(c + 48, "double"),
                        j = E.getValue(c + 56, "double"),
                        L = E.getValue(c + 64, "double"),
                        V = E.getValue(c + 72, "double"),
                        H = E.getValue(c + 80, "double"),
                        G = E.getValue(c + 88, "double"),
                        U = (E.getValue(c + 152, "i32"), new THREE.Matrix4());
                    U.set(R, O, P, B, -z, -j, -L, C, -V, -H, -G, N, 0, 0, 0, 1),
                        (I.object3D.position.x = U.elements[12]),
                        (I.object3D.position.y = -U.elements[13]),
                        (I.object3D.position.z = -U.elements[14]),
                        console.log("Marker size : ".concat(window.markerWidth, "x").concat(window.markerHeight));
                    var W = 90 / window.markerWidth;
                    (I.object3D.scale.x = W),
                        (I.object3D.scale.y = W),
                        (I.object3D.scale.z = W),
                        console.log(I.object3D.scale),
                        0 !== U.elements[12] && (console.log(I.object3D.scale.x), console.log(I.object3D.scale.y)),
                        (I.object3D.matrix = U),
                        I.object3D.rotation.setFromRotationMatrix(I.object3D.matrix),
                        (o.sharedConstants.trackingState = "have_marker");
                } else (I.object3D.position.x = 0), (I.object3D.position.y = 0), (I.object3D.position.z = 15), (o.sharedConstants.trackingState = "lost_marker");
                void 0;
            }
            requestAnimationFrame(F);
        }
        function I() {
            E._free(s), E._free(c);
        }
        function B() {
            console.log("==> onLoad (page) function ");
            var e = document.querySelector("#camera"),
                t = !(window.innerWidth > window.innerHeight);
            o.sharedConstants.getSurface(v).then(function (n) {
                if ("tracking" === n.surface) {
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
                        requestAnimationFrame(F),
                        document.getElementById("trackingWrapper").setAttribute("position", "0 0 15"),
                        console.log("Marker: ", n.markerUrl),
                        (document.getElementById("trackingImg").style.backgroundImage = "url(" + n.markerUrl[0] + ")");
                    var r = new Image();
                    (r.onload = function () {
                        (window.markerWidth = this.width), (window.markerHeight = this.height);
                    }),
                        (r.src = n.markerUrl[0]);
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
        window.onload = B;
    },
    53: function (e, t) {},
    54: function (e, t) {},
    74: function (e, t) {},
    76: function (e, t) {},
});
