function FieldEditor({ fields, values, onChange, onReset }) {
  return (
    <div className="panel">
      <h3>3. Fill in the fields</h3>

      {fields.map((field) => (
        <label key={field.key} className="field">
          <span>
            {field.label} <code>{field.key}</code>
          </span>

          <input
            type="text"
            value={values[field.key] ?? ""}
            onChange={(e) => onChange(field.key, e.target.value)}
          />
        </label>
      ))}

      <button
        type="button"
        onClick={onReset}
        className="btn"
      >
        Reset to defaults
      </button>
    </div>
  );
}

export default FieldEditor;
