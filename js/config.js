class Config {

	constructor() {
		this.getQuickSearchData = this.getQuickSearchData.bind(this);
		this.getSearchEngines = this.getSearchEngines.bind(this);
		this.getWebSites = this.getWebSites.bind(this);
		this.getDockSites = this.getDockSites.bind(this);
	}

	getQuickSearchData = () => {
		const quickSearchData = {
			'r/': {
				urlPrefix: 'https://reddit.com/r/'
			},
			'w/': {
				urlPrefix: 'https://wikipedia.org/wiki/'
			},
			'a/': {
				urlPrefix: 'https://amazon.com/s?k='	
			},
			'y/': {
				urlPrefix: 'https://youtube.com/results?search_query='
			}
		};

		return quickSearchData;
	}
	

	getSearchEngines = () => {

		const searchEngines = {
			'google': {
				name: 'Google',
				prefix: 'https://www.google.com/search?q='
			},
			'duckduckgo': {
				name: 'Duckduckgo',
				prefix: 'https://duckduckgo.com/?q='
			},
			'ecosia': {
				name: 'Ecosia',
				prefix: 'https://www.ecosia.org/search?q='
			}
		};

		return searchEngines;
	}

	getWebSites = () => {
		// Web menu
		// A list of websites that will be generated and put on the web menu
		const webSites = [
			{
				site: 'Ace & Tate',
				icon: 'aceandtate',
				url: 'https://www.aceandtate.com/nl/',
				category: 'shop'
			},
			{
				site: 'AliExpress',
				icon: 'aliexpress',
				url: 'https://www.aliexpress.com/',
				category: 'shop'
			},
			{
				site: 'Amazon',
				icon: 'amazon',
				url: 'https://amazon.com/',
				category: 'shop'
			},
			{
				site: 'Github',
				icon: 'github',
				url: 'https://github.com/',
				category: 'development'
			},
			{
				site: 'Gitlab',
				icon: 'gitlab',
				url: 'https://gitlab.com/',
				category: 'development'
			},
			{
				site: 'Instagram',
				icon: 'instagram',
				url: 'https://instagram.com/',
				category: 'social'
			},
			{
				site: 'MEGA',
				icon: 'mega',
				url: 'https://mega.nz/',
				category: 'cloud'
			},
			{
				site: 'Netflix',
				icon: 'netflix',
				url: 'https://netflix.com/',
				category: 'media'
			},
			{
				site: 'Office 365',
				icon: 'office365',
				url: 'https://office.com/',
				category: 'information'
			},
			{
				site: 'Reddit',
				icon: 'reddit',
				url: 'https://reddit.com/',
				category: 'social'
			},
			{
				site: 'Twitch',
				icon: 'twitch',
				url: 'https://twitch.tv/',
				category: 'media'
			},
			{
				site: 'Youtube',
				icon: 'youtube',
				url: 'https://youtube.com/',
				category: 'media'
			}
		];

		return webSites;
	}

	getDockSites = () => {
		// Dock
		// A list of websites that will be generated and put on the dock
		const dockSites = [
			{
				site: 'Reddit',
				icon: 'reddit',
				url: 'https://reddit.com/'
			},
			{
				site: 'Github',
				icon: 'github',
				url: 'https://github.com/'
			},
			{
				site: 'Youtube',
				icon: 'youtube',
				url: 'https://youtube.com/'
			}
		];

		return dockSites;
	}
}
