<div class="container mx-auto px-6 py-10">
	<h1 class="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">Summary</h1>

	<!-- Project Summary -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
		<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow">
			<h2 class="text-2xl font-bold">Total Tasks</h2>
			<p class="text-4xl font-extrabold mt-4">120</p>
			<p class="text-gray-500 dark:text-gray-400 mt-2">Across all projects</p>
		</div>

		<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow">
			<h2 class="text-2xl font-bold">Completed Tasks</h2>
			<p class="text-4xl font-extrabold mt-4">85</p>
			<p class="text-gray-500 dark:text-gray-400 mt-2">Tasks finished successfully</p>
		</div>

		<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow">
			<h2 class="text-2xl font-bold">Ongoing Tasks</h2>
			<p class="text-4xl font-extrabold mt-4">35</p>
			<p class="text-gray-500 dark:text-gray-400 mt-2">Tasks in progress</p>
		</div>
	</div>

	<!-- Project Progress -->
	<h2 class="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">Project Progress</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
		<div
			class="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow hover:shadow-lg transition">
			<h4 class="text-xl font-semibold">Project A</h4>
			<p class="text-gray-500 dark:text-gray-400">Task management system</p>
			<div class="relative pt-2 mt-4">
				<!-- 일반 모드와 다크 모드에 따라 배경 및 진행 바 스타일 변경 -->
				<div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300 dark:bg-gray-700">
					<div style="width: 70%"
							 class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 dark:bg-green-400"></div>
				</div>
				<p class="text-gray-500 dark:text-gray-400">70% completed</p>
			</div>
		</div>

		<div
			class="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow hover:shadow-lg transition">
			<h4 class="text-xl font-semibold">Project B</h4>
			<p class="text-gray-500 dark:text-gray-400">API development</p>
			<div class="relative pt-2 mt-4">
				<div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300 dark:bg-gray-700">
					<div style="width: 50%"
							 class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500 dark:bg-yellow-400"></div>
				</div>
				<p class="text-gray-500 dark:text-gray-400">50% completed</p>
			</div>
		</div>
	</div>

	<!-- Recent Activities -->
	<h2 class="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">Recent Activities</h2>
	<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow">
		<ul>
			<li class="mb-4">
				<p><span class="font-bold">Task "Backend Integration"</span> completed in <span
					class="font-bold">Project B</span>.</p>
				<p class="text-gray-500 dark:text-gray-400">4 hours ago</p>
			</li>
			<li class="mb-4">
				<p><span class="font-bold">Task "Frontend Design"</span> started in <span class="font-bold">Project A</span>.
				</p>
				<p class="text-gray-500 dark:text-gray-400">1 day ago</p>
			</li>
			<li>
				<p><span class="font-bold">Report "API Usage Stats"</span> generated for <span
					class="font-bold">Project B</span>.</p>
				<p class="text-gray-500 dark:text-gray-400">3 days ago</p>
			</li>
		</ul>
	</div>
</div>
