import { SetMetadata } from '@nestjs/common';

export const RESOURCE_TYPE_KEY = 'resourceType';
export const ResourceType = (type: 'invoices' | 'reminders' | 'clients') =>
  SetMetadata(RESOURCE_TYPE_KEY, type);
