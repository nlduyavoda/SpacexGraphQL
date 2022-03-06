export type flickr_images = string[] | null;

export type cartType = {
  name: string;
  image: flickr_images;
  details: string;
  amount: number;
  price: number;
};

export type launchSliceState = {
  launches: cartType[];
};
