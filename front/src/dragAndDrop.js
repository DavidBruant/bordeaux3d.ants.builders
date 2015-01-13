(function(global){
    "use strict";

    var sendFileToServer = require('./sendFileToServer.js');

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

        var xhr = new XMLHttpRequest();
        xhr.file = file; // not necessary if you create scopes like this

        

        xhr.upload.addEventListener("progress", updateProgress);
        xhr.upload.addEventListener("load", transferComplete);
        // xhr.addEventListener("error", transferFailed, false);
        // xhr.addEventListener("abort", transferCanceled, false);

        xhr.open('POST', '/upload3ds');
        xhr.send(file);

        // progression des transferts depuis le serveur jusqu'au client (téléchargement)
        function updateProgress (oEvent) {
          if (oEvent.lengthComputable) {
            var percentComplete = oEvent.loaded / oEvent.total * 100;
            console.log('Upload progress: ' + percentComplete + '%');
          } else {
            console.log('ERROR');
            // Impossible de calculer la progression puisque la taille totale est inconnue
          }
        }

        function transferComplete(evt) {
          alert("Le transfert est terminé.");
        }

        // xhr.addEventListener('progress', function(e) {
        //     var done = e.position || e.loaded, total = e.totalSize || e.total;
        //     console.log('xhr progress: ' + (Math.floor(done/total*1000)/10) + '%');
        // }, false);
        // if ( xhr.upload ) {
        //     xhr.upload.onprogress = function(e) {
        //         var done = e.position || e.loaded, total = e.totalSize || e.total;
        //         console.log('xhr.upload progress: ' + done + ' / ' + total + ' = ' + (Math.floor(done/total*1000)/10) + '%');
        //     };
        // }
        // xhr.onreadystatechange = function(e) {
        //     if ( 4 == this.readyState ) {
        //         console.log(['xhr upload complete', e]);
        //     }
        // };
    });

    document.body.addEventListener('dragover', function handleDragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    });

})(this);
