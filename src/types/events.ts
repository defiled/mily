export interface NewEvent {
    title: string;
    description: string;
    photoUrl: string;
    eventDate: Date;
}

export interface DBEvent extends NewEvent {
    id: number;
    createdAt: Date;
    // Any other DB-specific fields
}

export interface ClientEvent extends DBEvent {
    // Any client-specific computed fields or transformations
    formattedDate?: string;
}
