import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit{
  figurines: any[] = [];
  produit: any;
  constructor(private route: ActivatedRoute, private productService: ProductsService, private router: Router ){ }

  ngOnInit() {
    this.figurines = this.productService.getFigurines();
    //récupère l'id
    const produitId: string|null = this.route.snapshot.paramMap.get("id");  
  
    if(produitId){
      this.produit = this.figurines.find((produit) => produit.id == produitId)
    } 
  }

  goFigurineList(){
    this.router.navigate(["/"]);
  }
}
