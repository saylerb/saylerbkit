export const SITE_URL = 'https://saylerb.com';
export const APPROVED_POSTERS_GH_USERNAME = ['saylerb'];
export const DEFAULT_AUTHOR_NAME= "saylerb"
export const GH_USER_REPO = 'saylerb/saylerbkit'; // used for pulling github issues and offering comments
export const SITE_TITLE = 'Brian';
export const SITE_DESCRIPTION = "saylerb's default SvelteKit + Tailwind starter";
export const DEFAULT_OG_IMAGE =
	'https://user-images.githubusercontent.com/6764957/147861359-3ad9438f-41d1-47c8-aa05-95c7d18497f0.png';
export const MY_TWITTER_HANDLE = 'BrianSayler';
export const MY_YOUTUBE = "youtube.com"
export const POST_CATEGORIES = ['Essay', 'Note']; // Other categories you can consider adding: Talks, Tutorials, Snippets, Podcasts, Notes...
export const GH_PUBLISHED_TAGS = ['Published'];

// auto generated variables
export const REPO_URL = 'https://github.com/' + GH_USER_REPO;
export const REPO_OWNER = GH_USER_REPO.split('/')[0];

// dont forget process.env.GH_TOKEN
// if supplied, raises rate limit from 60 to 5000
// https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting
