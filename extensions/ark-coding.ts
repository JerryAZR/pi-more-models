import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
	pi.registerProvider("ark-coding", {
		name: "Volcengine Coding Plan",
		baseUrl: "https://ark.cn-beijing.volces.com/api/coding",
		apiKey: "$ARK_API_KEY",
		api: "anthropic-messages",
		models: [
			{
				id: "glm-5.2",
				name: "GLM 5.2",
				reasoning: true,
				input: ["text"],
				contextWindow: 1_000_000,
				maxTokens: 128_000,
				cost: { input: 8, output: 28, cacheRead: 2, cacheWrite: 0 },
			},
			{
				id: "kimi-k2.6",
				name: "Kimi K2.6",
				reasoning: true,
				input: ["text", "image"],
				contextWindow: 256_000,
				maxTokens: 16_000,
				cost: { input: 6.5, output: 27, cacheRead: 0.65, cacheWrite: 8.125 },
			},
			{
				id: "minimax-m3",
				name: "MiniMax M3",
				reasoning: true,
				input: ["text", "image"],
				contextWindow: 1_000_000,
				maxTokens: 64_000,
				cost: { input: 2.1, output: 8.4, cacheRead: 0.42, cacheWrite: 0 },
			},
		],
	});
}
