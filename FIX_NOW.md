# 🚨 IMMEDIATE FIX FOR AWS

## The Problem Found
Your `.env.local` on AWS is **missing `RAZORPAY_KEY_ID`**!

Current file (WRONG):
```
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_Rjvg7mjDAAKe1R
RAZORPAY_KEY_SECRET=2KH3YutLCT2DW4AcHdvhXyg7
EKYC_API_USERNAME=7676717667
EKYC_API_TOKEN=5cbf9f97ff8cd6ab1f1d48ce95a7adf9
```

Missing: `RAZORPAY_KEY_ID` (needed by server-side API routes)

---

## Fix in 2 Minutes

### Step 1: SSH into AWS
```bash
ssh -i your-key.pem ubuntu@your-server-ip
cd ~/shopomatix
```

### Step 2: Run This Single Command
```bash
cat > .env.local << 'EOF'
RAZORPAY_KEY_ID=rzp_test_Rjvg7mjDAAKe1R
RAZORPAY_KEY_SECRET=2KH3YutLCT2DW4AcHdvhXyg7
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_Rjvg7mjDAAKe1R
EKYC_API_USERNAME=7676717667
EKYC_API_TOKEN=5cbf9f97ff8cd6ab1f1d48ce95a7adf9
EOF
```

### Step 3: Verify
```bash
cat .env.local
```

Should show all 5 variables.

### Step 4: Restart App
```bash
pm2 restart all
```

### Step 5: Test
Visit: `https://your-domain.com/api/test-env`

Should show:
```json
{
  "allConfigured": true,
  "message": "✅ All Razorpay credentials are configured correctly!"
}
```

---

## Why This Happened

You had 3 variables but needed 4 for Razorpay:

1. ✅ `NEXT_PUBLIC_RAZORPAY_KEY_ID` - Used by frontend (browser)
2. ❌ `RAZORPAY_KEY_ID` - **MISSING** - Used by backend API routes
3. ✅ `RAZORPAY_KEY_SECRET` - Used by backend for verification

The API routes couldn't create orders because `RAZORPAY_KEY_ID` was missing!

---

## Alternative: Use the Fix Script

```bash
# On AWS server
cd ~/shopomatix
bash fix-aws-env.sh
pm2 restart all
```

---

## Done! 🎉

All payment features should now work:
- ✅ Buy Now
- ✅ Cart Checkout  
- ✅ Membership Plans
- ✅ Coin Top-up
