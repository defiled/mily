"use client";

import { useState, useEffect } from "react";
import type { DBEvent } from "@/types/events";
import Image from "next/image";

interface TimelineProps {
    initialEvents: DBEvent[];
}

export default function Timeline({ initialEvents }: TimelineProps) {
    const [events, setEvents] = useState(initialEvents);

    useEffect(() => {
        setEvents(initialEvents);
    }, [initialEvents]);

    return (
        <div className="space-y-6">
            {events.map((event) => (
                <div
                    key={event.id}
                    className="bg-white p-4 rounded shadow border-l-4 border-blue-600"
                >
                    <Image
                        src={event.photoUrl}
                        alt={event.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover rounded mb-4"
                    />
                    <h2 className="text-xl font-bold">{event.title}</h2>
                    <p className="text-gray-500">
                        {new Date(event.eventDate).toLocaleDateString()}
                    </p>
                    <p>{event.description}</p>
                </div>
            ))}
        </div>
    );
}
