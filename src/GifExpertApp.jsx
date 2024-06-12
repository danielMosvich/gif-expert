import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [service, setService] = useState("giphy");
  const [categories, setCategories] = useState(null);

  const onAddCategory = (newCategory) => {
    if (newCategory) setCategories(newCategory);
  };
  const handleService = (service) => {
    setService(service);
    setCategories(null);
  };
  return (
    <>
      <h1 className="md:my-20 my-10 font-extrabold drop-shadow-lg text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#5865F2] to-slate-500 text-center uppercase">
        Gif Expert
      </h1>
      <header>
        <button
          className={`select-button ${service === "giphy" ? "active" : ""}`}
          onClick={() => {
            handleService("giphy");
          }}
        >
          Giphy
        </button>
        <button
          className={`select-button ${service === "tenor" ? "active" : ""}`}
          onClick={() => {
            handleService("tenor");
          }}
        >
          Tenor
        </button>
      </header>
      <nav>
        <AddCategory
          onNewCategory={onAddCategory}
          setCategories={setCategories}
          service={service}
        />
      </nav>
      <main>
        {categories ? (
          <GifGrid service={service} category={categories} />
        ) : (
          <div className="card-default">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4rem"
              height="4rem"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M216 72h-35.08c.39-.33.79-.65 1.17-1A29.53 29.53 0 0 0 192 49.57A32.62 32.62 0 0 0 158.44 16A29.53 29.53 0 0 0 137 25.91a55 55 0 0 0-9 14.48a55 55 0 0 0-9-14.48A29.53 29.53 0 0 0 97.56 16A32.62 32.62 0 0 0 64 49.57A29.53 29.53 0 0 0 73.91 71c.38.33.78.65 1.17 1H40a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-64a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m-67-35.49a13.7 13.7 0 0 1 10-4.5h.49A16.62 16.62 0 0 1 176 49.08a13.7 13.7 0 0 1-4.5 10c-9.49 8.4-25.24 11.36-35 12.4c1.2-10.59 4.5-25.98 12.5-34.97m-64.09.36A16.63 16.63 0 0 1 96.59 32h.49a13.7 13.7 0 0 1 10 4.5c8.39 9.48 11.35 25.2 12.39 34.92c-9.72-1-25.44-4-34.92-12.39a13.7 13.7 0 0 1-4.5-10a16.6 16.6 0 0 1 4.82-12.16ZM40 88h80v32H40Zm16 48h64v64H56Zm144 64h-64v-64h64Zm16-80h-80V88h80z"
              />
            </svg>
            <p>Search your Gif in {service}</p>
          </div>
        )}
      </main>
      <footer className="absolute bottom-0 left-0 right-0 mx-auto">
        <p className="text-center text-xs py-3 text-[var(--text-color-primary)]">
          Made with ❤️ by{" "}
          <a
            href="https://x.com/danielmosvich"
            target="_blank"
            className="font-semibold"
          >
            DanielMosvich
          </a>
        </p>
      </footer>
      <div className="fixed left-0 top-0 z-[-10] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,158,0.5),#2b2d31)]"></div>
    </>
  );
};

export default GifExpertApp;
