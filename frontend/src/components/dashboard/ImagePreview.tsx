interface ImagePreviewProps {
  file: File | null;
}

const ImagePreview = ({ file }: ImagePreviewProps) => {
  const previewUrl = file ? URL.createObjectURL(file) : null;

  return (
    <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-slate-950/20">
      <h2 className="text-lg font-semibold text-white">Image Preview</h2>
      {previewUrl ? (
        <div className="mt-5 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/90">
          <img
            src={previewUrl}
            alt="Uploaded preview"
            className="h-72 w-full object-cover"
          />
        </div>
      ) : (
        <div className="mt-5 rounded-[1.75rem] border border-dashed border-white/10 bg-slate-900/85 p-10 text-center text-slate-400">
          Select an image to preview the detection result.
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
