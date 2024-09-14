<script>
import Chart from './Chart.svelte';
</script>

<div class="container mx-auto px-6 py-10">
	<h1 class="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">Welcome back, Hyeok!</h1>

	<!-- Statistics Section -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
		<div class="p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow">
			<h2 class="text-2xl font-bold">Tasks Completed</h2>
			<p class="text-4xl font-extrabold mt-4">45</p>
			<p class="text-gray-500 dark:text-gray-400 mt-2">In the last 7 days</p>
		</div>

		<div class="p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow">
			<h2 class="text-2xl font-bold">Active Projects</h2>
			<p class="text-4xl font-extrabold mt-4">3</p>
			<p class="text-gray-500 dark:text-gray-400 mt-2">Currently ongoing</p>
		</div>

		<div class="p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow">
			<h2 class="text-2xl font-bold">Reports Generated</h2>
			<p class="text-4xl font-extrabold mt-4">12</p>
			<p class="text-gray-500 dark:text-gray-400 mt-2">This month</p>
		</div>
	</div>

	<!-- Recent Projects -->
	<h2 class="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">Recent Projects</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
		<a href="/projects/a"
			 class="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow hover:shadow-lg transition">
			<h4 class="text-xl font-semibold text-gray-900 dark:text-white">Project A</h4>
			<p class="text-gray-500 dark:text-gray-400">Task management system</p>
		</a>
		<a href="/projects/b"
			 class="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow hover:shadow-lg transition">
			<h4 class="text-xl font-semibold text-gray-900 dark:text-white">Project B</h4>
			<p class="text-gray-500 dark:text-gray-400">API development</p>
		</a>
	</div>

	<!-- Recent Activities -->
	<h2 class="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">Recent Activities</h2>
	<div class="p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow mb-10">
		<ul>
			<li class="mb-4">
				<p><span class="font-bold">Task "UI Design" </span> completed in <span class="font-bold">Project A</span>.</p>
				<p class="text-gray-500 dark:text-gray-400">2 hours ago</p>
			</li>
			<li class="mb-4">
				<p><span class="font-bold">Report "Weekly Progress"</span> generated in <span class="font-bold">Project B</span>.
				</p>
				<p class="text-gray-500 dark:text-gray-400">1 day ago</p>
			</li>
			<li>
				<p><span class="font-bold">Task "Database Setup"</span> added in <span class="font-bold">Project C</span>.</p>
				<p class="text-gray-500 dark:text-gray-400">3 days ago</p>
			</li>
		</ul>
	</div>
	<h2 class="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">Recent Activities</h2>
	<div class="p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow">
		<Chart/>
	</div>
</div>
