export class Product {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  price: number;

  constructor(
    id,
    name,
    description = '',
    price = 0,
    imgUrl = 'https://www.simplilearn.com/ice9/free_resources_article_thumb/8-Books-To-Read-for-a-PRINCE2.jpg'
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imgUrl = imgUrl;
    this.price = price;
  }
}
