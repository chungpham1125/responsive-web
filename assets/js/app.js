$(document).ready(function() {
    // 1. click vào icon menu-responsive thì xuất hiện menu-responsive
    $("#icon-menu-respon").click(function() {
        // 1.1 khi menu-responsive xuất hiện thì đồng thời thay đổi icon thành dấu "X"
        $(this).toggleClass("fa-bars fa-times");
        $("#site").toggleClass("open-respon-menu");
        return false;
    });

    // 2. click vào icon caret-right thì xuất hiện sub-menu
    $("ul.respon-menu i.fas").click(function() {
        // 2.1 khi sub-menu xuất hiện thì icon caret-right sẽ trở thành icon caret-down và ngược lại
        $(this).toggleClass("fa-caret-right fa-caret-down");
        $(this).nextAll(".sub-menu").slideToggle();
    });

    // 3. Khi kích thước trình duyệt thay đổi lớn hơn 768px thì ẩn menu
    $(window).resize(function() {
        if ($(this).width() >= 768) {
            $("#icon-menu-respon").removeClass().addClass("fas fa-bars");
            $("#site").removeClass("open-respon-menu");
            $("ul.respon-menu i.fas").removeClass().addClass("fas fa-caret-right");
            $("ul.respon-menu .sub-menu").slideUp();
        }
    });

    $("#wp-content").click(function() {
        $("#icon-menu-respon").removeClass().addClass("fas fa-bars");
        $("#site").removeClass("open-respon-menu");
        $("ul.respon-menu i.fas").removeClass().addClass("fas fa-caret-right");
        $("ul.respon-menu .sub-menu").slideUp();
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $("#icon-menu-respon").removeClass().addClass("fas fa-bars");
            $("#site").removeClass("open-respon-menu");
            $("ul.respon-menu i.fas").removeClass().addClass("fas fa-caret-right");
            $("ul.respon-menu .sub-menu").slideUp();
        }
    });
});