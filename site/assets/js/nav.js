$(document).ready(function () {

            $('#submit').click(function (e) {
                e.preventDefault();

                var name = $("#name").val(),
                    email = $("#email").val(),
                    phone = $("#phone").val(),
                    message = $("#message").val();

                $.ajax({
                    type: "POST",
                    url: 'https://contact.dynamofitnesstx.com/submit',
                    contentType: 'application/x-www-form-urlencoded',
                    data: {
                        'name': name,
                        'email': email,
                        'message': message,
                        'phone': phone,
                    },
                    success: function (res) {
                        $('#contactform').hide();
                        $('#form-response-success').show();
                    },
                    error: function () {
                        $('#form-response-error').hide();
                    }
                });

            });

            $('body').scrollspy({
                target: ".navbar",
                offset: 60
            });

            var scroll = function (event) {

                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {

                    // Prevent default anchor click behavior
                    event.preventDefault();

                    // Store hash
                    var hash = this.hash;

                    // Using jQuery's animate() method to add smooth page scroll
                    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function () {

                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                    });

                } // End if

                $('.navbar-collapse').collapse('hide');

            };
            // Add smooth scrolling on all links inside the navbar
            $(".navbar a").on('click', scroll);
            $(".card a").on('click', scroll);
        });
