/* Google Analytics 4 for the games: page views plus a few game events (rooms made and joined, games started and finished).
   No names, room codes or anything typed in a game is sent. If an ad blocker stops this file, the games carry on as normal. */
(function(){
  var ID = "G-R7VRC7HEFL";
  var game = (location.pathname.split("/")[1] || "unknown").replace(/[^a-z0-9-]/gi, "");
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag("js", new Date());
  gtag("config", ID);
  window.gaEvent = function(name, params){
    var p = { game: game };
    for(var k in params || {}) p[k] = params[k];
    gtag("event", name, p);
  };
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + ID;
  document.head.appendChild(s);
})();
