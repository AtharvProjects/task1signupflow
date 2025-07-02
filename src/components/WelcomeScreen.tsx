
import React from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone, Star, Shield, Zap } from 'lucide-react';

interface WelcomeScreenProps {
  onNavigate: (screen: 'welcome' | 'signup' | 'login') => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 animate-fade-in">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Smartphone className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Star className="w-8 h-8 text-yellow-400 fill-current animate-pulse" />
            </div>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">AppFlow</span>
        </h1>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Join thousands of users who trust our secure, personalized, and lightning-fast experience.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <Zap className="w-4 h-4 text-purple-600" />
          </div>
          <span className="text-gray-700 text-sm">Quick & easy signup process</span>
        </div>
        
        <div className="flex items-center space-x-3 p-3 bg-pink-50 rounded-lg">
          <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
            <Star className="w-4 h-4 text-pink-600" />
          </div>
          <span className="text-gray-700 text-sm">Personalized experience</span>
        </div>
        
        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <Shield className="w-4 h-4 text-green-600" />
          </div>
          <span className="text-gray-700 text-sm">Bank-level security</span>
        </div>
      </div>

      <div className="space-y-3">
        <Button 
          onClick={() => onNavigate('signup')}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
        >
          Get Started
        </Button>
        
        <div className="text-center">
          <span className="text-gray-600 text-sm">Already have an account? </span>
          <button 
            onClick={() => onNavigate('login')}
            className="text-purple-600 hover:text-purple-700 font-semibold text-sm transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
