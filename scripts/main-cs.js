$(function (s) {
    "use strict";
    $('[data-toggle="popover"]').popover(); 
    function e(s) {
        "success" === s.result ? swal("Good job!", s.msg, "success") : swal({
            title: "Error!"
            , text: s.msg
            , type: "error"
            , confirmButtonText: "Cool"
        })
    }
    s("#fullpage").fullpage({
       menu : '#myMenu'
        , navigationTooltips: ["Home", "The Purpose", "The Programs", "The Team", "The Opportunities", "The Contact"]
        , anchors: ["home-anchor", "purpose-anchor", "programs-anchor", "team-anchor", "opportunities-anchor", "contact-anchor"]
        , responsiveWidth: 991
    }), s("#word-rotate").Morphext({
        animation: "fadeIn"
        , separator: ","
        , speed: 4e3
    }), s("#countdown").countdown("2018/01/01", function (e) {
        s(this).html(e.strftime("<div class='countdown-section'><span>%-w</span> week%!w </div><div class='countdown-section'><span>%-d</span> day%!d </div><div class='countdown-section'><span>%H</span> hr </div><div class='countdown-section'><span>%M</span> min </div><div class='countdown-section'><span>%S</span> sec </div>"))
    }), s("[data-typer-targets]", "#home").typer(), s(".slideshow-div", "#fullpage").backstretch(["images/Image_02.jpg", "images/Image_01.jpg", "images/Image_03.jpg"], {
        duration: 3e3
        , fade: 750
    }), s(".mc-form", "#home").ajaxChimp({
        url: "http://minila.us14.list-manage.com/subscribe/post?u=3acd535ea189bd597e8a5f87c&amp;id=ea975ada65"
        , callback: e
    });
    var a = {
        success: function () {
            s("#form").clearForm(), swal("Thank You!", "We will get back to you as soon as possible!", "success")
        }
    };
    s("#form").ajaxForm(a);
    var o = s(window).width();
    991 > o && s(window).on("scroll resize", function () {
        return s(window).scrollTop() >= 75 ? void s("body").addClass("fixed-header") : s("body").removeClass("fixed-header")
    }), s(".handle", "#switcher").on("click", function () {
        var e = s(this).data("clicks");
        e ? s(".switcher").css("left", "-200px") : s(".switcher").css("left", "0px"), s(this).data("clicks", !e)
    }), s(".color", "#switcher").on("click", function () {
        var e = s(this).data("color-class");
        s("head").append("<link rel='stylesheet' href='styles/" + e + ".css' type='text/css'>")
    }), s(".switch-header.light", "#switcher").on("click", function () {
        s("body").removeClass("dark-header").addClass("light-header")
    }), s(".switch-header.dark", "#switcher").on("click", function () {
        s("body").removeClass("light-header").addClass("dark-header")
    }), s(".animsition").animsition()
});
