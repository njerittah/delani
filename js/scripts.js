$("document").ready(function(){
  $(".design,.click1").click(function(){
    $(".design").toggle(100);
      $(".click1").toggle(100);
});
$(".design2,.click2").click(function(){
  $(".design2").toggle(100);
    $(".click2").toggle(100);
});
$(".design3,.click3").click(function(){
  $(".design3").toggle(100);
    $(".click3").toggle(100);
});
$(".dark").hover(function(){
  $(".1").slideToggle();
});
$(".light").hover(function(){
  $(".2").slideToggle();
});
  $(".brow").hover(function(){
    $(".3").slideToggle();
  });
    $(".blue").hover(function(){
      $(".4").slideToggle();
    });
      $(".black").hover(function(){
        $(".5").slideToggle();
      });
      $(".red").hover(function(){
        $(".6").slideToggle();
      });
      $(".bigger").hover(function(){
        $(".7").slideToggle();
      });
      $(".smaller").hover(function(){
        $(".8").slideToggle();
      });


});

function myFunction(){
  alert("thanks for joining us");
};
