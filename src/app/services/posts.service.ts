import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  arrPosts: Post[];
  constructor() { 
    this.arrPosts = [
      {
        titulo: 'Crear un link',
        texto: 'Para crear un link hay que ...',
        autor: 'Alejandro Casamayor',
        imagen: '',
        fecha: '17-04-2000',
        categoria: 'Programación',
      },
      {
        titulo: 'Crear un PC',
        texto: 'Si quieres crear un pc desde 0 eligiendo las piezas...',
        autor: 'Alejandro Casamayor',
        imagen: '',
        fecha: '24-04-2000',
        categoria: 'Informática',
      },
      {
        titulo: 'Cómo instalar Photoshop',
        texto: 'Antes de todo, descarga el .exe',
        autor: 'Alejandro Casamayor',
        imagen: '',
        fecha: '20-04-2000',
        categoria: 'Diseño',
      },
      
      {
        titulo: 'Crear un link',
        texto: 'Para crear un link hay que ...',
        autor: 'Alejandro Casamayor',
        imagen: '',
        fecha: '17-04-2000',
        categoria: 'Programación',
      },
      {
        titulo: 'Crear un PC',
        texto: 'Si quieres crear un pc desde 0 eligiendo las piezas...',
        autor: 'Alejandro Casamayor',
        imagen: '',
        fecha: '24-04-2000',
        categoria: 'Informática',
      },
      {
        titulo: 'Cómo instalar Photoshop',
        texto: 'Antes de todo, descarga el .exe',
        autor: 'Alejandro Casamayor',
        imagen: '',
        fecha: '20-04-2000',
        categoria: 'Diseño',
      }
    ]
  }

  create(Post: Post){
    this.arrPosts.push(Post)
    console.log(this.arrPosts)
  }
  getAll(){
    return this.arrPosts
  }
}
