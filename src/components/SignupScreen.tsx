
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ProfileData {
  firstName: string;
  lastName: string;
  role: string;
}

interface SignupScreenProps {
  onNavigate: (screen: 'welcome' | 'profile' | 'signup') => void;
  profileData: ProfileData;
}

const SignupScreen: React.FC<SignupScreenProps> = ({ onNavigate, profileData }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Account Created Successfully!",
      description: `Welcome to CODSOFT, ${profileData.firstName}! 🎉`,
    });
  };

  return (
    <div className="screen active">
      <button className="back-btn" onClick={() => onNavigate('profile')}>←</button>
      
      <div className="screen-title">Create your account</div>
      <div className="screen-subtitle">Secure your CODSOFT account with email and password</div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">📧 Email Address</label>
          <input 
            type="email" 
            className="form-input" 
            placeholder="Enter your email address" 
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required 
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">🔒 Password</label>
          <input 
            type="password" 
            className="form-input" 
            placeholder="Create a strong password" 
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            required 
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">🔒 Confirm Password</label>
          <input 
            type="password" 
            className="form-input" 
            placeholder="Confirm your password" 
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            required 
          />
        </div>
        
        <div className="checkbox-group">
          <input 
            type="checkbox" 
            className="checkbox" 
            checked={formData.agreeToTerms}
            onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
            required 
          />
          <label className="checkbox-label">
            I agree to CODSOFT's <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a>
          </label>
        </div>
        
        <button type="submit" className="primary-btn">
          🚀 Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupScreen;
