-- CreateTable
CREATE TABLE "users" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT DEFAULT 'NULL',
    "email" TEXT DEFAULT 'NULL',
    "password" TEXT DEFAULT 'NULL',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "todos" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT DEFAULT 'NULL',
    "description" TEXT DEFAULT 'NULL',

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);
