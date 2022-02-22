export type flickr_images = string[];

export type cartType = {
  name: string;
  image: flickr_images;
  details: string;
  amount: number;
};

export type launchSliceState = {
  launches: cartType[];
};
