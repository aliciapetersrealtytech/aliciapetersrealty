<template>
    <section class="flex w-full h-full bg-faint">
        <div class="flex flex-row w-full max-w-[1140px] mx-auto my-8 justify-between">
            <!-- <NuxtImg src="/alicia-avatar.jpg" format="webp" class="object-cover" width="250" height="200"/> -->
            <div class="flex flex-col">
                <div>
                    <h2 class="h2">Interested in this property? Let's talk!</h2>
                </div>
                <div class="flex flex-col my-2 justify-center">
                    <h3 class="h3 text-contrast">Alicia Peters</h3>
                    <p class="h5">CA DRE# 02189179</p>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center">
                <NuxtLink to="/about" class="btn-primary-white-full">
                    schedule a call
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>