import { lazy } from 'react';
import Loadable from 'components/Loadable';

const TodoListPage = Loadable(lazy(() => import('pages/TodoList')));
const TodoDetailPage = Loadable(lazy(() => import('pages/TodoDetail')));
const TodoCreatePage = Loadable(lazy(() => import('pages/TodoCreate')));

const TodoRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <TodoListPage />,
    },
    {
      path: '/create',
      element: <TodoCreatePage />,
    },
    {
      path: '/detail',
      element: <TodoDetailPage />,
    },
  ],
};

export default TodoRoutes;
