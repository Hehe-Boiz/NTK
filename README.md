# NTK

## Cấu trúc dự án

Dự án NTK có cấu trúc monorepo, được chia thành hai phần chính: **backend** và **frontend**.

### 📁 Thư mục gốc (`NTK/`)

```
NTK/
├── backend/
├── frontend/
├── .gitignore
├── LICENSE
├── package.json
└── README.md
```

-----

## Backend

Thư mục `backend/` chứa mã nguồn cho server API, được xây dựng bằng **NestJS**. Nó chịu trách nhiệm xử lý các yêu cầu từ phía client, quản lý cơ sở dữ liệu và xác thực.

### 📁 Thư mục Backend (`backend/`)

```
backend/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   └── main.ts
├── dist/
├── node_modules/
├── package.json
├── nest-cli.json
└── tsconfig.json
```

-----

## Frontend

Thư mục `frontend/` chứa mã nguồn cho giao diện người dùng, được phát triển bằng **React**, sử dụng **TailwindCSS** để tạo kiểu và **Vite** để xây dựng.

### 📁 Thư mục Frontend (`frontend/`)

```
frontend/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   └── App.tsx
├── public/
├── node_modules/
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── index.html
```

-----

## Hướng dẫn đóng góp

Để đảm bảo lịch sử commit rõ ràng và dễ theo dõi, chúng tôi tuân thủ quy tắc sau:

### 1\. **Cấu trúc Commit**

Mỗi commit phải tuân theo cú pháp: `type: Công_việc/Tên_nhánh_hiện_tại`.

  * **`type`**: Loại thay đổi bạn đã thực hiện.

      * `feat`: Thêm tính năng mới.
      * `fix`: Sửa lỗi.
      * `docs`: Cập nhật tài liệu.
      * `style`: Thay đổi định dạng (spaces, semicolons, v.v.).
      * `refactor`: Sắp xếp lại mã nguồn mà không thay đổi chức năng.
      * `test`: Thêm/sửa đổi test.
      * `chore`: Các thay đổi không liên quan đến mã nguồn (config, scripts, v.v.).

  * **`Tên_nhánh_hiện_tại`**: Tên của nhánh bạn đang làm việc.

      * **Ví dụ**: Nếu bạn đang làm trên nhánh `feature`, commit sẽ là `feat: Tạo README.md feature`.

**Ví dụ về commit:**

  * `feat: feature/login` (thêm tính năng đăng nhập)
  * `fix: bug/wrong-path` (sửa lỗi đường dẫn sai)
  * `docs: update-readme` (cập nhật file README.md)

### 2\. **Luồng làm việc**

1.  Tạo một **nhánh mới** từ nhánh `main`. Tên nhánh nên mô tả ngắn gọn công việc bạn làm (ví dụ: `feature/user-profile`, `bug/database-connection`).
2.  Thực hiện các thay đổi của bạn và **commit** theo cú pháp trên.
3.  **Push** nhánh của bạn lên remote repository.
4.  Tạo một **Pull Request** (PR) để team review.
