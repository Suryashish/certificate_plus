// Renders a certificate from a template + values.
// Field positions (x, y) are percentages of the certificate size,
// so the preview scales nicely on any screen.

function CertificatePreview({ template, values, backgroundImage }) {
  const style = {
    aspectRatio: `${template.width} / ${template.height}`,
    background: backgroundImage
      ? `center / cover no-repeat url(${backgroundImage})`
      : template.background,
    borderColor: backgroundImage ? "transparent" : template.borderColor,
  };

  return (
    <div className="certificate" style={style}>
      {template.fields.map((field) => (
        <div
          key={field.key}
          className="certificate-field"
          style={{
            left: `${field.x}%`,
            top: `${field.y}%`,
            color: field.color,
            // Scale font size relative to the certificate width
            fontSize: `${(field.fontSize / template.width) * 100}cqw`,
          }}
        >
          {values[field.key]}
        </div>
      ))}
    </div>
  );
}

export default CertificatePreview;
