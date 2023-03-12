import { ProdutosService } from './../../../service/produtos.service';
import { IProduto } from './../../../models/produto';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  userName!: any;
  productForm!: FormGroup;
  product!:IProduto;


  constructor(private productService: ProdutosService){}

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.createForm();
  }

  createForm() {
    this.productForm = new FormGroup( {
      id: new FormControl('', [Validators.required, Validators.minLength(2)]),
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      preco: new FormControl('', [Validators.required, Validators.minLength(4)]),
      quantity: new FormControl('', [Validators.required, Validators.minLength(4)]),
      userName: new FormControl(this.userName, [Validators.required, Validators.minLength(4)]),
    })
  }

  get id() {
    return this.productForm.get('id')?.value;
  }

  get name() {
    return this.productForm.get('name')?.value;
  }

  get preco() {
    return this.productForm.get('preco')?.value;
  }

  get quantity() {
    return this.productForm.get('quantity')?.value;
  }

  get username() {
    return this.productForm.get('userName')?.value;
  }

  createProduct(){
    const product:IProduto = {
      id: parseFloat(this.id),
      name: this.name,
      quantity: this.quantity,
      unitPrice: this.preco,
      userName: this.userName
    }
    console.log(product);

    this.productService.cadastarProduto(product).subscribe();
  }

  onSubmit(){
    this.createProduct();
  }

}

