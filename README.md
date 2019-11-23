# Micro-frontend Demo
## Frontend Meetup with SumoLogic, 23rd Nov 2019



 Project Setup: 6881c1f151b0e1d0476bf4b09f6e28d090a6b02b
-----------------

- Code specific directories
- React
- Webpack
- Babel
- css loaders
- html webpack plugin

Feature organized folders: 371642e5f918f1e318685a1dcc0b189b3dd95556
----------------
- Codebase structure refactor
- Feature specific organisation of code for better understandability

Plugin style features: 74b493f5e41583c480cea42fd2394d222b48a840
----------------
- Application code refactor
- Plugin architecture for top level setups

Monorepo with Independent builds: 6949d9ea5652d732d023b97e6b8fde6667f80ba1
----------------
- Each module converted to an npm package
- Independent build for each


Lerna: efc26f72007101f4b65f7f16f2cf808f14199475
----------------
- Setting up commands to run build and watch for all modules.

Externals:  20e1223a4a6b25a77d1e5670021115f4eb6eede2
----------------
- Configuring webpack to remove interdependencies and common dependencies from packages.

Prod build with config: 5278449027572265db9eff67960e70d78f59cd48
----------------
- Pushing to npm registry
- Creating production builds with specific versions of packages.

