import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
	pi.registerProvider("bailian-token-plan", {
		name: "Bailian Token Plan",
		baseUrl: "https://token-plan.cn-beijing.maas.aliyuncs.com/apps/anthropic",
		apiKey: "$BAILIAN_TOKEN_PLAN_API_KEY",
		api: "anthropic-messages",
		models: [
		{
			id: "qwen3.7-max",
			name: "Qwen 3.7 Max",
			reasoning: true,
			input: ["text"],
			contextWindow: 1_000_000,
			maxTokens: 64_000,
			cost: { input: 1200, output: 3600, cacheRead: 120, cacheWrite: 1500 },
		},
			{
				id: "deepseek-v4-pro",
				name: "DeepSeek V4 Pro",
				reasoning: true,
				input: ["text"],
				contextWindow: 1_000_000,
				maxTokens: 384_000,
				cost: { input: 1200, output: 2400, cacheRead: 100, cacheWrite: 0 },
			},
			{
				id: "deepseek-v4-flash",
				name: "DeepSeek V4 Flash",
				reasoning: true,
				input: ["text"],
				contextWindow: 1_000_000,
				maxTokens: 384_000,
				cost: { input: 100, output: 200, cacheRead: 20, cacheWrite: 0 },
			},
			{
				id: "kimi-k2.7-code",
				name: "Kimi K2.7 Code",
				reasoning: true,
				input: ["text", "image"],
				contextWindow: 256_000,
				maxTokens: 16_000,
				cost: { input: 650, output: 2700, cacheRead: 65, cacheWrite: 812.5 },
			},
		{
			id: "glm-5.2",
			name: "GLM 5.2",
			reasoning: true,
			input: ["text"],
			contextWindow: 1_000_000,
			maxTokens: 128_000,
			cost: { input: 800, output: 2800, cacheRead: 200, cacheWrite: 0 },
		},
			{
				id: "MiniMax-M2.5",
				name: "MiniMax M2.5",
				reasoning: true,
				input: ["text"],
				contextWindow: 200_000,
				maxTokens: 128_000,
				cost: { input: 210, output: 840, cacheRead: 42, cacheWrite: 0 },
			},
		],
	});
}