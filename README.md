## Overview

๐ฅณ ๆฌ้กน็ฎไฝฟ็จ `Electron` + `Vue` + `Vite` ๆฅๆญๅปบ.

## ๅฟซ้ๅผๅง

```sh
yarn dev
```

## ่ฟๅฑ

็ฎๅ้กน็ฎๅคไบๅ่ตทๆญฅ็็ถๆ๏ผๆญฃๅจๅชๅ็ ไธญ ๐คก

## ็ฎๅฝ็ปๆ

```tree
โโโ dist                      Will be generated following the structure of "packages" directory
|   โโโ main
|   โโโ preload
|   โโโ renderer
|
โโโ scripts
|   โโโ build.mjs             Build script -> npm run build
|   โโโ watch.mjs             Develop script -> npm run dev
|
โโโ packages
|   โโโ main                  Main-process source code
|   |   โโโ vite.config.ts
|   โโโ preload               Preload-script source code
|   |   โโโ vite.config.ts
|   โโโ renderer              Renderer-process source code
|       โโโ vite.config.ts
```
