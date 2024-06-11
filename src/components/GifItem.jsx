import { useEffect, useRef, useState } from "react";

const GifItem = ({ id, title, url, height, original }) => {
  const [showCopy, setShowCopy] = useState(false);
  const alertRef = useRef(null);
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(original)
      .then(() => {
        setShowCopy(true);
      })
      .catch((err) => {
        console.error("Error al copiar el texto: ", err);
      });
  };
  useEffect(() => {
    if (showCopy) {
      alertRef.current.classList.add("fade");
      alertRef.current.addEventListener("animationend", () => {
        setShowCopy(false);
      });
    }
  }, [showCopy]);
  if (url !== undefined) { 
    return (
      <>
        <div
          style={{
            minWidth: "100%",
            minHeight: height,
            backgroundColor: "#5865f2",
            position: "relative",
          }}
          className="card"
          key={id}
        >
          <img src={url} alt={title} onClick={handleCopyClick} />
          {showCopy && (
            <div ref={alertRef} className="popover">
              Copy in your clipboard
            </div>
          )}
        </div>
      </>
    );
  }
};

export default GifItem;
