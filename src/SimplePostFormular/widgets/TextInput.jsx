const TextInput = ({ name, inputError }) => {
    return (
        <>
            <p>{name}</p>
            <input type='text' name={name} />
            { (inputError[name] !== undefined) ? <p>{inputError[name]}</p> : null }
        </>
    );
};

export default TextInput;