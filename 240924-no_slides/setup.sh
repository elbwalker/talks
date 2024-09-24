#!/bin/bash

# Install packages
cd function && npm i && cd ..
cd www && npm i && cd ..
npm i

# Install Pulumi
curl -fsSL https://get.pulumi.com | sh

# Use a Self-Managed Backend
~/.pulumi/bin/pulumi login file://./state

# Append environment variables
echo 'export PATH=$PATH:~/.pulumi/bin' >> ~/.bashrc
if [ -f .env ]; then
  while IFS= read -r line || [ -n "$line" ]; do
    echo "export $line"  >> ~/.bashrc
  done < .env
fi
