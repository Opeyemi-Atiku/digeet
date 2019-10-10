<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <!-- Page Title -->
      <title>Title</title>
      <!-- Favicon -->
      <link rel="icon" href="favicon.ico" />
      <!---IcoFont Icon font-->
      <link rel="stylesheet" href="css/icofont.min.css">
      <!-- Bootsrap CSS -->
      <link rel="stylesheet" href="css/bootstrap.min.css">
	    <!-- Animate CSS -->
      <link href="css/animate.min.css" rel="stylesheet">
      <!-- Magnific Popup core CSS -->
      <link rel="stylesheet" href="css/magnific-popup.css">
      <!-- Magnific Popup core CSS -->
      <link rel="stylesheet" href="css/modal-video.min.css">
      <!-- Swiper CSS -->
      <link rel="stylesheet" href="css/swiper.min.css">
      <!-- Theme Style -->
      <link rel="stylesheet" href="css/style.css">
      <!-- Global margin paddings CSS -->
      <link rel="stylesheet" href="css/margin-paddings.css">
      <!-- Animate CSS -->
      <link href="css/animate.min.css" rel="stylesheet">
      <!-- Responsive CSS -->
      <link rel="stylesheet" href="css/responsive.css">
      <link rel="stylesheet" href="css/colors/green.css" id="color-switch">

      <!-- teamplate colors -->
   </head>
   <body data-spy="scroll" data-target="#navbarCodeply" data-offset="70">

      <div id="preloader-wrap">
          <div class="preloader"></div>
      </div>

      <!-- ========== Header Nav Start ========== -->
      @include('layouts.main.inc.header')
      <!-- ========== Header Nav End ========== -->


      @yield('body')

      <!-- Footer Top Start -->
      @include('layouts.main.inc.footer')
      <!-- End footer -->

      <script src="js/app.js"></script>

      <!-- jQuery -->
      <script src="js/jquery-3.2.1.min.js"></script>
      <script src="js/jquery-migrate-3.0.0.min.js"></script>
      <!-- Bootstrap JS -->
      <script src="js/bootstrap.min.js"></script>
      <!-- Animated text -->
      <script src="js/jquery.textillate.js"></script>
      <script src="js/jquery.lettering.js"></script>
      <script src="js/jquery.fittext.js"></script>
      <!-- Magnific Popup core JS -->
      <script src="js/jquery.magnific-popup.min.js"></script>
      <!-- Modal video Popup core JS -->
      <script src="js/modal-video.min.js"></script>
      <!-- Waypoints JS -->
      <script src="js/waypoints.min.js"></script>
      <!-- CounterUp JS -->
      <script src="js/jquery.counterup.min.js"></script>
      <!-- Isotop JS -->
      <script src="js/isotope.pkgd.min.js"></script>
      <!-- AjaxChimp js -->
      <script src="js/jquery.ajaxchimp.min.js"></script>
      <!-- Swiper JS -->
      <script src="js/swiper.min.js"></script>
      <!-- Custom -->
      <script src="js/custom.js"></script>
      <!-- Wow -->
      <script src="js/wow.min.js" type="text/javascript"></script>

        <script>
            $(function(){
                $('body').removeClass('modal-open');
            });
        </script>


    </body>

</html>
