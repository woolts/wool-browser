# Wool Browser

This is a collection of packages for creating websites and web apps with [wool](https://github.com/woolts/wool).

## Getting Started

The `wool-browser` command line tool composes `wool` itself to create your web bundles.

```
wool-browser make .
```

```
wool-browser make src/index.ts
wool-browser make . --outDir dist
```

## Philosophy

Wool Browser is a disappearing framework in a similar vein to [Svelte](https://svelte.technology/). When compiled, the framework code that is required is embedded into your app and the rest is ditched.

It is a functional library, with a single store of state at the root and stateless, declarative view functions that describe how that state is presented.

It comprises three packages:

- Wool Program
- Wool HTML
- Wool Layout

## Wool Browser / Program

```ts
import { sandbox } from 'wool-browser/program';

const init = () => 0;
const view = (model) => div([], 'Hello!');
const update = (model, msg) => model;

export default sandbox({ init, view, update });
```

## Wool Browser / HTML

A functional html library.

```ts
import { div, style, text } from 'wool-browser/html';

// This would be imported into your program as the `view` function
export default (model) =>
  div(
    [
      style('background-color', 'red'),
      style('height', '90px'),
      style('width', '100%'),
    ],
    [text`Hello, ${model.name}!`],
  );
```

## Wool Browser / UI

A functional layout library that composes `wool/html`.

```ts
import { layout, column, el, text } from 'wool-browser/ui';

// This would be imported into your program as the `view` function
export default (model) =>
  layout(
    [],
    column([spacing(10)], [
      el([], text`Hello`),
      el([], text`${model.name}!`)
    ]),
  );
```
