module.exports = converge(
		invoke(1, "start")
		, always({
			port: 49494
			, hostname: 'localhost'
			, password: '123456'
		})
		, generatorCore.createGenerator
)