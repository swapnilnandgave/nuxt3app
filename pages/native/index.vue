<template>
  <div class="flex flex-col items-center justify-center w-full h-full py-8 bg-white">
    <form class="flex flex-col justify-start space-y-2" @submit="onSubmit">
      <div v-for="(schemaElement, key) in pageSchema" :key="key">
        <component :is="schemaElement.as" :property="key" :attributes="schemaElement" />
      </div>

      <div class="flex flex-col w-full pt-4 space-y-3">
        <button type="submit" class="w-full px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-600">Submit</button>
        <button type="button" @click="getLocation" class="w-full px-4 py-2 text-white bg-green-700 rounded hover:bg-green-600">Location</button>
        <button type="button" @click="getFile" class="w-full px-4 py-2 text-white rounded bg-slate-700 hover:bg-slate-600">Open File</button>
      </div>

    </form>

    <div v-if="capturedValues" class="px-2 py-1 mt-4 text-black bg-gray-100">
      {{ capturedValues }}
    </div>

    <div class="flex flex-col w-full px-4 py-2 space-y-2">
      <span>Location Result</span>
      <span class="px-2 py-2 bg-green-200 rounded">
        {{ locationData }}
      </span>
    </div>

    <div class="flex flex-col w-full px-4 py-2 space-y-2">
      <span>Open File Result</span>
      <span v-if="openFileData" class="px-2 py-2 rounded bg-slate-200">
        <img :src="openFileData" />
      </span>
    </div>

    <div class="flex flex-col w-full px-4 py-2 space-y-2">
      <span>API Result</span>
      <span class="px-2 py-2 bg-blue-200 rounded">
        {{ mountainData }}
      </span>
    </div>

  </div>
</template>
<script setup>
import { useForm } from "vee-validate";
const { $capacitor } = useNuxtApp();
const { handleSubmit } = useForm();

const pageSchema = useDynamicFieldSchema();

const capturedValues = ref();

const mountainData = ref();

const locationData = ref();

const openFileData = ref();

const onSubmit = handleSubmit(async (values) => {
  // pretty print the values object
  capturedValues.value = values;
  const { data: mountains } = await useFetch(
    "https://api.nuxtjs.dev/mountains"
  );
  mountainData.value = mountains;
});

async function getLocation() {
  const result = await $capacitor.printCurrentLocation();
  locationData.value = `Lat - ${result.coords.latitude}, Long - ${result.coords.longitude}`;
}

async function getFile() {
  const result = await $capacitor.askForImage();
  openFileData.value = result;
}
</script>
