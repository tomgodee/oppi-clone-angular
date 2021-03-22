import { Book } from '../book-list/books.model';
import { UserInterface } from '../../types/types';

export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
  user: UserInterface;
}