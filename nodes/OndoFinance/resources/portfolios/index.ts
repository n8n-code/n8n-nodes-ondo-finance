import type { INodeProperties } from 'n8n-workflow';

export const portfoliosDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolios"
					]
				}
			},
			"options": [
				{
					"name": "List Portfolios",
					"value": "List Portfolios",
					"action": "Get All Portfolios",
					"description": "This endpoint returns all active Ondo Intelligent Portfolios. Each portfolio contains its product metadata, net assets, dividend yields, service fee, rebalance data, and constituents.\n\nThe response sorts the portfolios by symbol, and it sorts the constituents of each portfolio by symbol. Each entry in `portfolios` has the same fields as the response of [Get a Portfolio](https://docs.ondo.finance/api-reference/portfolios/get-a-portfolio).\n\nRates, weights, and yields are decimal fractions. For example, `\"0.0009\"` is 0.09% and `\"0.1143\"` is 11.43%. Dates are RFC 3339 timestamps in UTC.\n\nThis endpoint does not return prices. To get the price of a portfolio token, use [Get Current Price for an Asset](https://docs.ondo.finance/api-reference/assets/get-current-price-for-an-asset), [Get OHLC Data for an Asset](https://docs.ondo.finance/api-reference/assets/get-ohlc-open-high-low-close-data-for-an-asset), or [Get Market Data for an Asset](https://docs.ondo.finance/api-reference/assets/get-market-data-for-an-asset) with the portfolio symbol.\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/portfolios"
						}
					}
				},
				{
					"name": "Get Portfolio",
					"value": "Get Portfolio",
					"action": "Get a Portfolio",
					"description": "This endpoint returns one Ondo Intelligent Portfolio. The response contains the product metadata, net assets, dividend yields, service fee, rebalance data, and constituents of the portfolio.\n\nThe response has the same fields as each entry of [Get All Portfolios](https://docs.ondo.finance/api-reference/portfolios/get-all-portfolios). The response sorts the constituents by symbol.\n\nIf the symbol is not an active portfolio, the endpoint returns the `RESOURCE_NOT_FOUND` error code with status `404`. Ondo Stocks symbols, such as `AAPLon`, also return this error.\n\nRates, weights, and yields are decimal fractions. For example, `\"0.0009\"` is 0.09% and `\"0.1143\"` is 11.43%. Dates are RFC 3339 timestamps in UTC.\n\nThis endpoint does not return prices. To get the price of a portfolio token, use [Get Current Price for an Asset](https://docs.ondo.finance/api-reference/assets/get-current-price-for-an-asset), [Get OHLC Data for an Asset](https://docs.ondo.finance/api-reference/assets/get-ohlc-open-high-low-close-data-for-an-asset), or [Get Market Data for an Asset](https://docs.ondo.finance/api-reference/assets/get-market-data-for-an-asset) with the portfolio symbol.\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/portfolios/{{$parameter[\"symbol\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/portfolios",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolios"
					],
					"operation": [
						"List Portfolios"
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
						"Portfolios"
					],
					"operation": [
						"List Portfolios"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/portfolios/{symbol}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolios"
					],
					"operation": [
						"Get Portfolio"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
			"description": "The portfolio token symbol",
			"default": "MAG7Xon",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Portfolios"
					],
					"operation": [
						"Get Portfolio"
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
						"Portfolios"
					],
					"operation": [
						"Get Portfolio"
					]
				}
			}
		},
];
