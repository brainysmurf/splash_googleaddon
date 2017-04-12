# Splash

### To see in the local browser
```
git checkout TDD_4
test/server.sh
```

### To run tests
```
npm test
```

### To upload to Google (requires gapps ini first)
```
./upload.sh
```

### Order of development

```
git checkout master  # all pending
git checkout TDD_1  # integration tests
git checkout TDD_2  # one test fails
git checkout TDD_3  # fixed, one more pending
git checkout TDD_4  # ...
```
