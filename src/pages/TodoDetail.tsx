import React from 'react';
//
import useConfigContext from 'hooks/useConfigContext';

const TodoDetail: React.FC<{}> = () => {
  const { todoId } = useConfigContext();

  return <>{`Todo #${todoId} Detail`}</>;
};

export default TodoDetail;
