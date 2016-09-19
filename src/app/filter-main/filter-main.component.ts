import { Component, OnInit } from '@angular/core';
import { FilterDataService } from '../filter-data.service';
import {  GroupInfoComponent } from '../group-info';

@Component({
	moduleId: module.id,
	selector: 'app-filter-main',
	templateUrl: 'filter-main.component.html',
	styleUrls: ['filter-main.component.css'],
	directives: [GroupInfoComponent],
	providers: [FilterDataService]
})
export class FilterMainComponent implements OnInit {

	title = 'College Football 101';

	componentdataInstantiate: string;
	filters: any;

	constructor(private _filterDataService: FilterDataService) {
		this.callHttpService();
	}

	callHttpService() {
		this._filterDataService.requestData('app/data/filter-data.json')
		.subscribe(
			data => {this.filters = data},
			error => console.log(error),
			() => console.log('subscribe complete')
		)
	}

	ngOnInit() {
	}
}
