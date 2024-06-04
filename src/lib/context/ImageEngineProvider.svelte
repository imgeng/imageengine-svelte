<script lang="ts">
	import type { TImageEngineProvider } from '$lib/types';

	import { setContext } from 'svelte';
	import { Key } from '../utils/index';

	export let deliveryAddress: TImageEngineProvider['deliveryAddress'] = '';
	export let stripFromSrc: TImageEngineProvider['stripFromSrc'] = null;

	setContext(Key, {
		deliveryAddress: deliveryAddress.endsWith('/') ? deliveryAddress.slice(0, -1) : deliveryAddress,
		stripFromSrc
	});
</script>

<slot />