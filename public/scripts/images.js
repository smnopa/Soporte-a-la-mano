export let uploadedImages = [];

document.getElementById('photos').addEventListener('change', function (e) {
  const container = document.getElementById('imageContainer');

  for (let file of e.target.files) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageData = e.target.result;
      uploadedImages.push(imageData);

      const div = document.createElement('div');
      div.className = 'relative';

      const img = document.createElement('img');
      img.src = imageData;
      img.className = 'h-20 w-20 object-cover rounded';

      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '×';
      deleteBtn.className = 'absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center';
      deleteBtn.onclick = function () {
        const index = uploadedImages.indexOf(imageData);
        if (index > -1) uploadedImages.splice(index, 1);
        div.remove();
      };

      div.appendChild(img);
      div.appendChild(deleteBtn);
      container.appendChild(div);
    };
    reader.readAsDataURL(file);
  }
});
