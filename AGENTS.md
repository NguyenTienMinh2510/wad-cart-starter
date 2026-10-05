# Project Rules & Development Harness

This document describes the stack, standard commands, and strict constraints for this repository.

## 1. Technology Stack
- **Runtime:** Node.js (v18+ or v20+ recommended)
- **Module System:** ES Modules (`"type": "module"` in `package.json`)
- **Test Runner:** Node.js built-in test runner (`node:test`, `node:assert/strict`)
- **Dependencies:** Plain JavaScript only. Zero third-party dependencies.

## 2. Standard Commands
- Run all tests:
  ```bash
  npm test
  ```
- Run syntax and lint gate:
  ```bash
  npm run lint
  ```
- Run full verification gate (lint + test):
  ```bash
  npm run check
  ```

## 3. Strict Rules & Constraints (NEVER)
- **NEVER** install or introduce any external dependencies (`npm install` for runtime or test packages is prohibited).
- **NEVER** return a string or floating-point number from `cartTotal(items, options)`. The return value must always be a rounded integer `number` (whole đồng).
- **NEVER** swallow or ignore input validation errors. A negative `price` or a `qty` that is not a positive integer must immediately throw a `RangeError`.
- **NEVER** write multi-assertion tests that test multiple failure modes in a single test case. Every test must test exactly one behavior so that each test can fail for only one reason.
