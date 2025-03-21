<template>
  <basic-classic v-if="campaignStore.content?.base.template === Template.BASIC_CLASSIC" />
  <basic-modern v-else-if="campaignStore.content?.base.template === Template.BASIC_MODERN" />
  <easter-field v-else-if="campaignStore.content?.base.template === Template.EASTER_FIELD" />
  <div v-else-if="campaignStore.initialized">
    This template has ended
  </div>
  <div v-else>
    <span class="pi pi-spinner pi-spin h-fit w-fit m-4" />
  </div>
</template>

<script lang="ts">
import { convert } from 'html-to-text';
import { Template, VarType } from '~/models/enums';

export default defineComponent({
  name: 'CampaignPage',
  setup() {
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

    const title = campaignStore.variable('campaign_name', campaignStore.locale, VarType.TRANSLATION)
      || campaignStore.variable('campaign_name', undefined, VarType.TRANSLATION)
      || campaignStore.variable('org_name', campaignStore.locale, VarType.TRANSLATION)
      || campaignStore.variable('org_name', undefined, VarType.TRANSLATION)
      || 'WeGlow Donate';
    const desc
      = convert(campaignStore.variable('description', campaignStore.locale, VarType.TRANSLATION)
        || campaignStore.variable('description', undefined, VarType.TRANSLATION)
        || '',
      );
    const img
      = campaignStore.variable('description', campaignStore.locale, VarType.IMAGE)
      || campaignStore.variable('description', undefined, VarType.IMAGE)
      || campaignStore.variable('logo', campaignStore.locale, VarType.IMAGE)
      || campaignStore.variable('logo', undefined, VarType.IMAGE);
    useSeoMeta(varsToSeo({
      title,
      description: desc,
      image: img,
    }));
    return {
      Template: Template,
      campaignStore,
    };
  },
  mounted() {
    definePageMeta({
      layout: 'campaign',
      title: 'test',
    });
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
