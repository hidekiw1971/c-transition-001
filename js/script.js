
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // 
  //ドロワーメニュー
  $("button").click(function () {
    $(".ease").toggleClass("ease-start");
    $(".ease-in").toggleClass("ease-in-start");
    $(".ease-out").toggleClass("ease-out-start");
    $(".ease-in-out").toggleClass("ease-in-out-start");
    $(".linear").toggleClass("linear-start");

  });
  // 
});
