import { render,screen } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import Image from '../Image.svelte';
import * as utilsModule from '../../utils/index.js'; 

describe('Image Component', () => {
  it('renders an image with the expected source', async () => {

    const mockUseImageEngineContext = vi.spyOn(utilsModule, 'useImageEngineContext').mockReturnValue({
      deliveryAddress: 'https://blazing-fast-pics.cdn.imgeng.in',
      stripFromSrc: ''
    });


  render(Image, {
      props: {
        src: '/images/pic_1_variation_1.jpg',
        directives: { compression: 0 },
        srcSet: [],
      },
    });


    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://blazing-fast-pics.cdn.imgeng.in/images/pic_1_variation_1.jpg?imgeng=/cmpr_0');


    mockUseImageEngineContext.mockRestore();
  });

  it('renders an image with the expected alt', async () => {
   
    const mockUseImageEngineContext = vi.spyOn(utilsModule, 'useImageEngineContext').mockReturnValue({
      deliveryAddress: 'https://blazing-fast-pics.cdn.imgeng.in/',
      stripFromSrc: '',
    });

    render(Image, {
      props: {
        src: 'images/pic.jpg',
        alt: 'image_1', 
      },
    });

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', 'image_1');

    mockUseImageEngineContext.mockRestore();
  });

  it('checks computed values', async () => {
    const mockUseImageEngineContext = vi.spyOn(utilsModule, 'useImageEngineContext').mockReturnValue({
      deliveryAddress: 'https://blazing-fast-pics.cdn.imgeng.in/',
      stripFromSrc: ''
    });
  
    render(Image, {
      props: {
        src: 'images/pic.jpg',
        directives: { quality: 90 }, 
        srcSet: [
          { src: "images/pic.jpg", width: "400w", directives: { width: 400 } },
          { src: "images/pic.jpg", width: "800w", directives: { width: 800 } },
        ],
      },
    });
  

    const image = screen.getByRole('img');
    const imageUrl = image.getAttribute('src');

    const expectedSrcSetString = 
    `https://blazing-fast-pics.cdn.imgeng.in/images/pic.jpg?imgeng=/w_400 400w,` +
    `https://blazing-fast-pics.cdn.imgeng.in/images/pic.jpg?imgeng=/w_800 800w,`;
  

    expect(image.getAttribute('srcset')).toBe(expectedSrcSetString);
    expect(imageUrl).toMatch(/\.jpg$/);
    expect(imageUrl).toEqual("https://blazing-fast-pics.cdn.imgeng.in/images/pic.jpg");
  
    // Clean up mocks
    mockUseImageEngineContext.mockRestore();
  });
  
});


