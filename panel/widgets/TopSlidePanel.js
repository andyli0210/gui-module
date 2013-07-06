IFL.Panel.TopSlidePanel = function(_options, isScale) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var slidePanel;
    var playerTable;
    
    init();
    function init() {
        slidePanel = new IFL.Widget.VerticalSlidePanel(options);
        playerTable = new IFL.Widget.DomainListTable({
            player: 'Player',
            score: 'Schedule Cost'
        });
        
        slidePanel.setContent(playerTable.getContainer());
    }
    
    function initDefaultOptions() {
        var scale = 1;
        if (isScale) {
            scale = Config.screenRatio;
        }
        options = {
            width: 350 * scale,
            height: 250 * scale,
            buttonText: 'Top 5',
            titleSize: 30 * scale,
            contentSize: 28 * scale,
            left: $(document).width()/2 - 100
        }
    }
    
    function getContainer() {
        return slidePanel.getContainer();
    }
    
    function setPlayerScores(playerScores) {
        var tableItems = [];
        for (var i=0; i<5; i++) {
            if (i < playerScores.length) {
                var player = playerScores[i];
                player.id = player.scheduleId;
                player.score = '$' + player.score;
                tableItems.push(player);
            }
        }
        //        for (var i in playerScores) {
        //            var player = playerScores[i];
        //            player.id = player.scheduleId;
        //            player.score = '$' + player.score;
        //        }
        
        playerTable.setItems(tableItems);
        playerTable.refresh();
    }
    
    return {
        getContainer: getContainer,
        setPlayerScores: setPlayerScores
    }
}


