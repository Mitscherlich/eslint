# My ESLint config presets

> forked from [@antfu/eslint-config](https://github.com/antfu/eslint-config)

- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- TypeScript, Vue, React out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config

## Usage

### Install

```bash
pnpm add -D eslint @m9ch/eslint-config-all
```

Add to your project `.eslintrc.js`:

```js
module.exports = {
  extends: ['@m9ch/all'],
}
```

---

copyleft and made with :heart: by [Mitscherlich](https://githuh.com/Mitscherlich)
