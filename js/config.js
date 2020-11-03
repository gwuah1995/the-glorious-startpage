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
			'y/': {
				urlPrefix: 'https://youtube.com/results?search_query='
			}
		};

		return quickSearchData;
	}
	

	getSearchEngines = () => {

		const searchEngines = {
			'qwant': {
				name: 'Qwant',
				prefix: 'https://www.qwant.com/?q='
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
				site: 'AlleFolders',
				icon: 'allefolders',
				url: 'https://www.allefolders.nl/',
				category: 'shop'
			},
			{
				site: 'Amazon',
				icon: 'amazon',
				url: 'https://amazon.nl/',
				category: 'shop'
			},
			{
				site: 'ASN Bank',
				icon: 'asnbank',
				url: 'https://www.asnbank.nl/home.html',
				category: 'finance'
			},
			{
				site: 'Autoscout24',
				icon: 'autoscout24',
				url: 'https://www.autoscout24.nl',
				category: 'shop'
			},
			{
				site: 'Bol',
				icon: 'bol',
				url: 'https://www.bol.com/nl/index.html',
				category: 'shop'
			},
			{
				site: 'DEGIRO',
				icon: 'degiro',
				url: 'https://trader.degiro.nl/login/nl#/login',
				category: 'finance'
			},
			{
				site: 'EdX',
				icon: 'edx',
				url: 'https://courses.edx.org/login',
				category: 'information'
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
				site: 'Home Assistant',
				icon: 'homeassistant',
				url: 'http://192.168.1.48:8123',
				category: 'home'
			},
			{
				site: 'Ikea',
				icon: 'ikea',
				url: 'https://www.ikea.com/nl/',
				category: 'shop'
			},
			{
				site: 'Instagram',
				icon: 'instagram',
				url: 'https://instagram.com/',
				category: 'social'
			},
			{
				site: 'Jellyfin',
				icon: 'jellyfin',
				url: 'http://192.168.1.48:8096',
				category: 'home'
			},
			{
				site: 'Kickstarter',
				icon: 'kickstarter',
				url: 'https://www.kickstarter.com/login?ref=nav',
				category: 'shop'
			},
			{
				site: 'Kraket',
				icon: 'kraket',
				url: 'https://kraket.nl/en',
				category: 'social'
			},
			{
				site: 'Lichess',
				icon: 'lichess',
				url: 'https://lichess.org/',
				category: 'games'
			},
			{
				site: 'LinkedIn',
				icon: 'linkedin',
				url: 'https://www.linkedin.com/',
				category: 'social'
			},
			{
				site: 'MEGA',
				icon: 'mega',
				url: 'https://mega.nz',
				category: 'security'
			},
			{
				site: 'MyPUP',
				icon: 'mypup',
				url: 'https://login.mypup.nl/Login?ReturnUrl=%2F',
				category: 'shop'
			},
			{
				site: 'Netflix',
				icon: 'netflix',
				url: 'https://netflix.com/',
				category: 'media'
			},
			{
				site: 'NordVPN',
				icon: 'nordvpn',
				url: 'https://nordvpn.com',
				category: 'security'
			},
			{
				site: 'NS',
				icon: 'ns',
				url: 'https://login.ns.nl/login',
				category: 'travel'
			},
			{
				site: 'Office 365',
				icon: 'office365',
				url: 'https://office.com/',
				category: 'information'
			},
			{
				site: 'OV-chipkaart',
				icon: 'ovchipkaart',
				url: 'https://www.ov-chipkaart.nl/home.htm#/',
				category: 'travel'
			},
			{
				site: 'Overleaf',
				icon: 'overleaf',
				url: 'https://www.overleaf.com/login',
				category: 'development'
			},
			{
				site: 'PayPal',
				icon: 'paypal',
				url: 'https://www.paypal.com/signin?country.x=nl&locale.x=nl_nl',
				category: 'finance'
			},
			{
				site: 'PostNL',
				icon: 'postnl',
				url: 'https://jouw.postnl.nl/account/nl-NL/overzicht/track-and-trace',
				category: 'shop'
			},
			{
				site: 'Protonmail',
				icon: 'protonmail',
				url: 'https://mail.protonmail.com/login',
				category: 'security'
			},
			{
				site: 'Reddit',
				icon: 'reddit',
				url: 'https://reddit.com/',
				category: 'social'
			},
			{
				site: 'SimpleNote',
				icon: 'simplenote',
				url: 'https://app.simplenote.com/signin',
				category: 'security'
			},
			{
				site: 'Tele2',
				icon: 'tele2',
				url: 'https://www.tele2.nl/mijn-tele2/',
				category: 'shop'
			},
			{
				site: 'Tweakers',
				icon: 'tweakers',
				url: 'https://tweakers.net/',
				category: 'media'
			},
			{
				site: 'Twitch',
				icon: 'twitch',
				url: 'https://twitch.tv/',
				category: 'media'
			},
			{
				site: 'VUNet',
				icon: 'vunet',
				url: 'https://vunet.login.vu.nl',
				category: 'school'
			},
			{
				site: 'Youtube',
				icon: 'youtube',
				url: 'https://www.youtube.com/feed/subscriptions',
				category: 'media'
			},
			{
				site: 'Ziggogo',
				icon: 'ziggogo',
				url: 'https://www.ziggogo.tv/nl.html',
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
				site: 'Youtube',
				icon: 'youtube',
				url: 'https://www.youtube.com/feed/subscriptions'
			},
			{
				site: 'Instagram',
				icon: 'instagram',
				url: 'https://instagram.com/'
			},
			{
				site: 'Reddit',
				icon: 'reddit',
				url: 'https://reddit.com/'
			},
			{
				site: 'LinkedIn',
				icon: 'linkedin',
				url: 'https://www.linkedin.com/'
			},
			{
				site: 'Tweakers',
				icon: 'tweakers',
				url: 'https://tweakers.net/'
			},
			{
				site: 'Home Assistant',
				icon: 'homeassistant',
				url: 'http://192.168.1.48:8123'
			},
			{
				site: 'Jellyfin',
				icon: 'jellyfin',
				url: 'http://192.168.1.48:8096'
			},
			{
				site: 'Ziggo Go',
				icon: 'ziggogo',
				url: 'https://www.ziggogo.tv/nl.html'
			}
		];

		return dockSites;
	}
}
