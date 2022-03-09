import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash'

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

    transform(value: any, propName: string, order: string = 'asc') {

        if(order === 'asc'){
            return value.sort((a, b) => {
                if (a[propName] < b[propName]) {
                  return -1;
                } else if (a[propName] === b[propName]) {
                  return 0;
                } else if (a[propName] > b[propName]) {
                  return 1;
                }
              });
        } else if(order === 'desc'){
            return value.sort((a, b) => {
                if (a[propName] > b[propName]) {
                  return -1;
                } else if (a[propName] === b[propName]) {
                  return 0;
                } else if (a[propName] < b[propName]) {
                  return 1;
                }
              });
        }       
       
     
       }

}