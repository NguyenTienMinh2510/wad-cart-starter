# AI-LOG: Assistant Interaction & Engineering Journal

Tài liệu này ghi chép minh bạch quá trình sử dụng trợ lý AI (Antigravity & ChatGPT) để giải quyết bài tập theo đúng tiêu chí 5 của Rubric.

---

## Session 1: Planning, Rubric Analysis & Harness Setup
- **Tool:** Google Antigravity (Gemini 3.8 Flash)
- **Prompt / Request từ sinh viên:**
  - Đọc và phân tích `README.md` cùng file rubric `docs/IA#1 rubric — cartTotal.md`.
  - Hướng dẫn điều kiện đạt 100/100 điểm và giải thích cơ chế Honesty Adjustment.
  - Thiết lập chu trình lặp ECC (Execute-Check-Correct) trong `ECC_PLAN_LOOP.md` và xây dựng cấu trúc ban đầu (`BRIEF.md`, `AGENTS.md`, `AI-LOG.md`, `SELF_ASSESSMENT_REPORT.md`).
- **What it produced:**
  - File `ECC_PLAN_LOOP.md` định nghĩa chu trình lặp: Plan -> Execute -> Check/Verify -> Correct -> Document.
  - File `BRIEF.md` chuẩn hóa toàn bộ đặc tả kỹ thuật, ràng buộc no dependencies, danh sách file được sửa.
  - Khung file `AI-LOG.md` và `SELF_ASSESSMENT_REPORT.md` chuẩn hóa theo Rubric.
- **What was changed / rejected / written by hand:**
  - Sinh viên tự tay chỉnh sửa `package.json` để thêm scripts `lint` và `check`.
  - Sinh viên yêu cầu tách rõ ràng công việc: Antigravity chỉ chuẩn bị kế hoạch/harness, phần triển khai mã nguồn và kiểm thử sẽ để ChatGPT (ECC skills) thực hiện.

---

## Session 2: Implementation & ECC Execution Loop
- **Tool:** Codex / ChatGPT, thực hiện chu trình ECC trong `ECC_PLAN_LOOP.md`.
- **Prompt / Request từ sinh viên:**
  - *"thực hiện import vào dự án, bổ sung các file theo rule đã định sẵn và chạy CI test kiểm tra hết"*
  - Nhận `BRIEF.md` và tuân theo chu trình trong `ECC_PLAN_LOOP.md`.
  - Triển khai hàm `cartTotal(items, options)` trong `src/cart.js`.
  - Triển khai bộ kiểm thử phân tách (atomic tests) trong `test/cart.test.js`.
- **What it produced:**
  - Mã nguồn hoàn chỉnh cho `src/cart.js` (xác thực dữ liệu `RangeError`, tính `subtotal`, `VAT`, `shipping`, và `Math.round`).
  - Bộ 9 unit tests phân tách độc lập trong `test/cart.test.js`.
- **What was changed / rejected / written by hand:**
  - *Kiểm tra phản hồi:* Xác nhận hàm trả về kiểu `number`, không dùng `.toFixed()`.
  - *Kiểm tra atomic test:* Đảm bảo không gộp các assertion `RangeError` vào chung một test case.
  - *Kiểm thử thực tế:* Agent chạy `npm run check` trong thư mục tạm với bản sao `package.json`: 9/9 test PASS. Ở session này chưa cập nhật hai file vào dự án; chưa có bằng chứng sinh viên tự chạy kiểm tra.

---

## Session 3: Import, Correct & Verify — 2026-10-06
- **Tool:** Codex / ChatGPT.
- **Prompt / Request từ sinh viên:** "thực hiện import vào dự án, bổ sung các file theo rule đã định sẵn và chạy CI test kiểm tra hết".
- **Plan & Audit:** Đối chiếu `AGENTS.md`, `BRIEF.md`, `ECC_PLAN_LOOP.md`, rubric, hai file JavaScript, `package.json` và `.github/workflows/ci.yml`. Workflow dùng Node.js 20 và chạy `npm run check` khi push hoặc pull request vào `main`/`master`.
- **Execute:** Cập nhật `src/cart.js` và `test/cart.test.js` từ mã đã cung cấp; giữ đúng 9 test, mỗi test một assertion. Không cài hoặc thêm dependencies.
- **Check trước sửa:** `npm run check` thất bại với 1 test do `Error: not implemented`.
- **Correct:** Đổi script lint thành `node --check src/cart.js && node --check test/cart.test.js`; dạng cũ truyền hai đường dẫn chỉ kiểm tra cú pháp file đầu tiên. Bổ sung phạm vi sửa gate vào `BRIEF.md`.
- **Check sau sửa:** Agent chạy `npm run check` tại dự án bằng Node.js v24.16.0 / npm 11.13.0: lint cả hai file PASS; 9 test PASS, 0 FAIL. `git diff --check` PASS.
- **Đối chiếu test:** 6 test kết quả dùng `node:assert/strict` so sánh với literal number, nên cũng phát hiện kết quả string; 3 test lỗi dùng `assert.throws(..., RangeError)`. Test ship dưới ngưỡng có VAT đẩy tổng vượt ngưỡng, xác minh ngưỡng dựa trên subtotal. Test làm tròn dùng tổng 10.505 để phát hiện làm tròn từng thành phần.
- **Audit cuối:** Kiểm tra bằng Node.js stdlib xác nhận đúng 9 test, một assertion/test, không có dependencies hoặc devDependencies. Đối chiếu lại số dòng dẫn chứng trong báo cáo với mã thực tế.
- **Document:** Cập nhật `AI-LOG.md`, `SELF_ASSESSMENT_REPORT.md`, `ECC_PLAN_LOOP.md` theo bằng chứng thực tế.
- **Thay đổi / từ chối / phần viết tay:** Sửa ghi nhận sai model GPT-4o và bỏ khẳng định chưa có bằng chứng rằng sinh viên đã tự chạy kiểm tra. Session này agent cập nhật file; không ghi nhận phần viết tay mới của sinh viên.
- **CI:** Đã chạy thành công cùng gate mà CI gọi, tại máy local. Chưa chạy GitHub Actions cho bản thay đổi này; chưa commit hoặc push. Node.js 20 trên runner Ubuntu chưa được kiểm chứng trong session này.

---

## Session 4: Git Automation, Remote Sync & GitHub Actions CI Verification — 2026-10-06
- **Tool:** ChatGPT / Git Extension & Automation Tools.
- **Prompt / Request từ sinh viên:** *"Thực hiện quy trình Git automation: kiểm tra trạng thái working tree, stage toàn bộ thay đổi, tạo commit theo chuẩn Conventional Commits, đồng bộ lên remote branch qua Git push, và giám sát trạng thái GitHub Actions để xác nhận quy trình CI hoàn tất với trạng thái xanh (PASS)."*
- **Plan & Audit:**
  - Kiểm tra trạng thái Git repository (`git status`), rà soát các file modified (`package.json`, `src/cart.js`, `test/cart.test.js`) và untracked (`.github/`, `AGENTS.md`, `AI-LOG.md`, `BRIEF.md`, `ECC_PLAN_LOOP.md`, `SELF_ASSESSMENT_REPORT.md`, `docs/`).
  - Đảm bảo toàn bộ tài liệu minh chứng, cấu hình CI, và mã nguồn đều nằm trong phạm vi commit.
- **Execute:**
  - Stage toàn bộ thay đổi: `git add .`
  - Tạo commit chuẩn: `git commit -m "feat(cart): implement cartTotal with atomic tests, rules harness and CI workflow"`
  - Đồng bộ lên remote: `git push origin main`
- **Verify CI:**
  - Giám sát tiến trình workflow qua GitHub CLI (`gh run watch` / `gh run list`) hoặc giao diện GitHub Actions.
  - Xác nhận job `verify` trên runner `ubuntu-latest` (Node.js 20) thực thi `npm run check` thành công (Status: Success / Green Check).
- **Document & Evidence:**
  - Cập nhật kết quả xác minh CI thực tế vào `SELF_ASSESSMENT_REPORT.md` để hoàn tất tiêu chí The harness với đầy đủ minh chứng.


---

## Session 5: CI Verification & Rubric Assessment — 2026-10-06
- **Tool:** Codex / ChatGPT; Node.js built-in tools và GitHub REST API.
- **Prompt / Request từ sinh viên:** "CI trên GitHub đã chạy PASS thành công rồi. Hãy cập nhật các file tài liệu và tự chấm điểm đối chiếu theo đúng rule đã đặt ra giúp tôi".
- **Trạng thái đầu phiên:** HEAD ở b34c8b44013666c80e7498850f9f88272bba47bb; working tree sạch. Trước phiên này, agent đã khôi phục main về mốc này theo yêu cầu "xóa commit phiên 5 và khôi phục về b34c8b44013666c80e7498850f9f88272bba47bb". Phiên 5 dưới đây ghi nhận công việc hiện tại, không tái tạo nội dung phiên đã gỡ.
- **Plan / Audit:** Đọc quy tắc AGENTS, hợp đồng BRIEF, chu trình ECC, rubric và các tài liệu/mã hiện có. Giữ nguyên nội dung lịch sử, chỉ bổ sung kết quả xác minh mới.
- **Check:** Agent chạy npm run check tại dự án: lint PASS, 9/9 tests PASS, 0 FAIL. Audit bằng Node.js stdlib xác nhận ES Modules, không có dependencies/devDependencies, đúng 9 test và mỗi test một assertion; rà soát từng test chỉ kiểm tra một hành vi.
- **CI thực tế:** REST API xác nhận workflow CI, run [37360351155](https://github.com/NguyenTienMinh2510/wad-cart-starter/actions/runs/37360351155), completed / success; head_sha = b34c8b44013666c80e7498850f9f88272bba47bb. Job [verify](https://github.com/NguyenTienMinh2510/wad-cart-starter/actions/runs/37360351155/job/111933104911) completed / success, runner ubuntu-latest; workflow cấu hình Node.js 20 và npm run check.
- **What it produced:** Bổ sung phiên này vào AI-LOG, bằng chứng CI vào BRIEF/ECC_PLAN_LOOP và bảng đánh giá mới vào SELF_ASSESSMENT_REPORT. Điểm đề xuất: 30 + 20 + 20 + 15 + 15 = 100/100; harness tăng từ 16 lên 20 nhờ bằng chứng CI.
- **Thay đổi / từ chối / phần viết tay:** Sinh viên cung cấp thông tin CI PASS và yêu cầu cập nhật; agent kiểm chứng, chạy lệnh và viết phần bổ sung. Không ghi nhận sinh viên tự chạy terminal hoặc tự viết phần tài liệu mới. Không sửa Session 1–4, code, tests, workflow hoặc thêm dependencies; chưa commit/push phần bổ sung này.
- **Giới hạn bằng chứng:** Kết quả CI trên thuộc commit b34c8b44013666c80e7498850f9f88272bba47bb, không phải một commit tài liệu mới. Các ghi nhận cũ được giữ như lịch sử; thông tin kế thừa trong Session 1 chưa được xác minh độc lập. Điểm là tự đánh giá đề xuất, chưa phải điểm chấm chính thức.

---

## Session 6: Commit Documentation & Monitor CI — 2026-10-06
- **Tool:** Codex / ChatGPT; Git và GitHub REST API.
- **Prompt / Request từ sinh viên:** "Tôi vừa chạy npm run check và tất cả test đều đã PASS 100%. Hãy giúp tôi stage toàn bộ các file tài liệu đã sửa, tạo commit với message docs(cart): finalize ECC evidence and rubric assessment, sau đó push lên GitHub và theo dõi trạng thái CI giúp tôi."
- **Sinh viên / agent:** Sinh viên báo đã tự chạy gate thành công và cho phép commit/push. Đây là thông tin sinh viên cung cấp; bằng chứng agent chạy gate và kiểm chứng CI trước đó nằm tại Session 5.
- **Checkpoint trước commit:** Agent xác nhận main có đúng bốn tài liệu thay đổi, git diff --check PASS; bổ sung phiên này, giữ nguyên Session 1–5. Commit dùng đúng message được yêu cầu, sau đó push origin main và xác minh CI theo SHA mới; kết quả cuối đối chiếu lịch sử Git, GitHub Actions và báo cáo trả lại sinh viên.
- **What it produced / phần viết tay:** Agent viết phần nhật ký này; không sửa mã nguồn, tests hoặc dependencies. Các đoạn "chưa commit/push" trong Session 5 và tài liệu đánh giá mô tả checkpoint trước yêu cầu hiện tại.
