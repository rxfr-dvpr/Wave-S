<template>
    <button class="modal-btn" @click="store.modalVisible = true">{{ store.btnValue }} <span class="btn-icon"><i class="fas fa-arrow-right"></i></span></button>

    <Transition name="order">
        <div :class="`order__modal-bg ${store.modalVisible ? 'visible' : ''}`" @click.self="store.modalVisible = false" v-show="store.modalVisible">

        <div class="order__modal">
            <button class="close-btn" @click="store.modalVisible = false"><i class="far fa-times"></i></button>

            <Transition name="final">

            <div class="order__modal-content" v-if="!store.finalVisible">
                <h3 class="modal-title">{{ store.title }}</h3>
                <p class="modal-text">{{ store.text }}</p>

                <form action="" class="modal-form">
                    <input type="text" class="modal-form-name" 
                    v-model="store.userName" :placeholder="store.nameVal" required>
                    <input type="tel" class="modal-form-tel" 
                    v-model="store.userTel" :placeholder="store.telVal" required>
                    <textarea class="modal-form-msg" 
                    v-model="store.userMsg" :placeholder="store.msgVal" required></textarea>
                </form>

                <button type="submit" class="modal-btn submit-btn"  @click="getConsultation">{{ store.getBtnValue }} <span class="btn-icon"><i class="fas fa-arrow-right"></i></span></button>

                <p class="modal-policy-txt" v-html="store.policyTxt"></p>
            </div>        

            <div class="order__modal-final" v-else>
                <span class="final-icon"><i class="fad fa-check fa-3x"></i></span>
                
                <h3 class="final-title modal-title">{{ store.thanksTitle }}</h3>
                <p class="final-text modal-text">{{ store.thanksTxt }}</p>

                <button class="modal-btn final-btn" @click="store.modalVisible = false ">{{ store.backBtnValue }} <span class="btn-icon"><i class="fas fa-arrow-right"></i></span></button>
            </div>

            </Transition>

        </div>

        </div>
    </Transition>

</template>

<script>
import { modalStore } from '@/stores/modalStore.js'

export default {
    name: 'Order Button',
    data() {
        return {
            store: modalStore(),
        }
    },
    methods: {
        getConsultation() {
            if (this.store.userName !== '' && this.store.userTel !== '' && this.store.userMsg !== '') {
                this.store.finalVisible = true
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.order__modal-bg {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2020;
    background: rgba($color: #000000, $alpha: .5);
    overflow-y: auto;
    padding: 0 50px;
    overflow-x: hidden;
}

.order__modal {
    max-width: 850px;
    width: 100%;
    padding: 40px 110px 95px 110px;
    background: #2e2e2e;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 35px;
    overflow-x: hidden;

    .close-btn {
        min-width: 50px;
        max-width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #fff;
        background: transparent;
        font-size: 20px;
        display: grid;
        place-items: center;

        &:hover {
            background: var(--main-blue);
            border-color: transparent;
            transform: rotate(360deg);

            i {
                transform: scale(1.1);
            }
        }
    }

    &-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 10px;
        text-align: center;
    }

    .modal {

        &-title {
            font-size: calc(24px + 16 * (100vw / 1920));
    
            &::first-letter {
                text-transform: uppercase;
            }
        }
    
        &-text {
            font-size: 18px;
            font-weight: 500;
    
            &::first-letter {
                text-transform: uppercase;
            }
        }
    
        &-form {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            column-gap: 30px;
            row-gap: 20px;
            margin-top: 30px;
    
            &-name, &-tel {
                max-width: 300px;
                width: 100%;
                padding: 15px;
                background: transparent;
                border-radius: 10px;
                outline: none;
                border: 1px solid #919191;
            }
    
            &-msg {
                width: 100%;
                padding: 15px;
                background: transparent;
                outline: none;
                border-radius: 10px;
                outline: none;
                border: 1px solid #919191;
                resize: vertical;
                min-height: 120px;
            }
        }
    
        &-policy-txt {
            font-size: 15px;

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }

    &-final {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 10px;
        margin-top: 60px;

        .final-icon i {
            color: var(--main-blue);
        }

        .final-btn {
            margin-top: 50px;
        }
    }
}

.modal {
    &-btn {
        max-width: max-content;
        width: 100%;
        padding: 7px 7px 7px 20px;
        border-radius: 25px;
        background: radial-gradient(141.42% 141.42% at 0% 0%, rgba(250, 250, 250, 0.20) 0%, rgba(246, 246, 246, 0.00) 100%);
        backdrop-filter: blur(12px);
        display: flex;
        align-items: center;
        gap: 30px;
        font-size: calc(15px + 2 * (100vw / 1920));
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

.order-enter-active,
.order-leave-active {
    transition: opacity .4s ease;
}

.order-enter-from,
.order-leave-to {
    opacity: 0;
}


.final-enter-active,
.final-leave-active {
    transition: .4s;
}

.final-enter-from,
.final-leave-to {
    transition: .4s;
    opacity: 0;
    position: absolute;
    transform: translateX(50%);
}

.final-enter-to,
.final-leave-from {
    transition-delay: .4s;
    opacity: 1;
}

@media (min-width: 1920px) {
    .modal {
        &-title {
            font-size: 40px !important;
        }

        &-btn {
            font-size: 17px !important;
        }
    }
}

@media (max-width: 992px) {
    .order__modal {
        padding: 20px 80px 60px;

        .modal-form {
            justify-content: center;

            .modal {
                &-title {
                    font-size: calc(24px + (16 + 16 * 0.7) * ((100vw - 320px)/ 1920));
                }
            }
        }
    }

    .modal-btn {
        font-size: calc(15px + (2 + 2 * 0.7) * ((100vw - 320px)/ 1920));
    }
}

@media (max-width: 768px) {
    .order__modal {
        padding: 20px 50px;

        &-final {
            margin-top: 0;
        }
    }
}

@media (max-width: 526px) {
    .order__modal-bg {
        padding: 0;

        .order__modal {
            height: 100%;
            border-radius: 0;
        }
    }
}

</style>