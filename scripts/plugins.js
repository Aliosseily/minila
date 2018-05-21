function hexToRgb(t) {
    var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    t = t.replace(e, function (t, e, n, i) {
        return e + e + n + n + i + i
    });
    var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return n ? {
        r: parseInt(n[1], 16)
        , g: parseInt(n[2], 16)
        , b: parseInt(n[3], 16)
    } : null
}

function clamp(t, e, n) {
    return Math.min(Math.max(t, e), n)
}

function isInArray(t, e) {
    return e.indexOf(t) > -1
}
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), + function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap")
            , e = {
                WebkitTransition: "webkitTransitionEnd"
                , MozTransition: "transitionend"
                , OTransition: "oTransitionEnd otransitionend"
                , transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function (e) {
        var n = !1
            , i = this;
        t(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var a = function () {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(a, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end
            , delegateType: t.support.transition.end
            , handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this)
                , a = n.data("bs.alert");
            a || n.data("bs.alert", a = new i(this)), "string" == typeof e && a[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]'
        , i = function (e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var a = t(this)
            , o = a.attr("data-target");
        o || (o = a.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(o);
        e && e.preventDefault(), s.length || (s = a.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var a = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = a, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this)
                , a = i.data("bs.button")
                , o = "object" == typeof e && e;
            a || i.data("bs.button", a = new n(this, o)), "toggle" == e ? a.toggle() : e && a.setState(e)
        })
    }
    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.6", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function (e) {
        var n = "disabled"
            , i = this.$element
            , a = i.is("input") ? "val" : "html"
            , o = i.data();
        e += "Text", null == o.resetText && i.data("resetText", i[a]()), setTimeout(t.proxy(function () {
            i[a](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var t = !0
            , e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        }
        else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), t(n.target).is('input[type="radio"]') || t(n.target).is('input[type="checkbox"]') || n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this)
                , a = i.data("bs.carousel")
                , o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e)
                , s = "string" == typeof e ? e : o.slide;
            a || i.data("bs.carousel", a = new n(this, o)), "number" == typeof e ? a.to(e) : s ? a[s]() : o.interval && a.pause().cycle()
        })
    }
    var n = function (e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3
        , pause: "hover"
        , wrap: !0
        , keyboard: !0
    }, n.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e)
            , i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap) return e;
        var a = "prev" == t ? -1 : 1
            , o = (n + a) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function (t) {
        var e = this
            , n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function (e, i) {
        var a = this.$element.find(".item.active")
            , o = i || this.getItemForDirection(e, a)
            , s = this.interval
            , r = "next" == e ? "left" : "right"
            , l = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var c = o[0]
            , d = t.Event("slide.bs.carousel", {
                relatedTarget: c
                , direction: r
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = t(this.$indicators.children()[this.getItemIndex(o)]);
                u && u.addClass("active")
            }
            var h = t.Event("slid.bs.carousel", {
                relatedTarget: c
                , direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, a.addClass(r), o.addClass(r), a.one("bsTransitionEnd", function () {
                o.removeClass([e, r].join(" ")).addClass("active"), a.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(h)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (a.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(h)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = i, this
    };
    var a = function (n) {
        var i, a = t(this)
            , o = t(a.attr("data-target") || (i = a.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var s = t.extend({}, o.data(), a.data())
                , r = a.attr("data-slide-to");
            r && (s.interval = !1), e.call(o, s), r && o.data("bs.carousel").to(r), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", a).on("click.bs.carousel.data-api", "[data-slide-to]", a), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function () {
            var n = t(this)
                , a = n.data("bs.collapse")
                , o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !a && o.toggle && /show|hide/.test(e) && (o.toggle = !1), a || n.data("bs.collapse", a = new i(this, o)), "string" == typeof e && a[e]()
        })
    }
    var i = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, a = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(a && a.length && (e = a.data("bs.collapse"), e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    a && a.length && (n.call(a, "hide"), e || a.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return r.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var a = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : a.call(this)
            }
        }
    }, i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, i) {
            var a = t(i);
            this.addAriaAndCollapsedClass(e(a), a)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var a = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = a, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
        var a = t(this);
        a.attr("data-target") || i.preventDefault();
        var o = e(a)
            , s = o.data("bs.collapse")
            , r = s ? "toggle" : a.data();
        n.call(o, r)
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(a).remove(), t(o).each(function () {
            var i = t(this)
                , a = e(i)
                , o = {
                    relatedTarget: this
                };
            a.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(a[0], n.target) || (a.trigger(n = t.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), a.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
        }))
    }

    function i(e) {
        return this.each(function () {
            var n = t(this)
                , i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var a = ".dropdown-backdrop"
        , o = '[data-toggle="dropdown"]'
        , s = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.6", s.prototype.toggle = function (i) {
        var a = t(this);
        if (!a.is(".disabled, :disabled")) {
            var o = e(a)
                , s = o.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var r = {
                    relatedTarget: this
                };
                if (o.trigger(i = t.Event("show.bs.dropdown", r)), i.isDefaultPrevented()) return;
                a.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
            }
            return !1
        }
    }, s.prototype.keydown = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var a = e(i)
                    , s = a.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && a.find(o).trigger("focus"), i.trigger("click");
                var r = " li:not(.disabled):visible a"
                    , l = a.find(".dropdown-menu" + r);
                if (l.length) {
                    var c = l.index(n.target);
                    38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), + function (t) {
    "use strict";

    function e(e, i) {
        return this.each(function () {
            var a = t(this)
                , o = a.data("bs.modal")
                , s = t.extend({}, n.DEFAULTS, a.data(), "object" == typeof e && e);
            o || a.data("bs.modal", o = new n(this, s)), "string" == typeof e ? o[e](i) : s.show && o.show(i)
        })
    }
    var n = function (e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0
        , keyboard: !0
        , show: !0
    }, n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function (e) {
        var i = this
            , a = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(a), this.isShown || a.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            i.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var a = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), a && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            a ? i.$dialog.one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (e) {
        var i = this
            , a = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && a;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + a).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        }
        else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function () {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        }
        else e && e()
    }, n.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : ""
            , paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: ""
            , paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var i = t(this)
            , a = i.attr("href")
            , o = t(i.attr("data-target") || a && a.replace(/.*(?=#[^\s]+$)/, ""))
            , s = o.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(a) && a
            }, o.data(), i.data());
        i.is("a") && n.preventDefault(), o.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(o, s, this)
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this)
                , a = i.data("bs.tooltip")
                , o = "object" == typeof e && e;
            !a && /destroy|hide/.test(e) || (a || i.data("bs.tooltip", a = new n(this, o)), "string" == typeof e && a[e]())
        })
    }
    var n = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0
        , placement: "top"
        , selector: !1
        , template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
        , trigger: "hover focus"
        , title: ""
        , delay: 0
        , html: !1
        , container: !1
        , viewport: {
            selector: "body"
            , padding: 0
        }
    }, n.prototype.init = function (e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1
                , hover: !1
                , focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var a = this.options.trigger.split(" "), o = a.length; o--;) {
            var s = a[o];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var r = "hover" == s ? "mouseenter" : "focusin"
                    , l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual"
            , selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay
            , hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function () {
        var e = {}
            , n = this.getDefaults();
        return this._options && t.each(this._options, function (t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function () {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, n.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var a = this
                , o = this.tip()
                , s = this.getUID(this.type);
            this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement
                , l = /\s?auto?\s?/i
                , c = l.test(r);
            c && (r = r.replace(l, "") || "top"), o.detach().css({
                top: 0
                , left: 0
                , display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition()
                , u = o[0].offsetWidth
                , h = o[0].offsetHeight;
            if (c) {
                var p = r
                    , f = this.getPosition(this.$viewport);
                r = "bottom" == r && d.bottom + h > f.bottom ? "top" : "top" == r && d.top - h < f.top ? "bottom" : "right" == r && d.right + u > f.width ? "left" : "left" == r && d.left - u < f.left ? "right" : r, o.removeClass(p).addClass(r)
            }
            var v = this.getCalculatedOffset(r, d, u, h);
            this.applyPlacement(v, r);
            var m = function () {
                var t = a.hoverState;
                a.$element.trigger("shown.bs." + a.type), a.hoverState = null, "out" == t && a.leave(a)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
        }
    }, n.prototype.applyPlacement = function (e, n) {
        var i = this.tip()
            , a = i[0].offsetWidth
            , o = i[0].offsetHeight
            , s = parseInt(i.css("margin-top"), 10)
            , r = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(r) && (r = 0), e.top += s, e.left += r, t.offset.setOffset(i[0], t.extend({
            using: function (t) {
                i.css({
                    top: Math.round(t.top)
                    , left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth
            , c = i[0].offsetHeight;
        "top" == n && c != o && (e.top = e.top + o - c);
        var d = this.getViewportAdjustedDelta(n, e, l, c);
        d.left ? e.left += d.left : e.top += d.top;
        var u = /top|bottom/.test(n)
            , h = u ? 2 * d.left - a + l : 2 * d.top - o + c
            , p = u ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(h, i[0][p], u)
    }, n.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
        var t = this.tip()
            , e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function (e) {
        function i() {
            "in" != a.hoverState && o.detach(), a.$element.removeAttr("aria-describedby").trigger("hidden.bs." + a.type), e && e()
        }
        var a = this
            , o = t(this.$tip)
            , s = t.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0]
            , i = "BODY" == n.tagName
            , a = n.getBoundingClientRect();
        null == a.width && (a = t.extend({}, a, {
            width: a.right - a.left
            , height: a.bottom - a.top
        }));
        var o = i ? {
                top: 0
                , left: 0
            } : e.offset()
            , s = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            }
            , r = i ? {
                width: t(window).width()
                , height: t(window).height()
            } : null;
        return t.extend({}, a, s, r, o)
    }, n.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height
            , left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i
            , left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2
            , left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2
            , left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var a = {
            top: 0
            , left: 0
        };
        if (!this.$viewport) return a;
        var o = this.options.viewport && this.options.viewport.padding || 0
            , s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - o - s.scroll
                , l = e.top + o - s.scroll + i;
            r < s.top ? a.top = s.top - r : l > s.top + s.height && (a.top = s.top + s.height - l)
        }
        else {
            var c = e.left - o
                , d = e.left + o + n;
            c < s.left ? a.left = s.left - c : d > s.right && (a.left = s.left + s.width - d)
        }
        return a
    }, n.prototype.getTitle = function () {
        var t, e = this.$element
            , n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this)
                , a = i.data("bs.popover")
                , o = "object" == typeof e && e;
            !a && /destroy|hide/.test(e) || (a || i.data("bs.popover", a = new n(this, o)), "string" == typeof e && a[e]())
        })
    }
    var n = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.6", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right"
        , trigger: "click"
        , content: ""
        , template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var t = this.tip()
            , e = this.getTitle()
            , n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var t = this.$element
            , e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(jQuery), + function (t) {
    "use strict";

    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var i = t(this)
                , a = i.data("bs.scrollspy")
                , o = "object" == typeof n && n;
            a || i.data("bs.scrollspy", a = new e(this, o)), "string" == typeof n && a[n]()
        })
    }
    e.VERSION = "3.3.6", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this
            , n = "offset"
            , i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this)
                , a = e.data("target") || e.attr("href")
                , o = /^#./.test(a) && t(a);
            return o && o.length && o.is(":visible") && [[o[n]().top + i, a]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset
            , n = this.getScrollHeight()
            , i = this.options.offset + n - this.$scrollElement.height()
            , a = this.offsets
            , o = this.targets
            , s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return s != (t = o[o.length - 1]) && this.activate(t);
        if (s && e < a[0]) return this.activeTarget = null, this.clear();
        for (t = a.length; t--;) s != o[t] && e >= a[t] && (void 0 === a[t + 1] || e < a[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]'
            , i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this)
                , a = i.data("bs.tab");
            a || i.data("bs.tab", a = new n(this)), "string" == typeof e && a[e]()
        })
    }
    var n = function (e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var e = this.element
            , n = e.closest("ul:not(.dropdown-menu)")
            , i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var a = n.find(".active:last a")
                , o = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                })
                , s = t.Event("show.bs.tab", {
                    relatedTarget: a[0]
                });
            if (a.trigger(o), e.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var r = t(i);
                this.activate(e.closest("li"), n), this.activate(r, r.parent(), function () {
                    a.trigger({
                        type: "hidden.bs.tab"
                        , relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab"
                        , relatedTarget: a[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function (e, i, a) {
        function o() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), a && a()
        }
        var s = i.find("> .active")
            , r = a && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && r ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
        return t.fn.tab = i, this
    };
    var a = function (n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', a).on("click.bs.tab.data-api", '[data-toggle="pill"]', a)
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this)
                , a = i.data("bs.affix")
                , o = "object" == typeof e && e;
            a || i.data("bs.affix", a = new n(this, o)), "string" == typeof e && a[e]()
        })
    }
    var n = function (e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.6", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0
        , target: window
    }, n.prototype.getState = function (t, e, n, i) {
        var a = this.$target.scrollTop()
            , o = this.$element.offset()
            , s = this.$target.height();
        if (null != n && "top" == this.affixed) return n > a ? "top" : !1;
        if ("bottom" == this.affixed) return null != n ? a + this.unpin <= o.top ? !1 : "bottom" : t - i >= a + s ? !1 : "bottom";
        var r = null == this.affixed
            , l = r ? a : o.top
            , c = r ? s : e;
        return null != n && n >= a ? "top" : null != i && l + c >= t - i ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop()
            , e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height()
                , i = this.options.offset
                , a = i.top
                , o = i.bottom
                , s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (o = a = i), "function" == typeof a && (a = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
            var r = this.getState(s, e, a, o);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : "")
                    , c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: s - e - o
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
        return t.fn.affix = i, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var n = t(this)
                , i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery), String.prototype.rightChars = function (t) {
        return 0 >= t ? "" : t > this.length ? this : this.substring(this.length, this.length - t)
    }
    , function (t) {
        var e, n, i, a, o, s, r, l, c, d, u, h, p = {
            highlightSpeed: 20
            , typeSpeed: 100
            , clearDelay: 500
            , typeDelay: 200
            , clearOnHighlight: !0
            , typerDataAttr: "data-typer-targets"
            , typerInterval: 2e3
        };
        a = function (e, n) {
            return "rgba(0, 0, 0, 0)" === e && (e = "rgb(255, 255, 255)"), t("<span></span>").css("color", "#323232").css("background-color", n)
        }, l = function (t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }, r = function (t) {
            t.removeData(["typePosition", "highlightPosition", "leftStop", "rightStop", "primaryColor", "backgroundColor", "text", "typing"])
        }, i = function (t) {
            var e = t.data("text")
                , n = t.data("oldLeft")
                , a = t.data("oldRight");
            return e && 0 !== e.length ? (t.text(n + e.charAt(0) + a).data({
                oldLeft: n + e.charAt(0)
                , text: e.substring(1)
            }), void setTimeout(function () {
                i(t)
            }, u())) : void r(t)
        }, n = function (t) {
            t.find("span").remove(), setTimeout(function () {
                i(t)
            }, s())
        }, e = function (t) {
            var i, s, r, c = t.data("highlightPosition");
            return l(c) || (c = t.data("rightStop") + 1), c <= t.data("leftStop") ? void setTimeout(function () {
                n(t)
            }, o()) : (i = t.text().substring(0, c - 1), s = t.text().substring(c - 1, t.data("rightStop") + 1), r = t.text().substring(t.data("rightStop") + 1), t.html(i).append(a(t.data("backgroundColor"), t.data("primaryColor")).append(s)).append(r), t.data("highlightPosition", c - 1), void setTimeout(function () {
                return e(t)
            }, d()))
        }, c = function (e) {
            var n;
            if (!e.data("typing")) {
                try {
                    n = JSON.parse(e.attr(t.typer.options.typerDataAttr)).targets
                }
                catch (i) {}
                "undefined" == typeof n && (n = t.map(e.attr(t.typer.options.typerDataAttr).split(","), function (e) {
                    return t.trim(e)
                })), e.typeTo(n[Math.floor(Math.random() * n.length)])
            }
        }, t.typer = function () {
            return {
                options: p
            }
        }(), t.extend(t.typer, {
            options: p
        }), t.fn.typer = function () {
            var e = t(this);
            return e.each(function () {
                var e = t(this);
                "undefined" != typeof e.attr(t.typer.options.typerDataAttr) && (c(e), setInterval(function () {
                    c(e)
                }, h()))
            })
        }, t.fn.typeTo = function (n) {
            var i = t(this)
                , a = i.text()
                , o = 0
                , s = 0;
            if (a === n) return console.log("Our strings our equal, nothing to type"), i;
            if (a !== i.html()) return console.error("Typer does not work on elements with child elements."), i;
            for (i.data("typing", !0); a.charAt(o) === n.charAt(o);) o++;
            for (; a.rightChars(s) === n.rightChars(s);) s++;
            return n = n.substring(o, n.length - s + 1), i.data({
                oldLeft: a.substring(0, o)
                , oldRight: a.rightChars(s - 1)
                , leftStop: o
                , rightStop: a.length - s
                , primaryColor: i.css("color")
                , backgroundColor: i.css("background-color")
                , text: n
            }), e(i), i
        }, d = function () {
            return t.typer.options.highlightSpeed
        }, u = function () {
            return t.typer.options.typeSpeed
        }, o = function () {
            return t.typer.options.clearDelay
        }, s = function () {
            return t.typer.options.typeDelay
        }, h = function () {
            return t.typer.options.typerInterval
        }
    }(jQuery), ! function (t) {
        "use strict";

        function e(e, n) {
            this.element = t(e), this.settings = t.extend({}, i, n), this._defaults = i, this._init()
        }
        var n = "Morphext"
            , i = {
                animation: "bounceIn"
                , separator: ","
                , speed: 2e3
                , complete: t.noop
            };
        e.prototype = {
            _init: function () {
                var e = this;
                this.phrases = [], this.element.addClass("morphext"), t.each(this.element.text().split(this.settings.separator), function (n, i) {
                    e.phrases.push(t.trim(i))
                }), this.index = -1, this.animate(), this.start()
            }
            , animate: function () {
                this.index = ++this.index % this.phrases.length, this.element[0].innerHTML = '<span class="animated ' + this.settings.animation + '">' + this.phrases[this.index] + "</span>", t.isFunction(this.settings.complete) && this.settings.complete.call(this)
            }
            , start: function () {
                var t = this;
                this._interval = setInterval(function () {
                    t.animate()
                }, this.settings.speed)
            }
            , stop: function () {
                this._interval = clearInterval(this._interval)
            }
        }, t.fn[n] = function (i) {
            return this.each(function () {
                t.data(this, "plugin_" + n) || t.data(this, "plugin_" + n, new e(this, i))
            })
        }
    }(jQuery);
var pJS = function (t, e) {
    var n = document.querySelector("#" + t + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: n
            , w: n.offsetWidth
            , h: n.offsetHeight
        }
        , particles: {
            number: {
                value: 400
                , density: {
                    enable: !0
                    , value_area: 800
                }
            }
            , color: {
                value: "#fff"
            }
            , shape: {
                type: "circle"
                , stroke: {
                    width: 0
                    , color: "#ff0000"
                }
                , polygon: {
                    nb_sides: 5
                }
                , image: {
                    src: ""
                    , width: 100
                    , height: 100
                }
            }
            , opacity: {
                value: 1
                , random: !1
                , anim: {
                    enable: !1
                    , speed: 2
                    , opacity_min: 0
                    , sync: !1
                }
            }
            , size: {
                value: 20
                , random: !1
                , anim: {
                    enable: !1
                    , speed: 20
                    , size_min: 0
                    , sync: !1
                }
            }
            , line_linked: {
                enable: !0
                , distance: 100
                , color: "#fff"
                , opacity: 1
                , width: 1
            }
            , move: {
                enable: !0
                , speed: 2
                , direction: "none"
                , random: !1
                , straight: !1
                , out_mode: "out"
                , bounce: !1
                , attract: {
                    enable: !1
                    , rotateX: 3e3
                    , rotateY: 3e3
                }
            }
            , array: []
        }
        , interactivity: {
            detect_on: "canvas"
            , events: {
                onhover: {
                    enable: !0
                    , mode: "grab"
                }
                , onclick: {
                    enable: !0
                    , mode: "push"
                }
                , resize: !0
            }
            , modes: {
                grab: {
                    distance: 100
                    , line_linked: {
                        opacity: 1
                    }
                }
                , bubble: {
                    distance: 200
                    , size: 80
                    , duration: .4
                }
                , repulse: {
                    distance: 200
                    , duration: .4
                }
                , push: {
                    particles_nb: 4
                }
                , remove: {
                    particles_nb: 2
                }
            }
            , mouse: {}
        }
        , retina_detect: !1
        , fn: {
            interact: {}
            , modes: {}
            , vendors: {}
        }
        , tmp: {}
    };
    var i = this.pJS;
    e && Object.deepExtend(i, e), i.tmp.obj = {
        size_value: i.particles.size.value
        , size_anim_speed: i.particles.size.anim.speed
        , move_speed: i.particles.move.speed
        , line_linked_distance: i.particles.line_linked.distance
        , line_linked_width: i.particles.line_linked.width
        , mode_grab_distance: i.interactivity.modes.grab.distance
        , mode_bubble_distance: i.interactivity.modes.bubble.distance
        , mode_bubble_size: i.interactivity.modes.bubble.size
        , mode_repulse_distance: i.interactivity.modes.repulse.distance
    }, i.fn.retinaInit = function () {
        i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio
    }, i.fn.canvasInit = function () {
        i.canvas.ctx = i.canvas.el.getContext("2d")
    }, i.fn.canvasSize = function () {
        i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function () {
            i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles()
        })
    }, i.fn.canvasPaint = function () {
        i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h)
    }, i.fn.canvasClear = function () {
        i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h)
    }, i.fn.particle = function (t, e, n) {
        if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = n ? n.x : Math.random() * i.canvas.w, this.y = n ? n.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, n), this.color = {}, "object" == typeof t.value)
            if (t.value instanceof Array) {
                var a = t.value[Math.floor(Math.random() * i.particles.color.value.length)];
                this.color.rgb = hexToRgb(a)
            }
            else void 0 != t.value.r && void 0 != t.value.g && void 0 != t.value.b && (this.color.rgb = {
                r: t.value.r
                , g: t.value.g
                , b: t.value.b
            }), void 0 != t.value.h && void 0 != t.value.s && void 0 != t.value.l && (this.color.hsl = {
                h: t.value.h
                , s: t.value.s
                , l: t.value.l
            });
        else "random" == t.value ? this.color.rgb = {
            r: Math.floor(256 * Math.random()) + 0
            , g: Math.floor(256 * Math.random()) + 0
            , b: Math.floor(256 * Math.random()) + 0
        } : "string" == typeof t.value && (this.color = t, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var o = {};
        switch (i.particles.move.direction) {
        case "top":
            o = {
                x: 0
                , y: -1
            };
            break;
        case "top-right":
            o = {
                x: .5
                , y: -.5
            };
            break;
        case "right":
            o = {
                x: 1
                , y: -0
            };
            break;
        case "bottom-right":
            o = {
                x: .5
                , y: .5
            };
            break;
        case "bottom":
            o = {
                x: 0
                , y: 1
            };
            break;
        case "bottom-left":
            o = {
                x: -.5
                , y: 1
            };
            break;
        case "left":
            o = {
                x: -1
                , y: 0
            };
            break;
        case "top-left":
            o = {
                x: -.5
                , y: -.5
            };
            break;
        default:
            o = {
                x: 0
                , y: 0
            }
        }
        i.particles.move.straight ? (this.vx = o.x, this.vy = o.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = o.x + Math.random() - .5, this.vy = o.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
        var s = i.particles.shape.type;
        if ("object" == typeof s) {
            if (s instanceof Array) {
                var r = s[Math.floor(Math.random() * s.length)];
                this.shape = r
            }
        }
        else this.shape = s;
        if ("image" == this.shape) {
            var l = i.particles.shape;
            this.img = {
                src: l.image.src
                , ratio: l.image.width / l.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1))
        }
    }, i.fn.particle.prototype.draw = function () {
        function t() {
            i.canvas.ctx.drawImage(s, e.x - n, e.y - n, 2 * n, 2 * n / e.img.ratio)
        }
        var e = this;
        if (void 0 != e.radius_bubble) var n = e.radius_bubble;
        else var n = e.radius;
        if (void 0 != e.opacity_bubble) var a = e.opacity_bubble;
        else var a = e.opacity;
        if (e.color.rgb) var o = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + a + ")";
        else var o = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + a + ")";
        switch (i.canvas.ctx.fillStyle = o, i.canvas.ctx.beginPath(), e.shape) {
        case "circle":
            i.canvas.ctx.arc(e.x, e.y, n, 0, 2 * Math.PI, !1);
            break;
        case "edge":
            i.canvas.ctx.rect(e.x - n, e.y - n, 2 * n, 2 * n);
            break;
        case "triangle":
            i.fn.vendors.drawShape(i.canvas.ctx, e.x - n, e.y + n / 1.66, 2 * n, 3, 2);
            break;
        case "polygon":
            i.fn.vendors.drawShape(i.canvas.ctx, e.x - n / (i.particles.shape.polygon.nb_sides / 3.5), e.y - n / .76, 2.66 * n / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
            break;
        case "star":
            i.fn.vendors.drawShape(i.canvas.ctx, e.x - 2 * n / (i.particles.shape.polygon.nb_sides / 4), e.y - n / 1.52, 2 * n * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
            break;
        case "image":
            if ("svg" == i.tmp.img_type) var s = e.img.obj;
            else var s = i.tmp.img_obj;
            s && t()
        }
        i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill()
    }, i.fn.particlesCreate = function () {
        for (var t = 0; t < i.particles.number.value; t++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value))
    }, i.fn.particlesUpdate = function () {
        for (var t = 0; t < i.particles.array.length; t++) {
            var e = i.particles.array[t];
            if (i.particles.move.enable) {
                var n = i.particles.move.speed / 2;
                e.x += e.vx * n, e.y += e.vy * n
            }
            if (i.particles.opacity.anim.enable && (1 == e.opacity_status ? (e.opacity >= i.particles.opacity.value && (e.opacity_status = !1), e.opacity += e.vo) : (e.opacity <= i.particles.opacity.anim.opacity_min && (e.opacity_status = !0), e.opacity -= e.vo), e.opacity < 0 && (e.opacity = 0)), i.particles.size.anim.enable && (1 == e.size_status ? (e.radius >= i.particles.size.value && (e.size_status = !1), e.radius += e.vs) : (e.radius <= i.particles.size.anim.size_min && (e.size_status = !0), e.radius -= e.vs), e.radius < 0 && (e.radius = 0)), "bounce" == i.particles.move.out_mode) var a = {
                x_left: e.radius
                , x_right: i.canvas.w
                , y_top: e.radius
                , y_bottom: i.canvas.h
            };
            else var a = {
                x_left: -e.radius
                , x_right: i.canvas.w + e.radius
                , y_top: -e.radius
                , y_bottom: i.canvas.h + e.radius
            };
            switch (e.x - e.radius > i.canvas.w ? (e.x = a.x_left, e.y = Math.random() * i.canvas.h) : e.x + e.radius < 0 && (e.x = a.x_right, e.y = Math.random() * i.canvas.h), e.y - e.radius > i.canvas.h ? (e.y = a.y_top, e.x = Math.random() * i.canvas.w) : e.y + e.radius < 0 && (e.y = a.y_bottom, e.x = Math.random() * i.canvas.w), i.particles.move.out_mode) {
            case "bounce":
                e.x + e.radius > i.canvas.w ? e.vx = -e.vx : e.x - e.radius < 0 && (e.vx = -e.vx), e.y + e.radius > i.canvas.h ? e.vy = -e.vy : e.y - e.radius < 0 && (e.vy = -e.vy)
            }
            if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(e), (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(e), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(e), i.particles.line_linked.enable || i.particles.move.attract.enable)
                for (var o = t + 1; o < i.particles.array.length; o++) {
                    var s = i.particles.array[o];
                    i.particles.line_linked.enable && i.fn.interact.linkParticles(e, s), i.particles.move.attract.enable && i.fn.interact.attractParticles(e, s), i.particles.move.bounce && i.fn.interact.bounceParticles(e, s)
                }
        }
    }, i.fn.particlesDraw = function () {
        i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate();
        for (var t = 0; t < i.particles.array.length; t++) {
            var e = i.particles.array[t];
            e.draw()
        }
    }, i.fn.particlesEmpty = function () {
        i.particles.array = []
    }, i.fn.particlesRefresh = function () {
        cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), i.tmp.source_svg = void 0, i.tmp.img_obj = void 0, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start()
    }, i.fn.interact.linkParticles = function (t, e) {
        var n = t.x - e.x
            , a = t.y - e.y
            , o = Math.sqrt(n * n + a * a);
        if (o <= i.particles.line_linked.distance) {
            var s = i.particles.line_linked.opacity - o / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;
            if (s > 0) {
                var r = i.particles.line_linked.color_rgb_line;
                i.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + s + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(t.x, t.y), i.canvas.ctx.lineTo(e.x, e.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath()
            }
        }
    }, i.fn.interact.attractParticles = function (t, e) {
        var n = t.x - e.x
            , a = t.y - e.y
            , o = Math.sqrt(n * n + a * a);
        if (o <= i.particles.line_linked.distance) {
            var s = n / (1e3 * i.particles.move.attract.rotateX)
                , r = a / (1e3 * i.particles.move.attract.rotateY);
            t.vx -= s, t.vy -= r, e.vx += s, e.vy += r
        }
    }, i.fn.interact.bounceParticles = function (t, e) {
        var n = t.x - e.x
            , i = t.y - e.y
            , a = Math.sqrt(n * n + i * i)
            , o = t.radius + e.radius;
        o >= a && (t.vx = -t.vx, t.vy = -t.vy, e.vx = -e.vx, e.vy = -e.vy)
    }, i.fn.modes.pushParticles = function (t, e) {
        i.tmp.pushing = !0;
        for (var n = 0; t > n; n++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, {
            x: e ? e.pos_x : Math.random() * i.canvas.w
            , y: e ? e.pos_y : Math.random() * i.canvas.h
        })), n == t - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1)
    }, i.fn.modes.removeParticles = function (t) {
        i.particles.array.splice(0, t), i.particles.move.enable || i.fn.particlesDraw()
    }, i.fn.modes.bubbleParticle = function (t) {
        function e() {
            t.opacity_bubble = t.opacity, t.radius_bubble = t.radius
        }

        function n(e, n, a, o, r) {
            if (e != n)
                if (i.tmp.bubble_duration_end) {
                    if (void 0 != a) {
                        var l = o - u * (o - e) / i.interactivity.modes.bubble.duration
                            , c = e - l;
                        h = e + c, "size" == r && (t.radius_bubble = h), "opacity" == r && (t.opacity_bubble = h)
                    }
                }
                else if (s <= i.interactivity.modes.bubble.distance) {
                if (void 0 != a) var d = a;
                else var d = o;
                if (d != e) {
                    var h = o - u * (o - e) / i.interactivity.modes.bubble.duration;
                    "size" == r && (t.radius_bubble = h), "opacity" == r && (t.opacity_bubble = h)
                }
            }
            else "size" == r && (t.radius_bubble = void 0), "opacity" == r && (t.opacity_bubble = void 0)
        }
        if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
            var a = t.x - i.interactivity.mouse.pos_x
                , o = t.y - i.interactivity.mouse.pos_y
                , s = Math.sqrt(a * a + o * o)
                , r = 1 - s / i.interactivity.modes.bubble.distance;
            if (s <= i.interactivity.modes.bubble.distance) {
                if (r >= 0 && "mousemove" == i.interactivity.status) {
                    if (i.interactivity.modes.bubble.size != i.particles.size.value)
                        if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                            var l = t.radius + i.interactivity.modes.bubble.size * r;
                            l >= 0 && (t.radius_bubble = l)
                        }
                        else {
                            var c = t.radius - i.interactivity.modes.bubble.size
                                , l = t.radius - c * r;
                            l > 0 ? t.radius_bubble = l : t.radius_bubble = 0
                        }
                    if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value)
                        if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
                            var d = i.interactivity.modes.bubble.opacity * r;
                            d > t.opacity && d <= i.interactivity.modes.bubble.opacity && (t.opacity_bubble = d)
                        }
                        else {
                            var d = t.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * r;
                            d < t.opacity && d >= i.interactivity.modes.bubble.opacity && (t.opacity_bubble = d)
                        }
                }
            }
            else e();
            "mouseleave" == i.interactivity.status && e()
        }
        else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
            if (i.tmp.bubble_clicking) {
                var a = t.x - i.interactivity.mouse.click_pos_x
                    , o = t.y - i.interactivity.mouse.click_pos_y
                    , s = Math.sqrt(a * a + o * o)
                    , u = ((new Date).getTime() - i.interactivity.mouse.click_time) / 1e3;
                u > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), u > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1)
            }
            i.tmp.bubble_clicking && (n(i.interactivity.modes.bubble.size, i.particles.size.value, t.radius_bubble, t.radius, "size"), n(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, t.opacity_bubble, t.opacity, "opacity"))
        }
    }, i.fn.modes.repulseParticle = function (t) {
        function e() {
            var e = Math.atan2(h, u);
            if (t.vx = f * Math.cos(e), t.vy = f * Math.sin(e), "bounce" == i.particles.move.out_mode) {
                var n = {
                    x: t.x + t.vx
                    , y: t.y + t.vy
                };
                n.x + t.radius > i.canvas.w ? t.vx = -t.vx : n.x - t.radius < 0 && (t.vx = -t.vx), n.y + t.radius > i.canvas.h ? t.vy = -t.vy : n.y - t.radius < 0 && (t.vy = -t.vy)
            }
        }
        if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
            var n = t.x - i.interactivity.mouse.pos_x
                , a = t.y - i.interactivity.mouse.pos_y
                , o = Math.sqrt(n * n + a * a)
                , s = {
                    x: n / o
                    , y: a / o
                }
                , r = i.interactivity.modes.repulse.distance
                , l = 100
                , c = clamp(1 / r * (-1 * Math.pow(o / r, 2) + 1) * r * l, 0, 50)
                , d = {
                    x: t.x + s.x * c
                    , y: t.y + s.y * c
                };
            "bounce" == i.particles.move.out_mode ? (d.x - t.radius > 0 && d.x + t.radius < i.canvas.w && (t.x = d.x), d.y - t.radius > 0 && d.y + t.radius < i.canvas.h && (t.y = d.y)) : (t.x = d.x, t.y = d.y)
        }
        else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode))
            if (i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking) {
                var r = Math.pow(i.interactivity.modes.repulse.distance / 6, 3)
                    , u = i.interactivity.mouse.click_pos_x - t.x
                    , h = i.interactivity.mouse.click_pos_y - t.y
                    , p = u * u + h * h
                    , f = -r / p * 1;
                r >= p && e()
            }
            else 0 == i.tmp.repulse_clicking && (t.vx = t.vx_i, t.vy = t.vy_i)
    }, i.fn.modes.grabParticle = function (t) {
        if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
            var e = t.x - i.interactivity.mouse.pos_x
                , n = t.y - i.interactivity.mouse.pos_y
                , a = Math.sqrt(e * e + n * n);
            if (a <= i.interactivity.modes.grab.distance) {
                var o = i.interactivity.modes.grab.line_linked.opacity - a / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;
                if (o > 0) {
                    var s = i.particles.line_linked.color_rgb_line;
                    i.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s.b + "," + o + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(t.x, t.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath()
                }
            }
        }
    }, i.fn.vendors.eventsListeners = function () {
        "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function (t) {
            if (i.interactivity.el == window) var e = t.clientX
                , n = t.clientY;
            else var e = t.offsetX || t.clientX
                , n = t.offsetY || t.clientY;
            i.interactivity.mouse.pos_x = e, i.interactivity.mouse.pos_y = n, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = "mousemove"
        }), i.interactivity.el.addEventListener("mouseleave", function (t) {
            i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave"
        })), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function () {
            if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = (new Date).getTime(), i.interactivity.events.onclick.enable) switch (i.interactivity.events.onclick.mode) {
            case "push":
                i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
                break;
            case "remove":
                i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
                break;
            case "bubble":
                i.tmp.bubble_clicking = !0;
                break;
            case "repulse":
                i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function () {
                    i.tmp.repulse_clicking = !1
                }, 1e3 * i.interactivity.modes.repulse.duration)
            }
        })
    }, i.fn.vendors.densityAutoParticles = function () {
        if (i.particles.number.density.enable) {
            var t = i.canvas.el.width * i.canvas.el.height / 1e3;
            i.tmp.retina && (t /= 2 * i.canvas.pxratio);
            var e = t * i.particles.number.value / i.particles.number.density.value_area
                , n = i.particles.array.length - e;
            0 > n ? i.fn.modes.pushParticles(Math.abs(n)) : i.fn.modes.removeParticles(n)
        }
    }, i.fn.vendors.checkOverlap = function (t, e) {
        for (var n = 0; n < i.particles.array.length; n++) {
            var a = i.particles.array[n]
                , o = t.x - a.x
                , s = t.y - a.y
                , r = Math.sqrt(o * o + s * s);
            r <= t.radius + a.radius && (t.x = e ? e.x : Math.random() * i.canvas.w, t.y = e ? e.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(t))
        }
    }, i.fn.vendors.createSvgImg = function (t) {
        var e = i.tmp.source_svg
            , n = /#([0-9A-F]{3,6})/gi
            , a = e.replace(n, function (e, n, i, a) {
                if (t.color.rgb) var o = "rgba(" + t.color.rgb.r + "," + t.color.rgb.g + "," + t.color.rgb.b + "," + t.opacity + ")";
                else var o = "hsla(" + t.color.hsl.h + "," + t.color.hsl.s + "%," + t.color.hsl.l + "%," + t.opacity + ")";
                return o
            })
            , o = new Blob([a], {
                type: "image/svg+xml;charset=utf-8"
            })
            , s = window.URL || window.webkitURL || window
            , r = s.createObjectURL(o)
            , l = new Image;
        l.addEventListener("load", function () {
            t.img.obj = l, t.img.loaded = !0, s.revokeObjectURL(r), i.tmp.count_svg++
        }), l.src = r
    }, i.fn.vendors.destroypJS = function () {
        cancelAnimationFrame(i.fn.drawAnimFrame), n.remove(), pJSDom = null
    }, i.fn.vendors.drawShape = function (t, e, n, i, a, o) {
        var s = a * o
            , r = a / o
            , l = 180 * (r - 2) / r
            , c = Math.PI - Math.PI * l / 180;
        t.save(), t.beginPath(), t.translate(e, n), t.moveTo(0, 0);
        for (var d = 0; s > d; d++) t.lineTo(i, 0), t.translate(i, 0), t.rotate(c);
        t.fill(), t.restore()
    }, i.fn.vendors.exportImg = function () {
        window.open(i.canvas.el.toDataURL("image/png"), "_blank")
    }, i.fn.vendors.loadImg = function (t) {
        if (i.tmp.img_error = void 0, "" != i.particles.shape.image.src)
            if ("svg" == t) {
                var e = new XMLHttpRequest;
                e.open("GET", i.particles.shape.image.src), e.onreadystatechange = function (t) {
                    4 == e.readyState && (200 == e.status ? (i.tmp.source_svg = t.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0))
                }, e.send()
            }
            else {
                var n = new Image;
                n.addEventListener("load", function () {
                    i.tmp.img_obj = n, i.fn.vendors.checkBeforeDraw()
                }), n.src = i.particles.shape.image.src
            }
        else console.log("Error pJS - No image.src"), i.tmp.img_error = !0
    }, i.fn.vendors.draw = function () {
        "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame))
    }, i.fn.vendors.checkBeforeDraw = function () {
        "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw())) : (i.fn.vendors.init(), i.fn.vendors.draw())
    }, i.fn.vendors.init = function () {
        i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color)
    }, i.fn.vendors.start = function () {
        isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw()
    }, i.fn.vendors.eventsListeners(), i.fn.vendors.start()
};
Object.deepExtend = function (t, e) {
        for (var n in e) e[n] && e[n].constructor && e[n].constructor === Object ? (t[n] = t[n] || {}, arguments.callee(t[n], e[n])) : t[n] = e[n];
        return t
    }, window.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
            window.setTimeout(t, 1e3 / 60)
        }
    }(), window.cancelRequestAnimFrame = function () {
        return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
    }(), window.pJSDom = [], window.particlesJS = function (t, e) {
        "string" != typeof t && (e = t, t = "particles-js"), t || (t = "particles-js");
        var n = document.getElementById(t)
            , i = "particles-js-canvas-el"
            , a = n.getElementsByClassName(i);
        if (a.length)
            for (; a.length > 0;) n.removeChild(a[0]);
        var o = document.createElement("canvas");
        o.className = i, o.style.width = "100%", o.style.height = "100%";
        var s = document.getElementById(t).appendChild(o);
        null != s && pJSDom.push(new pJS(t, e))
    }, window.particlesJS.load = function (t, e, n) {
        var i = new XMLHttpRequest;
        i.open("GET", e), i.onreadystatechange = function (e) {
            if (4 == i.readyState)
                if (200 == i.status) {
                    var a = JSON.parse(e.currentTarget.response);
                    window.particlesJS(t, a), n && n()
                }
                else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found")
        }, i.send()
    }
    , function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function (t) {
        "use strict";

        function e(t) {
            if (t instanceof Date) return t;
            if (String(t).match(s)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), new Date(t);
            throw new Error("Couldn't cast `" + t + "` to a date object.")
        }

        function n(t) {
            var e = t.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
            return new RegExp(e)
        }

        function i(t) {
            return function (e) {
                var i = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                if (i)
                    for (var o = 0, s = i.length; s > o; ++o) {
                        var r = i[o].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/)
                            , c = n(r[0])
                            , d = r[1] || ""
                            , u = r[3] || ""
                            , h = null;
                        r = r[2], l.hasOwnProperty(r) && (h = l[r], h = Number(t[h])), null !== h && ("!" === d && (h = a(u, h)), "" === d && 10 > h && (h = "0" + h.toString()), e = e.replace(c, h.toString()))
                    }
                return e = e.replace(/%%/, "%")
            }
        }

        function a(t, e) {
            var n = "s"
                , i = "";
            return t && (t = t.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === t.length ? n = t[0] : (i = t[0], n = t[1])), 1 === Math.abs(e) ? i : n
        }
        var o = []
            , s = []
            , r = {
                precision: 100
                , elapse: !1
            };
        s.push(/^[0-9]*$/.source), s.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), s.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), s = new RegExp(s.join("|"));
        var l = {
                Y: "years"
                , m: "months"
                , n: "daysToMonth"
                , w: "weeks"
                , d: "daysToWeek"
                , D: "totalDays"
                , H: "hours"
                , M: "minutes"
                , S: "seconds"
            }
            , c = function (e, n, i) {
                this.el = e, this.$el = t(e), this.interval = null, this.offset = {}, this.options = t.extend({}, r), this.instanceNumber = o.length, o.push(this), this.$el.data("countdown-instance", this.instanceNumber), i && ("function" == typeof i ? (this.$el.on("update.countdown", i), this.$el.on("stoped.countdown", i), this.$el.on("finish.countdown", i)) : this.options = t.extend({}, r, i)), this.setFinalDate(n), this.start()
            };
        t.extend(c.prototype, {
            start: function () {
                null !== this.interval && clearInterval(this.interval);
                var t = this;
                this.update(), this.interval = setInterval(function () {
                    t.update.call(t)
                }, this.options.precision)
            }
            , stop: function () {
                clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
            }
            , toggle: function () {
                this.interval ? this.stop() : this.start()
            }
            , pause: function () {
                this.stop()
            }
            , resume: function () {
                this.start()
            }
            , remove: function () {
                this.stop.call(this), o[this.instanceNumber] = null, delete this.$el.data().countdownInstance
            }
            , setFinalDate: function (t) {
                this.finalDate = e(t)
            }
            , update: function () {
                if (0 === this.$el.closest("html").length) return void this.remove();
                var e, n = void 0 !== t._data(this.el, "events")
                    , i = new Date;
                e = this.finalDate.getTime() - i.getTime(), e = Math.ceil(e / 1e3), e = !this.options.elapse && 0 > e ? 0 : Math.abs(e), this.totalSecsLeft !== e && n && (this.totalSecsLeft = e, this.elapsed = i >= this.finalDate, this.offset = {
                    seconds: this.totalSecsLeft % 60
                    , minutes: Math.floor(this.totalSecsLeft / 60) % 60
                    , hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24
                    , days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7
                    , daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7
                    , daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368)
                    , totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24)
                    , weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7)
                    , months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368)
                    , years: Math.abs(this.finalDate.getFullYear() - i.getFullYear())
                }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
            }
            , dispatchEvent: function (e) {
                var n = t.Event(e + ".countdown");
                n.finalDate = this.finalDate, n.elapsed = this.elapsed, n.offset = t.extend({}, this.offset), n.strftime = i(this.offset), this.$el.trigger(n)
            }
        }), t.fn.countdown = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return this.each(function () {
                var n = t(this).data("countdown-instance");
                if (void 0 !== n) {
                    var i = o[n]
                        , a = e[0];
                    c.prototype.hasOwnProperty(a) ? i[a].apply(i, e.slice(1)) : null === String(a).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (i.setFinalDate.call(i, a), i.start()) : t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, a))
                }
                else new c(this, e[0], e[1])
            })
        }
    }), jQuery.effects || function (t, e) {
        var n = t.uiBackCompat !== !1
            , i = "ui-effects-";
        t.effects = {
                effect: {}
            }
            , function (e, n) {
                function i(t, e, n) {
                    var i = h[e.type] || {};
                    return null == t ? n || !e.def ? null : e.def : (t = i.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : i.mod ? (t + i.mod) % i.mod : 0 > t ? 0 : t > i.max ? i.max : t)
                }

                function a(t) {
                    var i = d()
                        , a = i._rgba = [];
                    return t = t.toLowerCase(), v(c, function (e, o) {
                        var s, r = o.re.exec(t)
                            , l = r && o.parse(r)
                            , c = o.space || "rgba";
                        return l ? (s = i[c](l), i[u[c].cache] = s[u[c].cache], a = i._rgba = s._rgba, !1) : n
                    }), a.length ? ("0,0,0,0" === a.join() && e.extend(a, s.transparent), i) : s[t]
                }

                function o(t, e, n) {
                    return n = (n + 1) % 1, 1 > 6 * n ? t + 6 * (e - t) * n : 1 > 2 * n ? e : 2 > 3 * n ? t + 6 * (e - t) * (2 / 3 - n) : t
                }
                var s, r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" ")
                    , l = /^([\-+])=\s*(\d+\.?\d*)/
                    , c = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/
                        , parse: function (t) {
                            return [t[1], t[2], t[3], t[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/
                        , parse: function (t) {
                            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/
                        , parse: function (t) {
                            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/
                        , parse: function (t) {
                            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/
                        , space: "hsla"
                        , parse: function (t) {
                            return [t[1], t[2] / 100, t[3] / 100, t[4]]
                        }
                    }]
                    , d = e.Color = function (t, n, i, a) {
                        return new e.Color.fn.parse(t, n, i, a)
                    }
                    , u = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0
                                    , type: "byte"
                                }
                                , green: {
                                    idx: 1
                                    , type: "byte"
                                }
                                , blue: {
                                    idx: 2
                                    , type: "byte"
                                }
                            }
                        }
                        , hsla: {
                            props: {
                                hue: {
                                    idx: 0
                                    , type: "degrees"
                                }
                                , saturation: {
                                    idx: 1
                                    , type: "percent"
                                }
                                , lightness: {
                                    idx: 2
                                    , type: "percent"
                                }
                            }
                        }
                    }
                    , h = {
                        "byte": {
                            floor: !0
                            , max: 255
                        }
                        , percent: {
                            max: 1
                        }
                        , degrees: {
                            mod: 360
                            , floor: !0
                        }
                    }
                    , p = d.support = {}
                    , f = e("<p>")[0]
                    , v = e.each;
                f.style.cssText = "background-color:rgba(1,1,1,.5)", p.rgba = f.style.backgroundColor.indexOf("rgba") > -1, v(u, function (t, e) {
                    e.cache = "_" + t, e.props.alpha = {
                        idx: 3
                        , type: "percent"
                        , def: 1
                    }
                }), d.fn = e.extend(d.prototype, {
                    parse: function (o, r, l, c) {
                        if (o === n) return this._rgba = [null, null, null, null], this;
                        (o.jquery || o.nodeType) && (o = e(o).css(r), r = n);
                        var h = this
                            , p = e.type(o)
                            , f = this._rgba = [];
                        return r !== n && (o = [o, r, l, c], p = "array"), "string" === p ? this.parse(a(o) || s._default) : "array" === p ? (v(u.rgba.props, function (t, e) {
                            f[e.idx] = i(o[e.idx], e)
                        }), this) : "object" === p ? (o instanceof d ? v(u, function (t, e) {
                            o[e.cache] && (h[e.cache] = o[e.cache].slice())
                        }) : v(u, function (e, n) {
                            var a = n.cache;
                            v(n.props, function (t, e) {
                                if (!h[a] && n.to) {
                                    if ("alpha" === t || null == o[t]) return;
                                    h[a] = n.to(h._rgba)
                                }
                                h[a][e.idx] = i(o[t], e, !0)
                            }), h[a] && 0 > t.inArray(null, h[a].slice(0, 3)) && (h[a][3] = 1, n.from && (h._rgba = n.from(h[a])))
                        }), this) : n
                    }
                    , is: function (t) {
                        var e = d(t)
                            , i = !0
                            , a = this;
                        return v(u, function (t, o) {
                            var s, r = e[o.cache];
                            return r && (s = a[o.cache] || o.to && o.to(a._rgba) || [], v(o.props, function (t, e) {
                                return null != r[e.idx] ? i = r[e.idx] === s[e.idx] : n
                            })), i
                        }), i
                    }
                    , _space: function () {
                        var t = []
                            , e = this;
                        return v(u, function (n, i) {
                            e[i.cache] && t.push(n)
                        }), t.pop()
                    }
                    , transition: function (t, e) {
                        var n = d(t)
                            , a = n._space()
                            , o = u[a]
                            , s = 0 === this.alpha() ? d("transparent") : this
                            , r = s[o.cache] || o.to(s._rgba)
                            , l = r.slice();
                        return n = n[o.cache], v(o.props, function (t, a) {
                            var o = a.idx
                                , s = r[o]
                                , c = n[o]
                                , d = h[a.type] || {};
                            null !== c && (null === s ? l[o] = c : (d.mod && (c - s > d.mod / 2 ? s += d.mod : s - c > d.mod / 2 && (s -= d.mod)), l[o] = i((c - s) * e + s, a)))
                        }), this[a](l)
                    }
                    , blend: function (t) {
                        if (1 === this._rgba[3]) return this;
                        var n = this._rgba.slice()
                            , i = n.pop()
                            , a = d(t)._rgba;
                        return d(e.map(n, function (t, e) {
                            return (1 - i) * a[e] + i * t
                        }))
                    }
                    , toRgbaString: function () {
                        var t = "rgba("
                            , n = e.map(this._rgba, function (t, e) {
                                return null == t ? e > 2 ? 1 : 0 : t
                            });
                        return 1 === n[3] && (n.pop(), t = "rgb("), t + n.join() + ")"
                    }
                    , toHslaString: function () {
                        var t = "hsla("
                            , n = e.map(this.hsla(), function (t, e) {
                                return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                            });
                        return 1 === n[3] && (n.pop(), t = "hsl("), t + n.join() + ")"
                    }
                    , toHexString: function (t) {
                        var n = this._rgba.slice()
                            , i = n.pop();
                        return t && n.push(~~(255 * i)), "#" + e.map(n, function (t) {
                            return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                        }).join("")
                    }
                    , toString: function () {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), d.fn.parse.prototype = d.fn, u.hsla.to = function (t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e, n, i = t[0] / 255
                        , a = t[1] / 255
                        , o = t[2] / 255
                        , s = t[3]
                        , r = Math.max(i, a, o)
                        , l = Math.min(i, a, o)
                        , c = r - l
                        , d = r + l
                        , u = .5 * d;
                    return e = l === r ? 0 : i === r ? 60 * (a - o) / c + 360 : a === r ? 60 * (o - i) / c + 120 : 60 * (i - a) / c + 240, n = 0 === u || 1 === u ? u : .5 >= u ? c / d : c / (2 - d), [Math.round(e) % 360, n, u, null == s ? 1 : s]
                }, u.hsla.from = function (t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e = t[0] / 360
                        , n = t[1]
                        , i = t[2]
                        , a = t[3]
                        , s = .5 >= i ? i * (1 + n) : i + n - i * n
                        , r = 2 * i - s;
                    return [Math.round(255 * o(r, s, e + 1 / 3)), Math.round(255 * o(r, s, e)), Math.round(255 * o(r, s, e - 1 / 3)), a]
                }, v(u, function (t, a) {
                    var o = a.props
                        , s = a.cache
                        , r = a.to
                        , c = a.from;
                    d.fn[t] = function (t) {
                        if (r && !this[s] && (this[s] = r(this._rgba)), t === n) return this[s].slice();
                        var a, l = e.type(t)
                            , u = "array" === l || "object" === l ? t : arguments
                            , h = this[s].slice();
                        return v(o, function (t, e) {
                            var n = u["object" === l ? t : e.idx];
                            null == n && (n = h[e.idx]), h[e.idx] = i(n, e)
                        }), c ? (a = d(c(h)), a[s] = h, a) : d(h)
                    }, v(o, function (n, i) {
                        d.fn[n] || (d.fn[n] = function (a) {
                            var o, s = e.type(a)
                                , r = "alpha" === n ? this._hsla ? "hsla" : "rgba" : t
                                , c = this[r]()
                                , d = c[i.idx];
                            return "undefined" === s ? d : ("function" === s && (a = a.call(this, d), s = e.type(a)), null == a && i.empty ? this : ("string" === s && (o = l.exec(a), o && (a = d + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), c[i.idx] = a, this[r](c)))
                        })
                    })
                }), v(r, function (t, n) {
                    e.cssHooks[n] = {
                        set: function (t, i) {
                            var o, s, r = "";
                            if ("string" !== e.type(i) || (o = a(i))) {
                                if (i = d(o || i), !p.rgba && 1 !== i._rgba[3]) {
                                    for (s = "backgroundColor" === n ? t.parentNode : t;
                                        ("" === r || "transparent" === r) && s && s.style;) try {
                                        r = e.css(s, "backgroundColor"), s = s.parentNode
                                    }
                                    catch (l) {}
                                    i = i.blend(r && "transparent" !== r ? r : "_default")
                                }
                                i = i.toRgbaString()
                            }
                            try {
                                t.style[n] = i
                            }
                            catch (c) {}
                        }
                    }, e.fx.step[n] = function (t) {
                        t.colorInit || (t.start = d(t.elem, n), t.end = d(t.end), t.colorInit = !0), e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
                    }
                }), e.cssHooks.borderColor = {
                    expand: function (t) {
                        var e = {};
                        return v(["Top", "Right", "Bottom", "Left"], function (n, i) {
                            e["border" + i + "Color"] = t
                        }), e
                    }
                }, s = e.Color.names = {
                    aqua: "#00ffff"
                    , black: "#000000"
                    , blue: "#0000ff"
                    , fuchsia: "#ff00ff"
                    , gray: "#808080"
                    , green: "#008000"
                    , lime: "#00ff00"
                    , maroon: "#800000"
                    , navy: "#000080"
                    , olive: "#808000"
                    , purple: "#800080"
                    , red: "#ff0000"
                    , silver: "#c0c0c0"
                    , teal: "#008080"
                    , white: "#ffffff"
                    , yellow: "#ffff00"
                    , transparent: [null, null, null, 0]
                    , _default: "#ffffff"
                }
            }(jQuery)
            , function () {
                function n() {
                    var e, n, i = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle
                        , a = {};
                    if (i && i.length && i[0] && i[i[0]])
                        for (n = i.length; n--;) e = i[n], "string" == typeof i[e] && (a[t.camelCase(e)] = i[e]);
                    else
                        for (e in i) "string" == typeof i[e] && (a[e] = i[e]);
                    return a
                }

                function i(e, n) {
                    var i, a, s = {};
                    for (i in n) a = n[i], e[i] !== a && (o[i] || (t.fx.step[i] || !isNaN(parseFloat(a))) && (s[i] = a));
                    return s
                }
                var a = ["add", "remove", "toggle"]
                    , o = {
                        border: 1
                        , borderBottom: 1
                        , borderColor: 1
                        , borderLeft: 1
                        , borderRight: 1
                        , borderTop: 1
                        , borderWidth: 1
                        , margin: 1
                        , padding: 1
                    };
                t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, n) {
                    t.fx.step[n] = function (t) {
                        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, n, t.end), t.setAttr = !0)
                    }
                }), t.effects.animateClass = function (e, o, s, r) {
                    var l = t.speed(o, s, r);
                    return this.queue(function () {
                        var o, s = t(this)
                            , r = s.attr("class") || ""
                            , c = l.children ? s.find("*").andSelf() : s;
                        c = c.map(function () {
                            var e = t(this);
                            return {
                                el: e
                                , start: n.call(this)
                            }
                        }), o = function () {
                            t.each(a, function (t, n) {
                                e[n] && s[n + "Class"](e[n])
                            })
                        }, o(), c = c.map(function () {
                            return this.end = n.call(this.el[0]), this.diff = i(this.start, this.end), this
                        }), s.attr("class", r), c = c.map(function () {
                            var e = this
                                , n = t.Deferred()
                                , i = jQuery.extend({}, l, {
                                    queue: !1
                                    , complete: function () {
                                        n.resolve(e)
                                    }
                                });
                            return this.el.animate(this.diff, i), n.promise()
                        }), t.when.apply(t, c.get()).done(function () {
                            o(), t.each(arguments, function () {
                                var e = this.el;
                                t.each(this.diff, function (t) {
                                    e.css(t, "")
                                })
                            }), l.complete.call(s[0])
                        })
                    })
                }, t.fn.extend({
                    _addClass: t.fn.addClass
                    , addClass: function (e, n, i, a) {
                        return n ? t.effects.animateClass.call(this, {
                            add: e
                        }, n, i, a) : this._addClass(e)
                    }
                    , _removeClass: t.fn.removeClass
                    , removeClass: function (e, n, i, a) {
                        return n ? t.effects.animateClass.call(this, {
                            remove: e
                        }, n, i, a) : this._removeClass(e)
                    }
                    , _toggleClass: t.fn.toggleClass
                    , toggleClass: function (n, i, a, o, s) {
                        return "boolean" == typeof i || i === e ? a ? t.effects.animateClass.call(this, i ? {
                            add: n
                        } : {
                            remove: n
                        }, a, o, s) : this._toggleClass(n, i) : t.effects.animateClass.call(this, {
                            toggle: n
                        }, i, a, o)
                    }
                    , switchClass: function (e, n, i, a, o) {
                        return t.effects.animateClass.call(this, {
                            add: n
                            , remove: e
                        }, i, a, o)
                    }
                })
            }()
            , function () {
                function a(e, n, i, a) {
                    return t.isPlainObject(e) && (n = e, e = e.effect), e = {
                        effect: e
                    }, null == n && (n = {}), t.isFunction(n) && (a = n, i = null, n = {}), ("number" == typeof n || t.fx.speeds[n]) && (a = i, i = n, n = {}), t.isFunction(i) && (a = i, i = null), n && t.extend(e, n), i = i || n.duration, e.duration = t.fx.off ? 0 : "number" == typeof i ? i : i in t.fx.speeds ? t.fx.speeds[i] : t.fx.speeds._default, e.complete = a || n.complete, e
                }

                function o(e) {
                    return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? !1 : !n || !t.effects[e]
                }
                t.extend(t.effects, {
                    version: "1.9.2"
                    , save: function (t, e) {
                        for (var n = 0; e.length > n; n++) null !== e[n] && t.data(i + e[n], t[0].style[e[n]])
                    }
                    , restore: function (t, n) {
                        var a, o;
                        for (o = 0; n.length > o; o++) null !== n[o] && (a = t.data(i + n[o]), a === e && (a = ""), t.css(n[o], a))
                    }
                    , setMode: function (t, e) {
                        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                    }
                    , getBaseline: function (t, e) {
                        var n, i;
                        switch (t[0]) {
                        case "top":
                            n = 0;
                            break;
                        case "middle":
                            n = .5;
                            break;
                        case "bottom":
                            n = 1;
                            break;
                        default:
                            n = t[0] / e.height
                        }
                        switch (t[1]) {
                        case "left":
                            i = 0;
                            break;
                        case "center":
                            i = .5;
                            break;
                        case "right":
                            i = 1;
                            break;
                        default:
                            i = t[1] / e.width
                        }
                        return {
                            x: i
                            , y: n
                        }
                    }
                    , createWrapper: function (e) {
                        if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                        var n = {
                                width: e.outerWidth(!0)
                                , height: e.outerHeight(!0)
                                , "float": e.css("float")
                            }
                            , i = t("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%"
                                , background: "transparent"
                                , border: "none"
                                , margin: 0
                                , padding: 0
                            })
                            , a = {
                                width: e.width()
                                , height: e.height()
                            }
                            , o = document.activeElement;
                        try {
                            o.id
                        }
                        catch (s) {
                            o = document.body
                        }
                        return e.wrap(i), (e[0] === o || t.contains(e[0], o)) && t(o).focus(), i = e.parent(), "static" === e.css("position") ? (i.css({
                            position: "relative"
                        }), e.css({
                            position: "relative"
                        })) : (t.extend(n, {
                            position: e.css("position")
                            , zIndex: e.css("z-index")
                        }), t.each(["top", "left", "bottom", "right"], function (t, i) {
                            n[i] = e.css(i), isNaN(parseInt(n[i], 10)) && (n[i] = "auto")
                        }), e.css({
                            position: "relative"
                            , top: 0
                            , left: 0
                            , right: "auto"
                            , bottom: "auto"
                        })), e.css(a), i.css(n).show()
                    }
                    , removeWrapper: function (e) {
                        var n = document.activeElement;
                        return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === n || t.contains(e[0], n)) && t(n).focus()), e
                    }
                    , setTransition: function (e, n, i, a) {
                        return a = a || {}, t.each(n, function (t, n) {
                            var o = e.cssUnit(n);
                            o[0] > 0 && (a[n] = o[0] * i + o[1])
                        }), a
                    }
                }), t.fn.extend({
                    effect: function () {
                        function e(e) {
                            function n() {
                                t.isFunction(o) && o.call(a[0]), t.isFunction(e) && e()
                            }
                            var a = t(this)
                                , o = i.complete
                                , s = i.mode;
                            (a.is(":hidden") ? "hide" === s : "show" === s) ? n(): r.call(a[0], i, n)
                        }
                        var i = a.apply(this, arguments)
                            , o = i.mode
                            , s = i.queue
                            , r = t.effects.effect[i.effect]
                            , l = !r && n && t.effects[i.effect];
                        return t.fx.off || !r && !l ? o ? this[o](i.duration, i.complete) : this.each(function () {
                            i.complete && i.complete.call(this)
                        }) : r ? s === !1 ? this.each(e) : this.queue(s || "fx", e) : l.call(this, {
                            options: i
                            , duration: i.duration
                            , callback: i.complete
                            , mode: i.mode
                        })
                    }
                    , _show: t.fn.show
                    , show: function (t) {
                        if (o(t)) return this._show.apply(this, arguments);
                        var e = a.apply(this, arguments);
                        return e.mode = "show", this.effect.call(this, e)
                    }
                    , _hide: t.fn.hide
                    , hide: function (t) {
                        if (o(t)) return this._hide.apply(this, arguments);
                        var e = a.apply(this, arguments);
                        return e.mode = "hide", this.effect.call(this, e)
                    }
                    , __toggle: t.fn.toggle
                    , toggle: function (e) {
                        if (o(e) || "boolean" == typeof e || t.isFunction(e)) return this.__toggle.apply(this, arguments);
                        var n = a.apply(this, arguments);
                        return n.mode = "toggle", this.effect.call(this, n)
                    }
                    , cssUnit: function (e) {
                        var n = this.css(e)
                            , i = [];
                        return t.each(["em", "px", "%", "pt"], function (t, e) {
                            n.indexOf(e) > 0 && (i = [parseFloat(n), e])
                        }), i
                    }
                })
            }()
            , function () {
                var e = {};
                t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, n) {
                    e[n] = function (e) {
                        return Math.pow(e, t + 2)
                    }
                }), t.extend(e, {
                    Sine: function (t) {
                        return 1 - Math.cos(t * Math.PI / 2)
                    }
                    , Circ: function (t) {
                        return 1 - Math.sqrt(1 - t * t)
                    }
                    , Elastic: function (t) {
                        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                    }
                    , Back: function (t) {
                        return t * t * (3 * t - 2)
                    }
                    , Bounce: function (t) {
                        for (var e, n = 4;
                            ((e = Math.pow(2, --n)) - 1) / 11 > t;);
                        return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                    }
                }), t.each(e, function (e, n) {
                    t.easing["easeIn" + e] = n, t.easing["easeOut" + e] = function (t) {
                        return 1 - n(1 - t)
                    }, t.easing["easeInOut" + e] = function (t) {
                        return .5 > t ? n(2 * t) / 2 : 1 - n(-2 * t + 2) / 2
                    }
                })
            }()
    }(jQuery)
    , ! function (t, e) {
        "use strict";

        function n() {
            if (void 0 === arguments[0]) return t.console.error("sweetAlert expects at least 1 attribute!"), !1;
            var n = C({}, l);
            switch (typeof arguments[0]) {
            case "string":
                n.title = arguments[0], n.text = arguments[1] || "", n.type = arguments[2] || "";
                break;
            case "object":
                n.title = arguments[0].title || l.title, n.text = arguments[0].text || l.text, n.html = arguments[0].html || l.html, n.type = arguments[0].type || l.type, n.animation = void 0 !== arguments[0].animation ? arguments[0].animation : l.animation, n.customClass = arguments[0].customClass || n.customClass, n.allowOutsideClick = void 0 !== arguments[0].allowOutsideClick ? arguments[0].allowOutsideClick : l.allowOutsideClick, n.allowEscapeKey = void 0 !== arguments[0].allowEscapeKey ? arguments[0].allowEscapeKey : l.allowEscapeKey, n.showConfirmButton = void 0 !== arguments[0].showConfirmButton ? arguments[0].showConfirmButton : l.showConfirmButton, n.showCancelButton = void 0 !== arguments[0].showCancelButton ? arguments[0].showCancelButton : l.showCancelButton, n.closeOnConfirm = void 0 !== arguments[0].closeOnConfirm ? arguments[0].closeOnConfirm : l.closeOnConfirm, n.closeOnCancel = void 0 !== arguments[0].closeOnCancel ? arguments[0].closeOnCancel : l.closeOnCancel, n.timer = parseInt(arguments[0].timer, 10) || l.timer, n.width = parseInt(arguments[0].width, 10) || l.width, n.padding = parseInt(arguments[0].padding, 10) || l.padding, n.background = void 0 !== arguments[0].background ? arguments[0].background : l.background, n.confirmButtonText = arguments[0].confirmButtonText || l.confirmButtonText, n.confirmButtonColor = arguments[0].confirmButtonColor || l.confirmButtonColor, n.confirmButtonClass = arguments[0].confirmButtonClass || n.confirmButtonClass, n.cancelButtonText = arguments[0].cancelButtonText || l.cancelButtonText, n.cancelButtonColor = arguments[0].cancelButtonColor || l.cancelButtonColor, n.cancelButtonClass = arguments[0].cancelButtonClass || n.cancelButtonClass, n.buttonsStyling = void 0 !== arguments[0].buttonsStyling ? arguments[0].buttonsStyling : l.buttonsStyling, n.reverseButtons = void 0 !== arguments[0].reverseButtons ? arguments[0].reverseButtons : l.reverseButtons, n.showCloseButton = void 0 !== arguments[0].showCloseButton ? arguments[0].showCloseButton : l.showCloseButton, n.imageUrl = arguments[0].imageUrl || l.imageUrl, n.imageWidth = arguments[0].imageWidth || l.imageWidth, n.imageHeight = arguments[0].imageHeight || l.imageHeight, n.imageClass = arguments[0].imageClass || l.imageClass;
                break;
            default:
                return t.console.error('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]), !1
            }
            E(n), A(), $();
            var i = c();
            return new Promise(function (r) {
                function l(t, e) {
                    for (var n = 0; n < b.length; n++)
                        if (t += e, t === b.length ? t = 0 : -1 === t && (t = b.length - 1), b[t].offsetWidth || b[t].offsetHeight || b[t].getClientRects().length) return void b[t].focus()
                }

                function c(e) {
                    var i = e || t.event
                        , a = i.keyCode || i.which;
                    if (-1 !== [9, 13, 32, 27].indexOf(a)) {
                        for (var o = i.target || i.srcElement, s = -1, c = 0; c < b.length; c++)
                            if (o === b[c]) {
                                s = c;
                                break
                            }
                        9 === a ? (i.shiftKey ? l(s, -1) : l(s, 1), k(i)) : 13 === a || 32 === a ? -1 === s && S(g, i) : 27 === a && n.allowEscapeKey === !0 && (t.swal.closeModal(), r(void 0))
                    }
                }
                n.timer && (i.timeout = setTimeout(function () {
                    t.swal.closeModal(), r(void 0)
                }, n.timer));
                var f, v = function (e) {
                        var a = e || t.event
                            , o = a.target || a.srcElement
                            , s = u(o, t.swalClasses.confirm)
                            , l = u(o, t.swalClasses.cancel)
                            , c = u(i, "visible");
                        switch (a.type) {
                        case "mouseover":
                        case "mouseup":
                        case "focus":
                            n.buttonsStyling && (s ? o.style.backgroundColor = _(n.confirmButtonColor, -.1) : l && (o.style.backgroundColor = _(n.cancelButtonColor, -.1)));
                            break;
                        case "mouseout":
                        case "blur":
                            n.buttonsStyling && (s ? o.style.backgroundColor = n.confirmButtonColor : l && (o.style.backgroundColor = n.cancelButtonColor));
                            break;
                        case "mousedown":
                            n.buttonsStyling && (s ? o.style.backgroundColor = _(n.confirmButtonColor, -.2) : l && (o.style.backgroundColor = _(n.cancelButtonColor, -.2)));
                            break;
                        case "click":
                            s && c ? (n.closeOnConfirm && t.swal.closeModal(), r(!0)) : l && c ? (n.closeOnCancel && t.swal.closeModal(), r(!1)) : t.swal.closeModal()
                        }
                    }
                    , m = i.querySelectorAll("button");
                for (f = 0; f < m.length; f++) m[f].onclick = v, m[f].onmouseover = v, m[f].onmouseout = v, m[f].onmousedown = v;
                a = e.onclick, e.onclick = function (e) {
                    var i = e || t.event
                        , a = i.target || i.srcElement;
                    (u(a, t.swalClasses.close) || a === d() && n.allowOutsideClick) && (t.swal.closeModal(), r(void 0))
                };
                var g = i.querySelector("button." + t.swalClasses.confirm)
                    , y = i.querySelector("button." + t.swalClasses.cancel)
                    , b = i.querySelectorAll("button, input:not([type=hidden]), textarea, select");
                for (f = 0; f < b.length; f++) b[f].onfocus = v, b[f].onblur = v;
                n.reverseButtons && g.parentNode.insertBefore(y, g), l(-1, 1), o = t.onkeydown, t.onkeydown = c, n.buttonsStyling && (g.style.borderLeftColor = n.confirmButtonColor, g.style.borderRightColor = n.confirmButtonColor), t.swal.enableLoading = function () {
                    h(g, "loading"), h(i, "loading"), y.disabled = !0
                }, t.swal.disableLoading = function () {
                    p(g, "loading"), p(i, "loading"), y.disabled = !1
                }, t.swal.enableButtons = function () {
                    g.disabled = !1, y.disabled = !1
                }, t.swal.disableButtons = function () {
                    g.disabled = !0, y.disabled = !0
                }, t.swal.enableButtons(), t.swal.disableLoading(), t.onfocus = function () {
                    t.setTimeout(function () {
                        void 0 !== s && (s.focus(), s = void 0)
                    }, 0)
                }
            })
        }
        t.swalClasses = {
            container: "sweet-container"
            , modal: "sweet-alert"
            , overlay: "sweet-overlay"
            , close: "sweet-close"
            , content: "sweet-content"
            , spacer: "sweet-spacer"
            , confirm: "sweet-confirm"
            , cancel: "sweet-cancel"
            , icon: "sweet-icon"
            , image: "sweet-image"
            , iconTypes: {
                success: "sweet-success"
                , warning: "sweet-warning"
                , info: "sweet-info"
                , question: "sweet-question"
                , error: "sweet-error"
            }
        };
        var i, a, o, s, r = "sweet-alert-mediaquery"
            , l = {
                title: ""
                , text: ""
                , html: ""
                , type: null
                , animation: !0
                , allowOutsideClick: !0
                , allowEscapeKey: !0
                , showConfirmButton: !0
                , showCancelButton: !1
                , closeOnConfirm: !0
                , closeOnCancel: !0
                , confirmButtonText: "OK"
                , confirmButtonColor: "#3085d6"
                , confirmButtonClass: null
                , cancelButtonText: "Cancel"
                , cancelButtonColor: "#aaa"
                , cancelButtonClass: null
                , buttonsStyling: !0
                , reverseButtons: !1
                , showCloseButton: !1
                , imageUrl: null
                , imageWidth: null
                , imageHeight: null
                , imageClass: null
                , timer: null
                , width: 500
                , padding: 20
                , background: "#fff"
            }
            , c = function () {
                return e.querySelector("." + t.swalClasses.modal)
            }
            , d = function () {
                return e.querySelector("." + t.swalClasses.overlay)
            }
            , u = function (t, e) {
                return new RegExp(" " + e + " ").test(" " + t.className + " ")
            }
            , h = function (t, e) {
                e && !u(t, e) && (t.className += " " + e)
            }
            , p = function (t, e) {
                var n = " " + t.className.replace(/[\t\r\n]/g, " ") + " ";
                if (u(t, e)) {
                    for (; n.indexOf(" " + e + " ") >= 0;) n = n.replace(" " + e + " ", " ");
                    t.className = n.replace(/^\s+|\s+$/g, "")
                }
            }
            , f = function (t) {
                var n = e.createElement("div");
                return n.appendChild(e.createTextNode(t)), n.innerHTML
            }
            , v = function (t) {
                t.style.opacity = "", t.style.display = "block"
            }
            , m = function (t) {
                if (t && !t.length) return v(t);
                for (var e = 0; e < t.length; ++e) v(t[e])
            }
            , g = function (t) {
                t.style.opacity = "", t.style.display = "none"
            }
            , y = function (t) {
                if (t && !t.length) return g(t);
                for (var e = 0; e < t.length; ++e) g(t[e])
            }
            , b = function (t, e) {
                t.style.removeProperty ? t.style.removeProperty(e) : t.style.removeAttribute(e)
            }
            , w = function (t) {
                t.style.left = "-9999px", t.style.display = "block";
                var e = t.clientHeight
                    , n = parseInt(getComputedStyle(t).getPropertyValue("padding"), 10);
                return t.style.left = "", t.style.display = "none", "-" + parseInt(e / 2 + n, 10) + "px"
            }
            , x = function (t, e) {
                if (+t.style.opacity < 1) {
                    e = e || 16, t.style.opacity = 0, t.style.display = "block";
                    var n = +new Date
                        , i = function () {
                            t.style.opacity = +t.style.opacity + (new Date - n) / 100, n = +new Date, +t.style.opacity < 1 && setTimeout(i, e)
                        };
                    i()
                }
            }
            , C = function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                return t
            }
            , S = function (n) {
                if ("function" == typeof MouseEvent) {
                    var i = new MouseEvent("click", {
                        view: t
                        , bubbles: !1
                        , cancelable: !0
                    });
                    n.dispatchEvent(i)
                }
                else if (e.createEvent) {
                    var a = e.createEvent("MouseEvents");
                    a.initEvent("click", !1, !1), n.dispatchEvent(a)
                }
                else e.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
            }
            , k = function (e) {
                "function" == typeof e.stopPropagation ? (e.stopPropagation(), e.preventDefault()) : t.event && t.event.hasOwnProperty("cancelBubble") && (t.event.cancelBubble = !0)
            }
            , T = function () {
                var n = c();
                t.onkeydown = o, e.onclick = a, i && i.focus(), s = void 0, clearTimeout(n.timeout);
                var l = e.getElementsByTagName("head")[0]
                    , d = e.getElementById(r);
                d && l.removeChild(d)
            }
            , _ = function (t, e) {
                t = String(t).replace(/[^0-9a-f]/gi, ""), t.length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), e = e || 0;
                for (var n = "#", i = 0; 3 > i; i++) {
                    var a = parseInt(t.substr(2 * i, 2), 16);
                    a = Math.round(Math.min(Math.max(0, a + a * e), 255)).toString(16), n += ("00" + a).substr(a.length)
                }
                return n
            }
            , E = function (n) {
                var i = c();
                i.style.width = n.width + "px", i.style.padding = n.padding + "px", i.style.marginLeft = -n.width / 2 + "px", i.style.background = n.background;
                var a = e.getElementsByTagName("head")[0]
                    , o = e.createElement("style");
                o.type = "text/css", o.id = r, o.innerHTML = "@media screen and (max-width: " + n.width + "px) {." + t.swalClasses.modal + " {max-width: 100%;left: 0 !important;margin-left: 0 !important;}}", a.appendChild(o);
                var s = i.querySelector("h2")
                    , l = i.querySelector("." + t.swalClasses.content)
                    , d = i.querySelector("button." + t.swalClasses.confirm)
                    , u = i.querySelector("button." + t.swalClasses.cancel)
                    , v = i.querySelector("." + t.swalClasses.spacer)
                    , g = i.querySelector("." + t.swalClasses.close);
                if (s.innerHTML = f(n.title).split("\n").join("<br>"), n.text || n.html) {
                    if ("object" == typeof n.html)
                        if (l.innerHTML = "", 0 in n.html)
                            for (var w = 0; w in n.html; w++) l.appendChild(n.html[w]);
                        else l.appendChild(n.html);
                    else l.innerHTML = n.html || "<p>" + f(n.text.split("\n").join("<br>")) + "</p>";
                    m(l)
                }
                else y(l);
                if (n.showCloseButton ? m(g) : y(g), i.className = t.swalClasses.modal, n.customClass && h(i, n.customClass), y(i.querySelectorAll("." + t.swalClasses.icon)), n.type) {
                    var x = !1;
                    for (var C in t.swalClasses.iconTypes)
                        if (n.type === C) {
                            x = !0;
                            break
                        }
                    if (!x) return t.console.error("Unknown alert type: " + n.type), !1;
                    var S = i.querySelector("." + t.swalClasses.icon + "." + t.swalClasses.iconTypes[n.type]);
                    switch (m(S), n.type) {
                    case "success":
                        h(S, "animate"), h(S.querySelector(".tip"), "animate-success-tip"), h(S.querySelector(".long"), "animate-success-long");
                        break;
                    case "error":
                        h(S, "animate-error-icon"), h(S.querySelector(".x-mark"), "animate-x-mark");
                        break;
                    case "warning":
                        h(S, "pulse-warning")
                    }
                }
                var k = i.querySelector("." + t.swalClasses.image);
                n.imageUrl ? (k.setAttribute("src", n.imageUrl), m(k), n.imageWidth && k.setAttribute("width", n.imageWidth), n.imageHeight && k.setAttribute("height", n.imageHeight), n.imageClass && h(k, n.imageClass)) : y(k), n.showCancelButton ? u.style.display = "inline-block" : y(u), n.showConfirmButton ? b(d, "display") : y(d), n.showConfirmButton || n.showCancelButton ? m(v) : y(v), d.innerHTML = f(n.confirmButtonText), u.innerHTML = f(n.cancelButtonText), n.buttonsStyling && (d.style.backgroundColor = n.confirmButtonColor, u.style.backgroundColor = n.cancelButtonColor), d.className = t.swalClasses.confirm, h(d, n.confirmButtonClass), u.className = t.swalClasses.cancel, h(u, n.cancelButtonClass), n.buttonsStyling ? (h(d, "styled"), h(u, "styled")) : (p(d, "styled"), p(u, "styled"), d.style.backgroundColor = d.style.borderLeftColor = d.style.borderRightColor = "", u.style.backgroundColor = u.style.borderLeftColor = u.style.borderRightColor = ""), n.animation === !0 ? p(i, "no-animation") : h(i, "no-animation")
            }
            , $ = function () {
                var t = c();
                x(d(), 10), m(t), h(t, "show-sweet-alert"), p(t, "hide-sweet-alert"), i = e.activeElement, h(t, "visible")
            }
            , A = function () {
                var t = c();
                t.style.marginTop = w(c())
            };
        t.sweetAlert = t.swal = function () {
                var e = arguments
                    , i = c();
                return null === i && (t.swal.init(), i = c()), u(i, "visible") && T(), n.apply(this, e)
            }, t.sweetAlert.close = t.swal.close = t.sweetAlert.closeModal = t.swal.closeModal = function () {
                var e = c();
                g(d()), g(e), p(e, "showSweetAlert"), h(e, "hideSweetAlert"), p(e, "visible");
                var n = e.querySelector("." + t.swalClasses.icon + "." + t.swalClasses.iconTypes.success);
                p(n, "animate"), p(n.querySelector(".tip"), "animate-success-tip"), p(n.querySelector(".long"), "animate-success-long");
                var i = e.querySelector("." + t.swalClasses.icon + "." + t.swalClasses.iconTypes.error);
                p(i, "animate-error-icon"), p(i.querySelector(".x-mark"), "animate-x-mark");
                var a = e.querySelector("." + t.swalClasses.icon + "." + t.swalClasses.iconTypes.warning);
                p(a, "pulse-warning"), T()
            }, t.sweetAlert.clickConfirm = t.swal.clickConfirm = function () {
                var e = c()
                    , n = e.querySelector("button." + t.swalClasses.confirm);
                n.click()
            }, t.sweetAlert.clickCancel = t.swal.clickCancel = function () {
                var e = c()
                    , n = e.querySelector("button." + t.swalClasses.cancel);
                n.click()
            }, t.swal.init = function () {
                if (!e.getElementsByClassName(t.swalClasses.container).length) {
                    var n = '<div class="' + t.swalClasses.overlay + '" tabIndex="-1"></div><div class="' + t.swalClasses.modal + '" style="display: none" tabIndex="-1"><div class="' + t.swalClasses.icon + " " + t.swalClasses.iconTypes.error + '"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="' + t.swalClasses.icon + " " + t.swalClasses.iconTypes.question + '">?</div><div class="' + t.swalClasses.icon + " " + t.swalClasses.iconTypes.warning + '">!</div><div class="' + t.swalClasses.icon + " " + t.swalClasses.iconTypes.info + '">i</div><div class="' + t.swalClasses.icon + " " + t.swalClasses.iconTypes.success + '"><span class="line tip"></span> <span class="line long"></span><div class="placeholder"></div> <div class="fix"></div></div><img class="' + t.swalClasses.image + '"><h2>Title</h2><div class="' + t.swalClasses.content + '">Text</div><hr class="' + t.swalClasses.spacer + '"><button class="' + t.swalClasses.confirm + '">OK</button><button class="' + t.swalClasses.cancel + '">Cancel</button><span class="' + t.swalClasses.close + '">&times;</span></div>'
                        , i = e.createElement("div");
                    i.className = t.swalClasses.container, i.innerHTML = n, e.body.appendChild(i)
                }
            }, t.swal.setDefaults = function (t) {
                if (!t) throw new Error("userParams is required");
                if ("object" != typeof t) throw new Error("userParams has to be a object");
                C(l, t)
            }
            , function () {
                "complete" === e.readyState || "interactive" === e.readyState && e.body ? t.swal.init() : e.addEventListener ? e.addEventListener("DOMContentLoaded", function n() {
                    e.removeEventListener("DOMContentLoaded", n, !1), t.swal.init()
                }, !1) : e.attachEvent && e.attachEvent("onreadystatechange", function i() {
                    "complete" === e.readyState && (e.detachEvent("onreadystatechange", i), t.swal.init())
                })
            }()
    }(window, document)
    , function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("undefined" != typeof jQuery ? jQuery : window.Zepto)
    }(function (t) {
        "use strict";

        function e(e) {
            var n = e.data;
            e.isDefaultPrevented() || (e.preventDefault(), t(e.target).ajaxSubmit(n))
        }

        function n(e) {
            var n = e.target
                , i = t(n);
            if (!i.is("[type=submit],[type=image]")) {
                var a = i.closest("[type=submit]");
                if (0 === a.length) return;
                n = a[0]
            }
            var o = this;
            if (o.clk = n, "image" == n.type)
                if (void 0 !== e.offsetX) o.clk_x = e.offsetX, o.clk_y = e.offsetY;
                else if ("function" == typeof t.fn.offset) {
                var s = i.offset();
                o.clk_x = e.pageX - s.left, o.clk_y = e.pageY - s.top
            }
            else o.clk_x = e.pageX - n.offsetLeft, o.clk_y = e.pageY - n.offsetTop;
            setTimeout(function () {
                o.clk = o.clk_x = o.clk_y = null
            }, 100)
        }

        function i() {
            if (t.fn.ajaxSubmit.debug) {
                var e = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e)
            }
        }
        var a = {};
        a.fileapi = void 0 !== t("<input type='file'/>").get(0).files, a.formdata = void 0 !== window.FormData;
        var o = !!t.fn.prop;
        t.fn.attr2 = function () {
            if (!o) return this.attr.apply(this, arguments);
            var t = this.prop.apply(this, arguments);
            return t && t.jquery || "string" == typeof t ? t : this.attr.apply(this, arguments)
        }, t.fn.ajaxSubmit = function (e) {
            function n(n) {
                var i, a, o = t.param(n, e.traditional).split("&")
                    , s = o.length
                    , r = [];
                for (i = 0; s > i; i++) o[i] = o[i].replace(/\+/g, " "), a = o[i].split("="), r.push([decodeURIComponent(a[0]), decodeURIComponent(a[1])]);
                return r
            }

            function s(i) {
                for (var a = new FormData, o = 0; o < i.length; o++) a.append(i[o].name, i[o].value);
                if (e.extraData) {
                    var s = n(e.extraData);
                    for (o = 0; o < s.length; o++) s[o] && a.append(s[o][0], s[o][1])
                }
                e.data = null;
                var r = t.extend(!0, {}, t.ajaxSettings, e, {
                    contentType: !1
                    , processData: !1
                    , cache: !1
                    , type: l || "POST"
                });
                e.uploadProgress && (r.xhr = function () {
                    var n = t.ajaxSettings.xhr();
                    return n.upload && n.upload.addEventListener("progress", function (t) {
                        var n = 0
                            , i = t.loaded || t.position
                            , a = t.total;
                        t.lengthComputable && (n = Math.ceil(i / a * 100)), e.uploadProgress(t, i, a, n)
                    }, !1), n
                }), r.data = null;
                var c = r.beforeSend;
                return r.beforeSend = function (t, n) {
                    e.formData ? n.data = e.formData : n.data = a, c && c.call(this, t, n)
                }, t.ajax(r)
            }

            function r(n) {
                function a(t) {
                    var e = null;
                    try {
                        t.contentWindow && (e = t.contentWindow.document)
                    }
                    catch (n) {
                        i("cannot get iframe.contentWindow document: " + n)
                    }
                    if (e) return e;
                    try {
                        e = t.contentDocument ? t.contentDocument : t.document
                    }
                    catch (n) {
                        i("cannot get iframe.contentDocument: " + n), e = t.document
                    }
                    return e
                }

                function s() {
                    function e() {
                        try {
                            var t = a(g).readyState;
                            i("state = " + t), t && "uninitialized" == t.toLowerCase() && setTimeout(e, 50)
                        }
                        catch (n) {
                            i("Server abort: ", n, " (", n.name, ")"), r(_), C && clearTimeout(C), C = void 0
                        }
                    }
                    var n = u.attr2("target")
                        , o = u.attr2("action");
                    S.setAttribute("target", f), l && !/post/i.test(l) || S.setAttribute("method", "POST"), o != h.url && S.setAttribute("action", h.url), h.skipEncodingOverride || l && !/post/i.test(l) || u.attr({
                        encoding: "multipart/form-data"
                        , enctype: "multipart/form-data"
                    }), h.timeout && (C = setTimeout(function () {
                        x = !0, r(T)
                    }, h.timeout));
                    var s = [];
                    try {
                        if (h.extraData)
                            for (var c in h.extraData) h.extraData.hasOwnProperty(c) && (t.isPlainObject(h.extraData[c]) && h.extraData[c].hasOwnProperty("name") && h.extraData[c].hasOwnProperty("value") ? s.push(t('<input type="hidden" name="' + h.extraData[c].name + '">').val(h.extraData[c].value).appendTo(S)[0]) : s.push(t('<input type="hidden" name="' + c + '">').val(h.extraData[c]).appendTo(S)[0]));
                        h.iframeTarget || m.appendTo("body"), g.attachEvent ? g.attachEvent("onload", r) : g.addEventListener("load", r, !1), setTimeout(e, 15);
                        try {
                            S.submit()
                        }
                        catch (d) {
                            var p = document.createElement("form").submit;
                            p.apply(S)
                        }
                    }
                    finally {
                        S.setAttribute("action", o), n ? S.setAttribute("target", n) : u.removeAttr("target"), t(s).remove()
                    }
                }

                function r(e) {
                    if (!y.aborted && !I) {
                        if (D = a(g), D || (i("cannot access response document"), e = _), e === T && y) return y.abort("timeout"), void k.reject(y, "timeout");
                        if (e == _ && y) return y.abort("server abort"), void k.reject(y, "error", "server abort");
                        if (D && D.location.href != h.iframeSrc || x) {
                            g.detachEvent ? g.detachEvent("onload", r) : g.removeEventListener("load", r, !1);
                            var n, o = "success";
                            try {
                                if (x) throw "timeout";
                                var s = "xml" == h.dataType || D.XMLDocument || t.isXMLDoc(D);
                                if (i("isXml=" + s), !s && window.opera && (null === D.body || !D.body.innerHTML) && --M) return i("requeing onLoad callback, DOM not available"), void setTimeout(r, 250);
                                var l = D.body ? D.body : D.documentElement;
                                y.responseText = l ? l.innerHTML : null, y.responseXML = D.XMLDocument ? D.XMLDocument : D, s && (h.dataType = "xml"), y.getResponseHeader = function (t) {
                                    var e = {
                                        "content-type": h.dataType
                                    };
                                    return e[t.toLowerCase()]
                                }, l && (y.status = Number(l.getAttribute("status")) || y.status, y.statusText = l.getAttribute("statusText") || y.statusText);
                                var c = (h.dataType || "").toLowerCase()
                                    , d = /(json|script|text)/.test(c);
                                if (d || h.textarea) {
                                    var u = D.getElementsByTagName("textarea")[0];
                                    if (u) y.responseText = u.value, y.status = Number(u.getAttribute("status")) || y.status, y.statusText = u.getAttribute("statusText") || y.statusText;
                                    else if (d) {
                                        var f = D.getElementsByTagName("pre")[0]
                                            , v = D.getElementsByTagName("body")[0];
                                        f ? y.responseText = f.textContent ? f.textContent : f.innerText : v && (y.responseText = v.textContent ? v.textContent : v.innerText)
                                    }
                                }
                                else "xml" == c && !y.responseXML && y.responseText && (y.responseXML = O(y.responseText));
                                try {
                                    A = B(y, c, h)
                                }
                                catch (b) {
                                    o = "parsererror", y.error = n = b || o
                                }
                            }
                            catch (b) {
                                i("error caught: ", b), o = "error", y.error = n = b || o
                            }
                            y.aborted && (i("upload aborted"), o = null), y.status && (o = y.status >= 200 && y.status < 300 || 304 === y.status ? "success" : "error"), "success" === o ? (h.success && h.success.call(h.context, A, "success", y), k.resolve(y.responseText, "success", y), p && t.event.trigger("ajaxSuccess", [y, h])) : o && (void 0 === n && (n = y.statusText), h.error && h.error.call(h.context, y, o, n), k.reject(y, "error", n), p && t.event.trigger("ajaxError", [y, h, n])), p && t.event.trigger("ajaxComplete", [y, h]), p && !--t.active && t.event.trigger("ajaxStop"), h.complete && h.complete.call(h.context, y, o), I = !0, h.timeout && clearTimeout(C), setTimeout(function () {
                                h.iframeTarget ? m.attr("src", h.iframeSrc) : m.remove(), y.responseXML = null
                            }, 100)
                        }
                    }
                }
                var c, d, h, p, f, m, g, y, b, w, x, C, S = u[0]
                    , k = t.Deferred();
                if (k.abort = function (t) {
                        y.abort(t)
                    }, n)
                    for (d = 0; d < v.length; d++) c = t(v[d]), o ? c.prop("disabled", !1) : c.removeAttr("disabled");
                if (h = t.extend(!0, {}, t.ajaxSettings, e), h.context = h.context || h, f = "jqFormIO" + (new Date).getTime(), h.iframeTarget ? (m = t(h.iframeTarget), w = m.attr2("name"), w ? f = w : m.attr2("name", f)) : (m = t('<iframe name="' + f + '" src="' + h.iframeSrc + '" />'), m.css({
                        position: "absolute"
                        , top: "-1000px"
                        , left: "-1000px"
                    })), g = m[0], y = {
                        aborted: 0
                        , responseText: null
                        , responseXML: null
                        , status: 0
                        , statusText: "n/a"
                        , getAllResponseHeaders: function () {}
                        , getResponseHeader: function () {}
                        , setRequestHeader: function () {}
                        , abort: function (e) {
                            var n = "timeout" === e ? "timeout" : "aborted";
                            i("aborting upload... " + n), this.aborted = 1;
                            try {
                                g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                            }
                            catch (a) {}
                            m.attr("src", h.iframeSrc), y.error = n, h.error && h.error.call(h.context, y, n, e), p && t.event.trigger("ajaxError", [y, h, n]), h.complete && h.complete.call(h.context, y, n)
                        }
                    }, p = h.global, p && 0 === t.active++ && t.event.trigger("ajaxStart"), p && t.event.trigger("ajaxSend", [y, h]), h.beforeSend && h.beforeSend.call(h.context, y, h) === !1) return h.global && t.active--, k.reject(), k;
                if (y.aborted) return k.reject(), k;
                b = S.clk, b && (w = b.name, w && !b.disabled && (h.extraData = h.extraData || {}, h.extraData[w] = b.value, "image" == b.type && (h.extraData[w + ".x"] = S.clk_x, h.extraData[w + ".y"] = S.clk_y)));
                var T = 1
                    , _ = 2
                    , E = t("meta[name=csrf-token]").attr("content")
                    , $ = t("meta[name=csrf-param]").attr("content");
                $ && E && (h.extraData = h.extraData || {}, h.extraData[$] = E), h.forceSync ? s() : setTimeout(s, 10);
                var A, D, I, M = 50
                    , O = t.parseXML || function (t, e) {
                        return window.ActiveXObject ? (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(t)) : e = (new DOMParser).parseFromString(t, "text/xml"), e && e.documentElement && "parsererror" != e.documentElement.nodeName ? e : null
                    }
                    , j = t.parseJSON || function (t) {
                        return window.eval("(" + t + ")")
                    }
                    , B = function (e, n, i) {
                        var a = e.getResponseHeader("content-type") || ""
                            , o = "xml" === n || !n && a.indexOf("xml") >= 0
                            , s = o ? e.responseXML : e.responseText;
                        return o && "parsererror" === s.documentElement.nodeName && t.error && t.error("parsererror"), i && i.dataFilter && (s = i.dataFilter(s, n)), "string" == typeof s && ("json" === n || !n && a.indexOf("json") >= 0 ? s = j(s) : ("script" === n || !n && a.indexOf("javascript") >= 0) && t.globalEval(s))
                            , s
                    };
                return k
            }
            if (!this.length) return i("ajaxSubmit: skipping submit process - no element selected"), this;
            var l, c, d, u = this;
            "function" == typeof e ? e = {
                success: e
            } : void 0 === e && (e = {}), l = e.type || this.attr2("method"), c = e.url || this.attr2("action"), d = "string" == typeof c ? t.trim(c) : "", d = d || window.location.href || "", d && (d = (d.match(/^([^#]+)/) || [])[1]), e = t.extend(!0, {
                url: d
                , success: t.ajaxSettings.success
                , type: l || t.ajaxSettings.type
                , iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
            }, e);
            var h = {};
            if (this.trigger("form-pre-serialize", [this, e, h]), h.veto) return i("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
            if (e.beforeSerialize && e.beforeSerialize(this, e) === !1) return i("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
            var p = e.traditional;
            void 0 === p && (p = t.ajaxSettings.traditional);
            var f, v = []
                , m = this.formToArray(e.semantic, v);
            if (e.data && (e.extraData = e.data, f = t.param(e.data, p)), e.beforeSubmit && e.beforeSubmit(m, this, e) === !1) return i("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
            if (this.trigger("form-submit-validate", [m, this, e, h]), h.veto) return i("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
            var g = t.param(m, p);
            f && (g = g ? g + "&" + f : f), "GET" == e.type.toUpperCase() ? (e.url += (e.url.indexOf("?") >= 0 ? "&" : "?") + g, e.data = null) : e.data = g;
            var y = [];
            if (e.resetForm && y.push(function () {
                    u.resetForm()
                }), e.clearForm && y.push(function () {
                    u.clearForm(e.includeHidden)
                }), !e.dataType && e.target) {
                var b = e.success || function () {};
                y.push(function (n) {
                    var i = e.replaceTarget ? "replaceWith" : "html";
                    t(e.target)[i](n).each(b, arguments)
                })
            }
            else e.success && y.push(e.success);
            if (e.success = function (t, n, i) {
                    for (var a = e.context || this, o = 0, s = y.length; s > o; o++) y[o].apply(a, [t, n, i || u, u])
                }, e.error) {
                var w = e.error;
                e.error = function (t, n, i) {
                    var a = e.context || this;
                    w.apply(a, [t, n, i, u])
                }
            }
            if (e.complete) {
                var x = e.complete;
                e.complete = function (t, n) {
                    var i = e.context || this;
                    x.apply(i, [t, n, u])
                }
            }
            var C = t("input[type=file]:enabled", this).filter(function () {
                    return "" !== t(this).val()
                })
                , S = C.length > 0
                , k = "multipart/form-data"
                , T = u.attr("enctype") == k || u.attr("encoding") == k
                , _ = a.fileapi && a.formdata;
            i("fileAPI :" + _);
            var E, $ = (S || T) && !_;
            e.iframe !== !1 && (e.iframe || $) ? e.closeKeepAlive ? t.get(e.closeKeepAlive, function () {
                E = r(m)
            }) : E = r(m) : E = (S || T) && _ ? s(m) : t.ajax(e), u.removeData("jqxhr").data("jqxhr", E);
            for (var A = 0; A < v.length; A++) v[A] = null;
            return this.trigger("form-submit-notify", [this, e]), this
        }, t.fn.ajaxForm = function (a) {
            if (a = a || {}, a.delegation = a.delegation && t.isFunction(t.fn.on), !a.delegation && 0 === this.length) {
                var o = {
                    s: this.selector
                    , c: this.context
                };
                return !t.isReady && o.s ? (i("DOM not ready, queuing ajaxForm"), t(function () {
                    t(o.s, o.c).ajaxForm(a)
                }), this) : (i("terminating; zero elements found by selector" + (t.isReady ? "" : " (DOM not ready)")), this)
            }
            return a.delegation ? (t(document).off("submit.form-plugin", this.selector, e).off("click.form-plugin", this.selector, n).on("submit.form-plugin", this.selector, a, e).on("click.form-plugin", this.selector, a, n), this) : this.ajaxFormUnbind().bind("submit.form-plugin", a, e).bind("click.form-plugin", a, n)
        }, t.fn.ajaxFormUnbind = function () {
            return this.unbind("submit.form-plugin click.form-plugin")
        }, t.fn.formToArray = function (e, n) {
            var i = [];
            if (0 === this.length) return i;
            var o = this[0]
                , s = e ? o.getElementsByTagName("*") : o.elements;
            if (!s) return i;
            var r, l, c, d, u, h, p;
            for (r = 0, h = s.length; h > r; r++)
                if (u = s[r], c = u.name, c && !u.disabled)
                    if (e && o.clk && "image" == u.type) o.clk == u && (i.push({
                        name: c
                        , value: t(u).val()
                        , type: u.type
                    }), i.push({
                        name: c + ".x"
                        , value: o.clk_x
                    }, {
                        name: c + ".y"
                        , value: o.clk_y
                    }));
                    else if (d = t.fieldValue(u, !0), d && d.constructor == Array)
                for (n && n.push(u), l = 0, p = d.length; p > l; l++) i.push({
                    name: c
                    , value: d[l]
                });
            else if (a.fileapi && "file" == u.type) {
                n && n.push(u);
                var f = u.files;
                if (f.length)
                    for (l = 0; l < f.length; l++) i.push({
                        name: c
                        , value: f[l]
                        , type: u.type
                    });
                else i.push({
                    name: c
                    , value: ""
                    , type: u.type
                })
            }
            else null !== d && "undefined" != typeof d && (n && n.push(u), i.push({
                name: c
                , value: d
                , type: u.type
                , required: u.required
            }));
            if (!e && o.clk) {
                var v = t(o.clk)
                    , m = v[0];
                c = m.name, c && !m.disabled && "image" == m.type && (i.push({
                    name: c
                    , value: v.val()
                }), i.push({
                    name: c + ".x"
                    , value: o.clk_x
                }, {
                    name: c + ".y"
                    , value: o.clk_y
                }))
            }
            return i
        }, t.fn.formSerialize = function (e) {
            return t.param(this.formToArray(e))
        }, t.fn.fieldSerialize = function (e) {
            var n = [];
            return this.each(function () {
                var i = this.name;
                if (i) {
                    var a = t.fieldValue(this, e);
                    if (a && a.constructor == Array)
                        for (var o = 0, s = a.length; s > o; o++) n.push({
                            name: i
                            , value: a[o]
                        });
                    else null !== a && "undefined" != typeof a && n.push({
                        name: this.name
                        , value: a
                    })
                }
            }), t.param(n)
        }, t.fn.fieldValue = function (e) {
            for (var n = [], i = 0, a = this.length; a > i; i++) {
                var o = this[i]
                    , s = t.fieldValue(o, e);
                null === s || "undefined" == typeof s || s.constructor == Array && !s.length || (s.constructor == Array ? t.merge(n, s) : n.push(s))
            }
            return n
        }, t.fieldValue = function (e, n) {
            var i = e.name
                , a = e.type
                , o = e.tagName.toLowerCase();
            if (void 0 === n && (n = !0), n && (!i || e.disabled || "reset" == a || "button" == a || ("checkbox" == a || "radio" == a) && !e.checked || ("submit" == a || "image" == a) && e.form && e.form.clk != e || "select" == o && -1 == e.selectedIndex)) return null;
            if ("select" == o) {
                var s = e.selectedIndex;
                if (0 > s) return null;
                for (var r = [], l = e.options, c = "select-one" == a, d = c ? s + 1 : l.length, u = c ? s : 0; d > u; u++) {
                    var h = l[u];
                    if (h.selected) {
                        var p = h.value;
                        if (p || (p = h.attributes && h.attributes.value && !h.attributes.value.specified ? h.text : h.value), c) return p;
                        r.push(p)
                    }
                }
                return r
            }
            return t(e).val()
        }, t.fn.clearForm = function (e) {
            return this.each(function () {
                t("input,select,textarea", this).clearFields(e)
            })
        }, t.fn.clearFields = t.fn.clearInputs = function (e) {
            var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
            return this.each(function () {
                var i = this.type
                    , a = this.tagName.toLowerCase();
                n.test(i) || "textarea" == a ? this.value = "" : "checkbox" == i || "radio" == i ? this.checked = !1 : "select" == a ? this.selectedIndex = -1 : "file" == i ? /MSIE/.test(navigator.userAgent) ? t(this).replaceWith(t(this).clone(!0)) : t(this).val("") : e && (e === !0 && /hidden/.test(i) || "string" == typeof e && t(this).is(e)) && (this.value = "")
            })
        }, t.fn.resetForm = function () {
            return this.each(function () {
                ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
            })
        }, t.fn.enable = function (t) {
            return void 0 === t && (t = !0), this.each(function () {
                this.disabled = !t
            })
        }, t.fn.selected = function (e) {
            return void 0 === e && (e = !0), this.each(function () {
                var n = this.type;
                if ("checkbox" == n || "radio" == n) this.checked = e;
                else if ("option" == this.tagName.toLowerCase()) {
                    var i = t(this).parent("select");
                    e && i[0] && "select-one" == i[0].type && i.find("option").selected(!1), this.selected = e
                }
            })
        }, t.fn.ajaxSubmit.debug = !1
    })
    , function (t) {
        "use strict";
        t.ajaxChimp = {
            responses: {
                "We have sent you a confirmation email": 0
                , "Please enter a value": 1
                , "An email address must contain a single @": 2
                , "The domain portion of the email address is invalid (the portion after the @: )": 3
                , "The username portion of the email address is invalid (the portion before the @: )": 4
                , "This email address looks fake or invalid. Please enter a real email address": 5
            }
            , translations: {
                en: null
            }
            , init: function (e, n) {
                t(e).ajaxChimp(n)
            }
        }, t.fn.ajaxChimp = function (e) {
            return t(this).each(function (n, i) {
                var a = t(i)
                    , o = a.find("input[type=email]")
                    , s = a.find("label[for=" + o.attr("id") + "]")
                    , r = t.extend({
                        url: a.attr("action")
                        , language: "en"
                    }, e)
                    , l = r.url.replace("/post?", "/post-json?").concat("&c=?");
                a.attr("novalidate", "true"), o.attr("name", "EMAIL"), a.submit(function () {
                    function e(e) {
                        if ("success" === e.result) n = "We have sent you a confirmation email", s.removeClass("error").addClass("valid"), o.removeClass("error").addClass("valid");
                        else {
                            o.removeClass("valid").addClass("error"), s.removeClass("valid").addClass("error");
                            var i = -1;
                            try {
                                var a = e.msg.split(" - ", 2);
                                if (void 0 === a[1]) n = e.msg;
                                else {
                                    var l = parseInt(a[0], 10);
                                    l.toString() === a[0] ? (i = a[0], n = a[1]) : (i = -1, n = e.msg)
                                }
                            }
                            catch (c) {
                                i = -1, n = e.msg
                            }
                        }
                        "en" !== r.language && void 0 !== t.ajaxChimp.responses[n] && t.ajaxChimp.translations && t.ajaxChimp.translations[r.language] && t.ajaxChimp.translations[r.language][t.ajaxChimp.responses[n]] && (n = t.ajaxChimp.translations[r.language][t.ajaxChimp.responses[n]]), s.html(n), s.show(2e3), r.callback && r.callback(e)
                    }
                    var n, i = {}
                        , c = a.serializeArray();
                    t.each(c, function (t, e) {
                        i[e.name] = e.value
                    }), t.ajax({
                        url: l
                        , data: i
                        , success: e
                        , dataType: "jsonp"
                        , error: function (t, e) {
                            console.log("mailchimp ajax submit error: " + e)
                        }
                    });
                    var d = "Submitting...";
                    return "en" !== r.language && t.ajaxChimp.translations && t.ajaxChimp.translations[r.language] && t.ajaxChimp.translations[r.language].submit && (d = t.ajaxChimp.translations[r.language].submit), s.html(d).show(2e3), !1
                })
            }), this
        }
    }(jQuery)
    , function (t, e, n) {
        t.fn.backstretch = function (i, a) {
            return (i === n || 0 === i.length) && t.error("No images were supplied for Backstretch"), 0 === t(e).scrollTop() && e.scrollTo(0, 0), this.each(function () {
                var e = t(this)
                    , n = e.data("backstretch");
                if (n) {
                    if ("string" == typeof i && "function" == typeof n[i]) return void n[i](a);
                    a = t.extend(n.options, a), n.destroy(!0)
                }
                n = new o(this, i, a), e.data("backstretch", n)
            })
        }, t.backstretch = function (e, n) {
            return t("body").backstretch(e, n).data("backstretch")
        }, t.expr[":"].backstretch = function (e) {
            return t(e).data("backstretch") !== n
        }, t.fn.backstretch.defaults = {
            centeredX: !0
            , centeredY: !0
            , duration: 5e3
            , fade: 0
        };
        var i = {
                left: 0
                , top: 0
                , overflow: "hidden"
                , margin: 0
                , padding: 0
                , height: "100%"
                , width: "100%"
                , zIndex: -999999
            }
            , a = {
                position: "absolute"
                , display: "none"
                , margin: 0
                , padding: 0
                , border: "none"
                , width: "auto"
                , height: "auto"
                , maxHeight: "none"
                , maxWidth: "none"
                , zIndex: -999999
            }
            , o = function (n, a, o) {
                this.options = t.extend({}, t.fn.backstretch.defaults, o || {}), this.images = t.isArray(a) ? a : [a], t.each(this.images, function () {
                    t("<img />")[0].src = this
                }), this.isBody = n === document.body, this.$container = t(n), this.$root = this.isBody ? t(s ? e : document) : this.$container, n = this.$container.children(".backstretch").first(), this.$wrap = n.length ? n : t('<div class="backstretch"></div>').css(i).appendTo(this.$container), this.isBody || (n = this.$container.css("position"), a = this.$container.css("zIndex"), this.$container.css({
                    position: "static" === n ? "relative" : n
                    , zIndex: "auto" === a ? 0 : a
                    , background: "none"
                }), this.$wrap.css({
                    zIndex: -999998
                })), this.$wrap.css({
                    position: this.isBody && s ? "fixed" : "absolute"
                }), this.index = 0, this.show(this.index), t(e).on("resize.backstretch", t.proxy(this.resize, this)).on("orientationchange.backstretch", t.proxy(function () {
                    this.isBody && 0 === e.pageYOffset && (e.scrollTo(0, 1), this.resize())
                }, this))
            };
        o.prototype = {
            resize: function () {
                try {
                    var t, n = {
                            left: 0
                            , top: 0
                        }
                        , i = this.isBody ? this.$root.width() : this.$root.innerWidth()
                        , a = i
                        , o = this.isBody ? e.innerHeight ? e.innerHeight : this.$root.height() : this.$root.innerHeight()
                        , s = a / this.$img.data("ratio");
                    s >= o ? (t = (s - o) / 2, this.options.centeredY && (n.top = "-" + t + "px")) : (s = o, a = s * this.$img.data("ratio"), t = (a - i) / 2, this.options.centeredX && (n.left = "-" + t + "px")), this.$wrap.css({
                        width: i
                        , height: o
                    }).find("img:not(.deleteable)").css({
                        width: a
                        , height: s
                    }).css(n)
                }
                catch (r) {}
                return this
            }
            , show: function (e) {
                if (!(Math.abs(e) > this.images.length - 1)) {
                    var n = this
                        , i = n.$wrap.find("img").addClass("deleteable")
                        , o = {
                            relatedTarget: n.$container[0]
                        };
                    return n.$container.trigger(t.Event("backstretch.before", o), [n, e]), this.index = e, clearInterval(n.interval), n.$img = t("<img />").css(a).bind("load", function (a) {
                        var s = this.width || t(a.target).width();
                        a = this.height || t(a.target).height(), t(this).data("ratio", s / a), t(this).fadeIn(n.options.speed || n.options.fade, function () {
                            i.remove(), n.paused || n.cycle(), t(["after", "show"]).each(function () {
                                n.$container.trigger(t.Event("backstretch." + this, o), [n, e])
                            })
                        }), n.resize()
                    }).appendTo(n.$wrap), n.$img.attr("src", n.images[e]), n
                }
            }
            , next: function () {
                return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
            }
            , prev: function () {
                return this.show(0 === this.index ? this.images.length - 1 : this.index - 1)
            }
            , pause: function () {
                return this.paused = !0, this
            }
            , resume: function () {
                return this.paused = !1, this.next(), this
            }
            , cycle: function () {
                return 1 < this.images.length && (clearInterval(this.interval), this.interval = setInterval(t.proxy(function () {
                    this.paused || this.next()
                }, this), this.options.duration)), this
            }
            , destroy: function (n) {
                t(e).off("resize.backstretch orientationchange.backstretch"), clearInterval(this.interval), n || this.$wrap.remove(), this.$container.removeData("backstretch")
            }
        };
        var s, r = navigator.userAgent
            , l = navigator.platform
            , c = r.match(/AppleWebKit\/([0-9]+)/)
            , c = !!c && c[1]
            , d = r.match(/Fennec\/([0-9]+)/)
            , d = !!d && d[1]
            , u = r.match(/Opera Mobi\/([0-9]+)/)
            , h = !!u && u[1]
            , p = r.match(/MSIE ([0-9]+)/)
            , p = !!p && p[1];
        s = !((-1 < l.indexOf("iPhone") || -1 < l.indexOf("iPad") || -1 < l.indexOf("iPod")) && c && 534 > c || e.operamini && "[object OperaMini]" === {}.toString.call(e.operamini) || u && 7458 > h || -1 < r.indexOf("Android") && c && 533 > c || d && 6 > d || "palmGetResource" in e && c && 534 > c || -1 < r.indexOf("MeeGo") && -1 < r.indexOf("NokiaBrowser/8.5.0") || p && 6 >= p)
    }(jQuery, window), ! function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function (t) {
        "use strict";
        var e = "animsition"
            , n = {
                init: function (i) {
                    i = t.extend({
                        inClass: "fade-in"
                        , outClass: "fade-out"
                        , inDuration: 1500
                        , outDuration: 800
                        , linkElement: ".animsition-link"
                        , loading: !0
                        , loadingParentElement: "body"
                        , loadingClass: "animsition-loading"
                        , loadingInner: ""
                        , timeout: !1
                        , timeoutCountdown: 5e3
                        , onLoadEvent: !0
                        , browser: ["animation-duration", "-webkit-animation-duration"]
                        , overlay: !1
                        , overlayClass: "animsition-overlay-slide"
                        , overlayParentElement: "body"
                        , transition: function (t) {
                            window.location.href = t
                        }
                    }, i), n.settings = {
                        timer: !1
                        , data: {
                            inClass: "animsition-in-class"
                            , inDuration: "animsition-in-duration"
                            , outClass: "animsition-out-class"
                            , outDuration: "animsition-out-duration"
                            , overlay: "animsition-overlay"
                        }
                        , events: {
                            inStart: "animsition.inStart"
                            , inEnd: "animsition.inEnd"
                            , outStart: "animsition.outStart"
                            , outEnd: "animsition.outEnd"
                        }
                    };
                    var a = n.supportCheck.call(this, i);
                    if (!a && i.browser.length > 0 && (!a || !this.length)) return "console" in window || (window.console = {}, window.console.log = function (t) {
                        return t
                    }), this.length || console.log("Animsition: Element does not exist on page."), a || console.log("Animsition: Does not support this browser."), n.destroy.call(this);
                    var o = n.optionCheck.call(this, i);
                    return o && n.addOverlay.call(this, i), i.loading && n.addLoading.call(this, i), this.each(function () {
                        var a = this
                            , o = t(this)
                            , s = t(window)
                            , r = t(document)
                            , l = o.data(e);
                        l || (i = t.extend({}, i), o.data(e, {
                            options: i
                        }), i.timeout && n.addTimer.call(a), i.onLoadEvent && s.on("load." + e, function () {
                            n.settings.timer && clearTimeout(n.settings.timer), n["in"].call(a)
                        }), s.on("pageshow." + e, function (t) {
                            t.originalEvent.persisted && n["in"].call(a)
                        }), s.on("unload." + e, function () {}), r.on("click." + e, i.linkElement, function (e) {
                            e.preventDefault();
                            var i = t(this)
                                , o = i.attr("href");
                            2 === e.which || e.metaKey || e.shiftKey || -1 !== navigator.platform.toUpperCase().indexOf("WIN") && e.ctrlKey ? window.open(o, "_blank") : n.out.call(a, i, o)
                        }))
                    })
                }
                , addOverlay: function (e) {
                    t(e.overlayParentElement).prepend('<div class="' + e.overlayClass + '"></div>')
                }
                , addLoading: function (e) {
                    t(e.loadingParentElement).append('<div class="' + e.loadingClass + '">' + e.loadingInner + "</div>")
                }
                , removeLoading: function () {
                    var n = t(this)
                        , i = n.data(e).options
                        , a = t(i.loadingParentElement).children("." + i.loadingClass);
                    a.fadeOut().remove()
                }
                , addTimer: function () {
                    var i = this
                        , a = t(this)
                        , o = a.data(e).options;
                    n.settings.timer = setTimeout(function () {
                        n["in"].call(i), t(window).off("load." + e)
                    }, o.timeoutCountdown)
                }
                , supportCheck: function (e) {
                    var n = t(this)
                        , i = e.browser
                        , a = i.length
                        , o = !1;
                    0 === a && (o = !0);
                    for (var s = 0; a > s; s++)
                        if ("string" == typeof n.css(i[s])) {
                            o = !0;
                            break
                        }
                    return o
                }
                , optionCheck: function (e) {
                    var i, a = t(this);
                    return i = !(!e.overlay && !a.data(n.settings.data.overlay))
                }
                , animationCheck: function (n, i, a) {
                    var o = t(this)
                        , s = o.data(e).options
                        , r = typeof n
                        , l = !i && "number" === r
                        , c = i && "string" === r && n.length > 0;
                    return l || c ? n = n : i && a ? n = s.inClass : !i && a ? n = s.inDuration : i && !a ? n = s.outClass : i || a || (n = s.outDuration), n
                }
                , "in": function () {
                    var i = this
                        , a = t(this)
                        , o = a.data(e).options
                        , s = a.data(n.settings.data.inDuration)
                        , r = a.data(n.settings.data.inClass)
                        , l = n.animationCheck.call(i, s, !1, !0)
                        , c = n.animationCheck.call(i, r, !0, !0)
                        , d = n.optionCheck.call(i, o)
                        , u = a.data(e).outClass;
                    o.loading && n.removeLoading.call(i), u && a.removeClass(u), d ? n.inOverlay.call(i, c, l) : n.inDefault.call(i, c, l)
                }
                , inDefault: function (e, i) {
                    var a = t(this);
                    a.css({
                        "animation-duration": i + "ms"
                    }).addClass(e).trigger(n.settings.events.inStart).animateCallback(function () {
                        a.removeClass(e).css({
                            opacity: 1
                        }).trigger(n.settings.events.inEnd)
                    })
                }
                , inOverlay: function (i, a) {
                    var o = t(this)
                        , s = o.data(e).options;
                    o.css({
                        opacity: 1
                    }).trigger(n.settings.events.inStart), t(s.overlayParentElement).children("." + s.overlayClass).css({
                        "animation-duration": a + "ms"
                    }).addClass(i).animateCallback(function () {
                        o.trigger(n.settings.events.inEnd)
                    })
                }
                , out: function (i, a) {
                    var o = this
                        , s = t(this)
                        , r = s.data(e).options
                        , l = i.data(n.settings.data.outClass)
                        , c = s.data(n.settings.data.outClass)
                        , d = i.data(n.settings.data.outDuration)
                        , u = s.data(n.settings.data.outDuration)
                        , h = l ? l : c
                        , p = d ? d : u
                        , f = n.animationCheck.call(o, h, !0, !1)
                        , v = n.animationCheck.call(o, p, !1, !1)
                        , m = n.optionCheck.call(o, r);
                    s.data(e).outClass = f, m ? n.outOverlay.call(o, f, v, a) : n.outDefault.call(o, f, v, a)
                }
                , outDefault: function (i, a, o) {
                    var s = t(this)
                        , r = s.data(e).options;
                    s.css({
                        "animation-duration": a + 1 + "ms"
                    }).addClass(i).trigger(n.settings.events.outStart).animateCallback(function () {
                        s.trigger(n.settings.events.outEnd), r.transition(o)
                    })
                }
                , outOverlay: function (i, a, o) {
                    var s = this
                        , r = t(this)
                        , l = r.data(e).options
                        , c = r.data(n.settings.data.inClass)
                        , d = n.animationCheck.call(s, c, !0, !0);
                    t(l.overlayParentElement).children("." + l.overlayClass).css({
                        "animation-duration": a + 1 + "ms"
                    }).removeClass(d).addClass(i).trigger(n.settings.events.outStart).animateCallback(function () {
                        r.trigger(n.settings.events.outEnd), l.transition(o)
                    })
                }
                , destroy: function () {
                    return this.each(function () {
                        var n = t(this);
                        t(window).off("." + e), n.css({
                            opacity: 1
                        }).removeData(e)
                    })
                }
            };
        t.fn.animateCallback = function (e) {
            var n = "animationend webkitAnimationEnd";
            return this.each(function () {
                var i = t(this);
                i.on(n, function () {
                    return i.off(n), e.call(this)
                })
            })
        }, t.fn.animsition = function (i) {
            return n[i] ? n[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery." + e) : n.init.apply(this, arguments)
        }
    });