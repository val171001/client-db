<template>
    <div class="fixed-center">
        <q-card style="min-width: 400px">
            <q-card-section>
                <div class="q-pa-md flex flex-center text-h6">Iniciar Sesion</div>
            </q-card-section>
            <q-card-section class="q-gutter-xl">
                <q-form @submit="logIn">
                    <q-input
                        label="Nombre de usuario"
                        v-model="username"
                        :rules="[val => val !== null && val !== '' || 'Por favor ingrese nombre de usuario.']"
                    />
                    <q-input
                        label="Contraseña"
                        v-model="password"
                        type="password"
                        :rules="[val => val !== null && val !== '' || 'Por favor ingrese contraseña.']"
                    />
                    <div class="q-pa-md flex flex-center">
                        <q-btn type="submit" label="Iniciar sesion"/>
                    </div>
                </q-form>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
import router from '@/router'
export default {
    name: 'LogIn',
    data(){
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        logIn(){
            if (this.username === 'admin' && this.password === 'admin') {
                this.$admin = true
                router.push({name: 'NewSale'})
            } else {
                router.push({name: 'NewSale'})
            }
            this.$logged.logged = true
        }
    }
}
</script>

