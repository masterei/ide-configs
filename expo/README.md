## 🚀 Usage

1. Copy the appropriate folder’s contents (e.g., `expo/`) into your project’s `.vscode/` directory.
2. Optionally copy ESLint/Prettier config files into your project root.
3. Open the project in VS Code — it will suggest installing recommended extensions.
4. Enjoy a consistent coding experience!

## 🧩 Installation & Setup (for ESLint + Prettier)

To use the provided ESLint and Prettier config:

### 1. Install the required dependencies:

```bash
npm i --save-dev eslint eslint-config-expo eslint-plugin-prettier prettier
```

### 2. Add the following scripts to your `package.json`:

```jsonc
"scripts": {
  "lint": "eslint . --config eslint.config.cjs",
  "format": "prettier --write . --ignore-path .gitignore"
}
```

## **🎉 That's it — enjoy!**
