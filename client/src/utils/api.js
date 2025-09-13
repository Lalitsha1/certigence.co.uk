// Centralized API base URL for the frontend
// Uses Vite env var when provided, falls back to localhost:8822
export const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8822";

