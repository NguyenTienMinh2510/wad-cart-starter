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

## 3. Latest Self-Assessment after CI — Session 5, 2026-10-06

**Điểm tự đánh giá mới nhất đề xuất: 100/100.** Mục 1–2 là bản đánh giá lịch sử 96/100 trước khi kiểm chứng CI; bảng dưới đây thay thế mức điểm đó cho lần nộp hiện tại. Tên gói dự kiến: <StudentID>_100.zip. Chưa tạo gói nộp; điểm này chưa phải điểm chấm chính thức.

### 3.1. Đối chiếu rubric

| Tiêu chí | Tối đa | Đề xuất | Bằng chứng |
|---|---:|---:|---|
| Behaviour | 30 | 30 | src/cart.js:2,6–16: giỏ rỗng, RangeError, subtotal, VAT, ship theo subtotal, Math.round tổng cuối. Test ví dụ strict equal với number 467400 PASS. |
| Tests | 20 | 20 | test/cart.test.js:5–55: đúng 9 test độc lập, một assertion/test; bao phủ ví dụ, giỏ rỗng, ngưỡng ship, làm tròn và lỗi. npm run check: 9 PASS, 0 FAIL. |
| The harness | 20 | 20 | AGENTS.md mục 1–3 quy định stack, lệnh và NEVER; package.json gate lint + test. .github/workflows/ci.yml chạy trên push; [CI run 37360351155](https://github.com/NguyenTienMinh2510/wad-cart-starter/actions/runs/37360351155) / job verify SUCCESS cho commit b34c8b44013666c80e7498850f9f88272bba47bb. |
| The brief | 15 | 15 | BRIEF.md mục 1–5 nêu phạm vi file, hợp đồng, lỗi, zero dependencies, ma trận test và ECC. Mục 6 bổ sung bằng chứng sau CI, giữ nguyên hợp đồng cũ. |
| AI-LOG.md | 15 | 15 | Session 1–4 được giữ nguyên; Session 5 ghi prompt hiện tại, tool, thao tác thực tế, output, thay đổi, phần sinh viên/agent và giới hạn kiểm chứng. Không nhận phần agent viết là phần sinh viên viết tay. |
| **TOTAL** | **100** | **100** | Harness tăng 4 điểm so với bản 96/100 nhờ bằng chứng CI; các tiêu chí còn lại giữ điểm đề xuất. |

### 3.2. Đối chiếu các quy tắc NEVER

| Quy tắc | Kết quả | Bằng chứng |
|---|---|---|
| Không thêm dependencies | PASS | package.json không có dependencies/devDependencies; không cài package. |
| Luôn trả integer number, không dùng toFixed | PASS | src/cart.js trả 0 hoặc Math.round tổng; 6 test kết quả dùng assert.equal từ node:assert/strict với literal number. |
| Không bỏ qua lỗi price/qty | PASS | src/cart.js:6–9 ném RangeError khi price < 0 hoặc qty không nguyên dương; 3 test lỗi PASS. |
| Mỗi test chỉ kiểm tra một hành vi | PASS | 9 test tách riêng, mỗi test một assertion; ma trận dưới đây đối chiếu hành vi với hợp đồng. |

### 3.3. Ma trận 9 tests

| Test tại test/cart.test.js | Hành vi duy nhất | Kết quả mong đợi | Gate |
|---|---|---|---|
| Dòng 5 | Ví dụ tính tổng trong đề | 467400 | PASS |
| Dòng 14 | Giỏ rỗng | 0 | PASS |
| Dòng 19 | Ship khi subtotal dưới ngưỡng, kể cả VAT đẩy tổng qua ngưỡng | 139 | PASS |
| Dòng 25 | Miễn ship tại ngưỡng | 100 | PASS |
| Dòng 31 | Miễn ship trên ngưỡng | 101 | PASS |
| Dòng 37 | Làm tròn tổng cuối 10.505 | 11 | PASS |
| Dòng 43 | Giá âm | RangeError | PASS |
| Dòng 49 | Qty bằng 0 | RangeError | PASS |
| Dòng 55 | Qty thập phân | RangeError | PASS |

### 3.4. Verification & What I Did Not Manage

- Agent chạy npm run check tại dự án trong phiên này: lint PASS, 9 tests PASS, 0 FAIL. Audit cấu trúc test, ES Modules và zero dependencies PASS.
- GitHub REST API xác nhận head_sha b34c8b44013666c80e7498850f9f88272bba47bb, workflow [CI](https://github.com/NguyenTienMinh2510/wad-cart-starter/actions/runs/37360351155) và job [verify](https://github.com/NguyenTienMinh2510/wad-cart-starter/actions/runs/37360351155/job/111933104911) completed / success, runner ubuntu-latest. Workflow cấu hình Node.js 20. Đây là CI của commit đã có, chưa phải CI của các đoạn tài liệu bổ sung chưa commit.
- Chưa có test riêng cho qty âm để giữ đúng 9 test theo brief; implementation kiểm tra toàn bộ qty <= 0.
- Chưa có bằng chứng sinh viên tự chạy terminal, tự viết phần bổ sung hoặc tự giải thích từng dòng trong lớp. Thông tin Session 1 kế thừa chưa được xác minh độc lập; các phần lịch sử được bảo toàn.
- Chưa tạo ZIP và chưa có StudentID để đặt tên. Sinh viên cần xác nhận điểm trước khi nộp. Honesty Adjustment chỉ tính được khi có điểm chấm thực tế, không thể suy ra từ CI PASS.
