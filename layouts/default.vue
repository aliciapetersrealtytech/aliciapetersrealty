<template>
    <div>
        <Lenis root>
            <main class="relative" data-scroll data-scroll-speed="0.3">
                <SharedBaseNavigation />
            
                <section>
                    <slot />
                </section>

                <SharedSectionMinimalSlot :verticalPadding="`${padding}`">
                    <SharedBaseFooter />
                </SharedSectionMinimalSlot>
            </main>
        </Lenis>
    </div>
</template>

<script setup lang="ts">
    const adminStore = useAdminStore()
    const padding = ref('')

    watch(
        () => adminStore.footerPadding,
        () => padding.value = adminStore.getFooterPadding
    )
</script>