#!/bin/bash

cleanup() {
	rm -rf lib
}

watch() {
	npx rollup -cwm
}

start() {
	npx rollup -c ./config/rollup.config.js
}

minify() {
	npx uglifyjs lib/prs.umd.js --config-file ./config/uglify.json -o lib/prs.min.js
}

size() {
	echo "Gzipped Size: $(strip-json-comments lib/donner.js | npx gzip-size)"
}
build() {
	cleanup && start &&	minify
}

build

#   "trash": "rimraf lib",
# "rollup": "rollup -c",
#  "watch": "rollup -cwm",
#  "build": "run-s trash rollup minify:* size",
# "minify:cjs": "uglifyjs lib/donner.umd.js --config-file ./uglify.json -o lib/donner.min.js",
#         "size": "echo \"Gzipped Size: $(strip-json-comments lib/donner.js | gzip-size)\"",
# "build:micro": "run-s trash && microbundle build -i src/index.js",
#         "build:brsfy": "run-s trash && browserify -r ./src --debug -o lib/donner.bundle.js",
#         "build:brsfy:flat": "run-s trash && browserify ./src/donner.js | browser-unpack | browser-pack-flat",
#         "build:parcel": "run-s trash && parcel build src/donner.js --public-url ./ -d lib"
