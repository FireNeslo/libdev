#!/usr/bin/env node

var vinyl = require('vinyl-fs')
  , path  = require('path')
  , from  = path.join(__dirname, 'src', '**')
  , dest  = process.cwd()

vinyl.src(from).pipe(vinyl.dest(dest));
