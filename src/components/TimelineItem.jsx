function TimelineItem({ item }) {
  return (
    <div className="border-l-4 border-primary pl-3 md:pl-4 mb-3 md:mb-4 hover:bg-base-100/50 transition-all duration-200 py-2 rounded-r-md">

      <p className="font-bold text-sm md:text-base text-[#1f2937]">
        {item.title}
      </p>

      <p className="text-xs md:text-sm text-gray-500 mt-1">
        {item.date}
      </p>

    </div>
  );
}

export default TimelineItem;