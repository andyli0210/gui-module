IFL.Login.LoginService = function(_options) {
    var options = {
        contextUri: Config.uriContext || '/core/security/resources/context',
        loginHandler: function(result) {}
    }
    
    $.extend(true, options, _options);
    
    init();
    function init() {
        connectContext();
    }
    
    function connectContext() {
        $.ajax({
            url: options.contextUri,
            type: 'GET',
            accept: 'xml',
            success: function(contextXml) {
                var accountId = $(contextXml).find('account > id').text();
                
                console.info('Login succeed, user account Id: ' + accountId);
                
                if (!accountId) {
                    alert('Can not find account for user, login failed !');
                    return;
                }
                
                var loginResult = {
                    accountId: accountId
                }
                
                options.loginHandler(loginResult);
            },
            error: function() {
                alert('login failed !');
            }
        })
    }
}


