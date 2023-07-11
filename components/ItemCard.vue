<template >
  <div>
    <v-hover>
      <v-row>
      <v-card v-bind="props" max-width="200" max-height="200" color="orange">

        
        <v-img :src="image_link">
        </v-img>
        
      </v-card>
      </v-row>
      <v-row >
        <v-col align="center">
          {{ props.name }}
        </v-col>
    </v-row>
      </v-hover>
  </div>
</template>
  
<script setup lang="ts">

const props = defineProps<{
  name: string,
  image_link: string
}>()

</script>