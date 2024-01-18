import { useRoutes } from 'react-router-dom';
//
import TodoRoutes from './TodoRoutes';

export default function Routes() {
  return useRoutes([TodoRoutes]);
}
