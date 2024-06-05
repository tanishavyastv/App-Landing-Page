$(document).ready(function () {
    $("#pic1")
        .on('mouseenter', function () {
            $("#name").html('Nick Jonas').css('opacity', '1');
        })
        .on('mouseleave', function () {
            $("#name").css('opacity', '0');
        });

    $("#pic2")
        .on('mouseenter', function () {
            $("#name").html('Priyanka Chopra').css('opacity', '1');
        })
        .on('mouseleave', function () {
            $("#name").css('opacity', '0');
        });

    $("#pic3")
        .on('mouseenter', function () {
            $("#name").html('Bill Gates').css('opacity', '1');
        })
        .on('mouseleave', function () {
            $("#name").css('opacity', '0');
        });

    $("#pic4")
        .on('mouseenter', function () {
            $("#name").html('Connor Gray').css('opacity', '1');
        })
        .on('mouseleave', function () {
            $("#name").css('opacity', '0');
        });

    $("#pic5")
        .on('mouseenter', function () {
            $("#name").html('Emma Watson').css('opacity', '1');
        })
        .on('mouseleave', function () {
            $("#name").css('opacity', '0');
        });
});
