<template>
    <div class="shadow-2 border-gray-100 ">
        <header class="flex h-16 container mx-auto justify-between items-center">
            <div class="flex items-center">
                <router-link :to="{ name: 'home' }" class="inline-block">
                  <img class="w-56" src="https://laravel-courses.com/img/logo.png?1.0" alt="Logo">
                </router-link>
                <nav class="hidden h-16 space-x-8 sm:-my-px sm:ml-10 sm:flex">
                    <router-link :to="{ name: 'courses' }" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-base font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition">Courses</router-link>
                    <router-link :to="{ name: 'courses' }" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-base font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition">Books</router-link>
                </nav>
            </div>
    
            <!--Signup&login button-->
            <div class="flex items-center">
                <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-900">Sign in</a>
                <a href="#" class="ml-8 inline-flex items-center justify-center rounded border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-500">Sign up</a>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    name:"Header"
}
</script>