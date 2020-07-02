# Changelog

All notable changes to this project will be documented in this file.

# [1.9.0](https://github.com/d2-projects/d2-admin/compare/v1.8.5...v1.9.0) (2020-04-21)


### Features

* **demo:** 更新色盘样式 ([32421fe](https://github.com/d2-projects/d2-admin/commit/32421fe351d47e56ed1d81e5fd8e5a17c361b1f2))
* 移除无用的 __filename 设置 ([c19ff32](https://github.com/d2-projects/d2-admin/commit/c19ff32287204db680b76999d1c4ae500a6d44a4))
* **message:** 增强 message 提示的配色对比 ([c36fd8e](https://github.com/d2-projects/d2-admin/commit/c36fd8e5a27b574180aa4f055a55a4e12960e0f5)), closes [#243](https://github.com/d2-projects/d2-admin/issues/243)
* 移除无用的 d2-crud v1 提示 ([a494560](https://github.com/d2-projects/d2-admin/commit/a494560c8a6bab6a17bce423286e5593de0f3b8f))
* **element demo:** 移除内置的 elementUI demo ([8b37d3e](https://github.com/d2-projects/d2-admin/commit/8b37d3e77ffd9d713dc8f0a18d416f5606d14c21))
* **search panel:** 关闭搜索面板中列表容器的阴影 ([eb08ca1](https://github.com/d2-projects/d2-admin/commit/eb08ca19d4db485eded5f92491b420d74d3188ef))

## [1.8.5](https://github.com/d2-projects/d2-admin/compare/v1.8.4...v1.8.5) (2020-04-21)


### Bug Fixes

* **tab:** 修复多标签页拖拽排序后首页 tab 变为可关闭的状态，并使用更合理的方法控制首页标签不可关闭 ([606e143](https://github.com/d2-projects/d2-admin/commit/606e14380d66709b0a18bfedb5dd11cf973e81f9))

## [1.8.4](https://github.com/d2-projects/d2-admin/compare/v1.8.3...v1.8.4) (2020-04-19)


### Bug Fixes

* 更新演示表格下载地址和下载方式 ([be64607](https://github.com/d2-projects/d2-admin/commit/be64607cec294337fbcbe7622550846ffcdd351a)), closes [#259](https://github.com/d2-projects/d2-admin/issues/259)

## [1.8.3](https://github.com/d2-projects/d2-admin/compare/v1.8.2...v1.8.3) (2020-04-19)


### Bug Fixes

* **menu-side:** 修复侧边栏菜单自动展开失效 ([72cc381](https://github.com/d2-projects/d2-admin/commit/72cc381a141fa7302039366ef4078ea221ba9900)), closes [#258](https://github.com/d2-projects/d2-admin/issues/258)
* 修复菜单自动折叠的 bug ([06f1acf](https://github.com/d2-projects/d2-admin/commit/06f1acf522c83b966ec244bd2c9bbd9b3972f0a5)), closes [#229](https://github.com/d2-projects/d2-admin/issues/229)


### Performance Improvements

* **menu-side:** 直接使用 $route.fullPath 决定侧边栏菜单激活 ([0ed6922](https://github.com/d2-projects/d2-admin/commit/0ed6922140f673da3a64724a47c442b2a0b9b9b1))
