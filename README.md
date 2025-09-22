# Website Khoa Công Nghệ Thông Tin (NTK)
Dự án này là một trang web cho Khoa Công nghệ thông tin, được xây dựng với kiến trúc monorepo bao gồm một backend NestJS và một frontend React.

## Cấu trúc dự án

Dự án NTK có cấu trúc monorepo, được chia thành hai phần chính: **backend** và **frontend**.

### 📁 Thư mục gốc (`NTK/`)

```
NTK/
├── backend/ # Mã nguồn NestJS API
├── frontend/ # Mã nguồn React cho giao diện người dùng
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

## Công nghệ sử dụng

### Backend

* **Framework**: [NestJS](https://nestjs.com/)
* **Ngôn ngữ**: TypeScript
* **Cơ sở dữ liệu**: Prisma

### Frontend

* **Thư viện**: [React](https://reactjs.org/)
* **Styling**: [TailwindCSS](https://tailwindcss.com/)
* **Build Tool**: [Vite](https://vitejs.dev/)

-----

### 1. Cài đặt Backend

a. **Di chuyển vào thư mục backend:**
```bash
cd backend
```

b. **Cài đặt các dependency:**
```bash
npm install
```

c. **Chạy development server:**
```bash
# Chế độ theo dõi (watch mode)
npm run start:dev
```

Backend sẽ chạy tại `http://localhost:3000`.

### 2. Cài đặt Frontend

a. **Di chuyển vào thư mục frontend:**
```bash
cd frontend
```

b. **Cài đặt các dependency:**
```bash
npm i
```

c. **Chạy development server:**
```bash
npm run dev
```

Frontend sẽ có sẵn tại `http://localhost:5173` (hoặc một cổng khác nếu cổng 5173 đã được sử dụng).
