<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  property: {
    type: String,
    required: true,
  },
  attributes: {
    type: Object,
    required: true,
  },
});

const { value, errorMessage } = useField(
  props.property,
  props.attributes.rules
);

onMounted(() => {
  if (props.attributes.default) {
    value.value = props.attributes.default;
  }
});
</script>
<template>
    <div class="flex flex-col items-start w-full space-y-1">
        <span v-if="props.attributes.floating" class="text-sm text-black">{{ props.attributes.floating }}</span>
        <div class="flex flex-row items-center w-full border rounded" :class="errorMessage ? 'border-red-200' : 'border-gray-200'">
          <span class="px-2 py-2 text-red-400 border-r border-gray-200" v-if="props.attributes.addon && props.attributes.addon.before" v-html="props.attributes.addon.before">
          </span>
          <input class="flex-1 px-2 py-2 bg-transparent" :readonly="props.attributes.readonly" :disabled="props.attributes.disabled" :placeholder="props.attributes.placeholder" :type="props.attributes.type" v-model="value" />
          <span class="px-2 py-2 border-l border-gray-200 bg-gray-50" v-if="props.attributes.addon && props.attributes.addon.after" v-html="props.attributes.addon.after"></span>
        </div>
        <span v-if="props.attributes.helpText && !errorMessage" class="text-xs text-red-500">{{ errorMessage }}</span>
        <span v-if="errorMessage" class="text-xs text-red-500">{{ errorMessage }}</span>
    </div>
</template>

