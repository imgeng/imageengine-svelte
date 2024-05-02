import { render } from '@testing-library/svelte';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { setContext } from 'svelte';
import ImageEngineProvider from '../../context/ImageEngineProvider.svelte';

vi.mock('svelte', () => {
  const mockSetContext = vi.fn();
  return {
    ...vi.importActual('svelte'),
    setContext: mockSetContext
  };
});

describe('ImageEngineProvider Tests', () => {
  afterEach(() => {
    vi.mocked(setContext).mockClear();  
  });

  it('should set the correct context for deliveryAddress without trailing slash', () => {
    render(ImageEngineProvider, { props: { deliveryAddress: 'http://example.com/' } });
    expect(vi.mocked(setContext)).toHaveBeenCalledWith(expect.anything(), {
      deliveryAddress: 'http://example.com',
      stripFromSrc: null
    });
  });


  it('should handle stripFromSrc when provided', () => {
    render(ImageEngineProvider, { props: { stripFromSrc: 'path/to/strip' } });
    expect(vi.mocked(setContext)).toHaveBeenCalledWith(expect.anything(), {
      deliveryAddress: '',
      stripFromSrc: 'path/to/strip'
    });
  });

  it('should not modify deliveryAddress if no trailing slash is present', () => {
    render(ImageEngineProvider, { props: { deliveryAddress: 'http://example.com' } });
    expect(vi.mocked(setContext)).toHaveBeenCalledWith(expect.anything(), {
      deliveryAddress: 'http://example.com',
      stripFromSrc: null
    });
  });

});