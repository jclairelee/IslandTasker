# Fiverr

This was a group project at BrainStation. Our Team called

[Demo link](https://www.youtube.com/watch?v=mkDwSbr5Rcg)

[Frontend](https://github.com/jclairelee/inStock) | [Backend](https://github.com/jclairelee/inStock-server)

![Inventory List](./src/assets/screenshot/2.png)

## Features

#### Client >>

- navigation bar that chganges its background color and scrollable menu
- infinite categories slider
- project slider
- gig cards
- conditional search functionalities
- reviews
- orders
- messages

## Tech Stack

### Frontend:

- react
- sass
- vite
- react-router-dom

### Backend:

- Node.js
- Express.js
- Knex.js
- mySQL database

## Installation

### backend Setup

1. Install server dependencies:

   Run `npm install` from inside the directory:

   ```bash
   $ npm install
   ```

2. Create a new MySQL Database called 'instock'.

3. Set environment variables:

   Create a `.env` file as:

   ```shell
   DB_LOCAL_DBNAME = <your_db_username>
   DB_LOCAL_USER = <your_db_password>
   DB_LOCAL_PASSWORD = <your_db_password>
   ```

4. Seed your data

   ```bash
   $ npm run migrate
   ```

5. Run seeds
   ```bash
   $ npm run seed
   ```
6. Start the server:
   ```bash
   $ npm start
   ```

### frontend Setup

7. Install client dependencies:

   Run `npm install` from inside the directory.

   ```bash
      $ npm install
   ```

8. Start the React app:
   ```bash
   $ npm start
   ```

### New learning

- Navbar

  1. when scrolling, navbar becomes white and bottom menu list appears
     => set changes of css style depends on state
  2. check if scrolling occurs
     2-1. make a function that changes the state depends on the screen movement
     => window.scrollY>0?setIsActive(true):setActive(false) \* tips:
     - For minor changes, eg. button colors, just use !important in css rather than adding state changes.
     - // z-index: 999 => the element is always on top
       2-2. whenever there is scrolling event on the screen, start checkScroll function.
       => window.addEventListener("scroll", checkScroll);
  3. add logged-in-user screen (seller side nav)
     only sellers can see gigs menu
  4. if not in main homepage "/", show white nav

- [New Version React Router](https://reactrouter.com/en/main/start/tutorial)

- [React Infinite Slider](https://www.npmjs.com/package/infinite-react-carousel)

1. create a w data that includes imgs and title that goes in the catcard
2. using those data, map through the cards and render inside slide component

1:49:02 PM [vite] warning:
/Users/claire/Desktop/fiverr-clone/node*modules/.vite/deps/chunk-R353GS4W.js
4287| default: () => default2
4288| });
4289| import { default as default2 } from "/Users/claire/Desktop/fiverr-clone/node_modules/infinite-react-carousel/lib/carousel/style.css";
| ^
4290| import * as style*star from "/Users/claire/Desktop/fiverr-clone/node_modules/infinite-react-carousel/lib/carousel/style.css";
4291| var init_style = \_\_esm({
Default and named imports from CSS files are deprecated. Use the ?inline query instead. For example: import { default as default2 } from "/Users/claire/Desktop/fiverr-clone/node_modules/infinite-react-carousel/lib/carousel/style.css?inline"
Plugin: vite:import-analysis
File: /Users/claire/Desktop/fiverr-clone/node_modules/.vite/deps/chunk-R353GS4W.js?v=f02a8c45
1:49:02 PM [vite] warning:
/Users/claire/Desktop/fiverr-clone/node_modules/.vite/deps/chunk-R353GS4W.js
4288| });
4289| import { default as default2 } from "/Users/claire/Desktop/fiverr-clone/node_modules/infinite-react-carousel/lib/carousel/style.css";
4290| import * as style_star from "/Users/claire/Desktop/fiverr-clone/node_modules/infinite-react-carousel/lib/carousel/style.css";
| ^
4291| var init_style = \_\_esm({
4292| "vite:dep-pre-bundle:external-conversion:/Users/claire/Desktop/fiverr-clone/node_modules/infinite-react-carousel/lib/carousel/style.css"() {
Default and named imports from CSS files are deprecated. Use the ?inline query instead. For example: import \* as style_star from "/Users/claire/Desktop/fiverr-clone/node_modules/infinite-react-carousel/lib/carousel/style.css?inline"
Plugin: vite:import-analysis
File: /Users/claire/Desktop/fiverr-clone/node_modules/.vite/deps/chunk-R353GS4W.js?v=f02a8c45

module "/Users/claire/Desktop/fiverr-clone/node_modules/infinite-react-carousel/lib/index"
Could not find a declaration file for module 'infinite-react-carousel'. '/Users/claire/Desktop/fiverr-clone/node_modules/infinite-react-carousel/lib/index.js' implicitly has an 'any' type.
Try `npm i --save-dev @types/infinite-react-carousel` if it exists or add a new declaration (.d.ts) file containing `declare module 'infinite-react-carousel';`ts(7016)
