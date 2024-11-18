# ImageEngine Svelte

Seamlessly integrate optimized responsive images in your Svelte applications using ImageEngine Svelte components.

## Quick Start

The package includes four components:

- `ImageEngineProvider`
- `Image`
- `Picture`
- `Source`

To start using these components, place `ImageEngineProvider` above them in the DOM tree with the `deliveryAddress` prop set:

```svelte
<script>
  import { ImageEngineProvider } from "@imageengine/svelte";
</script>

<ImageEngineProvider deliveryAddress="https://blazing-fast-pics.cdn.imgeng.in">
  <YourComponent />
</ImageEngineProvider>
```

### Example Usage

```svelte
<script>
  import { Image } from "@imageengine/svelte";
</script>

<section>
  <Image
    src="pick-ups/custom/unstoppable.jpg"
    srcSet={...}
    sizes={...}
    directives={...}
    {...otherProps}
  />
</section>
```

## Component Props Reference

### `ImageEngineProvider`

- `deliveryAddress`: ImageEngine Delivery Address.
  - Type: `string`
- `stripFromSrc`: Optionally strip a portion of the source string in all ImageEngine components.
  - Type: `string?`

### `Image`

- `src`: Relative path to the image.
  - Type: `string`
- `directives`: ImageEngine directives for optimization.
  - Type: `object?`
  - Properties:
    - `width`: Define desired width.
    - `autoWidthWithFallback`: Set width to auto (with fallback).
    - `height`: Define desired height.
    - `compression`: Adjust compression.
    - `outputFormat`: Define desired output format.
    - `fitMethod`: Define desired fit method.
    - `noOptimization`: Don't apply any optimizations to the origin image.
    - `sharpness`: Adjust sharpness.
    - `rotate`: Define rotation.
    - `scaleToScreenWidth`: Use WURFL to calculate screen's width and then scale the image accordingly.
    - `crop`: Crop the image [width, height, left, top].
    - `inline`: Convert the image into a data url.
    - `keepMeta`: Keep EXIF data.
    - `force_download`: Force download of the image.
    - `max_device_pixel_ratio`: Maximum device pixel ratio.
- `srcSet`: List of image variations for the image source set.
  - Type: `array?`
  - Properties:
    - `src`: Relative path to the image.
    - `width`: Width descriptor.
    - `directives`: Custom optimization instructions.

### `Picture`

This component wraps image components to provide a responsive container.

### `Source`

- `srcSet`: List of image variations for the image source set.
  - Type: `array`
  - Properties:
    - `src`: Relative path to the image.
    - `width`: Width descriptor.
    - `directives`: Custom optimization instructions.
