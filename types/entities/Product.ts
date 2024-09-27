import type { Id } from '@/types/Id';
import type { ICategory } from '@/types/entities';

export interface IProduct {
    id: Id;
    companyId: Id;
    name?: string;
    category?: ICategory;
    subcategory?: ICategory;
    price?: number;
    views?: number;
    publicationDate?: string;
    isPromote?: boolean;
    isHidden?: boolean;
    imageUrl?: string;
}
