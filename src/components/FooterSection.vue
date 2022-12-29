<template>
    <footer class="w-full bg-dark pt-[94px] relative">
        <img src="https://laravel-courses.com/img/footer-cure.png" alt="Stylish Design" class="w-auto h-auto object-contain absolute bottom-0 right-0 pointer-events-none z-10">
        <div class="container mx-auto flex justify-between pb-[50px]">
          <!--Footer Item-->
          <div>
            <h2 class="text-lg-primary-2 text-white">Course by Series</h2>
            <ul class="mt-5">
              <li class="mb-2">
                <router-link to="/" class="text-links text-gray-100 text-base before:text-gray-100">Laravel</router-link>
              </li>
              <li class="mb-2">
                <router-link to="/" class="text-links text-gray-100 text-base before:text-gray-100">PHP</router-link>
              </li>
              <li class="mb-2">
                <router-link to="/" class="text-links text-gray-100 text-base before:text-gray-100">Livewire</router-link>
              </li>
              <li class="mb-2">
                <router-link to="/" class="text-links text-gray-100 text-base before:text-gray-100">Vue.js</router-link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-lg-primary-2 text-white">Course by Duration</h2>
            <ul class="mt-5">
              <li class="mb-2">
                <router-link to="/" class="text-links text-gray-100 text-base before:text-gray-100">1-5 hours</router-link>
              </li>
              <li class="mb-2">
                <router-link to="/" class="text-links text-gray-100 text-base before:text-gray-100">5-10 hours</router-link>
              </li>
              <li class="mb-2">
                <router-link to="/" class="text-links text-gray-100 text-base before:text-gray-100">10+ hours</router-link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-lg-primary-2 text-white">Course by Level</h2>
            <ul class="mt-5">
              <li class="mb-2">
                <router-link to="/" class="text-links text-gray-100 text-base before:text-gray-100">Beginner</router-link>
              </li>
              <li class="mb-2">
                <router-link to="/" class="text-links text-gray-100 text-base before:text-gray-100">Intermediate</router-link>
              </li>
              <li class="mb-2">
                <router-link to="/" class="text-links text-gray-100 text-base before:text-gray-100">Advanced</router-link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-lg-primary-2 text-white">Course by Platform</h2>
            <ul class="mt-5">
              <li class="mb-2">
                <router-link to="/" class="text-links text-gray-100 text-base before:text-gray-100">Laracasts</router-link>
              </li>
              <li class="mb-2">
                <router-link to="/" class="text-links text-gray-100 text-base before:text-gray-100">Laravel Daily</router-link>
              </li>
              <li class="mb-2">
                <router-link to="/" class="text-links text-gray-100 text-base before:text-gray-100">Codecourse</router-link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-lg-primary-2 text-white">Course by Topics</h2>
            <ul class="mt-5">
              <li class="mb-2">
                <router-link to="/" class="text-links text-gray-100 text-base before:text-gray-100">Eloquent</router-link>
              </li>
              <li class="mb-2">
                <router-link to="/" class="text-links text-gray-100 text-base before:text-gray-100">Validation</router-link>
              </li>
              <li class="mb-2">
                <router-link to="/" class="text-links text-gray-100 text-base before:text-gray-100">Refactoring</router-link>
              </li>
              <li class="mb-2">
                <router-link to="/" class="text-links text-gray-100 text-base before:text-gray-100">Testing</router-link>
              </li>
            </ul>
          </div>
        </div>
    

        <!--footer bottom -->
        <div class="mx-auto container flex items-center justify-between gap-5 pb-8">
          <ul class="items-center gap-3 z-50 relative">
            <li>
              <a href="/" target="_blank">
                <svg class="hover:filter hover:brightness-200" xmlns="http://www.w3.org/2000/svg" width="15" height="12" fill="none">
                  <path fill="#898F92" d="M15 1.412a6.217 6.217 0 0 1-1.764.487 3.043 3.043 0 0 0 1.348-1.68c-.595.353-1.255.6-1.95.741C12.067.353 11.27 0 10.368 0 8.683 0 7.306 1.355 7.306 3.028c0 .24.03.473.08.692A8.79 8.79 0 0 1 1.045.558a2.96 2.96 0 0 0-.415 1.517c0 1.052.538 1.984 1.37 2.513a3.08 3.08 0 0 1-1.399-.353v.021c0 1.469 1.061 2.697 2.467 2.972a3.072 3.072 0 0 1-1.384.05 3.023 3.023 0 0 0 1.09 1.505 3.1 3.1 0 0 0 1.778.598A6.171 6.171 0 0 1 .731 10.68c-.243 0-.487-.014-.731-.042A8.808 8.808 0 0 0 4.718 12c5.65 0 8.755-4.616 8.755-8.619 0-.134 0-.261-.007-.395A6.094 6.094 0 0 0 15 1.412Z"></path>
                </svg>
              </a>
            </li>
          </ul>
          <p class="text-sm  text-center text-[#E5E5E580] leading-5 z-50 relative"> Developed by <a href="https://twitter.com/phpfour" target="_blank" class="hover:underline font-medium">Rasel Ahmed ⚡️</a></p>
          <span></span>
        </div>
      </footer>
</template>

<script>
export default{
    name:"Footer",
}
</script>