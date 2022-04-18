# EJS Project Template

> Version 0.1.0

## How to use ...
### Requirements
* Docker & Docker-compose
* NodeJS v14, Npm, Nvm

### Install
1. RUN `make install`
### Start Developing

### Stop docker instances
1. RUN `make stop`

## Build steps/phase
1. **"compile:\*"**
   1.1 *assets*
    * pipe: `./source` -> `./dist/public`
    * docker-volume: `../assets/dist/public:/public`
  
   1.2 *backend/database*
   * `./mock` - no need of build steps
   * mock data will be taken directly from the `./mock` directory
   * docker-volume: `../database/mock:/database`