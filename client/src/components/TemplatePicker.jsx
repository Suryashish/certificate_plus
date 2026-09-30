function TemplatePicker({ templates, selectedId, onSelect }) {
  return (
    <div className="panel">
      <h3>1. Choose a template</h3>
      <div className="template-list">
        {templates.map((template) => (
          <button
            key={template.id}
            className={`template-option ${template.id === selectedId ? "active" : ""}`}
            onClick={() => onSelect(template.id)}
          >
            <strong>{template.name}</strong>
            <span>{template.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default TemplatePicker;
