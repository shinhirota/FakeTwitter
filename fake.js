
$(function () {

  replace_tweets();

  setInterval(replace_tweets, 1000);
});

function replace_tweets() {

  // Replace tweets
  var name = $(".current-user .fullname").text();
  $(".tweet-text").text(name + "さんて、頭おかしいよね");

  // Hide recomended users, trends and footer
  $(".wtf-module,.trends,.Footer").css({
    display: "none"
  });
}
