#! /bin/bash

# exit when any command fails
set -e

for testFile in app/api/tests/integration/*.ts; do
  firebase firestore:delete -P mediumus-dev --all-collections -y
  mocha --timeout 150000 --full-trace --exit -r ts-node/register "$testFile"
done
