import Joi from "joi";
import React, { useState } from "react";
import SubmitButton from "./widgets/SubmitButton";
import TextInput from "./widgets/TextInput";

const SimplePostForm = (props) => {
    const [value, setValue] = useState(props.formObject);
    const [inputError, setError] = useState(props.formObject);

    const handleSimplePostFormChange = (e) => {
        e.preventDefault();

        const inputName = e.target.name;
        const inputValue = e.target.value;

        const dataToValidate = { [inputName]: inputValue };

        props.children.map((child) => {
            let referencedInputName = child.props["refTo"];
            let currentInputName = child.props["name"];

            if (currentInputName === inputName && referencedInputName !== undefined) {
                dataToValidate[referencedInputName] = value[referencedInputName];
            }
        });

        validateValue(dataToValidate, inputName);

        setValue({ ...value, [inputName]: inputValue });
    };

    const validateValue = (dataToValidate, currentInputName) => {
        const { error } = props.schema.validate(dataToValidate);

        let errorMessage = "";

        if (error) {
            errorMessage = error.details[0].message;
        }

        setError({ ...inputError, [currentInputName]: errorMessage });
    };

    const handleSimplePostSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form method='post' onChange={handleSimplePostFormChange} onSubmit={handleSimplePostSubmit}>
            {props.children.map((child) => {
                return React.cloneElement(child, { inputError: inputError });
            })}
        </form>
    );
};

export { SimplePostForm, TextInput, SubmitButton };