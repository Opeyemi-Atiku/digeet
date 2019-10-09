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
      <link rel="stylesheet" href="_assets/css/icofont.min.css">
      <!-- Bootsrap CSS -->
      <link rel="stylesheet" href="_assets/css/bootstrap.min.css">
	    <!-- Animate CSS -->
      <link href="_assets/css/animate.min.css" rel="stylesheet">
      <!-- Magnific Popup core CSS -->
      <link rel="stylesheet" href="_assets/css/magnific-popup.css">
      <!-- Magnific Popup core CSS -->
      <link rel="stylesheet" href="_assets/css/modal-video.min.css">
      <!-- Swiper CSS -->
      <link rel="stylesheet" href="_assets/css/swiper.min.css">
      <!-- Theme Style -->
      <link rel="stylesheet" href="_assets/css/style.css">
      <!-- Global margin paddings CSS -->
      <link rel="stylesheet" href="_assets/css/margin-paddings.css">
      <!-- Animate CSS -->
      <link href="_assets/css/animate.min.css" rel="stylesheet">
      <!-- Responsive CSS -->
      <link rel="stylesheet" href="_assets/css/responsive.css">
      <link rel="stylesheet" href="_assets/css/colors/green.css" id="color-switch">
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

      <!-- jQuery -->
      <script src="_assets/js/jquery-3.2.1.min.js"></script>
      <script src="_assets/js/jquery-migrate-3.0.0.min.js"></script>
      <!-- Bootstrap JS -->
      <script src="_assets/js/bootstrap.min.js"></script>
      <!-- Animated text -->
      <script src="_assets/js/jquery.textillate.js"></script>
      <script src="_assets/js/jquery.lettering.js"></script>
      <script src="_assets/js/jquery.fittext.js"></script>
      <!-- Magnific Popup core JS -->
      <script src="_assets/js/jquery.magnific-popup.min.js"></script>
      <!-- Modal video Popup core JS -->
      <script src="_assets/js/modal-video.min.js"></script>
      <!-- Waypoints JS -->
      <script src="_assets/js/waypoints.min.js"></script>
      <!-- CounterUp JS -->
      <script src="_assets/js/jquery.counterup.min.js"></script>
      <!-- Isotop JS -->
      <script src="_assets/js/isotope.pkgd.min.js"></script>
      <!-- AjaxChimp js -->
      <script src="_assets/js/jquery.ajaxchimp.min.js"></script>
      <!-- Swiper JS -->
      <script src="_assets/js/swiper.min.js"></script>
      <!-- Custom -->
      <script src="_assets/js/custom.js"></script>
      <!-- Wow -->
      <script src="_assets/js/wow.min.js" type="text/javascript"></script>


   </body>

</html>
