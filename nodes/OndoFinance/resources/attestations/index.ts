import type { INodeProperties } from 'n8n-workflow';

export const attestationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Attestations"
					]
				}
			},
			"options": [
				{
					"name": "Create Attestation",
					"value": "Create Attestation",
					"action": "Request a Mint or Redeem Attestation",
					"description": "An attestation is a signed payload that authorizes a user to mint or redeem tokens. Each attestation is only valid for a limited time and is determined by the duration in the request. A user can specify a duration of `short` for a tighter price spread or `long` for an extended validity period.\n\nNote: There are specific user and session limits which can prevent the creation of an attestation. For more information on limits, see the [Get Trading Limits](https://docs.ondo.finance/api-reference/limits/get-trading-limits) endpoint.\n\nSee also: [Error Codes](https://docs.ondo.finance/api-reference/error-codes)\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/attestations"
						}
					}
				},
				{
					"name": "Create Soft Attestation Quote",
					"value": "Create Soft Attestation Quote",
					"action": "Request a Soft Attestation Quote",
					"description": "A soft quote provides pricing information for mint or redeem operations without creating an actual attestation. Unlike the [Request a Mint or Redeem Attestation endpoint](https://docs.ondo.finance/api-reference/attestations/request-a-mint-or-redeem-attestation), soft quotes:\n\n- Are not eligible for on-chain submission\n- Do not count against user limits (Active Notional Value, Session Notional Value, or Active Attestations)\n- Serve as pricing references for quote validation and user interface display\n- Do not include authentication fields such as `attestationId`, `userId`, `expiration`, or `signature`\n\nThis endpoint can be used to acquire estimated pricing without impacting trading limits or creating binding commitments.\n\nSee also: [Error Codes](https://docs.ondo.finance/api-reference/error-codes)\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/attestations/soft"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/attestations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Attestations"
					],
					"operation": [
						"Create Attestation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chain Id",
			"name": "chainId",
			"type": "options",
			"default": "ethereum-1",
			"description": "The chain's identifier including the chain name and chain id.",
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
			"routing": {
				"send": {
					"property": "chainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attestations"
					],
					"operation": [
						"Create Attestation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Symbol",
			"name": "symbol",
			"type": "string",
			"default": "AAPLon",
			"description": "The GM token symbol.",
			"routing": {
				"send": {
					"property": "symbol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attestations"
					],
					"operation": [
						"Create Attestation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Side",
			"name": "side",
			"type": "options",
			"default": "buy",
			"description": "The direction of the trade.",
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
					"property": "side",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attestations"
					],
					"operation": [
						"Create Attestation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Token Amount",
			"name": "tokenAmount",
			"type": "string",
			"default": "5.000000000000000000",
			"description": "The number of tokens, represented as a string-encoded decimal with up to 18 digits after the decimal point.",
			"routing": {
				"send": {
					"property": "tokenAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attestations"
					],
					"operation": [
						"Create Attestation"
					]
				}
			}
		},
		{
			"displayName": "Duration",
			"name": "duration",
			"type": "options",
			"default": "short",
			"description": "Specifies the desired validity period for the attestation. Users can specify a duration of 'short' \nfor a tighter price spread or 'long' for an extended validity period.\n",
			"options": [
				{
					"name": "Short",
					"value": "short"
				},
				{
					"name": "Long",
					"value": "long"
				}
			],
			"routing": {
				"send": {
					"property": "duration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attestations"
					],
					"operation": [
						"Create Attestation"
					]
				}
			}
		},
		{
			"displayName": "User Address",
			"name": "userAddress",
			"type": "string",
			"default": "7YkSgYQ6x7uBv9E3n2Yh6mF5tQ1rZc8Lp4WsXjKd3Ha2",
			"description": "The Solana user address associated with the request. This is only required for Solana attestations.",
			"routing": {
				"send": {
					"property": "userAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attestations"
					],
					"operation": [
						"Create Attestation"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/attestations/soft",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Attestations"
					],
					"operation": [
						"Create Soft Attestation Quote"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chain Id",
			"name": "chainId",
			"type": "options",
			"default": "ethereum-1",
			"description": "The chain's identifier including the chain name and chain id.",
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
			"routing": {
				"send": {
					"property": "chainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attestations"
					],
					"operation": [
						"Create Soft Attestation Quote"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Symbol",
			"name": "symbol",
			"type": "string",
			"default": "AAPLon",
			"description": "The GM token symbol.",
			"routing": {
				"send": {
					"property": "symbol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attestations"
					],
					"operation": [
						"Create Soft Attestation Quote"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Side",
			"name": "side",
			"type": "options",
			"default": "buy",
			"description": "The direction of the trade.",
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
					"property": "side",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attestations"
					],
					"operation": [
						"Create Soft Attestation Quote"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Token Amount",
			"name": "tokenAmount",
			"type": "string",
			"default": "5.000000000000000000",
			"description": "The number of tokens, represented as a string-encoded decimal with up to 18 digits after the decimal point.",
			"routing": {
				"send": {
					"property": "tokenAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attestations"
					],
					"operation": [
						"Create Soft Attestation Quote"
					]
				}
			}
		},
		{
			"displayName": "Duration",
			"name": "duration",
			"type": "options",
			"default": "short",
			"description": "Specifies the desired validity period for the attestation. Users can specify a duration of 'short' \nfor a tighter price spread or 'long' for an extended validity period.\n",
			"options": [
				{
					"name": "Short",
					"value": "short"
				},
				{
					"name": "Long",
					"value": "long"
				}
			],
			"routing": {
				"send": {
					"property": "duration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attestations"
					],
					"operation": [
						"Create Soft Attestation Quote"
					]
				}
			}
		},
];
