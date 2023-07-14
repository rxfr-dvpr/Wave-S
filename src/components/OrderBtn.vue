<template>
    <button class="order-btn">{{ btnValue }}</button>

    <div class="order-modal">
        <div class="order__modal-content">
            <button class="close-btn"></button>
            <h3 class="modal__title"></h3>
        </div>

        
    </div>


</template>

<script>

export default {
    name: 'Order Button',
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

</style>