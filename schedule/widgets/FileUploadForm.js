IFL.Schedule.FileUploadForm = function(_options) {
    var defaultOptions = {
        mode: 'client',
        title: 'Select a file :'
    }
    
    var options = $.extend(true, {}, defaultOptions, _options);
    
    var container = $('<div></div>');
    var uploadForm;
    var submitButton;
    var events = new IFL.Util.EventHandler(['upload']);
    
    if (options.mode == 'server') {
        uploadForm = initServerUpload();
    } else {
        uploadForm = initClientUpload();
    }
    
    function initClientUpload() {
        var titleBar = $('<div>' + options.title +'</div>').appendTo(container);
        var fileInput = $('<input id="filePath" type="text" size="25" style="margin: 5px;"/>').appendTo(container);
        submitButton = $('<input type="submit" value="Upload"/>').appendTo(container);
        
        submitButton.click(function() {
            //displayLoading(true);
            var filePath = fileInput.val();
            readFile(filePath);
        });
    }
    
    function initServerUpload() {
        var uploadForm = $('<form id="fileForm" method="post" enctype="multipart/form-data"><p>Select a file : <input id="filePath" type="file" name="file" size="20" /><br/></p></form>');
        submitButton = $('<input type="submit" value="Upload"/>').appendTo(uploadForm);
        
        initServerSubmitHandler(uploadForm);
        
        uploadForm.appendTo(container);
    }
    
    function initServerSubmitHandler(uploadForm) {
        if (!options.serverUrl) {
            alert('Need Server URL for server upload mode !');
            return;
        }
        
        uploadForm.submit(function() { 
            IFL.Util.displayLoading(true);
            // submit the form 
            $(this).ajaxSubmit({
                dataType: options.dataType,
                url: options.serverUrl,
                success: function(data, status) {
                    IFL.Util.displayLoading(false);
                    uploadSuccess(data);
                },
                error: function(a,b,c) {
                    alert('File upload failed');
                    IFL.Util.displayLoading(false);
                }
            }); 
            // return false to prevent normal browser submit and page navigation 
            return false; 
        });
    }
    
    function uploadSuccess(data) {
        var name = getFileName();
        var option = {
            dataType: options.dataType,
            fileName: name
        }
        events.notifyHandlers('upload', data, option);
                    
        $('#filePath').val('');
    }
    
    function getFileName() {
        var name = $('#filePath').val();
        var names = name.split('//');
        var fileName = names[names.length-1];
        
        return fileName;
    }
    
    function readFile(url) {
        if (!url) {
            alert('No File URL !');
            return;
        }
        IFL.Util.displayLoading(true);
        jQuery.ajax({
            type: "GET",
            url: url,
            dataType: options.dataType,
            success: function(data) {
                IFL.Util.displayLoading(false);
                uploadSuccess(data);
            },
            error: function(a,b,c) {
                IFL.Util.displayLoading(false);
                alert('file upload failed !');
            }
        })
    }
    
    function getContainer() {
        return container;
    }
    
    function registerHandler(name, handler) {
        events.registerHandler(name, handler);
    }
    
    return {
        getContainer: getContainer,
        registerHandler: registerHandler
    }
}


