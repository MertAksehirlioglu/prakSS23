export const orderListMock = [
    { type: 'subheader', title: 'Ready Orders' },
    {
      title: 'Max: Gin Fizz',
    },
    {
      title: 'Helen: Gin Fizz',
    },
    {
      title: 'Alex: Cosmopolitan',
    },
    { type: 'divider' },
    { type: 'subheader', title: 'Orders being processed' },
    {
        title: 'Max: Gin Fizz',
    },
    {
        title: 'Max: Gin Fizz',
    },
    {
        title: 'Max: Gin Fizz',
    },
    { type: 'subheader', title: 'Orders not successfull' },
    {
        title: 'Max: Gin Fizz',
    },
    {
        title: 'Max: Gin Fizz',
    },
    {
        title: 'Max: Gin Fizz',
    },
    { type: 'divider' },
    { type: 'subheader', title: 'Available Bartenders: 3' },

  ]

export const drinksList = [
    {
      name: "Aperol Spritz",
      image_link: "https://www.liquor.com/thmb/nc2Cbt6P1gNFGrXDcV_yFnX7Glw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/aperol-spritz-720x720-primary-985457b239d7427da2f8b4be17131caa.jpg"
    },
    {
      "name": "Whiskey Sour",
      "image_link": "https://www.liquor.com/thmb/dD_dAMDwbX1UdC9A_BerOcevcyw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/whiskey-sour-720x720-primary-v2-4fc831b613964da5a19cdbfda917d7df.jpg"
    },
    {
      "name": "Margarita",
      "image_link": "https://makemeacocktail.com/cdn-cgi/image/f=auto,h=400,sharpen=1,fit=contain/images/cocktails/6868/400_601_margarita_2_2.jpg"
    },
    {
      name: "Gin Fizz",
      image_link: "https://www.liquor.com/thmb/M-GNu7ThtQYthNG5_7Rnu6VmfeQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/gin-fizz-720x720-primary-v3-2c1390963d014e35a01d741df2f9ae77.jpg"
    }
  ]
  export type Order = {
    itemName: string;
    customerName: string;
    instanceId: string;
  };
  
  export type Orders = {
    processingOrders: Order[];
    readyOrders: Order[];
  };

  