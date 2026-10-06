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

## 4. Required Startup Reading & ECC Execution

- Before planning or editing a repository task, read BRIEF.md and ECC_PLAN_LOOP.md in full. Follow ECC_PLAN_LOOP.md for the phases applicable to the user's task; existing checked boxes are historical evidence, not verification of a new change.
- Audit the current working tree and the files relevant to the task. Respect the brief's scope and the user's subsequent instructions; do not expand the task merely to satisfy a phase intended for implementation work.
- When asked to update the project, write the authorized files into this repository, then inspect the actual diff. When asked only to explain or propose code, provide that output without treating it as an imported change.
- After edits, run npm run check (npm.cmd run check on Windows PowerShell). Correct task-related failures and rerun the gate; report environment or permission blockers accurately instead of claiming PASS.
- Append new execution evidence to AI-LOG.md; preserve old sessions and prompt text. Label summaries as agent summaries and corrections as corrections. Separate student-reported actions, agent actions, local results and GitHub CI results.
- Update the assessment only where new evidence affects it; preserve historical sections. GitHub CI SUCCESS must reference the tested commit SHA and run/job. For an authorized push task, verify CI for the pushed SHA rather than an older successful run.
