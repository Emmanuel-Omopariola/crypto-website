/*! For license information please see bundle.js.LICENSE.txt */
(() => {
    "use strict";

    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    var t = "(prefers-reduced-motion: reduce)",
        n = {
            CREATED: 1,
            MOUNTED: 2,
            IDLE: 3,
            MOVING: 4,
            SCROLLING: 5,
            DRAGGING: 6,
            DESTROYED: 7
        };

    function i(e) {
        e.length = 0
    }

    function r(e, t, n) {
        return Array.prototype.slice.call(e, t, n)
    }

    function o(e) {
        return e.bind.apply(e, [null].concat(r(arguments, 1)))
    }
    var s = setTimeout,
        u = function() {};

    function a(e) {
        return requestAnimationFrame(e)
    }

    function c(e, t) {
        return typeof t === e
    }

    function l(e) {
        return !h(e) && c("object", e)
    }
    var d = Array.isArray,
        f = o(c, "function"),
        p = o(c, "string"),
        v = o(c, "undefined");

    function h(e) {
        return null === e
    }

    function g(e) {
        try {
            return e instanceof(e.ownerDocument.defaultView || window).HTMLElement
        } catch (e) {
            return !1
        }
    }

    function y(e) {
        return d(e) ? e : [e]
    }

    function m(e, t) {
        y(e).forEach(t)
    }

    function b(e, t) {
        return e.indexOf(t) > -1
    }

    function _(e, t) {
        return e.push.apply(e, y(t)), e
    }

    function w(e, t, n) {
        e && m(t, (function(t) {
            t && e.classList[n ? "add" : "remove"](t)
        }))
    }

    function E(e, t) {
        w(e, p(t) ? t.split(" ") : t, !0)
    }

    function S(e, t) {
        m(t, e.appendChild.bind(e))
    }

    function I(e, t) {
        m(e, (function(e) {
            var n = (t || e).parentNode;
            n && n.insertBefore(e, t)
        }))
    }

    function k(e, t) {
        return g(e) && (e.msMatchesSelector || e.matches).call(e, t)
    }

    function P(e, t) {
        var n = e ? r(e.children) : [];
        return t ? n.filter((function(e) {
            return k(e, t)
        })) : n
    }

    function O(e, t) {
        return t ? P(e, t)[0] : e.firstElementChild
    }
    var T = Object.keys;

    function x(e, t, n) {
        return e && (n ? T(e).reverse() : T(e)).forEach((function(n) {
            "__proto__" !== n && t(e[n], n)
        })), e
    }

    function L(e) {
        return r(arguments, 1).forEach((function(t) {
            x(t, (function(n, i) {
                e[i] = t[i]
            }))
        })), e
    }

    function R(e) {
        return r(arguments, 1).forEach((function(t) {
            x(t, (function(t, n) {
                d(t) ? e[n] = t.slice() : l(t) ? e[n] = R({}, l(e[n]) ? e[n] : {}, t) : e[n] = t
            }))
        })), e
    }

    function A(e, t) {
        m(t || T(e), (function(t) {
            delete e[t]
        }))
    }

    function D(e, t) {
        m(e, (function(e) {
            m(t, (function(t) {
                e && e.removeAttribute(t)
            }))
        }))
    }

    function N(e, t, n) {
        l(t) ? x(t, (function(t, n) {
            N(e, n, t)
        })) : m(e, (function(e) {
            h(n) || "" === n ? D(e, t) : e.setAttribute(t, String(n))
        }))
    }

    function C(e, t, n) {
        var i = document.createElement(e);
        return t && (p(t) ? E(i, t) : N(i, t)), n && S(n, i), i
    }

    function q(e, t, n) {
        if (v(n)) return getComputedStyle(e)[t];
        h(n) || (e.style[t] = "" + n)
    }

    function U(e, t) {
        q(e, "display", t)
    }

    function M(e) {
        e.setActive && e.setActive() || e.focus({
            preventScroll: !0
        })
    }

    function j(e, t) {
        return e.getAttribute(t)
    }

    function F(e, t) {
        return e && e.classList.contbotns(t)
    }

    function z(e) {
        return e.getBoundingClientRect()
    }

    function V(e) {
        m(e, (function(e) {
            e && e.parentNode && e.parentNode.removeChild(e)
        }))
    }

    function $(e) {
        return O((new DOMParser).parseFromString(e, "text/html").body)
    }

    function W(e, t) {
        e.preventDefault(), t && (e.stopPropagation(), e.stopImmediatePropagation())
    }

    function B(e, t) {
        return e && e.querySelector(t)
    }

    function K(e, t) {
        return t ? r(e.querySelectorAll(t)) : []
    }

    function Q(e, t) {
        w(e, t, !1)
    }

    function Y(e) {
        return e.timeStamp
    }

    function H(e) {
        return p(e) ? e : e ? e + "px" : ""
    }
    var J = "splide",
        G = "data-" + J;

    function X(e, t) {
        if (!e) throw new Error("[" + J + "] " + (t || ""))
    }
    var Z = Math.min,
        ee = Math.max,
        te = Math.floor,
        ne = Math.ceil,
        ie = Math.abs;

    function re(e, t, n) {
        return ie(e - t) < n
    }

    function oe(e, t, n, i) {
        var r = Z(t, n),
            o = ee(t, n);
        return i ? r < e && e < o : r <= e && e <= o
    }

    function se(e, t, n) {
        var i = Z(t, n),
            r = ee(t, n);
        return Z(ee(i, e), r)
    }

    function ue(e) {
        return +(e > 0) - +(e < 0)
    }

    function ae(e, t) {
        return m(t, (function(t) {
            e = e.replace("%s", "" + t)
        })), e
    }

    function ce(e) {
        return e < 10 ? "0" + e : "" + e
    }
    var le = {};

    function de() {
        var e = [];

        function t(e, t, n) {
            m(e, (function(e) {
                e && m(t, (function(t) {
                    t.split(" ").forEach((function(t) {
                        var i = t.split(".");
                        n(e, i[0], i[1])
                    }))
                }))
            }))
        }
        return {
            bind: function(n, i, r, o) {
                t(n, i, (function(t, n, i) {
                    var s = "addEventListener" in t,
                        u = s ? t.removeEventListener.bind(t, n, r, o) : t.removeListener.bind(t, r);
                    s ? t.addEventListener(n, r, o) : t.addListener(r), e.push([t, n, i, r, u])
                }))
            },
            unbind: function(n, i, r) {
                t(n, i, (function(t, n, i) {
                    e = e.filter((function(e) {
                        return !!(e[0] !== t || e[1] !== n || e[2] !== i || r && e[3] !== r) || (e[4](), !1)
                    }))
                }))
            },
            dispatch: function(e, t, n) {
                var i;
                return "function" == typeof CustomEvent ? i = new CustomEvent(t, {
                    bubbles: !0,
                    detbotl: n
                }) : (i = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !1, n), e.dispatchEvent(i), i
            },
            destroy: function() {
                e.forEach((function(e) {
                    e[4]()
                })), i(e)
            }
        }
    }
    var fe = "mounted",
        pe = "ready",
        ve = "move",
        he = "moved",
        ge = "click",
        ye = "refresh",
        me = "updated",
        be = "resize",
        _e = "resized",
        we = "scroll",
        Ee = "scrolled",
        Se = "destroy",
        Ie = "navigation:mounted",
        ke = "autoplay:play",
        Pe = "autoplay:pause",
        Oe = "lazyload:loaded",
        Te = "ei";

    function xe(e) {
        var t = e ? e.event.bus : document.createDocumentFragment(),
            n = de();
        return e && e.event.on(Se, n.destroy), L(n, {
            bus: t,
            on: function(e, i) {
                n.bind(t, y(e).join(" "), (function(e) {
                    i.apply(i, d(e.detbotl) ? e.detbotl : [])
                }))
            },
            off: o(n.unbind, t),
            emit: function(e) {
                n.dispatch(t, e, r(arguments, 1))
            }
        })
    }

    function Le(e, t, n, i) {
        var r, o, s = Date.now,
            u = 0,
            c = !0,
            l = 0;

        function d() {
            if (!c) {
                if (u = e ? Z((s() - r) / e, 1) : 1, n && n(u), u >= 1 && (t(), r = s(), i && ++l >= i)) return f();
                o = a(d)
            }
        }

        function f() {
            c = !0
        }

        function p() {
            o && cancelAnimationFrame(o), u = 0, o = 0, c = !0
        }
        return {
            start: function(t) {
                t || p(), r = s() - (t ? u * e : 0), c = !1, o = a(d)
            },
            rewind: function() {
                r = s(), u = 0, n && n(u)
            },
            pause: f,
            cancel: p,
            set: function(t) {
                e = t
            },
            isPaused: function() {
                return c
            }
        }
    }
    var Re = "Arrow",
        Ae = Re + "Left",
        De = Re + "Right",
        Ne = Re + "Up",
        Ce = Re + "Down",
        qe = "ttb",
        Ue = {
            width: ["height"],
            left: ["top", "right"],
            right: ["bottom", "left"],
            x: ["y"],
            X: ["Y"],
            Y: ["X"],
            ArrowLeft: [Ne, De],
            ArrowRight: [Ce, Ae]
        };
    var Me = "role",
        je = "tabindex",
        Fe = "aria-",
        ze = Fe + "controls",
        Ve = Fe + "current",
        $e = Fe + "selected",
        We = Fe + "label",
        Be = Fe + "labelledby",
        Ke = Fe + "hidden",
        Qe = Fe + "orientation",
        Ye = Fe + "roledescription",
        He = Fe + "live",
        Je = Fe + "busy",
        Ge = Fe + "atomic",
        Xe = [Me, je, "disabled", ze, Ve, We, Be, Ke, Qe, Ye],
        Ze = J + "__",
        et = "is-",
        tt = J,
        nt = Ze + "track",
        it = Ze + "list",
        rt = Ze + "slide",
        ot = rt + "--clone",
        st = rt + "__contbotner",
        ut = Ze + "arrows",
        at = Ze + "arrow",
        ct = at + "--prev",
        lt = at + "--next",
        dt = Ze + "pagination",
        ft = dt + "__page",
        pt = Ze + "progress__bar",
        vt = Ze + "toggle",
        ht = Ze + "sr",
        gt = et + "initialized",
        yt = et + "active",
        mt = et + "prev",
        bt = et + "next",
        _t = et + "visible",
        wt = et + "loading",
        Et = et + "focus-in",
        St = et + "overflow",
        It = [yt, _t, mt, bt, wt, Et, St],
        kt = {
            slide: rt,
            clone: ot,
            arrows: ut,
            arrow: at,
            prev: ct,
            next: lt,
            pagination: dt,
            page: ft,
            spinner: Ze + "spinner"
        },
        Pt = "touchstart mousedown",
        Ot = "touchmove mousemove",
        Tt = "touchend touchcancel mouseup click",
        xt = "slide",
        Lt = "loop",
        Rt = "fade";
    var At = G + "-interval",
        Dt = {
            passive: !1,
            capture: !0
        },
        Nt = {
            Spacebar: " ",
            Right: De,
            Left: Ae,
            Up: Ne,
            Down: Ce
        };

    function Ct(e) {
        return e = p(e) ? e : e.key, Nt[e] || e
    }
    var qt = "keydown",
        Ut = G + "-lazy",
        Mt = Ut + "-srcset",
        jt = "[" + Ut + "], [" + Mt + "]",
        Ft = [" ", "Enter"],
        zt = Object.freeze({
            __proto__: null,
            Media: function(e, n, i) {
                var r = e.state,
                    o = i.breakpoints || {},
                    s = i.reducedMotion || {},
                    u = de(),
                    a = [];

                function c(e) {
                    e && u.destroy()
                }

                function l(e, t) {
                    var n = matchMedia(t);
                    u.bind(n, "change", d), a.push([e, n])
                }

                function d() {
                    var t = r.is(7),
                        n = i.direction,
                        o = a.reduce((function(e, t) {
                            return R(e, t[1].matches ? t[0] : {})
                        }), {});
                    A(i), f(o), i.destroy ? e.destroy("completely" === i.destroy) : t ? (c(!0), e.mount()) : n !== i.direction && e.refresh()
                }

                function f(t, n, o) {
                    R(i, t), n && R(Object.getPrototypeOf(i), t), !o && r.is(1) || e.emit(me, i)
                }
                return {
                    setup: function() {
                        var e = "min" === i.mediaQuery;
                        T(o).sort((function(t, n) {
                            return e ? +t - +n : +n - +t
                        })).forEach((function(t) {
                            l(o[t], "(" + (e ? "min" : "max") + "-width:" + t + "px)")
                        })), l(s, t), d()
                    },
                    destroy: c,
                    reduce: function(e) {
                        matchMedia(t).matches && (e ? R(i, s) : A(i, T(s)))
                    },
                    set: f
                }
            },
            Direction: function(e, t, n) {
                return {
                    resolve: function(e, t, i) {
                        var r = "rtl" !== (i = i || n.direction) || t ? i === qe ? 0 : -1 : 1;
                        return Ue[e] && Ue[e][r] || e.replace(/width|left|right/i, (function(e, t) {
                            var n = Ue[e.toLowerCase()][r] || e;
                            return t > 0 ? n.charAt(0).toUpperCase() + n.slice(1) : n
                        }))
                    },
                    orient: function(e) {
                        return e * ("rtl" === n.direction ? 1 : -1)
                    }
                }
            },
            Elements: function(e, t, n) {
                var r, o, s, u = xe(e),
                    a = u.on,
                    c = u.bind,
                    l = e.root,
                    d = n.i18n,
                    p = {},
                    v = [],
                    h = [],
                    g = [];

                function y() {
                    var e, t, i;
                    r = S("." + nt), o = O(r, "." + it), X(r && o, "A track/list element is missing."), _(v, P(o, "." + rt + ":not(." + ot + ")")), x({
                        arrows: ut,
                        pagination: dt,
                        prev: ct,
                        next: lt,
                        bar: pt,
                        toggle: vt
                    }, (function(e, t) {
                        p[t] = S("." + e)
                    })), L(p, {
                        root: l,
                        track: r,
                        list: o,
                        slides: v
                    }), t = l.id || "" + (e = J) + ce(le[e] = (le[e] || 0) + 1), i = n.role, l.id = t, r.id = r.id || t + "-track", o.id = o.id || t + "-list", !j(l, Me) && "SECTION" !== l.tagName && i && N(l, Me, i), N(l, Ye, d.carousel), N(o, Me, "presentation"), b()
                }

                function m(e) {
                    var t = Xe.concat("style");
                    i(v), Q(l, h), Q(r, g), D([r, o], t), D(l, e ? t : ["style", Ye])
                }

                function b() {
                    Q(l, h), Q(r, g), h = I(tt), g = I(nt), E(l, h), E(r, g), N(l, We, n.label), N(l, Be, n.labelledby)
                }

                function S(e) {
                    var t = B(l, e);
                    return t && function(e, t) {
                        if (f(e.closest)) return e.closest(t);
                        for (var n = e; n && 1 === n.nodeType && !k(n, t);) n = n.parentElement;
                        return n
                    }(t, "." + tt) === l ? t : void 0
                }

                function I(e) {
                    return [e + "--" + n.type, e + "--" + n.direction, n.drag && e + "--draggable", n.isNavigation && e + "--nav", e === tt && yt]
                }
                return L(p, {
                    setup: y,
                    mount: function() {
                        a(ye, m), a(ye, y), a(me, b), c(document, Pt + " keydown", (function(e) {
                            s = "keydown" === e.type
                        }), {
                            capture: !0
                        }), c(l, "focusin", (function() {
                            w(l, Et, !!s)
                        }))
                    },
                    destroy: m
                })
            },
            Slides: function(e, t, n) {
                var r = xe(e),
                    s = r.on,
                    u = r.emit,
                    a = r.bind,
                    c = t.Elements,
                    l = c.slides,
                    d = c.list,
                    v = [];

                function h() {
                    l.forEach((function(e, t) {
                        P(e, t, -1)
                    }))
                }

                function _() {
                    x((function(e) {
                        e.destroy()
                    })), i(v)
                }

                function P(t, n, i) {
                    var r = function(e, t, n, i) {
                        var r, s = xe(e),
                            u = s.on,
                            a = s.emit,
                            c = s.bind,
                            l = e.Components,
                            d = e.root,
                            f = e.options,
                            p = f.isNavigation,
                            v = f.updateOnMove,
                            h = f.i18n,
                            g = f.pagination,
                            y = f.slideFocus,
                            m = l.Direction.resolve,
                            b = j(i, "style"),
                            _ = j(i, We),
                            E = n > -1,
                            S = O(i, "." + st);

                        function I() {
                            var r = e.splides.map((function(e) {
                                var n = e.splide.Components.Slides.getAt(t);
                                return n ? n.slide.id : ""
                            })).join(" ");
                            N(i, We, ae(h.slideX, (E ? n : t) + 1)), N(i, ze, r), N(i, Me, y ? "button" : ""), y && D(i, Ye)
                        }

                        function k() {
                            r || P()
                        }

                        function P() {
                            if (!r) {
                                var n = e.index;
                                (o = T()) !== F(i, yt) && (w(i, yt, o), N(i, Ve, p && o || ""), a(o ? "active" : "inactive", x)),
                                    function() {
                                        var t = function() {
                                                if (e.is(Rt)) return T();
                                                var t = z(l.Elements.track),
                                                    n = z(i),
                                                    r = m("left", !0),
                                                    o = m("right", !0);
                                                return te(t[r]) <= ne(n[r]) && te(n[o]) <= ne(t[o])
                                            }(),
                                            n = !t && (!T() || E);
                                        if (e.state.is([4, 5]) || N(i, Ke, n || ""), N(K(i, f.focusableNodes || ""), je, n ? -1 : ""), y && N(i, je, n ? -1 : 0), t !== F(i, _t) && (w(i, _t, t), a(t ? "visible" : "hidden", x)), !t && document.activeElement === i) {
                                            var r = l.Slides.getAt(e.index);
                                            r && M(r.slide)
                                        }
                                    }(), w(i, mt, t === n - 1), w(i, bt, t === n + 1)
                            }
                            var o
                        }

                        function T() {
                            var i = e.index;
                            return i === t || f.cloneStatus && i === n
                        }
                        var x = {
                            index: t,
                            slideIndex: n,
                            slide: i,
                            contbotner: S,
                            isClone: E,
                            mount: function() {
                                E || (i.id = d.id + "-slide" + ce(t + 1), N(i, Me, g ? "tabpanel" : "group"), N(i, Ye, h.slide), N(i, We, _ || ae(h.slideLabel, [t + 1, e.length]))), c(i, "click", o(a, ge, x)), c(i, "keydown", o(a, "sk", x)), u([he, "sh", Ee], P), u(Ie, I), v && u(ve, k)
                            },
                            destroy: function() {
                                r = !0, s.destroy(), Q(i, It), D(i, Xe), N(i, "style", b), N(i, We, _ || "")
                            },
                            update: P,
                            style: function(e, t, n) {
                                q(n && S || i, e, t)
                            },
                            isWithin: function(n, i) {
                                var r = ie(n - t);
                                return E || !f.rewind && !e.is(Lt) || (r = Z(r, e.length - r)), r <= i
                            }
                        };
                        return x
                    }(e, n, i, t);
                    r.mount(), v.push(r), v.sort((function(e, t) {
                        return e.index - t.index
                    }))
                }

                function T(e) {
                    return e ? L((function(e) {
                        return !e.isClone
                    })) : v
                }

                function x(e, t) {
                    T(t).forEach(e)
                }

                function L(e) {
                    return v.filter(f(e) ? e : function(t) {
                        return p(e) ? k(t.slide, e) : b(y(e), t.index)
                    })
                }
                return {
                    mount: function() {
                        h(), s(ye, _), s(ye, h)
                    },
                    destroy: _,
                    update: function() {
                        x((function(e) {
                            e.update()
                        }))
                    },
                    register: P,
                    get: T,
                    getIn: function(e) {
                        var i = t.Controller,
                            r = i.toIndex(e),
                            o = i.hasFocus() ? 1 : n.perPage;
                        return L((function(e) {
                            return oe(e.index, r, r + o - 1)
                        }))
                    },
                    getAt: function(e) {
                        return L(e)[0]
                    },
                    add: function(e, t) {
                        m(e, (function(e) {
                            if (p(e) && (e = $(e)), g(e)) {
                                var i = l[t];
                                i ? I(e, i) : S(d, e), E(e, n.classes.slide), r = e, s = o(u, be), c = K(r, "img"), (f = c.length) ? c.forEach((function(e) {
                                    a(e, "load error", (function() {
                                        --f || s()
                                    }))
                                })) : s()
                            }
                            var r, s, c, f
                        })), u(ye)
                    },
                    remove: function(e) {
                        V(L(e).map((function(e) {
                            return e.slide
                        }))), u(ye)
                    },
                    forEach: x,
                    filter: L,
                    style: function(e, t, n) {
                        x((function(i) {
                            i.style(e, t, n)
                        }))
                    },
                    getLength: function(e) {
                        return e ? l.length : v.length
                    },
                    isEnough: function() {
                        return v.length > n.perPage
                    }
                }
            },
            Layout: function(e, t, n) {
                var i, r, s, u = xe(e),
                    a = u.on,
                    c = u.bind,
                    d = u.emit,
                    f = t.Slides,
                    p = t.Direction.resolve,
                    v = t.Elements,
                    h = v.root,
                    g = v.track,
                    y = v.list,
                    m = f.getAt,
                    b = f.style;

                function _() {
                    i = n.direction === qe, q(h, "maxWidth", H(n.width)), q(g, p("paddingLeft"), S(!1)), q(g, p("paddingRight"), S(!0)), E(!0)
                }

                function E(e) {
                    var t, o = z(h);
                    (e || r.width !== o.width || r.height !== o.height) && (q(g, "height", (t = "", i && (X(t = I(), "height or heightRatio is missing."), t = "calc(" + t + " - " + S(!1) + " - " + S(!0) + ")"), t)), b(p("marginRight"), H(n.gap)), b("width", n.autoWidth ? null : H(n.fixedWidth) || (i ? "" : k())), b("height", H(n.fixedHeight) || (i ? n.autoHeight ? null : k() : I()), !0), r = o, d(_e), s !== (s = R()) && (w(h, St, s), d("overflow", s)))
                }

                function S(e) {
                    var t = n.padding,
                        i = p(e ? "right" : "left");
                    return t && H(t[i] || (l(t) ? 0 : t)) || "0px"
                }

                function I() {
                    return H(n.height || z(y).width * n.heightRatio)
                }

                function k() {
                    var e = H(n.gap);
                    return "calc((100%" + (e && " + " + e) + ")/" + (n.perPage || 1) + (e && " - " + e) + ")"
                }

                function P() {
                    return z(y)[p("width")]
                }

                function O(e, t) {
                    var n = m(e || 0);
                    return n ? z(n.slide)[p("width")] + (t ? 0 : L()) : 0
                }

                function T(e, t) {
                    var n = m(e);
                    if (n) {
                        var i = z(n.slide)[p("right")],
                            r = z(y)[p("left")];
                        return ie(i - r) + (t ? 0 : L())
                    }
                    return 0
                }

                function x(t) {
                    return T(e.length - 1) - T(0) + O(0, t)
                }

                function L() {
                    var e = m(0);
                    return e && parseFloat(q(e.slide, p("marginRight"))) || 0
                }

                function R() {
                    return e.is(Rt) || x(!0) > P()
                }
                return {
                    mount: function() {
                        var e, t;
                        _(), c(window, "resize load", (e = o(d, be), t = Le(0, e, null, 1), function() {
                            t.isPaused() && t.start()
                        })), a([me, ye], _), a(be, E)
                    },
                    resize: E,
                    listSize: P,
                    slideSize: O,
                    sliderSize: x,
                    totalSize: T,
                    getPadding: function(e) {
                        return parseFloat(q(g, p("padding" + (e ? "Right" : "Left")))) || 0
                    },
                    isOverflow: R
                }
            },
            Clones: function(e, t, n) {
                var r, o = xe(e),
                    s = o.on,
                    u = t.Elements,
                    a = t.Slides,
                    c = t.Direction.resolve,
                    l = [];

                function d() {
                    s(ye, f), s([me, be], h), (r = g()) && (function(t) {
                        var i = a.get().slice(),
                            r = i.length;
                        if (r) {
                            for (; i.length < t;) _(i, i);
                            _(i.slice(-t), i.slice(0, t)).forEach((function(o, s) {
                                var c = s < t,
                                    d = function(t, i) {
                                        var r = t.cloneNode(!0);
                                        return E(r, n.classes.clone), r.id = e.root.id + "-clone" + ce(i + 1), r
                                    }(o.slide, s);
                                c ? I(d, i[0].slide) : S(u.list, d), _(l, d), a.register(d, s - t + (c ? 0 : r), o.index)
                            }))
                        }
                    }(r), t.Layout.resize(!0))
                }

                function f() {
                    p(), d()
                }

                function p() {
                    V(l), i(l), o.destroy()
                }

                function h() {
                    var e = g();
                    r !== e && (r < e || !e) && o.emit(ye)
                }

                function g() {
                    var i = n.clones;
                    if (e.is(Lt)) {
                        if (v(i)) {
                            var r = n[c("fixedWidth")] && t.Layout.slideSize(0);
                            i = r && ne(z(u.track)[c("width")] / r) || n[c("autoWidth")] && e.length || 2 * n.perPage
                        }
                    } else i = 0;
                    return i
                }
                return {
                    mount: d,
                    destroy: p
                }
            },
            Move: function(e, t, n) {
                var i, r = xe(e),
                    o = r.on,
                    s = r.emit,
                    u = e.state.set,
                    a = t.Layout,
                    c = a.slideSize,
                    l = a.getPadding,
                    d = a.totalSize,
                    f = a.listSize,
                    p = a.sliderSize,
                    h = t.Direction,
                    g = h.resolve,
                    y = h.orient,
                    m = t.Elements,
                    b = m.list,
                    _ = m.track;

                function w() {
                    t.Controller.isBusy() || (t.Scroll.cancel(), E(e.index), t.Slides.update())
                }

                function E(e) {
                    S(O(e, !0))
                }

                function S(n, i) {
                    if (!e.is(Rt)) {
                        var r = i ? n : function(n) {
                            if (e.is(Lt)) {
                                var i = P(n),
                                    r = i > t.Controller.getEnd();
                                (i < 0 || r) && (n = I(n, r))
                            }
                            return n
                        }(n);
                        q(b, "transform", "translate" + g("X") + "(" + r + "px)"), n !== r && s("sh")
                    }
                }

                function I(e, t) {
                    var n = e - x(t),
                        i = p();
                    return e - y(i * (ne(ie(n) / i) || 1)) * (t ? 1 : -1)
                }

                function k() {
                    S(T(), !0), i.cancel()
                }

                function P(e) {
                    for (var n = t.Slides.get(), i = 0, r = 1 / 0, o = 0; o < n.length; o++) {
                        var s = n[o].index,
                            u = ie(O(s, !0) - e);
                        if (!(u <= r)) break;
                        r = u, i = s
                    }
                    return i
                }

                function O(t, i) {
                    var r = y(d(t - 1) - function(e) {
                        var t = n.focus;
                        return "center" === t ? (f() - c(e, !0)) / 2 : +t * c(e) || 0
                    }(t));
                    return i ? function(t) {
                        return n.trimSpace && e.is(xt) && (t = se(t, 0, y(p(!0) - f()))), t
                    }(r) : r
                }

                function T() {
                    var e = g("left");
                    return z(b)[e] - z(_)[e] + y(l(!1))
                }

                function x(e) {
                    return O(e ? t.Controller.getEnd() : 0, !!n.trimSpace)
                }
                return {
                    mount: function() {
                        i = t.Transition, o([fe, _e, me, ye], w)
                    },
                    move: function(e, t, n, r) {
                        var o, a;
                        e !== t && (o = e > n, a = y(I(T(), o)), o ? a >= 0 : a <= b[g("scrollWidth")] - z(_)[g("width")]) && (k(), S(I(T(), e > n), !0)), u(4), s(ve, t, n, e), i.start(t, (function() {
                            u(3), s(he, t, n, e), r && r()
                        }))
                    },
                    jump: E,
                    translate: S,
                    shift: I,
                    cancel: k,
                    toIndex: P,
                    toPosition: O,
                    getPosition: T,
                    getLimit: x,
                    exceededLimit: function(e, t) {
                        t = v(t) ? T() : t;
                        var n = !0 !== e && y(t) < y(x(!1)),
                            i = !1 !== e && y(t) > y(x(!0));
                        return n || i
                    },
                    reposition: w
                }
            },
            Controller: function(e, t, n) {
                var i, r, s, u, a = xe(e),
                    c = a.on,
                    l = a.emit,
                    d = t.Move,
                    f = d.getPosition,
                    h = d.getLimit,
                    g = d.toPosition,
                    y = t.Slides,
                    m = y.isEnough,
                    b = y.getLength,
                    _ = n.omitEnd,
                    w = e.is(Lt),
                    E = e.is(xt),
                    S = o(x, !1),
                    I = o(x, !0),
                    k = n.start || 0,
                    P = k;

                function O() {
                    r = b(!0), s = n.perMove, u = n.perPage, i = A();
                    var e = se(k, 0, _ ? i : r - 1);
                    e !== k && (k = e, d.reposition())
                }

                function T() {
                    i !== A() && l(Te)
                }

                function x(e, t) {
                    var n = s || (q() ? 1 : u),
                        r = L(k + n * (e ? -1 : 1), k, !(s || q()));
                    return -1 === r && E && !re(f(), h(!e), 1) ? e ? 0 : i : t ? r : R(r)
                }

                function L(t, o, a) {
                    if (m() || q()) {
                        var c = function(t) {
                            if (E && "move" === n.trimSpace && t !== k)
                                for (var i = f(); i === g(t, !0) && oe(t, 0, e.length - 1, !n.rewind);) t < k ? --t : ++t;
                            return t
                        }(t);
                        c !== t && (o = t, t = c, a = !1), t < 0 || t > i ? t = s || !oe(0, t, o, !0) && !oe(i, o, t, !0) ? w ? a ? t < 0 ? -(r % u || u) : r : t : n.rewind ? t < 0 ? i : 0 : -1 : D(N(t)) : a && t !== o && (t = D(N(o) + (t < o ? -1 : 1)))
                    } else t = -1;
                    return t
                }

                function R(e) {
                    return w ? (e + r) % r || 0 : e
                }

                function A() {
                    for (var e = r - (q() || w && s ? 1 : u); _ && e-- > 0;)
                        if (g(r - 1, !0) !== g(e, !0)) {
                            e++;
                            break
                        }
                    return se(e, 0, r - 1)
                }

                function D(e) {
                    return se(q() ? e : u * e, 0, i)
                }

                function N(e) {
                    return q() ? Z(e, i) : te((e >= i ? r - 1 : e) / u)
                }

                function C(e) {
                    e !== k && (P = k, k = e)
                }

                function q() {
                    return !v(n.focus) || n.isNavigation
                }

                function U() {
                    return e.state.is([4, 5]) && !!n.wbottForTransition
                }
                return {
                    mount: function() {
                        O(), c([me, ye, Te], O), c(_e, T)
                    },
                    go: function(e, t, n) {
                        if (!U()) {
                            var r = function(e) {
                                    var t = k;
                                    if (p(e)) {
                                        var n = e.match(/([+\-<>])(\d+)?/) || [],
                                            r = n[1],
                                            o = n[2];
                                        "+" === r || "-" === r ? t = L(k + +("" + r + (+o || 1)), k) : ">" === r ? t = o ? D(+o) : S(!0) : "<" === r && (t = I(!0))
                                    } else t = w ? e : se(e, 0, i);
                                    return t
                                }(e),
                                o = R(r);
                            o > -1 && (t || o !== k) && (C(o), d.move(r, o, P, n))
                        }
                    },
                    scroll: function(e, n, r, o) {
                        t.Scroll.scroll(e, n, r, (function() {
                            var e = R(d.toIndex(f()));
                            C(_ ? Z(e, i) : e), o && o()
                        }))
                    },
                    getNext: S,
                    getPrev: I,
                    getAdjacent: x,
                    getEnd: A,
                    setIndex: C,
                    getIndex: function(e) {
                        return e ? P : k
                    },
                    toIndex: D,
                    toPage: N,
                    toDest: function(e) {
                        var t = d.toIndex(e);
                        return E ? se(t, 0, i) : t
                    },
                    hasFocus: q,
                    isBusy: U
                }
            },
            Arrows: function(e, t, n) {
                var i, r, s = xe(e),
                    u = s.on,
                    a = s.bind,
                    c = s.emit,
                    l = n.classes,
                    d = n.i18n,
                    f = t.Elements,
                    p = t.Controller,
                    v = f.arrows,
                    h = f.track,
                    g = v,
                    y = f.prev,
                    m = f.next,
                    b = {};

                function _() {
                    var e;
                    !(e = n.arrows) || y && m || (g = v || C("div", l.arrows), y = O(!0), m = O(!1), i = !0, S(g, [y, m]), !v && I(g, h)), y && m && (L(b, {
                        prev: y,
                        next: m
                    }), U(g, e ? "" : "none"), E(g, r = ut + "--" + n.direction), e && (u([fe, he, ye, Ee, Te], T), a(m, "click", o(P, ">")), a(y, "click", o(P, "<")), T(), N([y, m], ze, h.id), c("arrows:mounted", y, m))), u(me, w)
                }

                function w() {
                    k(), _()
                }

                function k() {
                    s.destroy(), Q(g, r), i ? (V(v ? [y, m] : g), y = m = null) : D([y, m], Xe)
                }

                function P(e) {
                    p.go(e, !0)
                }

                function O(e) {
                    return $('<button class="' + l.arrow + " " + (e ? l.prev : l.next) + '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="' + (n.arrowPath || "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") + '" />')
                }

                function T() {
                    if (y && m) {
                        var t = e.index,
                            n = p.getPrev(),
                            i = p.getNext(),
                            r = n > -1 && t < n ? d.last : d.prev,
                            o = i > -1 && t > i ? d.first : d.next;
                        y.disabled = n < 0, m.disabled = i < 0, N(y, We, r), N(m, We, o), c("arrows:updated", y, m, n, i)
                    }
                }
                return {
                    arrows: b,
                    mount: _,
                    destroy: k,
                    update: T
                }
            },
            Autoplay: function(e, t, n) {
                var i, r, o = xe(e),
                    s = o.on,
                    u = o.bind,
                    a = o.emit,
                    c = Le(n.interval, e.go.bind(e, ">"), (function(e) {
                        var t = d.bar;
                        t && q(t, "width", 100 * e + "%"), a("autoplay:playing", e)
                    })),
                    l = c.isPaused,
                    d = t.Elements,
                    f = t.Elements,
                    p = f.root,
                    v = f.toggle,
                    h = n.autoplay,
                    g = "pause" === h;

                function y() {
                    l() && t.Slides.isEnough() && (c.start(!n.resetProgress), r = i = g = !1, _(), a(ke))
                }

                function m(e) {
                    void 0 === e && (e = !0), g = !!e, _(), l() || (c.pause(), a(Pe))
                }

                function b() {
                    g || (i || r ? m(!1) : y())
                }

                function _() {
                    v && (w(v, yt, !g), N(v, We, n.i18n[g ? "play" : "pause"]))
                }

                function E(e) {
                    var i = t.Slides.getAt(e);
                    c.set(i && +j(i.slide, At) || n.interval)
                }
                return {
                    mount: function() {
                        h && (n.pauseOnHover && u(p, "mouseenter mouseleave", (function(e) {
                            i = "mouseenter" === e.type, b()
                        })), n.pauseOnFocus && u(p, "focusin focusout", (function(e) {
                            r = "focusin" === e.type, b()
                        })), v && u(v, "click", (function() {
                            g ? y() : m(!0)
                        })), s([ve, we, ye], c.rewind), s(ve, E), v && N(v, ze, d.track.id), g || y(), _())
                    },
                    destroy: c.cancel,
                    play: y,
                    pause: m,
                    isPaused: l
                }
            },
            Cover: function(e, t, n) {
                var i = xe(e).on;

                function r(e) {
                    t.Slides.forEach((function(t) {
                        var n = O(t.contbotner || t.slide, "img");
                        n && n.src && s(e, n, t)
                    }))
                }

                function s(e, t, n) {
                    n.style("background", e ? 'center/cover no-repeat url("' + t.src + '")' : "", !0), U(t, e ? "none" : "")
                }
                return {
                    mount: function() {
                        n.cover && (i(Oe, o(s, !0)), i([fe, me, ye], o(r, !0)))
                    },
                    destroy: o(r, !1)
                }
            },
            Scroll: function(e, t, n) {
                var i, r, s = xe(e),
                    u = s.on,
                    a = s.emit,
                    c = e.state.set,
                    l = t.Move,
                    d = l.getPosition,
                    f = l.getLimit,
                    p = l.exceededLimit,
                    v = l.translate,
                    h = e.is(xt),
                    g = 1;

                function y(e, n, s, u, f) {
                    var v = d();
                    if (_(), s && (!h || !p())) {
                        var y = t.Layout.sliderSize(),
                            w = ue(e) * y * te(ie(e) / y) || 0;
                        e = l.toPosition(t.Controller.toDest(e % y)) + w
                    }
                    var E = re(v, e, 1);
                    g = 1, n = E ? 0 : n || ee(ie(e - v) / 1.5, 800), r = u, i = Le(n, m, o(b, v, e, f), 1), c(5), a(we), i.start()
                }

                function m() {
                    c(3), r && r(), a(Ee)
                }

                function b(e, t, i, o) {
                    var s, u, a = d(),
                        c = (e + (t - e) * (s = o, (u = n.easingFunc) ? u(s) : 1 - Math.pow(1 - s, 4)) - a) * g;
                    v(a + c), h && !i && p() && (g *= .6, ie(c) < 10 && y(f(p(!0)), 600, !1, r, !0))
                }

                function _() {
                    i && i.cancel()
                }

                function w() {
                    i && !i.isPaused() && (_(), m())
                }
                return {
                    mount: function() {
                        u(ve, _), u([me, ye], w)
                    },
                    destroy: _,
                    scroll: y,
                    cancel: w
                }
            },
            Drag: function(e, t, n) {
                var i, r, o, s, a, c, d, f, p = xe(e),
                    v = p.on,
                    h = p.emit,
                    g = p.bind,
                    y = p.unbind,
                    m = e.state,
                    b = t.Move,
                    _ = t.Scroll,
                    w = t.Controller,
                    E = t.Elements.track,
                    S = t.Media.reduce,
                    I = t.Direction,
                    P = I.resolve,
                    O = I.orient,
                    T = b.getPosition,
                    x = b.exceededLimit,
                    L = !1;

                function R() {
                    var e = n.drag;
                    V(!e), s = "free" === e
                }

                function A(e) {
                    if (c = !1, !d) {
                        var t = z(e);
                        i = e.target, r = n.noDrag, k(i, "." + ft + ", ." + at) || r && k(i, r) || !t && e.button || (w.isBusy() ? W(e, !0) : (f = t ? E : window, a = m.is([4, 5]), o = null, g(f, Ot, D, Dt), g(f, Tt, N, Dt), b.cancel(), _.cancel(), q(e)))
                    }
                    var i, r
                }

                function D(t) {
                    if (m.is(6) || (m.set(6), h("drag")), t.cancelable)
                        if (a) {
                            b.translate(i + U(t) / (L && e.is(xt) ? 5 : 1));
                            var r = M(t) > 200,
                                o = L !== (L = x());
                            (r || o) && q(t), c = !0, h("dragging"), W(t)
                        } else(function(e) {
                            return ie(U(e)) > ie(U(e, !0))
                        })(t) && (a = function(e) {
                            var t = n.dragMinThreshold,
                                i = l(t),
                                r = i && t.mouse || 0,
                                o = (i ? t.touch : +t) || 10;
                            return ie(U(e)) > (z(e) ? o : r)
                        }(t), W(t))
                }

                function N(i) {
                    m.is(6) && (m.set(3), h("dragged")), a && (function(i) {
                        var r = function(t) {
                                if (e.is(Lt) || !L) {
                                    var n = M(t);
                                    if (n && n < 200) return U(t) / n
                                }
                                return 0
                            }(i),
                            o = function(e) {
                                return T() + ue(e) * Z(ie(e) * (n.flickPower || 600), s ? 1 / 0 : t.Layout.listSize() * (n.flickMaxPages || 1))
                            }(r),
                            u = n.rewind && n.rewindByDrag;
                        S(!1), s ? w.scroll(o, 0, n.snap) : e.is(Rt) ? w.go(O(ue(r)) < 0 ? u ? "<" : "-" : u ? ">" : "+") : e.is(xt) && L && u ? w.go(x(!0) ? ">" : "<") : w.go(w.toDest(o), !0), S(!0)
                    }(i), W(i)), y(f, Ot, D), y(f, Tt, N), a = !1
                }

                function C(e) {
                    !d && c && W(e, !0)
                }

                function q(e) {
                    o = r, r = e, i = T()
                }

                function U(e, t) {
                    return F(e, t) - F(j(e), t)
                }

                function M(e) {
                    return Y(e) - Y(j(e))
                }

                function j(e) {
                    return r === e && o || r
                }

                function F(e, t) {
                    return (z(e) ? e.changedTouches[0] : e)["page" + P(t ? "Y" : "X")]
                }

                function z(e) {
                    return "undefined" != typeof TouchEvent && e instanceof TouchEvent
                }

                function V(e) {
                    d = e
                }
                return {
                    mount: function() {
                        g(E, Ot, u, Dt), g(E, Tt, u, Dt), g(E, Pt, A, Dt), g(E, "click", C, {
                            capture: !0
                        }), g(E, "dragstart", W), v([fe, me], R)
                    },
                    disable: V,
                    isDragging: function() {
                        return a
                    }
                }
            },
            Keyboard: function(e, t, n) {
                var i, r, o = xe(e),
                    u = o.on,
                    a = o.bind,
                    c = o.unbind,
                    l = e.root,
                    d = t.Direction.resolve;

                function f() {
                    var e = n.keyboard;
                    e && (i = "global" === e ? window : l, a(i, qt, h))
                }

                function p() {
                    c(i, qt)
                }

                function v() {
                    var e = r;
                    r = !0, s((function() {
                        r = e
                    }))
                }

                function h(t) {
                    if (!r) {
                        var n = Ct(t);
                        n === d(Ae) ? e.go("<") : n === d(De) && e.go(">")
                    }
                }
                return {
                    mount: function() {
                        f(), u(me, p), u(me, f), u(ve, v)
                    },
                    destroy: p,
                    disable: function(e) {
                        r = e
                    }
                }
            },
            LazyLoad: function(e, t, n) {
                var r = xe(e),
                    s = r.on,
                    u = r.off,
                    a = r.bind,
                    c = r.emit,
                    l = "sequential" === n.lazyLoad,
                    d = [he, Ee],
                    f = [];

                function p() {
                    i(f), t.Slides.forEach((function(e) {
                        K(e.slide, jt).forEach((function(t) {
                            var i = j(t, Ut),
                                r = j(t, Mt);
                            if (i !== t.src || r !== t.srcset) {
                                var o = n.classes.spinner,
                                    s = t.parentElement,
                                    u = O(s, "." + o) || C("span", o, s);
                                f.push([t, e, u]), t.src || U(t, "none")
                            }
                        }))
                    })), l ? y() : (u(d), s(d, v), v())
                }

                function v() {
                    (f = f.filter((function(t) {
                        var i = n.perPage * ((n.preloadPages || 1) + 1) - 1;
                        return !t[1].isWithin(e.index, i) || h(t)
                    }))).length || u(d)
                }

                function h(e) {
                    var t = e[0];
                    E(e[1].slide, wt), a(t, "load error", o(g, e)), N(t, "src", j(t, Ut)), N(t, "srcset", j(t, Mt)), D(t, Ut), D(t, Mt)
                }

                function g(e, t) {
                    var n = e[0],
                        i = e[1];
                    Q(i.slide, wt), "error" !== t.type && (V(e[2]), U(n, ""), c(Oe, n, i), c(be)), l && y()
                }

                function y() {
                    f.length && h(f.shift())
                }
                return {
                    mount: function() {
                        n.lazyLoad && (p(), s(ye, p))
                    },
                    destroy: o(i, f),
                    check: v
                }
            },
            Pagination: function(e, t, n) {
                var s, u, a = xe(e),
                    c = a.on,
                    l = a.emit,
                    d = a.bind,
                    f = t.Slides,
                    p = t.Elements,
                    v = t.Controller,
                    h = v.hasFocus,
                    g = v.getIndex,
                    y = v.go,
                    m = t.Direction.resolve,
                    b = p.pagination,
                    _ = [];

                function w() {
                    s && (V(b ? r(s.children) : s), Q(s, u), i(_), s = null), a.destroy()
                }

                function S(e) {
                    y(">" + e, !0)
                }

                function I(e, t) {
                    var n = _.length,
                        i = Ct(t),
                        r = k(),
                        o = -1;
                    i === m(De, !1, r) ? o = ++e % n : i === m(Ae, !1, r) ? o = (--e + n) % n : "Home" === i ? o = 0 : "End" === i && (o = n - 1);
                    var s = _[o];
                    s && (M(s.button), y(">" + o), W(t, !0))
                }

                function k() {
                    return n.paginationDirection || n.direction
                }

                function P(e) {
                    return _[v.toPage(e)]
                }

                function O() {
                    var e = P(g(!0)),
                        t = P(g());
                    if (e) {
                        var n = e.button;
                        Q(n, yt), D(n, $e), N(n, je, -1)
                    }
                    if (t) {
                        var i = t.button;
                        E(i, yt), N(i, $e, !0), N(i, je, "")
                    }
                    l("pagination:updated", {
                        list: s,
                        items: _
                    }, e, t)
                }
                return {
                    items: _,
                    mount: function t() {
                        w(), c([me, ye, Te], t);
                        var i = n.pagination;
                        b && U(b, i ? "" : "none"), i && (c([ve, we, Ee], O), function() {
                            var t = e.length,
                                i = n.classes,
                                r = n.i18n,
                                a = n.perPage,
                                c = h() ? v.getEnd() + 1 : ne(t / a);
                            E(s = b || C("ul", i.pagination, p.track.parentElement), u = dt + "--" + k()), N(s, Me, "tablist"), N(s, We, r.select), N(s, Qe, k() === qe ? "vertical" : "");
                            for (var l = 0; l < c; l++) {
                                var g = C("li", null, s),
                                    y = C("button", {
                                        class: i.page,
                                        type: "button"
                                    }, g),
                                    m = f.getIn(l).map((function(e) {
                                        return e.slide.id
                                    })),
                                    w = !h() && a > 1 ? r.pageX : r.slideX;
                                d(y, "click", o(S, l)), n.paginationKeyboard && d(y, "keydown", o(I, l)), N(g, Me, "presentation"), N(y, Me, "tab"), N(y, ze, m.join(" ")), N(y, We, ae(w, l + 1)), N(y, je, -1), _.push({
                                    li: g,
                                    button: y,
                                    page: l
                                })
                            }
                        }(), O(), l("pagination:mounted", {
                            list: s,
                            items: _
                        }, P(e.index)))
                    },
                    destroy: w,
                    getAt: P,
                    update: O
                }
            },
            Sync: function(e, t, n) {
                var r = n.isNavigation,
                    s = n.slideFocus,
                    u = [];

                function a() {
                    var t, n;
                    e.splides.forEach((function(t) {
                        t.isParent || (l(e, t.splide), l(t.splide, e))
                    })), r && ((n = (t = xe(e)).on)(ge, f), n("sk", p), n([fe, me], d), u.push(t), t.emit(Ie, e.splides))
                }

                function c() {
                    u.forEach((function(e) {
                        e.destroy()
                    })), i(u)
                }

                function l(e, t) {
                    var n = xe(e);
                    n.on(ve, (function(e, n, i) {
                        t.go(t.is(Lt) ? i : e)
                    })), u.push(n)
                }

                function d() {
                    N(t.Elements.list, Qe, n.direction === qe ? "vertical" : "")
                }

                function f(t) {
                    e.go(t.index)
                }

                function p(e, t) {
                    b(Ft, Ct(t)) && (f(e), W(t))
                }
                return {
                    setup: o(t.Media.set, {
                        slideFocus: v(s) ? r : s
                    }, !0),
                    mount: a,
                    destroy: c,
                    remount: function() {
                        c(), a()
                    }
                }
            },
            Wheel: function(e, t, n) {
                var i = xe(e).bind,
                    r = 0;

                function o(i) {
                    if (i.cancelable) {
                        var o = i.deltaY,
                            s = o < 0,
                            u = Y(i),
                            a = n.wheelMinThreshold || 0,
                            c = n.wheelSleep || 0;
                        ie(o) > a && u - r > c && (e.go(s ? "<" : ">"), r = u),
                            function(i) {
                                return !n.releaseWheel || e.state.is(4) || -1 !== t.Controller.getAdjacent(i)
                            }(s) && W(i)
                    }
                }
                return {
                    mount: function() {
                        n.wheel && i(t.Elements.track, "wheel", o, Dt)
                    }
                }
            },
            Live: function(e, t, n) {
                var i = xe(e).on,
                    r = t.Elements.track,
                    s = n.live && !n.isNavigation,
                    u = C("span", ht),
                    a = Le(90, o(c, !1));

                function c(e) {
                    N(r, Je, e), e ? (S(r, u), a.start()) : (V(u), a.cancel())
                }

                function l(e) {
                    s && N(r, He, e ? "off" : "polite")
                }
                return {
                    mount: function() {
                        s && (l(!t.Autoplay.isPaused()), N(r, Ge, !0), u.textContent = "…", i(ke, o(l, !0)), i(Pe, o(l, !1)), i([he, Ee], o(c, !0)))
                    },
                    disable: l,
                    destroy: function() {
                        D(r, [He, Ge, Je]), V(u)
                    }
                }
            }
        }),
        Vt = {
            type: "slide",
            role: "region",
            speed: 400,
            perPage: 1,
            cloneStatus: !0,
            arrows: !0,
            pagination: !0,
            paginationKeyboard: !0,
            interval: 5e3,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            resetProgress: !0,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            drag: !0,
            direction: "ltr",
            trimSpace: !0,
            focusableNodes: "a, button, textarea, input, select, iframe",
            live: !0,
            classes: kt,
            i18n: {
                prev: "Previous slide",
                next: "Next slide",
                first: "Go to first slide",
                last: "Go to last slide",
                slideX: "Go to slide %s",
                pageX: "Go to page %s",
                play: "Start autoplay",
                pause: "Pause autoplay",
                carousel: "carousel",
                slide: "slide",
                select: "Select a slide to show",
                slideLabel: "%s of %s"
            },
            reducedMotion: {
                speed: 0,
                rewindSpeed: 0,
                autoplay: "pause"
            }
        };

    function $t(e, t, n) {
        var i = t.Slides;

        function r() {
            i.forEach((function(e) {
                e.style("transform", "translateX(-" + 100 * e.index + "%)")
            }))
        }
        return {
            mount: function() {
                xe(e).on([fe, ye], r)
            },
            start: function(e, t) {
                i.style("transition", "opacity " + n.speed + "ms " + n.easing), s(t)
            },
            cancel: u
        }
    }

    function Wt(e, t, n) {
        var i, r = t.Move,
            s = t.Controller,
            u = t.Scroll,
            a = t.Elements.list,
            c = o(q, a, "transition");

        function l() {
            c(""), u.cancel()
        }
        return {
            mount: function() {
                xe(e).bind(a, "transitionend", (function(e) {
                    e.target === a && i && (l(), i())
                }))
            },
            start: function(t, o) {
                var a = r.toPosition(t, !0),
                    l = r.getPosition(),
                    d = function(t) {
                        var i = n.rewindSpeed;
                        if (e.is(xt) && i) {
                            var r = s.getIndex(!0),
                                o = s.getEnd();
                            if (0 === r && t >= o || r >= o && 0 === t) return i
                        }
                        return n.speed
                    }(t);
                ie(a - l) >= 1 && d >= 1 ? n.useScroll ? u.scroll(a, d, !1, o) : (c("transform " + d + "ms " + n.easing), r.translate(a, !0), i = o) : (r.jump(t), o())
            },
            cancel: l
        }
    }
    var Bt = function() {
        function t(e, n) {
            var i;
            this.event = xe(), this.Components = {}, this.state = (i = 1, {
                set: function(e) {
                    i = e
                },
                is: function(e) {
                    return b(y(e), i)
                }
            }), this.splides = [], this._o = {}, this._E = {};
            var r = p(e) ? B(document, e) : e;
            X(r, r + " is invalid."), this.root = r, n = R({
                label: j(r, We) || "",
                labelledby: j(r, Be) || ""
            }, Vt, t.defaults, n || {});
            try {
                R(n, JSON.parse(j(r, G)))
            } catch (e) {
                X(!1, "Invalid JSON")
            }
            this._o = Object.create(R({}, n))
        }
        var n, o, s = t.prototype;
        return s.mount = function(e, t) {
            var n = this,
                i = this.state,
                r = this.Components;
            return X(i.is([1, 7]), "Already mounted!"), i.set(1), this._C = r, this._T = t || this._T || (this.is(Rt) ? $t : Wt), this._E = e || this._E, x(L({}, zt, this._E, {
                Transition: this._T
            }), (function(e, t) {
                var i = e(n, r, n._o);
                r[t] = i, i.setup && i.setup()
            })), x(r, (function(e) {
                e.mount && e.mount()
            })), this.emit(fe), E(this.root, gt), i.set(3), this.emit(pe), this
        }, s.sync = function(e) {
            return this.splides.push({
                splide: e
            }), e.splides.push({
                splide: this,
                isParent: !0
            }), this.state.is(3) && (this._C.Sync.remount(), e.Components.Sync.remount()), this
        }, s.go = function(e) {
            return this._C.Controller.go(e), this
        }, s.on = function(e, t) {
            return this.event.on(e, t), this
        }, s.off = function(e) {
            return this.event.off(e), this
        }, s.emit = function(e) {
            var t;
            return (t = this.event).emit.apply(t, [e].concat(r(arguments, 1))), this
        }, s.add = function(e, t) {
            return this._C.Slides.add(e, t), this
        }, s.remove = function(e) {
            return this._C.Slides.remove(e), this
        }, s.is = function(e) {
            return this._o.type === e
        }, s.refresh = function() {
            return this.emit(ye), this
        }, s.destroy = function(e) {
            void 0 === e && (e = !0);
            var t = this.event,
                n = this.state;
            return n.is(1) ? xe(this).on(pe, this.destroy.bind(this, e)) : (x(this._C, (function(t) {
                t.destroy && t.destroy(e)
            }), !0), t.emit(Se), t.destroy(), e && i(this.splides), n.set(7)), this
        }, n = t, (o = [{
            key: "options",
            get: function() {
                return this._o
            },
            set: function(e) {
                this._C.Media.set(e, !0, !0)
            }
        }, {
            key: "length",
            get: function() {
                return this._C.Slides.getLength(!0)
            }
        }, {
            key: "index",
            get: function() {
                return this._C.Controller.getIndex()
            }
        }]) && e(n.prototype, o), Object.defineProperty(n, "prototype", {
            writable: !1
        }), t
    }();
    Bt.defaults = {}, Bt.STATES = n;
    var Kt = function(e, t) {
        return Kt = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }, Kt(e, t)
    };

    function Qt(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
            this.constructor = e
        }
        Kt(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    var Yt, Ht = function() {
        return Ht = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }, Ht.apply(this, arguments)
    };

    function Jt(e, t) {
        var n = {};
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
        }
        return n
    }

    function Gt(e, t, n, i) {
        return new(n || (n = Promise))((function(r, o) {
            function s(e) {
                try {
                    a(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                try {
                    a(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                var t;
                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                    e(t)
                }))).then(s, u)
            }
            a((i = i.apply(e, t || [])).next())
        }))
    }

    function Xt(e, t) {
        var n, i, r, o, s = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function u(u) {
            return function(a) {
                return function(u) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; o && (o = 0, u[0] && (s = 0)), s;) try {
                        if (n = 1, i && (r = 2 & u[0] ? i.return : u[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, u[1])).done) return r;
                        switch (i = 0, r && (u = [2 & u[0], r.value]), u[0]) {
                            case 0:
                            case 1:
                                r = u;
                                break;
                            case 4:
                                return s.label++, {
                                    value: u[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, i = u[1], u = [0];
                                continue;
                            case 7:
                                u = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === u[0] && (!r || u[1] > r[0] && u[1] < r[3])) {
                                    s.label = u[1];
                                    break
                                }
                                if (6 === u[0] && s.label < r[1]) {
                                    s.label = r[1], r = u;
                                    break
                                }
                                if (r && s.label < r[2]) {
                                    s.label = r[2], s.ops.push(u);
                                    break
                                }
                                r[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        u = t.call(e, s)
                    } catch (e) {
                        u = [6, e], i = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & u[0]) throw u[1];
                    return {
                        value: u[0] ? u[1] : void 0,
                        done: !0
                    }
                }([u, a])
            }
        }
    }

    function Zt(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            i = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && i >= e.length && (e = void 0), {
                    value: e && e[i++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function en(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var i, r, o = n.call(e),
            s = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(i = o.next()).done;) s.push(i.value)
        } catch (e) {
            r = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (n = o.return) && n.call(o)
            } finally {
                if (r) throw r.error
            }
        }
        return s
    }

    function tn(e, t, n) {
        if (n || 2 === arguments.length)
            for (var i, r = 0, o = t.length; r < o; r++) !i && r in t || (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
        return e.concat(i || Array.prototype.slice.call(t))
    }
    Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError,
        function(e) {
            e[e.None = 0] = "None", e[e.Error = 1] = "Error", e[e.Warn = 2] = "Warn", e[e.Verbose = 3] = "Verbose", e[e.Debug = 4] = "Debug"
        }(Yt || (Yt = {}));
    var nn, rn = function(e) {
            return function() {
                var t = Ht({}, e.config);
                return {
                    logger: t.loggerProvider,
                    logLevel: t.logLevel
                }
            }
        },
        on = function(e, t) {
            var n, i;
            t = (t = t.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "");
            try {
                for (var r = Zt(t.split(".")), o = r.next(); !o.done; o = r.next()) {
                    var s = o.value;
                    if (!(s in e)) return;
                    e = e[s]
                }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    o && !o.done && (i = r.return) && i.call(r)
                } finally {
                    if (n) throw n.error
                }
            }
            return e
        },
        sn = function(e, t) {
            return function() {
                var n, i, r = {};
                try {
                    for (var o = Zt(t), s = o.next(); !s.done; s = o.next()) {
                        var u = s.value;
                        r[u] = on(e, u)
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        s && !s.done && (i = o.return) && i.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return r
            }
        },
        un = function(e, t, n, i, r) {
            return void 0 === r && (r = null),
                function() {
                    for (var o = [], s = 0; s < arguments.length; s++) o[s] = arguments[s];
                    var u = n(),
                        a = u.logger,
                        c = u.logLevel;
                    if (c && c < Yt.Debug || !c || !a) return e.apply(r, o);
                    var l, d = {
                        type: "invoke public method",
                        name: t,
                        args: o,
                        stacktrace: (l = 1, void 0 === l && (l = 0), ((new Error).stack || "").split("\n").slice(2 + l).map((function(e) {
                            return e.trim()
                        }))),
                        time: {
                            start: (new Date).toISOString()
                        },
                        states: {}
                    };
                    i && d.states && (d.states.before = i());
                    var f = e.apply(r, o);
                    return f && f.promise ? f.promise.then((function() {
                        i && d.states && (d.states.after = i()), d.time && (d.time.end = (new Date).toISOString()), a.debug(JSON.stringify(d, null, 2))
                    })) : (i && d.states && (d.states.after = i()), d.time && (d.time.end = (new Date).toISOString()), a.debug(JSON.stringify(d, null, 2))), f
                }
        },
        an = function(e) {
            return {
                promise: e || Promise.resolve()
            }
        };
    ! function(e) {
        e.Unknown = "unknown", e.Skipped = "skipped", e.Success = "success", e.RateLimit = "rate_limit", e.PayloadTooLarge = "payload_too_large", e.Invalid = "invalid", e.Fbotled = "fbotled", e.Timeout = "Timeout", e.SystemError = "SystemError"
    }(nn || (nn = {}));
    var cn = "AMP",
        ln = "".concat(cn, "_unsent"),
        dn = "https://api2.amplitude.com/2/httpapi",
        fn = function(e, t, n) {
            return void 0 === t && (t = 0), void 0 === n && (n = nn.Unknown), {
                event: e,
                code: t,
                message: n
            }
        },
        pn = "Amplitude Logger ",
        vn = function() {
            function e() {
                this.logLevel = Yt.None
            }
            return e.prototype.disable = function() {
                this.logLevel = Yt.None
            }, e.prototype.enable = function(e) {
                void 0 === e && (e = Yt.Warn), this.logLevel = e
            }, e.prototype.log = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this.logLevel < Yt.Verbose || console.log("".concat(pn, "[Log]: ").concat(e.join(" ")))
            }, e.prototype.warn = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this.logLevel < Yt.Warn || console.warn("".concat(pn, "[Warn]: ").concat(e.join(" ")))
            }, e.prototype.error = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this.logLevel < Yt.Error || console.error("".concat(pn, "[Error]: ").concat(e.join(" ")))
            }, e.prototype.debug = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this.logLevel < Yt.Debug || console.log("".concat(pn, "[Debug]: ").concat(e.join(" ")))
            }, e
        }(),
        hn = function() {
            return {
                flushMaxRetries: 12,
                flushQueueSize: 200,
                flushIntervalMillis: 1e4,
                instanceName: "$default_instance",
                logLevel: Yt.Warn,
                loggerProvider: new vn,
                optOut: !1,
                serverUrl: dn,
                serverZone: "US",
                useBatch: !1
            }
        },
        gn = function() {
            function e(e) {
                var t, n, i, r;
                this._optOut = !1;
                var o = hn();
                this.apiKey = e.apiKey, this.flushIntervalMillis = null !== (t = e.flushIntervalMillis) && void 0 !== t ? t : o.flushIntervalMillis, this.flushMaxRetries = e.flushMaxRetries || o.flushMaxRetries, this.flushQueueSize = e.flushQueueSize || o.flushQueueSize, this.instanceName = e.instanceName || o.instanceName, this.loggerProvider = e.loggerProvider || o.loggerProvider, this.logLevel = null !== (n = e.logLevel) && void 0 !== n ? n : o.logLevel, this.minIdLength = e.minIdLength, this.plan = e.plan, this.ingestionMetadata = e.ingestionMetadata, this.optOut = null !== (i = e.optOut) && void 0 !== i ? i : o.optOut, this.serverUrl = e.serverUrl, this.serverZone = e.serverZone || o.serverZone, this.storageProvider = e.storageProvider, this.transportProvider = e.transportProvider, this.useBatch = null !== (r = e.useBatch) && void 0 !== r ? r : o.useBatch, this.loggerProvider.enable(this.logLevel);
                var s = mn(e.serverUrl, e.serverZone, e.useBatch);
                this.serverZone = s.serverZone, this.serverUrl = s.serverUrl
            }
            return Object.defineProperty(e.prototype, "optOut", {
                get: function() {
                    return this._optOut
                },
                set: function(e) {
                    this._optOut = e
                },
                enumerable: !1,
                configurable: !0
            }), e
        }(),
        yn = function(e, t) {
            return "EU" === e ? t ? "https://api.eu.amplitude.com/batch" : "https://api.eu.amplitude.com/2/httpapi" : t ? "https://api2.amplitude.com/batch" : dn
        },
        mn = function(e, t, n) {
            if (void 0 === e && (e = ""), void 0 === t && (t = hn().serverZone), void 0 === n && (n = hn().useBatch), e) return {
                serverUrl: e,
                serverZone: void 0
            };
            var i = ["US", "EU"].includes(t) ? t : hn().serverZone;
            return {
                serverZone: i,
                serverUrl: yn(i, n)
            }
        };

    function bn(e) {
        var t = "";
        try {
            "body" in e && (t = JSON.stringify(e.body, null, 2))
        } catch (e) {}
        return t
    }
    var _n, wn, En, Sn = function() {
            function e() {
                this.name = "amplitude", this.type = "destination", this.retryTimeout = 1e3, this.throttleTimeout = 3e4, this.storageKey = "", this.scheduled = null, this.queue = []
            }
            return e.prototype.setup = function(e) {
                var t;
                return Gt(this, void 0, void 0, (function() {
                    var n, i = this;
                    return Xt(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return this.config = e, this.storageKey = "".concat(ln, "_").concat(this.config.apiKey.substring(0, 10)), [4, null === (t = this.config.storageProvider) || void 0 === t ? void 0 : t.get(this.storageKey)];
                            case 1:
                                return n = r.sent(), this.saveEvents(), n && n.length > 0 && Promise.all(n.map((function(e) {
                                    return i.execute(e)
                                }))).catch(), [2, Promise.resolve(void 0)]
                        }
                    }))
                }))
            }, e.prototype.execute = function(e) {
                var t = this;
                return new Promise((function(n) {
                    var i = {
                        event: e,
                        attempts: 0,
                        callback: function(e) {
                            return n(e)
                        },
                        timeout: 0
                    };
                    t.addToQueue(i)
                }))
            }, e.prototype.addToQueue = function() {
                for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                t.filter((function(t) {
                    return t.attempts < e.config.flushMaxRetries ? (t.attempts += 1, !0) : (e.fulfillRequest([t], 500, "Event rejected due to exceeded retry count"), !1)
                })).forEach((function(t) {
                    e.queue = e.queue.concat(t), 0 !== t.timeout ? setTimeout((function() {
                        t.timeout = 0, e.schedule(0)
                    }), t.timeout) : e.schedule(e.config.flushIntervalMillis)
                })), this.saveEvents()
            }, e.prototype.schedule = function(e) {
                var t = this;
                this.scheduled || (this.scheduled = setTimeout((function() {
                    t.flush(!0).then((function() {
                        t.queue.length > 0 && t.schedule(e)
                    }))
                }), e))
            }, e.prototype.flush = function(e) {
                return void 0 === e && (e = !1), Gt(this, void 0, void 0, (function() {
                    var t, n, i, r = this;
                    return Xt(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return t = [], n = [], this.queue.forEach((function(e) {
                                    return 0 === e.timeout ? t.push(e) : n.push(e)
                                })), this.queue = n, this.scheduled && (clearTimeout(this.scheduled), this.scheduled = null), s = t, u = this.config.flushQueueSize, a = Math.max(u, 1), i = s.reduce((function(e, t, n) {
                                    var i = Math.floor(n / a);
                                    return e[i] || (e[i] = []), e[i].push(t), e
                                }), []), [4, Promise.all(i.map((function(t) {
                                    return r.send(t, e)
                                })))];
                            case 1:
                                return o.sent(), [2]
                        }
                        var s, u, a
                    }))
                }))
            }, e.prototype.send = function(e, t) {
                return void 0 === t && (t = !0), Gt(this, void 0, void 0, (function() {
                    var n, i, r, o, s;
                    return Xt(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                if (!this.config.apiKey) return [2, this.fulfillRequest(e, 400, "Event rejected due to missing API key")];
                                n = {
                                    api_key: this.config.apiKey,
                                    events: e.map((function(e) {
                                        var t = e.event;
                                        return t.extra, Jt(t, ["extra"])
                                    })),
                                    options: {
                                        min_id_length: this.config.minIdLength
                                    },
                                    client_upload_time: (new Date).toISOString()
                                }, u.label = 1;
                            case 1:
                                return u.trys.push([1, 3, , 4]), i = mn(this.config.serverUrl, this.config.serverZone, this.config.useBatch).serverUrl, [4, this.config.transportProvider.send(i, n)];
                            case 2:
                                return null === (r = u.sent()) ? (this.fulfillRequest(e, 0, "Unexpected error occurred"), [2]) : t ? (this.handleResponse(r, e), [3, 4]) : ("body" in r ? this.fulfillRequest(e, r.statusCode, "".concat(r.status, ": ").concat(bn(r))) : this.fulfillRequest(e, r.statusCode, r.status), [2]);
                            case 3:
                                return o = u.sent(), s = (a = o) instanceof Error ? a.message : String(a), this.config.loggerProvider.error(s), this.fulfillRequest(e, 0, s), [3, 4];
                            case 4:
                                return [2]
                        }
                        var a
                    }))
                }))
            }, e.prototype.handleResponse = function(e, t) {
                var n = e.status;
                switch (n) {
                    case nn.Success:
                        this.handleSuccessResponse(e, t);
                        break;
                    case nn.Invalid:
                        this.handleInvalidResponse(e, t);
                        break;
                    case nn.PayloadTooLarge:
                        this.handlePayloadTooLargeResponse(e, t);
                        break;
                    case nn.RateLimit:
                        this.handleRateLimitResponse(e, t);
                        break;
                    default:
                        this.config.loggerProvider.warn("{code: 0, error: \"Status '".concat(n, "' provided for ").concat(t.length, ' events"}')), this.handleOtherResponse(t)
                }
            }, e.prototype.handleSuccessResponse = function(e, t) {
                this.fulfillRequest(t, e.statusCode, "Event tracked successfully")
            }, e.prototype.handleInvalidResponse = function(e, t) {
                var n = this;
                if (e.body.missingField || e.body.error.startsWith("Invalid API key")) this.fulfillRequest(t, e.statusCode, e.body.error);
                else {
                    var i = tn(tn(tn(tn([], en(Object.values(e.body.eventsWithInvalidFields)), !1), en(Object.values(e.body.eventsWithMissingFields)), !1), en(Object.values(e.body.eventsWithInvalidIdLengths)), !1), en(e.body.silencedEvents), !1).flat(),
                        r = new Set(i),
                        o = t.filter((function(t, i) {
                            if (!r.has(i)) return !0;
                            n.fulfillRequest([t], e.statusCode, e.body.error)
                        }));
                    o.length > 0 && this.config.loggerProvider.warn(bn(e)), this.addToQueue.apply(this, tn([], en(o), !1))
                }
            }, e.prototype.handlePayloadTooLargeResponse = function(e, t) {
                1 !== t.length ? (this.config.loggerProvider.warn(bn(e)), this.config.flushQueueSize /= 2, this.addToQueue.apply(this, tn([], en(t), !1))) : this.fulfillRequest(t, e.statusCode, e.body.error)
            }, e.prototype.handleRateLimitResponse = function(e, t) {
                var n = this,
                    i = Object.keys(e.body.exceededDbotlyQuotaUsers),
                    r = Object.keys(e.body.exceededDbotlyQuotaDevices),
                    o = e.body.throttledEvents,
                    s = new Set(i),
                    u = new Set(r),
                    a = new Set(o),
                    c = t.filter((function(t, i) {
                        if (!(t.event.user_id && s.has(t.event.user_id) || t.event.device_id && u.has(t.event.device_id))) return a.has(i) && (t.timeout = n.throttleTimeout), !0;
                        n.fulfillRequest([t], e.statusCode, e.body.error)
                    }));
                c.length > 0 && this.config.loggerProvider.warn(bn(e)), this.addToQueue.apply(this, tn([], en(c), !1))
            }, e.prototype.handleOtherResponse = function(e) {
                var t = this;
                this.addToQueue.apply(this, tn([], en(e.map((function(e) {
                    return e.timeout = e.attempts * t.retryTimeout, e
                }))), !1))
            }, e.prototype.fulfillRequest = function(e, t, n) {
                this.saveEvents(), e.forEach((function(e) {
                    return e.callback(fn(e.event, t, n))
                }))
            }, e.prototype.saveEvents = function() {
                if (this.config.storageProvider) {
                    var e = Array.from(this.queue.map((function(e) {
                        return e.event
                    })));
                    this.config.storageProvider.set(this.storageKey, e)
                }
            }, e
        }(),
        In = function(e) {
            return e ? (e ^ 16 * Math.random() >> e / 4).toString(16) : (String(1e7) + String(-1e3) + String(-4e3) + String(-8e3) + String(-1e11)).replace(/[018]/g, In)
        };
    ! function(e) {
        e.SET = "$set", e.SET_ONCE = "$setOnce", e.ADD = "$add", e.APPEND = "$append", e.PREPEND = "$prepend", e.REMOVE = "$remove", e.PREINSERT = "$preInsert", e.POSTINSERT = "$postInsert", e.UNSET = "$unset", e.CLEAR_ALL = "$clearAll"
    }(_n || (_n = {})),
    function(e) {
        e.REVENUE_PRODUCT_ID = "$productId", e.REVENUE_QUANTITY = "$quantity", e.REVENUE_PRICE = "$price", e.REVENUE_TYPE = "$revenueType", e.REVENUE = "$revenue"
    }(wn || (wn = {})),
    function(e) {
        e.IDENTIFY = "$identify", e.GROUP_IDENTIFY = "$groupidentify", e.REVENUE = "revenue_amount"
    }(En || (En = {}));
    var kn = function(e) {
            if (Object.keys(e).length > 1e3) return !1;
            for (var t in e) {
                var n = e[t];
                if (!Pn(t, n)) return !1
            }
            return !0
        },
        Pn = function(e, t) {
            var n, i;
            if ("string" != typeof e) return !1;
            if (Array.isArray(t)) {
                var r = !0;
                try {
                    for (var o = Zt(t), s = o.next(); !s.done; s = o.next()) {
                        var u = s.value;
                        if (Array.isArray(u)) return !1;
                        if ("object" == typeof u) r = r && kn(u);
                        else if (!["number", "string"].includes(typeof u)) return !1;
                        if (!r) return !1
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        s && !s.done && (i = o.return) && i.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
            } else {
                if (null == t) return !1;
                if ("object" == typeof t) return kn(t);
                if (!["number", "string", "boolean"].includes(typeof t)) return !1
            }
            return !0
        },
        On = function() {
            function e() {
                this._propertySet = new Set, this._properties = {}
            }
            return e.prototype.getUserProperties = function() {
                return Ht({}, this._properties)
            }, e.prototype.set = function(e, t) {
                return this._safeSet(_n.SET, e, t), this
            }, e.prototype.setOnce = function(e, t) {
                return this._safeSet(_n.SET_ONCE, e, t), this
            }, e.prototype.append = function(e, t) {
                return this._safeSet(_n.APPEND, e, t), this
            }, e.prototype.prepend = function(e, t) {
                return this._safeSet(_n.PREPEND, e, t), this
            }, e.prototype.postInsert = function(e, t) {
                return this._safeSet(_n.POSTINSERT, e, t), this
            }, e.prototype.preInsert = function(e, t) {
                return this._safeSet(_n.PREINSERT, e, t), this
            }, e.prototype.remove = function(e, t) {
                return this._safeSet(_n.REMOVE, e, t), this
            }, e.prototype.add = function(e, t) {
                return this._safeSet(_n.ADD, e, t), this
            }, e.prototype.unset = function(e) {
                return this._safeSet(_n.UNSET, e, "-"), this
            }, e.prototype.clearAll = function() {
                return this._properties = {}, this._properties[_n.CLEAR_ALL] = "-", this
            }, e.prototype._safeSet = function(e, t, n) {
                if (this._validate(e, t, n)) {
                    var i = this._properties[e];
                    return void 0 === i && (i = {}, this._properties[e] = i), i[t] = n, this._propertySet.add(t), !0
                }
                return !1
            }, e.prototype._validate = function(e, t, n) {
                return void 0 === this._properties[_n.CLEAR_ALL] && !this._propertySet.has(t) && (e === _n.ADD ? "number" == typeof n : e === _n.UNSET || e === _n.REMOVE || Pn(t, n))
            }, e
        }(),
        Tn = function() {
            function e() {
                this.productId = "", this.quantity = 1, this.price = 0
            }
            return e.prototype.setProductId = function(e) {
                return this.productId = e, this
            }, e.prototype.setQuantity = function(e) {
                return e > 0 && (this.quantity = e), this
            }, e.prototype.setPrice = function(e) {
                return this.price = e, this
            }, e.prototype.setRevenueType = function(e) {
                return this.revenueType = e, this
            }, e.prototype.setRevenue = function(e) {
                return this.revenue = e, this
            }, e.prototype.setEventProperties = function(e) {
                return kn(e) && (this.properties = e), this
            }, e.prototype.getEventProperties = function() {
                var e = this.properties ? Ht({}, this.properties) : {};
                return e[wn.REVENUE_PRODUCT_ID] = this.productId, e[wn.REVENUE_QUANTITY] = this.quantity, e[wn.REVENUE_PRICE] = this.price, e[wn.REVENUE_TYPE] = this.revenueType, e[wn.REVENUE] = this.revenue, e
            }, e
        }(),
        xn = function() {
            function e(e) {
                this.client = e, this.queue = [], this.applying = !1, this.plugins = []
            }
            return e.prototype.register = function(e, t) {
                var n, i, r;
                return Gt(this, void 0, void 0, (function() {
                    return Xt(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return e.name = null !== (n = e.name) && void 0 !== n ? n : In(), e.type = null !== (i = e.type) && void 0 !== i ? i : "enrichment", [4, null === (r = e.setup) || void 0 === r ? void 0 : r.call(e, t, this.client)];
                            case 1:
                                return o.sent(), this.plugins.push(e), [2]
                        }
                    }))
                }))
            }, e.prototype.deregister = function(e) {
                var t;
                return Gt(this, void 0, void 0, (function() {
                    var n, i;
                    return Xt(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return n = this.plugins.findIndex((function(t) {
                                    return t.name === e
                                })), i = this.plugins[n], this.plugins.splice(n, 1), [4, null === (t = i.teardown) || void 0 === t ? void 0 : t.call(i)];
                            case 1:
                                return r.sent(), [2]
                        }
                    }))
                }))
            }, e.prototype.reset = function(e) {
                this.applying = !1, this.plugins.map((function(e) {
                    var t;
                    return null === (t = e.teardown) || void 0 === t ? void 0 : t.call(e)
                })), this.plugins = [], this.client = e
            }, e.prototype.push = function(e) {
                var t = this;
                return new Promise((function(n) {
                    t.queue.push([e, n]), t.scheduleApply(0)
                }))
            }, e.prototype.scheduleApply = function(e) {
                var t = this;
                this.applying || (this.applying = !0, setTimeout((function() {
                    t.apply(t.queue.shift()).then((function() {
                        t.applying = !1, t.queue.length > 0 && t.scheduleApply(0)
                    }))
                }), e))
            }, e.prototype.apply = function(e) {
                return Gt(this, void 0, void 0, (function() {
                    var t, n, i, r, o, s, u, a, c, l, d, f, p, v, h, g, y, m, b, _;
                    return Xt(this, (function(w) {
                        switch (w.label) {
                            case 0:
                                if (!e) return [2];
                                t = en(e, 1), n = t[0], i = en(e, 2), r = i[1], o = this.plugins.filter((function(e) {
                                    return "before" === e.type
                                })), w.label = 1;
                            case 1:
                                w.trys.push([1, 6, 7, 8]), s = Zt(o), u = s.next(), w.label = 2;
                            case 2:
                                return u.done ? [3, 5] : (f = u.value).execute ? [4, f.execute(Ht({}, n))] : [3, 4];
                            case 3:
                                if (null === (p = w.sent())) return r({
                                    event: n,
                                    code: 0,
                                    message: ""
                                }), [2];
                                n = p, w.label = 4;
                            case 4:
                                return u = s.next(), [3, 2];
                            case 5:
                                return [3, 8];
                            case 6:
                                return a = w.sent(), y = {
                                    error: a
                                }, [3, 8];
                            case 7:
                                try {
                                    u && !u.done && (m = s.return) && m.call(s)
                                } finally {
                                    if (y) throw y.error
                                }
                                return [7];
                            case 8:
                                c = this.plugins.filter((function(e) {
                                    return "enrichment" === e.type || void 0 === e.type
                                })), w.label = 9;
                            case 9:
                                w.trys.push([9, 14, 15, 16]), l = Zt(c), d = l.next(), w.label = 10;
                            case 10:
                                return d.done ? [3, 13] : (f = d.value).execute ? [4, f.execute(Ht({}, n))] : [3, 12];
                            case 11:
                                if (null === (p = w.sent())) return r({
                                    event: n,
                                    code: 0,
                                    message: ""
                                }), [2];
                                n = p, w.label = 12;
                            case 12:
                                return d = l.next(), [3, 10];
                            case 13:
                                return [3, 16];
                            case 14:
                                return v = w.sent(), b = {
                                    error: v
                                }, [3, 16];
                            case 15:
                                try {
                                    d && !d.done && (_ = l.return) && _.call(l)
                                } finally {
                                    if (b) throw b.error
                                }
                                return [7];
                            case 16:
                                return h = this.plugins.filter((function(e) {
                                    return "destination" === e.type
                                })), g = h.map((function(e) {
                                    var t = Ht({}, n);
                                    return e.execute(t).catch((function(e) {
                                        return fn(t, 0, String(e))
                                    }))
                                })), Promise.all(g).then((function(e) {
                                    var t = en(e, 1)[0] || fn(n, 100, "Event not tracked, no destination plugins on the instance");
                                    r(t)
                                })), [2]
                        }
                    }))
                }))
            }, e.prototype.flush = function() {
                return Gt(this, void 0, void 0, (function() {
                    var e, t, n, i = this;
                    return Xt(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return e = this.queue, this.queue = [], [4, Promise.all(e.map((function(e) {
                                    return i.apply(e)
                                })))];
                            case 1:
                                return r.sent(), t = this.plugins.filter((function(e) {
                                    return "destination" === e.type
                                })), n = t.map((function(e) {
                                    return e.flush && e.flush()
                                })), [4, Promise.all(n)];
                            case 2:
                                return r.sent(), [2]
                        }
                    }))
                }))
            }, e
        }(),
        Ln = function(e, t) {
            return Ht(Ht({}, t), {
                event_type: En.IDENTIFY,
                user_properties: e.getUserProperties()
            })
        },
        Rn = function() {
            function e(e) {
                void 0 === e && (e = "$default"), this.initializing = !1, this.q = [], this.dispatchQ = [], this.logEvent = this.track.bind(this), this.timeline = new xn(this), this.name = e
            }
            return e.prototype._init = function(e) {
                return Gt(this, void 0, void 0, (function() {
                    return Xt(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return this.config = e, this.timeline.reset(this), [4, this.runQueuedFunctions("q")];
                            case 1:
                                return t.sent(), [2]
                        }
                    }))
                }))
            }, e.prototype.runQueuedFunctions = function(e) {
                return Gt(this, void 0, void 0, (function() {
                    var t, n, i, r, o, s;
                    return Xt(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                t = this[e], this[e] = [], u.label = 1;
                            case 1:
                                u.trys.push([1, 6, 7, 8]), n = Zt(t), i = n.next(), u.label = 2;
                            case 2:
                                return i.done ? [3, 5] : [4, (0, i.value)()];
                            case 3:
                                u.sent(), u.label = 4;
                            case 4:
                                return i = n.next(), [3, 2];
                            case 5:
                                return [3, 8];
                            case 6:
                                return r = u.sent(), o = {
                                    error: r
                                }, [3, 8];
                            case 7:
                                try {
                                    i && !i.done && (s = n.return) && s.call(n)
                                } finally {
                                    if (o) throw o.error
                                }
                                return [7];
                            case 8:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.track = function(e, t, n) {
                var i = function(e, t, n) {
                    return Ht(Ht(Ht({}, "string" == typeof e ? {
                        event_type: e
                    } : e), n), t && {
                        event_properties: t
                    })
                }(e, t, n);
                return an(this.dispatch(i))
            }, e.prototype.identify = function(e, t) {
                var n = Ln(e, t);
                return an(this.dispatch(n))
            }, e.prototype.groupIdentify = function(e, t, n, i) {
                var r = function(e, t, n, i) {
                    var r;
                    return Ht(Ht({}, i), {
                        event_type: En.GROUP_IDENTIFY,
                        group_properties: n.getUserProperties(),
                        groups: (r = {}, r[e] = t, r)
                    })
                }(e, t, n, i);
                return an(this.dispatch(r))
            }, e.prototype.setGroup = function(e, t, n) {
                var i = function(e, t, n) {
                    var i, r = new On;
                    return r.set(e, t), Ht(Ht({}, n), {
                        event_type: En.IDENTIFY,
                        user_properties: r.getUserProperties(),
                        groups: (i = {}, i[e] = t, i)
                    })
                }(e, t, n);
                return an(this.dispatch(i))
            }, e.prototype.revenue = function(e, t) {
                var n = function(e, t) {
                    return Ht(Ht({}, t), {
                        event_type: En.REVENUE,
                        event_properties: e.getEventProperties()
                    })
                }(e, t);
                return an(this.dispatch(n))
            }, e.prototype.add = function(e) {
                return this.config ? an(this.timeline.register(e, this.config)) : (this.q.push(this.add.bind(this, e)), an())
            }, e.prototype.remove = function(e) {
                return this.config ? an(this.timeline.deregister(e)) : (this.q.push(this.remove.bind(this, e)), an())
            }, e.prototype.dispatchWithCallback = function(e, t) {
                if (!this.config) return t(fn(e, 0, "Client not initialized"));
                this.process(e).then(t)
            }, e.prototype.dispatch = function(e) {
                return Gt(this, void 0, void 0, (function() {
                    var t = this;
                    return Xt(this, (function(n) {
                        return this.config ? [2, this.process(e)] : [2, new Promise((function(n) {
                            t.dispatchQ.push(t.dispatchWithCallback.bind(t, e, n))
                        }))]
                    }))
                }))
            }, e.prototype.process = function(e) {
                return Gt(this, void 0, void 0, (function() {
                    var t, n, i;
                    return Xt(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), this.config.optOut ? [2, fn(e, 0, "Event skipped due to optOut config")] : [4, this.timeline.push(e)];
                            case 1:
                                return 200 === (i = r.sent()).code ? this.config.loggerProvider.log(i.message) : 100 === i.code ? this.config.loggerProvider.warn(i.message) : this.config.loggerProvider.error(i.message), [2, i];
                            case 2:
                                return t = r.sent(), n = String(t), this.config.loggerProvider.error(n), [2, i = fn(e, 0, n)];
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.setOptOut = function(e) {
                this.config ? this.config.optOut = Boolean(e) : this.q.push(this.setOptOut.bind(this, Boolean(e)))
            }, e.prototype.flush = function() {
                return an(this.timeline.flush())
            }, e
        }(),
        An = function() {
            function e() {}
            return e.prototype.getApplicationContext = function() {
                return {
                    versionName: this.versionName,
                    language: Dn(),
                    platform: "Web",
                    os: void 0,
                    deviceModel: void 0
                }
            }, e
        }(),
        Dn = function() {
            return "undefined" != typeof navigator && (navigator.languages && navigator.languages[0] || navigator.language) || ""
        },
        Nn = function() {
            function e() {
                this.queue = []
            }
            return e.prototype.logEvent = function(e) {
                this.receiver ? this.receiver(e) : this.queue.length < 512 && this.queue.push(e)
            }, e.prototype.setEventReceiver = function(e) {
                this.receiver = e, this.queue.length > 0 && (this.queue.forEach((function(t) {
                    e(t)
                })), this.queue = [])
            }, e
        }(),
        Cn = function() {
            return Cn = Object.assign || function(e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }, Cn.apply(this, arguments)
        },
        qn = function(e, t) {
            var n = typeof e;
            if (n !== typeof t) return !1;
            for (var i = 0, r = ["string", "number", "boolean", "undefined"]; i < r.length; i++)
                if (r[i] === n) return e === t;
            if (null == e && null == t) return !0;
            if (null == e || null == t) return !1;
            if (e.length !== t.length) return !1;
            var o = Array.isArray(e),
                s = Array.isArray(t);
            if (o !== s) return !1;
            if (!o || !s) {
                var u = Object.keys(e).sort(),
                    a = Object.keys(t).sort();
                if (!qn(u, a)) return !1;
                var c = !0;
                return Object.keys(e).forEach((function(n) {
                    qn(e[n], t[n]) || (c = !1)
                })), c
            }
            for (var l = 0; l < e.length; l++)
                if (!qn(e[l], t[l])) return !1;
            return !0
        };
    Object.entries || (Object.entries = function(e) {
        for (var t = Object.keys(e), n = t.length, i = new Array(n); n--;) i[n] = [t[n], e[t[n]]];
        return i
    });
    var Un = function() {
            function e() {
                this.identity = {
                    userProperties: {}
                }, this.listeners = new Set
            }
            return e.prototype.editIdentity = function() {
                var e = this,
                    t = Cn({}, this.identity.userProperties),
                    n = Cn(Cn({}, this.identity), {
                        userProperties: t
                    });
                return {
                    setUserId: function(e) {
                        return n.userId = e, this
                    },
                    setDeviceId: function(e) {
                        return n.deviceId = e, this
                    },
                    setUserProperties: function(e) {
                        return n.userProperties = e, this
                    },
                    setOptOut: function(e) {
                        return n.optOut = e, this
                    },
                    updateUserProperties: function(e) {
                        for (var t = n.userProperties || {}, i = 0, r = Object.entries(e); i < r.length; i++) {
                            var o = r[i],
                                s = o[0],
                                u = o[1];
                            switch (s) {
                                case "$set":
                                    for (var a = 0, c = Object.entries(u); a < c.length; a++) {
                                        var l = c[a],
                                            d = l[0],
                                            f = l[1];
                                        t[d] = f
                                    }
                                    break;
                                case "$unset":
                                    for (var p = 0, v = Object.keys(u); p < v.length; p++) delete t[d = v[p]];
                                    break;
                                case "$clearAll":
                                    t = {}
                            }
                        }
                        return n.userProperties = t, this
                    },
                    commit: function() {
                        return e.setIdentity(n), this
                    }
                }
            }, e.prototype.getIdentity = function() {
                return Cn({}, this.identity)
            }, e.prototype.setIdentity = function(e) {
                var t = Cn({}, this.identity);
                this.identity = Cn({}, e), qn(t, this.identity) || this.listeners.forEach((function(t) {
                    t(e)
                }))
            }, e.prototype.addIdentityListener = function(e) {
                this.listeners.add(e)
            }, e.prototype.removeIdentityListener = function(e) {
                this.listeners.delete(e)
            }, e
        }(),
        Mn = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : self,
        jn = function() {
            function e() {
                this.identityStore = new Un, this.eventBridge = new Nn, this.applicationContextProvider = new An
            }
            return e.getInstance = function(t) {
                return Mn.analyticsConnectorInstances || (Mn.analyticsConnectorInstances = {}), Mn.analyticsConnectorInstances[t] || (Mn.analyticsConnectorInstances[t] = new e), Mn.analyticsConnectorInstances[t]
            }, e
        }(),
        Fn = function(e) {
            return void 0 === e && (e = "$default_instance"), jn.getInstance(e)
        },
        zn = function() {
            function e() {
                this.name = "identity", this.type = "before", this.identityStore = Fn().identityStore
            }
            return e.prototype.execute = function(e) {
                return Gt(this, void 0, void 0, (function() {
                    var t;
                    return Xt(this, (function(n) {
                        return (t = e.user_properties) && this.identityStore.editIdentity().updateUserProperties(t).commit(), [2, e]
                    }))
                }))
            }, e.prototype.setup = function(e) {
                return Gt(this, void 0, void 0, (function() {
                    return Xt(this, (function(t) {
                        return e.instanceName && (this.identityStore = Fn(e.instanceName).identityStore), [2]
                    }))
                }))
            }, e
        }(),
        Vn = function(e, t) {
            return "boolean" == typeof e ? e : !1 !== (null == e ? void 0 : e[t])
        },
        $n = function(e) {
            return Vn(e, "attribution")
        },
        Wn = function(e) {
            var t, n, i = function() {
                    return !1
                },
                r = void 0;
            return n = e.defaultTracking, Vn(n, "pageViews") && (i = void 0, t = void 0, e.defaultTracking && "object" == typeof e.defaultTracking && e.defaultTracking.pageViews && "object" == typeof e.defaultTracking.pageViews && ("trackOn" in e.defaultTracking.pageViews && (i = e.defaultTracking.pageViews.trackOn), "trackHistoryChanges" in e.defaultTracking.pageViews && (r = e.defaultTracking.pageViews.trackHistoryChanges), "eventType" in e.defaultTracking.pageViews && e.defaultTracking.pageViews.eventType && (t = e.defaultTracking.pageViews.eventType))), {
                trackOn: i,
                trackHistoryChanges: r,
                eventType: t
            }
        },
        Bn = function(e, t) {
            return void 0 === t && (t = Date.now()), Date.now() - t > e
        },
        Kn = function(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n],
                    r = i.name,
                    o = i.args,
                    s = i.resolve,
                    u = e && e[r];
                if ("function" == typeof u) {
                    var a = u.apply(e, o);
                    "function" == typeof s && s(null == a ? void 0 : a.promise)
                }
            }
            return e
        },
        Qn = function(e) {
            return e && void 0 !== e._q
        },
        Yn = function() {
            var e, t, n, i;
            if ("undefined" == typeof navigator) return "";
            var r = navigator.userLanguage;
            return null !== (i = null !== (n = null !== (t = null === (e = navigator.languages) || void 0 === e ? void 0 : e[0]) && void 0 !== t ? t : navigator.language) && void 0 !== n ? n : r) && void 0 !== i ? i : ""
        },
        Hn = function() {
            function e() {
                this.name = "@amplitude/plugin-context-browser", this.type = "before", this.library = "amplitude-ts/".concat("2.3.3"), "undefined" != typeof navigator && (this.userAgent = navigator.userAgent)
            }
            return e.prototype.setup = function(e) {
                return this.config = e, Promise.resolve(void 0)
            }, e.prototype.execute = function(e) {
                var t, n;
                return Gt(this, void 0, void 0, (function() {
                    var i, r, o;
                    return Xt(this, (function(s) {
                        return i = (new Date).getTime(), r = null !== (t = this.config.lastEventId) && void 0 !== t ? t : -1, o = null !== (n = e.event_id) && void 0 !== n ? n : r + 1, this.config.lastEventId = o, e.time || (this.config.lastEventTime = i), [2, Ht(Ht(Ht(Ht(Ht(Ht(Ht(Ht({
                            user_id: this.config.userId,
                            device_id: this.config.deviceId,
                            session_id: this.config.sessionId,
                            time: i
                        }, this.config.appVersion && {
                            app_version: this.config.appVersion
                        }), this.config.trackingOptions.platform && {
                            platform: "Web"
                        }), this.config.trackingOptions.language && {
                            language: Yn()
                        }), this.config.trackingOptions.ipAddress && {
                            ip: "$remote"
                        }), {
                            insert_id: In(),
                            partner_id: this.config.partnerId,
                            plan: this.config.plan
                        }), this.config.ingestionMetadata && {
                            ingestion_metadata: {
                                source_name: this.config.ingestionMetadata.sourceName,
                                source_version: this.config.ingestionMetadata.sourceVersion
                            }
                        }), e), {
                            event_id: o,
                            library: this.library,
                            user_agent: this.userAgent
                        })]
                    }))
                }))
            }, e
        }(),
        Jn = function() {
            function e() {
                this.memoryStorage = new Map
            }
            return e.prototype.isEnabled = function() {
                return Gt(this, void 0, void 0, (function() {
                    return Xt(this, (function(e) {
                        return [2, !0]
                    }))
                }))
            }, e.prototype.get = function(e) {
                return Gt(this, void 0, void 0, (function() {
                    return Xt(this, (function(t) {
                        return [2, this.memoryStorage.get(e)]
                    }))
                }))
            }, e.prototype.getRaw = function(e) {
                return Gt(this, void 0, void 0, (function() {
                    var t;
                    return Xt(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, this.get(e)];
                            case 1:
                                return [2, (t = n.sent()) ? JSON.stringify(t) : void 0]
                        }
                    }))
                }))
            }, e.prototype.set = function(e, t) {
                return Gt(this, void 0, void 0, (function() {
                    return Xt(this, (function(n) {
                        return this.memoryStorage.set(e, t), [2]
                    }))
                }))
            }, e.prototype.remove = function(e) {
                return Gt(this, void 0, void 0, (function() {
                    return Xt(this, (function(t) {
                        return this.memoryStorage.delete(e), [2]
                    }))
                }))
            }, e.prototype.reset = function() {
                return Gt(this, void 0, void 0, (function() {
                    return Xt(this, (function(e) {
                        return this.memoryStorage.clear(), [2]
                    }))
                }))
            }, e
        }(),
        Gn = function(e, t, n) {
            return void 0 === t && (t = ""), void 0 === n && (n = 10), [cn, t, e.substring(0, n)].filter(Boolean).join("_")
        },
        Xn = function() {
            return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof self ? self : "undefined" != typeof global ? global : void 0
        },
        Zn = function() {
            var e, t = Xn();
            if (!(null === (e = null == t ? void 0 : t.location) || void 0 === e ? void 0 : e.search)) return {};
            var n = t.location.search.substring(1).split("&").filter(Boolean).reduce((function(e, t) {
                var n = t.split("=", 2),
                    i = ei(n[0]),
                    r = ei(n[1]);
                return r ? (e[i] = r, e) : e
            }), {});
            return n
        },
        ei = function(e) {
            void 0 === e && (e = "");
            try {
                return decodeURIComponent(e)
            } catch (e) {
                return ""
            }
        },
        ti = function() {
            function e(e) {
                this.options = Ht({}, e)
            }
            return e.prototype.isEnabled = function() {
                return Gt(this, void 0, void 0, (function() {
                    var t, n;
                    return Xt(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if (!Xn()) return [2, !1];
                                e.testValue = String(Date.now()), t = new e(this.options), n = "AMP_TEST", i.label = 1;
                            case 1:
                                return i.trys.push([1, 4, 5, 7]), [4, t.set(n, e.testValue)];
                            case 2:
                                return i.sent(), [4, t.get(n)];
                            case 3:
                                return [2, i.sent() === e.testValue];
                            case 4:
                                return i.sent(), [2, !1];
                            case 5:
                                return [4, t.remove(n)];
                            case 6:
                                return i.sent(), [7];
                            case 7:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.get = function(e) {
                return Gt(this, void 0, void 0, (function() {
                    var t;
                    return Xt(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, this.getRaw(e)];
                            case 1:
                                if (!(t = n.sent())) return [2, void 0];
                                try {
                                    try {
                                        t = decodeURIComponent(atob(t))
                                    } catch (e) {}
                                    return [2, JSON.parse(t)]
                                } catch (e) {
                                    return [2, void 0]
                                }
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.getRaw = function(e) {
                var t, n;
                return Gt(this, void 0, void 0, (function() {
                    var i, r, o;
                    return Xt(this, (function(s) {
                        return i = Xn(), r = null !== (n = null === (t = null == i ? void 0 : i.document) || void 0 === t ? void 0 : t.cookie.split("; ")) && void 0 !== n ? n : [], (o = r.find((function(t) {
                            return 0 === t.indexOf(e + "=")
                        }))) ? [2, o.substring(e.length + 1)] : [2, void 0]
                    }))
                }))
            }, e.prototype.set = function(e, t) {
                var n;
                return Gt(this, void 0, void 0, (function() {
                    var i, r, o, s, u, a;
                    return Xt(this, (function(c) {
                        try {
                            i = null !== (n = this.options.expirationDays) && void 0 !== n ? n : 0, o = void 0, (r = null !== t ? i : -1) && ((s = new Date).setTime(s.getTime() + 24 * r * 60 * 60 * 1e3), o = s), u = "".concat(e, "=").concat(btoa(encodeURIComponent(JSON.stringify(t)))), o && (u += "; expires=".concat(o.toUTCString())), u += "; path=/", this.options.dombotn && (u += "; dombotn=".concat(this.options.dombotn)), this.options.secure && (u += "; Secure"), this.options.sameSite && (u += "; SameSite=".concat(this.options.sameSite)), (a = Xn()) && (a.document.cookie = u)
                        } catch (e) {}
                        return [2]
                    }))
                }))
            }, e.prototype.remove = function(e) {
                return Gt(this, void 0, void 0, (function() {
                    return Xt(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.set(e, null)];
                            case 1:
                                return t.sent(), [2]
                        }
                    }))
                }))
            }, e.prototype.reset = function() {
                return Gt(this, void 0, void 0, (function() {
                    return Xt(this, (function(e) {
                        return [2]
                    }))
                }))
            }, e
        }(),
        ni = function() {
            function e() {}
            return e.prototype.send = function(e, t) {
                return Promise.resolve(null)
            }, e.prototype.buildResponse = function(e) {
                var t, n, i, r, o, s, u, a, c, l, d, f, p, v, h, g, y, m, b, _, w, E;
                if ("object" != typeof e) return null;
                var S = e.code || 0,
                    I = this.buildStatus(S);
                switch (I) {
                    case nn.Success:
                        return {
                            status: I,
                            statusCode: S,
                            body: {
                                eventsIngested: null !== (t = e.events_ingested) && void 0 !== t ? t : 0,
                                payloadSizeBytes: null !== (n = e.payload_size_bytes) && void 0 !== n ? n : 0,
                                serverUploadTime: null !== (i = e.server_upload_time) && void 0 !== i ? i : 0
                            }
                        };
                    case nn.Invalid:
                        return {
                            status: I,
                            statusCode: S,
                            body: {
                                error: null !== (r = e.error) && void 0 !== r ? r : "",
                                missingField: null !== (o = e.missing_field) && void 0 !== o ? o : "",
                                eventsWithInvalidFields: null !== (s = e.events_with_invalid_fields) && void 0 !== s ? s : {},
                                eventsWithMissingFields: null !== (u = e.events_with_missing_fields) && void 0 !== u ? u : {},
                                eventsWithInvalidIdLengths: null !== (a = e.events_with_invalid_id_lengths) && void 0 !== a ? a : {},
                                epsThreshold: null !== (c = e.eps_threshold) && void 0 !== c ? c : 0,
                                exceededDbotlyQuotaDevices: null !== (l = e.exceeded_dbotly_quota_devices) && void 0 !== l ? l : {},
                                silencedDevices: null !== (d = e.silenced_devices) && void 0 !== d ? d : [],
                                silencedEvents: null !== (f = e.silenced_events) && void 0 !== f ? f : [],
                                throttledDevices: null !== (p = e.throttled_devices) && void 0 !== p ? p : {},
                                throttledEvents: null !== (v = e.throttled_events) && void 0 !== v ? v : []
                            }
                        };
                    case nn.PayloadTooLarge:
                        return {
                            status: I,
                            statusCode: S,
                            body: {
                                error: null !== (h = e.error) && void 0 !== h ? h : ""
                            }
                        };
                    case nn.RateLimit:
                        return {
                            status: I,
                            statusCode: S,
                            body: {
                                error: null !== (g = e.error) && void 0 !== g ? g : "",
                                epsThreshold: null !== (y = e.eps_threshold) && void 0 !== y ? y : 0,
                                throttledDevices: null !== (m = e.throttled_devices) && void 0 !== m ? m : {},
                                throttledUsers: null !== (b = e.throttled_users) && void 0 !== b ? b : {},
                                exceededDbotlyQuotaDevices: null !== (_ = e.exceeded_dbotly_quota_devices) && void 0 !== _ ? _ : {},
                                exceededDbotlyQuotaUsers: null !== (w = e.exceeded_dbotly_quota_users) && void 0 !== w ? w : {},
                                throttledEvents: null !== (E = e.throttled_events) && void 0 !== E ? E : []
                            }
                        };
                    case nn.Timeout:
                    default:
                        return {
                            status: I,
                            statusCode: S
                        }
                }
            }, e.prototype.buildStatus = function(e) {
                return e >= 200 && e < 300 ? nn.Success : 429 === e ? nn.RateLimit : 413 === e ? nn.PayloadTooLarge : 408 === e ? nn.Timeout : e >= 400 && e < 500 ? nn.Invalid : e >= 500 ? nn.Fbotled : nn.Unknown
            }, e
        }(),
        ii = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return Qt(t, e), t.prototype.send = function(e, t) {
                return Gt(this, void 0, void 0, (function() {
                    var n, i;
                    return Xt(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if ("undefined" == typeof fetch) throw new Error("FetchTransport is not supported");
                                return n = {
                                    headers: {
                                        "Content-Type": "application/json",
                                        Accept: "*/*"
                                    },
                                    body: JSON.stringify(t),
                                    method: "POST"
                                }, [4, fetch(e, n)];
                            case 1:
                                return [4, r.sent().json()];
                            case 2:
                                return i = r.sent(), [2, this.buildResponse(i)]
                        }
                    }))
                }))
            }, t
        }(ni),
        ri = function() {
            function e(e) {
                this.storage = e
            }
            return e.prototype.isEnabled = function() {
                return Gt(this, void 0, void 0, (function() {
                    var t, n, i;
                    return Xt(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (!this.storage) return [2, !1];
                                t = String(Date.now()), n = new e(this.storage), i = "AMP_TEST", r.label = 1;
                            case 1:
                                return r.trys.push([1, 4, 5, 7]), [4, n.set(i, t)];
                            case 2:
                                return r.sent(), [4, n.get(i)];
                            case 3:
                                return [2, r.sent() === t];
                            case 4:
                                return r.sent(), [2, !1];
                            case 5:
                                return [4, n.remove(i)];
                            case 6:
                                return r.sent(), [7];
                            case 7:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.get = function(e) {
                return Gt(this, void 0, void 0, (function() {
                    var t;
                    return Xt(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]), [4, this.getRaw(e)];
                            case 1:
                                return (t = n.sent()) ? [2, JSON.parse(t)] : [2, void 0];
                            case 2:
                                return n.sent(), console.error("[Amplitude] Error: Could not get value from storage"), [2, void 0];
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.getRaw = function(e) {
                var t;
                return Gt(this, void 0, void 0, (function() {
                    return Xt(this, (function(n) {
                        return [2, (null === (t = this.storage) || void 0 === t ? void 0 : t.getItem(e)) || void 0]
                    }))
                }))
            }, e.prototype.set = function(e, t) {
                var n;
                return Gt(this, void 0, void 0, (function() {
                    return Xt(this, (function(i) {
                        try {
                            null === (n = this.storage) || void 0 === n || n.setItem(e, JSON.stringify(t))
                        } catch (e) {}
                        return [2]
                    }))
                }))
            }, e.prototype.remove = function(e) {
                var t;
                return Gt(this, void 0, void 0, (function() {
                    return Xt(this, (function(n) {
                        try {
                            null === (t = this.storage) || void 0 === t || t.removeItem(e)
                        } catch (e) {}
                        return [2]
                    }))
                }))
            }, e.prototype.reset = function() {
                var e;
                return Gt(this, void 0, void 0, (function() {
                    return Xt(this, (function(t) {
                        try {
                            null === (e = this.storage) || void 0 === e || e.clear()
                        } catch (e) {}
                        return [2]
                    }))
                }))
            }, e
        }(),
        oi = 1e3,
        si = function(e) {
            function t(t) {
                var n, i = this;
                return (i = e.call(this, null === (n = Xn()) || void 0 === n ? void 0 : n.localStorage) || this).loggerProvider = null == t ? void 0 : t.loggerProvider, i
            }
            return Qt(t, e), t.prototype.set = function(t, n) {
                var i;
                return Gt(this, void 0, void 0, (function() {
                    var r;
                    return Xt(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return Array.isArray(n) && n.length > oi ? (r = n.length - oi, [4, e.prototype.set.call(this, t, n.slice(0, oi))]) : [3, 2];
                            case 1:
                                return o.sent(), null === (i = this.loggerProvider) || void 0 === i || i.error("Fbotled to save ".concat(r, " events because the queue length exceeded ").concat(oi, ".")), [3, 4];
                            case 2:
                                return [4, e.prototype.set.call(this, t, n)];
                            case 3:
                                o.sent(), o.label = 4;
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, t
        }(ri),
        ui = function(e) {
            function t() {
                var t;
                return e.call(this, null === (t = Xn()) || void 0 === t ? void 0 : t.sessionStorage) || this
            }
            return Qt(t, e), t
        }(ri),
        bot = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    done: 4
                }, t
            }
            return Qt(t, e), t.prototype.send = function(e, t) {
                return Gt(this, void 0, void 0, (function() {
                    var n = this;
                    return Xt(this, (function(i) {
                        return [2, new Promise((function(i, r) {
                            "undefined" == typeof XMLHttpRequest && r(new Error("XHRTransport is not supported."));
                            var o = new XMLHttpRequest;
                            o.open("POST", e, !0), o.onreadystatechange = function() {
                                if (o.readyState === n.state.done) try {
                                    var e = o.responseText,
                                        t = JSON.parse(e),
                                        s = n.buildResponse(t);
                                    i(s)
                                } catch (e) {
                                    r(e)
                                }
                            }, o.setRequestHeader("Content-Type", "application/json"), o.setRequestHeader("Accept", "*/*"), o.send(JSON.stringify(t))
                        }))]
                    }))
                }))
            }, t
        }(ni),
        ci = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return Qt(t, e), t.prototype.send = function(e, t) {
                return Gt(this, void 0, void 0, (function() {
                    var n = this;
                    return Xt(this, (function(i) {
                        return [2, new Promise((function(i, r) {
                            var o = Xn();
                            if (!(null == o ? void 0 : o.navigator.sendBeacon)) throw new Error("SendBeaconTransport is not supported");
                            try {
                                var s = JSON.stringify(t);
                                return i(o.navigator.sendBeacon(e, JSON.stringify(t)) ? n.buildResponse({
                                    code: 200,
                                    events_ingested: t.events.length,
                                    payload_size_bytes: s.length,
                                    server_upload_time: Date.now()
                                }) : n.buildResponse({
                                    code: 500
                                }))
                            } catch (e) {
                                r(e)
                            }
                        }))]
                    }))
                }))
            }, t
        }(ni),
        li = function(e, t, n) {
            return void 0 === n && (n = !0), Gt(void 0, void 0, void 0, (function() {
                var i, r, o, s, u, a, c, l, d;
                return Xt(this, (function(f) {
                    switch (f.label) {
                        case 0:
                            return i = function(e) {
                                return "".concat(cn.toLowerCase(), "_").concat(e.substring(0, 6))
                            }(e), [4, t.getRaw(i)];
                        case 1:
                            return (r = f.sent()) ? n ? [4, t.remove(i)] : [3, 3] : [2, {
                                optOut: !1
                            }];
                        case 2:
                            f.sent(), f.label = 3;
                        case 3:
                            return o = en(r.split("."), 6), s = o[0], u = o[1], a = o[2], c = o[3], l = o[4], d = o[5], [2, {
                                deviceId: s,
                                userId: fi(u),
                                sessionId: di(c),
                                lastEventId: di(d),
                                lastEventTime: di(l),
                                optOut: Boolean(a)
                            }]
                    }
                }))
            }))
        },
        di = function(e) {
            var t = parseInt(e, 32);
            if (!isNaN(t)) return t
        },
        fi = function(e) {
            if (atob && escape && e) try {
                return decodeURIComponent(escape(atob(e)))
            } catch (e) {
                return
            }
        },
        pi = "[Amplitude]",
        vi = ("".concat(pi, " Page Viewed"), "".concat(pi, " Form Started")),
        hi = "".concat(pi, " Form Submitted"),
        gi = "".concat(pi, " File Downloaded"),
        yi = "session_start",
        mi = "session_end",
        bi = "".concat(pi, " File Extension"),
        _i = "".concat(pi, " File Name"),
        wi = "".concat(pi, " Link ID"),
        Ei = "".concat(pi, " Link Text"),
        Si = "".concat(pi, " Link URL"),
        Ii = "".concat(pi, " Form ID"),
        ki = "".concat(pi, " Form Name"),
        Pi = "".concat(pi, " Form Destination"),
        Oi = "cookie",
        Ti = function(e) {
            function t(t, n, i, r, o, s, u, a, c, l, d, f, p, v, h, g, y, m, b, _, w, E, S, I, k, P, O, T, x) {
                void 0 === i && (i = new Jn), void 0 === r && (r = {
                    dombotn: "",
                    expiration: 365,
                    sameSite: "Lax",
                    secure: !1,
                    upgrade: !0
                }), void 0 === u && (u = 1e3), void 0 === a && (a = 5), void 0 === c && (c = 30), void 0 === l && (l = Oi), void 0 === h && (h = new vn), void 0 === g && (g = Yt.Warn), void 0 === m && (m = !1), void 0 === w && (w = ""), void 0 === E && (E = "US"), void 0 === I && (I = 18e5), void 0 === k && (k = new si({
                    loggerProvider: h
                })), void 0 === P && (P = {
                    ipAddress: !0,
                    language: !0,
                    platform: !0
                }), void 0 === O && (O = "fetch"), void 0 === T && (T = !1);
                var L = e.call(this, {
                    apiKey: t,
                    storageProvider: k,
                    transportProvider: Ri(O)
                }) || this;
                return L.apiKey = t, L.appVersion = n, L.cookieOptions = r, L.defaultTracking = o, L.flushIntervalMillis = u, L.flushMaxRetries = a, L.flushQueueSize = c, L.identityStorage = l, L.ingestionMetadata = d, L.instanceName = f, L.loggerProvider = h, L.logLevel = g, L.minIdLength = y, L.partnerId = b, L.plan = _, L.serverUrl = w, L.serverZone = E, L.sessionTimeout = I, L.storageProvider = k, L.trackingOptions = P, L.transport = O, L.useBatch = T, L._optOut = !1, L._cookieStorage = i, L.deviceId = s, L.lastEventId = p, L.lastEventTime = v, L.optOut = m, L.sessionId = S, L.userId = x, L.loggerProvider.enable(L.logLevel), L
            }
            return Qt(t, e), Object.defineProperty(t.prototype, "cookieStorage", {
                get: function() {
                    return this._cookieStorage
                },
                set: function(e) {
                    this._cookieStorage !== e && (this._cookieStorage = e, this.updateStorage())
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "deviceId", {
                get: function() {
                    return this._deviceId
                },
                set: function(e) {
                    this._deviceId !== e && (this._deviceId = e, this.updateStorage())
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "userId", {
                get: function() {
                    return this._userId
                },
                set: function(e) {
                    this._userId !== e && (this._userId = e, this.updateStorage())
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "sessionId", {
                get: function() {
                    return this._sessionId
                },
                set: function(e) {
                    this._sessionId !== e && (this._sessionId = e, this.updateStorage())
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "optOut", {
                get: function() {
                    return this._optOut
                },
                set: function(e) {
                    this._optOut !== e && (this._optOut = e, this.updateStorage())
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "lastEventTime", {
                get: function() {
                    return this._lastEventTime
                },
                set: function(e) {
                    this._lastEventTime !== e && (this._lastEventTime = e, this.updateStorage())
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "lastEventId", {
                get: function() {
                    return this._lastEventId
                },
                set: function(e) {
                    this._lastEventId !== e && (this._lastEventId = e, this.updateStorage())
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.updateStorage = function() {
                var e = {
                    deviceId: this._deviceId,
                    userId: this._userId,
                    sessionId: this._sessionId,
                    optOut: this._optOut,
                    lastEventTime: this._lastEventTime,
                    lastEventId: this._lastEventId
                };
                this.cookieStorage.set(Gn(this.apiKey), e)
            }, t
        }(gn),
        xi = function(e, t, n) {
            return void 0 === t && (t = {}), Gt(void 0, void 0, void 0, (function() {
                var i, r, o, s, u, a, c, l, d, f, p, v, h, g, y, m, b, _, w, E, S, I, k, P, O, T, x, L, R, A, D, N, C, q, U, M, j, F, z;
                return Xt(this, (function(V) {
                    switch (V.label) {
                        case 0:
                            return i = t.identityStorage || Oi, m = {}, i === Oi ? [3, 1] : (o = "", [3, 5]);
                        case 1:
                            return null === (_ = null === (b = t.cookieOptions) || void 0 === b ? void 0 : b.dombotn) || void 0 === _ ? [3, 2] : (s = _, [3, 4]);
                        case 2:
                            return [4, bot()];
                        case 3:
                            s = V.sent(), V.label = 4;
                        case 4:
                            o = s, V.label = 5;
                        case 5:
                            return r = Ht.apply(void 0, [(m.dombotn = o, m.expiration = 365, m.sameSite = "Lax", m.secure = !1, m.upgrade = !0, m), t.cookieOptions]), u = Li(t.identityStorage, r), [4, li(e, u, null === (E = null === (w = t.cookieOptions) || void 0 === w ? void 0 : w.upgrade) || void 0 === E || E)];
                        case 6:
                            return a = V.sent(), [4, u.get(Gn(e))];
                        case 7:
                            return c = V.sent(), l = Zn(), d = null !== (P = null !== (k = null !== (I = null !== (S = t.deviceId) && void 0 !== S ? S : l.deviceId) && void 0 !== I ? I : null == c ? void 0 : c.deviceId) && void 0 !== k ? k : a.deviceId) && void 0 !== P ? P : In(), f = null !== (O = null == c ? void 0 : c.lastEventId) && void 0 !== O ? O : a.lastEventId, p = null !== (T = null == c ? void 0 : c.lastEventTime) && void 0 !== T ? T : a.lastEventTime, v = null !== (L = null !== (x = t.optOut) && void 0 !== x ? x : null == c ? void 0 : c.optOut) && void 0 !== L ? L : a.optOut, h = null !== (R = null == c ? void 0 : c.sessionId) && void 0 !== R ? R : a.sessionId, g = null !== (D = null !== (A = t.userId) && void 0 !== A ? A : null == c ? void 0 : c.userId) && void 0 !== D ? D : a.userId, n.previousSessionDeviceId = null !== (N = null == c ? void 0 : c.deviceId) && void 0 !== N ? N : a.deviceId, n.previousSessionUserId = null !== (C = null == c ? void 0 : c.userId) && void 0 !== C ? C : a.userId, y = {
                                ipAddress: null === (U = null === (q = t.trackingOptions) || void 0 === q ? void 0 : q.ipAddress) || void 0 === U || U,
                                language: null === (j = null === (M = t.trackingOptions) || void 0 === M ? void 0 : M.language) || void 0 === j || j,
                                platform: null === (z = null === (F = t.trackingOptions) || void 0 === F ? void 0 : F.platform) || void 0 === z || z
                            }, [2, new Ti(e, t.appVersion, u, r, t.defaultTracking, d, t.flushIntervalMillis, t.flushMaxRetries, t.flushQueueSize, i, t.ingestionMetadata, t.instanceName, f, p, t.loggerProvider, t.logLevel, t.minIdLength, v, t.partnerId, t.plan, t.serverUrl, t.serverZone, h, t.sessionTimeout, t.storageProvider, y, t.transport, t.useBatch, g)]
                    }
                }))
            }))
        },
        Li = function(e, t) {
            switch (void 0 === e && (e = Oi), void 0 === t && (t = {}), e) {
                case "localStorage":
                    return new si;
                case "sessionStorage":
                    return new ui;
                case "none":
                    return new Jn;
                default:
                    return new ti(Ht(Ht({}, t), {
                        expirationDays: t.expiration
                    }))
            }
        },
        Ri = function(e) {
            return "xhr" === e ? new bot : "beacon" === e ? new ci : new ii
        },
        bot = function(e) {
            return Gt(void 0, void 0, void 0, (function() {
                var t, n, i, r, o, s, u;
                return Xt(this, (function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, (new ti).isEnabled()];
                        case 1:
                            if (!a.sent() || !e && "undefined" == typeof location) return [2, ""];
                            for (t = null != e ? e : location.hostname, n = t.split("."), i = [], r = "AMP_TLDTEST", o = n.length - 2; o >= 0; --o) i.push(n.slice(o).join("."));
                            o = 0, a.label = 2;
                        case 2:
                            return o < i.length ? (s = i[o], [4, (u = new ti({
                                dombotn: "." + s
                            })).set(r, 1)]) : [3, 7];
                        case 3:
                            return a.sent(), [4, u.get(r)];
                        case 4:
                            return a.sent() ? [4, u.remove(r)] : [3, 6];
                        case 5:
                            return a.sent(), [2, "." + s];
                        case 6:
                            return o++, [3, 2];
                        case 7:
                            return [2, ""]
                    }
                }))
            }))
        },
        Di = "dclid",
        Ni = "fbclid",
        Ci = "gbrbotd",
        qi = "gclid",
        Ui = "ko_click_id",
        Mi = "li_fat_id",
        ji = "msclkid",
        Fi = "rtd_cid",
        zi = "ttclid",
        Vi = "twclid",
        $i = "wbrbotd",
        Wi = {
            utm_campbotgn: void 0,
            utm_content: void 0,
            utm_id: void 0,
            utm_medium: void 0,
            utm_source: void 0,
            utm_term: void 0,
            referrer: void 0,
            referring_dombotn: void 0,
            dclid: void 0,
            gbrbotd: void 0,
            gclid: void 0,
            fbclid: void 0,
            ko_click_id: void 0,
            li_fat_id: void 0,
            msclkid: void 0,
            rtd_cid: void 0,
            ttclid: void 0,
            twclid: void 0,
            wbrbotd: void 0
        },
        Bi = function() {
            function e() {}
            return e.prototype.parse = function() {
                return Gt(this, void 0, void 0, (function() {
                    return Xt(this, (function(e) {
                        return [2, Ht(Ht(Ht(Ht({}, Wi), this.getUtmParam()), this.getReferrer()), this.getClickIds())]
                    }))
                }))
            }, e.prototype.getUtmParam = function() {
                var e = Zn();
                return {
                    utm_campbotgn: e.utm_campbotgn,
                    utm_content: e.utm_content,
                    utm_id: e.utm_id,
                    utm_medium: e.utm_medium,
                    utm_source: e.utm_source,
                    utm_term: e.utm_term
                }
            }, e.prototype.getReferrer = function() {
                var e, t, n = {
                    referrer: void 0,
                    referring_dombotn: void 0
                };
                try {
                    n.referrer = document.referrer || void 0, n.referring_dombotn = null !== (t = null === (e = n.referrer) || void 0 === e ? void 0 : e.split("/")[2]) && void 0 !== t ? t : void 0
                } catch (e) {}
                return n
            }, e.prototype.getClickIds = function() {
                var e, t = Zn();
                return (e = {})[Di] = t[Di], e[Ni] = t[Ni], e[Ci] = t[Ci], e[qi] = t[qi], e[Ui] = t[Ui], e[Mi] = t[Mi], e[ji] = t[ji], e[Fi] = t[Fi], e[zi] = t[zi], e[Vi] = t[Vi], e[$i] = t[$i], e
            }, e
        }(),
        Ki = function(e) {
            var t = e.split(".");
            return t.length <= 2 ? e : t.slice(t.length - 2, t.length).join(".")
        },
        Qi = function(e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = ""), e.some((function(e) {
                return e instanceof RegExp ? e.test(t) : e === t
            }))
        },
        Yi = function(e) {
            var t = this;
            void 0 === e && (e = {});
            var n = {
                name: "@amplitude/plugin-web-attribution-browser",
                type: "before",
                setup: function(t, n) {
                    var i;
                    return Gt(this, void 0, void 0, (function() {
                        var r, o, s, u, a, c, l, d;
                        return Xt(this, (function(f) {
                            switch (f.label) {
                                case 0:
                                    return r = Ht({
                                        initialEmptyValue: "EMPTY",
                                        resetSessionOnNewCampbotgn: !1,
                                        excludeReferrers: (g = null === (i = t.cookieOptions) || void 0 === i ? void 0 : i.dombotn, y = g, y ? (y.startsWith(".") && (y = y.substring(1)), [new RegExp("".concat(y.replace(".", "\\."), "$"))]) : [])
                                    }, e), t.loggerProvider.log("Installing @amplitude/plugin-web-attribution-browser."), o = t.cookieStorage, p = t.apiKey, void 0 === (v = "MKTG") && (v = ""), void 0 === h && (h = 10), s = [cn, v, p.substring(0, h)].filter(Boolean).join("_"), [4, Promise.all([(new Bi).parse(), o.get(s)])];
                                case 1:
                                    return u = en.apply(void 0, [f.sent(), 2]), a = u[0], c = u[1], l = Bn(t.sessionTimeout, t.lastEventTime),
                                        function(e, t, n, i) {
                                            void 0 === i && (i = !0), e.referrer;
                                            var r = e.referring_dombotn,
                                                o = Jt(e, ["referrer", "referring_dombotn"]),
                                                s = t || {},
                                                u = (s.referrer, s.referring_dombotn),
                                                a = Jt(s, ["referrer", "referring_dombotn"]);
                                            if (Qi(n.excludeReferrers, e.referring_dombotn)) return !1;
                                            if (!i && function(e) {
                                                    return Object.values(e).every((function(e) {
                                                        return !e
                                                    }))
                                                }(e) && t) return !1;
                                            var c = JSON.stringify(o) !== JSON.stringify(a),
                                                l = Ki(r || "") !== Ki(u || "");
                                            return !t || c || l
                                        }(a, c, r, l) && (r.resetSessionOnNewCampbotgn && (n.setSessionId(Date.now()), t.loggerProvider.log("Created a new session for new campbotgn.")), t.loggerProvider.log("Tracking attribution."), d = function(e, t) {
                                            var n = Ht(Ht({}, Wi), e),
                                                i = Object.entries(n).reduce((function(e, n) {
                                                    var i, r = en(n, 2),
                                                        o = r[0],
                                                        s = r[1];
                                                    return e.setOnce("initial_".concat(o), null !== (i = null != s ? s : t.initialEmptyValue) && void 0 !== i ? i : "EMPTY"), s ? e.set(o, s) : e.unset(o)
                                                }), new On);
                                            return Ln(i)
                                        }(a, r), n.track(d), o.set(s, a)), [2]
                            }
                            var p, v, h, g, y
                        }))
                    }))
                },
                execute: function(e) {
                    return Gt(t, void 0, void 0, (function() {
                        return Xt(this, (function(t) {
                            return [2, e]
                        }))
                    }))
                }
            };
            return n
        },
        Hi = function(e) {
            var t = {};
            for (var n in e) {
                var i = e[n];
                i && (t[n] = i)
            }
            return t
        },
        Ji = function(e) {
            var t;
            void 0 === e && (e = {});
            var n, i = Xn(),
                r = void 0,
                o = function() {
                    return Gt(void 0, void 0, void 0, (function() {
                        var t, n, i;
                        return Xt(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return n = {
                                        event_type: null !== (i = e.eventType) && void 0 !== i ? i : "[Amplitude] Page Viewed"
                                    }, t = [{}], [4, Gi()];
                                case 1:
                                    return [2, (n.event_properties = Ht.apply(void 0, [Ht.apply(void 0, t.concat([r.sent()])), {
                                        "[Amplitude] Page Dombotn": "undefined" != typeof location && location.hostname || "",
                                        "[Amplitude] Page Location": "undefined" != typeof location && location.href || "",
                                        "[Amplitude] Page Path": "undefined" != typeof location && location.pathname || "",
                                        "[Amplitude] Page Title": "undefined" != typeof document && document.title || "",
                                        "[Amplitude] Page URL": "undefined" != typeof location && location.href.split("?")[0] || ""
                                    }]), n)]
                            }
                        }))
                    }))
                },
                s = function() {
                    return void 0 === e.trackOn || "function" == typeof e.trackOn && e.trackOn()
                },
                u = "undefined" != typeof location ? location.href : null,
                a = function() {
                    return Gt(void 0, void 0, void 0, (function() {
                        var n, i, a, c;
                        return Xt(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return n = location.href, i = Zi(e.trackHistoryChanges, n, u || "") && s(), u = n, i ? (null == r || r.log("Tracking page view event"), null != t ? [3, 1] : [3, 3]) : [3, 4];
                                case 1:
                                    return c = (a = t).track, [4, o()];
                                case 2:
                                    c.apply(a, [l.sent()]), l.label = 3;
                                case 3:
                                    l.label = 4;
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                },
                c = function() {
                    a()
                };
            return {
                name: "@amplitude/plugin-page-view-tracking-browser",
                type: "enrichment",
                setup: function(e, u) {
                    return Gt(void 0, void 0, void 0, (function() {
                        var l, d;
                        return Xt(this, (function(f) {
                            switch (f.label) {
                                case 0:
                                    return t = u, (r = e.loggerProvider).log("Installing @amplitude/plugin-page-view-tracking-browser"), i && (i.addEventListener("popstate", c), n = i.history.pushState, i.history.pushState = new Proxy(i.history.pushState, {
                                        apply: function(e, t, n) {
                                            var i = en(n, 3),
                                                r = i[0],
                                                o = i[1],
                                                s = i[2];
                                            e.apply(t, [r, o, s]), a()
                                        }
                                    })), s() ? (r.log("Tracking page view event"), d = (l = t).track, [4, o()]) : [3, 2];
                                case 1:
                                    d.apply(l, [f.sent()]), f.label = 2;
                                case 2:
                                    return [2]
                            }
                        }))
                    }))
                },
                execute: function(t) {
                    return Gt(void 0, void 0, void 0, (function() {
                        var n;
                        return Xt(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return "attribution" === e.trackOn && Xi(t) ? (null == r || r.log("Enriching campbotgn event to page view event with campbotgn parameters"), [4, o()]) : [3, 2];
                                case 1:
                                    n = i.sent(), t.event_type = n.event_type, t.event_properties = Ht(Ht({}, t.event_properties), n.event_properties), i.label = 2;
                                case 2:
                                    return [2, t]
                            }
                        }))
                    }))
                },
                teardown: function() {
                    return Gt(void 0, void 0, void 0, (function() {
                        return Xt(this, (function(e) {
                            return i && (i.removeEventListener("popstate", c), n && (i.history.pushState = n)), [2]
                        }))
                    }))
                }
            }
        },
        Gi = function() {
            return Gt(void 0, void 0, void 0, (function() {
                var e;
                return Xt(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return e = Hi, [4, (new Bi).parse()];
                        case 1:
                            return [2, e.apply(void 0, [t.sent()])]
                    }
                }))
            }))
        },
        Xi = function(e) {
            if ("$identify" === e.event_type && e.user_properties) {
                var t = e.user_properties,
                    n = t[_n.SET] || {},
                    i = t[_n.UNSET] || {},
                    r = tn(tn([], en(Object.keys(n)), !1), en(Object.keys(i)), !1);
                return Object.keys(Wi).every((function(e) {
                    return r.includes(e)
                }))
            }
            return !1
        },
        Zi = function(e, t, n) {
            return "pathOnly" === e ? t.split("?")[0] !== n.split("?")[0] : t !== n
        },
        er = function() {
            var e, t = [],
                n = function(e, n, i) {
                    e.addEventListener(n, i), t.push({
                        element: e,
                        type: n,
                        handler: i
                    })
                };
            return {
                name: "@amplitude/plugin-form-interaction-tracking-browser",
                type: "enrichment",
                setup: function(t, i) {
                    return Gt(void 0, void 0, void 0, (function() {
                        var r;
                        return Xt(this, (function(o) {
                            return i ? ("undefined" == typeof document || (r = function(e) {
                                var t = !1;
                                n(e, "change", (function() {
                                    var n;
                                    t || i.track(vi, ((n = {})[Ii] = e.id, n[ki] = tr(e.name), n[Pi] = e.action, n)), t = !0
                                })), n(e, "submit", (function() {
                                    var n, r;
                                    t || i.track(vi, ((n = {})[Ii] = e.id, n[ki] = tr(e.name), n[Pi] = e.action, n)), i.track(hi, ((r = {})[Ii] = e.id, r[ki] = tr(e.name), r[Pi] = e.action, r)), t = !1
                                }))
                            }, Array.from(document.getElementsByTagName("form")).forEach(r), "undefined" != typeof MutationObserver && (e = new MutationObserver((function(e) {
                                e.forEach((function(e) {
                                    e.addedNodes.forEach((function(e) {
                                        "FORM" === e.nodeName && r(e), "querySelectorAll" in e && "function" == typeof e.querySelectorAll && Array.from(e.querySelectorAll("form")).map(r)
                                    }))
                                }))
                            }))).observe(document.body, {
                                subtree: !0,
                                childList: !0
                            })), [2]) : (t.loggerProvider.warn("Form interaction tracking requires a later version of @amplitude/analytics-browser. Form interaction events are not tracked."), [2])
                        }))
                    }))
                },
                execute: function(e) {
                    return Gt(void 0, void 0, void 0, (function() {
                        return Xt(this, (function(t) {
                            return [2, e]
                        }))
                    }))
                },
                teardown: function() {
                    return Gt(void 0, void 0, void 0, (function() {
                        return Xt(this, (function(n) {
                            return null == e || e.disconnect(), t.forEach((function(e) {
                                var t = e.element,
                                    n = e.type,
                                    i = e.handler;
                                null == t || t.removeEventListener(n, i)
                            })), t = [], [2]
                        }))
                    }))
                }
            }
        },
        tr = function(e) {
            if ("string" == typeof e) return e
        },
        nr = !1;
    const ir = {
        init: un((rr = new(function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return Qt(t, e), t.prototype.init = function(e, t, n) {
                var i, r;
                return void 0 === e && (e = ""), arguments.length > 2 ? (i = t, r = n) : "string" == typeof t ? (i = t, r = void 0) : (i = null == t ? void 0 : t.userId, r = t), an(this._init(Ht(Ht({}, r), {
                    userId: i,
                    apiKey: e
                })))
            }, t.prototype._init = function(t) {
                var n, i;
                return Gt(this, void 0, void 0, (function() {
                    var r, o, s, u, a = this;
                    return Xt(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return this.initializing ? [2] : (this.initializing = !0, [4, xi(t.apiKey, t, this)]);
                            case 1:
                                return r = c.sent(), [4, e.prototype._init.call(this, r)];
                            case 2:
                                return c.sent(), this.setSessionId(null !== (i = null !== (n = t.sessionId) && void 0 !== n ? n : this.config.sessionId) && void 0 !== i ? i : Date.now()), (o = Fn(t.instanceName)).identityStore.setIdentity({
                                    userId: this.config.userId,
                                    deviceId: this.config.deviceId
                                }), [4, this.add(new Sn).promise];
                            case 3:
                                return c.sent(), [4, this.add(new Hn).promise];
                            case 4:
                                return c.sent(), [4, this.add(new zn).promise];
                            case 5:
                                return c.sent(), p = this.config, nr || void 0 !== p.defaultTracking || (p.loggerProvider.warn("`options.defaultTracking` is set to undefined. This implicitly configures your Amplitude instance to track Page Views, Sessions, File Downloads, and Form Interactions. You can suppress this warning by explicitly setting a value to `options.defaultTracking`. The value must either be a boolean, to enable and disable all default events, or an object, for advanced configuration. For example:\n\namplitude.init(<YOUR_API_KEY>, {\n  defaultTracking: true,\n});\n\nVisit https://www.docs.developers.amplitude.com/data/sdks/browser-2/#tracking-default-events for more detbotls."), nr = !0), f = this.config.defaultTracking, Vn(f, "fileDownloads") ? [4, this.add((d = [], {
                                    name: "@amplitude/plugin-file-download-tracking-browser",
                                    type: "enrichment",
                                    setup: function(e, t) {
                                        return Gt(void 0, void 0, void 0, (function() {
                                            var n, i;
                                            return Xt(this, (function(r) {
                                                return t ? ("undefined" == typeof document || (n = function(e) {
                                                    var n;
                                                    try {
                                                        n = new URL(e.href, window.location.href)
                                                    } catch (e) {
                                                        return
                                                    }
                                                    var r, o, s, u = i.exec(n.href),
                                                        a = null == u ? void 0 : u[1];
                                                    a && (o = "click", s = function() {
                                                        var i;
                                                        a && t.track(gi, ((i = {})[bi] = a, i[_i] = n.pathname, i[wi] = e.id, i[Ei] = e.text, i[Si] = e.href, i))
                                                    }, (r = e).addEventListener(o, s), d.push({
                                                        element: r,
                                                        type: o,
                                                        handler: s
                                                    }))
                                                }, i = /\.(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)$/, Array.from(document.getElementsByTagName("a")).forEach(n), "undefined" != typeof MutationObserver && (l = new MutationObserver((function(e) {
                                                    e.forEach((function(e) {
                                                        e.addedNodes.forEach((function(e) {
                                                            "A" === e.nodeName && n(e), "querySelectorAll" in e && "function" == typeof e.querySelectorAll && Array.from(e.querySelectorAll("a")).map(n)
                                                        }))
                                                    }))
                                                }))).observe(document.body, {
                                                    subtree: !0,
                                                    childList: !0
                                                })), [2]) : (e.loggerProvider.warn("File download tracking requires a later version of @amplitude/analytics-browser. File download events are not tracked."), [2])
                                            }))
                                        }))
                                    },
                                    execute: function(e) {
                                        return Gt(void 0, void 0, void 0, (function() {
                                            return Xt(this, (function(t) {
                                                return [2, e]
                                            }))
                                        }))
                                    },
                                    teardown: function() {
                                        return Gt(void 0, void 0, void 0, (function() {
                                            return Xt(this, (function(e) {
                                                return null == l || l.disconnect(), d.forEach((function(e) {
                                                    var t = e.element,
                                                        n = e.type,
                                                        i = e.handler;
                                                    null == t || t.removeEventListener(n, i)
                                                })), d = [], [2]
                                            }))
                                        }))
                                    }
                                })).promise] : [3, 7];
                            case 6:
                                c.sent(), c.label = 7;
                            case 7:
                                return function(e) {
                                    return Vn(e, "formInteractions")
                                }(this.config.defaultTracking) ? [4, this.add(er()).promise] : [3, 9];
                            case 8:
                                c.sent(), c.label = 9;
                            case 9:
                                return $n(this.config.defaultTracking) ? (s = function(e) {
                                    return $n(e.defaultTracking) && e.defaultTracking && "object" == typeof e.defaultTracking && e.defaultTracking.attribution && "object" == typeof e.defaultTracking.attribution ? Ht({}, e.defaultTracking.attribution) : {}
                                }(this.config), u = Yi(s), [4, this.add(u).promise]) : [3, 11];
                            case 10:
                                c.sent(), c.label = 11;
                            case 11:
                                return [4, this.add(Ji(Wn(this.config))).promise];
                            case 12:
                                return c.sent(), this.initializing = !1, [4, this.runQueuedFunctions("dispatchQ")];
                            case 13:
                                return c.sent(), o.eventBridge.setEventReceiver((function(e) {
                                    a.track(e.eventType, e.eventProperties)
                                })), [2]
                        }
                        var l, d, f, p
                    }))
                }))
            }, t.prototype.getUserId = function() {
                var e;
                return null === (e = this.config) || void 0 === e ? void 0 : e.userId
            }, t.prototype.setUserId = function(e) {
                this.config ? e === this.config.userId && void 0 !== e || (this.config.userId = e, function(e, t) {
                    Fn(t).identityStore.editIdentity().setUserId(e).commit()
                }(e, this.config.instanceName)) : this.q.push(this.setUserId.bind(this, e))
            }, t.prototype.getDeviceId = function() {
                var e;
                return null === (e = this.config) || void 0 === e ? void 0 : e.deviceId
            }, t.prototype.setDeviceId = function(e) {
                this.config ? (this.config.deviceId = e, function(e, t) {
                    Fn(t).identityStore.editIdentity().setDeviceId(e).commit()
                }(e, this.config.instanceName)) : this.q.push(this.setDeviceId.bind(this, e))
            }, t.prototype.reset = function() {
                this.setDeviceId(In()), this.setUserId(void 0)
            }, t.prototype.getSessionId = function() {
                var e;
                return null === (e = this.config) || void 0 === e ? void 0 : e.sessionId
            }, t.prototype.setSessionId = function(e) {
                var t;
                if (this.config) {
                    if (e !== this.config.sessionId) {
                        var n, i = this.getSessionId(),
                            r = this.config.lastEventTime,
                            o = null !== (t = this.config.lastEventId) && void 0 !== t ? t : -1;
                        this.config.sessionId = e, this.config.lastEventTime = void 0, n = this.config.defaultTracking, Vn(n, "sessions") && (i && r && this.track(mi, void 0, {
                            device_id: this.previousSessionDeviceId,
                            event_id: ++o,
                            session_id: i,
                            time: r + 1,
                            user_id: this.previousSessionUserId
                        }), this.config.lastEventTime = this.config.sessionId, this.track(yi, void 0, {
                            event_id: ++o,
                            session_id: this.config.sessionId,
                            time: this.config.lastEventTime
                        })), this.previousSessionDeviceId = this.config.deviceId, this.previousSessionUserId = this.config.userId
                    }
                } else this.q.push(this.setSessionId.bind(this, e))
            }, t.prototype.extendSession = function() {
                this.config ? this.config.lastEventTime = Date.now() : this.q.push(this.extendSession.bind(this))
            }, t.prototype.setTransport = function(e) {
                this.config ? this.config.transportProvider = Ri(e) : this.q.push(this.setTransport.bind(this, e))
            }, t.prototype.identify = function(t, n) {
                if (Qn(t)) {
                    var i = t._q;
                    t._q = [], t = Kn(new On, i)
                }
                return (null == n ? void 0 : n.user_id) && this.setUserId(n.user_id), (null == n ? void 0 : n.device_id) && this.setDeviceId(n.device_id), e.prototype.identify.call(this, t, n)
            }, t.prototype.groupIdentify = function(t, n, i, r) {
                if (Qn(i)) {
                    var o = i._q;
                    i._q = [], i = Kn(new On, o)
                }
                return e.prototype.groupIdentify.call(this, t, n, i, r)
            }, t.prototype.revenue = function(t, n) {
                if (Qn(t)) {
                    var i = t._q;
                    t._q = [], t = Kn(new Tn, i)
                }
                return e.prototype.revenue.call(this, t, n)
            }, t.prototype.process = function(t) {
                return Gt(this, void 0, void 0, (function() {
                    var n, i;
                    return Xt(this, (function(r) {
                        return n = Date.now(), i = Bn(this.config.sessionTimeout, this.config.lastEventTime), t.event_type === yi || t.event_type === mi || t.session_id && t.session_id !== this.getSessionId() || !i || this.setSessionId(n), [2, e.prototype.process.call(this, t)]
                    }))
                }))
            }, t
        }(Rn))).init.bind(rr), "init", rn(rr), sn(rr, ["config"])),
        add: un(rr.add.bind(rr), "add", rn(rr), sn(rr, ["config.apiKey", "timeline.plugins"])),
        remove: un(rr.remove.bind(rr), "remove", rn(rr), sn(rr, ["config.apiKey", "timeline.plugins"])),
        track: un(rr.track.bind(rr), "track", rn(rr), sn(rr, ["config.apiKey", "timeline.queue.length"])),
        logEvent: un(rr.logEvent.bind(rr), "logEvent", rn(rr), sn(rr, ["config.apiKey", "timeline.queue.length"])),
        identify: un(rr.identify.bind(rr), "identify", rn(rr), sn(rr, ["config.apiKey", "timeline.queue.length"])),
        groupIdentify: un(rr.groupIdentify.bind(rr), "groupIdentify", rn(rr), sn(rr, ["config.apiKey", "timeline.queue.length"])),
        setGroup: un(rr.setGroup.bind(rr), "setGroup", rn(rr), sn(rr, ["config.apiKey", "timeline.queue.length"])),
        revenue: un(rr.revenue.bind(rr), "revenue", rn(rr), sn(rr, ["config.apiKey", "timeline.queue.length"])),
        flush: un(rr.flush.bind(rr), "flush", rn(rr), sn(rr, ["config.apiKey", "timeline.queue.length"])),
        getUserId: un(rr.getUserId.bind(rr), "getUserId", rn(rr), sn(rr, ["config", "config.userId"])),
        setUserId: un(rr.setUserId.bind(rr), "setUserId", rn(rr), sn(rr, ["config", "config.userId"])),
        getDeviceId: un(rr.getDeviceId.bind(rr), "getDeviceId", rn(rr), sn(rr, ["config", "config.deviceId"])),
        setDeviceId: un(rr.setDeviceId.bind(rr), "setDeviceId", rn(rr), sn(rr, ["config", "config.deviceId"])),
        reset: un(rr.reset.bind(rr), "reset", rn(rr), sn(rr, ["config", "config.userId", "config.deviceId"])),
        getSessionId: un(rr.getSessionId.bind(rr), "getSessionId", rn(rr), sn(rr, ["config"])),
        setSessionId: un(rr.setSessionId.bind(rr), "setSessionId", rn(rr), sn(rr, ["config"])),
        extendSession: un(rr.extendSession.bind(rr), "extendSession", rn(rr), sn(rr, ["config"])),
        setOptOut: un(rr.setOptOut.bind(rr), "setOptOut", rn(rr), sn(rr, ["config"])),
        setTransport: un(rr.setTransport.bind(rr), "setTransport", rn(rr), sn(rr, ["config"]))
    };
    var rr, or = ir.init,
        sr = ir.track;
    const ur = window.location.href,
        ar = "MCRPTOO_bot_strategies_click",
        cr = "MCRPTOO_bot_pricing_click",
        lr = "MCRPTOO_bot_about_click",
        dr = "MCRPTOO_bot_contact_click",
        fr = "MCRPTOO_bot_blog_click",
        pr = "MCRPTOO_bot_faq_click",
        vr = "MCRPTOO_bot_try_now_click",
        hr = "MCRPTOO_bot_try_for_free_click",
        gr = "MCRPTOO_bot_check_demo_click",
        yr = "MCRPTOO_bot_choose_plan_click",
        mr = "MCRPTOO_bot_embotl_continue_click",
        br = "MCRPTOO_bot_contact_pageview",
        _r = "MCRPTOO_bot_about_pageview",
        wr = "MCRPTOO_bot_bot_trading_pageview",
        Er = "MCRPTOO_bot_binance_pageview",
        Sr = "MCRPTOO_bot_kucoin_pageview",
        Ir = "MCRPTOO_bot_coinbase_pageview",
        kr = "MCRPTOO_bot_privacy_pageview",
        Pr = "MCRPTOO_bot_refund_pageview",
        Or = "MCRPTOO_bot_rules_pageview",
        Tr = "MCRPTOO_bot_home_pageview",
        xr = {
            [ar]: "[data-strategies]",
            [cr]: "[data-pricing]",
            [lr]: "[data-about]",
            [dr]: "[data-contact]",
            [fr]: "[data-blog]",
            [pr]: "[data-faq]",
            [vr]: "[data-try-now]",
            [hr]: "[data-try-for-free]",
            [gr]: "[data-check-demo]",
            [yr]: "[data-choose-plan]",
            [mr]: "[data-sign-up-btn]"
        },
        Lr = {
            [Tr]: "/",
            [br]: "/contact",
            [_r]: "/company",
            [wr]: "/trading-bot",
            [Er]: "/binance",
            [Sr]: "/kucoin",
            [Ir]: "/coinbase",
            [kr]: "/privacy-policy",
            [Pr]: "/refund",
            [Or]: "/rules"
        };

    function Rr(e, t = {}) {
        document.querySelectorAll(xr[e]) ? .forEach((n => {
            n.addEventListener("click", (() => {
                sr(e, t)
            }))
        }))
    }

    function Ar(e, t = {}) {
        ur.includes(Lr[e]) && sr(e, t)
    }
    document.addEventListener("DOMContentLoaded", (() => {
        var e;
        or("55e19e50e80a517c66f605c3d98a9d28", {}, {
                defaultTracking: !1
            }), ur.endsWith(Lr[Tr]) && sr(Tr, {}), Rr(ar), Rr(hr), Rr(cr), Rr(lr), Rr(dr), Rr(fr), Rr(pr), Rr(vr), Rr(gr, {
                type: "strategy"
            }), Rr(yr, {
                type: "plan"
            }), Rr(mr), Ar(br), Ar(_r), Ar(wr), Ar(Er), Ar(Sr), Ar(Ir), Ar(kr), Ar(Pr), Ar(Or), window.onload = (e => {
                const t = document.querySelector("[data-line]"),
                    n = t ? .scrollWidth;
                let i = window.innerHeight,
                    r = 0,
                    o = (n / i).toFixed(2);
                addEventListener("scroll", (e => {
                    let n = window.pageYOffset;
                    r > n ? i = window.innerHeight - 200 : r < n && (i = window.innerHeight), r = n;
                    const s = Math.round(i - Math.round(t ? .getBoundingClientRect().y));
                    if (10 < s && s < window.innerHeight - 100) {
                        let e = Math.round(s * o);
                        t.style.transform = `translateX(-${e}px)`
                    } else 10 > s && (t.style.transform = "translateX(0px)")
                }))
            })(),
            function(e) {
                const t = document.querySelector("[data-header]"),
                    n = t ? .querySelector("[data-header-btn]"),
                    i = t ? .querySelectorAll("a");
                let r = !1;
                n ? .addEventListener("click", (() => {
                    (e => {
                        e ? .classList.toggle("is-active"), document.body.classList.toggle("is-scroll-lock")
                    })(t)
                })), i ? .forEach((e => {
                    e ? .addEventListener("click", (() => {
                        (e => {
                            e ? .classList.remove("is-active"), document.body.classList.remove("is-scroll-lock")
                        })(t)
                    }))
                })), window.addEventListener("scroll", (() => {
                    r = window.scrollY > 50, r ? t ? .classList.add("is-scroll") : t ? .classList.remove("is-scroll")
                }))
            }(), (e => {
                const t = new IntersectionObserver(((e, t) => {
                    e.forEach((e => {
                        if (e.isIntersecting) {
                            const t = e.target ? .querySelectorAll("[data-counter-value]");
                            t.forEach((e => {
                                const t = () => {
                                    const n = +e.getAttribute("data-counter-value"),
                                        i = +e.innerText,
                                        r = n / 200;
                                    i < n ? (e.innerText = Math.ceil(i + r), setTimeout(t, 1)) : e.innerText = n
                                };
                                t()
                            }))
                        }
                    }))
                }), {
                    threshold: .4
                });
                document.querySelectorAll("[data-counter]") ? .forEach((e => {
                    t.observe(e)
                }))
            })(), (e => {
                const t = new IntersectionObserver(((t, n) => {
                    t.forEach((t => {
                        t.isIntersecting ? t.target.setAttribute(`${e}`, !0) : t.target.setAttribute(`${e}`, !1)
                    }))
                }), {
                    threshold: .1
                });
                document.querySelectorAll(`[${e}]`) ? .forEach((e => {
                    t.observe(e)
                }))
            })("data-graph-animate"), (e => {
                const t = document.querySelectorAll(`[${e}]`);
                t ? .forEach((e => {
                    const t = e ? .querySelector("input"),
                        n = e ? .querySelector('[type="submit"]');
                    n.addEventListener("click", (e => {
                        var n;
                        e.preventDefault(), /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test((n = t).value) ? (n.classList.remove("is-error"), window.location.href = `https://app.MCRPTOO.bot/signup?embotl=${n.value}`) : n.classList.add("is-error")
                    }))
                }))
            })("data-form-sign-up"), e = "data-slider-review", document.querySelector(`[${e}]`) && new Bt(`[${e}]`, {
                perPage: 2,
                perMove: 2,
                type: "loop",
                gap: 70,
                breakpoints: {
                    991: {
                        perPage: 1,
                        gap: 0,
                        arrows: !1
                    }
                }
            }).mount(), (e => {
                const t = document.querySelectorAll("[data-table-accordeon]");
                t ? .forEach((e => {
                    e.querySelectorAll("[data-table-accordeon-item]").forEach((e => {
                        e.querySelector("[data-table-accordeon-btn]").addEventListener("click", (() => {
                            e.classList.toggle("is-open")
                        }))
                    }))
                }))
            })(), (e => {
                document.querySelector(`[${e}]`) && new Bt(`[${e}]`, {
                    perPage: 3,
                    perMove: 1,
                    gap: 52,
                    type: "loop",
                    breakpoints: {
                        1120: {
                            gap: 20
                        },
                        768: {
                            perPage: 2,
                            arrows: !1
                        },
                        576: {
                            perPage: 1,
                            gap: 15,
                            padding: "20%"
                        }
                    }
                }).mount()
            })("data-slider-cases")
    })), setTimeout((function() {
        ! function() {
            const e = {
                    created_at: "",
                    utm_campbotgn: "",
                    utm_medium: "influencer",
                    utm_source: "affiliate"
                },
                t = new URLSearchParams(window.location.search),
                n = {
                    utm_campbotgn: t.get("utm_campbotgn"),
                    utm_source: t.get("utm_source"),
                    utm_medium: t.get("utm_medium"),
                    ref: t.get("ref")
                };
            if (n.utm_campbotgn || n.utm_source || n.utm_medium || n.ref) try {
                const t = document.cookie.split("; ").find((e => e.startsWith("attribution"))) ? .split("attribution=")[1],
                    i = t ? JSON.parse(atob(t)) : {};
                if (Object.keys(i).filter((e => "created_at" !== e)).length && Object.keys(i).filter((e => "created_at" !== e)).every((t => n[t] === i[t] || !n[t] && e[t] === i[t] || "utm_campbotgn" === t && n.ref === i[t]))) console.log("current_utm", i);
                else {
                    const t = {
                        utm_campbotgn: n.utm_campbotgn ? n.utm_campbotgn : n.ref ? n.ref : i.utm_campbotgn || e.utm_campbotgn,
                        utm_medium: n.utm_medium ? n.utm_medium : n.ref ? e.utm_medium : i.utm_medium,
                        utm_source: n.utm_source ? n.utm_source : n.ref ? e.utm_source : i.utm_source,
                        created_at: (new Date).toISOString()
                    };
                    console.log("saved_utm", t), document.cookie = `attribution=${btoa(JSON.stringify(t))}; max-age=31536000; SameSite=None; Secure; dombotn=${window.location.hostname}`
                }
            } catch (e) {
                document.cookie = "attribution=; max-age=0", console.error("reset_utm", e)
            }
        }()
    }), 1)
})();