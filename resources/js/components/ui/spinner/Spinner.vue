<template>
  <div class="spinner"></div>
</template>

<style scoped>
.spinner {
  border: 2px solid rgba(255, 255, 255, 0.3);
  /* light background */
  border-top: 2px solid white;
  /* actual spinning color */
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: spin 0.6s linear infinite;
  /* 🔑 animation */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
