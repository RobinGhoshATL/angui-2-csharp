import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash'

@Pipe({
    name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

    transform(data: any, item: any) {             
     let total:number = 0;
      data.slice(0,5).forEach(element => {
        total+= element.value
      });
    
     return Math.round((item / total) * 100).toFixed(2);
    }

}