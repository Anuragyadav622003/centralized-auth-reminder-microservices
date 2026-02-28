/*
  Warnings:

  - The `role` column on the `Membership` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "tenant"."TenantRole" AS ENUM ('OWNER', 'ADMIN', 'MEMBER');

-- DropForeignKey
ALTER TABLE "tenant"."Membership" DROP CONSTRAINT "Membership_tenantId_fkey";

-- AlterTable
ALTER TABLE "tenant"."Membership" DROP COLUMN "role",
ADD COLUMN     "role" "tenant"."TenantRole" NOT NULL DEFAULT 'MEMBER';

-- AlterTable
ALTER TABLE "tenant"."Tenant" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- DropEnum
DROP TYPE "tenant"."Role";

-- CreateIndex
CREATE INDEX "Membership_userId_idx" ON "tenant"."Membership"("userId");

-- CreateIndex
CREATE INDEX "Tenant_slug_idx" ON "tenant"."Tenant"("slug");

-- AddForeignKey
ALTER TABLE "tenant"."Membership" ADD CONSTRAINT "Membership_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "tenant"."Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
