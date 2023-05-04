export const links = [
  {
    name: "Locate",
    submenu: true,
    link:'/locate',
    sublinks: [
      {
        sublink: [
          { name: "Store", link: "/" },
          { name: "Products ", link: "/" },
       
        ],
      },
    ],
  },
  {
    name: "Shop",
    submenu: true,
    link:'',
    sublinks: [
      {
        sublink: [
          { name: "Delivery", link: "/" },
          { name: "Pickup ", link: "/" },
       
        ],
      },
    ],
  },
  
  {
    name: "Account",
    submenu: true,
    link:'',
    sublinks: [
      {
        sublink: [
          { name: "History", link: "/" },
          { name: "Setting ", link: "/setting" },
         
        ],
      },
    ],
  },
];
