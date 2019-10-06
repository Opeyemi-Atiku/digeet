@extends('layouts.dashboard.app')

@section('body')
<div class="page-inner">
        <!-- Main Wrapper -->
        <div id="main-wrapper">
           <!--================================-->
           <!-- Breadcrumb Start -->
           <!--================================-->
           <div class="pageheader pd-t-25 pd-b-35">
              <div class="pd-t-5 pd-b-5">
                 <h1 class="pd-0 mg-0 tx-20">Lorem ipsum</h1>
              </div>
              <div class="breadcrumb pd-0 mg-0">
                 <a class="breadcrumb-item" href="/"><i class="icon ion-ios-home-outline"></i> Home</a>
                 <a class="breadcrumb-item" href="#">Dashboard</a>
              </div>
           </div>
           <!--/ Breadcrumb End -->
           <!--================================-->
           <!-- Count Card Start -->
           <!--================================-->
           <div class="row row-xs clearfix">
              <div class="col-sm-6 col-xl-3">
                 <div class="card mg-b-20">
                    <div class="card-body pd-y-0">
                       <div class="custom-fieldset mb-4">
                          <div class="clearfix">
                             <label>Today Orders</label>
                          </div>
                          <div class="d-flex align-items-center text-dark">
                             <div class="wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-warning">
                                <i class="icon-screen-desktop tx-warning tx-20"></i>
                             </div>
                             <div>
                                <h2 class="tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark">N<span class="counter">5,300</span><small class="tx-15">.50</small></h2>
                                <div class="d-flex align-items-center tx-gray-500"><span class="text-success mr-2 d-flex align-items-center"><i class="ion-android-arrow-up mr-1"></i>+451</span>avg. sales</div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div class="col-sm-6 col-xl-3">
                 <div class="card mg-b-20">
                    <div class="card-body pd-y-0">
                       <div class="custom-fieldset mb-4">
                          <div class="clearfix">
                             <label>Today Earnings</label>
                          </div>
                          <div class="d-flex align-items-center text-dark">
                             <div class="wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-success">
                                <i class="icon-diamond tx-success tx-20"></i>
                             </div>
                             <div>
                                <h2 class="tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark">N<span class="counter">1,500</span><small class="tx-15">.50</small></h2>
                                <div class="d-flex align-items-center tx-gray-500"><span class="text-danger mr-2 d-flex align-items-center"><i class="ion-android-arrow-down mr-1"></i>-310</span>avg. sales</div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div class="col-sm-6 col-xl-3">
                 <div class="card mg-b-20">
                    <div class="card-body pd-y-0">
                       <div class="custom-fieldset mb-4">
                          <div class="clearfix">
                             <label>Product Sold</label>
                          </div>
                          <div class="d-flex align-items-center text-dark">
                             <div class="wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-primary">
                                <i class="icon-handbag tx-primary tx-20"></i>
                             </div>
                             <div>
                                <h2 class="tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark">N<span class="counter">4,900</span><small class="tx-15">.50</small></h2>
                                <div class="d-flex align-items-center tx-gray-500"><span class="text-success mr-2 d-flex align-items-center"><i class="ion-android-arrow-up mr-1"></i>+350</span>avg. sales</div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div class="col-sm-6 col-xl-3">
                 <div class="card mg-b-20">
                    <div class="card-body pd-y-0">
                       <div class="custom-fieldset mb-4">
                          <div class="clearfix">
                             <label>Total Earnings</label>
                          </div>
                          <div class="d-flex align-items-center text-dark">
                             <div class="wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-danger">
                                <i class="icon-speedometer tx-danger tx-20"></i>
                             </div>
                             <div>
                                <h2 class="tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark">N<span class="counter">9,900</span><small class="tx-15">.50</small></h2>
                                <div class="d-flex align-items-center tx-gray-500"><span class="text-danger mr-2 d-flex align-items-center"><i class="ion-android-arrow-down mr-1"></i>+130</span>avg. sales</div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <!--/ Count Card End -->
           <div class="row row-xs clearfix">
              <!--================================-->
              <!--  Annual Report Start-->
              <!--================================-->
              <div class="col-lg-12 col-xl-8 col-12">
                 <div class="card mg-b-20">
                    <div class="card-header">
                       <h4 class="card-header-title">
                          Annual Reports
                       </h4>
                       <div class="card-header-btn">
                          <a  href="#" data-toggle="collapse" class="btn card-collapse" data-target="#annualReports" aria-expanded="true"><i class="ion-ios-arrow-down"></i></a>
                          <a href="#" data-toggle="refresh" class="btn card-refresh"><i class="ion-android-refresh"></i></a>
                          <a href="#" data-toggle="expand" class="btn card-expand"><i class="ion-android-expand"></i></a>
                          <a href="#" data-toggle="remove" class="btn card-remove"><i class="ion-ios-trash-outline"></i></a>
                       </div>
                    </div>
                    <div class="collapse show" id="annualReports">
                       <div class="card-body pd-t-0 pd-b-20">
                          <div class="row clearfix">
                             <div class="col-lg-4 col-md-4 col-sm-12 mg-y-20">
                                <span class="tx-uppercase tx-10 mg-b-10">Sales Report</span>
                                <h3 class="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-normal tx-rubik tx-dark">N<span class="counter">580,350</span><small class="tx-15">.50</small></h3>
                                <div class="tx-11 d-flex tx-gray-500"><span class="text-success mr-2 d-flex align-items-center"><i class="ion-android-arrow-up mr-1"></i>+535%</span>avg. sales per year</div>
                                <p class="mg-t-10 mg-b-0 tx-12 tx-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. <a href="#">Learn More</a></p>
                             </div>
                             <div class="col-lg-4 col-md-4 col-sm-12 mg-y-20">
                                <span class="tx-uppercase tx-10 mg-b-10">Annual Revenue</span>
                                <h3 class="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-normal tx-rubik tx-dark">N<span class="counter">980,830</span><small class="tx-15">.50</small></h3>
                                <div class="tx-11 d-flex tx-gray-500"><span class="text-success mr-2 d-flex align-items-center"><i class="ion-android-arrow-up mr-1"></i>+230%</span>avg. sales per year</div>
                                <p class="mg-t-10 mg-b-0 tx-12 tx-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. <a href="#">Learn More</a></p>
                             </div>
                             <div class="col-lg-4 col-md-4 col-sm-12 mg-y-20">
                                <span class="tx-uppercase tx-10 mg-b-10">Total Profit</span>
                                <h3 class="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-normal tx-rubik tx-dark">N<span class="counter">730,360</span><small class="tx-15">.50</small></h3>
                                <div class="tx-11 d-flex tx-gray-500"><span class="text-danger mr-2 d-flex align-items-center"><i class="ion-android-arrow-down mr-1"></i>-135%</span>avg. sales per year</div>
                                <p class="mg-t-10 mg-b-0 tx-12 tx-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. <a href="#">Learn More</a></p>
                             </div>
                          </div>
                          <div class="d-block clearfix">
                             <canvas id="annualReport"></canvas>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <!-- / Annual Report End -->
              <!--================================-->
              <!-- Sales+Order+Revenue  Start -->
              <!--================================-->
              <div class="col-lg-12 col-xl-4">
                 <div class="row">
                    <div class="col-lg-6 col-xl-12">
                       <div class="card mg-b-20">
                          <div class="card-body">
                             <div id="sales_slider" class="carousel slide" data-ride="carousel" data-interval="4000">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                   <span class="tx-10 tx-uppercase tx-gray-500">
                                   Sales
                                   </span>
                                   <div class="btn-group border-0">
                                      <div class="sw-carousel-slider-control">
                                         <a class="tx-dark carousel-control-prev" href="#sales_slider" data-slide="prev">
                                         <i class="fa fa-angle-left"></i>
                                         </a>
                                         <a class="tx-dark carousel-control-next" href="#sales_slider" data-slide="next">
                                         <i class="fa fa-angle-right"></i>
                                         </a>
                                      </div>
                                   </div>
                                </div>
                                <div class="carousel-inner">
                                   <div class="carousel-item active">
                                      <div class="d-flex pd-b-20">
                                         <div class="mg-t-15">
                                            <h3 class="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Sales Report</h3>
                                            <p class="tx-10 tx-normal mb-0 tx-gray-500">(<span class="text-success tx-10"><i class="ion-android-arrow-up mr-1"></i>+110</span>) higher than previous day</p>
                                         </div>
                                         <div class="mg-l-auto tx-right">
                                            <span class="tx-10 tx-uppercase mg-b-0">Earning</span>
                                            <h5 class="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">N2,562</h5>
                                         </div>
                                      </div>
                                      <div class="clearfix">
                                         <div id="salesSpark1"></div>
                                      </div>
                                   </div>
                                   <div class="carousel-item ">
                                      <div class="d-flex pd-b-20">
                                         <div class="mg-t-15">
                                            <h3 class="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Annual Revenue</h3>
                                            <p class="tx-10 tx-normal mb-0 tx-gray-500">(<span class="text-success tx-10"><i class="ion-android-arrow-up mr-1"></i>+150</span>) higher than previous week</p>
                                         </div>
                                         <div class="mg-l-auto tx-right">
                                            <span class="tx-10 tx-uppercase mg-b-0">Earning</span>
                                            <h5 class="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">N4,562</h5>
                                         </div>
                                      </div>
                                      <div class="clearfix">
                                         <div id="salesSpark2"></div>
                                      </div>
                                   </div>
                                   <div class="carousel-item">
                                      <div class="d-flex pd-b-20">
                                         <div class="mg-t-15">
                                            <h3 class="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Total Profit</h3>
                                            <p class="tx-10 tx-normal mb-0 tx-gray-500">(<span class="text-success tx-10"><i class="ion-android-arrow-up mr-1"></i>+170</span>) higher than previous month</p>
                                         </div>
                                         <div class="mg-l-auto tx-right">
                                            <span class="tx-10 tx-uppercase mg-b-0">Earning</span>
                                            <h5 class="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">N5,562</h5>
                                         </div>
                                      </div>
                                      <div class="clearfix">
                                         <div id="salesSpark3"></div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div class="col-lg-6 col-xl-12">
                       <div class="card mg-b-20">
                          <div class="card-body">
                             <div id="order_slider" class="carousel slide" data-ride="carousel" data-interval="5000">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                   <span class="tx-10 tx-uppercase tx-gray-500">
                                   Order
                                   </span>
                                   <div class="btn-group border-0">
                                      <div class="sw-carousel-slider-control">
                                         <a class="tx-dark carousel-control-prev" href="#order_slider" data-slide="prev">
                                         <i class="fa fa-angle-left"></i>
                                         </a>
                                         <a class="tx-dark carousel-control-next" href="#order_slider" data-slide="next">
                                         <i class="fa fa-angle-right"></i>
                                         </a>
                                      </div>
                                   </div>
                                </div>
                                <div class="carousel-inner">
                                   <div class="carousel-item active">
                                      <div class="d-flex pd-b-20">
                                         <div class="mg-t-15">
                                            <h3 class="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Sales Report</h3>
                                            <p class="tx-10 tx-normal mb-0 tx-gray-500">(<span class="text-success tx-10"><i class="ion-android-arrow-up mr-1"></i>+180</span>) higher than previous day</p>
                                         </div>
                                         <div class="mg-l-auto tx-right">
                                            <span class="tx-10 tx-uppercase mg-b-0">Earning</span>
                                            <h5 class="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">N6,562</h5>
                                         </div>
                                      </div>
                                      <div class="clearfix">
                                         <div id="orderSpark1"></div>
                                      </div>
                                   </div>
                                   <div class="carousel-item ">
                                      <div class="d-flex pd-b-20">
                                         <div class="mg-t-15">
                                            <h3 class="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Annual Revenue</h3>
                                            <p class="tx-10 tx-normal mb-0 tx-gray-500">(<span class="text-success tx-10"><i class="ion-android-arrow-up mr-1"></i>+140</span>) higher than previous week</p>
                                         </div>
                                         <div class="mg-l-auto tx-right">
                                            <span class="tx-10 tx-uppercase mg-b-0">Earning</span>
                                            <h5 class="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">N7,562</h5>
                                         </div>
                                      </div>
                                      <div class="clearfix">
                                         <div id="orderSpark2"></div>
                                      </div>
                                   </div>
                                   <div class="carousel-item">
                                      <div class="d-flex pd-b-20">
                                         <div class="mg-t-15">
                                            <h3 class="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Total Profit</h3>
                                            <p class="tx-10 tx-normal mb-0 tx-gray-500">(<span class="text-success tx-10"><i class="ion-android-arrow-up mr-1"></i>+120</span>) higher than previous month</p>
                                         </div>
                                         <div class="mg-l-auto tx-right">
                                            <span class="tx-10 tx-uppercase mg-b-0">Earning</span>
                                            <h5 class="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">N8,562</h5>
                                         </div>
                                      </div>
                                      <div class="clearfix">
                                         <div id="orderSpark3"></div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div class="col-lg-6 col-xl-12 hidden-md">
                       <div class="card mg-b-20">
                          <div class="card-body">
                             <div id="revenue_slider" class="carousel slide" data-ride="carousel" data-interval="6000">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                   <span class="tx-10 tx-uppercase tx-gray-500">
                                   Revenue
                                   </span>
                                   <div class="btn-group border-0">
                                      <div class="sw-carousel-slider-control">
                                         <a class="tx-dark carousel-control-prev" href="#revenue_slider" data-slide="prev">
                                         <i class="fa fa-angle-left"></i>
                                         </a>
                                         <a class="tx-dark carousel-control-next" href="#revenue_slider" data-slide="next">
                                         <i class="fa fa-angle-right"></i>
                                         </a>
                                      </div>
                                   </div>
                                </div>
                                <div class="carousel-inner">
                                   <div class="carousel-item active">
                                      <div class="d-flex pd-b-20">
                                         <div class="mg-t-15">
                                            <h3 class="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Sales Report</h3>
                                            <p class="tx-10 tx-normal mb-0 tx-gray-500">(<span class="text-success tx-10"><i class="ion-android-arrow-up mr-1"></i>+110</span>) higher than previous day</p>
                                         </div>
                                         <div class="mg-l-auto tx-right">
                                            <span class="tx-10 tx-uppercase mg-b-0">Earning</span>
                                            <h5 class="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">N9,562</h5>
                                         </div>
                                      </div>
                                      <div class="clearfix">
                                         <div id="revenueSpark1"></div>
                                      </div>
                                   </div>
                                   <div class="carousel-item">
                                      <div class="d-flex pd-b-20">
                                         <div class="mg-t-15">
                                            <h3 class="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Annual Revenue</h3>
                                            <p class="tx-10 tx-normal mb-0 tx-gray-500">(<span class="text-success tx-10"><i class="ion-android-arrow-up mr-1"></i>+120</span>) higher than previous week</p>
                                         </div>
                                         <div class="mg-l-auto tx-right">
                                            <span class="tx-10 tx-uppercase mg-b-0">Earning</span>
                                            <h5 class="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">N7,562</h5>
                                         </div>
                                      </div>
                                      <div class="clearfix">
                                         <div id="revenueSpark2"></div>
                                      </div>
                                   </div>
                                   <div class="carousel-item">
                                      <div class="d-flex pd-b-20">
                                         <div class="mg-t-15">
                                            <h3 class="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Total Profit</h3>
                                            <p class="tx-10 tx-normal mb-0 tx-gray-500">(<span class="text-success tx-10"><i class="ion-android-arrow-up mr-1"></i>+150</span>) higher than previous month</p>
                                         </div>
                                         <div class="mg-l-auto tx-right">
                                            <span class="tx-10 tx-uppercase tx-spacing-1 tx-medium">Earning</span>
                                            <h5 class="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">N5,562</h5>
                                         </div>
                                      </div>
                                      <div class="clearfix">
                                         <div id="revenueSpark3"></div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        <!--/ Main Wrapper End -->
     </div>
@endsection
