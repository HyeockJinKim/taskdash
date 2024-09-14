<script lang="ts">
	const name = 'Hyeok';
</script>

<div class="container mx-auto px-6">
	<!-- 테마 변경 버튼 -->
	<div class="flex justify-end mb-6">
		<!-- 테마 변경 버튼 등을 추가할 수 있는 공간 -->
	</div>

	<!-- 자주 사용하는 대시보드 -->
	<h2 class="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white">Welcome back, {name}!</h2>

	<!-- 최근 프로젝트 -->
	<div class="mb-10">
		<h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Recent Projects</h3>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<a href="/projects/a"
				 class="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow hover:shadow-lg transition">
				<h4 class="text-xl font-semibold text-gray-900 dark:text-white">Project A</h4>
				<p class="text-gray-500 dark:text-gray-400">Task management system</p>
			</a>
		</div>
	</div>

	<!-- 바로가기 -->
	<div>
		<h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Quick Access</h3>
		<div class="flex space-x-4">
			<!-- 버튼에 secondary 색상 적용 -->
			<a href="/new-task"
				 class="bg-primary-500 dark:bg-secondary-500 text-white dark:text-gray-900 px-6 py-3 rounded-lg shadow hover:bg-primary-600 dark:hover:bg-secondary-600 transition">
				New Task
			</a>
			<a href="/reports"
				 class="bg-primary-500 dark:bg-secondary-500 text-white dark:text-gray-900 px-6 py-3 rounded-lg shadow hover:bg-primary-600 dark:hover:bg-secondary-600 transition">
				View Reports
			</a>
		</div>
	</div>
</div>
