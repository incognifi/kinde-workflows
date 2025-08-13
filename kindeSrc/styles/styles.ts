const kindeVariables = {
  baseFontFamily:
    "Outfit, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;",
  controlSelectTextBorderRadius: "1rem",
  buttonPrimaryBackgroundColor: "#4f46e5",
  buttonPrimaryColor: "white",
  buttonBorderRadius: "8px",
  buttonSecondaryBackgroundColor: "#f8fafc",
  buttonSecondaryBorderWidth: "1px",
  buttonSecondaryBorderColor: "#e2e8f0",
  buttonSecondaryBorderStyle: "solid",
  buttonSecondaryBorderRadius: "8px",
} as const;

export const getStyles = (): string => `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

    :root {
        --kinde-base-font-family: ${kindeVariables.baseFontFamily};
        --kinde-control-select-text-border-radius: ${kindeVariables.controlSelectTextBorderRadius};
        --kinde-button-primary-background-color: ${kindeVariables.buttonPrimaryBackgroundColor};
        --kinde-button-primary-color: ${kindeVariables.buttonPrimaryColor};
        --kinde-button-border-radius: ${kindeVariables.buttonBorderRadius};
        --kinde-button-secondary-border-width: ${kindeVariables.buttonSecondaryBorderWidth};
        --kinde-button-secondary-border-style: ${kindeVariables.buttonSecondaryBorderStyle};
        --kinde-button-secondary-border-radius: ${kindeVariables.buttonSecondaryBorderRadius};
        --kinde-control-label-color: #fff;
        --kinde-button-font-weight: 700;
        --kinde-control-select-text-border-color: #636363;
        --kinde-button-primary-border-width: 0;
        --kinde-designer-base-link-color: #fff;

        box-sizing: border-box;
    }

    * {
        box-sizing: border-box;
    }

    [data-kinde-control-label] {
        font-weight: 700;
    }

    [data-kinde-choice-separator] { 
        color: #ABABAB;
    }

    [data-kinde-button-variant=primary] { 
        background: linear-gradient(90deg, #467BE6 30.32%, #212581 100%);
    }

    body {
        margin: 0;
        font-family: ${kindeVariables.baseFontFamily};
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
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
`;
