<script lang="ts">
    import { useImageEngineContext, generateSrcSetString } from "../utils/index";
    import type { TSourceProps } from '../types'; 
    import { preprocess } from "svelte/compiler";

    export let srcSet: TSourceProps['srcSet'];


    const { deliveryAddress, stripFromSrc } = useImageEngineContext();

    $: srcSetString = generateSrcSetString(
        stripFromSrc
            ? srcSet.map(image => ({
                  ...image,
                  src: image.src.replace(stripFromSrc, '')
              }))
            : srcSet,
        deliveryAddress
    );
</script>

<source srcSet={srcSetString} {...$$restProps} data-testid="source"/>