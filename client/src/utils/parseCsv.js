// A tiny CSV parser. It handles:
//  - a header row (first line = column names)
//  - values wrapped in double quotes, e.g. "Lee, Min-jun"
//  - escaped quotes inside quoted values, e.g. "He said ""hi"""
//
// It does NOT handle Excel (.xlsx) files yet — that's on the roadmap.
//
// Returns: { headers: ["name", "date"], rows: [{ name: "Jane", date: "..." }] }

function splitLine(line) {
  const values = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      values.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  values.push(current.trim());
  return values;
}

export function parseCsv(text) {
  const lines = text
    .split(/\r?\n/)
    .filter((line) => line.trim() !== "");

  if (lines.length === 0) {
    return { headers: [], rows: [] };
  }

  const headers = splitLine(lines[0]);

  const rows = lines.slice(1).map((line) => {
    const values = splitLine(line);
    const row = {};
    headers.forEach((header, index) => {
      row[header] = values[index] ?? "";
    });
    return row;
  });

  return { headers, rows };
}
