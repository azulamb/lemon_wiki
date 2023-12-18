# 環境構築

## コマンド

## 立ち上げ

一応プロジェクトを作った時の立ち上げについて。

```sh
deno run -A -r https://fresh.deno.dev
```

```txt
 🍋 Fresh: The next-gen web framework. 

Project Name lemon_wiki
Let's set up your new Fresh project.

Fresh has built in support for styling using Tailwind CSS. Do you want to use this? [Y/n] n
Do you use VS Code? [Y/n] y
The manifest has been generated for 5 routes and 1 islands.

Project initialized!

Enter your project directory using cd lemon_wiki.
Run deno task start to start the project. CTRL-C to stop.

Stuck? Join our Discord https://discord.gg/deno

Happy hacking! 🦕
```

`deno.json` に `fmt` のオプション追加と `fmt` でコードを直す。

```json
  "fmt": {
    "singleQuote": true
  },
```

```sh
deno fmt
```
