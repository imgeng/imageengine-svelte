import { render } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import Picture from '../Picture.svelte';

describe('Picture Component', () => {
  it('renders correctly', () => {
    const { container } = render(Picture);
    expect(container.querySelector('picture')).toBeTruthy();
  });
});