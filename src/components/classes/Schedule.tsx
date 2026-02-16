"use client";

import { Button } from "../ui/button";

const morningSchedule = [
    { time: "6:00 AM - 7:00 AM", session: "Yoga Session" },
    { time: "7:00 AM - 8:00 AM", session: "Yoga Session" },
    { time: "8:00 AM - 9:00 AM", session: "Yoga Session" },
    { time: "9:00 AM - 10:00 AM", session: "Yoga Session" },
    { time: "10:00 AM - 11:00 AM", session: "Yoga Session" },
];

const eveningSchedule = [
    { time: "4:00 PM - 5:00 PM", session: "Yoga Session" },
    { time: "5:00 PM - 6:00 PM", session: "Yoga Session" },
    { time: "6:00 PM - 7:00 PM", session: "Yoga Session" },
    { time: "7:00 PM - 8:00 PM", session: "Yoga Session" },
];

export default function Schedule() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold font-primary text-primary text-center mb-4">
                    Daily Class Schedule
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Classes run Monday through Saturday. Contact us for a demo class or special needs.
                </p>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Morning Schedule */}
                    <div className="rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="bg-primary text-white p-4">
                            <h3 className="text-xl font-bold text-center">Morning Schedule</h3>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {morningSchedule.map((row, index) => (
                                <div
                                    key={index}
                                    className={`p-4 flex justify-between items-center ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-brand-light-blue/10 transition-colors`}
                                >
                                    <span className="font-medium text-gray-900">{row.time}</span>
                                    <span className="text-gray-600">{row.session}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Evening Schedule */}
                    <div className="rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="bg-secondary text-white p-4">
                            <h3 className="text-xl font-bold text-center">Evening Schedule</h3>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {eveningSchedule.map((row, index) => (
                                <div
                                    key={index}
                                    className={`p-4 flex justify-between items-center ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-brand-light-blue/10 transition-colors`}
                                >
                                    <span className="font-medium text-gray-900">{row.time}</span>
                                    <span className="text-gray-600">{row.session}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-sm text-gray-500 mb-4">* Schedule subject to change. Please contact us for latest updates.</p>
                    <Button className="bg-primary hover:bg-primary/90">
                        Contact Us For a Demo Class
                    </Button>
                </div>
            </div>
        </section>
    );
}
