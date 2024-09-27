import { ProductStatus } from '~/types/enums';

export const isHidden = (status?: unknown): status is ProductStatus.Hidden => status === ProductStatus.Hidden;
export const isPromote = (status?: unknown): status is ProductStatus.Promote => status === ProductStatus.Promote;
