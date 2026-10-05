# SELF-ASSESSMENT REPORT

**Assignment:** CSC13008 - IA#1: `cartTotal` with a harness  
**Assessment date:** 2026-10-06  
**Proposed self-assessed score:** 96 / 100 points  
**Submission Package:** `<StudentID>_96.zip` (sinh viên xác nhận điểm trước khi nộp).

## 1. Rubric Self-Assessment Table

| # | Criterion | Max Points | Claimed Points | Evidence (File, Line, Test) |
|---|---|---:|---:|---|
| 1 | Behaviour | 30 | 30 | `src/cart.js:2`: giỏ rỗng trả về 0; `src/cart.js:6-9`: RangeError cho giá âm hoặc qty không nguyên dương; `src/cart.js:10`: cộng price × qty; `src/cart.js:14-16`: VAT, ship theo subtotal và Math.round tổng cuối. `package.json` không có dependencies. |
| 2 | Tests | 20 | 20 | `test/cart.test.js:5`: ví dụ 467400; dòng 14: giỏ rỗng; dòng 19/25/31: ship dưới/bằng/trên ngưỡng; dòng 37: làm tròn tổng cuối; dòng 43/49/55: RangeError cho giá âm, qty = 0, qty thập phân. Đúng 9 test, mỗi test một assertion; `node:assert/strict` đối chiếu cả giá trị và kiểu number. `npm run check`: 9 PASS, 0 FAIL. |
| 3 | The harness | 20 | 16 | `AGENTS.md` mục 1-3: stack, commands và NEVER; `package.json:7-8`: lint kiểm tra riêng cả hai file, gate lint + test. `.github/workflows/ci.yml`: Node.js 20, chạy `npm run check` trên push/pull_request vào main/master. Gate local PASS trên Node.js v24.16.0; chưa có bằng chứng GitHub Actions chạy bản thay đổi hiện tại, nên chưa tự nhận trọn 20 điểm. |
| 4 | The brief | 15 | 15 | `BRIEF.md` mục 1: phạm vi file và bổ sung sửa gate theo yêu cầu ngày 2026-10-06; mục 2-3: hợp đồng, zero dependencies, Math.round và lỗi; mục 4: ma trận 9 test; mục 5: quy trình ECC. |
| 5 | AI-LOG.md | 15 | 15 | `AI-LOG.md` Session 1: lịch sử chuẩn bị được giữ từ tài liệu có sẵn; Session 2: mã đề xuất và kiểm tra ở thư mục tạm; Session 3: prompt import, file cập nhật, gate đỏ → xanh, sửa lint, môi trường chạy và phân biệt local với CI GitHub. Không khẳng định sinh viên đã tự kiểm chứng khi chưa có bằng chứng. |
| TOTAL | | 100 | 96 | Điểm tự đánh giá đề xuất dựa trên bằng chứng hiện có, chưa phải điểm chấm chính thức. |

## 2. What I Did Not Manage (Những điều chưa làm được)

- Chưa chạy GitHub Actions cho thay đổi hiện tại; chưa kiểm chứng trên Node.js 20 / Ubuntu của CI. Workflow cần được đưa lên GitHub qua push hoặc pull request vào main/master.
- Test non-positive quantity hiện dùng qty = 0; không có test riêng cho qty âm để giữ đúng yêu cầu 9 test. Implementation kiểm tra toàn bộ qty <= 0.
- Chưa ghi nhận sinh viên tự chạy kiểm tra hoặc xác nhận điểm tự đánh giá cuối cùng. Lịch sử Session 1 được kế thừa từ nhật ký có sẵn, không xác minh độc lập trong session này.
