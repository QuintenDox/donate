<template>
  <basic-classic-card
    :title="$t('messages.title')"
    class="w-full"
  >
    <div class="max-h-[26rem] overflow-scroll">
      <div
        v-for="message in messages"
        :key="`${message.name}-${message.date}`"
        class="basic-classic-message flex flex-row mx-2 py-4 text-sm justify-between"
      >
        <div class="flex-1 flex flex-col justify-between">
          <div><b>{{ message.name }}</b></div>
          <div>{{ message.description }}</div>
        </div>
        <div class="flex flex-col justify-start items-end">
          <div>{{ message.date }}</div>
          <div><b>{{ message.amount }}</b></div>
        </div>
      </div>
    </div>
  </basic-classic-card>
</template>

<script lang="ts">
import dayjs from 'dayjs';

export default defineComponent({
  name: 'BasicModernMessages',
  setup() {
    return {
      campaignStore: ref(useCampaignStore()),
      donationStore: ref(useDonationsStore()),
    };
  },
  computed: {
    currency() {
      return this.campaignStore.content?.org.currencySign;
    },
    messages() {
      return this.donationStore.messages.map(v => ({
        ...v,
        amount: `${this.currency} ${v.amount}`,
        date: dayjs(v.date).format('DD/MM/YYYY'),
      }));
    },
  },
});
</script>

<style scoped>
.basic-classic-message {
  border-bottom: 1px solid var(--t-card-text);
}
</style>
