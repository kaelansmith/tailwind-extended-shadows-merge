# tailwind-extended-shadows-merge

A `tailwind-merge` plugin for the [`tailwind-extended-shadows`](https://github.com/kaelansmith/tailwind-extended-shadows) package, enabling its custom shadow classes to properly merge with the built-in Tailwind shadow classes.

## Install

```bash
npm i tailwind-extended-shadows-merge
```

## Configure

```js
import { extendTailwindMerge } from "tailwind-merge";
import { withExtendedShadows } from "tailwind-extended-shadows-merge";

export const twMerge = extendTailwindMerge(withExtendedShadows);
```
