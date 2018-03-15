#!/bin/bash

# if which pyenv > /dev/null; then
  # eval "$(pyenv init -)";
  # # eval "$(pyenv shell 2.7.14)";
  # pyenv install 2.7.14
  # pyenv shell 2.7.14
  # pyenv rehash
  # echo "$(pyenv shell)"
# fi

CONFIGS="${PWD}/config"


NPM_REQUIREMENTS="${CONFIGS}/requirements.txt"

# echo "$NPM_REQUIREMENTS"

if [ -e "$NPM_REQUIREMENTS" ]; then
  # echo "2.7.14" | xargs shell
  # "$(pyenv shell 2.7.14)"
  # xargs yarn add < "${NPM_REQUIREMENTS}"
  xargs yarn add --dev < "${NPM_REQUIREMENTS}"
  nodenv rehash
  else
    echo "no config"
fi
