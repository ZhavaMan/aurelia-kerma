import gulp from 'gulp';
import changedInPlace from 'gulp-changed-in-place';
import sourcemaps from 'gulp-sourcemaps';
import stylus from 'gulp-stylus';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';
import autoprefixerStylus from 'autoprefixer-stylus';
import import_tree from 'stylus-import-tree';


export default function processCSS() {
  return gulp.src(project.cssProcessor.source)
    .pipe(changedInPlace({firstPass: true}))
    .pipe(sourcemaps.init())
    .pipe(stylus({use: [autoprefixerStylus('last 2 versions')],
    	define: {import_tree: import_tree}}))
    .pipe(build.bundle());
}
