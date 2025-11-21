# Next.js Full-Stack Application Setup Guide

## Project Structure

```
my-nextjs-app/
├── app/                          # Next.js 14+ App Router (Frontend)
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.js
│   │   ├── signup/
│   │   │   └── page.js
│   │   └── reset-password/
│   │       └── [token]/
│   │           └── page.js
│   ├── dashboard/
│   │   └── page.js
│   ├── products/
│   │   ├── page.js
│   │   └── [id]/
│   │       └── page.js
│   ├── blogs/
│   │   ├── page.js
│   │   └── [id]/
│   │       └── page.js
│   ├── layout.js
│   └── page.js
│
├── server/                       # Backend API (Express)
│   ├── config/
│   │   ├── db.js
│   │   └── passport.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Blog.js
│   ├── middleware/
│   │   └── auth.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── productRoutes.js
│   │   ├── blogRoutes.js
│   │   └── paymentRoutes.js
│   ├── utils/
│   │   ├── generateToken.js
│   │   └── sendEmail.js
│   └── index.js                 # Express server entry point
│
├── lib/                         # Shared utilities
│   └── api.js                   # API client for frontend
│
├── .env.local                   # Environment variables
├── package.json
└── server.js                    # Server startup script
```

---

## Step-by-Step Setup

### 1. Install Dependencies

```bash
# Create Next.js app if you haven't
npx create-next-app@latest my-nextjs-app
cd my-nextjs-app

# Install backend dependencies
npm install express mongoose bcryptjs jsonwebtoken cookie-parser cors nodemailer stripe passport passport-google-oauth20 express-session

# Install additional utilities
npm install axios
```

---

### 2. Environment Variables (.env.local)

Create `.env.local` in your project root:

```env
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Database
MONGODB_URI=mongodb://localhost:27017/your_database_name
# OR use MongoDB Atlas (Cloud):
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/your_database_name

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_min_32_chars
JWT_EXPIRE=7d

# Email Configuration (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_gmail_app_password
EMAIL_FROM_NAME=Your App Name

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/api/auth/google/callback

# Stripe Payment
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key

# Node Environment
NODE_ENV=development
```

---

## How to Get Environment Variable Values

### **MONGODB_URI**

**Option 1: Local MongoDB**

1. Install MongoDB locally: https://www.mongodb.com/try/download/community
2. Start MongoDB service
3. Use: `mongodb://localhost:27017/your_database_name`

**Option 2: MongoDB Atlas (Cloud - Recommended)**

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create a new cluster (free tier available)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database user password
7. Replace `myFirstDatabase` with your database name

---

### **JWT_SECRET**

Generate a secure random string:

```bash
# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Or use this online tool:
# https://randomkeygen.com/ (use "CodeIgniter Encryption Keys")
```

---

### **EMAIL Configuration (Gmail)**

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to Security → 2-Step Verification (enable if not enabled)
3. Search for "App passwords"
4. Generate new app password
5. Select "Mail" and "Other (Custom name)"
6. Copy the 16-character password
7. Use in `EMAIL_PASSWORD` (remove spaces)

**Configuration:**

- `EMAIL_HOST`: smtp.gmail.com
- `EMAIL_PORT`: 587
- `EMAIL_USER`: your_email@gmail.com
- `EMAIL_PASSWORD`: the 16-char app password

---

### **GOOGLE_CLIENT_ID & GOOGLE_CLIENT_SECRET**

1. Go to Google Cloud Console: https://console.cloud.google.com/
2. Create new project or select existing
3. Navigate to "APIs & Services" → "Credentials"
4. Click "Create Credentials" → "OAuth client ID"
5. Configure consent screen if prompted
6. Choose "Web application"
7. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/google/callback`
   - `https://yourdomain.com/api/auth/google/callback` (for production)
8. Copy Client ID and Client Secret

---

### **STRIPE Keys**

1. Go to Stripe: https://stripe.com/
2. Sign up for account
3. Navigate to Dashboard → Developers → API keys
4. Copy:
   - **Secret key** (starts with `sk_test_`) → `STRIPE_SECRET_KEY`
   - **Publishable key** (starts with `pk_test_`) → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

**For Webhook Secret:**

1. Go to Developers → Webhooks
2. Click "Add endpoint"
3. Enter URL: `http://localhost:3000/api/payments/webhook`
4. Select events: `payment_intent.succeeded`
5. Copy the webhook signing secret → `STRIPE_WEBHOOK_SECRET`

---
