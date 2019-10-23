import {bindable} from 'aurelia-framework';
import { connectTo } from 'aurelia-store';
import { pluck } from 'rxjs/operators';

@connectTo()
export class HelloWorld {
  @bindable public message: string = '';
  state: any;
}
