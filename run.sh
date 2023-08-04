#!/bin/sh

echo '## Dart'
echo '```'
(cd dart && dart main.dart)
echo '```'

echo '## Java'
echo '```'
(cd java && rtx x java -- gradle run -q)
echo '```'

echo '## JavaScript'
echo '```'
(cd js && node main.js)
echo '```'

echo '## Python'
echo '```'
(cd python && python main.py)
echo '```'

echo '## Rust'
echo '```'
(cd rust && cargo run -q)
echo '```'

echo '## Go'
echo '```'
(cd go && go run main.go)
echo '```'
