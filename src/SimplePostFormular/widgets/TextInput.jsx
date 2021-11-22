const TextInput = ({ name, inputError }) => {
    return (
        <>
            <p>{name}</p>

            <label htmlFor={name}>
                <input type='text' name={name} key={name} />
                { (inputError[name] !== undefined) ? <p>{inputError[name]}</p> : null }
            </label>

        </>
    );
};

export default TextInput;