document.addEventListener('DOMContentLoaded', () => {
  const nao = document.getElementById('nao');
  const sim = document.getElementById('sim');

  // comportamento que você já tinha (botão "não" fugindo)
  nao.addEventListener('mouseenter', () => {
    const padding = 10;
    const maxX = Math.max(window.innerWidth - nao.offsetWidth - padding, 0);
    const maxY = Math.max(window.innerHeight - nao.offsetHeight - padding, 0);
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    nao.style.position = 'fixed';
    nao.style.left = `${randomX}px`;
    nao.style.top = `${randomY}px`;
    nao.style.transform = 'translate(0, 0)';
  });

  // clique em "Sim" -> envia email via EmailJS e depois redireciona
  sim.addEventListener('click', async () => {
    try {
      sim.disabled = true;
      const originalText = sim.textContent;
      sim.textContent = 'Enviando...';

      const templateParams = {
        resposta: 'SIM',
        page: window.location.href,
        timestamp: new Date().toLocaleString(),
        user_agent: navigator.userAgent
      };

      // SUBSTITUA 'SEU_SERVICE_ID' e 'SEU_TEMPLATE_ID' pelos IDs do seu painel EmailJS
      await emailjs.send('service_vaovm95', 'template_xcjwhcj', templateParams);

      
      // redireciona após envio
      window.location.href = 'https://www.youtube.com/watch?v=M9Yvvs2eBtc&t=130s';
    } catch (err) {
      console.error('Erro ao enviar notificação:', err);
      
    } finally {
      sim.disabled = false;
      sim.textContent = 'Sim';
    }
  });
});
