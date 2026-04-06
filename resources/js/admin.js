import app from 'flarum/admin/app';

app.initializers.add('solar-admin', () => {
  if (!app) return;
  console.log('Solar Admin Loaded');
});
