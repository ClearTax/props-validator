# props-validator

React Props Validators :hospital:

## Installation

`npm i props-validator`

or

`yarn add props-validator`

## Usage

### Importing

Either

```js
import { isLength } from 'props-validator';
```

or

```js
const { isLength } = require('props-validator');
```

### Implementation

```js
...

MyReactComponent.propTypes = {
  name: isLength(5) // checks for the length of the prop value
}

...
```

## Validators

| Validator | Description | Example |
| --- | --- | --- |
| `isLength(max, min)` | matches the length | `isLength(5, 1)` |

### Options

All the validators accepts `options` as the last argument.
Options include - 
| param | description |
| --- | --- |
| `errorMessage` | Error message to show on failure |

#### Example

```js
...

MyReactComponent.propTypes = {
  name: isLength(5, 1, {
    errorMessage: 'MyReactComponent accepts prop name of max and min length of 5, 1 respectively'
  })
}

...
```

## TypeScript

`props-validator` is not written in TypeScript, so while using it with TypeScript, you might face an error for missing type declaration file. Please add a `global.d.ts` file to your project and add this content to it

```ts
declare module 'props-validator'
```
