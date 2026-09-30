// Lets the user upload a certificate they already designed (PNG/JPG).
// The image is used as the background and the text fields sit on top.
//
// TODO (roadmap): drag fields to position them on the uploaded image.

function BackgroundUpload({ backgroundImage, onChange }) {
  function handleFile(event) {
    const file = event.target.files[0];
    if (!file) return;
    onChange(URL.createObjectURL(file));
  }

  return (
    <div className="panel">
      <h3>2. Use your own design (optional)</h3>
      <input type="file" accept="image/png, image/jpeg" onChange={handleFile} />
      {backgroundImage && (
        <button className="btn btn-small" onClick={() => onChange(null)}>
          Remove image
        </button>
      )}
    </div>
  );
}

export default BackgroundUpload;
