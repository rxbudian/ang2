import {Component} from "angular2/core";
import {IProduct} from "./iproduct";
import {ProductFilterPipe} from './product-filter-pipe.component';
@Component({
    selector: "pm-products",
    templateUrl: "app/products/product-list.component.html",
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe]
})

export class ProductListComponent{
    pageTitle: string = "Product List1";
    listFilter:string = "test";
    imageWidth: number = 50;
    imageHeight: number = 50;
    showImage: boolean = false;
    products:IProduct[] =[
        {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        }
    ];
    toggleImage():void{
         this.showImage = !this.showImage;
    };
}