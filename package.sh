#!/bin/bash

declare -r app_name="package-demo"
declare -r app_version="1.0.0"
# Stops execution of the script if error
set -e
# Prints each command before execution

npm run build

zip -r build.zip .next *.json *.js Procfile