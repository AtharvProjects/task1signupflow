
import React, { useState } from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import SignUpScreen from '../components/SignUpScreen';
import LoginScreen from '../components/LoginScreen';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'signup' | 'login'>('welcome');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onNavigate={setCurrentScreen} />;
      case 'signup':
        return <SignUpScreen onNavigate={setCurrentScreen} />;
      case 'login':
        return <LoginScreen onNavigate={setCurrentScreen} />;
      default:
        return <WelcomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md">
          {renderScreen()}
        </div>
      </div>
    </div>
  );
};

export default Index;
