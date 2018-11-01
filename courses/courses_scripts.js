$(document).ready(function(){
    $('.course-block').on('click', function(){
        var course = $(this).data('course');
        $(this).addClass('active').siblings().removeClass('active');
        if(course == 'courseOne'){
            $('.course-one-content').addClass('height-normal').removeClass('height-zero').siblings().removeClass('height-normal').addClass('height-zero');
            $('html,body').animate({scrollTop: ($(".course-one").offset().top-150)},'slow');
        }
        if(course == 'courseTwo'){
            $('.course-two-content').addClass('height-normal').removeClass('height-zero').siblings().removeClass('height-normal').addClass('height-zero');
            $('html,body').animate({scrollTop: ($(".course-two").offset().top-150)},'slow');
        }
        if(course == 'courseThr'){
            $('.course-thr-content').addClass('height-normal').removeClass('height-zero').siblings().removeClass('height-normal').addClass('height-zero');
            $('html,body').animate({scrollTop: ($(".course-thr").offset().top-150)},'slow');
        }
    });
});