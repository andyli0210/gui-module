var routeJson = {
	"payloads": null,
	"routes": {
		"route": [{
			"payloads": {
				"payload": [{
					"value": "<summary><loads><load refCommodity=\"MONDAY-Ambient\"><quantity>519</quantity></load><load refCommodity=\"MONDAY-Chilled\"><quantity>43</quantity></load></loads><durations><duration><name>Travel</name><value>133</value></duration><duration><name>Service</name><value>523</value></duration><duration><name>Load_Unload</name><value>20</value></duration></durations></summary>",
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
					"timeEarliest": 1372174200000,
					"timeLatest": 1372182180000,
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
						"service": []
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
					"timeEarliest": 1372175580000,
					"timeLatest": 1372183560000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 1788,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 3,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372175580000,
							"timeLatest": 1372183560000,
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
							"id": "SVC_vehicle-400966_request-CNZ04317_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "126.39499999999998",
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
										"value": "109",
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
										"value": "111",
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
										"value": "120",
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
										"id": "inclusion-CNZ04317",
										"refPhysical": {
											"pk": "SUDIMA HOTEL CHRISTCHURCH",
											"attributes": null,
											"constraints": null,
											"lat": -43.48972,
											"lon": 172.54502,
											"id": "loc-CNZ04317",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04317",
										"refPhysical": {
											"pk": "SUDIMA HOTEL CHRISTCHURCH",
											"attributes": null,
											"constraints": null,
											"lat": -43.48972,
											"lon": 172.54502,
											"id": "loc-CNZ04317",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04317",
										"refPhysical": {
											"pk": "SUDIMA HOTEL CHRISTCHURCH",
											"attributes": null,
											"constraints": null,
											"lat": -43.48972,
											"lon": 172.54502,
											"id": "loc-CNZ04317",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372178700000,
										"timeFinish": 1372190400000
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
								"id": "request-CNZ04317",
								"refLocation": {
									"pk": "SUDIMA HOTEL CHRISTCHURCH",
									"attributes": null,
									"constraints": null,
									"lat": -43.48972,
									"lon": 172.54502,
									"id": "loc-CNZ04317",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04317_15_116_MONDAY-Ambient",
					"refLocation": {
						"pk": "SUDIMA HOTEL CHRISTCHURCH",
						"attributes": null,
						"constraints": null,
						"lat": -43.48972,
						"lon": 172.54502,
						"id": "loc-CNZ04317",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372175880000,
					"timeLatest": 1372183860000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 1821,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 3,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372175880000,
							"timeLatest": 1372183860000,
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
							"id": "SVC_vehicle-400966_request-CNZ04598_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "39.01846153846154",
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
										"value": "8",
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
										"value": "21",
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
										"id": "inclusion-CNZ04598",
										"refPhysical": {
											"pk": "THE COFFEE CLUB HMS HOST",
											"attributes": null,
											"constraints": null,
											"lat": -43.4897,
											"lon": 172.54476,
											"id": "loc-CNZ04598",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04598",
										"refPhysical": {
											"pk": "THE COFFEE CLUB HMS HOST",
											"attributes": null,
											"constraints": null,
											"lat": -43.4897,
											"lon": 172.54476,
											"id": "loc-CNZ04598",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04598",
										"refPhysical": {
											"pk": "THE COFFEE CLUB HMS HOST",
											"attributes": null,
											"constraints": null,
											"lat": -43.4897,
											"lon": 172.54476,
											"id": "loc-CNZ04598",
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
								"id": "request-CNZ04598",
								"refLocation": {
									"pk": "THE COFFEE CLUB HMS HOST",
									"attributes": null,
									"constraints": null,
									"lat": -43.4897,
									"lon": 172.54476,
									"id": "loc-CNZ04598",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04598_15_117_MONDAY-Ambient",
					"refLocation": {
						"pk": "THE COFFEE CLUB HMS HOST",
						"attributes": null,
						"constraints": null,
						"lat": -43.4897,
						"lon": 172.54476,
						"id": "loc-CNZ04598",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372176300000,
					"timeLatest": 1372184280000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 2713,
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
							"timeEarliest": 1372176300000,
							"timeLatest": 1372184280000,
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
							"id": "SVC_vehicle-400966_request-CNZ04550_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "301.8257692307692",
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
										"value": "251",
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
										"value": "256",
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
										"value": "284",
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
										"id": "inclusion-CNZ04550",
										"refPhysical": {
											"pk": "HMS HOST",
											"attributes": null,
											"constraints": null,
											"lat": -43.48525,
											"lon": 172.54758,
											"id": "loc-CNZ04550",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04550",
										"refPhysical": {
											"pk": "HMS HOST",
											"attributes": null,
											"constraints": null,
											"lat": -43.48525,
											"lon": 172.54758,
											"id": "loc-CNZ04550",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04550",
										"refPhysical": {
											"pk": "HMS HOST",
											"attributes": null,
											"constraints": null,
											"lat": -43.48525,
											"lon": 172.54758,
											"id": "loc-CNZ04550",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
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
										"value": 7,
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
								"id": "request-CNZ04550",
								"refLocation": {
									"pk": "HMS HOST",
									"attributes": null,
									"constraints": null,
									"lat": -43.48525,
									"lon": 172.54758,
									"id": "loc-CNZ04550",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04550_15_118_MONDAY-Ambient",
					"refLocation": {
						"pk": "HMS HOST",
						"attributes": null,
						"constraints": null,
						"lat": -43.48525,
						"lon": 172.54758,
						"id": "loc-CNZ04550",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372176720000,
					"timeLatest": 1372184700000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 5426,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 9,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372176720000,
							"timeLatest": 1372184700000,
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
							"id": "SVC_vehicle-400966_request-CNZ04545_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "11.852692307692308",
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
										"value": "-5",
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
										"value": "-2",
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
										"value": "1",
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
										"id": "inclusion-CNZ04545",
										"refPhysical": {
											"pk": "THE PRESERVATORY",
											"attributes": null,
											"constraints": null,
											"lat": -43.49827,
											"lon": 172.56029,
											"id": "loc-CNZ04545",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04545",
										"refPhysical": {
											"pk": "THE PRESERVATORY",
											"attributes": null,
											"constraints": null,
											"lat": -43.49827,
											"lon": 172.56029,
											"id": "loc-CNZ04545",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04545",
										"refPhysical": {
											"pk": "THE PRESERVATORY",
											"attributes": null,
											"constraints": null,
											"lat": -43.49827,
											"lon": 172.56029,
											"id": "loc-CNZ04545",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
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
								"id": "request-CNZ04545",
								"refLocation": {
									"pk": "THE PRESERVATORY",
									"attributes": null,
									"constraints": null,
									"lat": -43.49827,
									"lon": 172.56029,
									"id": "loc-CNZ04545",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04545_15_119_MONDAY-Ambient",
					"refLocation": {
						"pk": "THE PRESERVATORY",
						"attributes": null,
						"constraints": null,
						"lat": -43.49827,
						"lon": 172.56029,
						"id": "loc-CNZ04545",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372177080000,
					"timeLatest": 1372185060000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 6948,
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
							"elapsedDuration": 5,
							"timeEarliest": 1372177080000,
							"timeLatest": 1372185060000,
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
										"value": "42",
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
										"value": "45",
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
										"value": "53",
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
					"timeEarliest": 1372177680000,
					"timeLatest": 1372185660000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 10796,
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
							"elapsedDuration": 3,
							"timeEarliest": 1372177680000,
							"timeLatest": 1372185660000,
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
							"id": "SVC_vehicle-400966_request-CNZ04373_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "57.87538461538462",
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
										"value": "36",
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
										"value": "51",
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
										"id": "inclusion-CNZ04373",
										"refPhysical": {
											"pk": "CAMELLIA COURT REST HOME",
											"attributes": null,
											"constraints": null,
											"lat": -43.49452,
											"lon": 172.6028,
											"id": "loc-CNZ04373",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04373",
										"refPhysical": {
											"pk": "CAMELLIA COURT REST HOME",
											"attributes": null,
											"constraints": null,
											"lat": -43.49452,
											"lon": 172.6028,
											"id": "loc-CNZ04373",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04373",
										"refPhysical": {
											"pk": "CAMELLIA COURT REST HOME",
											"attributes": null,
											"constraints": null,
											"lat": -43.49452,
											"lon": 172.6028,
											"id": "loc-CNZ04373",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
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
								"id": "request-CNZ04373",
								"refLocation": {
									"pk": "CAMELLIA COURT REST HOME",
									"attributes": null,
									"constraints": null,
									"lat": -43.49452,
									"lon": 172.6028,
									"id": "loc-CNZ04373",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04373_15_122_MONDAY-Ambient",
					"refLocation": {
						"pk": "CAMELLIA COURT REST HOME",
						"attributes": null,
						"constraints": null,
						"lat": -43.49452,
						"lon": 172.6028,
						"id": "loc-CNZ04373",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372177860000,
					"timeLatest": 1372185840000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 10893,
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
							"elapsedDuration": 3,
							"timeEarliest": 1372177860000,
							"timeLatest": 1372185840000,
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
							"id": "SVC_vehicle-400966_request-CNZ04371_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "54.78",
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
										"value": "35",
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
										"value": "37",
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
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04371",
										"refPhysical": {
											"pk": "GOLDEN AGE RETIREMENT VILLAGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.49421,
											"lon": 172.60221,
											"id": "loc-CNZ04371",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04371",
										"refPhysical": {
											"pk": "GOLDEN AGE RETIREMENT VILLAGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.49421,
											"lon": 172.60221,
											"id": "loc-CNZ04371",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04371",
										"refPhysical": {
											"pk": "GOLDEN AGE RETIREMENT VILLAGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.49421,
											"lon": 172.60221,
											"id": "loc-CNZ04371",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
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
								"id": "request-CNZ04371",
								"refLocation": {
									"pk": "GOLDEN AGE RETIREMENT VILLAGE",
									"attributes": null,
									"constraints": null,
									"lat": -43.49421,
									"lon": 172.60221,
									"id": "loc-CNZ04371",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04371_15_123_MONDAY-Ambient",
					"refLocation": {
						"pk": "GOLDEN AGE RETIREMENT VILLAGE",
						"attributes": null,
						"constraints": null,
						"lat": -43.49421,
						"lon": 172.60221,
						"id": "loc-CNZ04371",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 10,
					"timeEarliest": 1372178280000,
					"timeLatest": 1372186260000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 14587,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 21,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 10,
							"timeEarliest": 1372178280000,
							"timeLatest": 1372186260000,
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
							"id": "SVC_vehicle-400966_request-CNZ04353_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "144.37576923076924",
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
										"value": "101",
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
										"value": "107",
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
										"value": "123",
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
										"id": "inclusion-CNZ04353",
										"refPhysical": {
											"pk": "ST MARGARETS COLLEGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.51939,
											"lon": 172.62173,
											"id": "loc-CNZ04353",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04353",
										"refPhysical": {
											"pk": "ST MARGARETS COLLEGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.51939,
											"lon": 172.62173,
											"id": "loc-CNZ04353",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04353",
										"refPhysical": {
											"pk": "ST MARGARETS COLLEGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.51939,
											"lon": 172.62173,
											"id": "loc-CNZ04353",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 10,
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
										"value": 4,
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
										"value": 4,
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
										"value": 4,
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
								"id": "request-CNZ04353",
								"refLocation": {
									"pk": "ST MARGARETS COLLEGE",
									"attributes": null,
									"constraints": null,
									"lat": -43.51939,
									"lon": 172.62173,
									"id": "loc-CNZ04353",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04353_15_126_MONDAY-Ambient",
					"refLocation": {
						"pk": "ST MARGARETS COLLEGE",
						"attributes": null,
						"constraints": null,
						"lat": -43.51939,
						"lon": 172.62173,
						"id": "loc-CNZ04353",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372179000000,
					"timeLatest": 1372186980000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 16459,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 23,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372179000000,
							"timeLatest": 1372186980000,
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
							"id": "SVC_vehicle-400966_request-CNZ04311_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "46.96769230769231",
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
										"value": "19",
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
										"value": "31",
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
										"id": "inclusion-CNZ04311",
										"refPhysical": {
											"pk": "CHATEAU ON THE PARK",
											"attributes": null,
											"constraints": null,
											"lat": -43.52598,
											"lon": 172.61244,
											"id": "loc-CNZ04311",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04311",
										"refPhysical": {
											"pk": "CHATEAU ON THE PARK",
											"attributes": null,
											"constraints": null,
											"lat": -43.52598,
											"lon": 172.61244,
											"id": "loc-CNZ04311",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04311",
										"refPhysical": {
											"pk": "CHATEAU ON THE PARK",
											"attributes": null,
											"constraints": null,
											"lat": -43.52598,
											"lon": 172.61244,
											"id": "loc-CNZ04311",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
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
								"id": "request-CNZ04311",
								"refLocation": {
									"pk": "CHATEAU ON THE PARK",
									"attributes": null,
									"constraints": null,
									"lat": -43.52598,
									"lon": 172.61244,
									"id": "loc-CNZ04311",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04311_15_127_MONDAY-Ambient",
					"refLocation": {
						"pk": "CHATEAU ON THE PARK",
						"attributes": null,
						"constraints": null,
						"lat": -43.52598,
						"lon": 172.61244,
						"id": "loc-CNZ04311",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372179540000,
					"timeLatest": 1372187520000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 19836,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 27,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372179540000,
							"timeLatest": 1372187520000,
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
										"value": "33",
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
										"value": "35",
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
										"value": "50",
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
					"elapsedDuration": 10,
					"timeEarliest": 1372179720000,
					"timeLatest": 1372187700000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 20030,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 27,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 10,
							"timeEarliest": 1372179720000,
							"timeLatest": 1372187700000,
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
										"value": "1174",
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
										"value": "1184",
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
										"value": "1327",
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
					"timeEarliest": 1372180560000,
					"timeLatest": 1372188540000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 23222,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 31,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372180560000,
							"timeLatest": 1372188540000,
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
									"quantity": 4,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04135_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "254.1923076923077",
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
										"value": "219",
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
										"value": "222",
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
										"value": "244",
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
										"id": "inclusion-CNZ04135",
										"refPhysical": {
											"pk": "HAGLEY NIGHT' DAY",
											"attributes": null,
											"constraints": null,
											"lat": -43.52889,
											"lon": 172.61099,
											"id": "loc-CNZ04135",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04135",
										"refPhysical": {
											"pk": "HAGLEY NIGHT' DAY",
											"attributes": null,
											"constraints": null,
											"lat": -43.52889,
											"lon": 172.61099,
											"id": "loc-CNZ04135",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04135",
										"refPhysical": {
											"pk": "HAGLEY NIGHT' DAY",
											"attributes": null,
											"constraints": null,
											"lat": -43.52889,
											"lon": 172.61099,
											"id": "loc-CNZ04135",
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
										"value": 4,
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
										"value": 4,
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
								"id": "request-CNZ04135",
								"refLocation": {
									"pk": "HAGLEY NIGHT' DAY",
									"attributes": null,
									"constraints": null,
									"lat": -43.52889,
									"lon": 172.61099,
									"id": "loc-CNZ04135",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04135_15_130_MONDAY-Ambient",
					"refLocation": {
						"pk": "HAGLEY NIGHT' DAY",
						"attributes": null,
						"constraints": null,
						"lat": -43.52889,
						"lon": 172.61099,
						"id": "loc-CNZ04135",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372180740000,
					"timeLatest": 1372188720000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 23413,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 31,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372180740000,
							"timeLatest": 1372188720000,
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
							"id": "SVC_vehicle-400966_request-CNZ04389_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "19.38423076923077",
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
										"value": "5",
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
										"value": "6",
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
										"value": "14",
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
										"id": "inclusion-CNZ04389",
										"refPhysical": {
											"pk": "NANDOS RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.52907,
											"lon": 172.60864,
											"id": "loc-CNZ04389",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04389",
										"refPhysical": {
											"pk": "NANDOS RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.52907,
											"lon": 172.60864,
											"id": "loc-CNZ04389",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04389",
										"refPhysical": {
											"pk": "NANDOS RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.52907,
											"lon": 172.60864,
											"id": "loc-CNZ04389",
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
								"id": "request-CNZ04389",
								"refLocation": {
									"pk": "NANDOS RICCARTON",
									"attributes": null,
									"constraints": null,
									"lat": -43.52907,
									"lon": 172.60864,
									"id": "loc-CNZ04389",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04389_15_131_MONDAY-Ambient",
					"refLocation": {
						"pk": "NANDOS RICCARTON",
						"attributes": null,
						"constraints": null,
						"lat": -43.52907,
						"lon": 172.60864,
						"id": "loc-CNZ04389",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372181040000,
					"timeLatest": 1372189020000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 23769,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 31,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372181040000,
							"timeLatest": 1372189020000,
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
										"value": "80",
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
										"value": "82",
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
										"value": "94",
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
					"elapsedDuration": 3,
					"timeEarliest": 1372181400000,
					"timeLatest": 1372189380000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 24258,
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
							"elapsedDuration": 3,
							"timeEarliest": 1372181400000,
							"timeLatest": 1372189380000,
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
							"id": "SVC_vehicle-400966_request-CNZ04460_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "10.19576923076923",
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
										"value": "3",
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
										"value": "5",
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
										"id": "inclusion-CNZ04460",
										"refPhysical": {
											"pk": "KHMER SATAY NOODLE HOUSE (R)",
											"attributes": null,
											"constraints": null,
											"lat": -43.52989,
											"lon": 172.59834,
											"id": "loc-CNZ04460",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04460",
										"refPhysical": {
											"pk": "KHMER SATAY NOODLE HOUSE (R)",
											"attributes": null,
											"constraints": null,
											"lat": -43.52989,
											"lon": 172.59834,
											"id": "loc-CNZ04460",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04460",
										"refPhysical": {
											"pk": "KHMER SATAY NOODLE HOUSE (R)",
											"attributes": null,
											"constraints": null,
											"lat": -43.52989,
											"lon": 172.59834,
											"id": "loc-CNZ04460",
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
								"id": "request-CNZ04460",
								"refLocation": {
									"pk": "KHMER SATAY NOODLE HOUSE (R)",
									"attributes": null,
									"constraints": null,
									"lat": -43.52989,
									"lon": 172.59834,
									"id": "loc-CNZ04460",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04460_15_134_MONDAY-Ambient",
					"refLocation": {
						"pk": "KHMER SATAY NOODLE HOUSE (R)",
						"attributes": null,
						"constraints": null,
						"lat": -43.52989,
						"lon": 172.59834,
						"id": "loc-CNZ04460",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 2,
					"timeEarliest": 1372181640000,
					"timeLatest": 1372189620000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 24643,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 33,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 2,
							"timeEarliest": 1372181640000,
							"timeLatest": 1372189620000,
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
										"value": "17",
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
										"value": "21",
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
					"elapsedDuration": 40,
					"timeEarliest": 1372181940000,
					"timeLatest": 1372189920000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 26959,
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
							"elapsedDuration": 40,
							"timeEarliest": 1372181940000,
							"timeLatest": 1372189920000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 52,
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
							"id": "SVC_vehicle-400966_request-CNZ04864_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "3729.480769230769",
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
										"value": "3200",
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
										"value": "3241",
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
										"value": "3591",
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
										"id": "inclusion-CNZ04864",
										"refPhysical": {
											"pk": "NW Fendalton",
											"attributes": null,
											"constraints": null,
											"lat": -43.51734,
											"lon": 172.58835,
											"id": "loc-CNZ04864",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ04864",
										"refPhysical": {
											"pk": "NW Fendalton",
											"attributes": null,
											"constraints": null,
											"lat": -43.51734,
											"lon": 172.58835,
											"id": "loc-CNZ04864",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04864",
										"refPhysical": {
											"pk": "NW Fendalton",
											"attributes": null,
											"constraints": null,
											"lat": -43.51734,
											"lon": 172.58835,
											"id": "loc-CNZ04864",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 40,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372183200000,
										"timeFinish": 1372201200000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 52,
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
										"value": 53,
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
										"value": 49,
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
										"value": 45,
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
										"value": 49,
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
										"value": 48,
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
										"value": 47,
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
								"id": "request-CNZ04864",
								"refLocation": {
									"pk": "NW Fendalton",
									"attributes": null,
									"constraints": null,
									"lat": -43.51734,
									"lon": 172.58835,
									"id": "loc-CNZ04864",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04864_15_137_MONDAY-Ambient",
					"refLocation": {
						"pk": "NW Fendalton",
						"attributes": null,
						"constraints": null,
						"lat": -43.51734,
						"lon": 172.58835,
						"id": "loc-CNZ04864",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372184460000,
					"timeLatest": 1372192440000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 28641,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 38,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372184460000,
							"timeLatest": 1372192440000,
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
										"value": "11",
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
										"value": "15",
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
					"elapsedDuration": 2,
					"timeEarliest": 1372184820000,
					"timeLatest": 1372192800000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 29410,
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
							"elapsedDuration": 2,
							"timeEarliest": 1372184820000,
							"timeLatest": 1372192800000,
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
							"id": "SVC_vehicle-400966_request-CNZ04380_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "42.736538461538466",
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
										"value": "19",
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
										"value": "21",
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
										"id": "inclusion-CNZ04380",
										"refPhysical": {
											"pk": "Kauri Lodge Rest Home",
											"attributes": null,
											"constraints": null,
											"lat": -43.5301,
											"lon": 172.59551,
											"id": "loc-CNZ04380",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04380",
										"refPhysical": {
											"pk": "Kauri Lodge Rest Home",
											"attributes": null,
											"constraints": null,
											"lat": -43.5301,
											"lon": 172.59551,
											"id": "loc-CNZ04380",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04380",
										"refPhysical": {
											"pk": "Kauri Lodge Rest Home",
											"attributes": null,
											"constraints": null,
											"lat": -43.5301,
											"lon": 172.59551,
											"id": "loc-CNZ04380",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 2,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372178700000,
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
								"id": "request-CNZ04380",
								"refLocation": {
									"pk": "Kauri Lodge Rest Home",
									"attributes": null,
									"constraints": null,
									"lat": -43.5301,
									"lon": 172.59551,
									"id": "loc-CNZ04380",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04380_15_139_MONDAY-Ambient",
					"refLocation": {
						"pk": "Kauri Lodge Rest Home",
						"attributes": null,
						"constraints": null,
						"lat": -43.5301,
						"lon": 172.59551,
						"id": "loc-CNZ04380",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 2,
					"timeEarliest": 1372184940000,
					"timeLatest": 1372192920000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 29714,
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
							"elapsedDuration": 2,
							"timeEarliest": 1372184940000,
							"timeLatest": 1372192920000,
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
							"id": "SVC_vehicle-400966_request-CNZ04216_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "50.20269230769231",
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
										"value": "31",
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
										"value": "33",
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
										"value": "44",
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
										"id": "inclusion-CNZ04216",
										"refPhysical": {
											"pk": "NARESH DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.53039,
											"lon": 172.59182,
											"id": "loc-CNZ04216",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04216",
										"refPhysical": {
											"pk": "NARESH DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.53039,
											"lon": 172.59182,
											"id": "loc-CNZ04216",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04216",
										"refPhysical": {
											"pk": "NARESH DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.53039,
											"lon": 172.59182,
											"id": "loc-CNZ04216",
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
								"id": "request-CNZ04216",
								"refLocation": {
									"pk": "NARESH DAIRY",
									"attributes": null,
									"constraints": null,
									"lat": -43.53039,
									"lon": 172.59182,
									"id": "loc-CNZ04216",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04216_15_140_MONDAY-Ambient",
					"refLocation": {
						"pk": "NARESH DAIRY",
						"attributes": null,
						"constraints": null,
						"lat": -43.53039,
						"lon": 172.59182,
						"id": "loc-CNZ04216",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 2,
					"timeEarliest": 1372185180000,
					"timeLatest": 1372193160000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 31113,
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
							"timeEarliest": 1372185180000,
							"timeLatest": 1372193160000,
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
										"value": "27",
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
										"value": "34",
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
					"elapsedDuration": 2,
					"timeEarliest": 1372185480000,
					"timeLatest": 1372193460000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 33018,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 44,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 2,
							"timeEarliest": 1372185480000,
							"timeLatest": 1372193460000,
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
							"id": "SVC_vehicle-400966_request-CNZ04601_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "21.40423076923077",
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
										"value": "17",
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
										"id": "inclusion-CNZ04601",
										"refPhysical": {
											"pk": "THE COFFEE CLUB RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.5299,
											"lon": 172.59812,
											"id": "loc-CNZ04601",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04601",
										"refPhysical": {
											"pk": "THE COFFEE CLUB RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.5299,
											"lon": 172.59812,
											"id": "loc-CNZ04601",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04601",
										"refPhysical": {
											"pk": "THE COFFEE CLUB RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.5299,
											"lon": 172.59812,
											"id": "loc-CNZ04601",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 2,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372188600000,
										"timeFinish": 1372192800000
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
								"id": "request-CNZ04601",
								"refLocation": {
									"pk": "THE COFFEE CLUB RICCARTON",
									"attributes": null,
									"constraints": null,
									"lat": -43.5299,
									"lon": 172.59812,
									"id": "loc-CNZ04601",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04601_15_142_MONDAY-Ambient",
					"refLocation": {
						"pk": "THE COFFEE CLUB RICCARTON",
						"attributes": null,
						"constraints": null,
						"lat": -43.5299,
						"lon": 172.59812,
						"id": "loc-CNZ04601",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 60,
					"timeEarliest": 1372185600000,
					"timeLatest": 1372193580000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 33133,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 44,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 60,
							"timeEarliest": 1372185600000,
							"timeLatest": 1372193580000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 125,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 11,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04839_MONDAY-Ambient",
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
										"value": "2196",
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
										"value": "2252",
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
										"value": "3164",
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
										"id": "inclusion-CNZ04839",
										"refPhysical": {
											"pk": "PNS RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.52988,
											"lon": 172.59835,
											"id": "loc-CNZ04839",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ04839",
										"refPhysical": {
											"pk": "PNS RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.52988,
											"lon": 172.59835,
											"id": "loc-CNZ04839",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04839",
										"refPhysical": {
											"pk": "PNS RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.52988,
											"lon": 172.59835,
											"id": "loc-CNZ04839",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 60,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372186800000,
										"timeFinish": 1372194000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 125,
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
										"value": 11,
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
										"value": 127,
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
										"value": 128,
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
										"value": 11,
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
										"value": 136,
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
										"value": 11,
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
										"value": 128,
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
										"value": 115,
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
										"value": 109,
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
								"id": "request-CNZ04839",
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
					"id": "VIS_loc-CNZ04839_15_143_MONDAY-Ambient",
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
					"elapsedDuration": 20,
					"timeEarliest": 1372189740000,
					"timeLatest": 1372197720000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 40588,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 53,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 20,
							"timeEarliest": 1372189740000,
							"timeLatest": 1372197720000,
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
					"id": "VIS_loc-Christchurch_15_666_MONDAY-Ambient",
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
					"elapsedDuration": 3,
					"timeEarliest": 1372191540000,
					"timeLatest": 1372199520000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 48786,
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
							"elapsedDuration": 3,
							"timeEarliest": 1372191540000,
							"timeLatest": 1372199520000,
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
										"value": "8",
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
										"value": "9",
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
					"timeEarliest": 1372191780000,
					"timeLatest": 1372199760000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 49871,
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
							"elapsedDuration": 20,
							"timeEarliest": 1372191780000,
							"timeLatest": 1372199760000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 16,
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
							"id": "SVC_vehicle-400966_request-CNZ04267_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "917.8619230769231",
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
										"value": "717",
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
										"value": "741",
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
										"value": "836",
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
										"id": "inclusion-CNZ04267",
										"refPhysical": {
											"pk": "RAEWARD FRESH TOWER JUNCTION",
											"attributes": null,
											"constraints": null,
											"lat": -43.54027,
											"lon": 172.60659,
											"id": "loc-CNZ04267",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04267",
										"refPhysical": {
											"pk": "RAEWARD FRESH TOWER JUNCTION",
											"attributes": null,
											"constraints": null,
											"lat": -43.54027,
											"lon": 172.60659,
											"id": "loc-CNZ04267",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04267",
										"refPhysical": {
											"pk": "RAEWARD FRESH TOWER JUNCTION",
											"attributes": null,
											"constraints": null,
											"lat": -43.54027,
											"lon": 172.60659,
											"id": "loc-CNZ04267",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 20,
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
										"value": 16,
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
										"value": 14,
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
										"value": 13,
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
										"value": 13,
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
										"value": 14,
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
										"value": 22,
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
								"id": "request-CNZ04267",
								"refLocation": {
									"pk": "RAEWARD FRESH TOWER JUNCTION",
									"attributes": null,
									"constraints": null,
									"lat": -43.54027,
									"lon": 172.60659,
									"id": "loc-CNZ04267",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04267_15_146_MONDAY-Ambient",
					"refLocation": {
						"pk": "RAEWARD FRESH TOWER JUNCTION",
						"attributes": null,
						"constraints": null,
						"lat": -43.54027,
						"lon": 172.60659,
						"id": "loc-CNZ04267",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 30,
					"timeEarliest": 1372193280000,
					"timeLatest": 1372201260000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 53747,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 69,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 30,
							"timeEarliest": 1372193280000,
							"timeLatest": 1372201260000,
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
										"value": "1884",
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
										"value": "1916",
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
										"value": "2138",
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
					"elapsedDuration": 3,
					"timeEarliest": 1372195500000,
					"timeLatest": 1372203480000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 59486,
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
							"elapsedDuration": 3,
							"timeEarliest": 1372195500000,
							"timeLatest": 1372203480000,
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
							"id": "SVC_vehicle-400966_request-CNZ04212_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "55.168461538461536",
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
										"value": "36",
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
										"id": "inclusion-CNZ04212",
										"refPhysical": {
											"pk": "AIRPORT FOOD CENTER",
											"attributes": null,
											"constraints": null,
											"lat": -43.48861,
											"lon": 172.56271,
											"id": "loc-CNZ04212",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04212",
										"refPhysical": {
											"pk": "AIRPORT FOOD CENTER",
											"attributes": null,
											"constraints": null,
											"lat": -43.48861,
											"lon": 172.56271,
											"id": "loc-CNZ04212",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04212",
										"refPhysical": {
											"pk": "AIRPORT FOOD CENTER",
											"attributes": null,
											"constraints": null,
											"lat": -43.48861,
											"lon": 172.56271,
											"id": "loc-CNZ04212",
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
								"id": "request-CNZ04212",
								"refLocation": {
									"pk": "AIRPORT FOOD CENTER",
									"attributes": null,
									"constraints": null,
									"lat": -43.48861,
									"lon": 172.56271,
									"id": "loc-CNZ04212",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04212_15_149_MONDAY-Ambient",
					"refLocation": {
						"pk": "AIRPORT FOOD CENTER",
						"attributes": null,
						"constraints": null,
						"lat": -43.48861,
						"lon": 172.56271,
						"id": "loc-CNZ04212",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372195860000,
					"timeLatest": 1372203840000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 61364,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 79,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372195860000,
							"timeLatest": 1372203840000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 6,
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
							"id": "SVC_vehicle-400966_request-CNZ04160_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "248.7026923076923",
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
										"value": "199",
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
										"value": "200",
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
										"value": "245",
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
										"id": "inclusion-CNZ04160",
										"refPhysical": {
											"pk": "BISHOPDALE DISCOUNTER",
											"attributes": null,
											"constraints": null,
											"lat": -43.4905,
											"lon": 172.58073,
											"id": "loc-CNZ04160",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04160",
										"refPhysical": {
											"pk": "BISHOPDALE DISCOUNTER",
											"attributes": null,
											"constraints": null,
											"lat": -43.4905,
											"lon": 172.58073,
											"id": "loc-CNZ04160",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04160",
										"refPhysical": {
											"pk": "BISHOPDALE DISCOUNTER",
											"attributes": null,
											"constraints": null,
											"lat": -43.4905,
											"lon": 172.58073,
											"id": "loc-CNZ04160",
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
										"value": 6,
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
										"value": 7,
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
								"id": "request-CNZ04160",
								"refLocation": {
									"pk": "BISHOPDALE DISCOUNTER",
									"attributes": null,
									"constraints": null,
									"lat": -43.4905,
									"lon": 172.58073,
									"id": "loc-CNZ04160",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04160_15_150_MONDAY-Ambient",
					"refLocation": {
						"pk": "BISHOPDALE DISCOUNTER",
						"attributes": null,
						"constraints": null,
						"lat": -43.4905,
						"lon": 172.58073,
						"id": "loc-CNZ04160",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 40,
					"timeEarliest": 1372196100000,
					"timeLatest": 1372204080000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 62367,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 80,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 40,
							"timeEarliest": 1372196100000,
							"timeLatest": 1372204080000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 71,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 4,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04854_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "3952.8792307692306",
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
										"value": "3311",
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
										"value": "3348",
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
										"value": "3826",
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
										"id": "inclusion-CNZ04854",
										"refPhysical": {
											"pk": "NW Bishopdale",
											"attributes": null,
											"constraints": null,
											"lat": -43.4885,
											"lon": 172.58758,
											"id": "loc-CNZ04854",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ04854",
										"refPhysical": {
											"pk": "NW Bishopdale",
											"attributes": null,
											"constraints": null,
											"lat": -43.4885,
											"lon": 172.58758,
											"id": "loc-CNZ04854",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04854",
										"refPhysical": {
											"pk": "NW Bishopdale",
											"attributes": null,
											"constraints": null,
											"lat": -43.4885,
											"lon": 172.58758,
											"id": "loc-CNZ04854",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 40,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372201200000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 71,
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
										"value": 4,
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
										"value": 72,
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
										"value": 64,
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
										"value": 62,
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
										"value": 4,
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
										"value": 67,
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
										"value": 66,
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
										"value": 62,
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
								"id": "request-CNZ04854",
								"refLocation": {
									"pk": "NW Bishopdale",
									"attributes": null,
									"constraints": null,
									"lat": -43.4885,
									"lon": 172.58758,
									"id": "loc-CNZ04854",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04854_15_151_MONDAY-Ambient",
					"refLocation": {
						"pk": "NW Bishopdale",
						"attributes": null,
						"constraints": null,
						"lat": -43.4885,
						"lon": 172.58758,
						"id": "loc-CNZ04854",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 15,
					"timeEarliest": 1372198680000,
					"timeLatest": 1372206660000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 65416,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 83,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 15,
							"timeEarliest": 1372198680000,
							"timeLatest": 1372206660000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 17,
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
							"id": "SVC_vehicle-400966_request-CNZ04262_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "1040.7234615384616",
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
										"value": "816",
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
										"value": "840",
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
										"value": "959",
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
										"id": "inclusion-CNZ04262",
										"refPhysical": {
											"pk": "RAEWARD FRESH",
											"attributes": null,
											"constraints": null,
											"lat": -43.47839,
											"lon": 172.55484,
											"id": "loc-CNZ04262",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04262",
										"refPhysical": {
											"pk": "RAEWARD FRESH",
											"attributes": null,
											"constraints": null,
											"lat": -43.47839,
											"lon": 172.55484,
											"id": "loc-CNZ04262",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04262",
										"refPhysical": {
											"pk": "RAEWARD FRESH",
											"attributes": null,
											"constraints": null,
											"lat": -43.47839,
											"lon": 172.55484,
											"id": "loc-CNZ04262",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 15,
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
										"value": 17,
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
										"value": 16,
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
										"value": 16,
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
										"value": 15,
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
										"value": 17,
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
										"value": 18,
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
								"id": "request-CNZ04262",
								"refLocation": {
									"pk": "RAEWARD FRESH",
									"attributes": null,
									"constraints": null,
									"lat": -43.47839,
									"lon": 172.55484,
									"id": "loc-CNZ04262",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04262_15_153_MONDAY-Ambient",
					"refLocation": {
						"pk": "RAEWARD FRESH",
						"attributes": null,
						"constraints": null,
						"lat": -43.47839,
						"lon": 172.55484,
						"id": "loc-CNZ04262",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372199880000,
					"timeLatest": 1372207860000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 70134,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 88,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372199880000,
							"timeLatest": 1372207860000,
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
										"value": "100",
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
										"value": "102",
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
										"value": "132",
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
					"elapsedDuration": 10,
					"timeEarliest": 1372200060000,
					"timeLatest": 1372208040000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 70252,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 88,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 10,
							"timeEarliest": 1372200060000,
							"timeLatest": 1372208040000,
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
							"id": "SVC_vehicle-400966_request-CNZ03784_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "146.78307692307692",
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
										"value": "84",
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
										"value": "92",
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
										"value": "118",
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
										"id": "inclusion-CNZ03784",
										"refPhysical": {
											"pk": "SV WAIRAKEI",
											"attributes": null,
											"constraints": null,
											"lat": -43.49911,
											"lon": 172.5852,
											"id": "loc-CNZ03784",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ03784",
										"refPhysical": {
											"pk": "SV WAIRAKEI",
											"attributes": null,
											"constraints": null,
											"lat": -43.49911,
											"lon": 172.5852,
											"id": "loc-CNZ03784",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ03784",
										"refPhysical": {
											"pk": "SV WAIRAKEI",
											"attributes": null,
											"constraints": null,
											"lat": -43.49911,
											"lon": 172.5852,
											"id": "loc-CNZ03784",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 10,
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
										"value": 4,
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
										"value": 4,
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
										"value": 4,
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
								"id": "request-CNZ03784",
								"refLocation": {
									"pk": "SV WAIRAKEI",
									"attributes": null,
									"constraints": null,
									"lat": -43.49911,
									"lon": 172.5852,
									"id": "loc-CNZ03784",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ03784_15_155_MONDAY-Ambient",
					"refLocation": {
						"pk": "SV WAIRAKEI",
						"attributes": null,
						"constraints": null,
						"lat": -43.49911,
						"lon": 172.5852,
						"id": "loc-CNZ03784",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372200720000,
					"timeLatest": 1372208700000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 71121,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 89,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372200720000,
							"timeLatest": 1372208700000,
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
							"id": "SVC_vehicle-400966_request-CNZ04812_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "81.71461538461539",
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
										"value": "56",
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
										"id": "inclusion-CNZ04812",
										"refPhysical": {
											"pk": "NZ JandC TRADE LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.50352,
											"lon": 172.59397,
											"id": "loc-CNZ04812",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04812",
										"refPhysical": {
											"pk": "NZ JandC TRADE LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.50352,
											"lon": 172.59397,
											"id": "loc-CNZ04812",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04812",
										"refPhysical": {
											"pk": "NZ JandC TRADE LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.50352,
											"lon": 172.59397,
											"id": "loc-CNZ04812",
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
								"id": "request-CNZ04812",
								"refLocation": {
									"pk": "NZ JandC TRADE LTD",
									"attributes": null,
									"constraints": null,
									"lat": -43.50352,
									"lon": 172.59397,
									"id": "loc-CNZ04812",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04812_15_156_MONDAY-Ambient",
					"refLocation": {
						"pk": "NZ JandC TRADE LTD",
						"attributes": null,
						"constraints": null,
						"lat": -43.50352,
						"lon": 172.59397,
						"id": "loc-CNZ04812",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 15,
					"timeEarliest": 1372200960000,
					"timeLatest": 1372208940000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 72053,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 90,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 15,
							"timeEarliest": 1372200960000,
							"timeLatest": 1372208940000,
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
							"id": "SVC_vehicle-400966_request-CNZ03797_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "286.9703846153846",
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
										"value": "180",
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
										"value": "196",
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
										"value": "233",
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
										"id": "inclusion-CNZ03797",
										"refPhysical": {
											"pk": "SV FENDALTON VILLAGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.50901,
											"lon": 172.59001,
											"id": "loc-CNZ03797",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ03797",
										"refPhysical": {
											"pk": "SV FENDALTON VILLAGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.50901,
											"lon": 172.59001,
											"id": "loc-CNZ03797",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ03797",
										"refPhysical": {
											"pk": "SV FENDALTON VILLAGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.50901,
											"lon": 172.59001,
											"id": "loc-CNZ03797",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 15,
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
										"value": 7,
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
								"id": "request-CNZ03797",
								"refLocation": {
									"pk": "SV FENDALTON VILLAGE",
									"attributes": null,
									"constraints": null,
									"lat": -43.50901,
									"lon": 172.59001,
									"id": "loc-CNZ03797",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ03797_15_157_MONDAY-Ambient",
					"refLocation": {
						"pk": "SV FENDALTON VILLAGE",
						"attributes": null,
						"constraints": null,
						"lat": -43.50901,
						"lon": 172.59001,
						"id": "loc-CNZ03797",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372201980000,
					"timeLatest": 1372209960000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 73433,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 92,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372201980000,
							"timeLatest": 1372209960000,
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
							"id": "SVC_vehicle-400966_request-CNZ04252_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "11.66",
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
										"value": "5",
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
										"id": "inclusion-CNZ04252",
										"refPhysical": {
											"pk": "WAIRAKEI DISCOUNT DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.50044,
											"lon": 172.58797,
											"id": "loc-CNZ04252",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04252",
										"refPhysical": {
											"pk": "WAIRAKEI DISCOUNT DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.50044,
											"lon": 172.58797,
											"id": "loc-CNZ04252",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04252",
										"refPhysical": {
											"pk": "WAIRAKEI DISCOUNT DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.50044,
											"lon": 172.58797,
											"id": "loc-CNZ04252",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372190400000,
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
								"id": "request-CNZ04252",
								"refLocation": {
									"pk": "WAIRAKEI DISCOUNT DAIRY",
									"attributes": null,
									"constraints": null,
									"lat": -43.50044,
									"lon": 172.58797,
									"id": "loc-CNZ04252",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04252_15_158_MONDAY-Ambient",
					"refLocation": {
						"pk": "WAIRAKEI DISCOUNT DAIRY",
						"attributes": null,
						"constraints": null,
						"lat": -43.50044,
						"lon": 172.58797,
						"id": "loc-CNZ04252",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 40,
					"timeEarliest": 1372202460000,
					"timeLatest": 1372210440000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 77275,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 97,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 40,
							"timeEarliest": 1372202460000,
							"timeLatest": 1372210440000,
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
										"value": "1545",
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
										"value": "1588",
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
										"value": "1822",
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
					"elapsedDuration": 50,
					"timeEarliest": 1372205100000,
					"timeLatest": 1372213080000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 80287,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 101,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 50,
							"timeEarliest": 1372205100000,
							"timeLatest": 1372213080000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 40,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 3,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04942_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "2992.3126923076925",
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
										"value": "2477",
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
										"value": "2527",
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
										"value": "2822",
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
										"id": "inclusion-CNZ04942",
										"refPhysical": {
											"pk": "CD CHURCH CNR",
											"attributes": null,
											"constraints": null,
											"lat": -43.52991,
											"lon": 172.59802,
											"id": "loc-CNZ04942",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ04942",
										"refPhysical": {
											"pk": "CD CHURCH CNR",
											"attributes": null,
											"constraints": null,
											"lat": -43.52991,
											"lon": 172.59802,
											"id": "loc-CNZ04942",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04942",
										"refPhysical": {
											"pk": "CD CHURCH CNR",
											"attributes": null,
											"constraints": null,
											"lat": -43.52991,
											"lon": 172.59802,
											"id": "loc-CNZ04942",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 50,
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
										"value": 40,
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
										"value": 3,
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
										"value": 41,
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
										"value": 3,
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
										"value": 37,
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
										"value": 3,
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
										"value": 36,
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
										"value": 39,
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
										"value": 42,
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
										"value": 36,
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
								"id": "request-CNZ04942",
								"refLocation": {
									"pk": "CD CHURCH CNR",
									"attributes": null,
									"constraints": null,
									"lat": -43.52991,
									"lon": 172.59802,
									"id": "loc-CNZ04942",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04942_15_160_MONDAY-Ambient",
					"refLocation": {
						"pk": "CD CHURCH CNR",
						"attributes": null,
						"constraints": null,
						"lat": -43.52991,
						"lon": 172.59802,
						"id": "loc-CNZ04942",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372208280000,
					"timeLatest": 1372216260000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 82762,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 104,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372208280000,
							"timeLatest": 1372216260000,
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
							"id": "SVC_vehicle-400966_request-CNZ04024_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "53.48",
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
										"value": "25",
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
										"value": "38",
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
										"id": "inclusion-CNZ04024",
										"refPhysical": {
											"pk": "ADDINGTON CONVENIENCE STORE PROP",
											"attributes": null,
											"constraints": null,
											"lat": -43.54409,
											"lon": 172.61093,
											"id": "loc-CNZ04024",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04024",
										"refPhysical": {
											"pk": "ADDINGTON CONVENIENCE STORE PROP",
											"attributes": null,
											"constraints": null,
											"lat": -43.54409,
											"lon": 172.61093,
											"id": "loc-CNZ04024",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04024",
										"refPhysical": {
											"pk": "ADDINGTON CONVENIENCE STORE PROP",
											"attributes": null,
											"constraints": null,
											"lat": -43.54409,
											"lon": 172.61093,
											"id": "loc-CNZ04024",
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
										"value": 4,
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
								"id": "request-CNZ04024",
								"refLocation": {
									"pk": "ADDINGTON CONVENIENCE STORE PROP",
									"attributes": null,
									"constraints": null,
									"lat": -43.54409,
									"lon": 172.61093,
									"id": "loc-CNZ04024",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04024_15_161_MONDAY-Ambient",
					"refLocation": {
						"pk": "ADDINGTON CONVENIENCE STORE PROP",
						"attributes": null,
						"constraints": null,
						"lat": -43.54409,
						"lon": 172.61093,
						"id": "loc-CNZ04024",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372208580000,
					"timeLatest": 1372216560000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 84604,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 106,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372208580000,
							"timeLatest": 1372216560000,
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
									"quantity": 3,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04784_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "115.02038461538461",
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
										"value": "92",
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
										"value": "94",
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
										"value": "109",
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
										"id": "inclusion-CNZ04784",
										"refPhysical": {
											"pk": "CALTEX BLENHEIM ROAD",
											"attributes": null,
											"constraints": null,
											"lat": -43.53753,
											"lon": 172.59658,
											"id": "loc-CNZ04784",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04784",
										"refPhysical": {
											"pk": "CALTEX BLENHEIM ROAD",
											"attributes": null,
											"constraints": null,
											"lat": -43.53753,
											"lon": 172.59658,
											"id": "loc-CNZ04784",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04784",
										"refPhysical": {
											"pk": "CALTEX BLENHEIM ROAD",
											"attributes": null,
											"constraints": null,
											"lat": -43.53753,
											"lon": 172.59658,
											"id": "loc-CNZ04784",
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
										"value": 3,
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
										"value": 3,
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
								"id": "request-CNZ04784",
								"refLocation": {
									"pk": "CALTEX BLENHEIM ROAD",
									"attributes": null,
									"constraints": null,
									"lat": -43.53753,
									"lon": 172.59658,
									"id": "loc-CNZ04784",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04784_15_162_MONDAY-Ambient",
					"refLocation": {
						"pk": "CALTEX BLENHEIM ROAD",
						"attributes": null,
						"constraints": null,
						"lat": -43.53753,
						"lon": 172.59658,
						"id": "loc-CNZ04784",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372208940000,
					"timeLatest": 1372216920000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 85534,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 107,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372208940000,
							"timeLatest": 1372216920000,
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
										"value": "49",
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
										"value": "52",
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
										"value": "72",
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
					"timeEarliest": 1372209420000,
					"timeLatest": 1372217400000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 87759,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 110,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372209420000,
							"timeLatest": 1372217400000,
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
										"value": "19",
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
					"elapsedDuration": 3,
					"timeEarliest": 1372209780000,
					"timeLatest": 1372217760000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 90355,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 113,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372209780000,
							"timeLatest": 1372217760000,
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
							"id": "SVC_vehicle-400966_request-CNZ04227_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "39.75192307692308",
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
										"value": "24",
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
										"id": "inclusion-CNZ04227",
										"refPhysical": {
											"pk": "CUTTS MINI MART",
											"attributes": null,
											"constraints": null,
											"lat": -43.52281,
											"lon": 172.54223,
											"id": "loc-CNZ04227",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04227",
										"refPhysical": {
											"pk": "CUTTS MINI MART",
											"attributes": null,
											"constraints": null,
											"lat": -43.52281,
											"lon": 172.54223,
											"id": "loc-CNZ04227",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04227",
										"refPhysical": {
											"pk": "CUTTS MINI MART",
											"attributes": null,
											"constraints": null,
											"lat": -43.52281,
											"lon": 172.54223,
											"id": "loc-CNZ04227",
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
								"id": "request-CNZ04227",
								"refLocation": {
									"pk": "CUTTS MINI MART",
									"attributes": null,
									"constraints": null,
									"lat": -43.52281,
									"lon": 172.54223,
									"id": "loc-CNZ04227",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04227_15_167_MONDAY-Ambient",
					"refLocation": {
						"pk": "CUTTS MINI MART",
						"attributes": null,
						"constraints": null,
						"lat": -43.52281,
						"lon": 172.54223,
						"id": "loc-CNZ04227",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372210140000,
					"timeLatest": 1372218120000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 92457,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 116,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372210140000,
							"timeLatest": 1372218120000,
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
										"value": "15",
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
					"timeEarliest": 1372210500000,
					"timeLatest": 1372218480000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 92637,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 117,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 35,
							"timeEarliest": 1372210500000,
							"timeLatest": 1372218480000,
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
										"value": "1211",
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
										"value": "1252",
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
										"value": "1414",
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
					"elapsedDuration": 20,
					"timeEarliest": 1372213020000,
					"timeLatest": 1372221000000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 98441,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 124,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 20,
							"timeEarliest": 1372213020000,
							"timeLatest": 1372221000000,
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
										"value": "3174",
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
										"value": "3213",
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
										"value": "3220",
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
					"elapsedDuration": 0,
					"timeEarliest": 1372214760000,
					"timeLatest": 1372239000000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 105896,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 133,
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
					"value": "<summary><loads><load refCommodity=\"MONDAY-Ambient\"><quantity>519</quantity></load><load refCommodity=\"MONDAY-Chilled\"><quantity>43</quantity></load></loads><durations><duration><name>Travel</name><value>133</value></duration><duration><name>Service</name><value>523</value></duration><duration><name>Load_Unload</name><value>20</value></duration></durations></summary>",
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
					"timeEarliest": 1372174200000,
					"timeLatest": 1372182180000,
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
						"service": []
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
					"timeEarliest": 1372175580000,
					"timeLatest": 1372183560000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 1788,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 3,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372175580000,
							"timeLatest": 1372183560000,
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
							"id": "SVC_vehicle-400966_request-CNZ04317_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "126.39499999999998",
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
										"value": "109",
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
										"value": "111",
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
										"value": "120",
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
										"id": "inclusion-CNZ04317",
										"refPhysical": {
											"pk": "SUDIMA HOTEL CHRISTCHURCH",
											"attributes": null,
											"constraints": null,
											"lat": -43.48972,
											"lon": 172.54502,
											"id": "loc-CNZ04317",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04317",
										"refPhysical": {
											"pk": "SUDIMA HOTEL CHRISTCHURCH",
											"attributes": null,
											"constraints": null,
											"lat": -43.48972,
											"lon": 172.54502,
											"id": "loc-CNZ04317",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04317",
										"refPhysical": {
											"pk": "SUDIMA HOTEL CHRISTCHURCH",
											"attributes": null,
											"constraints": null,
											"lat": -43.48972,
											"lon": 172.54502,
											"id": "loc-CNZ04317",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372178700000,
										"timeFinish": 1372190400000
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
								"id": "request-CNZ04317",
								"refLocation": {
									"pk": "SUDIMA HOTEL CHRISTCHURCH",
									"attributes": null,
									"constraints": null,
									"lat": -43.48972,
									"lon": 172.54502,
									"id": "loc-CNZ04317",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04317_15_116_MONDAY-Ambient",
					"refLocation": {
						"pk": "SUDIMA HOTEL CHRISTCHURCH",
						"attributes": null,
						"constraints": null,
						"lat": -43.48972,
						"lon": 172.54502,
						"id": "loc-CNZ04317",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372175880000,
					"timeLatest": 1372183860000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 1821,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 3,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372175880000,
							"timeLatest": 1372183860000,
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
							"id": "SVC_vehicle-400966_request-CNZ04598_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "39.01846153846154",
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
										"value": "8",
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
										"value": "21",
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
										"id": "inclusion-CNZ04598",
										"refPhysical": {
											"pk": "THE COFFEE CLUB HMS HOST",
											"attributes": null,
											"constraints": null,
											"lat": -43.4897,
											"lon": 172.54476,
											"id": "loc-CNZ04598",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04598",
										"refPhysical": {
											"pk": "THE COFFEE CLUB HMS HOST",
											"attributes": null,
											"constraints": null,
											"lat": -43.4897,
											"lon": 172.54476,
											"id": "loc-CNZ04598",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04598",
										"refPhysical": {
											"pk": "THE COFFEE CLUB HMS HOST",
											"attributes": null,
											"constraints": null,
											"lat": -43.4897,
											"lon": 172.54476,
											"id": "loc-CNZ04598",
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
								"id": "request-CNZ04598",
								"refLocation": {
									"pk": "THE COFFEE CLUB HMS HOST",
									"attributes": null,
									"constraints": null,
									"lat": -43.4897,
									"lon": 172.54476,
									"id": "loc-CNZ04598",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04598_15_117_MONDAY-Ambient",
					"refLocation": {
						"pk": "THE COFFEE CLUB HMS HOST",
						"attributes": null,
						"constraints": null,
						"lat": -43.4897,
						"lon": 172.54476,
						"id": "loc-CNZ04598",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372176300000,
					"timeLatest": 1372184280000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 2713,
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
							"timeEarliest": 1372176300000,
							"timeLatest": 1372184280000,
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
							"id": "SVC_vehicle-400966_request-CNZ04550_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "301.8257692307692",
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
										"value": "251",
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
										"value": "256",
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
										"value": "284",
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
										"id": "inclusion-CNZ04550",
										"refPhysical": {
											"pk": "HMS HOST",
											"attributes": null,
											"constraints": null,
											"lat": -43.48525,
											"lon": 172.54758,
											"id": "loc-CNZ04550",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04550",
										"refPhysical": {
											"pk": "HMS HOST",
											"attributes": null,
											"constraints": null,
											"lat": -43.48525,
											"lon": 172.54758,
											"id": "loc-CNZ04550",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04550",
										"refPhysical": {
											"pk": "HMS HOST",
											"attributes": null,
											"constraints": null,
											"lat": -43.48525,
											"lon": 172.54758,
											"id": "loc-CNZ04550",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
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
										"value": 7,
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
								"id": "request-CNZ04550",
								"refLocation": {
									"pk": "HMS HOST",
									"attributes": null,
									"constraints": null,
									"lat": -43.48525,
									"lon": 172.54758,
									"id": "loc-CNZ04550",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04550_15_118_MONDAY-Ambient",
					"refLocation": {
						"pk": "HMS HOST",
						"attributes": null,
						"constraints": null,
						"lat": -43.48525,
						"lon": 172.54758,
						"id": "loc-CNZ04550",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372176720000,
					"timeLatest": 1372184700000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 5426,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 9,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372176720000,
							"timeLatest": 1372184700000,
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
							"id": "SVC_vehicle-400966_request-CNZ04545_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "11.852692307692308",
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
										"value": "-5",
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
										"value": "-2",
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
										"value": "1",
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
										"id": "inclusion-CNZ04545",
										"refPhysical": {
											"pk": "THE PRESERVATORY",
											"attributes": null,
											"constraints": null,
											"lat": -43.49827,
											"lon": 172.56029,
											"id": "loc-CNZ04545",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04545",
										"refPhysical": {
											"pk": "THE PRESERVATORY",
											"attributes": null,
											"constraints": null,
											"lat": -43.49827,
											"lon": 172.56029,
											"id": "loc-CNZ04545",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04545",
										"refPhysical": {
											"pk": "THE PRESERVATORY",
											"attributes": null,
											"constraints": null,
											"lat": -43.49827,
											"lon": 172.56029,
											"id": "loc-CNZ04545",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
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
								"id": "request-CNZ04545",
								"refLocation": {
									"pk": "THE PRESERVATORY",
									"attributes": null,
									"constraints": null,
									"lat": -43.49827,
									"lon": 172.56029,
									"id": "loc-CNZ04545",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04545_15_119_MONDAY-Ambient",
					"refLocation": {
						"pk": "THE PRESERVATORY",
						"attributes": null,
						"constraints": null,
						"lat": -43.49827,
						"lon": 172.56029,
						"id": "loc-CNZ04545",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372177080000,
					"timeLatest": 1372185060000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 6948,
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
							"elapsedDuration": 5,
							"timeEarliest": 1372177080000,
							"timeLatest": 1372185060000,
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
										"value": "42",
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
										"value": "45",
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
										"value": "53",
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
					"timeEarliest": 1372177680000,
					"timeLatest": 1372185660000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 10796,
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
							"elapsedDuration": 3,
							"timeEarliest": 1372177680000,
							"timeLatest": 1372185660000,
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
							"id": "SVC_vehicle-400966_request-CNZ04373_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "57.87538461538462",
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
										"value": "36",
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
										"value": "51",
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
										"id": "inclusion-CNZ04373",
										"refPhysical": {
											"pk": "CAMELLIA COURT REST HOME",
											"attributes": null,
											"constraints": null,
											"lat": -43.49452,
											"lon": 172.6028,
											"id": "loc-CNZ04373",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04373",
										"refPhysical": {
											"pk": "CAMELLIA COURT REST HOME",
											"attributes": null,
											"constraints": null,
											"lat": -43.49452,
											"lon": 172.6028,
											"id": "loc-CNZ04373",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04373",
										"refPhysical": {
											"pk": "CAMELLIA COURT REST HOME",
											"attributes": null,
											"constraints": null,
											"lat": -43.49452,
											"lon": 172.6028,
											"id": "loc-CNZ04373",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
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
								"id": "request-CNZ04373",
								"refLocation": {
									"pk": "CAMELLIA COURT REST HOME",
									"attributes": null,
									"constraints": null,
									"lat": -43.49452,
									"lon": 172.6028,
									"id": "loc-CNZ04373",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04373_15_122_MONDAY-Ambient",
					"refLocation": {
						"pk": "CAMELLIA COURT REST HOME",
						"attributes": null,
						"constraints": null,
						"lat": -43.49452,
						"lon": 172.6028,
						"id": "loc-CNZ04373",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372177860000,
					"timeLatest": 1372185840000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 10893,
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
							"elapsedDuration": 3,
							"timeEarliest": 1372177860000,
							"timeLatest": 1372185840000,
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
							"id": "SVC_vehicle-400966_request-CNZ04371_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "54.78",
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
										"value": "35",
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
										"value": "37",
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
									}]
								},
								"constraints": {
									"constraint": [{
										"name": "fixed-customer",
										"definition": "false",
										"id": "inclusion-CNZ04371",
										"refPhysical": {
											"pk": "GOLDEN AGE RETIREMENT VILLAGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.49421,
											"lon": 172.60221,
											"id": "loc-CNZ04371",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04371",
										"refPhysical": {
											"pk": "GOLDEN AGE RETIREMENT VILLAGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.49421,
											"lon": 172.60221,
											"id": "loc-CNZ04371",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04371",
										"refPhysical": {
											"pk": "GOLDEN AGE RETIREMENT VILLAGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.49421,
											"lon": 172.60221,
											"id": "loc-CNZ04371",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
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
								"id": "request-CNZ04371",
								"refLocation": {
									"pk": "GOLDEN AGE RETIREMENT VILLAGE",
									"attributes": null,
									"constraints": null,
									"lat": -43.49421,
									"lon": 172.60221,
									"id": "loc-CNZ04371",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04371_15_123_MONDAY-Ambient",
					"refLocation": {
						"pk": "GOLDEN AGE RETIREMENT VILLAGE",
						"attributes": null,
						"constraints": null,
						"lat": -43.49421,
						"lon": 172.60221,
						"id": "loc-CNZ04371",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 10,
					"timeEarliest": 1372178280000,
					"timeLatest": 1372186260000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 14587,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 21,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 10,
							"timeEarliest": 1372178280000,
							"timeLatest": 1372186260000,
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
							"id": "SVC_vehicle-400966_request-CNZ04353_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "144.37576923076924",
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
										"value": "101",
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
										"value": "107",
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
										"value": "123",
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
										"id": "inclusion-CNZ04353",
										"refPhysical": {
											"pk": "ST MARGARETS COLLEGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.51939,
											"lon": 172.62173,
											"id": "loc-CNZ04353",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04353",
										"refPhysical": {
											"pk": "ST MARGARETS COLLEGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.51939,
											"lon": 172.62173,
											"id": "loc-CNZ04353",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04353",
										"refPhysical": {
											"pk": "ST MARGARETS COLLEGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.51939,
											"lon": 172.62173,
											"id": "loc-CNZ04353",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 10,
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
										"value": 4,
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
										"value": 4,
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
										"value": 4,
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
								"id": "request-CNZ04353",
								"refLocation": {
									"pk": "ST MARGARETS COLLEGE",
									"attributes": null,
									"constraints": null,
									"lat": -43.51939,
									"lon": 172.62173,
									"id": "loc-CNZ04353",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04353_15_126_MONDAY-Ambient",
					"refLocation": {
						"pk": "ST MARGARETS COLLEGE",
						"attributes": null,
						"constraints": null,
						"lat": -43.51939,
						"lon": 172.62173,
						"id": "loc-CNZ04353",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372179000000,
					"timeLatest": 1372186980000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 16459,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 23,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372179000000,
							"timeLatest": 1372186980000,
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
							"id": "SVC_vehicle-400966_request-CNZ04311_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "46.96769230769231",
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
										"value": "19",
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
										"value": "31",
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
										"id": "inclusion-CNZ04311",
										"refPhysical": {
											"pk": "CHATEAU ON THE PARK",
											"attributes": null,
											"constraints": null,
											"lat": -43.52598,
											"lon": 172.61244,
											"id": "loc-CNZ04311",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04311",
										"refPhysical": {
											"pk": "CHATEAU ON THE PARK",
											"attributes": null,
											"constraints": null,
											"lat": -43.52598,
											"lon": 172.61244,
											"id": "loc-CNZ04311",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04311",
										"refPhysical": {
											"pk": "CHATEAU ON THE PARK",
											"attributes": null,
											"constraints": null,
											"lat": -43.52598,
											"lon": 172.61244,
											"id": "loc-CNZ04311",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 5,
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
								"id": "request-CNZ04311",
								"refLocation": {
									"pk": "CHATEAU ON THE PARK",
									"attributes": null,
									"constraints": null,
									"lat": -43.52598,
									"lon": 172.61244,
									"id": "loc-CNZ04311",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04311_15_127_MONDAY-Ambient",
					"refLocation": {
						"pk": "CHATEAU ON THE PARK",
						"attributes": null,
						"constraints": null,
						"lat": -43.52598,
						"lon": 172.61244,
						"id": "loc-CNZ04311",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372179540000,
					"timeLatest": 1372187520000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 19836,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 27,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372179540000,
							"timeLatest": 1372187520000,
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
										"value": "33",
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
										"value": "35",
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
										"value": "50",
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
					"elapsedDuration": 10,
					"timeEarliest": 1372179720000,
					"timeLatest": 1372187700000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 20030,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 27,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 10,
							"timeEarliest": 1372179720000,
							"timeLatest": 1372187700000,
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
										"value": "1174",
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
										"value": "1184",
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
										"value": "1327",
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
					"timeEarliest": 1372180560000,
					"timeLatest": 1372188540000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 23222,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 31,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372180560000,
							"timeLatest": 1372188540000,
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
									"quantity": 4,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04135_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "254.1923076923077",
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
										"value": "219",
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
										"value": "222",
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
										"value": "244",
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
										"id": "inclusion-CNZ04135",
										"refPhysical": {
											"pk": "HAGLEY NIGHT' DAY",
											"attributes": null,
											"constraints": null,
											"lat": -43.52889,
											"lon": 172.61099,
											"id": "loc-CNZ04135",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04135",
										"refPhysical": {
											"pk": "HAGLEY NIGHT' DAY",
											"attributes": null,
											"constraints": null,
											"lat": -43.52889,
											"lon": 172.61099,
											"id": "loc-CNZ04135",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04135",
										"refPhysical": {
											"pk": "HAGLEY NIGHT' DAY",
											"attributes": null,
											"constraints": null,
											"lat": -43.52889,
											"lon": 172.61099,
											"id": "loc-CNZ04135",
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
										"value": 4,
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
										"value": 4,
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
								"id": "request-CNZ04135",
								"refLocation": {
									"pk": "HAGLEY NIGHT' DAY",
									"attributes": null,
									"constraints": null,
									"lat": -43.52889,
									"lon": 172.61099,
									"id": "loc-CNZ04135",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04135_15_130_MONDAY-Ambient",
					"refLocation": {
						"pk": "HAGLEY NIGHT' DAY",
						"attributes": null,
						"constraints": null,
						"lat": -43.52889,
						"lon": 172.61099,
						"id": "loc-CNZ04135",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372180740000,
					"timeLatest": 1372188720000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 23413,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 31,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372180740000,
							"timeLatest": 1372188720000,
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
							"id": "SVC_vehicle-400966_request-CNZ04389_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "19.38423076923077",
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
										"value": "5",
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
										"value": "6",
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
										"value": "14",
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
										"id": "inclusion-CNZ04389",
										"refPhysical": {
											"pk": "NANDOS RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.52907,
											"lon": 172.60864,
											"id": "loc-CNZ04389",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04389",
										"refPhysical": {
											"pk": "NANDOS RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.52907,
											"lon": 172.60864,
											"id": "loc-CNZ04389",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04389",
										"refPhysical": {
											"pk": "NANDOS RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.52907,
											"lon": 172.60864,
											"id": "loc-CNZ04389",
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
								"id": "request-CNZ04389",
								"refLocation": {
									"pk": "NANDOS RICCARTON",
									"attributes": null,
									"constraints": null,
									"lat": -43.52907,
									"lon": 172.60864,
									"id": "loc-CNZ04389",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04389_15_131_MONDAY-Ambient",
					"refLocation": {
						"pk": "NANDOS RICCARTON",
						"attributes": null,
						"constraints": null,
						"lat": -43.52907,
						"lon": 172.60864,
						"id": "loc-CNZ04389",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372181040000,
					"timeLatest": 1372189020000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 23769,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 31,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372181040000,
							"timeLatest": 1372189020000,
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
										"value": "80",
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
										"value": "82",
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
										"value": "94",
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
					"elapsedDuration": 3,
					"timeEarliest": 1372181400000,
					"timeLatest": 1372189380000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 24258,
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
							"elapsedDuration": 3,
							"timeEarliest": 1372181400000,
							"timeLatest": 1372189380000,
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
							"id": "SVC_vehicle-400966_request-CNZ04460_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "10.19576923076923",
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
										"value": "3",
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
										"value": "5",
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
										"id": "inclusion-CNZ04460",
										"refPhysical": {
											"pk": "KHMER SATAY NOODLE HOUSE (R)",
											"attributes": null,
											"constraints": null,
											"lat": -43.52989,
											"lon": 172.59834,
											"id": "loc-CNZ04460",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04460",
										"refPhysical": {
											"pk": "KHMER SATAY NOODLE HOUSE (R)",
											"attributes": null,
											"constraints": null,
											"lat": -43.52989,
											"lon": 172.59834,
											"id": "loc-CNZ04460",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04460",
										"refPhysical": {
											"pk": "KHMER SATAY NOODLE HOUSE (R)",
											"attributes": null,
											"constraints": null,
											"lat": -43.52989,
											"lon": 172.59834,
											"id": "loc-CNZ04460",
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
								"id": "request-CNZ04460",
								"refLocation": {
									"pk": "KHMER SATAY NOODLE HOUSE (R)",
									"attributes": null,
									"constraints": null,
									"lat": -43.52989,
									"lon": 172.59834,
									"id": "loc-CNZ04460",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04460_15_134_MONDAY-Ambient",
					"refLocation": {
						"pk": "KHMER SATAY NOODLE HOUSE (R)",
						"attributes": null,
						"constraints": null,
						"lat": -43.52989,
						"lon": 172.59834,
						"id": "loc-CNZ04460",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 2,
					"timeEarliest": 1372181640000,
					"timeLatest": 1372189620000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 24643,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 33,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 2,
							"timeEarliest": 1372181640000,
							"timeLatest": 1372189620000,
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
										"value": "17",
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
										"value": "21",
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
					"elapsedDuration": 40,
					"timeEarliest": 1372181940000,
					"timeLatest": 1372189920000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 26959,
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
							"elapsedDuration": 40,
							"timeEarliest": 1372181940000,
							"timeLatest": 1372189920000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 52,
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
							"id": "SVC_vehicle-400966_request-CNZ04864_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "3729.480769230769",
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
										"value": "3200",
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
										"value": "3241",
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
										"value": "3591",
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
										"id": "inclusion-CNZ04864",
										"refPhysical": {
											"pk": "NW Fendalton",
											"attributes": null,
											"constraints": null,
											"lat": -43.51734,
											"lon": 172.58835,
											"id": "loc-CNZ04864",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ04864",
										"refPhysical": {
											"pk": "NW Fendalton",
											"attributes": null,
											"constraints": null,
											"lat": -43.51734,
											"lon": 172.58835,
											"id": "loc-CNZ04864",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04864",
										"refPhysical": {
											"pk": "NW Fendalton",
											"attributes": null,
											"constraints": null,
											"lat": -43.51734,
											"lon": 172.58835,
											"id": "loc-CNZ04864",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 40,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372183200000,
										"timeFinish": 1372201200000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 52,
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
										"value": 53,
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
										"value": 49,
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
										"value": 45,
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
										"value": 49,
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
										"value": 48,
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
										"value": 47,
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
								"id": "request-CNZ04864",
								"refLocation": {
									"pk": "NW Fendalton",
									"attributes": null,
									"constraints": null,
									"lat": -43.51734,
									"lon": 172.58835,
									"id": "loc-CNZ04864",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04864_15_137_MONDAY-Ambient",
					"refLocation": {
						"pk": "NW Fendalton",
						"attributes": null,
						"constraints": null,
						"lat": -43.51734,
						"lon": 172.58835,
						"id": "loc-CNZ04864",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372184460000,
					"timeLatest": 1372192440000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 28641,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 38,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372184460000,
							"timeLatest": 1372192440000,
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
										"value": "11",
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
										"value": "15",
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
					"elapsedDuration": 2,
					"timeEarliest": 1372184820000,
					"timeLatest": 1372192800000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 29410,
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
							"elapsedDuration": 2,
							"timeEarliest": 1372184820000,
							"timeLatest": 1372192800000,
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
							"id": "SVC_vehicle-400966_request-CNZ04380_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "42.736538461538466",
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
										"value": "19",
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
										"value": "21",
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
										"id": "inclusion-CNZ04380",
										"refPhysical": {
											"pk": "Kauri Lodge Rest Home",
											"attributes": null,
											"constraints": null,
											"lat": -43.5301,
											"lon": 172.59551,
											"id": "loc-CNZ04380",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04380",
										"refPhysical": {
											"pk": "Kauri Lodge Rest Home",
											"attributes": null,
											"constraints": null,
											"lat": -43.5301,
											"lon": 172.59551,
											"id": "loc-CNZ04380",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04380",
										"refPhysical": {
											"pk": "Kauri Lodge Rest Home",
											"attributes": null,
											"constraints": null,
											"lat": -43.5301,
											"lon": 172.59551,
											"id": "loc-CNZ04380",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 2,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372178700000,
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
								"id": "request-CNZ04380",
								"refLocation": {
									"pk": "Kauri Lodge Rest Home",
									"attributes": null,
									"constraints": null,
									"lat": -43.5301,
									"lon": 172.59551,
									"id": "loc-CNZ04380",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04380_15_139_MONDAY-Ambient",
					"refLocation": {
						"pk": "Kauri Lodge Rest Home",
						"attributes": null,
						"constraints": null,
						"lat": -43.5301,
						"lon": 172.59551,
						"id": "loc-CNZ04380",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 2,
					"timeEarliest": 1372184940000,
					"timeLatest": 1372192920000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 29714,
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
							"elapsedDuration": 2,
							"timeEarliest": 1372184940000,
							"timeLatest": 1372192920000,
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
							"id": "SVC_vehicle-400966_request-CNZ04216_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "50.20269230769231",
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
										"value": "31",
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
										"value": "33",
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
										"value": "44",
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
										"id": "inclusion-CNZ04216",
										"refPhysical": {
											"pk": "NARESH DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.53039,
											"lon": 172.59182,
											"id": "loc-CNZ04216",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04216",
										"refPhysical": {
											"pk": "NARESH DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.53039,
											"lon": 172.59182,
											"id": "loc-CNZ04216",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04216",
										"refPhysical": {
											"pk": "NARESH DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.53039,
											"lon": 172.59182,
											"id": "loc-CNZ04216",
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
								"id": "request-CNZ04216",
								"refLocation": {
									"pk": "NARESH DAIRY",
									"attributes": null,
									"constraints": null,
									"lat": -43.53039,
									"lon": 172.59182,
									"id": "loc-CNZ04216",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04216_15_140_MONDAY-Ambient",
					"refLocation": {
						"pk": "NARESH DAIRY",
						"attributes": null,
						"constraints": null,
						"lat": -43.53039,
						"lon": 172.59182,
						"id": "loc-CNZ04216",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 2,
					"timeEarliest": 1372185180000,
					"timeLatest": 1372193160000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 31113,
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
							"timeEarliest": 1372185180000,
							"timeLatest": 1372193160000,
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
										"value": "27",
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
										"value": "34",
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
					"elapsedDuration": 2,
					"timeEarliest": 1372185480000,
					"timeLatest": 1372193460000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 33018,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 44,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 2,
							"timeEarliest": 1372185480000,
							"timeLatest": 1372193460000,
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
							"id": "SVC_vehicle-400966_request-CNZ04601_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "21.40423076923077",
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
										"value": "17",
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
										"id": "inclusion-CNZ04601",
										"refPhysical": {
											"pk": "THE COFFEE CLUB RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.5299,
											"lon": 172.59812,
											"id": "loc-CNZ04601",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04601",
										"refPhysical": {
											"pk": "THE COFFEE CLUB RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.5299,
											"lon": 172.59812,
											"id": "loc-CNZ04601",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04601",
										"refPhysical": {
											"pk": "THE COFFEE CLUB RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.5299,
											"lon": 172.59812,
											"id": "loc-CNZ04601",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 2,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372188600000,
										"timeFinish": 1372192800000
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
								"id": "request-CNZ04601",
								"refLocation": {
									"pk": "THE COFFEE CLUB RICCARTON",
									"attributes": null,
									"constraints": null,
									"lat": -43.5299,
									"lon": 172.59812,
									"id": "loc-CNZ04601",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04601_15_142_MONDAY-Ambient",
					"refLocation": {
						"pk": "THE COFFEE CLUB RICCARTON",
						"attributes": null,
						"constraints": null,
						"lat": -43.5299,
						"lon": 172.59812,
						"id": "loc-CNZ04601",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 60,
					"timeEarliest": 1372185600000,
					"timeLatest": 1372193580000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 33133,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 44,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 60,
							"timeEarliest": 1372185600000,
							"timeLatest": 1372193580000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 125,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 11,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04839_MONDAY-Ambient",
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
										"value": "2196",
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
										"value": "2252",
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
										"value": "3164",
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
										"id": "inclusion-CNZ04839",
										"refPhysical": {
											"pk": "PNS RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.52988,
											"lon": 172.59835,
											"id": "loc-CNZ04839",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ04839",
										"refPhysical": {
											"pk": "PNS RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.52988,
											"lon": 172.59835,
											"id": "loc-CNZ04839",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04839",
										"refPhysical": {
											"pk": "PNS RICCARTON",
											"attributes": null,
											"constraints": null,
											"lat": -43.52988,
											"lon": 172.59835,
											"id": "loc-CNZ04839",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 60,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372186800000,
										"timeFinish": 1372194000000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 125,
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
										"value": 11,
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
										"value": 127,
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
										"value": 128,
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
										"value": 11,
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
										"value": 136,
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
										"value": 11,
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
										"value": 128,
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
										"value": 115,
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
										"value": 109,
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
								"id": "request-CNZ04839",
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
					"id": "VIS_loc-CNZ04839_15_143_MONDAY-Ambient",
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
					"elapsedDuration": 20,
					"timeEarliest": 1372189740000,
					"timeLatest": 1372197720000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 40588,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 53,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 20,
							"timeEarliest": 1372189740000,
							"timeLatest": 1372197720000,
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
					"id": "VIS_loc-Christchurch_15_666_MONDAY-Ambient",
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
					"elapsedDuration": 3,
					"timeEarliest": 1372191540000,
					"timeLatest": 1372199520000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 48786,
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
							"elapsedDuration": 3,
							"timeEarliest": 1372191540000,
							"timeLatest": 1372199520000,
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
										"value": "8",
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
										"value": "9",
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
					"timeEarliest": 1372191780000,
					"timeLatest": 1372199760000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 49871,
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
							"elapsedDuration": 20,
							"timeEarliest": 1372191780000,
							"timeLatest": 1372199760000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 16,
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
							"id": "SVC_vehicle-400966_request-CNZ04267_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "917.8619230769231",
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
										"value": "717",
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
										"value": "741",
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
										"value": "836",
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
										"id": "inclusion-CNZ04267",
										"refPhysical": {
											"pk": "RAEWARD FRESH TOWER JUNCTION",
											"attributes": null,
											"constraints": null,
											"lat": -43.54027,
											"lon": 172.60659,
											"id": "loc-CNZ04267",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04267",
										"refPhysical": {
											"pk": "RAEWARD FRESH TOWER JUNCTION",
											"attributes": null,
											"constraints": null,
											"lat": -43.54027,
											"lon": 172.60659,
											"id": "loc-CNZ04267",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04267",
										"refPhysical": {
											"pk": "RAEWARD FRESH TOWER JUNCTION",
											"attributes": null,
											"constraints": null,
											"lat": -43.54027,
											"lon": 172.60659,
											"id": "loc-CNZ04267",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 20,
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
										"value": 16,
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
										"value": 14,
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
										"value": 13,
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
										"value": 13,
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
										"value": 14,
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
										"value": 22,
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
								"id": "request-CNZ04267",
								"refLocation": {
									"pk": "RAEWARD FRESH TOWER JUNCTION",
									"attributes": null,
									"constraints": null,
									"lat": -43.54027,
									"lon": 172.60659,
									"id": "loc-CNZ04267",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04267_15_146_MONDAY-Ambient",
					"refLocation": {
						"pk": "RAEWARD FRESH TOWER JUNCTION",
						"attributes": null,
						"constraints": null,
						"lat": -43.54027,
						"lon": 172.60659,
						"id": "loc-CNZ04267",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 30,
					"timeEarliest": 1372193280000,
					"timeLatest": 1372201260000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 53747,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 69,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 30,
							"timeEarliest": 1372193280000,
							"timeLatest": 1372201260000,
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
										"value": "1884",
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
										"value": "1916",
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
										"value": "2138",
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
					"elapsedDuration": 3,
					"timeEarliest": 1372195500000,
					"timeLatest": 1372203480000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 59486,
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
							"elapsedDuration": 3,
							"timeEarliest": 1372195500000,
							"timeLatest": 1372203480000,
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
							"id": "SVC_vehicle-400966_request-CNZ04212_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "55.168461538461536",
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
										"value": "36",
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
										"id": "inclusion-CNZ04212",
										"refPhysical": {
											"pk": "AIRPORT FOOD CENTER",
											"attributes": null,
											"constraints": null,
											"lat": -43.48861,
											"lon": 172.56271,
											"id": "loc-CNZ04212",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04212",
										"refPhysical": {
											"pk": "AIRPORT FOOD CENTER",
											"attributes": null,
											"constraints": null,
											"lat": -43.48861,
											"lon": 172.56271,
											"id": "loc-CNZ04212",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04212",
										"refPhysical": {
											"pk": "AIRPORT FOOD CENTER",
											"attributes": null,
											"constraints": null,
											"lat": -43.48861,
											"lon": 172.56271,
											"id": "loc-CNZ04212",
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
								"id": "request-CNZ04212",
								"refLocation": {
									"pk": "AIRPORT FOOD CENTER",
									"attributes": null,
									"constraints": null,
									"lat": -43.48861,
									"lon": 172.56271,
									"id": "loc-CNZ04212",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04212_15_149_MONDAY-Ambient",
					"refLocation": {
						"pk": "AIRPORT FOOD CENTER",
						"attributes": null,
						"constraints": null,
						"lat": -43.48861,
						"lon": 172.56271,
						"id": "loc-CNZ04212",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372195860000,
					"timeLatest": 1372203840000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 61364,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 79,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372195860000,
							"timeLatest": 1372203840000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 6,
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
							"id": "SVC_vehicle-400966_request-CNZ04160_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "248.7026923076923",
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
										"value": "199",
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
										"value": "200",
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
										"value": "245",
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
										"id": "inclusion-CNZ04160",
										"refPhysical": {
											"pk": "BISHOPDALE DISCOUNTER",
											"attributes": null,
											"constraints": null,
											"lat": -43.4905,
											"lon": 172.58073,
											"id": "loc-CNZ04160",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04160",
										"refPhysical": {
											"pk": "BISHOPDALE DISCOUNTER",
											"attributes": null,
											"constraints": null,
											"lat": -43.4905,
											"lon": 172.58073,
											"id": "loc-CNZ04160",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04160",
										"refPhysical": {
											"pk": "BISHOPDALE DISCOUNTER",
											"attributes": null,
											"constraints": null,
											"lat": -43.4905,
											"lon": 172.58073,
											"id": "loc-CNZ04160",
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
										"value": 6,
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
										"value": 7,
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
								"id": "request-CNZ04160",
								"refLocation": {
									"pk": "BISHOPDALE DISCOUNTER",
									"attributes": null,
									"constraints": null,
									"lat": -43.4905,
									"lon": 172.58073,
									"id": "loc-CNZ04160",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04160_15_150_MONDAY-Ambient",
					"refLocation": {
						"pk": "BISHOPDALE DISCOUNTER",
						"attributes": null,
						"constraints": null,
						"lat": -43.4905,
						"lon": 172.58073,
						"id": "loc-CNZ04160",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 40,
					"timeEarliest": 1372196100000,
					"timeLatest": 1372204080000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 62367,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 80,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 40,
							"timeEarliest": 1372196100000,
							"timeLatest": 1372204080000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 71,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 4,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04854_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "3952.8792307692306",
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
										"value": "3311",
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
										"value": "3348",
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
										"value": "3826",
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
										"id": "inclusion-CNZ04854",
										"refPhysical": {
											"pk": "NW Bishopdale",
											"attributes": null,
											"constraints": null,
											"lat": -43.4885,
											"lon": 172.58758,
											"id": "loc-CNZ04854",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ04854",
										"refPhysical": {
											"pk": "NW Bishopdale",
											"attributes": null,
											"constraints": null,
											"lat": -43.4885,
											"lon": 172.58758,
											"id": "loc-CNZ04854",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04854",
										"refPhysical": {
											"pk": "NW Bishopdale",
											"attributes": null,
											"constraints": null,
											"lat": -43.4885,
											"lon": 172.58758,
											"id": "loc-CNZ04854",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 40,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372194000000,
										"timeFinish": 1372201200000
									}]
								},
								"commodities": {
									"commodity": [{
										"payloads": null,
										"value": 71,
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
										"value": 4,
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
										"value": 72,
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
										"value": 64,
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
										"value": 62,
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
										"value": 4,
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
										"value": 67,
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
										"value": 66,
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
										"value": 62,
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
								"id": "request-CNZ04854",
								"refLocation": {
									"pk": "NW Bishopdale",
									"attributes": null,
									"constraints": null,
									"lat": -43.4885,
									"lon": 172.58758,
									"id": "loc-CNZ04854",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04854_15_151_MONDAY-Ambient",
					"refLocation": {
						"pk": "NW Bishopdale",
						"attributes": null,
						"constraints": null,
						"lat": -43.4885,
						"lon": 172.58758,
						"id": "loc-CNZ04854",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 15,
					"timeEarliest": 1372198680000,
					"timeLatest": 1372206660000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 65416,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 83,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 15,
							"timeEarliest": 1372198680000,
							"timeLatest": 1372206660000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 17,
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
							"id": "SVC_vehicle-400966_request-CNZ04262_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "1040.7234615384616",
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
										"value": "816",
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
										"value": "840",
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
										"value": "959",
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
										"id": "inclusion-CNZ04262",
										"refPhysical": {
											"pk": "RAEWARD FRESH",
											"attributes": null,
											"constraints": null,
											"lat": -43.47839,
											"lon": 172.55484,
											"id": "loc-CNZ04262",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04262",
										"refPhysical": {
											"pk": "RAEWARD FRESH",
											"attributes": null,
											"constraints": null,
											"lat": -43.47839,
											"lon": 172.55484,
											"id": "loc-CNZ04262",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04262",
										"refPhysical": {
											"pk": "RAEWARD FRESH",
											"attributes": null,
											"constraints": null,
											"lat": -43.47839,
											"lon": 172.55484,
											"id": "loc-CNZ04262",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 15,
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
										"value": 17,
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
										"value": 16,
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
										"value": 16,
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
										"value": 15,
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
										"value": 17,
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
										"value": 18,
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
								"id": "request-CNZ04262",
								"refLocation": {
									"pk": "RAEWARD FRESH",
									"attributes": null,
									"constraints": null,
									"lat": -43.47839,
									"lon": 172.55484,
									"id": "loc-CNZ04262",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04262_15_153_MONDAY-Ambient",
					"refLocation": {
						"pk": "RAEWARD FRESH",
						"attributes": null,
						"constraints": null,
						"lat": -43.47839,
						"lon": 172.55484,
						"id": "loc-CNZ04262",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372199880000,
					"timeLatest": 1372207860000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 70134,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 88,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372199880000,
							"timeLatest": 1372207860000,
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
										"value": "100",
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
										"value": "102",
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
										"value": "132",
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
					"elapsedDuration": 10,
					"timeEarliest": 1372200060000,
					"timeLatest": 1372208040000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 70252,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 88,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 10,
							"timeEarliest": 1372200060000,
							"timeLatest": 1372208040000,
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
							"id": "SVC_vehicle-400966_request-CNZ03784_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "146.78307692307692",
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
										"value": "84",
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
										"value": "92",
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
										"value": "118",
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
										"id": "inclusion-CNZ03784",
										"refPhysical": {
											"pk": "SV WAIRAKEI",
											"attributes": null,
											"constraints": null,
											"lat": -43.49911,
											"lon": 172.5852,
											"id": "loc-CNZ03784",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ03784",
										"refPhysical": {
											"pk": "SV WAIRAKEI",
											"attributes": null,
											"constraints": null,
											"lat": -43.49911,
											"lon": 172.5852,
											"id": "loc-CNZ03784",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ03784",
										"refPhysical": {
											"pk": "SV WAIRAKEI",
											"attributes": null,
											"constraints": null,
											"lat": -43.49911,
											"lon": 172.5852,
											"id": "loc-CNZ03784",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 10,
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
										"value": 4,
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
										"value": 4,
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
										"value": 4,
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
								"id": "request-CNZ03784",
								"refLocation": {
									"pk": "SV WAIRAKEI",
									"attributes": null,
									"constraints": null,
									"lat": -43.49911,
									"lon": 172.5852,
									"id": "loc-CNZ03784",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ03784_15_155_MONDAY-Ambient",
					"refLocation": {
						"pk": "SV WAIRAKEI",
						"attributes": null,
						"constraints": null,
						"lat": -43.49911,
						"lon": 172.5852,
						"id": "loc-CNZ03784",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372200720000,
					"timeLatest": 1372208700000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 71121,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 89,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372200720000,
							"timeLatest": 1372208700000,
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
							"id": "SVC_vehicle-400966_request-CNZ04812_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "81.71461538461539",
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
										"value": "56",
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
										"id": "inclusion-CNZ04812",
										"refPhysical": {
											"pk": "NZ JandC TRADE LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.50352,
											"lon": 172.59397,
											"id": "loc-CNZ04812",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04812",
										"refPhysical": {
											"pk": "NZ JandC TRADE LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.50352,
											"lon": 172.59397,
											"id": "loc-CNZ04812",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04812",
										"refPhysical": {
											"pk": "NZ JandC TRADE LTD",
											"attributes": null,
											"constraints": null,
											"lat": -43.50352,
											"lon": 172.59397,
											"id": "loc-CNZ04812",
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
								"id": "request-CNZ04812",
								"refLocation": {
									"pk": "NZ JandC TRADE LTD",
									"attributes": null,
									"constraints": null,
									"lat": -43.50352,
									"lon": 172.59397,
									"id": "loc-CNZ04812",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04812_15_156_MONDAY-Ambient",
					"refLocation": {
						"pk": "NZ JandC TRADE LTD",
						"attributes": null,
						"constraints": null,
						"lat": -43.50352,
						"lon": 172.59397,
						"id": "loc-CNZ04812",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 15,
					"timeEarliest": 1372200960000,
					"timeLatest": 1372208940000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 72053,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 90,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 15,
							"timeEarliest": 1372200960000,
							"timeLatest": 1372208940000,
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
							"id": "SVC_vehicle-400966_request-CNZ03797_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "286.9703846153846",
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
										"value": "180",
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
										"value": "196",
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
										"value": "233",
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
										"id": "inclusion-CNZ03797",
										"refPhysical": {
											"pk": "SV FENDALTON VILLAGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.50901,
											"lon": 172.59001,
											"id": "loc-CNZ03797",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ03797",
										"refPhysical": {
											"pk": "SV FENDALTON VILLAGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.50901,
											"lon": 172.59001,
											"id": "loc-CNZ03797",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ03797",
										"refPhysical": {
											"pk": "SV FENDALTON VILLAGE",
											"attributes": null,
											"constraints": null,
											"lat": -43.50901,
											"lon": 172.59001,
											"id": "loc-CNZ03797",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 15,
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
										"value": 7,
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
								"id": "request-CNZ03797",
								"refLocation": {
									"pk": "SV FENDALTON VILLAGE",
									"attributes": null,
									"constraints": null,
									"lat": -43.50901,
									"lon": 172.59001,
									"id": "loc-CNZ03797",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ03797_15_157_MONDAY-Ambient",
					"refLocation": {
						"pk": "SV FENDALTON VILLAGE",
						"attributes": null,
						"constraints": null,
						"lat": -43.50901,
						"lon": 172.59001,
						"id": "loc-CNZ03797",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372201980000,
					"timeLatest": 1372209960000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 73433,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 92,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372201980000,
							"timeLatest": 1372209960000,
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
							"id": "SVC_vehicle-400966_request-CNZ04252_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "11.66",
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
										"value": "5",
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
										"id": "inclusion-CNZ04252",
										"refPhysical": {
											"pk": "WAIRAKEI DISCOUNT DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.50044,
											"lon": 172.58797,
											"id": "loc-CNZ04252",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04252",
										"refPhysical": {
											"pk": "WAIRAKEI DISCOUNT DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.50044,
											"lon": 172.58797,
											"id": "loc-CNZ04252",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04252",
										"refPhysical": {
											"pk": "WAIRAKEI DISCOUNT DAIRY",
											"attributes": null,
											"constraints": null,
											"lat": -43.50044,
											"lon": 172.58797,
											"id": "loc-CNZ04252",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 3,
								"windows": {
									"window": [{
										"payloads": null,
										"timeStart": 1372190400000,
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
								"id": "request-CNZ04252",
								"refLocation": {
									"pk": "WAIRAKEI DISCOUNT DAIRY",
									"attributes": null,
									"constraints": null,
									"lat": -43.50044,
									"lon": 172.58797,
									"id": "loc-CNZ04252",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04252_15_158_MONDAY-Ambient",
					"refLocation": {
						"pk": "WAIRAKEI DISCOUNT DAIRY",
						"attributes": null,
						"constraints": null,
						"lat": -43.50044,
						"lon": 172.58797,
						"id": "loc-CNZ04252",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 40,
					"timeEarliest": 1372202460000,
					"timeLatest": 1372210440000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 77275,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 97,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 40,
							"timeEarliest": 1372202460000,
							"timeLatest": 1372210440000,
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
										"value": "1545",
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
										"value": "1588",
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
										"value": "1822",
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
					"elapsedDuration": 50,
					"timeEarliest": 1372205100000,
					"timeLatest": 1372213080000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 80287,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 101,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 50,
							"timeEarliest": 1372205100000,
							"timeLatest": 1372213080000,
							"loads": {
								"load": [{
									"payloads": null,
									"quantity": 40,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Ambient",
										"unitWhole": "items",
										"id": "MONDAY-Ambient"
									}
								},
								{
									"payloads": null,
									"quantity": 3,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04942_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "2992.3126923076925",
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
										"value": "2477",
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
										"value": "2527",
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
										"value": "2822",
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
										"id": "inclusion-CNZ04942",
										"refPhysical": {
											"pk": "CD CHURCH CNR",
											"attributes": null,
											"constraints": null,
											"lat": -43.52991,
											"lon": 172.59802,
											"id": "loc-CNZ04942",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-earliness-CNZ04942",
										"refPhysical": {
											"pk": "CD CHURCH CNR",
											"attributes": null,
											"constraints": null,
											"lat": -43.52991,
											"lon": 172.59802,
											"id": "loc-CNZ04942",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>120</duration><min_penalty>0</min_penalty><max_penalty>2</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04942",
										"refPhysical": {
											"pk": "CD CHURCH CNR",
											"attributes": null,
											"constraints": null,
											"lat": -43.52991,
											"lon": 172.59802,
											"id": "loc-CNZ04942",
											"linehaulCost": null
										}
									}]
								},
								"elapsedService": 50,
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
										"value": 40,
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
										"value": 3,
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
										"value": 41,
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
										"value": 3,
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
										"value": 37,
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
										"value": 3,
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
										"value": 36,
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
										"value": 39,
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
										"value": 42,
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
										"value": 36,
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
								"id": "request-CNZ04942",
								"refLocation": {
									"pk": "CD CHURCH CNR",
									"attributes": null,
									"constraints": null,
									"lat": -43.52991,
									"lon": 172.59802,
									"id": "loc-CNZ04942",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04942_15_160_MONDAY-Ambient",
					"refLocation": {
						"pk": "CD CHURCH CNR",
						"attributes": null,
						"constraints": null,
						"lat": -43.52991,
						"lon": 172.59802,
						"id": "loc-CNZ04942",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 3,
					"timeEarliest": 1372208280000,
					"timeLatest": 1372216260000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 82762,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 104,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372208280000,
							"timeLatest": 1372216260000,
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
							"id": "SVC_vehicle-400966_request-CNZ04024_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "53.48",
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
										"value": "25",
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
										"value": "38",
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
										"id": "inclusion-CNZ04024",
										"refPhysical": {
											"pk": "ADDINGTON CONVENIENCE STORE PROP",
											"attributes": null,
											"constraints": null,
											"lat": -43.54409,
											"lon": 172.61093,
											"id": "loc-CNZ04024",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04024",
										"refPhysical": {
											"pk": "ADDINGTON CONVENIENCE STORE PROP",
											"attributes": null,
											"constraints": null,
											"lat": -43.54409,
											"lon": 172.61093,
											"id": "loc-CNZ04024",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04024",
										"refPhysical": {
											"pk": "ADDINGTON CONVENIENCE STORE PROP",
											"attributes": null,
											"constraints": null,
											"lat": -43.54409,
											"lon": 172.61093,
											"id": "loc-CNZ04024",
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
										"value": 4,
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
								"id": "request-CNZ04024",
								"refLocation": {
									"pk": "ADDINGTON CONVENIENCE STORE PROP",
									"attributes": null,
									"constraints": null,
									"lat": -43.54409,
									"lon": 172.61093,
									"id": "loc-CNZ04024",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04024_15_161_MONDAY-Ambient",
					"refLocation": {
						"pk": "ADDINGTON CONVENIENCE STORE PROP",
						"attributes": null,
						"constraints": null,
						"lat": -43.54409,
						"lon": 172.61093,
						"id": "loc-CNZ04024",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372208580000,
					"timeLatest": 1372216560000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 84604,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 106,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372208580000,
							"timeLatest": 1372216560000,
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
									"quantity": 3,
									"refCommodity": {
										"payloads": null,
										"title": "MONDAY-Chilled",
										"unitWhole": "items",
										"id": "MONDAY-Chilled"
									}
								}]
							},
							"selections": null,
							"id": "SVC_vehicle-400966_request-CNZ04784_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "115.02038461538461",
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
										"value": "92",
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
										"value": "94",
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
										"value": "109",
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
										"id": "inclusion-CNZ04784",
										"refPhysical": {
											"pk": "CALTEX BLENHEIM ROAD",
											"attributes": null,
											"constraints": null,
											"lat": -43.53753,
											"lon": 172.59658,
											"id": "loc-CNZ04784",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04784",
										"refPhysical": {
											"pk": "CALTEX BLENHEIM ROAD",
											"attributes": null,
											"constraints": null,
											"lat": -43.53753,
											"lon": 172.59658,
											"id": "loc-CNZ04784",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04784",
										"refPhysical": {
											"pk": "CALTEX BLENHEIM ROAD",
											"attributes": null,
											"constraints": null,
											"lat": -43.53753,
											"lon": 172.59658,
											"id": "loc-CNZ04784",
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
										"value": 3,
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
										"value": 3,
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
								"id": "request-CNZ04784",
								"refLocation": {
									"pk": "CALTEX BLENHEIM ROAD",
									"attributes": null,
									"constraints": null,
									"lat": -43.53753,
									"lon": 172.59658,
									"id": "loc-CNZ04784",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04784_15_162_MONDAY-Ambient",
					"refLocation": {
						"pk": "CALTEX BLENHEIM ROAD",
						"attributes": null,
						"constraints": null,
						"lat": -43.53753,
						"lon": 172.59658,
						"id": "loc-CNZ04784",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372208940000,
					"timeLatest": 1372216920000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 85534,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 107,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372208940000,
							"timeLatest": 1372216920000,
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
										"value": "49",
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
										"value": "52",
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
										"value": "72",
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
					"timeEarliest": 1372209420000,
					"timeLatest": 1372217400000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 87759,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 110,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372209420000,
							"timeLatest": 1372217400000,
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
										"value": "19",
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
					"elapsedDuration": 3,
					"timeEarliest": 1372209780000,
					"timeLatest": 1372217760000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 90355,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 113,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 3,
							"timeEarliest": 1372209780000,
							"timeLatest": 1372217760000,
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
							"id": "SVC_vehicle-400966_request-CNZ04227_MONDAY-Ambient",
							"refRequest": {
								"pk": null,
								"attributes": {
									"attribute": [{
										"payloads": null,
										"value": "39.75192307692308",
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
										"value": "24",
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
										"id": "inclusion-CNZ04227",
										"refPhysical": {
											"pk": "CUTTS MINI MART",
											"attributes": null,
											"constraints": null,
											"lat": -43.52281,
											"lon": 172.54223,
											"id": "loc-CNZ04227",
											"linehaulCost": null
										}
									},
									{
										"name": "max-earliness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-earliness-CNZ04227",
										"refPhysical": {
											"pk": "CUTTS MINI MART",
											"attributes": null,
											"constraints": null,
											"lat": -43.52281,
											"lon": 172.54223,
											"id": "loc-CNZ04227",
											"linehaulCost": null
										}
									},
									{
										"name": "max-tardiness",
										"definition": "<softtime><duration>240</duration><min_penalty>0</min_penalty><max_penalty>4</max_penalty></softtime>",
										"id": "max-tardiness-CNZ04227",
										"refPhysical": {
											"pk": "CUTTS MINI MART",
											"attributes": null,
											"constraints": null,
											"lat": -43.52281,
											"lon": 172.54223,
											"id": "loc-CNZ04227",
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
								"id": "request-CNZ04227",
								"refLocation": {
									"pk": "CUTTS MINI MART",
									"attributes": null,
									"constraints": null,
									"lat": -43.52281,
									"lon": 172.54223,
									"id": "loc-CNZ04227",
									"linehaulCost": null
								}
							},
							"fixed": null
						}]
					},
					"selections": null,
					"id": "VIS_loc-CNZ04227_15_167_MONDAY-Ambient",
					"refLocation": {
						"pk": "CUTTS MINI MART",
						"attributes": null,
						"constraints": null,
						"lat": -43.52281,
						"lon": 172.54223,
						"id": "loc-CNZ04227",
						"linehaulCost": null
					},
					"stopNum": null,
					"isSplitVisit": false
				},
				{
					"payloads": null,
					"elapsedDuration": 5,
					"timeEarliest": 1372210140000,
					"timeLatest": 1372218120000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 92457,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 116,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 5,
							"timeEarliest": 1372210140000,
							"timeLatest": 1372218120000,
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
										"value": "15",
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
					"timeEarliest": 1372210500000,
					"timeLatest": 1372218480000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 92637,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 117,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 35,
							"timeEarliest": 1372210500000,
							"timeLatest": 1372218480000,
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
										"value": "1211",
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
										"value": "1252",
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
										"value": "1414",
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
					"elapsedDuration": 20,
					"timeEarliest": 1372213020000,
					"timeLatest": 1372221000000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 98441,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 124,
							"typeMetric": "METRIC_TIME"
						}]
					},
					"services": {
						"service": [{
							"payloads": null,
							"elapsedDuration": 20,
							"timeEarliest": 1372213020000,
							"timeLatest": 1372221000000,
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
										"value": "3174",
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
										"value": "3213",
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
										"value": "3220",
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
					"elapsedDuration": 0,
					"timeEarliest": 1372214760000,
					"timeLatest": 1372239000000,
					"travels": {
						"travel": [{
							"payloads": null,
							"quantity": 105896,
							"typeMetric": "METRIC_DISTANCE"
						},
						{
							"payloads": null,
							"quantity": 133,
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
		"unscheduled": []
	}
}