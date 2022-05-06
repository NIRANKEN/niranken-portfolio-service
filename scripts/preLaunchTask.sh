#!/bin/bash
set -euxo pipefail

currentDir=`pwd -P`
echo $currentDir

if [[ "$currentDir"=="*niranken-portfolio-service*" ]]; then
  echo "AWS_VAULTの設定を実施します..."
  profile_name="niranken"
  export AWS_VAULT_BACKEND=pass
  export AWS_VAULT_PASS_PREFIX=aws-vault
  export AWS_SESSION_TOKEN_TTL=3h
  export AWS_ASSUME_ROLE_TTL=1h
  export GPG_TTY=$(tty)
  export EDITOR=vim
  export $(aws-vault exec $profile_name --prompt=terminal -- env | grep AWS_ | grep -v AWS_VAULT)
  echo "AWS_VAULTの設定を実施します... (Done)"
fi

unset AWS_DEFAULT_REGION
unset AWS_ACCESS_KEY_ID
unset AWS_SECRET_ACCESS_KEY
