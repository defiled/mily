"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { NewEvent } from "@/types/events";

export default function EventForm() {
    const router = useRouter();
    const [formData, setFormData] = useState<NewEvent>({
        title: "",
        description: "",
        photoUrl: "",
        eventDate: new Date(),
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch("/api/events", {
            method: "POST",
            body: JSON.stringify(formData),
        });
        router.refresh();
        setFormData({
            title: "",
            description: "",
            photoUrl: "",
            eventDate: new Date(),
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-4 rounded shadow space-y-4"
        >
            <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Event Title"
                className="w-full p-2 border rounded"
                required
            />
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Event Description"
                className="w-full p-2 border rounded"
                required
            />
            <input
                name="photoUrl"
                value={formData.photoUrl}
                onChange={handleChange}
                placeholder="Photo URL"
                className="w-full p-2 border rounded"
                required
            />
            <input
                name="eventDate"
                value={formData.eventDate.toISOString().split("T")[0]}
                onChange={handleChange}
                type="date"
                className="w-full p-2 border rounded"
                required
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
                Add Event
            </button>
        </form>
    );
}
