module.exports = {
	development: ['last 2 Chrome versions', 'last 2 Firefox versions', 'last 2 Safari versions', 'Firefox ESR'],
	production: [
		'defaults',
		'IE >= 11',
		'Edge >= 12',

		'Chrome >= 49',
		'Firefox >= 52',
		'Firefox ESR',
		'Safari >= 10',

		// `browserslist` uses [Can I Use](https://caniuse.com/) database
		// which only contains the data for the last one versions of mobile browsers
		'last 1 Android version',
		'last 1 ChromeAndroid version',
		'last 1 FirefoxAndroid version',
		'last 1 iOS version',
	],
}
