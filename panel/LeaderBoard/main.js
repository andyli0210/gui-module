function AppStarter() {
    var leaderBoardPanel;
    var instructionPanel;
    var projectSlidePanel;
    
    var leaderBoardContainer;
    var leaderBoardService;
    var leaderBoardTable;
    var slideShowPanel;
    var slideShowService;
    
    init();
    function init() {
        initKeyEvents();
        
        initLayout();
        initLeaderBoardTable();
        initLeaderBoardService();
        
        leaderBoardService.getTopPlayers(refreshLeaderBoard);
        
        //showNewPlayerPopup('John Smith');
        pollTopPlayers(3000);
        
        initSlideShowPanel();
    }
    
    function initLayout() {
        leaderBoardContainer = $('<div/>').css({
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }).appendTo(document.body);
        
        initBanner();
        
        leaderBoardPanel = $('<div/>').css({
            position: 'absolute',
            top: 93,
            bottom: 0,
            right: 0,
            width: '50%',
            padding: 5,
            textAlign: 'center'
        });
        
        //        leaderBoardPanel.mousedown(function(event) {
        //            switch (event.which) {
        //                case 1:
        //                    alert('Left mouse button pressed');
        //                    break;
        //                case 2:
        //                    alert('Middle mouse button pressed');
        //                    break;
        //                case 3:
        //                    alert('Right mouse button pressed');
        //                    break;
        //                default:
        //                    alert('You have a strange mouse');
        //            }
        //        });
        
        //$('table',leaderBoardPanel).addClass('ui-widget ui-widget-content');
        
        instructionPanel = $('<div/>').css({
            position: 'absolute',
            top: 93,
            bottom: 0,
            left: 0,
            width: '48%',
            padding: 5
        });
        
        initInstructions();
        
        projectSlidePanel = $('<div/>').css({
            position: 'absolute',
            top: 93,
            bottom: 0,
            left: 0,
            width: '100%'
        });
        
        $(leaderBoardContainer).append(leaderBoardPanel).append(instructionPanel);
        
        $('<div id="qtip-blanket">').css({
            position: 'absolute',
            top: $(document).scrollTop(), // Use document scrollTop so it's on-screen even if the window is scrolled
            left: 0,
            height: $(document).height(), // Span the full document height...
            width: '100%', // ...and full width

            opacity: 0.7, // Make it slightly transparent
            backgroundColor: 'black',
            zIndex: 5000  // Make sure the zIndex is below 6000 to keep it below tooltips!
        }).appendTo(document.body) // Append to the document body
        .hide(); // Hide it initially
    }
    
    function initLeaderBoardTable() {
        leaderBoardTable = new IFL.Widget.DomainListTable({
            num: 'No.',
            player: 'Player',
            score: 'Schedule Cost'
        });
        
        var titleBar = $('<div/>').append('Leaders Board').addClass('ui-widget-header ui-state-default ui-corner-top').css({
            textAlign: 'center',
            padding: 5,
            fontSize: '1.2em'
        });
        
        leaderBoardTable.getContainer().css({
            height: leaderBoardPanel.height()/2,
            fontSize: '1.2em'
        });
        
        leaderBoardPanel.append(titleBar).append(leaderBoardTable.getContainer());
        
        leaderBoardTable.setItems({
            play1: {
                id: 'player1',
                player: 'Player 1',
                score: 100
            }
        });
        
        leaderBoardTable.getContainer().addClass('ui-widget ui-widget-content');
        
        leaderBoardTable.refresh();
        
        initGoInstruction();
    }
    
    function initLeaderBoardService() {
        leaderBoardService = new IFL.LeaderBoard.LeaderBoardService();
    }
    
    function initSlideShowPanel() {
        slideShowPanel = $('<div/>').css({
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        });
        
        var panelSlideService = new IFL.LeaderBoard.SlideShowService();
        slideShowPanel.append(panelSlideService.getContainer());
        slideShowService = panelSlideService.getService();
        
        slideShowPanel.hide();
        slideShowPanel.appendTo(document.body);
    }
    
    function refreshLeaderBoard(playerScores) {
        var tableItems = [];
        for (var i=0; i < 10; i++) {
            
            var player = {};
            if (i < playerScores.length) {
                player = playerScores[i];
                player.id = player.scheduleId;
                player.score = '$' + player.scoreString;
            } else {
                player.id = 'player' + i;
                player.score = '';
            }
            
            player.num = i+1;
            tableItems.push(player);
        }
        
        leaderBoardTable.setItems(tableItems);
        leaderBoardTable.refresh();
        
        //show new top player popup if there is new top player
        var newPlayer = leaderBoardService.getNewTopPlayer(playerScores);
        if (newPlayer) {
            //switch back to leaders board if it's showing slides
            if (slideShowPanel.is(":visible")) {
                swithPanels();
            }
            
            showNewPlayerPopup(newPlayer.player);
        }
    }
    
    function pollTopPlayers(interval) {
        self.setInterval(function() {
            console.info('polling top players server in every ' + interval/1000+' seconds .......')
            leaderBoardService.getTopPlayers(refreshLeaderBoard);
        },interval);
    }
    
    function showNewPlayerPopup(player) {
        var tooltipPopup = $('<div/>').qtip(
        {
            content: {
                title: {
                    text: 'Congragulation ! New Top Player '
                // button: 'Close'
                },
                text: player
            },
            position: {
                target: $(document.body), // Position it via the document body...
                corner: 'center' // ...at the center of the viewport
            },
            show: {
                ready: false,
                when: false // Show it on click
            //solo: true // And hide all other tooltips
            },
            hide: {
                delay: 1500,
                when: {
                    event: 'inactive'
                }
            },
            style: {
                'font-size' : '3em',
                margin: 'auto',
                'text-align': 'center',
                color: '#CFB627',
                width: {
                    max: 1000,
                    min: 600
                },
                title: {
                    'font-size' : '2em',
                    color: '#990CE9',
                    margin: 'auto',
                    'text-align': 'center'
                },
                padding: '14px',
                border: {
                    width: 9,
                    radius: 9,
                    color: '#666666'
                },
                name: 'light'
            },
            api: {
                beforeShow: function()
                {
                    // Fade in the modal "blanket" using the defined show speed
                    $('#qtip-blanket').fadeIn(this.options.show.effect.length);
                },
                beforeHide: function()
                {
                    // Fade out the modal "blanket" using the defined hide speed
                    $('#qtip-blanket').fadeOut(this.options.hide.effect.length);
                }
            }
        });
        
        tooltipPopup.qtip('show');
        setTimeout(function() {
            tooltipPopup.qtip('hide');
            tooltipPopup.qtip('destroy');
        }, 3000);
    }
    
    function initBanner() {
        var banner = $('<div/>').css({
            position: 'absolute',
            top: 0,
            height: 92,
            left: 0,
            right: 0,
            'background-color': '#DDE4CA'
        });
        
        //var img = $('<img/>').attr('src', Config.imagePath + '/header.png');
        var img = $('<img/>').attr('src', Config.imagePath + '/logo_IFL.png');
        var nictaLogo = $('<img src="'+ Config.imagePath + '/logo_NICTA.png' +  '"></img>').css({
            'float': 'right',
            marginTop: 10,
            marginLeft: 20,
            marginRight: 15
        });
        
        banner.append(img).appendTo(leaderBoardContainer).append(nictaLogo);
    }
    
    function initInstructions() {
        
        var intruduction = $('<h3>Introduction</h3>').appendTo(instructionPanel);
        var instructionText = $('<p>IFL Panel Demo (Intelligent Fleet Size and Mix Challenge) is aiming to provide an interesting way to show people how our <b>Route Optimisation Solver</b> works. </p>').appendTo(instructionPanel);
        
        
        var howTo = $('<h3>How To Play</h3>').appendTo(instructionPanel);
        initRoleInstruction();
        $('<h4>Key Information: </h4>').appendTo(instructionPanel);
        
        initComponentTable();
        
        $('<h4>Fleet Configurations: </h4>').appendTo(instructionPanel);
        initVehicleConfigTable();
        
        $('h3', instructionPanel).css({
            'padding-bottom': '2px',
            'border-bottom': '1px solid #919699',
            'margin-top': 5
        });
        
        $('h4', instructionPanel).css({
            'margin-top': 5,
            'margin-bottom': 5
        });
    }
    
    function initComponentTable() {
        var table = $('<table/>');
        
        var row = $('<tr/>').appendTo(table);
        var td1 = $('<th>Icon</th>').appendTo(row);
        var td2 = $('<th>Description</th>').appendTo(row);
        
        row = $('<tr/>').appendTo(table);
        var icon = $('<img/>').attr('src',Config.imagePath + '/demandPoint.png').css('width', 50);
        td1 = $('<td/>').append(icon).appendTo(row);
        td1.css('textAlign', 'center');
        
        var descriptionText = 'Customer location and demands (no. of pallets, total 174 pallets required) on the map. Each missed customer (show in red) will cost an extra $1,000 to the schedule.';
        td2 = $('<td/>').append(descriptionText).appendTo(row);
        td2.css('padding', 5);
        
        row = $('<tr/>').appendTo(table);
        icon = $('<img/>').attr('src',Config.imagePath + '/depot.png').css('width', 50);
        td1 = $('<td/>').append(icon).appendTo(row);
        td1.css('textAlign', 'center');
        
        descriptionText = 'Depot location on the map.(Total 3 depots)';
        td2 = $('<td/>').append(descriptionText).appendTo(row);
        td2.css('padding', 5);
        
        row = $('<tr/>').appendTo(table);
        icon = $('<img/>').attr('src',Config.imagePath + '/depotBox.png').css('height', 50);
        td1 = $('<td/>').append(icon).appendTo(row);
        td1.css('textAlign', 'center');
        
        descriptionText = 'Place your selected vehicle fleet on the depot squares.';
        td2 = $('<td/>').append(descriptionText).appendTo(row);
        td2.css('padding', 5);
        
        $('td', table).css({
            border: '1px solid #DDD'
        });
        
        $('th', table).css({
            border: '1px solid #DDD'
        });
        
        table.css('border-collapse', 'collapse');
        
        table.appendTo(instructionPanel);
    }
    
    function initVehicleConfigTable() {
        var table = $('<table width="100%"/>');
        
        var row = $('<tr/>').appendTo(table);
        var td1 = $('<th></th>').appendTo(row);
        var td2 = $('<th>Type</th>').appendTo(row);
        var td3 = $('<th>Capacity</th>').appendTo(row);
        var td4 = $('<th>Fixed Cost</th>').appendTo(row);
        var td5 = $('<th>Variable Cost</th>').appendTo(row);
        var td6 = $('<th>Variable Cost</th>').appendTo(row);
        
        row = $('<tr/>').appendTo(table);
        var icon = $('<img/>').attr('src',Config.imagePath + '/vehicle_pic2.jpg').css('width', 80);
        td1 = $('<td/>').append(icon).appendTo(row);
        td2 = $('<td/>').append('Single Axle').appendTo(row);
        td3 = $('<td/>').append('16').appendTo(row);
        td4 = $('<td/>').append('$150').appendTo(row);
        td5 = $('<td/>').append('$2.00/km').appendTo(row);
        td6 = $('<td/>').append('$40/h').appendTo(row);
        
        row = $('<tr/>').appendTo(table);
        icon = $('<img/>').attr('src',Config.imagePath + '/vehicle_pic1.jpg').css('width', 80);
        td1 = $('<td/>').append(icon).appendTo(row);
        td2 = $('<td/>').append('Double Axle').appendTo(row);
        td3 = $('<td/>').append('24').appendTo(row);
        td4 = $('<td/>').append('$200').appendTo(row);
        td5 = $('<td/>').append('$2.20/km').appendTo(row);
        td6 = $('<td/>').append('$40/h').appendTo(row);
        
        row = $('<tr/>').appendTo(table);
        icon = $('<img/>').attr('src',Config.imagePath + '/vehicle_pic0.jpg').css('width', 80);
        td1 = $('<td/>').append(icon).appendTo(row);
        td2 = $('<td/>').append('Semi-Trailer').appendTo(row);
        td3 = $('<td/>').append('40').appendTo(row);
        td4 = $('<td/>').append('$300').appendTo(row);
        td5 = $('<td/>').append('$3.20/km').appendTo(row);
        td6 = $('<td/>').append('$50/h').appendTo(row);
        
        $('td', table).css({
            border: '1px solid #DDD',
            textAlign: 'center',
            padding: 5
        });
        
        $('th', table).css({
            border: '1px solid #DDD',
            textAlign: 'center',
            padding: 5
        });
        
        table.css('border-collapse', 'collapse');
        
        table.appendTo(instructionPanel);
    }
    
    function initRoleInstruction() {
        var ul = $('<ul/>');
        //var li1 = $('<li>Your business replenishes 38 customers ores daily using a fleet of trucks</li>').appendTo(ul);
        var li1 = $('<li>Your business replenishes 33 customers in NSW from three depots</li>').appendTo(ul);
        var li2 = $('<li>As transport operations manager you need to effectively and efficiently plan to deliver 174 pallets to your NSW customers</li>').appendTo(ul);
        //var li3 = $('<li>Allocate your trucks to balance capacity, distance and the number of vehicles used to save on transportation costs</li>').appendTo(ul);
        var li3 = $("<li>Allocate your available fleet to each depot to satisfy customers' orders for the least cost</li>").appendTo(ul);

        ul.appendTo(instructionPanel);
        
    }
    
    function initGoInstruction() {
        $('<h2>Press "Go" to optimise your routes</h2>').css({
            //position: 'absolute',
            margin: 'auto',
            marginTop: 100
        }).appendTo(leaderBoardPanel);
    }
    
    function initKeyEvents() {
        $(document.body).keypress(function(event) {
            console.info('click key: ' + event.which);
           
            //press 'r' or 'R' to reset top players
            if (event.which == 114 || event.which == 82) {
                IFL.Util.showConfirmDialog("Reset Top Players", "Do you want to clear all the top players ?", function() {
                    leaderBoardService.resetTops();
                })
            }
           
            //press 'S' or 's' to switch between leaders board and slide show panel
            if (event.which == 115 || event.which == 83) {
                swithPanels();
            }
            
            //press 'P' or 'p' to pause/restart the slide auto show if it's showing
            if (event.which == 112 || event.which == 80) {
                pauseSlides();
            }
           
        });
        
        $(document.body).keydown(function(e){
            //show previouew slide
            if (e.which == 37) {
                if (slideShowPanel.is(":visible")) {
                    slideShowService.preSlide();
                }
            }
            
            //show next slide
            if (e.which == 39) {
                if (slideShowPanel.is(":visible")) {
                    slideShowService.nextSlide();
                }
            }
            
        });
    }
    
    function pauseSlides() {
        if (slideShowPanel.is(":visible")) {
            slideShowService.toggleAutoShow();
        }
    }
    
    function swithPanels() {
        if (slideShowPanel.is(":visible")) {
            slideShowService.stopAutoShow();
            slideShowPanel.hide();
            leaderBoardContainer.show();
        } else {
            leaderBoardContainer.hide();
            slideShowPanel.show();
            slideShowService.startAutoShow();
        }
    }
}


