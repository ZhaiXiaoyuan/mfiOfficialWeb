$(function () {
    /**
     *旧域名跳转控制
     */
    if(window.location.origin=='http://www.mermaidfederation.com'){
        var redirectAddress=window.location.href.replace(window.location.origin,'http://www.mfimermaid.com');
        console.log('redirectAddress:',redirectAddress);
        window.location.replace(redirectAddress);
    }

    /**
     * 登录选项面板控制
     */
    window.toggleLoginOptions=function () {
        var $target=$('.login-options');
        if($target.hasClass('active')){
            $target.removeClass('active');
        }else{
            $target.addClass('active');
        }
    }


    /**
     * 登录跳转
     */
    window.toLogin=function (type) {
        window.location.href=BASIC_CONFIG.managementSystemBasicPath+'login/'+type;
    }

    /**
     * 导航显示控制
     */
    window.toggleNav=function () {
        var $target=$('.home');
        if($target.hasClass('expand-nav')){
            $target.removeClass('expand-nav');
        }else{
            $target.addClass('expand-nav');
        }
    }

    /**
     * 导航栏跳转
     */
    window.navLink=function (id) {
        utils.goAnchor(null,id);
        $('.home').removeClass('expand-nav');
    }

    /**
     * 动画加载控制
     */
        //获取运动的盒子
    var boxElemets = $('.boxaction');
    $.each(boxElemets, function() {
        $(this).attr('init', 'false');
    });
    //判断是否出现在浏览器界面里面！
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        if (elemTop + 100 < docViewBottom) {
            return true
        } else {
            return false
        }
    }
    //定义动画
    function animateInit() {
        $.each(boxElemets, function() {
            if ($(this).attr('init') == 'false' && isScrolledIntoView($(this))) { //没有显示过且刚出现在浏览器界面
                $(this).attr('init', 'true');
                $(this).find('.animate-box').addClass('fadeInUp animated');
            }
        });
    }
    animateInit(); //先执行一次animateInit
    $(window).scroll(function() { //滑动执行animateInit
        animateInit();
    });
})