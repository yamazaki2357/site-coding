$(function() {
  $('.profile-btn').click(function() {
    console.log('成功');
    $('.import-profile-site').css('display', 'block');
  });
  
  $('.other').click(function() {
    $('.import-profile-site').css('display', 'none');
  });

});