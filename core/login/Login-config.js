var loginPath = IFL.searchForScriptLocation('Login-config');
console.info('Login Module path: ' + loginPath);

Config.loginPath = loginPath
Config.loginScripts = ['LoginService'];

IFL.Login = new IFL.Module(Config.loginPath, Config.loginScripts);
IFL.Modules.push(IFL.Login);


