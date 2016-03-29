'use strict'
require('./globals.js')

// Starts the system using the exported document from Generator Core
function start(document) {
    var source = project.path(document, 'source')

		var data = {
			'document': document,
			'layers': layer.all(document)
		}

		var save = converge(
				save.file
				, converge(path.resolve, project.path(document))
				, compose(formatJson, prop(__, data))
		)

		Object.keys(data).forEach(save)
		
    save.file(path.resolve(source, 'document.json'), formatJson(document))
    save.file(path.resolve(source, 'layers.json'), formatJson(layer.all(document)))

    image
        .all(document, U.flattenBy('children', layer.all(document)).filter(image.needsImage))
        .done(save.json(source('images.json')))
}

var start = 

generator().getDocumentInfo().done(start)