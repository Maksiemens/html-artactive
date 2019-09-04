"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import svg from "gulp-svg-sprite";
import svgmin from "gulp-svgmin";
import cheerio from "gulp-cheerio";
import replace from "gulp-replace";
import debug from "gulp-debug";
import browsersync from "browser-sync";



gulp.task("sprites", () => {
    return gulp.src(paths.sprites.src)
        // minify svg
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
        // remove all fill, style and stroke declarations in out shapes
        .pipe(cheerio({
            run: ($) => {
                $('[fill]').removeAttr('fill');
                $('[fill-rule]').removeAttr('fill-rule');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {xmlMode: true}
        }))
        // cheerio plugin create unnecessary string '&gt;', so replace it.
        .pipe(replace('&gt;', '>'))
        // build svg sprite
        .pipe(svg({
            shape: {
                dest: "intermediate-svg"
            },
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                }
            }
        }))
        .pipe(gulp.dest(paths.sprites.dist))
        .pipe(debug({
            "title": "Sprites"
        }))
        .on("end", browsersync.reload);
});