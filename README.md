# Soporte a la Mano

**"Soporte a la Mano"** es una aplicación web diseñada para facilitar la generación de reportes técnicos en formato PDF. Esta herramienta está orientada a equipos de soporte técnico que necesitan documentar incidentes, registrar soluciones aplicadas y generar comprobantes para los usuarios atendidos.

## 🚀 Características Principales

- **Formulario de Soporte Técnico**:
  - Captura información como:
    - Número de caso en mesa.
    - Número de ticket (generado automáticamente).
    - Nombre y correo del soporte técnico.
    - Falla presentada, tipo de dispositivo, serial o placa, y solución aplicada.
  - Incluye un desplegable para seleccionar IDs predefinidos.

- **Formulario de Usuario**:
  - Captura datos del usuario atendido:
    - Nombre y correo electrónico.
    - Conformidad con la atención brindada.
    - Observaciones adicionales.

- **Evidencia Fotográfica**:
  - Permite subir imágenes relacionadas con el incidente.
  - Las imágenes se muestran como vista previa y pueden eliminarse antes de generar el reporte.

- **Firma Digital**:
  - Incluye un canvas interactivo para capturar la firma del usuario.
  - La firma se incluye automáticamente en el reporte PDF.

- **Generación de Reportes en PDF**:
  - Utiliza la librería `html2pdf.js` para generar un comprobante técnico en formato PDF.
  - El reporte incluye:
    - Información del soporte técnico y del usuario.
    - Evidencia fotográfica.
    - Firma digital.
    - Observaciones.

- **Interfaz Limpia y Responsiva**:
  - Diseñada con estilos modernos y responsivos utilizando Tailwind CSS.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend**:
  - [Astro](https://astro.build/): Framework para construir aplicaciones web rápidas y modernas.
  - [Tailwind CSS](https://tailwindcss.com/): Framework de CSS para estilos responsivos y modernos.
  - [SignaturePad](https://github.com/szimek/signature_pad): Librería para capturar firmas digitales en un canvas.
  - [html2pdf.js](https://github.com/eKoopmans/html2pdf.js): Librería para convertir contenido HTML en archivos PDF.

- **JavaScript**:
  - Manejo de eventos del formulario.
  - Generación de números de ticket automáticamente.
  - Conversión de imágenes a base64 para incluirlas en el PDF.

---

## 📂 Estructura del Proyecto

```text
src/
├── components/
│   └── Form.astro          # Componente del formulario principal
├── layouts/
│   └── Layout.astro        # Layout base para la aplicación
├── pages/
│   └── index.astro         # Página principal de la aplicación
├── public/
│   └── logoSena.png        # Logo utilizado en el reporte PDF
└── styles/
    └── global.css          # Estilos globales
```

---

## 🚀 Cómo Usar

### **Requisitos Previos**
- Node.js instalado en tu máquina.

### **Instalación**
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/soporte-a-la-mano.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd soporte-a-la-mano
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

### **Ejecución en Desarrollo**
1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
2. Abre tu navegador en [http://localhost:4321/](http://localhost:4321/).

### **Despliegue**
1. Construye el proyecto para producción:
   ```bash
   npm run build
   ```
2. Sirve los archivos estáticos desde la carpeta `dist` o despliega en plataformas como Vercel o Netlify.

---

## 📋 Cómo Funciona

1. Completa el formulario con los datos del soporte técnico y del usuario.
2. Sube imágenes relacionadas con el incidente.
3. Firma digitalmente en el canvas.
4. Haz clic en "Generar Reporte PDF" para descargar el comprobante técnico.

---

## 📸 Capturas de Pantalla

### **Formulario Principal**
![Formulario Principal](ruta-a-la-imagen)

### **Reporte PDF Generado**
![Reporte PDF](ruta-a-la-imagen)

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras un problema o tienes una idea para mejorar la aplicación, abre un issue o envía un pull request.

---
