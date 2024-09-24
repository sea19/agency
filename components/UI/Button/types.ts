import type { VBtn } from 'vuetify/components';

export type VBtnProps = InstanceType<typeof VBtn>['$props'];
export type VBtnSlots = InstanceType<typeof VBtn>['$slots'];

export interface IProps extends /* @vue-ignore */ VBtnProps {
    color?: 'primary' | 'secondary' | string;
    size?: VBtnProps['size'];
    variant?: VBtnProps['variant'];
    rounded?: VBtnProps['rounded'];
};
