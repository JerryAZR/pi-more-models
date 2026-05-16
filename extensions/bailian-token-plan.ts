import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
	pi.registerProvider("bailian-token-plan", {
		name: "Bailian Token Plan",
		baseUrl: "https://token-plan.cn-beijing.maas.aliyuncs.com/apps/anthropic",
		apiKey: "BAILIAN_TOKEN_PLAN_API_KEY",
		api: "anthropic-messages",
		models: [
			{
				id: "qwen3.6-plus",
				name: "Qwen 3.6 Plus",
				reasoning: true,
				input: ["text", "image"],
				contextWindow: 1_000_000,
				maxTokens: 64_000,
				cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
			},
			{
				id: "deepseek-v4-pro",
				name: "DeepSeek V4 Pro",
				reasoning: true,
				input: ["text"],
				contextWindow: 1_000_000,
				maxTokens: 384_000,
				cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
			},
			{
				id: "deepseek-v4-flash",
				name: "DeepSeek V4 Flash",
				reasoning: true,
				input: ["text"],
				contextWindow: 1_000_000,
				maxTokens: 384_000,
				cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
			},
			{
				id: "kimi-k2.6",
				name: "Kimi K2.6",
				reasoning: true,
				input: ["text", "image"],
				contextWindow: 256_000,
				maxTokens: 16_000,
				cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
			},
			{
				id: "glm-5.1",
				name: "GLM 5.1",
				reasoning: true,
				input: ["text"],
				contextWindow: 202_000,
				maxTokens: 128_000,
				cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
			},
			{
				id: "MiniMax-M2.5",
				name: "MiniMax M2.5",
				reasoning: true,
				input: ["text"],
				contextWindow: 200_000,
				maxTokens: 128_000,
				cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
			},
		],
	});
}
