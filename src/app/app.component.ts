import { Component, OnInit } from '@angular/core';
import { FontAwesome } from './font-awesome';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'faIconLists';
  result_is_empty:boolean=false;
  fa:any=this.fontAwesome.list.icons;
  listes:string[]=[];
  formSearch:any;
  constructor(private fontAwesome : FontAwesome){}

  ngOnInit(){
    this.formSearchControl();
    this.searchStringInArray('',this.fa);
    // console.log(this.listes);
    // console.log(this.searchStringInArray('justify',this.listes));
    
  }

  public formSearchControl() {
    this.formSearch = new FormGroup({
      search_field : new FormControl('')
    });
  }

  searchStringInArray(str:any,strArray:string[]){
    let result:string[]=[];
    for (let j = 0; j < strArray.length; j++) {
      if (strArray[j].match(str.search_field)) {
        result.push(strArray[j]);
      }
    }
    (result.length==0)?this.result_is_empty=true:this.result_is_empty=false;
    this.listes = result;
  }

}
