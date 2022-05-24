<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
import { loginFunction } from '@/utils/LoginFunctions.js';


export default {
    name : 'FormMain',
    mixins: [validationMixin],

    validations: {
      password: { required },
      email: { required, email },
      tenantId : { required } 
    },

    data: () => ({
      password: '',
      email: '',
      tenantId : ''
    }),

    computed: {
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Password is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      tenantIdErrors () {
          const errors = []
          if (!this.$v.tenantId.$dirty) return errors
          !this.$v.tenantId.required && errors.push('Tenant ID is required.')
          return errors
    },
    },

    methods: {
      loginFunction : loginFunction,
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.password = ''
        this.email = ''
        this.tenantId = ''
      },
    },
  }
</script>

<template>
  <form  class="form mt-16 pa-10 white" @submit.prevent="loginFunction(email, password, tenantId)" >
    <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
        autocomplete="on"
        name="password"
        type="password"
        v-model="password"
        :error-messages="passwordErrors"
        label="Password"
        required
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
    ></v-text-field>
    <v-text-field
        autocomplete="on"
        name="tenantId"
        v-model="tenantId"
        :error-messages="tenantIdErrors"
        label="Tenant ID"
        required
        @input="$v.tenantId.$touch()"
        @blur="$v.tenantId.$touch()"
    ></v-text-field>
    <v-btn
      class="mr-4 deep-purple lighten-1 white--text mt-5"
      type="submit"
    >
      <input type="submit" value="Login">
    </v-btn>
    <v-btn @click="clear" class="deep-purple lighten-1 white--text mt-5">
      clear
    </v-btn>
  </form>
</template>