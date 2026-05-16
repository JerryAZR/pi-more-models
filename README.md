# pi-more-models

Additional model providers for [pi](https://pi.dev).

## Installation

```bash
pi install git:github.com/JerryAZR/pi-more-models
```

## Bailian Token Plan

Provider ID: `bailian-token-plan`

Endpoint: `https://token-plan.cn-beijing.maas.aliyuncs.com/apps/anthropic`

API key resolution (in priority order):

1. `auth.json` — `"bailian-token-plan": { "type": "api_key", "key": "..." }`
2. Environment variable — `BAILIAN_TOKEN_PLAN_API_KEY`
3. `models.json` fallback

### Configured Models

| Model ID | Name | Context Window | Max Output Tokens | Reasoning | Vision |
|----------|------|---------------|-------------------|-----------|--------|
| `qwen3.6-plus` | Qwen 3.6 Plus | 1,000,000 | 64,000 | ✅ | ✅ |
| `deepseek-v4-pro` | DeepSeek V4 Pro | 1,000,000 | 384,000 | ✅ | ❌ |
| `deepseek-v4-flash` | DeepSeek V4 Flash | 1,000,000 | 384,000 | ✅ | ❌ |
| `kimi-k2.6` | Kimi K2.6 | 256,000 | 16,000 | ✅ | ✅ |
| `glm-5.1` | GLM 5.1 | 202,000 | 128,000 | ✅ | ❌ |
| `MiniMax-M2.5` | MiniMax M2.5 | 200,000 | 128,000 | ✅ | ❌ |

### Notes

- The token plan also supports older models such as **GLM-5** and **Kimi K2.5**. These are intentionally omitted to keep the model list lean. If you need them, open an issue or override them locally via `models.json`.
- Pricing (`cost`) is not configured in this provider definition. Token-plan billing is typically pre-paid; if you need per-request cost tracking, set the `cost` fields in your local `models.json` overrides.
- All models are exposed via the `anthropic-messages` API. If Aliyun changes the compatibility layer, you may need to switch to `openai-completions` with model-specific `compat` flags.
