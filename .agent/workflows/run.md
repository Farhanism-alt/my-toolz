---
description: How to run the SendNow PDF Tools application
---

# Running SendNow PDF Tools

Follow these steps to run the application locally.

### Prerequisites
1. Ensure you have **Node.js** (v18+) installed.
2. Ensure you have an **OpenAI API Key** if you want to use the OCR or Chat features.

### Installation
If you haven't already, install the dependencies:
```bash
npm install
```

### Environment Setup
Create a `.env.local` file in the root directory and add your OpenAI API key:
```env
OPENAI_API_KEY=your_key_here
```

### Running the Development Server
This will start the app in development mode with hot-reloading:
// turbo
```bash
npm run dev -- -p 3002
```
By default, the app will be available at [http://localhost:3002](http://localhost:3002).

### Building for Production
To create an optimized production build:
```bash
npm run build
```

### Starting the Production Server
After building, you can start the production server:
```bash
npm run start
```
