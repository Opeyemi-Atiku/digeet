<!DOCTYPE html>
<html lang="eng">

<head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="">
      <meta name="keyword" content="">
      <meta name="author"  content=""/>
      <!-- Page Title -->
      <title>Dashboard</title>
      <!-- Main CSS -->
      <link type="text/css" rel="stylesheet" href="dashboardAssets/assets/plugins/bootstrap/css/bootstrap.min.css"/>
      <link type="text/css" rel="stylesheet" href="dashboardAssets/assets/plugins/font-awesome/css/font-awesome.min.css"/>
      <link type="text/css" rel="stylesheet" href="dashboardAssets/assets/plugins/flag-icon/flag-icon.min.css"/>
      <link type="text/css" rel="stylesheet" href="dashboardAssets/assets/plugins/simple-line-icons/css/simple-line-icons.css">
      <link type="text/css" rel="stylesheet" href="dashboardAssets/assets/plugins/ionicons/css/ionicons.css">
      <link type="text/css" rel="stylesheet" href="dashboardAssets/assets/plugins/toastr/toastr.min.css">
      <link type="text/css" rel="stylesheet" href="dashboardAssets/assets/plugins/chartist/chartist.css">
      <link type="text/css" rel="stylesheet" href="dashboardAssets/assets/plugins/apex-chart/apexcharts.css">
      <link type="text/css" rel="stylesheet" href="dashboardAssets/assets/css/app.min.css"/>
      <link type="text/css" rel="stylesheet" href="dashboardAssets/assets/css/style.min.css"/>

      <!-- Favicon -->
      <!--<link rel="icon" href="dashboardAssets/assets/images/favicon.ico" type="image/x-icon">-->
   </head>
   <body>
      <!-- Page Container Start -->
      <div class="page-container">


         <!-- Page Sidebar Start -->
         @include('layouts.dashboard.inc.pageSidebarFooterbar')
         <!--/ Page Sidebar End -->


         <!-- Page Content Start -->
         <div class="page-content">


            <!-- Page Header Start -->
            @include('layouts.dashboard.inc.pageHeader')
            <!--/ Page Header End -->


            <!-- Page Inner Start -->
            @yield('body')
            <!-- Page Inner End -->


            <!--/ Page Footer End -->
            @include('layouts.dashboard.inc.pageFooter')
            <!--/ Page Footer End -->

         </div>
         <!--/ Page Content End -->
      </div>

      <!--Go Up-->
      <a href="#" data-click="scroll-top" class="btn-scroll-top fade"><i class="fa fa-arrow-up"></i></a>
      <!--Go Up-->



      <script src="dashboardAssets/assets/plugins/jquery/jquery.min.js"></script>
      <script src="dashboardAssets/assets/plugins/jquery-ui/jquery-ui.js"></script>
      <script src="dashboardAssets/assets/plugins/popper/popper.js"></script>
      <script src="dashboardAssets/assets/plugins/feather-icon/feather.min.js"></script>
      <script src="dashboardAssets/assets/plugins/bootstrap/js/bootstrap.min.js"></script>
      <script src="dashboardAssets/assets/plugins/pace/pace.min.js"></script>
      <script src="dashboardAssets/assets/plugins/toastr/toastr.min.js"></script>
      <script src="dashboardAssets/assets/plugins/countup/counterup.min.js"></script>
      <script src="dashboardAssets/assets/plugins/waypoints/waypoints.min.js"></script>
      <script src="dashboardAssets/assets/plugins/chartjs/chartjs.js"></script>
      <script src="dashboardAssets/assets/plugins/apex-chart/apexcharts.min.js"></script>
      <script src="dashboardAssets/assets/plugins/apex-chart/irregular-data-series.js"></script>
      <script src="dashboardAssets/assets/plugins/simpler-sidebar/jquery.simpler-sidebar.min.js"></script>
      <script src="dashboardAssets/assets/js/jquery.slimscroll.min.js"></script>
      <script src="dashboardAssets/assets/js/highlight.min.js"></script>
      <script src="dashboardAssets/assets/js/app.js"></script>
      <script src="dashboardAssets/assets/js/custom.js"></script>
   </body>

</html>
