import { getTweet } from '$lib/utils.server.js';

export const load = (async () => {
    const tweet = await getTweet('1693687247323922878')

    return {
        tweet
    };
});