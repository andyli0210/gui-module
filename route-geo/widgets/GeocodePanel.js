IFL.RouteGeo.GeocodePanel = function(containerId) {
    var container = jQuery('#' + containerId);
    var addressCriteria_panel = jQuery('<div></div>');
    var addressMatches_panel = jQuery('<div style="display:none;"></div>');
    var addressMatches_titleBar;
    var addressMatches_content;
    var addressChosen_panel = jQuery('<div></div>');
    var addressDetails_panel = jQuery('<div></div>');
    var addressAdd_panel = jQuery('<div></div>');
    
    var eventHandler;
    //    var resolveHandlers = [];
    //    var searchHandlers = [];
    //    var showRouteHandlers = [];
    var curAddress;
    var curChosenAddress;
    
    intiEvents();
    init();
    
    function init() {
        initAddressAdd();
        container.append(addressAdd_panel.getContainer());
        
        initAddressDetails();
        container.append(addressDetails_panel.getContainer());
        
        container.append('<br/>');
        
        initAddressSearch();
        //initAddressCriteria();
        container.append(addressCriteria_panel.getContainer());
        
        container.append('<br/>');
        
        initAddressChosen();
        container.append(addressChosen_panel.getContainer());
        
        container.append('<br/>');
        
        initAddressMatches();
        container.append(addressMatches_panel);
    }
    
    function intiEvents() {
        eventHandler = new IFL.Util.EventHandler(['resolve', 'search', 'showroute','addressadd', 'addressedit', 'searchstring']);
    }
    
    function registerHandler(eventName, handler) {
        eventHandler.registerHandler(eventName, handler);
    }
    
    function notifyHandlers(eventName, option) {
        eventHandler.notifyHandlers(eventName, curAddress, option);
    }
    
    function initAddressMatches() {
        addressMatches_titleBar = jQuery('<div class="ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" style="cursor: pointer"><span class="ui-icon ui-icon-triangle-1-s" style="display: inline-block;"></span><a id="title">Address Matches:</a></div>').appendTo(addressMatches_panel);
        addressMatches_titleBar.hover(function(){
            addressMatches_titleBar.addClass('ui-state-hover');
        },function() {
            addressMatches_titleBar.removeClass('ui-state-hover');
        });
        
        addressMatches_content = jQuery('<div ui-widget ui-dialog ui-state-default></div>').appendTo(addressMatches_panel);
        
        addressMatches_titleBar.click(function() {
            addressMatches_content.toggle('blind');
            if (jQuery('span', addressMatches_titleBar).hasClass('ui-icon-triangle-1-e')) {
                jQuery('span', addressMatches_titleBar).removeClass('ui-icon-triangle-1-e');
                jQuery('span', addressMatches_titleBar).addClass('ui-icon-triangle-1-s');
            } else {
                jQuery('span', addressMatches_titleBar).removeClass('ui-icon-triangle-1-s');
                jQuery('span', addressMatches_titleBar).addClass('ui-icon-triangle-1-e');
            }
            
        });
    }
    
    function initAddressAdd() {
        addressAdd_panel = new AddressWidget(['ID', 'Street', 'Suburb', 'State', 'Postcode', 'Start Time', 'End Time', 'Run Num', 'Stop Num']);
        addressAdd_panel.setTitle('Add Address');
        addressAdd_panel.display(true);
        addressAdd_panel.enableEdit();
        
        addressAdd_panel.setAddress = function(_address) {
            addressAdd_panel.setDomain(_address);
            
            var address_criteria = _address.getAddressCriteria();
            
            var container = addressAdd_panel.getContainer();
            container.find('#id > input').val(_address.id);
            container.find('#street > input').val(address_criteria.getStreet() || '');
            container.find('#suburb > input').val(address_criteria.getSuburb() || '');
            container.find('#state > input').val(address_criteria.getState() || '');
            container.find('#postcode > input').val(address_criteria.getPostcode() || '');
            container.find('#starttime > input').val(_address.getStartTime() || '');
            container.find('#endtime > input').val(_address.getEndTime() || '');
            container.find('#runnum > input').val(_address.getRouteNum() || '');
            container.find('#stopnum > input').val(_address.getStopNum() || '');
        }
        
        addressAdd_panel.getAddress = function() {
            var container = addressAdd_panel.getContainer();
            var id = container.find('#id > input').val();
            var street = container.find('#street > input').val();
            var suburb = container.find('#suburb > input').val();
            var state = container.find('#state > input').val();
            var postcode = container.find('#postcode > input').val();
            var startTime = container.find('#starttime > input').val();
            var endTime = container.find('#endtime > input').val();
            var routeNum = container.find('#runnum > input').val();
            var stopNum = container.find('#stopnum > input').val();
            
            var address;
            var geoAddress = addressAdd_panel.getDomain();
            
            if (!geoAddress) {
                 address = new AddressDomain();
                 geoAddress = new GeoAddress();
            } else {
                address = geoAddress.getAddressCriteria();
            }
            
            //var address = new AddressDomain();
            address.setStreet(street);
            address.setState(state);
            address.setSuburb(suburb);
            address.setPostcode(postcode);
            
            //var geoAddress = new GeoAddress();
            geoAddress.id = id;
            geoAddress.setStartTime(startTime);
            geoAddress.setEndTime(endTime);
            geoAddress.setAddressCriteria(address);
            
            geoAddress.setRouteNum(routeNum);
            geoAddress.setStopNum(stopNum);
            
            return geoAddress;
        }
        
        var clickHandler = function() {
            if (addButton.text() == 'Add') {
                curAddress = addressAdd_panel.getAddress();
                notifyHandlers('addressadd');
            } else {
                curAddress = addressAdd_panel.getAddress();
                notifyHandlers('addressedit');
                addressAdd_panel.setDomain(null);
            }
            
        }
        var addButton = addressAdd_panel.addButton('Add', clickHandler);
        addressAdd_panel.setButtonName = function(name) {
            addButton.text(name);
        }
        
        initDateTimePicker();
    }
    
    
    function initDateTimePicker() {
        var container = addressAdd_panel.getContainer();
        var startTimeInput = container.find('#starttime > input');
        var endTimeInput = container.find('#endtime > input');
        startTimeInput.datetimepicker({
            dateFormat: 'dd/mm/yy',
            onClose: function(dateText, inst) {
                var endDateTextBox = endTimeInput;
                if (endDateTextBox.val() != '') {
                    var testStartDate = new Date(dateText);
                    var testEndDate = new Date(endDateTextBox.val());
                    if (testStartDate > testEndDate)
                        endDateTextBox.val(dateText);
                }
                else {
                    endDateTextBox.val(dateText);
                }
            },
            onSelect: function (selectedDateTime){
                var start = $(this).datetimepicker('getDate');
                $('#example16_end').datetimepicker('option', 'minDate', new Date(start.getTime()));
            }
        });
        
        endTimeInput.datetimepicker({
            dateFormat: 'dd/mm/yy',
            onClose: function(dateText, inst) {
                var startDateTextBox = startTimeInput;
                if (startDateTextBox.val() != '') {
                    var testStartDate = new Date(startDateTextBox.val());
                    var testEndDate = new Date(dateText);
                    if (testStartDate > testEndDate)
                        startDateTextBox.val(dateText);
                }
                else {
                    startDateTextBox.val(dateText);
                }
            },
            onSelect: function (selectedDateTime){
                var end = $(this).datetimepicker('getDate');
                $('#example16_start').datetimepicker('option', 'maxDate', new Date(end.getTime()) );
            }
        });
    }
    
    function initAddressDetails() {
        addressDetails_panel = new AddressWidget(['ID', 'Status', 'Run Num', 'Stop Num']);
        addressDetails_panel.setTitle('Address Details');
        addressDetails_panel.setAddress = function(_geoAddress) {
            var container = addressDetails_panel.getContainer();
            
            var id = _geoAddress.id || '';
            var status = _geoAddress.getStatus() || '';
            var routeNum = _geoAddress.getRouteNum() || '';
            var stopNum = _geoAddress.getStopNum() || '';
            
            var bColor = '#FFFFFF';
            
            if (status == 'unresolved') {
                bColor = '#FF0000';
            } else if (status == 'select') {
                bColor = '#FFFF00';
            }
            
            jQuery('#id', container).html(id);
            jQuery('#status', container).html(status).css({
                'background':bColor,
                'z-index': 2
            });
            jQuery('#runnum', container).html(routeNum);
            jQuery('#stopnum', container).html(stopNum);
            
            //editButton.text('Edit');
        }
        
        addressDetails_panel.display(false);
        
//        var container = addressDetails_panel.getContainer();
//        var handler = function() {
//            var routeField = jQuery('#runnum', container);
//            var stopField = jQuery('#stopnum', container);
//            
//            if (jQuery(this).text() == 'Edit') {
//                jQuery(this).text('Update');
//                
//                var routeInput = jQuery('<input type="text"></input>').val(routeField.text());
//                routeField.empty().append(routeInput);
//                
//                var stopInput = jQuery('<input type="text"></input>').val(stopField.text());
//                stopField.empty().append(stopInput);
//                
//            } else {
//                jQuery(this).text('Edit');
//                var routeNum = routeField.find('input').val();
//                var stopNum = stopField.find('input').val();
//                
//                curAddress.setRouteNum(routeNum);
//                curAddress.setStopNum(stopNum);
//                routeField.empty().html(routeNum);
//                stopField.empty().html(stopNum);
//            }
//        }
//        var editButton = addressDetails_panel.addButton('Edit', handler);
        
        
    //addressDetails_panel.disableFolder();
    }
    
    function initAddressChosen() {
        addressChosen_panel = new AddressWidget(['Street', 'Suburb', 'State', 'Country', 'Postcode', 'Location']);
        addressChosen_panel.setTitle('Address Chosen');
        addressChosen_panel.setAddress = setWidgetAddress;
        addressChosen_panel.getContainer().css('display' , 'none');
        
        var container = addressChosen_panel.getContainer();
        var contentTable = jQuery('table', container);
        
        var buttonRow = jQuery('<tr><td align="right" colspan="2"></td></tr>').appendTo(contentTable);
        //var searchButton = jQuery('<button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button" aria-disabled="false"><span class="ui-button-text">Search</span></button>');
        var resolveButton = getPanelButton('Resolve');
        var showRouteButton = getPanelButton('Show Route');
        showRouteButton.attr('id', 'routeButton');
        jQuery('td', buttonRow).append(showRouteButton);
        jQuery('td', buttonRow).append(resolveButton);
        
        resolveButton.click(function() {
            //curAddress.setStatus('resolved');
            curChosenAddress.addressMatchBar = null;
            
            curAddress.setAddressChosen(curChosenAddress);
            curAddress.setAddressMatches([]);
            
            DispatchUtil.showChooseDialog('', 'Do you want to override Address Criteria with Address Chosen?', function(isApproved){
                if (isApproved) {
                    curAddress.setAddressCriteria(curChosenAddress);
                }
                showAddress(curAddress);
                notifyHandlers('resolve');
            })

        //            if (window.confirm("Do you want to override Address Criteria with Address Chosen?")) {
        //                curAddress.setAddressCriteria(curChosenAddress);
        //            }
        //            
        //            showAddress(curAddress);
        //            notifyHandlers('resolve');
        });
        
        showRouteButton.click(function() {
            if (jQuery('span', showRouteButton).text() == 'Show Route') {
                if (curChosenAddress.routeOperator) {
                    curChosenAddress.routeOperator.display(true);
                    jQuery('span', showRouteButton).text('Hide Route');
                } else {
                    var lat = curChosenAddress.getLocation().lat;
                    var lon = curChosenAddress.getLocation().lon;
                    var stopNum = curAddress.getStopNum();
                    var curLocation = {
                        lat: lat,
                        lon: lon,
                        stopNum: stopNum
                    };
                    
                    var loadImage = jQuery('<img></img>').attr({
                        src: Config.imagePath + '/loading2.gif', 
                        title:'Loading route'
                    })
                    
                    jQuery('span', showRouteButton).empty().append(loadImage);
                    
                    var option = {
                        //curLocation: curLocation,
                        onGetRoute: function(routeOperator){
                            if (routeOperator) {
                                curChosenAddress.routeOperator = routeOperator;
                                curChosenAddress.routeOperator.display(true);
                                
                                routeOperator.registerEventHandler('renderfinished', function() {
                                    jQuery('span', showRouteButton).html('Hide Route');
                                });
                                
                            } 
                        }
                    }
                    
                    notifyHandlers('showroute', option); 
                }
            } else {
                if (curChosenAddress.routeOperator) {
                    curChosenAddress.routeOperator.display(false);
                }
                 
                jQuery('span', showRouteButton).text('Show Route');
            }
        });
    }
    
    function initAddressSearch() {
        addressCriteria_panel = new AddressSearchWidget();
        
        var searchButton; 
        var searchHandler = function() {
            var loadImage = jQuery('<img></img>').attr({
                src: Config.imagePath + '/loading2.gif', 
                title:'Geocoding Address...'
            })
                    
            jQuery('span', searchButton).empty().append(loadImage);
            notifyHandlers('searchstring', addressCriteria_panel.getAddressString());
        };
        
        searchButton = addressCriteria_panel.addButton('Search', searchHandler);
        searchButton.attr('id', 'searchButton');
        
        addressCriteria_panel.display(false);
    }
    
    
    function initAddressCriteria() {
        addressCriteria_panel = new AddressWidget(['Street', 'Suburb', 'State', 'Country', 'Postcode', 'Location']);
        addressCriteria_panel.setTitle('Address Criteria');
        addressCriteria_panel.setAddress = setWidgetAddress;
        
        var container = addressCriteria_panel.getContainer();
        var contentTable = jQuery('table', container);
        
        var buttonRow = jQuery('<tr><td align="right" colspan="2"></td></tr>').appendTo(contentTable);
        //var searchButton = jQuery('<button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button" aria-disabled="false"><span class="ui-button-text">Search</span></button>');
        var searchButton = getPanelButton('Search');
        searchButton.attr('id', 'searchButton');
        
        var editButton = getPanelButton('Edit');
        jQuery('td', buttonRow).append(searchButton);
        jQuery('td', buttonRow).append(editButton);
        
        searchButton.click(function() {
            var loadImage = jQuery('<img></img>').attr({
                src: Config.imagePath + '/loading2.gif', 
                title:'Geocoding Address...'
            })
                    
            jQuery('span', searchButton).empty().append(loadImage);
            notifyHandlers('search');
        });
        
        editButton.toggle(function() {
            addressCriteria_panel.enableEdit();
            jQuery('span', editButton).html('Update');
            searchButton.attr('disabled', true);
            searchButton.css('display', 'none');
        }, function() {
            updateAddressCriteria();
            addressCriteria_panel.disableEdit();
            jQuery('span', editButton).html('Edit');
            searchButton.attr('disabled', false);
            searchButton.css('display', 'inline-block');
            
        })
        
        addressCriteria_panel.display(false);
    }
    
    function updateAddressCriteria() {
        var container = addressCriteria_panel.getContainer();
        var street = jQuery('#street > input', container).val();
        var state = jQuery('#state > input', container).val();
        var suburb = jQuery('#suburb > input', container).val();
        var country = jQuery('#country > input', container).val();
        var postcode = jQuery('#postcode > input', container).val();
        var location = jQuery('#location > input', container).val();
        
        var addressCriteria = curAddress.getAddressCriteria();
        addressCriteria.setStreet(street);
        addressCriteria.setState(state);
        addressCriteria.setSuburb(suburb);
        addressCriteria.setCountry(country);
        addressCriteria.setPostcode(postcode);
    }
    
    function getSearchCriteria() {
        var container = addressCriteria_panel.getContainer();
        var street = jQuery('#street > input', container).val();
        var state = jQuery('#state > input', container).val();
        var suburb = jQuery('#suburb > input', container).val();
        
        var query = new AddressDomain();
        query.setStreet(street);
        query.setState(state);
        query.setSuburb(suburb);
        
        return query;      
    }
    
    function getPanelButton(name) {
        var button = jQuery('<button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button" aria-disabled="false"><span class="ui-button-text">' + name + '</span></button>');
        button.css({
            //background: 'url("images/ui-bg_highlight-soft_75_cccccc_1x100.png") repeat-x scroll 50% 50% #CCCCCC',
            'margin-right': '5px',
            'font-weight' : 'bold',
            cursor: 'pointer'
        });
        
        button.hover(function() {
            button.addClass('ui-state-hover')
        }, function() {
            button.removeClass('ui-state-hover')
        });
        
        return button;
    }

    function setWidgetAddress(_addressDomain) {
        var container = this.getContainer();
        //        var id = _addressDomain.id || '';
        //        jQuery('#id', container).html(id);
        //jQuery('#id', container).val(id);

        
        var street = _addressDomain.getStreet() || '';
        jQuery('#street', container).html(street);
        //jQuery('#street', container).val(street);
        
        var suburb = _addressDomain.getSuburb() || '';
        jQuery('#suburb', container).html(suburb);
        
        var state = _addressDomain.getState() || '';
        jQuery('#state', container).html(state);
        
        var country = _addressDomain.getCountry() || '';
        jQuery('#country', container).html(country);
        
        var postcode = _addressDomain.getPostcode() || '';
        jQuery('#postcode', container).html(postcode);
        
        var lat, lon;
        
        if (_addressDomain.getLocation()) {
            lat = _addressDomain.getLocation().lat;
            lon = _addressDomain.getLocation().lon;
        }
        
        var location = '';
        if (lat && lon) {
            var latVal = parseFloat(lat).toFixed(6);
            var lonVal = parseFloat(lon).toFixed(6);
            
            location = '(' + latVal + ', ' + lonVal + ")";
        }
        jQuery('#location', container).html(location);
        
    //addressCriteria_panel.setDomain(_addressDomain);
    }
    
    function setAddressMatches(geoAddress) {
        var matches = geoAddress.getAddressMatches();
        if (!matches || matches.length == 0) {
            addressMatches_panel.css('display', 'none');
            return;
        } else {
            addressMatches_panel.css('display', 'block');
            addressMatches_content.empty();
            addressMatches_content.css('display', 'block');
            jQuery('span', addressMatches_titleBar).removeClass('ui-icon-triangle-1-e');
            jQuery('span', addressMatches_titleBar).addClass('ui-icon-triangle-1-s');
        }
        
        matches.sort(function(a,b) {
            var aConfidence = a.getAccuracy();
            var bConfidence = b.getAccuracy();
            
            if (!bConfidence) {
                return -1;
            }
            
            if (!aConfidence) {
                return 1;
            }
            
            return parseFloat(bConfidence) > parseFloat(aConfidence) ? 1 : -1;
        })
        for (var m in matches) {
            var match = matches[m];
            
            var addressBar = getAddressMatchBar(match);
            addressMatches_content.append(addressBar);
            
            matches[m].addressMatchBar = addressBar;
            matches[m].routeOperator = false;
        }
    }
    
    function getAddressMatchBar(addressDomain) {
        var addressMatchBar = jQuery('<div class="ui-widget-content"><table width="100%"><tr><td width="16px"><span class="ui-icon ui-icon-check" style="display: none;"></span><td><td id="address"></td><td width="20px" id="confidence" title="location confidence"></td></tr></table></div>');
        
        addressMatchBar.addressDomain = addressDomain;
        addressMatchBar.hover(function(){
            addressMatchBar.addClass('ui-state-hover');
        },function() {
            addressMatchBar.removeClass('ui-state-hover');
        });
        
        addressMatchBar.click(function() {
            if (addressMatchBar.hasClass('ui-state-highlight')) {
                setAddressChosen(addressDomain);
                return;
            }
            
            var bars = jQuery('div', addressMatches_content);
            bars.removeClass('ui-state-highlight');
            
            addressMatchBar.addClass('ui-state-highlight');
            var icons = jQuery('span', addressMatches_content);
            icons.css('display', 'none');
            
            var icon = jQuery('span', addressMatchBar);
            if (icon.css('display') == 'none') {
                icon.css('display', 'inline-block');
            } else {
                icon.css('display', 'none');
            }
            
            setAddressChosen(addressDomain);
        })
        
        var street = addressDomain.getStreet();
        var suburb = addressDomain.getSuburb();
        var state = addressDomain.getState();
        var postcode = addressDomain.getPostcode();
        var confidence = addressDomain.getAccuracy() ?  (addressDomain.getAccuracy() + '%'): '';
        
        var addressSummary = (street? street + ',' : '') + (suburb || '') + ' ' + (state || '') + ' ' +  (postcode || '');
        jQuery('#address', addressMatchBar).html(addressSummary);
        jQuery('#confidence', addressMatchBar).html(confidence);
        
        return addressMatchBar;
    }
    
    function setAddressChosen(addressDomain) {
        if (curChosenAddress) {
            var routeOperator = curChosenAddress.routeOperator;
            
            if (routeOperator && routeOperator.getVisObject()) {
                routeOperator.display(false);
            }
        }
        
        curChosenAddress = addressDomain;
        
        curAddress.setAddressChosen(addressDomain);
        
        var container = addressChosen_panel.getContainer();
        if (addressDomain) {
            addressChosen_panel.setAddress(addressDomain);
            container.css('display' , 'block');
            addressChosen_panel.expand(true);
        } else {
            container.css('display' , 'none');
            return;
        }
        
        var buttonText = jQuery('#routeButton > span', container).text();
            
        if (addressDomain.routeOperator && buttonText == 'Hide Route') {
            addressDomain.routeOperator.display(true);
        } else {
            jQuery('#routeButton > span', container).text("Show Route");
        }
        
    }
    
    function clear() {
        addressDetails_panel.display(false);
        addressCriteria_panel.display(false);
        addressChosen_panel.display(false);
        addressMatches_panel.css('display', 'none');
        addressAdd_panel.display(false);
    }
    
    function editAddress(address) {
        showAddressAdd();
        addressAdd_panel.setTitle('Edit Address');
        addressAdd_panel.setButtonName('Update');
        addressAdd_panel.setAddress(address);
    }
    
    function showAddressAdd(newId) {
        addressAdd_panel.setTitle('Add Address');
        addressAdd_panel.setButtonName('Add');
        addressDetails_panel.display(false);
        addressCriteria_panel.display(false);
        addressChosen_panel.display(false);
        addressMatches_panel.css('display', 'none');
        
        addressAdd_panel.display(true);
        addressAdd_panel.expand(true);
        addressAdd_panel.enableEdit();
        initDateTimePicker();
        
        var container = addressAdd_panel.getContainer();
        container.find('#id > input').val(newId);
    }
    
    function showAddress(geoAddress) {
        addressAdd_panel.display(false);
        
        curAddress = geoAddress;
        
        addressDetails_panel.setAddress(geoAddress);
        addressDetails_panel.display(true);
        addressDetails_panel.expand(true);
        
        var addressCriteria = geoAddress.getAddressCriteria();
        
        if (addressCriteria) {
            addressCriteria_panel.setAddress(addressCriteria);
            addressCriteria_panel.display(true);
            addressCriteria_panel.expand(true);
            
            jQuery('#searchButton > span', addressCriteria_panel.getContainer()).html("Search");
        }
        
        setAddressMatches(geoAddress);
        
        var chosenAddress = geoAddress.getAddressChosen();
        
        if (chosenAddress) {
            chosenAddress.routeOperator = false;
        }
        setAddressChosen(chosenAddress);
    }
    
    
    
    return {
        showAddress: showAddress,
        showAddressAdd: showAddressAdd,
        registerHandler: registerHandler,
        clear: clear,
        editAddress: editAddress
    }
    
}