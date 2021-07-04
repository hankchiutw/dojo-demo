# Dojo 1 demo

This a message board app made by Dojo 1.1x.

Live demo: https://dojo-demo.vercel.app

### Completed features
- Fetch and list messages from LocalStorage.
- Able to send messages.
- Able to remove your own messages.
- Responsive design.
- Simple testing by intern.

### Quick start
```
yarn install
yarn start
```
And open http://localhost:5000 in the browser.

To test:
```
yarn test
```

### Folder structure

I was making the project with the modern MVVM(model-view-view model) pattern and the Clean Architecture mindset.

- `entities.js`

Represent the core business rules. Only one model `Message` for the completed features.

- `controllers`

The application use cases. Mainly the `Message` CRUD.

- `stores`

To access the persitant storage(LocalStorage in the current implementation).


- `widgets`

UI templates and logics.


### Dojo 1 v.s. Angular/React

**Quick summary**

I would say Dojo 1 could be one of the state-of-the-art JS framework in the ES5 age. Many concepts in Dojo 1 are proved to be a correct direction by other frameworks(although I'm not sure who is the pioneer).


Nowadays, thanks to the capabilities of modern browsers, design thinking is quite different when building a JS framework. To list a few:
- ES6 module has become the standard and we don't need a polyfilled module system like AMD. 
- Natively support OOP-like `class`.
- Native `Promise` and `async/await`.


List Dojo 1 pros and cons below:

**Pros**
- Use standard web technologies(HTML, CSS, js). Easy to get started.
  - For React, inevitably you have to know what is JSX.
  - For React and Angular, you probably would hear "change detection" frequently.
- No need for complicated building processes to get your work online.
  - Both React and Angular have their own building system and dev server. Basically, you have to know how webpack works.

**Cons**
- No scoped styling.
  - All styles are global and you have to manage CSS class carefully. Not good for large projects.
  - For React and Angular, CSS styles are encapsulated within the component by default.
- AMD module system is outdated.
  - AMD uses callback, which is less readable comparing to ES6 module.
  - Arguments order matters when calling `define` or `require`. That could be buggy while having many dependencies.
  - Lost chances to use modern libraries that are exposed as ES6 modules. (without some hacky way)
- Limited UI template functionalities.
  - Modern front-end development trends encourage declarative programming with the help of UI templates.
  - Dojo 1 natively supports imperative programming more. (i.e. access and operate DOM directly)
  - Need to manage list update by yourself. Angular has the expression `ngFor` to do this.
  - Cannot bind non-string properties with UI template.
- Has a building system for optimization, but complicated.
  - Tools like webpack, babel, or esbuild are good at that.
