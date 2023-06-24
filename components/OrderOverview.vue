<template>
    <div>

<v-card
class="mx-auto"
max-width="300"
>
<v-list :items="props.orderList">
</v-list>
</v-card>
</div>
</template>

<script setup lang="ts">

const props = defineProps<{
  orderList: any
}>()

</script>