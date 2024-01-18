import { lazy } from 'react';
import Loadable from 'components/Loadable';

const TodoListPage = Loadable(lazy(() => import('pages/TodoList')));
const TodoDetailPage = Loadable(lazy(() => import('pages/TodoDetail')));

const TodoRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <TodoListPage />,
    },
    {
      path: '/detail',
      element: <TodoDetailPage />,
    },
  ],
};

export default TodoRoutes;
