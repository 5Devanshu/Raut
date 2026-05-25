# BMS Integration — Raut Industries

## ✅ Completed

### Backend (Raut Industries API)
- [x] `src/modules/bms/bms.service.js` — BMS API proxy service (token management, request proxying, PDF streaming)
- [x] `src/modules/bms/bms.controller.js` — Proxy controller (JSON + PDF handling)
- [x] `src/modules/bms/bms.routes.js` — Express router forwarding all `/api/bms/*` to BMS `/v1/*`
- [x] `src/app.js` — Registered `/api/bms` routes

### Frontend (RI_Frontend)
- [x] `src/services/bmsConnector.js` — Axios instance for BMS API calls with JWT auth
- [x] `src/services/repository/Manager/BmsRepo.js` — Repository with all BMS API functions
- [x] `src/services/Apis.js` — Added BMS endpoint strings
- [x] `src/components/protected/Manager/Bms/BmsInvoices.jsx` — Full BMS invoices CRUD page
- [x] `src/components/protected/Manager/Bms/BmsClients.jsx` — BMS clients list/create page
- [x] `src/components/layout/Sidebar.jsx` — Added "BMS" nav section (Invoices + Clients)
- [x] `src/RoutesConfig.jsx` — Added `/bms/invoices` and `/bms/clients` routes

## 🚀 Configuration Required

Add these to your **Raut backend `.env`** file:

```env
# BMS API Integration
BMS_API_URL=http://localhost:3000/api
BMS_EMAIL=your_bms_email@example.com
BMS_PASSWORD=your_bms_password
```

Using the credentials you provided:
- **Email:** `admin@rautindustries.com`
- **Password:** `Admin#123`
- **API Key:** `fc456cbf423f3b580df99efe270cff8b6b107e4f9c079dbdf4b20f5fcf6b40f2`
- **API Secret:** `a4f83b4e19d985a63c85d60c7bff74fcf07e6af829317fb9ad4cd43af54a68b150907a2c8a497edc4a8233c4c5646e31141fc6383d481e015d28e715122a4981`

> **Note:** The proxy service uses email/password authentication (not API key/secret). The credentials above are for the BMS admin panel login.

## 📋 API Endpoints Proxied

| Raut Backend Route | BMS API Endpoint |
|---|---|
| `GET /api/bms/clients` | `GET /v1/clients` |
| `POST /api/bms/clients` | `POST /v1/clients` |
| `GET /api/bms/invoices` | `GET /v1/invoices` |
| `POST /api/bms/invoices` | `POST /v1/invoices` |
| `GET /api/bms/invoices/:id` | `GET /v1/invoices/:id` |
| `POST /api/bms/invoices/:id/send` | `POST /v1/invoices/:id/send` |
| `GET /api/bms/invoices/:id/pdf` | `GET /v1/invoices/:id/pdf` |
| `POST /api/bms/payments` | `POST /v1/payments` |
| `GET /api/bms/payment-modes` | `GET /v1/payment-modes` |
| `GET /api/bms/tax-rates` | `GET /v1/tax-rates` |
| `GET /api/bms/particulars` | `GET /v1/particulars` |
| `GET /api/bms/templates` | `GET /v1/templates` |
| All other `/*` paths | Proxied to `/v1/*` |