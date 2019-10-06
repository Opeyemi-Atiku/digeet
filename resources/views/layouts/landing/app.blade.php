<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Title</title>

	<!-- Favicon -->
	<!--<link rel="icon" type="image/png" href="landingAssets/assets/images/favicon/favicon.png" />-->

	<!-- Bootstrap & Plugins CSS -->
	<link href="landingAssets/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
	<link href="landingAssets/assets/css/font-awesome.min.css" rel="stylesheet" type="text/css">

	<!-- Custom CSS -->
    <link href="landingAssets/assets/css/blue.css" rel="stylesheet" type="text/css">


    <!-- React Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
</head>
<body>

	<!-- ***** Preloader Start ***** -->
	<div class="preloader-wrapper">
		<div class="loader">
			<div class="loader-inner"></div>
		</div>
	</div>
	<!-- ***** Preloader End ***** -->


	<!-- ***** Header Area Start ***** -->
    @include('layouts.landing.inc.header')
    <!-- ***** Header Area End ***** -->

    <!-- Body -->
    @yield('body')
    <!-- Body -->

	<!-- ***** Footer Start ***** -->
	@include('layouts.landing.inc.footer')
	<!-- ***** Footer End ***** -->


	<!-- jQuery -->
    <script src="landingAssets/assets/js/jquery-2.1.0.min.js"></script>
    <!-- jQuery -->

	<!-- Bootstrap -->
	<script src="landingAssets/assets/js/popper.js"></script>
    <script src="landingAssets/assets/js/bootstrap.min.js"></script>
    <!-- Bootstrap -->

	<!-- Plugins -->
	<script src="landingAssets/assets/js/scrollreveal.min.js"></script>
	<script src="landingAssets/assets/js/parallax.min.js"></script>
	<script src="landingAssets/assets/js/waypoints.min.js"></script>
	<script src="landingAssets/assets/js/jquery.counterup.min.js"></script>
    <script src="landingAssets/assets/js/imgfix.min.js"></script>
    <!-- Plugins -->

	<!-- Global Init -->
    <script src="landingAssets/assets/js/custom.js"></script>
    <!--Global Init-->
</body>

</html>
