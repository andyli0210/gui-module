function AppStarter() {
    //addPager();
    //TestTalbe();
    
    mapservice = new IFL.Schedule.MapService({mapContainerId: 'chartContainer'});
    var resourceService = new IFL.Schedule.ResourceService();
    //ganttService = new IFL.Schedule.GanttService({pager: resourceService.getPager()});
      
        $('#refreshButton').click(function() {
            var vehicles = resourceService.getVehicles();
            var tasks = resourceService.getTasks();
            
            ganttService.refresh(vehicles, tasks);
        })
    
   //var xmlProcessor = new IFL.Schedule.FseXmlProcessor();
   var xmlProcessor = new IFL.Schedule.IFLXmlProcessor();
   //readFile('fse-otis-minus-config-formatted.xml');
   readFile('otis-ifl-out-formatted.xml');
   
    var results;
    function readFile(url) {
        jQuery.ajax({
            type: "GET",
            url: url,
            dataType: 'xml',
            success: function(xml) {
             results = xmlProcessor.processXml(xml);
                //debugger;
                //ganttService.refresh(results.vehicles, results.tasks);
                //resourceService.refresh(results.vehicles, results.tasks);
                
                var schedule = {
                    routes: results.routes
                }
                
                mapservice.refresh(schedule);
            }
        })
    }
    
    function addPager() {
        myPager = new IFL.Widget.Pager();
        $(document.body).append(myPager.getContainer());
        myPager.getContainer().css({
            position: 'absolute',
            bottom: '30px',
            right: '30px'
        })          
        
    }
    
    refresh = function() {
        ganttService.refresh(results.vehicles, results.tasks);
    }
    
    function TestTalbe() {
        var keyTitleMapping = {
            id: 'ID'
//            a: 'KEY I',
//            b: 'KEY II'
        }
        
        var item1 = {
            id: 123,
            a: 'aaa',
            b: 'bbb'
        }
        
        var item2 = {
            id: 222,
            a: 'a12',
            b: 'b12'
        }
        
        var item3 = {
            id: 333,
            a: 333,
            b: 333
        }
        
        
        var options = {
            keyTitleMapping: keyTitleMapping,
            listOptions: {showDeleteIcon: true, showTitle: true}
        }
        myControl = new IFL.Widget.ListControlPanel(options);
        $(document.body).append(myControl.getContainer());
        myControl.getContainer().css({
            position: 'absolute',
            top: '30px',
            left: '30px',
            width: '500px'
        })
        
        myControl.addItem(item1);
        myControl.addItem(item2);
        myControl.addItem(item3);
        
//        myTable = new IFL.Widget.DomainListTable(keyTitleMapping, {showDeleteIcon: true, showTitle: false})
//        //$(document.body).append(myTable.getContainer());
////        myTable.getContainer().css({
////            position: 'absolute',
////            top: '30px',
////            left: '30px',
////            width: '500px'
////        })
//        
//        myTable.registerHandler('delete', function(item) {
//            console.info('delete item: ' + item.id);
//            //myTable.deleteItem(item.id);
//        })
//        
//        myTable.registerHandler('select', function(item) {
//            console.info('select item: ' + item.id);
//            //myTable.deleteItem(item.id);
//        })
//        
//        myTable.addItem(item1);
//        myTable.addItem(item2);
//        myTable.refresh();
//        
//        myFodler = new IFL.Widget.FolderWidget({title: 'Title'});
//        $(document.body).append(myFodler.getContainer());
//        myFodler.getContainer().css({
//            position: 'absolute',
//            top: '30px',
//            left: '30px',
//            width: '500px'
//        })
//        
//        myPanel = new IFL.Widget.ButtonPanel();
//        
//        myPanel.setContent(myTable);
//        
//        myPanel.addButton($('<Button>Add</Button>'));
//        myPanel.addButton($('<Button>Add</Button>'), 'left');
//        myPanel.addButton($('<Button>Add</Button>'), 'middle');
//        myPanel.getContainer().css('width','500px');
//        
//        myFodler.setContent(myPanel);
        
    }
    
}



