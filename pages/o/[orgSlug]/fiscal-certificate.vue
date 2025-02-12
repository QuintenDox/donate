<template>
  <prime-form
    class="w-full h-full flex flex-col md:grid gap-x-2 gap-y-4 grid-cols-2"
    :resolver="resolver"
    :initial-values="formValues"
    @submit="submit"
  >
    <div class="max-w-full mx-auto col-span-2">
      <a
        :href="orgStore.content?.general.website"
        target="_blank"
      >
        <img
          :src="orgStore.variable('logo')"
          class="max-h-24 w-full h-full object-contain"
        >
      </a>
    </div>
    <custom-input-switch
      v-model="formValues.company"
      name="company"
      class="md:col-span-2"
    />
    <template v-if="formValues.company">
      <label>{{ $t('fiscal.companyFields') }}</label>
      <custom-input-text
        v-model="formValues.companyName"
        required
        name="companyName"
      />
      <custom-input-text
        v-model="formValues.nationalNr"
        required
        name="vatNr"
      />
    </template>
    <template v-else>
      <label>{{ $t('fiscal.personalFields') }}</label>
      <custom-input-text
        v-model="formValues.firstName"
        required
        name="firstName"
      />
      <custom-input-text
        v-model="formValues.lastName"
        required
        name="lastName"
      />
      <custom-input-text
        v-model="formValues.nationalNr"
        required
        name="nationalNr"
      />
      <custom-input-select
        v-model="formValues.gender"
        :options="genderOptions"
        name="gender"
      />
    </template>
    <label>{{ $t('fiscal.location') }}</label>
    <custom-input-select
      v-model="formValues.country"
      :options="countryOptions"
      name="country"
    />
    <div class="hidden md:block" />
    <custom-input-text
      v-model="formValues.locality"
      required
      name="locality"
    />
    <custom-input-text
      v-model="formValues.postalCode"
      required
      name="postalCode"
    />
    <custom-input-text
      v-model="formValues.streetNr"
      required
      name="streetNr"
    />
    <custom-input-text
      v-model="formValues.premise"
      required
      name="premise"
    />
    <div class="md:col-span-2 ml-auto">
      <Button
        type="submit"
        :label="$t('donate.submit')"
      />
    </div>
  </prime-form>
</template>

<script lang="ts">
import { Form as PrimeForm, type FormSubmitEvent } from '@primevue/forms';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { certificateZod } from '~/models/donation';
import countryOptions from '~/assets/europeanCountries';

export default defineComponent({
  name: 'Donate',
  components: {
    PrimeForm,
  },
  setup() {
    definePageMeta({
      layout: 'org',
      title: 'WeGlow pagina',
    });

    const orgStore = useOrgStore();

    return {
      orgStore: ref(orgStore),
      countryOptions,
      genderOptions: [{ value: 'M', label: 'M' }, { value: 'F', label: 'F' }, { value: 'X', label: 'X' }],
    };
  },
  data() {
    return {
      formValues: {
        company: false,
        firstName: '',
        lastName: '',
        nationalNr: '',
        companyName: '',
        country: '',
        locality: '',
        postalCode: '',
        streetNr: '',
        premise: '',
        gender: '',
      },
      resolver: zodResolver(certificateZod),
      orgSlug: this.$route.params.orgSlug,
    };
  },
  methods: {
    async submit(event: FormSubmitEvent) {
      try {
        console.log(event);
        console.log(this.formValues);
        // await this.$api.donation.createCertificate(this.orgSlug, this.formValues);
        // this.$router.push(`/o/${this.orgSlug}/thank-you`);
      }
      catch (err) {
        console.error(err);
      }
    },
  },
});
</script>
