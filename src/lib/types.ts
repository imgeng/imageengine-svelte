import type { SvelteComponent } from 'svelte';

import type { IEDirectives } from "@imageengine/imageengine-helpers";

export type TSrcSet = Array<{
  src: string;
  width: string;
  directives?: IEDirectives;
}>;

export type TImageEngineProvider = {
  children: SvelteComponent;
  deliveryAddress: string;
  stripFromSrc?: string | null;
};

export type TImageProps = {
  src: string;
  directives?: IEDirectives;
  srcSet?: TSrcSet | null;
} ;

export type TSourceProps = {
  srcSet: TSrcSet;
} ;

export type TPictureProps = {
  children: [...Array<SvelteComponent<TSourceProps>>, SvelteComponent<TImageProps>];
} ;

export * from "@imageengine/imageengine-helpers";
