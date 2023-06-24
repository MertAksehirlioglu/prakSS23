<template >
  <div>
    <v-hover>
      <v-card v-bind="props" max-width="200" max-height="200" color="orange">

        <v-img :src="image_link">
        </v-img>
        <v-row max-width="200" max-height="50">
          <v-card-title>{{ props.name }}</v-card-title>
        </v-row>
      </v-card>
      <h1></h1>
    </v-hover>
  </div>
  <div>
    {{ props.name }}
  </div>
</template>
  
<script setup lang="ts">

const props = defineProps<{
  name: string,
  image_link: string
}>()

</script>