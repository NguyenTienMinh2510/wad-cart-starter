# ECC (Execute-Check-Correct) Autonomous Looping Plan: `cartTotal`

Tài liệu này định nghĩa chu trình lặp (Looping Cycle): **Plan -> Execute -> Check/Verify -> Correct/Refine** để hướng dẫn AI (ChatGPT / Coding Agent) triển khai bài tập đạt điểm tối đa 100/100 theo Rubric.

---

## 1. Chu trình lặp (The ECC Iterative Loop)

```
       ┌────────────────────────┐
       │   PHASE 1: PLAN        │  Phân tích hợp đồng, rubric & ràng buộc
       └───────────┬────────────┘
                   │
                   ▼
       ┌────────────────────────┐
       │   PHASE 2: EXECUTE     │  Sinh code `src/cart.js` & `test/cart.test.js`
       └───────────┬────────────┘
                   │
                   ▼
       ┌────────────────────────┐
       │   PHASE 3: CHECK/VERIFY│  Kiểm tra gate (`npm run check`), tính atomic
       └───────────┬────────────┘
                   │
         [Có lỗi hoặc thiếu sót?]
          ├── CÓ ──► [PHASE 4: CORRECT] ──┐
          │                               │
          │         (Sửa lỗi & lặp lại)   │
          └── KHÔNG ◄─────────────────────┘
                   │
                   ▼
       ┌────────────────────────┐
       │   PHASE 5: DOCUMENT    │  Cập nhật AI-LOG, SELF_ASSESSMENT & BRIEF
       └────────────────────────┘
```

---

## 2. Chi tiết từng pha trong vòng lặp

### PHASE 1: Plan & Constraint Verification
* **Ràng buộc bất biến:**
  * Plain JavaScript ES Modules (`"type": "module"`).
  * **ZERO third-party dependencies** (không dùng bất kỳ package ngoài nào).
  * `cartTotal(items, options)` trả về kiểu **`number`** (không dùng `.toFixed()` trả về `string`).
  * Làm tròn đến số nguyên đồng (`Math.round`).
* **Hợp đồng ngoại lệ:**
  * `price < 0` $\rightarrow$ ném `RangeError`.
  * `qty` không phải số nguyên dương (`!Number.isInteger(qty) || qty <= 0`) $\rightarrow$ ném `RangeError`.
  * Giỏ hàng rỗng (`items.length === 0` hoặc rỗng) $\rightarrow$ trả về `0`.

### PHASE 2: Execute
* Triển khai code logic trong `src/cart.js`.
* Triển khai toàn bộ bộ test trong `test/cart.test.js`.
* **Tiêu chuẩn Atomic Test:** Mỗi test case chỉ assert đúng 1 điều kiện duy nhất để đảm bảo *"Each test can fail for one reason"*.

### PHASE 3: Check & Verify
1. **Kiểm tra Gate:**
   ```bash
   npm run lint   # node --check src/cart.js && node --check test/cart.test.js
   npm test       # node --test
   npm run check  # lint && test
   ```
2. **Kiểm tra ma trận trường hợp kiểm thử:**
   - [x] Happy path khớp đúng `467400` dạng number.
   - [x] Giỏ hàng rỗng trả về đúng `0`.
   - [x] Phí ship khi `subtotal < freeShipFrom`.
   - [x] Miễn phí ship khi `subtotal == freeShipFrom` (ngưỡng biên).
   - [x] Miễn phí ship khi `subtotal > freeShipFrom`.
   - [x] Làm tròn số nguyên đồng.
   - [x] Ném `RangeError` khi `price < 0`.
   - [x] Ném `RangeError` khi `qty <= 0` (test dùng `qty = 0`).
   - [x] Ném `RangeError` khi `qty` không phải số nguyên (số thập phân).

### PHASE 4: Correct & Refine (Nếu có lỗi)
* Nếu có test case fail: Phân tích nguyên nhân gốc, chỉnh sửa code `src/cart.js` hoặc điều chỉnh test case cho chuẩn đặc tả.
* Nếu kiểu dữ liệu trả về sai (string thay vì number): Thay đổi sang `Math.round(...)`.
* Chạy lại Phase 3 cho đến khi toàn bộ test xanh 100%.

### PHASE 5: Document & Evidence Trail
* Cập nhật nhật ký `AI-LOG.md` chi tiết (ghi nhận công cụ Antigravity khởi tạo ECC loop, ChatGPT thực hiện code và test, sinh viên kiểm chứng).
* Hoàn thiện `SELF_ASSESSMENT_REPORT.md` với dẫn chứng từng file/dòng code.
* Đảm bảo file `BRIEF.md` khớp với prompt đã đưa.

## 3. Kết quả thực thi — 2026-10-06

- **Plan / Execute:** Đã nhập implementation và 9 unit tests vào dự án, tuân thủ ES Modules và zero dependencies.
- **Check / Correct:** Gate ban đầu thất bại vì hàm chưa triển khai. Sửa implementation và sửa lint để kiểm tra hai file bằng hai lệnh `node --check` riêng.
- **Verify:** `npm run check` tại dự án PASS: lint PASS, 9/9 test PASS, 0 FAIL; `git diff --check` PASS. Môi trường local: Node.js v24.16.0, npm 11.13.0.
- **Document:** Đã cập nhật nhật ký, brief và bảng tự đánh giá với dẫn chứng file/dòng/test.
- **CI GitHub:** Workflow hiện có chạy cùng gate trên Node.js 20 / Ubuntu, khi push hoặc pull request vào `main`/`master`. Chưa có kết quả GitHub Actions cho thay đổi hiện tại; cần kiểm chứng sau khi push.
