# deno-hooks

Remote Deno hooks for prek integration tests.

This repo exposes a repo-level CLI entrypoint at `cli.ts`. prek installs that
entrypoint as an executable, and individual hooks call it with different
subcommands.
