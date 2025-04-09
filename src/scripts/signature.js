import SignaturePad from 'signature_pad';

export const canvas = document.getElementById('signaturePad');
export const signaturePad = new SignaturePad(canvas);

document.getElementById('clearSignature').addEventListener('click', () => {
  signaturePad.clear();
});
