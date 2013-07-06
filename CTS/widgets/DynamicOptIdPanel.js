IFL.CTS.DynamicOptIdPanel = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);

    var container;
    var inputList;
    var outputList;
    var outputNameBox;

    var outputTypeNicknames = ['cts', 'rop', 'gro', 'chk', 'bac'];
    var outputTypes = ['Cost To Serve', 'In-Route Optimisation', 'General Route Optimisation', 'Checker(no time and capacity limitation)', 'Base Case'];

    init();
    function init() {
        container = $('<table/>');

        var inputRow = $('<tr/>').appendTo(container);
        var outputRow = $('<tr/>').appendTo(container);

        $('<td>Input: </td>').appendTo(inputRow);
        initInputList();
        inputRow.append('<td>').append(inputList.getContainer()).append('</td>');

        $('<td>Output Type: </td>').appendTo(outputRow);
        outputList = new IFL.Widget.DropdownList('output type', outputTypes);
        outputRow.append('<td>').append(outputList.getContainer()).append('</td>');

        var outputNameRow = $('<tr/>').appendTo(container);
        $('<td>Output Opt Name: </td>').appendTo(outputNameRow);
        outputNameBox = $('<input/>').attr('value', '').css('width', 150);
        outputNameRow.append('<td>').append(outputNameBox).append('</td>');
    }

    function initDefaultOptions() {
        var oriOpt = {
            id: 'ori',
            name: 'Original Data'
        };

        options = {
            inputOpts: [],
            defaultOpt: oriOpt
        };
    }

    function initInputList() {
        var oriOpt = {
            id: 'ori',
            name: 'Original Data'
        };

        options.inputOpts.push(oriOpt);

        var nameList = [];
        for (var i in options.inputOpts) {
            nameList.push(options.inputOpts[i].name);
        }

        inputList = new IFL.Widget.DropdownList('input opts', nameList);
        inputList.selectItem(options.defaultOpt.name);
    }

    function getContainer() {
        return container;
    }

    function getOptRequest() {
        var selectedInput = inputList.getSelectedItem();
        var selectedId;
        for (var i in options.inputOpts) {
            if (options.inputOpts[i].name === selectedInput) {
                selectedId = options.inputOpts[i].id;
            }
        }

        var selectedOutputTypyNickName=null;
        var selectedtype = outputList.getSelectedItem();
        if (selectedtype === outputTypes[0]) {
            selectedOutputTypyNickName = outputTypeNicknames[0];
        }
        if (selectedtype === outputTypes[1]) {
            selectedOutputTypyNickName = outputTypeNicknames[1];
        }
        if (selectedtype === outputTypes[2]) {
            selectedOutputTypyNickName = outputTypeNicknames[2];
        }
        if (selectedtype === outputTypes[3]) {
            selectedOutputTypyNickName = outputTypeNicknames[3];
        }
        if (selectedtype === outputTypes[4]) {
            selectedOutputTypyNickName = outputTypeNicknames[4];
        }

        return {
            inputId: selectedId,
            outputType: selectedOutputTypyNickName,
            outputName: $.trim(outputNameBox.val())
        }
    }

    return {
        getContainer: getContainer,
        getOptRequest: getOptRequest
    }
}


