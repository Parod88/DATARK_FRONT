import './TextInput.scss';

function TextInput(props) {
  return (
    <div className="text-input">
      <label id="text-input-label">
        <input
          id="text-input"
          onChange={props.onChange}
          name={props.name}
          value={props.value}
          type={props.type}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  );
}

export default TextInput;
