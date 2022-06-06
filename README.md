## Overview

🥳 本项目使用 `Electron` + `Vue` + `Vite` 来搭建.

## 快速开始

```sh
yarn dev
```

## 进展

目前项目处于刚起步的状态，正在努力码中 🤡

## 目录结构

```tree
├── dist                      Will be generated following the structure of "packages" directory
|   ├── main
|   ├── preload
|   └── renderer
|
├── scripts
|   ├── build.mjs             Build script -> npm run build
|   └── watch.mjs             Develop script -> npm run dev
|
├── packages
|   ├── main                  Main-process source code
|   |   └── vite.config.ts
|   ├── preload               Preload-script source code
|   |   └── vite.config.ts
|   └── renderer              Renderer-process source code
|       └── vite.config.ts
```
