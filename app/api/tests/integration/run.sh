#! /bin/bash

for testFile in app/api/tests/integration/*.ts; do
  firebase firestore:delete -P mediumus-dev --all-collections -y
  mocha --timeout 60000 --full-trace --exit -r ts-node/register "$testFile"
done
