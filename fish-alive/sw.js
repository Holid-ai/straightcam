// Fish Alive moved to https://holid-ai.github.io/fish-alive/ — remove the old offline copy.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k.startsWith('fish-alive') || k.startsWith('3s-edit')) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll()) c.navigate('https://holid-ai.github.io/fish-alive/');
})()));
