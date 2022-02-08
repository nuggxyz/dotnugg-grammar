#!/bin/bash


MESSAGE=$1

# puts new version in the env
VERSION=node -p -e '`PACKAGE_VERSION=v${require("./package.json").version}`' >> $GITHUB_ENV


if grep -q "MAJOR" <<< "$MESSAGE"; then
    npm version major
elif grep -q "MINOR" <<< "$MESSAGE"; then;
    npm version minor
else
    npm version patch
fi
