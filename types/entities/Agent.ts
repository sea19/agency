import type { Id } from '~/types/Id';
import type { IRating } from '~/types/entities';

export interface IAgent extends Partial<IRating> {
    id: Id;
    companyId: Id;
    firstName: string;
    lastName: string;
    description?: string;
    imageUrl?: string;
}
