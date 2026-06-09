import type { INodeProperties } from 'n8n-workflow';

export const tickersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tickers"
					]
				}
			},
			"options": [
				{
					"name": "Get All Tickers",
					"value": "Get All Tickers",
					"action": "Get Price and Volume Data for All Supported Tickers",
					"description": "This endpoint retrieves the latest price and volume data for all supported tickers. A ticker represents a specific asset in the market.\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/tickers"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/tickers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tickers"
					],
					"operation": [
						"Get All Tickers"
					]
				}
			}
		},
		{
			"displayName": "API Key (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: x-api-key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickers"
					],
					"operation": [
						"Get All Tickers"
					]
				}
			}
		},
];
