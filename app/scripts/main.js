/* jshint devel:true */

var jso = new JSO({
    providerID: "uber",
    client_id: "YAgrpKavtUpQU_jXyrZXMny3gLwWTxsF",
    redirect_uri: "http://localhost:9000",
    authorization: "https://login.uber.com/oauth/authorize",
    scopes: { request: ["request"]}
});

//Check oauth params
jso.callback();

$('.uber-button').click(function(e){
    jso.getToken();
});