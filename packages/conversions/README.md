# @ts4ocds/conversions

`/conversions` package implements the [OCDS Conversions](https://github.com/PaulBoroday/eOCDS-conversions) extension.

## Installation

```shell script
λ npm i @ts4ocds/conversions
```

```shell script
λ yarn add @ts4ocds/conversions
```

> `typescript` must be included in your (dev-)dependencies as well as it is a peer dependency.

## Usage

Other than implementing extension-specific entities, this package also extends some classes from other extensions.
These can be found inside the [`/lib`](https://github.com/uStudioTeam/ts4ocds/tree/main/packages/conversions/src/lib) folder.

Also, [`WithOptions`](https://github.com/uStudioTeam/ts4ocds/blob/main/packages/conversions/src/mixins/with-options.ts) mixin which adds the `options` field to the mixed-in entity
is provided by this package.
