# turborepo starter

## approaches

- **approach 1**: use simple turborepo default structure, use a `main` app to import other sub apps and handle top routing, so that the final build will be in one place only.
  - current implement
  - TODO: lazy loading: https://stackblitz.com/edit/github-y5k5fx-6eowtr
- **approach 2**: build and serve sub apps into separate folders, handle s3 routing & code reuse (for common vendor libraries). `TBD`
  - https://github.com/originjs/vite-plugin-federation


## techstack

- Turborepo
- React
- React Router
- Storybook
- Vite

```
.
├── apps
│  ├── app1
│  ├── app2
│  ├── main
│  └── storybook
├── package.json
├── packages
│  ├── components
│  ├── eslint-config-custom
│  ├── tsconfig
│  └── ui
├── README.md
└── turbo.json
```

- `apps/app1`: sub app, handles it own sub routing
- `apps/app2`: sub app, handles it own sub routing
- `apps/main`: main entry, import other sub apps and handles the top routing
- `apps/storybook`: storybook, for ui checking
- `packages/ui`: basic ui components, like buttons, tabs, cards, ...
- `packages/componetns`: complex shareable components, like main layout, logout confirm dialog, ...
- `packages/tsconfig`: common tsconfig
- `packages/eslint`: common eslint config


## dev

### run the main app & storybook & all sub apps parallelly

```
yarn
yarn dev
```

### develop a specific target

```
yarn dev --filter=app1
yarn dev --filter=app2
yarn dev --filter=main
yarn dev --filter=storybook
// or set it as npm script, like
yarn dev:app1
yarn dev:app2
yarn dev:main
yarn dev:storybook
```

## build

### build the main app

```
yarn build:main
```

Output will be in `apps/main/dist` by default

### build the storybook

```
yarn build:storybook
```

## deploy

...


## references

- https://github.com/vercel/turborepo/tree/main/examples/with-vite
- https://github.com/vercel/turborepo/tree/main/examples/design-system
