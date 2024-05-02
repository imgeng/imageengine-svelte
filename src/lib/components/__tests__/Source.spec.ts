import { render, screen } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import Source from '../Source.svelte';
import * as utilsModule from '../../utils/index.ts';

describe('Source Component', () => {
  it('Check src attribute', async () => {
    vi.spyOn(utilsModule, 'useImageEngineContext').mockReturnValue({
      deliveryAddress: 'https://blazing-fast-pics.cdn.imgeng.in',
      stripFromSrc: ''
    });

    render(Source, {
      srcSet: [], 
      src: '/images/pic_1_variation_1.jpg',
      directives: { compression: 0 },
      
    });

    const sourceElement = screen.getByTestId('source');
    expect(sourceElement).toHaveAttribute('src', '/images/pic_1_variation_1.jpg');
  });

  it('generates the correct srcSet string', async () => {
    vi.spyOn(utilsModule, 'useImageEngineContext').mockReturnValue({
      deliveryAddress: 'https://blazing-fast-pics.cdn.imgeng.in/',
      stripFromSrc: '',
    });

    render(Source, {
      props: {
        srcSet: [
          {
            src: 'images/pic_2.jpg',
            width: '300w',
            directives: {
              outputFormat: 'webp',
              rotate: 60,
            },
          },
        ],
        other: {} 
      },
    });


    const sourceElement = screen.getByTestId('source');
    expect(sourceElement).toHaveAttribute('srcset', `https://blazing-fast-pics.cdn.imgeng.in/images/pic_2.jpg?imgeng=/f_webp/r_60/w_300 300w,`);
  });
});
