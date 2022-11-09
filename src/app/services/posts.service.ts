import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post [];
  constructor() { 
    this.arrPosts = [
      {
      titulo: '',
      texto: '',
      autor: '',
      imagen: '',
      fecha: '',
      categoria: '',
      },
      {
        titulo: '',
        texto: '',
        autor: '',
        imagen: '',
        fecha: '',
        categoria: '',
      },
      {
        titulo: '',
        texto: '',
        autor: '',
        imagen: '',
        fecha: '',
        categoria: '',
      },
  ]
  }

  create(Post: Post){
    this.arrPosts.push(Post)
  }
  getAll(){
    return this.arrPosts
  }
}
