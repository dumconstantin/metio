'use strict'
require('./globals.js')

// Starts the system using the exported document from Generator Core
function start(document) {
    var source = project.file(document, 'source')

    save.file(source('document.json'), formatJson(document))
    save.file(source('layers.json'), formatJson(layer.all(document)))

    image
        .all(document, U.flattenBy('children', layer.all(document)).filter(image.needsImage))
        .done(save.json(source('images.json')))
}

generator.documentP().done(start)