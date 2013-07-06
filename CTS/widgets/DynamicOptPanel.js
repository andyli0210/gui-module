IFL.CTS.DynamicOptPanel = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);

    var container;
    var inputList;
    var outputList;

    init();
    function init() {
        container = $('<table/>');

        var inputRow = $('<tr/>').appendTo(container);
        var outputRow = $('<tr/>').appendTo(container);

        $('<td>Input Type: </td>').appendTo(inputRow);
        inputList = new IFL.Widget.DropdownList('input type', ['rop', 'gro', 'chk','ori','bac']);
        inputRow.append(inputList.getContainer());

        $('<td>Output Type: </td>').appendTo(outputRow);
        outputList = new IFL.Widget.DropdownList('output type', ['cts', 'rop', 'gro','chk','bac']);
        outputRow.append(outputList.getContainer());

    }

    function initDefaultOptions() {
        options = {};
    }

    function getContainer() {
        return container;
    }

    function getSelectedTypes() {
        return {
            input: inputList.getSelectedItem(),
            output: outputList.getSelectedItem()
        }
    }

    return {
        getContainer: getContainer,
        getSelectedTypes: getSelectedTypes
    }
}


