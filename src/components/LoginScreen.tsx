
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Eye, EyeOff, Facebook, Chrome } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LoginScreenProps {
  onNavigate: (screen: 'welcome' | 'signup' | 'login') => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: "Welcome back!",
        description: "You have successfully logged into your account.",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 animate-fade-in">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => onNavigate('welcome')}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h2 className="text-2xl font-bold text-gray-800 ml-4">Welcome Back</h2>
      </div>

      <p className="text-gray-600 mb-8">
        Sign in to your account and continue your journey with us.
      </p>

      <div className="space-y-4 mb-6">
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center space-x-2 py-3 border-2 hover:bg-blue-50 transition-colors"
        >
          <Facebook className="w-5 h-5 text-blue-600" />
          <span>Continue with Facebook</span>
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center space-x-2 py-3 border-2 hover:bg-red-50 transition-colors"
        >
          <Chrome className="w-5 h-5 text-red-500" />
          <span>Continue with Google</span>
        </Button>
      </div>

      <div className="flex items-center mb-6">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-4 text-gray-500 text-sm">or login with email</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full py-3 px-4 rounded-xl border-2 focus:border-purple-500 transition-colors ${
              errors.email ? 'border-red-500' : 'border-gray-200'
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            className={`w-full py-3 px-4 pr-12 rounded-xl border-2 focus:border-purple-500 transition-colors ${
              errors.password ? 'border-red-500' : 'border-gray-200'
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <div className="flex justify-end">
          <button 
            type="button"
            className="text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors"
          >
            Forgot Password?
          </button>
        </div>

        <Button 
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 mt-6"
        >
          Sign In
        </Button>
      </form>

      <div className="text-center mt-6">
        <span className="text-gray-600 text-sm">Don't have an account? </span>
        <button 
          onClick={() => onNavigate('signup')}
          className="text-purple-600 hover:text-purple-700 font-semibold text-sm transition-colors"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
