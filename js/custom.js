!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.4&appId=874327705975922";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

function init() {
      var imgDefer = document.getElementsByTagName('img');
      for (var i=0; i<imgDefer.length; i++) {
        if(imgDefer[i].getAttribute('data-src')) {
          imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
        } 
      }
    }

window.onload = init;

      //<![CDATA[
      $(document).ready(function(){
        var stream = {
          title: "98.3 F.M.",
          mp3: "http://www.streaming507.com:9326/;stream.mp3"
        },
        ready = false;
        $("#jquery_jplayer_1").jPlayer({
          ready: function (event) {
            ready = true;
            $(this).jPlayer("setMedia", stream);
          },
          pause: function() {
            $(this).jPlayer("clearMedia");
          },
          error: function(event) {
            if(ready && event.jPlayer.error.type === $.jPlayer.error.URL_NOT_SET) {
              // Setup the media stream again and play it.
              $(this).jPlayer("setMedia", stream).jPlayer("play");
            }
          },
          swfPath: "flash/jplayer",
          supplied: "mp3",
          preload: "none",
          wmode: "window",
          useStateClassSkin: true,
          autoBlur: false,
          keyEnabled: true
        });

      });
    //]]>