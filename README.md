# ankr.dk

My personal website. Built using Typescript and HTML.

## Testing

Run test suite that utilizes vitest.

```
npm test
```

## Building

Builds typescript and copy any HTML files from `src/` into `dist/`.

```
npm run build
```

## Deploy

The `deploy.yml` workflow will run on _pushes_ to `main` branch and put latest release on [ankr.dk](https://ankr.dk) & [ankr.github.io](http://ankr.github.io).
