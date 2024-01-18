import { createContext, ReactNode } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

type ContextType = {
  todoId: string;
  setTodoId: (id: string) => void;
};

const initialState: ContextType = {
  todoId: '',
  setTodoId: (id: string) => {},
};

const ConfigContext = createContext<ContextType>(initialState);

type ConfigProviderProps = {
  children: ReactNode;
};

function ConfigProvider({ children }: ConfigProviderProps) {
  const [config, setConfig] = useLocalStorage('Betterteam-todo', initialState);

  const onChangeTodoId = (id: string) =>
    setConfig({
      ...config,
      todoId: id,
    });

  return (
    <ConfigContext.Provider value={{ ...config, setTodoId: onChangeTodoId }}>
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigProvider, ConfigContext };
