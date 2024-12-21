import ClientWrapper from "@/components/ClientWrapper";
import { prisma } from "@/lib/prisma";

export default async function Page() {
    const events = await prisma.event.findMany({
        orderBy: { eventDate: "desc" },
    });

    return <ClientWrapper initialEvents={events} />;
}
