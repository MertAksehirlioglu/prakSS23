<template>
    <div>

<v-card
class="mx-auto"
max-width="300"
>
<v-list v-if="props.orderList" :items="props.orderList">
</v-list>
<v-list v-else="props.orderList" >
  <v-list-item>
    Order List not available!
  </v-list-item>
</v-list>
</v-card>
</div>
</template>

<script setup lang="ts">

const props = defineProps<{
  orderList: any
}>()

</script>