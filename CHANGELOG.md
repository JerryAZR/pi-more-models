# Changelog

## 2.0.0 (2026-07-??)

### Added
- **New `kimi-coding` override**: Keeps only `k3`, `kimi-for-coding`, `kimi-for-coding-highspeed`. K3 supports thinking levels low/high/max with default high.
- **New `opencode-go` override**: Keeps only `grok-4.5`, `glm-5.2`, `deepseek-v4-flash`, `deepseek-v4-pro`.

### Changed
- Updated `README.md` to document all four providers (custom + overrides).

## 1.1.1 (2026-07-06)

### Changed
- `ark-coding` provider: replaced `kimi-k2.6` with `kimi-k2.7-code`

## 1.1.0 (2026-07-06)

### Added
- New provider: `ark-coding` (Volcengine Coding Plan)
  - Models: `glm-5.2`, `kimi-k2.6`, `minimax-m3`
  - Anthropic-compatible API at `https://ark.cn-beijing.volces.com/api/coding`
  - Environment variable: `$ARK_API_KEY`

### Changed
- `bailian-token-plan` provider: `apiKey` now uses `$BAILIAN_TOKEN_PLAN_API_KEY` env var reference (was literal string)
- Updated `qwen3.6-plus` → `qwen3.7-max` (no vision, updated pricing)
- Updated `glm-5.1` → `glm-5.2` (1M context, updated pricing)
- Updated `kimi-k2.6` → `kimi-k2.7-code` (renamed only)
