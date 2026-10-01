import { useEffect, useState } from "react";
import { getTemplates, generateCertificates } from "../api/client.js";
import TemplatePicker from "../components/TemplatePicker.jsx";
import BackgroundUpload from "../components/BackgroundUpload.jsx";
import FieldEditor from "../components/FieldEditor.jsx";
import DataImport from "../components/DataImport.jsx";
import CertificatePreview from "../components/CertificatePreview.jsx";

// Build { key: defaultValue } from a template's fields
function getDefaultValues(template) {
  const values = {};
  template.fields.forEach((field) => {
    values[field.key] = field.defaultValue;
  });
  return values;
}

function BuilderPage() {
    useEffect(() => {
    document.title = "Builder · Certificate Builder";
  }, []);
  const [templates, setTemplates] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [values, setValues] = useState({});
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [imported, setImported] = useState(null); // { rows, matched, unmatched }
  const [rowIndex, setRowIndex] = useState(0);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Load templates from the server once
  useEffect(() => {
    getTemplates()
      .then((data) => {
        setTemplates(data);
        if (data.length > 0) {
          setSelectedId(data[0].id);
          setValues(getDefaultValues(data[0]));
        }
      })
      .catch(() => {
        setError("Could not load templates. Is the server running on port 4000?");
      });
  }, []);

  const template = templates.find((t) => t.id === selectedId);

  function handleSelectTemplate(id) {
    const next = templates.find((t) => t.id === id);
    setSelectedId(id);
    setValues(getDefaultValues(next));
  }

  function handleFieldChange(key, value) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }
   
  function handleReset() {
  setValues(getDefaultValues(template));
}

  function handleImport(result) {
    setImported(result);
    setRowIndex(0);
  }

  async function handleGenerate() {
    setMessage("");
    try {
      const rows = imported ? imported.rows : [values];
      const result = await generateCertificates(selectedId, rows);
      setMessage(result.message);
    } catch (err) {
      setMessage(err.message);
    }
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!template) {
    return <p className="hint center">Loading templates…</p>;
  }

  // If a CSV was imported, the current row overrides the typed-in values
  const currentRow = imported?.rows[rowIndex];
  const previewValues = currentRow ? { ...values, ...currentRow } : values;

  return (
    <div className="builder">
      <aside className="sidebar no-print">
        <TemplatePicker
          templates={templates}
          selectedId={selectedId}
          onSelect={handleSelectTemplate}
        />
        <BackgroundUpload
          backgroundImage={backgroundImage}
          onChange={setBackgroundImage}
        />
        <FieldEditor
          fields={template.fields}
          values={values}
          onReset={handleReset}
          onChange={handleFieldChange}
        />
        <DataImport fields={template.fields} onImport={handleImport} />
      </aside>

      <section className="preview-area">
        <CertificatePreview
          template={template}
          values={previewValues}
          backgroundImage={backgroundImage}
        />

        {imported && (
          <div className="import-info no-print">
            <p>
              Imported <strong>{imported.rows.length}</strong> rows. Matched
              columns: {imported.matched.join(", ") || "none"}
              {imported.unmatched.length > 0 && (
                <> · Ignored columns: {imported.unmatched.join(", ")}</>
              )}
            </p>
            <div className="row-nav">
              <button
                className="btn btn-small"
                disabled={rowIndex === 0}
                onClick={() => setRowIndex(rowIndex - 1)}
              >
                ← Prev
              </button>
              <span>
                {rowIndex + 1} / {imported.rows.length}
              </span>
              <button
                className="btn btn-small"
                disabled={rowIndex === imported.rows.length - 1}
                onClick={() => setRowIndex(rowIndex + 1)}
              >
                Next →
              </button>
              <button className="btn btn-small" onClick={() => setImported(null)}>
                Clear list
              </button>
            </div>
          </div>
        )}

        <div className="actions no-print">
          <button className="btn" onClick={() => window.print()}>
            Print / Save as PDF
          </button>
          <button className="btn btn-primary" onClick={handleGenerate}>
            Generate {imported ? `${imported.rows.length} certificates` : "certificate"}
          </button>
        </div>
        {message && <p className="hint no-print">{message}</p>}
      </section>
    </div>
  );
}

export default BuilderPage;
