import type { Id } from '~/types/Id';
import type { ICategory } from '~/types/entities';
import type { ProductStatus } from '~/types/enums';

export interface IProduct {
    id: Id;
    companyId: Id;
    name?: string;
    category?: ICategory;
    subcategory?: ICategory;
    price?: number;
    views?: number;
    publicationDate?: string;
    status?: ProductStatus;
    imageUrl?: string;
}
