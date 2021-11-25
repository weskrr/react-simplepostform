# REACT SimplePostFormular
SimplePostFormular is a easy and lightweight library to validate user data in realtime with npm Joi in REACT.

## Installing and dependencies

You can install SimplePostFormular with
``
npm i react-simplepostformular
``

react-simplepostformular only runs with npm Joi. For more information see: https://www.npmjs.com/package/joi 

You can install npm Joi with ``npm i joi``

## Example
```js
function App() {

  const schema = Joi.object({
    username: Joi.string().min(3).max(8).required(),
    password: Joi.string().min(2).max(3).required(),
    mail: Joi.string().min(2).max(3).required()
  });

  const formObject = {
    username: "",
    password: "",
    mail: ""
  }

  return (
    <>
      <SimplePostForm schema={schema} formObject={formObject}>
        <TextInput name="username" />
        <TextInput name="password" />
        <TextInput name="mail" />
      </SimplePostForm> 
    </>
  );
}
```

## Using

### Build Schema
First you need to build the Schema for your validation. Create a Joi Object for your input rules. If you need more information about npm Joi you need to read the Joi documentation. 

Afer this you need to build up a object with all input fields that needs to be validated through Joi.

```js
const formObject = {
    username: "",
    password: "",
    mail: ""
}
```

Make sure that your object key names are equal to the Joi Schema key names.

### Build Formular
Import and use the SimplePostForm tag and inject it with your Joi Schema and the Input Object like here
```js
<SimplePostForm schema={schema} formObject={formObject}></SimplePostForm>
```

Use the SimplePostFormular **TextInput** Tag. Give them a name propertie to create a label and a REACT list key.

```js
return (
    <>
      <SimplePostForm schema={schema} formObject={formObject}>
        <TextInput name="username" />
        <TextInput name="password" />
        <TextInput name="mail" />
      </SimplePostForm> 
    </>
  );
  ```