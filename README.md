﻿# This Project is being reviewed and tested

All functionality is finished.

This README needs some polishing, but it should be ok with the info available in the genereted index.html to start.


# Gulp / Less / Jade skeleton

This is a skeleton to build static websties using Jade and Less, plus a live-reload webserver for faster development. It uses:
  * Gulp to automate build tasks.
  * Jade template engine to streamline html writing.
  * Less, to modularize and minimize the CSS written.
  * Connect to provide a live-reload server.

## Installation

  1. Clone locally or download this repo.
  1. Install (if you don't have them):
    * [Node.js](http://nodejs.org): Just download v6 and install. Alternatively, if you're on OS X, you can do  `brew install node` .
    * [Gulp](http://gulpjs.com): In a shell console type `npm install -g gulp`.
    * Gulp plugins and app dependencies: Open the repo directory in the console and type `npm install` or, shorter, `npm i`.

## Running gulp

Defined tasks are:
  * `gulp` to run all default tasks only once, or
  * `gulp server` to run all tasks AND start the webserver plus a watch task. This will automatically process changes in your source files and make them available in the web server, and will also automatically reload your browser.

Modifying tasks:
  * gulpfile.js defines the tasks that are done.
  * To easily modify directory names at your discretion, I've defined them as well and file matchers with constants.

## Developing your site

* `src/` dir is where you should put your code and assets.
* `public/` dir is fully auto-generated by Gulp. Your HTML files and everything else will be here.

## Putting your site into production

Just copy into your server everything generated in the `public/` dir and you should be fine to go. Make sure that your Jade templates generate an index.html or that your server is configured to serve any other file you want as default.

## Development your site

You should add your files under the `./source` dir.

## Sites built using this skeleton

  * [Taxi Sotogrande](http://www.sotogrande.taxi), [GitHub repo](https://github.com/OscarDCorbalan/sotogrande.taxi)
