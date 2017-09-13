test:
    nyc  mocha --require babel-polyfill --compilers js:babel-core/register --reporter spec

 .PHONY: test