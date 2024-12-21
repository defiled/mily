import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { DBEvent, NewEvent } from "@/types/events";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const events = await prisma.event.findMany({
            orderBy: { eventDate: "asc" },
        });
        return NextResponse.json(events, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to fetch events" },
            { status: 500 }
        );
    }
}

// Handle POST requests
export async function POST(req: Request) {
    try {
        const body = (await req.json()) as NewEvent;
        const { title, description, photoUrl, eventDate } = body;

        const event: DBEvent = await prisma.event.create({
            data: {
                title,
                description,
                photoUrl,
                eventDate: new Date(eventDate),
            },
        });

        console.log("Event created!", event);
        return NextResponse.json(event, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to create event" },
            { status: 500 }
        );
    }
}
