 $(document).on('click', "#menu-toggle", function(e) {
            e.preventDefault();
            //var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);

            $("#toggleIcon").toggleClass("glyphicon glyphicon-save glyphicon glyphicon-open");
            $("#wrapper").toggleClass("toggled");


              if ($("#wrapper").hasClass("toggled")) {
                        $('#sidebar-wrapper').css("margin-left", "-268px");
                    } else {
                        $('#sidebar-wrapper').css("margin-left", "-250px");
                    }

            });