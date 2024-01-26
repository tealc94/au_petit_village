import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private figurines = [
    {
      id:1,
      name: "Abraracourcix",
      description: `Le village n'a qu'un seul et unique chef, même si certains ont parfois 
      tendance à l'oublier et se verraient bien chef à la place du chef.
      Abraracourcix n'hésites alors pas à hausser le ton pour rappeler à 
      tout le monde que le chef ici, c'est lui !`,
      price: 49.99,
      height: 17.7,
      material: "résine",
      imageUrl: "./assets/Abraracourcix.jpg"
    },
    {
      id:2,
      name: "Obélix",
      description: `Obélix qui boude, qu'est ce qui se passe ? Comment pouvons-nous l'aider ? 
      de la potion magique ? des sangliers ?`,
      price: 65.99,
      height: 18.5,
      material: "résine",
      imageUrl: "./assets/Obélix.jpg"
    },
    {
      id:3,
      name: "Idefix",
      description: `C'est un chien blanc, le fidèle compagnon d'Obélix. 
      Ce petit chien à la curieuse particularité de pleurer quand on coupe un arbre.`,
      price: 39.95,
      height: 13,
      material: "résine",
      imageUrl: "./assets/Idefix.jpg"
    },
    {
      id:4,
      name: "Astérix",
      description: `Astérix est patient.
      sauf quand les Gaulois du village n'en font qu'à leur tête !`,
      price: 70.95,
      height: 15.5,
      material: "résine",
      imageUrl: "./assets/Asterix.jpg"
    },
    {
      id:5,
      name: "Falbala",
      description: `La belle Falbala, qui a fait chavirer de nombreux coeurs gaulois, 
      a été sculptée par Eric Delaval. Le dessin est tirée de l'album Astérix Légionnaire.`,
      price: 40.99,
      height: 20,
      material: "résine",
      imageUrl: "./assets/Falbala.jpg"
    },
    {
      id:6,
      name: "Bonemine",
      description: `Tous le monde le sait : au village, c'est elle qui porte la culotte!
      Regardez-la : sagement assise et plongée dans son ouvrage, elle arbore 
      ce petit rictus narquois qui montre à l'évidence que son chef de mari, 
      Abraracourcix n'est bien souvent là que pour sauver les apparences!`,
      price: 35.99,
      height: 13,
      material: "résine",
      imageUrl: "./assets/Bonemine.jpg"
    }
  ]

  getFigurines(){
    return this.figurines;
  }
}

