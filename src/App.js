import Joi from "joi";
import { SimplePostForm, TextInput } from "./SimplePostFormular/SimplePostFormular";

function App() {

  const schema = Joi.object({
    username: Joi.string().min(3).max(8).required(),
    password: Joi.string().min(2).max(3).required()
  });

  const formObject = {
    username: "",
    password: ""
  }

  return (
    <>
      <SimplePostForm schema={schema} formObject={formObject}>
        <TextInput name="username" />
        <TextInput name="password" />
      </SimplePostForm> 
    </>
  );
}

export default App;
