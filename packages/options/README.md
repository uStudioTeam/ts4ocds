# @ts4ocds/options

`/options` package implements the [OCDS Options](https://extensions.open-contracting.org/en/extensions/options/master/) extension.

## Installation

```shell script
λ npm i @ts4ocds/options
```

```shell script
λ yarn add @ts4ocds/options
```

> `typescript` must be included in your (dev-)dependencies as well as it is a peer dependency.


## Usage

Other than implementing extension-specific entities, this package also extends some classes from other extensions.
These can be found inside the [`/lib`](https://github.com/uStudioTeam/ts4ocds/tree/main/packages/options/src/lib) folder.

Also, [`WithOptionGroups`](https://github.com/uStudioTeam/ts4ocds/tree/main/packages/options/src/mixins/with-option-groups.ts) and [`WithOptionsToCombine`](https://github.com/uStudioTeam/ts4ocds/tree/main/packages/options/src/mixins/with-options-to-combine.ts) mixins
which add respective fields inside the `optionDetails` field to the mixed-in class are provided by this package.
