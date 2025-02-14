#!/usr/bin/env bash
set -eu

cargo profile instruments --release -t time --open --features tracing/release_max_level_info --example perf -- $@