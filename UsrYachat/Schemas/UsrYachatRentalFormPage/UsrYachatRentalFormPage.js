define("UsrYachatRentalFormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "StartDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.UsrYachatRentalDS_UsrStartDate_8urg3x7",
					"labelPosition": "above",
					"control": "$UsrYachatRentalDS_UsrStartDate_8urg3x7"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EndDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.UsrYachatRentalDS_UsrEndDate_t0uc2im",
					"labelPosition": "above",
					"control": "$UsrYachatRentalDS_UsrEndDate_t0uc2im"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Customer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrYachatRentalDS_UsrCustomer_8qqybc5",
					"labelPosition": "above",
					"control": "$UsrYachatRentalDS_UsrCustomer_8qqybc5",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_twdi40l",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_twdi40l_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Customer",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TotalAmount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrYachatRentalDS_UsrAmount_0q6a5xx",
					"labelPosition": "above",
					"control": "$UsrYachatRentalDS_UsrAmount_0q6a5xx"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrYachatRentalDS_UsrComment_4j6gspp",
					"labelPosition": "above",
					"control": "$UsrYachatRentalDS_UsrComment_4j6gspp"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrYachatRentalDS_UsrStartDate_8urg3x7": {
						"modelConfig": {
							"path": "UsrYachatRentalDS.UsrStartDate"
						}
					},
					"UsrYachatRentalDS_UsrEndDate_t0uc2im": {
						"modelConfig": {
							"path": "UsrYachatRentalDS.UsrEndDate"
						}
					},
					"UsrYachatRentalDS_UsrCustomer_8qqybc5": {
						"modelConfig": {
							"path": "UsrYachatRentalDS.UsrCustomer"
						}
					},
					"UsrYachatRentalDS_UsrAmount_0q6a5xx": {
						"modelConfig": {
							"path": "UsrYachatRentalDS.UsrAmount"
						}
					},
					"UsrYachatRentalDS_UsrComment_4j6gspp": {
						"modelConfig": {
							"path": "UsrYachatRentalDS.UsrComment"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrYachatRentalDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrYachatRental",
								"loadParameters": {
									"options": {
										"pagingConfig": {
											"rowCount": 1,
											"rowsOffset": -1
										},
										"sortingConfig": {
											"columns": []
										}
									}
								},
								"allowCopyingRecords": false
							}
						}
					},
					"primaryDataSourceName": "UsrYachatRentalDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});