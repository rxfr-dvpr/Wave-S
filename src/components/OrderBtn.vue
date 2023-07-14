<template>
    <button class="order-btn" @click="modalVisible = true">{{ btnValue }}</button>

    <Transition name="order">
        <div class="order__modal" v-show="modalVisible" @click.self="modalVisible = false">
            <button class="close-btn" @click="modalVisible = false"><i class="far fa-times"></i></button>

            <div class="order__modal-content">
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

                <button type="submit" class="modal-form-btn">{{ store.getBtnValue }} <span class="btn-icon"><i class="fas fa-arrow-right"></i></span></button>

                <p class="modal-policy-txt" v-html="store.policyTxt"></p>
            </div>

            <div class="order__modal-final">
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
            modalVisible: false
        }
    },
    props: {
        btnValue: {
            type: String,
            default: 'заказать звонок'
        }
    }
}

</script>

<style lang="scss" scoped>

.order-btn {
    position: relative;
    text-transform: capitalize;
    padding: 10px 8px;
    border-radius: 3px;
    border: 2px solid #69BDF9;
    font-size: 15px;
    margin-left: auto;
    backdrop-filter: blur(12px);    
    transition: .4s;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #6abbf5 0%, rgb(24, 68, 104) 100%);
        z-index: -1;
        transition: .4s;
    }

    &:hover {
        &::after {
            opacity: 0;
        }

        background: var(--main-dark-blue);
    }
}

.order__modal {
    max-width: 850px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    padding: 40px 110px 95px 110px;
    background: #2e2e2e;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 35px;

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

        .modal {

            &-title {
                font-size: 40px;
    
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

                &-btn {
                    padding: 7px 7px 7px 20px;
                    border-radius: 25px;
                    background: radial-gradient(141.42% 141.42% at 0% 0%, rgba(250, 250, 250, 0.20) 0%, rgba(246, 246, 246, 0.00) 100%);
                    backdrop-filter: blur(12px);
                    display: flex;
                    align-items: center;
                    gap: 30px;
                    font-size: 17px;
                    margin-top: 20px;

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
    
            &-policy-txt {
                font-size: 15px;

                &::first-letter {
                    text-transform: uppercase;
                }
            }
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

</style>