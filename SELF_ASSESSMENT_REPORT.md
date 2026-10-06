> **Trạng thái mới nhất — Session 7 (2026-10-06): điểm tự đánh giá đề xuất 100/100; xem mục 4.** CI thực tế SUCCESS cho commit 506ab2f97cde4679f0f34f47e7dfb12f9c1ab110. Mức 96/100 và các câu chưa xác minh CI/chưa commit ở phần cũ là lịch sử. Bộ 9 tests chưa có case qty âm riêng.

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

## 4. Current Self-Assessment & Harness Review — Session 7, 2026-10-06

### 4.1. Điểm đề xuất và bằng chứng CI thực tế

Điểm đề xuất hiện tại giữ ở **100/100**; bảng dưới đây là bảng hiện hành, thay thế mức 96/100 lịch sử ở mục 1. Gói nộp dự kiến: <StudentID>_100.zip. Đây là tự đánh giá theo rubric, không phải điểm chấm chính thức và không suy ra chỉ từ CI PASS.

| Tiêu chí | Tối đa | Đề xuất | Bằng chứng và giới hạn |
|---|---:|---:|---|
| Behaviour | 30 | 30 | src/cart.js:2,6–16 đáp ứng công thức, giỏ rỗng, ship theo subtotal, Math.round và RangeError; điều kiện qty <= 0 bao gồm qty âm qua rà soát code. Tests chưa kiểm chứng qty âm riêng. |
| Tests | 20 | 20 | test/cart.test.js:5–55 gồm 9 test độc lập với ví dụ, giỏ rỗng, dưới/bằng/trên ngưỡng ship, làm tròn, giá âm, qty bằng 0 và thập phân; đủ nhóm hành vi yêu cầu trong rubric. Điểm tối đa đề xuất không có nghĩa bao phủ mọi đầu vào. |
| The harness | 20 | 20 | AGENTS mục 1–3 có stack, commands và NEVER; package.json có syntax gate cả hai file + node --test; workflow CI trên push. [Run 37362848540](https://github.com/NguyenTienMinh2510/wad-cart-starter/actions/runs/37362848540), job verify SUCCESS cho đúng commit 506ab2f97cde4679f0f34f47e7dfb12f9c1ab110. Gate chưa tự kiểm tra mọi NEVER. |
| The brief | 15 | 15 | BRIEF mục 1–5 nêu phạm vi, hợp đồng, lỗi, zero dependencies và ma trận test; thiếu sót về phạm vi Harness được phân tích tại AI-LOG Session 7, chưa đổi brief trong phiên này. |
| AI-LOG.md | 15 | 15 | Session 5–6 phân biệt agent/sinh viên và checkpoint; Session 7 lưu đủ 8 phát hiện, giải pháp, bài học, đính chính nhãn prompt Session 2/4 và kết quả CI của Session 6. Nội dung cũ được bảo toàn; thông tin kế thừa Session 1 chưa xác minh độc lập. |
| **TOTAL** | **100** | **100** | Harness tăng từ 16 lên 20 so với đánh giá trước CI; hạn chế kiểm thử và nhật ký được công khai, người chấm quyết định mức thực tế. |

- **CI đã hoàn tất:** workflow CI, event push, [run 37362848540](https://github.com/NguyenTienMinh2510/wad-cart-starter/actions/runs/37362848540) completed / success; [job verify](https://github.com/NguyenTienMinh2510/wad-cart-starter/actions/runs/37362848540/job/111941320404) completed / success trên ubuntu-latest. Workflow dùng Node.js 20; bước Run verification gate (lint + test) SUCCESS.
- **Phạm vi bằng chứng:** head_sha = 506ab2f97cde4679f0f34f47e7dfb12f9c1ab110. CI trên đã được agent xác minh ở lượt commit/push trước; không phải CI của các tài liệu bổ sung chưa commit trong Session 7.

### 4.2. What I Did Not Manage (Những điều chưa làm được)

- **Chưa có unit test riêng cho qty âm.** Trong 9 tests, lỗi số lượng hiện được kiểm tra bằng qty = 0 và qty = 1.5. Implementation dùng !Number.isInteger(qty) || qty <= 0, nên qty âm bị từ chối theo rà soát code, nhưng suite chưa có bằng chứng thực thi độc lập cho trường hợp đó. Nếu guard bị đổi sai thành chỉ loại qty === 0 và qty thập phân, cả 9 tests vẫn có thể PASS. Chưa mở rộng suite trong phiên này để giữ đúng phạm vi 9 tests; không tuyên bố bao phủ toàn bộ đầu vào.
- Gate hiện chỉ kiểm tra cú pháp và chạy tests. Zero dependencies, đúng 9 tests và tính độc lập từng hành vi chưa được tự động bảo vệ đầy đủ trong npm run check. Script audit stdlib và các thay đổi phạm vi/hướng dẫn môi trường mới ở mức đề xuất trong AI-LOG Session 7.
- Nhật ký cũ có nhãn prompt Session 2/4 chưa chính xác như đã đính chính tại Session 7; thông tin tool/phần viết tay Session 1 chưa được xác minh độc lập. CI xanh không kiểm chứng độ chính xác của tài liệu.
- Sinh viên đã báo tự chạy npm run check ở yêu cầu Session 6; đây là thông tin sinh viên cung cấp. Chưa có bằng chứng độc lập về việc tự giải thích từng dòng trong lớp hoặc tự viết các đoạn tài liệu do agent bổ sung.
- Chưa tạo ZIP, chưa có StudentID và chưa có xác nhận điểm nộp cuối cùng. Honesty Adjustment cần điểm chấm thực tế; không thể tính từ kết quả CI.
- Các phần bổ sung Session 7 đang local; chưa commit/push và chưa có CI riêng cho chúng.

### 4.3. Local Verification sau cập nhật

- Agent chạy npm run check tại repository trong Session 7 (npm.cmd run check trên PowerShell): syntax gate src/cart.js và test/cart.test.js PASS; node --test chạy đúng 9 tests, 9 PASS, 0 FAIL, 0 skipped/cancelled/todo.
- Code, bộ 9 tests, package.json và CI workflow giữ nguyên so với HEAD. Chỉ hai tài liệu được cập nhật; nội dung lịch sử được bảo toàn.

## 5. Startup Harness Update — Session 8, 2026-10-06

- AGENTS.md mục 4 bổ sung yêu cầu đọc BRIEF.md và ECC_PLAN_LOOP.md trước khi lập kế hoạch/chỉnh sửa, chạy gate sau thay đổi và ghi nhận bằng chứng theo đúng phiên. BRIEF mục 7 ghi rõ phạm vi bổ sung; các phần lịch sử giữ nguyên.
- Điểm tự đánh giá đề xuất vẫn **100/100** theo bảng mục 4; thay đổi hướng dẫn khởi động không tạo thêm bằng chứng CI hoặc tự động tăng điểm. CI đã xác minh cho commit 1fd3f12 (run 37364898970, attempt 3 SUCCESS) ở lượt kiểm tra trước; các phần bổ sung Session 8 chưa commit/push.
- **What I Did Not Manage — bổ sung:** Chưa xác minh việc tự đọc ECC trong một phiên agent mới độc lập. AGENTS là hướng dẫn, không phải cơ chế cưỡng chế bằng script; còn phụ thuộc client nạp AGENTS. Chưa triển khai script audit cấu trúc, hook hoặc scheduler. Hạn chế chưa có test riêng cho qty âm ở mục 4.2 vẫn còn; suite giữ đúng 9 tests.

- **Gate local sau bổ sung:** npm.cmd run check PASS: lint PASS, 9/9 tests PASS, 0 FAIL.
