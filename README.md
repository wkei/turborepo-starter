# turborepo starter

## approach

use turborepo default structure, create a `main` app to **lazy load** other sub apps and handle the top routing, so that the final build will be in one place only.

**TBD:**

to make sub apps be able to deployed separately, use https://github.com/originjs/vite-plugin-federation


## techstack

- Turborepo
- React
- React Router (Lazy Loading)
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
- `apps/main`: main entry, lazy load other sub apps and handles the top routing
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

```
apps/main/dist
├── assets
│  ├── App.[hash].js // sub app, TODO: custom chunk name
│  ├── App.[hash].js // sub app, TODO: custom chunk name
│  ├── index.[hash].js
│  ├── index.[hash].css
│  ├── vendor.[hash].js
│  └── ...assets
├── index.html
└── ...public assets
```

### build the storybook

```
yarn build:storybook
```

## deploy

...


## references

- https://github.com/vercel/turborepo/tree/main/examples/with-vite
- https://github.com/vercel/turborepo/tree/main/examples/design-system
