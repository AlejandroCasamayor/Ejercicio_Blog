import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  arrPosts: Post[];
  constructor() { 
    this.arrPosts = []
  }

  create(Post: Post){
    this.arrPosts.push(Post)
    console.log(this.arrPosts)
  }
  getAll(){
    return this.arrPosts
  }
}
