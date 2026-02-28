import { TenantRole } from '../../generated/prisma';

export class AddMemberDto {
  userId!: string;
  role?: TenantRole;
}