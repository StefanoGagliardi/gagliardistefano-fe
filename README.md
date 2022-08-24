# Unicums - NFT for italian artisans

**Authos:** [stefano.gagliardi@sitisrl.it](mailto:stefano.gagliardi@sitisrl.it)  
**Version:** 0.1 Alpha
**Inspired:** [dev.to article](https://dev.to/dabit3/building-scalable-full-stack-apps-on-ethereum-with-polygon-2cfb)

## Next Step

1. The Graph - Graphql query sdk for Blockchain data

### Run ecosystem in localhost localnet

**1. Run test node**
`npx hardhat node`

**Import one of twenty generate wallet in Metamask (1000 EHT)**

**Deploy contract on chain and return Contract address**
`npx hardhat run scripts/deploy.ts --network`

**Add address to config.js**

**Run app**
`npm run dev`

## Start script

List of all avaible scripts:

**Application scripts:**

1. `npm run build` - Build NextJs app
2. `npm run dev` - Run NextJs app in development mode
3. `npm run test` - Run test
4. `npm run start` - Run NextJs build app
5. `npm run setup:local:testnet` - Setup enviroment for local development on local testnet

**Blockchain scripts:**

1. `npx hardhat node` - Start Polygon local blockchain
2. `npx hardhat run scripts/deploy.ts --network localhost` - Deploy smart contract on current active network
   NB: Questo script può essere lanciato da node e non da "hardhat" come indicato nella loro doc [Standalone scripts](https://hardhat.org/guides/scripts.html#standalone-scripts-using-hardhat-as-a-library)

   1. Installare npm install --save-dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers
   2. Installare npm install --save-dev hardhat-deploy-ethers ethers3
   3.

**setup:local:testnet:**

**For all definitions see 'scripts/types.d.ts'**
This script invoke file `./scripts/setup.ts` with argument "--local", "--development" and "localnet", beacause same file will be used for production setup.

## Static Type Binding

Vedere ROAM
https://github.com/dethcrypto/TypeChain/tree/master/packages/hardhat

1. `npm install --save-dev typechain @typechain/hardhat @typechain/ethers-v5 --force`
   Sono dovuto andare di --force per problemi di dipendneze di alcuni tipi

2. Creare un fle tsconfig dedicato
   Now typings should be automatically generated each time contract recompilation happens.

3. `npx hardhat clean`- Clean cache

4. Add plugin to Hardhat configuration:

```typescript
module.exports = {
  typechain: {
    outDir: './typechain-types',
    target: 'ethers-v5',
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
  },
};
```

5. Compile contract and generate Typescript types: `npx hardhat compile` inside previous declared folder "typechain-types"

### NPM RUN SETUP:LOCAL:TESTNET

This script set Local Polygn network, deploy contracts, set keys. Then we can start our React platform.
This script have mandatory this command: `npm run setup:local:testnet local development testnet ?true"

**Mandatory:**

1. Network type: `export type ChainEnv = "localnet" | "testnet" | "mainnet";`
2. Env host: `export type HostEnv = "local" | "server";`
3. Node env: `export type AppEnv = "test" | "development" | "production";`

**Optional:**  
4. Reset Hardat: true o false

### ======== GITHUB ACITON FLOW ============

Ci sono due flow di automazione per le "Actions" di Github.

1. `development.yml` - Lavora sulla branch "development"
2. `nodejs.ci.yml` - Lavora sulla branch "main"

**development.yml**

Operazioni della CI - due Job:

**Job 1: test**

1. Parte quando c'è un push nella branch "development"
2. Installa l'ambiente `ubuntu-latest` e testa solo su `node-version: [14.x]`
3. `use actions/checkout@v2` - Git checkout
4. `use actions/setup-node@v1` - Git setup node in ubuntu
5. `npm install npm run build npm run test` - Non serve doppia &&, sono su due right nel file

**Job 2: create-pull-request**

1. Dipende dal Job precedente (`needs: [test]`) e installa Ubuntu
2. `use actions/checkout@v2` - Git checkout
3. `use repo-sync/pull-request@v2` -
4. Una serie di settings e token per impostare la Repo di destinazione del Merge

**nodejs.ci.yml**

Operazioni della CI - due Job:

**Job 1: test**

1. Parte quando c'è un push nella branch "development"
2. Installa l'ambiente `ubuntu-latest` e testa solo su `node-version: [14.x]`
3. `use actions/checkout@v2` - Git checkout
4. `use actions/setup-node@v1` - Git setup node in ubuntu
5. `npm install npm run build npm run test` - Non serve doppia &&, sono su due right nel file

**Job 2: deploy**

1. `uses: appleboy/ssh-action@master` - Installa pacchetto SSH
2. Imposto i dati (tramite secret di github) per la connesione SSH
3. Eseguo del codice sulla macchina per fare deploy
   3.1

```shell
whoami
cd /var/www/gioiellissimo-frontend/
git pull git@github.com:StefanoGagliardi/gioiellissimo-frontend.git
export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh
ls
npm install && npm run build && pm2 restart 12
```

**Job 3: testRestart**

1. Installo ubuntu per usare la shell
2. Faccio una chiamata curl al dominio per vedere se ripartito correttamente

```
sleep 2m
curl -I https://gioiellissimo.it
curl -I http://api.gioiellissimo.it/
```

### Heroku deploy

1. Login to heroku via CLI `heroku login`, login tramie browser, account logged as response in terminal.
2. Se non ho ancora un repo procedo con `git init`
3. Se ho già una repo salto il punto 2 e procedo con `heroku git:remote -a next-generation-developers`
4. Ora push un commit con i classici:
   4.1  ` git add .` - Add all change files to next commit
   4.2  `git commit -am "Heroku commit"` - Create commit with comment
   4.3  `git push heroku master` - Push commits to Master branch in repo 