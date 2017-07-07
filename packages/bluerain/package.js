Package.describe({
  name: 'bluerain',
});

Package.onUse(function (api) {

  api.use([

    // vulcan core
    'vulcan:core',

    // vulcan packages
    'vulcan:forms',
    'vulcan:accounts',

  ]);

  api.addFiles('lib/stylesheets/bootstrap.min.css');
  api.addFiles('lib/components/components/AppDrawer/AppDrawer.css');
  api.addFiles(['lib/stylesheets/bluerain-bootstrap/components/login.css'
  , 'lib/stylesheets/bluerain-bootstrap/layouts/flexbox-layout.css'
  ,'lib/stylesheets/bluerain-bootstrap/layouts/absolute-center-layout.css'
  ]);
  // api.addFiles('../../node_modules/bluerain-bootstrap-theme/dist/css/components/login.css');
  // api.addFiles('../../node_modules/font-awesome/css/font-awesome.css');
   api.addAssets(['lib/public/app-drawer-background.jpg', 'lib/public/Mevris Logo-01.svg'], ['client']);


  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');

});
