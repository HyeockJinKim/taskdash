<script>
	import { DarkMode, Navbar, NavBrand, NavLi, NavUl } from 'flowbite-svelte';
	import taskDash from "$lib/images/taskdash.png";
	import "../app.css";
</script>

<Navbar let:hidden fluid={true} class="bg-primary-500 dark:bg-secondary-700 shadow-lg">
	<NavBrand href="/">
		<img src={taskDash} class="mr-3 h-8 rounded-full" alt="taskDash" />
		<span class="self-center text-2xl font-bold text-primary-50 dark:text-secondary-100">TaskDash</span>
	</NavBrand>
	<NavUl {hidden} class="flex-col md:flex-row md:space-x-4">
		<NavLi href="/dash" active={true} class="text-primary-50 dark:text-secondary-100 hover:text-primary-300 dark:hover:text-secondary-300">Dashboard</NavLi>
		<NavLi href="/alert" class="text-primary-50 dark:text-secondary-100 hover:text-primary-300 dark:hover:text-secondary-300">Alert</NavLi>
		<NavLi href="/summary" class="text-primary-50 dark:text-secondary-100 hover:text-primary-300 dark:hover:text-secondary-300">Summary</NavLi>
		<NavLi href="/settings" class="text-primary-50 dark:text-secondary-100 hover:text-primary-300 dark:hover:text-secondary-300">Settings</NavLi>
		<DarkMode btnClass="text-primary-50 dark:text-secondary-100 hover:text-primary-300 dark:hover:text-secondary-300"/>
	</NavUl>
</Navbar>

<section class="bg-white dark:bg-gray-700 text-gray-800 dark:text-white py-10 min-h-screen">
	<slot></slot>
</section>