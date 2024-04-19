# Music Podcasts Project

This project involves developing a mini-application for listening to music podcasts. The application is a Single Page Application (SPA) that includes three main views and manages state without refreshing the page. The technologies used are:

- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/en/main)
- [@tanstack/react-query](https://tanstack.com/query/latest)
- [axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [happy-dom](https://github.com/capricorn86/happy-dom)
- [msw](https://mswjs.io/)

---

## Installation

### Clone the repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/ValiSum/music-podcasts
cd music-podcasts
```

### Environment Configuration

To set up the project environment, you need to rename the `.env.example` file to `.env`. Make sure you are in the main project folder `music-podcasts`:

```bash
mv .env.example .env
```

### Install dependencies

Install the dependencies with your preferred package manager:

```bash
# with yarn
yarn install

# with npm
npm install
```

### Execution

#### Development mode

```bash
# with yarn
yarn run dev

# with npm
npm run dev
```

Open your browser and visit http://localhost:3000/ to see the project in development mode.

#### Production Mode

```bash
# with yarn
yarn run build

# with npm
npm run build
```

After the build is complete, you can preview the application in production mode using:

```bash
# with yarn
yarn run preview

# with npm
npm run preview
```

Open your browser and visit http://localhost:3000/ to see the project in production mode.

---

## Testing

To run all tests you have to use the following command:

```bash
# with yarn
yarn run test

# with npm
npm run test
```

To see the metric of the percentage of code analyzed through the tests, you can run the following command:

```bash
# with yarn
yarn run coverage

# with npm
npm run coverage
```

---

## Project development

### Initial setup and installation

Base project installation, initial configuration of aliases, and installation of libraries like [Tailwind CSS](https://tailwindcss.com/).

### Route structure definition

Installation of [React Router](https://reactrouter.com/en/main) and initial definition of the route structure based on requirements.

### Main view design and functionality

Design of the main layout and podcasts view `/` using mock data. Implementation of functionality with [React Router](https://reactrouter.com/en/main) `loader` to fetch and display data from the api endpoint. Use of [@tanstack/react-query](https://tanstack.com/query/latest) to cache and reuse this data, concluding with the implementation of a search filter.

### Single podcast view design and functionality

Design and functionality of the podcast view at `/podcast/:podcastId`, following the previous pattern.

### Single episode view design and functionality

Design of the episode view at `/podcast/:podcastId/episode/:episodeId`, sharing the layout with the previous view and following the same functionality pattern.

### Final changes

Design and implementation of the error handling view. Restructuring of some directories and components. Final adjustments to component design.

### Add testing

Added some unit tests using [Vitest](https://vitest.dev/) together with [Testing Library](https://testing-library.com/) and [msw](https://mswjs.io/) to be able to capture and mock requests. There has also been some changes in the code structure to facilitate the integration of the tests.
