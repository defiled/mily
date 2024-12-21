export interface BaseEvent {
    title: string;
    description: string;
    photoUrl: string;
    eventDate: Date;
}

export interface NewEvent extends BaseEvent {
    // Fields needed for creation
}

export interface DBEvent extends BaseEvent {
    id: number;
    createdAt: Date;
    // Any other DB-specific fields
}

export interface ClientEvent extends DBEvent {
    // Any client-specific computed fields or transformations
    formattedDate?: string;
}
