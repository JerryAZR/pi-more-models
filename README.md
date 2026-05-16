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
- Cost tracking is an **estimate** of credit consumption per request, in **credits per 1M tokens**. The ¥→credit conversion ratio varies by subscription tier, so credits are the stable unit:
  - ¥150 / 25,000 credits → 1 credit = ¥0.006
  - ¥500 / 100,000 credits → 1 credit = ¥0.005
  - Direct API (pay-as-you-go): 100 credits = ¥1 → 1 credit = ¥0.01
  Source rates are from Aliyun's pay-as-you-go RMB pricing, multiplied by 100. The token plan may apply different multipliers or discounts, so displayed costs may not exactly match your credit balance deductions.
  Per-model rates are in `cost-rates.csv` (RMB/1M tokens; multiply by 100 for credits).
- **cacheWrite** is set to `0` for models where Aliyun docs do not list an explicit cache creation rate (deepseek-v4-pro, deepseek-v4-flash, MiniMax-M2.5). If those models support Anthropic-style `cache_control`, the actual cache creation cost is unknown and will not be tracked.
- All models are exposed via the `anthropic-messages` API. If Aliyun changes the compatibility layer, you may need to switch to `openai-completions` with model-specific `compat` flags.
