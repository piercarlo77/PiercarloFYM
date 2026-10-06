(async () => {
  const [meRes, catRes] = await Promise.all([fetch('/api/me'), fetch('/api/catalog')]);
  if (meRes.status === 401 || catRes.status === 401) return location.reload();
  startApp(await meRes.json(), await catRes.json(), async () => {
    await fetch('/api/logout', { method: 'POST' });
    location.reload();
  });
})();
