# Ratatoskr UI

Ratatoskr UI is a UI kit for react designed with flexibility in mind.
With ever increase demand of standardizing component, a UI component should be
more versatile and flexible. Below are checklist of problems Ratatoskr UI are trying to solve

- Need for rigid rule for each underlying component<br>
  The answer is to optimize for themeability. That doesn't mean UI Kit have to be themeable from start, but to use standard theming that scale up, e.g. what styled-system provides. A newer term for this is [Design Graph](https://jxnblk.com/blog/design-graph/).

- Accessibility (a11y)<br>
  Accessibility is mandatory nowadays. Because statistically speaking, As per 2020, roughly 20% of internet (1 out of 5 person) user is disabled person. It would be fatal for someone who doesn't keep an eye with this concern. To increase efficiency, We doesn't have to bother with reinventing the wheels, since there are a lot of headless component can be used as a foundation.

- Too bloated design tokens<br>
  It's really hard to maintain UI Kit that does have a lot of design tokens. Additionally when we have to create another separate theme that radically different with the one we already have. So centralized and concise design token is the key to tackle this problem. Another good thing is we could utilize [Styled System](https://styled-system.com/) to quickly build customized components with constraint-based style props based on scales defined in central theme.

## Powered By

- 🏎 [Turborepo](https://turborepo.org) — High-performance build system for Monorepos
- 🚀 [React](https://reactjs.org/) — JavaScript library for user interfaces
- 🛠 [Tsup](https://github.com/egoist/tsup) — TypeScript bundler powered by esbuild
- 📖 [Storybook](https://storybook.js.org/) — UI component environment powered by Vite
- ✨ [TypeScript](https://www.typescriptlang.org/) — static type checking
- 📏 [ESLint](https://eslint.org/) — Code linting
- 💖 [Prettier](https://prettier.io) — Code formatting
- ⏰ [Changesets](https://github.com/changesets/changesets) — Managing versioning and changelogs
- 👷 [GitHub Actions](https://github.com/changesets/action) — Fully automated package publishing
- 💎 [Styled System](https://styled-system.com/) — Forcing style props
- 🐶 Husky & Lint Staged (COMING SOON) — Run scripts on staged files before they are committed
