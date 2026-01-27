/* Логика отправки формы через AJAX */

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async function (event) {
       event.preventDefault(); 
       
       const btn = contactForm.querySelector('button');
       const originalText = btn.innerText;
    
       // Визуализация загрузки //
       btn.innerText = "Sending...";
       btn.disabled = true;
       btn.style.opacity = "0.7";
    
       // Сбор данных //
       const formData = new FormData(contactForm);
    
       try {
           const response = await fetch(contactForm.action , {
               method: 'POST',
               body: formData,
               headers: {
                   'Accept': 'application/json'
               }
           });
           
           if (response.ok) {
               btn.innerText = "Successfully sent!";
               btn.style.backgroundColor = "#4CAF50";
               btn.style.color = "white";
               contactForm.reset();
           } else {
               btn.innerText = "Error!";
               btn.style.backgroundColor = "red";
               alert("Error sending. Check data.");
           }
       } catch (error) {
           btn.innerText = "Network Error";
           console.error("Network error:" , error);
       } finally {
           setTimeout(function() {
               btn.innerText = originalText;
               btn.style.backgroundColor = "";
               btn.style.color = "";
               btn.disabled = false;
               btn.style.opacity = "1";
           }, 3000);
       }
    });
}