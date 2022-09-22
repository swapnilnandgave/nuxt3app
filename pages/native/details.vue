<template>

<div class="flex flex-col items-start w-full px-4 py-4 space-y-3">
    <div class="flex flex-col">
        <span>Platform Details</span>
        <span class="px-2 py-2 text-center text-indigo-700 bg-indigo-100 rounded">{{ platformDetails }}</span>
    </div>
    <div class="flex flex-col">
        <span>Camera Permission Status</span>
        <span class="px-2 py-2 text-center text-indigo-700 bg-indigo-100 rounded">{{ currentPermissionStatus }}</span>
    </div>
    <div class="flex flex-col">
        <button @click="requestCameraPermission" type="button" class="px-4 py-2 text-center text-white bg-blue-700 rounded hover:bg-blue-600">
            Request Camera Permission
        </button>
        <span>{{ requestedPermissionStatus }}</span>
    </div>
</div>

</template>
<script setup>
const { $capacitor } = useNuxtApp();

const platformDetails = ref($capacitor.platformDetails());

const currentPermissionStatus = ref();

const requestedPermissionStatus = ref();

onMounted(() => {
  displayCurrentPermissionStatus();
});

async function displayCurrentPermissionStatus() {
  currentPermissionStatus.value = await $capacitor.checkPermission();
}

async function requestCameraPermission() {
  requestedPermissionStatus.value = await $capacitor.requestPermission();
}
</script>