var spawn = require('spawn-local-bin');
var flags = ['demo', '--open', '--live', '--'];
var meta  = require('./package.json').browserify;
function extensions(extensions) {
  function extensionFlag(flags, extension) {
    return flags.concat(['--extension='+extension]);
  }
  return extensions.reduce(extensionFlag, flags);
}
spawn('beefy', extensions(meta.extensions, flags), process.cwd());
