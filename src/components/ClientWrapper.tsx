"use client";
import EventForm from "./EventForm";
import Timeline from "./Timeline";
import type { DBEvent } from "@/types/events";

interface ClientWrapperProps {
    initialEvents: DBEvent[];
}

export default function ClientWrapper({ initialEvents }: ClientWrapperProps) {
    return (
        <div className="space-y-8">
            <EventForm />
            <Timeline initialEvents={initialEvents} />
        </div>
    );
}
