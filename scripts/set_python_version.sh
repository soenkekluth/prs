#!/bin/bash

if which pyenv > /dev/null; then
  eval "$(pyenv init -)";
  # eval "$(pyenv shell 2.7.14)";
  pyenv install 2.7.14
  pyenv shell 2.7.14
  pyenv rehash
  echo "$(pyenv shell)"
fi
