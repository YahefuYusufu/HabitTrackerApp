module.exports = function (api) {
	api.cache(true)
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					root: ["./src"],
					extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
					alias: {
						"@app": "./src/app",
						"@components": "./src/components",
						"@constants": "./src/constants",
						"@hooks": "./src/hooks",
						"@screens": "./src/screens",
						"@services": "./src/services",
						"@store": "./src/store",
						"@styles": "./src/styles",
						"@theme": "./src/theme",
						"@types": "./src/types",
						"@utils": "./src/utils",
					},
				},
			],
			"react-native-reanimated/plugin",
		],
	}
}
