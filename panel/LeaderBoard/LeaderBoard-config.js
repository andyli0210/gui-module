var leaderBoardPath = IFL.searchForScriptLocation('LeaderBoard-config');
console.info('Leader Board Module path: ' + leaderBoardPath);

Config.leaderBoardPath = leaderBoardPath;
Config.leaderBoardScripts = ['main','LeaderBoardService','slides/PanelSlideShow'];

IFL.LeaderBoard = new IFL.Module(Config.leaderBoardPath, Config.leaderBoardScripts);
IFL.Modules.push(IFL.LeaderBoard);

Config.theme = 'blue';

Config.panelServerUrl = '/PanelWeb/';


