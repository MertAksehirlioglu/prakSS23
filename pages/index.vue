<template>
  <v-app id="app">
    <v-app-bar>

      <v-app-bar-title>Robo Cocktail</v-app-bar-title>

      <template v-slot:append>
        <p>State was last refreshed in {{ lastRefresh }}</p>
        <v-btn @click="refreshState">
          Refresh State
        </v-btn>
      </template>
    </v-app-bar>
    <v-row>
      <v-col cols="10" class="pt-10">
        <v-container class="pt-10">
          <v-snackbar v-model="snackbar" :timeout="timeout">
            {{ snackbarText }}

            <template v-slot:actions>
              <v-btn color="blue" variant="text" @click="snackbar = false">
                Close
              </v-btn>
            </template>
          </v-snackbar>
          <div class="d-flex align-center flex-column">
            <h1 class=" text-h3 text--primary py-5 text-align-center">
              <span style="color: #ffffff">Made by</span><br /> Robots <br /> for Humans
            </h1>
            <template v-if="readyToOrder">
              <v-container class="d-flex align-center flex-column">

                <h1 class="d-flex justify-center text-h8 text--primary pt-5">
                  Please enter your name
                </h1>

                <v-text-field class="pt-3" v-model="customerName" label="Name" variant="solo-filled"
                  style=" width: 300px"></v-text-field>

                <item-carousel class="py-5" v-model="itemName" :items="menuItems" />

                <v-btn size="x-large" :loading="loading" @click="submitOrder">
                  Submit order
                </v-btn>
              </v-container>
            </template>
            <template v-else>
              <busy-waiting/>
            </template>

          </div>
        </v-container>

      </v-col>

      <v-col cols="2" class="pt-10">
        <v-container class="pt-10">
          <order-overview :orderList="orders" />
        </v-container>
      </v-col>
    </v-row>
  </v-app>
</template>

<script setup lang="ts">
import axios from 'axios'
import ItemCarousel from '~/components/ItemCarousel.vue';
import { MenuItem } from '~/types/MenuItem';
import { getNow, jsonToListArray } from '~/utils/utilFunctions';
import { serverURL } from '~/utils/myConfig';
import { drinksList } from '~/utils/mockData';

let sse
const sseData = ref("")

const customerName = ref("")
const itemName = ref("")
const menuItems = ref<MenuItem[]>([])
const lastRefresh = ref()
const ready = ref(true)
const loading = ref(false)
const snackbar = ref(false)
const snackbarText = ref("Test")
const timeout = ref(10000)
const availableRobots = ref(0)
const ordersState = ref()
const orders = ref()

const readyToOrder = computed(() => {
  return availableRobots.value > 0 
})


const readyIcon = computed(() => {
  return ready ? { icon: "mdi-check-circle", color: "success" } : { icon: "mdi-alert-circle", color: "error" }
})

async function submitOrder() {
  if (customerName.value === "") {
    console.log("Please type your name")
    activateSnackbar("Please type your name")
    return
  }
  if (itemName.value === "") {
    console.log("Please select an Item")
    activateSnackbar("Please select an Item")
    return
  }
  loading.value = true
  let postRequest
  try {
    postRequest = await axios.post(serverURL + "/sendOrder", { itemName: itemName, customerName: customerName })
  } catch (error) {
    activateSnackbar("Connection to server failed")
    loading.value = false
    return
  }
  loading.value = false

  if (postRequest.data) {
    activateSnackbar("Your order has been successfully submitted!")
    console.log("Order submitted")
  } else {
    activateSnackbar("Order not successfull")
    console.log("Order can't be submitted")
  }
}

function activateSnackbar(alertText: string) {
  snackbar.value = true
  snackbarText.value = alertText
}

async function refreshState() {
  await axios.get(serverURL + "/getState")
  lastRefresh.value = getNow()
}

onMounted(async () => {
  sse = new EventSource(serverURL+"/stream");
  sse.onmessage = (e) => {
    sseData.value = e.data
    parseSSE(JSON.parse(e.data))
    console.log(sseData.value)
  }


  await refreshState()

})

function parseSSE(sse: any) {
  availableRobots.value = sse.waitingCallbacks
  ordersState.value = sse.currentState
  orders.value = jsonToListArray(sse.orders, availableRobots.value)
  menuItems.value = sse.availableItems
  console.log(sse.orders)
  console.log(orders.value)
}


</script>

<style>
#app {
  background-image: linear-gradient(to bottom right, rgb(111, 71, 5), rgb(26, 26, 3));
}
</style>
