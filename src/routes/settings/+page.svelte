<div class="container mx-auto px-6 py-10">
	<h1 class="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">Settings</h1>

	<!-- Profile Settings -->
	<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow mb-10">
		<h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Profile Settings</h2>
		<form>
			<!-- Name Input -->
			<div class="mb-4">
				<label for="name" class="block text-sm font-medium text-gray-900 dark:text-gray-400">Name</label>
				<input
					type="text"
					id="name"
					class="block w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg shadow-sm px-4 py-2 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
					value="Hyeok"
				/>
			</div>

			<!-- Email Input -->
			<div class="mb-4">
				<label for="email" class="block text-sm font-medium text-gray-900 dark:text-gray-400">Email</label>
				<input
					type="email"
					id="email"
					class="block w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg shadow-sm px-4 py-2 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
					value="hyeok@example.com"
				/>
			</div>

			<!-- Password Input -->
			<div class="mb-6">
				<label for="password" class="block text-sm font-medium text-gray-900 dark:text-gray-400">Password</label>
				<input
					type="password"
					id="password"
					class="block w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg shadow-sm px-4 py-2 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
				/>
			</div>

			<!-- Submit Button -->
			<div class="flex justify-end">
<!--			bg-primary-500 dark:bg-secondary-700 	-->
				<button
					type="submit"
					class="bg-primary-500 dark:bg-secondary-700 text-white px-6 py-3 rounded-lg shadow hover:bg-primary-600 dark:hover:bg-secondary-800 transition"
				>
					Save Changes
				</button>
			</div>
		</form>
	</div>

	<!-- Theme Settings -->
	<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow">
		<h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Theme Settings</h2>
		<form>
			<!-- Light/Dark Mode Toggle -->
			<div class="mb-4">
				<label class="block text-sm font-medium text-gray-900 dark:text-gray-400">Select Theme</label>
				<select
					class="block w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg shadow-sm px-4 py-2 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
				>
					<option value="light">Light</option>
					<option value="dark">Dark</option>
				</select>
			</div>

			<!-- Submit Button -->
			<div class="flex justify-end">
				<button
					type="submit"
					class="bg-primary-500 dark:bg-secondary-700 text-white px-6 py-3 rounded-lg shadow hover:bg-primary-600 dark:hover:bg-secondary-800 transition"
				>
					Save Changes
				</button>
			</div>
		</form>
	</div>
</div>
