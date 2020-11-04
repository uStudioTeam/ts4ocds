![logo](https://raw.githubusercontent.com/uStudioTeam/ts4ocds/main/ts4ocds-banner.png)

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# TS4OCDS

`ts4ocds` is a library of TypeScript interfaces that takes an approach
to befriend large OCDS JSONs with your per-project routine of
writing whole lotta interfaces for them.

## Installation

```shell script
λ npm i @ts4ocds/<package>
```

```shell script
λ yarn add @ts4ocds/<package>
```

> `typescript` must be included in your (dev-)dependencies as well as it is our peer dependency in all packages.

## Usage

`@ts4ocds` namespace contains the [`/core`](packages/core) package which implements the [OCDS standard v1.1.5](https://standard.open-contracting.org/latest/en/).
All other packages implement their respective extension's latest present version.

[`/utils`](packages/utils) package contains useful utility entities that are used in all of our packages under the hood.

Each package is divided into logical modules containing all child entities.
The entities unique to the package/module are exported from its `index.ts` file.

Extension packages can also contain the `lib` folder which adds upon the entities from other packages
(like [`/core`](packages/core) or other extensions);
the `mixins` folder which holds [mixin classes](https://www.typescriptlang.org/docs/handbook/mixins.html).

### Classes

Every class in `ts4ocds` can be constructed like any other JavaScript/TypeScript class.
To facilitate the construction process we made sure every constructor accepts a special
[initializer](packages/utils/src/initializable/initializer.d.ts) object which represents the shape
of a to-be constructed class without its methods (if any are present).

Any other OO aspect is also applicable (inheritance, polymorphism, overriding).

### Interfaces

In the classes land interfaces serve as more specific possible shapes for the entities they represent.
For example, [`Requirement`](packages/requirements/src/requirement/requirement.ts) can have several data types
which can later be discriminated by its supporting interfaces.

### Code lists

OCDS standard heavily relies on code lists which represent the sets of possible accepted
string values (the analogue of the TypeScript's union string type).

We went further by making these code lists the abstractions over the JavaScript's [`Set`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set).

In OCDS there are two types of code lists – open and closed.

#### [`OpenCodeList`](packages/utils/src/code-list/open-code-list.ts)

`OpenCodeList` class serves as an abstraction over the native `Set`.
It just implements all needed properties and methods in a type-safe and immutable way.

#### [`ClosedCodeList`](packages/utils/src/code-list/closed-code-list.ts)

`ClosedCodeList` serves the same purpose as the open one, except it implements TypeScript's `ReadonlySet`
interface making sure nothing can be added to/deleted from its instance.

#### [`CodeList`](packages/utils/src/code-list/code-list.d.ts)

`CodeList` type helps extract the values from the code list's instance in a form of a string union type.

### Mixins

> If you are not familiar with the concept of mixins, make sure to first read this [handbook article](https://www.typescriptlang.org/docs/handbook/mixins.html).

In some cases OCDS extensions extend many entities with same properties.
To make sure we are not repeating ourselves in each of these cases, we made it possible to use mixins
in a place of such extensions.

```typescript
import { WithOptions } from '@ts4ocds/conversions/mixins';
```

### Package-specific entities

```typescript
import { Classification } from '@ts4ocds/core';
/**
 * /core package contains many sub-mobules with their own index.ts files.
 * They are not included in the root index.ts file with the intention not to pollute it.
 */
import { Item } from '@ts4ocds/core/item';

/**
 * Some modules contain type-only entities.
 * We recommend importing them using type-only imports.
 * @see {@link https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export}
 */
import type { FinancialObservation } from '@ts4ocds/metrics/observation';
```

### Extended entities

Entities extending their base counterparts have the same name to make sure we are still operating
on the same entity except now it comes from the OCDS extension package.

```typescript
import { Document } from '@ts4ocds/lots/lib';

/**
 * There are two of each extended classes with the same name as their base,
 * so the index.ts export is not possible here.
 */
import { Requirement } from '@ts4ocds/requirements/lib/options-to-combine';
```

## Contributing

We are open to receive any contributings to our project. If you are willing to contribute,
please make sure to read our [contributing](https://github.com/uStudioTeam/ts4ocds/blob/main/CONTRIBUTING.md)
guide.

If you have noticed bugs or want to propose a new feature/improvement, you should check out
our [issues](https://github.com/uStudioTeam/ts4ocds/issues) section. Every properly
written issue will be attended and reviewed by our team.
