-- DropForeignKey
ALTER TABLE "foods_on_meals" DROP CONSTRAINT "foods_on_meals_food_id_fkey";

-- DropForeignKey
ALTER TABLE "foods_on_meals" DROP CONSTRAINT "foods_on_meals_meal_id_fkey";

-- AddForeignKey
ALTER TABLE "foods_on_meals" ADD CONSTRAINT "foods_on_meals_meal_id_fkey" FOREIGN KEY ("meal_id") REFERENCES "meals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foods_on_meals" ADD CONSTRAINT "foods_on_meals_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE CASCADE ON UPDATE CASCADE;
