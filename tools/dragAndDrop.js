(function(global){
    "use strict";

    // var readOne3dsFile = require('./readOne3dsFile.js');

    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Great success! All the File APIs are supported.
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }

    document.body.addEventListener('drop', function(e) {
        e.stopPropagation();
        e.preventDefault();

        var files = e.dataTransfer.files; // FileList object
        var file = files[0]; // only consider the first file for now.

        console.log('DROP');

    });

    document.body.addEventListener('dragover', function handleDragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    });

})(this);
