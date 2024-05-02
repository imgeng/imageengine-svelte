import type { TImageEngineProvider, TSrcSet } from "../types"
import type { IEDirectives } from '@imageengine/imageengine-helpers';
import { build_IE_url } from "@imageengine/imageengine-helpers";
import { getContext } from 'svelte'

export function constructUrl(src: string, directives: IEDirectives): string {
    return build_IE_url(src, directives, true);
}

export function generateSrcSetString(srcSet: TSrcSet, deliveryAddress: string): string {
    return srcSet.reduce((result, { src, width, directives }) => {
        const widthDirective = {
            width: Number(width.replace("w", "")),
        }
        const fullImageUrl = constructUrl(
            deliveryAddress + src,
            directives
                ? {
                    ...directives,
                    ...widthDirective,
                }
                : widthDirective
        )
        const entry = `${fullImageUrl} ${width},`
        return result += entry
    }, "")
}

export const Key = Symbol();

export function useImageEngineContext() {
    const ctx = getContext<TImageEngineProvider>(Key);

    if (ctx.deliveryAddress === "") {
        throw new Error(
            "Please ensure that you've defined <ImageEngineProvider deliveryAddress='...'> " +
            "somewhere above <Image> / <Source> components in the DOM tree."
        )

    }

    return ctx;
}