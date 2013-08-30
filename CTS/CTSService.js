IFL.CTS.CTSService = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    var serverUrl = options.ctsServerUrl;
    var currentAccountDetails;

    var eventHandler = new IFL.Util.EventHandler(['solverResult', 'ctsOptCreated', 'serverError']);
    init();

    function init() {
    }

    function initDefaultOptions() {
        options = {
            ctsServerUrl: Config.ctsServerUrl
        }
    }

    function getAccountDetails(callback) {
        console.info('trying to get current account details...');
        loadingPopup.show('Loading user data......');
        $.ajax({
            url: serverUrl + '/user_details',
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                loadingPopup.hide();
                console.info('Successfully get account details: ' + JSON.stringify(response));
                currentAccountDetails = response.accountDetails;
                callback(response);
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to get account details', {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function getGeoStatus(callback) {
        console.info('trying to get geo status...');
        $.ajax({
            url: serverUrl + '/geo/geoStatus',
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                console.info('Successfully get geo status: ' + JSON.stringify(response));
                callback(response);
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to get geo status', {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function commitGeoLocations(callback) {
        console.info('trying to commit geo locations...');
        loadingPopup.show('Commiting geo locations......');
        $.ajax({
            url: serverUrl + '/geo/commit',
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                console.info('Successfully commited geo locations: ' + JSON.stringify(response));
                loadingPopup.hide();
                callback(response);

            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to commit geo locations', {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function checkGeo(callback, parameters) {
        console.info('Calling route geo service......');

        $.ajax({
            url: serverUrl + '/solver/routegeo/service',
            type: 'POST',
            data: JSON.stringify(parameters),
            contentType: 'application/json',
            dataType: 'json',
            success: function(response) {
                if (response.isReady) {
                    console.info('Solver processed before, use existing data');
                    callback(response);
                } else {
                    console.info('Job Accepted, Scenario ID: ' + response.scenarioId);
                    pollGeoScenario(response.scenarioId, callback);
                }
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to send Route Geo request', {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function checkVolume(callback, parameters) {
        console.info('trying to call Volume Checker Service...');
        $.ajax({
            url: serverUrl + '/solver/checker/service',
            type: 'POST',
            data: JSON.stringify(parameters),
            contentType: 'application/json',
            dataType: 'json',
            success: function(response) {
                if (response.isReady) {
                    console.info('Solver processed before, use existing data');
                    getCheckerResult(callback, serverUrl + '/checker/volumeCheckerResult');
                } else {
                    console.info('Job Accepted, Scenario ID: ' + response.scenarioId);
                    pollCheckerScenario(response.scenarioId, function() {
                        getCheckerResult(callback, serverUrl + '/checker/volumeCheckerResult');
                    });
                }
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to send volume check request', {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function getCheckerResult(callback, url) {
        console.info('trying to get checker result at: ' + url);
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                console.info('Successfully get checker result: ');// + JSON.stringify(response));
                callback(response);
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to get checker result', {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function checkTime(callback, parameters) {
        console.info('trying to call Time Checker Service...');
        $.ajax({
            url: serverUrl + '/solver/checker/service',
            type: 'POST',
            data: JSON.stringify(parameters),
            contentType: 'application/json',
            dataType: 'json',
            success: function(response) {
                if (response.isReady) {
                    console.info('Solver processed before, use existing data');
                    getCheckerResult(callback, serverUrl + '/checker/timeCheckerResult');
                } else {
                    console.info('Job Accepted, Scenario ID: ' + response.scenarioId);
                    pollCheckerScenario(response.scenarioId, function() {
                        getCheckerResult(callback, serverUrl + '/checker/timeCheckerResult');
                    });
                }
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to send time checker request', {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function checkRoute(callback, parameters) {
        console.info('trying to call Route Checker Service...');
        $.ajax({
            url: serverUrl + '/solver/checker/service',
            type: 'POST',
            data: JSON.stringify(parameters),
            contentType: 'application/json',
            dataType: 'json',
            success: function(response) {
                if (response.isReady) {
                    console.info('Solver processed before, use existing data');
                    getCheckerResult(callback, serverUrl + '/checker/routeCheckerResult');
                } else {
                    console.info('Job Accepted, Scenario ID: ' + response.scenarioId);
                    pollCheckerScenario(response.scenarioId, function(response) {
                        getCheckerResult(callback, serverUrl + '/checker/routeCheckerResult');
                    });
                }
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to send route checker request', {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function generateBaseCase(callback, parameters) {
        console.info('trying to call base case Service...');

        //for test only
        //getRopResult(callback, serverUrl + '/rop/solution');
        //return;


        loadingPopup.show('Generating Route Optimisation Solution......');
        $.ajax({
            url: serverUrl + '/solver/rop/service',
            type: 'POST',
            data: JSON.stringify(parameters),
            contentType: 'application/json',
            dataType: 'json',
            success: function(response) {
                if (response.isReady) {
                    console.info('Solver processed before, use existing data');

                    //update data quality list at left panel
                    eventHandler.notifyHandlers("solverResult", response);

                    getRopResult(callback, serverUrl + '/rop/solution');
                    //loadingPopup.hide();
                } else {
                    console.info('Job Accepted, Scenario ID: ' + response.scenarioId);
                    pollRopScenario(response.scenarioId, function(response) {
                        getRopResult(callback, serverUrl + '/rop/solution');
                        //loadingPopup.hide();
                    });
                }
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to send base case(ROP) request', {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function generateCtsOpt(callback, groupMember, parameters) {
        console.info('trying to call CTS OPT Service...');
        var optRequest = {
            solverParameterList: parameters,
            groupMember: groupMember
        }

        loadingPopup.show('Sending CTS request......');
        $.ajax({
            url: serverUrl + '/solver/opt/service',
            type: 'POST',
            data: JSON.stringify(optRequest),
            contentType: 'application/json',
            dataType: 'json',
            success: function(response) {
                eventHandler.notifyHandlers("ctsOptCreated", response);
                console.info('Job Accepted, Scenario ID: ' + response.scenarioId);
                loadingPopup.hide();
                pollCtsOptScenario(response.scenarioId, function(response) {
                    //loadingPopup.hide();
                    var optId = response.ctsOptInfo.id;
                    getCtsOptResult(callback, serverUrl + '/opt/info/' + optId);
                });
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to send CTS OPT request', {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function generateDynOpt(callback, groupMember, parameters, selectedTypes) {
        console.info('trying to call Dynamic OPT Service...  input type: ' + selectedTypes.input + ", output type: " + selectedTypes.output);

        var optRequest = {
            solverParameterList: parameters,
            groupMember: groupMember
        }

        loadingPopup.show('Sending Dynamic OPT request');
        $.ajax({
            url: serverUrl + '/solver/dyn/service?inputType=' + selectedTypes.input + "&outputType=" + selectedTypes.output,
            type: 'POST',
            data: JSON.stringify(optRequest),
            contentType: 'application/json',
            dataType: 'json',
            success: function(response) {
                eventHandler.notifyHandlers("ctsOptCreated", response);
                console.info('Job Accepted, Scenario ID: ' + response.scenarioId);
                loadingPopup.hide();
                pollCtsOptScenario(response.scenarioId, function(response) {
                    //loadingPopup.hide();
                    var optId = response.ctsOptInfo.id;
                    getCtsOptResult(callback, serverUrl + '/opt/info/' + optId);
                });
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to send Dynamic OPT request', {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function generateDynIdOpt(callback, groupMember, parameters, optParameters) {
        console.info('trying to call Dynamic ID OPT Service...  input ID: ' + optParameters.inputId + ", output type: " + optParameters.outputType + ",output name: " + optParameters.outputName);
        var optRequest = {
            solverParameterList: parameters,
            groupMember: groupMember
        }

        loadingPopup.show('Sending Dynamic ID OPT request');
        $.ajax({
            url: serverUrl + '/solver/dyn/idService?inputId=' + optParameters.inputId + "&outputType=" + optParameters.outputType + "&outputName=" + optParameters.outputName,
            type: 'POST',
            data: JSON.stringify(optRequest),
            contentType: 'application/json',
            dataType: 'json',
            success: function(response) {
                eventHandler.notifyHandlers("ctsOptCreated", response);
                console.info('Job Accepted, Scenario ID: ' + response.scenarioId);
                loadingPopup.hide();
                pollCtsOptScenario(response.scenarioId, function(response) {
                    //loadingPopup.hide();
                    var optId = response.ctsOptInfo.id;
                    getCtsOptResult(callback, serverUrl + '/opt/info/' + optId);
                });
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to send Dynamic OPT request', {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function generateGroOpt(callback, groupMember, parameters) {
        console.info('trying to call GRO OPT Service...');

        var optRequest = {
            solverParameterList: parameters,
            groupMember: groupMember
        }

        loadingPopup.show('Sending GRO request......');
        $.ajax({
            url: serverUrl + '/solver/gro/service',
            type: 'POST',
            data: JSON.stringify(optRequest),
            contentType: 'application/json',
            dataType: 'json',
            success: function(response) {
                eventHandler.notifyHandlers("ctsOptCreated", response);
                console.info('Job Accepted, Scenario ID: ' + response.scenarioId);
                loadingPopup.hide();
                pollCtsOptScenario(response.scenarioId, function(response) {
                    //loadingPopup.hide();
                    var optId = response.ctsOptInfo.id;
                    getCtsOptResult(callback, serverUrl + '/opt/info/' + optId);
                });
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to send CTS OPT request', {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function getCtsOptResult(callback, url) {
        console.info('trying to get CTS Opt result at: ' + url);
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                console.info('Successfully get CTS OPT result: ' + JSON.stringify(response));
                callback(response);
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to get CTS OPT result', {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function getCtsOptSolution(optId, callback, filterUrl) {
        var paramterUrl = filterUrl ? '?' + filterUrl : '';
        var url = serverUrl + "/opt/solution/" + optId + paramterUrl;
        
        console.info('trying to get CTS Opt Solution at: ' + url);
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: function(solution) {
                console.info('Successfully get CTS OPT Solution: ');// + JSON.stringify(solution));
                callback(solution);
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to get CTS OPT Solution', {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function getCtsOptParameters(optId, callback) {
        var url = serverUrl + "/opt/info/" + optId + "?noParameters=false";
        console.info('trying to get CTS Opt Parameters at: ' + url);
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                console.info('Successfully get CTS OPT parameters ');// + JSON.stringify(solution));
                callback(response.ctsOptInfo);
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to get CTS OPT parameters', {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function deleteCtsOpt(optId, callback) {
        var url = serverUrl + "/opt/delete/" + optId;
        console.info('trying to delete CTS Opt at: ' + url);
        $.ajax({
            url: url,
            type: 'DELETE',
            //dataType: 'json',
            success: function(response) {
                console.info('Successfully deleted CTS OPT');// + JSON.stringify(solution));
                callback(response);
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to delete CTS OPT: ' + optId + ' at server', {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function getRopResult(callback, url) {
        console.info('trying to get base case(ROP) result at: ' + url);
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                console.info('Successfully get base case(ROP) result: ')// + JSON.stringify(response));
                callback(response);
                loadingPopup.hide();
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to get base case(ROP) result', {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function pollGeoScenario(scenarioId, callback) {
        var scenarioUrl = serverUrl + '/solver/routegeo/scenarios/' + scenarioId;
        pollUrlResult(scenarioUrl, callback);
    }

    function pollCheckerScenario(scenarioId, callback) {
        var scenarioUrl = serverUrl + '/solver/checker/scenarios/' + scenarioId;
        pollUrlResult(scenarioUrl, callback);
    }

    function pollRopScenario(scenarioId, callback) {
        var scenarioUrl = serverUrl + '/solver/rop/scenarios/' + scenarioId;
        pollUrlResult(scenarioUrl, callback);
    }

    function pollCtsOptScenario(scenarioId, callback) {
        var scenarioUrl = serverUrl + '/solver/opt/scenarios/' + scenarioId;
        pollUrlResult(scenarioUrl, callback);
    }

    function pollUrlResult(url, callback) {

        console.info('Polling server at url: ' + url + " ......");
        //poll the server randomly between 1 and 3 seconds
        var poll_intervel = ((Math.random() * 3) + 1) * 1000;
        setTimeout(function() {
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                success: function(response) {
                    console.info('Get server response: ' + response.isReady);
                    if (response.isReady) {
                        callback(response);
                        eventHandler.notifyHandlers("solverResult", response);
                    } else {
                        pollUrlResult(url, callback);
                    }
                },
                error: function(xhr, status, error) {
                    errorHandler("Error", 'Failed to poll solver result at url: ' + url, {
                        xhr: xhr,
                        status: status,
                        error: error
                    });
                }
            });
        }, poll_intervel);
    }

    function exportSolutionReport(reportContents) {
        var reportContentParas = 'scheduleId=' + reportContents.id + '&includeSummary=' + reportContents.includeSummary + '&includeRouteChecking=' + reportContents.includeRouteChecking + '&includeRouteDetails=' + reportContents.includeRouteDetails;
        reportContentParas += '&reportName=' + reportContents.reportName;
        window.open(serverUrl + "/file/export/solution?" + reportContentParas);
    }

    function exportExcel() {
        window.open(serverUrl + "/file/export/comparison");
    }

    function getCtsOptInits(callback) {
        console.info('trying to get cts opt inits...');

        loadingPopup.show('Initializing CTS screen......');
        $.ajax({
            url: serverUrl + '/opt/init',
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                console.info('Successfully get cts opt inits');
                loadingPopup.hide();
                callback(response);
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to init CTS opts', {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function confirmOpt(optId, callback) {
        console.info('trying to confirm ' + optId + '...');
        loadingPopup.show('Confirming ' + optId + '......');

        var confirmUrl;
        if (optId == 'baseCase') {
            confirmUrl = serverUrl + '/checker/confirm';
        } else if (optId == 'rop') {
            confirmUrl = serverUrl + '/rop/confirm';
        } else {
            console.warn('Unknown optmisation id: ' + optId + ' for confirm !!!');
            return;
        }

        $.ajax({
            url: confirmUrl,
            type: 'POST',
            dataType: 'json',
            success: function(response) {
                console.info('Successfully confirmed ' + optId);
                loadingPopup.hide();
                callback(response);
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to confirm ' + optId, {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function getSolutionRouteIds(optId, callback) {
        console.info('trying to get route ids for ' + optId + '...');

        $.ajax({
            url: serverUrl + '/opt/routeIds/' + optId,
            type: 'GET',
            dataType: 'json',
            success: function(routeIds) {
                console.info('Successfully get solution route ids');
                callback(routeIds);
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to get solution route ids for ' + optId, {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function rerunOpt(optInfo, callback) {
        console.info('trying to ru-run ' + optInfo.name + '...');

        loadingPopup.show('Re-run ' + optInfo.name + '......');

        var rerunUrl;
        if (optInfo.id == 'baseCase') {
            rerunUrl = serverUrl + '/checker/rerun';
        } else if (optInfo.id == 'rop') {
            rerunUrl = serverUrl + '/rop/rerun';
        } else {
            console.warn('Unknown optmisation id: ' + optInfo.id + ' for re-run !!!');
            return;
        }

        $.ajax({
            url: rerunUrl,
            type: 'POST',
            //dataType: 'json',
            success: function(response) {
                console.info('Successfully re-run ' + optInfo.name);
                loadingPopup.hide();
                callback(response);
            },
            error: function(xhr, status, error) {
                errorHandler("Error", 'Failed to re-run ' + optInfo.name, {
                    xhr: xhr,
                    status: status,
                    error: error
                });
            }
        });
    }

    function errorHandler(errorTitle, errorMsg, errorOpts) {
        loadingPopup.hide();

        //if it's user session timeout, then redirect to login page
        if (errorOpts.xhr.responseText.indexOf('Login Page') > -1) {
            window.location.href = "/cts/login";
        } else {
            IFL.Util.showErrorDialog(errorTitle, errorMsg);
            console.error(errorMsg);

            eventHandler.notifyHandlers('serverError', errorMsg, errorOpts);
        }

    }

    function registerHandler(name, handler) {
        eventHandler.registerHandler(name, handler);
    }

    return {
        getAccountDetails: getAccountDetails,
        checkVolume: checkVolume,
        checkTime: checkTime,
        checkRoute: checkRoute,
        checkGeo: checkGeo,
        generateBaseCase: generateBaseCase,
        generateCtsOpt: generateCtsOpt,
        getGeoStatus: getGeoStatus,
        commitGeoLocations: commitGeoLocations,
        exportExcel: exportExcel,
        getCtsOptInits: getCtsOptInits,
        getCtsOptSolution: getCtsOptSolution,
        getCtsOptParameters: getCtsOptParameters,
        deleteCtsOpt: deleteCtsOpt,
        rerunOpt: rerunOpt,
        confirmOpt: confirmOpt,
        pollCtsOptScenario: pollCtsOptScenario,
        registerHandler: registerHandler,
        generateGroOpt: generateGroOpt,
        generateDynOpt: generateDynOpt,
        generateDynIdOpt: generateDynIdOpt,
        exportSolutionReport: exportSolutionReport,
        getSolutionRouteIds: getSolutionRouteIds
    };
}