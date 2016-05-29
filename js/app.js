
var twitchAPI = "https://api.twitch.tv/kraken/streams/esl_sc2?callback=?"



var streamers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","brunofin","comster404","test_channel","cretetion","sheevergaming","TR7K","OgamingSC2","ESL_SC2"];

$.each(streamers, function(_, channel){
  var URL = "https://api.twitch.tv/kraken/streams/" + channel +  "?callback=?"
  var cb = function(data){
    var content = $(".content");
    console.log(data, channel);
    //content.append("<div class='offline'>"
    // If the channel doesn't exist
    if (data.stream === undefined) {
      content.append("<div class='channel removed'>" + "<img class='icon' src='https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F'/><p>" + channel + " no longer exists</p></div");
    }
    // If the channel is offline
    else if (data.stream == null) {
      content.append("<div class='channel offline'>" + "<img class='icon' src='https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F'/><p>" + channel + " is offline</p></div");
    }
    // If the channel is online
     else if (data.stream != null) {
      content.append("<a href='" + data.stream.channel.url + "'>"
      + "<div class='channel online'>"
      + "<img class='icon online-icon' src='" + data.stream.channel.logo +  "''/>"
      + "<div class='isOnline'>"
      + "<h2>" + channel + "</h2>"
      + "<p>Online</p></div>"
      + "<div class='info'>"
      + "<p><strong><u>" + data.stream.game + "</u></strong></p>"
      + "</p>" + data.stream.viewers + " viewers</p>"
      + "</p>(Language: " + data.stream.channel.broadcaster_language + ")</p>"
      + "</div></div>"
      + "</a>")
    }
    //content.append("</div>");

  };
  $.getJSON(URL, cb);
})

$("#all").on("click", function(){
  $(".online").css("display", "flex");
  $(".offline").css("display", "flex");
  $(".removed").css("display", "flex");
});

$("#online").on("click", function(){
  $(".online").css("display", "flex");
  $(".offline").css("display", "none");
  $(".removed").css("display", "none");
});

$("#offline").on("click", function(){
  $(".online").css("display", "none");
  $(".offline").css("display", "flex");
  $(".removed").css("display", "none");
});
