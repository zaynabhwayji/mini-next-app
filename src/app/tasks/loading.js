export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <div className="text-center space-y-4">
        
        <div className="w-10 h-10 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin mx-auto"></div>

        <p className="text-gray-300 text-lg">
          Loading tasks...
        </p>
      </div>
    </div>
  );
}