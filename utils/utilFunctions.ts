import { Orders } from "./mockData";

export function getNow() {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date +' '+ time;
    return dateTime;
}

export function jsonToListArray(orderList: Orders, availableRobots: number) {
    const resultingArray = []
    resultingArray.push({ type: 'subheader', title: 'Ready Orders' })
    orderList.readyOrders.forEach(x=>resultingArray.push({
        title: `${x.customerName}: ${x.itemName}`,
      }))
      resultingArray.push(    { type: 'divider' })
    resultingArray.push({ type: 'subheader', title: 'Orders being processed' })
    orderList.processingOrders.forEach(x=>resultingArray.push({
        title: `${x.customerName}: ${x.itemName}`,
      }))

      resultingArray.push(    { type: 'divider' })
      resultingArray.push({ type: 'subheader', title: `Available Bartenders: ${availableRobots}`})

      return resultingArray

}