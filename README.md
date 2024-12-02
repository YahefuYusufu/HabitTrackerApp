# Habit Tracker App

A mobile application built with React Native (Expo) to help users track their daily habits and visualize their progress through analytics.

## Features

- 📱 User Authentication
- ✅ Habit tracking with daily check-ins
- 📊 Analytics and progress visualization
- 🔔 Push notifications (coming soon)
- 🎯 Streak tracking
- 📱 Cross-platform (iOS & Android)

## Tech Stack

- **Frontend**: React Native (Expo)
- **UI **: StyleSheet
- **Backend**: Firebase
- **Authentication**: Firebase Auth
- **Database**: Firestore
- **State Management**: Redux/zustand
- **Language**: TypeScript

## Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac only) or Android Studio (optional)
- Expo Go app on your physical device


## Project Structure

```
src/
├── app/
│   ├── navigation/    # Navigation configuration
│   └── store/        # State management
├── components/       # Reusable components
├── screens/         # App screens
├── services/        # Firebase services
├── hooks/          # Custom hooks
├── utils/          # Helper functions
├── constants/      # App constants
└── types/          # TypeScript types
```

## Available Scripts

- `npx expo start` - Start the development server
- `npx expo start --ios` - Start iOS simulator
- `npx expo start --android` - Start Android emulator
- `npm run test` - Run tests (coming soon)

## Firebase Setup

1. Create a Firebase project
2. Enable Authentication and Firestore
3. Add your Firebase configuration in `src/services/firebase/config.ts`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details



Project Link: [https://github.com/yourusername/habit-tracker-app](https://github.com/YahefuYusufu/habit-tracker-app)
