<script lang="ts">
	import EmbeddedTweet from './EmbeddedTweet.svelte';
	import type { ITweet } from '../types.js';

	export let components = {};
	export let tweet: ITweet;
</script>

<EmbeddedTweet {tweet} {components} />
