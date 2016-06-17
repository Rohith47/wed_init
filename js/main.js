/*! Main */

window.onload = function(){
    
    $('body').addClass('loaded').trigger('classChange');
  }



  $(document).ready(function(){
  // show loading till all required image loads

    var loadNotifier = AniJS.getNotifier('pageloader');
    $('body').on('classChange',function(){
     // alert('hi');
     setTimeout(function(){
      loadNotifier.dispatchEvent('complete');
    },1000);
      
    });
    setOffset();
    $(window).on('resize',function(){
      setOffset()
    });
    function setOffset()
    {
      $(window).off('.affix');
      $('#navbar-main').removeData('bs.affix').removeClass('affix affix-top affix-bottom');
      $('#navbar-main').affix({
        offset: {
          top: $('.carousel-container').height()
        }
      });
    }

    $('.carousel').carousel({
        interval : 4000,
        pause: false,
    })
   
    setInterval(function() {
      var timespan = countdown(new Date("07/11/2016"), new Date());
      var div = document.getElementById('time');
      div.innerHTML = "<div><span>Years</span>" + timespan.years + "</div>" + "<div><span>Months</span>" + timespan.months + "</div>" + "<div><span>Days</span>" + timespan.days + "</div>" + "<div><span>Hours</span>" + timespan.hours + "</div>" + "<div><span>Minutes</span>" + timespan.minutes + "</div>" + "<div><span>Seconds</span>" + timespan.seconds + "</div>"
    }, 1000);


/*var animationHelper = AniJS.getHelper();

animationHelper.addDelayFunction = function(e, animationContext){

    setTimeout(function () {
      animationContext.run();
    }, 5000);

}*/

/*$('.navbar-nav li a, .discover-btn a').on('click',function(){
  $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    },1000);
    return false;
  });*/



//new WOW().init();
$('.family-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 5000
});


  

/*--------------------------- Maps Loading ----------------------------*/
  google.maps.event.addDomListener(window, 'load', init);
    function init() { 
      var mainPosition = new google.maps.LatLng(12.9887454, 75.2375256);
      var mapOptions = {
        zoom: 10,
        scrollwheel: false,
        zoomControl: true,
        center: mainPosition // Belthangady
        //styles: [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off","hue": "#FFFFFF"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
        
        
      var contentString =
        '<div class="map-content">'+
        '<h3>Kinyamma Yane Gunavathi Amma Sabha Bhavana, Belthangady, Karnataka</h3>'+

        '</div>'
      
      var image = 'images/marker.png';
      var myLatLng = new google.maps.LatLng(12.989487, 75.2577987);
      var mapMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,        title:  'Kellagutthu Kinyamma Yane Gunavathi Amma Sabha Bhavana'
      });
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      google.maps.event.addListener(mapMarker, 'click', function() {
        infowindow.open(map, mapMarker);
      });   
    }
  })

