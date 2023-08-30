const dataBar= () => [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

  const orders= ()=> [
    {id : "#4567", ShippingAmount : "23,989", Amount : "58.000", PaymentStatus : "Pending", Customer : "usuf firmansyah",  PaymentMethod : "Bank transfer" , Status: "Completed", CreatedAt:"17 Jul 2023"},
  
    {id : "#4523", ShippingAmount : "34,989", Amount : "45.000", PaymentStatus : "Pending", Customer : "17 Jul 2023", PaymentMethod : "Bank transfer", Status: "Pending", CreatedAt:"17 Jul 2023"},
  
    {id : "#4453", ShippingAmount : "39,989", Amount : "32.000", PaymentStatus : "Completed", Customer : "17 Jul 2023", PaymentMethod : "Bank transfer", Status: "Completed", CreatedAt:"17 Jul 2023"},
  
    {id : "#4359", ShippingAmount : "28,927", Amount : "28,927", PaymentStatus : "Completed", Customer : "17 Jul 2023", PaymentMethod : "Bank transfer", Status: "Processed", CreatedAt:"17 Jul 2023"},
  
    {id : "#3359", ShippingAmount : "28,927", Amount : "28,927", PaymentStatus : "Completed", Customer : "17 Jul 2023", PaymentMethod : "Bank transfer", Status: "Completed", CreatedAt:"17 Jul 2023"},
  
    {id : "#3367", ShippingAmount : "28,927", Amount : "28,927", PaymentStatus : "Completed", Customer : "17 Jul 2023", PaymentMethod : "Bank transfer", Status: "Completed", CreatedAt:"17 Jul 2023"},
  
    {id : "#3359", ShippingAmount : "28,927", Amount : "28,927", PaymentStatus : "Completed", Customer : "17 Jul 2023", PaymentMethod : "Bank transfer", Status: "Completed", CreatedAt:"17 Jul 2023"},
  
    {id : "#2359", ShippingAmount : "28,927", Amount : "28,927", PaymentStatus : "Completed", Customer : "17 Jul 2023", PaymentMethod :"Bank transfer", Status: "Completed", CreatedAt:"17 Jul 2023"},
  
  
  ];

  const recentOrders= ()=> [
    {id : "#10000312", Date : "Agt 07, 2023", Customer : "adam", Payment: "Completed", Status: "Pending", Total : "Rp8.867.850",},
    {id : "#10000310", Date : "Agt 04, 2023", Customer : "coba 2", Payment: "Completed", Status: "Processing", Total : "Rp3.727.280",},
    {id : "#10000288", Date : "Agt 02, 2023", Customer : "Ayu Tia", Payment: "Pending", Status: "Pending", Total : "Rp48.200",},
    {id : "#10000274", Date : "Jul 29, 2023", Customer : "coba", Payment: "Completed", Status: "Pending", Total : "Rp9.518.000",},
    {id : "#10000275", Date : "Jul 28, 2023", Customer : "jusuf firmansyah", Payment: "Pending", Status: "Processing", Total : "Rp9.518.000",},
    {id : "#10000276", Date : "Jul 28, 2023", Customer : "jusuf firmansyah", Payment: "Completed", Status: "Pending", Total : "Rp9.518.000",},
    {id : "#10000277", Date : "Jul 28, 2023", Customer : "jusuf firmansyah", Payment: "Pending", Status: "Completed", Total : "Rp9.518.000",},
    {id : "#10000278", Date : "Jul 28, 2023", Customer : "jusuf firmansyah", Payment: "Completed", Status: "Processing", Total : "Rp9.518.000",},
    {id : "#10000279", Date : "Jul 28, 2023", Customer : "jusuf firmansyah", Payment: "Pending", Status: "Completed", Total : "Rp9.518.000",},
    {id : "#10000270", Date : "Jul 28, 2023", Customer : "jusuf firmansyah", Payment: "Completed", Status: "Completed", Total : "Rp9.518.000",},
    {id : "#10000212", Date : "Jul 28, 2023", Customer : "jusuf firmansyah", Payment: "Pending", Status: "Processing", Total : "Rp9.518.000",},
  ];

  const OrderReturns = ()=>  [
    {id : "#10000312", OrderId : "Agt 07, 2023", Customer : "adam", ProductItem: "Completed", Status: "Pending", CreatedAt : "Rp8.867.850",},
    {id : "#10000310", OrderId : "Agt 04, 2023", Customer : "coba 2", ProductItem: "Completed", Status: "Processing", CreatedAt : "Rp3.727.280",},
    {id : "#10000288", OrderId : "Agt 02, 2023", Customer : "Ayu Tia", ProductItem: "Pending", Status: "Pending", CreatedAt : "Rp48.200",},
    {id : "#10000274", OrderId : "Jul 29, 2023", Customer : "coba", ProductItem: "Completed", Status: "Pending", CreatedAt : "Rp9.518.000",},
    {id : "#10000275", OrderId : "Jul 28, 2023", Customer : "jusuf firmansyah", ProductItem: "Pending", Status: "Processing", CreatedAt : "Rp9.518.000",},
    {id : "#10000276", OrderId : "Jul 28, 2023", Customer : "jusuf firmansyah", ProductItem: "Completed", Status: "Pending", CreatedAt : "Rp9.518.000",},
    {id : "#10000277", OrderId : "Jul 28, 2023", Customer : "jusuf firmansyah", ProductItem: "Pending", Status: "Completed", CreatedAt : "Rp9.518.000",},
    {id : "#10000278", OrderId : "Jul 28, 2023", Customer : "jusuf firmansyah", ProductItem: "Completed", Status: "Processing", CreatedAt : "Rp9.518.000",},
    {id : "#10000279", OrderId : "Jul 28, 2023", Customer : "jusuf firmansyah", ProductItem: "Pending", Status: "Completed", CreatedAt : "Rp9.518.000",},
    {id : "#10000270", OrderId : "Jul 28, 2023", Customer : "jusuf firmansyah", ProductItem: "Completed", Status: "Completed", CreatedAt : "Rp9.518.000",},
    {id : "#10000212", OrderId : "Jul 28, 2023", Customer : "jusuf firmansyah", ProductItem: "Pending", Status: "Processing", CreatedAt : "Rp9.518.000",},
  ];
export { orders, dataBar, recentOrders, OrderReturns };
