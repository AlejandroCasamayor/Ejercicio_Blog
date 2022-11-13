import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {

  arrPosts: Post[]
  constructor(
    private PostsService: PostsService
  ) { 
    this.arrPosts= []
  }

  ngOnInit(): void {
    this.arrPosts= this.PostsService.getAll()
  }

  getCategory($event:any) {
    this.arrPosts= this.PostsService.getAll()
    console.log($event.target.value)
    let category = this.arrPosts.filter(post => post.categoria === $event.target.value)
    console.log(category) 
    this.arrPosts = category
  }
}
