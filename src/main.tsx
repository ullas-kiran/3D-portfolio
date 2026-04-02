import React, { Component, ReactNode, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: Error | null; errorInfo: React.ErrorInfo | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ errorInfo });
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", color: "white", backgroundColor: "#b91c1c", minHeight: "100vh", zIndex: 99999, position: "relative" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Runtime Error Caught</h1>
          <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{this.state.error?.toString()}</p>
          <pre style={{ marginTop: "1rem", backgroundColor: "rgba(0,0,0,0.5)", padding: "20px", overflow: "auto" }}>
            {this.state.errorInfo?.componentStack}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
