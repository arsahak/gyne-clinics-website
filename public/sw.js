self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  return self.clients.claim();
});

self.addEventListener('fetch', () => {
  // Empty fetch handler to ensure the service worker exists but does nothing
});
