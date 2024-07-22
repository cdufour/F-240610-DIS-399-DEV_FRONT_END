<script setup>
import Demo from './components/Demo.vue'
import Textlimit from './components/exos/TextLimit.vue'
import Codegen from './components/exos/CodeGen.vue'

</script>

<template>
  <div>
    <h2>Project 1</h2>
    <!-- <Demo /> -->
    <!-- <Textlimit limit="20" /> -->
    <Codegen :withLetters="true" />
    <Codegen />
  </div>
</template>

