"eslint-config-prettier": "^10.1.8",
"@babel/core": "^7.25.2",

npm i --save-dev eslint eslint-config-expo eslint-plugin-prettier prettier

package.json
scripts: {
"lint": "eslint . --config eslint.config.cjs",
"format": "prettier --write . --ignore-path .gitignore"
}
