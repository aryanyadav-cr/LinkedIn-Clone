
import {
    Users,
    User,
    Users2,
    Calendar,
    FileText,
    Newspaper
} from "lucide-react";

import Footer from "./Footer";
export default function Network() {
    return (
        <div className="w-64">

            <div className="w-64 bg-white rounded-xl shadow-md p-4">

                {/* Header */}
                <div className="text-gray-800 font-semibold text-lg border-b pb-2">
                    Manage my network
                </div>

                {/* List */}
                <div className="mt-3 space-y-4 text-gray-600 text-sm">

                    <div className="flex items-center justify-between hover:bg-gray-100 p-2 rounded cursor-pointer">
                        <div className="flex items-center gap-3">
                            <Users size={18} />
                            <span>Connections</span>
                        </div>
                        <span className="text-gray-500">142</span>
                    </div>

                    <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded cursor-pointer">
                        <User size={18} />
                        <span>Following & followers</span>
                    </div>

                    <div className="flex items-center gap-3 ">
                        <Users2 size={18} />
                        <span>Groups</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Calendar size={18} />
                        <span>Events</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <FileText size={18} />
                            <span>Pages</span>
                        </div>
                        <span className="text-gray-500">2</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Newspaper size={18} />
                        <span>Newsletters</span>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
};