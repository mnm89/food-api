-- CreateTable
CREATE TABLE "foods" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "foods_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "foods_name_key" ON "foods"("name");

-- AddForeignKey
ALTER TABLE "foods" ADD CONSTRAINT "foods_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
