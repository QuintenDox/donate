<template>
  <basic-classic v-if="campaignStore.content?.base.template === Template.BASIC_CLASSIC" />
  <basic-modern v-else-if="campaignStore.content?.base.template === Template.BASIC_MODERN" />
  <div v-else>
    This template has ended
  </div>
</template>

<script lang="ts">
import { Template, VarType } from '~/models/enums';

export default defineComponent({
  name: 'CampaignPage',
  setup() {
    definePageMeta({
      layout: 'campaign',
      title: 'WeGlow pagina',
    });
    const campaignStore = useCampaignStore();

    const colors = campaignStore.content?.variables.filter(v => v.type === VarType.COLOR);
    if (colors) {
      const style = document.documentElement.style;
      colors.forEach((color) => {
        const c = `#${color.value}`;
        style.setProperty(`--t-${color.title.replace(/_/g, '-')}`, c);
        style.setProperty(`--t-${color.title.replace(/_/g, '-')}-dark`, darkenHexColor(c, 0.8));
        style.setProperty(`--t-${color.title.replace(/_/g, '-')}-light`, darkenHexColor(c, 1.2));
        if (color.title === 'button') {
          style.setProperty('--p-primary-500', c);
          style.setProperty('--p-primary-600', darkenHexColor(c, 0.8));
          style.setProperty('--p-primary-700', darkenHexColor(c, 0.7));
          style.setProperty('--p-primary-400', darkenHexColor(c, 1.1));
          style.setProperty('--p-primary-300', darkenHexColor(c, 1.2));
          style.setProperty('--p-primary-200', darkenHexColor(c, 1.3));
          style.setProperty('--p-primary-100', darkenHexColor(c, 1.4));
        }
        else if (color.title === 'background') {
          style.setProperty('--p-button-outlined-primary-hover-background', c);
        }
      });
    }

    return {
      Template: Template,
      campaignStore,
    };
  },
});
</script>

<style>
.p-button-outlined {
  background-color: var(--t-background) !important;
  &:hover {
    background-color: var(--t-background-light) !important;
  }
}
</style>
