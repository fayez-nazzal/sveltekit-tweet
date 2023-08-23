<script lang="ts">
	import EmbeddedTweet from './EmbeddedTweet.svelte';
	import type { ITweet } from '$lib/types.js';

	export let components = {};
	export let tweet: ITweet;
</script>

<EmbeddedTweet {tweet} {components} />
