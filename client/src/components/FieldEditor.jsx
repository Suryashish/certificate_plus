function FieldEditor({ fields, values, onChange }) {
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
    </div>
  );
}

export default FieldEditor;
