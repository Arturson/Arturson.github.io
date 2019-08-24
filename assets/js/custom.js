(function($) {
  $(window).load(function() {
    $('#status').fadeOut();
    $('#preloader').delay(100).fadeOut('slow');
  });
  $(document).ready(function() {
    $('a[href*=#]').bind("click", function(e) {
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.scroll-up').fadeIn();
      } else {
        $('.scroll-up').fadeOut();
      }
    });
    $('.header').sticky({
      topSpacing: 0
    });
    $('body').scrollspy({
      target: '.navbar-custom',
      offset: 70
    })
    $('.skills').waypoint(function() {
      $('.chart').each(function() {
        $(this).easyPieChart({
          size: 140,
          animate: 2000,
          lineCap: 'butt',
          scaleColor: false,
          barColor: '#FF5252',
          trackColor: 'transparent',
          lineWidth: 10
        });
      });
    }, {
      offset: '80%'
    });
    $(".screen-height").height($(window).height());
    $(window).resize(function() {
      $(".screen-height").height($(window).height());
    });
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      $('#home').css({
        'background-attachment': 'scroll'
      });
    } else {
      $('#home').parallax('50%', 0.1);
    }
    wow = new WOW({
      mobile: false
    });
    wow.init();
  });
})(jQuery);

function AjaxFormRequest(result_id, formMain, url) {
  jQuery.ajax({
    url: url,
    type: "POST",
    dataType: "html",
    data: jQuery("#" + formMain).serialize(),
    success: function(response) {
      document.getElementById(result_id).innerHTML = response;
    },
    error: function(response) {
      document.getElementById(result_id).innerHTML = "<p>Ошибка. Попробуйте ещё раз.</p>";
    }
  });
  $(':input', '#formMain').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
}
