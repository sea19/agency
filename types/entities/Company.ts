import type { Id } from '@/types/Id';

export interface ICompany {
    id: Id;
    name: string;
    imageUrl?: string;
}

export interface ICompanyRating {
    id: Id;
    companyId: Id;
    score?: number;
    reviewCount?: number;
    isVerified?: boolean;
}

export interface ICompanyInfo {
    id: Id;
    companyId: Id;
    description?: string;
    startTime?: string;
    finishTime?: string;
    address?: string;
}
