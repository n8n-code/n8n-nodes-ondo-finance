import type { INodeProperties } from 'n8n-workflow';

export const limitsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Limits"
					]
				}
			},
			"options": [
				{
					"name": "Get Trading Limits",
					"value": "Get Trading Limits",
					"action": "Get Trading Limits",
					"description": "Provides real-time trading limits based on global, user, and asset-specific exposure limits.\n\nLimits:\n- The \"Max Notional Value\" limit is based on the dollar value of outstanding attestations. That is, if a user has a limit of \\$1,000,000, and has 30 non-expired, non-filled attestations at a value of \\$999,000, they will not be able to request another attestation for \\$1000.\n- The \"Remaining Attestations\" limits the number of non-expired, non-executed attestations. For example if the limit is 50, and a user has 50 outstanding attestations, they must wait for one to execute or expire before requesting another.\n\nIf the market is closed or paused, the response will indicate that trading is not allowed and provide the reason. For more information on market hours, see the `/v1/status/market` endpoint.\n\n**Trading Limits Reason Codes**\n\nWhen trading is not allowed, the response will include a `reason` field which may include one of the following common codes:\n- `MARKET_CLOSED`: Market is closed.\n- `MARKET_PAUSED`: Market is temporarily paused.\n- `ASSET_PAUSED`: Specific asset is paused.\n- `ASSET_CLOSED_FOR_SESSION`: The asset is not tradable in this session (e.g., not available overnight; see [Get Market Data](https://docs.ondo.finance/api-reference/assets/get-market-data-for-all-supported-assets))\n- `ASSET_LIMITED`: Asset can be traded, but order size is more limited than usual.\n- `MAX_LIMIT_REACHED`: Maximum limit has been reached.\n- `MAX_ATTESTATIONS`: Maximum attestations reached.\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/limits/trading"
						}
					}
				},
				{
					"name": "Get Session Limits",
					"value": "Get Session Limits",
					"action": "Get Session Limits",
					"description": "Provides theoretical maximum asset-specific trading limits for each trading session. These limits are per-user, not global. This API reflects Ondo's statically defined limits; for dynamic, real-time values, see [Get Trading Limits](https://docs.ondo.finance/api-reference/limits/get-trading-limits))\n\nLimits:\n- The \"Max Attestation Count\" limits the number of non-expired, non-executed attestations. For example if the limit is 50, and a user has 50 outstanding attestations, they must wait for one to execute or expire before requesting another.\n- The \"Max Active Notional Value\" limit is based on the dollar value of outstanding attestations. That is, if a user has a limit of \\$1,000,000, and has 30 non-expired, non-filled attestations at a value of \\$999,000, they will not be able to request another attestation for \\$1000.\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/limits/session"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/limits/trading",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Limits"
					],
					"operation": [
						"Get Trading Limits"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
			"description": "The GM token symbol.",
			"default": "AAPLon",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "symbol",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Limits"
					],
					"operation": [
						"Get Trading Limits"
					]
				}
			}
		},
		{
			"displayName": "Side",
			"name": "side",
			"required": true,
			"description": "The trade side",
			"default": "buy",
			"type": "options",
			"options": [
				{
					"name": "Buy",
					"value": "buy"
				},
				{
					"name": "Sell",
					"value": "sell"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "side",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Limits"
					],
					"operation": [
						"Get Trading Limits"
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
						"Limits"
					],
					"operation": [
						"Get Trading Limits"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/limits/session",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Limits"
					],
					"operation": [
						"Get Session Limits"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"description": "The GM token symbol.",
			"default": "AAPLon",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "symbol",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Limits"
					],
					"operation": [
						"Get Session Limits"
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
						"Limits"
					],
					"operation": [
						"Get Session Limits"
					]
				}
			}
		},
];
