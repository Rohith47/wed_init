//define(['jquery'], function($) {
(function(){
    var Wedding = function(options) {
        var _settings = $.extend({
            // settings in here
        }, options);

        function _init() {

            setOffset();

            $('.carousel').carousel({
                interval : 4000,
                pause: false,
            });

            $('.nav.navbar-nav li>a').click(function(){
              if($('#navbar').hasClass('in')){
                $('#navbar').removeClass('in')
              }
            });

            $('.family-slider').slick({
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
              arrows:false,
              autoplay: true,
              autoplaySpeed: 5000,
              responsive: [
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
            });

            $('.moment-slider').slick({
              slidesToShow: 4,
              slidesToScroll: 1,
              dots: false,
              arrows:false,
              autoplay: true,
              autoplaySpeed: 2000,
              rows: 2,
              responsive: [
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
            });


            $('.popup_img').magnificPopup({
              type: 'image',
              closeOnContentClick: true,
              mainClass: 'mfp-zoom-in',
              midClick: true,
              callbacks: {
                beforeOpen: function() {
                  $('.moment-slider').slick('slickPause');
                },
                afterClose: function() {
                  $('.moment-slider').slick('slickPlay');
                }
              }
            });

            $(window).on("hashchange", function(){
               scrollBy(0, -50)
            });

            $('body').on('classChange',function(){
              setTimeout(function(){
                AniJS.getNotifier('pageloader').dispatchEvent('complete');
              },1000)
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
            };

            setInterval(function() {
              var timespan = countdown(new Date("07/11/2016"), new Date());
              var div = document.getElementById('time');
              div.innerHTML = "<div><span>Years</span>" + timespan.years + "</div>" + "<div><span>Months</span>" + timespan.months + "</div>" + "<div><span>Days</span>" + timespan.days + "</div>" + "<div><span>Hours</span>" + timespan.hours + "</div>" + "<div><span>Minutes</span>" + timespan.minutes + "</div>" + "<div><span>Seconds</span>" + timespan.seconds + "</div>"
            }, 1000);

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
        }
     
        var publicFunction = {
            // public functions here
        };

        $(document).ready(function() {
            window.onload = function(){    
                $('body').addClass('loaded').trigger('classChange');
            }
            _init();
        });

       

        return publicFunction;
    };

    var module = Wedding();
    window.wedding = module;
    return module;

})();