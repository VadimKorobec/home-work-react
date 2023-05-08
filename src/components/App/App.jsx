import { Profile } from 'components/Profile/Profile';
import { Product } from '../Product/Product';
import { Panel } from 'components/Panel/Panel';
import { Mailbox } from 'components/Mailbox/Mailbox';
import { BookList } from 'components/BookList/BookList';
import { Alert } from 'components/Alert/Alert';
import { ProfileUser } from 'components/ProfileUser/ProfileUser';
import user from '../data/user.json';
import stats from '../data/data.json';
import friends from '../data/friends.json';
import initialTodos from '../data/todos.json';
import { StatiticsList } from 'components/StatisticsList/StatisticsList';
import { FriendsList } from 'components/FriendsList/FriendsList';
import { Counter } from 'components/Counter/Counter';
import { Toggle } from 'components/Toggle/Toggle';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { ColorPicker } from 'components/ColorPicker/ColorPicker';
import { TodoList } from 'components/TodoList/TodoList';
import { Component } from 'react';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { Form } from 'components/Form/Form';

const favoriteBooks = [
  { id: 'id-1', name: 'JS for beginners', price: 10 },
  { id: 'id-2', name: 'React basics', price: 20 },
  { id: 'id-3', name: 'React Router overview', price: 30 },
  { id: 'id-4', name: 'Redux in depth', price: 40 },
];
const colorPicker = [
  { label: 'red', color: '#f44336' },
  { label: 'green', color: '#4caf50' },
  { label: 'blue', color: '#2196f3' },
  { label: 'grey', color: '#687d8b' },
  { label: 'pink', color: '#e91e62' },
  { label: 'indigo', color: '#3f51b5' },
];

export class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { todos } = this.state;

    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
        <SignUpForm />
        <LoginForm />
        <div>
          <p>Todo:{todos.length}</p>
          <p>Todo:</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        <ColorPicker colors={colorPicker} />
        <Dropdown />
        <Toggle />
        <Counter initialValue={0} />
        <FriendsList friends={friends} />
        <StatiticsList stats={stats} />
        <ProfileUser user={user} />
        <Alert variant="info">Please update your email! </Alert>
        <Alert variant="error">There was an error during transaction </Alert>
        <Alert variant="success">
          Payment received,thank you for your purchase!
        </Alert>
        <Alert variant="warning">
          Please update your profile contact information
        </Alert>
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
  }
}
