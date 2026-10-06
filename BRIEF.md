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

## 6. Evidence Update — Session 5, 2026-10-06

Theo yêu cầu cập nhật tài liệu và tự chấm điểm sau CI PASS (prompt ghi tại AI-LOG Session 5), agent chỉ bổ sung bằng chứng dưới đây. Mục 1–5 và hợp đồng cartTotal được giữ nguyên.

- Commit đã xác minh: b34c8b44013666c80e7498850f9f88272bba47bb.
- Workflow [CI / run 37360351155](https://github.com/NguyenTienMinh2510/wad-cart-starter/actions/runs/37360351155) và job [verify](https://github.com/NguyenTienMinh2510/wad-cart-starter/actions/runs/37360351155/job/111933104911): completed / success, ubuntu-latest, Node.js 20 theo cấu hình workflow.
- Gate local npm run check: lint PASS, 9/9 test PASS; không thêm dependencies.
- Bảng tự đánh giá mới nhất ở SELF_ASSESSMENT_REPORT mục 3: đề xuất 100/100. Mức 96/100 trước đó là đánh giá trước khi xác minh CI.

## 7. Startup Harness Supplement — Session 8, 2026-10-06

Sau trao đổi về việc ECC_PLAN_LOOP chưa được bảo đảm đọc trong phiên mới, agent bổ sung mục 4 vào AGENTS.md để yêu cầu đọc BRIEF và ECC_PLAN_LOOP trước khi lập kế hoạch/chỉnh sửa. Phạm vi bổ sung của công việc này gồm AGENTS.md và các tài liệu ghi nhận liên quan (BRIEF, AI-LOG, SELF_ASSESSMENT_REPORT); hợp đồng và bộ 9 tests giữ nguyên. Nội dung mục 1–6 được bảo toàn.

Đây là hướng dẫn bắt buộc cho agent có hỗ trợ nạp AGENTS.md của repository; không phải script tự chạy hoặc lịch chạy nền. CI khi push vẫn do .github/workflows/ci.yml kích hoạt. Không thay đổi nội dung ECC_PLAN_LOOP hoặc tự thực hiện commit/push trong phiên này.
