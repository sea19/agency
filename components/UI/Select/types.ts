import type { VSelect } from 'vuetify/components';

export type VSelectProps = InstanceType<typeof VSelect>['$props'];
export type ModelValue = VSelectProps['modelValue'];

export interface IProps extends /* @vue-ignore */ Omit<VSelectProps, 'modelValue'> {
    variant?: VSelectProps['variant'];
    noDataText?: string;
};
