import html2pdf from 'html2pdf.js';
import { signaturePad } from './signature.js';
import { uploadedImages } from './images.js';
import { generateTicketNumber } from './ticket.js';

document.getElementById('supportForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const element = document.createElement('div');
  element.innerHTML = `
    <div style="padding: 40px; font-family: Arial, sans-serif; color: #000; font-size: 14px;">
  
      <!-- Logo y título -->
      <div style="text-align: center; margin-bottom: 10px;">
        <img src="/logoSena.png" style="height: 80px; display: block; margin: 0 auto;">
        <div style="font-size: 14px; margin-top: 5px; color: #00af00;">Soporte a la mano</div>
      </div>
  
      <div style="text-align: center; margin-bottom: 20px;">
        <div style="font-size: 14px; margin-top: 5px;">Comprobante de Soporte Técnico</div>
      </div>
  
      <!-- Caso y Fecha -->
      <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
        <div><strong>Nro de Caso en MS:</strong> ${document.getElementById('caseNumber').value || 'Ninguno'}</div>
        <div><strong>Nro de Ticket / Fecha de atención:</strong> ${document.getElementById('ticketNumber').value}</div>
      </div>
  
      <!-- Detalle del Soporte -->
      <p style="margin-bottom: 30px;">
        El Soporte <strong>${document.getElementById('supportName').value}</strong> con correo electrónico 
        <strong><a href="mailto:${document.getElementById('supportEmail').value}">${document.getElementById('supportEmail').value}</a></strong>, 
        siendo el día y hora <strong>${document.getElementById('ticketNumber').value}</strong> atendió la 
        Falla Presentada:<strong> ${document.getElementById('issue').value}</strong>; 
        en el dispositivo:<strong>${document.getElementById('deviceType').value}</strong> con 
        serial o placa<strong> ${document.getElementById('serialNumber').value}</strong>, se brindó la siguiente
        solución:<strong>${document.getElementById('solution').value}.</strong>
      </p>
  
      <!-- Detalle del Usuario -->
      <p style="margin-bottom: 40px;">
        El Usuario <strong>${document.getElementById('userName').value}</strong> con correo electrónico 
        <strong><a href="mailto:${document.getElementById('userEmail').value}">${document.getElementById('userEmail').value}</a></strong>, 
        <strong>${document.querySelector('input[name="conformity"]:checked').value === 'si' ? 'Sí está conforme' : 'No está conforme'}</strong>, con la atención brindada.
      </p>
  
      <!-- Observaciones -->
      <div style="margin-bottom: 40px;">
        <strong>Observación:</strong><br>
        ${document.getElementById('observations').value || 'Ninguna'}
      </div>
  
      <!-- Firma -->
      <div style="margin-bottom: 40px;">
        <strong>Visto bueno:</strong><br>
        <img src="${signaturePad.toDataURL()}" style="max-width: 250px; height: auto; margin-top: 10px;">
      </div>
  
      <!-- SALTO DE PÁGINA PARA LA SEGUNDA SECCIÓN -->
      <div style="page-break-before: always;"></div>
  
  <!-- Evidencia Fotográfica -->
  ${uploadedImages.length > 0 ? `
    <div>
      <strong style="font-size: 16px;">Evidencia Fotográficas</strong>
      <div style="margin-top: 15px; display: flex; flex-wrap: wrap; gap: 10px; justify-content: space-between;">
        ${uploadedImages.map(img => `
          <div style="width: 100%;">
            <img src="${img}" style="width: 100%; height: 100%; border-radius: 4px; object-fit: contain;">
          </div>
        `).join('')}
      </div>
    </div>
  ` : ''}
    </div>
  `;

  const opt = {
    margin: 1,
    filename: `reporte-${document.getElementById('serialNumber').value}-${document.getElementById('ticketNumber').value}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  try {
    await html2pdf().set(opt).from(element).save();
    alert('Reporte PDF generado correctamente');
    this.reset();
    signaturePad.clear();
    document.getElementById('imageContainer').innerHTML = '';
    document.getElementById('ticketNumber').value = generateTicketNumber();
    uploadedImages.length = 0;
  } catch (error) {
    alert('Error al generar el PDF: ' + error.message);
  }
});
