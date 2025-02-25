Dưới đây là nội dung được viết lại hoàn toàn bằng tiếng Anh:

---

# 🚀 Trello API Clone

## 📝 Introduction

This is a project that clones the Trello API, a popular tool for task and project management. The project is built using Node.js, Express.js, and MongoDB, with TypeScript to ensure type safety and maintainability.  
This project is developed purely for learning purposes and is not intended for use in real-world applications.

## 🛠️ Technologies Used

- **Node.js**: Runtime platform
- **Express.js**: Web framework
- **MongoDB**: Database
- **TypeScript**: Programming language
- **Socket.IO**: Real-time communication
- **Joi**: Data validation
- **Bun**: JavaScript runtime & bundler

## 📁 Directory Structure

```
├── .git/                 # Git repository
├── build/                # Directory for compiled code
├── node_modules/         # Project dependencies
├── src/
│   ├── config/           # Application configuration
│   ├── controllers/      # Business logic handling
│   ├── middlewares/      # Express middleware
│   ├── models/           # MongoDB schemas and models
│   ├── providers/        # Service providers
│   ├── routes/           # API routing
│   ├── services/         # Core business logic
│   ├── sockets/          # WebSocket handling
│   ├── utils/            # Utilities and helper functions
│   ├── validations/      # Validation schemas
│   └── server.ts         # Application entry point
│
├── .babelrc              # Babel configuration
├── .env                  # Environment variables
├── .eslintrc.cjs         # ESLint configuration
├── .gitignore            # Git ignore settings
├── bun.lockb             # Bun lock file
├── package.json          # Project info and dependencies
├── package-lock.json     # npm lock file
├── tsconfig.json         # Main TypeScript configuration
├── tsconfig.app.json     # TypeScript config for the app
├── tsconfig.node.json    # TypeScript config for Node
└── README.md             # Project documentation
```

## ⚙️ Installation and Setup

### System Requirements

- Node.js 18.16.0 or higher
- MongoDB
- Bun (JavaScript runtime)

### Installation Steps

1. Clone the project:

```bash
git clone https://github.com/verse91/trello-api.git
cd trello-api
```

2. Install dependencies:

```bash
bun install
```

3. Create an environment file:

```bash
cp .env.example .env
```

4. Configure environment variables in the `.env` file:

```env
MONGODB_URI=""
DB_NAME=""
HOST="localhost"
PORT=3000

AUTHOR=""
```

### Running the Application

- **Development mode**:

```bash
bun run dev
```

- **Production mode**:

```bash
bun run production
```

## 🔥 Key Features

- Board management
- List management
- Card management
- Authentication system
- Real-time updates
- RESTful API
- Data validation
- Error handling

## 📚 API Documentation

### Boards

- `GET /api/v1/boards`: Retrieve a list of boards
- `POST /api/v1/boards`: Create a new board
- `GET /api/v1/boards/:id`: Get board details
- `PUT /api/v1/boards/:id`: Update a board
- `DELETE /api/v1/boards/:id`: Delete a board

### Lists

- `GET /api/v1/boards/:boardId/lists`: Retrieve a list of lists
- `POST /api/v1/boards/:boardId/lists`: Create a new list
- `PUT /api/v1/boards/:boardId/lists/:listId`: Update a list
- `DELETE /api/v1/boards/:boardId/lists/:listId`: Delete a list

### Cards

- `GET /api/v1/boards/:boardId/cards`: Retrieve a list of cards
- `POST /api/v1/boards/:boardId/cards`: Create a new card
- `PUT /api/v1/boards/:boardId/cards/:cardId`: Update a card
- `DELETE /api/v1/boards/:boardId/cards/:cardId`: Delete a card

## 📄 License

This project is distributed under the MIT License.
