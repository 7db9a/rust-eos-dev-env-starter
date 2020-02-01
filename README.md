## My Rust EOS Dev Environment (Naive)

This environment uses EOSIO v1 and installs EOSIO software binaries instead of building from source (see Dockerfile). It sets up [eosio-rust](https://github.com/sagan-software/eosio-rust) for contract development and [eoslime](https://github.com/LimeChain/eoslime) (nodejs) for tests. Nodeos and keos are launched in their own containers.

***Don't deploy production code using this environment. And don't hold actual tokens in a wallet made from here.***

```
git clone https://github.com/7db9a/rust-eos-dev-env-starter your-eos-project
cd your-eos-project/docker
docker build -t rust-eos-dev:latest .
docker volume create --name=example-nodeos-data-volume
docker volume create --name=example-keosd-data-volume
docker-compose up
```

Then from the top of your new project's directory:

`./dev.sh wallet-create`

Add the password to the `docker/eos.env`. The pub and priv key in the file is for development.

Restart the services:

`docker-compose stop && docker-compose up --force-recreate`


### Build, set, and test

To build the rust code, deploy it locally, and run tests:

`./dev.sh run`

The commands broken down individually:

#### Build code

`./dev.sh build`

#### Set code

`./dev.sh set`

#### Test code

`./dev.sh test`

`dev.sh` is very basic and not generalized. Feel free to modify it or make your own script, or just run the actual underlying commands.
