import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../filter.pipe';
@Component({
  selector: 'app-autocomplete-pagination',
  templateUrl: './autocomplete-pagination.component.html',
  styleUrls: ['./autocomplete-pagination.component.css'],
  providers: [FilterPipe]
})
export class AutocompletePaginationComponent implements OnInit {

  constructor(private filter: FilterPipe) { }
  searchText;
  showResultBox = false;//hide resultbox

  //movies object array
  movies = [
    {
      name: "jab we met",
      title: "jab we met"
    },
    {
      name: "mumbai pune mumbai",
      title: "mumbai pune mumbai"
    },
    {
      name: "dhkmn",
      title: "dhkmn"
    },
    {
      name: "arya",
      title: "arya"
    },
    {
      name: "barfi",
      title: "barfi"
    },
    {
      name: "banvabanvi",
      title: "banvabanvi"
    },
    {
      name: "Mohabattein",
      title: "Mohabattein"
    }

  ];
  updatedMovies = [];
  curPage = 1; //current page in pagination
  pageSize = 2; //total no of pages in pagination  
  totalPages;
  
  numberOfPages() {
    this.curPage = 1;
    this.totalPages = Math.ceil(this.updatedMovies.length / this.pageSize); //returns total pages
  };

  getTotalNoOfPages(totalPages){
    let totalPageArray = [];
    for(let i=1; i<=totalPages;i++){
      totalPageArray.push(i);
    }
    return totalPageArray;    
  }

  totalNoOfPages = [1,2,3,4];
  
  funcShowResultBox = function () {
    this.showResultBox = true; //shows resultbox   
    
    this.updatedMovies = this.filter.transform(this.movies, this.searchText);
    this.numberOfPages();
    this.updatedMovies = this.updatedMovies.slice(((this.curPage * this.pageSize) - this.pageSize), (this.curPage * this.pageSize))
    
  }
  
  itemClick = function (itemValue) {
    this.searchText = itemValue;
    this.showResultBox = false;
  }
  prev() {
    this.curPage = this.curPage - 1;
    this.updatedMovies = this.filter.transform(this.movies, this.searchText).slice(((this.curPage * this.pageSize) - this.pageSize), (this.curPage * this.pageSize));
  }
  next() {
    this.curPage = this.curPage + 1;
    this.updatedMovies = this.filter.transform(this.movies, this.searchText).slice(((this.curPage * this.pageSize) - this.pageSize), (this.curPage * this.pageSize));
  }
  pageClick(index){
    this.curPage=index+1;//as index starts with 0, need to increment it by 1
    this.updatedMovies = this.filter.transform(this.movies, this.searchText).slice(((this.curPage * this.pageSize) - this.pageSize), (this.curPage * this.pageSize));
    console.log(this.updatedMovies);
  }
  ngOnInit() {
  }

}
