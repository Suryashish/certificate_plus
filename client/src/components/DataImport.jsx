import { parseCsv } from "../utils/parseCsv.js";

// Upload a CSV where each column name matches a field key
// (e.g. "name", "date"). Each row becomes one certificate.
//
// TODO (roadmap): support .xlsx files and a "map columns to fields" UI.

function DataImport({ fields, onImport }) {
  async function handleFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const text = await file.text();
    const { headers, rows } = parseCsv(text);

    const fieldKeys = fields.map((f) => f.key);
    const matched = headers.filter((h) => fieldKeys.includes(h));
    const unmatched = headers.filter((h) => !fieldKeys.includes(h));

    onImport({ rows, matched, unmatched });
  }

  return (
    <div className="panel">
      <h3>4. Import a list (CSV)</h3>
      <p className="hint">
        Column names must match the field keys shown above.{" "}
        <a href="/sample-data.csv" download>
          Download a sample CSV
        </a>
      </p>
      <input type="file" accept=".csv,text/csv" onChange={handleFile} />
    </div>
  );
}

export default DataImport;
