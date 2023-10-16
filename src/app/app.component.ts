import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input:string='hello';
  title:number=1.234;
  images=['https://picsum.photos/id/1/200/300', 'https://picsum.photos/id/2/200/300', 'https://picsum.photos/id/3/200/300']
  src=this.images[0];
  idx=0;
  

  selectImage(i:string)
  {
    this.src=i;
  }
  changePicture()
  {
    this.src=this.images[Math.floor(Math.random()*3)];
  }
  prevImage()
  {
    this.idx=this.idx-1;
    if(this.idx<0)
      this.idx=this.images.length-1;
    this.src=this.images[this.idx];
  }
  nextImage()
  {
    this.idx=(this.idx+1)%3;
    this.src=this.images[this.idx];
  }
}
