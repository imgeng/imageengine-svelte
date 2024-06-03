<script lang="ts">
    import { useImageEngineContext } from "../utils/index";
    import { constructUrl, generateSrcSetString } from "../utils/index"
    import type { IEFormat } from "@imageengine/imageengine-helpers";
    import type { TImageProps } from "../types";

  const ALLOWED_INPUT_EXTENSIONS: (IEFormat | 'tif')[] = [
  "png",
  "gif",
  "jpg",
  "jpeg",
  "bmp",
  "webp",
  "jp2",
  "svg",
  "mp4",
  "jxr",
  "avif",
  "jxl",
  "tif",
]

export let src: TImageProps['src'];
export let directives: TImageProps['directives'];
export let srcSet: TImageProps['srcSet'] = null;
export let alt: string = '';


const {deliveryAddress, stripFromSrc} = useImageEngineContext()
$: imageUrl = deliveryAddress + (stripFromSrc ? src.replace(stripFromSrc, ''): src)
$: [imageExtension] = src.split(".").slice(-1)

export const imageUrlComputed = imageUrl;
export const imageExtensionComputed = imageExtension;
export const srcSetStringComputed = srcSet ? generateSrcSetString(srcSet, deliveryAddress) : '';


$: if (imageExtension && !ALLOWED_INPUT_EXTENSIONS.includes(imageExtension.toLowerCase() as IEFormat)) {
  console.warn(
    `The following image's extension doesn't match any of the allowed types and won't be optimized: ${src}.`,
    `List of supported extensions: ${ALLOWED_INPUT_EXTENSIONS.join(", ")}.`
  )
}


</script>

<img
src={
  directives ? constructUrl(imageUrl, directives) : imageUrl
}
srcSet={srcSet && generateSrcSetString(srcSet, deliveryAddress)}
alt={alt}
{...$$restProps }
/>
