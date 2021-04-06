import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Item } from '../item';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss'],
  providers: [DataService],
})
export class ShoppingItemComponent implements OnInit {
  shoppingItemList: any = [];
  constructor(private dataservice: DataService) {}

  getItems() {
    this.dataservice.getShoppingItems().subscribe((items) => {
      this.shoppingItemList = items;
      console.log(this.shoppingItemList);
    });
  }

  addItem(form: any) {
    let newItem = {
      itemName: form.value.itemName,
      itemQuantity: form.value.itemQuantity,
      itemBought: false,
    };

    this.dataservice.addShoppingItems(newItem).subscribe((item) => {
      console.log(item);
      this.getItems();
    });
  }

  deleteItem(id: any) {
    this.dataservice.deleteShoppingItem(id).subscribe((item) => {
      console.log('item Deleted', item);
      if (item.byteLength == 1) {
        for (var i = 0; i < this.shoppingItemList.length; i++) {
          if (id == this.shoppingItemList[i]._id) {
            this.shoppingItemList.splice(i, 1);
          }
        }
      }
      this.getItems();
    });
  }

  ngOnInit(): void {
    this.getItems();
  }
}
