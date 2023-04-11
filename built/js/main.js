"use strict";$(function(){$(".header__slider").slick({asNavFor:".slider-dotshead",infinite:!0,fade:!0,prevArrow:'<button class="slider-arrows slider-arrows__left"><img src="img/svg/arrows-left.svg" alt="Arrow Left" /></button>',nextArrow:'<button class="slider-arrows slider-arrows__right"><img src="img/svg/arrows-right.svg" alt="Arrow Right" /></button>'}),$(".slider-dotshead").slick({asNavFor:".header__slider",slidesToShow:4,slidesToScroll:4,infinite:!1,responsive:[{breakpoint:992,settings:"unslick"}]}),$(".slider-map").slick({asNavFor:".surf-slider",slidesToShow:8,slidesToScroll:1,arrows:!1,focusOnSelect:!0,responsive:[{breakpoint:1440,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:650,settings:{slidesToShow:1,variableWidth:!0,centerMode:!0}}]}),$(".surf-slider").slick({infinite:!0,asNavFor:".slider-map",slidesToShow:4,slidesToScroll:1,focusOnSelect:!0,prevArrow:'<button class="slider-arrows slider-arrows__left"><img src="img/svg/arrows-left.svg" alt="Arrow Left" /></button>',nextArrow:'<button class="slider-arrows slider-arrows__right"><img src="img/svg/arrows-right.svg" alt="Arrow Right" /></button>',responsive:[{breakpoint:1440,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:650,settings:{slidesToShow:1,variableWidth:!0,centerMode:!0}}]}),$(".holder-slider").slick({infinite:!0,fade:!0,prevArrow:'<button class="slider-arrows slider-arrows__left"><img src="img/svg/arrows-left.svg" alt="Arrow Left" /></button>',nextArrow:'<button class="slider-arrows slider-arrows__right"><img src="img/svg/arrows-right.svg" alt="Arrow Right" /></button>'}),$(".shop-slider").slick({infinite:!0,fade:!0,prevArrow:'<button class="slider-arrows slider-arrows__left"><img src="img/svg/arrows-left.svg" alt="Arrow Left" /></button>',nextArrow:'<button class="slider-arrows slider-arrows__right"><img src="img/svg/arrows-right.svg" alt="Arrow Right" /></button>'}),$('<div class="quantity-nav"><div class="quantity-button quantity-down"><img src="img/svg/minus.svg" alt="Minus" /></div><div class="quantity-button quantity-up"><img src="img/svg/plus.svg" alt="Plus" /></div></div>').insertAfter(".quantity input"),$(".quantity").each(function(){var t=$(this),r=t.find('input[type="number"]'),s=t.find(".quantity-up"),i=t.find(".quantity-down"),e=r.attr("min"),o=r.attr("max");s.click(function(){var s=parseFloat(r.val());if(o<=s)var i=s;else i=s+1;t.find("input").val(i),t.find("input").trigger("change")}),i.click(function(){var s=parseFloat(r.val());if(s<=e)var i=s;else i=s-1;t.find("input").val(i),t.find("input").trigger("change")})}),$(".quantity-button").on("click",function(){var s=$(this).parents(".holder-slider__info"),i=$(".holder-slider__description-title--summ",s).data("nights")*$(".nights",s).val()+$(".holder-slider__description-title--summ",s).data("guests")*($(".guests",s).val()-1);$(".holder-slider__description-title--summ",s).html("$"+i)}),$(".quantity").each(function(){var s=$(this).parents(".holder-slider__info"),i=$(".holder-slider__description-title--summ",s).data("nights")*$(".nights",s).val()+$(".holder-slider__description-title--summ",s).data("guests")*($(".guests",s).val()-1);$(".holder-slider__description-title--summ",s).html("$"+i)}),$(".shop-slider__surfboard-circles").on("click",function(){$(this).toggleClass("active")}),$(".menu-link").click(function(){$(this).toggleClass("menu-link--active"),$(".menu").toggleClass("menu--active")}),new WOW({mobile:!1}).init()});