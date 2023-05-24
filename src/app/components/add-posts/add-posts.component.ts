import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent {
  
  public post = {
    title: '',
    image: '',
    text: ''
    };
  
  constructor( public router: Router, private service: DataService) {

    }
  
    ngOnInit() {
    }
  
    create() : void {
    this.service.addPost(this.post).subscribe((result)=> {
      return result;
    });
    this.router.navigate(['/']);
    }
}