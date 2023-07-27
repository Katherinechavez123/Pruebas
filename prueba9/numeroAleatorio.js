function numeroAleatorio(min, max) {
    return Math.random() * (max - min) + min;
  }

  module.exports= numeroAleatorio;