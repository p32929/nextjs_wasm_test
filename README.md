# nextjs_wasm_test

A working proof of concept for calling Rust-compiled WebAssembly from a Next.js app. The Rust side is a two-number adder — the point is the plumbing that gets it loaded and running in the browser.

## What's included

1. **Rust → wasm** — `src/lib.rs` exports a `#[no_mangle] extern "C"` function, compiled to `adder.wasm` as a `cdylib`
2. **The webpack config that makes it work** — `next.config.js` enables `asyncWebAssembly` and fixes the prerender path, which is the part that's actually fiddly
3. **A component that calls it** — `components/others/WaasmComponent.tsx` imports the module and calls `add_twos` from the UI
4. **Typed wasm exports** — `wasm.d.ts` declares the module's shape so TypeScript is happy
5. **Next.js + TypeScript + Material-UI + usm-redux** as the surrounding app

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

Contributions are very welcome, thank you! Before you start on a pull request, please open an issue and tell me what you would like to add or change. That way we can agree on it first, and your time is not wasted on something that might not fit. Thanks for helping make nextjs_wasm_test better.

## Share

<a href="https://p32929.github.io/share/?repo=nextjs_wasm_test"><img src="https://p32929.github.io/readme/share.svg" alt="Share this with your friends in just a click" width="420"></a>

## Support

<a href="https://p32929.github.io/support/"><img src="https://p32929.github.io/readme/support.svg" alt="If you like my works and want to support me, feel free to support" width="420"></a>
