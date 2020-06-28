<template>
    <ion-content>
        <ion-list lines="full" class="ion-no-margin ion-no-padding">
            <ion-list-header class="clear">
                <ion-card class="clear">
                    <ion-card-header>
                        <ion-card-title>19 Rue Yves Toudic, 75010 Paris</ion-card-title>
                        <ion-card-title>Tel: <a href="tel:+33142419776">+33142419776</a></ion-card-title>
                        <ion-card-title>Email: <a href="mailto:contact@webstart.com">contact@webstart.com</a>
                        </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.356464221058!2d2.3608514155664766!3d48.8704807792888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e0989542143%3A0x9384848c375ced98!2s%C3%89cole%20Webstart!5e0!3m2!1sfr!2sfr!4v1593374066518!5m2!1sfr!2sfr"
                                width="300" height="300" frameborder="0" style="border:0;" allowfullscreen=""
                                aria-hidden="false" tabindex="0"></iframe>
                    </ion-card-content>
                    <ion-text v-if="result" color="success">Mail send !</ion-text>
                </ion-card>
            </ion-list-header>
            <ion-item>
                <ion-label position="stacked">Last Name
                    <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input required type="text" name="lastName" @input="info.lastName = $event.target.value"
                           :value="info.lastName"></ion-input>
                <ion-text class="danger" v-if="!$v.info.lastName.required" color="danger">Please fill this field
                </ion-text>
            </ion-item>

            <ion-item>
                <ion-label position="stacked">First Name
                    <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input required type="text" name="firstName" @input="info.firstName = $event.target.value"
                           :value="info.firstName"></ion-input>
                <ion-text class="danger" v-if="!$v.info.firstName.required" color="danger">Please fill this field
                </ion-text>
            </ion-item>

            <ion-item>
                <ion-label position="stacked">Email
                    <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input required type="email" name="Email" @input="info.email = $event.target.value"
                           :value="info.email"></ion-input>
                <ion-text class="danger" v-if="!$v.info.email.required" color="danger">Please fill this field</ion-text>
            </ion-item>

            <ion-item>
                <ion-label position="stacked">Object
                    <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input required type="text" name="object" @input="info.object = $event.target.value"
                           :value="info.object"></ion-input>
                <ion-text class="danger" v-if="!$v.info.object.required" color="danger">Please fill this field
                </ion-text>
            </ion-item>

            <ion-item>
                <ion-label position="stacked">Content
                    <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input required type="text" name="content" @input="info.content = $event.target.value"
                           :value="info.content"></ion-input>
                <ion-text class="danger" v-if="!$v.info.content.required" color="danger">Please fill this field
                </ion-text>
            </ion-item>

        </ion-list>

        <div class="ion-padding">
            <ion-button expand="block" type="submit" v-on:click="sendForm" class="ion-no-margin">Send mail</ion-button>
        </div>
    </ion-content>
</template>
<script>
  import {required, helpers} from 'vuelidate/lib/validators'

  const touchMap = new WeakMap()

  export default {
    name: 'Home',
    data() {
      return {
        info: {
          lastName: ' ',
          firstName: ' ',
          email: ' ',
          object: ' ',
          content: ' ',
        },
        result: false
      }
    },
    methods: {
      sendForm: function () {
        this.$v.$touch()
        if (this.$v.$invalid) {
          console.log(false)
        } else {
          fetch("http://127.0.0.1:8000/api/contact", {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(this.info)
          })
                  .then((res) => res.json())
                  .then((res) => {
                    this.result = true
                  })
        }
      }
    },
    validations: {
      info: {
        lastName: {
          required
        }
        ,
        firstName: {
          required
        }
        ,
        email: {
          required,
        }
        ,
        object: {
          required
        }
        ,
        content: {
          required
        }
        ,
      }
    }
  }
</script>
<style lang="scss" scoped>
    .clear {
        margin: 0;
        padding: 0;

        > .clear {
            width: 100%;
        }
    }

    .danger {
        font-size: 10px;
    }
</style>