<script lang="ts">

	const formatTime = (date: Date) =>
		new Intl.DateTimeFormat('en-US', {
			hour: 'numeric',
			minute: '2-digit',
			hour12: true
		}).format(date);

	let currTime = $state(formatTime(new Date()));

	$effect(() => {
		const interval = setInterval(() => {
			currTime = formatTime(new Date());
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<div
	class="border-t-w95-downlight-400 border-l-w95-downlight-400 border-b-w95-highlight border-r-w95-highlight border-2 pr-[10px] pl-[10px] text-[1rem]"
>
	{currTime}
</div>
