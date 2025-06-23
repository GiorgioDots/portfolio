<script lang="ts">
	import { getLocale, setLocale, type Locale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';
</script>

<button
	class="mr-2"
	onclick={() => {
		setLocale(getLocale() == 'it' ? 'en' : 'it');
	}}
>
	{m.currentLocale()}
</button>
