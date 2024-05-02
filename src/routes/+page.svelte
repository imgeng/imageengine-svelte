<script lang="ts">
    import Image from "../lib/components/Image.svelte";
    import ImageEngineProvider from "../lib/context/ImageEngineProvider.svelte";
    import img1 from './images/img1.jpg'
    // Sample image data
</script>

  
<Image src={img1}
		directives={{
			outputFormat: 'webp',
			rotate: 45,
			inline: true,
			width: 100
}} />

