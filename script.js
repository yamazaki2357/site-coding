$(function() {
  // メイン表示切り替え
  $('.profile-btn').click(function() {
    console.log('成功');
    $('.import-profile-site').css('display', 'block');
  });

  $('.other').click(function() {
    $('.import-profile-site').css('display', 'none');
  });

  // スクロールボタン
    $('#top-btn').click(function() {
    $('html, body').animate({
      'scrollTop': '0'
    }, 300);
  });
});