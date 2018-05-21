import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  holaMundo:string = "Hola mundo";
  mostrar: boolean = false;

  api_url = "https://api.themoviedb.org/3";
  api_key = "c569da86d32a37e34cf7d86e120d644c";
  api_image = "https://image.tmdb.org/t/p/w500/";


  arreglo: Array<string> = [
  	"http://fraghero.com/wp-content/uploads/2016/02/monument-valley-1.jpg", 
  	"https://1079638729.rsc.cdn77.org/androidgame_img/monument_valley/real/1_monument_valley.jpg",
  	"https://vignette.wikia.nocookie.net/monument-valley/images/2/25/TheTotem.jpg/revision/latest?cb=20170611135637",
  	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4cPF9Dqug8XNzPDRV-UJ4yRMGrNH3NQGhHeXbWVJC7gT0RD0f",
  	"https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/09/Screenshot-2015-09-02-14.44.08.png"
  ];

  adios(){
  	this.holaMundo = "";
  	this.mostrar = true;
  }
}
