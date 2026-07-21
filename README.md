# pi-curated-models

Custom model providers and built-in provider overrides for [pi](https://pi.dev).

## Installation

```bash
pi install git:github.com/JerryAZR/pi-curated-models
```

## Providers

### Bailian Token Plan

Provider ID: `bailian-token-plan`

Endpoint: `https://token-plan.cn-beijing.maas.aliyuncs.com/apps/anthropic`

API key resolution (in priority order):

1. `auth.json` — `"bailian-token-plan": { "type": "api_key", "key": "..." }`
2. Environment variable — `BAILIAN_TOKEN_PLAN_API_KEY`
3. `models.json` fallback

API: `anthropic-messages`

#### Configured Models

| Model ID | Name | Context Window | Max Output Tokens | Reasoning | Vision |
|----------|------|---------------|-------------------|-----------|--------|
| `qwen3.7-max` | Qwen 3.7 Max | 1,000,000 | 64,000 | ✅ | ❌ |
| `deepseek-v4-pro` | DeepSeek V4 Pro | 1,000,000 | 384,000 | ✅ | ❌ |
| `deepseek-v4-flash` | DeepSeek V4 Flash | 1,000,000 | 384,000 | ✅ | ❌ |
| `kimi-k2.7-code` | Kimi K2.7 Code | 256,000 | 16,000 | ✅ | ✅ |
| `glm-5.2` | GLM 5.2 | 1,000,000 | 128,000 | ✅ | ❌ |
| `MiniMax-M2.5` | MiniMax M2.5 | 200,000 | 128,000 | ✅ | ❌ |

Cost tracking is in credits per 1M tokens (multiplied from Aliyun RMB pricing).

---

### Volcengine Coding Plan

Provider ID: `ark-coding`

Endpoint: `https://ark.cn-beijing.volces.com/api/coding`

API key resolution (in priority order):

1. `auth.json` — `"ark-coding": { "type": "api_key", "key": "..." }`
2. Environment variable — `ARK_API_KEY`
3. `models.json` fallback

API: `anthropic-messages`

#### Configured Models

| Model ID | Name | Context Window | Max Output Tokens | Reasoning | Vision |
|----------|------|---------------|-------------------|-----------|--------|
| `glm-5.2` | GLM 5.2 | 1,000,000 | 128,000 | ✅ | ❌ |
| `kimi-k2.7-code` | Kimi K2.7 Code | 256,000 | 16,000 | ✅ | ✅ |
| `minimax-m3` | MiniMax M3 | 1,000,000 | 64,000 | ✅ | ✅ |

---

### Kimi Coding (built-in override)

Provider ID: `kimi-coding`

Overrides the built-in `kimi-coding` provider. Keeps only selected models.

Endpoint: `https://api.kimi.com/coding`

API key resolution (in priority order):

1. `auth.json` — `"kimi-coding": { "type": "api_key", "key": "..." }`
2. Environment variable — `KIMI_API_KEY`
3. `models.json` fallback

API: `anthropic-messages`

#### Configured Models

| Model ID | Name | Context Window | Max Output Tokens | Reasoning | Vision | Thinking Levels |
|----------|------|---------------|-------------------|-----------|--------|-----------------|
| `k3` | Kimi K3 | 1,048,576 | 131,072 | ✅ | ✅ | low, high, max |
| `kimi-for-coding` | Kimi For Coding | 262,144 | 32,768 | ✅ | ✅ | — |
| `kimi-for-coding-highspeed` | Kimi For Coding HighSpeed | 262,144 | 32,768 | ✅ | ✅ | — |

K3 uses adaptive thinking with configurable reasoning effort: `low`, `high` (default), `max`.

---

### OpenCode Zen Go (built-in override)

Provider ID: `opencode-go`

Overrides the built-in `opencode-go` provider. Keeps only selected models.

Endpoint: `https://opencode.ai/zen/go/v1`

API key resolution (in priority order):

1. `auth.json` — `"opencode-go": { "type": "api_key", "key": "..." }`
2. Environment variable — `OPENCODE_API_KEY`
3. `models.json` fallback

API: `openai-completions`

#### Configured Models

| Model ID | Name | Context Window | Max Output Tokens | Reasoning | Vision | Thinking Format |
|----------|------|---------------|-------------------|-----------|--------|-----------------|
| `grok-4.5` | Grok 4.5 | 500,000 | 500,000 | ✅ | ✅ | — |
| `glm-5.2` | GLM-5.2 | 1,000,000 | 131,072 | ✅ | ❌ | — |
| `deepseek-v4-flash` | DeepSeek V4 Flash | 1,000,000 | 384,000 | ✅ | ❌ | deepseek |
| `deepseek-v4-pro` | DeepSeek V4 Pro | 1,000,000 | 384,000 | ✅ | ❌ | deepseek |

Session attribution headers (`x-opencode-session`, `x-opencode-client`) are still sent automatically by pi, since the provider ID `opencode-go` is recognized.
