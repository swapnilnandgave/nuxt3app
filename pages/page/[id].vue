<template>
    <div class="flex flex-col items-start w-full">
        <AppNavigation :attributes="dynamicPageSchema.navigation" />
    </div>
</template>
<script setup>
const route = useRoute();

const dynamicPageSchema = useDynamicPageSchema(route.params.id);
</script>
