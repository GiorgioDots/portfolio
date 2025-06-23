<script>
	import TaskbarLocale from './TaskbarLocale.svelte';
	import TaskbarStartBtn from './start/TaskbarStartBtn.svelte';
	import TaskbarTime from './TaskbarTime.svelte';
</script>

<div
	class="bg-w95-gray-500 border-t-w95-highlight flex border border-t-2 border-transparent p-[2px]"
>
	<TaskbarStartBtn />
	<div class="ml-[8px] grow">
		<div class="bg-w95-gray-400 w-20">item</div>
	</div>
	<TaskbarLocale />
	<TaskbarTime />
</div>
