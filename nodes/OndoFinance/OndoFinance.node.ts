import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { attestationsDescription } from './resources/attestations';
import { assetsDescription } from './resources/assets';
import { tickersDescription } from './resources/tickers';
import { chainsDescription } from './resources/chains';
import { limitsDescription } from './resources/limits';
import { statusDescription } from './resources/status';

export class OndoFinance implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'ondo-finance',
		name: 'N8nDevOndoFinance',
		icon: { light: 'file:./ondo-finance.png', dark: 'file:./ondo-finance.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Ondo Finance institutional-grade tokenized real-world assets platform bridging traditional finance and DeFi protocols',
		defaults: { name: 'ondo-finance' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevOndoFinanceApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Attestations",
					"value": "Attestations",
					"description": "Get Mint and Redeem Attestations"
				},
				{
					"name": "Assets",
					"value": "Assets",
					"description": "Get Asset Price Information"
				},
				{
					"name": "Tickers",
					"value": "Tickers",
					"description": "Get Ticker Information"
				},
				{
					"name": "Chains",
					"value": "Chains",
					"description": "Get On Chain Data"
				},
				{
					"name": "Limits",
					"value": "Limits",
					"description": "Get Trading Limits"
				},
				{
					"name": "Status",
					"value": "Status",
					"description": "Get Market and Trading Statuses"
				}
			],
			"default": ""
		},
		...attestationsDescription,
		...assetsDescription,
		...tickersDescription,
		...chainsDescription,
		...limitsDescription,
		...statusDescription
		],
	};
}
