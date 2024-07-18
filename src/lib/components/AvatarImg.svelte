<script lang="ts">
	export let src: string;
	export let alt: string;
	export let width: string;
	export let height: string;
	export let style = '';
</script>

<img {src} {alt} {width} {height} {style} loading="lazy" />
