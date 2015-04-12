/* jshint devel:true */

var rtd = (function() {

    var tokenObject, 
        accessToken,
        selectedVertical,
        $uberPanelBody = $('.uber-panel-body'),
        $uberConnectedCheck = $('.uber-check'),
        $eatOrDrinkCheck = $('.eat-or-drink-check'),
        $uberButton = $('.uber-button > img'),
        $rollButton = $('.roll-button'),

        //Variable to hold state
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

        checkIfRequestReady = function() {
            if (
                state.uber &&
                state.address &&
                state.vertical
            ) {
                $rollButton.show();
            }
        },

        requestSolr = function(vertical) {
            var promise = $.ajax({
                url: 'https'
            })
        };

    //Check oauth params
    jso.callback();

    //Check if token exists
    tokenObject = jso.checkToken();

    if (tokenObject) {
        accessToken = tokenObject.access_token;
        $uberConnectedCheck.show();
        state.uber = true;
        checkIfRequestReady();
    }
    else {
        $uberPanelBody.show();
    }

    //Click handlers
    $uberButton.click(function(e){
        jso.getToken();
    });

    $rollButton.click(function(e) {
        $rollButton.button('loading');
    });


})();


