import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { Item } from '../../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  products: Item[] = [];

  constructor(private fb: FormBuilder, private productService: ServiceService) { }

  productForm = this.fb.group({
    name: [''],
    color: [''],
    desc: [''],
    price: ['']
  });

  getData() {
    console.log(this.productForm.value);
    this.productService.addItem(this.productForm.value);
    this.productForm.controls.name.setValue('');
    this.productForm.controls.color.setValue('');
    this.productForm.controls.desc.setValue('');
    this.productForm.controls.price.setValue('');
    this.products = this.productService.getItems();
  }


  ngOnInit() {
  }

}
