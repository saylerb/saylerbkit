<script>
    import {SITE_TITLE} from '$lib/siteConfig';
</script>

<svelte:head>
    <title>About</title>
    <meta name="description" content={`About ${SITE_TITLE}`}/>
</svelte:head>

<section class="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center px-4 sm:px-8">
    <h1 class="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        About
    </h1>

    <img src="https://github.com/saylerb/saylerbkit/assets/13383576/507ccee5-62be-46e0-8b3b-1724f2a4ac58"
         alt="self-portrait" class="w-60 h-80 border-gray-300 shadow-md mx-auto">
    <p class="mb-4 text-gray-600 dark:text-gray-400">
        I'm Brian Sayler. I'm a software developer based in Denver, Colorado.
        This is place where I practice my craft and share thoughts. Thanks for stopping by.
    </p>
</section>
