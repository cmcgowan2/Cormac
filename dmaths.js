$(document).ready(function() {
  $(".homelink").on( {
    "mouseover" : function(){
      $(".change").attr("src", "https://cdn.pixabay.com/photo/2017/11/12/18/32/book-2943383__340.png")
    },
    "mouseout" : function() {
      $(".change").attr("src", "https://cdn.pixabay.com/photo/2016/07/29/21/42/school-1555910__340.png")
    }
  });

  $(".chemistrylink").on( {
    "mouseover" : function(){
      $(".change").attr("src", "https://cdn.pixabay.com/photo/2017/04/16/18/08/test-tube-2235388__340.png")
    },
    "mouseout" : function() {
      $(".change").attr("src", "https://cdn.pixabay.com/photo/2016/07/29/21/42/school-1555910__340.png")
    }
  });

  $(".physicslink").on( {
    "mouseover" : function(){
      $(".change").attr("src", "https://cdn.pixabay.com/photo/2016/03/31/19/13/atom-1294810__340.png")
    },
    "mouseout" : function() {
      $(".change").attr("src", "https://cdn.pixabay.com/photo/2016/07/29/21/42/school-1555910__340.png")
    }
  });
});
