import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-inicsesion',
  templateUrl: './inicsesion.page.html',
  styleUrls: ['./inicsesion.page.scss'],
})
export class InicsesionPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  ingresar()
  {
    this.router.navigate(['/home']);
  }
}
