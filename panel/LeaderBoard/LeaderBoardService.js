IFL.LeaderBoard.LeaderBoardService = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true,options, _options);
    
    var topPlayerScores = {};
    
    init();
    function init() {
        
    }
    
    function initDefaultOptions() {
        options = {
            serverUrl: Config.panelServerUrl
        }
    }
    
    function getTopPlayers(callback) {
        $.ajax({
            url: options.serverUrl + 'solver/topPlayers?top=10',
            method: 'GET',
            dataType: 'json',
            success: function(playerScores) {
                callback(playerScores);
            },
            error: function() {
                alert('Failed to get top players !!!!');
            }
        });
    }
    
    function getNewTopPlayer(newPlayerScores) {
        var newTopPlayer;
        var newTopPlayers = {};
        for (var i in newPlayerScores) {
            var playerScore = newPlayerScores[i];
            newTopPlayers[playerScore.scheduleId] = playerScore;
            if (!topPlayerScores[playerScore.scheduleId] && !newTopPlayer) {
                newTopPlayer = playerScore;
            }
        }
        
        topPlayerScores = newTopPlayers;
        
        return newTopPlayer;
    }
    
    function resetTops() {
        console.info('resetting leaders board......');
        $.ajax({
            url: options.serverUrl + 'solver/resetTop',
            method: 'GET',success: function() {
                console.info('Leaders board resetted......');
            },
            error: function() {
                alert('Failed to reset leaders board !!!!');
            }
        });
    }
    
    return {
        getTopPlayers: getTopPlayers,
        getNewTopPlayer: getNewTopPlayer,
        resetTops: resetTops
    }
    
}


