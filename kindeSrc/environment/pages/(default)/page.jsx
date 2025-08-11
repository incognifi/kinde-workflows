"use server";

import React from "react";
import { renderToString } from "react-dom/server.browser";
import {
  getKindeCSRF,
  getSVGFaviconUrl,
  getKindeRequiredCSS,
  getKindeRequiredJS,
  getKindeNonce,
  getKindeWidget,
} from "@kinde/infrastructure";

const Layout = async ({ request, context }) => {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <meta name="csrf-token" content={getKindeCSRF()} />
        <title>Login - Incognifi</title>
        <description content="Login to your Incognifi account" />

        <link rel="icon" href={getSVGFaviconUrl()} type="image/svg+xml" />
        {getKindeRequiredCSS()}
        {getKindeRequiredJS()}

        <style nonce={getKindeNonce()}>
          {`
                        :root {
                            * {
                                box-sizing: border-box;
                                font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                            }
                        }

                        .auth-container {
                            min-height: 100vh;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 1rem;
                        }

                        .auth-layout {
                            display: flex;
                            min-height: 100vh;
                            align-items: center;
                            justify-content: center;
                            gap: 4rem;
                            padding: 1rem;
                        }

                        .features-panel {
                            flex: 1;
                            max-width: 500px;
                            color: #fff;
                            display: none;
                        }

                        @media (min-width: 1024px) {
                            .features-panel {
                                display: block;
                            }
                        }

                        .features-content h2 {
                            font-size: 2.5rem;
                            font-weight: 700;
                            margin: 0 0 1rem;
                            line-height: 1.2;
                        }

                        .features-subtitle {
                            font-size: 1.25rem;
                            margin: 0 0 3rem;
                            line-height: 1.4;
                        }

                        .feature-list {
                            display: flex;
                            flex-direction: column;
                            gap: 2rem;
                        }

                        .feature-item {
                            display: flex;
                            gap: 1rem;
                            align-items: flex-start;
                        }

                        .feature-icon {
                            flex-shrink: 0;
                            width: 48px;
                            height: 48px;
                            background: #ffffff1a;
                            border-radius: 12px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: #fff;
                        }

                        .feature-text h3 {
                            margin: 0 0 .5rem;
                            font-size: 1.25rem;
                            font-weight: 600;
                            color: #fff;
                        }

                        .feature-text p {
                            margin: 0;
                            font-size: 1rem;
                            opacity: 0.9;
                            line-height: 1.5;
                        }

                        .auth-card {
                            flex-shrink: 0;
                            width: 100%;
                            max-width: 400px;
                            background: white;
                            border-radius: 12px;
                            padding: 2rem;
                        }

                        .auth-header {
                            text-align: center;
                            margin-bottom: 2rem;
                        }

                        .auth-header h1 {
                            margin: 0 0 0.5rem;
                            color: #1e293b;
                            font-size: 1.875rem;
                            font-weight: 700;
                        }
                    `}
        </style>
      </head>

      <body>
        <div style="display: contents;">
          <div class="auth-container">
            <div class="auth-layout">
              <div class="features-panel">
                <div class="features-content">
                  <h2>Protect Your Privacy</h2>
                  <p class="features-subtitle">
                    Secure proxy email and phone numbers for your online
                    identities
                  </p>
                  <div class="feature-list">
                    <div class="feature-item">
                      <div class="feature-icon">
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
                      <div class="feature-text">
                        <h3>Email Aliases</h3>
                        <p>
                          Create unlimited email aliases to protect your real
                          email address and manage your online identities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="auth-card">
                <div class="auth-header">
                  <h1>Welcome to Incognifi</h1>
                </div>
                <div class="auth-form">
                  <div>{getKindeWidget()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default async function Page(event) {
  const page = await Layout({ ...event });
  return renderToString(page);
}
