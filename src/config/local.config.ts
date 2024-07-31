const baseConfig = require('./base.config');
const { join } = require('path');

exports.config = {
  ...baseConfig,
  maxInstances: 3,
  capabilities: [
    {
      maxInstances: 3,
      browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
              '--disable-infobars',
            '--window-size=1914,1026'],
            w3c: false
        },
}],
services: [
  [
    'image-comparison',
    {
      // Some options, see the docs for more
      baselineFolder: join(process.cwd(), './src/visual/baseline'),
      formatImageName: '{tag}-{logName}-{width}x{height}',
      screenshotPath: join(process.cwd(), './src/visual/'),
      savePerInstance: true,
      autoSaveBaseline: true,
      blockOutStatusBar: true,
      blockOutToolBar: true,
      // NOTE: When you are testing a hybrid app please use this setting
      isHybridApp: true,
      // Options for the tabbing image
      tabbableOptions: {
        circle: {
          size: 18,
          fontSize: 18,
          // ...
        },
        line: {
          color: '#ff221a', // hex-code or for example words like `red|black|green`
          width: 3,
        },
      },
      // ... more options
    },
  ],
]
};