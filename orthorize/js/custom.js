$( document ).ready(function() {

    var outerHeight = $('.flight-round-trip-sticky-bottom').outerHeight();
    console.log(outerHeight);

    $(function(){
        var sw = $(".result-container");
        var hw = $(".flight-round-trip-sticky-bottom"); 
        sw.css("margin-bottom", hw.outerHeight());
    });

    $(function(){
        var sw = $(".dashboard-container");
        var hw = $(".rail-round-trip-sticky-bottom"); 
        sw.css("margin-bottom", hw.outerHeight());
    });

    // get window width

    // const parentWidth = $('.flight-result-wrapper').innerWidth();
    // $(".flight-detail-tab-list").innerWidth(parentWidth);

    // Sticky Header

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50){  
            $('header').addClass("sticky");
        }
        else{
            $('header').removeClass("sticky");
        }
    });

    // Toggle Ticket Price 

    $(".toggle-ticket-price").click(function() 
    {
        $(this).toggleClass('toggle-price');
        $('.ticket_price_detail_wrapper_single').toggle("slow");
    });

    // Select Traveller Toggle
    $("#select-traveller-toggle").click(function() 
    {
        $('.traveller-select-menu').toggleClass("open");
    });

    // inbound outbound wrapper toggle
    

    $(function() {
        $('#in-out-container .in-out-collapse-wrapper').on('click', function() {
           $(this).siblings().removeClass('open').end().addClass('open');
        });
    });

    // trip section toggle

    $(function() {
        $('.trip_detail_header').on('click', function() {
           $(this).siblings().removeClass('open').end().addClass('open');
        });
    });


    // Close Traveller Toggle
    $("a.close").click(function() 
    {
        $('.traveller-select-menu').removeClass("open");
    });

    // Filter toggle on mobile

    $(".filter-toggle").click(function() 
    {
        $('.flight-filter-wrapper').toggleClass("toggle");
    });
    
    // tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
      
      $('input[type=text]').tooltip({
        placement: "top",
        trigger: "hover"
   });  
    // Sidebar toggle
    $(".toggle-sidebar").click(function() 
    {
        $('.dashboard-topbar').toggleClass("sidebar_shift");
        $(".dashboard-sidebar").toggleClass("collapseit");
        $("#main-content").toggleClass("sidebar_shift");
    });



    // Heading Toggle
    $("#toggle-heading").click(function()
    {
        $(".toggle-content").toggle("slow");
    });

    $(".sidebar-dropdown > a").click(function() 
    {
      $(".sidebar-dropdown").toggleClass('active');
    });


    // Font Awesome Iocn Change
    $("#ReturnFareListingCollapse li a").click(function()
    {
        $(this).toggleClass("change");
    });

    // toggle train detail js
    $(".show-hide-train-detail").click(function() 
    {
        $('#tain-detail').toggleClass("d-none");
    });




});




