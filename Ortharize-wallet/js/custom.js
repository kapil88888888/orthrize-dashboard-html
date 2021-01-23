$( document ).ready(function() {
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

    // bar chart js
    var ctx = 'lineChart';
    var lineChart  = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: "February",
                    data: [0,7,4],
                    maxBarThickness: 8,
                    backgroundColor:"#ff8c47"
                },
                {
                    label: "March",
                    data: [8,6,9],
                    maxBarThickness: 8,
                    backgroundColor:"#bc8cee"
                },
                {
                    label: "April",
                    data: [4,8,2],
                    maxBarThickness: 8,
                    backgroundColor:"#6de4ff"
                },
                {
                    label: "May",
                    data: [8,6,9],
                    maxBarThickness: 8,
                    backgroundColor:"#38f292"
                },

                {
                    label: "June",
                    data: [2,4,7],
                    maxBarThickness: 8,
                    backgroundColor:"#38f292"
                }

            ]
        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        display:false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display:false
                    },
                    tick:{
                        display:false
                    }
                }],
            }
        }
    });

    // Doughnut Chart
    var ctx = 'DonughtChart';
    var DonughtChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [10, 20, 30]
            }]
        }
    });

});




