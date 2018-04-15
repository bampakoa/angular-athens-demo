import { Thumbnail } from '../core/thumbnail.model';

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  urls: Url[];
}

export interface Url {
  type: string;
  url: string;
}
