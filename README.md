# Samurai UI

- highly opinionated UI Component library using `React` and `Styled Components`
- uses `@react-aria` and `@react-stately` under the hood
- it only focuses on styling and DX

**This project is WIP.**

## Components to Build

- [x] `Button`
- [x] `Container`
- [x] `Flex`
- [x] `Grid`
- [ ] `Card`
- [ ] `List`
- [ ] `ComboBox` (Picker)
- [ ] `DatePicker`
- [ ] `Icons`
- [ ] `Input` (text, textarea, radio, switch, checkbox)
- [ ] `Progress`
- [ ] `Slider`
- [ ] `Tabs`
- [ ] `Table`
- [ ] `React Native Support`

## Get Started

```
npm install samurai-ui

//or

yarn add samurai-ui
```

You need to set `ThemeProvider` to use UI components.

```
import React from 'react'
import { ThemeProvider, Theme, lightTheme, darkTheme } from 'samurai-ui'

function App({ children }) {
  const [lightMode, setLightMode] = React.useState<boolean>(true)
  const toggleTheme = () => setLightMode(!lightMode)

  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  )
}

```

## Documentation

**WIP**
