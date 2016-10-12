# Gulp Less Jade Skeleton

This is a skeleton to build static websties using Jade and Less, plus a live-reload webserver for faster development. It uses:
  * Gulp to automate build tasks.
  * Jade template engine to streamline html writing.
  * Less, to modularize and minimize the CSS written.
  * Connect to provide a live-reload server.

## Installation

  1. Clone this repo.
  1. Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Gulp](http://gulpjs.com): `npm install -g gulp`
    * Gulp plugins and app dependencies: `npm install`
  1. Run:
    * `gulp` to run all tasks, or
    * `gulp server` to run all tasks AND start the webserver plus a watch task. This will automatically process changes in your source files and make them available in the web server.
  1. Learn:
    * `public/` dir is fully auto-generated.

## Development your site

You should add your files under the `./source` dir.

## Sites built using this skeleton

  * [Sotogrande Taxi site](http://www.sotogrande.taxi)