'use strict'

var makePath = 

module.exports = {
    stream: converge(fs.createWriteStream, makeFilePath, nthArg(1)),
		file: converge(fs.writeFileSync, makeFilePath, nthArg(1))
}