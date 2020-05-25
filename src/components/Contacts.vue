<template>
  <div class="contacts">
    <ContactsOffices
      :currentTabs="tabs"
      :currentMarkers="markers"
      :currentStyle="style"
    />
    <ContactsForm />
  </div>
</template>

<script>
import ContactsOffices from './ContactsOffices.vue';
import ContactsForm from './ContactsForm.vue';
import style from '../assets/map/googleMapStyle.json';

export default {
  name: 'Contacts',
  components: {
    ContactsOffices,
    ContactsForm,
  },
  data() {
    return {
      tabs: [
        {
          nameCity: 'Kyiv',
          place: 'Global Message Services Ukraine LLC',
          address: 'Kyiv, Zhylianska Street 75 | 8th Floor \n 01032 \n Ukraine',
        },
        {
          nameCity: 'Moscow',
          place: 'White Stone Buisness Centre',
          address: 'Moscow, 4th Lesnoy lane | Building 4 \n 125047 \n Russia',
        },
        {
          nameCity: 'Islamabad',
          place: 'Manzoor Plaza',
          address: 'Islamabad, Fazl-e-Haq Road, Blue Area \n 44000 \n Pakistan',
        },
        {
          nameCity: 'Singapour',
          place: 'The JTC Summit',
          address: 'Singapour, 8 Jurong Town Hall Road, #24-05 \n 609434 \n Singapour',
        },
      ],
      markers: {
        Kyiv: { lat: 50.4389385, lng: 30.4965788 },
        Moscow: { lat: 55.7790131, lng: 37.5846818 },
        Islamabad: { lat: 33.7209905, lng: 73.0775286 },
        Singapour: { lat: 1.3313375, lng: 103.739381 },
      },
      style,
    };
  },
};
</script>
