# Firestore Security Rules Setup

## Current Issue: Form submissions not appearing in Firebase

### Step 1: Go to Firebase Console
1. Open [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **web-agency-73cb1**

### Step 2: Enable Firestore Database
1. Click **Firestore Database** in the left sidebar
2. If not enabled yet, click **Create database**
3. Choose **Start in test mode**
4. Select your preferred location
5. Click **Enable**

### Step 3: Update Firestore Rules
1. In Firestore Database, click the **Rules** tab
2. Replace the existing rules with this:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to write to contactFormSubmissions
    match /contactFormSubmissions/{document} {
      allow create: if true;  // Anyone can create
      allow read: if false;   // Only admins can read
      allow update, delete: if false;  // Only admins can update/delete
    }
    
    // Deny everything else
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

3. Click **Publish**

### Step 4: Test the Form
1. Go to your website contact form
2. Fill out all required fields:
   - Name (required)
   - Email (required)
   - Project Description (required)
3. Click Submit
4. Watch for:
   - Loading spinner animation
   - Success message: "✅ Thank you! Your message has been received..."
5. Check browser console (F12) for logs:
   - "Submitting form to Firebase..."
   - "✅ Form submitted successfully! Document ID: ..."

### Step 5: Verify in Firebase
1. Go back to Firebase Console
2. Click **Firestore Database**
3. Click **Data** tab
4. Look for the `contactFormSubmissions` collection
5. You should see your submission with all the data

## Troubleshooting

### If you see "Permission denied" error:
- Make sure you published the rules above
- Wait 30 seconds for rules to propagate
- Try submitting again

### If you see "Firebase is unavailable":
- Check your internet connection
- Make sure Firestore is enabled in Firebase Console

### If nothing happens when you click Submit:
- Open browser console (F12) and check for errors
- Make sure all required fields are filled
- Check that the button shows loading spinner

### To verify Firebase is working:
1. Open browser console (F12)
2. Submit the form
3. Look for console logs:
   - ✅ Success: "Form submitted successfully! Document ID: xyz123"
   - ❌ Error: Will show error code and message

## Test Mode vs Production Rules

**Test Mode (Current - Expires after 30 days):**
```javascript
allow read, write: if request.time < timestamp.date(2025, 11, 1);
```

**Production Mode (Recommended):**
```javascript
match /contactFormSubmissions/{document} {
  allow create: if true;
  allow read, update, delete: if false;
}
```

This ensures:
- ✅ Anyone can submit the form
- ❌ Only you (admin) can read submissions
- ❌ Submissions cannot be modified or deleted by users




