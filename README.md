
# React Monorepo

  

This is a sample project illustrating the structure of a project using react, react-native, styled-components, styled-system with yarn workspaces

  

**GOALS**

- Efficiently build, manage and mantain a design system

- Maximize code sharing across react and react-native

- Cross module logic sharing

  

**MODULES**

 - apps
	 - app
	 - web
 - packages
	 - app-ui
	 - commons
	 - ui-engine

  
**apps/app**: the mobile app

**apps/web**: the web app

**packages/app-ui**: all the shared ui components

**pacakges/ui-engine**: the `styled-system` bases UI engine

**packages/commons**: logic related code (redux, selectors, api call ecc..)

  
  

# APP

  

This is a classical react-native app. The only customization needed to make it work in a monorepo environment are:

 - a custom  `metro.config.js`  file
 - a `nohoist` section in `package.json`
  

# WEB

  This a classic CRA application, plugged with `react-native-web` and `react-app-rewired`.
 

# UI-ENGINE

This is the design system core.
At its core, the module uses styled-system, which is very useful to add style props features with awesome theme integration and responsive styles.

With [styled-system's responsive styles](https://styled-system.com/responsive-styles#using-objects) for example, you can write code like this:

     <YourOwesomeComponent 
      width={{
          default: 1,
          tablet: 1:/ 2,
          desktop:1 / 3}
      }
    
      margin = {{
        default: "mobile-margin",
        tablet: "tablet-margin",
        desktop: "desktop-margin"
      }}
    />

With the breakpoint names and  tokens `mobile-margin` , `tablet-margin` and `desktop-margin` being defined in the app theme

**TYPESCRIPT SUPPORT**: Unfortunately styled-system does not have full typescript support for all of this features, so this module is based on a custom `styled-system.d.ts` file

# APP-UI

This is the package where all the UI related code is located: theme declaration, components and other UI related stuff.

> At the moment, even though we use react-native-web, we cannot use RN
> components in the web project because styled-system responsive styles
> do not work on RN.

**So why is react-native-web used?**
It is used because it make it possible to take benefit of [react-native file naming for platform specific code](https://reactnative.dev/docs/platform-specific-code#native-specific-extensions-ie-sharing-code-with-nodejs-and-web) on the web project.

This made it possible to create the following files:
```
+-- Box
|   +-- Box.tsx
|   +-- Box.web.tsx
|   +-- index.tsx
+-- Col
|   +-- Col.tsx
|   +-- Col.web.tsx
|   +-- index.tsx
+-- Grid
|   +-- Grid.tsx
|   +-- Grid.web.tsx
|   +-- index.tsx
+-- Row
|   +-- index.tsx
|   +-- Row.tsx
|   +-- Row.web.tsx
```
Let's look for example to **Box.tsx**

    import shouldForwardProp from "@styled-system/should-forward-prop";
    import styled from "styled-components/native";
    import { background, border, color, flexbox, layout, margin, position, space } from "styled-system";
    import { BoxProps } from ".";
    
    export const Box = styled.View.withConfig<BoxProps>({
      shouldForwardProp
    }) <BoxProps>`
        ${layout}
        ${flexbox}
        ${border}
        ${space}
        ${margin}
        ${color}
        ${background}
        ${position}
    `;



And **Box.web.ts**


    import shouldForwardProp from "@styled-system/should-forward-prop";
    import styled from "styled-components";
    import { background, border, color, flexbox, layout, margin, position, space } from "styled-system";
    import { BoxProps } from ".";
    
    export const Box = styled.div.withConfig<BoxProps>({
      shouldForwardProp
    }) <BoxProps>`
        ${layout}
        ${flexbox}
        ${border}
        ${space}
        ${margin}
        ${color}
        ${background}
        ${position}
    `;
It's almost the same implementation except for the fact that the firtst uses `View` and the latter uses `div`

It will then be exported from Box.index.tsx

    export {Box) from "./Box";

This will pick the export from `Box.tsx` on mobile and `Box.web.tsx` on the web

We can now write the following in both a React Native or React JS environment

    import {Box} from "@my-awesome-module/components"
    
    const MyComponent = () => {
        return <Box></Box>
    }

And it will work transparently on web and mobile

For this reason this components have been created:
- Box: 
	- `div` on the web
	- `View` on mobile
- Row: a `Box` with flex and horizontal orientation
- Col: a `Box` with flex and vertt orientation
What's missing:
- make styled-system responsive style work with RN


# COMMONS

  

# TODO
- imports refactor
- setup build scripts
- better eslint shared configuration

  



