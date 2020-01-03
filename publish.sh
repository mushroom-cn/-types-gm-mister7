#!/bin/bash
npm config set registry=http://registry.npmjs.org
npm login
npm publish --tag dev
