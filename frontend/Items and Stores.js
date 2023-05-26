//product items
const items1 = [
    {
        name:"Plantains-5pcs",
        category: "Fruits & Veggies",
        price: "$0.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201652/Product%20Items/Plantains_5pcs_n5hgld.png",
        isActive:true
    },
    {
        name:"Avocado 2pcs",
        category: "Fruits & Veggies",
        price: "$4.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201650/Product%20Items/Avocado_2pcs_oisjqf.png",
        isActive:true
    },
    {
        name:"Potato 5pcs",
        category: "Fruits & Veggies",
        price: "$4.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201652/Product%20Items/Potato_5pcs_qvcobr.png",
        isActive:true
    },
    {
        name:"Banana",
        category: "Fruits & Veggies",
        price: "$0.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201650/Product%20Items/Banana_x4qdw1.png",
        isActive:true
    },
    {
        name:"Banana",
        category: "Fruits & Veggies",
        price: "$0.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201650/Product%20Items/Banana_x4qdw1.png",
        isActive:true
    },
    {
        name:"Oui Raspberry-5oz",
        category: "Dairy",
        price: "$1.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201652/Product%20Items/Oui_Raspberry-5oz_ixvl6g.png",
        isActive:true
    },
    {
        name:"Lactaid 2%-96fl oz",
        category: "Dairy",
        price: "$7.79",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201651/Product%20Items/Lactaid_2_-96fl_oz_y5bssi.png",
        isActive:true
    },
    {
        name:"Kraft American cheese-16oz",
        category: "Dairy",
        price: "$6.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201651/Product%20Items/Kraft_American_cheese_ehtniw.png",
        isActive:true
    },
    {
        name:"Egg-land’s Best-18ct",
        category: "Dairy",
        price: "$3.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201651/Product%20Items/Egg-land_s_Best-18ct_bxdial.png",
        isActive:true
    },
    {
        name:"Modelo -12pk/12fl oz",
        category: "Beverage",
        price: "$16.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201651/Product%20Items/Modelo_-12pk_12fl_oz_qlhfxu.png",
        isActive:true
    },
    {
        name:"Coca Cola -6pk/16.9fl oz",
        category: "Beverage",
        price: "$5.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201651/Product%20Items/Coca_Cola_-6pk_16.9fl_oz_fu848a.png",
        isActive:true
    },
    {
        name:"Tropicana orange -52fl oz",
        category: "Beverage",
        price: "$4.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201652/Product%20Items/Tropicana_orange_-52fl_oz_cstdcz.png",
        isActive:true
    },
    {
        name:"Sminroff -6pk/16.9fl oz",
        category: "Beverage",
        price: "$9.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201652/Product%20Items/Sminroff_-6pk_16.9fl_oz_yb3rtf.png",
        isActive:true
    },
    {
        name:"Turkey Sandwich",
        category: "Cold Food",
        price: "$5.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201652/Product%20Items/Turkey_Sandwich_p93nl2.png",
        isActive:true
    },
    {
        name:"Chicken Bacon Wrap",
        category: "Cold Food",
        price: "$5.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201650/Product%20Items/Chicken_Bacon_Wrap_qetsfy.png",
        isActive:true
    },
    {
        name:"Caesar Salad-5oz",
        category: "Cold Food",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201650/Product%20Items/Caesar_Salad_-5oz_ppa2wk.png",
        isActive:true
    },
    {
        name:"Cold Pasta Salad-7oz",
        category: "Cold Food",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201651/Product%20Items/Cold_Pasta_Salad_-7oz_o3libx.png",
        isActive:true
    },
    {
        name:"Pastellitos de Pollo -3 pcs",
        category: "Hot Food",
        price: "$4.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201652/Product%20Items/Pastellitos_de_Pollo_-3_pcs_gfct4h.png",
        isActive:true
    },
    {
        name:"Pepperoni Pizza -1 slice",
        category: "Hot Food",
        price: "$3.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201652/Product%20Items/Pepperoni_Pizza_-1_slice_dhc2h8.png",
        isActive:true
    },
    {
        name:"Spicy Chicken Sandwich",
        category: "Hot Food",
        price: "$3.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201652/Product%20Items/Spicy_Chicken_Sandwich_pl0oph.png",
        isActive:true
    },
    {
        name:"Chicken Wings-10 pcs",
        category: "Hot Food",
        price: "$3.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201650/Product%20Items/Chicken_Wings-10_pcs_tccrdm.png",
        isActive:true
    },
    {
        name:"Lays Classic-8oz",
        category: "Snacks",
        price: "$1.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201651/Product%20Items/Lays_Classic-8oz_xu1kll.png",
        isActive:true
    },
    {
        name:"Oreo Mini-8oz",
        category: "Snacks",
        price: "$3.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201651/Product%20Items/Oreo_Mini-8oz_itgypd.png",
        isActive:true
    },
    {
        name:"Twix Bar Duo-1.79oz",
        category: "Snacks",
        price: "$2.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201653/Product%20Items/Twix_Bar_Duo-1.79oz_jsyame.png",
        isActive:true
    },
    {
        name:"Ritz Crakers-8/11.8oz",
        category: "Snacks",
        price: "$3.89",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201652/Product%20Items/Ritz_Crakers-8_11.8oz_wyc1np.png",
        isActive:true
    },
    {
        name:"Dawn Dish Soap-32.7oz",
        category: "Household",
        price: "$6.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201651/Product%20Items/Dawn_Dish_Soap-32.7oz_e9ftl3.png",
        isActive:true
    },
    {
        name:"Comet Cleanser-21oz",
        category: "Household",
        price: "$1.29",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201650/Product%20Items/Comet_Cleanser-21oz_fel1n3.png",
        isActive:true
    },
    {
        name:"Lysol Disinfectant-32oz",
        category: "Household",
        price: "$5.29",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201652/Product%20Items/Lysol_Disinfectant-32oz_rjopcj.png",
        isActive:true
    },
    {
        name:"Bounty Paper Towel-40 Sheets",
        category: "Household",
        price: "$5.29",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201650/Product%20Items/Bounty_Paper_Towel-40_Sheets_nx6pzk.png",
        isActive:true
    },
    {
        name:"Chewy Pup-Peroni 38oz",
        category: "Pets",
        price: "$17.79",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201650/Product%20Items/Chewy_Pup-Peroni_38oz_cdzrir.png",
        isActive:true
    },
    {
        name:"Pedigree Adult-18lbs",
        category: "Pets",
        price: "$19.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201652/Product%20Items/Pedigree_Adult-18lbs_m8ovnn.png",
        isActive:true
    },
     {
        name:"Meow Mix Original-30lbs",
        category: "Pets",
        price: "$17.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201651/Product%20Items/Meow_Mix_Original-30lbs_iafppm.png",
        isActive:true
    },
     {
        name:"Friskies Pate Tuna-5.5oz",
        category: "Pets",
        price: "$4.29",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201651/Product%20Items/Friskies_Pate_Tuna-5.5oz_mzrvk6.png",
        isActive:true
    },
     {
        name:"Boss Revolution Card",
        category: "Miscellanous",
        price: "$4.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201650/Product%20Items/Boss_Revolution_Card_soqjsj.png",
        isActive:true
    },
     {
        name:"Dove Spray-Cucumber",
        category: "Miscellanous",
        price: "$2.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201651/Product%20Items/Dove_Spray-Cucumber_v9eejn.png",
        isActive:true
    },
    {
        name:"Bic Lighter-1oz",
        category: "Miscellanous",
        price: "$0.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201650/Product%20Items/Bic_Lighter_-1oz_ptmjvv.png",
        isActive:true
    },
    {
        name:"Scotch Tape-1.88’ x 54.6yds",
        category: "Miscellanous",
        price: "$0.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201652/Product%20Items/Scotch_Tape_-1.88_x_54.6yds_emfgzf.png",
        isActive:true
    },
]

// Deals Items - categories here are broken up by stores as I went according to the figma page, also I only included the new deal prices not the prices that were scratched off. 

const items2 = [

    {
        name:"Gain Laundry Scent-26.5oz",
        category: "Black Bodega",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278795/Deals%20Items/Gain_Laundry_Scent-26.5oz_a9ytpc.png",
        isActive:true
    },
    {
        name:"Black Beans-29.0oz",
        category: "Black Bodega",
        price: "$2.69",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278795/Deals%20Items/Black_Beans-29.0oz_xv2gib.png",
        isActive:true
    },
    {
        name:"Avocado 2pcs",
        category: "Black Bodega",
        price: "$3.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278794/Deals%20Items/Avocado_2pcs_oa8ysi.png",
        isActive:true
    },
    {
        name:"Kraft Mac & Cheese 6oz",
        category: "Black Bodega",
        price: "$1.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278796/Deals%20Items/Kraft_Mac_Cheese_6oz_gqkkqj.png",
        isActive:true
    },
    {
        name:"Land Lakes-4 Sticks",
        category: "Bros Convenience Store",
        price: "$4.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278796/Deals%20Items/Land_Lakes-4_Sticks_gwixpu.png",
        isActive:true
    },
    {
        name:"Doritos Chips-2.75oz",
        category: "Bros Convenience Store",
        price: "$0.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278795/Deals%20Items/Doritos_Chips-2.75oz_x4bmda.png",
        isActive:true
    },
    {
        name:"Starburst Candy-15.6oz",
        category: "Bros Convenience Store",
        price: "$3.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278796/Deals%20Items/Starburst_Candy-15.6oz_oqwlxe.png",
        isActive:true
    },
    {
        name:"Poland Spring-15.9floz",
        category: "Bros Convenience Store",
        price: "$0.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278796/Deals%20Items/Poland_Spring-15.9floz_nqfuet.png",
        isActive:true
    },
    {
        name:"Benadryl-25mg",
        category: "Bodega",
        price: "$3.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278795/Deals%20Items/Benadryl-25mg_rin43t.png",
        isActive:true
    },
    {
        name:"Lipton-100 Tea Bags",
        category: "Bodega",
        price: "$4.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278796/Deals%20Items/Lipton-100_Tea_Bags_s8oj0u.png",
        isActive:true
    },
    {
        name:"Downy 60 Loads-51oz",
        category: "Bodega",
        price: "$5.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278795/Deals%20Items/Downy_60_Loads-51oz_v1vqua.png",
        isActive:true
    },
    {
        name:"Colgate-2 Value Pack",
        category: "Bodega",
        price: "$6.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278795/Deals%20Items/Colgate-2_Value_Pack_wnas9p.png",
        isActive:true
    },
    {
        name:"Hefty Trash Bag-50ct",
        category: "Fula Deli",
        price: "$6.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278796/Deals%20Items/Hefty_Trash_Bag-50ct_umoyjv.png",
        isActive:true
    },
    {
        name:"Campbell’s Soup-23oz",
        category: "Fula Deli",
        price: "$2.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278794/Deals%20Items/Campbell_s_Soup-23oz_wegsq7.png",
        isActive:true
    },
    {
        name:"Tropicana Orange-52Fl oz",
        category: "Fula Deli",
        price: "$4.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278797/Deals%20Items/Tropicana_Orange-52Fl_oz_xlawzz.png",
        isActive:true
    },
    {
        name:"Clorox Bleach-43oz",
        category: "Fula Deli",
        price: "$14.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278795/Deals%20Items/Clorox_Bleach-43oz_sotxzf.png",
        isActive:true
    },
    {
        name:"Banana boat Spray",
        category: "La Bodega",
        price: "$1.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278795/Deals%20Items/Banana_boat_Spray_tc8psb.png",
        isActive:true
    },
    {
        name:"Prego Sauce-14oz",
        category: "La Bodega",
        price: "$2.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278796/Deals%20Items/Prego_Sauce_-14oz_eho4gc.png",
        isActive:true
    },
    {
        name:"Haribo Goldbears-5oz ",
        category: "La Bodega",
        price: "$1.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278795/Deals%20Items/Haribo_Goldbears_-5oz_bupf4q.png",
        isActive:true
    },
    {
        name:"Pampers P1-27ct",
        category: "La Bodega",
        price: "$6.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278796/Deals%20Items/Pampers_P1-27ct_akz9wb.png",
        isActive:true
    },
    {
        name:"Heinz Tomato Ketchup-20oz",
        category: "La Bodeguita Deli Grocery",
        price: "$1.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278796/Deals%20Items/Heinz_Tomato_Ketchup-20oz_ryrvtp.png",
        isActive:true
    },
    {
        name:"Monster Energy - 16Floz",
        category: "La Bodeguita Deli Grocery",
        price: "$1.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278796/Deals%20Items/Monster_Energy_-_16Floz_a14c4a.png",
        isActive:true
    },
    {
        name:"Goldfish Cheddar-30oz",
        category: "La Bodeguita Deli Grocery",
        price: "$1.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278795/Deals%20Items/Goldfish_Cheddar-30oz_oulric.png",
        isActive:true
    },
    {
        name:"Vaseline Original-1.75oz",
        category: "La Bodeguita Deli Grocery",
        price: "$3.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278797/Deals%20Items/Vaseline_Original-1.75oz_yjagwf.png",
        isActive:true
    },
    {
        name:"Zyrtec Children’s-4 fl oz",
        category: "Lyla’s",
        price: "$12.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278797/Deals%20Items/Zyrtec_Children_s-4_fl_oz_lleltj.png",
        isActive:true
    },
    {
        name:"Reese’s-2.8 oz",
        category: "Lyla’s",
        price: "$0.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278796/Deals%20Items/Reese_s-2.8_oz_og5xvs.png",
        isActive:true
    },
    {
        name:"Salonpas -6 patches",
        category: "Lyla’s",
        price: "$6.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278797/Deals%20Items/Salonpas_-6_patches_wkgxtj.png",
        isActive:true
    },
    {
        name:"Titus Sardines-50ct",
        category: "Lyla’s",
        price: "$1.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278797/Deals%20Items/Titus_Sardines-50ct_gcm1yc.png",
        isActive:true
    },
    {
        name:"Sour patch watermelon ",
        category: "Mini Market Bodega",
        price: "$1.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278797/Deals%20Items/Sour_patch_watermelon_mcztwf.png",
        isActive:true
    },
    {
        name:"Lil’ Critters Dietary-60ct",
        category: "Mini Market Bodega",
        price: "$6.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278796/Deals%20Items/Lil_Critters_Dietary-60ct_hmojvq.png",
        isActive:true
    },
    {
        name:"Charcoal Sunlight-1ct ",
        category: "Mini Market Bodega",
        price: "$1.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278795/Deals%20Items/Charcoal_Sunlight-1ct_au6hqg.png",
        isActive:true
    },
    {
        name:"Libby’s Green Beans-14.5oz",
        category: "Mini Market Bodega",
        price: "$0.49",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684278796/Deals%20Items/Libby_s_Green_Beans-14.5oz_fkc1bm.png",
        isActive:true
    },

]


const items3 = [

    {
        name:"Arizona Green Tea Can",
        category: "Black Bodega",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200609/Delivery%20and%20Pickup%20Items/Arizona_Green_Tea_Can_pkocru.png",
        isActive:true
    },
    {
        name:"Brim's Pork Rinds",
        category: "Black Bodega",
        price: "$8.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200609/Delivery%20and%20Pickup%20Items/Brim_s_Pork_Rinds_zi0xmk.png",
        isActive:true
    },
    {
        name:"Organic Plantain Chips",
        category: "Black Bodega",
        price: "$6.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200610/Delivery%20and%20Pickup%20Items/Organic_Plantain_Chips_vvljnc.png",
        isActive:true
    },
    {
        name:"Breakfast Sandwich",
        category: "Black Bodega",
        price: "$8.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200610/Delivery%20and%20Pickup%20Items/Breakfast_Sandwich_ruavgr.png",
        isActive:true
    },
    {
        name:"Bottled Arizona Iced Tea",
        category: "Bros Convenience Store",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200609/Delivery%20and%20Pickup%20Items/Bottled_Arizona_Iced_Tea_gyq00k.png",
        isActive:true
    },
    {
        name:"Hot N Spicy Pork Rinds",
        category: "Bros Convenience Store",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200611/Delivery%20and%20Pickup%20Items/Hot_N_Spicy_Pork_Rinds_kefl32.png",
        isActive:true
    },
    {
        name:"Red Kidney Beans",
        category: "Bros Convenience Store",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200611/Delivery%20and%20Pickup%20Items/Red_Kidney_Beans_pkcpd1.png",
        isActive:true
    },
    {
        name:"Roll Bacon egg and cheese",
        category: "Bros Convenience Store",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200611/Delivery%20and%20Pickup%20Items/Roll_Bacon_egg_and_cheese_ruomvz.png",
        isActive:true
    },
    {
        name:"Arizona Iced Tea Can",
        category: "Bodega",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200609/Delivery%20and%20Pickup%20Items/Arizona_Iced_Tea_Can_w4iaaj.png",
        isActive:true
    },
    {
        name:"Apple Cinnamon Pork Rinds",
        category: "Bodega",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200609/Delivery%20and%20Pickup%20Items/Apple_Cinnamon_Pork_Rinds_ukqaqx.png",
        isActive:true
    },
    {
        name:"Pinto Beans",
        category: "Bodega",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200611/Delivery%20and%20Pickup%20Items/Pinto_Beans_kqfuyq.png",
        isActive:true
    },
    {
        name:"Ramen (Beef Flavor)",
        category: "Bodega",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201652/Product%20Items/Scotch_Tape_-1.88_x_54.6yds_emfgzf.png",
        isActive:true
    },
    {
        name:"Arizona Iced Tea Stix",
        category: "Fula Deli",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200609/Delivery%20and%20Pickup%20Items/Arizona_Iced_Tea_Stix_jiq4ms.png",
        isActive:true
    },
    {
        name:"Ranch Pork Rinds",
        category: "Fula Deli",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200611/Delivery%20and%20Pickup%20Items/Ranch_Pork_Rinds_dle4lr.png",
        isActive:true
    },
    {
        name:"Corn",
        category: "Fula Deli",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201652/Product%20Items/Scotch_Tape_-1.88_x_54.6yds_emfgzf.png",
        isActive:true
    },
    {
        name:"Ramen (Hot Chicken)",
        category: "Fula Deli",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200611/Delivery%20and%20Pickup%20Items/Ramen_Hot_Chicken_ip7uby.png",
        isActive:true
    },
    {
        name:"Bottled Green Tea",
        category: "La Bodega",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200609/Delivery%20and%20Pickup%20Items/Bottled_Green_Tea_v3ni5o.png",
        isActive:true
    },
    {
        name:"Fried Pork Rinds",
        category: "La Bodega",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200610/Delivery%20and%20Pickup%20Items/Fried_Pork_Rinds_ufsioa.png",
        isActive:true
    },
    {
        name:"Coconut Water",
        category: "La Bodega",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200610/Delivery%20and%20Pickup%20Items/Coconut_Water_b3mrrm.png",
        isActive:true
    },
    {
        name:"Shin Ramyun Noodle Soup",
        category: "La Bodega",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200611/Delivery%20and%20Pickup%20Items/Shin_Ramyun_Noodle_Soup_onwles.png",
        isActive:true
    },
    {
        name:"Peach Arizona Iced Tea",
        category: "La Bodeguita Deli Grocery",
        price: "$7.99",
        imageUrl:"hhttps://res.cloudinary.com/dsewihcvy/image/upload/v1684200610/Delivery%20and%20Pickup%20Items/Peach_Arizona_Iced_Tea_sk8rht.png",
        isActive:true
    },
    {
        name:"Plantain Chips Gluten Free",
        category: "La Bodeguita Deli Grocery",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200611/Delivery%20and%20Pickup%20Items/Plantain_Chips_Gluten_Free_subzl0.png",
        isActive:true
    },
    {
        name:"Coconut Milk",
        category: "La Bodeguita Deli Grocery",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200610/Delivery%20and%20Pickup%20Items/Coconut_Milk_ykiabd.png",
        isActive:true
    },
    {
        name:"Jin Ramen Spicy",
        category: "La Bodeguita Deli Grocery",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200610/Delivery%20and%20Pickup%20Items/Jin_Ramen_Spicy_son4g2.png",
        isActive:true
    },
    {
        name:"Arizona Iced Tea Lemonade Can",
        category: "Lyla’s",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684201227/Delivery%20and%20Pickup%20Items/Arizona_Iced_Tea_Lemonade_Can_bjlzuf.png",
        isActive:true
    },
    {
        name:"Classic Plantain Chips",
        category: "Lyla’s",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200609/Delivery%20and%20Pickup%20Items/Classic_Plantain_Chips_kdpv4q.png",
        isActive:true
    },
    {
        name:"Panini",
        category: "Lyla’s",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200611/Delivery%20and%20Pickup%20Items/Panini_fnzfav.png",
        isActive:true
    },
    {
        name:"Mama Ramen",
        category: "Lyla’s",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200610/Delivery%20and%20Pickup%20Items/Mama_Ramen_gkasva.png",
        isActive:true
    },
    {
        name:"Arizona Blueberry White Tea",
        category: "Mini Market Bodega",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200609/Delivery%20and%20Pickup%20Items/Arizona_Blueberry_White_Tea_mwd1sk.png",
        isActive:true
    },
    {
        name:"Sweet Plantain Chips",
        category: "Mini Market Bodega",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200611/Delivery%20and%20Pickup%20Items/Sweet_Plantain_Chips_zrhcqg.png",
        isActive:true
    },
    {
        name:"Bagel Bacon egg and cheese",
        category: "Mini Market Bodega",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200611/Delivery%20and%20Pickup%20Items/Roll_Bacon_egg_and_cheese_ruomvz.png",
        isActive:true
    },
    {
        name:"Jin Ramen Mild",
        category: "Mini Market Bodega",
        price: "$7.99",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684200610/Delivery%20and%20Pickup%20Items/Jin_Ramen_Mild_xdhom9.png",
        isActive:true
    },

]

//stores  

const stores = [

    {
        name:"La Bodega",
        number: "718-437-4081",
        location: "978 McDonald Ave, Brooklyn, NY 11230",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684961529/stores/la_Bodega_jefcbi.png",
        storehours:"9 AM–9 PM",
        isActive:true
    },
    {
        name:"Sam's Deli",
        number: "212-727-9521",
        location: "275 West 4th Street, New York, NY 10014",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684961530/stores/Sam_s_Deli_lr3oxa.png",
        storehours:"5 AM–12 AM",
        isActive:true
    },
    {
        name:"Luigi Gourmet",
        number: "718-372-1260",
        location: "1858 Bath Ave, Brooklyn, NY 11214",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684961529/stores/Luigi_Gourmet_sqv0si.png",
        storehours:"7 AM–10 PM",
        isActive:true
    },
    {
        name:"Corner Gourmet",
        number: "212-406-2200",
        location: "66 W Broadway F, New York, NY 10007",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684961528/stores/Corner_Gourmet_x18n7g.png",
        storehours:"6 AM–7 PM",
        isActive:true
    },
    {
        name:"Berry Bodega",
        number: "212-353-8540",
        location: "922 Broadway, New York, NY 10010",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684961528/stores/Berry_Bodega_femiup.png",
        storehours:"7 AM–10 PM",
        isActive:true
    },
    {
        name:"Maria Store",
        number: "718-277-3828",
        location: "889 Sutter Ave, Brooklyn, NY 11207",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684961529/stores/Maria_Store_btufok.png",
        storehours:"8 AM–10 PM",
        isActive:true
    },
    {
        name:"Basics Market",
        number: "718-452-1367",
        location: "474 Wilson Ave, Brooklyn, NY 11221",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684961528/stores/Basics_Market_axzper.png",
        storehours:"5 AM–8 PM",
        isActive:true
    },
    {
        name:"Fernandez",
        number: "347-431-2572",
        location: "890 E 167th St, Bronx, NY 10459",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684961529/stores/Fernandez_i12gxe.png",
        storehours:"7 AM–9:30 PM",
        isActive:true
    },
    {
        name:"Lyla's Bodega",
        number: "212-799-1555",
        location: "177 W 83rd St, New York, NY 10024",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684961529/stores/Lyla_s_Bodega_fwl1nt.png",
        storehours:"7 AM–7 PM",
        isActive:true
    },
    {
        name:"NY Deli",
        number: "347-569-2286",
        location: "1019 McDonald Ave, Brooklyn, NY 11230",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684961529/stores/NY_Deli_mqjpgi.png",
        storehours:"7 AM–5 PM",
        isActive:true
    },
    {
        name:"Mario Deli",
        number: "718-326-7973",
        location: "9046 161st St, Jamaica, NY 11432",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684961529/stores/Mario_Deli_ax3f0a.png",
        storehours:"8 AM-7 PM",
        isActive:true
    },
    {
        name:"Express Deli",
        number: "718-376-9043",
        location: "478 Kings Hwy, Brooklyn, NY 11223",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684961529/stores/Express_Deli_yscycs.png",
        storehours:"Open 24 hrs",
        isActive:true
    },
    {
        name:"Ditmar’s Foodmart",
        number: "718-255-6788",
        location: "4614 Ditmars Blvd, Queens, NY 11105",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684976113/stores/Ditmar_s_Foodmart_skehez.png",
        storehours:"7 AM–9:30 PM",
        isActive:true
    },
    {
        name:"Sunny & Annie's Deli",
        number: "212-677-3131",
        location: "94 Avenue B, New York, NY 10009",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684975457/stores/Sunny_Annie_s_Deli_muu85b.png",
        storehours:"",
        isActive:true
    },
    {
        name:"Guerrero Market",
        number: "718-295-4273",
        location: "2239 Adams Pl, Bronx, NY 10457",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1684972671/stores/Guerrero_Deli_Mini_Market_bvt2s2.png",
        storehours:"7 AM–11:45 PM",
        isActive:true
    },
    {
        name:"Bronx Gourmet Deli",
        number: "718-561-1334",
        location: "921 E 180th St, Bronx, NY 10460",
        imageUrl:"https://res.cloudinary.com/dsewihcvy/image/upload/v1685142793/stores/Bronx_Gourmet_Deli_erajo7.jpg",
        storehours:"5 AM–12 AM",
        isActive:true
    },
]



// model Item {
//     id       String  @id @default(uuid())
//     name     String
//     category String
//     store    Store   @relation(fields: [storeId], references: [id])
//     storeId  String  @unique
//     price    Int
//     imageUrl String?
//     cartId   String? @unique
//     cart     Cart?   @relation(fields: [cartId], references: [id])
//     isActive Boolean
    
//   }

// model Store {
//     id         String   @id @default(uuid())
//     userId     String   
//     user       User     @relation(fields: [userId], references: [id])
//     name       String
//     number     String
//     location   String
//     imageURL   String?
//     reviews    String?
//     storehours String?
//     item       Item[]
//     Review     Review[]
  
  
//     @@index([userId])
//   }

