import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input:string='hello';
  title:number=1.234;
  images=["https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600"]
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
