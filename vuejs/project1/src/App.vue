<template>
    <div>
        <app-header/>
        <div class="container">
            <!-- <Cars :cars="cars" /> -->
            
            <!-- <Cars /> -->
            <hr/>
            <!-- <CarBrands>
                <template v-slot:brands>
                    <ul>
                        <li v-for="(brand, index) in brands" :key="index">
                            {{ brand }}
                        </li>
                    </ul>
                </template>
                <template v-slot:other>
                    <p>Fiat</p>
                </template>
            </CarBrands> -->
            
            <!-- <Citychoice /> -->
            <!-- <Switchbutton /> -->
            <Life v-if="showLife" />
        </div>
    </div>
</template>

<script setup>
    import Cars from '@/components/Cars/index.vue'
    import CarBrands from '@/components/Cars/brands.vue'
    import { reactive, provide, ref } from 'vue'
    import Citychoice from '@/components/exos/Citychoice/index.vue'
    import Switchbutton from '@/components/exos/SwitchButton.vue'
    import Life from '@/components/Life/index.vue'

    const brands = reactive(['Toyota', 'Peugeot', 'Suzuki'])

    const cars = reactive([
        {model:'F9',brand:'Ferrari'},
        {model:'911',brand:'Porsche'},
        {model:'Fiesta',brand:'Ford'}
    ])

    const updateCar = () => {
        cars[0].brand = 'Fiat';
    }

    provide('cars', { cars, updateCar })

    const showLife = ref(true)

    setTimeout(() => {
        showLife.value = false;
    }, 5000)

</script>

<style scoped>
    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto',sans-serif;
    }
    .container { 
        min-height: 84vh;
        box-sizing: border-box;
        padding: 20px;
    }
</style>