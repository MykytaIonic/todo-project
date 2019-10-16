import { Component, OnInit } from '@angular/core';
import { InsidePage } from '../inside/inside.page';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {


  public item;

  constructor(public activatedRoute : ActivatedRoute, private route: Router) {
    this.activatedRoute.queryParams.subscribe((res)=>{
          this.item = JSON.parse(res.special);
    });
  }

  ngOnInit() {
  }

  toPreviousPage() {
    this.route.navigate(['/inside']);
  }

}
