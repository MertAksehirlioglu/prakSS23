<template>
  <div class="px-5">
    <v-row >
        <v-btn-toggle v-model="toggle_exclusive" style="overflow-x:auto; white-space: nowrap;" @update:model-value="emit('update:modelValue', toggle_exclusive>=0 ? props.items.at(toggle_exclusive)?.name : '')">
          <v-btn v-for="value in props.items" height="250px">
            <ItemCard  :name="value.name" :image_link="value.image_link"/>
          </v-btn>
         </v-btn-toggle>

    </v-row>
    <v-row class="pb-10">
      <v-col align="right">
        <h2>
        Selected Item:
      </h2>
      </v-col>
      <v-col>
        <h2>
          {{ modelValue }}
        </h2>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import {MenuItem} from "@/types/MenuItem"

const props = defineProps<{
  modelValue: string,
  items: MenuItem[]
}>()
let emit = defineEmits(['update:modelValue']);

const toggle_exclusive = ref()


</script>

<style scoped>
.v-btn-group--density-default.v-btn-group {
    height: 250px;
}
</style>