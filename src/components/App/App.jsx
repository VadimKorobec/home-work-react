import { Profile } from 'components/Profile/Profile';
import { Product } from '../Product/Product';
import { Panel } from 'components/Panel/Panel';
import { Mailbox } from 'components/Mailbox/Mailbox';
import { BookList } from 'components/BookList/BookList';

const favoriteBooks = [
  { id: 'id-1', name: 'JS for beginners', price: 10 },
  { id: 'id-2', name: 'React basics', price: 20 },
  { id: 'id-3', name: 'React Router overview', price: 30 },
  { id: 'id-4', name: 'Redux in depth', price: 40 },
];

export const App = () => {
  return (
    <div>
      <h1>Best selling products</h1>
      <Product
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        name="Tacos With Lime"
        price={10.99}
        quantity={10}
      />
      <Product
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        name="Fries and Burger"
        price={14.29}
        quantity={30}
      />
      <Panel titel={'User profil'}>
        <Profile name={'Mango'} email={'mango@mail.com'} />
      </Panel>
      <Mailbox unreadMessages={false} username={'Mango'} />
      <BookList books={favoriteBooks} />
    </div>
  );
};
