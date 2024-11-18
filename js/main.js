$(function () {
  $(".header__slider").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/prev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
    vertical: true,
  });

  $(".product__name").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: ".product__content",
    vertical: true,
    prevArrow:
      '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="product-next"><img src="images/product-next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 870,
        settings: {
          vertical: false,
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 460,
        settings: {
          vertical: false,
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  $(".product__content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".product__name",
    vertical: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 870,
        settings: {
          vertical: false,
        },
      },
    ],
  });

  $(".menu__btn").on("click", function () {
    $(".menu__btn").toggleClass("menu__btn--active");
    $(".menu__list").toggleClass("menu__list--active");
  });
});
