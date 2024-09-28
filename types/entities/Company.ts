import type { Id } from '~/types/Id';
import type { IRating } from '~/types/entities';

export interface ICompany {
    id: Id;
    name: string;
    imageUrl?: string;
}

export interface ICompanyRating extends Partial<IRating> {
    id: Id;
    companyId: Id;
}

export interface ICompanyInfo {
    id: Id;
    companyId: Id;
    description?: string;
    startTime?: string;
    finishTime?: string;
    address?: string;
}
