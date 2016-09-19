import { Component } from '@angular/core';
import { FilterMainComponent } from './filter-main';
import { GroupInfoComponent } from './group-info';

@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	directives: [FilterMainComponent, GroupInfoComponent]
})

export class AppComponent {
	
}
