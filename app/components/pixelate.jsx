import React, { useRef, useEffect, useState } from "react";

const Pixelate = ({ src, alt }) => {
  const canvasRef = useRef(null);
  const [currentDensity, setCurrentDensity] = useState(30);

  const handleMouseEnter = () => {
    setCurrentDensity(5);
  };

  const handleMouseLeave = () => {
    setCurrentDensity(30);
  };

  useEffect(() => {
    let isMounted = true;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "Anonymous";

    img.onload = () => {
      // Imposta le dimensioni della canvas uguali a quelle dell'immagine
      canvas.width = 300;
      canvas.height = 400;

      // Pulisce la canvas prima di disegnare
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // La densità non può essere zero
      const pixelSize = currentDensity > 0 ? currentDensity : 1;

      // Disegna l'immagine originale su una canvas temporanea in memoria per analizzare i pixel
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = img.width;
      tempCanvas.height = img.height;
      const tempCtx = tempCanvas.getContext("2d");
      tempCtx.drawImage(img, 0, 0);

      // Itera sull'immagine a blocchi definiti dalla densità
      for (let y = 0; y < img.height; y += pixelSize) {
        for (let x = 0; x < img.width; x += pixelSize) {
          // Estrae i dati dei pixel per il blocco corrente
          const imageData = tempCtx.getImageData(x, y, pixelSize, pixelSize);
          const data = imageData.data;
          let r = 0,
            g = 0,
            b = 0,
            a = 0;
          let count = 0;

          // Calcola il colore medio del blocco
          for (let i = 0; i < data.length; i += 4) {
            // Salta i pixel trasparenti per non "scurire" l'immagine
            if (data[i + 3] > 0) {
              r += data[i];
              g += data[i + 1];
              b += data[i + 2];
              a += data[i + 3];
              count++;
            }
          }

          if (count > 0) {
            const avgR = Math.floor(r / count);
            const avgG = Math.floor(g / count);
            const avgB = Math.floor(b / count);
            const avgA = Math.floor(a / count) / 255; // L'alpha deve essere tra 0 e 1

            // Imposta il colore di riempimento con il colore medio calcolato
            ctx.fillStyle = `rgba(${avgR}, ${avgG}, ${avgB}, ${avgA})`;
            // Disegna il rettangolo (il nostro "pixel" ingrandito) sulla canvas visibile
            ctx.fillRect(x, y, pixelSize, pixelSize);
          }
        }
      }
    };

    img.onerror = () => {
      if (isMounted) {
        console.error("Errore nel caricamento dell'immagine.");
      }
    };

    img.src = src;

    return () => {
      isMounted = false;
    };
  }, [src, currentDensity]);

  return (
    <figure
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      tabIndex="0"
      className="flex flex-col lg:w-1/2"
    >
      <canvas
        ref={canvasRef}
        style={{
          imageRendering: "pixelated",
        }}
      />
      <figcaption className="text-sm inline">{alt}</figcaption>
    </figure>
  );
};

export default Pixelate;
