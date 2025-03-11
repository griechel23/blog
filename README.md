# GarrenRiechel.com Monorepo

This is a turbo monorepo hosting several websites.

### GarrenRiechel.com

Top level website that routes to all my projects.

[Website](https://garrenriechel.com)

### The Ok Developer
 
A technical blog for the average software engineer.

[Website](https://theokdeveloper.com)

### Local Host

A local's perspective on community issues facing my tourist-heavy hometown of Breckenridge, Colorado.

[Website](https://thelocalhost.blog)

## Project structure

### `./apps`

Individual websites that can be run independently of each other. These apps contain mostly Vue files that are not shared
between projects.

### `/.packages`

Shared code between apps. Contains Vue, Typescript, and build configurations that are held consistent across each project.
Some shared components such as the [NavBar](packages/components/src/navigation/NavBar.vue) allow for website-specific customization.


## Local development

Bring up all projects by running `npm i && npm run dev` from this top level directory.

## Contributing

While this repository is not open for external pull requests, if you have any blog ideas or submissions, please feel free
to reach out to me at garren@garrenriechel.com.