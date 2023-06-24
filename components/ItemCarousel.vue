<template>
    <v-row >
        <v-btn-toggle v-model="toggle_exclusive" style="overflow-x:auto; white-space: nowrap;">
        <v-btn v-for="value in props.items" @click="emit('update:modelValue',value.name)" height="250px">
          <ItemCard  :name="value.name" :image_link="value.image_link"/>
        </v-btn>
    </v-btn-toggle>

    </v-row>
    <v-row class="pb-10">
        Selected Item: {{ modelValue }}
    </v-row>
</template>

<script setup lang="ts">
import {MenuItem} from "@/types/MenuItem"

const props = defineProps<{
  modelValue: string,
  items: MenuItem[]
}>()

const toggle_exclusive = ref()


let emit = defineEmits(['update:modelValue']);


</script>

<style scoped>
.v-btn-group--density-default.v-btn-group {
    height: 250px;
}
</style>