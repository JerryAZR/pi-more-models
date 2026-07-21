import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
	pi.registerProvider("opencode-go", {
		name: "OpenCode Zen Go",
		baseUrl: "https://opencode.ai/zen/go/v1",
		apiKey: "$OPENCODE_API_KEY",
		api: "openai-completions",
		models: [
			{
				id: "grok-4.5",
				name: "Grok 4.5",
				reasoning: true,
				compat: {
					supportsStore: false,
					supportsDeveloperRole: false,
					maxTokensField: "max_tokens",
				},
				input: ["text", "image"],
				cost: { input: 2, output: 6, cacheRead: 0.5, cacheWrite: 0 },
				contextWindow: 500_000,
				maxTokens: 500_000,
			},
			{
				id: "glm-5.2",
				name: "GLM-5.2",
				reasoning: true,
				thinkingLevelMap: {
					off: null,
					minimal: null,
					low: null,
					medium: null,
					high: "high",
					max: "max",
				},
				compat: {
					supportsStore: false,
					supportsDeveloperRole: false,
					maxTokensField: "max_tokens",
				},
				input: ["text"],
				cost: { input: 1.4, output: 4.4, cacheRead: 0.26, cacheWrite: 0 },
				contextWindow: 1_000_000,
				maxTokens: 131_072,
			},
			{
				id: "deepseek-v4-flash",
				name: "DeepSeek V4 Flash",
				reasoning: true,
				thinkingLevelMap: {
					minimal: null,
					low: null,
					medium: null,
					high: "high",
					max: "max",
				},
				compat: {
					supportsStore: false,
					supportsDeveloperRole: false,
					maxTokensField: "max_tokens",
					requiresReasoningContentOnAssistantMessages: true,
					thinkingFormat: "deepseek",
				},
				input: ["text"],
				cost: { input: 0.14, output: 0.28, cacheRead: 0.0028, cacheWrite: 0 },
				contextWindow: 1_000_000,
				maxTokens: 384_000,
			},
			{
				id: "deepseek-v4-pro",
				name: "DeepSeek V4 Pro",
				reasoning: true,
				thinkingLevelMap: {
					minimal: null,
					low: null,
					medium: null,
					high: "high",
					max: "max",
				},
				compat: {
					supportsStore: false,
					supportsDeveloperRole: false,
					maxTokensField: "max_tokens",
					requiresReasoningContentOnAssistantMessages: true,
					thinkingFormat: "deepseek",
				},
				input: ["text"],
				cost: { input: 1.74, output: 3.48, cacheRead: 0.0145, cacheWrite: 0 },
				contextWindow: 1_000_000,
				maxTokens: 384_000,
			},
		],
	});
}
