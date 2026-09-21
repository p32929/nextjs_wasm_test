# nextjs_wasm_test

A working proof of concept for calling Rust-compiled WebAssembly from a Next.js app. The Rust side is a two-number adder — the point is the plumbing that gets it loaded and running in the browser.

## What's included

- **Rust → wasm** — `src/lib.rs` exports a `#[no_mangle] extern "C"` function, compiled to `adder.wasm` as a `cdylib`
- **The webpack config that makes it work** — `next.config.js` enables `asyncWebAssembly` and fixes the prerender path, which is the part that's actually fiddly
- **A component that calls it** — `components/others/WaasmComponent.tsx` imports the module and calls `add_twos` from the UI
- **Typed wasm exports** — `wasm.d.ts` declares the module's shape so TypeScript is happy
- **Next.js + TypeScript + Material-UI + usm-redux** as the surrounding app

## Project layout

```
src/lib.rs                            the Rust function
Cargo.toml                           crate-type = ["cdylib"]
adder.wasm                           the compiled output, committed
next.config.js                       asyncWebAssembly + output path fix
wasm.d.ts                            TypeScript types for the module
components/others/WaasmComponent.tsx calls add_twos from React
```

## Getting started

```bash
git clone https://github.com/p32929/nextjs_wasm_test.git
cd nextjs_wasm_test
npm install
npm run dev        # http://localhost:3000
```

`adder.wasm` is committed, so you don't need a Rust toolchain just to run it. To rebuild it after changing `src/lib.rs`:

```bash
rustup target add wasm32-unknown-unknown
cargo build --target wasm32-unknown-unknown --release
```

Then copy the resulting `.wasm` over `adder.wasm`.

## The gotcha this repo exists for

Webpack 5 doesn't enable WebAssembly by default, and the default output path breaks prerendering with `Error occurred prerendering page "/"`. Both fixes are in `next.config.js` — that file is the useful part of this repo.

## Contributing

Contributions are warmly welcomed and greatly appreciated! Whether it's a bug fix, new feature, or improvement, your input helps make this project better for everyone.

Before submitting a pull request, please:

1. Create an issue describing the feature or bug fix you'd like to work on
2. Wait for discussion and approval to ensure alignment with project goals
3. Fork the repository and create your feature branch
4. Submit your pull request with a clear description of changes

This approach helps avoid duplicate efforts and ensures smooth collaboration. Thank you for considering contributing!

## Share

Sharing this repository with your friends is just one click away from here

[![facebook](https://user-images.githubusercontent.com/6418354/179013321-ac1d1452-0689-493f-9066-940cf2302b6e.png)](https://www.facebook.com/sharer/sharer.php?u=https://github.com/p32929/nextjs_wasm_test/)
[![twitter](https://user-images.githubusercontent.com/6418354/179013351-7d8d6d1c-4ce2-46ab-bef8-4c4765a1b888.png)](https://twitter.com/intent/tweet?url=https://github.com/p32929/nextjs_wasm_test/)
[![tumblr](https://user-images.githubusercontent.com/6418354/179013343-3111f55a-3b90-40c7-8487-9777348672b0.png)](https://www.tumblr.com/share?v=3&u=https://github.com/p32929/nextjs_wasm_test/)
[![pocket](https://user-images.githubusercontent.com/6418354/179013334-b095c45f-becf-49f4-9ee1-5a731a9b1f85.png)](https://getpocket.com/save?url=https://github.com/p32929/nextjs_wasm_test/)
[![pinterest](https://user-images.githubusercontent.com/6418354/179013331-44cd9206-11b1-4b65-becb-5863b61c828f.png)](https://pinterest.com/pin/create/button/?url=https://github.com/p32929/nextjs_wasm_test/)
[![reddit](https://user-images.githubusercontent.com/6418354/179013338-7416ae3f-73ba-4522-86e1-1374d7082d22.png)](https://www.reddit.com/submit?url=https://github.com/p32929/nextjs_wasm_test/)
[![linkedin](https://user-images.githubusercontent.com/6418354/179013327-ca7b7102-1da8-4b1c-858f-1a6e5f21bd70.png)](https://www.linkedin.com/shareArticle?mini=true&url=https://github.com/p32929/nextjs_wasm_test/)
[![whatsapp](https://user-images.githubusercontent.com/6418354/179013353-f477fa0b-3e6f-4138-a357-c9991b23ff88.png)](https://api.whatsapp.com/send?text=https://github.com/p32929/nextjs_wasm_test/)
