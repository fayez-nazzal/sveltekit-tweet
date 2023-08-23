import { getTweet } from '$lib/utils.server.js';

export const load = async () => {
	try {
		const tweet = await getTweet('1693687247323922878');

		return {
			tweet
		};
	} catch (error) {
		return {
			status: 500,
			error: 'Could not load tweet'
		};
	}
};
