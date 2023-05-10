export const links = [
  {
    name: "Locate",
    submenu: true,
    link:'/locate',
    sublinks: [
      {
        sublink: [
          { name: "Store", link: "/locate/stores" },
          { name: "Products ", link: "/locate/products" },
       
        ],
      },
    ],
  },
  {
    name: "Shop",
    submenu: true,
    link:'/shop',
    sublinks: [
      {
        sublink: [
          { name: "Delivery", link: "/shop/delivery" },
          { name: "Pickup ", link: "/shop/pickup" },
       
        ],
      },
    ],
  },
  
  {
    name: "Account",
    submenu: true,
    link:'account',
    sublinks: [
      {
        sublink: [
          { name: "History", link: "/account/history" },
          { name: "Setting ", link: "/account/setting" },
         
        ],
      },
    ],
  },
];
