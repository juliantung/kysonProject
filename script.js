$(document).ready(function(){
    // Form animation
    $(".form").on('click', function(){
        $(this).addClass('active');
    });

    $(".submit").on('click', function() {
        $(this).parent().parent().hide(300);
        $(".ok_message").addClass("active");
        pageTitle.textContent = "Feedback received"
        $('#testing').show();
    });
/** 
    $(".ok_message").on('click', function() {
        $(this).removeClass("active");
        $(".form").removeClass("active").show();
    });
**/
    // Star rating functionality
    let rating = 0;

    window.highlightStars = function(num) {
        for (let i = 1; i <= num; i++) {
            $(`#ratings .star:nth-child(${i})`).addClass('highlighted');
        }
    };

    window.resetStars = function() {
        $('#ratings .star').removeClass('highlighted');
    };

    window.rate = function(num) {
        rating = num;
        resetStars();
        highlightStars(num);
        var pageTitle = document.getElementById('pageTitle');
        if (num <= 3) {
            pageTitle.textContent = "Tell us more";
            $('#ratings').hide();
            $('#testing').hide();
            $('#feedback').show().addClass('active');
        } else {
            window.open('https://g.page/r/CZr2ArVSDCRuEBM/review');
            //Paste review link above
            window.location.href = 'https://kyson.sg/collections/all';
            //Paste navigator link above such as website
            //Change for specific companies
        }
    };
});