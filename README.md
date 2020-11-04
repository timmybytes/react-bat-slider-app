# The Bat-Slider

![The Bat-Slider Screenshot](./src/img/bat-slider-screenshot.png)

This is a simple React app to display information on the various Bat-Suits seen in film over the years.

Bat-Slider uses [`rc-slider`](https://github.com/react-component/slider) and React Hooks to dynamically display content based on the many Batman suits seen in film since 1943.

The goal of the project was to get more practice using state in React, JSON objects, CSS Flexbox, npm, and GitHub deployment, while having a little fun with my love for superheroes.

## Usage

The Bat-Slider's base is built on top of `create-react-app` with some modified scripts.

### Getting Started

Fork and/or clone locally

```sh
git clone https://github.com/timmybytes/bat-slider.git
```

Start a local server for see chanes live

```sh
# Starts the local development server
npm start
```

### SCSS

The Bat-Slider uses [SCSS](https://sass-lang.com) for styling, which needs to be compiled to CSS before it can be valid in a browser

```sh
# Compile SCSS to CSS -- default is compressed CSS output
npm run scss
# Compile live on each change
npm run scss:watch
```

### Build & Deploy

```sh
# Compiles SCSS into CSS, builds assets for deployment
npm run predeploy
# Builds and deploys to a `gh-pages` branch by default
# Add your preferred homepage for deployment in package.json
npm run deploy
```



## Demo

Check out the demo to see how the Caped Crusader’s duds have evolved over the years.
[Demo](https://timmybytes.github.io/react-bat-slider-app/)

## License

Bat-Slider is under an MIT license.
