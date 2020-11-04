# @ts4ocds/lots

`/lots` package implements the [OCDS Lots](https://extensions.open-contracting.org/en/extensions/lots/master/) extension.

## Installation

```shell script
λ npm i @ts4ocds/lots
```

```shell script
λ yarn add @ts4ocds/lots
```

> `typescript` must be included in your (dev-)dependencies as well as it is a peer dependency.

## Usage

Other than implementing extension-specific entities, this package also extends some classes from standard.
These can be found inside the [`/lib`](src/lib) folder.

Also, [`WithRelatedLot`](src/mixins/with-related-lot.ts) and [`WithRelatedLots`](src/mixins/with-related-lots.ts) mixins
which add respective fields to the mixed-in class are provided by this package.
