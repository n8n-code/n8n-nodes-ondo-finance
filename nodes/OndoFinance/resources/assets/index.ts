import type { INodeProperties } from 'n8n-workflow';

export const assetsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					]
				}
			},
			"options": [
				{
					"name": "Get All Prices",
					"value": "Get All Prices",
					"action": "Get Current Prices for All Supported Assets",
					"description": "This endpoint retrieves the latest prices for all supported assets. Note that the `primaryMarket` represents the on-chain token while the `underlyingMarket`\nrepresents the off-chain collateralized stock. Assets can be sorted by price in either ascending or descending order.\n\nPrices are intended for display only. For real-time trading prices, use the [Soft Attestation Quote](https://docs.ondo.finance/api-reference/attestations/request-a-soft-attestation-quote) API. We do not recommend using the price feeds as an oracle for these assets. An official oracle is in development and will be documented when available. For questions, contact [support@ondo.finance](mailto:support@ondo.finance).\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/assets/all/prices/latest"
						}
					}
				},
				{
					"name": "Get Price",
					"value": "Get Price",
					"action": "Get Current Price for an Asset",
					"description": "This endpoint retrieves the latest price for a specific asset. Note that the `primaryMarket` represents the on-chain token while the `underlyingMarket`\nrepresents the off-chain collateralized stock.\n\nPrices are intended for display only. For real-time trading prices, use the [Soft Attestation Quote](https://docs.ondo.finance/api-reference/attestations/request-a-soft-attestation-quote) API. We do not recommend using the price feeds as an oracle for these assets. An official oracle is in development and will be documented when available. For questions, contact [support@ondo.finance](mailto:support@ondo.finance).\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/assets/{{$parameter[\"symbol\"]}}/prices/latest"
						}
					}
				},
				{
					"name": "Get All Asset Enhanced Prices",
					"value": "Get All Asset Enhanced Prices",
					"action": "Get Enhanced Prices for All Supported Assets",
					"description": "This endpoint retrieves the latest prices along with the price change and percentage change in the last 24 hours of open market for all supported assets. Assets can be sorted by price in either ascending or descending order.\n\nPrices are intended for display only. For real-time trading prices, use the [Soft Attestation Quote](https://docs.ondo.finance/api-reference/attestations/request-a-soft-attestation-quote) API. We do not recommend using the price feeds as an oracle for these assets. An official oracle is in development and will be documented when available. For questions, contact [support@ondo.finance](mailto:support@ondo.finance).\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/assets/all/prices/latest/enhanced"
						}
					}
				},
				{
					"name": "Get OHLC Prices",
					"value": "Get OHLC Prices",
					"action": "Get OHLC (Open, High, Low, Close) Data for an Asset",
					"description": "This endpoint retrieves historical Open, High, Low, Close (OHLC) price data for both the primary market (on-chain token) and underlying market (off-chain stock) for a specified asset.\n\nPrices are intended for display only. For real-time trading prices, use the [Soft Attestation Quote](https://docs.ondo.finance/api-reference/attestations/request-a-soft-attestation-quote) API. We do not recommend using the price feeds as an oracle for these assets. An official oracle is in development and will be documented when available. For questions, contact [support@ondo.finance](mailto:support@ondo.finance).\n\nThe `interval` parameter determines the bucket size for data points, while the `range` parameter determines how far back historically to look for price data. See below for valid interval/range pairs.\n\nValid `interval`/`range` pairs:\n- 1min/1day *(rolling 24-hour period of open market data)*\n- 5min/1day\n- 15min/1day\n- 1hour/1month\n- 4hour/1month\n- 12hour/3month\n- 1day/3month\n- 1day/6month\n- 1day/1year\n- 1day/all *(all historical data)*\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/assets/{{$parameter[\"symbol\"]}}/prices/ohlc"
						}
					}
				},
				{
					"name": "Get All Markets",
					"value": "Get All Markets",
					"action": "Get Market Data for All Supported Assets",
					"description": "This endpoint retrieves comprehensive market data for all supported assets. Each asset includes both primary market (on-chain token) and underlying market (off-chain stock) information.\n\nPrimary market data includes current price, 24-hour price changes, 24-hour historical chart data, and total token holders. Underlying market data provides stock fundamentals like company name, 52-week highs/lows, trading volume, shares outstanding, and market capitalization.\n\nThis endpoint is useful for dashboard overviews and market analysis across the entire asset portfolio.\n\nThe \"Tradable Sessions\" parameter indicates the tradability for the asset; for example, some assets are available in the regular and extended stock sessions, but not overnight. Learn more about sessions at [Get Current Market Status](https://docs.ondo.finance/api-reference/status/get-current-market-status).\n\nPrices are intended for display only. For real-time trading prices, use the [Soft Attestation Quote](https://docs.ondo.finance/api-reference/attestations/request-a-soft-attestation-quote) API. We do not recommend using the price feeds as an oracle for these assets. An official oracle is in development and will be documented when available. For questions, contact [support@ondo.finance](mailto:support@ondo.finance).\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/assets/all/market"
						}
					}
				},
				{
					"name": "Get Market",
					"value": "Get Market",
					"action": "Get Market Data for an Asset",
					"description": "This endpoint retrieves comprehensive market data for a specific asset, containing both primary market (on-chain token) and underlying market (off-chain stock) information.\n\nPrimary market data includes current price, 24-hour price changes, 24-hour historical chart data, and total token holders. Underlying market data provides stock fundamentals like company name, 52-week highs/lows, trading volume, shares outstanding, and market capitalization.\n\nThis endpoint is useful for dashboard overviews and market analysis across the entire asset portfolio.\n\nThe \"Tradable Sessions\" parameter indicates the tradability for the asset; for example, some assets are available in the regular and extended stock sessions, but not overnight. Learn more about sessions at [Get Current Market Status](https://docs.ondo.finance/api-reference/status/get-current-market-status).\n\nPrices are intended for display only. For real-time trading prices, use the [Soft Attestation Quote](https://docs.ondo.finance/api-reference/attestations/request-a-soft-attestation-quote) API. We do not recommend using the price feeds as an oracle for these assets. An official oracle is in development and will be documented when available. For questions, contact [support@ondo.finance](mailto:support@ondo.finance).\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/assets/{{$parameter[\"symbol\"]}}/market"
						}
					}
				},
				{
					"name": "Get Latest Dividend",
					"value": "Get Latest Dividend",
					"action": "Get Dividend Information for an Asset",
					"description": "This endpoint retrieves the latest dividend information for a specific asset, including dividend yield, payment history, and upcoming payment dates.\n\n**Dividend Yield**\n\nThe dividend yield is calculated based on the past year's worth of dividend payments and the current stock price.\n\n**Payout Frequencies**\n\nBelow outline the day ranges for each payout frequency:\n\n| Frequency         | Average Days Between Dividends |\n|-------------------|:------------------------------:|\n| **none**          | N/A                            |\n| **monthly**       | 25-35 days                     |\n| **quarterly**     | 80-100 days                    |\n| **semi-annually** | 160-200 days                   |\n| **yearly**        | 345-385 days                   |\n| **irregular**     | Outside defined ranges         |\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/assets/{{$parameter[\"symbol\"]}}/dividends"
						}
					}
				},
				{
					"name": "Get All Asset Addresses",
					"value": "Get All Asset Addresses",
					"action": "Get All Contract Addresses Across Networks",
					"description": "This endpoint retrieves all contract addresses for all supported assets across different blockchain networks.\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/assets/all/addresses"
						}
					}
				},
				{
					"name": "Get Asset Addresses",
					"value": "Get Asset Addresses",
					"action": "Get Contract Addresses for an Asset",
					"description": "This endpoint retrieves all contract addresses for a specific asset across different blockchain networks.\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/assets/{{$parameter[\"symbol\"]}}/addresses"
						}
					}
				},
				{
					"name": "Get All Asset Metadata",
					"value": "Get All Asset Metadata",
					"action": "Get Metadata for All Supported Assets",
					"description": "Returns all metadata for all symbols including identifiers, addresses, and classification tags.\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/assets/all/metadata"
						}
					}
				},
				{
					"name": "Get Shares Multiplier",
					"value": "Get Shares Multiplier",
					"action": "Get Shares Multiplier History for an Asset",
					"description": "This endpoint retrieves the shares multiplier history for a specific asset. Note that some asset events do not result in the shares multiplier value changing. This endpoint will show the earliest timestamp for each value change.\n\nThe `range` parameter determines how far back historically to look for shares multiplier data. See below for valid range values.\n\nValid `range` values:\n- 1day\n- 1month\n- 3month\n- 6month\n- 1year\n- all *(all historical data)*\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/assets/{{$parameter[\"symbol\"]}}/shares-multiplier"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/assets/all/prices/latest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					],
					"operation": [
						"Get All Prices"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "The sort direction for prices.",
			"default": "desc",
			"type": "options",
			"options": [
				{
					"name": "Desc",
					"value": "desc"
				},
				{
					"name": "Asc",
					"value": "asc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					],
					"operation": [
						"Get All Prices"
					]
				}
			}
		},
		{
			"displayName": "Api Key (Header)",
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
						"Assets"
					],
					"operation": [
						"Get All Prices"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/assets/{symbol}/prices/latest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					],
					"operation": [
						"Get Price"
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
						"Assets"
					],
					"operation": [
						"Get Price"
					]
				}
			}
		},
		{
			"displayName": "Api Key (Header)",
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
						"Assets"
					],
					"operation": [
						"Get Price"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/assets/all/prices/latest/enhanced",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					],
					"operation": [
						"Get All Asset Enhanced Prices"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "The sort direction for prices.",
			"default": "desc",
			"type": "options",
			"options": [
				{
					"name": "Desc",
					"value": "desc"
				},
				{
					"name": "Asc",
					"value": "asc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					],
					"operation": [
						"Get All Asset Enhanced Prices"
					]
				}
			}
		},
		{
			"displayName": "Api Key (Header)",
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
						"Assets"
					],
					"operation": [
						"Get All Asset Enhanced Prices"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/assets/{symbol}/prices/ohlc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					],
					"operation": [
						"Get OHLC Prices"
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
						"Assets"
					],
					"operation": [
						"Get OHLC Prices"
					]
				}
			}
		},
		{
			"displayName": "Interval",
			"name": "interval",
			"required": true,
			"description": "The time interval between data points.",
			"default": "1min",
			"type": "options",
			"options": [
				{
					"name": "1 Min",
					"value": "1min"
				},
				{
					"name": "5 Min",
					"value": "5min"
				},
				{
					"name": "15 Min",
					"value": "15min"
				},
				{
					"name": "1 Hour",
					"value": "1hour"
				},
				{
					"name": "4 Hour",
					"value": "4hour"
				},
				{
					"name": "12 Hour",
					"value": "12hour"
				},
				{
					"name": "1 Day",
					"value": "1day"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "interval",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					],
					"operation": [
						"Get OHLC Prices"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "range",
			"required": true,
			"description": "The lookback range for historical data.",
			"default": "1day",
			"type": "options",
			"options": [
				{
					"name": "1 Day",
					"value": "1day"
				},
				{
					"name": "1 Month",
					"value": "1month"
				},
				{
					"name": "3 Month",
					"value": "3month"
				},
				{
					"name": "6 Month",
					"value": "6month"
				},
				{
					"name": "1 Year",
					"value": "1year"
				},
				{
					"name": "All",
					"value": "all"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					],
					"operation": [
						"Get OHLC Prices"
					]
				}
			}
		},
		{
			"displayName": "Api Key (Header)",
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
						"Assets"
					],
					"operation": [
						"Get OHLC Prices"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/assets/all/market",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					],
					"operation": [
						"Get All Markets"
					]
				}
			}
		},
		{
			"displayName": "Api Key (Header)",
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
						"Assets"
					],
					"operation": [
						"Get All Markets"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/assets/{symbol}/market",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					],
					"operation": [
						"Get Market"
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
						"Assets"
					],
					"operation": [
						"Get Market"
					]
				}
			}
		},
		{
			"displayName": "Api Key (Header)",
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
						"Assets"
					],
					"operation": [
						"Get Market"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/assets/{symbol}/dividends",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					],
					"operation": [
						"Get Latest Dividend"
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
						"Assets"
					],
					"operation": [
						"Get Latest Dividend"
					]
				}
			}
		},
		{
			"displayName": "Api Key (Header)",
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
						"Assets"
					],
					"operation": [
						"Get Latest Dividend"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/assets/all/addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					],
					"operation": [
						"Get All Asset Addresses"
					]
				}
			}
		},
		{
			"displayName": "Api Key (Header)",
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
						"Assets"
					],
					"operation": [
						"Get All Asset Addresses"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/assets/{symbol}/addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					],
					"operation": [
						"Get Asset Addresses"
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
						"Assets"
					],
					"operation": [
						"Get Asset Addresses"
					]
				}
			}
		},
		{
			"displayName": "Api Key (Header)",
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
						"Assets"
					],
					"operation": [
						"Get Asset Addresses"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/assets/all/metadata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					],
					"operation": [
						"Get All Asset Metadata"
					]
				}
			}
		},
		{
			"displayName": "Api Key (Header)",
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
						"Assets"
					],
					"operation": [
						"Get All Asset Metadata"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/assets/{symbol}/shares-multiplier",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					],
					"operation": [
						"Get Shares Multiplier"
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
						"Assets"
					],
					"operation": [
						"Get Shares Multiplier"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "range",
			"required": true,
			"description": "The lookback range for historical data.",
			"default": "1day",
			"type": "options",
			"options": [
				{
					"name": "1 Day",
					"value": "1day"
				},
				{
					"name": "1 Month",
					"value": "1month"
				},
				{
					"name": "3 Month",
					"value": "3month"
				},
				{
					"name": "6 Month",
					"value": "6month"
				},
				{
					"name": "1 Year",
					"value": "1year"
				},
				{
					"name": "All",
					"value": "all"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					],
					"operation": [
						"Get Shares Multiplier"
					]
				}
			}
		},
		{
			"displayName": "Api Key (Header)",
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
						"Assets"
					],
					"operation": [
						"Get Shares Multiplier"
					]
				}
			}
		},
];
