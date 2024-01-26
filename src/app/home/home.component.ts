import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title = 'Au petit village';
  figurines: any[] = [];
  sortOrder: string = "";
  nomRecherche: string = "";

  constructor(private productService: ProductsService, private router: Router ) {}
  ngOnInit(): void {
      this.figurines = this.productService.getFigurines();
  }

  sort(order: string){
    this.sortOrder = order;
  }

  filtreParNom(){
    this.figurines = this.productService.getFigurines().filter(figurine => figurine.name.toLowerCase().includes(this.nomRecherche.toLowerCase()));
  }

  goFigurine(figurines: any){
    console.log(figurines.id);
    
    this.router.navigate(["/product",figurines.id]);
  }
}
