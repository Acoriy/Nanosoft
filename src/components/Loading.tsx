
export default function LoadingPage() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      {/* Spinner SVG */}
      <svg
        className="w-16 h-16 animate-spin text-nanosoft-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        role="status"
        aria-label="Chargement en cours"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
      <span className="sr-only">جاري التحميل...</span>
    </div>
  );
}
