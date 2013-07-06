var rotueJson = {
	"payloads": null,
	"routes": {
		"route": [{
			"payloads": {
				"payload": [{
					"value": "<summary><loads><load refCommodity=\"MONDAY-Ambient\"><quantity>378</quantity></load><load refCommodity=\"MONDAY-Chilled\"><quantity>30</quantity></load></loads><durations><duration><name>Travel</name><value>87</value></duration><duration><name>Service</name><value>423</value></duration><duration><name>Load_Unload</name><value>20</value></duration></durations></summary>",
					"name": "chk-summary"
				}]
			},
			"vehicles": {
				"vehicle": {
					"refVehicle": {
						"pk": null,
						"attributes": {
							"attribute": [{
								"payloads": null,
								"value": "loc-Christchurch",
								"refProperty": {
									"payloads": null,
									"title": "vehicle-start-depot",
									"physical": "ENTITY_VEHICLE",
									"typeProperty": "STRING",
									"id": "prop26"
								}
							},
							{
								"payloads": null,
								"value": "Southern",
								"refProperty": {
									"payloads": null,
									"title": "vehicle-region",
									"physical": "ENTITY_VEHICLE",
									"typeProperty": "STRING",
									"id": "prop22"
								}
							},
							{
								"payloads": null,
								"value": "1152.2453846153846",
								"refProperty": {
									"payloads": null,
									"title": "vehicle-fixed-cost",
									"physical": "ENTITY_VEHICLE",
									"typeProperty": "STRING",
									"id": "prop27"
								}
							},
							{
								"payloads": null,
								"value": "vehicle-400966",
								"refProperty": {
									"payloads": null,
									"title": "vehicle-assignment",
									"physical": "ENTITY_VEHICLE",
									"typeProperty": "STRING",
									"id": "prop10"
								}
							}]
						},
						"constraints": null,
						"costs": {
							"cost": [{
								"payloads": null,
								"value": 0.4428,
								"typeMetric": "METRIC_TIME"
							},
							{
								"payloads": null,
								"value": 0.00057,
								"typeMetric": "METRIC_DISTANCE"
							}]
						},
						"limits": null,
						"availabilities": {
							"availability": [{
								"payloads": null,
								"timeOpen": 1372174200000,
								"timeClose": 1372239000000,
								"refLocationOpen": {
									"pk": null,
									"attributes": null,
									"constraints": null,
									"lat": -43.48739,
									"lon": 172.56095,
									"id": "loc-Christchurch",
									"linehaulCost": 12355.63
								},
								"refLocationClose": {
									"pk": null,
									"attributes": null,
									"constraints": null,
									"lat": -43.48739,
									"lon": 172.56095,
									"id": "loc-Christchurch",
									"linehaulCost": 12355.63
								},
								"id": "availability-K73001",
								"duration": 720,
								"overtimes": null
							}]
						},
						"capacities": {
							"capacity": [{
								"payloads": null,
								"value": 378,
								"refCommodity": {
									"payloads": null,
									"title": "MONDAY-Ambient",
									"unitWhole": "items",
									"id": "MONDAY-Ambient"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 48,
								"refCommodity": {
									"payloads": null,
									"title": "MONDAY-Chilled",
									"unitWhole": "items",
									"id": "MONDAY-Chilled"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 378,
								"refCommodity": {
									"payloads": null,
									"title": "TUESDAY-Ambient",
									"unitWhole": "items",
									"id": "TUESDAY-Ambient"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 48,
								"refCommodity": {
									"payloads": null,
									"title": "TUESDAY-Chilled",
									"unitWhole": "items",
									"id": "TUESDAY-Chilled"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 378,
								"refCommodity": {
									"payloads": null,
									"title": "WEDNESDAY-Ambient",
									"unitWhole": "items",
									"id": "WEDNESDAY-Ambient"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 48,
								"refCommodity": {
									"payloads": null,
									"title": "WEDNESDAY-Chilled",
									"unitWhole": "items",
									"id": "WEDNESDAY-Chilled"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 378,
								"refCommodity": {
									"payloads": null,
									"title": "THURSDAY-Ambient",
									"unitWhole": "items",
									"id": "THURSDAY-Ambient"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 48,
								"refCommodity": {
									"payloads": null,
									"title": "THURSDAY-Chilled",
									"unitWhole": "items",
									"id": "THURSDAY-Chilled"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 378,
								"refCommodity": {
									"payloads": null,
									"title": "FRIDAY-Ambient",
									"unitWhole": "items",
									"id": "FRIDAY-Ambient"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 48,
								"refCommodity": {
									"payloads": null,
									"title": "FRIDAY-Chilled",
									"unitWhole": "items",
									"id": "FRIDAY-Chilled"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 378,
								"refCommodity": {
									"payloads": null,
									"title": "SATURDAY-Ambient",
									"unitWhole": "items",
									"id": "SATURDAY-Ambient"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 48,
								"refCommodity": {
									"payloads": null,
									"title": "SATURDAY-Chilled",
									"unitWhole": "items",
									"id": "SATURDAY-Chilled"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 378,
								"refCommodity": {
									"payloads": null,
									"title": "SUNDAY-Ambient",
									"unitWhole": "items",
									"id": "SUNDAY-Ambient"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 48,
								"refCommodity": {
									"payloads": null,
									"title": "SUNDAY-Chilled",
									"unitWhole": "items",
									"id": "SUNDAY-Chilled"
								},
								"loadtime": 0.0,
								"unloadtime": null
							}]
						},
						"id": "vehicle-400966",
						"droppedCustomers": null,
						"unloadtime": 0,
						"fixedcost": 0,
						"ambientPickRate": 0.0,
						"chilledPickRate": 0.0,
						"isMultiDriver": false,
						"isPackerLoad": false,
						"retorunToDepotTime": null,
						"departFromDepotTime": null,
						"fixedRevisitDuration": null,
						"returnToDepotVisit": null
					},
					"refAvailability": {
						"payloads": null,
						"timeOpen": 1372174200000,
						"timeClose": 1372239000000,
						"refLocationOpen": {
							"pk": null,
							"attributes": null,
							"constraints": null,
							"lat": -43.48739,
							"lon": 172.56095,
							"id": "loc-Christchurch",
							"linehaulCost": 12355.63
						},
						"refLocationClose": {
							"pk": null,
							"attributes": null,
							"constraints": null,
							"lat": -43.48739,
							"lon": 172.56095,
							"id": "loc-Christchurch",
							"linehaulCost": 12355.63
						},
						"id": "availability-K73001",
						"duration": 720,
						"overtimes": null
					}
				}
			},
			"resources": {
				"resource": []
			},
			"visits": {
				"visit": [{
					"payloads": null,
					"elapsedDuration": 20,
					"timeEarliest": 1372177800000,
					"timeLatest": 1372179660000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 0,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 0,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 20,
							"timeEarliest": 1372175400000,
							"timeLatest": 1372180860000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-unload-return-depot-K73001_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "0.0",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "0",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "0",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "0",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									},
									{
										"payloads": null,
										"value": "No",
										"refProperty": {
											"payloads": null,
											"title": "is-feasible",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop44"
										}
									},
									{
										"payloads": null,
										"value": "",
										"refProperty": {
											"payloads": null,
											"title": "reason-why",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop45"
										}
									}]
								},
								"constraints": null,
								"elapsedService": 20,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372174200000,
										"timeFinish": 1372239000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": true
									}]
								},
								"id": "request-unload-return-depot-K73001",
								"refLocation": {
									"pk": null,
									"attributes": null,
									"constraints": null,
									"lat": -43.48739,
									"lon": 172.56095,
									"id": "loc-Christchurch",
									"linehaulCost": 12355.63
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-Christchurch_15_687_MONDAY-Ambient",
					"refLocation": {
						"pk": null,
						"attributes": null,
						"constraints": null,
						"lat": -43.48739,
						"lon": 172.56095,
						"id": "loc-Christchurch",
						"linehaulCost": 12355.63
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372180320000,
					"timeLatest": 1372182180000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 1018,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 2,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372176720000,
							"timeLatest": 1372182180000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04459_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "64.915",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "55",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "55",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "64",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04459",
										"refPhysical": {
											"pk": "WAIRAKEI PIE BIN LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.48906,
											"lon": 172.56752,
											"id": "loc-CNZ04459",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04459",
										"refPhysical": {
											"pk": "WAIRAKEI PIE BIN LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.48906,
											"lon": 172.56752,
											"id": "loc-CNZ04459",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04459",
										"refPhysical": {
											"pk": "WAIRAKEI PIE BIN LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.48906,
											"lon": 172.56752,
											"id": "loc-CNZ04459",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372178700000,
										"timeFinish": 1372185000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04459",
								"refLocation": {
									"pk": "WAIRAKEI PIE BIN LTD",
									"attributes": null,
									"constraints": null,
									"lat": -43.48906,
									"lon": 172.56752,
									"id": "loc-CNZ04459",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04459_15_121_MONDAY-Ambient",
					"refLocation": {
						"pk": "WAIRAKEI PIE BIN LTD",
						"attributes": null,
						"constraints": null,
						"lat": -43.48906,
						"lon": 172.56752,
						"id": "loc-CNZ04459",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372180800000,
					"timeLatest": 1372182660000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 2997,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 5,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372179600000,
							"timeLatest": 1372182660000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 4,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04234_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "138.62576923076924",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "104",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "104",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "138",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04234",
										"refPhysical": {
											"pk": "GREERS DISCOUNT TOBACCO DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.49946,
											"lon": 172.58633,
											"id": "loc-CNZ04234",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04234",
										"refPhysical": {
											"pk": "GREERS DISCOUNT TOBACCO DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.49946,
											"lon": 172.58633,
											"id": "loc-CNZ04234",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04234",
										"refPhysical": {
											"pk": "GREERS DISCOUNT TOBACCO DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.49946,
											"lon": 172.58633,
											"id": "loc-CNZ04234",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 4,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 5,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 5,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 5,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 5,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 6,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04234",
								"refLocation": {
									"pk": "GREERS DISCOUNT TOBACCO DAIRY",
									"attributes": null,
									"constraints": null,
									"lat": -43.49946,
									"lon": 172.58633,
									"id": "loc-CNZ04234",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04234_15_154_MONDAY-Ambient",
					"refLocation": {
						"pk": "GREERS DISCOUNT TOBACCO DAIRY",
						"attributes": null,
						"constraints": null,
						"lat": -43.49946,
						"lon": 172.58633,
						"id": "loc-CNZ04234",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 1,
					"timeEarliest": 1372181160000,
					"timeLatest": 1372183020000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 5867,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 8,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 1,
							"timeEarliest": 1372179960000,
							"timeLatest": 1372183020000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ03982_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "30.03384615384616",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "13",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "17",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "28",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ03982",
										"refPhysical": {
											"pk": "GRAMPIAN SUPERETTE",
											"attributes": null,
											"constraints": null,
											"lat": -43.48028,
											"lon": 172.60308,
											"id": "loc-CNZ03982",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ03982",
										"refPhysical": {
											"pk": "GRAMPIAN SUPERETTE",
											"attributes": null,
											"constraints": null,
											"lat": -43.48028,
											"lon": 172.60308,
											"id": "loc-CNZ03982",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ03982",
										"refPhysical": {
											"pk": "GRAMPIAN SUPERETTE",
											"attributes": null,
											"constraints": null,
											"lat": -43.48028,
											"lon": 172.60308,
											"id": "loc-CNZ03982",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 1,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372082400000,
										"timeFinish": 1372255140000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ03982",
								"refLocation": {
									"pk": "GRAMPIAN SUPERETTE",
									"attributes": null,
									"constraints": null,
									"lat": -43.48028,
									"lon": 172.60308,
									"id": "loc-CNZ03982",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ03982_15_84_MONDAY-Ambient",
					"refLocation": {
						"pk": "GRAMPIAN SUPERETTE",
						"attributes": null,
						"constraints": null,
						"lat": -43.48028,
						"lon": 172.60308,
						"id": "loc-CNZ03982",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 10,
					"timeEarliest": 1372181340000,
					"timeLatest": 1372183200000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 7335,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 10,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 10,
							"timeEarliest": 1372180140000,
							"timeLatest": 1372183200000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04449_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "16.743076923076924",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "4",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "10",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "13",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04449",
										"refPhysical": {
											"pk": "HARVEST MARKET",
											"attributes": null,
											"constraints": null,
											"lat": -43.48447,
											"lon": 172.61535,
											"id": "loc-CNZ04449",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04449",
										"refPhysical": {
											"pk": "HARVEST MARKET",
											"attributes": null,
											"constraints": null,
											"lat": -43.48447,
											"lon": 172.61535,
											"id": "loc-CNZ04449",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04449",
										"refPhysical": {
											"pk": "HARVEST MARKET",
											"attributes": null,
											"constraints": null,
											"lat": -43.48447,
											"lon": 172.61535,
											"id": "loc-CNZ04449",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 10,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372186800000,
										"timeFinish": 1372226400000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04449",
								"refLocation": {
									"pk": "HARVEST MARKET",
									"attributes": null,
									"constraints": null,
									"lat": -43.48447,
									"lon": 172.61535,
									"id": "loc-CNZ04449",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04449_15_114_MONDAY-Ambient",
					"refLocation": {
						"pk": "HARVEST MARKET",
						"attributes": null,
						"constraints": null,
						"lat": -43.48447,
						"lon": 172.61535,
						"id": "loc-CNZ04449",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 1,
					"timeEarliest": 1372182060000,
					"timeLatest": 1372183920000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 8623,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 12,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 1,
							"timeEarliest": 1372180860000,
							"timeLatest": 1372183920000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04780_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "34.94730769230769",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "28",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "28",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "34",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04780",
										"refPhysical": {
											"pk": "CALTEX CRANFORD STREET",
											"attributes": null,
											"constraints": null,
											"lat": -43.49052,
											"lon": 172.62121,
											"id": "loc-CNZ04780",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04780",
										"refPhysical": {
											"pk": "CALTEX CRANFORD STREET",
											"attributes": null,
											"constraints": null,
											"lat": -43.49052,
											"lon": 172.62121,
											"id": "loc-CNZ04780",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04780",
										"refPhysical": {
											"pk": "CALTEX CRANFORD STREET",
											"attributes": null,
											"constraints": null,
											"lat": -43.49052,
											"lon": 172.62121,
											"id": "loc-CNZ04780",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 1,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372190400000,
										"timeFinish": 1372248000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04780",
								"refLocation": {
									"pk": "CALTEX CRANFORD STREET",
									"attributes": null,
									"constraints": null,
									"lat": -43.49052,
									"lon": 172.62121,
									"id": "loc-CNZ04780",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04780_15_115_MONDAY-Ambient",
					"refLocation": {
						"pk": "CALTEX CRANFORD STREET",
						"attributes": null,
						"constraints": null,
						"lat": -43.49052,
						"lon": 172.62121,
						"id": "loc-CNZ04780",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372182360000,
					"timeLatest": 1372184220000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 11438,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 16,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372181160000,
							"timeLatest": 1372184220000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04176_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "90.21538461538461",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "83",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "83",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "90",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04176",
										"refPhysical": {
											"pk": "Kesgrove Dairy",
											"attributes": null,
											"constraints": null,
											"lat": -43.50945,
											"lon": 172.63004,
											"id": "loc-CNZ04176",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04176",
										"refPhysical": {
											"pk": "Kesgrove Dairy",
											"attributes": null,
											"constraints": null,
											"lat": -43.50945,
											"lon": 172.63004,
											"id": "loc-CNZ04176",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04176",
										"refPhysical": {
											"pk": "Kesgrove Dairy",
											"attributes": null,
											"constraints": null,
											"lat": -43.50945,
											"lon": 172.63004,
											"id": "loc-CNZ04176",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372176000000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04176",
								"refLocation": {
									"pk": "Kesgrove Dairy",
									"attributes": null,
									"constraints": null,
									"lat": -43.50945,
									"lon": 172.63004,
									"id": "loc-CNZ04176",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04176_15_551_MONDAY-Ambient",
					"refLocation": {
						"pk": "Kesgrove Dairy",
						"attributes": null,
						"constraints": null,
						"lat": -43.50945,
						"lon": 172.63004,
						"id": "loc-CNZ04176",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372182600000,
					"timeLatest": 1372184460000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 12273,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 17,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372181400000,
							"timeLatest": 1372184460000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 7,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ03771_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "490.5465384615385",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "405",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "421",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "482",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "true",
										"id": "inclusion-CNZ03771",
										"refPhysical": {
											"pk": "SV EDGEWARE VILLAGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.51343,
											"lon": 172.63658,
											"id": "loc-CNZ03771",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ03771",
										"refPhysical": {
											"pk": "SV EDGEWARE VILLAGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.51343,
											"lon": 172.63658,
											"id": "loc-CNZ03771",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ03771",
										"refPhysical": {
											"pk": "SV EDGEWARE VILLAGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.51343,
											"lon": 172.63658,
											"id": "loc-CNZ03771",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372188600000,
										"timeFinish": 1372201200000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 7,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 8,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 8,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 8,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 7,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 9,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 6,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ03771",
								"refLocation": {
									"pk": "SV EDGEWARE VILLAGE",
									"attributes": null,
									"constraints": null,
									"lat": -43.51343,
									"lon": 172.63658,
									"id": "loc-CNZ03771",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ03771_15_592_MONDAY-Ambient",
					"refLocation": {
						"pk": "SV EDGEWARE VILLAGE",
						"attributes": null,
						"constraints": null,
						"lat": -43.51343,
						"lon": 172.63658,
						"id": "loc-CNZ03771",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372182960000,
					"timeLatest": 1372184820000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 13297,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 18,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372181760000,
							"timeLatest": 1372184820000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04084_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "22.500384615384615",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "11",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "17",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "19",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04084",
										"refPhysical": {
											"pk": "DICKIES CORNER DAIRY DAIRY DELI",
											"attributes": null,
											"constraints": null,
											"lat": -43.51569,
											"lon": 172.64576,
											"id": "loc-CNZ04084",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04084",
										"refPhysical": {
											"pk": "DICKIES CORNER DAIRY DAIRY DELI",
											"attributes": null,
											"constraints": null,
											"lat": -43.51569,
											"lon": 172.64576,
											"id": "loc-CNZ04084",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04084",
										"refPhysical": {
											"pk": "DICKIES CORNER DAIRY DAIRY DELI",
											"attributes": null,
											"constraints": null,
											"lat": -43.51569,
											"lon": 172.64576,
											"id": "loc-CNZ04084",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372240800000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04084",
								"refLocation": {
									"pk": "DICKIES CORNER DAIRY DAIRY DELI",
									"attributes": null,
									"constraints": null,
									"lat": -43.51569,
									"lon": 172.64576,
									"id": "loc-CNZ04084",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04084_15_547_MONDAY-Ambient",
					"refLocation": {
						"pk": "DICKIES CORNER DAIRY DAIRY DELI",
						"attributes": null,
						"constraints": null,
						"lat": -43.51569,
						"lon": 172.64576,
						"id": "loc-CNZ04084",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 90,
					"timeEarliest": 1372183500000,
					"timeLatest": 1372185360000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 16968,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 22,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 90,
							"timeEarliest": 1372182300000,
							"timeLatest": 1372185360000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 119,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 6,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04840_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "6113.566923076923",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "5108",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "5120",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "6107",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "true",
										"id": "inclusion-CNZ04840",
										"refPhysical": {
											"pk": "PNS MOORHOUSE",
											"attributes": null,
											"constraints": null,
											"lat": -43.53987,
											"lon": 172.63865,
											"id": "loc-CNZ04840",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ04840",
										"refPhysical": {
											"pk": "PNS MOORHOUSE",
											"attributes": null,
											"constraints": null,
											"lat": -43.53987,
											"lon": 172.63865,
											"id": "loc-CNZ04840",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04840",
										"refPhysical": {
											"pk": "PNS MOORHOUSE",
											"attributes": null,
											"constraints": null,
											"lat": -43.53987,
											"lon": 172.63865,
											"id": "loc-CNZ04840",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 90,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372176000000,
										"timeFinish": 1372194000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 119,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 6,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 120,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 133,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 151,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 6,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 108,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 118,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 112,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04840",
								"refLocation": {
									"pk": "PNS MOORHOUSE",
									"attributes": null,
									"constraints": null,
									"lat": -43.53987,
									"lon": 172.63865,
									"id": "loc-CNZ04840",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04840_15_506_MONDAY-Ambient",
					"refLocation": {
						"pk": "PNS MOORHOUSE",
						"attributes": null,
						"constraints": null,
						"lat": -43.53987,
						"lon": 172.63865,
						"id": "loc-CNZ04840",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 30,
					"timeEarliest": 1372188900000,
					"timeLatest": 1372190760000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 17222,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 22,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 30,
							"timeEarliest": 1372187700000,
							"timeLatest": 1372190760000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 30,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04964_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "2246.3907692307694",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "1981",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "1989",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "2242",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "true",
										"id": "inclusion-CNZ04964",
										"refPhysical": {
											"pk": "CD MOORHOUSE",
											"attributes": null,
											"constraints": null,
											"lat": -43.53988,
											"lon": 172.64159,
											"id": "loc-CNZ04964",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ04964",
										"refPhysical": {
											"pk": "CD MOORHOUSE",
											"attributes": null,
											"constraints": null,
											"lat": -43.53988,
											"lon": 172.64159,
											"id": "loc-CNZ04964",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04964",
										"refPhysical": {
											"pk": "CD MOORHOUSE",
											"attributes": null,
											"constraints": null,
											"lat": -43.53988,
											"lon": 172.64159,
											"id": "loc-CNZ04964",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 30,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372188600000,
										"timeFinish": 1372201200000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 30,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 25,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 27,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 29,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 29,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 38,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 5,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 31,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04964",
								"refLocation": {
									"pk": "CD MOORHOUSE",
									"attributes": null,
									"constraints": null,
									"lat": -43.53988,
									"lon": 172.64159,
									"id": "loc-CNZ04964",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04964_15_509_MONDAY-Ambient",
					"refLocation": {
						"pk": "CD MOORHOUSE",
						"attributes": null,
						"constraints": null,
						"lat": -43.53988,
						"lon": 172.64159,
						"id": "loc-CNZ04964",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372190820000,
					"timeLatest": 1372192680000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 19358,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 24,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372189620000,
							"timeLatest": 1372192680000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 3,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04277_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "36.769999999999996",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "21",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "29",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "32",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04277",
										"refPhysical": {
											"pk": "TE KURA WHAKAPUMAU I TE REO",
											"attributes": null,
											"constraints": null,
											"lat": -43.55122,
											"lon": 172.65469,
											"id": "loc-CNZ04277",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04277",
										"refPhysical": {
											"pk": "TE KURA WHAKAPUMAU I TE REO",
											"attributes": null,
											"constraints": null,
											"lat": -43.55122,
											"lon": 172.65469,
											"id": "loc-CNZ04277",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04277",
										"refPhysical": {
											"pk": "TE KURA WHAKAPUMAU I TE REO",
											"attributes": null,
											"constraints": null,
											"lat": -43.55122,
											"lon": 172.65469,
											"id": "loc-CNZ04277",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372197600000,
										"timeFinish": 1372226400000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04277",
								"refLocation": {
									"pk": "TE KURA WHAKAPUMAU I TE REO",
									"attributes": null,
									"constraints": null,
									"lat": -43.55122,
									"lon": 172.65469,
									"id": "loc-CNZ04277",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04277_15_528_MONDAY-Ambient",
					"refLocation": {
						"pk": "TE KURA WHAKAPUMAU I TE REO",
						"attributes": null,
						"constraints": null,
						"lat": -43.55122,
						"lon": 172.65469,
						"id": "loc-CNZ04277",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372191360000,
					"timeLatest": 1372193220000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 23080,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 28,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372190160000,
							"timeLatest": 1372193220000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ03988_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "30.993846153846153",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "12",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "14",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "29",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ03988",
										"refPhysical": {
											"pk": "Roundabout Dairy",
											"attributes": null,
											"constraints": null,
											"lat": -43.52998,
											"lon": 172.66778,
											"id": "loc-CNZ03988",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ03988",
										"refPhysical": {
											"pk": "Roundabout Dairy",
											"attributes": null,
											"constraints": null,
											"lat": -43.52998,
											"lon": 172.66778,
											"id": "loc-CNZ03988",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ03988",
										"refPhysical": {
											"pk": "Roundabout Dairy",
											"attributes": null,
											"constraints": null,
											"lat": -43.52998,
											"lon": 172.66778,
											"id": "loc-CNZ03988",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372176000000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ03988",
								"refLocation": {
									"pk": "Roundabout Dairy",
									"attributes": null,
									"constraints": null,
									"lat": -43.52998,
									"lon": 172.66778,
									"id": "loc-CNZ03988",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ03988_15_582_MONDAY-Ambient",
					"refLocation": {
						"pk": "Roundabout Dairy",
						"attributes": null,
						"constraints": null,
						"lat": -43.52998,
						"lon": 172.66778,
						"id": "loc-CNZ03988",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 1,
					"timeEarliest": 1372191780000,
					"timeLatest": 1372193640000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 26886,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 32,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 1,
							"timeEarliest": 1372190580000,
							"timeLatest": 1372193640000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04754_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "40.24",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "38",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "38",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "40",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04754",
										"refPhysical": {
											"pk": "ARANUI PRIMARY SCHOOL",
											"attributes": null,
											"constraints": null,
											"lat": -43.51596,
											"lon": 172.70013,
											"id": "loc-CNZ04754",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04754",
										"refPhysical": {
											"pk": "ARANUI PRIMARY SCHOOL",
											"attributes": null,
											"constraints": null,
											"lat": -43.51596,
											"lon": 172.70013,
											"id": "loc-CNZ04754",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04754",
										"refPhysical": {
											"pk": "ARANUI PRIMARY SCHOOL",
											"attributes": null,
											"constraints": null,
											"lat": -43.51596,
											"lon": 172.70013,
											"id": "loc-CNZ04754",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 1,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372213800000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04754",
								"refLocation": {
									"pk": "ARANUI PRIMARY SCHOOL",
									"attributes": null,
									"constraints": null,
									"lat": -43.51596,
									"lon": 172.70013,
									"id": "loc-CNZ04754",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04754_15_575_MONDAY-Ambient",
					"refLocation": {
						"pk": "ARANUI PRIMARY SCHOOL",
						"attributes": null,
						"constraints": null,
						"lat": -43.51596,
						"lon": 172.70013,
						"id": "loc-CNZ04754",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 1,
					"timeEarliest": 1372191960000,
					"timeLatest": 1372193820000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 28541,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 34,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 1,
							"timeEarliest": 1372190760000,
							"timeLatest": 1372193820000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04281_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "20.05461538461539",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "15",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "17",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "19",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04281",
										"refPhysical": {
											"pk": "WAINONI PRIMARY SCHOOL",
											"attributes": null,
											"constraints": null,
											"lat": -43.50553,
											"lon": 172.70898,
											"id": "loc-CNZ04281",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04281",
										"refPhysical": {
											"pk": "WAINONI PRIMARY SCHOOL",
											"attributes": null,
											"constraints": null,
											"lat": -43.50553,
											"lon": 172.70898,
											"id": "loc-CNZ04281",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04281",
										"refPhysical": {
											"pk": "WAINONI PRIMARY SCHOOL",
											"attributes": null,
											"constraints": null,
											"lat": -43.50553,
											"lon": 172.70898,
											"id": "loc-CNZ04281",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 1,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372213800000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04281",
								"refLocation": {
									"pk": "WAINONI PRIMARY SCHOOL",
									"attributes": null,
									"constraints": null,
									"lat": -43.50553,
									"lon": 172.70898,
									"id": "loc-CNZ04281",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04281_15_573_MONDAY-Ambient",
					"refLocation": {
						"pk": "WAINONI PRIMARY SCHOOL",
						"attributes": null,
						"constraints": null,
						"lat": -43.50553,
						"lon": 172.70898,
						"id": "loc-CNZ04281",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 1,
					"timeEarliest": 1372192140000,
					"timeLatest": 1372194000000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 29524,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 36,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 1,
							"timeEarliest": 1372190940000,
							"timeLatest": 1372194000000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04206_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "25.419615384615383",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "-28",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "2",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "10",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04206",
										"refPhysical": {
											"pk": "WAINONI FOODMARKET",
											"attributes": null,
											"constraints": null,
											"lat": -43.50714,
											"lon": 172.70053,
											"id": "loc-CNZ04206",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04206",
										"refPhysical": {
											"pk": "WAINONI FOODMARKET",
											"attributes": null,
											"constraints": null,
											"lat": -43.50714,
											"lon": 172.70053,
											"id": "loc-CNZ04206",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04206",
										"refPhysical": {
											"pk": "WAINONI FOODMARKET",
											"attributes": null,
											"constraints": null,
											"lat": -43.50714,
											"lon": 172.70053,
											"id": "loc-CNZ04206",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 1,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372176000000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04206",
								"refLocation": {
									"pk": "WAINONI FOODMARKET",
									"attributes": null,
									"constraints": null,
									"lat": -43.50714,
									"lon": 172.70053,
									"id": "loc-CNZ04206",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04206_15_572_MONDAY-Ambient",
					"refLocation": {
						"pk": "WAINONI FOODMARKET",
						"attributes": null,
						"constraints": null,
						"lat": -43.50714,
						"lon": 172.70053,
						"id": "loc-CNZ04206",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 1,
					"timeEarliest": 1372192380000,
					"timeLatest": 1372194240000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 31677,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 39,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 1,
							"timeEarliest": 1372191180000,
							"timeLatest": 1372194240000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ03999_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "84.43115384615383",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "54",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "62",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "80",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ03999",
										"refPhysical": {
											"pk": "Pannell Dairy",
											"attributes": null,
											"constraints": null,
											"lat": -43.52021,
											"lon": 172.68294,
											"id": "loc-CNZ03999",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ03999",
										"refPhysical": {
											"pk": "Pannell Dairy",
											"attributes": null,
											"constraints": null,
											"lat": -43.52021,
											"lon": 172.68294,
											"id": "loc-CNZ03999",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ03999",
										"refPhysical": {
											"pk": "Pannell Dairy",
											"attributes": null,
											"constraints": null,
											"lat": -43.52021,
											"lon": 172.68294,
											"id": "loc-CNZ03999",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 1,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372176000000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ03999",
								"refLocation": {
									"pk": "Pannell Dairy",
									"attributes": null,
									"constraints": null,
									"lat": -43.52021,
									"lon": 172.68294,
									"id": "loc-CNZ03999",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ03999_15_579_MONDAY-Ambient",
					"refLocation": {
						"pk": "Pannell Dairy",
						"attributes": null,
						"constraints": null,
						"lat": -43.52021,
						"lon": 172.68294,
						"id": "loc-CNZ03999",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 2,
					"timeEarliest": 1372192560000,
					"timeLatest": 1372194420000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 32748,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 41,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 2,
							"timeEarliest": 1372191360000,
							"timeLatest": 1372194420000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04283_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "25.036923076923078",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "20",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "22",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "24",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04283",
										"refPhysical": {
											"pk": "LINWOOD NORTH SCHOOL",
											"attributes": null,
											"constraints": null,
											"lat": -43.52519,
											"lon": 172.6761,
											"id": "loc-CNZ04283",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04283",
										"refPhysical": {
											"pk": "LINWOOD NORTH SCHOOL",
											"attributes": null,
											"constraints": null,
											"lat": -43.52519,
											"lon": 172.6761,
											"id": "loc-CNZ04283",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04283",
										"refPhysical": {
											"pk": "LINWOOD NORTH SCHOOL",
											"attributes": null,
											"constraints": null,
											"lat": -43.52519,
											"lon": 172.6761,
											"id": "loc-CNZ04283",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 2,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372213800000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04283",
								"refLocation": {
									"pk": "LINWOOD NORTH SCHOOL",
									"attributes": null,
									"constraints": null,
									"lat": -43.52519,
									"lon": 172.6761,
									"id": "loc-CNZ04283",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04283_15_580_MONDAY-Ambient",
					"refLocation": {
						"pk": "LINWOOD NORTH SCHOOL",
						"attributes": null,
						"constraints": null,
						"lat": -43.52519,
						"lon": 172.6761,
						"id": "loc-CNZ04283",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372192920000,
					"timeLatest": 1372194780000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 36550,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 45,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372191720000,
							"timeLatest": 1372194780000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 7,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04239_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "296.5288461538462",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "229",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "237",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "292",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04239",
										"refPhysical": {
											"pk": "OPAWA DISCOUNT TOBACCO",
											"attributes": null,
											"constraints": null,
											"lat": -43.55176,
											"lon": 172.66264,
											"id": "loc-CNZ04239",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04239",
										"refPhysical": {
											"pk": "OPAWA DISCOUNT TOBACCO",
											"attributes": null,
											"constraints": null,
											"lat": -43.55176,
											"lon": 172.66264,
											"id": "loc-CNZ04239",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04239",
										"refPhysical": {
											"pk": "OPAWA DISCOUNT TOBACCO",
											"attributes": null,
											"constraints": null,
											"lat": -43.55176,
											"lon": 172.66264,
											"id": "loc-CNZ04239",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372240800000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 7,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 8,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 6,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 6,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 6,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 6,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 6,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04239",
								"refLocation": {
									"pk": "OPAWA DISCOUNT TOBACCO",
									"attributes": null,
									"constraints": null,
									"lat": -43.55176,
									"lon": 172.66264,
									"id": "loc-CNZ04239",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04239_15_535_MONDAY-Ambient",
					"refLocation": {
						"pk": "OPAWA DISCOUNT TOBACCO",
						"attributes": null,
						"constraints": null,
						"lat": -43.55176,
						"lon": 172.66264,
						"id": "loc-CNZ04239",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372193460000,
					"timeLatest": 1372195320000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 39266,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 49,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372192260000,
							"timeLatest": 1372195320000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04605_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "34.096538461538465",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "16",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "20",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "32",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04605",
										"refPhysical": {
											"pk": "ARCHER CARE FACILITY LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.55634,
											"lon": 172.63685,
											"id": "loc-CNZ04605",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04605",
										"refPhysical": {
											"pk": "ARCHER CARE FACILITY LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.55634,
											"lon": 172.63685,
											"id": "loc-CNZ04605",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04605",
										"refPhysical": {
											"pk": "ARCHER CARE FACILITY LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.55634,
											"lon": 172.63685,
											"id": "loc-CNZ04605",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372082400000,
										"timeFinish": 1372255140000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04605",
								"refLocation": {
									"pk": "ARCHER CARE FACILITY LTD",
									"attributes": null,
									"constraints": null,
									"lat": -43.55634,
									"lon": 172.63685,
									"id": "loc-CNZ04605",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04605_15_522_MONDAY-Ambient",
					"refLocation": {
						"pk": "ARCHER CARE FACILITY LTD",
						"attributes": null,
						"constraints": null,
						"lat": -43.55634,
						"lon": 172.63685,
						"id": "loc-CNZ04605",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 35,
					"timeEarliest": 1372193820000,
					"timeLatest": 1372195680000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 39754,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 50,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 35,
							"timeEarliest": 1372192620000,
							"timeLatest": 1372195680000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 51,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04944_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "4012.1211538461544",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "3586",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "3592",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "4009",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "true",
										"id": "inclusion-CNZ04944",
										"refPhysical": {
											"pk": "CD COLOMBO ST",
											"attributes": null,
											"constraints": null,
											"lat": -43.55368,
											"lon": 172.63683,
											"id": "loc-CNZ04944",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ04944",
										"refPhysical": {
											"pk": "CD COLOMBO ST",
											"attributes": null,
											"constraints": null,
											"lat": -43.55368,
											"lon": 172.63683,
											"id": "loc-CNZ04944",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04944",
										"refPhysical": {
											"pk": "CD COLOMBO ST",
											"attributes": null,
											"constraints": null,
											"lat": -43.55368,
											"lon": 172.63683,
											"id": "loc-CNZ04944",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 35,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372248000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 51,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 48,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 48,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 52,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 51,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 50,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 4,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 53,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04944",
								"refLocation": {
									"pk": "CD COLOMBO ST",
									"attributes": null,
									"constraints": null,
									"lat": -43.55368,
									"lon": 172.63683,
									"id": "loc-CNZ04944",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04944_15_520_MONDAY-Ambient",
					"refLocation": {
						"pk": "CD COLOMBO ST",
						"attributes": null,
						"constraints": null,
						"lat": -43.55368,
						"lon": 172.63683,
						"id": "loc-CNZ04944",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372196160000,
					"timeLatest": 1372198020000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 42715,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 54,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372194960000,
							"timeLatest": 1372198020000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 3,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04186_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "80.65730769230768",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "48",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "60",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "74",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04186",
										"refPhysical": {
											"pk": "P and P DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.56935,
											"lon": 172.61129,
											"id": "loc-CNZ04186",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04186",
										"refPhysical": {
											"pk": "P and P DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.56935,
											"lon": 172.61129,
											"id": "loc-CNZ04186",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04186",
										"refPhysical": {
											"pk": "P and P DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.56935,
											"lon": 172.61129,
											"id": "loc-CNZ04186",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372176000000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04186",
								"refLocation": {
									"pk": "P and P DAIRY",
									"attributes": null,
									"constraints": null,
									"lat": -43.56935,
									"lon": 172.61129,
									"id": "loc-CNZ04186",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04186_15_218_MONDAY-Ambient",
					"refLocation": {
						"pk": "P and P DAIRY",
						"attributes": null,
						"constraints": null,
						"lat": -43.56935,
						"lon": 172.61129,
						"id": "loc-CNZ04186",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372196460000,
					"timeLatest": 1372198320000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 44556,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 56,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372195260000,
							"timeLatest": 1372198320000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04220_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "21.965384615384615",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "7",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "13",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "18",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04220",
										"refPhysical": {
											"pk": "BARRINGTON TOBACCO DIS",
											"attributes": null,
											"constraints": null,
											"lat": -43.55803,
											"lon": 172.61977,
											"id": "loc-CNZ04220",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04220",
										"refPhysical": {
											"pk": "BARRINGTON TOBACCO DIS",
											"attributes": null,
											"constraints": null,
											"lat": -43.55803,
											"lon": 172.61977,
											"id": "loc-CNZ04220",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04220",
										"refPhysical": {
											"pk": "BARRINGTON TOBACCO DIS",
											"attributes": null,
											"constraints": null,
											"lat": -43.55803,
											"lon": 172.61977,
											"id": "loc-CNZ04220",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372082400000,
										"timeFinish": 1372255140000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04220",
								"refLocation": {
									"pk": "BARRINGTON TOBACCO DIS",
									"attributes": null,
									"constraints": null,
									"lat": -43.55803,
									"lon": 172.61977,
									"id": "loc-CNZ04220",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04220_15_516_MONDAY-Ambient",
					"refLocation": {
						"pk": "BARRINGTON TOBACCO DIS",
						"attributes": null,
						"constraints": null,
						"lat": -43.55803,
						"lon": 172.61977,
						"id": "loc-CNZ04220",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372196760000,
					"timeLatest": 1372198620000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 44781,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 56,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372195560000,
							"timeLatest": 1372198620000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 3,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ03813_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "36.389615384615375",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "16",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "20",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "34",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "true",
										"id": "inclusion-CNZ03813",
										"refPhysical": {
											"pk": "TWH BARRINGTON 178",
											"attributes": null,
											"constraints": null,
											"lat": -43.55703,
											"lon": 172.61866,
											"id": "loc-CNZ03813",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ03813",
										"refPhysical": {
											"pk": "TWH BARRINGTON 178",
											"attributes": null,
											"constraints": null,
											"lat": -43.55703,
											"lon": 172.61866,
											"id": "loc-CNZ03813",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ03813",
										"refPhysical": {
											"pk": "TWH BARRINGTON 178",
											"attributes": null,
											"constraints": null,
											"lat": -43.55703,
											"lon": 172.61866,
											"id": "loc-CNZ03813",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372196700000,
										"timeFinish": 1372201200000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ03813",
								"refLocation": {
									"pk": "TWH BARRINGTON 178",
									"attributes": null,
									"constraints": null,
									"lat": -43.55703,
									"lon": 172.61866,
									"id": "loc-CNZ03813",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ03813_15_515_MONDAY-Ambient",
					"refLocation": {
						"pk": "TWH BARRINGTON 178",
						"attributes": null,
						"constraints": null,
						"lat": -43.55703,
						"lon": 172.61866,
						"id": "loc-CNZ03813",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 10,
					"timeEarliest": 1372197120000,
					"timeLatest": 1372198980000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 45522,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 57,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 10,
							"timeEarliest": 1372195920000,
							"timeLatest": 1372198980000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04099_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "17.20846153846154",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "-3",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "7",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "12",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04099",
										"refPhysical": {
											"pk": "SUNLAKE BARRINGTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.55186,
											"lon": 172.61289,
											"id": "loc-CNZ04099",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04099",
										"refPhysical": {
											"pk": "SUNLAKE BARRINGTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.55186,
											"lon": 172.61289,
											"id": "loc-CNZ04099",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04099",
										"refPhysical": {
											"pk": "SUNLAKE BARRINGTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.55186,
											"lon": 172.61289,
											"id": "loc-CNZ04099",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 10,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372213800000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04099",
								"refLocation": {
									"pk": "SUNLAKE BARRINGTON",
									"attributes": null,
									"constraints": null,
									"lat": -43.55186,
									"lon": 172.61289,
									"id": "loc-CNZ04099",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04099_15_513_MONDAY-Ambient",
					"refLocation": {
						"pk": "SUNLAKE BARRINGTON",
						"attributes": null,
						"constraints": null,
						"lat": -43.55186,
						"lon": 172.61289,
						"id": "loc-CNZ04099",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 10,
					"timeEarliest": 1372197840000,
					"timeLatest": 1372199700000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 46768,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 59,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 10,
							"timeEarliest": 1372196640000,
							"timeLatest": 1372199700000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 24,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04774_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "1362.725",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "1197",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "1201",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "1360",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04774",
										"refPhysical": {
											"pk": "PRIMA DELI LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.54835,
											"lon": 172.62182,
											"id": "loc-CNZ04774",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04774",
										"refPhysical": {
											"pk": "PRIMA DELI LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.54835,
											"lon": 172.62182,
											"id": "loc-CNZ04774",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04774",
										"refPhysical": {
											"pk": "PRIMA DELI LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.54835,
											"lon": 172.62182,
											"id": "loc-CNZ04774",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 10,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372178700000,
										"timeFinish": 1372186800000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 24,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 25,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 21,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 28,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 17,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 5,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 21,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04774",
								"refLocation": {
									"pk": "PRIMA DELI LTD",
									"attributes": null,
									"constraints": null,
									"lat": -43.54835,
									"lon": 172.62182,
									"id": "loc-CNZ04774",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04774_15_129_MONDAY-Ambient",
					"refLocation": {
						"pk": "PRIMA DELI LTD",
						"attributes": null,
						"constraints": null,
						"lat": -43.54835,
						"lon": 172.62182,
						"id": "loc-CNZ04774",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372198440000,
					"timeLatest": 1372200300000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 46962,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 59,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372197240000,
							"timeLatest": 1372200300000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 3,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ03986_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "56.121538461538464",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "39",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "39",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "56",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ03986",
										"refPhysical": {
											"pk": "SELWYN DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.54772,
											"lon": 172.62261,
											"id": "loc-CNZ03986",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ03986",
										"refPhysical": {
											"pk": "SELWYN DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.54772,
											"lon": 172.62261,
											"id": "loc-CNZ03986",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ03986",
										"refPhysical": {
											"pk": "SELWYN DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.54772,
											"lon": 172.62261,
											"id": "loc-CNZ03986",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372178700000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ03986",
								"refLocation": {
									"pk": "SELWYN DAIRY",
									"attributes": null,
									"constraints": null,
									"lat": -43.54772,
									"lon": 172.62261,
									"id": "loc-CNZ03986",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ03986_15_128_MONDAY-Ambient",
					"refLocation": {
						"pk": "SELWYN DAIRY",
						"attributes": null,
						"constraints": null,
						"lat": -43.54772,
						"lon": 172.62261,
						"id": "loc-CNZ03986",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372198860000,
					"timeLatest": 1372200720000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 50328,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 63,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372197660000,
							"timeLatest": 1372200720000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04783_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "100.52346153846153",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "83",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "85",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "99",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04783",
										"refPhysical": {
											"pk": "CALTEX RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.52941,
											"lon": 172.60434,
											"id": "loc-CNZ04783",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04783",
										"refPhysical": {
											"pk": "CALTEX RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.52941,
											"lon": 172.60434,
											"id": "loc-CNZ04783",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04783",
										"refPhysical": {
											"pk": "CALTEX RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.52941,
											"lon": 172.60434,
											"id": "loc-CNZ04783",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372178700000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04783",
								"refLocation": {
									"pk": "CALTEX RICCARTON",
									"attributes": null,
									"constraints": null,
									"lat": -43.52941,
									"lon": 172.60434,
									"id": "loc-CNZ04783",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04783_15_132_MONDAY-Ambient",
					"refLocation": {
						"pk": "CALTEX RICCARTON",
						"attributes": null,
						"constraints": null,
						"lat": -43.52941,
						"lon": 172.60434,
						"id": "loc-CNZ04783",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 2,
					"timeEarliest": 1372199160000,
					"timeLatest": 1372201020000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 50607,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 63,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 2,
							"timeEarliest": 1372197960000,
							"timeLatest": 1372201020000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04376_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "39.44269230769231",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "20",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "28",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "35",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04376",
										"refPhysical": {
											"pk": "STRAVEN REST HOME",
											"attributes": null,
											"constraints": null,
											"lat": -43.52883,
											"lon": 172.60204,
											"id": "loc-CNZ04376",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04376",
										"refPhysical": {
											"pk": "STRAVEN REST HOME",
											"attributes": null,
											"constraints": null,
											"lat": -43.52883,
											"lon": 172.60204,
											"id": "loc-CNZ04376",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04376",
										"refPhysical": {
											"pk": "STRAVEN REST HOME",
											"attributes": null,
											"constraints": null,
											"lat": -43.52883,
											"lon": 172.60204,
											"id": "loc-CNZ04376",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 2,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372178700000,
										"timeFinish": 1372186800000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04376",
								"refLocation": {
									"pk": "STRAVEN REST HOME",
									"attributes": null,
									"constraints": null,
									"lat": -43.52883,
									"lon": 172.60204,
									"id": "loc-CNZ04376",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04376_15_135_MONDAY-Ambient",
					"refLocation": {
						"pk": "STRAVEN REST HOME",
						"attributes": null,
						"constraints": null,
						"lat": -43.52883,
						"lon": 172.60204,
						"id": "loc-CNZ04376",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372199340000,
					"timeLatest": 1372201200000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 51564,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 64,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372198140000,
							"timeLatest": 1372201200000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04253_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "16.47346153846154",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "2",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "8",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "13",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04253",
										"refPhysical": {
											"pk": "DIVISION ST DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.53512,
											"lon": 172.59949,
											"id": "loc-CNZ04253",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04253",
										"refPhysical": {
											"pk": "DIVISION ST DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.53512,
											"lon": 172.59949,
											"id": "loc-CNZ04253",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04253",
										"refPhysical": {
											"pk": "DIVISION ST DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.53512,
											"lon": 172.59949,
											"id": "loc-CNZ04253",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372178700000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04253",
								"refLocation": {
									"pk": "DIVISION ST DAIRY",
									"attributes": null,
									"constraints": null,
									"lat": -43.53512,
									"lon": 172.59949,
									"id": "loc-CNZ04253",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04253_15_145_MONDAY-Ambient",
					"refLocation": {
						"pk": "DIVISION ST DAIRY",
						"attributes": null,
						"constraints": null,
						"lat": -43.53512,
						"lon": 172.59949,
						"id": "loc-CNZ04253",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 20,
					"timeEarliest": 1372199580000,
					"timeLatest": 1372201440000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 52481,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 65,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 20,
							"timeEarliest": 1372198380000,
							"timeLatest": 1372201440000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-callback-CNZ04839_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "3353.8321153846155",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "2912",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "3200",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "3208",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": null,
								"elapsedService": 20,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372204800000,
										"timeFinish": 1372213800000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-callback-CNZ04839",
								"refLocation": {
									"pk": "PNS RICCARTON",
									"attributes": null,
									"constraints": null,
									"lat": -43.52988,
									"lon": 172.59835,
									"id": "loc-CNZ04839",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04839_15_144_MONDAY-Ambient",
					"refLocation": {
						"pk": "PNS RICCARTON",
						"attributes": null,
						"constraints": null,
						"lat": -43.52988,
						"lon": 172.59835,
						"id": "loc-CNZ04839",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372200900000,
					"timeLatest": 1372202760000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 53531,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 67,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372199700000,
							"timeLatest": 1372202760000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04483_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "27.57038461538461",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "-2",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "14",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "19",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04483",
										"refPhysical": {
											"pk": "BIG GARY'S FISH N CHIPS",
											"attributes": null,
											"constraints": null,
											"lat": -43.53083,
											"lon": 172.58616,
											"id": "loc-CNZ04483",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04483",
										"refPhysical": {
											"pk": "BIG GARY'S FISH N CHIPS",
											"attributes": null,
											"constraints": null,
											"lat": -43.53083,
											"lon": 172.58616,
											"id": "loc-CNZ04483",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04483",
										"refPhysical": {
											"pk": "BIG GARY'S FISH N CHIPS",
											"attributes": null,
											"constraints": null,
											"lat": -43.53083,
											"lon": 172.58616,
											"id": "loc-CNZ04483",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372178700000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04483",
								"refLocation": {
									"pk": "BIG GARY'S FISH N CHIPS",
									"attributes": null,
									"constraints": null,
									"lat": -43.53083,
									"lon": 172.58616,
									"id": "loc-CNZ04483",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04483_15_138_MONDAY-Ambient",
					"refLocation": {
						"pk": "BIG GARY'S FISH N CHIPS",
						"attributes": null,
						"constraints": null,
						"lat": -43.53083,
						"lon": 172.58616,
						"id": "loc-CNZ04483",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372201260000,
					"timeLatest": 1372203120000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 54541,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 68,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372200060000,
							"timeLatest": 1372203120000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 5,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ03816_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "82.86576923076922",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "23",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "47",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "70",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "true",
										"id": "inclusion-CNZ03816",
										"refPhysical": {
											"pk": "TWH RICCARTON 220",
											"attributes": null,
											"constraints": null,
											"lat": -43.53846,
											"lon": 172.58521,
											"id": "loc-CNZ03816",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ03816",
										"refPhysical": {
											"pk": "TWH RICCARTON 220",
											"attributes": null,
											"constraints": null,
											"lat": -43.53846,
											"lon": 172.58521,
											"id": "loc-CNZ03816",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ03816",
										"refPhysical": {
											"pk": "TWH RICCARTON 220",
											"attributes": null,
											"constraints": null,
											"lat": -43.53846,
											"lon": 172.58521,
											"id": "loc-CNZ03816",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372199400000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 5,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 5,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 5,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 5,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ03816",
								"refLocation": {
									"pk": "TWH RICCARTON 220",
									"attributes": null,
									"constraints": null,
									"lat": -43.53846,
									"lon": 172.58521,
									"id": "loc-CNZ03816",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ03816_15_163_MONDAY-Ambient",
					"refLocation": {
						"pk": "TWH RICCARTON 220",
						"attributes": null,
						"constraints": null,
						"lat": -43.53846,
						"lon": 172.58521,
						"id": "loc-CNZ03816",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372201740000,
					"timeLatest": 1372203600000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 56766,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 71,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372200540000,
							"timeLatest": 1372203600000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04169_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "26.567307692307693",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "12",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "20",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "22",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04169",
										"refPhysical": {
											"pk": "Curletts Dairy  - Dairy Deli",
											"attributes": null,
											"constraints": null,
											"lat": -43.53375,
											"lon": 172.56758,
											"id": "loc-CNZ04169",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04169",
										"refPhysical": {
											"pk": "Curletts Dairy  - Dairy Deli",
											"attributes": null,
											"constraints": null,
											"lat": -43.53375,
											"lon": 172.56758,
											"id": "loc-CNZ04169",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04169",
										"refPhysical": {
											"pk": "Curletts Dairy  - Dairy Deli",
											"attributes": null,
											"constraints": null,
											"lat": -43.53375,
											"lon": 172.56758,
											"id": "loc-CNZ04169",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04169",
								"refLocation": {
									"pk": "Curletts Dairy  - Dairy Deli",
									"attributes": null,
									"constraints": null,
									"lat": -43.53375,
									"lon": 172.56758,
									"id": "loc-CNZ04169",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04169_15_164_MONDAY-Ambient",
					"refLocation": {
						"pk": "Curletts Dairy  - Dairy Deli",
						"attributes": null,
						"constraints": null,
						"lat": -43.53375,
						"lon": 172.56758,
						"id": "loc-CNZ04169",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 40,
					"timeEarliest": 1372202040000,
					"timeLatest": 1372203900000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 57790,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 73,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 40,
							"timeEarliest": 1372200840000,
							"timeLatest": 1372203900000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 34,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04876_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "1967.5388461538464",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "1294",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "1568",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "1829",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "true",
										"id": "inclusion-CNZ04876",
										"refPhysical": {
											"pk": "NW ILAM",
											"attributes": null,
											"constraints": null,
											"lat": -43.5265,
											"lon": 172.57073,
											"id": "loc-CNZ04876",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ04876",
										"refPhysical": {
											"pk": "NW ILAM",
											"attributes": null,
											"constraints": null,
											"lat": -43.5265,
											"lon": 172.57073,
											"id": "loc-CNZ04876",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04876",
										"refPhysical": {
											"pk": "NW ILAM",
											"attributes": null,
											"constraints": null,
											"lat": -43.5265,
											"lon": 172.57073,
											"id": "loc-CNZ04876",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 40,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 34,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 34,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 31,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 29,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 33,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 35,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 31,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04876",
								"refLocation": {
									"pk": "NW ILAM",
									"attributes": null,
									"constraints": null,
									"lat": -43.5265,
									"lon": 172.57073,
									"id": "loc-CNZ04876",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04876_15_159_MONDAY-Ambient",
					"refLocation": {
						"pk": "NW ILAM",
						"attributes": null,
						"constraints": null,
						"lat": -43.5265,
						"lon": 172.57073,
						"id": "loc-CNZ04876",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 2,
					"timeEarliest": 1372204560000,
					"timeLatest": 1372206420000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 58867,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 75,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 2,
							"timeEarliest": 1372203360000,
							"timeLatest": 1372206420000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04472_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "72.4826923076923",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "20",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "44",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "60",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04472",
										"refPhysical": {
											"pk": "CAPTAIN BENS",
											"attributes": null,
											"constraints": null,
											"lat": -43.52671,
											"lon": 172.57936,
											"id": "loc-CNZ04472",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04472",
										"refPhysical": {
											"pk": "CAPTAIN BENS",
											"attributes": null,
											"constraints": null,
											"lat": -43.52671,
											"lon": 172.57936,
											"id": "loc-CNZ04472",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04472",
										"refPhysical": {
											"pk": "CAPTAIN BENS",
											"attributes": null,
											"constraints": null,
											"lat": -43.52671,
											"lon": 172.57936,
											"id": "loc-CNZ04472",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 2,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372178700000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04472",
								"refLocation": {
									"pk": "CAPTAIN BENS",
									"attributes": null,
									"constraints": null,
									"lat": -43.52671,
									"lon": 172.57936,
									"id": "loc-CNZ04472",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04472_15_141_MONDAY-Ambient",
					"refLocation": {
						"pk": "CAPTAIN BENS",
						"attributes": null,
						"constraints": null,
						"lat": -43.52671,
						"lon": 172.57936,
						"id": "loc-CNZ04472",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 30,
					"timeEarliest": 1372204740000,
					"timeLatest": 1372206600000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 59819,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 76,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 30,
							"timeEarliest": 1372203540000,
							"timeLatest": 1372206600000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 31,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04940_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "2245.869230769231",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "1719",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "1904",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "2152",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "true",
										"id": "inclusion-CNZ04940",
										"refPhysical": {
											"pk": "CD Bush Inn",
											"attributes": null,
											"constraints": null,
											"lat": -43.53086,
											"lon": 172.57492,
											"id": "loc-CNZ04940",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ04940",
										"refPhysical": {
											"pk": "CD Bush Inn",
											"attributes": null,
											"constraints": null,
											"lat": -43.53086,
											"lon": 172.57492,
											"id": "loc-CNZ04940",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04940",
										"refPhysical": {
											"pk": "CD Bush Inn",
											"attributes": null,
											"constraints": null,
											"lat": -43.53086,
											"lon": 172.57492,
											"id": "loc-CNZ04940",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 30,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372190400000,
										"timeFinish": 1372199400000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 31,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 32,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 31,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 28,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 29,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 30,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 25,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04940",
								"refLocation": {
									"pk": "CD Bush Inn",
									"attributes": null,
									"constraints": null,
									"lat": -43.53086,
									"lon": 172.57492,
									"id": "loc-CNZ04940",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04940_15_147_MONDAY-Ambient",
					"refLocation": {
						"pk": "CD Bush Inn",
						"attributes": null,
						"constraints": null,
						"lat": -43.53086,
						"lon": 172.57492,
						"id": "loc-CNZ04940",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372206840000,
					"timeLatest": 1372222440000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 63610,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 81,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372205640000,
							"timeLatest": 1372222440000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04785_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "24.160000000000004",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "-15",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "7",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "13",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04785",
										"refPhysical": {
											"pk": "CALTEX AVONHEAD",
											"attributes": null,
											"constraints": null,
											"lat": -43.51158,
											"lon": 172.55575,
											"id": "loc-CNZ04785",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04785",
										"refPhysical": {
											"pk": "CALTEX AVONHEAD",
											"attributes": null,
											"constraints": null,
											"lat": -43.51158,
											"lon": 172.55575,
											"id": "loc-CNZ04785",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04785",
										"refPhysical": {
											"pk": "CALTEX AVONHEAD",
											"attributes": null,
											"constraints": null,
											"lat": -43.51158,
											"lon": 172.55575,
											"id": "loc-CNZ04785",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372213800000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04785",
								"refLocation": {
									"pk": "CALTEX AVONHEAD",
									"attributes": null,
									"constraints": null,
									"lat": -43.51158,
									"lon": 172.55575,
									"id": "loc-CNZ04785",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04785_15_168_MONDAY-Ambient",
					"refLocation": {
						"pk": "CALTEX AVONHEAD",
						"attributes": null,
						"constraints": null,
						"lat": -43.51158,
						"lon": 172.55575,
						"id": "loc-CNZ04785",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 35,
					"timeEarliest": 1372207200000,
					"timeLatest": 1372222800000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 63790,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 82,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 35,
							"timeEarliest": 1372206000000,
							"timeLatest": 1372222800000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 23,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04936_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "1554.1373076923078",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "1054",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "1266",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "1447",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "true",
										"id": "inclusion-CNZ04936",
										"refPhysical": {
											"pk": "CD AVONHEAD",
											"attributes": null,
											"constraints": null,
											"lat": -43.51083,
											"lon": 172.55643,
											"id": "loc-CNZ04936",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ04936",
										"refPhysical": {
											"pk": "CD AVONHEAD",
											"attributes": null,
											"constraints": null,
											"lat": -43.51083,
											"lon": 172.55643,
											"id": "loc-CNZ04936",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04936",
										"refPhysical": {
											"pk": "CD AVONHEAD",
											"attributes": null,
											"constraints": null,
											"lat": -43.51083,
											"lon": 172.55643,
											"id": "loc-CNZ04936",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 35,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372215600000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 23,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 22,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 21,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 20,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 21,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 23,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 20,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04936",
								"refLocation": {
									"pk": "CD AVONHEAD",
									"attributes": null,
									"constraints": null,
									"lat": -43.51083,
									"lon": 172.55643,
									"id": "loc-CNZ04936",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04936_15_169_MONDAY-Ambient",
					"refLocation": {
						"pk": "CD AVONHEAD",
						"attributes": null,
						"constraints": null,
						"lat": -43.51083,
						"lon": 172.55643,
						"id": "loc-CNZ04936",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 0,
					"timeEarliest": 1372209600000,
					"timeLatest": 1372239000000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 67363,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 87,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": []
					},
					"selections": null,
					"id": "VIS_loc-Christchurch_15_708_MONDAY-Ambient",
					"refLocation": {
						"pk": null,
						"attributes": null,
						"constraints": null,
						"lat": -43.48739,
						"lon": 172.56095,
						"id": "loc-Christchurch",
						"linehaulCost": 12355.63
					},
					"stopNum": null,
					"isSplitVisit": false
				}]
			},
			"selections": null,
			"id": "RT_availability-K73001_MONDAY-Ambient",
			"retorunToDepotTime": null,
			"departFromDepotTime": null,
			"fixedRevisitDuration": null
		}],
		"id": null,
		"nonSummaryRoute": [{
			"payloads": {
				"payload": [{
					"value": "<summary><loads><load refCommodity=\"MONDAY-Ambient\"><quantity>378</quantity></load><load refCommodity=\"MONDAY-Chilled\"><quantity>30</quantity></load></loads><durations><duration><name>Travel</name><value>87</value></duration><duration><name>Service</name><value>423</value></duration><duration><name>Load_Unload</name><value>20</value></duration></durations></summary>",
					"name": "chk-summary"
				}]
			},
			"vehicles": {
				"vehicle": {
					"refVehicle": {
						"pk": null,
						"attributes": {
							"attribute": [{
								"payloads": null,
								"value": "loc-Christchurch",
								"refProperty": {
									"payloads": null,
									"title": "vehicle-start-depot",
									"physical": "ENTITY_VEHICLE",
									"typeProperty": "STRING",
									"id": "prop26"
								}
							},
							{
								"payloads": null,
								"value": "Southern",
								"refProperty": {
									"payloads": null,
									"title": "vehicle-region",
									"physical": "ENTITY_VEHICLE",
									"typeProperty": "STRING",
									"id": "prop22"
								}
							},
							{
								"payloads": null,
								"value": "1152.2453846153846",
								"refProperty": {
									"payloads": null,
									"title": "vehicle-fixed-cost",
									"physical": "ENTITY_VEHICLE",
									"typeProperty": "STRING",
									"id": "prop27"
								}
							},
							{
								"payloads": null,
								"value": "vehicle-400966",
								"refProperty": {
									"payloads": null,
									"title": "vehicle-assignment",
									"physical": "ENTITY_VEHICLE",
									"typeProperty": "STRING",
									"id": "prop10"
								}
							}]
						},
						"constraints": null,
						"costs": {
							"cost": [{
								"payloads": null,
								"value": 0.4428,
								"typeMetric": "METRIC_TIME"
							},
							{
								"payloads": null,
								"value": 0.00057,
								"typeMetric": "METRIC_DISTANCE"
							}]
						},
						"limits": null,
						"availabilities": {
							"availability": [{
								"payloads": null,
								"timeOpen": 1372174200000,
								"timeClose": 1372239000000,
								"refLocationOpen": {
									"pk": null,
									"attributes": null,
									"constraints": null,
									"lat": -43.48739,
									"lon": 172.56095,
									"id": "loc-Christchurch",
									"linehaulCost": 12355.63
								},
								"refLocationClose": {
									"pk": null,
									"attributes": null,
									"constraints": null,
									"lat": -43.48739,
									"lon": 172.56095,
									"id": "loc-Christchurch",
									"linehaulCost": 12355.63
								},
								"id": "availability-K73001",
								"duration": 720,
								"overtimes": null
							}]
						},
						"capacities": {
							"capacity": [{
								"payloads": null,
								"value": 378,
								"refCommodity": {
									"payloads": null,
									"title": "MONDAY-Ambient",
									"unitWhole": "items",
									"id": "MONDAY-Ambient"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 48,
								"refCommodity": {
									"payloads": null,
									"title": "MONDAY-Chilled",
									"unitWhole": "items",
									"id": "MONDAY-Chilled"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 378,
								"refCommodity": {
									"payloads": null,
									"title": "TUESDAY-Ambient",
									"unitWhole": "items",
									"id": "TUESDAY-Ambient"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 48,
								"refCommodity": {
									"payloads": null,
									"title": "TUESDAY-Chilled",
									"unitWhole": "items",
									"id": "TUESDAY-Chilled"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 378,
								"refCommodity": {
									"payloads": null,
									"title": "WEDNESDAY-Ambient",
									"unitWhole": "items",
									"id": "WEDNESDAY-Ambient"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 48,
								"refCommodity": {
									"payloads": null,
									"title": "WEDNESDAY-Chilled",
									"unitWhole": "items",
									"id": "WEDNESDAY-Chilled"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 378,
								"refCommodity": {
									"payloads": null,
									"title": "THURSDAY-Ambient",
									"unitWhole": "items",
									"id": "THURSDAY-Ambient"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 48,
								"refCommodity": {
									"payloads": null,
									"title": "THURSDAY-Chilled",
									"unitWhole": "items",
									"id": "THURSDAY-Chilled"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 378,
								"refCommodity": {
									"payloads": null,
									"title": "FRIDAY-Ambient",
									"unitWhole": "items",
									"id": "FRIDAY-Ambient"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 48,
								"refCommodity": {
									"payloads": null,
									"title": "FRIDAY-Chilled",
									"unitWhole": "items",
									"id": "FRIDAY-Chilled"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 378,
								"refCommodity": {
									"payloads": null,
									"title": "SATURDAY-Ambient",
									"unitWhole": "items",
									"id": "SATURDAY-Ambient"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 48,
								"refCommodity": {
									"payloads": null,
									"title": "SATURDAY-Chilled",
									"unitWhole": "items",
									"id": "SATURDAY-Chilled"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 378,
								"refCommodity": {
									"payloads": null,
									"title": "SUNDAY-Ambient",
									"unitWhole": "items",
									"id": "SUNDAY-Ambient"
								},
								"loadtime": 0.0,
								"unloadtime": null
							},
							{
								"payloads": null,
								"value": 48,
								"refCommodity": {
									"payloads": null,
									"title": "SUNDAY-Chilled",
									"unitWhole": "items",
									"id": "SUNDAY-Chilled"
								},
								"loadtime": 0.0,
								"unloadtime": null
							}]
						},
						"id": "vehicle-400966",
						"droppedCustomers": null,
						"unloadtime": 0,
						"fixedcost": 0,
						"ambientPickRate": 0.0,
						"chilledPickRate": 0.0,
						"isMultiDriver": false,
						"isPackerLoad": false,
						"retorunToDepotTime": null,
						"departFromDepotTime": null,
						"fixedRevisitDuration": null,
						"returnToDepotVisit": null
					},
					"refAvailability": {
						"payloads": null,
						"timeOpen": 1372174200000,
						"timeClose": 1372239000000,
						"refLocationOpen": {
							"pk": null,
							"attributes": null,
							"constraints": null,
							"lat": -43.48739,
							"lon": 172.56095,
							"id": "loc-Christchurch",
							"linehaulCost": 12355.63
						},
						"refLocationClose": {
							"pk": null,
							"attributes": null,
							"constraints": null,
							"lat": -43.48739,
							"lon": 172.56095,
							"id": "loc-Christchurch",
							"linehaulCost": 12355.63
						},
						"id": "availability-K73001",
						"duration": 720,
						"overtimes": null
					}
				}
			},
			"resources": {
				"resource": []
			},
			"visits": {
				"visit": [{
					"payloads": null,
					"elapsedDuration": 20,
					"timeEarliest": 1372177800000,
					"timeLatest": 1372179660000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 0,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 0,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 20,
							"timeEarliest": 1372175400000,
							"timeLatest": 1372180860000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-unload-return-depot-K73001_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "0.0",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "0",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "0",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "0",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									},
									{
										"payloads": null,
										"value": "No",
										"refProperty": {
											"payloads": null,
											"title": "is-feasible",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop44"
										}
									},
									{
										"payloads": null,
										"value": "",
										"refProperty": {
											"payloads": null,
											"title": "reason-why",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop45"
										}
									}]
								},
								"constraints": null,
								"elapsedService": 20,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372174200000,
										"timeFinish": 1372239000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": true
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": true
									}]
								},
								"id": "request-unload-return-depot-K73001",
								"refLocation": {
									"pk": null,
									"attributes": null,
									"constraints": null,
									"lat": -43.48739,
									"lon": 172.56095,
									"id": "loc-Christchurch",
									"linehaulCost": 12355.63
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-Christchurch_15_687_MONDAY-Ambient",
					"refLocation": {
						"pk": null,
						"attributes": null,
						"constraints": null,
						"lat": -43.48739,
						"lon": 172.56095,
						"id": "loc-Christchurch",
						"linehaulCost": 12355.63
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372180320000,
					"timeLatest": 1372182180000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 1018,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 2,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372176720000,
							"timeLatest": 1372182180000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04459_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "64.915",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "55",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "55",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "64",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04459",
										"refPhysical": {
											"pk": "WAIRAKEI PIE BIN LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.48906,
											"lon": 172.56752,
											"id": "loc-CNZ04459",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04459",
										"refPhysical": {
											"pk": "WAIRAKEI PIE BIN LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.48906,
											"lon": 172.56752,
											"id": "loc-CNZ04459",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04459",
										"refPhysical": {
											"pk": "WAIRAKEI PIE BIN LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.48906,
											"lon": 172.56752,
											"id": "loc-CNZ04459",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372178700000,
										"timeFinish": 1372185000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04459",
								"refLocation": {
									"pk": "WAIRAKEI PIE BIN LTD",
									"attributes": null,
									"constraints": null,
									"lat": -43.48906,
									"lon": 172.56752,
									"id": "loc-CNZ04459",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04459_15_121_MONDAY-Ambient",
					"refLocation": {
						"pk": "WAIRAKEI PIE BIN LTD",
						"attributes": null,
						"constraints": null,
						"lat": -43.48906,
						"lon": 172.56752,
						"id": "loc-CNZ04459",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372180800000,
					"timeLatest": 1372182660000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 2997,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 5,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372179600000,
							"timeLatest": 1372182660000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 4,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04234_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "138.62576923076924",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "104",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "104",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "138",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04234",
										"refPhysical": {
											"pk": "GREERS DISCOUNT TOBACCO DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.49946,
											"lon": 172.58633,
											"id": "loc-CNZ04234",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04234",
										"refPhysical": {
											"pk": "GREERS DISCOUNT TOBACCO DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.49946,
											"lon": 172.58633,
											"id": "loc-CNZ04234",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04234",
										"refPhysical": {
											"pk": "GREERS DISCOUNT TOBACCO DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.49946,
											"lon": 172.58633,
											"id": "loc-CNZ04234",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 4,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 5,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 5,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 5,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 5,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 6,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04234",
								"refLocation": {
									"pk": "GREERS DISCOUNT TOBACCO DAIRY",
									"attributes": null,
									"constraints": null,
									"lat": -43.49946,
									"lon": 172.58633,
									"id": "loc-CNZ04234",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04234_15_154_MONDAY-Ambient",
					"refLocation": {
						"pk": "GREERS DISCOUNT TOBACCO DAIRY",
						"attributes": null,
						"constraints": null,
						"lat": -43.49946,
						"lon": 172.58633,
						"id": "loc-CNZ04234",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 1,
					"timeEarliest": 1372181160000,
					"timeLatest": 1372183020000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 5867,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 8,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 1,
							"timeEarliest": 1372179960000,
							"timeLatest": 1372183020000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ03982_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "30.03384615384616",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "13",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "17",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "28",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ03982",
										"refPhysical": {
											"pk": "GRAMPIAN SUPERETTE",
											"attributes": null,
											"constraints": null,
											"lat": -43.48028,
											"lon": 172.60308,
											"id": "loc-CNZ03982",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ03982",
										"refPhysical": {
											"pk": "GRAMPIAN SUPERETTE",
											"attributes": null,
											"constraints": null,
											"lat": -43.48028,
											"lon": 172.60308,
											"id": "loc-CNZ03982",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ03982",
										"refPhysical": {
											"pk": "GRAMPIAN SUPERETTE",
											"attributes": null,
											"constraints": null,
											"lat": -43.48028,
											"lon": 172.60308,
											"id": "loc-CNZ03982",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 1,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372082400000,
										"timeFinish": 1372255140000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ03982",
								"refLocation": {
									"pk": "GRAMPIAN SUPERETTE",
									"attributes": null,
									"constraints": null,
									"lat": -43.48028,
									"lon": 172.60308,
									"id": "loc-CNZ03982",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ03982_15_84_MONDAY-Ambient",
					"refLocation": {
						"pk": "GRAMPIAN SUPERETTE",
						"attributes": null,
						"constraints": null,
						"lat": -43.48028,
						"lon": 172.60308,
						"id": "loc-CNZ03982",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 10,
					"timeEarliest": 1372181340000,
					"timeLatest": 1372183200000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 7335,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 10,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 10,
							"timeEarliest": 1372180140000,
							"timeLatest": 1372183200000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04449_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "16.743076923076924",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "4",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "10",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "13",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04449",
										"refPhysical": {
											"pk": "HARVEST MARKET",
											"attributes": null,
											"constraints": null,
											"lat": -43.48447,
											"lon": 172.61535,
											"id": "loc-CNZ04449",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04449",
										"refPhysical": {
											"pk": "HARVEST MARKET",
											"attributes": null,
											"constraints": null,
											"lat": -43.48447,
											"lon": 172.61535,
											"id": "loc-CNZ04449",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04449",
										"refPhysical": {
											"pk": "HARVEST MARKET",
											"attributes": null,
											"constraints": null,
											"lat": -43.48447,
											"lon": 172.61535,
											"id": "loc-CNZ04449",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 10,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372186800000,
										"timeFinish": 1372226400000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04449",
								"refLocation": {
									"pk": "HARVEST MARKET",
									"attributes": null,
									"constraints": null,
									"lat": -43.48447,
									"lon": 172.61535,
									"id": "loc-CNZ04449",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04449_15_114_MONDAY-Ambient",
					"refLocation": {
						"pk": "HARVEST MARKET",
						"attributes": null,
						"constraints": null,
						"lat": -43.48447,
						"lon": 172.61535,
						"id": "loc-CNZ04449",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 1,
					"timeEarliest": 1372182060000,
					"timeLatest": 1372183920000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 8623,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 12,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 1,
							"timeEarliest": 1372180860000,
							"timeLatest": 1372183920000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04780_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "34.94730769230769",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "28",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "28",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "34",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04780",
										"refPhysical": {
											"pk": "CALTEX CRANFORD STREET",
											"attributes": null,
											"constraints": null,
											"lat": -43.49052,
											"lon": 172.62121,
											"id": "loc-CNZ04780",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04780",
										"refPhysical": {
											"pk": "CALTEX CRANFORD STREET",
											"attributes": null,
											"constraints": null,
											"lat": -43.49052,
											"lon": 172.62121,
											"id": "loc-CNZ04780",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04780",
										"refPhysical": {
											"pk": "CALTEX CRANFORD STREET",
											"attributes": null,
											"constraints": null,
											"lat": -43.49052,
											"lon": 172.62121,
											"id": "loc-CNZ04780",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 1,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372190400000,
										"timeFinish": 1372248000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04780",
								"refLocation": {
									"pk": "CALTEX CRANFORD STREET",
									"attributes": null,
									"constraints": null,
									"lat": -43.49052,
									"lon": 172.62121,
									"id": "loc-CNZ04780",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04780_15_115_MONDAY-Ambient",
					"refLocation": {
						"pk": "CALTEX CRANFORD STREET",
						"attributes": null,
						"constraints": null,
						"lat": -43.49052,
						"lon": 172.62121,
						"id": "loc-CNZ04780",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372182360000,
					"timeLatest": 1372184220000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 11438,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 16,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372181160000,
							"timeLatest": 1372184220000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04176_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "90.21538461538461",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "83",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "83",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "90",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04176",
										"refPhysical": {
											"pk": "Kesgrove Dairy",
											"attributes": null,
											"constraints": null,
											"lat": -43.50945,
											"lon": 172.63004,
											"id": "loc-CNZ04176",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04176",
										"refPhysical": {
											"pk": "Kesgrove Dairy",
											"attributes": null,
											"constraints": null,
											"lat": -43.50945,
											"lon": 172.63004,
											"id": "loc-CNZ04176",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04176",
										"refPhysical": {
											"pk": "Kesgrove Dairy",
											"attributes": null,
											"constraints": null,
											"lat": -43.50945,
											"lon": 172.63004,
											"id": "loc-CNZ04176",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372176000000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04176",
								"refLocation": {
									"pk": "Kesgrove Dairy",
									"attributes": null,
									"constraints": null,
									"lat": -43.50945,
									"lon": 172.63004,
									"id": "loc-CNZ04176",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04176_15_551_MONDAY-Ambient",
					"refLocation": {
						"pk": "Kesgrove Dairy",
						"attributes": null,
						"constraints": null,
						"lat": -43.50945,
						"lon": 172.63004,
						"id": "loc-CNZ04176",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372182600000,
					"timeLatest": 1372184460000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 12273,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 17,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372181400000,
							"timeLatest": 1372184460000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 7,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ03771_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "490.5465384615385",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "405",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "421",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "482",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "true",
										"id": "inclusion-CNZ03771",
										"refPhysical": {
											"pk": "SV EDGEWARE VILLAGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.51343,
											"lon": 172.63658,
											"id": "loc-CNZ03771",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ03771",
										"refPhysical": {
											"pk": "SV EDGEWARE VILLAGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.51343,
											"lon": 172.63658,
											"id": "loc-CNZ03771",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ03771",
										"refPhysical": {
											"pk": "SV EDGEWARE VILLAGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.51343,
											"lon": 172.63658,
											"id": "loc-CNZ03771",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372188600000,
										"timeFinish": 1372201200000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 7,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 8,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 8,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 8,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 7,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 9,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 6,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ03771",
								"refLocation": {
									"pk": "SV EDGEWARE VILLAGE",
									"attributes": null,
									"constraints": null,
									"lat": -43.51343,
									"lon": 172.63658,
									"id": "loc-CNZ03771",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ03771_15_592_MONDAY-Ambient",
					"refLocation": {
						"pk": "SV EDGEWARE VILLAGE",
						"attributes": null,
						"constraints": null,
						"lat": -43.51343,
						"lon": 172.63658,
						"id": "loc-CNZ03771",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372182960000,
					"timeLatest": 1372184820000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 13297,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 18,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372181760000,
							"timeLatest": 1372184820000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04084_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "22.500384615384615",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "11",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "17",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "19",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04084",
										"refPhysical": {
											"pk": "DICKIES CORNER DAIRY DAIRY DELI",
											"attributes": null,
											"constraints": null,
											"lat": -43.51569,
											"lon": 172.64576,
											"id": "loc-CNZ04084",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04084",
										"refPhysical": {
											"pk": "DICKIES CORNER DAIRY DAIRY DELI",
											"attributes": null,
											"constraints": null,
											"lat": -43.51569,
											"lon": 172.64576,
											"id": "loc-CNZ04084",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04084",
										"refPhysical": {
											"pk": "DICKIES CORNER DAIRY DAIRY DELI",
											"attributes": null,
											"constraints": null,
											"lat": -43.51569,
											"lon": 172.64576,
											"id": "loc-CNZ04084",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372240800000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04084",
								"refLocation": {
									"pk": "DICKIES CORNER DAIRY DAIRY DELI",
									"attributes": null,
									"constraints": null,
									"lat": -43.51569,
									"lon": 172.64576,
									"id": "loc-CNZ04084",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04084_15_547_MONDAY-Ambient",
					"refLocation": {
						"pk": "DICKIES CORNER DAIRY DAIRY DELI",
						"attributes": null,
						"constraints": null,
						"lat": -43.51569,
						"lon": 172.64576,
						"id": "loc-CNZ04084",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 90,
					"timeEarliest": 1372183500000,
					"timeLatest": 1372185360000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 16968,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 22,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 90,
							"timeEarliest": 1372182300000,
							"timeLatest": 1372185360000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 119,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 6,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04840_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "6113.566923076923",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "5108",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "5120",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "6107",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "true",
										"id": "inclusion-CNZ04840",
										"refPhysical": {
											"pk": "PNS MOORHOUSE",
											"attributes": null,
											"constraints": null,
											"lat": -43.53987,
											"lon": 172.63865,
											"id": "loc-CNZ04840",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ04840",
										"refPhysical": {
											"pk": "PNS MOORHOUSE",
											"attributes": null,
											"constraints": null,
											"lat": -43.53987,
											"lon": 172.63865,
											"id": "loc-CNZ04840",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04840",
										"refPhysical": {
											"pk": "PNS MOORHOUSE",
											"attributes": null,
											"constraints": null,
											"lat": -43.53987,
											"lon": 172.63865,
											"id": "loc-CNZ04840",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 90,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372176000000,
										"timeFinish": 1372194000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 119,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 6,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 120,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 133,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 151,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 6,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 108,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 118,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 112,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04840",
								"refLocation": {
									"pk": "PNS MOORHOUSE",
									"attributes": null,
									"constraints": null,
									"lat": -43.53987,
									"lon": 172.63865,
									"id": "loc-CNZ04840",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04840_15_506_MONDAY-Ambient",
					"refLocation": {
						"pk": "PNS MOORHOUSE",
						"attributes": null,
						"constraints": null,
						"lat": -43.53987,
						"lon": 172.63865,
						"id": "loc-CNZ04840",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 30,
					"timeEarliest": 1372188900000,
					"timeLatest": 1372190760000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 17222,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 22,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 30,
							"timeEarliest": 1372187700000,
							"timeLatest": 1372190760000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 30,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04964_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "2246.3907692307694",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "1981",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "1989",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "2242",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "true",
										"id": "inclusion-CNZ04964",
										"refPhysical": {
											"pk": "CD MOORHOUSE",
											"attributes": null,
											"constraints": null,
											"lat": -43.53988,
											"lon": 172.64159,
											"id": "loc-CNZ04964",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ04964",
										"refPhysical": {
											"pk": "CD MOORHOUSE",
											"attributes": null,
											"constraints": null,
											"lat": -43.53988,
											"lon": 172.64159,
											"id": "loc-CNZ04964",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04964",
										"refPhysical": {
											"pk": "CD MOORHOUSE",
											"attributes": null,
											"constraints": null,
											"lat": -43.53988,
											"lon": 172.64159,
											"id": "loc-CNZ04964",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 30,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372188600000,
										"timeFinish": 1372201200000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 30,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 25,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 27,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 29,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 29,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 38,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 5,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 31,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04964",
								"refLocation": {
									"pk": "CD MOORHOUSE",
									"attributes": null,
									"constraints": null,
									"lat": -43.53988,
									"lon": 172.64159,
									"id": "loc-CNZ04964",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04964_15_509_MONDAY-Ambient",
					"refLocation": {
						"pk": "CD MOORHOUSE",
						"attributes": null,
						"constraints": null,
						"lat": -43.53988,
						"lon": 172.64159,
						"id": "loc-CNZ04964",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372190820000,
					"timeLatest": 1372192680000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 19358,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 24,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372189620000,
							"timeLatest": 1372192680000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 3,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04277_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "36.769999999999996",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "21",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "29",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "32",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04277",
										"refPhysical": {
											"pk": "TE KURA WHAKAPUMAU I TE REO",
											"attributes": null,
											"constraints": null,
											"lat": -43.55122,
											"lon": 172.65469,
											"id": "loc-CNZ04277",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04277",
										"refPhysical": {
											"pk": "TE KURA WHAKAPUMAU I TE REO",
											"attributes": null,
											"constraints": null,
											"lat": -43.55122,
											"lon": 172.65469,
											"id": "loc-CNZ04277",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04277",
										"refPhysical": {
											"pk": "TE KURA WHAKAPUMAU I TE REO",
											"attributes": null,
											"constraints": null,
											"lat": -43.55122,
											"lon": 172.65469,
											"id": "loc-CNZ04277",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372197600000,
										"timeFinish": 1372226400000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04277",
								"refLocation": {
									"pk": "TE KURA WHAKAPUMAU I TE REO",
									"attributes": null,
									"constraints": null,
									"lat": -43.55122,
									"lon": 172.65469,
									"id": "loc-CNZ04277",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04277_15_528_MONDAY-Ambient",
					"refLocation": {
						"pk": "TE KURA WHAKAPUMAU I TE REO",
						"attributes": null,
						"constraints": null,
						"lat": -43.55122,
						"lon": 172.65469,
						"id": "loc-CNZ04277",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372191360000,
					"timeLatest": 1372193220000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 23080,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 28,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372190160000,
							"timeLatest": 1372193220000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ03988_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "30.993846153846153",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "12",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "14",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "29",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ03988",
										"refPhysical": {
											"pk": "Roundabout Dairy",
											"attributes": null,
											"constraints": null,
											"lat": -43.52998,
											"lon": 172.66778,
											"id": "loc-CNZ03988",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ03988",
										"refPhysical": {
											"pk": "Roundabout Dairy",
											"attributes": null,
											"constraints": null,
											"lat": -43.52998,
											"lon": 172.66778,
											"id": "loc-CNZ03988",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ03988",
										"refPhysical": {
											"pk": "Roundabout Dairy",
											"attributes": null,
											"constraints": null,
											"lat": -43.52998,
											"lon": 172.66778,
											"id": "loc-CNZ03988",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372176000000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ03988",
								"refLocation": {
									"pk": "Roundabout Dairy",
									"attributes": null,
									"constraints": null,
									"lat": -43.52998,
									"lon": 172.66778,
									"id": "loc-CNZ03988",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ03988_15_582_MONDAY-Ambient",
					"refLocation": {
						"pk": "Roundabout Dairy",
						"attributes": null,
						"constraints": null,
						"lat": -43.52998,
						"lon": 172.66778,
						"id": "loc-CNZ03988",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 1,
					"timeEarliest": 1372191780000,
					"timeLatest": 1372193640000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 26886,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 32,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 1,
							"timeEarliest": 1372190580000,
							"timeLatest": 1372193640000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04754_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "40.24",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "38",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "38",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "40",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04754",
										"refPhysical": {
											"pk": "ARANUI PRIMARY SCHOOL",
											"attributes": null,
											"constraints": null,
											"lat": -43.51596,
											"lon": 172.70013,
											"id": "loc-CNZ04754",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04754",
										"refPhysical": {
											"pk": "ARANUI PRIMARY SCHOOL",
											"attributes": null,
											"constraints": null,
											"lat": -43.51596,
											"lon": 172.70013,
											"id": "loc-CNZ04754",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04754",
										"refPhysical": {
											"pk": "ARANUI PRIMARY SCHOOL",
											"attributes": null,
											"constraints": null,
											"lat": -43.51596,
											"lon": 172.70013,
											"id": "loc-CNZ04754",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 1,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372213800000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04754",
								"refLocation": {
									"pk": "ARANUI PRIMARY SCHOOL",
									"attributes": null,
									"constraints": null,
									"lat": -43.51596,
									"lon": 172.70013,
									"id": "loc-CNZ04754",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04754_15_575_MONDAY-Ambient",
					"refLocation": {
						"pk": "ARANUI PRIMARY SCHOOL",
						"attributes": null,
						"constraints": null,
						"lat": -43.51596,
						"lon": 172.70013,
						"id": "loc-CNZ04754",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 1,
					"timeEarliest": 1372191960000,
					"timeLatest": 1372193820000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 28541,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 34,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 1,
							"timeEarliest": 1372190760000,
							"timeLatest": 1372193820000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04281_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "20.05461538461539",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "15",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "17",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "19",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04281",
										"refPhysical": {
											"pk": "WAINONI PRIMARY SCHOOL",
											"attributes": null,
											"constraints": null,
											"lat": -43.50553,
											"lon": 172.70898,
											"id": "loc-CNZ04281",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04281",
										"refPhysical": {
											"pk": "WAINONI PRIMARY SCHOOL",
											"attributes": null,
											"constraints": null,
											"lat": -43.50553,
											"lon": 172.70898,
											"id": "loc-CNZ04281",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04281",
										"refPhysical": {
											"pk": "WAINONI PRIMARY SCHOOL",
											"attributes": null,
											"constraints": null,
											"lat": -43.50553,
											"lon": 172.70898,
											"id": "loc-CNZ04281",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 1,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372213800000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04281",
								"refLocation": {
									"pk": "WAINONI PRIMARY SCHOOL",
									"attributes": null,
									"constraints": null,
									"lat": -43.50553,
									"lon": 172.70898,
									"id": "loc-CNZ04281",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04281_15_573_MONDAY-Ambient",
					"refLocation": {
						"pk": "WAINONI PRIMARY SCHOOL",
						"attributes": null,
						"constraints": null,
						"lat": -43.50553,
						"lon": 172.70898,
						"id": "loc-CNZ04281",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 1,
					"timeEarliest": 1372192140000,
					"timeLatest": 1372194000000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 29524,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 36,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 1,
							"timeEarliest": 1372190940000,
							"timeLatest": 1372194000000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04206_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "25.419615384615383",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "-28",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "2",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "10",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04206",
										"refPhysical": {
											"pk": "WAINONI FOODMARKET",
											"attributes": null,
											"constraints": null,
											"lat": -43.50714,
											"lon": 172.70053,
											"id": "loc-CNZ04206",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04206",
										"refPhysical": {
											"pk": "WAINONI FOODMARKET",
											"attributes": null,
											"constraints": null,
											"lat": -43.50714,
											"lon": 172.70053,
											"id": "loc-CNZ04206",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04206",
										"refPhysical": {
											"pk": "WAINONI FOODMARKET",
											"attributes": null,
											"constraints": null,
											"lat": -43.50714,
											"lon": 172.70053,
											"id": "loc-CNZ04206",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 1,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372176000000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04206",
								"refLocation": {
									"pk": "WAINONI FOODMARKET",
									"attributes": null,
									"constraints": null,
									"lat": -43.50714,
									"lon": 172.70053,
									"id": "loc-CNZ04206",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04206_15_572_MONDAY-Ambient",
					"refLocation": {
						"pk": "WAINONI FOODMARKET",
						"attributes": null,
						"constraints": null,
						"lat": -43.50714,
						"lon": 172.70053,
						"id": "loc-CNZ04206",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 1,
					"timeEarliest": 1372192380000,
					"timeLatest": 1372194240000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 31677,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 39,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 1,
							"timeEarliest": 1372191180000,
							"timeLatest": 1372194240000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ03999_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "84.43115384615383",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "54",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "62",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "80",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ03999",
										"refPhysical": {
											"pk": "Pannell Dairy",
											"attributes": null,
											"constraints": null,
											"lat": -43.52021,
											"lon": 172.68294,
											"id": "loc-CNZ03999",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ03999",
										"refPhysical": {
											"pk": "Pannell Dairy",
											"attributes": null,
											"constraints": null,
											"lat": -43.52021,
											"lon": 172.68294,
											"id": "loc-CNZ03999",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ03999",
										"refPhysical": {
											"pk": "Pannell Dairy",
											"attributes": null,
											"constraints": null,
											"lat": -43.52021,
											"lon": 172.68294,
											"id": "loc-CNZ03999",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 1,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372176000000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ03999",
								"refLocation": {
									"pk": "Pannell Dairy",
									"attributes": null,
									"constraints": null,
									"lat": -43.52021,
									"lon": 172.68294,
									"id": "loc-CNZ03999",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ03999_15_579_MONDAY-Ambient",
					"refLocation": {
						"pk": "Pannell Dairy",
						"attributes": null,
						"constraints": null,
						"lat": -43.52021,
						"lon": 172.68294,
						"id": "loc-CNZ03999",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 2,
					"timeEarliest": 1372192560000,
					"timeLatest": 1372194420000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 32748,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 41,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 2,
							"timeEarliest": 1372191360000,
							"timeLatest": 1372194420000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04283_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "25.036923076923078",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "20",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "22",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "24",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04283",
										"refPhysical": {
											"pk": "LINWOOD NORTH SCHOOL",
											"attributes": null,
											"constraints": null,
											"lat": -43.52519,
											"lon": 172.6761,
											"id": "loc-CNZ04283",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04283",
										"refPhysical": {
											"pk": "LINWOOD NORTH SCHOOL",
											"attributes": null,
											"constraints": null,
											"lat": -43.52519,
											"lon": 172.6761,
											"id": "loc-CNZ04283",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04283",
										"refPhysical": {
											"pk": "LINWOOD NORTH SCHOOL",
											"attributes": null,
											"constraints": null,
											"lat": -43.52519,
											"lon": 172.6761,
											"id": "loc-CNZ04283",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 2,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372213800000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04283",
								"refLocation": {
									"pk": "LINWOOD NORTH SCHOOL",
									"attributes": null,
									"constraints": null,
									"lat": -43.52519,
									"lon": 172.6761,
									"id": "loc-CNZ04283",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04283_15_580_MONDAY-Ambient",
					"refLocation": {
						"pk": "LINWOOD NORTH SCHOOL",
						"attributes": null,
						"constraints": null,
						"lat": -43.52519,
						"lon": 172.6761,
						"id": "loc-CNZ04283",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372192920000,
					"timeLatest": 1372194780000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 36550,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 45,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372191720000,
							"timeLatest": 1372194780000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 7,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04239_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "296.5288461538462",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "229",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "237",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "292",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04239",
										"refPhysical": {
											"pk": "OPAWA DISCOUNT TOBACCO",
											"attributes": null,
											"constraints": null,
											"lat": -43.55176,
											"lon": 172.66264,
											"id": "loc-CNZ04239",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04239",
										"refPhysical": {
											"pk": "OPAWA DISCOUNT TOBACCO",
											"attributes": null,
											"constraints": null,
											"lat": -43.55176,
											"lon": 172.66264,
											"id": "loc-CNZ04239",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04239",
										"refPhysical": {
											"pk": "OPAWA DISCOUNT TOBACCO",
											"attributes": null,
											"constraints": null,
											"lat": -43.55176,
											"lon": 172.66264,
											"id": "loc-CNZ04239",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372240800000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 7,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 8,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 6,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 6,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 6,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 6,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 6,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04239",
								"refLocation": {
									"pk": "OPAWA DISCOUNT TOBACCO",
									"attributes": null,
									"constraints": null,
									"lat": -43.55176,
									"lon": 172.66264,
									"id": "loc-CNZ04239",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04239_15_535_MONDAY-Ambient",
					"refLocation": {
						"pk": "OPAWA DISCOUNT TOBACCO",
						"attributes": null,
						"constraints": null,
						"lat": -43.55176,
						"lon": 172.66264,
						"id": "loc-CNZ04239",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372193460000,
					"timeLatest": 1372195320000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 39266,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 49,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372192260000,
							"timeLatest": 1372195320000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04605_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "34.096538461538465",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "16",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "20",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "32",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04605",
										"refPhysical": {
											"pk": "ARCHER CARE FACILITY LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.55634,
											"lon": 172.63685,
											"id": "loc-CNZ04605",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04605",
										"refPhysical": {
											"pk": "ARCHER CARE FACILITY LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.55634,
											"lon": 172.63685,
											"id": "loc-CNZ04605",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04605",
										"refPhysical": {
											"pk": "ARCHER CARE FACILITY LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.55634,
											"lon": 172.63685,
											"id": "loc-CNZ04605",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372082400000,
										"timeFinish": 1372255140000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04605",
								"refLocation": {
									"pk": "ARCHER CARE FACILITY LTD",
									"attributes": null,
									"constraints": null,
									"lat": -43.55634,
									"lon": 172.63685,
									"id": "loc-CNZ04605",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04605_15_522_MONDAY-Ambient",
					"refLocation": {
						"pk": "ARCHER CARE FACILITY LTD",
						"attributes": null,
						"constraints": null,
						"lat": -43.55634,
						"lon": 172.63685,
						"id": "loc-CNZ04605",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 35,
					"timeEarliest": 1372193820000,
					"timeLatest": 1372195680000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 39754,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 50,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 35,
							"timeEarliest": 1372192620000,
							"timeLatest": 1372195680000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 51,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04944_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "4012.1211538461544",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "3586",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "3592",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "4009",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "true",
										"id": "inclusion-CNZ04944",
										"refPhysical": {
											"pk": "CD COLOMBO ST",
											"attributes": null,
											"constraints": null,
											"lat": -43.55368,
											"lon": 172.63683,
											"id": "loc-CNZ04944",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ04944",
										"refPhysical": {
											"pk": "CD COLOMBO ST",
											"attributes": null,
											"constraints": null,
											"lat": -43.55368,
											"lon": 172.63683,
											"id": "loc-CNZ04944",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04944",
										"refPhysical": {
											"pk": "CD COLOMBO ST",
											"attributes": null,
											"constraints": null,
											"lat": -43.55368,
											"lon": 172.63683,
											"id": "loc-CNZ04944",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 35,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372248000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 51,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 48,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 48,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 52,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 51,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 50,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 4,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 53,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04944",
								"refLocation": {
									"pk": "CD COLOMBO ST",
									"attributes": null,
									"constraints": null,
									"lat": -43.55368,
									"lon": 172.63683,
									"id": "loc-CNZ04944",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04944_15_520_MONDAY-Ambient",
					"refLocation": {
						"pk": "CD COLOMBO ST",
						"attributes": null,
						"constraints": null,
						"lat": -43.55368,
						"lon": 172.63683,
						"id": "loc-CNZ04944",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372196160000,
					"timeLatest": 1372198020000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 42715,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 54,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372194960000,
							"timeLatest": 1372198020000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 3,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04186_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "80.65730769230768",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "48",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "60",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "74",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04186",
										"refPhysical": {
											"pk": "P and P DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.56935,
											"lon": 172.61129,
											"id": "loc-CNZ04186",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04186",
										"refPhysical": {
											"pk": "P and P DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.56935,
											"lon": 172.61129,
											"id": "loc-CNZ04186",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04186",
										"refPhysical": {
											"pk": "P and P DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.56935,
											"lon": 172.61129,
											"id": "loc-CNZ04186",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372176000000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04186",
								"refLocation": {
									"pk": "P and P DAIRY",
									"attributes": null,
									"constraints": null,
									"lat": -43.56935,
									"lon": 172.61129,
									"id": "loc-CNZ04186",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04186_15_218_MONDAY-Ambient",
					"refLocation": {
						"pk": "P and P DAIRY",
						"attributes": null,
						"constraints": null,
						"lat": -43.56935,
						"lon": 172.61129,
						"id": "loc-CNZ04186",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372196460000,
					"timeLatest": 1372198320000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 44556,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 56,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372195260000,
							"timeLatest": 1372198320000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04220_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "21.965384615384615",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "7",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "13",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "18",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04220",
										"refPhysical": {
											"pk": "BARRINGTON TOBACCO DIS",
											"attributes": null,
											"constraints": null,
											"lat": -43.55803,
											"lon": 172.61977,
											"id": "loc-CNZ04220",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04220",
										"refPhysical": {
											"pk": "BARRINGTON TOBACCO DIS",
											"attributes": null,
											"constraints": null,
											"lat": -43.55803,
											"lon": 172.61977,
											"id": "loc-CNZ04220",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04220",
										"refPhysical": {
											"pk": "BARRINGTON TOBACCO DIS",
											"attributes": null,
											"constraints": null,
											"lat": -43.55803,
											"lon": 172.61977,
											"id": "loc-CNZ04220",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372082400000,
										"timeFinish": 1372255140000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04220",
								"refLocation": {
									"pk": "BARRINGTON TOBACCO DIS",
									"attributes": null,
									"constraints": null,
									"lat": -43.55803,
									"lon": 172.61977,
									"id": "loc-CNZ04220",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04220_15_516_MONDAY-Ambient",
					"refLocation": {
						"pk": "BARRINGTON TOBACCO DIS",
						"attributes": null,
						"constraints": null,
						"lat": -43.55803,
						"lon": 172.61977,
						"id": "loc-CNZ04220",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372196760000,
					"timeLatest": 1372198620000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 44781,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 56,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372195560000,
							"timeLatest": 1372198620000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 3,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ03813_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "36.389615384615375",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "16",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "20",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "34",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "true",
										"id": "inclusion-CNZ03813",
										"refPhysical": {
											"pk": "TWH BARRINGTON 178",
											"attributes": null,
											"constraints": null,
											"lat": -43.55703,
											"lon": 172.61866,
											"id": "loc-CNZ03813",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ03813",
										"refPhysical": {
											"pk": "TWH BARRINGTON 178",
											"attributes": null,
											"constraints": null,
											"lat": -43.55703,
											"lon": 172.61866,
											"id": "loc-CNZ03813",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ03813",
										"refPhysical": {
											"pk": "TWH BARRINGTON 178",
											"attributes": null,
											"constraints": null,
											"lat": -43.55703,
											"lon": 172.61866,
											"id": "loc-CNZ03813",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372196700000,
										"timeFinish": 1372201200000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ03813",
								"refLocation": {
									"pk": "TWH BARRINGTON 178",
									"attributes": null,
									"constraints": null,
									"lat": -43.55703,
									"lon": 172.61866,
									"id": "loc-CNZ03813",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ03813_15_515_MONDAY-Ambient",
					"refLocation": {
						"pk": "TWH BARRINGTON 178",
						"attributes": null,
						"constraints": null,
						"lat": -43.55703,
						"lon": 172.61866,
						"id": "loc-CNZ03813",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 10,
					"timeEarliest": 1372197120000,
					"timeLatest": 1372198980000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 45522,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 57,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 10,
							"timeEarliest": 1372195920000,
							"timeLatest": 1372198980000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04099_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "17.20846153846154",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "-3",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "7",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "12",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04099",
										"refPhysical": {
											"pk": "SUNLAKE BARRINGTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.55186,
											"lon": 172.61289,
											"id": "loc-CNZ04099",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04099",
										"refPhysical": {
											"pk": "SUNLAKE BARRINGTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.55186,
											"lon": 172.61289,
											"id": "loc-CNZ04099",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04099",
										"refPhysical": {
											"pk": "SUNLAKE BARRINGTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.55186,
											"lon": 172.61289,
											"id": "loc-CNZ04099",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 10,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372213800000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04099",
								"refLocation": {
									"pk": "SUNLAKE BARRINGTON",
									"attributes": null,
									"constraints": null,
									"lat": -43.55186,
									"lon": 172.61289,
									"id": "loc-CNZ04099",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04099_15_513_MONDAY-Ambient",
					"refLocation": {
						"pk": "SUNLAKE BARRINGTON",
						"attributes": null,
						"constraints": null,
						"lat": -43.55186,
						"lon": 172.61289,
						"id": "loc-CNZ04099",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 10,
					"timeEarliest": 1372197840000,
					"timeLatest": 1372199700000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 46768,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 59,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 10,
							"timeEarliest": 1372196640000,
							"timeLatest": 1372199700000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 24,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04774_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "1362.725",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "1197",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "1201",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "1360",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04774",
										"refPhysical": {
											"pk": "PRIMA DELI LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.54835,
											"lon": 172.62182,
											"id": "loc-CNZ04774",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04774",
										"refPhysical": {
											"pk": "PRIMA DELI LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.54835,
											"lon": 172.62182,
											"id": "loc-CNZ04774",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04774",
										"refPhysical": {
											"pk": "PRIMA DELI LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.54835,
											"lon": 172.62182,
											"id": "loc-CNZ04774",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 10,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372178700000,
										"timeFinish": 1372186800000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 24,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 25,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 21,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 28,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 17,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 5,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 21,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04774",
								"refLocation": {
									"pk": "PRIMA DELI LTD",
									"attributes": null,
									"constraints": null,
									"lat": -43.54835,
									"lon": 172.62182,
									"id": "loc-CNZ04774",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04774_15_129_MONDAY-Ambient",
					"refLocation": {
						"pk": "PRIMA DELI LTD",
						"attributes": null,
						"constraints": null,
						"lat": -43.54835,
						"lon": 172.62182,
						"id": "loc-CNZ04774",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372198440000,
					"timeLatest": 1372200300000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 46962,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 59,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372197240000,
							"timeLatest": 1372200300000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 3,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ03986_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "56.121538461538464",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "39",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "39",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "56",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ03986",
										"refPhysical": {
											"pk": "SELWYN DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.54772,
											"lon": 172.62261,
											"id": "loc-CNZ03986",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ03986",
										"refPhysical": {
											"pk": "SELWYN DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.54772,
											"lon": 172.62261,
											"id": "loc-CNZ03986",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ03986",
										"refPhysical": {
											"pk": "SELWYN DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.54772,
											"lon": 172.62261,
											"id": "loc-CNZ03986",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372178700000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ03986",
								"refLocation": {
									"pk": "SELWYN DAIRY",
									"attributes": null,
									"constraints": null,
									"lat": -43.54772,
									"lon": 172.62261,
									"id": "loc-CNZ03986",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ03986_15_128_MONDAY-Ambient",
					"refLocation": {
						"pk": "SELWYN DAIRY",
						"attributes": null,
						"constraints": null,
						"lat": -43.54772,
						"lon": 172.62261,
						"id": "loc-CNZ03986",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372198860000,
					"timeLatest": 1372200720000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 50328,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 63,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372197660000,
							"timeLatest": 1372200720000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04783_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "100.52346153846153",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "83",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "85",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "99",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04783",
										"refPhysical": {
											"pk": "CALTEX RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.52941,
											"lon": 172.60434,
											"id": "loc-CNZ04783",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04783",
										"refPhysical": {
											"pk": "CALTEX RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.52941,
											"lon": 172.60434,
											"id": "loc-CNZ04783",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04783",
										"refPhysical": {
											"pk": "CALTEX RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.52941,
											"lon": 172.60434,
											"id": "loc-CNZ04783",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372178700000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04783",
								"refLocation": {
									"pk": "CALTEX RICCARTON",
									"attributes": null,
									"constraints": null,
									"lat": -43.52941,
									"lon": 172.60434,
									"id": "loc-CNZ04783",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04783_15_132_MONDAY-Ambient",
					"refLocation": {
						"pk": "CALTEX RICCARTON",
						"attributes": null,
						"constraints": null,
						"lat": -43.52941,
						"lon": 172.60434,
						"id": "loc-CNZ04783",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 2,
					"timeEarliest": 1372199160000,
					"timeLatest": 1372201020000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 50607,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 63,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 2,
							"timeEarliest": 1372197960000,
							"timeLatest": 1372201020000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04376_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "39.44269230769231",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "20",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "28",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "35",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04376",
										"refPhysical": {
											"pk": "STRAVEN REST HOME",
											"attributes": null,
											"constraints": null,
											"lat": -43.52883,
											"lon": 172.60204,
											"id": "loc-CNZ04376",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04376",
										"refPhysical": {
											"pk": "STRAVEN REST HOME",
											"attributes": null,
											"constraints": null,
											"lat": -43.52883,
											"lon": 172.60204,
											"id": "loc-CNZ04376",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04376",
										"refPhysical": {
											"pk": "STRAVEN REST HOME",
											"attributes": null,
											"constraints": null,
											"lat": -43.52883,
											"lon": 172.60204,
											"id": "loc-CNZ04376",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 2,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372178700000,
										"timeFinish": 1372186800000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04376",
								"refLocation": {
									"pk": "STRAVEN REST HOME",
									"attributes": null,
									"constraints": null,
									"lat": -43.52883,
									"lon": 172.60204,
									"id": "loc-CNZ04376",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04376_15_135_MONDAY-Ambient",
					"refLocation": {
						"pk": "STRAVEN REST HOME",
						"attributes": null,
						"constraints": null,
						"lat": -43.52883,
						"lon": 172.60204,
						"id": "loc-CNZ04376",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372199340000,
					"timeLatest": 1372201200000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 51564,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 64,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372198140000,
							"timeLatest": 1372201200000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04253_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "16.47346153846154",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "2",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "8",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "13",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04253",
										"refPhysical": {
											"pk": "DIVISION ST DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.53512,
											"lon": 172.59949,
											"id": "loc-CNZ04253",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04253",
										"refPhysical": {
											"pk": "DIVISION ST DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.53512,
											"lon": 172.59949,
											"id": "loc-CNZ04253",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04253",
										"refPhysical": {
											"pk": "DIVISION ST DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.53512,
											"lon": 172.59949,
											"id": "loc-CNZ04253",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372178700000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04253",
								"refLocation": {
									"pk": "DIVISION ST DAIRY",
									"attributes": null,
									"constraints": null,
									"lat": -43.53512,
									"lon": 172.59949,
									"id": "loc-CNZ04253",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04253_15_145_MONDAY-Ambient",
					"refLocation": {
						"pk": "DIVISION ST DAIRY",
						"attributes": null,
						"constraints": null,
						"lat": -43.53512,
						"lon": 172.59949,
						"id": "loc-CNZ04253",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 20,
					"timeEarliest": 1372199580000,
					"timeLatest": 1372201440000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 52481,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 65,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 20,
							"timeEarliest": 1372198380000,
							"timeLatest": 1372201440000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-callback-CNZ04839_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "3353.8321153846155",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "2912",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "3200",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "3208",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": null,
								"elapsedService": 20,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372204800000,
										"timeFinish": 1372213800000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-callback-CNZ04839",
								"refLocation": {
									"pk": "PNS RICCARTON",
									"attributes": null,
									"constraints": null,
									"lat": -43.52988,
									"lon": 172.59835,
									"id": "loc-CNZ04839",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04839_15_144_MONDAY-Ambient",
					"refLocation": {
						"pk": "PNS RICCARTON",
						"attributes": null,
						"constraints": null,
						"lat": -43.52988,
						"lon": 172.59835,
						"id": "loc-CNZ04839",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372200900000,
					"timeLatest": 1372202760000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 53531,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 67,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372199700000,
							"timeLatest": 1372202760000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04483_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "27.57038461538461",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "-2",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "14",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "19",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04483",
										"refPhysical": {
											"pk": "BIG GARY'S FISH N CHIPS",
											"attributes": null,
											"constraints": null,
											"lat": -43.53083,
											"lon": 172.58616,
											"id": "loc-CNZ04483",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04483",
										"refPhysical": {
											"pk": "BIG GARY'S FISH N CHIPS",
											"attributes": null,
											"constraints": null,
											"lat": -43.53083,
											"lon": 172.58616,
											"id": "loc-CNZ04483",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04483",
										"refPhysical": {
											"pk": "BIG GARY'S FISH N CHIPS",
											"attributes": null,
											"constraints": null,
											"lat": -43.53083,
											"lon": 172.58616,
											"id": "loc-CNZ04483",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372178700000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04483",
								"refLocation": {
									"pk": "BIG GARY'S FISH N CHIPS",
									"attributes": null,
									"constraints": null,
									"lat": -43.53083,
									"lon": 172.58616,
									"id": "loc-CNZ04483",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04483_15_138_MONDAY-Ambient",
					"refLocation": {
						"pk": "BIG GARY'S FISH N CHIPS",
						"attributes": null,
						"constraints": null,
						"lat": -43.53083,
						"lon": 172.58616,
						"id": "loc-CNZ04483",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372201260000,
					"timeLatest": 1372203120000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 54541,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 68,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372200060000,
							"timeLatest": 1372203120000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 5,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ03816_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "82.86576923076922",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "23",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "47",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "70",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "true",
										"id": "inclusion-CNZ03816",
										"refPhysical": {
											"pk": "TWH RICCARTON 220",
											"attributes": null,
											"constraints": null,
											"lat": -43.53846,
											"lon": 172.58521,
											"id": "loc-CNZ03816",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ03816",
										"refPhysical": {
											"pk": "TWH RICCARTON 220",
											"attributes": null,
											"constraints": null,
											"lat": -43.53846,
											"lon": 172.58521,
											"id": "loc-CNZ03816",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ03816",
										"refPhysical": {
											"pk": "TWH RICCARTON 220",
											"attributes": null,
											"constraints": null,
											"lat": -43.53846,
											"lon": 172.58521,
											"id": "loc-CNZ03816",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372199400000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 5,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 5,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 5,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 5,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ03816",
								"refLocation": {
									"pk": "TWH RICCARTON 220",
									"attributes": null,
									"constraints": null,
									"lat": -43.53846,
									"lon": 172.58521,
									"id": "loc-CNZ03816",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ03816_15_163_MONDAY-Ambient",
					"refLocation": {
						"pk": "TWH RICCARTON 220",
						"attributes": null,
						"constraints": null,
						"lat": -43.53846,
						"lon": 172.58521,
						"id": "loc-CNZ03816",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372201740000,
					"timeLatest": 1372203600000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 56766,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 71,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372200540000,
							"timeLatest": 1372203600000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04169_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "26.567307692307693",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "12",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "20",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "22",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04169",
										"refPhysical": {
											"pk": "Curletts Dairy  - Dairy Deli",
											"attributes": null,
											"constraints": null,
											"lat": -43.53375,
											"lon": 172.56758,
											"id": "loc-CNZ04169",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04169",
										"refPhysical": {
											"pk": "Curletts Dairy  - Dairy Deli",
											"attributes": null,
											"constraints": null,
											"lat": -43.53375,
											"lon": 172.56758,
											"id": "loc-CNZ04169",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04169",
										"refPhysical": {
											"pk": "Curletts Dairy  - Dairy Deli",
											"attributes": null,
											"constraints": null,
											"lat": -43.53375,
											"lon": 172.56758,
											"id": "loc-CNZ04169",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04169",
								"refLocation": {
									"pk": "Curletts Dairy  - Dairy Deli",
									"attributes": null,
									"constraints": null,
									"lat": -43.53375,
									"lon": 172.56758,
									"id": "loc-CNZ04169",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04169_15_164_MONDAY-Ambient",
					"refLocation": {
						"pk": "Curletts Dairy  - Dairy Deli",
						"attributes": null,
						"constraints": null,
						"lat": -43.53375,
						"lon": 172.56758,
						"id": "loc-CNZ04169",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 40,
					"timeEarliest": 1372202040000,
					"timeLatest": 1372203900000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 57790,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 73,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 40,
							"timeEarliest": 1372200840000,
							"timeLatest": 1372203900000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 34,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04876_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "1967.5388461538464",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "1294",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "1568",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "1829",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "true",
										"id": "inclusion-CNZ04876",
										"refPhysical": {
											"pk": "NW ILAM",
											"attributes": null,
											"constraints": null,
											"lat": -43.5265,
											"lon": 172.57073,
											"id": "loc-CNZ04876",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ04876",
										"refPhysical": {
											"pk": "NW ILAM",
											"attributes": null,
											"constraints": null,
											"lat": -43.5265,
											"lon": 172.57073,
											"id": "loc-CNZ04876",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04876",
										"refPhysical": {
											"pk": "NW ILAM",
											"attributes": null,
											"constraints": null,
											"lat": -43.5265,
											"lon": 172.57073,
											"id": "loc-CNZ04876",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 40,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 34,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 34,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 31,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 29,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 33,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 35,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 31,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04876",
								"refLocation": {
									"pk": "NW ILAM",
									"attributes": null,
									"constraints": null,
									"lat": -43.5265,
									"lon": 172.57073,
									"id": "loc-CNZ04876",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04876_15_159_MONDAY-Ambient",
					"refLocation": {
						"pk": "NW ILAM",
						"attributes": null,
						"constraints": null,
						"lat": -43.5265,
						"lon": 172.57073,
						"id": "loc-CNZ04876",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 2,
					"timeEarliest": 1372204560000,
					"timeLatest": 1372206420000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 58867,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 75,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 2,
							"timeEarliest": 1372203360000,
							"timeLatest": 1372206420000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 0,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04472_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "72.4826923076923",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "20",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "44",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "60",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04472",
										"refPhysical": {
											"pk": "CAPTAIN BENS",
											"attributes": null,
											"constraints": null,
											"lat": -43.52671,
											"lon": 172.57936,
											"id": "loc-CNZ04472",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04472",
										"refPhysical": {
											"pk": "CAPTAIN BENS",
											"attributes": null,
											"constraints": null,
											"lat": -43.52671,
											"lon": 172.57936,
											"id": "loc-CNZ04472",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04472",
										"refPhysical": {
											"pk": "CAPTAIN BENS",
											"attributes": null,
											"constraints": null,
											"lat": -43.52671,
											"lon": 172.57936,
											"id": "loc-CNZ04472",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 2,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372178700000,
										"timeFinish": 1372212000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04472",
								"refLocation": {
									"pk": "CAPTAIN BENS",
									"attributes": null,
									"constraints": null,
									"lat": -43.52671,
									"lon": 172.57936,
									"id": "loc-CNZ04472",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04472_15_141_MONDAY-Ambient",
					"refLocation": {
						"pk": "CAPTAIN BENS",
						"attributes": null,
						"constraints": null,
						"lat": -43.52671,
						"lon": 172.57936,
						"id": "loc-CNZ04472",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 30,
					"timeEarliest": 1372204740000,
					"timeLatest": 1372206600000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 59819,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 76,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 30,
							"timeEarliest": 1372203540000,
							"timeLatest": 1372206600000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 31,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04940_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "2245.869230769231",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "1719",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "1904",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "2152",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "true",
										"id": "inclusion-CNZ04940",
										"refPhysical": {
											"pk": "CD Bush Inn",
											"attributes": null,
											"constraints": null,
											"lat": -43.53086,
											"lon": 172.57492,
											"id": "loc-CNZ04940",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ04940",
										"refPhysical": {
											"pk": "CD Bush Inn",
											"attributes": null,
											"constraints": null,
											"lat": -43.53086,
											"lon": 172.57492,
											"id": "loc-CNZ04940",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04940",
										"refPhysical": {
											"pk": "CD Bush Inn",
											"attributes": null,
											"constraints": null,
											"lat": -43.53086,
											"lon": 172.57492,
											"id": "loc-CNZ04940",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 30,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372190400000,
										"timeFinish": 1372199400000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 31,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 32,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 31,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 28,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 29,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 30,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 25,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04940",
								"refLocation": {
									"pk": "CD Bush Inn",
									"attributes": null,
									"constraints": null,
									"lat": -43.53086,
									"lon": 172.57492,
									"id": "loc-CNZ04940",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04940_15_147_MONDAY-Ambient",
					"refLocation": {
						"pk": "CD Bush Inn",
						"attributes": null,
						"constraints": null,
						"lat": -43.53086,
						"lon": 172.57492,
						"id": "loc-CNZ04940",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372206840000,
					"timeLatest": 1372222440000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 63610,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 81,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372205640000,
							"timeLatest": 1372222440000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 1,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04785_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "24.160000000000004",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "-15",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "7",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "13",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04785",
										"refPhysical": {
											"pk": "CALTEX AVONHEAD",
											"attributes": null,
											"constraints": null,
											"lat": -43.51158,
											"lon": 172.55575,
											"id": "loc-CNZ04785",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04785",
										"refPhysical": {
											"pk": "CALTEX AVONHEAD",
											"attributes": null,
											"constraints": null,
											"lat": -43.51158,
											"lon": 172.55575,
											"id": "loc-CNZ04785",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04785",
										"refPhysical": {
											"pk": "CALTEX AVONHEAD",
											"attributes": null,
											"constraints": null,
											"lat": -43.51158,
											"lon": 172.55575,
											"id": "loc-CNZ04785",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372213800000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04785",
								"refLocation": {
									"pk": "CALTEX AVONHEAD",
									"attributes": null,
									"constraints": null,
									"lat": -43.51158,
									"lon": 172.55575,
									"id": "loc-CNZ04785",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04785_15_168_MONDAY-Ambient",
					"refLocation": {
						"pk": "CALTEX AVONHEAD",
						"attributes": null,
						"constraints": null,
						"lat": -43.51158,
						"lon": 172.55575,
						"id": "loc-CNZ04785",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 35,
					"timeEarliest": 1372207200000,
					"timeLatest": 1372222800000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 63790,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 82,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 35,
							"timeEarliest": 1372206000000,
							"timeLatest": 1372222800000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 23,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 2,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04936_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "1554.1373076923078",
										"refProperty": {
											"payloads": null,
											"title": "request-margin",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop40"
										}
									},
									{
										"payloads": null,
										"value": "1054",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad2",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop41"
										}
									},
									{
										"payloads": null,
										"value": "1266",
										"refProperty": {
											"payloads": null,
											"title": "fully-costed-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop43"
										}
									},
									{
										"payloads": null,
										"value": "1447",
										"refProperty": {
											"payloads": null,
											"title": "marginal-gpad",
											"physical": "ENTITY_CONSIGNMENT",
											"typeProperty": "STRING",
											"id": "prop42"
										}
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "true",
										"id": "inclusion-CNZ04936",
										"refPhysical": {
											"pk": "CD AVONHEAD",
											"attributes": null,
											"constraints": null,
											"lat": -43.51083,
											"lon": 172.55643,
											"id": "loc-CNZ04936",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ04936",
										"refPhysical": {
											"pk": "CD AVONHEAD",
											"attributes": null,
											"constraints": null,
											"lat": -43.51083,
											"lon": 172.55643,
											"id": "loc-CNZ04936",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04936",
										"refPhysical": {
											"pk": "CD AVONHEAD",
											"attributes": null,
											"constraints": null,
											"lat": -43.51083,
											"lon": 172.55643,
											"id": "loc-CNZ04936",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 35,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372215600000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 23,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Ambient",
											"unitWhole": "items",
											"id": "MONDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "MONDAY-Chilled",
											"unitWhole": "items",
											"id": "MONDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 22,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Ambient",
											"unitWhole": "items",
											"id": "TUESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "TUESDAY-Chilled",
											"unitWhole": "items",
											"id": "TUESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 21,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Ambient",
											"unitWhole": "items",
											"id": "WEDNESDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "WEDNESDAY-Chilled",
											"unitWhole": "items",
											"id": "WEDNESDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 20,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Ambient",
											"unitWhole": "items",
											"id": "THURSDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 1,
										"refCommodity": {
											"payloads": null,
											"title": "THURSDAY-Chilled",
											"unitWhole": "items",
											"id": "THURSDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 21,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Ambient",
											"unitWhole": "items",
											"id": "FRIDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 2,
										"refCommodity": {
											"payloads": null,
											"title": "FRIDAY-Chilled",
											"unitWhole": "items",
											"id": "FRIDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 23,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Ambient",
											"unitWhole": "items",
											"id": "SATURDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 3,
										"refCommodity": {
											"payloads": null,
											"title": "SATURDAY-Chilled",
											"unitWhole": "items",
											"id": "SATURDAY-Chilled"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 20,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Ambient",
											"unitWhole": "items",
											"id": "SUNDAY-Ambient"
										},
										"unload": null
									},
									{
										"payloads": null,
										"value": 0,
										"refCommodity": {
											"payloads": null,
											"title": "SUNDAY-Chilled",
											"unitWhole": "items",
											"id": "SUNDAY-Chilled"
										},
										"unload": null
									}]
								},
								"id": "request-CNZ04936",
								"refLocation": {
									"pk": "CD AVONHEAD",
									"attributes": null,
									"constraints": null,
									"lat": -43.51083,
									"lon": 172.55643,
									"id": "loc-CNZ04936",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04936_15_169_MONDAY-Ambient",
					"refLocation": {
						"pk": "CD AVONHEAD",
						"attributes": null,
						"constraints": null,
						"lat": -43.51083,
						"lon": 172.55643,
						"id": "loc-CNZ04936",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 0,
					"timeEarliest": 1372209600000,
					"timeLatest": 1372239000000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 67363,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 87,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": []
					},
					"selections": null,
					"id": "VIS_loc-Christchurch_15_708_MONDAY-Ambient",
					"refLocation": {
						"pk": null,
						"attributes": null,
						"constraints": null,
						"lat": -43.48739,
						"lon": 172.56095,
						"id": "loc-Christchurch",
						"linehaulCost": 12355.63
					},
					"stopNum": null,
					"isSplitVisit": false
				}]
			},
			"selections": null,
			"id": "RT_availability-K73001_MONDAY-Ambient",
			"retorunToDepotTime": null,
			"departFromDepotTime": null,
			"fixedRevisitDuration": null
		}],
		"summaryRoute": []
	},
	"unscheduleds": {
		"unscheduled": [{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "1.3276923076923075",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-5",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ03995",
						"refPhysical": {
							"pk": "Mountain View Dairy",
							"attributes": null,
							"constraints": null,
							"lat": -44.38955,
							"lon": 171.2183,
							"id": "loc-CNZ03995",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ03995",
						"refPhysical": {
							"pk": "Mountain View Dairy",
							"attributes": null,
							"constraints": null,
							"lat": -44.38955,
							"lon": 171.2183,
							"id": "loc-CNZ03995",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ03995",
						"refPhysical": {
							"pk": "Mountain View Dairy",
							"attributes": null,
							"constraints": null,
							"lat": -44.38955,
							"lon": 171.2183,
							"id": "loc-CNZ03995",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 2,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372176000000,
						"timeFinish": 1372190400000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ03995",
				"refLocation": {
					"pk": "Mountain View Dairy",
					"attributes": null,
					"constraints": null,
					"lat": -44.38955,
					"lon": 171.2183,
					"id": "loc-CNZ03995",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "11.841153846153848",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-13",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ03990",
						"refPhysical": {
							"pk": "O'Reilly's Food Cntr",
							"attributes": null,
							"constraints": null,
							"lat": -44.24535,
							"lon": 171.28862,
							"id": "loc-CNZ03990",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ03990",
						"refPhysical": {
							"pk": "O'Reilly's Food Cntr",
							"attributes": null,
							"constraints": null,
							"lat": -44.24535,
							"lon": 171.28862,
							"id": "loc-CNZ03990",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ03990",
						"refPhysical": {
							"pk": "O'Reilly's Food Cntr",
							"attributes": null,
							"constraints": null,
							"lat": -44.24535,
							"lon": 171.28862,
							"id": "loc-CNZ03990",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 3,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372186800000,
						"timeFinish": 1372212000000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ03990",
				"refLocation": {
					"pk": "O'Reilly's Food Cntr",
					"attributes": null,
					"constraints": null,
					"lat": -44.24535,
					"lon": 171.28862,
					"id": "loc-CNZ03990",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "10.007307692307691",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-10",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04438",
						"refPhysical": {
							"pk": "CHEQUERED FLAG CAFE and BAR",
							"attributes": null,
							"constraints": null,
							"lat": -44.06707,
							"lon": 171.37167,
							"id": "loc-CNZ04438",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04438",
						"refPhysical": {
							"pk": "CHEQUERED FLAG CAFE and BAR",
							"attributes": null,
							"constraints": null,
							"lat": -44.06707,
							"lon": 171.37167,
							"id": "loc-CNZ04438",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04438",
						"refPhysical": {
							"pk": "CHEQUERED FLAG CAFE and BAR",
							"attributes": null,
							"constraints": null,
							"lat": -44.06707,
							"lon": 171.37167,
							"id": "loc-CNZ04438",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 3,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372186800000,
						"timeFinish": 1372212000000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04438",
				"refLocation": {
					"pk": "CHEQUERED FLAG CAFE and BAR",
					"attributes": null,
					"constraints": null,
					"lat": -44.06707,
					"lon": 171.37167,
					"id": "loc-CNZ04438",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "4.401538461538461",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-2",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04004",
						"refPhysical": {
							"pk": "Night Owl Store",
							"attributes": null,
							"constraints": null,
							"lat": -41.28324,
							"lon": 173.27748,
							"id": "loc-CNZ04004",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04004",
						"refPhysical": {
							"pk": "Night Owl Store",
							"attributes": null,
							"constraints": null,
							"lat": -41.28324,
							"lon": 173.27748,
							"id": "loc-CNZ04004",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04004",
						"refPhysical": {
							"pk": "Night Owl Store",
							"attributes": null,
							"constraints": null,
							"lat": -41.28324,
							"lon": 173.27748,
							"id": "loc-CNZ04004",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 5,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372179600000,
						"timeFinish": 1372190400000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04004",
				"refLocation": {
					"pk": "Night Owl Store",
					"attributes": null,
					"constraints": null,
					"lat": -41.28324,
					"lon": 173.27748,
					"id": "loc-CNZ04004",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "7.449999999999999",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-1",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04116",
						"refPhysical": {
							"pk": "HALES CORNER STORE",
							"attributes": null,
							"constraints": null,
							"lat": -41.29117,
							"lon": 173.27013,
							"id": "loc-CNZ04116",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04116",
						"refPhysical": {
							"pk": "HALES CORNER STORE",
							"attributes": null,
							"constraints": null,
							"lat": -41.29117,
							"lon": 173.27013,
							"id": "loc-CNZ04116",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04116",
						"refPhysical": {
							"pk": "HALES CORNER STORE",
							"attributes": null,
							"constraints": null,
							"lat": -41.29117,
							"lon": 173.27013,
							"id": "loc-CNZ04116",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 5,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372179600000,
						"timeFinish": 1372190400000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04116",
				"refLocation": {
					"pk": "HALES CORNER STORE",
					"attributes": null,
					"constraints": null,
					"lat": -41.29117,
					"lon": 173.27013,
					"id": "loc-CNZ04116",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "9.142692307692307",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-7",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04003",
						"refPhysical": {
							"pk": "Black Cat Dairy",
							"attributes": null,
							"constraints": null,
							"lat": -41.30113,
							"lon": 173.24281,
							"id": "loc-CNZ04003",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04003",
						"refPhysical": {
							"pk": "Black Cat Dairy",
							"attributes": null,
							"constraints": null,
							"lat": -41.30113,
							"lon": 173.24281,
							"id": "loc-CNZ04003",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04003",
						"refPhysical": {
							"pk": "Black Cat Dairy",
							"attributes": null,
							"constraints": null,
							"lat": -41.30113,
							"lon": 173.24281,
							"id": "loc-CNZ04003",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 5,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372194000000,
						"timeFinish": 1372204800000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04003",
				"refLocation": {
					"pk": "Black Cat Dairy",
					"attributes": null,
					"constraints": null,
					"lat": -41.30113,
					"lon": 173.24281,
					"id": "loc-CNZ04003",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "5.007307692307693",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-15",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04007",
						"refPhysical": {
							"pk": "Hospital Str",
							"attributes": null,
							"constraints": null,
							"lat": -41.53435,
							"lon": 173.94189,
							"id": "loc-CNZ04007",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04007",
						"refPhysical": {
							"pk": "Hospital Str",
							"attributes": null,
							"constraints": null,
							"lat": -41.53435,
							"lon": 173.94189,
							"id": "loc-CNZ04007",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04007",
						"refPhysical": {
							"pk": "Hospital Str",
							"attributes": null,
							"constraints": null,
							"lat": -41.53435,
							"lon": 173.94189,
							"id": "loc-CNZ04007",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 5,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372179600000,
						"timeFinish": 1372210200000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04007",
				"refLocation": {
					"pk": "Hospital Str",
					"attributes": null,
					"constraints": null,
					"lat": -41.53435,
					"lon": 173.94189,
					"id": "loc-CNZ04007",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "13.878461538461536",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-11",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04008",
						"refPhysical": {
							"pk": "SHOWGROUNDS STR",
							"attributes": null,
							"constraints": null,
							"lat": -41.52548,
							"lon": 173.94536,
							"id": "loc-CNZ04008",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04008",
						"refPhysical": {
							"pk": "SHOWGROUNDS STR",
							"attributes": null,
							"constraints": null,
							"lat": -41.52548,
							"lon": 173.94536,
							"id": "loc-CNZ04008",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04008",
						"refPhysical": {
							"pk": "SHOWGROUNDS STR",
							"attributes": null,
							"constraints": null,
							"lat": -41.52548,
							"lon": 173.94536,
							"id": "loc-CNZ04008",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 5,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372179600000,
						"timeFinish": 1372210200000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04008",
				"refLocation": {
					"pk": "SHOWGROUNDS STR",
					"attributes": null,
					"constraints": null,
					"lat": -41.52548,
					"lon": 173.94536,
					"id": "loc-CNZ04008",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "11.652307692307694",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-12",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ03898",
						"refPhysical": {
							"pk": "4SQ Riversdale",
							"attributes": null,
							"constraints": null,
							"lat": -41.50466,
							"lon": 173.96892,
							"id": "loc-CNZ03898",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ03898",
						"refPhysical": {
							"pk": "4SQ Riversdale",
							"attributes": null,
							"constraints": null,
							"lat": -41.50466,
							"lon": 173.96892,
							"id": "loc-CNZ03898",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ03898",
						"refPhysical": {
							"pk": "4SQ Riversdale",
							"attributes": null,
							"constraints": null,
							"lat": -41.50466,
							"lon": 173.96892,
							"id": "loc-CNZ03898",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 5,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372179600000,
						"timeFinish": 1372210200000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 4,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 3,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 3,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 3,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 3,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ03898",
				"refLocation": {
					"pk": "4SQ Riversdale",
					"attributes": null,
					"constraints": null,
					"lat": -41.50466,
					"lon": 173.96892,
					"id": "loc-CNZ03898",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "11.036923076923076",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-7",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04190",
						"refPhysical": {
							"pk": "PARKLANDS MARINA H/P",
							"attributes": null,
							"constraints": null,
							"lat": -41.27079,
							"lon": 174.03425,
							"id": "loc-CNZ04190",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04190",
						"refPhysical": {
							"pk": "PARKLANDS MARINA H/P",
							"attributes": null,
							"constraints": null,
							"lat": -41.27079,
							"lon": 174.03425,
							"id": "loc-CNZ04190",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04190",
						"refPhysical": {
							"pk": "PARKLANDS MARINA H/P",
							"attributes": null,
							"constraints": null,
							"lat": -41.27079,
							"lon": 174.03425,
							"id": "loc-CNZ04190",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 5,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372197600000,
						"timeFinish": 1372210200000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04190",
				"refLocation": {
					"pk": "PARKLANDS MARINA H/P",
					"attributes": null,
					"constraints": null,
					"lat": -41.27079,
					"lon": 174.03425,
					"id": "loc-CNZ04190",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "8.850384615384616",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-4",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04011",
						"refPhysical": {
							"pk": "RENWICK DAIRY",
							"attributes": null,
							"constraints": null,
							"lat": -41.51197,
							"lon": 173.95659,
							"id": "loc-CNZ04011",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04011",
						"refPhysical": {
							"pk": "RENWICK DAIRY",
							"attributes": null,
							"constraints": null,
							"lat": -41.51197,
							"lon": 173.95659,
							"id": "loc-CNZ04011",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04011",
						"refPhysical": {
							"pk": "RENWICK DAIRY",
							"attributes": null,
							"constraints": null,
							"lat": -41.51197,
							"lon": 173.95659,
							"id": "loc-CNZ04011",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 5,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372186800000,
						"timeFinish": 1372210200000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04011",
				"refLocation": {
					"pk": "RENWICK DAIRY",
					"attributes": null,
					"constraints": null,
					"lat": -41.51197,
					"lon": 173.95659,
					"id": "loc-CNZ04011",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "9.552692307692308",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "3",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "No",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": " Solution MONDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00 Solution TUESDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00 Solution WEDNESDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00 Solution THURSDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00 Solution FRIDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00 Solution SATURDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04017",
						"refPhysical": {
							"pk": "Four JS Store and Takeways",
							"attributes": null,
							"constraints": null,
							"lat": -42.47233,
							"lon": 171.18808,
							"id": "loc-CNZ04017",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04017",
						"refPhysical": {
							"pk": "Four JS Store and Takeways",
							"attributes": null,
							"constraints": null,
							"lat": -42.47233,
							"lon": 171.18808,
							"id": "loc-CNZ04017",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04017",
						"refPhysical": {
							"pk": "Four JS Store and Takeways",
							"attributes": null,
							"constraints": null,
							"lat": -42.47233,
							"lon": 171.18808,
							"id": "loc-CNZ04017",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 3,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372194000000,
						"timeFinish": 1372210200000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04017",
				"refLocation": {
					"pk": "Four JS Store and Takeways",
					"attributes": null,
					"constraints": null,
					"lat": -42.47233,
					"lon": 171.18808,
					"id": "loc-CNZ04017",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "8.283076923076921",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "8",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "No",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": " Solution MONDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00 Solution TUESDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00 Solution WEDNESDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00 Solution THURSDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00 Solution FRIDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00 Solution SATURDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04013",
						"refPhysical": {
							"pk": "Merv N Kips OTS",
							"attributes": null,
							"constraints": null,
							"lat": -42.45502,
							"lon": 171.20759,
							"id": "loc-CNZ04013",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04013",
						"refPhysical": {
							"pk": "Merv N Kips OTS",
							"attributes": null,
							"constraints": null,
							"lat": -42.45502,
							"lon": 171.20759,
							"id": "loc-CNZ04013",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04013",
						"refPhysical": {
							"pk": "Merv N Kips OTS",
							"attributes": null,
							"constraints": null,
							"lat": -42.45502,
							"lon": 171.20759,
							"id": "loc-CNZ04013",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 5,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372194000000,
						"timeFinish": 1372210200000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04013",
				"refLocation": {
					"pk": "Merv N Kips OTS",
					"attributes": null,
					"constraints": null,
					"lat": -42.45502,
					"lon": 171.20759,
					"id": "loc-CNZ04013",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "24.868076923076924",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "24",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "No",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": " Solution FRIDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:16 after time window  1 11:00",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04305",
						"refPhysical": {
							"pk": "PUNAKAIKI TAVERN LTD",
							"attributes": null,
							"constraints": null,
							"lat": -42.10926,
							"lon": 171.33562,
							"id": "loc-CNZ04305",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04305",
						"refPhysical": {
							"pk": "PUNAKAIKI TAVERN LTD",
							"attributes": null,
							"constraints": null,
							"lat": -42.10926,
							"lon": 171.33562,
							"id": "loc-CNZ04305",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04305",
						"refPhysical": {
							"pk": "PUNAKAIKI TAVERN LTD",
							"attributes": null,
							"constraints": null,
							"lat": -42.10926,
							"lon": 171.33562,
							"id": "loc-CNZ04305",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 16,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372194000000,
						"timeFinish": 1372210200000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04305",
				"refLocation": {
					"pk": "PUNAKAIKI TAVERN LTD",
					"attributes": null,
					"constraints": null,
					"lat": -42.10926,
					"lon": 171.33562,
					"id": "loc-CNZ04305",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "24.16076923076923",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "24",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "No",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": " Solution MONDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:04 after time window  1 11:00 Solution TUESDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:04 after time window  1 11:00 Solution WEDNESDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:04 after time window  1 11:00 Solution THURSDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:04 after time window  1 11:00 Solution FRIDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:04 after time window  1 11:00 Solution SATURDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:04 after time window  1 11:00",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04021",
						"refPhysical": {
							"pk": "MILL HOUSE DAIRY",
							"attributes": null,
							"constraints": null,
							"lat": -41.75546,
							"lon": 171.59873,
							"id": "loc-CNZ04021",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04021",
						"refPhysical": {
							"pk": "MILL HOUSE DAIRY",
							"attributes": null,
							"constraints": null,
							"lat": -41.75546,
							"lon": 171.59873,
							"id": "loc-CNZ04021",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04021",
						"refPhysical": {
							"pk": "MILL HOUSE DAIRY",
							"attributes": null,
							"constraints": null,
							"lat": -41.75546,
							"lon": 171.59873,
							"id": "loc-CNZ04021",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 4,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372176000000,
						"timeFinish": 1372212000000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04021",
				"refLocation": {
					"pk": "MILL HOUSE DAIRY",
					"attributes": null,
					"constraints": null,
					"lat": -41.75546,
					"lon": 171.59873,
					"id": "loc-CNZ04021",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "19.677307692307693",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "16",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "No",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": " Solution MONDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:03 after time window  1 11:00 Solution WEDNESDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:03 after time window  1 11:00 Solution FRIDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:03 after time window  1 11:00",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04191",
						"refPhysical": {
							"pk": "ARKWRIGHTS CNR STORE",
							"attributes": null,
							"constraints": null,
							"lat": -41.76368,
							"lon": 171.60547,
							"id": "loc-CNZ04191",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04191",
						"refPhysical": {
							"pk": "ARKWRIGHTS CNR STORE",
							"attributes": null,
							"constraints": null,
							"lat": -41.76368,
							"lon": 171.60547,
							"id": "loc-CNZ04191",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04191",
						"refPhysical": {
							"pk": "ARKWRIGHTS CNR STORE",
							"attributes": null,
							"constraints": null,
							"lat": -41.76368,
							"lon": 171.60547,
							"id": "loc-CNZ04191",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 2,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372176000000,
						"timeFinish": 1372212000000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04191",
				"refLocation": {
					"pk": "ARKWRIGHTS CNR STORE",
					"attributes": null,
					"constraints": null,
					"lat": -41.76368,
					"lon": 171.60547,
					"id": "loc-CNZ04191",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "32.50461538461538",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "27",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "No",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": " Solution MONDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00 Solution TUESDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00 Solution WEDNESDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00 Solution THURSDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00 Solution FRIDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ03964",
						"refPhysical": {
							"pk": "LUFFY'S CORNER DAIRY",
							"attributes": null,
							"constraints": null,
							"lat": -41.75251,
							"lon": 171.60548,
							"id": "loc-CNZ03964",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ03964",
						"refPhysical": {
							"pk": "LUFFY'S CORNER DAIRY",
							"attributes": null,
							"constraints": null,
							"lat": -41.75251,
							"lon": 171.60548,
							"id": "loc-CNZ03964",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ03964",
						"refPhysical": {
							"pk": "LUFFY'S CORNER DAIRY",
							"attributes": null,
							"constraints": null,
							"lat": -41.75251,
							"lon": 171.60548,
							"id": "loc-CNZ03964",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 4,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372176000000,
						"timeFinish": 1372212000000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ03964",
				"refLocation": {
					"pk": "LUFFY'S CORNER DAIRY",
					"attributes": null,
					"constraints": null,
					"lat": -41.75251,
					"lon": 171.60548,
					"id": "loc-CNZ03964",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "25.412692307692307",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "25",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "No",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": " Solution MONDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:02 after time window  1 11:00 Solution FRIDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:02 after time window  1 11:00 Solution SATURDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:02 after time window  1 11:00",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04517",
						"refPhysical": {
							"pk": "THE BRICK OVEN",
							"attributes": null,
							"constraints": null,
							"lat": -41.75782,
							"lon": 171.60375,
							"id": "loc-CNZ04517",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04517",
						"refPhysical": {
							"pk": "THE BRICK OVEN",
							"attributes": null,
							"constraints": null,
							"lat": -41.75782,
							"lon": 171.60375,
							"id": "loc-CNZ04517",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04517",
						"refPhysical": {
							"pk": "THE BRICK OVEN",
							"attributes": null,
							"constraints": null,
							"lat": -41.75782,
							"lon": 171.60375,
							"id": "loc-CNZ04517",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 2,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372194000000,
						"timeFinish": 1372210200000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04517",
				"refLocation": {
					"pk": "THE BRICK OVEN",
					"attributes": null,
					"constraints": null,
					"lat": -41.75782,
					"lon": 171.60375,
					"id": "loc-CNZ04517",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "17.909615384615385",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "17",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "No",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": " Solution MONDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:03 after time window  1 11:00 Solution WEDNESDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:03 after time window  1 11:00 Solution FRIDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:03 after time window  1 11:00",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04797",
						"refPhysical": {
							"pk": "CALTEX WESTPORT",
							"attributes": null,
							"constraints": null,
							"lat": -41.75546,
							"lon": 171.59873,
							"id": "loc-CNZ04797",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04797",
						"refPhysical": {
							"pk": "CALTEX WESTPORT",
							"attributes": null,
							"constraints": null,
							"lat": -41.75546,
							"lon": 171.59873,
							"id": "loc-CNZ04797",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04797",
						"refPhysical": {
							"pk": "CALTEX WESTPORT",
							"attributes": null,
							"constraints": null,
							"lat": -41.75546,
							"lon": 171.59873,
							"id": "loc-CNZ04797",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 3,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372176000000,
						"timeFinish": 1372212000000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04797",
				"refLocation": {
					"pk": "CALTEX WESTPORT",
					"attributes": null,
					"constraints": null,
					"lat": -41.75546,
					"lon": 171.59873,
					"id": "loc-CNZ04797",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "0.8788461538461534",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "No",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": " Solution MONDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00 Solution TUESDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00 Solution WEDNESDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00 Solution THURSDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00 Solution FRIDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00 Solution SATURDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:05 after time window  1 11:00",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04012",
						"refPhysical": {
							"pk": "AHAURA F/MARKET",
							"attributes": null,
							"constraints": null,
							"lat": -42.3482,
							"lon": 171.54084,
							"id": "loc-CNZ04012",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04012",
						"refPhysical": {
							"pk": "AHAURA F/MARKET",
							"attributes": null,
							"constraints": null,
							"lat": -42.3482,
							"lon": 171.54084,
							"id": "loc-CNZ04012",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04012",
						"refPhysical": {
							"pk": "AHAURA F/MARKET",
							"attributes": null,
							"constraints": null,
							"lat": -42.3482,
							"lon": 171.54084,
							"id": "loc-CNZ04012",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 5,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372176000000,
						"timeFinish": 1372212000000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 3,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04012",
				"refLocation": {
					"pk": "AHAURA F/MARKET",
					"attributes": null,
					"constraints": null,
					"lat": -42.3482,
					"lon": 171.54084,
					"id": "loc-CNZ04012",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "8.808461538461536",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-13",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "No",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": " Solution MONDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:16 after time window  1 11:00 Solution WEDNESDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:16 after time window  1 11:00 Solution FRIDAY route availability-K73030 visit request-CNZ04870 arrive  1 11:16 after time window  1 11:00",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04018",
						"refPhysical": {
							"pk": "BLACKBALL GENERAL STR",
							"attributes": null,
							"constraints": null,
							"lat": -42.36331,
							"lon": 171.41221,
							"id": "loc-CNZ04018",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04018",
						"refPhysical": {
							"pk": "BLACKBALL GENERAL STR",
							"attributes": null,
							"constraints": null,
							"lat": -42.36331,
							"lon": 171.41221,
							"id": "loc-CNZ04018",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04018",
						"refPhysical": {
							"pk": "BLACKBALL GENERAL STR",
							"attributes": null,
							"constraints": null,
							"lat": -42.36331,
							"lon": 171.41221,
							"id": "loc-CNZ04018",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 5,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372176000000,
						"timeFinish": 1372212000000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04018",
				"refLocation": {
					"pk": "BLACKBALL GENERAL STR",
					"attributes": null,
					"constraints": null,
					"lat": -42.36331,
					"lon": 171.41221,
					"id": "loc-CNZ04018",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "21.073076923076925",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-30",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04387",
						"refPhysical": {
							"pk": "ROBBIES HANMER",
							"attributes": null,
							"constraints": null,
							"lat": -42.51853,
							"lon": 172.81823,
							"id": "loc-CNZ04387",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04387",
						"refPhysical": {
							"pk": "ROBBIES HANMER",
							"attributes": null,
							"constraints": null,
							"lat": -42.51853,
							"lon": 172.81823,
							"id": "loc-CNZ04387",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04387",
						"refPhysical": {
							"pk": "ROBBIES HANMER",
							"attributes": null,
							"constraints": null,
							"lat": -42.51853,
							"lon": 172.81823,
							"id": "loc-CNZ04387",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 2,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372194000000,
						"timeFinish": 1372210200000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 3,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04387",
				"refLocation": {
					"pk": "ROBBIES HANMER",
					"attributes": null,
					"constraints": null,
					"lat": -42.51853,
					"lon": 172.81823,
					"id": "loc-CNZ04387",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "42.23730769230769",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-60",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04340",
						"refPhysical": {
							"pk": "HERITAGE HANMER SPRINGS",
							"attributes": null,
							"constraints": null,
							"lat": -42.51904,
							"lon": 172.82927,
							"id": "loc-CNZ04340",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04340",
						"refPhysical": {
							"pk": "HERITAGE HANMER SPRINGS",
							"attributes": null,
							"constraints": null,
							"lat": -42.51904,
							"lon": 172.82927,
							"id": "loc-CNZ04340",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04340",
						"refPhysical": {
							"pk": "HERITAGE HANMER SPRINGS",
							"attributes": null,
							"constraints": null,
							"lat": -42.51904,
							"lon": 172.82927,
							"id": "loc-CNZ04340",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 3,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372194000000,
						"timeFinish": 1372213800000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 3,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04340",
				"refLocation": {
					"pk": "HERITAGE HANMER SPRINGS",
					"attributes": null,
					"constraints": null,
					"lat": -42.51904,
					"lon": 172.82927,
					"id": "loc-CNZ04340",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "37.16384615384615",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-63",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "No",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": " Solution cts route availability-K73040 commodity FRIDAY-Ambient visit request-CNZ04960 load 341 > capacity 336 Solution FRIDAY route availability-K73040 commodity FRIDAY-Ambient visit request-CNZ04960 load 341 > capacity 336",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04592",
						"refPhysical": {
							"pk": "MUMBLES CAF?",
							"attributes": null,
							"constraints": null,
							"lat": -42.51904,
							"lon": 172.82927,
							"id": "loc-CNZ04592",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04592",
						"refPhysical": {
							"pk": "MUMBLES CAF?",
							"attributes": null,
							"constraints": null,
							"lat": -42.51904,
							"lon": 172.82927,
							"id": "loc-CNZ04592",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04592",
						"refPhysical": {
							"pk": "MUMBLES CAF?",
							"attributes": null,
							"constraints": null,
							"lat": -42.51904,
							"lon": 172.82927,
							"id": "loc-CNZ04592",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 3,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372194000000,
						"timeFinish": 1372210200000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 8,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04592",
				"refLocation": {
					"pk": "MUMBLES CAF?",
					"attributes": null,
					"constraints": null,
					"lat": -42.51904,
					"lon": 172.82927,
					"id": "loc-CNZ04592",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "15.255",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-86",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04587",
						"refPhysical": {
							"pk": "THE GARDEN HOUSE CAF?",
							"attributes": null,
							"constraints": null,
							"lat": -42.52486,
							"lon": 172.82921,
							"id": "loc-CNZ04587",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04587",
						"refPhysical": {
							"pk": "THE GARDEN HOUSE CAF?",
							"attributes": null,
							"constraints": null,
							"lat": -42.52486,
							"lon": 172.82921,
							"id": "loc-CNZ04587",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04587",
						"refPhysical": {
							"pk": "THE GARDEN HOUSE CAF?",
							"attributes": null,
							"constraints": null,
							"lat": -42.52486,
							"lon": 172.82921,
							"id": "loc-CNZ04587",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 3,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372194000000,
						"timeFinish": 1372210200000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04587",
				"refLocation": {
					"pk": "THE GARDEN HOUSE CAF?",
					"attributes": null,
					"constraints": null,
					"lat": -42.52486,
					"lon": 172.82921,
					"id": "loc-CNZ04587",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "705.8761538461538",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "338",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "No",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": " Solution cts route availability-K73040 commodity MONDAY-Ambient visit request-CNZ04960 load 338 > capacity 336 Solution MONDAY route availability-K73040 commodity MONDAY-Ambient visit request-CNZ04960 load 338 > capacity 336 Solution FRIDAY route availability-K73040 commodity FRIDAY-Ambient visit request-CNZ04960 load 346 > capacity 336",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ03911",
						"refPhysical": {
							"pk": "4SQ STEELES",
							"attributes": null,
							"constraints": null,
							"lat": -42.52115,
							"lon": 172.82938,
							"id": "loc-CNZ03911",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ03911",
						"refPhysical": {
							"pk": "4SQ STEELES",
							"attributes": null,
							"constraints": null,
							"lat": -42.52115,
							"lon": 172.82938,
							"id": "loc-CNZ03911",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ03911",
						"refPhysical": {
							"pk": "4SQ STEELES",
							"attributes": null,
							"constraints": null,
							"lat": -42.52115,
							"lon": 172.82938,
							"id": "loc-CNZ03911",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 7,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372194000000,
						"timeFinish": 1372210200000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 12,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 11,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 11,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 10,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 13,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 16,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 9,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ03911",
				"refLocation": {
					"pk": "4SQ STEELES",
					"attributes": null,
					"constraints": null,
					"lat": -42.52115,
					"lon": 172.82938,
					"id": "loc-CNZ03911",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "9.676153846153845",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-44",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04796",
						"refPhysical": {
							"pk": "CALTEX TE ANAU",
							"attributes": null,
							"constraints": null,
							"lat": -45.41828,
							"lon": 167.72175,
							"id": "loc-CNZ04796",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04796",
						"refPhysical": {
							"pk": "CALTEX TE ANAU",
							"attributes": null,
							"constraints": null,
							"lat": -45.41828,
							"lon": 167.72175,
							"id": "loc-CNZ04796",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04796",
						"refPhysical": {
							"pk": "CALTEX TE ANAU",
							"attributes": null,
							"constraints": null,
							"lat": -45.41828,
							"lon": 167.72175,
							"id": "loc-CNZ04796",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 40,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372176000000,
						"timeFinish": 1372212000000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04796",
				"refLocation": {
					"pk": "CALTEX TE ANAU",
					"attributes": null,
					"constraints": null,
					"lat": -45.41828,
					"lon": 167.72175,
					"id": "loc-CNZ04796",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "99.95807692307692",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-9",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ03950",
						"refPhysical": {
							"pk": "4SQ TE ANAU",
							"attributes": null,
							"constraints": null,
							"lat": -45.41585,
							"lon": 167.71467,
							"id": "loc-CNZ03950",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ03950",
						"refPhysical": {
							"pk": "4SQ TE ANAU",
							"attributes": null,
							"constraints": null,
							"lat": -45.41585,
							"lon": 167.71467,
							"id": "loc-CNZ03950",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ03950",
						"refPhysical": {
							"pk": "4SQ TE ANAU",
							"attributes": null,
							"constraints": null,
							"lat": -45.41585,
							"lon": 167.71467,
							"id": "loc-CNZ03950",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 40,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372176000000,
						"timeFinish": 1372212000000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 4,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 3,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 3,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 3,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 4,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 5,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ03950",
				"refLocation": {
					"pk": "4SQ TE ANAU",
					"attributes": null,
					"constraints": null,
					"lat": -45.41585,
					"lon": 167.71467,
					"id": "loc-CNZ03950",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "9.995384615384616",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-9",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04527",
						"refPhysical": {
							"pk": "MAINLY SEAFOOD",
							"attributes": null,
							"constraints": null,
							"lat": -45.41585,
							"lon": 167.71467,
							"id": "loc-CNZ04527",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04527",
						"refPhysical": {
							"pk": "MAINLY SEAFOOD",
							"attributes": null,
							"constraints": null,
							"lat": -45.41585,
							"lon": 167.71467,
							"id": "loc-CNZ04527",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04527",
						"refPhysical": {
							"pk": "MAINLY SEAFOOD",
							"attributes": null,
							"constraints": null,
							"lat": -45.41585,
							"lon": 167.71467,
							"id": "loc-CNZ04527",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 40,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372194000000,
						"timeFinish": 1372210200000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04527",
				"refLocation": {
					"pk": "MAINLY SEAFOOD",
					"attributes": null,
					"constraints": null,
					"lat": -45.41585,
					"lon": 167.71467,
					"id": "loc-CNZ04527",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "7.497692307692307",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-1",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04165",
						"refPhysical": {
							"pk": "TE ANAU DAIRY",
							"attributes": null,
							"constraints": null,
							"lat": -45.41157,
							"lon": 167.72291,
							"id": "loc-CNZ04165",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04165",
						"refPhysical": {
							"pk": "TE ANAU DAIRY",
							"attributes": null,
							"constraints": null,
							"lat": -45.41157,
							"lon": 167.72291,
							"id": "loc-CNZ04165",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04165",
						"refPhysical": {
							"pk": "TE ANAU DAIRY",
							"attributes": null,
							"constraints": null,
							"lat": -45.41157,
							"lon": 167.72291,
							"id": "loc-CNZ04165",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 15,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372176000000,
						"timeFinish": 1372212000000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 2,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04165",
				"refLocation": {
					"pk": "TE ANAU DAIRY",
					"attributes": null,
					"constraints": null,
					"lat": -45.41157,
					"lon": 167.72291,
					"id": "loc-CNZ04165",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "5.3380769230769225",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-43",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04429",
						"refPhysical": {
							"pk": "MILES BETTER PIES",
							"attributes": null,
							"constraints": null,
							"lat": -45.41405,
							"lon": 167.71606,
							"id": "loc-CNZ04429",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04429",
						"refPhysical": {
							"pk": "MILES BETTER PIES",
							"attributes": null,
							"constraints": null,
							"lat": -45.41405,
							"lon": 167.71606,
							"id": "loc-CNZ04429",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04429",
						"refPhysical": {
							"pk": "MILES BETTER PIES",
							"attributes": null,
							"constraints": null,
							"lat": -45.41405,
							"lon": 167.71606,
							"id": "loc-CNZ04429",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 15,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372176000000,
						"timeFinish": 1372212000000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04429",
				"refLocation": {
					"pk": "MILES BETTER PIES",
					"attributes": null,
					"constraints": null,
					"lat": -45.41405,
					"lon": 167.71606,
					"id": "loc-CNZ04429",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "9.828846153846154",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-12",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04515",
						"refPhysical": {
							"pk": "OTAUTAU DINER",
							"attributes": null,
							"constraints": null,
							"lat": -46.1452,
							"lon": 167.99883,
							"id": "loc-CNZ04515",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04515",
						"refPhysical": {
							"pk": "OTAUTAU DINER",
							"attributes": null,
							"constraints": null,
							"lat": -46.1452,
							"lon": 167.99883,
							"id": "loc-CNZ04515",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04515",
						"refPhysical": {
							"pk": "OTAUTAU DINER",
							"attributes": null,
							"constraints": null,
							"lat": -46.1452,
							"lon": 167.99883,
							"id": "loc-CNZ04515",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 15,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372194000000,
						"timeFinish": 1372210200000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04515",
				"refLocation": {
					"pk": "OTAUTAU DINER",
					"attributes": null,
					"constraints": null,
					"lat": -46.1452,
					"lon": 167.99883,
					"id": "loc-CNZ04515",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "10.963846153846154",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-40",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04068",
						"refPhysical": {
							"pk": "MT SOMERS STORE 2011 LTD",
							"attributes": null,
							"constraints": null,
							"lat": -43.7064,
							"lon": 171.40392,
							"id": "loc-CNZ04068",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04068",
						"refPhysical": {
							"pk": "MT SOMERS STORE 2011 LTD",
							"attributes": null,
							"constraints": null,
							"lat": -43.7064,
							"lon": 171.40392,
							"id": "loc-CNZ04068",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04068",
						"refPhysical": {
							"pk": "MT SOMERS STORE 2011 LTD",
							"attributes": null,
							"constraints": null,
							"lat": -43.7064,
							"lon": 171.40392,
							"id": "loc-CNZ04068",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 3,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372186800000,
						"timeFinish": 1372212000000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 3,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 3,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 3,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04068",
				"refLocation": {
					"pk": "MT SOMERS STORE 2011 LTD",
					"attributes": null,
					"constraints": null,
					"lat": -43.7064,
					"lon": 171.40392,
					"id": "loc-CNZ04068",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "5.586538461538462",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-2",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04045",
						"refPhysical": {
							"pk": "Elles Rd Mini Market",
							"attributes": null,
							"constraints": null,
							"lat": -46.4329,
							"lon": 168.36147,
							"id": "loc-CNZ04045",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04045",
						"refPhysical": {
							"pk": "Elles Rd Mini Market",
							"attributes": null,
							"constraints": null,
							"lat": -46.4329,
							"lon": 168.36147,
							"id": "loc-CNZ04045",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04045",
						"refPhysical": {
							"pk": "Elles Rd Mini Market",
							"attributes": null,
							"constraints": null,
							"lat": -46.4329,
							"lon": 168.36147,
							"id": "loc-CNZ04045",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 2,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372176000000,
						"timeFinish": 1372212000000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04045",
				"refLocation": {
					"pk": "Elles Rd Mini Market",
					"attributes": null,
					"constraints": null,
					"lat": -46.4329,
					"lon": 168.36147,
					"id": "loc-CNZ04045",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "124.31846153846152",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "48",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "No",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": " Route availability-K73051 duration 754 > max duration 720 Route availability-K73051 duration 746 > max duration 720 Route availability-K73051 duration 733 > max duration 720",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ03875",
						"refPhysical": {
							"pk": "MITCHELLS FAMILY FOODCENTRE PROP",
							"attributes": null,
							"constraints": null,
							"lat": -45.85653,
							"lon": 170.23089,
							"id": "loc-CNZ03875",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ03875",
						"refPhysical": {
							"pk": "MITCHELLS FAMILY FOODCENTRE PROP",
							"attributes": null,
							"constraints": null,
							"lat": -45.85653,
							"lon": 170.23089,
							"id": "loc-CNZ03875",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ03875",
						"refPhysical": {
							"pk": "MITCHELLS FAMILY FOODCENTRE PROP",
							"attributes": null,
							"constraints": null,
							"lat": -45.85653,
							"lon": 170.23089,
							"id": "loc-CNZ03875",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 31,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372176000000,
						"timeFinish": 1372212000000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 5,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 5,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 5,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 5,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ03875",
				"refLocation": {
					"pk": "MITCHELLS FAMILY FOODCENTRE PROP",
					"attributes": null,
					"constraints": null,
					"lat": -45.85653,
					"lon": 170.23089,
					"id": "loc-CNZ03875",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "-1.7023076923076923",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-5",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04044",
						"refPhysical": {
							"pk": "White Tops Dairy",
							"attributes": null,
							"constraints": null,
							"lat": -46.60103,
							"lon": 168.34865,
							"id": "loc-CNZ04044",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04044",
						"refPhysical": {
							"pk": "White Tops Dairy",
							"attributes": null,
							"constraints": null,
							"lat": -46.60103,
							"lon": 168.34865,
							"id": "loc-CNZ04044",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04044",
						"refPhysical": {
							"pk": "White Tops Dairy",
							"attributes": null,
							"constraints": null,
							"lat": -46.60103,
							"lon": 168.34865,
							"id": "loc-CNZ04044",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 1,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372176000000,
						"timeFinish": 1372212000000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04044",
				"refLocation": {
					"pk": "White Tops Dairy",
					"attributes": null,
					"constraints": null,
					"lat": -46.60103,
					"lon": 168.34865,
					"id": "loc-CNZ04044",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "25.15269230769231",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-99",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04042",
						"refPhysical": {
							"pk": "FIELDS GLENAVY STORE",
							"attributes": null,
							"constraints": null,
							"lat": -44.91505,
							"lon": 171.10071,
							"id": "loc-CNZ04042",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04042",
						"refPhysical": {
							"pk": "FIELDS GLENAVY STORE",
							"attributes": null,
							"constraints": null,
							"lat": -44.91505,
							"lon": 171.10071,
							"id": "loc-CNZ04042",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04042",
						"refPhysical": {
							"pk": "FIELDS GLENAVY STORE",
							"attributes": null,
							"constraints": null,
							"lat": -44.91505,
							"lon": 171.10071,
							"id": "loc-CNZ04042",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 5,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372190400000,
						"timeFinish": 1372201200000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04042",
				"refLocation": {
					"pk": "FIELDS GLENAVY STORE",
					"attributes": null,
					"constraints": null,
					"lat": -44.91505,
					"lon": 171.10071,
					"id": "loc-CNZ04042",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "17.479230769230767",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-397",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04185",
						"refPhysical": {
							"pk": "EL PASO DAIRY",
							"attributes": null,
							"constraints": null,
							"lat": -44.73686,
							"lon": 171.0429,
							"id": "loc-CNZ04185",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04185",
						"refPhysical": {
							"pk": "EL PASO DAIRY",
							"attributes": null,
							"constraints": null,
							"lat": -44.73686,
							"lon": 171.0429,
							"id": "loc-CNZ04185",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04185",
						"refPhysical": {
							"pk": "EL PASO DAIRY",
							"attributes": null,
							"constraints": null,
							"lat": -44.73686,
							"lon": 171.0429,
							"id": "loc-CNZ04185",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 5,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372190400000,
						"timeFinish": 1372197600000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04185",
				"refLocation": {
					"pk": "EL PASO DAIRY",
					"attributes": null,
					"constraints": null,
					"lat": -44.73686,
					"lon": 171.0429,
					"id": "loc-CNZ04185",
					"linehaulCost": null
				}
			}
		},
		{
			"refConsignment": {
				"pk": null,
				"attributes": {
					"attribute": [{
						"payloads": null,
						"value": "9.916538461538464",
						"refProperty": {
							"payloads": null,
							"title": "request-margin",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop40"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad2",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop41"
						}
					},
					{
						"payloads": null,
						"value": "0",
						"refProperty": {
							"payloads": null,
							"title": "fully-costed-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop43"
						}
					},
					{
						"payloads": null,
						"value": "-61",
						"refProperty": {
							"payloads": null,
							"title": "marginal-gpad",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop42"
						}
					},
					{
						"payloads": null,
						"value": "Yes",
						"refProperty": {
							"payloads": null,
							"title": "is-feasible",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop44"
						}
					},
					{
						"payloads": null,
						"value": "OK",
						"refProperty": {
							"payloads": null,
							"title": "reason-why",
							"physical": "ENTITY_CONSIGNMENT",
							"typeProperty": "STRING",
							"id": "prop45"
						}
					}]
				},
				"constraints": {
					"constraint": [{
						"name": "fixed-customer",
						"definition": "false",
						"id": "inclusion-CNZ04278",
						"refPhysical": {
							"pk": "WAIMATE MAIN SCHOOL",
							"attributes": null,
							"constraints": null,
							"lat": -44.7355,
							"lon": 171.04677,
							"id": "loc-CNZ04278",
							"linehaulCost": null
						}
					},
					{
						"name": "max-earliness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-earliness-CNZ04278",
						"refPhysical": {
							"pk": "WAIMATE MAIN SCHOOL",
							"attributes": null,
							"constraints": null,
							"lat": -44.7355,
							"lon": 171.04677,
							"id": "loc-CNZ04278",
							"linehaulCost": null
						}
					},
					{
						"name": "max-tardiness",
						"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
						"id": "max-tardiness-CNZ04278",
						"refPhysical": {
							"pk": "WAIMATE MAIN SCHOOL",
							"attributes": null,
							"constraints": null,
							"lat": -44.7355,
							"lon": 171.04677,
							"id": "loc-CNZ04278",
							"linehaulCost": null
						}
					}]
				},
				"elapsedService": 5,
				"windows": {
					"window": [{
						"payloads": null,
						"timeStart": 1372197600000,
						"timeFinish": 1372201200000
					}]
				},
				"commodities": {
					"commodity": [{
						"payloads": null,
						"value": 1,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Ambient",
							"unitWhole": "items",
							"id": "MONDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "MONDAY-Chilled",
							"unitWhole": "items",
							"id": "MONDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Ambient",
							"unitWhole": "items",
							"id": "TUESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "TUESDAY-Chilled",
							"unitWhole": "items",
							"id": "TUESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Ambient",
							"unitWhole": "items",
							"id": "WEDNESDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "WEDNESDAY-Chilled",
							"unitWhole": "items",
							"id": "WEDNESDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Ambient",
							"unitWhole": "items",
							"id": "THURSDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "THURSDAY-Chilled",
							"unitWhole": "items",
							"id": "THURSDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Ambient",
							"unitWhole": "items",
							"id": "FRIDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "FRIDAY-Chilled",
							"unitWhole": "items",
							"id": "FRIDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Ambient",
							"unitWhole": "items",
							"id": "SATURDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SATURDAY-Chilled",
							"unitWhole": "items",
							"id": "SATURDAY-Chilled"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Ambient",
							"unitWhole": "items",
							"id": "SUNDAY-Ambient"
						},
						"unload": null
					},
					{
						"payloads": null,
						"value": 0,
						"refCommodity": {
							"payloads": null,
							"title": "SUNDAY-Chilled",
							"unitWhole": "items",
							"id": "SUNDAY-Chilled"
						},
						"unload": null
					}]
				},
				"id": "request-CNZ04278",
				"refLocation": {
					"pk": "WAIMATE MAIN SCHOOL",
					"attributes": null,
					"constraints": null,
					"lat": -44.7355,
					"lon": 171.04677,
					"id": "loc-CNZ04278",
					"linehaulCost": null
				}
			}
		}]
	}
}