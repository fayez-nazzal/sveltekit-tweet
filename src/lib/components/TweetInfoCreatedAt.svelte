<script lang="ts">
	import { onMount } from 'svelte';
	import type { TEnrichedTweet } from '../types.js';
	import { format } from 'date-fns';

	export let tweet: TEnrichedTweet;

	let mounted = false;
	let createdAt: Date | null = null;

	onMount(() => {
		mounted = true;
		if (typeof window !== 'undefined') {
			createdAt = new Date(tweet.created_at);
		}
	});
</script>

{#if createdAt}
	<a
		class="root"
		href={tweet.url}
		target="_blank"
		rel="noopener noreferrer"
		aria-label={format(createdAt, 'h:mm a · MMM d, y')}
	>
		<time dateTime={createdAt.toISOString()}>
			{format(createdAt, 'h:mm a · MMM d, y')}
		</time>
	</a>
{/if}
