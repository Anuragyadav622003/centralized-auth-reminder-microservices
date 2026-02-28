# PayPulse API Reference

Complete API documentation for frontend integration.

## Base URL
```
Development: http://localhost:3000/api
Production: https://api.paypulse.com/api
```

## Authentication

### Login
```http
POST /auth/login
Content-Type: application/json
```

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200 OK):**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Responses:**
- `401 Unauthorized`: Invalid credentials
- `400 Bad Request`: Missing email or password

**Frontend Usage:**
```typescript
const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  localStorage.setItem('accessToken', response.data.accessToken);
  localStorage.setItem('refreshToken', response.data.refreshToken);
  return response.data;
};
```

---

### Register
```http
POST /auth/register
Content-Type: application/json
```

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (201 Created):**
```json
{
  "message": "User registered successfully",
  "userId": "550e8400-e29b-41d4-a716-446655440000"
}
```

**Error Responses:**
- `409 Conflict`: User already exists
- `400 Bad Request`: Invalid email format or weak password

---

### Get Profile
```http
GET /auth/profile
Authorization: Bearer <accessToken>
```

**Response (200 OK):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "email": "user@example.com",
  "globalRole": "USER",
  "isEmailVerified": true,
  "isActive": true,
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

**Error Responses:**
- `401 Unauthorized`: Invalid or expired token

---

### Refresh Token
```http
POST /auth/refresh
Content-Type: application/json
```

**Request:**
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response (200 OK):**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## Clients API

### List Clients
```http
GET /clients?page=1&limit=20&search=acme
Authorization: Bearer <accessToken>
```

**Query Parameters:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| page | number | 1 | Page number |
| limit | number | 20 | Items per page (max 100) |
| search | string | - | Search by name or email |

**Response (200 OK):**
```json
{
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440001",
      "name": "Acme Corporation",
      "email": "contact@acme.com",
      "phone": "+91 98765 43210",
      "gstin": "27AABCU9603R1ZX",
      "pan": "AABCU9603R",
      "billingAddress": {
        "street": "123 Business Park",
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "postalCode": "400001"
      },
      "shippingAddress": {
        "street": "456 Warehouse Road",
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "postalCode": "400002"
      },
      "notes": "Key client since 2020",
      "tags": ["enterprise", "priority"],
      "paymentTerms": 30,
      "createdAt": "2024-01-10T08:00:00Z",
      "updatedAt": "2024-01-15T12:00:00Z"
    }
  ],
  "total": 150,
  "page": 1,
  "limit": 20,
  "totalPages": 8
}
```

**Frontend Usage:**
```typescript
const useClients = (params: { page?: number; limit?: number; search?: string }) => {
  return useQuery({
    queryKey: ['clients', params],
    queryFn: async () => {
      const response = await api.get('/clients', { params });
      return response.data;
    },
  });
};
```

---

### Get Single Client
```http
GET /clients/:id
Authorization: Bearer <accessToken>
```

**Response (200 OK):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440001",
  "name": "Acme Corporation",
  "email": "contact@acme.com",
  "phone": "+91 98765 43210",
  "gstin": "27AABCU9603R1ZX",
  "pan": "AABCU9603R",
  "billingAddress": {
    "street": "123 Business Park",
    "city": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "postalCode": "400001"
  },
  "shippingAddress": {
    "street": "456 Warehouse Road",
    "city": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "postalCode": "400002"
  },
  "notes": "Key client since 2020",
  "tags": ["enterprise", "priority"],
  "paymentTerms": 30,
  "createdAt": "2024-01-10T08:00:00Z",
  "updatedAt": "2024-01-15T12:00:00Z"
}
```

**Error Responses:**
- `404 Not Found`: Client not found

---

### Create Client
```http
POST /clients
Authorization: Bearer <accessToken>
Content-Type: application/json
```

**Request:**
```json
{
  "name": "Tech Solutions Ltd",
  "email": "info@techsolutions.com",
  "phone": "+91 98765 12345",
  "gstin": "29AADCB2230M1ZP",
  "pan": "AADCB2230M",
  "billingAddress": {
    "street": "789 Tech Hub, Whitefield",
    "city": "Bangalore",
    "state": "Karnataka",
    "country": "India",
    "postalCode": "560066"
  },
  "shippingAddress": {
    "street": "789 Tech Hub, Whitefield",
    "city": "Bangalore",
    "state": "Karnataka",
    "country": "India",
    "postalCode": "560066"
  },
  "notes": "New tech startup client",
  "tags": ["startup", "tech"],
  "paymentTerms": 15
}
```

**Response (201 Created):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440002",
  "name": "Tech Solutions Ltd",
  "email": "info@techsolutions.com",
  "phone": "+91 98765 12345",
  "gstin": "29AADCB2230M1ZP",
  "pan": "AADCB2230M",
  "billingAddress": {
    "street": "789 Tech Hub, Whitefield",
    "city": "Bangalore",
    "state": "Karnataka",
    "country": "India",
    "postalCode": "560066"
  },
  "shippingAddress": {
    "street": "789 Tech Hub, Whitefield",
    "city": "Bangalore",
    "state": "Karnataka",
    "country": "India",
    "postalCode": "560066"
  },
  "notes": "New tech startup client",
  "tags": ["startup", "tech"],
  "paymentTerms": 15,
  "createdAt": "2024-01-20T10:00:00Z",
  "updatedAt": "2024-01-20T10:00:00Z"
}
```

**Error Responses:**
- `400 Bad Request`: Invalid data
- `403 Forbidden`: Usage limit exceeded

**Frontend Usage:**
```typescript
const useCreateClient = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: CreateClientData) => {
      const response = await api.post('/clients', data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      toast.success('Client created successfully');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to create client');
    },
  });
};
```

---

### Update Client
```http
PUT /clients/:id
Authorization: Bearer <accessToken>
Content-Type: application/json
```

**Request:**
```json
{
  "name": "Tech Solutions Pvt Ltd",
  "phone": "+91 98765 99999",
  "paymentTerms": 30
}
```

**Response (200 OK):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440002",
  "name": "Tech Solutions Pvt Ltd",
  "email": "info@techsolutions.com",
  "phone": "+91 98765 99999",
  "gstin": "29AADCB2230M1ZP",
  "pan": "AADCB2230M",
  "billingAddress": {
    "street": "789 Tech Hub, Whitefield",
    "city": "Bangalore",
    "state": "Karnataka",
    "country": "India",
    "postalCode": "560066"
  },
  "shippingAddress": {
    "street": "789 Tech Hub, Whitefield",
    "city": "Bangalore",
    "state": "Karnataka",
    "country": "India",
    "postalCode": "560066"
  },
  "notes": "New tech startup client",
  "tags": ["startup", "tech"],
  "paymentTerms": 30,
  "createdAt": "2024-01-20T10:00:00Z",
  "updatedAt": "2024-01-21T14:30:00Z"
}
```

---

### Delete Client
```http
DELETE /clients/:id
Authorization: Bearer <accessToken>
```

**Response (200 OK):**
```json
{
  "message": "Client deleted successfully"
}
```

**Error Responses:**
- `404 Not Found`: Client not found
- `400 Bad Request`: Cannot delete client with invoices

---

## Invoices API

### List Invoices
```http
GET /invoices?page=1&limit=20&status=SENT&clientId=550e8400-e29b-41d4-a716-446655440001
Authorization: Bearer <accessToken>
```

**Query Parameters:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| page | number | 1 | Page number |
| limit | number | 20 | Items per page |
| status | string | - | Filter by status: DRAFT, SENT, PAID, OVERDUE, CANCELLED |
| clientId | string | - | Filter by client |

**Response (200 OK):**
```json
{
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440010",
      "invoiceNumber": "INV-2024-001",
      "clientId": "550e8400-e29b-41d4-a716-446655440001",
      "client": {
        "id": "550e8400-e29b-41d4-a716-446655440001",
        "name": "Acme Corporation",
        "email": "contact@acme.com"
      },
      "issueDate": "2024-01-15",
      "dueDate": "2024-02-15",
      "items": [
        {
          "id": "item-1",
          "description": "Web Development Services",
          "quantity": 40,
          "unitPrice": 2500,
          "taxRate": 18,
          "amount": 118000
        },
        {
          "id": "item-2",
          "description": "UI/UX Design",
          "quantity": 20,
          "unitPrice": 3000,
          "taxRate": 18,
          "amount": 70800
        }
      ],
      "subtotal": 160000,
      "taxAmount": 28800,
      "total": 188800,
      "currency": "INR",
      "status": "SENT",
      "notes": "Payment due within 30 days",
      "terms": "Net 30",
      "createdAt": "2024-01-15T10:00:00Z",
      "updatedAt": "2024-01-15T10:00:00Z"
    }
  ],
  "total": 45,
  "page": 1,
  "limit": 20,
  "totalPages": 3
}
```

---

### Get Single Invoice
```http
GET /invoices/:id
Authorization: Bearer <accessToken>
```

**Response (200 OK):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440010",
  "invoiceNumber": "INV-2024-001",
  "clientId": "550e8400-e29b-41d4-a716-446655440001",
  "client": {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "name": "Acme Corporation",
    "email": "contact@acme.com",
    "phone": "+91 98765 43210",
    "billingAddress": {
      "street": "123 Business Park",
      "city": "Mumbai",
      "state": "Maharashtra",
      "country": "India",
      "postalCode": "400001"
    }
  },
  "issueDate": "2024-01-15",
  "dueDate": "2024-02-15",
  "items": [
    {
      "id": "item-1",
      "description": "Web Development Services",
      "quantity": 40,
      "unitPrice": 2500,
      "taxRate": 18,
      "amount": 118000
    }
  ],
  "subtotal": 160000,
  "taxAmount": 28800,
  "total": 188800,
  "currency": "INR",
  "status": "SENT",
  "notes": "Payment due within 30 days",
  "terms": "Net 30",
  "payments": [],
  "createdAt": "2024-01-15T10:00:00Z",
  "updatedAt": "2024-01-15T10:00:00Z"
}
```

---

### Create Invoice
```http
POST /invoices
Authorization: Bearer <accessToken>
Content-Type: application/json
```

**Request:**
```json
{
  "clientId": "550e8400-e29b-41d4-a716-446655440001",
  "invoiceNumber": "INV-2024-002",
  "issueDate": "2024-01-20",
  "dueDate": "2024-02-20",
  "items": [
    {
      "description": "Mobile App Development",
      "quantity": 100,
      "unitPrice": 1500,
      "taxRate": 18
    },
    {
      "description": "API Integration",
      "quantity": 20,
      "unitPrice": 2000,
      "taxRate": 18
    }
  ],
  "currency": "INR",
  "notes": "50% advance paid",
  "terms": "Net 30"
}
```

**Response (201 Created):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440011",
  "invoiceNumber": "INV-2024-002",
  "clientId": "550e8400-e29b-41d4-a716-446655440001",
  "client": {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "name": "Acme Corporation",
    "email": "contact@acme.com"
  },
  "issueDate": "2024-01-20",
  "dueDate": "2024-02-20",
  "items": [
    {
      "id": "item-1",
      "description": "Mobile App Development",
      "quantity": 100,
      "unitPrice": 1500,
      "taxRate": 18,
      "amount": 177000
    },
    {
      "id": "item-2",
      "description": "API Integration",
      "quantity": 20,
      "unitPrice": 2000,
      "taxRate": 18,
      "amount": 47200
    }
  ],
  "subtotal": 190000,
  "taxAmount": 34200,
  "total": 224200,
  "currency": "INR",
  "status": "DRAFT",
  "notes": "50% advance paid",
  "terms": "Net 30",
  "createdAt": "2024-01-20T14:00:00Z",
  "updatedAt": "2024-01-20T14:00:00Z"
}
```

**Error Responses:**
- `400 Bad Request`: Invalid data or missing required fields
- `403 Forbidden`: Invoice limit exceeded for plan
- `404 Not Found`: Client not found

---

### Update Invoice
```http
PUT /invoices/:id
Authorization: Bearer <accessToken>
Content-Type: application/json
```

**Request:**
```json
{
  "items": [
    {
      "description": "Mobile App Development",
      "quantity": 120,
      "unitPrice": 1500,
      "taxRate": 18
    }
  ],
  "notes": "Updated scope of work"
}
```

**Response (200 OK):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440011",
  "invoiceNumber": "INV-2024-002",
  "clientId": "550e8400-e29b-41d4-a716-446655440001",
  "client": {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "name": "Acme Corporation",
    "email": "contact@acme.com"
  },
  "issueDate": "2024-01-20",
  "dueDate": "2024-02-20",
  "items": [
    {
      "id": "item-1",
      "description": "Mobile App Development",
      "quantity": 120,
      "unitPrice": 1500,
      "taxRate": 18,
      "amount": 212400
    }
  ],
  "subtotal": 180000,
  "taxAmount": 32400,
  "total": 212400,
  "currency": "INR",
  "status": "DRAFT",
  "notes": "Updated scope of work",
  "terms": "Net 30",
  "createdAt": "2024-01-20T14:00:00Z",
  "updatedAt": "2024-01-21T10:30:00Z"
}
```

---

### Delete Invoice
```http
DELETE /invoices/:id
Authorization: Bearer <accessToken>
```

**Response (200 OK):**
```json
{
  "message": "Invoice deleted successfully"
}
```

---

### Send Invoice
```http
POST /invoices/:id/send
Authorization: Bearer <accessToken>
Content-Type: application/json
```

**Request:**
```json
{
  "channels": ["EMAIL", "WHATSAPP"]
}
```

**Response (200 OK):**
```json
{
  "message": "Invoice sent successfully",
  "channels": ["EMAIL", "WHATSAPP"],
  "sentAt": "2024-01-20T15:00:00Z"
}
```

---

### Mark Invoice as Paid
```http
POST /invoices/:id/mark-paid
Authorization: Bearer <accessToken>
Content-Type: application/json
```

**Request:**
```json
{
  "paymentMethod": "UPI",
  "paymentDate": "2024-01-25",
  "transactionId": "UPI123456789",
  "notes": "Payment received via Google Pay"
}
```

**Response (200 OK):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440010",
  "invoiceNumber": "INV-2024-001",
  "status": "PAID",
  "payments": [
    {
      "id": "pay-1",
      "amount": 188800,
      "currency": "INR",
      "paymentMethod": "UPI",
      "transactionId": "UPI123456789",
      "paidAt": "2024-01-25T00:00:00Z",
      "notes": "Payment received via Google Pay"
    }
  ],
  "updatedAt": "2024-01-25T10:00:00Z"
}
```

---

### Get Invoice Reminders
```http
GET /invoices/:id/reminders
Authorization: Bearer <accessToken>
```

**Response (200 OK):**
```json
{
  "data": [
    {
      "id": "rem-1",
      "type": "PRE_DUE",
      "method": "EMAIL",
      "scheduledAt": "2024-02-10T10:00:00Z",
      "sentAt": "2024-02-10T10:05:00Z",
      "status": "SENT",
      "recipient": "contact@acme.com"
    },
    {
      "id": "rem-2",
      "type": "DUE_DATE",
      "method": "WHATSAPP",
      "scheduledAt": "2024-02-15T09:00:00Z",
      "sentAt": null,
      "status": "PENDING",
      "recipient": "+919876543210"
    }
  ]
}
```

---

## Billing API

### Get Subscription
```http
GET /billing/subscription
Authorization: Bearer <accessToken>
```

**Response (200 OK):**
```json
{
  "id": "sub-1",
  "plan": "PRO",
  "status": "ACTIVE",
  "billingCycle": "MONTHLY",
  "currentPeriodStart": "2024-01-01T00:00:00Z",
  "currentPeriodEnd": "2024-02-01T00:00:00Z",
  "cancelAtPeriodEnd": false
}
```

---

### Get Usage Metrics
```http
GET /billing/usage
Authorization: Bearer <accessToken>
```

**Response (200 OK):**
```json
{
  "invoices": {
    "current": 45,
    "limit": 100,
    "percentage": 45
  },
  "clients": {
    "current": 25,
    "limit": 50,
    "percentage": 50
  },
  "reminders": {
    "current": 120,
    "limit": 500,
    "percentage": 24
  }
}
```

---

### Get Plans
```http
GET /billing/plans
Authorization: Bearer <accessToken>
```

**Response (200 OK):**
```json
[
  {
    "id": "FREE",
    "name": "Free",
    "description": "Perfect for trying out PayPulse",
    "price": 0,
    "currency": "INR",
    "billingCycle": "monthly",
    "features": [
      "10 invoices per month",
      "5 clients",
      "20 reminders per month",
      "Email reminders",
      "Basic reporting"
    ],
    "limits": {
      "invoices": 10,
      "clients": 5,
      "reminders": 20
    }
  },
  {
    "id": "STARTER",
    "name": "Starter",
    "description": "Great for freelancers and small businesses",
    "price": 499,
    "currency": "INR",
    "billingCycle": "monthly",
    "features": [
      "50 invoices per month",
      "25 clients",
      "150 reminders per month",
      "Email & WhatsApp reminders",
      "Advanced reporting",
      "3 team members"
    ],
    "limits": {
      "invoices": 50,
      "clients": 25,
      "reminders": 150
    }
  },
  {
    "id": "PRO",
    "name": "Professional",
    "description": "For growing agencies with multiple clients",
    "price": 1499,
    "currency": "INR",
    "billingCycle": "monthly",
    "features": [
      "Unlimited invoices",
      "Unlimited clients",
      "Unlimited reminders",
      "All reminder channels",
      "Custom branding",
      "API access",
      "10 team members"
    ],
    "limits": {
      "invoices": -1,
      "clients": -1,
      "reminders": -1
    }
  }
]
```

---

### Subscribe to Plan
```http
POST /billing/subscribe
Authorization: Bearer <accessToken>
Content-Type: application/json
```

**Request:**
```json
{
  "plan": "PRO"
}
```

**Response (200 OK):**
```json
{
  "subscription": {
    "id": "sub-2",
    "plan": "PRO",
    "status": "ACTIVE",
    "currentPeriodStart": "2024-01-20T00:00:00Z",
    "currentPeriodEnd": "2024-02-20T00:00:00Z"
  },
  "changeType": "upgrade",
  "previousPlan": "STARTER",
  "newPlan": "PRO"
}
```

---

### Upgrade Plan
```http
POST /billing/upgrade
Authorization: Bearer <accessToken>
Content-Type: application/json
```

**Request:**
```json
{
  "plan": "ENTERPRISE"
}
```

**Response (200 OK):**
```json
{
  "subscription": {
    "id": "sub-2",
    "plan": "ENTERPRISE",
    "status": "ACTIVE",
    "currentPeriodStart": "2024-01-20T00:00:00Z",
    "currentPeriodEnd": "2024-02-20T00:00:00Z"
  },
  "changeType": "upgrade",
  "previousPlan": "PRO",
  "newPlan": "ENTERPRISE"
}
```

---

### Cancel Subscription
```http
POST /billing/cancel
Authorization: Bearer <accessToken>
```

**Response (200 OK):**
```json
{
  "id": "sub-2",
  "plan": "PRO",
  "status": "ACTIVE",
  "cancelAtPeriodEnd": true,
  "currentPeriodEnd": "2024-02-20T00:00:00Z"
}
```

---

## Reminders API

### List Reminders
```http
GET /reminders?status=PENDING&limit=50
Authorization: Bearer <accessToken>
```

**Query Parameters:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| status | string | - | PENDING, SENT, FAILED |
| limit | number | 50 | Number of reminders |
| offset | number | 0 | Offset for pagination |

**Response (200 OK):**
```json
{
  "data": [
    {
      "id": "rem-1",
      "invoiceId": "550e8400-e29b-41d4-a716-446655440010",
      "tenantId": "tenant-1",
      "clientId": "550e8400-e29b-41d4-a716-446655440001",
      "scheduledAt": "2024-02-15T09:00:00Z",
      "sentAt": null,
      "status": "PENDING",
      "channel": "EMAIL"
    }
  ],
  "total": 200
}
```

---

### Get Reminder Stats
```http
GET /reminders/stats
Authorization: Bearer <accessToken>
```

**Response (200 OK):**
```json
{
  "total": 500,
  "pending": 50,
  "sent": 420,
  "failed": 30
}
```

---

### Get Queue Metrics
```http
GET /reminders/queue-metrics
Authorization: Bearer <accessToken>
```

**Response (200 OK):**
```json
{
  "waiting": 45,
  "active": 5,
  "completed": 420,
  "failed": 30
}
```

---

## Error Responses

### Standard Error Format
```json
{
  "statusCode": 400,
  "message": "Error description",
  "error": "ErrorType",
  "timestamp": "2024-01-20T10:00:00Z",
  "path": "/api/clients"
}
```

### HTTP Status Codes
| Code | Meaning | Description |
|------|---------|-------------|
| 200 | OK | Request successful |
| 201 | Created | Resource created successfully |
| 400 | Bad Request | Invalid request data |
| 401 | Unauthorized | Missing or invalid token |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource not found |
| 409 | Conflict | Resource already exists |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server error |

---

## Frontend Integration Examples

### Complete React Query Setup
```typescript
// lib/api/queryClient.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});

// hooks/useClients.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { clientsApi } from '@/lib/api';

const queryKeys = {
  all: ['clients'] as const,
  lists: () => [...queryKeys.all, 'list'] as const,
  list: (filters: string) => [...queryKeys.lists(), { filters }] as const,
  details: () => [...queryKeys.all, 'detail'] as const,
  detail: (id: string) => [...queryKeys.details(), id] as const,
};

export function useClients(params: { page?: number; limit?: number; search?: string }) {
  return useQuery({
    queryKey: queryKeys.list(JSON.stringify(params)),
    queryFn: () => clientsApi.getClients(params),
  });
}

export function useClient(id: string) {
  return useQuery({
    queryKey: queryKeys.detail(id),
    queryFn: () => clientsApi.getClient(id),
    enabled: !!id,
  });
}

export function useCreateClient() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: clientsApi.createClient,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.lists() });
    },
  });
}

export function useUpdateClient() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => 
      clientsApi.updateClient(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.detail(variables.id) });
      queryClient.invalidateQueries({ queryKey: queryKeys.lists() });
    },
  });
}

export function useDeleteClient() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: clientsApi.deleteClient,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.lists() });
    },
  });
}
```

### Error Handling Pattern
```typescript
// components/ErrorBoundary.tsx
import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong</div>;
    }
    return this.props.children;
  }
}

// hooks/useApiError.ts
import { useCallback } from 'react';
import { toast } from 'sonner';

export function useApiError() {
  return useCallback((error: any) => {
    const message = error?.response?.data?.message || 'An error occurred';
    const status = error?.response?.status;
    
    switch (status) {
      case 401:
        toast.error('Session expired. Please login again.');
        // Redirect to login
        break;
      case 403:
        toast.error('You do not have permission to perform this action.');
        break;
      case 404:
        toast.error('Resource not found.');
        break;
      case 429:
        toast.error('Too many requests. Please try again later.');
        break;
      default:
        toast.error(message);
    }
  }, []);
}
```

### Loading States Pattern
```typescript
// components/LoadingStates.tsx
import { Skeleton } from '@/components/ui/skeleton';

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="h-12 w-full" />
      ))}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-4 w-1/4" />
      <Skeleton className="h-8 w-1/2" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  );
}

// Usage in component
export function ClientsPage() {
  const { data, isLoading } = useClients({ page: 1 });
  
  if (isLoading) {
    return <TableSkeleton rows={10} />;
  }
  
  return <ClientTable data={data?.data} />;
}
```

---

## Rate Limits

| Endpoint | Limit | Window |
|----------|-------|--------|
| Authentication | 5 requests | 1 minute |
| API General | 100 requests | 1 minute |
| Invoice Creation | 20 requests | 1 minute |
| Bulk Operations | 5 requests | 1 minute |

---

## WebSocket Events (Future)

### Real-time Updates
```javascript
// Connect to WebSocket
const socket = io('ws://localhost:3000');

// Listen for invoice updates
socket.on('invoice:updated', (data) => {
  console.log('Invoice updated:', data);
});

// Listen for new notifications
socket.on('notification:new', (data) => {
  toast.info(data.message);
});
```

### Events
- `invoice:created` - New invoice created
- `invoice:updated` - Invoice updated
- `invoice:paid` - Invoice marked as paid
- `client:created` - New client added
- `notification:new` - New notification
- `usage:warning` - Usage limit warning
