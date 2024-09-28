<template>
    <section class="page-agents">
        <AgentCard v-for="agent in agents" v-bind="agent" :key="agent.id" />
    </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';

const companyStore = useCompanyStore();
const { companyId } = storeToRefs(companyStore);

const { data: agents } = await useFetch(`/company/agent/${companyId.value}`);
</script>

<style scoped lang="scss">
.page-agents {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    padding: 32px 0 64px;

    @media screen and (max-width: 768px) {
        padding: 24px 0 48px;
    }
}
</style>
