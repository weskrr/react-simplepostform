import Joi from "joi";
import { SimplePostForm, TextInput } from "./SimplePostFormular/SimplePostFormular";

function App() {

  const schema = Joi.object({
    username: Joi.string().min(3).max(8).required(),
    password: Joi.string().min(2).max(3).required()
  });

  return (
    <>
      <SimplePostForm schema={schema} formObject={'username', 'password'}>
        <TextInput name="username" />
        <TextInput name="password" />
      </SimplePostForm>
    </>
  );
}

export default App;
