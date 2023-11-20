!function () {
    "use strict";
    function e(e, t) { let n; return (...i) => { clearTimeout(n), n = setTimeout((() => { e(...i) }), t) } }
    class t {
        constructor() { this.callbacks = [], window.addEventListener("DOMContentLoaded", (() => this.onDOMContentLoaded())) } onDOMContentLoaded() { this.callbacks.sort(((e, t) => e.priority - t.priority)).forEach((({ callback: e }) => e())) } runOnLoad(e) { "loading" === document.readyState ? this.callbacks.push(e) : e.callback() }
    }

    class i {
        constructor(e) { this.items = [], this.previousWidth = document.documentElement.clientWidth, this.previousHeight = window.innerHeight; const t = e((() => this.onWindowResize()), 100); window.addEventListener("resize", t) } onWindowResize() { const e = document.documentElement.clientWidth, t = window.innerHeight, n = this.previousWidth !== e, i = this.previousHeight !== t; this.items.forEach((e => { const t = () => { e.callback(), e.executed = !0 }; (!e.executed || n && e.options.runOnWidthChange || i && e.options.runOnHeightChange) && t() })), this.previousWidth = e, this.previousHeight = t } runOnResize(e, t) { this.items.push({ callback: e, options: t, executed: t.runOnLoad }), this.items.sort(((e, t) => e.options.priority - t.options.priority)), t.runOnLoad && n(e, t.priority) }
    }

    class s {
        constructor() { this.menuButton = document.getElementById("menuButton"), this.verticalMenu = document.getElementById("verticalMenu"), this.horizontalMenu = document.getElementById("horizontalMenu"), this.menuToggle = document.getElementById("menuToggle") } exists() { return null != this.menuToggle } showHamburgerMenu() { this.menuButton.style.display = "flex", this.verticalMenu.style.display = "block", this.horizontalMenu.style.display = "none", this.horizontalMenu.style.visibility = "hidden" } showHorizontalMenu() { this.menuButton.style.display = "none", this.verticalMenu.style.display = "none", this.horizontalMenu.style.display = "flex", this.horizontalMenu.style.visibility = "visible" }
    }
    n((() => { const e = new s; e.exists() && (window.addEventListener("hashchange", (() => { e.menuToggle.checked = !1 })), o((() => function (e) { const t = document.body.clientWidth; e.horizontalMenu.clientWidth > t ? e.showHamburgerMenu() : e.showHorizontalMenu() }(e)), { runOnLoad: !0 })) }))
}();
