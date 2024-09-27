import type { Id } from '~/types/Id';
import type { ICategory } from '~/types/entities';

export interface ElementWithCategory {
    category?: ICategory;
    subcategory?: ICategory;
}

export interface ISubcategoryElement {
    title: string;
    value: Id;
    props: {
        subtitle: number;
    };
}

export interface ICategoryElement {
    title: string;
    value: Id;
    type: 'subheader';
}

interface ICategoryMap {
    category: ICategoryElement;
    subcategories: Map<Id, ISubcategoryElement>;
}

/**
 * Преобразует категории и подкатегории объекта в вид, понятный для селекта.
 * @param array массив объектов, которые содержат поля `category` и `subcategory`.
 */
export function mapCategory(array: ElementWithCategory[]) {
    const result: (ICategoryElement | ISubcategoryElement)[] = [];

    const categoryMap = new Map<Id, ICategoryMap>();

    array.forEach(({ category, subcategory }) => {
        if (!category) return;

        if (!categoryMap.has(category.id)) {
            categoryMap.set(category.id, {
                category: { title: category.name, value: category.id, type: 'subheader' },
                subcategories: new Map(),
            });
        }

        if (!subcategory) return;

        const categoryElement = categoryMap.get(category.id);
        if (!categoryElement) return;

        if (!categoryElement.subcategories.has(subcategory.id)) {
            categoryElement.subcategories.set(subcategory.id, {
                title: subcategory.name,
                value: subcategory.id,
                props: { subtitle: 1 },
            });

            return;
        }

        const subcategoryElement = categoryElement.subcategories.get(subcategory.id);
        if (!subcategoryElement) return;

        subcategoryElement.props.subtitle += 1;
    });

    const categoryMapValues = [...categoryMap.values()];

    categoryMapValues.forEach(({ category, subcategories }) => {
        const subcategoryMapValues = [...subcategories.values()];
        result.push(category, ...subcategoryMapValues);
    });

    return result;
}
