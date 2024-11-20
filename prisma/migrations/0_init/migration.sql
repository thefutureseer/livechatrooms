-- CreateTable
CREATE TABLE "chatroom" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chatroom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "message" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "text" TEXT NOT NULL,
    "chatroomid" TEXT NOT NULL,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_chatroom_created_at" ON "chatroom"("created_at");

-- CreateIndex
CREATE INDEX "idx_message_chatroomid" ON "message"("chatroomid");

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_chatroomid_fkey" FOREIGN KEY ("chatroomid") REFERENCES "chatroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

