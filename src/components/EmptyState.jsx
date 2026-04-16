function EmptyState({ title, message }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">

      <div className="text-5xl mb-4">📭</div>

      <h2 className="text-xl font-semibold text-gray-700">
        {title}
      </h2>

      <p className="text-gray-500 mt-2">
        {message}
      </p>

    </div>
  );
}

export default EmptyState;