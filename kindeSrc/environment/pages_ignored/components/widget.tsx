"use server";

import React from "react";
import { getKindeWidget } from "@kinde/infrastructure";

const styles: {
  authCard: React.CSSProperties;
  heading: React.CSSProperties;
  headingText: React.CSSProperties;
} = {
  authCard: {
    flexShrink: "0",
    width: "100%",
    maxWidth: "400px",
    background: "white",
    borderRadius: "12px",
    padding: "2rem",
  },
  heading: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  headingText: {
    margin: "0 0 0.5rem",
    color: "#1e293b",
    fontSize: "1.875rem",
    fontWeight: "700",
  },
};

export const Widget = (props: { heading: string }) => {
  return (
    <div style={styles.authCard}>
      <div style={styles.heading}>
        <h1 style={styles.headingText}>{props.heading}</h1>
      </div>
      <div>{getKindeWidget()}</div>
    </div>
  );
};
