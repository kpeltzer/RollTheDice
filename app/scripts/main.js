/* jshint devel:true */

var rtd = (function() {

    var tokenObject, 
        accessToken,
        selectedVertical,
        location = {
            lat: 0,
            lng: 0
        },
        $uberPanelBody = $('.uber-panel-body'),
        $uberConnectedCheck = $('.uber-check'),
        $eatOrDrinkCheck = $('.eat-or-drink-check'),
        $uberButton = $('.uber-button > img'),
        $addressButton = $('.address-button'),
        $verticalButton = $('.vertical-button'),
        $rollButton = $('.roll-button'),

        //Variable to hold state of steps
        formState = {
            uber: false,
            address: false,
            vertical: false
        },

        jso = new JSO({
            providerID: "uber",
            client_id: "YAgrpKavtUpQU_jXyrZXMny3gLwWTxsF",
            redirect_uri: "http://localhost:9000",
            authorization: "https://login.uber.com/oauth/authorize",
            scopes: { request: ["request"]}
        }),

        init = function() {
            //Check oauth params
            jso.callback();

            //Check if token exists
            tokenObject = jso.checkToken();

            //Check if Uber token already exists
            if (tokenObject) {
                accessToken = tokenObject.access_token;
                $uberConnectedCheck.show();
                state.uber = true;
                checkIfRequestReady();
            }
            else {
                $uberPanelBody.show();
            }
        }

        checkIfRequestReady = function() {
            if (
                state.uber &&
                state.address &&
                state.vertical
            ) {
                $rollButton.show();
            }
        },

        convertCoordinatesToAddress = function(lat, lng, cb) {
            $.ajax({
                url: 'http://maps.googleapis.com/maps/api/geocode/json',
                data: {
                    'latlng': lat + ',' + lng
                },
                dataType: 'json'
            })
            .done(function(data) {
                if (data.results && data.results.length && typeof cb === 'function') {
                    formState.address = true;
                    cb(data.results[0].formatted_address);
                    checkIfRequestReady();

                }
            })
        }

        requestSolr = function(vertical) {
            var promise = $.ajax({
                
            })
        };

    

    //Click handlers
    $uberButton.click(function(e){
        jso.getToken();
    });

    $addressButton.click(function(e) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {

                if (position) {
                    location.lat = position.coords.latitude;
                    location.lng = position.coords.longitude;

                    //Convert coordinates to lat lng
                    convertCoordinatesToAddress(location.lat, location.lng, function(address) {
                        $addressButton.hide();
                        $('.address-text').text(address);
                        $('.address-check .check').show();
                    })
                }
            });
        }
    });

    $verticalButton.click(function(e) {
        selectedVertical = $(this).data('vertical'));
    })

    $rollButton.click(function(e) {
        $rollButton.button('loading');

        if (selectedVertical) {

        }
    });

    init();


})();


