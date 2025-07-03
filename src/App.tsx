
import React, { useState } from 'react';
import { Toaster } from '@/components/ui/toaster';
import WelcomeScreen from '@/components/WelcomeScreen';
import ProfileScreen from '@/components/ProfileScreen';
import SignUpScreen from '@/components/SignUpScreen';
import LoginScreen from '@/components/LoginScreen';
import StatusBar from '@/components/StatusBar';
import './App.css';

type Screen = 'welcome' | 'profile' | 'signup' | 'login';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    role: ''
  });

  const navigateToScreen = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleProfileSubmit = (data: typeof profileData) => {
    setProfileData(data);
    navigateToScreen('signup');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 flex items-center justify-center p-4">
      <div className="phone-container">
        <StatusBar />
        
        <div className="screen-content">
          {currentScreen === 'welcome' && (
            <WelcomeScreen onNavigate={navigateToScreen} />
          )}
          {currentScreen === 'profile' && (
            <ProfileScreen 
              onNavigate={navigateToScreen} 
              onSubmit={handleProfileSubmit}
            />
          )}
          {currentScreen === 'signup' && (
            <SignUpScreen 
              onNavigate={navigateToScreen}
            />
          )}
          {currentScreen === 'login' && (
            <LoginScreen 
              onNavigate={navigateToScreen}
            />
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
