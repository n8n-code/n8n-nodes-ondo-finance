import type { INodeProperties } from 'n8n-workflow';

export const itnDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"ITN"
					]
				}
			},
			"options": [
				{
					"name": "List ITN Assets",
					"value": "List ITN Assets",
					"action": "List ITN Assets",
					"description": "This endpoint lists every asset available through Alpaca's Instant Tokenization Network (ITN) and the networks each asset is deployed on. For each network, it returns the token contract address, the token decimals, and the ITN mint and redeem fees.\n\nFor current mint and redeem availability, see [Get ITN Status](https://docs.ondo.finance/api-reference/itn/get-itn-status).\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n\nFor the complete ITN workflow, see [ITN Integration](https://docs.ondo.finance/api-reference/itn-integration).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/itn/assets"
						}
					}
				},
				{
					"name": "Get ITN Status",
					"value": "Get ITN Status",
					"action": "Get ITN Status",
					"description": "This endpoint reports whether ITN minting and redeeming are open, both globally and for each asset on each network.\n\n**Global Status**\n\nThe top-level `mint` and `redeem` objects report whether each side is open globally. When a side is closed, every asset on every network is also unavailable for that side.\n\n**Per-Network Availability**\n\nEach entry in `assets[].networks` reports whether minting and redeeming are enabled for that asset on that network.\n\n**ITN Status Reason Codes**\n\nWhen a side is closed or unavailable, `reason` is set. Otherwise, `reason` is `null`.\n\n`reason.code` is one of:\n- `ITN_UNAVAILABLE`: ITN is temporarily unavailable, either platform-wide or for the asset.\n- `MARKET_PAUSED`: ITN minting or redeeming is paused for all assets.\n- `PAUSED_GM_CHAIN`: ITN minting or redeeming is paused on the network. Only returned per network.\n- `ASSET_PAUSED`: The asset is paused for ITN. Only returned per network.\n\nFor limits on how much you can mint or redeem, see [Get ITN Limits for an Asset](https://docs.ondo.finance/api-reference/itn/get-itn-limits-for-an-asset).\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n\nFor the complete ITN workflow, see [ITN Integration](https://docs.ondo.finance/api-reference/itn-integration).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/itn/status"
						}
					}
				},
				{
					"name": "Get ITN Limits",
					"value": "Get ITN Limits",
					"action": "Get ITN Limits for an Asset",
					"description": "This endpoint returns your ITN mint and redeem limits for an asset on each network it is deployed on, and how much you can still mint and redeem in the current session. All amounts are USD notional values.\n\nYour Ondo account must be linked to an Alpaca account for ITN. See the prerequisites in [ITN Integration](https://docs.ondo.finance/api-reference/itn-integration).\n\nLimits:\n- `sessionLimits` lists your limit for each market session. A limit of `\"0\"` means that side is closed during the session.\n- `remaining` is the amount you can still mint or redeem on the network in the current session. Your account limit is shared across networks.\n- `minMintNotional` is the smallest mint request accepted.\n\nThis endpoint does not report pauses. To check whether minting or redeeming is open, see [Get ITN Status](https://docs.ondo.finance/api-reference/itn/get-itn-status).\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n\nFor the complete ITN workflow, see [ITN Integration](https://docs.ondo.finance/api-reference/itn-integration).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/itn/assets/{{$parameter[\"symbol\"]}}/limits"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/itn/assets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"ITN"
					],
					"operation": [
						"List ITN Assets"
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
						"ITN"
					],
					"operation": [
						"List ITN Assets"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/itn/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"ITN"
					],
					"operation": [
						"Get ITN Status"
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
						"ITN"
					],
					"operation": [
						"Get ITN Status"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/itn/assets/{symbol}/limits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"ITN"
					],
					"operation": [
						"Get ITN Limits"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
			"description": "The GM token symbol",
			"default": "AAPLon",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"ITN"
					],
					"operation": [
						"Get ITN Limits"
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
						"ITN"
					],
					"operation": [
						"Get ITN Limits"
					]
				}
			}
		},
];
