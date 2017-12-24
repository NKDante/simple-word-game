const {app, BrowserWindow} = require('electron')
let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1280,
    height: 720,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/logo.png`
  })
  win.loadURL(`file://${__dirname}/dist/index.html`)
  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()
  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)
// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})


// const electronify = require('electronify-server');
//
// electronify({
//   url: '',
//   command: 'json-server --watch db.json',
//   ready: function (app) {
//     // application event listeners could be added here
//   }
// });

// var electronify = require('electronify-server');

// electronify({
//   command: 'json-server --watch db.json',
//   url: 'http://127.0.0.1:3000',
//   debug: true,
//   window: {height: 768, width: 1024},
//   ready: function(app){
//     // application event listeners could be added here
//   },
//   preLoad: function(app, window){
//     // window event listeners could be added here
//   },
//   postLoad: function(app, window){
//     // url finished loading
//   },
//   showDevTools: false
// }).on('child-started', function(child) {
//   // child process has started
//   console.log('PID: ' + child.pid);
//
//   // setup logging on child process
//   child.stdout.on('data', console.log);
//   child.stderr.on('data', console.log);
//
// }).on('child-closed', function(app, stderr, stdout) {
//   // the child process has finished
//
// }).on('child-error', function(err, app) {
//   // close electron if the child crashes
//   app.quit();
// });
