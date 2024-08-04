import { Component } from '@angular/core';
import { StarboxComponent } from "../starbox/starbox.component";
import { Portfolio } from './core/interfaces/portfolio.interface';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarboxComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {


  showModalBox:boolean = false;
  modalImgUrl:string="";
  modalImgAlt:string="";


  portfolio_list:Portfolio[]=[
    
    {
      imgUrl: "assets/images/port1.png",
      imgAlt: "portfolio image 1"
    },

    {
      imgUrl: "assets/images/port2.png",
      imgAlt: "portfolio image 2"
    },

    {
      imgUrl: "assets/images/port3.png",
      imgAlt: "portfolio image 3"
    },

    {
      imgUrl: "assets/images/port1.png",
      imgAlt: "portfolio image 1"
    },

    {
      imgUrl: "assets/images/port2.png",
      imgAlt: "portfolio image 2"
    },

    {
      imgUrl: "assets/images/port3.png",
      imgAlt: "portfolio image 3"
    },


  ];


  openCustomModal(objIndex:number){
    this.modalImgUrl = this.portfolio_list[objIndex].imgUrl;
    this.modalImgAlt = this.portfolio_list[objIndex].imgAlt;
    this.showModalBox = true
  }

  closeModal(){
    this.showModalBox = false
  }

  stopPropagte(eve:MouseEvent){
    eve.stopPropagation();
  }

}
