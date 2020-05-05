	
	# React Monorepo

	  

	This is a sample project illustrating the structure of a project using react, react-native, styled-components, styled-system with yarn workspaces

	  

	**GOALS**

	- Efficiently build, manage and maintain a design system using type-checked tokens for style props fully integrated with the app theme
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
	 
	TODO: add highlights of integrating react-native-web and react-app-rewired

	# UI-ENGINE

	This is the design system's core.
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

	Where  `default`, `tablet`, `desktop`,  `mobile-margin`, `tablet-margin` and `desktop-margin` are theme variables and are type-checked

	**TYPESCRIPT SUPPORT**
	Unfortunately styled-system does not have full typescript support for all of this features, so this module, at the moment, is based on a custom `styled-system.d.ts` file. Another approach is to totally fork styled-system and add the a built-in definition file

	**HOW IT WORKS**
	In order to work, styled-system wants:
	 1. A theme object respecting a specific schema
	 2. The values of that object being of type "`ObjectOrArray`", which are arrays with custom properties [https://styled-system.com/responsive-styles/#using-objects](https://styled-system.com/responsive-styles/#using-objects)

	The main purpose of our module is to 
	- Abstract the creation of such structure 
	- Provide a custom `ThemeProvider` that:
		1) takes in input a set of key-value pairs
		2) generates the theme object to be consumed by styled-system 
		3) return a styled-components `ThemeProvider` instance (specific for web or mobile environment) which takes in input the previously generated theme 
	- Provide mediaQuery utilities to easily add responsive styles with styled-components using type-checked syntax for breakpoint names
	- Provide styled-system ready basic building blocks:
		- **Box**: a div abstraction
			- **FlexBox**: a `Box` with flex and default orientation (row on web, column on mobile)
			- **VFlexBox**: a `Box` with flex and vertical orientation
			- **HFlexBox**: a `Box` with flex and horizontal orientation
		- **Grid**: a full width Box 
		- **Row**: a Box with horizontal flex behaviour
		- **Col**: mostly like `Box`, with `boxSizing="border-box"`
			- **FlexCol**: a `Col` with flex and default orientation (row on web, column on mobile)
			- **VFlexBox**: a `Col` with flex and vertical orientation
			- **HFlexBox**: a `Col` with flex and horizontal orientation

	> `Col` and its variants may be almost useless since they are almost
	> identical to `Box`, but their main purpose is to be semantically
	> meaning full when building a `Grid`, for example

	    <Grid>
	      <Row>
	        <Col width={{ default: 1, desktop: 1 / 2 }} />
	        <Col width={{ default: 1, desktop: 1 / 2 }} />
	      </Row>
	      <Row>
	        <Col width={{ default: 1, desktop: 1 / 3 }} />
	        <Col width={{ default: 1, desktop: 1 / 3 }} />
	        <Col width={{ default: 1, desktop: 1 / 3 }} />
	      </Row>
	    </Grid>

	# APP-UI

	This is the package where all the UI related code is located: theme declaration, components and other UI related stuff. Since it is a monorepo, the code containing the UI specs and components must be in a dedicated, shared package.

	In order to develop a mobile only or web only application, this code can just be part of the main project, anyway it always is a good practice to keep it separated so you are ready for any potential future need.

	> At the moment, even though react-native-web is used, we cannot use RN
	> components in the web project because styled-system responsive styles
	> do not work on RN.

	**So why is react-native-web used?**
	It is used because it makes possible to take benefit of [react-native file naming for platform specific code](https://reactnative.dev/docs/platform-specific-code#native-specific-extensions-ie-sharing-code-with-nodejs-and-web) on the web project.

	This allow to create for example the following structure:
	```
	+-- Box
	|   +-- Box.tsx
	|   +-- Box.web.tsx
	|   +-- index.tsx
	```
	In those files a specific implementations is created for the specific platform, but all implementations have the the interface.

	Let's look to **`Box.tsx`**

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



	And **`Box.web.ts`**


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
	It's almost the same implementation except for the fact that the first uses `View` and the latter uses `div`

	And now **`index.ts`**

	    import React from "react";
	    import { BackgroundProps, BorderProps, ColorProps, FlexboxProps, LayoutProps, MarginProps, PositionProps, SpaceProps } from "styled-system";
	    import { Box } from "./Box";
	    
	    export type BoxProps = LayoutProps
	      & FlexboxProps
	      & BorderProps
	      & SpaceProps
	      & MarginProps
	      & ColorProps
	      & BackgroundProps
	      & PositionProps
	    
	    export { Box };

	Note that the following import

	    import {Box) from "./Box";

	Will pick the export from `Box.tsx` on mobile and `Box.web.tsx` on the web

	We can now write the following in both a React Native or React JS environment

	    import {Box} from "@my-awesome-module/components"
	    
	    const MyComponent = () => {
	        return <Box 
	           backgroundColor="your-theme-color"
	           borderColor="your-other-theme-color"
	        >
	        This is am awesome box with custom style properties
	         </Box>
	    }

	And it will work transparently on web and mobile

	## THEMING
	The theming, and its type checking, is implemented by overriding the interfaces declared in the custom `styled-system.d.ts` file.

	### BREAKPOINTS

	    import { ThemeBreakpoints } from "styled-system";
	    
	    declare module "styled-system" {
	    
	      export interface ThemeBreakpoints {
	        // default is needed by styled-system in order to work
	        default: number | string,
	        mobileM: number | string,
	        mobileL: number | string,
	        tablet: number | string,
	        desktopLow: number | string,
	        desktopMid: number | string,
	        desktop: number | string,
	        desktopLarge: number | string
	      }
	    }
	    
	    /**
	     * The logic is mobile first, so the first breakpoint is alway from 0 to the first declared one
	     */
	    export const breakpointsMap: ThemeBreakpoints = {
	      default: "0px",
	      mobileM: "375px",
	      mobileL: "425px",
	      tablet: "600px",
	      desktopLow: "1024px",
	      desktopMid: "1366px",
	      desktop: "1440px",
	      desktopLarge: "1620px"
	    };
	    
	    export default breakpointsMap;

	### COLORS

	    import { ThemeColors } from "styled-system";
	    
	    declare module "styled-system" {
	    
	      export interface ThemeColors {
	        primary: string;
	        secondary: string;
	        secondaryLight: string;
	        secondaryDark: string;
	        success: string;
	        warning: string;
	        error: string;
	      }
	    
	    }
	    
	    export const themeColors: ThemeColors = {
	      primary: "#191e64",
	      secondary: "#ff618d",
	      secondaryLight: "#ff7c32",
	      secondaryDark: "#ff618d",
	      success: "#52c41a",
	      warning: "#faad14",
	      error: "#e84118"
	    };

	### SIZES

	    import { ThemeSizes } from "styled-system";
	    
	    /**
	     * Values used for
	     *
	     * width, height, minWidth, maxWidth, minHeight, maxHeight, size
	     */
	    declare module "styled-system" {
	      export interface ThemeSizes {
	        HEADER_DESKTOP: number,
	        HEADER_MOBILE: number;
	      }
	    }
	    
	    export const sizesMap: ThemeSizes = {
	      HEADER_DESKTOP: 150,
	      HEADER_MOBILE: 70
	    };

	### SPACES

	    import { ThemeSpaces } from "styled-system";
	    
	    declare module "styled-system" {
	    
	      export interface ThemeSpaces {
	        NONE: number;
	        XS: number;
	        S: number;
	        M: number;
	        L: number;
	        XL: number;
	        XXL: number;
	        DESKTOP_MAIN_PADDING: number | string;
	        DESKTOP_LOW_PADDING: number | string;
	        DESKTOP_LARGE_MAIN_PADDING: number | string;
	        TABLET_MAIN_PADDING: number | string;
	        MOBILE_MAIN_PADDING: number | string;
	      }
	    
	    }
	    
	    export const spacesMap: ThemeSpaces = {
	      NONE: 0,
	      XS: 2,
	      S: 4,
	      M: 8,
	      L: 16,
	      XL: 32,
	      XXL: 64,
	      DESKTOP_MAIN_PADDING: "130px",
	      DESKTOP_LOW_PADDING: "118px",
	      DESKTOP_LARGE_MAIN_PADDING: "170px",
	      TABLET_MAIN_PADDING: "110px",
	      MOBILE_MAIN_PADDING: 25
	    };

	### BORDERS

	    import { ThemeBorders, ThemeBorderWidths } from "styled-system";
	    declare module "styled-system" {
	    
	      export interface ThemeBorders {
	        redThin: string,
	        redTick: string,
	        [key: string]: string
	      }
	    
	      export interface ThemeBorderWidths {
	        thinerBorder: number
	        thinBorder: number
	        tickBorder: number,
	        [key: string]: number
	      }
	    }
	    
	    export const themeBordersMap: ThemeBorders = {
	      redThin: "2px solid red",
	      redTick: "10px solid red"
	    };
	    
	    export const themeBorderWidthsMap: ThemeBorderWidths = {
	      thinerBorder: 1,
	      thinBorder: 2,
	      tickBorder: 4
	    };

	# COMMONS
	A module containing all shared logic.
	TODO: illustrate redux structure
	  

	# TODO
	- imports refactor
	- setup build scripts
	- better eslint shared configuration
	- change default files to web instead of mobile so the module can be used on web without react-native-web

	  







