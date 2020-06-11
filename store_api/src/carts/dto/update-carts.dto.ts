export class UpdateCartsDto {
    items: [{ _id: String; name: String; description: String; price: String; image: String; type: String; }];
    readonly created_at: Date;
  }
