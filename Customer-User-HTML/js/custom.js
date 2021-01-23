$( document ).ready(function() {

    // $('#demo-input').colorpicker();
    // Sticky Header

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50){  
            $('header').addClass("sticky");
        }
        else{
            $('header').removeClass("sticky");
        }
    });

    // Select Traveller Toggle
    $("#select-traveller-toggle").click(function() 
    {
        $('.traveller-select-menu').toggleClass("open");
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

//     $('.dashboard-sidebar.collapseit').hover(
//         function(){ $(this).toggleClass('collapseit') }
//  )

});




