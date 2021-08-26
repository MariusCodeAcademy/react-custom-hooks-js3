import Section from '../UI/Section';
import TaskForm from './TaskForm';
import { dbUrl } from '../../config';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
  const makeTask = (taskData) => {
    props.onAddTask();
  };

  const reqConfig = {
    url: `${dbUrl}tasks.json`,
    method: 'POST',
    body: true,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const {
    isLoading,
    error,
    sendRequest: enterTaskHandler,
  } = useHttp(reqConfig, makeTask);

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
