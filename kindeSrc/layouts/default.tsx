"use server";

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
                    strokeWidth="2"
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

              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="feature-text">
                  <h3>Virtual Phone Numbers</h3>
                  <p>
                    Get a virtual phone number to receive calls, making it easy
                    to screen nuisance callers.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div className="feature-text">
                  <h3>Custom Domains</h3>
                  <p>
                    Create a mailbox using your own web address, creating a
                    professional appearance distinct from your personal.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <circle cx="12" cy="16" r="1"></circle>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <div className="feature-text">
                  <h3>Advanced Filtering</h3>
                  <p>
                    Set up powerful rules to automatically block, summarise,
                    sort and manage incoming messages from your aliases.
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
