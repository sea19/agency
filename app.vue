<template>
    <NuxtLayout>
        <NuxtPage />

        <AlertContainer />
    </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
    title: 'Агенство',
    meta: [
        { name: 'description', content: 'Описание агенства' },
    ],
});

useSeoMeta({
    title: 'Агенство',
    ogTitle: 'Агенство',
    description: 'Описание агенства',
    ogDescription: 'Описание агенства',
});
</script>
