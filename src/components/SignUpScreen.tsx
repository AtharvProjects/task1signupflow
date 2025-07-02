
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Eye, EyeOff, Facebook, Chrome } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SignUpScreenProps {
  onNavigate: (screen: 'welcome' | 'signup' | 'login') => void;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.terms = 'Please agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: "Account created successfully!",
        description: "Welcome to AppFlow. You can now start using our app.",
      });
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
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
        <h2 className="text-2xl font-bold text-gray-800 ml-4">Create Account</h2>
      </div>

      <p className="text-gray-600 mb-8">
        Join our community and unlock amazing features tailored just for you.
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
        <span className="px-4 text-gray-500 text-sm">or sign up with email</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`w-full py-3 px-4 rounded-xl border-2 focus:border-purple-500 transition-colors ${
              errors.name ? 'border-red-500' : 'border-gray-200'
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

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

        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
            className="mt-1"
          />
          <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
            I agree to the{' '}
            <a href="#" className="text-purple-600 hover:text-purple-700 underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-purple-600 hover:text-purple-700 underline">
              Privacy Policy
            </a>
          </label>
        </div>
        {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}

        <Button 
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 mt-6"
        >
          Create Account
        </Button>
      </form>

      <div className="text-center mt-6">
        <span className="text-gray-600 text-sm">Already have an account? </span>
        <button 
          onClick={() => onNavigate('login')}
          className="text-purple-600 hover:text-purple-700 font-semibold text-sm transition-colors"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignUpScreen;
