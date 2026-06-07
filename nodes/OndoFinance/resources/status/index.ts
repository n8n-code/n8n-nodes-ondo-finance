import type { INodeProperties } from 'n8n-workflow';

export const statusDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					]
				}
			},
			"options": [
				{
					"name": "Get Market Status",
					"value": "Get Market Status",
					"action": "Get Current Market Status",
					"description": "This endpoint retrieves the current status of the market, including whether it is open or closed, and any relevant information about trading pauses or restrictions. When the market is not open, the response provides details about the closure reason and expected reopening time.\n\n**Typical Market Sessions**\n\nThe following table outlines the standard market sessions with brief transitional pauses between each session period.\n\n| **Session**      | **Start Time**  | **End Time**   |\n|:-----------------|:---------------:|:--------------:|\n| Pause            | 3:55 AM ET      | 4:01 AM ET     |\n| **Premarket**    | **4:01 AM ET**  | **9:29 AM ET** |\n| Pause            | 9:29 AM ET      | 9:31 AM ET     |\n| **Regular**      | **9:31 AM ET**  | **3:59 PM ET** |\n| Pause            | 3:59 PM ET      | 4:01 PM ET     |\n| **Postmarket**   | **4:01 PM ET**  | **7:59 PM ET** |\n| Pause            | 7:59 PM ET      | 8:05 PM ET     |\n| **Overnight**    | **8:05 PM ET**  | **3:55 AM ET** |\n\n**Typical Holidays**\n\nGM observes the same holiday schedule as the [New York Stock Exchange](https://www.nyse.com/markets/hours-calendars). This includes early closes and observed holidays.\n\n**Unscheduled Downtime**\n\nIn the case of unscheduled downtime, trading may be paused without prior notice. This includes unexpected outages or maintenance events that impact GM's functionality.\n\n**Market Status Reason Codes**\n\nWhen the market is not open, the response will include a `reason` field which may include one of the following common codes:\n- `MARKET_CLOSED`: Market is closed.\n- `MARKET_PAUSED`: Market is temporarily paused.\n\n**Asset Tradability**\nThis endpoint only returns market-wide closures. For per-asset tradability, use the following endpoints:\n  * Individual assets may pause for dividends and other events, as indicated by `/v1/status/assets`. (See [Get Asset Statuses](https://docs.ondo.finance/api-reference/status/get-asset-statuses))\n  * Certain assets do not trade during the overnight and pre/postmarket session, as indicated by `/v1/assets/{symbol}/market`. (See [Get Market Data for an Asset](https://docs.ondo.finance/api-reference/assets/get-market-data-for-an-asset) / [Get Market Data for All Supported Assets](https://docs.ondo.finance/api-reference/assets/get-market-data-for-all-supported-assets))\n\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/status/market"
						}
					}
				},
				{
					"name": "Get Asset Status",
					"value": "Get Asset Status",
					"action": "Get Asset Statuses",
					"description": "This endpoint retrieves information about individual asset trading statuses, including the reason and expected duration. Asset trading can be affected for various reasons such as earnings announcements, dividend events, and global market closures.\n\n**Important**:\n  * When the entire market is closed or paused as indicated by `/v1/status/market`, all asset trading is automatically suspended regardless of individual asset status. (See [Get Current Market Status](https://docs.ondo.finance/api-reference/status/get-current-market-status))\n  * Certain assets do not trade during the overnight and pre/postmarket session, as indicated by `/v1/assets/{symbol}/market`. (See [Get Market Data for an Asset](https://docs.ondo.finance/api-reference/assets/get-market-data-for-an-asset) / [Get Market Data for All Supported Assets](https://docs.ondo.finance/api-reference/assets/get-market-data-for-all-supported-assets)) \n\n This endpoint should be used in conjunction with the [Market Status](https://docs.ondo.finance/api-reference/status/get-current-market-status) and [Market Data](https://docs.ondo.finance/api-reference/assets/get-market-data-for-an-asset) endpoints to get a complete picture of trading availability.\n\n**Market Sessions and Holidays**\n\nAsset trading follows the same schedule as outlined in the `/v1/status/market` endpoint. During market closures, holidays, or unscheduled downtime, all assets are unavailable for trading.\n\n**Earnings and Dividends**\n\nIndividual assets may be temporarily suspended or limited during earnings announcements and dividend events according to the following schedule:\n- **Dividends**: Trading is paused from 7:50 PM to 8:10 PM ET on the day before the dividend ex-date.\n- **Earnings**: Trading is limited for certain assets around earnings announcements, with timing dependent on the announcement schedule. \"Limited\" here means that the quantity which can be minted in one request is reduced. For exact limits, see [Get Trading Limits](https://docs.ondo.finance/api-reference/limits/get-trading-limits). For pre-market announcements, trading is suspended from 5:00 AM to 9:31 AM ET. For post-market announcements, trading is suspended from 4:00 PM to 7:30 PM ET. Trading may resume earlier at the platform's discretion.\n- **Other corporate actions**: Trading is paused for an indeterminate amount of time as needed for Ondo to process the corporate action.\n\n**Asset Status Reason Codes**\n\n`reason.code` is one of:\n- `ASSET_PAUSED`: Asset is paused for trading.\n- `ASSET_LIMITED`: Asset can be traded, but order size is more limited than usual.\n\n**Asset Status Reason Messages**\n\n`reason.message` is one of:\n- `cash_dividend`\n- `stock_dividend`\n- `stock_split`\n- `merger`\n- `acquisition`\n- `spinoff`\n- `earnings`\n- `maintenance`\n\nFor caching details on this endpoint, please see: [Endpoint Caching](https://docs.ondo.finance/api-reference/endpoint-caching).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/status/assets"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/status/market",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Get Market Status"
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
						"Status"
					],
					"operation": [
						"Get Market Status"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/status/assets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Get Asset Status"
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
						"Status"
					],
					"operation": [
						"Get Asset Status"
					]
				}
			}
		},
];
