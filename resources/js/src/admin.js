import app from 'flarum/admin/app';

app.initializers.add('solar-admin', () => {

  console.log('Solar Admin Theme Loaded');

  // kleines UI Enhancement
  document.body.classList.add('solar-admin-active');

});
