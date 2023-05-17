export interface CARTITEM {
  id?: number;
  name: string;
  discount: number;
  price: number;
  num: number;
  del?: (val: number) => void;
}

export interface CART {
  cart: CARTITEM[];
  removeItem?: (val: number) => void;
  cartCount?: number;
  showCart?: boolean;
  openCart?: () => void;
  closeCart?: () => void;
}

export interface MainProps {
  image: number,
  arr: string[],
  prev: () => void,
  next: () => void,
  addToCart: (val: CARTITEM) => void,
  imageNo: (value: number) => void,
  openBox: () => void
}

export interface imageSliderProps {
  image: number;
  arr: string[];
  prev: () => void;
  next: () => void;
  imageNo: (value: number) => void;
  openBox: () => void;
  closeBox?: () => void;
  btnStyle?: { wrapper: string; next: string; prev: string };
}