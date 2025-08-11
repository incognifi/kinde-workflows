import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="auth-layout">
        <div className="features-panel">
          <div className="features-content">
            <h2>Protect Your Privacy</h2>
            <p className="features-subtitle">
              Secure proxy email and phone numbers for your online identities
            </p>
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="feature-text">
                  <h3>Email Aliases</h3>
                  <p>
                    Create unlimited email aliases to protect your real email
                    address and manage your online identities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};
