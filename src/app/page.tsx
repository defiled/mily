import EventForm from "@/components/EventForm";
import Timeline from "@/components/Timeline";
import { prisma } from "@/lib/prisma";

export default async function Page() {
    const events = await prisma.event.findMany({
        orderBy: { eventDate: "desc" },
    });

    return (
        <div className="space-y-8">
            <EventForm />
            <Timeline initialEvents={events} />
        </div>
    );
}
