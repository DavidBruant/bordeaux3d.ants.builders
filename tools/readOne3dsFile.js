'use strict';

var parse3ds = require('../tools/parse3ds.js')


module.exports = function(filename){
    parse3ds(filename, function(err, data){
        if(err) throw err;
        
        var objects = data.getObjects();
        
        /*
        return {
            id: o.name,
            vertices: o.meshes.vertices,
            faces: o.meshes.faces
        };
        
        */
        
        var brokenObj;
        var meshes = objects.forEach(function(o){
            console.log(o.ownData.length);
        
            console.log({
                id: o.name,
                vertices: o.meshes.vertices,
                faces: o.meshes.faces
            });
        });
        
    });
};
