-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "email_verified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verificationtokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Like" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "courseId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coursesData" (
    "courseId" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "courseYear" INTEGER NOT NULL,
    "courseDescription" TEXT NOT NULL,
    "facultyId" TEXT NOT NULL,

    CONSTRAINT "coursesData_pkey" PRIMARY KEY ("courseId")
);

-- CreateTable
CREATE TABLE "categoryData" (
    "categoryId" TEXT NOT NULL,
    "categoryName" TEXT NOT NULL,

    CONSTRAINT "categoryData_pkey" PRIMARY KEY ("categoryId")
);

-- CreateTable
CREATE TABLE "facultyData" (
    "facultyId" TEXT NOT NULL,
    "facultyTHName" TEXT NOT NULL,
    "facultyENName" TEXT NOT NULL,
    "facultyDescription" TEXT NOT NULL,
    "accentColor" TEXT NOT NULL,
    "borderAccentColor" TEXT NOT NULL,

    CONSTRAINT "facultyData_pkey" PRIMARY KEY ("facultyId")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_provider_account_id_key" ON "accounts"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_session_token_key" ON "sessions"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "verificationtokens_identifier_token_key" ON "verificationtokens"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "Like_courseId_userId_key" ON "Like"("courseId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "coursesData_courseId_key" ON "coursesData"("courseId");

-- CreateIndex
CREATE UNIQUE INDEX "categoryData_categoryId_key" ON "categoryData"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "facultyData_facultyId_key" ON "facultyData"("facultyId");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "coursesData"("courseId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coursesData" ADD CONSTRAINT "coursesData_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categoryData"("categoryId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coursesData" ADD CONSTRAINT "coursesData_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "facultyData"("facultyId") ON DELETE CASCADE ON UPDATE CASCADE;
