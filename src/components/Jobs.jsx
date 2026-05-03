const jobs = [
    {
        id: 1,
        initials: "WW",
        bgColor: "bg-blue-100",
        textColor: "text-blue-700",
        title: "Front End Developer Intern (HTML, CSS, JavaScript, React)",
        company: "Wake Up Whistle",
        location: "India (Remote)",
    },
    {
        id: 2,
        initials: "ZB",
        bgColor: "bg-orange-100",
        textColor: "text-orange-700",
        title: "Web Developer Intern",
        company: "Zenithbyte",
        location: "India (Remote)",
    },
    {
        id: 3,
        initials: "SL",
        bgColor: "bg-purple-100",
        textColor: "text-purple-700",
        title: "Web Developer Intern",
        company: "Skillzenloop",
        location: "India (Remote)",
    },
];
import img2 from "./img2.png";
import Footer from "./Footer";
export default function JobsPage() {
    return (
        <div className="min-h-screen bg-[#e9e5df] pt-14 gap-4 justify-center flex">
            <div className="relative w-[320px] h-[300px] gap-30 bg-white rounded-xl border border-gray-200 flex flex-col">

                {/* Top section */}
                <div className="relative w-full">

                    {/* Header banner */}
                    <div className="h-16 w-full bg-gray-200 rounded-t-xl" />

                    {/* Avatar */}
                    <div className="absolute top-7 left-4 rounded-full h-[72px] w-[72px] overflow-hidden border-[3px] border-white">
                        <img
                            src={img2}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="px-4 pt-11 pb-3">
                        <h2 className="text-base font-medium text-gray-900 mb-1">Name</h2>
                        <h5 className="text-xs text-gray-500 leading-relaxed mb-1">
                            Lorem ipsum dolor sit amet consectetur...,!
                        </h5>
                        <span className="text-[11px] text-gray-400">
                            Haridwar, UTTARAKHAND
                        </span>
                    </div>

                </div>

                <Footer />
                

            </div>

            <div className=" flex flex-col justify-center items-center gap-4 w-129">



                {/* Job Picks */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                    <h2 className="text-base font-semibold text-gray-900 mb-0.5">Top job picks for you</h2>
                    <p className="text-xs text-gray-400 mb-4">Based on your profile, preferences, and activity like applies, searches, and saves</p>

                    <div className="flex flex-col gap-4">
                        {jobs.map((job, i) => (
                            <div
                                key={job.id}
                                className={`flex gap-3 items-start pb-4 ${i < jobs.length - 1 ? "border-b border-gray-100" : ""}`}
                            >
                                <div className={`w-11 h-11 rounded ${job.bgColor} ${job.textColor} flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                                    {job.initials}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-[#0A66C2] leading-tight hover:underline cursor-pointer">{job.title}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">{job.company} · {job.location}</p>
                                    <span className="text-[11px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded mt-1.5 inline-block border border-gray-100">
                                        Promoted · Be an early applicant
                                    </span>
                                </div>
                                <button className="text-gray-300 hover:text-gray-500 text-lg leading-none">×</button>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm text-[#0A66C2] text-center mt-2 cursor-pointer hover:underline">Show all →</p>
                </div>

                {/* Premium Banner */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Apply smarter with jobs personalized for you</p>
                    <p className="text-xs text-gray-400 mb-3">Millions of members use Premium</p>
                    <button className="bg-amber-400 hover:bg-amber-500 text-amber-900 text-sm font-semibold px-5 py-2 rounded-full transition-colors">
                        Try Premium for ₹0
                    </button>
                    <p className="text-[11px] text-gray-400 mt-2">1-month free trial. Easy to cancel.</p>
                </div>
            </div>
        </div>
    );
}