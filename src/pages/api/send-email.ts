import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Configurar el transporte de correo
    const transporter = nodemailer.createTransport({
      // Configura aquí tu servidor SMTP
      host: "smtp.example.com",
      port: 587,
      secure: false,
      auth: {
        user: "your-email@example.com",
        pass: "your-password"
      }
    });

    // Enviar correo al soporte
    await transporter.sendMail({
      from: '"Soporte a la Mano" <noreply@example.com>',
      to: data.supportEmail,
      subject: `Reporte de Soporte - Ticket ${data.ticketNumber}`,
      html: `
        <h1>Reporte de Soporte Técnico</h1>
        <p>Se ha generado un nuevo reporte de soporte técnico.</p>
        <p>Número de Ticket: ${data.ticketNumber}</p>
        <!-- Agregar más detalles del reporte aquí -->
      `,
      attachments: [
        {
          filename: `reporte-${data.ticketNumber}.pdf`,
          path: `./reporte-${data.ticketNumber}.pdf`
        }
      ]
    });

    // Enviar correo al usuario
    await transporter.sendMail({
      from: '"Soporte a la Mano" <noreply@example.com>',
      to: data.userEmail,
      subject: `Reporte de Soporte - Ticket ${data.ticketNumber}`,
      html: `
        <h1>Reporte de Soporte Técnico</h1>
        <p>Gracias por usar nuestro servicio de soporte técnico.</p>
        <p>Número de Ticket: ${data.ticketNumber}</p>
        <!-- Agregar más detalles del reporte aquí -->
      `,
      attachments: [
        {
          filename: `reporte-${data.ticketNumber}.pdf`,
          path: `./reporte-${data.ticketNumber}.pdf`
        }
      ]
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Error sending email' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};