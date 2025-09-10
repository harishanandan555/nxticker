# BetaTickers API Documentation

## 🚀 Overview

BetaTickers is a comprehensive financial data API platform that provides real-time and historical market data for stocks, forex, cryptocurrencies, and more. This documentation covers all available API endpoints, authentication methods, and usage examples.

## 🔗 Base URL

```
https://api.betatickers.com/v1
```

## 🔐 Authentication

All API requests require authentication using a Bearer token in the Authorization header:

```bash
Authorization: Bearer YOUR_API_KEY
```

### Getting Your API Key

1. Sign up at [BetaTickers](https://betatickers.com/signup)
2. Navigate to your Dashboard
3. Go to the "API Keys" tab
4. Generate a new API key

### Rate Limits

| Plan | Requests per Month | Requests per Minute |
|------|-------------------|-------------------|
| Free | 1,800 | 10 |
| Developer | 7,200 | 30 |
| Pro | 50,000 | 100 |
| Enterprise | Unlimited | 500 |

## 📊 Market Data Endpoints

### 1. Real-time Quote

Get real-time or latest quote for a symbol with comprehensive market data.

**Endpoint:** `GET /quote`

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `symbol` | string | Yes | Stock symbol (e.g., AAPL, TSLA) |
| `exchange` | string | No | Exchange code (default: NASDAQ) |
| `extended` | boolean | No | Include extended hours data |

**Example Request:**
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.betatickers.com/v1/quote?symbol=AAPL&extended=true"
```

**Example Response:**
```json
{
  "symbol": "AAPL",
  "price": 185.64,
  "change": 2.34,
  "changePercent": 1.28,
  "volume": 45123000,
  "avgVolume": 52000000,
  "marketCap": 2890000000000,
  "timestamp": "2025-01-01T15:30:00Z",
  "exchange": "NASDAQ",
  "currency": "USD",
  "extendedHours": {
    "price": 186.20,
    "change": 0.56,
    "volume": 1250000
  }
}
```

### 2. Intraday Data

Get intraday price data for a symbol with customizable intervals.

**Endpoint:** `GET /intraday`

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `symbol` | string | Yes | Stock symbol |
| `interval` | string | No | Time interval (1m, 5m, 15m, 30m, 1h, 1d) |
| `range` | string | No | Data range (1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max) |

**Example Request:**
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.betatickers.com/v1/intraday?symbol=TSLA&interval=5m&range=1d"
```

**Example Response:**
```json
{
  "symbol": "TSLA",
  "interval": "5m",
  "range": "1d",
  "data": [
    {
      "timestamp": "2025-01-01T09:30:00Z",
      "open": 248.50,
      "high": 249.20,
      "low": 247.80,
      "close": 248.90,
      "volume": 125000
    }
  ]
}
```

### 3. Fundamentals

Get fundamental data for a company including financial metrics and ratios.

**Endpoint:** `GET /fundamentals`

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `symbol` | string | Yes | Stock symbol |
| `metrics` | string | No | Comma-separated list of metrics to include |

**Example Request:**
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.betatickers.com/v1/fundamentals?symbol=MSFT"
```

**Example Response:**
```json
{
  "symbol": "MSFT",
  "companyName": "Microsoft Corporation",
  "sector": "Technology",
  "industry": "Software—Infrastructure",
  "marketCap": 2800000000000,
  "peRatio": 28.5,
  "eps": 11.06,
  "dividendYield": 0.68,
  "beta": 0.91,
  "52WeekHigh": 384.30,
  "52WeekLow": 309.45,
  "avgVolume": 25000000
}
```

## 💱 Forex Endpoints

### 4. Forex Quote

Get real-time forex exchange rates.

**Endpoint:** `GET /fx/quote`

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `pair` | string | Yes | Currency pair (e.g., EUR/USD, GBP/JPY) |

**Example Request:**
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.betatickers.com/v1/fx/quote?pair=EUR/USD"
```

**Example Response:**
```json
{
  "pair": "EUR/USD",
  "rate": 1.0856,
  "change": 0.0023,
  "changePercent": 0.21,
  "timestamp": "2025-01-01T15:30:00Z",
  "bid": 1.0854,
  "ask": 1.0858
}
```

## ₿ Cryptocurrency Endpoints

### 5. Crypto OHLCV

Get cryptocurrency OHLCV (Open, High, Low, Close, Volume) data.

**Endpoint:** `GET /crypto/ohlcv`

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `symbol` | string | Yes | Crypto pair (e.g., BTC/USD, ETH/USD) |
| `interval` | string | No | Time interval (1m, 5m, 15m, 30m, 1h, 4h, 1d) |
| `limit` | integer | No | Number of data points (max: 1000) |

**Example Request:**
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.betatickers.com/v1/crypto/ohlcv?symbol=BTC/USD&interval=1h&limit=24"
```

**Example Response:**
```json
{
  "symbol": "BTC/USD",
  "interval": "1h",
  "data": [
    {
      "timestamp": "2025-01-01T14:00:00Z",
      "open": 42000.50,
      "high": 42150.75,
      "low": 41950.25,
      "close": 42075.00,
      "volume": 1250.75
    }
  ]
}
```

## 📰 News Endpoints

### 6. Market News

Get latest market news and financial headlines.

**Endpoint:** `GET /news`

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `symbol` | string | No | Filter news by symbol |
| `category` | string | No | News category (market, earnings, analyst, etc.) |
| `limit` | integer | No | Number of articles (max: 100) |

**Example Request:**
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.betatickers.com/v1/news?category=market&limit=10"
```

**Example Response:**
```json
{
  "articles": [
    {
      "id": "news_123",
      "title": "Market Opens Higher on Strong Earnings Reports",
      "summary": "Major indices opened higher today following...",
      "url": "https://example.com/news/article-123",
      "publishedAt": "2025-01-01T10:30:00Z",
      "source": "Financial Times",
      "symbols": ["AAPL", "MSFT", "GOOGL"]
    }
  ]
}
```

## 🔍 Screening Endpoints

### 7. Stock Screener

Screen stocks based on various criteria and filters.

**Endpoint:** `POST /screener`

**Request Body:**
```json
{
  "filters": {
    "marketCap": {
      "min": 1000000000,
      "max": 10000000000
    },
    "peRatio": {
      "min": 10,
      "max": 25
    },
    "sector": ["Technology", "Healthcare"],
    "dividendYield": {
      "min": 2.0
    }
  },
  "sortBy": "marketCap",
  "sortOrder": "desc",
  "limit": 50
}
```

**Example Request:**
```bash
curl -X POST \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"filters":{"marketCap":{"min":1000000000},"sector":["Technology"]},"limit":20}' \
  "https://api.betatickers.com/v1/screener"
```

**Example Response:**
```json
{
  "results": [
    {
      "symbol": "AAPL",
      "companyName": "Apple Inc.",
      "marketCap": 2890000000000,
      "peRatio": 28.5,
      "sector": "Technology",
      "dividendYield": 0.45
    }
  ],
  "totalResults": 150,
  "page": 1,
  "limit": 20
}
```

## 🔑 Authentication Endpoints

### 8. User Login

Authenticate user and get access token.

**Endpoint:** `POST /auth/login`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Example Request:**
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}' \
  "https://api.betatickers.com/v1/auth/login"
```

**Example Response:**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user_123",
    "email": "user@example.com",
    "plan": "developer",
    "apiKey": "bt_abc123def456"
  }
}
```

### 9. User Registration

Register a new user account.

**Endpoint:** `POST /auth/register`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe",
  "company": "Acme Corp",
  "useCase": "trading"
}
```

### 10. Password Reset Request

Request a password reset email.

**Endpoint:** `POST /auth/forgot-password`

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

### 11. Password Reset

Reset password using token.

**Endpoint:** `POST /auth/reset-password`

**Request Body:**
```json
{
  "token": "reset_token_here",
  "password": "newpassword123"
}
```

### 12. Two-Factor Authentication

Verify 2FA code.

**Endpoint:** `POST /auth/2fa/verify`

**Request Body:**
```json
{
  "code": "123456",
  "token": "2fa_token_here"
}
```

## 👤 User Management Endpoints

### 13. Get User Profile

Get current user profile information.

**Endpoint:** `GET /user/profile`

**Example Request:**
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.betatickers.com/v1/user/profile"
```

**Example Response:**
```json
{
  "id": "user_123",
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "company": "Acme Corp",
  "plan": "developer",
  "apiKey": "bt_abc123def456",
  "usage": {
    "requests": 1247,
    "limit": 7200,
    "resetDate": "2025-02-01"
  },
  "createdAt": "2024-12-01T10:00:00Z"
}
```

### 14. Update User Profile

Update user profile information.

**Endpoint:** `PUT /user/profile`

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "company": "New Company Inc"
}
```

### 15. Get API Keys

Get user's API keys.

**Endpoint:** `GET /user/api-keys`

**Example Response:**
```json
{
  "keys": [
    {
      "id": "key_123",
      "name": "Production Key",
      "key": "bt_abc123def456",
      "createdAt": "2024-12-01T10:00:00Z",
      "lastUsed": "2025-01-01T15:30:00Z",
      "isActive": true
    }
  ]
}
```

### 16. Create API Key

Generate a new API key.

**Endpoint:** `POST /user/api-keys`

**Request Body:**
```json
{
  "name": "New API Key"
}
```

### 17. Delete API Key

Delete an API key.

**Endpoint:** `DELETE /user/api-keys/{keyId}`

## 📊 Analytics Endpoints

### 18. Usage Analytics

Get API usage analytics and statistics.

**Endpoint:** `GET /analytics/usage`

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `period` | string | No | Time period (7d, 30d, 90d, 1y) |
| `endpoint` | string | No | Filter by specific endpoint |

**Example Request:**
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.betatickers.com/v1/analytics/usage?period=30d"
```

**Example Response:**
```json
{
  "period": "30d",
  "totalRequests": 1247,
  "successfulRequests": 1240,
  "failedRequests": 7,
  "successRate": 99.4,
  "averageLatency": 34,
  "endpointStats": [
    {
      "endpoint": "/quote",
      "requests": 892,
      "avgLatency": 28,
      "successRate": 99.9
    }
  ]
}
```

## 💳 Billing Endpoints

### 19. Get Billing Information

Get current billing information and usage.

**Endpoint:** `GET /billing/info`

**Example Response:**
```json
{
  "plan": "developer",
  "status": "active",
  "currentPeriod": {
    "start": "2025-01-01T00:00:00Z",
    "end": "2025-02-01T00:00:00Z"
  },
  "usage": {
    "requests": 1247,
    "limit": 7200,
    "resetDate": "2025-02-01T00:00:00Z"
  },
  "nextBilling": {
    "date": "2025-02-01T00:00:00Z",
    "amount": 29.99,
    "currency": "USD"
  }
}
```

### 20. Get Invoices

Get billing history and invoices.

**Endpoint:** `GET /billing/invoices`

**Example Response:**
```json
{
  "invoices": [
    {
      "id": "inv_123",
      "date": "2024-12-01T00:00:00Z",
      "amount": 29.99,
      "currency": "USD",
      "status": "paid",
      "downloadUrl": "https://api.betatickers.com/v1/billing/invoices/inv_123/download"
    }
  ]
}
```

## 🚨 Error Handling

### Error Response Format

All errors follow a consistent format:

```json
{
  "error": {
    "code": "INVALID_SYMBOL",
    "message": "The provided symbol is invalid or not found",
    "details": {
      "symbol": "INVALID"
    }
  }
}
```

### Common Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `INVALID_API_KEY` | 401 | Invalid or missing API key |
| `RATE_LIMIT_EXCEEDED` | 429 | Rate limit exceeded |
| `INVALID_SYMBOL` | 400 | Invalid or unsupported symbol |
| `INVALID_PARAMETERS` | 400 | Invalid request parameters |
| `QUOTA_EXCEEDED` | 403 | Monthly quota exceeded |
| `INTERNAL_ERROR` | 500 | Internal server error |

## 📚 SDK Examples

### Python SDK

```python
pip install betatickers

from betatickers import Client

client = Client("YOUR_API_KEY")

# Get real-time quote
quote = client.get_quote("AAPL", extended=True)
print(f"Price: ${quote.price}, Change: {quote.change_percent}%")

# Get intraday data
intraday = client.get_intraday("TSLA", interval="5m", range="1d")
print(f"Data points: {len(intraday.data)}")

# Get fundamentals
fundamentals = client.get_fundamentals("MSFT")
print(f"P/E Ratio: {fundamentals.pe_ratio}")
```

### JavaScript SDK

```javascript
npm install betatickers

import { BetaTickers } from 'betatickers';

const client = new BetaTickers('YOUR_API_KEY');

// Get real-time quote
const quote = await client.quote('AAPL', { extended: true });
console.log(`Price: $${quote.price}, Change: ${quote.changePercent}%`);

// Get intraday data
const intraday = await client.intraday('TSLA', { 
  interval: '5m', 
  range: '1d' 
});
console.log(`Data points: ${intraday.data.length}`);

// Get fundamentals
const fundamentals = await client.fundamentals('MSFT');
console.log(`P/E Ratio: ${fundamentals.peRatio}`);
```

### cURL Examples

```bash
# Get quote
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.betatickers.com/v1/quote?symbol=AAPL&extended=true"

# Get intraday data
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.betatickers.com/v1/intraday?symbol=TSLA&interval=5m&range=1d"

# Get fundamentals
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.betatickers.com/v1/fundamentals?symbol=MSFT"

# Screen stocks
curl -X POST \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"filters":{"marketCap":{"min":1000000000},"sector":["Technology"]},"limit":20}' \
  "https://api.betatickers.com/v1/screener"
```

## 🔄 Webhooks

### Webhook Events

BetaTickers supports webhooks for real-time notifications:

- `quote.updated` - Real-time price updates
- `news.published` - New market news
- `usage.threshold` - Usage threshold reached
- `billing.invoice_created` - New invoice generated

### Webhook Configuration

```json
{
  "url": "https://your-app.com/webhooks/betatickers",
  "events": ["quote.updated", "news.published"],
  "secret": "webhook_secret_key"
}
```

## 📈 Rate Limiting

### Headers

All API responses include rate limiting headers:

```
X-RateLimit-Limit: 30
X-RateLimit-Remaining: 29
X-RateLimit-Reset: 1640995200
```

### Best Practices

1. **Implement exponential backoff** for rate limit errors
2. **Cache responses** when possible to reduce API calls
3. **Monitor usage** through the dashboard
4. **Use webhooks** for real-time data instead of polling

## 🛡️ Security

### API Key Security

- Keep your API keys secure and never expose them in client-side code
- Rotate API keys regularly
- Use different keys for different environments
- Monitor API key usage for suspicious activity

### HTTPS Only

All API communication must use HTTPS. HTTP requests will be rejected.

## 📞 Support

### Documentation
- **Interactive API Explorer**: Available in the dashboard
- **SDK Documentation**: Language-specific guides
- **Code Examples**: Copy-paste ready examples

### Contact
- **Email**: support@betatickers.com
- **Documentation**: Visit `/documentation` in the application
- **Status Page**: Check system status and uptime

---

**BetaTickers API** - Professional financial data infrastructure for developers, traders, and enterprises.