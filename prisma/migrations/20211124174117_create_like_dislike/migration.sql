-- CreateTable
CREATE TABLE "likedislike" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "isLike" BOOLEAN NOT NULL DEFAULT null,
    "post_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "likedislike_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "likedislike_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
