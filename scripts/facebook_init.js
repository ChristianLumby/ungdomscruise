
  window.fbAsyncInit = function() {
    FB.init({
      appId            : '210274199886393',
      autoLogAppEvents : false,
      xfbml            : true,
      version          : 'v3.2'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/da_DK/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
