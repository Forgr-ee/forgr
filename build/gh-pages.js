#!/usr/bin/env node
var ncp = require('ncp').ncp;
var fs = require('fs');
var exec = require('child_process').exec;
var rimraf = require('rimraf');
var path = require('path');
var args = require('args');
var mkdirp = require('mkdirp');
var index = 'index.html';
var base = 'docs';
var folder = '';

args
  .option('folder', 'the folder where you want to build')

const flags = args.parse(process.argv)

if (flags.folder) {
  folder = base + '/' + flags.folder + '/';
} else {
  folder = base + '/';
}
console.log(`I'll be running on folder ${folder}`)

function copy404() {
  ncp('404.html', folder + '404.html', function (err) {
    if (err) {
      console.error(err);
    }
  });
}

function copyCNAME() {
  ncp('CNAME', folder + 'CNAME', function (err) {
    if (err) {
      console.error(err);
    }
  });
}


function editForProduction() {
  console.log('Preparing files for github pages');

  fs.readFile(folder + index, 'utf-8', function (err, data) {
    if (err) throw err;

    var newValue = data.replace(/src=\//g, 'src=');

    fs.writeFile(folder + index, newValue, 'utf-8', function (err) {
      if (err) throw err;
      fs.readFile(folder + index, 'utf-8', function (err, data) {
        if (err) throw err;
        var newValue2 = data.replace(/href=\//, 'href=');
        fs.writeFile(folder + index, newValue2, 'utf-8', function (err) {
          if (err) {
            console.error(err);
          } else {
            console.log('upload it on github');
          }
        });
      });
    });
  })
}

function runBuild() {
  // Create development build
  console.log('Creating production build');

  exec('yarn run build', function () {
    // Move the dist folder to docs for gh-pages
    ncp.limit = 16;

    ncp('dist', folder, function (err) {
      if (err) {
        return console.error(err);
      } else {
        console.log('Build Complete.');
        pathToBuild = 'dist';

        exec('rm -r ' + pathToBuild, function (err, stdout, stderr) {
          if (err) {
            console.error(err)
          } else {
            if (fs.existsSync('CNAME')) {
              copyCNAME()
            }
            if (fs.existsSync('404.html')) {
              copy404()
            }
            editForProduction()
          }
        });
      }
    });
  }).stderr.pipe(process.stderr);
}



// Remove existing folder if it exists

if (fs.existsSync(folder)) {
  let pathToDocs = folder;
  rimraf(pathToDocs, function () {
    mkdirp(folder, function (err) {
      if (err) console.error(err)
      else runBuild();
    });
  });
} else {
  mkdirp(folder, function (err) {
    if (err) console.error(err)
    else runBuild();
  });
}
