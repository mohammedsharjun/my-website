# Firebase Setup Guide

This guide will help you set up Firebase for the contact form.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard

## Step 2: Enable Firestore Database

1. In your Firebase project, go to **Firestore Database**
2. Click "Create database"
3. Choose "Start in production mode" or "Start in test mode"
4. Select a location for your database
5. Click "Enable"

## Step 3: Get Your Firebase Configuration

1. In Firebase Console, click the **gear icon** (⚙️) next to "Project Overview"
2. Select **Project settings**
3. Scroll down to "Your apps" section
4. Click the **Web icon** (`</>`) to add a web app
5. Register your app with a nickname (e.g., "My Website")
6. Copy the `firebaseConfig` object values

## Step 4: Create Environment Variables File

1. In the `website` folder, create a file named `.env.local`
2. Add the following content (replace with your actual values):

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Step 5: Set Up Firestore Security Rules (Optional)

For production, update your Firestore security rules:

1. Go to **Firestore Database** > **Rules**
2. Add the following rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contactFormSubmissions/{document} {
      allow read: if false; // Only admins can read
      allow write: if true; // Anyone can submit the form
    }
  }
}
```

## Step 6: Test the Form

1. Restart your development server
2. Fill out the contact form on your website
3. Submit the form
4. Check Firebase Console > Firestore Database to see the submission

## Data Structure

Form submissions are stored in the `contactFormSubmissions` collection with the following fields:

```typescript
{
  name: string,
  company: string,
  email: string,
  phone: string,
  interests: string[], // Array of selected interests
  budget: string,
  projectDescription: string,
  timestamp: string, // ISO format
  createdAt: Timestamp // Firestore timestamp
}
```

## Troubleshooting

### Error: "Firebase: Error (auth/configuration-not-found)"
- Make sure `.env.local` file exists in the `website` folder
- Verify all environment variables are set correctly
- Restart your development server

### Error: "Missing or insufficient permissions"
- Check your Firestore security rules
- Make sure the collection name is correct (`contactFormSubmissions`)

### Form not submitting
- Open browser console to check for errors
- Verify Firebase is initialized correctly in `src/lib/firebase.ts`
- Check that all required fields are filled

## Support

For more information, visit:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Getting Started](https://firebase.google.com/docs/firestore/quickstart)




