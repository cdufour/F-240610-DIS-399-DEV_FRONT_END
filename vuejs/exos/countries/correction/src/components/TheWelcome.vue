<template>
  <div>
      <h2>Accueil</h2>
      <button @click="logInOut">
        Log {{ isLog ? 'Out' : 'In' }} 
      </button>
  </div>
</template>

<script setup>
import { auth } from '@/firebase/config'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { ref, onBeforeMount } from 'vue'

const isLog = ref(false);

const user = {
  email: 'chris@fatigue.fr',
  password: '123abc' 
}

// problème en cas de rechargement manuel de l'app
// beforeMount sera traité avant le retour de l'accès
// à indexDB qui détermine la valeur de auth.currrentUser
onBeforeMount(()=> {
  if (auth.currentUser) {
    isLog.value = true;
  }
})

async function logInOut() {

  if (isLog.value) {
    // déjà loggué, on se délogue
    console.log('Log out...')
    signOut(auth);
  } else {
    console.log('Log in...')
    try {
      const res = await signInWithEmailAndPassword(auth, user.email, user.password);
      isLog.value = true;
    } catch (err) {
      isLog.value = false;
      console.log(err);
    }
  
  }

}

</script>

