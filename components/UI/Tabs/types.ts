import type { VTabs } from 'vuetify/components';

export type VTabsProps = InstanceType<typeof VTabs>['$props'];
export type ModelValue = string | number;

export interface ITab {
    value: ModelValue | Ref<ModelValue>;
    label?: string | number;
    text?: string | number;
    route?: string;
}

export interface IProps extends /* @vue-ignore */ VTabsProps {
    tabs?: ITab[];
};
