
# React Simple Blog

A react app the integrates with pushshift via an api 

Created using React, Node.js and Postgresql.

## Demo

You can watch the demo [here](https://drive.google.com/file/d/1GXwVGEdQmG5eeRlRfEc42rQuZ0f1f7Nf/view?usp=sharing)



## Installation/Run locally
Assuming you have already installed postgresql with default config and node.js

Install my-project with yarn and node >= 14.20

For app:
```bash
  cd pushshift_app
  yarn start
```

For service
- in postgres, create a database named pushshift
- edit the config/config.json file in pushshift_gateway

Installing
```bash
  cd pushshift_gateway
  yarn
  yarn migrate
  yarn develop
```
    
## Features

- Reddit pushshift API sync with subreddt - jwst
- Add to post to favorites
- Remove post to favorites

