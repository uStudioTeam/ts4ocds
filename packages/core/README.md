# @ts4ocds/core

`/core` package implements the [OCDS standard v1.1.5](https://standard.open-contracting.org/latest/en/).

It includes different small to medium parts of the standard skipping those which shape/interface is too
hard to predict beforehand (lifecycle-dependent large entities such as `Tender` or `Release`).

## Installation

```shell script
λ npm i @ts4ocds/core
```

```shell script
λ yarn add @ts4ocds/core
```

> `typescript` must be included in your (dev-)dependencies as well as it is a peer dependency.

## Usage

To use this package, consider importing standalone entities from its root `@ts4ocds/core`, and the sub-mobules
from their own directory `@ts4ocds/core/item`.

The majority of entities contain several related sub-entities thus being grouped together within their own
sub-mobules.
