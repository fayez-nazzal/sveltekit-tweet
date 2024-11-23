<script lang="ts">
	import { onDestroy } from 'svelte';
	import type {
		IMediaAnimatedGif,
		IMediaVideo,
		TEnrichedQuotedTweet,
		TEnrichedTweet
	} from '../types.js';
	import { getMediaUrl, getMp4Video } from '../utils.js';

	export let tweet: TEnrichedTweet | TEnrichedQuotedTweet;
	export let media: IMediaAnimatedGif | IMediaVideo;
	
	let playButton = true;
	let isPlaying = false;
	let ended = false;
	let mp4Video = getMp4Video(media);
	let timeout: any;

	onDestroy(() => {
		clearTimeout(timeout);
	});

	function handlePlay(video: HTMLMediaElement) {
		if (timeout) clearTimeout(timeout);
		if (!isPlaying) isPlaying = true;
		if (ended) ended = false;
	}
	
	function handlePause(video: HTMLMediaElement) {
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			if (isPlaying) isPlaying = false;
			timeout = null;
		}, 100);
	}

	function handleEnded() {
		ended = true;
	}

	function handleButtonClick(video: HTMLMediaElement) {
		playButton = false;
		isPlaying = true;
		video.play();
		video.focus();
	}
</script>

<svelte:options css="injected" />
<video
	class="image"
	poster={getMediaUrl(media, 'small')}
	controls={!playButton}
	muted
	preload="metadata"
	tabIndex={playButton ? -1 : 0}
	on:play={(e) => handlePlay(e.target)}
	on:pause={(e) => handlePause(e.target)}
	on:ended={handleEnded}
>
	<source src={mp4Video.url} type={mp4Video.content_type} />
</video>

{#if playButton}
	<button
		type="button"
		class="videoButton"
		aria-label="View video on Twitter"
		on:click={(e) => handleButtonClick(e.target.previousSibling)}
	>
		<svg viewBox="0 0 24 24" class="videoButtonIcon" aria-hidden="true">
			<g>
				<path d="M21 12L4 2v20l17-10z" />
			</g>
		</svg>
	</button>
{/if}

{#if !isPlaying && !ended}
	<div class="watchOnTwitter">
		<a href={tweet.url} class="anchor" target="_blank" rel="noopener noreferrer">
			{playButton ? 'Watch on Twitter' : 'Continue watching on Twitter'}
		</a>
	</div>
{/if}

{#if ended}
	<a href={tweet.url} class="anchor viewReplies" target="_blank" rel="noopener noreferrer">
		View replies
	</a>
{/if}
