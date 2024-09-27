import type { Id } from '~/types/Id';

export interface IAgent {
    id: Id;
    companyId: Id;
    name: string;
    surname: string;
    description?: string;
    imageUrl?: string;
    score?: number;
    reviewCount?: number;
    isVerified?: boolean;
}
