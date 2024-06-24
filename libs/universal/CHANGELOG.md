# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.2.1](https://github.com/tinkoff/ng-web-apis/compare/@ng-web-apis/universal@3.0.2...@ng-web-apis/universal@3.2.1) (2024-06-24)

**Note:** Version bump only for package @ng-web-apis/universal

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.0.2](https://github.com/tinkoff/ng-web-apis/compare/@ng-web-apis/universal@3.0.1...@ng-web-apis/universal@3.0.2) (2023-06-27)

### Bug Fixes

- **universal:** add secondary entry point for mocks ([#112](https://github.com/tinkoff/ng-web-apis/issues/112))
  ([9e01f2d](https://github.com/tinkoff/ng-web-apis/commit/9e01f2d8bf2ee1ae2f1a87c5ab7560e23172ed63))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.0.1](https://github.com/tinkoff/ng-web-apis/compare/@ng-web-apis/universal@3.0.0...@ng-web-apis/universal@3.0.1) (2023-06-26)

**Note:** Version bump only for package @ng-web-apis/universal

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 2.2.0 (2023-06-26)

### Features

- **audio:** remove `MediaStreamTrackAudioSourceNode` ([#91](https://github.com/tinkoff/ng-web-apis/issues/91))
  ([f49ad49](https://github.com/tinkoff/ng-web-apis/commit/f49ad4937f8bd376c4f439980cb3376c65f408d2))
- geolocation ([#79](https://github.com/tinkoff/ng-web-apis/issues/79))
  ([1f906a8](https://github.com/tinkoff/ng-web-apis/commit/1f906a8f439ccf31e7c55811889c15f204033c2e))
- midi ([#83](https://github.com/tinkoff/ng-web-apis/issues/83))
  ([273be2a](https://github.com/tinkoff/ng-web-apis/commit/273be2a946944c463ed475f4d91688cd0f7d8593))
- workers ([#89](https://github.com/tinkoff/ng-web-apis/issues/89))
  ([7a7a87c](https://github.com/tinkoff/ng-web-apis/commit/7a7a87c3762a19567af35eab7adbf60fd5b647a3))

# Changelog

All notable changes to this project will be documented in this file. See
[standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.1.0](https://github.com/ng-web-apis/universal/compare/v2.0.0...v2.1.0) (2022-12-14)

### Features

- provide typesafe mocks for `SSR_USER_AGENT` & `SSR_LOCATION`
  ([#41](https://github.com/ng-web-apis/universal/issues/41))
  ([ee98d1b](https://github.com/ng-web-apis/universal/commit/ee98d1b8cc6685947f8471d6733d5573f993815b))

## [2.0.0](https://github.com/ng-web-apis/universal/compare/v1.13.0...v2.0.0) (2022-01-28)

### Features

- update to Angular 12 and Ivy distribution ([#25](https://github.com/ng-web-apis/universal/issues/25))
  ([a3e9eaa](https://github.com/ng-web-apis/universal/commit/a3e9eaa63931141d9f78d4d8d326c77f26562f61))

## [1.13.0](https://github.com/ng-web-apis/universal/compare/v1.12.0...v1.13.0) (2022-01-28)

### Features

- **MEDIA_DEVICES:** add SSR mock for the new token
  ([7232e1b](https://github.com/ng-web-apis/universal/commit/7232e1b15d55941cd6d0b3fca8fb457719990547))

## [1.12.0](https://github.com/ng-web-apis/universal/compare/v1.9.5...v1.12.0) (2021-07-13)

### Features

- **module:** add module with providers ([#13](https://github.com/ng-web-apis/universal/issues/13))
  ([ea56681](https://github.com/ng-web-apis/universal/commit/ea566810063aa9673f36fe17e62b748356057dea))
- **tokens:** sync with new tokens from common package ([#15](https://github.com/ng-web-apis/universal/issues/15))
  ([2f064fb](https://github.com/ng-web-apis/universal/commit/2f064fb0c391b3d42c0bb197c84d16b7dbb54db2))

### [1.9.5](https://github.com/ng-web-apis/universal/compare/v1.9.4...v1.9.5) (2021-03-12)

### Bug Fixes

- **WINDOW:** fix `navigator` used in `clientInformation`
  ([89cbabb](https://github.com/ng-web-apis/universal/commit/89cbabb28ef01a5a18e5bf675b6fe3e58e7ef976))

### [1.9.4](https://github.com/ng-web-apis/universal/compare/v1.9.3...v1.9.4) (2021-03-08)

### Bug Fixes

- **WINDOW:** provide typesafe mock for `WINDOW` ([#9](https://github.com/ng-web-apis/universal/issues/9))
  ([9ec57bb](https://github.com/ng-web-apis/universal/commit/9ec57bb53171bcc8715afd3e87eb94dc59ea010b))

### [1.9.3](https://github.com/ng-web-apis/universal/compare/v1.9.2...v1.9.3) (2021-01-12)

### Bug Fixes

- **LOCAL_STORAGE:** fix incorrect provider
  ([676d5e4](https://github.com/ng-web-apis/universal/commit/676d5e46de22a864024ff8f7e2c835332460c3b8))

### [1.9.2](https://github.com/ng-web-apis/universal/compare/v1.9.1...v1.9.2) (2020-11-30)

### Bug Fixes

- **mocks:** add mocks to side effects so they are not tree shaken
  ([777a1e0](https://github.com/ng-web-apis/universal/commit/777a1e0b1969a2b8a7459de51c25fdadd12b8c53))

### [1.9.1](https://github.com/ng-web-apis/universal/compare/v1.9.0...v1.9.1) (2020-11-25)

### Bug Fixes

- **navigator:** fix rejected Promise error and add mocks for native classes
  ([#6](https://github.com/ng-web-apis/universal/issues/6))
  ([6db2660](https://github.com/ng-web-apis/universal/commit/6db2660a103053b844ba4790eaf73f0be79e42a1))

## [1.9.0](https://github.com/ng-web-apis/universal/compare/v1.8.0...v1.9.0) (2020-11-17)

### Bug Fixes

- **navigator:** fix always pending Promises
  ([c75c60a](https://github.com/ng-web-apis/universal/commit/c75c60ade5a9e6ae820fddca5260e594397d02e9))

## [1.8.0](https://github.com/ng-web-apis/universal/compare/v1.6.0...v1.8.0) (2020-10-27)

### Features

- **SPEECH_SYNTHESIS:** add new mock ([#5](https://github.com/ng-web-apis/universal/issues/5))
  ([dbb5e43](https://github.com/ng-web-apis/universal/commit/dbb5e43eae1364611e74ac40f74e7f504ad06634))

## [1.6.0](https://github.com/ng-web-apis/universal/compare/v1.5.0...v1.6.0) (2020-08-10)

### Features

- **UNIVERSAL_SESSION_STORAGE:** add SESSION_STORAGE support ([#3](https://github.com/ng-web-apis/universal/issues/3))
  ([0625aa2](https://github.com/ng-web-apis/universal/commit/0625aa20f225179927176d6958e9ecb56962c904))

## [1.5.0](https://github.com/ng-web-apis/universal/compare/v1.4.0...v1.5.0) (2020-07-24)

### Features

- **page-visibility:** cover new token from common package in README and sync minor version
  ([b95998a](https://github.com/ng-web-apis/universal/commit/b95998abf1aa6b8469631d43e7eb5a76a7765374))

## 1.4.0 (2020-05-06)
