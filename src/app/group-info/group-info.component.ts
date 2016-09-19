import { Component, OnInit, Input } from '@angular/core';
import { FilterDataService } from '../filter-data.service';
import { GroupInfoPipe } from '../group-info.pipe';

@Component({
	moduleId: module.id,
	selector: 'app-group-info',
	templateUrl: 'group-info.component.html',
	styleUrls: ['group-info.component.css'],
	providers: [FilterDataService],
	pipes: [GroupInfoPipe]
})
export class GroupInfoComponent implements OnInit {

	@Input() filterAttr: string;
	list: any;

	constructor(private _filterDataService: FilterDataService) {
		this.callHttpService();
	}

	callHttpService() {

		this._filterDataService.requestData('app/data/conference-data.json')
		.subscribe(
			data => {this.list = data},
			error => console.log(error),
			() => console.log('list complete')
		)
	}

	ngOnInit() {
	}
}
