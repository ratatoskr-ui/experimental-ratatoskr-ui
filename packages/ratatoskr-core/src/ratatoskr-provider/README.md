# Ratatoskr Provider

> Provides necessary resets and applying theme of ratatoskr-ui.

## Usage

Wrap your entire app with `RatatoskrProvider`. This will apply the theme provider as well as the default global styles.

```jsx
import { RatatoskrProvider } from "@ratatoskr-ui/core";

export default function App({ children }) {
  return <RatatoskrProvider>{children}</RatatoskrProvider>;
}
```

If you would like to use additional styles for `RatatoskrProvider`, add the `disableInjection` prop to `RatatoskrProvider` and add your custom styles as follows.

```jsx
import { css } from "styled-components";
import { RatatoskrProvider, injectGlobalStyles } from "@ratatoskr-ui/core";

const styles = css`
  [data-reach-tooltip] {
    z-index: 1;
    pointer-events: none;
    position: absolute;
    padding: 0.25em 0.5em;
    box-shadow: 2px 2px 10px hsla(0, 0%, 0%, 0.1);
    white-space: nowrap;
    font-size: 85%;
    background: #f0f0f0;
    color: #444;
    border: solid 1px #ccc;
  }
`;

const { GlobalStyles } = injectGlobalStyles(styles);

export default function App({ children }) {
  return (
    <RatatoskrProvider disableInjection>
      <GlobalStyles />
      {children}
    </RatatoskrProvider>
  );
}
```
