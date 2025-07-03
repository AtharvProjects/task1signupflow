
import React from 'react';

interface WelcomeScreenProps {
  onNavigate: (screen: 'welcome' | 'profile' | 'signup') => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="screen active">
      <div className="logo-container">
        <div className="logo">
          <img src="/lovable-uploads/ef7471d2-15f5-4916-8db9-e5fd7038dc12.png" alt="CodSoft Logo" />
        </div>
      </div>
      
      <div className="brand-name">CODSOFT</div>
      <div className="tagline">Empowering developers worldwide with cutting-edge tools and collaborative opportunities</div>
      
      <div className="features">
        <div className="feature">
          <div className="feature-icon">💻</div>
          <div className="feature-text">Code</div>
        </div>
        <div className="feature">
          <div className="feature-icon">🤝</div>
          <div className="feature-text">Collaborate</div>
        </div>
        <div className="feature">
          <div className="feature-icon">🚀</div>
          <div className="feature-text">Deploy</div>
        </div>
        <div className="feature">
          <div className="feature-icon">📊</div>
          <div className="feature-text">Analytics</div>
        </div>
      </div>
      
      <div className="auth-buttons">
        <button className="auth-btn" onClick={() => onNavigate('profile')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Google
        </button>
        
        <button className="auth-btn" onClick={() => onNavigate('profile')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </button>
      </div>
      
      <div className="divider">or continue with email</div>
      
      <button className="primary-btn" onClick={() => onNavigate('profile')}>
        🚀 Get Started
      </button>
      
      <div className="bottom-text">
        👋 Already have an account?
      </div>
    </div>
  );
};

export default WelcomeScreen;
