import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../services/service.service';
import { Item } from '../../models/product';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import { Observable} from 'rxjs';
import {__param} from 'tslib';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: number;
  product: Item;
  constructor(private productService: ServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.product = this.productService.getItem(this.id);
  }

}
