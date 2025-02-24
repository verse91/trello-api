# 🚀 Trello API Clone

## 📝 Giới thiệu

Đây là dự án clone API của Trello - một công cụ quản lý công việc và dự án phổ biến. Dự án được xây dựng bằng Node.js, Express.js và MongoDB, sử dụng TypeScript để đảm bảo type-safe và dễ bảo trì.
Dự án này chỉ được code lại dưới mục đích học tập, không phải là sản phẩm để sử dụng vào các dự án thực tế

## 🛠️ Công nghệ sử dụng

- **Node.js**: Nền tảng runtime
- **Express.js**: Framework web
- **MongoDB**: Cơ sở dữ liệu
- **TypeScript**: Ngôn ngữ lập trình
- **Socket.IO**: Real-time communication
- **Joi**: Validation
- **Bun**: JavaScript runtime & bundler

## 📁 Cấu trúc thư mục

```
├── .git/                   # Git repository
├── build/                  # Thư mục chứa code đã build
├── node_modules/          # Dependencies
├── src/
│   ├── config/           # Cấu hình ứng dụng
│   ├── controllers/      # Xử lý logic nghiệp vụ
│   ├── middlewares/      # Middleware Express
│   ├── models/           # Schema và models MongoDB
│   ├── providers/        # Các service providers
│   ├── routes/           # Định tuyến API
│   ├── services/         # Business logic
│   ├── sockets/          # Xử lý WebSocket
│   ├── utils/            # Công cụ và helper functions
│   ├── validations/      # Schema validation
│   └── server.ts         # Entry point
│
├── .babelrc              # Cấu hình Babel
├── .env                  # Biến môi trường
├── .eslintrc.cjs        # Cấu hình ESLint
├── .gitignore           # Cấu hình Git ignore
├── bun.lockb            # Lock file của Bun
├── package.json         # Thông tin dự án và dependencies
├── package-lock.json    # Lock file của npm
├── tsconfig.json        # Cấu hình TypeScript chính
├── tsconfig.app.json    # Cấu hình TypeScript cho app
├── tsconfig.node.json   # Cấu hình TypeScript cho Node
└── README.md            # Tài liệu dự án
```

## ⚙️ Cài đặt và Chạy

### Yêu cầu hệ thống

- Node.js 18.16.0 trở lên
- MongoDB
- Bun (JavaScript runtime)

### Các bước cài đặt

1. Clone dự án:

```bash
git clone <repository-url>
cd trello-api
```

2. Cài đặt dependencies:

```bash
bun install
```

3. Tạo file môi trường:

```bash
cp .env.example .env
```

4. Cấu hình các biến môi trường trong file `.env`:

```env
MONGODB_URI=""
DB_NAME=""
HOST="localhost"
PORT=3000

AUTHOR=""
```

### Chạy ứng dụng

- **Môi trường development**:

```bash
bun run dev
```

- **Môi trường production**:

```bash
bun run production
```

## 🔥 Tính năng chính

- Quản lý boards
- Quản lý lists
- Quản lý cards
- Hệ thống authentication
- Real-time updates
- API RESTful
- Validation dữ liệu
- Error handling

## 📚 API Documentation

### Boards

- `GET /api/v1/boards`: Lấy danh sách boards
- `POST /api/v1/boards`: Tạo board mới
- `GET /api/v1/boards/:id`: Lấy thông tin board
- `PUT /api/v1/boards/:id`: Cập nhật board
- `DELETE /api/v1/boards/:id`: Xóa board

### Lists

- `GET /api/v1/boards/:boardId/lists`: Lấy danh sách lists
- `POST /api/v1/boards/:boardId/lists`: Tạo list mới
- `PUT /api/v1/boards/:boardId/lists/:listId`: Cập nhật list
- `DELETE /api/v1/boards/:boardId/lists/:listId`: Xóa list

### Cards

- `GET /api/v1/boards/:boardId/cards`: Lấy danh sách cards
- `POST /api/v1/boards/:boardId/cards`: Tạo card mới
- `PUT /api/v1/boards/:boardId/cards/:cardId`: Cập nhật card
- `DELETE /api/v1/boards/:boardId/cards/:cardId`: Xóa card

## 📄 License

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.
