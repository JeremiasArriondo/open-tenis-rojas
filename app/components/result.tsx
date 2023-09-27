type Result = {
  p1: string[];
  p2: string[];
};

export const Result = ({ p1, p2 }: Result) => {
  return (
    <div className="flex flex-col">
      <div className="flex text-gray-500 gap-2">
        {p1.map((value) => (
          <span key={value}>{value}</span>
        ))}
      </div>
      <div className="flex text-gray-500 gap-2">
        {p2.map((value) => (
          <span key={value}>{value}</span>
        ))}
      </div>
    </div>
  );
};
