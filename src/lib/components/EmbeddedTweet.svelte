<script lang="ts">
	import { enrichTweet } from '../utils.js';
	import { building, dev } from '$app/environment';
	import TweetContainer from './TweetContainer.svelte';
	import TweetHeader from './TweetHeader.svelte';
	import TweetInReplyTo from './TweetInReply.svelte';
	import TweetBody from './TweetBody.svelte';
	import TweetMedia from './TweetMedia.svelte';
	import TweetInfo from './TweetInfo.svelte';
	import TweetActions from './TweetActions.svelte';
	import TweetReplies from './TweetReplies.svelte';
	// import QuotedTweet from './quoted-tweet/QuotedTweet.svelte';
	import type { ITweet, TwitterComponents } from '../types.js';

	export let tweet: ITweet;
	export let components: TwitterComponents = {};

	if (dev || building) console.info(`using tweet ${JSON.stringify(tweet)}`);

	let enrichedTweet: any;
	try {
		enrichedTweet = enrichTweet(tweet);
	} catch (e) {
		console.log(e);
	}
</script>

<svelte:options css="injected" />
{#if enrichedTweet}
	<TweetContainer>
		<TweetHeader tweet={enrichedTweet} {components} />
		{#if enrichedTweet.in_reply_to_status_id_str}
			<TweetInReplyTo tweet={enrichedTweet} />
		{/if}
		<TweetBody tweet={enrichedTweet} />
		{#if enrichedTweet.mediaDetails?.length}
			<TweetMedia tweet={enrichedTweet} {components} />
		{/if}
		<!-- {#if enrichedTweet.quoted_tweet}
      <QuotedTweet {enrichedTweet.quoted_tweet} />
    {/if} -->
		<TweetInfo tweet={enrichedTweet} />
		<TweetActions tweet={enrichedTweet} />
		<TweetReplies tweet={enrichedTweet} />
	</TweetContainer>
{/if}
