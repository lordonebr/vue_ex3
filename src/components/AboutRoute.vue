<template>
  <div class="divAbout">
    <h1 class="titleSection">Sobre</h1>
    <p>
      <span class="title">Pós graduação:</span> PUC Minas
    </p>
    <p>
      <span class="title">Curso:</span> Desenvolvimento Web Full Stack
    </p>
    <p>
      <span class="title">Disciplina:</span> Frameworks front end: Angular & Vue
    </p>
    <p>
      <span class="title">Professor:</span> Samuel Martins
    </p>
    <p>
      <span class="title">Aluno:</span> André Guilherme de Almeida Santos
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutRoute"
};
</script>

<style scoped>
.divAbout {
  margin: 0px 20px 0px;
}
.titleSection {
  text-transform: uppercase;
}
.title {
  font-weight: bold;
}
</style>