# Changelog

## 1.1.0 (2026-06-17)

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
