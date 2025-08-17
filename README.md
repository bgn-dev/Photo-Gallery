# Photo Gallery

A modern, responsive photo gallery web application built with React and Firebase. Upload and view your photos with a clean interface.

## Features

- Photo Upload - Drag & drop or click to upload multiple photos
- Gallery View - Beautiful grid layout with responsive design
- Lightbox - View enlarged photos with navigation
- Real-time Sync - Instant updates across all devices
- Mobile Friendly - Optimized for mobile phones
- Secure Storage - Firebase Cloud Storage integration

## Prerequisites

# Frontend

- React v18
- Firebase SDK for authentication and real-time database

# Backend & Services

- Cloud Firestore for real-time document storage
- Firebase Hosting for static site deployment

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/photo-gallery.git
cd photo-gallery
```

### 2. Install dependencies
```bash
cd client
npm install
```

### 3. Firebase Configuration

Create a `.env` file in the `client/` directory:
```bash
# Firebase Configuration
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 4. Run Development Server
```bash
npm start
```

The app will be available at `http://localhost:3000`

### 5. Build for Production
```bash
npm run build
```

## 🔧 Firebase Setup

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication and Firestore

3. **Set up Firestore**
   - Create a Firestore database
   - Configure security rules as needed

4. **Get Configuration**
   - Go to Project Settings → General
   - Copy your web app configuration
   - Add values to your `.env` file

# 📦 Deployment

The project uses GitHub Actions for automatic deployment to Firebase Hosting:

1. **Set up GitHub Secrets**
   - `REACT_APP_FIREBASE_*` (all Firebase config values)
   - `FIREBASE_SERVICE_ACCOUNT_*` (service account key)

2. **Deploy**
   - Push to `main` branch for production deployment
   - Create pull request for preview deployment

## 🛠️ Key Technologies

- **Frontend**: React, JavaScript, CSS
- **Backend**: Firebase Firestore (NoSQL Database)
- **Hosting**: Firebase Hosting
- **CI/CD**: GitHub Actions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

- [ ] THIS PROJECT IS CURRENTLY ON STALL 

---

**Made with ❤️ using React and Firebase**