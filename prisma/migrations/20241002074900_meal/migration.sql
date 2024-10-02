-- CreateTable
CREATE TABLE "meals" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "meals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foods_on_meals" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "meal_id" INTEGER NOT NULL,
    "food_id" INTEGER NOT NULL,

    CONSTRAINT "foods_on_meals_pkey" PRIMARY KEY ("meal_id","food_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "meals_name_key" ON "meals"("name");

-- AddForeignKey
ALTER TABLE "foods_on_meals" ADD CONSTRAINT "foods_on_meals_meal_id_fkey" FOREIGN KEY ("meal_id") REFERENCES "meals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foods_on_meals" ADD CONSTRAINT "foods_on_meals_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
