interface ErrorMessageProps {
  title: string;
  description: string;
}

const ErrorMessage = ({ title, description }: ErrorMessageProps) => {
  return (
    <div className="rounded-[2rem] border border-rose-400/20 bg-rose-500/10 p-6 text-slate-100 shadow-xl shadow-rose-500/10">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-3 text-sm text-slate-200">{description}</p>
    </div>
  );
};

export default ErrorMessage;
