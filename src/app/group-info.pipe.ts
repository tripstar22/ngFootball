import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'GroupInfoPipe'
})
export class GroupInfoPipe implements PipeTransform {

	transform(value: any, arg: any) {

		if (value && arg) {

			return this.matchArguments(value, arg);
		} else {

			console.log('no values selected');
		}
	}

	matchArguments(arr, arg) {

		let newObject: any;
		let returnArr = [];

		for (var i=0; i < arr.length; i++) {

			if (arr[i].id === arg) {

				let tmpObject: any = {};

				tmpObject.school = arr[i].school;
				tmpObject.nickname = arr[i].nickname;
				tmpObject.stadium = arr[i].stadium;
				tmpObject.coach = arr[i].coach;
				tmpObject.record = arr[i].record;
				tmpObject.bowlgame = arr[i].bowlgame;
				tmpObject.nationaltitles = arr[i].nationaltitles;
				tmpObject.firstgame = arr[i].firstgame;
				returnArr.push(tmpObject);
			}
		}

		return returnArr;
	}
}
