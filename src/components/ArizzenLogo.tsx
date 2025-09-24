import { Settings } from "lucide-react";

const ArizzenLogo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent tracking-wide">
        ARIZYEN
      </div>
      <div className="flex items-center gap-1 -mt-1">
        <div className="h-0.5 w-8 bg-gradient-to-r from-blue-500 to-blue-300"></div>
        <Settings className="w-3 h-3 text-blue-400" />
        <div className="h-0.5 w-8 bg-gradient-to-l from-blue-500 to-blue-300"></div>
      </div>
    </div>
  );
};

export default ArizzenLogo;