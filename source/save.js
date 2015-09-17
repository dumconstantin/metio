'use strict'

var makeFilePath = compose(mkdirSync(__, '0755', true), path.dirname)
var preparePath = converge(__, compose(makeFilePath, nthArg(0)), nthArg(1))

module.exports = {
    stream: preparePath(fs.createWriteStream),
		file: preparePath(fs.writeFileSync)
}