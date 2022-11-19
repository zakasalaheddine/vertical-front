export {};

declare global {
  interface Window {
    runZakaLoader: any; // 👈️ turn off type checking
  }
}