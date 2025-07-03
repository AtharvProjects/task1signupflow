
import React, { useState } from 'react';

interface ProfileData {
  firstName: string;
  lastName: string;
  role: string;
}

interface ProfileScreenProps {
  onNavigate: (screen: 'welcome' | 'profile' | 'signup' | 'login') => void;
  onSubmit: (data: ProfileData) => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onNavigate, onSubmit }) => {
  const [formData, setFormData] = useState<ProfileData>({
    firstName: '',
    lastName: '',
    role: ''
  });

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="screen active">
      <button className="back-btn" onClick={() => onNavigate('welcome')}>←</button>
      
      <div className="screen-title">Tell us about yourself</div>
      <div className="screen-subtitle">We'll personalize your CODSOFT experience based on your profile</div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">👤 First Name</label>
          <input 
            type="text" 
            className="form-input" 
            placeholder="Enter your first name" 
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            required 
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">👤 Last Name</label>
          <input 
            type="text" 
            className="form-input" 
            placeholder="Enter your last name" 
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            required 
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">💼 Role</label>
          <div className="select-wrapper">
            <select 
              className="form-select" 
              value={formData.role}
              onChange={(e) => handleInputChange('role', e.target.value)}
              required
            >
              <option value="">Select your role</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Project Manager</option>
              <option value="student">Student</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        
        <button type="submit" className="primary-btn">
          ✨ Continue
        </button>
      </form>
    </div>
  );
};

export default ProfileScreen;
