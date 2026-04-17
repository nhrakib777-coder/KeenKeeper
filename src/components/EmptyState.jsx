function EmptyState({ title, message }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 md:py-20 px-4">

      <div className="text-4xl md:text-5xl mb-4 animate-bounce">
        📭
      </div>

      <h2 className="text-lg md:text-xl font-semibold text-gray-700">
        {title}
      </h2>

      <p className="text-sm md:text-base text-gray-500 mt-2 max-w-sm md:max-w-md">
        {message}
      </p>

    </div>
  );
}

export default EmptyState;