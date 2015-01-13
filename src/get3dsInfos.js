'use strict';
var fs = require('graceful-fs');
var parse3ds = require('./parse3ds.js')


module.exports = function(buff){
    var data = parse3ds(buff);

        
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
        if(o.name === '06345507'){
            brokenObj = o;
        }
    });
    
    
    console.log(brokenObj.ownData.length);
    
    console.log({
        id: brokenObj.name,
        vertices: brokenObj.meshes.vertices,
        faces: brokenObj.meshes.faces
    });

}

