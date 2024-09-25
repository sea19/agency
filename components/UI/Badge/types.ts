import type { VBadge } from 'vuetify/components';

export type VBadgeProps = InstanceType<typeof VBadge>['$props'];

export interface IProps extends /* @vue-ignore */ VBadgeProps {
    color?: VBadgeProps['color'];
};
