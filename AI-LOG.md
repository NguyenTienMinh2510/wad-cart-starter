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

