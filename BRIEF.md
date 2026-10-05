# Assistant Brief: `cartTotal` Implementation & ECC Protocol

## 1. Scope & Allowed Files
The assistant may modify the following project files:
- `src/cart.js` — Core implementation of `cartTotal(items, options)`
- `test/cart.test.js` — Unit test suite verifying all specifications and edge cases
- `AI-LOG.md` — AI interaction log and audit trail
- `SELF_ASSESSMENT_REPORT.md` — Self-assessment rubric report
- `ECC_PLAN_LOOP.md` — Planning and verification loop execution document

Theo yêu cầu bổ sung ngày 2026-10-06, phạm vi cho phép thêm `package.json` để sửa gate kiểm tra. Được đọc `AGENTS.md`, `README.md`, rubric trong `docs/` và `.github/workflows/ci.yml` để đối chiếu quy tắc và kiểm chứng cấu hình CI. Không thêm dependencies.

## 2. Technical Contract
- **Language / Environment:** Plain JavaScript, ES Modules (`"type": "module"`).
- **External Dependencies:** ZERO third-party runtime or test dependencies (`node:test` and `node:assert/strict` only).
- **Function Signature:** `cartTotal(items, options)`
  - `items`: Array of objects `[{ name: string, price: number, qty: number }]`
  - `options`: Object `{ vatRate: number, freeShipFrom: number, shipFee: number }`
  - `return`: Number, rounded to the nearest whole đồng (`Math.round(...)`). Must be of type `number` (never string).

## 3. Business Logic & Error Rules
- `subtotal` = $\sum (\text{price} \times \text{qty})$.
- `VAT` = $\text{subtotal} \times \text{vatRate}$.
- `shipping` = $0$ if $\text{subtotal} \ge \text{freeShipFrom}$, else $\text{shipFee}$.
- **Empty Cart:** If `items` is empty (`items.length === 0` or empty array), return `0` (no VAT, no shipping fee applied).
- **RangeError Exceptions:**
  - If any item has `price < 0`, immediately throw `RangeError`.
  - If any item has `qty` that is not a positive integer (`!Number.isInteger(qty) || qty <= 0`), immediately throw `RangeError`.

## 4. Test Suite Requirements
- Each test case MUST test only one single behavior or failure mode ("Each test can fail for one reason").
- Tests must cover:
  1. Happy path worked example (returns `467400` as a number).
  2. Empty cart returns `0`.
  3. Shipping fee applied when below threshold.
  4. Free shipping when subtotal exactly equals threshold.
  5. Free shipping when subtotal exceeds threshold.
  6. Rounding to whole đồng.
  7. `RangeError` on negative price.
  8. `RangeError` on non-positive quantity (`qty <= 0`).
  9. `RangeError` on non-integer quantity (decimal `qty`).

## 5. Execution Protocol
Follow the loop defined in [`ECC_PLAN_LOOP.md`](file:///c:/Users/Minh/Desktop/24KTPM/wad-cart-starter/ECC_PLAN_LOOP.md) to implement, verify via `npm run check`, correct if needed, and log evidence.
