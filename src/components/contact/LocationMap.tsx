"use client";

export default function LocationMap() {
    return (
        <section className="h-[400px] w-full bg-gray-200 relative">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.3967849!3d17.4353349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x40a9b0142806b16c!2sAruna+Yoga!5e0!3m2!1sen!2sin!4v1625634567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Arunayoga Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 pointer-events-none border-t-4 border-primary/20" />
        </section>
    );
}
