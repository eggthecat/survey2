$(document).ready(function(){
  $("form").submit(function(event){
    var person = $("#name").val();
    var bev = $("#beverage").val();
    var favoriteColor = $("#color").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
console.log(bev);
console.log(favoriteColor);

  $(".try").html(person + "<br>" + bev + "<br>" + favoriteColor + "<br>" + flavor)
  event.preventDefault();
});
})
