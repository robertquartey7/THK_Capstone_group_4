import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import { stores, items1, items2, items3 } from "../seedItems.js";

(async function load() {
  await prisma.item.deleteMany({});
  try {
    items3.forEach(async ({ name, category, price, imageUrl, isActive }) => {
      const store = await prisma.item.create({
        data: {
          name,
          category,
         price,
          imageUrl,
          isActive,
          storeId: "0942dd9b-acf3-4380-9857-98c2f19be6e7",
        },
      });
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
