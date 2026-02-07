# ⚡ QUICK START GUIDE - GET LIVE IN 30 MINUTES

Follow these exact steps to launch your MVP today.

---

## STEP 1: TEST LOCALLY (5 minutes)

```bash

cd valentine-surprise

# Option A: Python server

python3 -m http.server 8000

# Option B: PHP server

php -S localhost:8000

# Option C: Node.js (if installed)

npx serve

```

Open browser:

- **Landing page**: http://localhost:8000/

- **Demo page**: http://localhost:8000/demo/

**✅ Checkpoint**: Demo page should load with animations and sample content.

---

## STEP 2: CUSTOMIZE YOUR LANDING PAGE (10 minutes)

Edit index.html:

1. **Update WhatsApp number** (line 150 - TWO places):

```html

<a href="https://wa.me/919876543210?text=...

→ <a href="https://wa.me/91YOURNUMBER?text=...

Also update in footer (line 188):

<a href="https://wa.me/919876543210"...

→ <a href="https://wa.me/91YOURNUMBER"...

```

**Format:** Country code + number (no + or spaces)

- India: 919876543210 for +91 98765 43210

- US: 11234567890 for +1 123-456-7890

2. **Update social proof** (line 184):

```html

✓ Join 20+ people making Valentine's unforgettable

→ ✓ Limited slots for Valentine's delivery - Order now!

```

**✅ Checkpoint**: Landing page shows your WhatsApp number. Test by clicking "Order Now".

---

## STEP 2.5: CREATE UPI QR CODE & GOOGLE FORM (15 minutes)

### **A. Create Your UPI QR Code**

**Option 1: From Your Payment App (Easiest)**

1. Open PhonePe / Google Pay / Paytm

2. Go to "My QR Code" or "Receive Money"

3. Screenshot your QR code

4. Save as upi-qr-code.jpg

**Option 2: Generate with Amount Pre-filled**

1. Visit: https://www.upiqr.in/

2. Enter your UPI ID (yourname@paytm / yourname@ybl)

3. Enter amount: ₹299

4. Download QR code

**Save this image - you'll send it to every customer who orders!**

### **B. Create Google Form for Order Details**

1. Go to: https://forms.google.com

2. Create new form: "Valentine Surprise - Order Details"

3. Follow the complete guide in GOOGLE-FORM-TEMPLATE.md

4. **Or use this quick version:**

**Essential Questions:**

- Your Name (short answer, required)

- Your Email (short answer, required)

- Your WhatsApp (short answer, required)

- Partner's Name (short answer, required) ⚠️ Check spelling!

- Relationship Story (paragraph, required)

- What You Love (paragraph, required)

- Favorite Memory (paragraph, required)

- Photo Upload (file upload, required)

- Photo Caption (short answer, required)

- The Question (short answer, required)

- Button Action (multiple choice, required)

- Payment Screenshot (file upload, required)

5. **Get form link:**

   - Click "Send" → Link icon

   - Check "Shorten URL"

   - Copy the link

   - Save for WhatsApp messages!

**✅ Checkpoint**: You have a UPI QR code image and Google Form link ready.

---

## STEP 3: DEPLOY TO GITHUB PAGES (10 minutes)

### First-time setup:

```bash

cd valentine-surprise

# Initialize git

git init

git add .

git commit -m "Valentine Surprise MVP - Ready to launch"

# Create GitHub repo

# Go to github.com → New Repository → "valentine-surprise"

# Don't initialize with README

# Connect and push

git remote add origin https://github.com/YOUR_USERNAME/valentine-surprise.git

git branch -M main

git push -u origin main

```

### Enable GitHub Pages:

1. Go to: https://github.com/YOUR_USERNAME/valentine-surprise/settings/pages

2. Source: **Deploy from a branch**

3. Branch: **main** / **root**

4. Click **Save**

5. Wait 2-3 minutes

**Your live URL**: https://YOUR_USERNAME.github.io/valentine-surprise/

**✅ Checkpoint**: Your landing page is live and accessible online.

---

## STEP 4: CREATE YOUR FIRST CUSTOMER PAGE (10 minutes)

### Example: Customer orders for "Priya"

1. **Duplicate template**:

```bash

mkdir -p customers

cp -r template/ customers/priya/

```

2. **Get customer info** (from your Google Form):

- Partner name: Priya

- Message: [Their 3 paragraphs]

- Photo: priya-photo.jpg

- Question: "Will you be my Valentine?"

3. **Add photo**:

```bash

# Save customer photo

cp ~/Downloads/customer-photo.jpg assets/images/priya-photo.jpg

```

4. **Edit customers/priya/index.html**:

Find and replace (use VS Code Find & Replace: Cmd/Ctrl + F):

```

[PARTNER_NAME] → Priya

[PARAGRAPH 1] → [Paste their first paragraph]

[PARAGRAPH 2] → [Paste their second paragraph]

[PARAGRAPH 3] → [Paste their third paragraph]

[PHOTO_URL] → ../../assets/images/priya-photo.jpg

[PHOTO_CAPTION] → Our favorite memory together

[THE_QUESTION] → Will you be my Valentine?

[BUTTON_TEXT] → Yes! 💕

[CTA_LINK] → https://wa.me/919876543210?text=Yes!

[YOUR_BRAND_NAME] → YourBrand

```

5. **Test locally**:

```

http://localhost:8000/customers/priya/

```

6. **Deploy**:

```bash

git add customers/priya/

git add assets/images/priya-photo.jpg

git commit -m "Add Priya's surprise page"

git push

```

7. **Get live URL**:

```

https://YOUR_USERNAME.github.io/valentine-surprise/customers/priya/

```

**✅ Checkpoint**: Customer page is live and looks perfect on mobile.

---

## STEP 5: DELIVER TO CUSTOMER (2 minutes)

WhatsApp message template:

```

Hey [Customer Name]! 🎉

Your surprise page is ready! Here's the link:

https://YOUR_USERNAME.github.io/valentine-surprise/customers/priya/

💡 Pro tip: Send it to Priya with something mysterious like:

"Hey, open this when you're alone... someone made something for you 😊"

Let me know how it goes! I'd love to hear the reaction 💕

P.S. If she loves it, I'd appreciate a quick video testimonial for my page!

```

**✅ Checkpoint**: Customer received link and can access the page.

---

## FAST WORKFLOW TEMPLATE

For every new order:

```bash

# 1. Duplicate template (10 sec)

cp -r template/ customers/NEW_NAME/

# 2. Add photo (30 sec)

cp ~/Downloads/photo.jpg assets/images/NEW_NAME.jpg

# 3. Edit HTML (5-10 min)

# Open customers/NEW_NAME/index.html

# Replace all [PLACEHOLDERS]

# 4. Test locally (1 min)

# Open http://localhost:8000/customers/NEW_NAME/

# 5. Deploy (30 sec)

git add customers/NEW_NAME/ assets/images/NEW_NAME.jpg

git commit -m "Add NEW_NAME page"

git push

# 6. Deliver (1 min)

# Send URL via WhatsApp

```

**Total time per order: 15-20 minutes**

---

## COMMON ISSUES & FIXES

### Issue: "Photo not loading on live site"

**Fix**: Check file path in HTML:

- Local server: ../../assets/images/photo.jpg ✅

- Should work both locally and on GitHub Pages

### Issue: "GitHub Pages not updating"

**Fix**:

```bash

# Force refresh

git commit --allow-empty -m "Force rebuild"

git push

# Clear browser cache: Ctrl+Shift+R

```

### Issue: "Page looks broken on mobile"

**Fix**:

- Always test on actual device, not just browser resize

- Check viewport meta tag is present in HTML

- Compress large photos (should be <500KB)

### Issue: "Music not playing"

**Fix**:

- User must click music toggle (browsers block autoplay)

- Or remove audio feature entirely for MVP

- Music is optional - focus on visual experience

---

## OPTIMIZATION CHECKLIST

Before going live with ads:

- [ ] Landing page shows your brand

- [ ] Payment link works (test with small amount)

- [ ] Demo page loads perfectly on mobile

- [ ] All social links updated

- [ ] Instagram account created and linked

- [ ] Google Form for orders ready

- [ ] WhatsApp number for support set up

---

## NEXT STEPS AFTER FIRST 5 ORDERS

1. **Collect testimonials** - Ask every customer for reaction video

2. **Create portfolio** - Screenshot best pages for Instagram

3. **Optimize pricing** - If selling fast, raise to ₹399

4. **Speed up delivery** - Create 3-4 message templates to mix & match

5. **Scale ads** - Increase budget if profitable

---

## EMERGENCY CONTACTS

If something breaks:

1. **Page won't load**: Check GitHub Pages status

2. **Git issues**: git status to see what's wrong

3. **Need to rollback**: git log → git revert [commit-id]

4. **Lost a file**: Check git log for history

---

## SUCCESS METRICS

Track these for first weekend:

- [ ] Landing page live: ______ (URL)

- [ ] Demo page live: ______ (URL)

- [ ] First order received: ______ (date/time)

- [ ] First page delivered: ______ (date/time)

- [ ] First testimonial: ______ (saved where?)

- [ ] Total orders: ______

- [ ] Total revenue: ₹______

---

## YOU'RE READY! 🚀

**Time to launch**: ~30-45 minutes total

**Time per order**: ~15-20 minutes

**Profit per order**: ₹299 (minus ~₹50 ad cost) = ₹249

**Goal**: 10 orders this weekend = ₹2,490 profit

Stop reading. Start building. Go! 💪

