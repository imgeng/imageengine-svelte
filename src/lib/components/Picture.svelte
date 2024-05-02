<script lang="ts">
  import { onMount } from 'svelte';

  let pictureRef: HTMLPictureElement;

  onMount(() => {
		const imgChild = Array.from(pictureRef.childNodes).find((child) => {
			if (typeof child === 'object' && 'nodeValue' in child) {
				return child.nodeValue?.includes('Image');
			}
		});

    if (!imgChild) {
      console.warn(
        `A fallback <Image> is missing as the last child of the <Picture> component.`,
        `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture`
      );
    }
  });
</script>

<picture bind:this={pictureRef}>
  <slot />
</picture>
