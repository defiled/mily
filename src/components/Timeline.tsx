"use client";
import { useState } from "react";
import type { DBEvent } from "@/types/events";

interface TimelineProps {
    initialEvents: DBEvent[];
}

export default function Timeline({ initialEvents }: TimelineProps) {
    const [events] = useState(initialEvents);

    return (
        <div className="space-y-6">
            {events.map((event) => (
                <div
                    key={event.id}
                    className="bg-white p-4 rounded shadow border-l-4 border-blue-600"
                >
                    <img
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
