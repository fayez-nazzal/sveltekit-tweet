<script lang="ts">
    export let src: string;
    export let alt: string;
    export let className: string = "";
    export let draggable: boolean = false;
</script>

<img src={src} alt={alt} class={className} draggable={draggable} />
