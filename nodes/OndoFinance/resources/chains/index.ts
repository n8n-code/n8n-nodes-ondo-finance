import type { INodeProperties } from 'n8n-workflow';

export const chainsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Chains"
					]
				}
			},
			"options": [
				{
					"name": "Get Balances",
					"value": "Get Balances",
					"action": "Get Token Balances for a User or Token",
					"description": "This endpoint retrieves all token balances for a GM Chain. Results can be optionally filtered by `tokenAddress`, `userAddress`, or both parameters together. If no filters are provided, all balances on the chain will be returned.\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/chains/{{$parameter[\"chainId\"]}}/balances"
						}
					}
				},
				{
					"name": "Get Token Info",
					"value": "Get Token Info",
					"action": "Get Token Info",
					"description": "This endpoint retrieves contract information about a token on a GM chain.\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/chains/{{$parameter[\"chainId\"]}}/tokens/{{$parameter[\"tokenAddress\"]}}/info"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/chains/{chainId}/balances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chains"
					],
					"operation": [
						"Get Balances"
					]
				}
			}
		},
		{
			"displayName": "Chain ID",
			"name": "chainId",
			"required": true,
			"description": "The chain's identifier including the chain name and chain id.",
			"default": "ethereum-1",
			"type": "options",
			"options": [
				{
					"name": "Ethereum 1",
					"value": "ethereum-1"
				},
				{
					"name": "Bsc 56",
					"value": "bsc-56"
				},
				{
					"name": "Solana 900",
					"value": "solana-900"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Chains"
					],
					"operation": [
						"Get Balances"
					]
				}
			}
		},
		{
			"displayName": "Token Address",
			"name": "tokenAddress",
			"description": "Filter by a token contract address (optional).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tokenAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chains"
					],
					"operation": [
						"Get Balances"
					]
				}
			}
		},
		{
			"displayName": "User Address",
			"name": "userAddress",
			"description": "Filter by a user wallet address (optional).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chains"
					],
					"operation": [
						"Get Balances"
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
						"Chains"
					],
					"operation": [
						"Get Balances"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/chains/{chainId}/tokens/{tokenAddress}/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chains"
					],
					"operation": [
						"Get Token Info"
					]
				}
			}
		},
		{
			"displayName": "Chain ID",
			"name": "chainId",
			"required": true,
			"description": "The chain's identifier including the chain name and chain id.",
			"default": "ethereum-1",
			"type": "options",
			"options": [
				{
					"name": "Ethereum 1",
					"value": "ethereum-1"
				},
				{
					"name": "Bsc 56",
					"value": "bsc-56"
				},
				{
					"name": "Solana 900",
					"value": "solana-900"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Chains"
					],
					"operation": [
						"Get Token Info"
					]
				}
			}
		},
		{
			"displayName": "Token Address",
			"name": "tokenAddress",
			"required": true,
			"description": "The token contract address",
			"default": "0x14c3abF95Cb9C93a8b82C1CdCB76D72Cb87b2d4c",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chains"
					],
					"operation": [
						"Get Token Info"
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
						"Chains"
					],
					"operation": [
						"Get Token Info"
					]
				}
			}
		},
];
