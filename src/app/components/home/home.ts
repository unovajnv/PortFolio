import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    document.body.classList.add('home-route');
  }

  ngOnDestroy() {
    document.body.classList.remove('home-route');
  }
}