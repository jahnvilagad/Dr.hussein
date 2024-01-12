(function () {
  window.onload = function () {
    var preloader = document.querySelector('.page-loading');
    preloader.classList.remove('active');
    setTimeout(function () {
      preloader.remove();
    }, 1000);
  };
})();

$(function () { // Dropdown toggle
  $('.dropdown i').click(function () {
    $(this).next('.dropdown-menu').slideToggle();
  });

  $(document).click(function (e) {
    var target = e.target;
    if (!$(target).is('.dropdown i') && !$(target).parents().is('.dropdown i'))
    //{ $('.dropdown').hide(); }
    { $('.dropdown-menu').slideUp(); }
  });
});
