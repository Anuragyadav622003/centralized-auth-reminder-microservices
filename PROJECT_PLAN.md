# PayPulse - Complete Project Plan

## Table of Contents
1. [Project Overview](#project-overview)
2. [Backend Architecture](#backend-architecture)
3. [Frontend Architecture](#frontend-architecture)
4. [API Specification](#api-specification)
5. [Component Library](#component-library)
6. [Page Specifications](#page-specifications)
7. [State Management](#state-management)
8. [Implementation Roadmap](#implementation-roadmap)

---

## Project Overview

PayPulse is a comprehensive invoice and reminder management system with multi-tenant architecture, subscription-based billing, and automated reminder workflows.

### Core Features
- **Authentication & Authorization**: JWT-based auth with role-based access control
- **Tenant Management**: Multi-tenant architecture with isolated data
- **Client Management**: CRUD operations for client records
- **Invoice Management**: Create, send, track invoices with payment integration
- **Billing & Subscriptions**: Subscription plans with usage tracking
- **Reminders**: Automated reminders via Email, WhatsApp, SMS
- **Dashboard**: Analytics and overview of business metrics
- **Reports & Analytics**: Financial reports, client reports, tax reports
- **Multi-Currency Support**: INR, USD, EUR with exchange rates
- **GST/Tax Management**: Automatic tax calculation, GST invoices
- **Payment Gateway**: Razorpay integration for online payments
- **File Attachments**: Upload logos, attachments to invoices
- **Email Templates**: Customizable email templates
- **Bulk Operations**: Bulk invoice actions, import/export
- **Activity Logs**: Track all actions for audit
- **Real-time Notifications**: WebSocket notifications
- **Offline Support**: PWA with offline capabilities
- **Dark/Light Mode**: Theme switching

### Tech Stack
- **Backend**: NestJS, PostgreSQL, MongoDB, Redis, Prisma ORM
- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **State Management**: Zustand + React Query
- **Data Fetching**: React Query + Axios
- **Charts**: Recharts + Tremor
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion
- **PDF Generation**: jsPDF + html2canvas
- **File Upload**: react-dropzone
- **Date Handling**: date-fns
- **Tables**: TanStack Table
- **Notifications**: Sonner (toast) + WebSockets

---

## Backend Architecture

### Microservices Structure

```
API Gateway (Port 3000)
├── Auth Service (Port 4001)
├── Reminder Service (Port 4002)
├── Tenant Service (Port 4004)
├── Billing Service (Port 4005)
├── Payment Service (Port 4006)
└── Notification Service (Port 4007)
```

### Database Schema

#### Auth Schema (PostgreSQL)
```sql
-- User Table
- id: UUID (PK)
- email: String (Unique)
- password: String (Hashed)
- globalRole: Enum ('SUPER_ADMIN', 'USER')
- isEmailVerified: Boolean
- isActive: Boolean
- createdAt: DateTime
- updatedAt: DateTime

-- Related Tables
- UserProfile (1:1 with User)
- UserSettings (1:1 with User)
- RefreshToken (1:N with User)
- LoginHistory (1:N with User)
- PasswordReset (1:N with User)
```

#### Tenant Schema (PostgreSQL)
```sql
-- Tenant Table
- id: UUID (PK)
- name: String
- slug: String (Unique)
- status: Enum ('ACTIVE', 'SUSPENDED', 'PENDING')
- subscriptionStatus: String
- currentPlan: String
- createdAt: DateTime
- updatedAt: DateTime

-- Related Tables
- TenantMember (N:M User-Tenant relationship)
- Client (N:1 with Tenant)
- Invoice (N:1 with Tenant)
```

#### Billing Schema (PostgreSQL)
```sql
-- Subscription Table
- id: UUID (PK)
- tenantId: UUID (FK)
- plan: String
- status: Enum ('ACTIVE', 'CANCELLED', 'EXPIRED')
- billingCycle: Enum ('MONTHLY', 'YEARLY')
- currentPeriodStart: DateTime
- currentPeriodEnd: DateTime

-- UsageTracking Table
- id: UUID (PK)
- tenantId: UUID (FK)
- resourceType: String
- currentUsage: Int
- limit: Int
- billingPeriod: String
```

#### MongoDB Collections (Reminder Service)
```javascript
// Reminders Collection
{
  _id: ObjectId,
  invoiceId: String,
  tenantId: String,
  clientId: String,
  scheduledAt: Date,
  sentAt: Date,
  status: Enum ('PENDING', 'SENT', 'FAILED'),
  channel: Enum ('EMAIL', 'WHATSAPP', 'SMS'),
  metadata: Object
}
```

---

## Frontend Architecture

### Project Structure

```
D:\paypulse-frontend
├── src/
│   ├── app/
│   │   ├── (auth)/           # Auth route group
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── layout.tsx
│   │   ├── (dashboard)/      # Dashboard route group
│   │   │   ├── dashboard/
│   │   │   ├── clients/
│   │   │   ├── invoices/
│   │   │   ├── billing/
│   │   │   ├── reminders/
│   │   │   ├── settings/
│   │   │   └── layout.tsx
│   │   ├── api/              # API routes (if needed)
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Landing page
│   ├── components/
│   │   ├── ui/               # shadcn/ui components
│   │   ├── layout/           # Layout components
│   │   ├── forms/            # Form components
│   │   └── charts/           # Chart components
│   ├── lib/
│   │   ├── api/              # API clients
│   │   ├── store/            # Zustand stores
│   │   └── utils.ts          # Utilities
│   ├── hooks/                # Custom React hooks
│   ├── types/                # TypeScript types
│   └── styles/
├── public/                   # Static assets
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## API Specification

### Authentication Endpoints

#### POST /api/auth/login
**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIs...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

#### POST /api/auth/register
**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "userId": "uuid"
}
```

#### GET /api/auth/profile
**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "id": "uuid",
  "email": "user@example.com",
  "globalRole": "USER",
  "isEmailVerified": true,
  "isActive": true,
  "createdAt": "2024-01-01T00:00:00Z",
  "updatedAt": "2024-01-01T00:00:00Z"
}
```

### Client Endpoints

#### GET /api/clients
**Query Parameters:**
- `page`: number (default: 1)
- `limit`: number (default: 20)
- `search`: string (optional)

**Response:**
```json
{
  "data": [
    {
      "id": "uuid",
      "name": "Acme Corp",
      "email": "contact@acme.com",
      "phone": "+1234567890",
      "gstin": "GST123456",
      "pan": "PAN123456",
      "billingAddress": {
        "street": "123 Main St",
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "postalCode": "400001"
      },
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ],
  "total": 100,
  "page": 1,
  "limit": 20
}
```

#### POST /api/clients
**Request:**
```json
{
  "name": "Acme Corp",
  "email": "contact@acme.com",
  "phone": "+1234567890",
  "gstin": "GST123456",
  "pan": "PAN123456",
  "billingAddress": {
    "street": "123 Main St",
    "city": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "postalCode": "400001"
  },
  "paymentTerms": 30
}
```

#### PUT /api/clients/:id
**Request:** Same as POST (partial updates allowed)

#### DELETE /api/clients/:id
**Response:** 204 No Content

### Invoice Endpoints

#### GET /api/invoices
**Query Parameters:**
- `page`: number
- `limit`: number
- `status`: string (DRAFT, SENT, PAID, OVERDUE, CANCELLED)
- `clientId`: string (optional)

**Response:**
```json
{
  "data": [
    {
      "id": "uuid",
      "invoiceNumber": "INV-2024-001",
      "clientId": "uuid",
      "client": { /* Client object */ },
      "issueDate": "2024-01-01",
      "dueDate": "2024-01-31",
      "items": [
        {
          "id": "uuid",
          "description": "Web Development",
          "quantity": 10,
          "unitPrice": 100,
          "taxRate": 18,
          "amount": 1180
        }
      ],
      "subtotal": 1000,
      "taxAmount": 180,
      "total": 1180,
      "currency": "INR",
      "status": "SENT",
      "notes": "Payment due within 30 days",
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ],
  "total": 50,
  "page": 1,
  "limit": 20
}
```

#### POST /api/invoices
**Request:**
```json
{
  "invoiceNumber": "INV-2024-001",
  "clientId": "uuid",
  "issueDate": "2024-01-01",
  "dueDate": "2024-01-31",
  "items": [
    {
      "description": "Web Development",
      "quantity": 10,
      "unitPrice": 100,
      "taxRate": 18
    }
  ],
  "currency": "INR",
  "notes": "Payment terms: Net 30"
}
```

#### POST /api/invoices/:id/send
**Request:**
```json
{
  "channels": ["EMAIL", "WHATSAPP"]
}
```

#### POST /api/invoices/:id/mark-paid
**Request:**
```json
{
  "paymentMethod": "UPI",
  "paymentDate": "2024-01-15",
  "transactionId": "TXN123456",
  "notes": "Payment received"
}
```

### Billing Endpoints

#### GET /api/billing/subscription
**Response:**
```json
{
  "id": "uuid",
  "plan": "PROFESSIONAL",
  "status": "ACTIVE",
  "billingCycle": "MONTHLY",
  "currentPeriodStart": "2024-01-01T00:00:00Z",
  "currentPeriodEnd": "2024-02-01T00:00:00Z",
  "cancelAtPeriodEnd": false
}
```

#### GET /api/billing/usage
**Response:**
```json
{
  "invoices": { "current": 45, "limit": 100 },
  "clients": { "current": 25, "limit": 50 },
  "reminders": { "current": 120, "limit": 500 }
}
```

#### GET /api/billing/plans
**Response:**
```json
[
  {
    "id": "basic",
    "name": "Basic",
    "description": "For small businesses",
    "price": 999,
    "billingCycle": "MONTHLY",
    "features": ["100 invoices/month", "50 clients", "Email reminders"],
    "limits": { "invoices": 100, "clients": 50, "reminders": 500 }
  }
]
```

### Reminder Endpoints

#### GET /api/reminders
**Query Parameters:**
- `status`: PENDING, SENT, FAILED
- `limit`: number
- `offset`: number

**Response:**
```json
{
  "data": [
    {
      "id": "uuid",
      "invoiceId": "uuid",
      "tenantId": "uuid",
      "clientId": "uuid",
      "scheduledAt": "2024-01-15T10:00:00Z",
      "sentAt": null,
      "status": "PENDING",
      "channel": "EMAIL"
    }
  ],
  "total": 200
}
```

#### GET /api/reminders/stats
**Response:**
```json
{
  "total": 500,
  "pending": 50,
  "sent": 420,
  "failed": 30
}
```

---

## Component Library

### Layout Components

#### Sidebar
```typescript
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
}

// Features:
// - Collapsible navigation menu
// - User profile section
// - Active route highlighting
// - Mobile responsive drawer
```

#### Header
```typescript
interface HeaderProps {
  onMenuClick: () => void;
  user: User;
  notifications: Notification[];
}

// Features:
// - Hamburger menu button
// - Search bar
// - Notification bell
// - User dropdown
```

#### DashboardLayout
```typescript
interface DashboardLayoutProps {
  children: React.ReactNode;
}

// Features:
// - Sidebar + Header wrapper
// - Protected route wrapper
// - Loading states
```

### Form Components

#### ClientForm
```typescript
interface ClientFormProps {
  client?: Client;
  onSubmit: (data: ClientFormData) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

interface ClientFormData {
  name: string;
  email?: string;
  phone?: string;
  gstin?: string;
  pan?: string;
  billingAddress?: Address;
  shippingAddress?: Address;
  notes?: string;
  paymentTerms?: number;
}
```

#### InvoiceForm
```typescript
interface InvoiceFormProps {
  invoice?: Invoice;
  clients: Client[];
  onSubmit: (data: InvoiceFormData) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

interface InvoiceFormData {
  invoiceNumber: string;
  clientId: string;
  issueDate: string;
  dueDate: string;
  items: InvoiceItem[];
  currency: string;
  notes?: string;
  terms?: string;
}
```

#### InvoiceItemInput
```typescript
interface InvoiceItemInputProps {
  item: InvoiceItem;
  onChange: (item: InvoiceItem) => void;
  onRemove: () => void;
}

// Auto-calculates amount from quantity * unitPrice
// Supports tax rate input
```

### Chart Components

#### RevenueChart
```typescript
interface RevenueChartProps {
  data: {
    month: string;
    revenue: number;
    expenses: number;
  }[];
  period: 'monthly' | 'quarterly' | 'yearly';
}

// Line chart with revenue vs expenses
```

#### InvoiceStatusChart
```typescript
interface InvoiceStatusChartProps {
  data: {
    status: string;
    count: number;
    amount: number;
  }[];
}

// Donut chart showing invoice distribution by status
```

#### UsageChart
```typescript
interface UsageChartProps {
  data: UsageMetrics;
  limits: {
    invoices: number;
    clients: number;
    reminders: number;
  };
}

// Progress bars showing usage vs limits
```

### Table Components

#### DataTable
```typescript
interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    onPageChange: (page: number) => void;
  };
  sorting?: {
    column: string;
    direction: 'asc' | 'desc';
    onSort: (column: string) => void;
  };
  actions?: {
    label: string;
    onClick: (row: T) => void;
    variant?: 'default' | 'destructive';
  }[];
}
```

#### ClientTable
```typescript
// Pre-configured DataTable for clients
// Columns: Name, Email, Phone, Outstanding, Actions
```

#### InvoiceTable
```typescript
// Pre-configured DataTable for invoices
// Columns: Number, Client, Date, Amount, Status, Actions
```

### UI Components (shadcn/ui)

Already installed:
- Button, Card, Input, Label
- Badge, Avatar, Alert
- Dialog, Dropdown Menu, Sheet
- Table, Tabs, Select
- Textarea, Checkbox, Separator
- Skeleton, Tooltip

Additional needed:
- DatePicker (install via shadcn)
- Toast/Sonner for notifications

---

## Page Specifications

### 1. Login Page (/login)
**Layout:** AuthLayout (centered card)
**Components:**
- Logo/Brand header
- Email input
- Password input
- Submit button
- Link to register

**Features:**
- Form validation
- Error display
- Loading state
- Redirect to dashboard on success

### 2. Register Page (/register)
**Layout:** AuthLayout
**Components:**
- Logo/Brand header
- Email input
- Password input
- Confirm password input
- Submit button
- Link to login

**Features:**
- Password match validation
- Password strength indicator
- Success message
- Auto-redirect to login

### 3. Dashboard Home (/dashboard)
**Layout:** DashboardLayout
**Widgets:**
- Stats cards (Total Invoices, Total Clients, Revenue, Outstanding)
- Revenue chart (last 6 months)
- Recent invoices list
- Upcoming reminders
- Usage limits (subscription)

**Data Fetching:**
- Dashboard stats API
- Recent invoices API
- Usage metrics API

### 4. Clients List (/dashboard/clients)
**Layout:** DashboardLayout
**Components:**
- Page header with "Add Client" button
- Search input
- ClientTable with pagination
- Delete confirmation dialog

**Features:**
- Search/filter
- Sort by name/date
- Pagination
- Bulk actions (future)

### 5. Client Detail (/dashboard/clients/[id])
**Layout:** DashboardLayout
**Components:**
- Client info card
- Edit/Delete buttons
- Invoice history table
- Outstanding amount

### 6. Invoices List (/dashboard/invoices)
**Layout:** DashboardLayout
**Components:**
- Page header with "Create Invoice" button
- Filter by status tabs
- Search input
- InvoiceTable with pagination
- Status badges

**Features:**
- Filter by status (All, Draft, Sent, Paid, Overdue)
- Search by invoice number or client
- Quick actions (Send, Mark Paid, Delete)

### 7. Invoice Create/Edit (/dashboard/invoices/new, /dashboard/invoices/[id]/edit)
**Layout:** DashboardLayout
**Components:**
- InvoiceForm
- Client selector
- Invoice items (dynamic list)
- Preview section
- Save/Send buttons

**Features:**
- Auto-generate invoice number
- Calculate totals automatically
- Add/remove items
- Save as draft or send immediately

### 8. Invoice Detail (/dashboard/invoices/[id])
**Layout:** DashboardLayout
**Components:**
- Invoice preview (PDF-like)
- Action buttons (Send, Download, Edit, Delete)
- Payment status
- Reminder history

### 9. Billing/Subscription (/dashboard/billing)
**Layout:** DashboardLayout
**Components:**
- Current plan card
- Usage metrics (progress bars)
- Upgrade plan button
- Billing history table
- Cancel subscription option

### 10. Reminders (/dashboard/reminders)
**Layout:** DashboardLayout
**Components:**
- Stats cards (Total, Pending, Sent, Failed)
- Reminder queue status
- Recent reminders table
- Queue metrics chart

### 11. Settings (/dashboard/settings)
**Layout:** DashboardLayout
**Tabs:**
- Profile (email, name)
- Company (business name, GSTIN, address)
- Notifications (email, WhatsApp preferences)
- Security (change password)

---

## State Management

### Auth Store (Zustand)
```typescript
interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  
  // Actions
  setAuth: (user: User, accessToken: string, refreshToken: string) => void;
  logout: () => void;
  setUser: (user: User) => void;
}
```

### Dashboard Store (Zustand)
```typescript
interface DashboardState {
  stats: DashboardStats | null;
  recentInvoices: Invoice[];
  usage: UsageMetrics | null;
  isLoading: boolean;
  
  // Actions
  fetchDashboardData: () => Promise<void>;
  refreshStats: () => Promise<void>;
}
```

### React Query Setup
```typescript
// Query Keys
const queryKeys = {
  clients: ['clients'],
  client: (id: string) => ['clients', id],
  invoices: ['invoices'],
  invoice: (id: string) => ['invoices', id],
  subscription: ['subscription'],
  usage: ['usage'],
  reminders: ['reminders'],
};

// Example Hook
function useClients(params: ClientQueryParams) {
  return useQuery({
    queryKey: queryKeys.clients,
    queryFn: () => clientsApi.getClients(params),
  });
}
```

---

## Implementation Roadmap

### Phase 1: Foundation (Week 1)
- [ ] Set up Next.js project with all dependencies
- [ ] Configure Tailwind and shadcn/ui
- [ ] Set up folder structure
- [ ] Create type definitions
- [ ] Set up API layer (axios, interceptors)
- [ ] Set up Zustand stores
- [ ] Set up React Query with hydration
- [ ] Configure React Hook Form + Zod
- [ ] Set up Framer Motion animations
- [ ] Configure Sonner toast notifications

### Phase 2: Authentication & Onboarding (Week 1-2)
- [ ] Create AuthLayout with animated background
- [ ] Build Login page with form validation
- [ ] Build Register page with password strength
- [ ] Add email verification flow
- [ ] Implement auth guards (HOC)
- [ ] Add forgot/reset password
- [ ] Create onboarding wizard for new users
- [ ] Test login/logout flow

### Phase 3: Dashboard Layout & Navigation (Week 2)
- [ ] Create DashboardLayout with collapsible sidebar
- [ ] Build Sidebar with nested navigation
- [ ] Build Header with search, notifications, profile
- [ ] Implement breadcrumb navigation
- [ ] Add mobile responsive drawer
- [ ] Create theme provider (dark/light mode)
- [ ] Add keyboard shortcuts
- [ ] Implement page transition animations

### Phase 4: Core Features - Clients (Week 2-3)
- [ ] Dashboard home with stats widgets
- [ ] Clients list with TanStack Table
- [ ] Client filters (status, tags, search)
- [ ] Client create/edit modal
- [ ] Client detail page with history
- [ ] Client import/export (CSV)
- [ ] Bulk client actions
- [ ] Client activity timeline

### Phase 5: Core Features - Invoices (Week 3-4)
- [ ] Invoices list with advanced filters
- [ ] Invoice create wizard (stepper)
- [ ] Invoice item management (dynamic rows)
- [ ] Auto-calculate taxes, discounts
- [ ] Invoice preview (live)
- [ ] Invoice PDF generation
- [ ] Invoice send modal (email/WhatsApp)
- [ ] Payment recording
- [ ] Invoice templates
- [ ] Recurring invoices
- [ ] Bulk invoice actions

### Phase 6: Billing & Subscriptions (Week 4)
- [ ] Subscription overview page
- [ ] Plan comparison cards
- [ ] Usage analytics with charts
- [ ] Upgrade/downgrade flow
- [ ] Billing history table
- [ ] Payment method management
- [ ] Invoice for subscription

### Phase 7: Reports & Analytics (Week 4-5)
- [ ] Financial dashboard
- [ ] Revenue charts (monthly/yearly)
- [ ] Client reports
- [ ] Tax/GST reports
- [ ] Aging report (outstanding)
- [ ] Export reports (PDF/Excel)
- [ ] Scheduled reports

### Phase 8: Advanced Features (Week 5-6)
- [ ] Reminders management
- [ ] Email template editor
- [ ] Company settings
- [ ] User profile & preferences
- [ ] Activity logs
- [ ] File attachments
- [ ] Multi-currency support
- [ ] GST configuration

### Phase 9: Polish & Optimization (Week 6)
- [ ] Error boundaries
- [ ] Loading skeletons
- [ ] Empty states
- [ ] Responsive testing
- [ ] Performance optimization
- [ ] PWA configuration
- [ ] SEO optimization
- [ ] Accessibility audit

### Phase 10: Production Ready (Future)
- [ ] WebSocket real-time updates
- [ ] Offline support (service workers)
- [ ] Push notifications
- [ ] Advanced analytics
- [ ] API documentation
- [ ] E2E testing
- [ ] Performance monitoring

---

## Environment Variables

```env
# Frontend .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_NAME=PayPulse
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

---

## Dependencies to Install

```bash
# Already installed
npx create-next-app@latest ...
npx shadcn@latest init

# shadcn components
npx shadcn@latest add button card input label badge avatar alert dialog dropdown-menu table tabs select textarea checkbox separator sheet skeleton tooltip

# Additional shadcn components
npx shadcn@latest add date-picker sonner calendar accordion breadcrumb command context-menu hover-card pagination progress radio-group slider switch toggle toggle-group

# Core NPM packages
npm install axios lucide-react recharts date-fns zustand @tanstack/react-query

# Form handling & validation
npm install react-hook-form @hookform/resolvers zod

# Advanced table
npm install @tanstack/react-table @tanstack/match-sorter-utils

# Animations
npm install framer-motion

# PDF generation
npm install jspdf html2canvas

# File uploads
npm install react-dropzone

# Charts (additional)
npm install @tremor/react

# Utilities
npm install clsx tailwind-merge
npm install use-debounce use-hotkeys

# Date/Time
npm install date-fns-tz

# Export functionality
npm install xlsx file-saver

# QR codes (for payments)
npm install qrcode.react

# Copy to clipboard
npm install copy-to-clipboard

# Currency formatting
npm install @dinero.js/currencies dinero.js

# WebSocket client (for real-time)
npm install socket.io-client

# PWA
npm install next-pwa
```

## Advanced Component Specifications

### Form Components with React Hook Form

#### useForm Hook Template
```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  amount: z.number().min(0, 'Amount must be positive'),
});

type FormData = z.infer<typeof schema>;

export function useClientForm() {
  return useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      amount: 0,
    },
  });
}
```

#### SmartForm Component
```typescript
interface SmartFormProps<T extends FieldValues> {
  schema: ZodSchema<T>;
  onSubmit: (data: T) => Promise<void>;
  children: React.ReactNode;
  defaultValues?: DefaultValues<T>;
}

// Features:
// - Automatic validation
// - Error display
// - Loading state
// - Dirty tracking
// - Auto-save (optional)
```

### Data Table with TanStack Table

#### DataTable Component
```typescript
interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  pagination: PaginationState;
  sorting: SortingState;
  filtering: ColumnFiltersState;
  onPaginationChange: (pagination: PaginationState) => void;
  onSortingChange: (sorting: SortingState) => void;
  onFilteringChange: (filters: ColumnFiltersState) => void;
  rowActions?: RowAction<T>[];
  bulkActions?: BulkAction<T>[];
  exportOptions?: ExportOptions;
}

// Features:
// - Column sorting
// - Column filtering
// - Global search
// - Pagination
// - Row selection
// - Bulk actions
// - Column visibility toggle
// - Export to CSV/Excel
// - Column resizing
// - Row expansion (details)
```

### Animation Components

#### PageTransition
```typescript
interface PageTransitionProps {
  children: React.ReactNode;
  mode?: 'fade' | 'slide' | 'scale';
}

// Smooth page transitions
```

#### AnimatedList
```typescript
interface AnimatedListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string;
  staggerDelay?: number;
}

// Staggered list animations
```

#### SkeletonLoader
```typescript
interface SkeletonLoaderProps {
  type: 'card' | 'table' | 'form' | 'text';
  count?: number;
}

// Context-aware skeletons
```

### PDF Generation

#### InvoicePDF Component
```typescript
interface InvoicePDFProps {
  invoice: Invoice;
  companyDetails: CompanyDetails;
  template?: 'modern' | 'classic' | 'minimal';
}

// Generate professional PDFs
// Multiple templates
// Custom branding
```

### File Upload Components

#### FileDropzone
```typescript
interface FileDropzoneProps {
  accept?: Record<string, string[]>;
  maxSize?: number;
  maxFiles?: number;
  onUpload: (files: File[]) => Promise<void>;
  preview?: boolean;
}

// Drag & drop
// File preview
// Upload progress
// Validation
```

### Chart Components

#### RevenueChart
```typescript
interface RevenueChartProps {
  data: RevenueData[];
  granularity: 'daily' | 'weekly' | 'monthly' | 'yearly';
  compareWithPrevious?: boolean;
  currency: string;
}

// Interactive charts
// Tooltips
// Zoom/pan
// Export
```

#### UsageGauge
```typescript
interface UsageGaugeProps {
  current: number;
  limit: number;
  label: string;
  warningThreshold?: number;
}

// Circular progress
// Color coding
// Animations
```

## State Management Patterns

### React Query Configuration
```typescript
// Query client configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});

// Optimistic updates
const useUpdateInvoice = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: updateInvoice,
    onMutate: async (newInvoice) => {
      // Optimistic update
      await queryClient.cancelQueries(['invoices']);
      const previous = queryClient.getQueryData(['invoices']);
      queryClient.setQueryData(['invoices'], (old) => 
        old?.map((inv) => inv.id === newInvoice.id ? newInvoice : inv)
      );
      return { previous };
    },
    onError: (err, newInvoice, context) => {
      // Rollback on error
      queryClient.setQueryData(['invoices'], context?.previous);
    },
    onSettled: () => {
      // Refetch after mutation
      queryClient.invalidateQueries(['invoices']);
    },
  });
};
```

### Zustand Store with Persistence
```typescript
interface AppState {
  // UI State
  sidebarOpen: boolean;
  theme: 'light' | 'dark' | 'system';
  
  // User Preferences
  defaultCurrency: string;
  dateFormat: string;
  
  // Actions
  toggleSidebar: () => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      sidebarOpen: true,
      theme: 'system',
      defaultCurrency: 'INR',
      dateFormat: 'DD/MM/YYYY',
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({ 
        theme: state.theme, 
        defaultCurrency: state.defaultCurrency,
        dateFormat: state.dateFormat,
      }),
    }
  )
);
```

## Performance Optimizations

### Code Splitting
```typescript
// Dynamic imports for heavy components
const InvoicePDF = dynamic(() => import('@/components/InvoicePDF'), {
  loading: () => <SkeletonLoader type="card" />,
  ssr: false,
});

const ChartComponents = dynamic(() => import('@/components/Charts'), {
  loading: () => <SkeletonLoader type="card" />,
});
```

### Virtualization for Large Lists
```typescript
import { Virtualizer } from '@tanstack/react-virtual';

// Use for large client lists (1000+ items)
```

### Image Optimization
```typescript
import Image from 'next/image';

// Use Next.js Image component
// Configure blur placeholders
// Implement lazy loading
```

### Memoization Patterns
```typescript
// Memoize expensive calculations
const filteredInvoices = useMemo(() => 
  invoices.filter(inv => inv.status === filter),
  [invoices, filter]
);

// Memoize callbacks
const handleSubmit = useCallback((data: FormData) => {
  submitInvoice(data);
}, [submitInvoice]);

// Memoize components
const InvoiceCard = memo(function InvoiceCard({ invoice }: { invoice: Invoice }) {
  return <Card>...</Card>;
});
```

## Security Best Practices

### XSS Prevention
- Sanitize all user inputs
- Use dangerouslySetInnerHTML sparingly
- Implement Content Security Policy

### CSRF Protection
- Use SameSite cookies
- Implement CSRF tokens for mutations

### Data Protection
- Encrypt sensitive data in localStorage
- Implement secure token refresh
- Clear sensitive data on logout

## Accessibility (a11y)

### Requirements
- WCAG 2.1 Level AA compliance
- Keyboard navigation
- Screen reader support
- Focus management
- Color contrast (4.5:1 minimum)

### Implementation
```typescript
// Use semantic HTML
// Add aria-labels
// Implement skip links
// Manage focus on route change
// Provide error announcements
```

## Testing Strategy

### Unit Tests (Vitest)
- Component testing
- Hook testing
- Utility function testing

### Integration Tests
- API integration
- Form submissions
- User flows

### E2E Tests (Playwright)
- Critical user journeys
- Cross-browser testing
- Mobile responsiveness

## Deployment Checklist

### Pre-deployment
- [ ] Environment variables configured
- [ ] API endpoints updated
- [ ] Build successful
- [ ] Lighthouse score > 90
- [ ] No console errors
- [ ] Error tracking configured (Sentry)
- [ ] Analytics configured

### Post-deployment
- [ ] Smoke tests passed
- [ ] Performance monitoring active
- [ ] Error alerts configured
- [ ] SSL certificate valid
- [ ] CDN configured
- [ ] Backups scheduled

---

## File Templates

### Page Template
```typescript
'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { PageHeader } from '@/components/layout/PageHeader';

export default function PageName() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <DashboardLayout>
      <PageHeader title="Page Title" description="Page description">
        {/* Action buttons */}
      </PageHeader>
      
      {/* Page content */}
    </DashboardLayout>
  );
}
```

### API Hook Template
```typescript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiName } from '@/lib/api';

const queryKeys = {
  all: ['resource'] as const,
  detail: (id: string) => [...queryKeys.all, id] as const,
};

export function useResources() {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: () => apiName.getAll(),
  });
}

export function useCreateResource() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: apiName.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.all });
    },
  });
}
```

---

## Testing Checklist

### Authentication
- [ ] Login with valid credentials
- [ ] Login with invalid credentials shows error
- [ ] Register new account
- [ ] Register with existing email shows error
- [ ] Token refresh works
- [ ] Logout clears state

### Clients
- [ ] List clients with pagination
- [ ] Search clients
- [ ] Create new client
- [ ] Edit client
- [ ] Delete client with confirmation

### Invoices
- [ ] List invoices with filters
- [ ] Create invoice with items
- [ ] Edit invoice
- [ ] Send invoice
- [ ] Mark as paid
- [ ] Delete invoice

### Billing
- [ ] View subscription details
- [ ] View usage metrics
- [ ] View plans
- [ ] Upgrade plan flow

---

## Notes

1. **API Base URL**: All API calls go to `http://localhost:3000/api` (API Gateway)
2. **Authentication**: JWT tokens stored in localStorage, added to headers via axios interceptor
3. **Error Handling**: Global error boundary + toast notifications for API errors
4. **Loading States**: Skeleton loaders for lists, spinners for buttons
5. **Responsive**: Mobile-first design, sidebar becomes drawer on mobile
