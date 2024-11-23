<script lang="ts">
	export let href: string;
</script>

<svelte:options css="injected" />
<a {href} class="root" target="_blank" rel="noopener noreferrer">
	<slot />
</a>

<style>
	.root {
		font-weight: inherit;
		color: var(--tweet-color-blue-secondary);
		text-decoration: none;
		cursor: pointer;
	}

	.root:hover {
		text-decoration-thickness: 1px;
		text-decoration-line: underline;
	}
</style>
