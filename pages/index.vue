<template>
  <div class="grid grid-cols-3 gap-3 ms:grid-cols-4">
    <button v-for="page in dynamicPages.pages" :key="page.id" @click="showPage(page.id)" type="button" class="px-4 py-2 text-center text-white bg-blue-700 rounded hover:bg-blue-600">
      {{ page.navigation.title }}
    </button>
    <button @click="showNativePage" type="button" class="px-4 py-2 text-center text-white bg-blue-700 rounded hover:bg-blue-600">
      Platform Details
    </button>
  </div>
</template>
<script setup>
const dynamicPages = useDynamicPagesSchema();
const router = useRouter();
function showPage(pageID) {
  router.push({ name: "page-id", params: { id: pageID } });
}
function showNativePage() {
  router.push({ name: "native-details" });
}
</script>
