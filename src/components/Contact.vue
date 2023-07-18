<template>
  <section class="contact__section">
    <div class="container">
      <div class="row">
        <h2 class="contact__title all-title">{{ store.title }}</h2>
        <p class="contact__txt all-txt">{{ store.txt }}</p>

        <button class="contact-btn" @click="mStore.modalVisible = true">получить консультацию<span class="btn-icon"><i class="fas fa-arrow-right"></i></span></button>
      </div>
    </div>
  </section>
</template>

<script>
import { contactStore } from "@/stores/contactStore.js";
import { modalStore } from "@/stores/modalStore.js";
export default {
  name: 'Contact',
  data() {
    return {
      store: contactStore(),
      mStore: modalStore()
    }
  }
}

</script>

<style lang="scss" scoped>

.contact__section {
  width: 100%;
  padding: 40px 0;

  .row {
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 10px;
  }

  .contact__txt {
    font-size: 24px;
    &::first-letter {
      text-transform: uppercase;
    }
  }

  .contact-btn {
    max-width: max-content;
    width: 100%;
    padding: 7px 7px 7px 20px;
    border-radius: 25px;
    background: radial-gradient(141.42% 141.42% at 0% 0%, rgba(250, 250, 250, 0.20) 0%, rgba(246, 246, 246, 0.00) 100%);
    backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 17px;
    margin-top: 20px;
    text-transform: capitalize;

    .btn-icon {
        display: block;
        min-width: 50px;
        max-width: 50px;
        width: 100%;
        height: 50px;
        border-radius: 15px;
        background: linear-gradient(140deg, #4AAEFF 0%, rgba(12, 145, 252, 0.37) 100%);
        display: grid;
        place-items: center;
        font-size: 25px;
    }
  }
}

</style>