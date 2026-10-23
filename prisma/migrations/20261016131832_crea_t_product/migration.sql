-- CreateTable
CREATE TABLE "Productos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "stock" TEXT,
    "categoria" TEXT NOT NULL,

    CONSTRAINT "Productos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Productos_nombre_key" ON "Productos"("nombre");
