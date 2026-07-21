import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
	pi.registerProvider("kimi-coding", {
		name: "Kimi For Coding",
		baseUrl: "https://api.kimi.com/coding",
		apiKey: "$KIMI_API_KEY",
		api: "anthropic-messages",
		models: [
			{
				id: "k3",
				name: "Kimi K3",
				reasoning: true,
				thinkingLevelMap: {
					off: null,
					minimal: null,
					low: "low",
					medium: null,
					high: "high",
					xhigh: null,
					max: "max",
				},
				headers: { "User-Agent": "KimiCLI/1.5" },
				compat: { allowEmptySignature: true, forceAdaptiveThinking: true },
				input: ["text", "image"],
				cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
				contextWindow: 1_048_576,
				maxTokens: 131_072,
			},
			{
				id: "kimi-for-coding",
				name: "Kimi For Coding",
				reasoning: true,
				headers: { "User-Agent": "KimiCLI/1.5" },
				compat: { allowEmptySignature: true, forceAdaptiveThinking: true },
				input: ["text", "image"],
				cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
				contextWindow: 262_144,
				maxTokens: 32_768,
			},
			{
				id: "kimi-for-coding-highspeed",
				name: "Kimi For Coding HighSpeed",
				reasoning: true,
				headers: { "User-Agent": "KimiCLI/1.5" },
				compat: { forceAdaptiveThinking: true },
				input: ["text", "image"],
				cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
				contextWindow: 262_144,
				maxTokens: 32_768,
			},
		],
	});
}
