//スライダー
$(function () {
  $('.voice__contents').slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  });
});
//アコーディオン
$('.faq__contents--dt').on('click', function (e) {
  var content = $(this).next('.faq__contents--dd');
  content.slideToggle();
  $('.faq__contents--mark', this).toggleClass("open", 300);
});