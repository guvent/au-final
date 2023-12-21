<div align="center">

![](/public/favicon-96x96.png "Smart Contract Creator")

# Welcome Smart Contract Creator!

We can create smart contracts and deploy them to blockchain networks! Play a crucial role in shaping the decentralized finance (DeFi) landscape, enabling various applications, from creating custom currencies to representing ownership of digital and physical assets on the blockchain. They provide a foundation for developers to create diverse and innovative decentralized applications (DApps) and you can leverage blockchain technology for various use cases.

<br />

</div>

## Live Demo

Access live demo link: [https://au.guvent.com](https://au.guvent.com)

API access url: [https://api.guvent.com](https://api.guvent.com)

[![](https://img.youtube.com/vi/NvHxnChKEw4/maxresdefault.jpg)](https://www.youtube.com/watch?v=NvHxnChKEw4)

## Available Scripts

In the project directory, you can run:

### `yarn server`

Runs the server for generate ABI and Bytecode of smart contract.\
Listen on [http://localhost:3300](http://localhost:3300)

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

<br />

## Digital Ocean

### App Spec Example

```
alerts:
- rule: DEPLOYMENT_FAILED
- rule: DOMAIN_FAILED
domains:
- domain: api.guvent.com
  type: PRIMARY
features:
- buildpack-stack=ubuntu-22
ingress:
  rules:
  - component:
      name: au-final
    match:
      path:
        prefix: /
name: sol-compiler
region: fra
services:
- environment_slug: node-js
  github:
    branch: master
    deploy_on_push: true
    repo: guvent/au-final
  health_check:
    port: 3300
  http_port: 3300
  instance_count: 1
  instance_size_slug: basic-xxs
  name: au-final
  run_command: yarn server
  source_dir: /

```
