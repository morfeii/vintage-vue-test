<template>
  <section class="contacts__section contacts__form-section">
    <div class="container">
      <header >
        <h3 class= "form__header title-h3">Contacts Us</h3>
      </header>
      <div class="contacts__row">
            <form id="contactsForm"
              @submit.prevent="sentForm()"
              class="contacts__form form">
              <div class="form__field-wrap">
                <input
                  class="form__field"
                  type="text"
                  v-model="name"
                  id="name"
                  v-bind:class="{ error: isNameError }"
                  @blur="isNameTouched = true"
                >
                <label for="name" class="form__label">Name</label>
                <div class="form__error-message" v-if="isNameError">
                  Enter your name
                </div>
              </div>
              <div class="form__field-wrap">
                <input
                  class="form__field"
                  type="text"
                  v-model="phone"
                  id="phone"
                  v-bind:class="{ error: isPhoneError }"
                  @blur="isPhoneTouched = true"
                >
                <label for="phone" class="form__label">Phone</label>
                <div class="form__error-message" v-if="isPhoneError">
                  Enter your phone
                </div>
              </div>
              <div class="form__field-wrap">
                <input
                  class="form__field"
                  type="text"
                  v-model="email"
                  id="email"
                  v-bind:class="{ error: isEmailError }"
                  @blur="isEmailTouched = true"
                >
                <label for="email" class="form__label">E-mail</label>
                <div class="form__error-message" v-if="isEmailError">
                  Enter your email
                </div>
              </div>
              <div class="form__checkbox-wrap">
                <label class="checkbox">
                  <input
                    type="checkbox"
                    class="form__checkbox checkbox-input"
                    v-model="isAgree"
                    @blur="isCheckboxTouched = true"
                    v-bind:class="{ error: isNotAgree }"
                  >
                  <span class="form__checkbox-label checkbox-label">
                    I agree the processing of personal data
                  </span>
                </label>
                <div class="form__error-message" v-if="isNotAgree">
                  Please, agree the processing of personal data
                </div>
              </div>
              <div class="form__success" v-if="statusOk">
                Form has sent
              </div>
              <div class="form__error-message" v-if="statusError">
                Please, fill the form
              </div>
              <div class="form__button-wrap">
                <button
                  class="form__button"
                  :disabled="!isSubmitValid"
                type="submit">Get in touch</button>
              </div>

            </form>
            <div class="contacts__form-description">
              <p class="contacts__form-text">
                Please tell us more about your request and give us info about your company and country
              </p>
            </div>
          </div>
    </div>
  </section>

</template>
<script>
import { emailCheckRegex, phoneCheckRegex } from '../dependencies/constants';
import postData from '../dependencies/helpers';

export default {
  name: 'Form',
  data() {
    return {
      name: null,
      phone: null,
      email: null,
      isAgree: false,
      isEmailTouched: false,
      isNameTouched: false,
      isPhoneTouched: false,
      isCheckboxTouched: false,
      statusOk: false,
      statusError: false,
    };
  },
  computed: {
    isEmailValid() {
      return emailCheckRegex.test(this.email);
    },
    isEmailError() {
      return !this.isEmailValid && this.isEmailTouched;
    },
    isPhoneValid() {
      return phoneCheckRegex.test(this.phone);
    },
    isPhoneError() {
      return !this.isPhoneValid && this.isPhoneTouched;
    },
    isNameValid() {
      return this.name;
    },
    isNameError() {
      return !this.isNameValid && this.isNameTouched;
    },
    isAgreeValid() {
      return this.isAgree;
    },
    isNotAgree() {
      return !this.isAgreeValid && this.isCheckboxTouched;
    },
    isSubmitValid() {
      return this.isEmailValid && this.isNameValid && this.isPhoneValid && this.isAgreeValid;
    },
  },
  methods: {
    sentForm() {
      if (this.isEmailValid && this.isNameValid && this.isPhoneValid && this.isAgreeValid) {
        postData('https://httpbin.org/post',
          {
            name: this.name,
            phone: this.phone,
            email: this.email,
            isAgree: this.isAgree,
          })
          .then((data) => {
            console.log(JSON.stringify(data));
            this.isSubmiting = false;
            this.statusOk = true;
            setTimeout(() => { this.statusOk = false; }, 1000);
          })
          .catch((error) => {
            console.error(error);
            this.isSubmiting = false;
          });
      } else {
        this.statusError = true;
        setTimeout(() => { this.statusError = false; }, 1000);
      }
    },
  },
};
</script>
