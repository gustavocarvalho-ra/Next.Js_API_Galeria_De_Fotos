export interface imageprops {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
    full: string;
    thumb: string;
    [key: string]: string;
  };
  width: number;
  height: number;
  user: {
    name: string;
    username: string;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
  };
  links: {
    html: string;
    download: string;
    [key: string]: string;
  };
}

export interface ImageDivProps {
  imageUrl: string;
  loading?: "lazy" | "eager";
}