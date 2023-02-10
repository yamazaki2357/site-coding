$(function(){

  $("p").children().addBack().contents().each(function () {
    if (this.nodeType == 3) {
      var $this = $(this);
      $this.replaceWith($this.text().replace(/(\S)/g, "<span>$&</span>"));
    }
  });

  const delaySpeed = 200;
  const fadeSpeed = 200;

  // 表示ボタン
  $('.show-btn').click(function() {
    $('p').css('opacity', '1');

    $('span').each(function (i) {
      $(this).delay(i*(delaySpeed)).animate({
        'opacity' : '1'
      }, fadeSpeed);
    });
  });

  // 消すボタン
  $('.remove-btn').click(function () {
    $('span').css('opacity', '0');
  });

});