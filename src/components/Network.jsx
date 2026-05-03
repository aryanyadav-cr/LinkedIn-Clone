import Left from "./NetLeft";

export default function Network() {
  return (
    <div className="flex justify-center bg-[#e9e5df] min-h-screen pt-20">
      
      {/* Container */}
      <div className="flex gap-6 w-[1100px]">
        
        {/* Left Sidebar */}
        <Left />

        {/* Right Content */}
        <div className="flex-1 space-y-4">

          {/* Tabs */}
          <div className="bg-white rounded-lg p-4 flex gap-6 border">
            <h3 className="font-medium text-green-600 border-b-2 border-green-600 pb-1">
              Grow
            </h3>
            <h3 className="text-gray-600">Catch up</h3>
          </div>

          {/* Invitation Card */}
          <div className="bg-white rounded-lg p-4 border flex justify-between">
            <span>No pending invitations</span>
            <span className="text-gray-600 cursor-pointer">Manage</span>
          </div>

        </div>
      </div>
    </div>
  );
}